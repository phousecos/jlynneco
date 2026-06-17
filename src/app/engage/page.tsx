import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { legal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "Schedule a discovery call with J. Lynne & Co. One intake for every engagement — choose the service that fits and the firm routes you to the right altitude.",
};

// Service options for the intake dropdown — the firm's offerings, apex first.
const services = [
  "Expert witness — retain for a matter",
  "Advisory & audits",
  "SACS accreditation readiness",
  "Program management",
  "CIO Advisra — maturity assessment",
  "Not sure yet — general inquiry",
];

export default function EngagePage() {
  return (
    <>
      <PageHero
        eyebrow="Engage"
        title="Schedule a discovery call."
        lede="One intake for every engagement. Tell us a little about the situation and which service fits — the firm will follow up to schedule a confidential discovery call and route you to the right altitude."
      />

      <Section ground="ink" id="form">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>The discovery call</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              Whether you&apos;re retaining for a matter or engaging the firm,
              it starts here.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-bone/80">
              For counsel, the call is confidential and begins with a conflicts
              check before any engagement letter. For clients, it&apos;s a
              direct conversation about where you are in the lifecycle and what
              the moment calls for.
            </p>
            <div className="mt-7 border border-bone/20 p-5">
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

          <IntakeForm />
        </div>
      </Section>
    </>
  );
}

// Single, accessible intake form. Wire `action` to a form endpoint
// (a serverless route or form service) before launch.
function IntakeForm() {
  return (
    <form
      className="border border-bone/20 bg-bone p-7 text-counsel-ink sm:p-9"
      method="post"
      action="#"
      aria-label="Engagement intake"
    >
      <div className="space-y-6">
        <Field id="name" label="Your name" type="text" />
        <Field id="org" label="Firm / organization" type="text" />
        <Field id="email" label="Email" type="email" />

        {/* Service dropdown — the requested single point of routing. */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="service"
            className="font-mono text-xs uppercase tracking-wider text-graphite"
          >
            What do you need?
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue=""
              className="w-full appearance-none border border-counsel-ink/20 bg-bone/60 px-4 py-3 pr-10 text-[0.95rem] outline-none focus:border-aurum"
            >
              <option value="" disabled>
                Select a service…
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-graphite"
            >
              ▾
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="details"
            className="font-mono text-xs uppercase tracking-wider text-graphite"
          >
            A little about the situation
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="Where you are in the lifecycle, or the posture of the matter. No privileged detail at this stage."
            className="border border-counsel-ink/20 bg-bone/60 px-4 py-3 text-[0.95rem] outline-none placeholder:text-graphite/70 focus:border-aurum"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-counsel-ink px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-ink-deep"
      >
        Schedule a discovery call
      </button>
      <p className="mt-4 text-xs leading-relaxed text-graphite">
        Submitting does not create an engagement or, for counsel, any privileged
        relationship. Engagements are contracted through {legal.engagementEntity}.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
}: {
  id: string;
  label: string;
  type: "text" | "email";
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wider text-graphite"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="border border-counsel-ink/20 bg-bone/60 px-4 py-3 text-[0.95rem] outline-none focus:border-aurum"
      />
    </div>
  );
}
