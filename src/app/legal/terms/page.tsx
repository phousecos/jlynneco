import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { legal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for J. Lynne & Co.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="Legal · Terms"
        title="Terms of use"
        lede="Placeholder terms — to be finalized with counsel before launch."
      />
      <Section ground="paper" size="prose">
        <div className="space-y-6 text-[1.02rem] leading-relaxed text-brand-ink/85">
          <p>
            This site is provided for informational purposes. Nothing on it
            constitutes legal advice, an expert opinion, or the formation of an
            engagement or privileged relationship.
          </p>
          <p>
            Engagements with {site.name} are governed by a separate engagement
            letter, contracted and invoiced through {legal.engagementEntity}.
          </p>
          <p className="text-brand-slate">
            This is placeholder copy. Final terms of use will be issued by{" "}
            {legal.legalCounsel} prior to launch.
          </p>
        </div>
      </Section>
    </>
  );
}
