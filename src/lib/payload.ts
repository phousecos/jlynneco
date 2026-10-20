// Payload CMS sync for the Resources page.
//
// The podcast, publications, essays, and downloads cards are an INDEX of
// content whose canonical home is the Transformidable Payload CMS. At build time we fetch
// the latest items from Payload's REST API and map them to `ResourceItem`s.
// Everything is defensive: if the CMS is unreachable, returns an error, or a
// field is named differently than we expect, the affected group silently falls
// back to the static placeholder items in `content/resources.ts`. Nothing on
// the page can break because the CMS is down or mid-migration. The site is a
// static export, so new CMS items appear on the next build — a daily scheduled
// rebuild (see worker/index.js) keeps the index current.
//
// Config (both optional — sensible defaults baked in):
//   PAYLOAD_API_URL         base URL of the CMS API (default transformidablethinking.com,
//                           which serves the Payload API alongside the public site)
//   TRANSFORMIDABLE_SITE_URL public site the cards link out to (default transformidablethinking.com)
//
// Reads are public (Payload access: read: true on these collections), so no
// API key is required. If that changes, add a read-only key and send it as an
// Authorization header in `fetchDocs`.

import {
  audienceOrder,
  resourceGroups as staticGroups,
  serviceAreaLabels,
  type Audience,
  type ResourceGroup,
  type ResourceItem,
  type ServiceArea,
} from "@/content/resources";

const PAYLOAD_URL = (
  process.env.PAYLOAD_API_URL ?? "https://transformidablethinking.com"
).replace(/\/+$/, "");

const SITE_URL = (
  process.env.TRANSFORMIDABLE_SITE_URL ?? "https://transformidablethinking.com"
).replace(/\/+$/, "");

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

// Document type values from the CMS, shown as the card's small label.
const documentTypeLabels: Record<string, string> = {
  overview: "Overview",
  checklist: "Checklist",
  guide: "Guide",
  brief: "Brief",
  framework: "Framework",
  template: "Template",
  worksheet: "Worksheet",
  report: "Report",
};

// Payload returns the upload's URL as served by the CMS, which is relative
// (/api/media/file/...) when the CMS has no serverURL configured.
function absoluteUrl(url: string): string {
  return /^https?:\/\//.test(url) ? url : `${PAYLOAD_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function mapDocument(doc: Doc): ResourceItem | null {
  // Documents is an upload collection, so the file's URL is on the doc itself.
  const title = pickString(doc, ["title"]);
  const fileUrl = pickString(doc, ["url"]);
  if (!title || !fileUrl) return null;

  const type = pickString(doc, ["documentType"]);
  const sector = pickString(doc, ["sector"]);
  const areas = Array.isArray(doc.serviceAreas) ? doc.serviceAreas : [];
  return {
    meta: (type && documentTypeLabels[type]) ?? "Download",
    title,
    description: pickString(doc, ["description"]) ?? "Download the document.",
    href: absoluteUrl(fileUrl),
    audience: audienceOrder.includes(sector as Audience)
      ? (sector as Audience)
      : "general",
    // Drop values this site doesn't know yet, so a new CMS option can't
    // produce a card with a blank tag.
    serviceAreas: areas.filter(
      (a): a is ServiceArea => typeof a === "string" && a in serviceAreaLabels,
    ),
  };
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
  // Only published documents branded J. Lynne. The CMS already hides drafts
  // from anonymous reads; the status filter keeps that true if this build
  // ever authenticates.
  downloads: {
    collection: "documents",
    map: mapDocument,
    query: {
      limit: 200,
      sort: "sortOrder,title",
      where:
        `&${encodeURIComponent("where[brand][in]")}=jlynne` +
        `&${encodeURIComponent("where[status][equals]")}=published`,
    },
  },
};

// The Resources groups with CMS-backed sections hydrated from Payload. Any
// group whose fetch fails or returns nothing keeps its static placeholder items.
export async function getResourceGroups(): Promise<ResourceGroup[]> {
  const entries = Object.entries(cmsSources);
  const fetched = await Promise.all(
    entries.map(([, { collection, query }]) => fetchDocs(collection, query)),
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
