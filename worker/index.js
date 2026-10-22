// Cloudflare Worker for the static site. Pages are served straight from the
// static assets in ./out (see wrangler.jsonc); this script runs only for paths
// with no static file. It does two things:
//
// 1. /downloads/{slug}: looks the slug up in the J. Lynne library (jlynne.io)
//    and serves the current published file. Every link prospects see (emails,
//    printed briefs, webinar follow-ups) uses this jlynne.co URL, so the
//    library can be reorganized without breaking a printed link. The static
//    files in /downloads/*.pdf still win, since they match an asset first.
//
// 2. A daily cron that POSTs to a Workers Builds deploy hook, rebuilding the
//    site so Resources picks up new library and Transformidable CMS items.
//
// Setup: LIBRARY_URL is a var in wrangler.jsonc. Store a library Reader API key
// as the secret LIBRARY_API_KEY, and the deploy hook URL (Worker → Settings →
// Builds → Deploy Hooks) as DEPLOY_HOOK_URL. Without either, that part no-ops.

const DOWNLOAD_PATH = /^\/downloads\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/;

// Where a retired asset with no replacement sends people (src/app/downloads/updated).
const UPDATED_PAGE = "/downloads/updated";

async function notFound(request, env) {
  // With not_found_handling: "404-page", any missing path returns the site's
  // 404 page with a 404 status.
  return env.ASSETS.fetch(new Request(new URL("/404-not-a-page", request.url), request));
}

function redirect(location, request) {
  return Response.redirect(new URL(location, request.url).toString(), 302);
}

async function libraryFetch(env, path) {
  const base = (env.LIBRARY_URL || "https://jlynne.io").replace(/\/+$/, "");
  return fetch(`${base}${path}`, {
    headers: { Authorization: `users API-Key ${env.LIBRARY_API_KEY}` },
  });
}

async function serveDownload(slug, request, env) {
  if (!env.LIBRARY_API_KEY) {
    console.warn("LIBRARY_API_KEY is not set; cannot resolve download links.");
    return notFound(request, env);
  }

  const res = await libraryFetch(
    env,
    `/api/assets?where[slug][equals]=${slug}&depth=1&limit=1`,
  );
  if (!res.ok) {
    console.error(`Library lookup failed for ${slug}: ${res.status}`);
    return new Response("This download is temporarily unavailable. Please try again shortly.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Retry-After": "60" },
    });
  }
  const asset = (await res.json()).docs?.[0];

  // Drafts and assets in review don't exist as far as the public is concerned.
  if (!asset || (asset.status !== "final" && asset.status !== "retired")) {
    return notFound(request, env);
  }

  if (asset.status === "retired") {
    const next = asset.replacedBy;
    return next && typeof next === "object" && next.status === "final" && next.slug
      ? redirect(`/downloads/${next.slug}`, request)
      : redirect(UPDATED_PAGE, request);
  }

  // Transformidable items and hosted video live elsewhere.
  const file = asset.publishedFile;
  if (asset.brand === "transformidable" || !file?.filename) {
    return asset.externalUrl ? redirect(asset.externalUrl, request) : notFound(request, env);
  }

  const fileRes = await libraryFetch(
    env,
    `/api/media/file/${encodeURIComponent(file.filename)}`,
  );
  if (!fileRes.ok) {
    console.error(`Library file ${file.filename} failed: ${fileRes.status}`);
    return notFound(request, env);
  }
  const headers = new Headers({
    "Content-Type": fileRes.headers.get("Content-Type") || file.mimeType || "application/octet-stream",
    // Open in the browser, but save under the library's file name.
    "Content-Disposition": `inline; filename="${file.filename.replace(/"/g, "")}"`,
    // Short, so a new version or a retirement shows up within minutes.
    "Cache-Control": "public, max-age=300",
    "X-Robots-Tag": "noindex",
  });
  const length = fileRes.headers.get("Content-Length");
  if (length) headers.set("Content-Length", length);
  return new Response(request.method === "HEAD" ? null : fileRes.body, { status: 200, headers });
}

const worker = {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const match = DOWNLOAD_PATH.exec(pathname);
    if (match && (request.method === "GET" || request.method === "HEAD")) {
      return serveDownload(match[1], request, env);
    }
    return env.ASSETS.fetch(request);
  },

  async scheduled(controller, env, ctx) {
    if (!env.DEPLOY_HOOK_URL) {
      console.warn("DEPLOY_HOOK_URL is not set; skipping scheduled rebuild.");
      return;
    }
    ctx.waitUntil(
      fetch(env.DEPLOY_HOOK_URL, { method: "POST" }).then(async (res) => {
        if (!res.ok) {
          console.error(`Deploy hook failed: ${res.status} ${await res.text()}`);
        }
      }),
    );
  },
};

export default worker;
