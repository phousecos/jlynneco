// Primary navigation for the Executive Governance Advisory positioning.
//
// Governance Failure is intentionally HELD until its page ships — its route
// is reserved below. Re-add it to `primaryNav` (in this order) the day its
// content lands, and nothing else needs to change: the header and footer both
// render from `primaryNav`.
export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Executive Governance Advisory", href: "/executive-governance-advisory" },
  { label: "Governance Assessments", href: "/governance-assessments" },
  { label: "About", href: "/about" },
];

// Reserved — held until content arrives:
//   { label: "Governance Failure", href: "/governance-failure" },

// The primary contact CTA — rendered as the header pill and in the footer.
export const contactHref = "/contact";

// Legacy intake route. Still referenced by the older (now unlinked) service
// pages; kept so their CTAs continue to resolve.
export const engageHref = "/engage";
