import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { HeroAmpersand } from "@/components/ui/HeroAmpersand";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";
import { engageHref } from "@/content/nav";

// The Executive Governance Advisory homepage. Positioned for a C-suite,
// board, and executive-sponsor audience: restrained, editorial, alternating
// dark/light grounds. Colors and type come from the shared brand system
// (blue leads, gold accents, teal supports) — no technical specs change here.

// Where programs slip when governance is thin — presented as scannable
// signals rather than a run-on sentence.
const failureSignals = [
  "Projects drift",
  "Costs increase",
  "Vendors become difficult to manage",
  "Decisions are delayed",
  "Risks emerge too late",
  "Confidence erodes",
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
    title: "Executive Governance Advisory",
    body: "An ongoing executive advisory relationship providing independent governance oversight, executive coaching, risk analysis, and strategic decision support throughout major initiatives.",
    href: engageHref,
  },
  {
    n: "02",
    title: "Governance Assessments",
    body: "An objective evaluation of governance maturity, organizational readiness, executive accountability, and transformation risk before critical investments begin.",
    href: engageHref,
  },
  {
    n: "03",
    title: "Project Recovery & Executive Stabilization",
    body: "When initiatives begin struggling, we help leadership restore governance discipline, improve executive alignment, and regain organizational confidence.",
    href: engageHref,
  },
  {
    n: "04",
    title: "Fractional CIO Leadership",
    body: "When organizations require experienced technology leadership, we provide executive CIO guidance as part of a broader governance strategy. Technology leadership supports governance — it does not replace it.",
    href: engageHref,
  },
];

// The organizations the firm serves.
const audiences = [
  "Financial institutions and credit unions",
  "Government agencies",
  "Healthcare organizations",
  "Nonprofit organizations",
  "Mid-market businesses",
  "Boards of Directors",
  "Executive leadership teams",
  "CIOs and transformation sponsors",
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
      {/* Hero — the thesis, not a greeting. Dark ink ground; the "&" from
          "& Co." bleeds off the right as an oversized brand device. */}
      <section className="relative isolate overflow-hidden bg-brand-ink text-brand-paper">
        <HeroAmpersand />
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
            <CTALink href={engageHref} variant="onDark">
              Download the Executive Governance Overview
            </CTALink>
          </div>
        </Container>
      </section>

      {/* Why governance matters — paper ground. */}
      <Section ground="paper">
        <Eyebrow>Why governance matters</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Transformation has never been more important — or more difficult.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-brand-ink/80">
            <p>
              Organizations are modernizing core systems, adopting artificial
              intelligence, strengthening cybersecurity, integrating
              acquisitions, and reimagining how they serve customers and
              communities. These initiatives are often among the largest
              investments an organization will make.
            </p>
            <p>Yet many fall short of expectations.</p>
          </div>

          <div>
            <p className="eyebrow text-brand-slate">Where programs slip</p>
            <ul className="mt-4 divide-y divide-brand-ink/10 border-y border-brand-ink/10">
              {failureSignals.map((signal) => (
                <li
                  key={signal}
                  className="py-3 text-[0.98rem] text-brand-ink/85"
                >
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-l-2 border-brand-secondary pl-6">
          <p className="font-display text-2xl leading-snug sm:text-3xl">
            These are rarely technology failures.{" "}
            <span className="text-brand-primary">
              They are governance failures.
            </span>
          </p>
        </div>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          Strong governance provides the structure, accountability, and
          executive oversight needed to guide transformation from vision to
          measurable business outcomes.
        </p>
      </Section>

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
            <p className="mt-8 font-display text-2xl leading-snug text-brand-paper">
              Our role is not to replace internal leadership.
              <br />
              <span className="text-brand-tertiary">
                Our role is to strengthen it.
              </span>
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
                    —
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How we help — paper ground, four engagement modes as a hairline grid. */}
      <Section ground="paper">
        <Eyebrow>How we help</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Four ways we strengthen executive governance.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-brand-ink/10 bg-brand-ink/10 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.n}
              href={service.href}
              className="group flex h-full flex-col bg-brand-paper p-8 transition-colors hover:bg-brand-mist/50"
            >
              <span className="font-mono text-sm text-brand-secondary">
                {service.n}
              </span>
              <h3 className="font-display mt-4 text-xl leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-brand-ink/75">
                {service.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-colors group-hover:text-brand-ink">
                Learn more
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Our philosophy — dark ground, centered pull-quote. */}
      <Section ground="deep">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Our philosophy</Eyebrow>
          <p className="font-display mt-8 text-4xl leading-[1.1] text-brand-paper sm:text-5xl">
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

        <ul className="mt-10 grid gap-px overflow-hidden border border-brand-ink/10 bg-brand-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <li
              key={audience}
              className="bg-brand-paper p-5 text-[0.95rem] leading-snug text-brand-ink/85"
            >
              {audience}
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
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
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
