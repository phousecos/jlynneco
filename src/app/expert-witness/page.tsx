import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExhibitStrip } from "@/components/exhibit/ExhibitStrip";
import { CTALink } from "@/components/ui/CTALink";
import { ConfidentialEmailButton } from "@/components/ui/ConfidentialEmailButton";
import { exhibitsFor } from "@/content/exhibits";

export const metadata: Metadata = {
  title: "Expert Witness",
  description:
    "Retained for ERP and implementation-failure analysis, standard-of-care, and causation. Credentialed by domain expertise and forensic audit work.",
};

// The engagement scope — what Jerri is retained for.
const retainedFor = [
  {
    label: "Failure analysis",
    body: "Forensic examination of why an ERP or enterprise implementation failed — the program record read for the decisions, omissions, and warnings that drove the outcome.",
  },
  {
    label: "Standard of care",
    body: "Opinion on whether the conduct of an implementer, advisor, or institution met the standard a reasonable practitioner would apply.",
  },
  {
    label: "Causation",
    body: "Disentangling the chain from decision to damage — what caused the failure, what merely coincided with it, and what would have changed the result.",
  },
  {
    label: "Damages context",
    body: "Framing the technical and program realities that bound a damages theory, so the financial analysis rests on what the program actually was.",
  },
];

// Credentials that survive cross-examination.
const credentials = [
  "Domain depth in ERP and enterprise transformation, from selection through post-go-live remediation",
  "Forensic-audit muscle — the same discipline applied in the firm's accreditation and implementation audits",
  "A standing ERP-failure research program, peer-facing and citable",
  "A published book-length argument on transformation and ERP failure",
];

export default function ExpertWitnessPage() {
  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="Expert Witness"
        title={
          <>
            Retained when an implementation failure becomes a{" "}
            <em className="not-italic text-brand-secondary">matter</em>.
          </>
        }
        lede="For general counsel, litigators, and audit committees: independent analysis of ERP and enterprise-implementation failure — standard of care, causation, and the technical record — that holds up under cross-examination."
      />

      {/* The engagement. */}
      <Section ground="paper">
        <Eyebrow>The engagement</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          What the firm is retained for.
        </h2>
        <div className="mt-12 grid gap-px bg-brand-ink/12 sm:grid-cols-2">
          {retainedFor.map((r) => (
            <div key={r.label} className="bg-brand-paper p-7 sm:p-8">
              <h3 className="font-display text-xl text-brand-ink">
                {r.label}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-ink/80">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Credentials that survive cross. */}
      <Section ground="ink" size="prose">
        <Eyebrow>Credentials that survive cross</Eyebrow>
        <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
          The basis of the opinion.
        </h2>
        <ul className="mt-10 space-y-5">
          {credentials.map((c) => (
            <li key={c} className="flex gap-4 border-b border-brand-paper/15 pb-5">
              <span className="font-mono text-sm text-brand-secondary" aria-hidden>
                §
              </span>
              <span className="text-[1.05rem] leading-relaxed text-brand-paper/85">
                {c}
              </span>
            </li>
          ))}
        </ul>

        {/* Posture — calibrated to "building toward" per spec §5. Honest about
            where the practice is, without overclaiming a record counsel will
            check. */}
        <p className="mt-10 text-[0.95rem] leading-relaxed text-brand-paper/65">
          The firm is available for retention, credentialed by domain expertise
          and forensic audit work, with a testimony record that is growing.
          Engagements begin with a conflicts check and a confidential review of
          the matter.
        </p>
      </Section>

      {/* Cross-link up from Advisory & Audits — the credibility bridge. */}
      <Section ground="paper" size="prose">
        <Eyebrow>The credibility bridge</Eyebrow>
        <h2 className="font-display mt-5 text-2xl leading-snug sm:text-3xl">
          The audit work and the witness work are the same muscle.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">
          Forensically examining why an implementation failed is the same
          discipline as testifying about why one failed. The firm&apos;s audit
          practice is where that judgment is built and proven — and it is what
          the witness work is sold on.
        </p>
        <div className="mt-8">
          <CTALink href="/advisory" variant="ghost">
            See the audit practice <span aria-hidden>→</span>
          </CTALink>
        </div>
      </Section>

      {/* Exhibits relevant to counsel. */}
      <Section ground="deep">
        <Eyebrow>On the record</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Exhibits a vetting reader can weigh.
        </h2>
        <div className="mt-12">
          <ExhibitStrip exhibits={exhibitsFor("expert-witness", 3)} columns={3} />
        </div>
      </Section>

      {/* How to engage — confidential, by direct encrypted email (not a web
          form, which would route a matter through a third-party backend). */}
      <Section ground="paper" size="prose">
        <Eyebrow>How to engage</Eyebrow>
        <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
          A confidential, low-friction intake.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-ink/80">
          Open a matter by email and the firm will run a conflicts check and
          review the posture of the case before any engagement letter.
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-brand-slate">
          Keep first contact to what a conflicts check needs — the parties
          involved — and hold privileged detail until a secure channel is
          established. The firm corresponds from an encrypted (Proton) account;
          for end-to-end encryption, write from an encrypted account as well.
        </p>
        <div className="mt-10">
          <ConfidentialEmailButton>
            Open a confidential matter
          </ConfidentialEmailButton>
        </div>
      </Section>
    </>
  );
}
