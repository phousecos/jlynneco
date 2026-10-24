import { clsx } from "@/lib/clsx";

/**
 * The circle-and-bars device from the company deck: a deep navy disc with a
 * fine gold ring and two bold royal-blue bars dropping from the top edge.
 * Bleeds off the top-right corner as a decorative hero texture. Drawn as SVG
 * (crisp at any size), aria-hidden, and hidden below `lg` where there isn't
 * room. Geometry is measured from the deck artwork; the viewBox is the visible
 * crop, so the disc's top and right edges run off the frame on purpose.
 *
 * Requires an ancestor with `relative isolate overflow-hidden`.
 */
export function HeroEmblem({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1441 1668"
      style={{ width: "clamp(20rem, 32vw, 38rem)" }}
      className={clsx(
        "pointer-events-none absolute right-0 top-0 hidden h-auto select-none lg:block",
        className,
      )}
    >
      {/* Deck navy and the darker second bar aren't brand tokens; kept literal. */}
      <circle cx="1062" cy="720" r="948" fill="#1B2A63" />
      <circle
        cx="1062"
        cy="720"
        r="834"
        fill="none"
        stroke="rgb(var(--brand-secondary-rgb))"
        strokeWidth="5"
      />
      <rect x="816" y="0" width="118" height="1552" fill="rgb(var(--brand-primary-rgb))" />
      <rect x="1062" y="0" width="74" height="1098" fill="#244CCC" />
    </svg>
  );
}
