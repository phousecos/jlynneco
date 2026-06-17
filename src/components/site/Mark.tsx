import type { CSSProperties } from "react";

/**
 * The firm mark — gold emblem, recurring as the signature throughout the site.
 *
 * PLACEHOLDER GEOMETRY: a dignified negative-space emblem standing in for the
 * production elephant/bull mark (patience + drive). It is intentionally
 * abstract and swappable — replace the <path> data with the final artwork and
 * every usage updates. Tone is set: gold (Aurum), restrained, evidence-grade.
 */
export function Mark({
  size = 40,
  className,
  title = "J. Lynne & Co.",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  const style: CSSProperties = { width: size, height: size };
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* Ring */}
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" />
      {/* Negative-space form: two rising curves (horns/tusks) cradling a mass —
          patience grounded, drive rising. */}
      <path
        d="M20 46c0-9 3-15 12-15s12 6 12 15"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <path
        d="M24 31c-4-4-5-9-3-14M40 31c4-4 5-9 3-14"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <circle cx="32" cy="34" r="3" fill="currentColor" />
    </svg>
  );
}
