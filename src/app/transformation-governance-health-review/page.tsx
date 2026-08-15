import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { IconCheck } from "@/components/ui/icons";
import { NextStep } from "@/components/ui/NextStep";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Transformation Governance Health Review",
  description:
    "Independent confidence in the governance surrounding a major ERP, cloud, AI, or technology transformation already underway.",
};

// What the review examines while the initiative is in flight.
const scope = [
  "Governance structure and decision rights",
  "Executive reporting and information flow",
  "Risk identification and escalation",
  "Independent assurance",
  "Vendor governance",
  "Change governance",
  "Intervention authority",
];

// The four phases of a Health Review engagement.
const phases = [
  {
    title: "Document Review",
    body: "Charters, reporting, risk registers, vendor agreements, and steering materials against what governance is actually doing.",
  },
  {
    title: "Selected Interviews",
    body: "Executive sponsors, steering committee members, and program leadership, to understand how decisions are actually being made.",
  },
  {
    title: "Governance Evaluation",
    body: "Structure, decision rights, reporting, escalation, vendor governance, change governance, and intervention authority, assessed against the conditions the initiative actually presents.",
  },
  {
    title: "Executive Briefing",
    body: "Findings and prioritized recommendations delivered to executive leadership and, where scoped, the board.",
  },
];

export default function TransformationGovernanceHealthReviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Transformation Governance Health Review"
        title={
          <>
            <em className="not-italic text-brand-secondary">
              Independent confidence
            </em>{" "}
            in the governance around a live transformation.
          </>
        }
        lede="A major ERP, cloud, AI, or technology transformation is underway. Before leadership relies on it, the governance surrounding it deserves an independent look."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Health Review Conversation
        </CTALink>
      </PageHero>

      {/* The executive question — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            Status reports say the initiative is on track. Leadership still
            asks the harder question underneath them.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            Is the governance system capable of{" "}
            <span className="text-brand-primary">
              recognizing, escalating, deciding, and responding
            </span>{" "}
            to conditions that could materially affect the transformation?
          </p>
        </div>
      </Section>

      {/* When to use it — dark ground, distinguishes from Readiness/Recovery. */}
      <Section ground="deep">
        <Eyebrow>When to use it</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Not every transformation needs recovery. Most need confirmation.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <p className="text-lg leading-relaxed text-brand-paper/80">
            A Health Review is not a diagnosis of trouble. It is an
            independent check, run while an initiative is proceeding normally,
            that confirms the governance surrounding it can be trusted to
            catch problems early, escalate them appropriately, and support the
            decisions leadership will eventually have to make.
          </p>
          <p className="text-lg leading-relaxed text-brand-paper/80">
            If conditions have already moved beyond acceptable performance or
            risk thresholds, the more direct engagement is{" "}
            <span className="text-brand-tertiary">
              Technology Transformation Recovery
            </span>
            . The Health Review is the earlier, lower-friction check.
          </p>
        </div>
      </Section>

      {/* What we review — mist band. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>What we review</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Every review examines the mechanisms that govern the initiative,
            not the initiative itself.
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {scope.map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-ink/85">
                <span
                  aria-hidden
                  className="h-4 w-4 shrink-0 rounded-[3px] border border-brand-primary/60"
                />
                <span className="text-[0.95rem] leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How a review runs — paper grid. */}
      <Section ground="paper">
        <Eyebrow>How a review runs</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Four phases, scoped to the size and stakes of the transformation.
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {phases.map((phase, i) => (
            <div key={phase.title} className="border-t-2 border-brand-primary/30 pt-4">
              <span className="font-mono text-sm text-brand-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-2 text-xl leading-snug">
                {phase.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-ink/75">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Deliverable — dark ground. */}
      <Section ground="deep">
        <Eyebrow>What you&apos;ll receive</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          A Transformation Governance Health Report and an executive briefing.
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {[
            "Transformation Governance Health Report",
            "Executive and board briefing",
            "Governance strengths and gaps",
            "Priority recommendations",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-brand-paper/10 pb-4 text-brand-paper/90"
            >
              <IconCheck className="h-5 w-5 shrink-0 text-brand-tertiary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <NextStep
        prompt="Conditions already deteriorating?"
        label="Explore Technology Transformation Recovery"
        href="/technology-transformation-recovery"
      />

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Confirm, don&apos;t assume</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Confidence should rest on evidence, not on status reports alone.
          </h2>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule a Health Review Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
