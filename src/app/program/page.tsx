import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Program Management",
  description:
    "PMO Command — accountable, principal-led program leadership on retainer for implementations that can't afford to fail. Plus AgentPMO, the firm's recommended AI-driven project portfolio management tool.",
};

const delivery = [
  {
    title: "Accountable ownership of delivery",
    body: "The firm takes the program's governance, sequencing, risk, and decisions as its own — accountable for keeping a live implementation on the rails, not advising from the sidelines.",
  },
  {
    title: "Principal-led, team-delivered",
    body: "Principal judgment at the head, senior delivery behind it. The same lens that runs the firm's advisory and witness work, now driving the program day to day.",
  },
  {
    title: "For programs that can't afford to fail",
    body: "Leadership for the implementations where failure is expensive and public — premium delivery, held to the firm's standard.",
  },
];

const team = [
  {
    level: "Project Administrator",
    note: "Coordination, tracking, and the operational backbone.",
  },
  {
    level: "Project Manager",
    note: "Owns a workstream end to end.",
  },
  {
    level: "Program Manager",
    note: "Runs the whole program — governance, sequencing, risk.",
  },
  {
    level: "Senior Partner",
    note: "Principal-level oversight and the hard calls.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="PMO Command"
        title="Accountable program leadership for implementations that can't afford to fail."
        lede="When a program is in motion and the cost of failure is real, the firm takes accountable ownership of delivery — governance, sequencing, risk, and the hard calls. Principal-led, with senior delivery behind it."
      >
        <CTALink href={site.discoveryCall} variant="onDark">
          Schedule a discovery call
        </CTALink>
      </PageHero>

      {/* What it is. */}
      <Section ground="paper">
        <Eyebrow>What it is</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          The judgment that runs the firm, now accountable for the program.
        </h2>
        <div className="mt-12 grid gap-px bg-brand-ink/12 md:grid-cols-3">
          {delivery.map((d) => (
            <div key={d.title} className="bg-brand-paper p-7 sm:p-8">
              <h3 className="font-display text-xl leading-snug">{d.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-brand-ink/80">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works — the retainer model and the team available. */}
      <Section ground="ink">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          One retainer. The resources the program demands.
        </h2>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-brand-paper/85">
          <p>
            PMO Command runs on a monthly retainer — the firm operating the
            program on your behalf, not only advising it. The firm provides the
            resources to meet program demands, scaling effort and seniority up or
            down as the work requires, so you have the right people on the
            program at the right moment.
          </p>
        </div>

        {/* The team available on retainer, junior to senior. */}
        <p className="eyebrow mt-12 text-brand-secondary">
          Four levels of personnel, available on retainer
        </p>
        <div className="mt-5 grid gap-px bg-brand-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.level} className="bg-brand-ink p-6 sm:p-7">
              <h3 className="font-display text-xl leading-snug">{p.level}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-paper/70">
                {p.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CTALink href="/engage" variant="onDark">
            Engage PMO Command
          </CTALink>
        </div>
      </Section>

      {/* AgentPMO — the firm's recommended tool. */}
      <Section ground="paper">
        <Eyebrow>Recommended tool · AgentPMO</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          AgentPMO — AI-driven project portfolio management.
        </h2>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-brand-ink/80">
          <p>
            For managing the portfolio itself, the firm recommends AgentPMO:
            AI-driven project portfolio management across the full arc — from
            vision to go-live and everything in between.
          </p>
          <p>
            It gives leadership a live, intelligent view of the portfolio —
            planning, sequencing, risk, and status in one place — so decisions
            are made on current reality, not last month&apos;s status deck.
          </p>
        </div>
        <div className="mt-9">
          <CTALink href="https://agentpmo.ai" variant="solid">
            Ask about AgentPMO
          </CTALink>
        </div>
      </Section>
    </>
  );
}
