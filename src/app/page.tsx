import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import Image from "next/image";
import { WordRiver } from "@/components/ui/WordRiver";
import {
  IconCompass,
  IconClipboardCheck,
  IconLifeBuoy,
  IconCpu,
  IconBank,
  IconFlag,
  IconHealthCross,
  IconHeart,
  IconBuilding,
  IconRoundTable,
  IconUsers,
  IconTransform,
} from "@/components/ui/icons";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";
import { contactHref } from "@/content/nav";

// The Executive Governance Advisory homepage. Positioned for a C-suite,
// board, and executive-sponsor audience: restrained, editorial, alternating
// dark/light grounds. Colors and type come from the shared brand system
// (blue leads, gold accents, teal supports) — no technical specs change here.

// Where programs slip when governance is thin — streamed as a moving "river"
// of words in the royal-blue band (see the WordRiver section below).
const failureSignals = [
  "Projects drift",
  "Costs increase",
  "Vendors become difficult to manage",
  "Decisions are delayed",
  "Risks emerge too late",
  "Confidence erodes",
];

// A rotated copy so the second river lane doesn't march in lockstep with the
// first — the two lanes drift past each other for a layered, river-like feel.
const failureSignalsAlt = [
  ...failureSignals.slice(3),
  ...failureSignals.slice(0, 3),
];

// What the advisory relationship strengthens.
const advisoryOutcomes = [
  "Improve executive decision-making",
  "Strengthen governance and accountability",
  "Reduce transformation risk",
  "Increase executive visibility into emerging issues",
  "Improve vendor oversight",
  "Support effective steering committees",
  "Build organizational confidence throughout major initiatives",
];

// The four engagement modes. `href` funnels to the conversation path for now;
// point each at a dedicated service page once those pages exist.
const services = [
  {
    n: "01",
    Icon: IconCompass,
    title: "Executive Governance Advisory",
    body: "An ongoing executive advisory relationship providing independent governance oversight, executive coaching, risk analysis, and strategic decision support throughout major initiatives.",
    href: "/executive-governance-advisory",
  },
  {
    n: "02",
    Icon: IconClipboardCheck,
    title: "Governance Assessments",
    body: "An objective evaluation of governance maturity, organizational readiness, executive accountability, and transformation risk before critical investments begin.",
    href: "/governance-assessments",
  },
  {
    n: "03",
    Icon: IconLifeBuoy,
    title: "Project Recovery & Executive Stabilization",
    body: "When initiatives begin struggling, we help leadership restore governance discipline, improve executive alignment, and regain organizational confidence.",
    href: contactHref,
  },
  {
    n: "04",
    Icon: IconCpu,
    title: "Fractional CIO Leadership",
    body: "When organizations require experienced technology leadership, we provide executive CIO guidance as part of a broader governance strategy. Technology leadership supports governance. It does not replace it.",
    href: contactHref,
  },
];

// The organizations the firm serves, each with an industry icon.
const audiences = [
  { label: "Financial institutions and credit unions", Icon: IconBank },
  { label: "Government agencies", Icon: IconFlag },
  { label: "Healthcare organizations", Icon: IconHealthCross },
  { label: "Nonprofit organizations", Icon: IconHeart },
  { label: "Mid-market businesses", Icon: IconBuilding },
  { label: "Boards of Directors", Icon: IconRoundTable },
  { label: "Executive leadership teams", Icon: IconUsers },
  { label: "CIOs and transformation sponsors", Icon: IconTransform },
];

