import { Fragment } from "react";
import {
  audienceLabels,
  audienceOrder,
  type Audience,
  type ResourceItem,
} from "@/content/resources";
import {
  ResourceCardBody,
  cardBase,
  cardHover,
} from "@/components/ui/ResourceCard";
import { clsx } from "@/lib/clsx";

// The filter chips: an implicit "All" plus one per audience.
const filters: { id: "all" | Audience; label: string }[] = [
  { id: "all", label: "All" },
  ...audienceOrder.map((a) => ({ id: a, label: audienceLabels[a] })),
];

// A small sector label pinned to the foot of a card, so the same title (e.g.
// "Board Checklist") stays distinguishable across sectors in the "All" view.
function AudienceTag({ audience }: { audience: Audience }) {
  return (
    <p className="mt-4 border-t border-brand-ink/10 pt-3 font-mono text-[0.7rem] uppercase tracking-wider text-brand-slate">
      {audienceLabels[audience]}
    </p>
  );
}

// A single download card. `data-aud` is what the CSS filter keys off of. The
// link is a plain `<a download>`, so downloading works with no JavaScript;
// web-analytics tools auto-track file downloads (and the sector is already in
// the filename), so no click handler is needed.
function DownloadCard({ item }: { item: ResourceItem }) {
  const audience = item.audience ?? "general";
  const body = (
    <>
      <ResourceCardBody item={item} />
      <AudienceTag audience={audience} />
    </>
  );
  if (!item.href) {
    return (
      <div data-aud={audience} className={cardBase}>
        {body}
      </div>
    );
  }
  return (
    <a
      data-aud={audience}
      href={item.href}
      download
      className={clsx(cardBase, cardHover)}
    >
      {body}
    </a>
  );
}

// Downloads with a sector filter, driven entirely by CSS (see .dl-filter in
// globals.css). "All" shows everything; a vertical shows its own files plus
// every "general" file. No client JavaScript required.
export function DownloadsBrowser({ items }: { items: ResourceItem[] }) {
  return (
    <div className="dl-filter mt-8">
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-label="Filter downloads by sector"
      >
        {filters.map((f, i) => (
          <Fragment key={f.id}>
            <input
              type="radio"
              name="dl-filter"
              id={`dl-${f.id}`}
              defaultChecked={i === 0}
              className="dl-filter__radio sr-only"
            />
            <label htmlFor={`dl-${f.id}`} className="dl-filter__chip">
              {f.label}
            </label>
          </Fragment>
        ))}
      </div>

      <div className="dl-filter__grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <DownloadCard key={item.href ?? item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
