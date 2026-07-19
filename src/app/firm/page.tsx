import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExhibitStrip } from "@/components/exhibit/ExhibitStrip";
import { CTALink } from "@/components/ui/CTALink";
import { Avatar } from "@/components/ui/Avatar";
import { leadership } from "@/content/site";
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
        title={
          <>
            A firm organized around{" "}
            <em className="not-italic text-brand-secondary">proof</em> and a
            point of view, not a service menu.
          </>
        }
        lede="J. Lynne & Co. exists for the enterprise programs that cannot afford to fail. This is what the firm believes about why they do — and the lens it brings to every engagement."
      />

      {/* The thesis, stated with conviction. */}
      <Section ground="paper" size="prose">
        <Eyebrow>The thesis</Eyebrow>
        <div className="mt-6 space-y-6 text-lg leading-relaxed text-brand-ink/85">
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
        <div className="mt-12 grid gap-px bg-brand-paper/15 md:grid-cols-3">
          {beliefs.map((b) => (
            <div key={b.claim} className="bg-brand-paper p-7 sm:p-8">
              <h3 className="font-display text-xl leading-snug text-brand-ink">
                {b.claim}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-brand-ink/80">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership — the founding principal, voiced as the firm. Names Jerri
          prominently; reads as the source of the firm's authority, not an
          About-Me. Built as a container that holds more than one principal. */}
      <Section ground="paper">
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          The authority is the firm&apos;s. Its source has a name.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/80">
          The point of view is not borrowed. The firm&apos;s lens originates
          with its founding principal — and the rigor behind it is what lets the
          firm hold a position under pressure: with a steering committee, with a
          board, and, when it comes to it, under cross-examination.
        </p>

        <div className="mt-12 grid gap-px bg-brand-ink/12">
          {leadership.map((p) => (
            <article
              key={p.name}
              className="grid gap-6 bg-brand-paper p-7 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-9"
            >
              {/* Headshot if present in /public, else the gold monogram. */}
              <Avatar src={p.image} alt={p.name} initials={p.initials} />
              <div>
                <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
                <p className="eyebrow mt-1.5 text-brand-slate">{p.role}</p>
                <p className="mt-4 leading-relaxed text-brand-ink/80">
                  {p.bio}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
                  {p.links.map((l) => (
                    <CTALink key={l.href} href={l.href} variant="ghost">
                      {l.label} <span aria-hidden>→</span>
                    </CTALink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Exhibit strip feeding from the proof spine. */}
      <Section ground="deep">
        <Eyebrow>Selected exhibits</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          The lens, evidenced.
        </h2>
        <div className="mt-12">
          <ExhibitStrip exhibits={exhibitsFor("firm", 3)} columns={3} />
        </div>
      </Section>
    </>
  );
}
