import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { resourceGroups, type ResourceItem } from "@/content/resources";
import { clsx } from "@/lib/clsx";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The firm's podcast, essays, publications, and downloads on governing transformation.",
};

const cardBase =
  "flex h-full flex-col border border-brand-ink/12 bg-brand-paper p-6";

function ResourceCard({ item }: { item: ResourceItem }) {
  const inner = (
    <>
      {item.meta && (
        <p className="font-mono text-xs uppercase tracking-wider text-brand-secondary">
          {item.meta}
        </p>
      )}
      <h3 className="font-display mt-3 text-lg leading-snug">{item.title}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-brand-ink/75">
        {item.description}
      </p>
    </>
  );

  if (!item.href) return <div className={cardBase}>{inner}</div>;

  const external = /^https?:\/\//.test(item.href);
  const cls = clsx(cardBase, "transition-colors hover:border-brand-primary");
  return external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={cls}>
      {inner}
    </Link>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Ideas, evidence, and tools for governing transformation."
        lede="The firm's podcast, essays, publications, and downloads — the thinking behind the practice, gathered in one place."
      />

      {resourceGroups.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={clsx(
            "scroll-mt-24 py-20 text-brand-ink sm:py-28",
            i % 2 === 1 ? "bg-brand-mist" : "bg-brand-paper",
          )}
        >
          <Container>
            <Eyebrow>{group.label}</Eyebrow>
            <h2 className="font-display mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl">
              {group.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-ink/80">
              {group.intro}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <ResourceCard key={item.title} item={item} />
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
