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
} from "@/components/ui/icons";
import { NextStep } from "@/components/ui/NextStep";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Financial Services",
  description:
    "Independent governance advisory for banks and credit unions governing core conversions, mergers, and acquisitions — from due diligence through stabilization.",
};

// What financial institution leadership must be able to demonstrate.
const whyItMatters = [
  "Satisfy examiner expectations for oversight of the conversion or merger",
  "Uphold the board's and supervisory committee's fiduciary duty",
  "Protect member and customer trust through the transition",
  "Maintain safety and soundness while the institution changes underneath it",
  "Hold the core provider and integration vendors accountable to contract and timeline",
  "Preserve institutional knowledge as two organizations become one",
];

// The core conversion lifecycle — before, during, and after cutover.
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

// What an M&A governance engagement covers, due diligence through Day One
// and beyond.
const maAreas = [
  "Due Diligence & Deal Governance",
  "Integration Planning & Sequencing",
  "Systems, Charter & Core Consolidation",
  "Vendor & Contract Rationalization",
  "Cultural & Workforce Integration",
  "Day One Readiness",
  "Board & Regulatory Reporting",
  "Post-Merger Stabilization",
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
  "A core conversion or M&A governance framework built for the institution",
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
        lede="Core conversions and mergers and acquisitions are among the most consequential decisions a financial institution will make. We give boards and executive leadership independent governance oversight across every phase—from due diligence through stabilization."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Financial Services Governance Conversation
        </CTALink>
      </PageHero>

      {/* The stakes — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            A core conversion touches every account, every transaction, and
            every member or customer relationship the institution holds. A
            merger or acquisition touches all of that, plus two workforces,
            two vendor ecosystems, and two cultures becoming one.
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
              {whyItMatters.map((item) => (
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

      {/* Core conversion lifecycle — mist band, five phases. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
          <Eyebrow>Governing the core conversion</Eyebrow>
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

      {/* M&A governance — paper grid. */}
      <Section ground="paper">
        <Eyebrow>Governing mergers &amp; acquisitions</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          From due diligence to Day One, and everything after.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          Whether it&apos;s a merger of equals, an acquisition, a branch
          acquisition, or a charter conversion, the board and executive team
          need independent visibility into how the deal is being governed—not
          just how it&apos;s being closed.
        </p>

        <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {maAreas.map((area) => (
            <li key={area} className="flex items-center gap-3 text-brand-ink/85">
              <span
                aria-hidden
                className="h-4 w-4 shrink-0 rounded-[3px] border border-brand-primary/60"
              />
              <span className="text-[0.95rem] leading-snug">{area}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* The philosophy statement — flagship blue banner, mirrors the firm's
          homepage thesis in financial-services terms. */}
      <section className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 sm:py-20">
          <p className="font-display font-display-hero text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-brand-paper/80">
              The core doesn&apos;t fail the institution.
            </span>
            <br />
            Ungoverned decisions do.
          </p>
        </div>
      </section>

      {/* Who we serve — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Built for the institutions entrusted with members&apos; and
          customers&apos; financial futures.
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ label, Icon }) => (
            <li key={label} className="flex items-start gap-3 text-brand-paper/85">
              <Icon className="h-6 w-6 shrink-0 text-brand-secondary" />
              <span className="text-[0.95rem] leading-snug">{label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* What you'll receive — paper grid. */}
      <Section ground="paper">
        <Eyebrow>What you&apos;ll receive</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Every Financial Services Governance engagement includes:
        </h2>
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {deliverables.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-brand-ink/10 pb-4 text-brand-ink/85"
            >
              <IconCheck className="h-5 w-5 shrink-0 text-brand-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <NextStep
        prompt="Preparing for a decision, not yet mid-conversion?"
        label="Learn about Technology Governance Readiness"
        href="/technology-governance-readiness"
      />

      {/* Closing — flagship blue. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">Begin with confidence</p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            The institution&apos;s next core conversion or merger deserves more
            than hope.
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
