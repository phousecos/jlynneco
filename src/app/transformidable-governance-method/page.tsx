import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "The Transformidable Governance Method™",
  description:
    "A structured, research-informed framework that helps leadership establish, strengthen, and sustain governance throughout organizational transformation.",
};

// The five stages of the Transformidable Governance Method.
const methodStages = [
  {
    n: "1",
    title: "Assess",
    body: "We begin by understanding how your organization currently governs transformation. We evaluate governance maturity, executive alignment, decision rights, organizational readiness, vendor relationships, and existing governance practices to establish a clear baseline.",
  },
  {
    n: "2",
    title: "Align",
    body: "Transformation succeeds when leadership shares a common understanding of objectives, accountability, and success. We help executive sponsors clarify governance responsibilities, align stakeholders, and establish decision-making structures that support strategic outcomes.",
  },
  {
    n: "3",
    title: "Govern",
    body: "Effective governance is an active leadership discipline. We support executive teams through steering committee participation, governance reviews, executive coaching, vendor oversight, and independent guidance that strengthens accountability throughout the initiative.",
  },
  {
    n: "4",
    title: "Measure",
    body: "Organizations cannot improve what they cannot see. Through governance reviews, executive reporting, and governance analytics, leadership gains objective visibility into emerging risks, governance effectiveness, and organizational readiness before issues become crises.",
  },
  {
    n: "5",
    title: "Improve",
    body: "Governance is never static. We help organizations continuously strengthen governance capabilities, institutionalize lessons learned, and build leadership disciplines that endure long after individual projects conclude.",
  },
];

export default function TransformidableGovernanceMethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Our method"
        title={
          <>
            The Transformidable Governance{" "}
            <em className="not-italic text-brand-secondary">Method</em>™
          </>
        }
        lede="A structured, research-informed framework that helps leadership establish, strengthen, and sustain governance throughout organizational transformation."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule an Executive Conversation
        </CTALink>
      </PageHero>

      <Section ground="paper">
        <p className="max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          Every Executive Governance Advisory engagement follows the
          Transformidable Governance Method™, and it runs through the same five
          stages whether we are assessing readiness or governing a live
          transformation.
        </p>

        <p className="mt-10 text-lg leading-relaxed text-brand-ink/70">
          The methodology is built on a simple belief:
        </p>
        <p className="mt-4 max-w-3xl border-l-2 border-brand-secondary pl-6 font-display text-2xl leading-snug sm:text-3xl">
          Successful transformation is not the result of better technology.{" "}
          <span className="text-brand-primary">
            It is the result of better leadership, stronger governance, and
            disciplined execution.
          </span>
        </p>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          While every organization is unique, every engagement progresses
          through five stages.
        </p>

        <div className="mt-12 border-t border-brand-ink/12">
          {methodStages.map((stage) => (
            <div
              key={stage.n}
              className="grid gap-3 border-b border-brand-ink/12 py-8 md:grid-cols-[5rem_1fr] md:gap-10 md:py-10"
            >
              <span className="font-display text-4xl leading-none text-brand-primary sm:text-5xl">
                {stage.n}
              </span>
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl leading-snug">
                  {stage.title}
                </h2>
                <p className="mt-3 leading-relaxed text-brand-ink/80">
                  {stage.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl font-display text-xl leading-snug sm:text-2xl">
          The Transformidable Governance Method™ transforms governance from a
          collection of meetings and reports into a leadership system that
          improves organizational decision-making.
        </p>
      </Section>

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Put the method to work</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Governance that improves how leadership decides.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule an Executive Conversation
            </CTALink>
            <CTALink href="/technology-governance-readiness" variant="onDark">
              Start with a readiness engagement
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
