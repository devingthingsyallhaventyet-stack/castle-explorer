# Highlands Region Page — Build Brief for Sonnet

## Context
You're building a **region page** for the Scottish Highlands on CastleCore (castlecore.uk), a heritage tourism site covering 2,000+ castles/abbeys/ruins across the UK & Ireland.

This is an **A/B experiment**: Opus already built its version at `scotland/highlands-opus.html`. You will build yours at `scotland/highlands-sonnet.html`. Build the best page you can — you have **complete creative freedom**.

## The Prompt (from E, the human)
> "Do a google search and research what similar pages feature, take the best from them and make it better. Imagine you are the user, clicking on this page to explore sites in a specific region on the trip of a lifetime that you will soon go on."

**Key feedback on the OLD page (before Opus rebuilt it):** "doesn't follow our branding and is too text heavy"

## What You Must Read First
1. **Skill file**: `skills/castlecore/SKILL.md` — contains ALL CSS variables, font rules, image rules, deploy process, and critical constraints
2. **Existing Scotland page** (template reference): `scotland.html` — the nav, footer, and mega menu structure must match
3. **Data**: `data.js` loaded via `<script src="/data.js"></script>` exposes a global `CASTLES` array. Filter for Highland sites using:
   ```js
   const HIGHLAND_COUNTIES = ['Highland','Inverness','Ross','Sutherland','Caithness','Skye','Lochaber','Moray','Nairn','Badenoch'];
   const highlands = CASTLES.filter(c => c.country === 'Scotland' && HIGHLAND_COUNTIES.some(r => (c.county||'').includes(r)));
   ```
   This gives ~81 sites. Each has: name, lat, lng, type, era, condition, description, image, rating, reviewCount, county, tags, access, gallery[], history

## Data Shape (castle object)
```json
{
  "name": "Eilean Donan Castle",
  "lat": 57.27, "lng": -5.52,
  "country": "Scotland", "county": "Highland",
  "type": "castle", "era": "13th century", "condition": "restored",
  "description": "Short evocative description...",
  "image": "https://img.castlecore.uk/eilean-donan-castle.jpg OR wikimedia URL",
  "rating": 4.5, "reviewCount": 12000,
  "tags": ["well-preserved", "photogenic", "atmospheric", "coastal"],
  "access": "paid", // or "free" or "exterior-only"
  "gallery": ["https://img.castlecore.uk/eilean-donan-castle-2.jpg", ...],
  "history": "Longer history text..."
}
```

## Image URL Rules (CRITICAL)
- Primary images (`.image`) are either `https://img.castlecore.uk/slug.jpg` (no number) or Wikimedia URLs
- Gallery images are `https://img.castlecore.uk/slug-2.jpg`, `-3.jpg`, etc. (starting at 2, NOT 1)
- **There is NO `-1.jpg`** — that pattern does NOT exist. Opus made this mistake.
- For hero/feature images, use gallery images (`-2.jpg`, `-3.jpg`) which are on the CDN, or the plain `.image` URL
- Top sites for hero imagery: Eilean Donan, Culloden Battlefield, Urquhart Castle, Dunrobin Castle, Cawdor Castle, Elgin Cathedral

## Key Stats
- 81 Highland sites total
- 47 free to visit
- Types: 68 castles, 11 abbeys, 1 palace, 1 tower house
- Top-rated: Culloden (4.6), Eilean Donan (4.5), Dunrobin (4.5), Pluscarden Abbey (4.5), Urquhart (4.4), Cawdor (4.4), Elgin Cathedral (4.4), Fort George (4.4)
- Top tags: atmospheric (45), free-entry (42), ruins-romantic (33), remote (24), photogenic (23)

## Branding & CSS
From the skill file:
- **Colors**: --burgundy:#8b2335, --cream:#f0ebe0, --candlelight:#c9a84c, --navy:#0f1628, --charcoal:#1a1d2e
- **Fonts** (self-hosted, NO Google Fonts): Cormorant Garamond (serif), Playfair Display (display), Inter (sans)
- **All 5 @font-face blocks required** (see skill file for exact declarations)
- **Terminology**: "sites" for data counts, "castles" for brand/emotional copy

## Nav & Footer
Copy the nav and footer structure from `scotland.html` or `scotland/highlands-opus.html`. The mega menu with countries/regions, mobile menu, search — all must be present and functional.

## Technical Requirements
- Self-hosted fonts only (woff2 from /fonts/)
- Leaflet map with OpenStreetMap or CartoDB tiles
- Lazy loading on all images except hero
- Mobile-responsive (768px/480px breakpoints)
- No external dependencies except Leaflet

## Deploy
After building, save as `scotland/highlands-sonnet.html`, then:
```powershell
cd C:\Users\Clawzisabot\.openclaw\workspace\castle-explorer
git add scotland/highlands-sonnet.html
git commit -m "Add Sonnet-built Highlands page for A/B comparison"
git push
# Purge cache:
$token = Get-Content ".cloudflare-cache-token"
Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/9ffabb3350211a965824e7acf4e6054e/purge_cache" -Headers @{Authorization="Bearer $token"; "Content-Type"="application/json"} -Method Post -Body '{"purge_everything":true}'
```

## What NOT To Do
- Don't just copy the Opus version — bring your own vision
- Don't make it text-heavy (the main complaint about the old page)
- Don't use `-1.jpg` image URLs (they don't exist)
- Don't use Google Fonts
- Don't skip the nav/footer/mega menu

## Go
Research, design, build. Surprise us. The page will be compared directly against the Opus version.
