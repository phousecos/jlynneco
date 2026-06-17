import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Exhibit } from "@/components/exhibit/Exhibit";
import { Reveal } from "@/components/ui/Reveal";
import { EngageCTA } from "@/components/ui/EngageCTA";
import { exhibits } from "@/content/exhibits";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "The record, entered as exhibits: case studies, the $88M anchor, outcomes, publications, and references — rendered as evidence.",
};

const groups: { kind: typeof exhibits[number]["kind"]; label: string }[] = [
  { kind: "case", label: "Cases" },
  { kind: "outcome", label: "Outcomes" },
  { kind: "publication", label: "Publications & research" },
  { kind: "testimonial", label: "References" },
];

export default function ProofPage() {
  const anchor = exhibits.find((e) => e.id === "01");

  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="Proof — the record"
        title="The argument, entered as evidence."
        lede="The through-line of the firm. Every claim made elsewhere on this site resolves here — case studies, outcomes, publications, and references, each filed as an exhibit."
      />

      {/* The $88M anchor — full exhibit, given weight. */}
      {anchor && (
        <Section ground="ink">
          <Eyebrow>The anchor</Eyebrow>
          <div className="mt-8">
            <Reveal>
              <Exhibit exhibit={anchor} variant="full" />
            </Reveal>
          </div>
        </Section>
      )}

      {/* The full record, grouped by kind. */}
      {groups.map((group, gi) => {
        const items = exhibits.filter((e) => e.kind === group.kind);
        if (items.length === 0) return null;
        return (
          <Section key={group.kind} ground={gi % 2 === 0 ? "deep" : "ink"}>
            <Eyebrow>{group.label}</Eyebrow>
            <div className="mt-10 grid gap-px bg-bone/15 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((exhibit, i) => (
                <Reveal key={exhibit.id} delay={i * 80}>
                  <Exhibit exhibit={exhibit} variant="full" className="h-full" />
                </Reveal>
              ))}
            </div>
          </Section>
        );
      })}

      <EngageCTA />
    </>
  );
}
