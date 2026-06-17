import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Mark } from "@/components/site/Mark";
import { CTALink } from "@/components/ui/CTALink";
import { LadderCard } from "@/components/ui/LadderCard";
import { ExhibitStrip } from "@/components/exhibit/ExhibitStrip";
import { EngageCTA } from "@/components/ui/EngageCTA";
import { site, credentials, ladder, programRung } from "@/content/site";
import { exhibitsFor } from "@/content/exhibits";

// The three beats of the argument — the depth signal that replaces a
// capabilities grid.
const argument = [
  {
    n: "01",
    title: "Why programs fail",
    body: "Enterprise transformations and ERP programs rarely fail on technology. They fail on judgment — scope no one will hold, governance that performs instead of decides, and a go-live no one will own. The failure is legible long before the post-mortem.",
  },
  {
    n: "02",
    title: "Why most help arrives too late or too shallow",
    body: "Integrators are paid to proceed. Auditors arrive after the damage. Most outside help is staffed to a phase, not to the whole arc — so it cannot tell a client to stop, and it is not there when the bill comes due.",
  },
  {
    n: "03",
    title: "What judgment across the lifecycle changes",
    body: "Read honestly before, during, and after, the same program looks different. You can say not yet. You can name the risk while it is still cheap. And when it is contested, the analysis holds up under cross-examination.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — a thesis, not a greeting. */}
      <section className="bg-counsel-ink text-bone">
        <Container className="py-24 sm:py-32">
          <div className="flex items-center gap-4">
            <Mark size={56} className="text-aurum" />
            <p className="font-display text-base text-bone/70">
              {site.tagline}
            </p>
          </div>

          <h1 className="font-display mt-12 max-w-4xl text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
            Enterprise transformations don&apos;t fail on technology. They fail
            on judgment — and judgment is the one thing you can&apos;t buy by
            the phase.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">
            J. Lynne &amp; Co. is an advisory firm for the programs that
            can&apos;t afford to fail: ERP and enterprise transformation, read
            honestly before, during, and after. Bespoke advisory and audits,
            expert-witness work, and the CIO Advisra program.
          </p>

          {/* Credibility row — restrained, mono, evidence voice. */}
          <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3">
            {credentials.map((c, i) => (
              <li key={c.label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-aurum/60" aria-hidden>
                    ·
                  </span>
                )}
                <span className="font-mono text-xs uppercase tracking-wider text-bone/85">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
            <CTALink href="/engage#counsel" variant="onDark">
              Retaining for a matter
            </CTALink>
            <CTALink href="/engage#client" variant="onDark">
              Engaging the firm
            </CTALink>
          </div>
        </Container>
      </section>

      {/* The argument — 3 beats. */}
      <Section ground="bone">
        <Eyebrow>The argument</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          The case for judgment across the full lifecycle.
        </h2>
        <div className="mt-14 grid gap-px bg-counsel-ink/12 md:grid-cols-3">
          {argument.map((beat) => (
            <div key={beat.n} className="bg-bone p-7 sm:p-8">
              <span className="font-mono text-sm text-aurum">{beat.n}</span>
              <h3 className="font-display mt-4 text-xl leading-snug">
                {beat.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-counsel-ink/80">
                {beat.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The ladder, previewed — apex first; Program lower by design. */}
      <Section ground="bone" className="pt-0">
        <Eyebrow>How the firm engages</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          One ladder. Start at the top.
        </h2>
        <p className="mt-5 max-w-2xl text-counsel-ink/75">
          Three doors into the firm, apex first. Where you enter depends on what
          the moment demands — and the firm routes you to the right altitude.
        </p>

        <div className="mt-12 grid gap-px bg-counsel-ink/12 md:grid-cols-3">
          {ladder.map((rung) => (
            <LadderCard key={rung.href} rung={rung} />
          ))}
        </div>

        {/* Program Management — present, but deliberately quieter and lower. */}
        <div className="mt-px">
          <LadderCard rung={programRung} muted />
        </div>
      </Section>

      {/* Exhibit strip — first taste of the signature. */}
      <Section ground="deep">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The evidence</Eyebrow>
            <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-bone sm:text-4xl">
              The argument, entered as exhibits.
            </h2>
          </div>
          <Link
            href="/proof"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-bone transition-colors hover:text-aurum"
          >
            See the full record <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-12">
          <ExhibitStrip exhibits={exhibitsFor("home", 3)} columns={3} />
        </div>
      </Section>

      <EngageCTA />
    </>
  );
}
