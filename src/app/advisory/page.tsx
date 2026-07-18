import type { Metadata } from "next";
import { clsx } from "@/lib/clsx";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";

export const metadata: Metadata = {
  title: "Advisory & Audits",
  description:
    "Judgment across the full lifecycle: pre-implementation strategy, audits (SACS readiness, Vendor Detox), and post-implementation remediation.",
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

// The verticals the named work reaches. Deliberately understated — a small
// line near the CTA that answers "is this me?" without turning the page into a
// directory.
const VERTICALS =
  "Higher education, financial services, mid-market companies, law firms, public-sector agencies, healthcare.";

function VerticalsLine({ onDark = false }: { onDark?: boolean }) {
  return (
    <p
      className={clsx(
        "mt-8 max-w-2xl text-sm leading-relaxed",
        onDark ? "text-brand-paper/55" : "text-brand-ink/60",
      )}
    >
      <span
        className={clsx(
          "font-mono text-xs uppercase tracking-wider",
          onDark ? "text-brand-paper/45" : "text-brand-ink/50",
        )}
      >
        Verticals
      </span>{" "}
      — {VERTICALS}
    </p>
  );
}

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory & Audits"
        title="The firm doesn't parachute in when it's broken. It has judgment before, during, and after."
        lede="One practice, organized as the full lifecycle — because that arc is the point. The same diagnostic judgment that decides readiness audits the build and remediates the aftermath."
      />

      {/* Judgment, not headcount — the advisory differentiator (firm voice),
          set as the lead, with the lifecycle beneath it. */}
      <Section ground="paper">
        <Eyebrow>Judgment, not headcount</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          What the firm sells is judgment — not bodies on a timeline.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/80">
          The read on whether you&apos;re ready, what&apos;s actually wrong, and
          the call to make. That judgment runs the full lifecycle — before,
          during, and after.
        </p>

        <div className="mt-14 grid gap-px bg-brand-ink/12 md:grid-cols-3">
          {lifecycle.map((p) => (
            <div key={p.n} className="bg-brand-paper p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow text-brand-secondary">{p.phase}</span>
                <span className="font-mono text-sm text-brand-slate">{p.n}</span>
              </div>
              <h3 className="font-display mt-5 text-xl leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-brand-ink/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Framing — the named work below is representative, not the full menu.
          Sets reader expectation before the first engagement section. */}
      <Section ground="ink">
        <Eyebrow>Representative work</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Named engagements, not the menu.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-paper/85">
          The work below shows how the firm&apos;s judgment gets applied. Each
          engagement covers a specific type of situation and names the
          institutional contexts where it applies. If the situation you&apos;re
          carrying isn&apos;t named here, the right first move is a conversation.
        </p>
        <div className="mt-9">
          <CTALink href="/engage" variant="onDark">
            Start a conversation
          </CTALink>
        </div>
      </Section>

      {/* Named engagement — Vendor Detox. Lives in the audit family alongside
          SACS: assess, then tell you the truth, pointed at the vendor stack.
          (Pricing display is a pricing-page decision — kept off here.) */}
      <Section ground="paper">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Named engagement</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              Vendor Detox&trade; — rationalize the stack, on a clock.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-brand-ink/80">
              <p>
                A focused diagnostic that maps your vendor and contract stack,
                surfaces the redundancy, overspend, and risk hiding in it, and
                returns a clear consolidate-or-cut recommendation. The same
                assess-then-tell-you-the-truth muscle as the firm&apos;s audits,
                pointed at the vendor portfolio.
              </p>
            </div>
            <VerticalsLine />
            <div className="mt-9">
              <CTALink href="/engage" variant="solid">
                Scope a Vendor Detox&trade;
              </CTALink>
            </div>
          </div>

          {/* Callout box — SACS-style, restyled for the light ground. */}
          <aside className="border border-brand-ink/15 p-7">
            <div className="flex justify-end border-b border-brand-ink/12 pb-4">
              <Mark size={24} className="text-brand-primary/70" />
            </div>
            <dl className="mt-6 space-y-5">
              {[
                {
                  t: "Productized",
                  d: "Three scoped tiers, with customizable options available.",
                },
                {
                  t: "On a clock",
                  d: "A defined 30–45 day window. The engagement clock starts on receipt of your complete data package.",
                },
              ].map((row) => (
                <div key={row.t}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-brand-ink/60">
                    {row.t}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-ink/80">
                    {row.d}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* SACS — audit practice, reaffirmation cycle as the urgency hook. The
          higher-ed reader must see themselves immediately. */}
      <Section ground="ink">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Audit practice · higher education</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              SACS accreditation-readiness, run against the reaffirmation clock.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-brand-paper/85">
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
            <VerticalsLine onDark />
            <div className="mt-9">
              <CTALink href="/engage" variant="onDark">
                Start a readiness audit
              </CTALink>
            </div>
          </div>

          {/* The clock as a small exhibit-styled panel. */}
          <aside className="border border-brand-paper/20 p-7">
            <div className="flex items-center justify-between border-b border-brand-paper/15 pb-4">
              <span className="eyebrow text-brand-secondary">The cycle clock</span>
              <Mark size={24} className="text-brand-paper/70" />
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
                  <dt className="font-mono text-xs uppercase tracking-wider text-brand-paper/60">
                    {row.t}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-paper/85">
                    {row.d}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* Advisory practice — Vendor & System Selection. Variable-scope judgment
          applied to the major system decision. */}
      <Section ground="paper">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Advisory practice</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              Vendor &amp; System Selection — the right choice, run cleanly.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-brand-ink/80">
              <p>
                The major system decision — core banking, matter management,
                SIS, ERP, EHR — is the one most institutions run infrequently
                and least well. Requirements aren&apos;t fully surfaced. The RFP
                reflects vendor language rather than institutional need.
                Evaluation collapses into demos and gut feel. The firm runs the
                selection process the way it should be run: requirements built
                from the institution&apos;s actual work, an RFP that asks what
                matters, an evaluation that produces a defensible recommendation.
                Three entry points depending on where the client needs help —
                from requirements through contract, or joining the work already
                in flight.
              </p>
            </div>
            <VerticalsLine />
            <div className="mt-9">
              <CTALink href="/engage" variant="solid">
                Scope a Selection Engagement
              </CTALink>
            </div>
          </div>

          {/* Callout box — SACS-style, restyled for the light ground. */}
          <aside className="border border-brand-ink/15 p-7">
            <div className="flex justify-end border-b border-brand-ink/12 pb-4">
              <Mark size={24} className="text-brand-primary/70" />
            </div>
            <dl className="mt-6 space-y-5">
              {[
                {
                  t: "Three entry points",
                  d: "Full-scope (requirements through contract), scoped (requirements, RFP, and evaluation with contract handoff to client), or evaluation-only (client has the RFP and needs help scoring and deciding).",
                },
                {
                  t: "On the clock",
                  d: "A 16–24 week engagement reflecting the real cadence of institutional selection decisions. The clock isn't compressed — the discipline is.",
                },
              ].map((row) => (
                <div key={row.t}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-brand-ink/60">
                    {row.t}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-ink/80">
                    {row.d}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* Two handoffs. */}
      <Section ground="deep">
        <Eyebrow>Two handoffs</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          The right altitude for the need.
        </h2>
        <div className="mt-12 grid gap-px bg-brand-paper/15 md:grid-cols-2">
          {/* Down to CIO Advisra — productized assessment. */}
          <div className="flex flex-col bg-brand-paper p-7 text-brand-ink sm:p-9">
            <span className="eyebrow text-brand-secondary">Down → CIO Advisra</span>
            <h3 className="font-display mt-5 text-2xl leading-snug">
              Need the structured assessment, not the bespoke engagement?
            </h3>
            <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-brand-ink/80">
              The bespoke accreditation audit — the firm&apos;s judgment,
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
          <div className="flex flex-col bg-brand-paper p-7 text-brand-ink sm:p-9">
            <span className="eyebrow text-brand-secondary">Up → Expert Witness</span>
            <h3 className="font-display mt-5 text-2xl leading-snug">
              When a failure becomes contested.
            </h3>
            <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-brand-ink/80">
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
