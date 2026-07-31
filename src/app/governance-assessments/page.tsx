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
  title: "Governance Assessments",
  description:
    "An independent evaluation of governance readiness before critical decisions are made. Know whether your governance systems are prepared to support a major transformation.",
};

// The questions leadership answers through an assessment.
const questions = [
  "Are executive roles and decision rights clearly defined?",
  "Is leadership aligned around strategic objectives?",
  "Are governance structures equipped to support the initiative?",
  "Are vendors positioned for accountability?",
  "Where are the organization's greatest governance risks?",
];

// The five stages of the method, in their assessment form (one line each).
const methodStages = [
  { n: "1", title: "Assess", body: "Establish a governance baseline." },
  {
    n: "2",
    title: "Align",
    body: "Evaluate executive alignment and accountability.",
  },
  {
    n: "3",
    title: "Govern",
    body: "Review governance structures and decision-making.",
  },
  {
    n: "4",
    title: "Measure",
    body: "Identify strengths, risks, and governance maturity.",
  },
  {
    n: "5",
    title: "Improve",
    body: "Deliver prioritized recommendations and a practical roadmap.",
  },
];

// The leadership disciplines the assessment examines.
const evaluateAreas = [
  "Executive Leadership",
  "Governance Structure",
  "Strategic Alignment",
  "Organizational Readiness",
  "Risk Governance",
  "Vendor Governance",
  "Executive Visibility",
  "Governance Sustainability",
];

// What every assessment delivers.
const deliverables = [
  "Executive Summary",
  "Transformidable Governance Index™",
  "Governance Maturity Dashboard",
  "Executive Risk Heat Map",
  "Prioritized Recommendations",
  "90-Day Governance Roadmap",
  "Executive Debrief Session",
];

export default function GovernanceAssessmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance Assessments"
        image="/assessment-hero.jpg"
        title="Know before you go."
        lede="Before investing in a major transformation, understand whether your governance systems are prepared to support success."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule an Assessment Consultation
        </CTALink>
      </PageHero>

      {/* The case for assessing governance — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            Every significant initiative carries risk. Most organizations assess
            financial controls, cybersecurity, compliance, and operational
            readiness, but very few assess the governance systems responsible
            for guiding the investment.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            A Governance Assessment gives executive leadership an{" "}
            <span className="text-brand-primary">
              independent evaluation of governance readiness
            </span>{" "}
            before critical decisions are made.
          </p>
        </div>
      </Section>

      {/* Why begin with an assessment — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Why begin with an assessment</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Transformation success begins long before implementation.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-brand-paper/55">
              An assessment helps leadership answer
            </p>
            <ul className="mt-5 divide-y divide-brand-paper/10 border-y border-brand-paper/10">
              {questions.map((question) => (
                <li
                  key={question}
                  className="flex gap-3 py-3.5 text-brand-paper/85"
                >
                  <span aria-hidden className="text-brand-secondary">
                    ?
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-brand-paper/80 lg:self-center">
            The result is a clear understanding of where governance is strong,
            and where improvements should be made{" "}
            <span className="text-brand-tertiary">
              before risk becomes reality.
            </span>
          </p>
        </div>
      </Section>

      {/* The method — five stages, one line each. Light mist band. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>The Transformidable Governance Method™</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Every assessment follows our five-stage framework.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {methodStages.map((stage) => (
              <div key={stage.n} className="border-t-2 border-brand-primary/30 pt-4">
                <span className="font-display text-3xl leading-none text-brand-primary">
                  {stage.n}
                </span>
                <h3 className="font-display mt-3 text-xl leading-snug">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-ink/75">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we evaluate — paper grid. */}
      <Section ground="paper">
        <Eyebrow>What we evaluate</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          The leadership disciplines that influence transformation success.
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {evaluateAreas.map((area) => (
            <li key={area} className="flex items-center gap-3 text-brand-ink/85">
              <span
                aria-hidden
                className="h-4 w-4 shrink-0 rounded-[3px] border border-brand-primary/60"
              />
              <span className="text-[0.95rem] leading-snug">{area}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* What you'll receive — dark ground. */}
      <Section ground="deep">
        <Eyebrow>What you&apos;ll receive</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Every Governance Assessment includes:
        </h2>

        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {deliverables.map((item) => (
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

      {/* The Governance Index — a featured product callout on paper. */}
      <Section ground="paper">
        <div className="border border-brand-ink/15 p-8 sm:p-12">
          <Eyebrow>Introducing</Eyebrow>
          <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl">
            The Transformidable Governance Index™
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-brand-ink/80">
            <p>
              The Transformidable Governance Index™ gives executive leadership
              an objective measurement of governance health.
            </p>
            <p>
              Rather than relying on intuition or anecdotal observation, the
              Index establishes a measurable baseline across the
              organization&apos;s governance disciplines and highlights the areas
              requiring executive attention.
            </p>
            <p className="font-display text-xl leading-snug text-brand-ink">
              It becomes the foundation for measuring governance improvement
              throughout the life of the initiative.
            </p>
          </div>
        </div>
      </Section>

      {/* After the assessment — dark ground, routes up to advisory. */}
      <Section ground="deep">
        <Eyebrow>After the assessment</Eyebrow>
        <div className="mt-5 max-w-3xl space-y-5 text-lg leading-relaxed text-brand-paper/80">
          <p>
            Every organization is different. Some require only a few governance
            improvements before moving forward. Others benefit from periodic
            governance reviews.
          </p>
          <p>
            Organizations undertaking complex or high-risk initiatives often
            choose an ongoing Executive Governance Advisory relationship to
            strengthen leadership throughout the transformation. The assessment
            helps determine the appropriate path.
          </p>
        </div>
        <div className="mt-8">
          <CTALink href="/executive-governance-advisory" variant="ghostOnDark">
            Explore Executive Governance Advisory →
          </CTALink>
        </div>
      </Section>

      <NextStep
        prompt="Already underway?"
        label="Learn about Executive Governance Advisory"
        href="/executive-governance-advisory"
      />

      {/* Begin with confidence — flagship blue closing. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Begin with confidence</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Major transformations deserve more than assumptions.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            A Governance Assessment gives leadership the information needed to
            make better decisions before the stakes become higher.
          </p>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule an Executive Governance Assessment
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
