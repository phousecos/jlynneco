// Single source of truth for firm-level facts, the ladder, and legal entities.
// Brand architecture is locked (see build spec §1): person → firm → product.

export const site = {
  name: "J. Lynne & Co.",
  shortName: "J. Lynne & Co.",
  tagline: "The patience to see it. The drive to move it.",
  // Long-term firm home — its own address, never a redirect into JerriBland.com.
  url: "https://jlynneandco.com",
  // Where JerriBland.com's "Work With Me" link lands.
  personSite: {
    label: "JerriBland.com",
    href: "https://jerribland.com",
  },
  cioAdvisra: {
    label: "CIO Advisra",
    href: "https://cioadvisra.com",
  },
};

// Credibility row — restrained, active, no filler.
export const credentials = [
  { label: "Ed.D." },
  { label: "$88M implementation" },
  { label: "Author" },
  { label: "Expert witness" },
];

// The ladder (apex → floor). The site leads from the top.
export type LadderRung = {
  rank: number;
  exhibit: string;
  title: string;
  href: string;
  blurb: string;
  // Visual altitude: apex doors lead; the floor sits lower by design.
  altitude: "apex" | "product" | "floor";
};

export const ladder: LadderRung[] = [
  {
    rank: 1,
    exhibit: "01",
    title: "Expert Witness",
    href: "/expert-witness",
    blurb:
      "ERP and implementation-failure analysis, standard-of-care, causation. The highest-trust work, sold on judgment that holds up under cross.",
    altitude: "apex",
  },
  {
    rank: 2,
    exhibit: "02",
    title: "Advisory & Audits",
    href: "/advisory",
    blurb:
      "Judgment across the full lifecycle — before, during, and after. Pre-implementation strategy, audits including SACS readiness, and remediation.",
    altitude: "apex",
  },
  {
    rank: 3,
    exhibit: "03",
    title: "CIO Advisra",
    href: "/cio-advisra",
    blurb:
      "The firm's thinking, packaged. A productized six-pillar maturity assessment for the right-sized client.",
    altitude: "product",
  },
];

// Program Management — accountable, principal-led program leadership. (The
// `floor` altitude is an internal sequencing token only; copy never frames
// this as lesser or in-between work — see the spec's Voice & register rules.)
export const programRung: LadderRung = {
  rank: 4,
  exhibit: "04",
  title: "Program Management",
  href: "/program",
  blurb:
    "Accountable, principal-led ownership of delivery when a live implementation can't afford to fail — governance, sequencing, risk, and the hard calls. Made buyable by the PMO Command retainer.",
  altitude: "floor",
};

// Legal entities — Canady appears in invoicing and legal pages only, never
// marketing. Vaughan Group on legal pages per portfolio convention.
export const legal = {
  engagementEntity: "Canady",
  legalCounsel: "Vaughan Group",
};
