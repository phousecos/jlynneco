import type { Metadata } from "next";
import { clsx } from "@/lib/clsx";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Credit Unions",
  description:
    "Independent, fixed-fee technology advisory for credit unions and community banks. Requirements, selection, governance, and stabilization — one side of the table, no vendor compensation.",
};

// The engagement, in the order it actually happens. Requirements first — the
// stage most institutions skip past on their way to a shortlist someone else set.
const stages = [
  {
    n: "01",
    when: "Requirements",
    title: "Requirements definition & readiness",
    body: "The firm documents what your institution actually does before anyone describes what a system could do — process inventory, data ownership, integration reality, regulatory obligations, and the constraints your staff work around every day without telling anyone. The output is a requirements set you own: vendor-neutral, testable, and written in your language rather than a product's.",
    pull: "Requirements are the first control. Everything downstream inherits them — the contract, the test plan, and the argument you'll have in year three.",
  },
  {
    n: "02",
    when: "Selection",
    title: "System selection and RFP",
    body: "A structured RFP, scored evaluation against your requirements, reference diligence that goes past the list the vendor hands you, and a documented decision record your board can read. Core, lending and loan origination, digital banking, HR and payroll, financials, CRM, data platform. The firm holds no relationship with any of them.",
    pull: null,
  },
  {
    n: "03",
    when: "Governance",
    title: "Implementation governance",
    body: "Steering committee charter, decision rights, stage gates, and independent status reporting to the board and the Supervisory Committee — reporting the integrator does not write. Across two decades of public audit findings on failed enterprise implementations, the first recurring mechanism is the same: governance delegated to the vendor. It is delegated by default, never by decision, and it is visible in the minutes long before it is visible in the budget.",
    pull: null,
  },
  {
    n: "04",
    when: "Stabilization",
    title: "Conversion and operational excellence",
    body: "Ninety- and one-hundred-eighty-day stabilization. Benefits measured against the business case that justified the spend. Verification that reconciliation, exception reporting, and access controls are not merely configured but running — with someone named to watch them.",
    pull: "If something is wrong inside this system right now, what would tell you?",
  },
];

// Between projects, the recurring engagements. Each maps to a firm practice.
const ongoing = [
  {
    label: "Vendor Detox™",
    title: "Vendor stack audit",
    body: "A fixed-scope review of every vendor you pay — what it costs, what it duplicates, what it's contractually locked to, and what happens if it fails. Most institutions this size have never counted them.",
    href: "/advisory",
    cta: "See the audit practice",
  },
  {
    label: "Independent review",
    title: "IT maturity assessment",
    body: "Six pillars — governance, security and risk, operations, infrastructure, data, and people. Scored, evidenced, and written for a board packet rather than a consultant's deck.",
    href: "/cio-advisra",
    cta: "See the assessment",
  },
  {
    label: "CIO Advisra",
    title: "Fractional CIO",
    body: "For the institution that cannot justify a full-time CIO and has outgrown running technology out of operations. A monthly retainer, a named person — not a bench.",
    href: "/cio-advisra",
    cta: "Go to CIO Advisra",
  },
];

const fitYes = [
  "You're between $100M and $500M in assets and have no CIO.",
  "A core or digital banking decision is somewhere in the next twenty-four months.",
  "You just finished a conversion and something doesn't feel finished.",
  "Your board or Supervisory Committee has started asking questions nobody has a clean answer to.",
  "You want the analysis to belong to you when the engagement ends.",
];

const fitNo = [
  "You want a vendor recommendation rather than a decision process.",
  "You want the fee contingent on savings. The firm doesn't price that way, for reasons a Supervisory Committee will recognize.",
  "You need staff augmentation or implementation labor.",
  "You're above $1B and already have a CIO. Call for the assessment, not the advisory.",
];

