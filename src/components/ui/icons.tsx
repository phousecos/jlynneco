// Monoline icon set — small, stroke-based SVGs that inherit `currentColor`
// and a shared geometry (24px grid, 1.5 stroke, round joins). Purely
// decorative accents, so each is aria-hidden. Keep them simple: a few paths
// each, recognizable at ~24-28px.

type IconProps = { className?: string };

function Base({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/* ---- How we help ---- */

// Compass — advisory / guidance.
export function IconCompass({ className }: IconProps) {
  return (
    <Base className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
    </Base>
  );
}

// Clipboard with check — assessments.
export function IconClipboardCheck({ className }: IconProps) {
  return (
    <Base className={className}>
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <path d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9.5 13.5l2 2 3.5-3.5" />
    </Base>
  );
}

// Life buoy — recovery / stabilization.
export function IconLifeBuoy({ className }: IconProps) {
  return (
    <Base className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M4.9 4.9l4.6 4.6M14.5 14.5l4.6 4.6M19.1 4.9l-4.6 4.6M9.5 14.5l-4.6 4.6" />
    </Base>
  );
}

// Chip — technology leadership.
export function IconCpu({ className }: IconProps) {
  return (
    <Base className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 4v3M15 4v3M9 17v3M15 17v3M4 9h3M4 15h3M17 9h3M17 15h3" />
    </Base>
  );
}

/* ---- Who we serve ---- */

// Columned building — financial institutions.
export function IconBank({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4 9.5h16" />
      <path d="M6 10v9M10 10v9M14 10v9M18 10v9" />
      <path d="M3 20h18" />
    </Base>
  );
}

// Flag — government agencies.
export function IconFlag({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M6 21V4" />
      <path d="M6 4h12l-3 3.5 3 3.5H6" />
    </Base>
  );
}

// Cross — healthcare organizations.
export function IconHealthCross({ className }: IconProps) {
  return (
    <Base className={className}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 9v6M9 12h6" />
    </Base>
  );
}

// Heart — nonprofit organizations.
export function IconHeart({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M12 20.5C12 20.5 4.5 15.7 4.5 10.2A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7.5 2.2c0 5.5-7.5 10.3-7.5 10.3z" />
    </Base>
  );
}

// Office building — mid-market businesses.
export function IconBuilding({ className }: IconProps) {
  return (
    <Base className={className}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </Base>
  );
}

// Round table with seats — boards of directors.
export function IconRoundTable({ className }: IconProps) {
  return (
    <Base className={className}>
      <ellipse cx="12" cy="13" rx="8" ry="3.5" />
      <circle cx="12" cy="6" r="1.1" />
      <circle cx="5" cy="10.5" r="1.1" />
      <circle cx="19" cy="10.5" r="1.1" />
      <circle cx="6.5" cy="17.2" r="1.1" />
      <circle cx="17.5" cy="17.2" r="1.1" />
    </Base>
  );
}

// Group of people — executive leadership teams.
export function IconUsers({ className }: IconProps) {
  return (
    <Base className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.4a3 3 0 0 1 0 5.6" />
      <path d="M17 14.2a5.5 5.5 0 0 1 3.5 5.8" />
    </Base>
  );
}

// Check — deliverables / included items.
export function IconCheck({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M20 6 9 17l-5-5" />
    </Base>
  );
}

// Transformation (circular arrows) — CIOs and transformation sponsors.
export function IconTransform({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </Base>
  );
}

// Graduation cap — campuses & colleges.
export function IconGraduationCap({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
      <path d="M6.5 11.5v4.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.5" />
      <path d="M21.5 9.5v5.5" />
    </Base>
  );
}

// Flask — research organizations.
export function IconFlask({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M10 3h4" />
      <path d="M10.5 3v6.2L5.8 18a2 2 0 0 0 1.8 2.9h8.8a2 2 0 0 0 1.8-2.9l-4.7-8.8V3" />
      <path d="M7.8 15h8.4" />
    </Base>
  );
}

/* ---- Governance lifecycle ---- */

// Pulse line — Transformation Governance Health Review.
export function IconPulse({ className }: IconProps) {
  return (
    <Base className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 12h2.5l1.5-4 2.5 8 1.5-4H17" />
    </Base>
  );
}

// Four-point spark — AI Governance Policy & Decision Workshop.
export function IconSpark({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </Base>
  );
}

// Open eye — Governance Watch.
export function IconEye({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </Base>
  );
}

// Timeline with markers — Governance Reconstruction & Lessons-Learned Review.
export function IconTimeline({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M4 12h16" />
      <circle cx="6" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="18" cy="12" r="1.6" />
      <path d="M6 12V6M18 12v6" />
    </Base>
  );
}

/* ---- Financial services ---- */

// Overlapping circles — mergers, acquisitions, and charter conversions.
export function IconMerge({ className }: IconProps) {
  return (
    <Base className={className}>
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
    </Base>
  );
}

// Shield with a check — regulatory and examiner readiness.
export function IconShield({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M12 3.5 5.5 6.2v5.3c0 4.8 3.1 8 6.5 9.5 3.4-1.5 6.5-4.7 6.5-9.5V6.2Z" />
      <path d="M9 12.2l2 2 4-4" />
    </Base>
  );
}
