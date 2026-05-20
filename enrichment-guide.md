# Castlecore Enrichment Guide
*The single source of truth for agents enriching listing data.*

---

## Rule #1: No Filler. Ever.
Every field must be sourced from approved links only. If you can't source it from the listing's approved links, leave it empty. Do not guess, infer, or use general knowledge.

---

## How to Access Approved Sources
Each listing has approved source links stored in its links table (labeled "Links & Sources" on the dashboard). To get them:

1. `GET /api/listings/{id}` — returns the full listing including a `links` array
2. Each link has `type` (wikipedia, official, heritage, google_places) and `url`
3. **Only fetch URLs from this links array.** No other sources.

Source types and what to use them for:
- **Wikipedia** — history, descriptions, people, architecture, coordinates, designations, century, type
- **Heritage body / official site** — status, visiting info, accessibility, terrain, getting there, designations
- **Google Maps/Places link** — coordinates verification, town/county confirmation

**DO NOT use web_search. DO NOT visit any URLs not in the listing's links array.**

---

## Writing Voice & Tone

Castlecore descriptions are not Wikipedia summaries. They are engaging, professional narratives that make people want to visit these places — while remaining 100% accurate to the approved sources.

### Principles:
- **Lead with what makes the place remarkable.** Don't start with "X is a castle in Y." Start with the hook.
- **Tell the story.** Connect events, show cause and effect. History isn't a list of dates.
- **Write for the visitor.** Help them picture being there. What will they see? What shouldn't they miss?
- **Keep it tight.** AI writing tends to be wordy. Say more with fewer words. Short sentences are fine. Don't stack clauses — if a sentence needs re-reading, it's too long.
- **Be precise, not dry.** "A 13th-century curtain wall still stands to full height" beats "the castle has medieval walls."
- **Vary your openings.** 1,163 listings cannot all start the same way. Lead with history, setting, or a dramatic event — mix it up.
- **No superlatives without evidence.** Don't call something "stunning" unless the source says so. Let the facts speak.
- **No filler phrases.** Never write "rich history", "steeped in history", "a must-see destination", "stands as a testament to", or similar empty language.

### Examples:

**Bad (Wikipedia copy):**
"Edinburgh Castle is a historic fortress which sits on Castle Rock in Edinburgh. The site has been occupied since at least the Iron Age."

**Bad (filler):**
"Steeped in centuries of rich history, Edinburgh Castle stands as a testament to Scotland's dramatic past and is a must-see destination for visitors."

**Bad (too wordy):**
"Edinburgh Castle has dominated the city's skyline from its volcanic crag since at least the 12th century, though the rock beneath it has been fortified since the Iron Age. Besieged more than any other place in Britain — twenty-six times — the castle served as royal residence, military garrison, and prison across seven centuries of Scottish history."

**Good:**
"Besieged twenty-six times — more than any place in Britain — Edinburgh Castle has served as royal residence, military garrison, and prison since the 12th century. The volcanic crag beneath it has been fortified since the Iron Age."

### Structure:
- **subtitle** (one line): A punchy sentence that pulls in the reader about what they will find at the location. Not a dry summary — a hook. e.g. "Sir Walter Scott's baronial fantasy on the banks of the Tweed — the house that nearly bankrupted him and launched Scotland's Gothic Revival."
- **description_expanded** (2-4 paragraphs): The full story. History, significance, what visitors see today. Every claim traced to an approved source. This is the main description shown on the listing page — no "read more" toggle, so write it to work as a complete piece.
- **architecture** (1-2 paragraphs): Construction periods, materials, architectural style, notable features. Only if discussed in sources.

---

## Fields Reference

### Location
| Field | Source | Notes |
|-------|--------|-------|
| country | Wikipedia / Google Maps | Scotland, England, Wales, Ireland — verify and correct if wrong |
| region | Wikipedia / Google Maps | Must match exactly from the region list below. Use the Region Mapping Rules to determine correct region. |
| town | Wikipedia / Google Maps | Town or city where the site is located |
| county | Wikipedia / Google Maps | Administrative county |
| latitude | Wikipedia (coordinates box) | Decimal degrees |
| longitude | Wikipedia (coordinates box) | Decimal degrees |

