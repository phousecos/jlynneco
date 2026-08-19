import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import {
  IconCheck,
  IconHealthCross,
  IconMerge,
  IconSpark,
  IconLifeBuoy,
  IconShield,
  IconRoundTable,
  IconUsers,
  IconTransform,
  IconCompass,
  IconEye,
  IconClipboardCheck,
} from "@/components/ui/icons";
import { NextStep } from "@/components/ui/NextStep";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "Independent governance advisory for health systems and hospitals: clinical and enterprise systems transformation, M&A and health system integration, digital health, and transformation assurance and recovery.",
};

// The four areas, parallel to Financial Services and Higher Education. Ordered
// from the flagship enterprise transformation through the M&A super-category,
// digital health, to the assurance/recovery layer that spans all three.
const areas = [
  {
    Icon: IconHealthCross,
    title: "Clinical & Enterprise Systems Transformation",
    body: "EHR, ERP, revenue-cycle, workforce, and supply-chain programs that cross clinical, financial, and operational lines at once.",
    items: [
      "EHR transformation",
      "ERP & revenue-cycle platforms",
      "Workforce & supply-chain systems",
    ],
  },
  {
    Icon: IconMerge,
    title: "M&A & Health System Integration",
    body: "The technology and operating consequences of consolidation—independent of the transaction itself.",
    items: [
      "EHR consolidation & migration",
      "Identity, data & revenue-cycle integration",
      "Infrastructure & application rationalization",
    ],
  },
  {
    Icon: IconSpark,
    title: "Digital Health & Care Delivery Transformation",
    body: "Major initiatives that change how patients and clinicians interact with the organization.",
    items: [
      "Patient portals & digital front door",
      "Telehealth & remote monitoring",
      "AI-enabled clinical & administrative workflows",
    ],
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

// What a single health system consolidation can trigger simultaneously — the
// case for treating M&A as a portfolio of transformations, not one workstream.
const maWorkstreams = [
  "EHR migration",
  "Identity & access",
  "Revenue-cycle consolidation",
  "Data integration",
  "Cybersecurity",
  "ERP & infrastructure",
  "Application rationalization",
  "Operating-model redesign",
  "Regulatory commitments",
  "Workforce change",
];

// The governance questions digital health raises — deliberately about
// authority and accountability, not the technology itself.
const digitalHealthQuestions = [
  "Who owns the transformation?",
  "Who has authority over workflow changes?",
  "How are clinical and operational risks surfaced?",
  "How are technology, privacy, security, compliance, and patient-impact decisions reconciled?",
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

// The leadership bodies and roles this work serves.
const audiences = [
  { label: "Boards of Directors and health system leadership", Icon: IconRoundTable },
  { label: "CEOs, COOs, CIOs, and CMIOs leading the transition", Icon: IconUsers },
  { label: "CFOs and revenue-cycle leadership", Icon: IconHealthCross },
  {
    label: "Organizations pursuing a merger, acquisition, or divestiture",
    Icon: IconMerge,
  },
  { label: "Compliance, privacy, and patient-safety officers", Icon: IconShield },
  { label: "Executive sponsors and steering committees", Icon: IconTransform },
];

// What every Healthcare Governance engagement delivers.
const deliverables = [
  "Healthcare Governance Readiness Brief",
  "A governance framework built for the initiative—EHR, ERP, integration, or digital health",
  "Executive and board-level reporting cadence",
  "Regulatory- and accreditation-ready governance documentation",
  "EHR, ERP, and integration-vendor oversight structure",
  "Executive Debrief Session",
];

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        eyebrow="Healthcare"
        title={
          <>
            Governing the transformations where{" "}
            <em className="not-italic text-brand-secondary">
              disruption reaches the patient.
            </em>
          </>
        }
        lede="Clinical and enterprise systems transformation, health system integration, and digital health initiatives are among the most consequential decisions a health system will make. We give boards and executive leadership independent governance oversight across all of it—design, oversight, readiness, and recovery."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Healthcare Governance Conversation
        </CTALink>
      </PageHero>

      {/* The stakes — paper. */}
      <Section ground="paper">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            The opportunity in healthcare is not technology consulting. It is
            governance of technology-enabled transformations where
            operational disruption can have serious clinical, financial,
            regulatory, and organizational consequences.
          </p>
          <p className="font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            If the board, regulators, or patients asked how this decision was
            governed today,{" "}
            <span className="text-brand-primary">
              could the organization answer with confidence?
            </span>
          </p>
        </div>
      </Section>

      {/* Why independent governance matters here — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Why independent governance matters here</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Health system leadership carries a level of exposure most
          transformations don&apos;t.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-brand-paper/55">
              An engagement helps leadership
            </p>
            <ul className="mt-5 divide-y divide-brand-paper/10 border-y border-brand-paper/10">
              {[
                "Satisfy regulatory and accreditation expectations for oversight of the transformation",
                "Uphold the board's fiduciary duty for major clinical and enterprise decisions",
                "Protect patient safety and patient trust through the transition",
                "Maintain clinical and financial operations while the organization changes underneath it",
                "Hold the EHR vendor, integration partners, and system integrators accountable to contract and timeline",
                "Reconcile clinical, IT, finance, compliance, and patient-experience interests before they collide mid-program",
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
            Boards and executive teams are accountable to regulators,
            accreditors, and the patients who trust the organization with
            their care{" "}
            <span className="text-brand-tertiary">
              before, during, and after the change goes live.
            </span>
          </p>
        </div>
      </Section>

      {/* The four areas — paper, the core of the page's architecture. */}
      <Section ground="paper">
        <Eyebrow>Where governance is at stake</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Four situations, one governance question underneath all of them.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-brand-ink/12 bg-brand-ink/12 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ Icon, title, body, items }) => (
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

      {/* Closer look #1: clinical & enterprise systems — mist band. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <Container>
          <Eyebrow>A closer look: clinical &amp; enterprise systems</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Technology decisions here cross multiple domains at once.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
            EHR transformations are the flagship event, but the governance
            challenge isn&apos;t EHR-specific. It runs across EHR, ERP,
            revenue-cycle platforms, workforce systems, supply chain, and
            other enterprise-wide programs—wherever clinical operations, IT,
            finance, compliance, and patient experience have to make
            decisions together.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium text-brand-ink/70 sm:text-base">
            {["Clinical operations", "IT", "Finance", "Compliance", "Patient experience"].map(
              (node, i, arr) => (
                <span key={node} className="flex items-center gap-3">
                  <span className="border border-brand-primary/30 bg-brand-paper px-4 py-2">
                    {node}
                  </span>
                  {i < arr.length - 1 && (
                    <span aria-hidden className="text-brand-primary/50">
                      ↔
                    </span>
                  )}
                </span>
              ),
            )}
          </div>

          <p className="mt-8 max-w-3xl font-display text-xl leading-snug text-brand-ink sm:text-2xl">
            A technically successful implementation can still create
            operational problems{" "}
            <span className="text-brand-primary">
              if those interests aren&apos;t governed effectively.
            </span>
          </p>
        </Container>
      </section>

      {/* Closer look #2: M&A as super-category — paper. */}
      <Section ground="paper">
        <Eyebrow>A closer look: M&amp;A &amp; health system integration</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Technology transformation governance for healthcare M&amp;A.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          Hospitals acquiring physician practices, health systems combining,
          hospitals joining larger systems, private-equity-backed platform
          consolidation, and organizations divesting facilities or service
          lines all create technology-governance complexity—EHR migration,
          identity and access, revenue-cycle consolidation, data integration,
          cybersecurity, ERP, infrastructure, and application
          rationalization.
        </p>
        <p className="mt-4 max-w-3xl font-display text-xl leading-snug text-brand-ink sm:text-2xl">
          We don&apos;t compete with the transaction advisor.{" "}
          <span className="text-brand-primary">
            We govern the technology and operating transformation the
            transaction creates.
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

      {/* Closer look #3: digital health — dark ground. Governance, not a
          digital-health product consultancy. */}
      <Section ground="deep">
        <Eyebrow>A closer look: digital health &amp; care delivery</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          The governance questions matter more than the technology.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-paper/80">
          Digital front doors, patient portals, telehealth, remote
          monitoring, and AI-enabled clinical and administrative workflows
          materially change how patients and clinicians interact with the
          organization. Our focus stays on governance, not the products
          themselves.
        </p>

        <ul className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {digitalHealthQuestions.map((q) => (
            <li
              key={q}
              className="border-l-2 border-brand-secondary pl-5 text-lg leading-snug text-brand-paper"
            >
              {q}
            </li>
          ))}
        </ul>
      </Section>

      {/* The differentiator — mist band, the governance continuum. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <Container>
          <Eyebrow>The governance continuum</Eyebrow>
          <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Plenty of firms can provide implementation resources. We answer a
            different question.
          </h2>
          <p className="mt-6 max-w-3xl border-l-2 border-brand-primary pl-6 font-display text-2xl leading-snug text-brand-ink sm:text-3xl">
            Who is independently assessing whether the organization&apos;s
            governance is capable of carrying the transformation?
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
            That question applies whether the precipitating event is an EHR
            replacement, a health system merger, a digital health rollout, or
            a troubled go-live.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {continuum.map((stage) => (
              <Link
                key={stage.n}
                href={stage.href}
                className="group flex flex-col border-t-2 border-brand-ink/20 pt-4 transition-colors hover:border-brand-primary"
              >
                <div className="flex items-center justify-between">
                  <stage.Icon className="h-6 w-6 text-brand-primary" />
                  <span className="font-mono text-xs text-brand-ink/40">
                    {stage.n}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-lg leading-snug">
                  {stage.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-brand-ink/70">
                  {stage.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-ink/85 transition-colors group-hover:text-brand-primary">
                  Learn more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Who we serve — paper. */}
      <Section ground="paper">
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Built for the organizations entrusted with patients&apos; care.
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
          Every Healthcare Governance engagement includes:
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
            The organization&apos;s next transformation deserves more than
            hope.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            Bring in independent governance oversight before the stakes are
            highest—so the board, regulators, and patients can trust how the
            decision was made.
          </p>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule a Healthcare Governance Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
