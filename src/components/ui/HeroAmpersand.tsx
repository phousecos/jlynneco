import { clsx } from "@/lib/clsx";

/**
 * Oversized "&" lifted from "J. Lynne & Co." — a decorative hero texture that
 * bleeds off the right margin. Not the point, just enough interest. Rendered as
 * a real glyph in the display face (crisp at any size), mid-strength tone-on-
 * tone blue, aria-hidden, and hidden below `lg` where there isn't room.
 *
 * Requires an ancestor with `relative isolate overflow-hidden`.
 */
export function HeroAmpersand({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      style={{ fontSize: "clamp(26rem, 44vw, 58rem)" }}
      className={clsx(
        "pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2",
        "select-none font-display font-display-hero leading-none text-brand-primary/40 lg:block",
        className,
      )}
    >
      &amp;
    </span>
  );
}
