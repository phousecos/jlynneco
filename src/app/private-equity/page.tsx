import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Private Equity",
  description:
    "Independent governance oversight of technology-enabled transformation across the deal lifecycle, from pre-close diligence to pre-exit readiness, for PE sponsors and portfolio company leadership.",
};

// The natural engagement points across the deal lifecycle.
const situations = [
  {
    situation: "Pre-close technology diligence",
    opportunity:
      "Assess whether technology, transformation obligations, or troubled programs create risks to the investment thesis.",
  },
  {
    situation: "First 100 days",
    opportunity:
      "Establish governance around major transformation commitments and management accountability.",
  },
  {
    situation: "Platform + add-on acquisitions",
    opportunity:
      "Govern technology integration, systems consolidation, data migration, and operating-model decisions.",
  },
  {
    situation: "ERP/core replacement",
    opportunity:
      "Independent oversight of high-risk implementations within portfolio companies.",
  },
  {
    situation: "Transformation programs",
    opportunity:
      "Assess whether programs are producing the capabilities/value assumed in the investment case.",
  },
  {
    situation: "Troubled portfolio company",
    opportunity: "Independent transformation assessment and project recovery.",
  },
  {
    situation: "Pre-exit readiness",
    opportunity:
      "Identify unresolved technology/transformation risks that could affect diligence, valuation, or transaction execution.",
  },
];

// The standing questions the framework is built to keep answering.
const framingQuestions = [
  "Are the right decisions being made?",
  "Are risks reaching the right decision-makers?",
  "Are management's representations consistent with the evidence?",
  "Is the transformation still capable of delivering the investment thesis?",
];

export default function PrivateEquityPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Equity"
        title={
          <>
            Governing the technology risk inside the{" "}
            <em className="not-italic text-brand-secondary">
              investment thesis
            </em>
            .
          </>
        }
        lede="We work with private equity sponsors and portfolio company leadership to govern technology-enabled transformations that materially affect investment performance."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Discuss a portfolio
        </CTALink>
      </PageHero>

      {/* The problem — paper. */}
      <Section ground="paper">
        <Eyebrow>The problem</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          It isn&rsquo;t primarily &ldquo;technology consulting.&rdquo;
          It&rsquo;s transformation risk to the investment thesis.
        </h2>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-brand-ink/80">
          <p>
            A PE firm acquires a company assuming it can achieve some
            combination of growth, integration, cost reduction,
            modernization, or operational improvement. Frequently,
            technology-enabled transformation sits underneath those
            assumptions.
          </p>
          <p>
            That risk surfaces at predictable points across the deal
            lifecycle — and each one calls for independent governance.
          </p>
        </div>
      </Section>

      {/* Engagement points across the deal lifecycle — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Where governance applies</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Across the deal lifecycle.
        </h2>

        <div className="mt-12 overflow-x-auto border border-brand-paper/15">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-brand-paper/15">
                <th className="eyebrow px-6 py-4 text-brand-paper/60">
                  Situation
                </th>
                <th className="eyebrow px-6 py-4 text-brand-paper/60">
                  How J. Lynne engages
                </th>
              </tr>
            </thead>
            <tbody>
              {situations.map((row) => (
                <tr
                  key={row.situation}
                  className="border-b border-brand-paper/10 last:border-0"
                >
                  <td className="px-6 py-5 align-top font-display text-base leading-snug text-brand-paper">
                    {row.situation}
                  </td>
                  <td className="px-6 py-5 align-top text-[0.95rem] leading-relaxed text-brand-paper/75">
                    {row.opportunity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Portfolio Transformation Governance — the featured offering. */}
      <Section ground="paper">
        <Eyebrow>A closer look</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Portfolio Transformation Governance.
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-brand-ink/80">
            <p>
              Rather than governing a single implementation at one portfolio
              company, J. Lynne can provide independent governance visibility
              across every major technology transformation underway in a
              portfolio.
            </p>
            <p>
              A sponsor may have five portfolio companies running ERP
              implementations, integrations, cloud migrations, AI
              initiatives, or operating-model transformations at the same
              time. J. Lynne applies one governance framework across all of
              them.
            </p>
          </div>

          <div>
            <p className="font-display text-lg leading-snug text-brand-ink">
              That framework exists to keep asking:
            </p>
            <ul className="mt-6 space-y-4">
              {framingQuestions.map((question) => (
                <li
                  key={question}
                  className="flex items-start gap-3 border-b border-brand-ink/10 pb-4 text-brand-ink/85"
                >
                  <span aria-hidden className="mt-1 text-brand-secondary">
                    &bull;
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Retain the firm</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Governance visibility across the portfolio.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            Bring independent governance in early, whether the engagement is
            a single deal or standing oversight across the portfolio.
          </p>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Discuss a portfolio
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
