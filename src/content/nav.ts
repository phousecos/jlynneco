// Primary navigation. Order follows the ladder: apex doors first, the floor
// (Program) and product/handoff sit after Proof.
export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "The Firm", href: "/firm" },
  { label: "Expert Witness", href: "/expert-witness" },
  { label: "Advisory & Audits", href: "/advisory" },
  { label: "Program Management", href: "/program" },
  { label: "CIO Advisra", href: "/cio-advisra" },
];

export const engageHref = "/engage";
