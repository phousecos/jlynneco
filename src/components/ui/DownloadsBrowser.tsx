import {
  audienceLabels,
  audienceOrder,
  serviceAreaGroups,
  serviceAreaLabels,
  type Audience,
  type ResourceItem,
} from "@/content/resources";
import {
  ResourceCardBody,
  cardBase,
  cardHover,
} from "@/components/ui/ResourceCard";
import { clsx } from "@/lib/clsx";

// The sector chips: an implicit "All" plus one per audience.
const sectorFilters: { id: "all" | Audience; label: string }[] = [
  { id: "all", label: "All" },
  ...audienceOrder.map((a) => ({ id: a, label: audienceLabels[a] })),
];

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

// Small labels pinned to the foot of a card, so the same title (e.g.
// "Board Checklist") stays distinguishable across sectors and service areas
// in the "All" view.
function CardTags({ item, audience }: { item: ResourceItem; audience: Audience }) {
  const tags = [
    ...(item.serviceAreas ?? []).map((a) => serviceAreaLabels[a]),
    audienceLabels[audience],
  ];
  return (
    <p className="mt-4 border-t border-brand-ink/10 pt-3 font-mono text-[0.7rem] uppercase tracking-wider text-brand-slate">
      {tags.join(" · ")}
    </p>
  );
}

// A single download card. `data-aud` and `data-svc` are what the CSS filters
// key off of; `data-svc` is a space-separated list, matched with `~=`. Files
// open in a new tab: they're served from the CMS's domain, where the
// `download` attribute is ignored, so a same-tab click would navigate away.
function DownloadCard({ item }: { item: ResourceItem }) {
  const audience = item.audience ?? "general";
  const svc = (item.serviceAreas ?? []).join(" ");
  const body = (
    <>
      <ResourceCardBody item={item} />
      <CardTags item={item} audience={audience} />
    </>
  );
  if (!item.href) {
    return (
      <div data-aud={audience} data-svc={svc} className={cardBase}>
        {body}
      </div>
    );
  }
  return (
    <a
      data-aud={audience}
      data-svc={svc}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={clsx(cardBase, cardHover)}
    >
      {body}
    </a>
  );
}

// Downloads filtered by service area and sector, driven entirely by CSS (see
// .dl-filter in globals.css). The two filters combine: a card shows only when
// it matches both. A sector shows its own files plus every "general" file; a
// service area shows its files plus any file with no service area. No client
// JavaScript required.
export function DownloadsBrowser({ items }: { items: ResourceItem[] }) {
  return (
    <div className="dl-filter mt-8">
      <div
        className="flex flex-col gap-4"
        role="radiogroup"
        aria-label="Filter downloads by service area"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Chip group="dl-svc" id="dl-svc-all" label="All service areas" checked />
        </div>
        {serviceAreaGroups.map((g) => (
          <div key={g.heading} className="flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2 w-full text-brand-slate sm:w-28">
              {g.heading}
            </span>
            {g.areas.map((a) => (
              <Chip key={a.id} group="dl-svc" id={`dl-svc-${a.id}`} label={a.label} />
            ))}
          </div>
        ))}
      </div>

      <div
        className="mt-6 flex flex-wrap items-center gap-2 border-t border-brand-ink/10 pt-6"
        role="radiogroup"
        aria-label="Filter downloads by sector"
      >
        <span className="eyebrow mr-2 w-full text-brand-slate sm:w-28">Sector</span>
        {sectorFilters.map((f, i) => (
          <Chip
            key={f.id}
            group="dl-filter"
            id={`dl-${f.id}`}
            label={f.label}
            checked={i === 0}
          />
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
