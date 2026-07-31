// Primary navigation for the Executive Governance Advisory positioning.
//
// Only items with real destinations are shown. Resources (Knowledge Base,
// Podcast, Transformidable, Publications, Downloads) and Insights are held
// until their pages ship; add them here the day their content lands. The
// header and footer both render from `primaryNav`. A NavItem with `children`
// renders as a dropdown; one with `href` as a plain link.
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
      { label: "Governance Assessments", href: "/governance-assessments" },
      { label: "Project Recovery", href: "/project-recovery" },
      {
        label: "Transformidable Governance Method™",
        href: "/transformidable-governance-method",
      },
    ],
  },
  { label: "Expert Witness", href: "/expert-witness" },
  {
    label: "Resources",
    children: [
      { label: "Podcast", href: "/resources#podcast" },
      { label: "Transformidable", href: "/resources#transformidable" },
      { label: "Publications", href: "/resources#publications" },
      { label: "Downloads", href: "/resources#downloads" },
    ],
  },
  { label: "About", href: "/about" },
];

// The primary contact CTA — rendered as the header pill and in the footer.
export const contactHref = "/contact";

// Legacy intake route. Still referenced by the older (now unlinked) service
// pages; kept so their CTAs continue to resolve.
export const engageHref = "/engage";
