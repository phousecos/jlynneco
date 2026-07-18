import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "CIO Advisra",
  description:
    "The firm's thinking, packaged. A productized six-pillar maturity assessment for the right-sized client — nested under J. Lynne & Co.",
};

const pillars = [
  "Strategy & governance",
  "Operating model",
  "Data & information",
  "Applications & platforms",
  "Security & risk",
  "Talent & change",
];

export default function CioAdvisraPage() {
  return (
    <>
      <PageHero
        eyebrow="CIO Advisra — the productized program"
        title="The firm's thinking, packaged."
        lede="CIO Advisra is J. Lynne & Co.'s productized program: a structured six-pillar maturity assessment for the client who needs the firm's judgment in a defined, right-sized form."
      />

      {/* Parent → product, made explicit. */}
      <Section ground="paper" size="prose">
        <Eyebrow>Parent → product</Eyebrow>
        <div className="mt-6 space-y-6 text-lg leading-relaxed text-brand-ink/85">
          <p>
            Not every engagement needs the firm&apos;s bespoke time. When the
            need is a clear, structured read rather than a high-touch advisory
            relationship, CIO Advisra is the right altitude — the same lens,
            packaged into a repeatable assessment.
          </p>
          <p>
            It is the productized middle of the ladder: where the firm routes a
            client who needs its thinking but not its bespoke engagement. One
            ladder, no internal competition — the firm packages its judgment,
            and the program delivers it.
          </p>
        </div>
      </Section>

      {/* The six pillars. */}
      <Section ground="ink">
        <Eyebrow>The assessment</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          A six-pillar maturity assessment.
        </h2>
        <ul className="mt-12 grid gap-px bg-brand-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <li key={p} className="flex items-center gap-4 bg-brand-ink p-6">
              <span className="font-mono text-sm text-brand-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.05rem] text-brand-paper/90">{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Bridge out to the brand/platform. */}
      <Section ground="paper">
        <div className="border border-brand-ink/15 bg-brand-paper/50 p-8 sm:p-12">
          <div className="flex items-center gap-4">
            <Mark size={32} className="text-brand-secondary" />
            <Eyebrow>The handoff</Eyebrow>
          </div>
          <h2 className="font-display mt-6 max-w-2xl text-2xl leading-snug sm:text-3xl">
            Right-sized for the structured read.
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-brand-ink/80">
            CIO Advisra runs on its own brand and platform. If the maturity
            assessment is what you need, continue there — or, if the situation
            calls for the firm&apos;s bespoke judgment, engage J. Lynne &amp;
            Co. directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTALink href={site.cioAdvisra.href} variant="solid">
              Continue to CIO Advisra
            </CTALink>
            <CTALink href="/engage" variant="ghost">
              Or engage the firm directly <span aria-hidden>→</span>
            </CTALink>
          </div>
        </div>
      </Section>
    </>
  );
}
