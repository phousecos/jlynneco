"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "@/lib/clsx";

/**
 * The one restrained motion: a single scroll-reveal, used on the exhibits.
 * Respects prefers-reduced-motion (handled in CSS) and reveals once.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      // No observer support: reveal on the next frame so content is never
      // left hidden (avoids a synchronous setState inside the effect body).
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref typing across the union of allowed tags
      ref={ref}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={clsx("reveal", className)}
    >
      {children}
    </Tag>
  );
}
