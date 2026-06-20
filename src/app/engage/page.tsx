import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { EngageForm } from "@/components/ui/EngageForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "Schedule a discovery call with J. Lynne & Co. Pick a time directly, or send a few details and the firm follows up to confirm.",
};

export default function EngagePage() {
  return (
    <Section ground="ink" id="form">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Eyebrow>Schedule a discovery call</Eyebrow>
          <h1 className="font-display font-display-hero mt-5 text-4xl leading-[1.05] sm:text-5xl">
            Whether you&apos;re retaining for a matter or engaging the firm, it
            starts here.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-bone/80">
            For counsel, the call is confidential and begins with a conflicts
            check before any engagement letter. For clients, it&apos;s a direct
            conversation about where you are in the lifecycle and what the moment
            calls for.
          </p>
          <div className="mt-8">
            <CTALink href={site.discoveryCall} variant="onDark">
              Pick a time now
            </CTALink>
          </div>

          <div className="mt-8 border border-bone/20 p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-aurum">
              Lighter need?
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-bone/80">
              If you need a structured maturity read rather than a bespoke
              engagement, the firm routes you to the CIO Advisra program.
            </p>
            <div className="mt-4">
              <CTALink href={site.cioAdvisra.href} variant="ghost">
                <span className="text-aurum">Go to CIO Advisra →</span>
              </CTALink>
            </div>
          </div>
        </div>

        <EngageForm />
      </div>
    </Section>
  );
}