export default function CreditUnionsPage() {
  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="Credit unions & community banks · $100M–$500M in assets"
        title={
          <>
            It starts before the RFP. It starts with{" "}
            <em className="not-italic text-aurum">requirements</em>.
          </>
        }
        lede="If your core vendor helps you write your requirements, the RFP gets written to that vendor's capabilities and the decision is made before anyone scores a proposal. The firm works for you, on one side of the table, for a fixed fee — no vendor commissions, no contingency, no reseller agreements."
      >
        <div className="flex flex-wrap items-center gap-4">
          <CTALink href={site.discoveryCall} variant="onDark">
            Book a 30-minute call
          </CTALink>
          <CTALink href="#work" variant="ghost" className="text-bone/80">
            See how the firm works <span aria-hidden>→</span>
          </CTALink>
        </div>
      </PageHero>

      {/* How the firm works — four stages, in the order they happen. A hairline
          top rule sets this dark section apart from the (also dark) hero. */}
      <Section ground="ink" id="work" className="border-t border-bone/15">
        <Eyebrow>How the firm works</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Four stages, in the order they actually happen.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/85">
          Most institutions bring in help at stage two, after the shortlist is
          already set. By then the expensive decisions have been made — quietly,
          and by someone else.
        </p>

        <div className="mt-14 space-y-px bg-bone/15">
          {stages.map((s, i) => (
            <div
              key={s.n}
              className="grid gap-6 bg-counsel-ink py-9 sm:grid-cols-[160px_1fr] sm:gap-10"
            >
              <div className="flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-2">
                <span className="font-mono text-sm text-bone/50">{s.n}</span>
                <span
                  className={clsx(
                    "eyebrow",
                    i === 0 ? "text-aurum" : "text-bone/70",
                  )}
                >
                  {s.when}
                </span>
              </div>
              <div className="max-w-2xl">
                <h3 className="font-display text-xl leading-snug sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-bone/80">
                  {s.body}
                </p>
                {s.pull && (
                  <p className="font-display mt-6 border-l-2 border-aurum pl-5 text-lg leading-snug text-bone">
                    {s.pull}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ongoing — the between-projects engagements, each routed to a practice. */}
      <Section ground="bone">
        <Eyebrow>Ongoing</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Between projects, the same problems keep their shape.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-counsel-ink/80">
          Three engagements for institutions that are not converting anything
          this year, and still need someone whose only client is them.
        </p>

        <div className="mt-12 grid gap-px bg-counsel-ink/12 md:grid-cols-3">
          {ongoing.map((o) => (
            <div key={o.title} className="flex flex-col bg-bone p-7 sm:p-8">
              <span className="eyebrow text-aurum">{o.label}</span>
              <h3 className="font-display mt-5 text-xl leading-snug">
                {o.title}
              </h3>
              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-counsel-ink/80">
                {o.body}
              </p>
              <div className="mt-6">
                <CTALink href={o.href} variant="ghost">
                  {o.cta} <span aria-hidden>→</span>
                </CTALink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Fit — worth being direct about. Two columns: works / doesn't. */}
      <Section ground="ink">
        <Eyebrow>Fit</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Worth being direct about.
        </h2>

        <div className="mt-12 grid gap-px bg-bone/15 md:grid-cols-2">
          <div className="bg-counsel-ink p-7 sm:p-9">
            <span className="eyebrow text-aurum">This works if</span>
            <ul className="mt-6 space-y-px">
              {fitYes.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 border-t border-bone/12 py-3 text-[0.98rem] leading-relaxed text-bone/90 first:border-t-0"
                >
                  <span className="font-mono text-aurum" aria-hidden>
                    +
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-counsel-ink p-7 sm:p-9">
            <span className="eyebrow text-bone/60">This doesn&apos;t</span>
            <ul className="mt-6 space-y-px">
              {fitNo.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 border-t border-bone/12 py-3 text-[0.98rem] leading-relaxed text-bone/60 first:border-t-0"
                >
                  <span className="font-mono text-bone/40" aria-hidden>
                    &minus;
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Independence & the principal — the credibility basis, firm voice. */}
      <Section ground="bone">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Eyebrow>Who stands behind the work</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
              Twenty-five years running enterprise technology inside
              institutions that could not afford to get it wrong.
            </h2>
          </div>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-counsel-ink/80">
            <p>
              Deputy Chief Information Officer at Columbia University, and
              Associate Vice Chancellor for Enterprise Applications at
              UNC–Chapel Hill, where the founding principal led a portfolio of
              more than $60 million in implementations and the recovery of one
              that had already failed.
            </p>
            <p>
              She now studies how these systems fail — coding the public audit
              and litigation record of enterprise implementations for what
              broke, when anyone noticed, and what control should have caught
              it. That work is also why attorneys retain the firm as an expert
              witness in enterprise systems disputes.
            </p>

            <dl className="mt-8 border-t border-counsel-ink/15">
              {[
                { k: "Credentials", d: "Ed.D. · PMP · CSM · ITIL Foundation" },
                {
                  k: "Fees",
                  d: "Fixed-scope, quoted before the engagement starts",
                },
                {
                  k: "Independence",
                  d: "No vendor compensation, referral fees, or reseller agreements",
                },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex flex-col gap-1 border-b border-counsel-ink/15 py-4 sm:flex-row sm:gap-6"
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-counsel-ink/55 sm:w-32 sm:shrink-0 sm:pt-0.5">
                    {row.k}
                  </dt>
                  <dd className="text-[0.98rem] leading-relaxed text-counsel-ink/85">
                    {row.d}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTALink href="/firm" variant="outline">
                About the firm
              </CTALink>
              <CTALink href="/expert-witness" variant="ghost">
                The full CV counsel vets <span aria-hidden>→</span>
              </CTALink>
            </div>
          </div>
        </div>
      </Section>

      {/* Close — start with a conversation. */}
      <Section ground="deep">
        <div className="max-w-2xl">
          <h2 className="font-display max-w-xl text-3xl leading-tight sm:text-4xl">
            Start with a conversation, not a proposal.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone/80">
            Thirty minutes. Bring the decision you&apos;re facing, or the one you
            already made and can&apos;t stop thinking about. If the firm
            isn&apos;t the right fit, it will say so and tell you who is.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CTALink href={site.discoveryCall} variant="onDark">
              Book a 30-minute call
            </CTALink>
            <CTALink href="/engage" variant="ghost" className="text-bone/80">
              Engage the firm <span aria-hidden>→</span>
            </CTALink>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-bone/45">
            Durham, NC · Serving institutions nationally
          </p>
        </div>
      </Section>
    </>
  );
}
