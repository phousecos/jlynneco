import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { legal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for J. Lynne & Co.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="Legal · Privacy"
        title="Privacy policy"
        lede="Placeholder policy — to be finalized with counsel before launch."
      />
      <Section ground="paper" size="prose">
        <div className="space-y-6 text-[1.02rem] leading-relaxed text-brand-ink/85">
          <p>
            {site.name} collects only the information you provide through the
            engage forms and direct correspondence, and uses it solely to
            respond to and administer engagements.
          </p>
          <p>
            Engagements are contracted and invoiced through{" "}
            {legal.engagementEntity}. Legal matters are handled by{" "}
            {legal.legalCounsel}.
          </p>
          <p className="text-brand-slate">
            This is placeholder copy. Final privacy terms will be issued by{" "}
            {legal.legalCounsel} prior to launch.
          </p>
        </div>
      </Section>
    </>
  );
}
