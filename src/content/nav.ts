// Primary navigation for the Executive Governance Advisory positioning.
//
// Governance Assessments and Governance Failure are intentionally HELD until
// their pages ship — their routes are reserved below. Re-add them to
// `primaryNav` (in this order) the day their content lands, and nothing else
// needs to change: the header and footer both render from `primaryNav`.
export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Executive Governance Advisory", href: "/executive-governance-advisory" },
  { label: "About", href: "/about" },
];

// Reserved — held until content arrives:
//   { label: "Governance Assessments", href: "/governance-assessments" },
//   { label: "Governance Failure",     href: "/governance-failure" },

// The primary contact CTA — rendered as the header pill and in the footer.
export const contactHref = "/contact";

// Legacy intake route. Still referenced by the older (now unlinked) service
// pages; kept so their CTAs continue to resolve.
export const engageHref = "/engage";
