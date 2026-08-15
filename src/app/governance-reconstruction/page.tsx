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
  title: "Governance Reconstruction & Lessons-Learned Review",
  description:
    "An independent reconstruction of what was known, what was decided, and what should be learned after a significant transformation, incident, or event has occurred.",
};

// The questions a reconstruction answers.
const questions = [
  "What was known, and when?",
  "What decisions were made, and by whom?",
  "Who had authority over the outcome?",
  "What was escalated—and what wasn't?",
  "What interventions occurred, and when?",
  "What should the organization learn?",
];

// What a reconstruction engagement typically includes.
const scope = [
  {
    title: "Evidence Inventory",
    body: "Governance records, reporting, decisions, and correspondence relevant to the initiative or event.",
  },
  {
    title: "Chronology",
    body: "A clear, evidence-based timeline of what occurred and when.",
  },
  {
    title: "Governance Decision Reconstruction",
    body: "How authority, escalation, and intervention mechanisms functioned—or didn't—at each point along the timeline.",
  },
  {
    title: "Lessons & Recommendations",
    body: "Consequences, governance findings, and recommendations the organization can act on going forward.",
  },
];

export default function GovernanceReconstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance Reconstruction & Lessons-Learned Review"
        image="/research-hero.jpg"
        title="Understand what happened—and what it means going forward."
        lede="A significant transformation, incident, recovery, termination, vendor change, overrun, or other consequential event has already occurred. Before the organization moves on, leadership deserves a clear, evidence-based account of what happened and why."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Reconstruction Conversation
        </CTALink>
      </PageHero>

      {/* The executive question — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            Every consequential event leaves an incomplete story behind:
            partial records, competing recollections, and a leadership team
            that wants to understand what actually happened before deciding
            what comes next.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            What was known, what decisions were made, who had authority, what
            was escalated, what interventions occurred,{" "}
            <span className="text-brand-primary">
              and what should the organization learn?
            </span>
          </p>
        </div>
      </Section>

      {/* What a reconstruction answers — dark ground. */}
      <Section ground="deep">
        <Eyebrow>What a reconstruction answers</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          A clear, evidence-based account—not blame.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <ul className="divide-y divide-brand-paper/10 border-y border-brand-paper/10">
            {questions.map((question) => (
              <li key={question} className="flex gap-3 py-3.5 text-brand-paper/85">
                <span aria-hidden className="text-brand-secondary">
                  ?
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-brand-paper/80 lg:self-center">
            The purpose is not to assign fault. It is to give leadership a
            reliable account of{" "}
            <span className="text-brand-tertiary">
              how governance functioned when it mattered most
            </span>
            , and what should change before the next significant initiative.
          </p>
        </div>
      </Section>

      {/* Our approach — mist band. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>What the engagement includes</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Every engagement is scoped to the organization and the event.
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {scope.map((item, i) => (
              <div key={item.title} className="border-t-2 border-brand-primary/30 pt-4">
                <span className="font-mono text-sm text-brand-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-2 text-xl leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-ink/75">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverable — dark ground. */}
      <Section ground="deep">
        <Eyebrow>What you&apos;ll receive</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          A Governance Reconstruction Report.
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {[
            "Evidence-based chronology",
            "Key decisions and decision-makers",
            "Governance findings",
            "Lessons learned",
            "Recommendations for the next initiative",
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
        prompt="Preparing for what comes next?"
        label="Start with Technology Governance Readiness"
        href="/technology-governance-readiness"
      />

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Learn, then move forward</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            The organizations that improve are the ones willing to understand
            what happened.
          </h2>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule a Reconstruction Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
