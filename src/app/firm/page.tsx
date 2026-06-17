import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExhibitStrip } from "@/components/exhibit/ExhibitStrip";
import { CTALink } from "@/components/ui/CTALink";
import { exhibitsFor } from "@/content/exhibits";

export const metadata: Metadata = {
  title: "The Firm — Point of View",
  description:
    "What J. Lynne & Co. believes about enterprise transformation and ERP failure, and the lens it applies across the full lifecycle.",
};

const beliefs = [
  {
    claim: "Failure is a governance event, not a technology event.",
    body: "By the time a program is in trouble, the technology is rarely the cause. The cause is decisions deferred, risk unnamed, and accountability spread until no one holds it. The firm reads the program for those signals first.",
  },
  {
    claim: "The honest read is the valuable one.",
    body: "Anyone can validate the plan of record. The firm is built to say the uncomfortable thing — you are not ready, this will not land, stop now — because that is the judgment a client cannot get from a party paid to proceed.",
  },
  {
    claim: "Judgment compounds across the lifecycle.",
    body: "Before, during, and after are not three engagements. They are one continuous read. The same diagnostic muscle that decides readiness audits the build and, when it is contested, testifies to what went wrong.",
  },
];

export default function FirmPage() {
  return (
    <>
      <PageHero
        eyebrow="The Firm — Point of View"
        title="A firm organized around proof and a point of view, not a service menu."
        lede="J. Lynne & Co. exists for the enterprise programs that cannot afford to fail. This is what the firm believes about why they do — and the lens it brings to every engagement."
      />

      {/* The thesis, stated with conviction. */}
      <Section ground="bone" size="prose">
        <Eyebrow>The thesis</Eyebrow>
        <div className="mt-6 space-y-6 text-lg leading-relaxed text-counsel-ink/85">
          <p>
            Most enterprise transformations are sold as technology projects and
            die as governance failures. The software is rarely the problem. The
            problem is a program no one will read honestly — scope that grows
            because no one will hold it, steering committees that perform
            instead of decide, and a go-live date that arrives because the
            calendar demanded it, not because the organization was ready.
          </p>
          <p>
            The firm&apos;s position is that this is diagnosable, early, by
            someone with the judgment to look and the independence to say so.
            That judgment is the product. Everything else — the audit, the
            advisory engagement, the testimony — is that judgment applied at a
            different point in the lifecycle.
          </p>
        </div>
      </Section>

      {/* What the firm believes. */}
      <Section ground="ink">
        <Eyebrow>The lens</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Three convictions the firm advises from.
        </h2>
        <div className="mt-12 grid gap-px bg-bone/15 md:grid-cols-3">
          {beliefs.map((b) => (
            <div key={b.claim} className="bg-bone p-7 sm:p-8">
              <h3 className="font-display text-xl leading-snug text-counsel-ink">
                {b.claim}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-counsel-ink/80">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Authority as evidence the lens is earned — not a résumé. */}
      <Section ground="bone" size="prose">
        <Eyebrow>Why the lens is earned</Eyebrow>
        <div className="mt-6 space-y-6 text-lg leading-relaxed text-counsel-ink/85">
          <p>
            The point of view is not borrowed. It comes from stewarding an $88M
            implementation through the failure pattern and back, from a standing
            research program on why ERP programs fail, and from a book-length
            argument that puts the thesis in print and on the record.
          </p>
          <p>
            That rigor is what lets the firm hold a position under pressure —
            with a steering committee, with a board, and, when it comes to it,
            under cross-examination.
          </p>
        </div>
        <div className="mt-10">
          <CTALink href="/proof" variant="solid">
            See the record
          </CTALink>
        </div>
      </Section>

      {/* Exhibit strip feeding from the proof spine. */}
      <Section ground="deep">
        <Eyebrow>Selected exhibits</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-bone sm:text-4xl">
          The lens, evidenced.
        </h2>
        <div className="mt-12">
          <ExhibitStrip exhibits={exhibitsFor("firm", 3)} columns={3} />
        </div>
      </Section>
    </>
  );
}
