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
  title: "Governance Watch",
  description:
    "Ongoing independent visibility into the governance conditions surrounding a high-consequence technology transformation, deployment, or environment.",
};

// What Governance Watch monitors on a recurring cadence.
const monitors = [
  "Periodic evidence review",
  "Governance-signal monitoring",
  "Risk and escalation review",
  "Decision tracking",
  "Vendor observations",
  "Exceptions",
  "Executive discussions",
];

// What a Governance Watch relationship delivers.
const deliverables = [
  "Monthly Governance Watch Brief",
  "Quarterly governance assessment",
  "Material governance alerts",
  "Executive and board briefings as scoped",
];

export default function GovernanceWatchPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance Watch"
        title={
          <>
            Ongoing{" "}
            <em className="not-italic text-brand-secondary">
              independent visibility
            </em>
            , without stepping into delivery.
          </>
        }
        lede="High-consequence transformations don't hold still. Governance Watch gives leadership a standing, independent view of the governance conditions around them, so nothing material goes unnoticed between formal reviews."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Governance Watch Conversation
        </CTALink>
      </PageHero>

      {/* The executive question — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            A single assessment captures a moment. A transformation runs for
            months, sometimes years, and the governance conditions around it
            shift throughout.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            What has changed in the governance environment,{" "}
            <span className="text-brand-primary">
              what requires attention, and what decisions are approaching?
            </span>
          </p>
        </div>
      </Section>

      {/* When to use it — dark ground. */}
      <Section ground="deep">
        <Eyebrow>When to use it</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          For leadership that wants a standing, independent line of sight.
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-brand-paper/80">
          Leadership wants ongoing independent visibility into governance
          conditions around a high-consequence transformation, deployment, or
          technology environment—without adding another layer of project
          management or delivery oversight.
        </p>
      </Section>

      {/* What we monitor — mist band. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>What we monitor</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            A recurring, structured review, not a standing meeting.
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {monitors.map((item) => (
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

      {/* What you'll receive — paper grid. */}
      <Section ground="paper">
        <Eyebrow>What you&apos;ll receive</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          A defined cadence of evidence and executive-level insight.
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {deliverables.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-brand-ink/10 pb-4 text-brand-ink/85"
            >
              <IconCheck className="h-5 w-5 shrink-0 text-brand-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* The relationship — dark ground. */}
      <Section ground="deep">
        <Eyebrow>The relationship</Eyebrow>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-paper/80">
          Governance Watch is structured as a standing advisory relationship
          with a defined cadence and scope, not a bounded project. It gives
          leadership a consistent, independent read on governance health
          between the moments that prompt a full Readiness engagement, a
          Health Review, or, if conditions warrant it, Recovery.
        </p>
        <p className="mt-6 max-w-3xl border-l-2 border-brand-secondary pl-6 font-display text-2xl leading-snug text-brand-paper sm:text-3xl">
          The goal is not another status meeting.{" "}
          <span className="text-brand-tertiary">
            It is an early, honest read on governance conditions leadership
            can act on.
          </span>
        </p>
      </Section>

      <NextStep
        prompt="Not sure where to start?"
        label="Learn about Technology Governance Readiness"
        href="/technology-governance-readiness"
      />

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Stay ahead of it</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            The earlier a governance shift is visible, the more options
            leadership has.
          </h2>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule a Governance Watch Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