### Region Lists (must match EXACTLY)

**Scotland:**
- Highlands & Northern Isles
- Edinburgh & the Lothians
- Northeast & Tayside
- Argyll & Western Isles
- Fife & Perthshire
- Scottish Borders
- Southwest Scotland
- Glasgow & Stirling

**England:**
- Northern England
- Yorkshire
- The Midlands
- South East & London
- South West
- East of England

**Wales:**
- Snowdonia & North Wales
- Mid Wales & the Marches
- West Wales
- South Wales

**Ireland:**
- The Wild Atlantic Way
- The Kingdom of Munster
- Ireland's Ancient East
- The Heartlands
- Dublin & The Pale
- Ulster & the North

### Region Mapping Rules

Wikipedia will give you a county or area name. Use these rules to map to the correct region.

**Scotland:**
| If the location is in... | Region is... |
|--------------------------|-------------|
| Highland, Caithness, Sutherland, Ross, Inverness, Moray, Orkney, Shetland | Highlands & Northern Isles |
| Edinburgh, East Lothian, West Lothian, Midlothian | Edinburgh & the Lothians |
| Aberdeenshire, Aberdeen, Angus, Dundee, Kincardineshire | Northeast & Tayside |
| Argyll, Bute, Inner Hebrides, Outer Hebrides, Oban, Mull, Islay | Argyll & Western Isles |
| Fife, Perthshire, Perth, Kinross, St Andrews | Fife & Perthshire |
| Scottish Borders, Roxburghshire, Selkirkshire, Berwickshire, Peeblesshire | Scottish Borders |
| Dumfries, Galloway, Ayrshire, Dumfriesshire, Kirkcudbrightshire, Wigtownshire | Southwest Scotland |
| Glasgow, Stirling, Stirlingshire, Lanarkshire, Dunbartonshire, Renfrewshire, Clackmannanshire, Falkirk | Glasgow & Stirling |

**England:**
| If the location is in... | Region is... |
|--------------------------|-------------|
| Northumberland, Durham, Tyne and Wear, Cumbria, Lancashire, Greater Manchester, Merseyside, Cheshire | Northern England |
| North Yorkshire, South Yorkshire, West Yorkshire, East Riding, York | Yorkshire |
| Shropshire, Staffordshire, Warwickshire, Worcestershire, Herefordshire, Derbyshire, Nottinghamshire, Leicestershire, Rutland, Northamptonshire, Lincolnshire, West Midlands, Birmingham | The Midlands |
| London, Surrey, Kent, Sussex (East/West), Hampshire, Berkshire, Buckinghamshire, Oxfordshire, Hertfordshire, Essex, Isle of Wight | South East & London |
| Devon, Cornwall, Dorset, Somerset, Wiltshire, Gloucestershire, Bristol, Bath | South West |
| Norfolk, Suffolk, Cambridgeshire, Bedfordshire | East of England |

**Wales:**
| If the location is in... | Region is... |
|--------------------------|-------------|
| Gwynedd, Conwy, Anglesey, Denbighshire, Flintshire, Wrexham | Snowdonia & North Wales |
| Powys, Ceredigion, Shropshire border (Welsh side), Montgomeryshire, Radnorshire, Breconshire | Mid Wales & the Marches |
| Pembrokeshire, Carmarthenshire | West Wales |
| Cardiff, Newport, Monmouthshire, Vale of Glamorgan, Blaenau Gwent, Caerphilly, Torfaen, Neath Port Talbot, Bridgend, Merthyr Tydfil, Rhondda Cynon Taf, Swansea | South Wales |

**Ireland:**
| If the location is in... | Region is... |
|--------------------------|-------------|
| Galway, Clare, Aran Islands, Connemara, Mayo, Sligo | The Wild Atlantic Way |
| Cork, Kerry, Limerick, Tipperary, Waterford | The Kingdom of Munster |
| Kilkenny, Wexford, Carlow, Wicklow, Kildare, Laois, Offaly | Ireland's Ancient East |
| Westmeath, Roscommon, Longford, Leitrim, Cavan | The Heartlands |
| Dublin, Meath, Louth | Dublin & The Pale |
| Antrim, Armagh, Down, Fermanagh, Tyrone, Derry/Londonderry, Donegal, Monaghan | Ulster & the North |

