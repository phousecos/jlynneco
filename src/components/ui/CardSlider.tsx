"use client";

import { useRef } from "react";
import { Container } from "./Container";

// A full-width horizontal card slider. The track scroll-snaps and hides its
// scrollbar; prev/next buttons nudge it by ~80% of the visible width. Cards are
// passed as children and set their own widths (shrink-0 w-[...]). Native
// scroll/drag/swipe still works everywhere; the buttons are a desktop
// affordance.
export function CardSlider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="mt-12">
      <div
        ref={trackRef}
        className="slider-pad-l flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 pr-6 sm:pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <Container className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/25 text-brand-ink transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-brand-paper"
        >
          <span aria-hidden>&larr;</span>
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/25 text-brand-ink transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-brand-paper"
        >
          <span aria-hidden>&rarr;</span>
        </button>
      </Container>
    </div>
  );
}
