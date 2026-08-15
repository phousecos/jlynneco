import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { DownloadsBrowser } from "@/components/ui/DownloadsBrowser";
import { DownloadTracker } from "@/components/ui/DownloadTracker";
import { getResourceGroups } from "@/lib/payload";
import { clsx } from "@/lib/clsx";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The firm's podcast, speaking, essays, publications, and downloads on governing transformation.",
};

export default async function ResourcesPage() {
  const resourceGroups = await getResourceGroups();
  return (
    <>
      <DownloadTracker />
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Ideas, evidence, and tools for{" "}
            <em className="not-italic text-brand-secondary">
              governing transformation
            </em>
            .
          </>
        }
        lede="The firm's podcast, speaking, essays, publications, and downloads — the thinking behind the practice, gathered in one place."
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

            {group.id === "downloads" ? (
              <DownloadsBrowser items={group.items} />
            ) : (
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <ResourceCard key={item.title} item={item} />
                ))}
              </div>
            )}
          </Container>
        </section>
      ))}
    </>
  );
}
