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
  // Booking link for discovery calls — used by every "Schedule a call" CTA.
  discoveryCall: "https://cal.com/jerribland/j.-lynne-meeting-request",
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

// Leadership — the founding principal, voiced as the firm. Names the principal
// prominently (a vetting buyer must see who stands behind the firm) but reads
// as the credential basis of the firm's authority, not an "About Me" story.
// Modeled as an array so it becomes a /leadership page the day there's a
// second name.
export type Principal = {
  name: string;
  role: string;
  initials: string; // monogram fallback if no headshot is present
  image?: string; // headshot in /public; falls back to the monogram if missing
  bio: string;
  links: { label: string; href: string }[];
};

export const leadership: Principal[] = [
  {
    name: "Jerri Bland, Ed.D.",
    role: "Founding Principal",
    initials: "JB",
    image: "/brand/jerri-bland.jpg",
    bio: "Twenty-five years inside enterprise IT — through the implementations that held and the ones that didn't. The firm's authority rests on that record: senior enterprise leadership, a standing research program on why ERP programs fail, and a published book that puts the thesis on record.",
    links: [
      { label: "Author & speaker — JerriBland.com", href: site.personSite.href },
      { label: "The full CV counsel vets", href: "/expert-witness" },
    ],
  },
];

// Legal entities — Canady appears in invoicing and legal pages only, never
// marketing. Vaughan Group on legal pages per portfolio convention.
export const legal = {
  engagementEntity: "Canady",
  legalCounsel: "Vaughan Group",
};
