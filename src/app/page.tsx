import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { LadderCard } from "@/components/ui/LadderCard";
import { ExhibitStrip } from "@/components/exhibit/ExhibitStrip";
import { EngageCTA } from "@/components/ui/EngageCTA";
import { site, ladder, programRung } from "@/content/site";
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
    body: "Read honestly before, during, and after, the same program looks different. You can say not yet — and when the call is to move, the firm owns it and drives, accountable for the outcome and not only the advice. You can name the risk while it is still cheap. And when it is contested, the analysis holds up under cross-examination.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — a thesis, not a greeting. Dark ink ground, blue lead accent. */}
      <section className="relative isolate overflow-hidden bg-brand-ink text-brand-paper">
        {/* Banner — the dark operations image sits behind the thesis. Zoomed
            past cover and anchored right so the image's own black margins crop
            off-frame and the figure/dashboards bleed edge to edge. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 scale-125 bg-[url('/banner.webp')] bg-[position:65%_30%] bg-no-repeat bg-cover"
        />
        {/* Gentle, even tint so the banner reads full-width across the hero. */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-brand-ink/25" />
        {/* Extra shade only behind the left-aligned copy, fading to clear so
            the figure and dashboards stay visible to the right edge. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink via-brand-ink/40 to-transparent"
        />
        <Container className="py-24 sm:py-32">
          <p className="font-display text-base text-brand-secondary">
            {site.tagline}
          </p>

          <h1 className="font-display font-display-hero mt-12 max-w-4xl text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
            Enterprise transformations don&apos;t fail on technology. They fail
            on judgment.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-paper/75">
            J. Lynne &amp; Co. is an advisory firm for the programs that
            can&apos;t afford to fail: ERP and enterprise transformation, read
            honestly before, during, and after — then driven, with someone
            accountable for the outcome. Bespoke advisory and audits,
            expert-witness work, and the CIO Advisra program.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <CTALink href={site.discoveryCall} variant="solid">
              Schedule a discovery call
            </CTALink>
          </div>
        </Container>
      </section>

      {/* The argument — 3 beats. Paper ground, gold eyebrow, blue numerals. */}
      <section className="bg-brand-paper text-brand-ink py-20 sm:py-28">
        <Container>
          <Eyebrow>The argument</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            The case for judgment across the full lifecycle.
          </h2>
          {/* Editorial numbered sequence — deliberately unlike the exhibit grid
              and the ladder scroller below. */}
          <div className="mt-12 border-t border-brand-ink/15">
            {argument.map((beat) => (
              <div
                key={beat.n}
                className="grid gap-3 border-b border-brand-ink/15 py-8 md:grid-cols-[5rem_1fr] md:gap-10 md:py-10"
              >
                <span className="font-display text-4xl leading-none text-brand-primary sm:text-5xl">
                  {beat.n}
                </span>
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl leading-snug">
                    {beat.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-brand-ink/80">
                    {beat.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Exhibit strip — first taste of the signature. Dark ground sits
          between the two light sections so neither touches the other. */}
      <Section ground="deep">
        <Eyebrow>The evidence</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          The argument, entered as exhibits.
        </h2>
        <div className="mt-12">
          <ExhibitStrip exhibits={exhibitsFor("home", 3)} columns={3} />
        </div>
      </Section>

      {/* The ladder, previewed — apex first; Program lower by design. */}
      <Section ground="paper">
        <Eyebrow>How the firm engages</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          One firm, four modes.
        </h2>

        {/* Two-by-two grid. Apex/product doors first; Program (the floor)
            trails, muted. */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[...ladder, programRung].map((rung) => (
            <LadderCard
              key={rung.href}
              rung={rung}
              navy={rung.altitude === "floor"}
            />
          ))}
        </div>
      </Section>

      <EngageCTA />
    </>
  );
}
