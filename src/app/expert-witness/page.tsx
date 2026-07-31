import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";
import { site, leadership, credentials } from "@/content/site";

export const metadata: Metadata = {
  title: "Expert Witness",
  description:
    "Independent expert analysis of enterprise transformation and technology program failures: case review, expert reports, depositions, and trial testimony for counsel.",
};

// The matters where the analysis applies.
const caseTypes = [
  "ERP failures",
  "Digital transformation",
  "Governance failures",
  "Vendor disputes",
  "Executive decision-making",
  "Technology program failures",
  "Public-sector modernization",
];

// The credibility that anchors the testimony.
const credibility = [
  {
    title: "Background",
    body: "Twenty-five years inside enterprise IT, through the implementations that held and the ones that didn't.",
  },
  {
    title: "Research",
    body: "A standing research program on why ERP and transformation programs fail.",
  },
  {
    title: "The Transformidable Governance Method™",
    body: "A structured, research-informed governance framework that anchors the analysis.",
    href: "/transformidable-governance-method",
  },
  {
    title: "Published work",
    body: "A published book that puts the thesis on record.",
  },
  {
    title: "Governance mechanisms research",
    body: "Ongoing research into the governance mechanisms that determine transformation outcomes.",
  },
];

// How the firm supports counsel.
const services = [
  {
    title: "Case review",
    body: "An independent read of the matter and its technical merits.",
  },
  {
    title: "Expert reports",
    body: "Written opinions grounded in evidence and built to withstand scrutiny.",
  },
  {
    title: "Depositions",
    body: "Testimony under examination, clearly reasoned and defensible.",
  },
  {
    title: "Trial testimony",
    body: "A clear, credible explanation of what happened for the trier of fact.",
  },
  {
    title: "Litigation consulting",
    body: "Behind-the-scenes analysis and strategy support for counsel.",
  },
  {
    title: "Independent technical analysis",
    body: "Objective evaluation of how and why a program failed.",
  },
];

export default function ExpertWitnessPage() {
  const principal = leadership[0];

  return (
    <>
      <PageHero
        eyebrow="Expert Witness"
        title={
          <>
            Independent expert analysis when transformation becomes a{" "}
            <em className="not-italic text-brand-secondary">dispute</em>.
          </>
        }
        lede="When an enterprise transformation or technology program fails and the matter is contested, leadership and counsel need an expert who can explain what happened, and why, clearly and credibly."
      >
        <CTALink href={site.discoveryCall} variant="onDark">
          Discuss a matter
        </CTALink>
      </PageHero>

      {/* What cases — paper grid. */}
      <Section ground="paper">
        <Eyebrow>What cases</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Where the analysis applies.
        </h2>
        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseTypes.map((caseType) => (
            <li
              key={caseType}
              className="flex items-center gap-3 border-b border-brand-ink/10 pb-4 text-brand-ink/85"
            >
              <span aria-hidden className="text-brand-secondary">
                &bull;
              </span>
              <span>{caseType}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Why you — the credibility, dark ground. */}
      <Section ground="deep">
        <Eyebrow>Why retain the firm</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Judgment that holds up under cross-examination.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-paper/80">
          {principal.bio}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border border-brand-paper/15 p-7"
            >
              <h3 className="font-display text-lg leading-snug text-brand-paper">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-brand-paper/75">
                {item.body}
              </p>
              {item.href && (
                <CTALink
                  href={item.href}
                  variant="ghostOnDark"
                  className="mt-5"
                >
                  Explore the method →
                </CTALink>
              )}
            </div>
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-paper/15 pt-8">
          {credentials.map((c) => (
            <li
              key={c.label}
              className="font-mono text-xs uppercase tracking-wider text-brand-paper/60"
            >
              {c.label}
            </li>
          ))}
        </ul>
      </Section>

      {/* Services — paper grid. */}
      <Section ground="paper">
        <Eyebrow>Services</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          How the firm supports counsel.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden border border-brand-ink/12 bg-brand-ink/12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-brand-paper p-7">
              <h3 className="font-display text-lg leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-ink/75">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Retain the firm</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            When a failure becomes a matter.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            Bring the analysis in early. The sooner the record is understood,
            the stronger the position.
          </p>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Discuss a matter
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
