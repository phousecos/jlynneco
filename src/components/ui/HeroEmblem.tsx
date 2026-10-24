import { clsx } from "@/lib/clsx";

// Deck palettes: the dark-slide version (navy disc, gold ring, royal bars) and
// the blue-slide version (lighter disc, pale gold ring, deep bars). Colors not
// in the shared preset are kept literal.
const palettes = {
  ink: {
    disc: "#1B2A63",
    ring: "rgb(var(--brand-secondary-rgb))",
    ringOpacity: 1,
    bar1: "rgb(var(--brand-primary-rgb))",
    bar2: "#244CCC",
  },
  blue: {
    disc: "#3A66EA",
    ring: "#F3D77A",
    ringOpacity: 0.6,
    bar1: "#1A3A9E",
    bar2: "#1A3A9E",
  },
};

/**
 * The circle-and-bars device from the company deck: a disc with a fine ring
 * and two bold bars dropping from the top edge. Bleeds off the top-right
 * corner as a decorative texture. Drawn as SVG (crisp at any size) and
 * aria-hidden. Geometry is measured from the deck artwork; the viewBox is the
 * visible crop, so the disc's top and right edges run off the frame on purpose.
 *
 * `variant="ink"` sits on the dark hero ground (hidden below `lg`);
 * `variant="blue"` sits on the royal-blue closing bands, smaller and hidden
 * below `xl` so it clears their centered copy.
 *
 * Requires an ancestor with `relative isolate overflow-hidden`.
 */
export function HeroEmblem({
  variant = "ink",
  className,
}: {
  variant?: "ink" | "blue";
  className?: string;
}) {
  const c = palettes[variant];
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1441 1668"
      style={{
        width:
          variant === "blue"
            ? "clamp(14rem, 22vw, 26rem)"
            : "clamp(20rem, 32vw, 38rem)",
      }}
      className={clsx(
        "pointer-events-none absolute right-0 top-0 -z-10 hidden h-auto select-none",
        variant === "blue" ? "xl:block" : "lg:block",
        className,
      )}
    >
      <circle cx="1062" cy="720" r="948" fill={c.disc} />
      <circle
        cx="1062"
        cy="720"
        r="834"
        fill="none"
        stroke={c.ring}
        strokeOpacity={c.ringOpacity}
        strokeWidth="5"
      />
      <rect x="816" y="0" width="118" height="1552" fill={c.bar1} />
      <rect x="1062" y="0" width="74" height="1098" fill={c.bar2} />
    </svg>
  );
}