*Note: Some counties appear in multiple regions depending on which part of the county. When in doubt, use the Google Maps link to check the exact location.*

---

### Identity
| Field | Source | Notes |
|-------|--------|-------|
| subtitle | Wikipedia | **Required.** One sentence that pulls in the reader about what they will find at the location. Not a dry summary — a hook. e.g. "Sir Walter Scott's baronial fantasy on the banks of the Tweed — the house that nearly bankrupted him and launched Scotland's Gothic Revival." |

### Classification
| Field | Source | Notes |
|-------|--------|-------|
| type | Wikipedia | One of: Castle, Abbey, Tower House, Priory, Fort, Palace, Country House, Cathedral, Friary, Historical Place |
| century | Wikipedia | Century it was first built/founded. Format: "12th Century", "15th Century", etc. Use "Pre-Roman" for ancient sites, "Unknown" if not determinable. |
| status | Official site / Wikipedia | See Status Rules below |
| condition | Wikipedia / official site | See Condition Rules below |

### Status Rules (only these 4 values — if unsure, leave null)
- **Open to Visitors** — large well-maintained properties with admission cost, gift shops, guided tours, set hours. The official website or heritage body page will clearly advertise visiting hours, ticket prices, and facilities.
- **Book to Experience** — hotels, event venues, tours by appointment only. The site operates as a business where you book a stay or arrange a visit.
- **Freely Accessible** — places accessed for free at any time. Open ruins in fields, free-entry buildings, sites explicitly listed as free by the heritage body.
- **Private** — privately owned, not open to visitors. Only use if Wikipedia or the official site explicitly states the property is private/not accessible to the public.

### Condition Rules (only these 2 values — if unsure, leave null)
- **Intact** — has a roof, well preserved, people living in it or actively maintaining it as a usable structure. Hotels, museums, inhabited houses, functioning churches all count as intact.
- **Ruin** — no roof (or only partial roof), partially standing, significant structural loss. This applies regardless of whether the site is managed, free, or ticketed. A well-maintained ruin (like many Historic Environment Scotland properties) is still a ruin.

### Tags
JSON array string. **Maximum 2 tags per listing.** Only apply tags explicitly supported by source material. Pick the most relevant if more than 2 qualify.

Valid tags: `["As Seen on Screen", "Haunted", "Wedding Venue", "Hotel", "Free Entry", "Dog Friendly"]`

Rules:
- **Free Entry** — only if source explicitly says free admission / freely accessible
- **Haunted** — only if Wikipedia or official site mentions hauntings, ghosts, or paranormal
- **As Seen on Screen** — only if source mentions specific film/TV appearances
- **Wedding Venue** — only if official site advertises weddings or events
- **Hotel** — only if the property currently operates as accommodation
- **Dog Friendly** — only if official site explicitly states dogs are welcome

Do NOT apply these tags during enrichment (they are editorial, assigned separately): Must See, Hidden Gem, Dramatic Ruin, Photogenic

---

### Terrain & Accessibility
| Field | Source | Notes |
|-------|--------|-------|
| terrain_description | Official heritage site only | Only if accessibility info is found on the official/heritage page. Leave empty otherwise. |
| terrain_tags | Official heritage site only | JSON array string, e.g. `["Steep Approach", "Cobblestones", "Wheelchair Access"]`. Only from official source. |

### Getting There
| Field | Source | Notes |
|-------|--------|-------|
| getting_there_car | Official site only | Only if source provides specific driving directions or parking info |
| getting_there_train | Official site only | Only if source mentions nearest station or rail connections |
| getting_there_bus | Official site only | Only if source mentions specific bus routes or stops |
| getting_there_airport | Official site only | Only if source mentions nearest airport |

---

## Sub-Resources

### Timeline (POST /api/listings/{id}/timeline)
Key historical events from Wikipedia/official sources. Tell the story chronologically.

