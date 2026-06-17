import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { legal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "Two paths into the firm: a confidential intake for counsel retaining for a matter, and an engagement intake for clients — with a route to CIO Advisra for lighter needs.",
};

export default function EngagePage() {
  return (
    <>
      <PageHero
        eyebrow="Engage"
        title="Two doors. Tell us which one you are."
        lede="The firm routes by what the visitor actually is — counsel retaining for a matter, or a client engaging the firm. Choose the path that fits."
      />

      {/* For counsel — confidential, formal. */}
      <Section ground="ink" id="counsel">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow>For counsel</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              Retaining for a matter
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-bone/80">
              General counsel, litigators, and audit committees. A confidential,
              formal path. The firm runs a conflicts check and reviews the
              posture of the matter before any engagement letter; confidentiality
              applies from first contact.
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-bone/60">
              Engagements are contracted through {legal.engagementEntity}.
            </p>
          </div>

          <IntakeForm
            kind="counsel"
            fields={[
              { name: "name", label: "Your name", type: "text" },
              { name: "firm", label: "Firm / organization", type: "text" },
              { name: "email", label: "Email", type: "email" },
              {
                name: "matter",
                label: "Nature of the matter",
                type: "textarea",
                placeholder:
                  "Posture, parties to check for conflicts, and the question at issue. Do not include privileged detail at this stage.",
              },
            ]}
            cta="Open a confidential matter"
          />
        </div>
      </Section>

      {/* For clients — advisory/audit intake, routes to CIO Advisra if lighter. */}
      <Section ground="deep" id="client">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow>For clients</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              Engaging the firm
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-bone/80">
              Advisory and audit work across the lifecycle — pre-implementation
              strategy, audits including SACS readiness, and remediation. Tell us
              where in the arc you are.
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

          <IntakeForm
            kind="client"
            fields={[
              { name: "name", label: "Your name", type: "text" },
              { name: "org", label: "Organization", type: "text" },
              { name: "email", label: "Email", type: "email" },
              {
                name: "need",
                label: "Where are you in the lifecycle?",
                type: "textarea",
                placeholder:
                  "Before, during, or after — and what's prompting the conversation now.",
              },
            ]}
            cta="Start an engagement"
          />
        </div>
      </Section>
    </>
  );
}

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder?: string;
};

// Static, accessible intake form. Wire `action` to a form endpoint
// (e.g. a serverless route or form service) before launch.
function IntakeForm({
  kind,
  fields,
  cta,
}: {
  kind: "counsel" | "client";
  fields: Field[];
  cta: string;
}) {
  return (
    <form
      className="border border-bone/20 bg-bone p-7 text-counsel-ink sm:p-9"
      method="post"
      action="#"
      aria-label={kind === "counsel" ? "Counsel intake" : "Client intake"}
    >
      <input type="hidden" name="intake" value={kind} />
      <div className="space-y-6">
        {fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-2">
            <label
              htmlFor={`${kind}-${f.name}`}
              className="font-mono text-xs uppercase tracking-wider text-graphite"
            >
              {f.label}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={`${kind}-${f.name}`}
                name={f.name}
                rows={4}
                placeholder={f.placeholder}
                className="border border-counsel-ink/20 bg-bone/60 px-4 py-3 text-[0.95rem] outline-none placeholder:text-graphite/70 focus:border-aurum"
              />
            ) : (
              <input
                id={`${kind}-${f.name}`}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                className="border border-counsel-ink/20 bg-bone/60 px-4 py-3 text-[0.95rem] outline-none placeholder:text-graphite/70 focus:border-aurum"
              />
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-counsel-ink px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-ink-deep"
      >
        {cta}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-graphite">
        Submitting does not create an engagement or, for counsel, any privileged
        relationship.
      </p>
    </form>
  );
}
