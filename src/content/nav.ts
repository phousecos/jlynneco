// Primary navigation for the Executive Governance Advisory positioning.
//
// Only items with real destinations are shown. Knowledge Base and Insights
// are held until their pages ship; add them here the day their content lands.
// The header and footer both render from `primaryNav`. A NavItem with
// `children` renders as a dropdown; one with `href` as a plain link. An href
// to another site (http/https) opens in a new tab — see `isExternal`.
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Governance",
    children: [
      {
        label: "Executive Governance Advisory",
        href: "/executive-governance-advisory",
      },
      // Ordered by the governance lifecycle: before, during, ongoing,
      // material distress, after the event.
      {
        label: "Technology Governance Readiness",
        href: "/technology-governance-readiness",
      },
      {
        label: "AI Governance Policy & Decision Workshop",
        href: "/ai-governance",
      },
      {
        label: "Transformation Governance Health Review",
        href: "/transformation-governance-health-review",
      },
      { label: "Governance Watch", href: "/governance-watch" },
      {
        label: "Technology Transformation Recovery",
        href: "/technology-transformation-recovery",
      },
      {
        label: "Governance Reconstruction & Lessons Learned",
        href: "/governance-reconstruction",
      },
      {
        label: "Transformidable Governance Method™",
        href: "/transformidable-governance-method",
      },
    ],
  },
  {
    label: "Specialized Advisory",
    children: [
      {
        label: "Expert Witness & Litigation Support",
        href: "/expert-witness",
      },
      { label: "Private Equity", href: "/private-equity" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Financial Services", href: "/financial-services" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Higher Education", href: "/higher-education" },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "The Governance Files",
        href: "https://transformidablethinking.com/podcast",
      },
      { label: "Speaking", href: "/resources#speaking" },
      { label: "Transformidable", href: "https://transformidablethinking.com" },
      { label: "Webinars", href: "https://briefings.jlynne.co" },
      { label: "Publications", href: "/resources#publications" },
      { label: "Downloads", href: "/resources#downloads" },
    ],
  },
  { label: "About", href: "/about" },
];

// Links to other sites open in a new tab and render as a plain <a>.
export const isExternal = (href: string) => /^https?:\/\//.test(href);

// The primary contact CTA — rendered as the header pill and in the footer.
export const contactHref = "/contact";

// Legacy intake route. Still referenced by the older (now unlinked) service
// pages; kept so their CTAs continue to resolve.
export const engageHref = "/engage";
