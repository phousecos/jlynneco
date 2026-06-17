import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";

export const metadata: Metadata = {
  title: "Program Management",
  description:
    "Senior program delivery for enterprise transformation — seasoned leadership that keeps momentum between major engagements.",
};

const delivery = [
  {
    title: "Seasoned program leadership",
    body: "Direct, senior ownership of a program in motion — governance, sequencing, risk, and the hard calls — by someone who has steered enterprise implementations through the failure pattern and back.",
  },
  {
    title: "Continuity between engagements",
    body: "The steady hand that keeps a transformation moving between the firm's bigger reads. Delivery that protects momentum without manufacturing scope.",
  },
  {
    title: "Judgment, not headcount",
    body: "Not a staffing shop. One seasoned principal accountable for the outcome — the firm's lens applied to day-to-day delivery.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="Program Management"
        title="Senior delivery that keeps the program moving."
        lede="The firm's floor, by design — seasoned program leadership for enterprise transformation, positioned as continuity between major engagements rather than the headline."
      />

      <Section ground="bone">
        <Eyebrow>What it is</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Up-market program leadership.
        </h2>
        <div className="mt-12 grid gap-px bg-counsel-ink/12 md:grid-cols-3">
          {delivery.map((d) => (
            <div key={d.title} className="bg-bone p-7 sm:p-8">
              <h3 className="font-display text-xl leading-snug">{d.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-counsel-ink/80">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section ground="bone" size="prose" className="pt-0">
        <p className="text-lg leading-relaxed text-counsel-ink/85">
          Program management is the revenue floor that keeps the firm engaged
          between its highest-trust work — and it is delivered to the same
          standard. If you need senior delivery on a program already in motion,
          the firm can take it.
        </p>
        <div className="mt-8">
          <CTALink href="/engage#client" variant="solid">
            Discuss a delivery engagement
          </CTALink>
        </div>
      </Section>
    </>
  );
}
