// Payload CMS sync for the Resources page.
//
// The podcast, publications, and essays cards are an INDEX of content whose
// canonical home is the Transformidable Payload CMS. Downloads come from the
// J. Lynne library (jlynne.io), the second Payload installation. At build time we fetch
// the latest items from Payload's REST API and map them to `ResourceItem`s.
// Everything is defensive: if the CMS is unreachable, returns an error, or a
// field is named differently than we expect, the affected group silently falls
// back to the static placeholder items in `content/resources.ts`. Nothing on
// the page can break because the CMS is down or mid-migration. The site is a
// static export, so new CMS items appear on the next build — a daily scheduled
// rebuild (see worker/index.js) keeps the index current.
//
// Config (all optional — sensible defaults baked in):
//   PAYLOAD_API_URL         base URL of the CMS API (default transformidablethinking.com,
//                           which serves the Payload API alongside the public site)
//   TRANSFORMIDABLE_SITE_URL public site the cards link out to (default transformidablethinking.com)
//   LIBRARY_URL             the J. Lynne library (default https://jlynne.io)
//   LIBRARY_API_KEY         a Reader API key for the library. Without it (e.g.
//                           preview builds) Downloads keep the static fallback.
//
// Transformidable reads are public (Payload access: read: true on these
// collections). The library has no public API, so it needs the key.

import {
  fileTypeLabels,
  industryLabels,
  resourceGroups as staticGroups,
  topicLabels,
  type FileType,
  type Industry,
  type ResourceGroup,
  type ResourceItem,
  type Topic,
} from "@/content/resources";

const PAYLOAD_URL = (
  process.env.PAYLOAD_API_URL ?? "https://transformidablethinking.com"
).replace(/\/+$/, "");

const SITE_URL = (
  process.env.TRANSFORMIDABLE_SITE_URL ?? "https://transformidablethinking.com"
).replace(/\/+$/, "");

const LIBRARY_URL = (process.env.LIBRARY_URL ?? "https://jlynne.io").replace(/\/+$/, "");

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
  { limit = 6, sort = "-createdAt", where = "" } = {},
): Promise<Doc[]> {
  try {
    const url =
      `${PAYLOAD_URL}/api/${collection}` +
      `?limit=${limit}&depth=1&sort=${encodeURIComponent(sort)}${where}`;
    const res = await fetch(url);
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

// A library asset becomes a card linking to jlynne.co/downloads/{slug}, which
// the Worker resolves to the current file (worker/index.js). Codes this site
// doesn't know yet are dropped, so a new library option can't produce a card
// with a blank tag.
function mapLibraryAsset(doc: Doc): ResourceItem | null {
  const title = pickString(doc, ["title"]);
  const slug = pickString(doc, ["slug"]);
  if (!title || !slug) return null;
  const type = pickString(doc, ["assetType"]);
  const fileType = type && type in fileTypeLabels ? (type as FileType) : undefined;
  const edition = pickString(doc, ["sectorEdition"]);
  const tracks = Array.isArray(doc.track) ? doc.track : [];
  return {
    meta: fileType ? fileTypeLabels[fileType] : "Download",
    title,
    description: pickString(doc, ["summary"]) ?? "Download the document.",
    href: `/downloads/${slug}`,
    topics: tracks.filter((t): t is Topic => typeof t === "string" && t in topicLabels),
    industry: edition && edition in industryLabels ? (edition as Industry) : "all",
    fileType,
  };
}

// Final J. Lynne assets marked for website download, from the library.
async function fetchLibraryDownloads(): Promise<ResourceItem[]> {
  const key = process.env.LIBRARY_API_KEY;
  if (!key) return [];
  const where = [
    ["where[status][equals]", "final"],
    ["where[brand][equals]", "jlynne"],
    ["where[use][contains]", "website-download"],
  ]
    .map(([k, v]) => `${encodeURIComponent(k)}=${v}`)
    .join("&");
  try {
    const res = await fetch(
      `${LIBRARY_URL}/api/assets?limit=200&depth=0&sort=title&${where}`,
      { headers: { Authorization: `users API-Key ${key}` } },
    );
    if (!res.ok) return [];
    const docs = ((await res.json()) as { docs?: unknown })?.docs;
    return Array.isArray(docs)
      ? (docs as Doc[]).map(mapLibraryAsset).filter((x): x is ResourceItem => x !== null)
      : [];
  } catch {
    return [];
  }
}

// Which resource groups are CMS-backed, and how to fetch + map each.
const cmsSources: Record<
  string,
  {
    collection: string;
    map: (doc: Doc) => ResourceItem | null;
    query?: Parameters<typeof fetchDocs>[1];
  }
> = {
  podcast: { collection: "podcast-episodes", map: mapPodcast },
  transformidable: { collection: "articles", map: mapArticle },
  publications: { collection: "books", map: mapBook },
};

// The Resources groups with CMS-backed sections hydrated from Payload. Any
// group whose fetch fails or returns nothing keeps its static placeholder items.
export async function getResourceGroups(): Promise<ResourceGroup[]> {
  const entries = Object.entries(cmsSources);
  const [fetched, downloads] = await Promise.all([
    Promise.all(entries.map(([, { collection, query }]) => fetchDocs(collection, query))),
    fetchLibraryDownloads(),
  ]);

  const byGroup = new Map<string, ResourceItem[]>();
  entries.forEach(([groupId, { map }], i) => {
    const items = fetched[i].map(map).filter((x): x is ResourceItem => x !== null);
    if (items.length) byGroup.set(groupId, items);
  });
  if (downloads.length) byGroup.set("downloads", downloads);

  return staticGroups.map((group) => {
    const cmsItems = byGroup.get(group.id);
    return cmsItems ? { ...group, items: cmsItems } : group;
  });
}
