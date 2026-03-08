# Nightly Site Enrichment Task

## What You Are
You're Clawz, running a nightly data enrichment job for castlecore.uk. This is an autonomous task — no human check-in needed.

## Goal
Research and enrich castle/heritage sites in `data.js` that have thin or missing content. Update the data file with quality descriptions, history, tags, and access info.

## Steps

### 1. Load Progress
Read `castles/enrichment-progress.json` to see which sites are already done.

### 2. Find Sites That Need Work
Load `castles/data.js` (use `vm.runInNewContext` after replacing `const` with `var`).
Filter for sites needing enrichment:
- `(history || '').length < 30` — no real history
- Prioritize by: sites with gallery images first, then by reviewCount descending
- Skip any site whose `name` appears in the `completed` array from progress.json

### 3. Research Each Site (target: 50-80 sites per session)
For each site:
1. **Web search**: `web_search` for "[site name] [county] history heritage" 
2. **Read 1-2 top sources**: `web_fetch` the most relevant results (Wikipedia, heritage sites, tourism pages)
3. **Synthesize and update these fields:**
   - `description` — 150-300 char evocative summary capturing the site's character and appeal. Write for the target audience (BookTok/dark academia/cottagecore women 21-35). Make it atmospheric.
   - `history` — 200-500 chars of real historical detail. Key dates, who built it, major events, current state. Factual but engaging.
   - `tags` — Array of mood/feature tags. Use existing tag vocabulary: well-preserved, photogenic, filming-location, kid-friendly, cliffside, dark-brooding, romantic, atmospheric, haunted, dog-friendly, free-entry, woodland, coastal, hilltop, riverside, island, remote, wheelchair-accessible, guided-tours, events-venue, wedding-venue, tearoom-cafe, gift-shop, museum, gardens, ruins-romantic, gothic, norman, medieval, tudor, victorian, celtic, prehistoric
   - `access` — Verify: free, paid, exterior-only
   - `era` — Verify or fill in (e.g., "13th century", "12th-16th century")

### 4. Write Updates
After every ~10 sites, write the updates to `data.js`:
- Read the current file
- Find each castle by name in the CASTLES array
- Update the fields
- Write the file back
- This prevents losing work if the session times out

### 5. Track Progress
After each batch of writes, update `enrichment-progress.json`:
```json
{
  "completed": ["Site Name 1", "Site Name 2", ...],
  "lastRun": "2026-03-08T03:00:00-05:00",
  "totalEnriched": 150,
  "nightsRun": 2
}
```

### 6. Regenerate Pages
After all enrichment is done, run `generate-pages.js` to rebuild the affected pages:
```
cd castles; node generate-pages.js
```

### 7. Push to GitHub
```
cd castles; git add -A; git commit -m "Enrich [N] sites - night [X]"; git push
```

### 8. Report to E
Send a message to E via the `message` tool with:
- How many sites were enriched tonight
- Total progress (X of ~2,152 remaining)
- Direct links to 5-10 sample pages: `https://castlecore.uk/site/[slug].html`
- Any issues encountered

## Quality Standards
- **Don't fabricate history.** If you can't find info, note it and move on.
- **Descriptions should be atmospheric**, not Wikipedia-dry. Think travel magazine meets dark academia blog.
- **History should be factual** with real dates, names, events.
- **Tags should be accurate** — don't add "cliffside" unless it's actually on a cliff.
- **Be conservative with access info** — if unsure, leave as-is.

## Rate Limiting
- Add 1-2 second delays between web searches (use brief pauses)
- Don't hammer any single domain
- If you hit rate limits, slow down rather than stopping
- Process fewer sites if needed — quality > quantity

## Important Paths
- Data: `C:\Users\Clawzisabot\.openclaw\workspace\castles\data.js`
- Progress: `C:\Users\Clawzisabot\.openclaw\workspace\castles\enrichment-progress.json`
- Page generator: `C:\Users\Clawzisabot\.openclaw\workspace\castles\generate-pages.js`
- Site output: `C:\Users\Clawzisabot\.openclaw\workspace\castles\site\`
