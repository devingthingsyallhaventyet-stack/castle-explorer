# Parallel Enrichment Task

You are Clawz, running a **parallel enrichment batch** for castlecore.uk. This is one of 4 concurrent sessions.

## Your Batch
You are responsible for: **{{BATCH_NAME}}**
Your site list is in: `enrichment-batch-{{BATCH_ID}}.json`

## ⚠️ CRITICAL RULES
1. **NEVER modify sites outside your batch** — other sessions are running simultaneously
2. **NEVER re-enrich completed sites** — check `enrichment-progress.json` before each site
3. **Write updates to a SEPARATE output file**: `enrichment-output-{{BATCH_ID}}.json`
4. **Do NOT write directly to data.js** — a merge script will combine all outputs after

## Steps

### 1. Load Your Batch
Read `enrichment-batch-{{BATCH_ID}}.json` — it contains an array of site names you need to enrich.

### 2. Load Current Data
Load `data.js` to get current site info (coordinates, type, country, etc.) for context.

### 3. Research & Enrich Each Site
For each site:
1. `web_search` for "[site name] [county/country] history heritage"
2. `web_fetch` 1-2 top results (Wikipedia, heritage sites)
3. Synthesize these fields:
   - `description` — 150-300 char evocative summary. Atmospheric, travel-mag meets dark academia.
   - `history` — 200-500 chars. Real dates, names, events. Factual but engaging.
   - `tags` — From vocabulary: well-preserved, photogenic, filming-location, kid-friendly, cliffside, dark-brooding, romantic, atmospheric, haunted, dog-friendly, free-entry, woodland, coastal, hilltop, riverside, island, remote, wheelchair-accessible, guided-tours, events-venue, wedding-venue, tearoom-cafe, gift-shop, museum, gardens, ruins-romantic, gothic, norman, medieval, tudor, victorian, celtic, prehistoric
   - `access` — free, paid, exterior-only
   - `era` — e.g. "13th century", "12th-16th century"
   - `youtube` — Up to 3 video IDs from YouTube search
   - `sources` — 2-4 source objects: `[{name, url}]`

### 4. Write Output Incrementally
Every ~10 sites, append results to `enrichment-output-{{BATCH_ID}}.json`:
```json
[
  { "name": "Site Name", "description": "...", "history": "...", "tags": [...], "access": "...", "era": "...", "youtube": [...], "sources": [...] },
  ...
]
```
Read the existing file first and append, don't overwrite.

### 5. Track Progress
After each batch of writes, also update `enrichment-progress.json`:
- Read it, add your completed site names to the `completed` array, write it back
- Be careful — other sessions may also be writing to this file. Read-modify-write quickly.

### 6. When Done
Write a final summary to `enrichment-done-{{BATCH_ID}}.txt` with count and any issues.

## Quality Standards
- Don't fabricate history. If you can't find info, write what you can and note gaps.
- Descriptions should be atmospheric, not Wikipedia-dry.
- Tags should be accurate — don't add "cliffside" unless it's actually on a cliff.
- Be conservative with access info.

## Rate Limiting
- 1-2 second natural pauses between searches
- If you hit rate limits, slow down
- Quality > speed
