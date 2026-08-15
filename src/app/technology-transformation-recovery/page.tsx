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
  title: "Technology Transformation Recovery",
  description:
    "Independent, governance-led intervention for consequential technology transformations that have moved beyond acceptable performance or risk thresholds.",
};

// The early governance signals of an initiative that is drifting.
const warningSigns = [
  "Decisions take longer than they should.",
  "Executive confidence begins to erode.",
  "Steering committees become status meetings.",
  "Vendors start controlling the narrative.",
  "Budgets continue to grow while progress slows.",
  "Risks surface late—or not at all.",
  "Teams lose confidence in the direction of the initiative.",
];

// The four phases of a recovery engagement.
const phases = [
  {
    title: "Establish the Evidence",
    body: "What is actually happening versus what has been reported. Current cost, schedule, scope, risk, vendor, technical, and organizational conditions.",
  },
  {
    title: "Diagnose Governance & Decision Conditions",
    body: "Where authority, accountability, assurance, information, escalation, vendor governance, change control, and intervention mechanisms are helping or constraining recovery.",
  },
  {
    title: "Present Decision Alternatives",
    body: "Recover as planned, rebaseline, rescope, restructure, replace a vendor, change governance, pause, or terminate. Recovery is not a predetermined conclusion.",
  },
  {
    title: "Govern the Recovery",
    body: "Decision rights, intervention authority, reporting, assurance, milestones, and the escalation thresholds leadership will use to determine whether recovery remains viable.",
  },
];

// What organizations emerge with after a successful recovery.
const outcomes = [
  "Clear executive accountability",
  "Improved governance discipline",
  "Better decision-making",
  "Stronger vendor relationships",
  "Increased executive visibility",
  "Renewed organizational confidence",
];

export default function TechnologyTransformationRecoveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Transformation Recovery"
        title={
          <>
            Project Recovery for{" "}
            <em className="not-italic text-brand-secondary">
              complex technology transformations
            </em>
            .
          </>
        }
        lede="When a technology transformation moves beyond acceptable performance or risk thresholds, recovery requires more than a revised project plan."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Transformation Recovery Conversation
        </CTALink>
      </PageHero>

      {/* The reframed question — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            J. Lynne &amp; Co. helps executive leadership establish the true
            condition of the initiative, identify the governance and decision
            factors affecting its trajectory, evaluate viable paths forward,
            and establish the governance required to execute the chosen
            recovery strategy.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            The objective is not to preserve a project at all costs.{" "}
            <span className="text-brand-primary">
              It is to help leadership make an evidence-based decision about
              what should happen next—and govern that decision effectively.
            </span>
          </p>
        </div>
      </Section>

      {/* Recognize the warning signs — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Recognize the warning signs</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Most struggling initiatives don&rsquo;t fail overnight. They drift.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-brand-paper/55">Leadership may notice</p>
            <ul className="mt-5 divide-y divide-brand-paper/10 border-y border-brand-paper/10">
              {warningSigns.map((sign) => (
                <li key={sign} className="flex gap-3 py-3.5 text-brand-paper/85">
                  <span aria-hidden className="text-brand-secondary">
                    &bull;
                  </span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-brand-paper/80 lg:self-center">
            These are governance signals. The earlier they are recognized,{" "}
            <span className="text-brand-tertiary">
              the greater the opportunity for successful recovery.
            </span>
          </p>
        </div>
      </Section>

      {/* Our approach — mist band, reframes the first question asked. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            The first question isn&rsquo;t &ldquo;how do we get back on
            schedule.&rdquo;
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
            <p>
              It is: should this project be recovered, and if so, what
              governance, decisions, controls, and interventions are required
              to establish a viable path forward? Sometimes the right decision
              is not to recover the existing project—the business case and
              changed circumstances need to be reconsidered.
            </p>
            <p className="font-display text-2xl leading-snug text-brand-ink">
              Our focus is not assigning blame. Our focus is restoring
              leadership&rsquo;s ability to govern the initiative effectively.
            </p>
          </div>
        </div>
      </section>

      {/* The four phases — paper grid. */}
      <Section ground="paper">
        <Eyebrow>How a recovery engagement runs</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Four phases, from evidence to governed recovery.
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

        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          We can support implementation without becoming the project manager.
          Our role is to establish the governance and decisions that make
          recovery viable—not to take over delivery.
        </p>
      </Section>

      {/* What success looks like — dark ground. */}
      <Section ground="deep">
        <Eyebrow>What success looks like</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Successful recovery is not simply getting a project back on schedule.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-paper/80">
          It means restoring leadership confidence, strengthening governance,
          improving decision-making, and creating the conditions necessary for
          lasting business outcomes. Organizations emerge with:
        </p>

        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {outcomes.map((item) => (
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
        prompt="Preparing for your next transformation?"
        label="Start with Technology Governance Readiness"
        href="/technology-governance-readiness"
      />

      {/* Begin the recovery — flagship blue closing. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Begin the recovery</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Transformation challenges do not resolve themselves.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            The sooner governance issues are identified, the more options
            leadership has. If your organization is experiencing uncertainty,
            declining confidence, or increasing complexity, let&rsquo;s begin the
            conversation.
          </p>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule a Transformation Recovery Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
