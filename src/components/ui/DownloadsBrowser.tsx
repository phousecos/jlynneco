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

// A single download card. When it has a file (`href`) the click is recorded via
// trackDownload before the browser follows the link, and `download` hints the
// browser to save rather than navigate.
function DownloadCard({ item }: { item: ResourceItem }) {
  if (!item.href) return <div className={cardBase}>{<ResourceCardBody item={item} />}</div>;
  return (
    <a
      href={item.href}
      download
      onClick={() => trackDownload(item.href!, item.audience ?? "general")}
      className={clsx(cardBase, cardHover)}
    >
      <ResourceCardBody item={item} />
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
          <DownloadCard key={item.title} item={item} />
        ))}
      </div>
    </>
  );
}
