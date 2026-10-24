import { clsx } from "@/lib/clsx";

type Stat = { value: string; label: string; tone: "blue" | "gold" };

/**
 * Oversized figures with a short label under each — the deck's stat slide.
 * Blue for the first figure, deep gold for the contrast figure (the darker
 * gold holds contrast on a light ground). A single source line closes it.
 */
export function StatCallout({
  stats,
  source,
  className,
}: {
  stats: Stat[];
  source: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <dl className="grid gap-10 sm:grid-cols-2 sm:gap-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-3 text-lg text-brand-slate">{stat.label}</dt>
            <dd
              className={clsx(
                "font-display text-[6rem] font-semibold leading-none tracking-tight sm:text-[8rem]",
                stat.tone === "blue" ? "text-brand-primary" : "text-[#7F6619]",
              )}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-8 font-mono text-xs uppercase tracking-wider text-brand-ink/55">
        Source: {source}
      </figcaption>
    </figure>
  );
}
