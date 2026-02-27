# Scenic Route — Homepage & Site Layout Plan

**Date:** 27 February 2026
**Informed by:** Competitive analysis of 14 tourism/heritage sites + user type research

---

## Positioning

**"The only complete guide to every castle, abbey & ruin in the UK & Ireland"**

No other site covers all jurisdictions. No other site has castle-specific filters. No other site lets you plan a multi-castle trip across borders. We own this.

---

## Site Structure

```
scenicroute.com (GitHub Pages)
├── / (Homepage — discovery-first landing)
├── /explore (Interactive map — current app)
├── /site/[slug].html (3,000+ individual SEO pages)
├── /collections/ (Curated collections index)
│   ├── /collections/hidden-gems
│   ├── /collections/haunted-castles
│   ├── /collections/filming-locations
│   ├── /collections/free-to-visit
│   └── ...
├── /regions/ (Regional browsing)
│   ├── /regions/scottish-highlands
│   ├── /regions/south-west-england
│   ├── /regions/wild-atlantic-way
│   └── ...
├── /trails/ (Curated multi-castle routes)
│   ├── /trails/edward-iron-ring
│   ├── /trails/scottish-borders-towers
│   └── ...
├── /about
├── /sitemap.xml
└── /robots.txt
```

---

## Homepage Design

### Section 1: Hero (100vh on mobile, 80vh on desktop)

Full-bleed stunning castle photograph (rotate from a curated set of ~10 best photos).

Overlaid:
- **Logo**: 🏰 Scenic Route (top left, white)
- **Nav**: Explore Map | Collections | Near Me | About (top right, white)
- **Headline**: "Discover 3,000 castles, abbeys & ruins across the UK & Ireland"
- **Subheadline**: "The most complete heritage guide ever built"
- **Search bar**: Large, centered, with placeholder "Search by name, region, or type..."
  - Autocomplete dropdown as user types (searches castle names + regions)
  - Pressing enter or tapping a result goes to that castle's listing or region page
- **Quick filters below search**: Pill buttons — "🏰 Castles" "⛪ Abbeys" "🗼 Tower Houses" "👑 Palaces" "🆓 Free to Visit" "📸 Photogenic"

### Section 2: Curated Collections (horizontal scroll cards)

**Header**: "Explore by Collection" with "View all →" link

Cards (large, ~280px wide, beautiful photo background with gradient overlay):
- 🏆 Top Rated
- 💎 Hidden Gems  
- 👻 Haunted & Legendary
- 🎬 Filming Locations
- 🆓 Free to Visit
- 🏰 Best Preserved
- 🌿 Romantic Ruins
- 📸 Most Photogenic

Each card shows: collection name, count ("247 sites"), hero photo.
Tapping a card opens a filtered view (list + map).

### Section 3: Featured Sites (grid)

**Header**: "Worth the Visit" or "Editor's Picks"

6 cards in a 2-column grid (3-column on desktop):
- Large photo
- Castle name
- County, Country
- Star rating + review count
- 1-line hook ("Henry VIII's favorite palace" / "Scotland's most photographed castle")
- Type badge pill

These rotate or are hand-picked. Eventually could be "promoted" placements (monetization).

### Section 4: Browse by Region (visual grid)

**Header**: "Explore by Region"

Visual cards with region hero photos — 2 columns mobile, 4 on desktop:
- Scottish Highlands (photo of Eilean Donan or similar)
- South West England (Tintagel)
- North Wales (Conwy/Caernarfon)
- Wild Atlantic Way, Ireland (Dunluce or Cliffs)
- Yorkshire (Whitby Abbey)
- South East England (Dover/Leeds)
- Scottish Borders (Hermitage)
- The Midlands (Warwick)
- South Wales (Caerphilly)
- East Anglia (Framlingham)
- Northern Ireland (Carrickfergus)
- London & Surrey (Hampton Court/Tower)

Each card: region name, count ("142 sites"), hero photo.
Tapping → filtered map or list view for that region.

### Section 5: Castle Trails (horizontal scroll)

**Header**: "Follow a Trail" with "View all →"

Cards showing curated multi-castle routes:
- 🏴 Edward I's Iron Ring (North Wales) — 8 castles
- ⚔️ Norman Conquest Trail (South England) — 12 castles
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scottish Highlands Castle Route — 10 castles
- 🍀 Ancient East, Ireland — 9 castles
- 👻 Haunted Castle Trail (England) — 7 castles
- 📸 Photographer's Dream Route (UK-wide) — 10 castles

Each card: trail name, region, castle count, estimated drive time, hero photo.
Tapping → trail detail page with map, route, individual castle cards.

### Section 6: Stats Bar (trust/credibility)

Simple horizontal bar, cream background:
- "3,000+ Sites" | "5 Countries" | "12 Regions" | "150+ Detailed Guides"
- Clean icons, centered text

### Section 7: Near Me CTA

