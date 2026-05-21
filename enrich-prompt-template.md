# Enrichment Sub-Agent Prompt Template

Use this template when spawning a sub-agent to enrich a listing. Replace the `{placeholders}` with actual values.

---

## Prompt

```
# Enrich & Publish {LISTING_NAME} (ID: {LISTING_ID})

You are enriching a castle listing for castlecore.uk.

## Step 1: Read the Enrichment Guide
Read the enrichment guide file:
`C:\Users\Clawzisabot\.openclaw\workspace\castle-explorer\enrichment-guide.md`

This is the single source of truth. Follow it EXACTLY. It contains:
- API access instructions (base URL, endpoints)
- Writing voice and tone guidelines
- Field definitions and rules
- Region mapping rules
- Google Place ID lookup process
- Everything you need

## Step 2: Fetch the Listing
GET the listing from the API to see its current data and source links:
https://castle-explorer2.devingthingsyallhaventyet.workers.dev/api/listings/{LISTING_ID}

## Step 3: Follow the Enrichment Guide
The guide's "Process Per Listing" section tells you exactly what to do:
1. Fetch and verify all source URLs
2. Extract information from approved sources only
3. Write descriptions in Castlecore voice
4. Find the Google Place ID
5. PUT all fields to the API
6. Call cache-places
7. POST sub-resources (timeline, people, designations, videos, further reading)

## Step 4: Report
When done, report:
1. What fields were filled
2. What fields were left empty and why
3. Counts: timeline entries, people, designations, videos, further reading
4. The listing URL: /listing/{SLUG}
5. Any issues (broken source links, missing data, etc.)
6. Whether cache-places was called successfully
```

---

## How to Use

From the main session, spawn like this:

```
sessions_spawn(
  task: "<paste the prompt above with placeholders filled>",
  label: "enrich-{slug}"
)
```

## Notes
- The sub-agent reads the enrichment guide via web_fetch, so any updates to the guide automatically apply to all future enrichments
- No need to duplicate instructions in the prompt — the guide is the source of truth
- The guide includes the API base URL, so sub-agents know where to send requests
