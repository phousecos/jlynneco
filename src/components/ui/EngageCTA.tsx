import { Eyebrow } from "./Eyebrow";
import { CTALink } from "./CTALink";
import { Mark } from "@/components/site/Mark";

// Segmented engage CTA — by what the visitor actually is. Reused across pages.
export function EngageCTA() {
  return (
    <div className="bg-counsel-ink text-bone">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="flex items-center gap-4">
          <Mark size={36} className="text-aurum" />
          <Eyebrow>Engage the firm</Eyebrow>
        </div>
        <h2 className="font-display mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Two doors. Tell us which one you are.
        </h2>

        <div className="mt-12 grid gap-px bg-bone/15 sm:grid-cols-2">
          <div className="flex flex-col bg-counsel-ink p-8">
            <span className="eyebrow text-aurum">For counsel</span>
            <h3 className="font-display mt-4 text-2xl">Retaining for a matter</h3>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-bone/75">
              General counsel, litigators, audit committees. A confidential,
              formal intake for expert-witness and forensic work.
            </p>
            <CTALink
              href="/engage#counsel"
              variant="onDark"
              className="mt-7 self-start"
            >
              Open a confidential matter
            </CTALink>
          </div>

          <div className="flex flex-col bg-counsel-ink p-8">
            <span className="eyebrow text-aurum">For clients</span>
            <h3 className="font-display mt-4 text-2xl">Engaging the firm</h3>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-bone/75">
              Advisory and audit work across the lifecycle — and a route to the
              CIO Advisra program if the need is lighter.
            </p>
            <CTALink
              href="/engage#client"
              variant="onDark"
              className="mt-7 self-start"
            >
              Start an engagement
            </CTALink>
          </div>
        </div>
      </div>
    </div>
  );
}
