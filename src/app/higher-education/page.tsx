import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTALink } from "@/components/ui/CTALink";
import {
  IconCpu,
  IconSpark,
  IconLifeBuoy,
  IconBuilding,
  IconGraduationCap,
  IconUsers,
  IconFlask,
  IconHealthCross,
  IconHeart,
  IconRoundTable,
  IconTransform,
} from "@/components/ui/icons";
import { NextStep } from "@/components/ui/NextStep";
import { Mark } from "@/components/site/Mark";
import { site } from "@/content/site";
import { contactHref } from "@/content/nav";

export const metadata: Metadata = {
  title: "Higher Education",
  description:
    "Independent governance for higher education transformation: ERP and administrative modernization, systemwide and shared services programs, and transformation readiness, assurance, and recovery.",
};

// Nine situations, collapsed into three governance families.
const families = [
  {
    Icon: IconCpu,
    title: "Enterprise & Administrative Transformation",
    items: [
      "ERP modernization",
      "Student systems",
      "Shared services",
      "Institutional consolidation",
    ],
  },
  {
    Icon: IconSpark,
    title: "Digital & Institutional Modernization",
    items: [
      "Cloud and infrastructure",
      "Data, analytics & AI",
      "Digital learning",
      "Compliance-driven transformation",
    ],
  },
  {
    Icon: IconLifeBuoy,
    title: "Transformation Assurance & Recovery",
    items: [
      "Independent governance assessment",
      "Implementation oversight",
      "Readiness assurance",
      "Project recovery",
    ],
  },
];

// The four flagship offerings — the equivalent of a services menu, kept short.
const offerings = [
  {
    n: "01",
    title: "ERP & Enterprise Transformation Governance",
    body: "Independent governance and executive oversight for major ERP, SIS, and administrative modernization programs.",
    href: "/executive-governance-advisory",
    linkLabel: "Executive Governance Advisory",
  },
  {
    n: "02",
    title: "Systemwide & Shared Services Governance",
    body: "For university systems, multi-campus institutions, and organizations centralizing administrative capabilities.",
  },
  {
    n: "03",
    title: "Transformation Readiness & Assurance",
    body: "Independent assessment before major milestones, go-live, or critical program decisions.",
    href: "/technology-governance-readiness",
    linkLabel: "Technology Governance Readiness",
  },
  {
    n: "04",
    title: "Project Recovery & Governance Reset",
    body: "For troubled implementations requiring independent diagnosis and governance intervention.",
    href: "/technology-transformation-recovery",
    linkLabel: "Technology Transformation Recovery",
  },
];

// The constituencies inside a single institution, each with legitimate but
// overlapping decision rights.
const constituencies = [
  { label: "Central administration & system offices", Icon: IconBuilding },
  { label: "Individual campuses & colleges", Icon: IconGraduationCap },
  { label: "Faculty governance & academic senates", Icon: IconUsers },
  { label: "Research organizations", Icon: IconFlask },
  { label: "Health systems & academic medical centers", Icon: IconHealthCross },
  { label: "Foundations & advancement organizations", Icon: IconHeart },
  { label: "Boards of trustees", Icon: IconRoundTable },
  { label: "CIOs & transformation sponsors", Icon: IconTransform },
];

export default function HigherEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Higher Education"
        title={
          <>
            The complexity isn&rsquo;t the technology.{" "}
            <em className="not-italic text-brand-secondary">
              It&rsquo;s the institution.
            </em>
          </>
        }
        lede="J. Lynne helps education institutions govern the complex technology transformations that cross organizational, functional, and institutional boundaries."
      >
        <CTALink href={site.discoveryCall} variant="solid">
          Schedule a Higher Education Governance Conversation
        </CTALink>
      </PageHero>

      {/* The governing insight — a governance problem disguised as an
          implementation problem. Paper ground. */}
      <Section ground="paper">
        <Eyebrow>Why higher education is different</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Education transformation is often a governance problem disguised as
          an implementation problem.
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-brand-ink/80">
            <p>
              Universities can have unusually distributed authority. Central
              administration, individual campuses, colleges, faculty
              governance, research organizations, health systems,
              foundations, and system offices may all possess legitimate but
              overlapping decision rights.
            </p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-brand-ink/80">
            <p>
              A technically sound implementation can struggle because nobody
              adequately designed how those constituencies would make
              transformation decisions together.
            </p>
            <p className="border-l-2 border-brand-secondary pl-5 font-display text-2xl leading-snug text-brand-ink">
              Complex institutions require governance{" "}
              <span className="text-brand-primary">
                capable of matching the complexity of the transformation.
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* Three families — dark ground. */}
      <Section ground="deep">
        <Eyebrow>Where we help</Eyebrow>
        <h2 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          Nine common situations. Three governance families.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-brand-paper/12 bg-brand-paper/12 md:grid-cols-3">
          {families.map(({ Icon, title, items }) => (
            <div key={title} className="bg-brand-ink p-7 sm:p-8">
              <Icon className="h-7 w-7 text-brand-tertiary" />
              <h3 className="font-display mt-5 text-xl leading-snug text-brand-paper">
                {title}
              </h3>
              <ul className="mt-4 space-y-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-[0.95rem] leading-relaxed text-brand-paper/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Flagship offerings — paper ground. */}
      <Section ground="paper">
        <Eyebrow>Flagship offerings</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
          Four ways we govern higher education transformation.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10">
          {offerings.map((offering) => (
            <div
              key={offering.n}
              className="border-t-2 border-brand-primary/30 pt-5"
            >
              <span className="font-display text-3xl leading-none text-brand-primary">
                {offering.n}
              </span>
              <h3 className="font-display mt-4 text-xl leading-snug">
                {offering.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-ink/75">
                {offering.body}
              </p>
              {offering.href && (
                <CTALink href={offering.href} variant="ghost" className="mt-4">
                  {offering.linkLabel} →
                </CTALink>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Who we serve — the constituencies inside one institution. Dark ground. */}
      <Section ground="deep">
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight text-brand-paper sm:text-4xl">
          The constituencies that must govern transformation together.
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {constituencies.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-brand-paper/85"
            >
              <Icon className="h-6 w-6 shrink-0 text-brand-tertiary" />
              <span className="text-[0.95rem] leading-snug">{label}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* The method — a pointer to its own page, light mist band. */}
      <section className="bg-brand-mist py-20 text-brand-ink sm:py-28">
        <Container>
          <Eyebrow>Our method</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Every engagement follows the Transformidable Governance Method&trade;.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-ink/80">
            A structured, research-informed framework that helps institutions
            establish, strengthen, and sustain governance through five
            stages: assess, align, govern, measure, and improve.
          </p>
          <div className="mt-8">
            <CTALink href="/transformidable-governance-method" variant="outline">
              Explore the method
            </CTALink>
          </div>
        </Container>
      </section>

      <NextStep
        prompt="Facing a struggling implementation?"
        label="Explore Technology Transformation Recovery"
        href="/technology-transformation-recovery"
      />

      {/* Begin the conversation — flagship blue closing. */}
      <div className="bg-brand-primary text-brand-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
          <Mark size={44} className="mx-auto text-brand-paper" />
          <p className="eyebrow mt-6 text-brand-paper/80">
            Begin the conversation
          </p>
          <h2 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
            Complex institutions deserve governance built for their
            complexity.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-paper/85">
            Whether you are preparing for a major initiative, navigating an
            active transformation, or restoring confidence in a struggling
            program, effective governance begins with understanding how your
            institution actually makes decisions.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <CTALink href={site.discoveryCall} variant="onColor">
              Schedule a Higher Education Governance Conversation
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
