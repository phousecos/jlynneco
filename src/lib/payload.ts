// Payload CMS sync for the Resources page.
//
// The podcast, publications, and essays cards are an INDEX of content whose
// canonical home is the Transformidable Payload CMS. At render time we fetch
// the latest items from Payload's REST API and map them to `ResourceItem`s.
// Everything is defensive: if the CMS is unreachable, returns an error, or a
// field is named differently than we expect, the affected group silently falls
// back to the static placeholder items in `content/resources.ts`. Nothing on
// the page can break because the CMS is down or mid-migration.
//
// Config (both optional — sensible defaults baked in):
//   PAYLOAD_API_URL         base URL of the CMS (default cms.transformidable.media)
//   TRANSFORMIDABLE_SITE_URL public site the cards link out to (default transformidable.media)
//
// Reads are public (Payload access: read: true on these collections), so no
// API key is required. If that changes, add a read-only key and send it as an
// Authorization header in `fetchDocs`.

import {
  resourceGroups as staticGroups,
  type ResourceGroup,
  type ResourceItem,
} from "@/content/resources";

const PAYLOAD_URL = (
  process.env.PAYLOAD_API_URL ?? "https://cms.transformidable.media"
).replace(/\/+$/, "");

const SITE_URL = (
  process.env.TRANSFORMIDABLE_SITE_URL ?? "https://transformidable.media"
).replace(/\/+$/, "");

// Re-sync from the CMS at most once an hour; keeps the page fast and static-ish.
const REVALIDATE_SECONDS = 3600;

type Doc = Record<string, unknown>;

// First non-empty string among the given keys — tolerates differing field names.
function pickString(doc: Doc, keys: string[]): string | undefined {
  for (const key of keys) {
    const value = doc[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}

// Build the outward link: prefer an explicit URL field on the doc; otherwise
// construct a canonical URL on the public site from the slug.
function pickHref(doc: Doc, path: string): string | undefined {
  const explicit = pickString(doc, ["url", "link", "externalUrl", "permalink"]);
  if (explicit) return explicit;
  const slug = pickString(doc, ["slug"]);
  return slug ? `${SITE_URL}/${path}/${slug}` : undefined;
}

async function fetchDocs(
  collection: string,
  { limit = 6, sort = "-createdAt" } = {},
): Promise<Doc[]> {
  try {
    const url =
      `${PAYLOAD_URL}/api/${collection}` +
      `?limit=${limit}&depth=1&sort=${encodeURIComponent(sort)}`;
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return [];
    const data: unknown = await res.json();
    const docs = (data as { docs?: unknown })?.docs;
    return Array.isArray(docs) ? (docs as Doc[]) : [];
  } catch {
    return [];
  }
}

function mapArticle(doc: Doc): ResourceItem | null {
  const title = pickString(doc, ["title", "name", "headline"]);
  if (!title) return null;
  return {
    meta: "Essay",
    title,
    description:
      pickString(doc, ["excerpt", "summary", "description", "subtitle", "deck"]) ??
      "Read the full essay on Transformidable.",
    href: pickHref(doc, "articles"),
  };
}

function mapBook(doc: Doc): ResourceItem | null {
  const title = pickString(doc, ["title", "name"]);
  if (!title) return null;
  return {
    meta: "Book",
    title,
    description:
      pickString(doc, ["description", "subtitle", "summary", "blurb"]) ??
      "View the book and where to find it.",
    // Books usually link straight to a retailer; fall back to a site page.
    href:
      pickString(doc, ["purchaseUrl", "buyUrl", "retailerUrl", "link", "url"]) ??
      pickHref(doc, "books"),
  };
}

function mapPodcast(doc: Doc): ResourceItem | null {
  const title = pickString(doc, ["title", "name", "episodeTitle"]);
  if (!title) return null;
  return {
    meta: "Episode",
    title,
    description:
      pickString(doc, ["excerpt", "summary", "description", "showNotes"]) ??
      "Listen to the episode.",
    href:
      pickString(doc, ["episodeUrl", "listenUrl", "url", "link"]) ??
      pickHref(doc, "podcast"),
  };
}

// Which resource groups are CMS-backed, and how to fetch + map each.
const cmsSources: Record<
  string,
  { collection: string; map: (doc: Doc) => ResourceItem | null }
> = {
  podcast: { collection: "podcast-episodes", map: mapPodcast },
  transformidable: { collection: "articles", map: mapArticle },
  publications: { collection: "books", map: mapBook },
};

// The Resources groups with CMS-backed sections hydrated from Payload. Any
// group whose fetch fails or returns nothing keeps its static placeholder items.
export async function getResourceGroups(): Promise<ResourceGroup[]> {
  const entries = Object.entries(cmsSources);
  const fetched = await Promise.all(
    entries.map(([, { collection }]) => fetchDocs(collection)),
  );

  const byGroup = new Map<string, ResourceItem[]>();
  entries.forEach(([groupId, { map }], i) => {
    const items = fetched[i].map(map).filter((x): x is ResourceItem => x !== null);
    if (items.length) byGroup.set(groupId, items);
  });

  return staticGroups.map((group) => {
    const cmsItems = byGroup.get(group.id);
    return cmsItems ? { ...group, items: cmsItems } : group;
  });
}
