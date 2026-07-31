import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";
import { contactHref } from "@/content/nav";

export const metadata: Metadata = {
  title: "Executive Governance Advisory",
  description:
    "Independent executive governance advisory — helping leadership govern complex transformation with disciplined governance, objective oversight, and better executive decisions.",
};

// The moments organizations engage us — the entry points.
const moments = [
  {
    n: "01",
    title: "Before transformation",
    body: "Leadership is preparing to launch a significant initiative and wants governance structures that improve the probability of success from the outset.",
  },
  {
    n: "02",
    title: "During transformation",
    body: "The organization wants an experienced, independent advisor to strengthen executive decision-making and provide objective oversight alongside internal teams and implementation partners.",
  },
  {
    n: "03",
    title: "Project recovery",
    body: "Warning signs are emerging and executive confidence is declining. Leadership needs independent guidance to restore accountability, stabilize governance, and realign the initiative with strategy.",
  },
  {
    n: "04",
    title: "Board oversight",
    body: "Boards increasingly seek objective governance insight to strengthen oversight of large strategic investments — without stepping into day-to-day project management.",
  },
];

// What the advisory work covers — representative, not a fixed menu.
const services = [
  {
    title: "Executive governance reviews",
    body: "Independent evaluation of governance effectiveness, executive alignment, organizational readiness, and emerging risks.",
  },
  {
    title: "Steering committee advisory",
    body: "Participation in executive governance meetings to sharpen decision-making, reinforce accountability, and keep discussion on strategic outcomes.",
  },
  {
    title: "Executive decision support",
    body: "Objective guidance for sponsors navigating complex decisions on vendors, budgets, readiness, risk, and implementation strategy.",
  },
  {
    title: "Vendor governance",
    body: "Evaluation of vendor accountability, governance structures, contractual responsibilities, escalation processes, and executive oversight.",
  },
  {
    title: "Governance risk reviews",
    body: "Identification of governance weaknesses before they become operational, financial, or reputational risks.",
  },
  {
    title: "Board and executive briefings",
    body: "Executive-level reporting that translates complex initiatives into meaningful governance insight for senior leadership and boards.",
  },
  {
    title: "Executive coaching",
    body: "Individual guidance for sponsors and senior leaders responsible for governing high-profile initiatives.",
  },
];

// What a continuing advisory engagement may include.
const advisoryIncludes = [
  "Executive governance reviews",
  "Steering committee participation",
  "Review of executive and board materials",
  "Governance risk analysis",
  "Vendor governance guidance",
  "Executive coaching",
  "Strategic consultation as new issues emerge",
];

// The category contrast — what each discipline is built to focus on.
const contrasts = [
  { who: "Traditional consulting", focus: "delivering projects" },
  { who: "Project management", focus: "coordinating work" },
  { who: "Implementation partners", focus: "deploying technology" },
  { who: "Executive Governance Advisory", focus: "leadership", lead: true },
];

// The organizations the practice serves.
const audiences = [
  "Financial institutions and credit unions",
  "Government agencies",
  "Healthcare organizations",
  "Nonprofit organizations",
  "Mid-market businesses",
  "Executive leadership teams",
  "Boards of Directors",
  "Transformation sponsors",
];

