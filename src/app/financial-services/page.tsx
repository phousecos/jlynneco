import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import {
  IconCheck,
  IconBank,
  IconRoundTable,
  IconUsers,
  IconMerge,
  IconShield,
  IconTransform,
  IconLifeBuoy,
  IconCompass,
  IconEye,
  IconClipboardCheck,
} from "@/components/ui/icons";
import { NextStep } from "@/components/ui/NextStep";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Financial Services",
  description:
    "Independent governance advisory for banks and credit unions: institutional transformation, regulatory and operational change, and transformation assurance and recovery.",
};

// The three buckets of work where financial institution leadership needs
// independent governance. Ordered from largest-scope change to the
// assurance/recovery layer that spans all of them.
const buckets = [
  {
    Icon: IconTransform,
    title: "Institutional Transformation",
    body: "The initiatives that fundamentally change how the institution operates and serves its members or customers.",
    items: ["Core conversions", "M&A integration", "Digital banking transformation"],
  },
  {
    Icon: IconShield,
    title: "Regulatory & Operational Change",
    body: "The initiatives regulators, examiners, and operational risk drive—and that boards must be able to account for.",
    items: ["Regulatory remediation", "Payments modernization", "Infrastructure & cloud transformation"],
  },
  {
    Icon: IconLifeBuoy,
    title: "Transformation Assurance & Recovery",
    body: "Independent governance oversight across the life of any initiative above—before, during, and if needed, after it goes off course.",
    items: [
      "Independent governance assessment",
      "Implementation oversight",
      "Readiness assurance",
      "Project recovery",
    ],
  },
];

// The core conversion lifecycle — before, during, and after cutover. A
// closer look at the flagship item inside Institutional Transformation.
const conversionPhases = [
  {
    n: "1",
    title: "Selection & Contract",
    body: "Core provider due diligence and contract governance.",
  },
  {
    n: "2",
    title: "Planning & Design",
    body: "Conversion planning, data mapping, and organizational readiness.",
  },
  {
    n: "3",
    title: "Testing & Parallel",
    body: "Data integrity, testing rigor, and go/no-go decision governance.",
  },
  {
    n: "4",
    title: "Cutover",
    body: "Weekend-of governance, escalation authority, executive decision support.",
  },
  {
    n: "5",
    title: "Stabilization",
    body: "Post-conversion issue resolution, member impact, and lessons learned.",
  },
];

// What a single merger can trigger simultaneously — the case for treating
// M&A as a super-category rather than one workstream among many.
const maWorkstreams = [
  "Core consolidation",
  "Data migration",
  "Digital banking conversion",
  "Payments migration",
  "Cybersecurity integration",
  "Vendor rationalization",
  "Operating-model redesign",
  "Regulatory commitments",
  "Customer communications",
  "Workforce change",
];

// The governance continuum — the four ways leadership engages independent
// governance across the life of an initiative, each linked to the service
// that delivers it.
const continuum = [
  {
    n: "1",
    Icon: IconCompass,
    title: "Governance Design",
    body: "Establish the governance model and decision rights before the initiative begins.",
    href: "/executive-governance-advisory",
  },
  {
    n: "2",
    Icon: IconEye,
    title: "Governance Oversight",
    body: "Ongoing independent visibility into governance conditions while the initiative is underway.",
    href: "/governance-watch",
  },
  {
    n: "3",
    Icon: IconClipboardCheck,
    title: "Readiness Assurance",
    body: "Objective confirmation that governance can support the decision or milestone ahead.",
    href: "/technology-governance-readiness",
  },
  {
    n: "4",
    Icon: IconLifeBuoy,
    title: "Recovery",
    body: "When the initiative moves beyond acceptable risk, governing the path back.",
    href: "/technology-transformation-recovery",
  },
];

// The institutions and leadership bodies this work serves.
const audiences = [
  {
    label: "Credit unions and community banks preparing for a core conversion",
    Icon: IconBank,
  },
  {
    label: "Boards of Directors and Supervisory Committees",
    Icon: IconRoundTable,
  },
  { label: "CEOs, COOs, and CIOs leading the transition", Icon: IconUsers },
  {
    label: "Institutions pursuing a merger, acquisition, or charter conversion",
    Icon: IconMerge,
  },
  {
    label: "Institutions preparing for a safety-and-soundness or IT examination",
    Icon: IconShield,
  },
  {
    label: "Executive sponsors and steering committees",
    Icon: IconTransform,
  },
];

