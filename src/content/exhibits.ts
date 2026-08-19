// The signature: proof rendered as case exhibits. This data feeds the exhibit
// strips on Home, Firm, and Expert Witness.
//
// PLACEHOLDER COPY — realistic stand-ins to be swapped for real case detail,
// publication links, and named testimonials. Structure is production-ready.

export type ExhibitKind = "case" | "outcome" | "publication" | "testimonial";

export type Exhibit = {
  id: string; // exhibit number, e.g. "01"
  kind: ExhibitKind;
  label: string; // mono header line beside EXHIBIT NN
  headline: string; // the claim, set in display serif
  body: string; // the substance — diagnosis/judgment, not a deliverables list
  metric?: { value: string; unit: string }; // optional anchored figure
  source?: string; // attribution / venue / role
  // Which surfaces this exhibit may appear on.
  surfaces: Array<"home" | "firm" | "expert-witness">;
};

export const exhibits: Exhibit[] = [
  {
    id: "01",
    kind: "case",
    label: "Enterprise ERP, public university system",
    headline: "An $88M implementation steered back from the brink.",
    body: "A multi-year ERP program drifting toward the failure pattern: scope sprawl, governance theater, a go-live no one would own. Brought in to read the program honestly, name what the steering committee would not, and re-sequence the path to a defensible go-live.",
    metric: { value: "$88M", unit: "program under direct stewardship" },
    source: "Higher education · multi-campus",
    surfaces: ["home", "firm", "expert-witness"],
  },
  {
    id: "02",
    kind: "outcome",
    label: "Pre-implementation strategy",
    headline: "Told the client they were not ready, and why.",
    body: "A readiness diagnosis ahead of a planned ERP selection found the organization unprepared to absorb the change. The recommendation was to stop, not to proceed. The harder call, and the one that protected the eventual investment.",
    metric: { value: "18 mo", unit: "of avoidable rework averted" },
    source: "Outcome · pre-implementation",
    surfaces: ["home", "firm"],
  },
  {
    id: "03",
    kind: "outcome",
    label: "SACS reaffirmation readiness",
    headline: "Accreditation reaffirmation cleared on the cycle clock.",
    body: "An accreditation-readiness engagement run against the reaffirmation calendar: the technology and data evidence assembled, gaps closed, and the institution's narrative made defensible before the visiting committee arrived.",
    metric: { value: "0", unit: "findings on the technology standards" },
    source: "Outcome · higher education",
    surfaces: ["home"],
  },
  {
    id: "04",
    kind: "publication",
    label: "Book, enterprise transformation & ERP failure",
    headline: "The research program, in print.",
    body: "A book-length argument on why enterprise transformations and ERP programs fail, and what judgment across the full lifecycle changes. The thesis the firm advises from, and the foundation of the expert-witness work.",
    source: "Author · published work",
    surfaces: ["home", "firm", "expert-witness"],
  },
  {
    id: "05",
    kind: "publication",
    label: "ERP-failure research program",
    headline: "A standing body of work on why programs fail.",
    body: "Ongoing research into the failure patterns of large implementations: the same forensic muscle applied in audits and on the stand. Peer-facing, citable, and growing.",
    source: "Research · ongoing",
    surfaces: ["firm", "expert-witness"],
  },
  {
    id: "06",
    kind: "testimonial",
    label: "General counsel, litigation matter",
    headline: "“The analysis held up under cross. That is rare.”",
    body: "A reference from counsel on the clarity and durability of the firm's failure analysis in a contested matter. Attributed reference available under engagement.",
    source: "Reference · counsel (on file)",
    surfaces: ["expert-witness"],
  },
  {
    id: "07",
    kind: "testimonial",
    label: "Provost, accreditation engagement",
    headline: "“They saw what our own teams could not.”",
    body: "A reference on the readiness audit ahead of reaffirmation: the value of an outside forensic read on the institution's evidence. Attributed reference available under engagement.",
    source: "Reference · higher education (on file)",
    surfaces: ["firm"],
  },
];

export function exhibitsFor(
  surface: "home" | "firm" | "expert-witness",
  limit?: number,
): Exhibit[] {
  const matched = exhibits.filter((e) => e.surfaces.includes(surface));
  return typeof limit === "number" ? matched.slice(0, limit) : matched;
}
