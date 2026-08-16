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
  title: "AI Governance Policy & Decision Workshop",
  description:
    "Independent guidance on how an organization will govern AI decisions—permitted uses, authorization, risk acceptance, oversight, and escalation—not merely write an AI policy.",
};

// What the workshop scopes and builds.
const scope = [
  "Permitted uses",
  "Authorization",
  "Risk acceptance",
  "Data & privacy",
  "Human oversight",
  "Vendors & models",
  "Monitoring",
  "Exceptions",
  "Escalation",
  "Suspension & reauthorization",
];

// What every workshop delivers.
const deliverables = [
  "AI Governance Decision Framework",
  "Governance requirements matrix",
  "Decision-rights model",
  "Policy requirements",
  "Escalation & exception model, as scoped",
];

export default function AIGovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="AI Governance Policy & Decision Workshop"
        title={
          <>
            A policy tells people what&rsquo;s allowed. Governance decides{" "}
            <em className="not-italic text-brand-secondary">who decides</em>.
          </>
        }
        lede="AI adoption, enterprise AI policy, generative-AI use, AI vendor decisions, privacy concerns, or a board asking how AI is governed—the workshop establishes the decision-making system, not just the document."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule an AI Governance Conversation
        </CTALink>
      </PageHero>

      {/* The executive question — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            Most organizations respond to AI with a policy document: permitted
            tools, a few prohibitions, an acceptable-use memo. Few have
            answered the harder question underneath it.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            How will the organization{" "}
            <span className="text-brand-primary">
              govern AI decisions—not merely write an AI policy?
            </span>
          </p>
        </div>
      </Section>

      {/* When to use it — dark ground. */}
      <Section ground="deep">
        <Eyebrow>When to use it</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Before the policy is written, or after it stops being enough.
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-brand-paper/80">
          AI adoption, enterprise AI policy, generative-AI use, AI vendor
          decisions, privacy and data concerns, or a board asking for AI
          governance—each of these is a decision-rights problem before it is
          a documentation problem.
        </p>
      </Section>

      {/* What the workshop scopes — mist band. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>What the workshop scopes</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            The decisions an AI governance system has to be able to make.
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

      {/* What you'll receive — paper grid. */}
      <Section ground="paper">
        <Eyebrow>What you&apos;ll receive</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          A decision framework leadership can actually govern by.
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

      {/* Where leadership goes next — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Where leadership goes next</Eyebrow>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-paper/80">
          Some organizations leave the workshop ready to finalize policy
          internally. Others move into fuller governance implementation, or
          into an ongoing Governance Watch relationship to keep pace as AI use
          expands across the organization.
        </p>
        <p className="mt-6 max-w-3xl border-l-2 border-brand-secondary pl-6 font-display text-2xl leading-snug text-brand-paper sm:text-3xl">
          The policy is the artifact.{" "}
          <span className="text-brand-tertiary">
            The governance is what makes it hold.
          </span>
        </p>
      </Section>

      <NextStep
        prompt="Governing a live transformation, not just AI adoption?"
        label="Explore Technology Governance Readiness"
        href="/technology-governance-readiness"
      />

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Govern the decision, not just the tool</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            AI adoption is a governance decision before it is a technology
            decision.
          </h2>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule an AI Governance Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
