"use client";

import { useState } from "react";
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
import { trackDownload } from "@/lib/track";
import { clsx } from "@/lib/clsx";

type Filter = "all" | Audience;

// A small sector label pinned to the foot of a download card, so the same
// title (e.g. "Board Checklist") stays distinguishable across sectors in the
// "All" view.
function AudienceTag({ item }: { item: ResourceItem }) {
  const audience = item.audience ?? "general";
  return (
    <p className="mt-4 border-t border-brand-ink/10 pt-3 font-mono text-[0.7rem] uppercase tracking-wider text-brand-slate">
      {audienceLabels[audience]}
    </p>
  );
}

// A single download card. When it has a file (`href`) the click is recorded via
// trackDownload before the browser follows the link, and `download` hints the
// browser to save rather than navigate.
function DownloadCard({ item }: { item: ResourceItem }) {
  const body = (
    <>
      <ResourceCardBody item={item} />
      <AudienceTag item={item} />
    </>
  );
  if (!item.href) return <div className={cardBase}>{body}</div>;
  return (
    <a
      href={item.href}
      download
      onClick={() => trackDownload(item.href!, item.audience ?? "general")}
      className={clsx(cardBase, cardHover)}
    >
      {body}
    </a>
  );
}

// Downloads with a sector filter. "All" shows everything; a vertical shows its
// own files plus every "general" file (general applies to all sectors).
export function DownloadsBrowser({ items }: { items: ResourceItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = items.filter((item) => {
    if (filter === "all") return true;
    const audience = item.audience ?? "general";
    return audience === filter || audience === "general";
  });

  const chips: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    ...audienceOrder.map((a) => ({ value: a, label: audienceLabels[a] })),
  ];

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter downloads by sector">
        {chips.map((chip) => {
          const active = filter === chip.value;
          return (
            <button
              key={chip.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(chip.value)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                active
                  ? "border-brand-primary bg-brand-primary text-brand-paper"
                  : "border-brand-ink/20 text-brand-ink hover:border-brand-primary hover:text-brand-primary",
              )}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <DownloadCard key={item.href ?? item.title} item={item} />
        ))}
      </div>
    </>
  );
}