// What every Financial Services Governance engagement delivers.
const deliverables = [
  "Financial Services Governance Readiness Brief",
  "A governance framework built for the initiative—conversion, merger, remediation, or transformation",
  "Executive and board-level reporting cadence",
  "Examiner-ready governance documentation",
  "Core provider and vendor oversight structure",
  "Executive Debrief Session",
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Services"
        title={
          <>
            Governing the initiatives that{" "}
            <em className="not-italic text-brand-secondary">reshape</em> a
            bank or credit union.
          </>
        }
        lede="Core conversions, mergers, regulatory remediation, and digital transformation are among the most consequential decisions a financial institution will make. We give boards and executive leadership independent governance oversight across all of it—design, oversight, readiness, and recovery."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Financial Services Governance Conversation
        </CTALink>
      </PageHero>

      {/* The stakes — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            A core conversion touches every account, transaction, and
            relationship the institution holds. A merger touches all of that,
            plus two workforces, two vendor ecosystems, and two cultures
            becoming one. A regulatory remediation program touches the
            institution&apos;s standing with its primary regulator.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            If examiners, the board, or members asked how this decision was
            governed today,{" "}
            <span className="text-brand-primary">
              could the institution answer with confidence?
            </span>
          </p>
        </div>
      </Section>

      {/* Why independent governance matters here — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Why independent governance matters here</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Financial institution leadership carries a level of exposure most
          transformations don&apos;t.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-brand-paper/55">
              An engagement helps leadership
            </p>
            <ul className="mt-5 divide-y divide-brand-paper/10 border-y border-brand-paper/10">
              {[
                "Satisfy examiner expectations for oversight of the conversion or merger",
                "Uphold the board's and supervisory committee's fiduciary duty",
                "Protect member and customer trust through the transition",
                "Maintain safety and soundness while the institution changes underneath it",
                "Hold the core provider and integration vendors accountable to contract and timeline",
                "Preserve institutional knowledge as two organizations become one",
              ].map((item) => (
                <li key={item} className="flex gap-3 py-3.5 text-brand-paper/85">
                  <span aria-hidden className="text-brand-secondary">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-brand-paper/80 lg:self-center">
            Boards, supervisory committees, and executive teams are
            accountable to examiners, insurers, and the members or
            shareholders who trust the institution with their money{" "}
            <span className="text-brand-tertiary">
              before, during, and after the change goes live.
            </span>
          </p>
        </div>
      </Section>

      {/* The three buckets — paper, the core of the page's architecture. */}
      <Section ground="paper">
        <Eyebrow>Where governance is at stake</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Three kinds of change, one governance question underneath all of
          them.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-brand-ink/12 bg-brand-ink/12 lg:grid-cols-3">
          {buckets.map(({ Icon, title, body, items }) => (
            <div key={title} className="flex flex-col bg-brand-paper p-8">
              <Icon className="h-8 w-8 text-brand-primary" />
              <h3 className="font-display mt-5 text-xl leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-ink/75">
                {body}
              </p>
              <ul className="mt-6 space-y-2 border-t border-brand-ink/10 pt-5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.9rem] leading-snug text-brand-ink/80"
                  >
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Core conversion lifecycle — mist band, a closer look at the
          flagship item in Institutional Transformation. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>A closer look: the core conversion</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Independent governance across every phase of the conversion.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {conversionPhases.map((phase) => (
              <div
                key={phase.n}
                className="border-t-2 border-brand-primary/30 pt-4"
              >
                <span className="font-display text-3xl leading-none text-brand-primary">
                  {phase.n}
                </span>
                <h3 className="font-display mt-3 text-xl leading-snug">
                  {phase.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-ink/75">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M&A as super-category — paper. */}
      <Section ground="paper">
        <Eyebrow>A closer look: mergers &amp; acquisitions</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          A single merger can trigger every bucket above at once.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          A merger or acquisition can simultaneously trigger core
          consolidation, data migration, digital banking conversion, payments
          migration, cybersecurity integration, vendor rationalization,
          operating-model redesign, regulatory commitments, customer
          communications, and workforce change.
        </p>
        <p className="mt-4 max-w-3xl font-display text-xl leading-snug text-brand-ink sm:text-2xl">
          Few institutions govern that as one program.{" "}
          <span className="text-brand-primary">
            Most govern it as ten uncoordinated ones.
          </span>
        </p>

        <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-5">
          {maWorkstreams.map((item) => (
            <li key={item} className="flex items-center gap-3 text-brand-ink/85">
              <span
                aria-hidden
                className="h-4 w-4 shrink-0 rounded-[3px] border border-brand-primary/60"
              />
              <span className="text-[0.95rem] leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* The differentiator — dark ground, the firm's positioning question. */}
      <Section ground="deep">
        <Eyebrow>The governance continuum</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Plenty of firms can provide implementation resources. We answer a
          different question.
        </h2>
        <p className="mt-6 max-w-3xl border-l-2 border-brand-secondary pl-6 font-display text-2xl leading-snug text-brand-paper sm:text-3xl">
          Who is independently assessing whether the institution&apos;s
          governance is capable of carrying the transformation?
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-paper/80">
          That question applies whether the precipitating event is a
          nine-figure core conversion, a bank merger, a regulatory
          remediation program, or a digital transformation.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {continuum.map((stage) => (
            <Link
              key={stage.n}
              href={stage.href}
              className="group flex flex-col border-t-2 border-brand-paper/25 pt-4 transition-colors hover:border-brand-secondary"
            >
              <div className="flex items-center justify-between">
                <stage.Icon className="h-6 w-6 text-brand-secondary" />
                <span className="font-mono text-xs text-brand-paper/40">
                  {stage.n}
                </span>
              </div>
              <h3 className="font-display mt-4 text-lg leading-snug text-brand-paper">
                {stage.title}
              </h3>
              <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-brand-paper/70">
                {stage.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-paper/85 transition-colors group-hover:text-brand-secondary">
                Learn more
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Who we serve — paper. */}
      <Section ground="paper">
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Built for the institutions entrusted with members&apos; and
          customers&apos; financial futures.
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ label, Icon }) => (
            <li key={label} className="flex items-start gap-3 text-brand-ink/85">
              <Icon className="h-6 w-6 shrink-0 text-brand-primary" />
              <span className="text-[0.95rem] leading-snug">{label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* What you'll receive — dark ground. */}
      <Section ground="deep">
        <Eyebrow>What you&apos;ll receive</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Every Financial Services Governance engagement includes:
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {deliverables.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-brand-paper/10 pb-4 text-brand-paper/90"
            >
              <IconCheck className="h-5 w-5 shrink-0 text-brand-tertiary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <NextStep
        prompt="Signs of trouble already showing?"
        label="Learn about Technology Transformation Recovery"
        href="/technology-transformation-recovery"
      />

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Begin with confidence</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            The institution&apos;s next transformation deserves more than
            hope.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            Bring in independent governance oversight before the stakes are
            highest—so the board, the examiners, and the members can trust how
            the decision was made.
          </p>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule a Financial Services Governance Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
