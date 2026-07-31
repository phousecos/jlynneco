"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

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

// Reads the reduced-motion preference without setting state inside an effect.
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
    const duration = 1200;
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

const R = 54;
const CIRC = 2 * Math.PI * R;

function RingStat({
  stat,
  run,
  reduced,
}: {
  stat: Stat;
  run: boolean;
  reduced: boolean;
}) {
  // Percentages fill to their value; a dollar magnitude fills the ring.
  const fill = stat.suffix === "%" ? stat.value : 100;
  const filled = run || reduced;
  const offset = filled ? CIRC * (1 - fill / 100) : CIRC;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40 sm:h-44 sm:w-44">
        <svg viewBox="0 0 120 120" aria-hidden className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            strokeWidth="7"
            stroke="currentColor"
            className="text-brand-paper/15"
          />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            stroke="currentColor"
            className="text-brand-tertiary"
            style={{
              strokeDasharray: CIRC,
              strokeDashoffset: offset,
              transition: reduced
                ? "none"
                : "stroke-dashoffset 1.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-display-hero text-4xl leading-none text-brand-paper sm:text-5xl">
            {stat.prefix ?? ""}
            {reduced ? stat.value : <CountUp value={stat.value} run={run} />}
            {stat.suffix ?? ""}
          </span>
        </div>
      </div>
      <p className="mt-5 max-w-[15rem] text-[0.95rem] leading-relaxed text-brand-paper/80">
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
  );
}

export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  const reduced = useReducedMotion();

  // Start the count-up and ring fill when the row scrolls into view.
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
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid gap-12 sm:grid-cols-3 sm:gap-8"
    >
      {stats.map((stat) => (
        <RingStat key={stat.label} stat={stat} run={run} reduced={reduced} />
      ))}
    </div>
  );
}