**For mobile users (geolocation available):**
- "What's near you right now?" with a "Find Castles Nearby →" button
- Shows 3 closest castles as preview cards if location available

**For desktop:**
- "Plan your trip" with a search-by-location input

### Section 8: How It Works (3 steps)

Simple 3-column layout:
1. 🔍 **Discover** — "Browse 3,000+ castles by region, type, era, or collection"
2. 🗺️ **Plan** — "Build custom routes and save your favorites"  
3. 🏰 **Visit** — "Get directions, hours, accessibility info, and nearby sites"

### Section 9: Footer

- Logo + tagline
- Quick links: Explore Map | Collections | Regions | Trails | About
- "Built with ❤ for history lovers"
- Social links (when ready)
- "© 2026 Scenic Route"

---

## Navigation (all pages)

**Desktop**: Horizontal top bar
```
🏰 Scenic Route    |    Explore Map    Collections    Regions    Trails    Near Me    [Search 🔍]
```

**Mobile**: Hamburger menu + bottom tab bar
```
Bottom tabs: 🗺️ Map | 📚 Collections | 📍 Near Me | ❤ My Stuff
```

Hamburger expands: Regions, Trails, About, Search

---

## Collection Pages (/collections/[slug])

Each collection gets its own page (SEO-friendly):
- Hero section with collection name + description
- Filter/sort bar (by country, rating, access type)
- List view of matching castles (photo card, name, location, rating, tags)
- "View on Map" toggle to see them all on the interactive map
- Each castle links to its SEO page

## Region Pages (/regions/[slug])

- Hero photo of the region
- Brief intro text (~100 words, good for SEO)
- Stats (X castles, Y abbeys, Z free to visit)
- Sub-regions if applicable
- Featured sites (3-5 highlights)
- Full list of all sites in region
- "Explore on Map" button (opens map filtered to region)
- Nearby regions ("Also explore...")

## Trail Pages (/trails/[slug])

- Hero photo
- Trail description + history context
- Route map (static image or embedded)
- Ordered list of stops with:
  - Castle card (photo, name, key stats)
  - Distance to next stop
  - Suggested visit duration
- Total distance + estimated drive time
- "Open full route in Google Maps" button
- "Save this trail" button

---

## Design System

### Colors
- **Primary**: Sage green #4a7c59
- **Secondary**: Warm cream #f5f0e8
- **Accent**: Gold #e8a817
- **Text**: Dark #1a1a1a
- **Text muted**: #585858
- **Background**: White #ffffff
- **Cards**: White with subtle border #e8e8e8

### Typography
- **Headings**: DM Serif Display (warm, editorial feel)
- **Body**: Inter (clean, modern readability)
- **Sizes**: Scale from 14px body to 48px hero heading

### Components
- **Cards**: Rounded corners (12px), subtle shadow, photo + info
- **Pills/Tags**: Rounded (20px), light background, colored text
- **Buttons**: Primary (sage green, white text), Secondary (white, border)
- **Search bar**: Large, rounded, white background, subtle shadow

### Vibe
- Warm, not techy
- Editorial, not database-y
- Airbnb meets Atlas Obscura meets a beautiful travel magazine
- Photos do the heavy lifting
- Whitespace is generous
- Everything feels intentional and curated, even though the database is comprehensive

---

## Implementation Approach

Since we're on GitHub Pages (static), the homepage will be:
1. A new `index.html` that IS the homepage (discovery landing)
2. The current map app moves to `/explore/index.html` or `/map.html`
3. Collection/region/trail pages generated by the build script (like SEO pages)
4. All static HTML, styled with inlined or linked CSS
5. Search autocomplete powered by a small inline JSON of castle names

### Migration steps:
1. Build the homepage HTML/CSS
2. Move current `index.html` → `explore.html` (or `/explore/index.html`)
3. Update all internal links
4. Extend `generate-pages.js` to also generate collection + region pages
5. Build trail pages (initially ~6 curated trails)
6. Update sitemap
7. Deploy

---

## Priority Order

1. **Homepage** — the new front door (biggest impact on first impressions)
2. **Collection pages** — SEO-friendly category pages ("haunted castles UK")
3. **Region pages** — SEO-friendly geo pages ("castles in Yorkshire")  
4. **Trail pages** — unique content nobody else has
5. **Navigation update** — connect everything
6. **Search** — autocomplete on homepage + all pages

---

## SEO Impact

Each new page type creates indexable content:
- Homepage: targets "castles UK Ireland", "castle guide", "heritage sites UK"
- Collections (8+): targets "haunted castles UK", "free castles to visit", "filming location castles"
- Regions (12+): targets "castles in [region]", "things to do [region]"
- Trails (6+): targets "castle road trip [area]", "castle route [area]"
- Individual pages (3,000+): targets "[castle name] visiting info"

**Total indexable pages: ~3,080+**
All targeting underserved long-tail keywords that current tourism sites don't cover.
