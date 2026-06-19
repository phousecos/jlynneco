import { Eyebrow } from "./Eyebrow";
import { CTALink } from "./CTALink";
import { Mark } from "@/components/site/Mark";

// A single closing call-to-action — one intake, one discovery call. Reused
// across pages on the dark authority ground.
export function EngageCTA() {
  return (
    <div className="bg-counsel-ink text-bone">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <Mark size={44} className="mx-auto text-aurum" />
        <Eyebrow className="mt-6">Engage the firm</Eyebrow>
        <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
          The patience to see it. The drive to move it.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-bone/75">
          Whether you&apos;re retaining for a matter or engaging the firm, it
          starts with one conversation.
        </p>
        <div className="mt-9 flex justify-center">
          <CTALink href="https://cal.com/jerribland/j.-lynne-meeting-request" variant="onDark">
            Schedule a discovery call
          </CTALink>
        </div>
      </div>
    </div>
  );
}