| Field | Notes |
|-------|-------|
| date_label | e.g. "c. 1130", "1314", "1573", "16th century" |
| title | Short, punchy summary of the event |
| description | A paragraph telling what happened and why it matters. Written in Castlecore voice — engaging, not encyclopedic. |
| image_url | Leave empty for now |
| sort_order | Chronological order (1, 2, 3...) |

Not every listing has a rich timeline. Some may have 2-3 entries, some none. Only add events clearly documented in sources. Quality over quantity.

### People (POST /api/listings/{id}/people)
Notable historical figures connected to the site, from Wikipedia.

| Field | Notes |
|-------|-------|
| name | Full name |
| dates | Birth-death years if known, e.g. "1542-1587" |
| role_description | Their connection to the site — make it interesting, not just "lived here" |
| portrait_url | If the person has a Wikipedia article, fetch their portrait using the Wikipedia API: `https://en.wikipedia.org/api/rest_v1/page/summary/{article_name}` — use the `thumbnail.source` URL from the response, replacing the width with 250px. Leave empty if no Wikipedia article or no image in the API response. |
| wikipedia_url | Link to their Wikipedia article if they have one |
| sort_order | Order of historical significance (1, 2, 3...) |

Only add people explicitly mentioned in the listing's Wikipedia article as connected to the site.

### Designations (POST /api/listings/{id}/designations)
Heritage designations from Wikipedia or heritage body sites.

| Field | Notes |
|-------|-------|
| title | e.g. "Scheduled Ancient Monument", "Category A Listed Building", "UNESCO World Heritage Site" |
| body_name | e.g. "Historic Environment Scotland", "English Heritage", "Cadw", "National Monuments Service" |
| url | Link to the designation record if available |

### Videos (POST /api/listings/{id}/videos)
Relevant YouTube videos found via YouTube search by location name.

| Field | Notes |
|-------|-------|
| youtube_id | The YouTube video ID (the part after v= in the URL) |
| title | Video title |
| sort_order | Order (1, 2) |

Rules:
- Maximum 2 videos per listing
- Prioritize: tours, visits, walkthroughs, aerial/drone footage, historical documentaries
- The video must be specifically about THIS site — not a general region video that briefly mentions it
- If not confident a video is relevant to the specific site, do not include it
- Search YouTube for the listing name to find candidates, but verify relevance before adding
- Leave empty if no clearly relevant videos exist

### Further Reading (POST /api/listings/{id}/further-reading)
From Wikipedia references section or official sources.

| Field | Notes |
|-------|-------|
| author | Author name |
| title | Book/article title |
| year | Publication year |
| url | Link if available |
| sort_order | Order (1, 2, 3...) |

---

## Fields the Agent Does NOT Touch
These are handled automatically or separately:
- **google_rating** — fetched live from Google Places API on the public page
- **google_review_count** — fetched live from Google Places API
- **Gallery/photos** — populated automatically from Google Places API when visitors view the page. Agent does not handle images.
- **Badge** (Must See, Hidden Gem, etc.) — calculated from Google Places rating/review count
- **Guest Book entries** — user-generated content
- **Improvements** — user-submitted suggestions

---

## Process Per Listing
1. `GET /api/listings/{id}` to get current data and source links
2. `web_fetch` each source URL from the links array (Wikipedia, heritage/official, Google Maps)
3. Extract only what's in those pages
4. Determine region using the Region Mapping Rules above
5. Write descriptions in Castlecore voice (engaging, professional, accurate)
6. `PUT /api/listings/{id}` with all main fields
7. `POST` sub-resources (timeline, people, designations, videos, further reading)
8. Log what was filled and what was left empty (and why)

---

## What NOT to Do
- Do not use web_search (except for YouTube video search per the video rules above)
- Do not visit URLs not in the listing's links array (except YouTube per video rules)
- Do not fill fields with information from memory or general knowledge
- Do not copy-paste from Wikipedia — rewrite everything in Castlecore voice
- Do not write filler phrases ("rich history", "steeped in history", "stands as a testament to")
- Do not apply editorial tags (Must See, Hidden Gem, Dramatic Ruin, Photogenic)
- Do not add data you cannot trace to a specific approved source URL
