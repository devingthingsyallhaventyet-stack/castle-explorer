# CastleCore — Project Context for Claude

This file is read automatically at the start of every session. It captures the
key context and standing decisions so work continues seamlessly across sessions.

## What this project is
- **castlecore.uk** — a guide to castles/abbeys across Scotland, England, Wales, Ireland.
- **Stack:** Cloudflare Workers (`worker.js`) + static HTML/CSS/JS assets, a
  Cloudflare **D1 database** (`castlecore-db`) as the data store, and **R2** for images.
- No build framework — pages are plain HTML with inline JS; the Worker handles
  routing, the API, the R2 image proxy, and serves the listing template.

## ⭐ SOURCE OF TRUTH RULE (most important)
**All listing data lives in the D1 database — this is "the dashboard."**
When the user refers to "the listings," they ALWAYS mean what is live in the
database (the dashboard), never any static file. List pages must read live from
the database. There must be **no second data source.**

## Data architecture
- **Public read endpoint:** `GET /public/listings?country=<Country>&region=<region-slug>`
  (in `worker.js`, function `getPublicListings`). Returns **only published**
  listings with public-safe fields (never `internal_notes`/`internal_tags`),
  a hero image per listing, edge-cached ~5 min.
- **Listing detail pages** use `GET /public/listing/{slug}`.
- **Scotland is migrated to live data:** `scotland.html` and the Scotland region
  pages (`js/region.js`, when `CONFIG.country === 'Scotland'`) fetch from
  `/public/listings`. The old static Scotland files (`data-scotland.js`,
  `scotland/data/*.json`) have been **deleted**.
- **England / Wales / Ireland are NOT migrated yet** — they still use static
  `data-<country>.js` and `/<country>/data/*.json`. Roll them out the same way
  once Scotland is verified, then delete their static files too.
- Region pages filter by `CONFIG.counties` client-side to match the country
  page's county-based grouping.

## Images & Google Places (cost-sensitive — read carefully)
- Each listing has an **approved `google_place_id`** the user curated by hand over
  days. ALWAYS use that stored place_id for any Google lookup. **NEVER search
  Google or guess/bulk-match place IDs** — a wrong match is worse than no image.
  Listings with no approved place_id get no image (skip them).
- `google_rating` / `google_review_count` are **cached in the DB** during
  enrichment, so list cards show ratings for **FREE** (no per-load API call).
- Google Places API calls **cost money per call**. NEVER call Google on every
  page load / per card. The plan for card images is **fetch once per listing
  (using its approved place_id) and cache** (e.g. store the hero photo), then
  serve the cached image for free thereafter.

## Querying the live database (the dashboard)
A `CLOUDFLARE_API_TOKEN` env var is configured (D1 access). The account and DB
ids are non-secret. To read listings directly, query the D1 HTTP API:

```bash
curl -s -X POST \
  "https://api.cloudflare.com/client/v4/accounts/0593d0435bdf2220598fcc51183baa95/d1/database/23c44507-f5ef-4a02-8fcb-a4f45cfa6271/query" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"sql":"SELECT slug,name,type,region,county,century,condition,published FROM listings WHERE country = ? ORDER BY name","params":["Scotland"]}'
```

Requires the environment's Network access to allow `api.cloudflare.com` (Custom
allowlist). The dashboard shows published AND drafts; filter on `published = 1`
for what's public.

## Scotland page history
The Scotland landing page was a bespoke "immersive" custom design; for V1 it was
reverted to the standard country template (same structure as `england.html`),
keeping Scotland's content/branding. The full custom page is preserved at
`_archive/scotland-backup-2026-06-03.html` (excluded from deploy via
`.assetsignore`), and recoverable from commit `47b84fe` (local tag
`scotland-custom-v1`).

## Repo / workflow notes
- Active work branch: `claude/gracious-fermi-IIe2q`; open PR: **#4**.
- Commit author must be `Claude <noreply@anthropic.com>`. Don't push to other
  branches without permission. Don't open PRs unless asked.
- **Two Cloudflare projects are wired to this repo:** `castle-explorer2` is the
  REAL one (its name matches `wrangler.jsonc`). `castle-explorer` is an old,
  orphaned project whose CI build **always fails** — that red ❌ is safe to ignore.
- The user is non-technical: explain things plainly, avoid jargon, and confirm
  before anything that goes live (merging/publishing).
