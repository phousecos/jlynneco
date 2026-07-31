import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { EngageForm } from "@/components/ui/EngageForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start an executive governance conversation. Schedule a time directly, or send a few details and we follow up to confirm.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start an executive governance conversation."
        lede="Whether you are preparing for a major initiative, navigating an active transformation, or restoring confidence in a struggling program, it begins with a conversation about your objectives and the risks that matter most to your leadership team."
      />

      <Section ground="ink" id="form">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>Schedule directly</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              Pick a time that works for your leadership team.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-paper/80">
              A direct, confidential conversation about where your organization
              stands and where independent governance can strengthen executive
              decision-making.
            </p>
            <div className="mt-8">
              <CTALink href={site.discoveryCall} variant="onDark">
                Schedule an Executive Governance Conversation
              </CTALink>
            </div>
          </div>

          <EngageForm />
        </div>
      </Section>
    </>
  );
}