export default function ExecutiveGovernanceAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive Governance Advisory"
        title={
          <>
            Independent executive guidance for organizations navigating{" "}
            <em className="not-italic text-brand-secondary">
              complex transformation
            </em>
            .
          </>
        }
        lede="Major initiatives are among the most significant investments leadership will make. Modernizing technology, implementing enterprise software, adopting AI, strengthening cybersecurity, integrating acquisitions — each demands more than effective project management. It demands disciplined governance, informed executive decisions, and continuous accountability."
      >
        <p className="font-display text-2xl leading-snug text-brand-paper">
          We do not manage projects.{" "}
          <span className="text-brand-tertiary">
            We help leadership govern them.
          </span>
        </p>
        <div className="mt-8">
          <CTALink href={site.discoveryCall} variant="onDark">
            Schedule an Executive Governance Conversation
          </CTALink>
        </div>
      </PageHero>

      {/* What is executive governance — the definition, paper ground. */}
      <Section ground="paper">
        <Eyebrow>What is executive governance</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          The framework through which leadership directs, oversees, and remains
          accountable for strategic initiatives.
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-brand-ink/80">
            <p>
              It defines how decisions are made, how risks are managed, how
              vendors are held accountable, and how executives maintain
              visibility into progress, challenges, and business outcomes.
            </p>
            <p>
              Strong governance creates clarity — clear decision rights,
              reinforced accountability, aligned stakeholders, and the ability
              to see emerging risks before they become costly failures.
            </p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-brand-ink/80">
            <p>
              Without it, even well-managed projects can lose direction, exceed
              budgets, erode stakeholder confidence, and fail to achieve their
              intended business value.
            </p>
            <p className="border-l-2 border-brand-secondary pl-5 font-display text-2xl leading-snug text-brand-ink">
              Technology alone does not determine success.{" "}
              <span className="text-brand-primary">Leadership does.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* When leadership engages us — the four pivotal moments, dark ground. */}
      <Section ground="deep">
        <Eyebrow>When leadership engages us</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Organizations engage us at pivotal moments.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-brand-paper/12 bg-brand-paper/12 md:grid-cols-2">
          {moments.map((moment) => (
            <div key={moment.n} className="bg-brand-ink p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl leading-none text-brand-secondary">
                  {moment.n}
                </span>
              </div>
              <h3 className="font-display mt-5 text-xl leading-snug text-brand-paper">
                {moment.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-paper/75">
                {moment.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What we do — the service surface, paper ground. Eighth cell is a CTA
          so the hairline grid stays complete. */}
      <Section ground="paper">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Advisory tailored to your objectives, governance maturity, and
          priorities.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-brand-ink/12 bg-brand-ink/12 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-brand-paper p-7">
              <h3 className="font-display text-lg leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-ink/75">
                {service.body}
              </p>
            </div>
          ))}

          {/* CTA cell — fills the grid and offers a path in. */}
          <div className="flex flex-col justify-between bg-brand-ink p-7 text-brand-paper">
            <p className="font-display text-lg leading-snug">
              Not sure where governance needs strengthening?
            </p>
            <CTALink
              href={site.discoveryCall}
              variant="ghostOnDark"
              className="mt-6"
            >
              Start a conversation →
            </CTALink>
          </div>
        </div>
      </Section>

      {/* The advisory relationship — the retainer model, dark ground. */}
      <Section ground="deep">
        <Eyebrow>The advisory relationship</Eyebrow>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl leading-tight text-brand-paper sm:text-4xl">
              An ongoing relationship — not a stack of consulting hours.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-paper/75">
              Clients are not purchasing time on a task list. They are engaging
              an experienced executive advisor who participates in the
              governance of their organization&apos;s most important initiatives.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-brand-paper/75">
              The advisory fee reflects continuous access to independent
              executive judgment, governance expertise, and experienced decision
              support — not hours logged against individual deliverables.
            </p>
            <p className="mt-8 font-display text-2xl leading-snug text-brand-paper">
              Organizations retain us because they value stronger leadership,
              better decisions, and{" "}
              <span className="text-brand-tertiary">fewer costly surprises.</span>
            </p>
          </div>

          <div>
            <p className="eyebrow text-brand-paper/55">
              An engagement may include
            </p>
            <ul className="mt-5 divide-y divide-brand-paper/10 border-y border-brand-paper/10">
              {advisoryIncludes.map((item) => (
                <li key={item} className="flex gap-3 py-3.5 text-brand-paper/85">
                  <span aria-hidden className="text-brand-secondary">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How we differ — the category contrast plus the independence point. */}
      <Section ground="paper">
        <Eyebrow>How we differ</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          Every discipline has a focus. Ours is leadership.
        </h2>

        <div className="mt-10 divide-y divide-brand-ink/10 border-y border-brand-ink/10">
          {contrasts.map((row) => (
            <div
              key={row.who}
              className="grid gap-1 py-5 sm:grid-cols-[1fr_1fr] sm:items-baseline sm:gap-6"
            >
              <span
                className={
                  row.lead
                    ? "font-display text-lg text-brand-primary"
                    : "font-display text-lg text-brand-ink"
                }
              >
                {row.who}
              </span>
              <span className="text-brand-ink/70">
                <span className="text-brand-ink/45">focuses on </span>
                {row.focus}
                {row.lead ? "." : "."}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
          Our role is to strengthen the governance systems that enable better
          decisions, sustained accountability, effective risk management, and
          the full value of strategic investments. An independent advisor brings
          objective perspective, asks the difficult questions, and helps
          leadership hold confidence through significant change.
        </p>

        <p className="mt-8 border-l-2 border-brand-secondary pl-6 font-display text-2xl leading-snug sm:text-3xl">
          Our responsibility is not to manage the project.{" "}
          <span className="text-brand-primary">
            It is to strengthen the leadership governing it.
          </span>
        </p>
      </Section>

      {/* Who we serve — dark ground grid. */}
      <Section ground="deep">
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Organizations undertaking significant strategic initiatives.
        </h2>

        <ul className="mt-10 grid gap-px overflow-hidden border border-brand-paper/12 bg-brand-paper/12 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <li
              key={audience}
              className="bg-brand-ink p-5 text-[0.95rem] leading-snug text-brand-paper/85"
            >
              {audience}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-brand-paper/75">
          While many engagements involve technology-enabled transformation, our
          work extends well beyond technology. Governance principles apply
          wherever organizations make significant strategic investments.
        </p>
      </Section>

      {/* Begin the conversation — flagship blue closing. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">
            Begin the conversation
          </p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Every transformation presents unique governance challenges.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            Whether you are preparing for a major initiative, navigating an
            active transformation, or restoring confidence in a struggling
            program, effective governance begins with experienced leadership.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule an Executive Governance Conversation
            </CTALink>
            <CTALink href={contactHref} variant="onDark">
              Send a few details
            </CTALink>
          </div>
        </div>
      </div>
    </>
  );
}
