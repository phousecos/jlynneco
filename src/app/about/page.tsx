import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import { Avatar } from "@/components/ui/Avatar";
import { site, leadership, credentials } from "@/content/site";
import { contactHref } from "@/content/nav";

export const metadata: Metadata = {
  title: "About",
  description:
    "An independent executive governance advisory practice, strengthening the leadership and governance around an organization's most important initiatives.",
};

export default function AboutPage() {
  const principal = leadership[0];

  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            An independent advisor to the leaders governing{" "}
            <em className="not-italic text-brand-secondary">
              complex transformation
            </em>
            .
          </>
        }
        lede="We work with executive teams, boards, and transformation sponsors at the moments that decide whether a major initiative delivers lasting value, or becomes a cautionary tale."
      />

      {/* Our approach — the positioning, paper ground. */}
      <Section ground="paper">
        <Eyebrow>Our approach</Eyebrow>
        <div className="mt-6 max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/80">
          <p>
            {site.name} is an independent executive governance advisory practice.
            We are deliberately not an implementation firm. We do not sell
            software, staff projects, or deliver the work. Our role is to
            strengthen the governance around it: clearer decision rights,
            sharper executive judgment, honest risk visibility, and
            accountability that holds from kickoff through outcome.
          </p>
          <p>
            That independence is the point. Free of delivery incentives and
            contractual obligations, we can tell leadership what internal teams
            and vendors sometimes cannot, early, while issues are still
            inexpensive to address.
          </p>
        </div>

        <p className="mt-10 font-display text-2xl leading-snug sm:text-3xl">
          Technology implements change.{" "}
          <span className="text-brand-primary">Leadership governs it.</span>
        </p>
      </Section>

      {/* Leadership — the founding principal, dark ground. */}
      <Section ground="deep">
        <Eyebrow>Leadership</Eyebrow>
        <div className="mt-8 grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <Avatar
            src={principal.image}
            alt={principal.name}
            initials={principal.initials}
            size={240}
          />
          <div className="max-w-2xl md:self-center">
            <h2 className="font-display text-2xl leading-tight text-brand-paper">
              {principal.name}
            </h2>
            <p className="eyebrow mt-2 text-brand-secondary">{principal.role}</p>
            <p className="mt-5 text-lg leading-relaxed text-brand-paper/80">
              {principal.bio}
            </p>
            <div className="mt-7">
              <CTALink href={site.personSite.href} variant="onDark">
                More on {site.personSite.label}
              </CTALink>
            </div>
          </div>
        </div>

        {/* Credibility row — restrained. */}
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-paper/15 pt-8">
          {credentials.map((c) => (
            <li
              key={c.label}
              className="font-mono text-xs uppercase tracking-wider text-brand-paper/60"
            >
              {c.label}
            </li>
          ))}
        </ul>
      </Section>

      {/* Closing — route to the conversation. */}
      <Section ground="paper">
        <div className="max-w-2xl">
          <Eyebrow>Start the conversation</Eyebrow>
          <h2 className="font-display mt-5 text-3xl leading-tight sm:text-4xl">
            Governing a major initiative, or recovering one?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-ink/80">
            The best time to strengthen governance is before the pressure
            arrives. The second-best time is now.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTALink href={site.discoveryCall} variant="solid">
              Schedule an Executive Conversation
            </CTALink>
            <CTALink href={contactHref} variant="ghost">
              Contact us →
            </CTALink>
          </div>
        </div>
      </Section>
    </>
  );
}
