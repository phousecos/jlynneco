# J. Lynne & Co. — Firm Site

The front door for the firm: apex advisory, audits, and expert-witness work.
Built to sell on **authority, not services** — organized around proof and a
point of view (`person → firm → product`).

Next.js (App Router, TypeScript) + Tailwind v4, built as a static export
(`out/`) and hosted on Cloudflare Workers static assets (`wrangler.jsonc`).

## Deploy

Cloudflare Workers Builds deploys on every push to the production branch
(build: `npm run build`, deploy: `npx wrangler deploy`). A daily cron in
`worker/index.js` POSTs to a Workers Builds deploy hook (secret
`DEPLOY_HOOK_URL`) so the Resources page picks up new library and
Transformidable CMS items. Redirects live in `public/_redirects`. Analytics:
Cloudflare Web Analytics, enabled from the dashboard (no code).

## Downloads (the J. Lynne library)

Downloads come from the J. Lynne library at jlynne.io (Payload, repo
`jlynne-cms`), which has no public API. Create a **Reader** user there with an
API key for this site, then set the key as `LIBRARY_API_KEY` in two places:

- **Build variable** (Workers Builds): Resources lists the library's Final,
  J. Lynne assets marked *Website download*, filtered by topic (track),
  industry (sector edition), and type. Without the key the build keeps the
  static files in `public/downloads`.
- **Worker secret**: `jlynne.co/downloads/{slug}` looks the slug up and serves
  the current published file. Retired assets redirect to their replacement,
  or to `/downloads/updated` when there is none; drafts are a 404;
  Transformidable items and hosted video redirect to their URL. Any Final
  asset resolves, website download or not, so emailed and printed links work.

These are the only links prospects should ever see; never link to jlynne.io.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static)
npm run lint
```

## Architecture

```
src/
  app/                     # routes (App Router)
    page.tsx               # Home — the thesis
    firm/                  # The Firm / Point of View
    expert-witness/        # apex door, built for counsel
    advisory/              # full lifecycle: before · audit/SACS · after
    program/               # revenue floor — senior delivery
    cio-advisra/           # productized program handoff
    proof/                 # the exhibit spine
    engage/                # segmented intake (counsel vs client)
    legal/{privacy,terms}/ # legal pages (Canady + Vaughan Group live here)
  components/
    site/                  # SiteHeader, SiteFooter, Mark (the gold emblem)
    ui/                    # Section, Container, CTALink, LadderCard, EngageCTA…
    exhibit/               # Exhibit + ExhibitStrip — the signature element
  content/                 # site.ts, nav.ts, exhibits.ts (single sources of truth)
  lib/                     # clsx helper
```

## Design tokens

Defined in `src/app/globals.css` (`@theme`). Color: Counsel Ink `#1A1D23`,
Aurum `#B0852F`, Bone `#E9E5DD`, Graphite `#6B7078`, Ink Deep `#0F1115`.
One accent per view — gold earns its weight by being rare. Type: Fraunces
(display), Hanken Grotesk (body), IBM Plex Mono (data/labels).

## Before launch — known placeholders

- **The mark** (`components/site/Mark.tsx`) is a stand-in for the production
  negative-space elephant/bull emblem. Swap the SVG paths; all usages update.
- **Proof exhibits** (`content/exhibits.ts`) are realistic placeholder copy —
  replace with real case detail, publication links, and named references.
- **Expert Witness posture** is calibrated to *building toward* (spec §5).
- **Engage forms** are static; wire `action` to a form endpoint.
- **Domain / CIO Advisra URL** are set in `content/site.ts`.
- **Imagery**: re-source to boardroom-grade and confirm licensing for the entity.
