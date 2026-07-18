import { CTALink } from "./CTALink";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

// A single closing call-to-action — one intake, one discovery call. The
// flagship blue ground: the firm's lead color, carried full-bleed.
export function EngageCTA() {
  return (
    <div className="bg-brand-primary text-brand-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <Mark size={44} className="mx-auto text-brand-secondary" />
        <p className="eyebrow mt-6 text-brand-paper/80">Engage the firm</p>
        <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
          The patience to see it. The drive to move it.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
          Whether you&apos;re retaining for a matter or engaging the firm, it
          starts with one conversation.
        </p>
        <div className="mt-9 flex justify-center">
          <CTALink href={site.discoveryCall} variant="onColor">
            Schedule a discovery call
          </CTALink>
        </div>
      </div>
    </div>
  );
}
