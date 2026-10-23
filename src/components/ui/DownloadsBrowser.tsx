import {
  fileTypeLabels,
  industryLabels,
  topicLabels,
  type FileType,
  type Industry,
  type ResourceItem,
  type Topic,
} from "@/content/resources";
import {
  ResourceCardBody,
  cardBase,
  cardHover,
} from "@/components/ui/ResourceCard";
import { clsx } from "@/lib/clsx";

// The three filters. Each card carries a data attribute per filter: `data-topic`
// (space-separated, "any" for a cross-track piece), `data-industry` ("all" for
// an edition that serves every industry) and `data-type`. A wildcard value
// keeps the card visible whichever chip is picked in that row.
type Filter = {
  key: "topic" | "industry" | "type";
  heading: string;
  allLabel: string;
  wildcard?: string;
  options: { id: string; label: string }[];
};

// One filter chip: a hidden radio plus its label. `group` is the radio name,
// so each filter row keeps its own selection.
function Chip({
  group,
  id,
  label,
  checked,
}: {
  group: string;
  id: string;
  label: string;
  checked?: boolean;
}) {
  return (
    <>
      <input
        type="radio"
        name={group}
        id={id}
        defaultChecked={checked}
        className="dl-filter__radio sr-only"
      />
      <label htmlFor={id} className="dl-filter__chip">
        {label}
      </label>
    </>
  );
}

// Small labels pinned to the foot of a card, so the same title (e.g. "Board
// Checklist") stays distinguishable across topics and industries.
function CardTags({ item }: { item: ResourceItem }) {
  const tags = [
    ...(item.topics ?? []).map((t) => topicLabels[t]),
    item.industry && item.industry !== "all"
      ? industryLabels[item.industry]
      : "All industries",
  ];
  return (
    <p className="mt-4 border-t border-brand-ink/10 pt-3 font-mono text-[0.7rem] uppercase tracking-wider text-brand-slate">
      {tags.join(" · ")}
    </p>
  );
}

// A single download card. Files open in a new tab, so the Resources page stays
// where the visitor left it.
function DownloadCard({ item }: { item: ResourceItem }) {
  const data = {
    "data-topic": item.topics?.length ? item.topics.join(" ") : "any",
    "data-industry": item.industry ?? "all",
    "data-type": item.fileType ?? "other",
  };
  const body = (
    <>
      <ResourceCardBody item={item} />
      <CardTags item={item} />
    </>
  );
  if (!item.href) {
    return (
      <div {...data} className={cardBase}>
        {body}
      </div>
    );
  }
  return (
    <a
      {...data}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={clsx(cardBase, cardHover)}
    >
      {body}
    </a>
  );
}

// Hides the cards a picked chip excludes. Generated from the chips actually
// shown, and deliberately unlayered (a plain <style>) so `display: none` beats
// the cards' `flex` utility: Tailwind's utilities layer would win over any
// layered rule regardless of specificity.
function filterCss(filters: Filter[]) {
  return filters
    .flatMap((f) =>
      f.options.map((o) => {
        const keep = [o.id, f.wildcard]
          .filter(Boolean)
          .map((v) => `:not([data-${f.key}~="${v}"])`)
          .join("");
        return `.dl-filter:has(#dl-${f.key}-${o.id}:checked) .dl-filter__grid > [data-${f.key}]${keep}`;
      }),
    )
    .join(",\n")
    .concat(" { display: none; }");
}

// Only values some download carries get a chip, so no chip ever leads to an
// empty grid on its own.
function present<T extends string>(
  labels: Record<T, string>,
  values: (T | undefined)[],
) {
  const seen = new Set(values);
  return (Object.keys(labels) as T[])
    .filter((id) => seen.has(id))
    .map((id) => ({ id, label: labels[id] }));
}

// Downloads filtered by topic, industry, and type, driven entirely by CSS. The
// filters combine: a card shows only when it matches all three. No client
// JavaScript required.
export function DownloadsBrowser({ items }: { items: ResourceItem[] }) {
  const filters: Filter[] = [
    {
      key: "topic",
      heading: "Topic",
      allLabel: "All topics",
      wildcard: "any",
      options: present<Topic>(topicLabels, items.flatMap((i) => i.topics ?? [])),
    },
    {
      key: "industry",
      heading: "Industry",
      allLabel: "All industries",
      wildcard: "all",
      options: present<Industry>(
        industryLabels,
        items.map((i) => (i.industry === "all" ? undefined : i.industry)),
      ),
    },
    {
      key: "type",
      heading: "Type",
      allLabel: "All types",
      options: present<FileType>(fileTypeLabels, items.map((i) => i.fileType)),
    },
  ];
  const shown = filters.filter((f) => f.options.length > 0);

  return (
    <div className="dl-filter mt-8">
      <style>{filterCss(shown)}</style>
      <div className="flex flex-col gap-4">
        {shown.map((f) => (
          <div
            key={f.key}
            className="flex flex-wrap items-center gap-2"
            role="radiogroup"
            aria-label={`Filter downloads by ${f.heading.toLowerCase()}`}
          >
            <span className="eyebrow mr-2 w-full text-brand-slate sm:w-28">
              {f.heading}
            </span>
            <Chip group={`dl-${f.key}`} id={`dl-${f.key}-all`} label={f.allLabel} checked />
            {f.options.map((o) => (
              <Chip
                key={o.id}
                group={`dl-${f.key}`}
                id={`dl-${f.key}-${o.id}`}
                label={o.label}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="dl-filter__grid mt-8 grid gap-4 border-t border-brand-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <DownloadCard key={item.href ?? item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