// The competing incentives that leave leadership without an objective read.
const pressures = [
  { who: "Internal teams", what: "balance competing priorities." },
  { who: "Implementation partners", what: "carry contractual obligations." },
  { who: "Project managers", what: "focus on delivery." },
  {
    who: "Executives",
    what: "must make difficult decisions with incomplete information.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — the thesis over a darkened boardroom image. Copy sits on the
          near-solid left of the gradient so it stays legible. */}
      <section className="relative isolate overflow-hidden bg-brand-ink text-brand-paper">
        <Image
          src="/home-page-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink/80 via-brand-ink/55 to-brand-ink/25"
        />
        <Container className="relative py-24 sm:py-32">
          <Eyebrow>Executive Governance Advisory</Eyebrow>

          <h1 className="font-display font-display-hero mt-8 max-w-4xl text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
            Helping leaders govern transformation with confidence.
          </h1>

          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-brand-paper/75">
            <p>
              Organizations invest millions of dollars in strategic initiatives
              every year. Some deliver lasting value. Others become cautionary
              tales.
            </p>
            <p>The difference is rarely the technology.</p>
          </div>

          <p className="mt-8 font-display text-3xl leading-tight text-brand-secondary sm:text-4xl">
            It is governance.
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-paper/75">
            We help executive teams, boards, and organizational leaders
            strengthen decision-making, improve accountability, manage risk, and
            govern complex transformation with confidence.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <CTALink href={site.discoveryCall} variant="solid">
              Schedule an Executive Conversation
            </CTALink>
            {/* Placeholder target — wire to the overview PDF in /public once
                the asset exists; routes to intake in the meantime. */}
            <CTALink href={contactHref} variant="onDark">
              Download the Executive Governance Overview
            </CTALink>
          </div>
        </Container>
      </section>

      {/* Why governance matters — paper ground. Sets up the failures that the
          royal-blue word-river section then makes visceral. */}
      <Section ground="paper">
        <Eyebrow>Why governance matters</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Transformation has never been more important, or more difficult.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-brand-ink/80">
          <p>
            Organizations are modernizing core systems, adopting artificial
            intelligence, strengthening cybersecurity, integrating acquisitions,
            and reimagining how they serve customers and communities. These
            initiatives are often among the largest investments an organization
            will make.
          </p>
          <p>
            Strong governance provides the structure, accountability, and
            executive oversight needed to guide transformation from vision to
            measurable business outcomes.
          </p>
          <p>
            Yet many fall short of expectations, and they slip in ways that are
            easy to recognize.
          </p>
        </div>
      </Section>

      {/* The word river — a full-bleed royal-blue band. The ways programs slip
          stream past right-to-left in two drifting lanes, then the statement
          lands underneath. Motion is CSS-only and pauses under
          prefers-reduced-motion (see .marquee in globals.css). */}
      <section className="overflow-hidden bg-brand-primary py-20 text-brand-paper sm:py-28">
        <Container>
          <p className="eyebrow text-center text-brand-paper/70">
            Where programs slip
          </p>
        </Container>

        {/* Lanes run edge-to-edge, deliberately outside the container. Toned
            back so they read as a moving current — the crisp white verdict
            below is the focal point. */}
        <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
          <WordRiver
            items={failureSignals}
            durationSeconds={38}
            className="text-brand-paper/55"
          />
          <WordRiver
            items={failureSignalsAlt}
            durationSeconds={55}
            className="text-brand-paper/30"
          />
        </div>

        {/* Screen-reader equivalent of the decorative river. */}
        <ul className="sr-only">
          {failureSignals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>

        <Container className="mt-14 text-center sm:mt-16">
          <span
            aria-hidden
            className="mx-auto block h-px w-12 bg-brand-secondary"
          />
          <p className="font-display font-display-hero mt-8 text-3xl leading-tight text-brand-paper sm:text-4xl lg:text-5xl">
            These are rarely technology failures.
            <br />
            They are governance failures.
          </p>
        </Container>
      </section>

      {/* The advisory posture — dark ground, two columns. */}
      <Section ground="deep">
        <Eyebrow>The advisory posture</Eyebrow>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl leading-tight text-brand-paper sm:text-4xl">
              An independent executive advisor to leadership teams navigating
              significant change.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-paper/75">
              Unlike traditional consulting firms that focus on delivering
              projects, we focus on strengthening leadership&apos;s ability to
              govern those projects.
            </p>
          </div>

          <div>
            <p className="eyebrow text-brand-paper/55">
              Our advisory services help organizations
            </p>
            <ul className="mt-5 divide-y divide-brand-paper/10 border-y border-brand-paper/10">
              {advisoryOutcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-3 py-3.5 text-brand-paper/85"
                >
                  <span aria-hidden className="text-brand-secondary">
                    •
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Posture banner — the statement pulled out of the posture section onto
          a full-bleed teal band (teal = the "supports / strengthen" accent). */}
      <section className="bg-brand-tertiary text-brand-paper">
        <Container className="py-16 text-center sm:py-20">
          <p className="font-display font-display-hero text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-brand-paper/80">
              Our role is not to replace internal leadership.
            </span>
            <br />
            Our role is to strengthen it.
          </p>
        </Container>
      </section>

      {/* How we help — paper ground, four engagement modes in a two-tone grid. */}
      <Section ground="paper">
        <Eyebrow>How we help</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Four ways we strengthen executive governance.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            // Boxes 1 & 4 share the royal-blue tone; 2 & 3 take a deeper blue —
            // a diagonal two-tone across the 2x2 grid.
            const royal = i === 0 || i === 3;
            const Icon = service.Icon;
            return (
              <Link
                key={service.n}
                href={service.href}
                className={`group flex h-full flex-col p-8 text-brand-paper transition-colors ${
                  royal
                    ? "bg-brand-primary hover:bg-brand-primary/90"
                    : "bg-[#1a3488] hover:bg-[#1a3488]/90"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-7 w-7 text-brand-secondary" />
                  <span className="font-mono text-sm text-brand-paper/50">
                    {service.n}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-xl leading-snug text-brand-paper">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-brand-paper/75">
                  {service.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-paper transition-colors group-hover:text-brand-secondary">
                  Learn more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Our philosophy — dark ground, centered pull-quote. */}
      <Section ground="deep">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Our philosophy</Eyebrow>
          <p className="font-display mt-8 text-balance text-4xl leading-[1.1] text-brand-paper sm:text-5xl">
            Technology implements change.
            <br />
            Leadership <span className="text-brand-secondary">governs</span>{" "}
            change.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brand-paper/70">
            Successful transformation depends on more than selecting the right
            software or hiring the right implementation partner. It requires
            executive alignment, disciplined governance, informed
            decision-making, and continuous accountability.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-brand-paper/70">
            That is where we focus.
          </p>
        </div>
      </Section>

      {/* Who we serve — paper ground. */}
      <Section ground="paper">
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Built for organizations undertaking significant strategic initiatives.
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-brand-ink/85"
            >
              <Icon className="h-6 w-6 shrink-0 text-brand-primary" />
              <span className="text-[0.95rem] leading-snug">{label}</span>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          Whether preparing for a major initiative or recovering from one that
          has lost momentum, our objective remains the same:{" "}
          <span className="font-display text-brand-ink">
            help leadership govern transformation successfully.
          </span>
        </p>
      </Section>

      {/* Why independent governance matters — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Why independent governance matters</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Large initiatives create pressure.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="divide-y divide-brand-paper/10 border-y border-brand-paper/10">
            {pressures.map((pressure) => (
              <li key={pressure.who} className="py-4 leading-relaxed">
                <span className="font-display text-brand-paper">
                  {pressure.who}
                </span>{" "}
                <span className="text-brand-paper/70">{pressure.what}</span>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-lg leading-relaxed text-brand-paper/80">
              An independent governance advisor brings objective perspective,
              executive experience, and unbiased guidance to help leadership
              navigate complexity before small issues become significant risks.
            </p>
            <p className="mt-8 font-display text-2xl leading-snug text-brand-paper sm:text-3xl">
              Organizations do not need more status reports.
              <br />
              <span className="text-brand-secondary">
                They need better executive insight.
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* Start the conversation — flagship blue closing. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">
            Start the conversation
          </p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Every transformation is different.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            Every organization faces unique governance challenges. We begin by
            understanding your objectives, your current governance model, and
            the risks that matter most to your leadership team.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            If your organization is preparing for, executing, or recovering from
            a major strategic initiative, let&apos;s start a conversation.
          </p>
          <div className="mt-9 flex justify-center">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule an Executive Conversation
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
