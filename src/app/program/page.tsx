import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Mark } from "@/components/site/Mark";

export const metadata: Metadata = {
  title: "Program Management",
  description:
    "Accountable, principal-led program leadership for enterprise implementations that can't afford to fail — including the PMO Command retainer.",
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

export default function ProgramPage() {
  return (
    <>
      <PageHero
        ground="deep"
        eyebrow="Program Management"
        title="Accountable program leadership for implementations that can't afford to fail."
        lede="When a program is in motion and the cost of failure is real, the firm takes accountable ownership of delivery — governance, sequencing, risk, and the hard calls. Principal-led, with senior delivery behind it."
      />

      <Section ground="bone">
        <Eyebrow>What it is</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
          The judgment that runs the firm, now accountable for the program.
        </h2>
        <div className="mt-12 grid gap-px bg-counsel-ink/12 md:grid-cols-3">
          {delivery.map((d) => (
            <div key={d.title} className="bg-bone p-7 sm:p-8">
              <h3 className="font-display text-xl leading-snug">{d.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-counsel-ink/80">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Named retainer — PMO Command. The named, buyable vehicle for hands-on
          delivery: the firm operating the program, not only advising it.
          (Internal platform/entity names are never surfaced.) */}
      <Section ground="ink">
        <Eyebrow>Named retainer · PMO Command</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          PMO Command — the firm runs the program, not just advises it.
        </h2>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-bone/85">
          <p>
            PMO Command is the named vehicle for hands-on delivery: the firm
            operating the program on your behalf — not only advising it. Senior
            program leadership engaged on a monthly retainer, scaled to the
            seniority the program actually needs.
          </p>
        </div>

        {/* Scope boundary — stated plainly so delivery and insight never blur. */}
        <div className="mt-12 grid gap-px bg-bone/15 md:grid-cols-2">
          <div className="bg-counsel-ink p-7 sm:p-8">
            <span className="eyebrow text-aurum">Delivery</span>
            <h3 className="font-display mt-4 text-xl leading-snug">
              PMO Command — hands-on operation
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-bone/75">
              The firm operates the program for you — owning the plan, the
              cadence, and the decisions, accountable for the outcome.
            </p>
          </div>
          <div className="bg-counsel-ink p-7 sm:p-8">
            <span className="eyebrow text-graphite">Insight</span>
            <h3 className="font-display mt-4 text-xl leading-snug">
              CIO Advisra add-on — advisory only
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-bone/75">
              Informs briefings and strategy, but is not run on your behalf. One
              is delivery; one is insight — and they stay separate.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <CTALink href="/engage" variant="onDark">
            Engage PMO Command
          </CTALink>
        </div>
      </Section>

      <Section ground="bone" size="prose">
        <div className="flex items-center gap-3">
          <Mark size={28} className="text-aurum" />
          <Eyebrow>For a program already in motion</Eyebrow>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-counsel-ink/85">
          If a live implementation needs an accountable hand on the wheel, the
          firm can take it — delivered to the same standard as its highest-trust
          work.
        </p>
        <div className="mt-8">
          <CTALink href="/engage" variant="solid">
            Discuss a delivery engagement
          </CTALink>
        </div>
      </Section>
    </>
  );
}
