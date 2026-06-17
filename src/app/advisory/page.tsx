import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";

export const metadata: Metadata = {
  title: "Advisory & Audits",
  description:
    "Judgment across the full lifecycle: pre-implementation strategy, audits including SACS accreditation readiness, and post-implementation remediation.",
};

const lifecycle = [
  {
    phase: "Before",
    n: "01",
    title: "Pre-implementation strategy",
    body: "The most valuable thing the firm can tell a client is that they are not ready — and why. Readiness diagnosis ahead of selection or kickoff: governance, data, change capacity, and the honest question of whether to proceed at all.",
  },
  {
    phase: "During",
    n: "02",
    title: "Audits, including SACS readiness",
    body: "An independent, forensic read of a program in flight — where it actually stands against where it reports to stand, and what closes the gap before it becomes the post-mortem.",
  },
  {
    phase: "After",
    n: "03",
    title: "Post-implementation remediation",
    body: "When a go-live has landed badly, remediation framed as diagnosis and judgment — what broke, why, and the smallest set of moves that restores the program — not a deliverables list.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory & Audits"
        title="The firm doesn't parachute in when it's broken. It has judgment before, during, and after."
        lede="One practice, organized as the full lifecycle — because that arc is the point. The same diagnostic judgment that decides readiness audits the build and remediates the aftermath."
      />

      {/* The lifecycle. */}
      <Section ground="bone">
        <Eyebrow>The lifecycle</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          One arc, three points of judgment.
        </h2>
        <div className="mt-12 grid gap-px bg-counsel-ink/12 md:grid-cols-3">
          {lifecycle.map((p) => (
            <div key={p.n} className="bg-bone p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow text-aurum">{p.phase}</span>
                <span className="font-mono text-sm text-graphite">{p.n}</span>
              </div>
              <h3 className="font-display mt-5 text-xl leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-counsel-ink/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SACS — named engagement, reaffirmation cycle as the urgency hook. The
          higher-ed reader must see themselves immediately. */}
      <Section ground="ink">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Named engagement · higher education</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              SACS accreditation-readiness, run against the reaffirmation clock.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-bone/85">
              <p>
                Reaffirmation does not move. The visiting committee arrives on a
                date set years out, and the institution&apos;s technology and
                data evidence is either defensible by then or it is not. The
                cost of finding out late is measured in findings, monitoring
                reports, and reputational exposure.
              </p>
              <p>
                The firm runs an independent readiness audit ahead of the cycle:
                the evidence assembled, the gaps surfaced while there is still
                time to close them, and the institution&apos;s narrative made
                defensible before the committee — not after.
              </p>
            </div>
            <div className="mt-9">
              <CTALink href="/engage#client" variant="onDark">
                Start a readiness audit
              </CTALink>
            </div>
          </div>

          {/* The clock as a small exhibit-styled panel. */}
          <aside className="border border-bone/20 p-7">
            <div className="flex items-center justify-between border-b border-bone/15 pb-4">
              <span className="eyebrow text-aurum">The cycle clock</span>
              <Mark size={24} className="text-aurum/70" />
            </div>
            <dl className="mt-6 space-y-5">
              {[
                {
                  t: "Reaffirmation",
                  d: "Fixed date, set on a ~10-year cycle. The deadline does not flex.",
                },
                {
                  t: "Evidence window",
                  d: "The technology and data record must be defensible well before the visit.",
                },
                {
                  t: "Where the firm fits",
                  d: "Early enough that surfaced gaps are still closable — the bespoke, high-touch read.",
                },
              ].map((row) => (
                <div key={row.t}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-bone/60">
                    {row.t}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-bone/85">
                    {row.d}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* Two handoffs. */}
      <Section ground="bone">
        <Eyebrow>Two handoffs</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          The right altitude for the need.
        </h2>
        <div className="mt-12 grid gap-px bg-counsel-ink/12 md:grid-cols-2">
          {/* Down to CIO Advisra — productized assessment. */}
          <div className="flex flex-col bg-bone p-7 sm:p-9">
            <span className="eyebrow text-aurum">Down → CIO Advisra</span>
            <h3 className="font-display mt-5 text-2xl leading-snug">
              Need the structured assessment, not the bespoke engagement?
            </h3>
            <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-counsel-ink/80">
              The bespoke accreditation audit — Jerri&apos;s judgment,
              high-touch — belongs to the firm. The productized six-pillar
              maturity assessment belongs to CIO Advisra. Same vertical, two
              altitudes. If you need the structured read, the firm routes you
              down to the program.
            </p>
            <div className="mt-7">
              <CTALink href="/cio-advisra" variant="outline">
                Go to CIO Advisra
              </CTALink>
            </div>
          </div>

          {/* Up to Expert Witness — the audits generate the authority. */}
          <div className="flex flex-col bg-bone p-7 sm:p-9">
            <span className="eyebrow text-aurum">Up → Expert Witness</span>
            <h3 className="font-display mt-5 text-2xl leading-snug">
              When a failure becomes contested.
            </h3>
            <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-counsel-ink/80">
              The audits are where the firm&apos;s forensic judgment is built
              and proven — the same muscle that, when an implementation failure
              becomes a matter, testifies to why it failed. The audit work is
              the credibility bridge to the witness work.
            </p>
            <div className="mt-7">
              <CTALink href="/expert-witness" variant="outline">
                See the expert-witness practice
              </CTALink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
