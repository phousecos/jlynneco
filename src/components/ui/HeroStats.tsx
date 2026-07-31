"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { clsx } from "@/lib/clsx";

type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  source: { label: string; href: string };
};

// Sourced industry figures on the scale and risk of digital transformation.
const stats: Stat[] = [
  {
    prefix: "$",
    value: 2,
    suffix: "T",
    label: "spent on digital transformation worldwide every year.",
    source: {
      label: "Yahoo Finance",
      href: "https://finance.yahoo.com/sectors/technology/articles/global-spending-market-reach-usd-073300845.html",
    },
  },
  {
    value: 70,
    suffix: "%",
    label: "of transformations fall short of their goals.",
    source: {
      label: "BCG Platinion",
      href: "https://www.bcgplatinion.com/insights/why-70-of-transformations-miss-the-mark-and-how-to-fix-them",
    },
  },
  {
    value: 55,
    suffix: "%",
    label: "of ERP projects exceed their initial cost estimate.",
    source: {
      label: "Testhouse",
      href: "https://www.testhouse.net/blogs/55-of-erp-projects-exceed-budgets-heres-how-to-avoid-it/",
    },
  },
];

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

// Reads the reduced-motion preference from the media query without setting
// state inside an effect.
function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

// Counts from 0 to `value` with an ease-out once `run` is true.
function CountUp({ value, run }: { value: number; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const duration = 1100;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);
  return <>{n}</>;
}

export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  // Start the count-up when the row scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle the highlighted feature.
  useEffect(() => {
    if (!run || reduced) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % stats.length),
      2600,
    );
    return () => clearInterval(id);
  }, [run, reduced]);

  return (
    <div
      ref={ref}
      className="grid gap-px overflow-hidden border border-brand-paper/12 bg-brand-paper/12 sm:grid-cols-3"
    >
      {stats.map((stat, i) => {
        const isActive = i === active && !reduced;
        return (
          <div key={stat.label} className="bg-brand-ink px-6 py-9">
            <div
              className={clsx(
                "border-t-2 pt-5 transition-colors duration-500",
                isActive ? "border-brand-secondary" : "border-brand-paper/15",
              )}
            >
              <div
                className={clsx(
                  "font-display font-display-hero text-5xl leading-none transition-colors duration-500 sm:text-6xl",
                  isActive ? "text-brand-secondary" : "text-brand-paper",
                )}
              >
                {stat.prefix ?? ""}
                {reduced ? stat.value : <CountUp value={stat.value} run={run} />}
                {stat.suffix ?? ""}
              </div>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-brand-paper/70">
                {stat.label}
              </p>
              <a
                href={stat.source.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-wider text-brand-paper/40 transition-colors hover:text-brand-tertiary"
              >
                {stat.source.label}
                <span aria-hidden>&#8599;</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
