# Castlecore — Game Plan

## Site Types & Grouping

### Landing Page Groupings (DECIDED: group aggressively)

1. **Castles** (1,923) — includes mottes (13), cashels (1), bastles (1), medieval towns (1) = **1,939**
2. **Tower Houses** (485) — standalone, big enough
3. **Religious Sites** — abbeys (488) + friaries (15) + priories (12) + monasteries (3) + monastic sites (2) + cathedrals (7) + churches (5) + ecclesiastical sites (1) = **533**
4. **Fortifications** — forts (38) + hillforts (10) + fortifications (8) + Roman forts (2) + stone forts (2) + brochs (3) + town walls (2) + barracks (1) + fortified houses (33) = **99**
5. **Palaces & Historic Houses** — palaces (32) + country houses (23) + historic houses (17) + gate lodge (1) + garden (1) = **74**
6. **Monuments & Ancient Sites** — monuments (10) + round towers (8) + megalithic sites (2) + stone circles (1) + high crosses (1) + stones (2) + archaeological sites (2, incl. Jarlshof) = **26**

Total: 6 type landing pages covering all 3,156 listings. (Deleted 7 misfit sites, reclassified Jarlshof.)
Each page will have sub-type filters so users can drill down (e.g. "Religious Sites" → filter by Abbey, Friary, Priory).

---

## Sections to Build/Improve

### 1. Homepage
- ✅ Done (hero video, search, collections, regions)

### 2. Listing Pages (3,156)
- ✅ Core layout done
- [ ] Update with gallery images (pending fetch completion)
- [ ] Save/heart button
- [ ] Lightbox with prev/next arrows for gallery images
- [ ] Sweep for blurry primary images (<500px) and swap with R2 gallery images
- [ ] Restore YouTube video embeds (top 3 per site) — after current build tasks

### 3. Search
- [ ] Region searches → link to region pages
- [ ] Fix broken images for forts, country houses, friaries

### 4. Explore Map
- ✅ Done

### 5. Collection Pages
- [ ] Hero section
- [ ] Masonry/editorial layout
- [ ] Editorial content
- [ ] Editor's pick badges
- [ ] Quick-filter pills
- [ ] "You might also like"
- [ ] Flourish aesthetic

### 6. Type Landing Pages (NEW)
- [ ] TBD — decide on groupings above

### 7. Country Landing Pages (NEW)
- [ ] England, Scotland, Wales, Ireland

### 8. Region Landing Pages
- [ ] Improve existing pages

### 9. Location Landing Pages (NEW)
- [ ] Areas with 10+ listings (counties/cities)

### 10. Trail/Route Pages
- ✅ Exists — future improvements TBD

---

## Creative Direction — "Make History Feel Like Fantasy"

**Target audience:** Fantasy lovers, short-form video consumers, TikTok/Instagram generation. Visual-first, vibes-driven.

**Core principle:** Every page should feel like a movie scene, not a phone book listing. If someone screenshots it for their Instagram story, it should look cool.

### Design Language
- **Cinematic hero images**: Full-bleed, moody. CSS filters for atmosphere (slight desaturation, warm shadows, vignette)
- **Parallax & slow reveals**: Scroll experience = walking deeper into the ruin. Sections breathe.
- **Ken Burns effect**: Slow zoom/pan on hero images. Motion = life.
- **Dark/moody palette option**: Not just cream — atmospheric darks for hero sections, contrast with warm content areas
- **Typography as mood**: Playfair Display stays, but lean into it — large, cinematic pull quotes overlaid on images

### Content Voice
- **Narration over information**: "In 1480, Lord Hastings began building his dream — a fortified manor that would never be finished." NOT "Built in the 15th century by Lord Hastings."
- **Make it personal**: "The last person to sleep within these walls did so 400 years ago."
- **Story first, facts second**: Lead with drama, intrigue, tragedy. Details in sidebar/below.

### Immersive Features
- **Ambient audio** (optional): Wind, birds, distant bells. Toggle on/off.
- **"Imagine yourself here" moments**: Pull quotes on moody images
- **Seasonal/time-of-day photos**: Sunrise, fog, snow — the shots that get shared
- **Cinematic video priority**: Drone footage and walkthroughs over history lectures

### Collections as Moods
- "For When You Want to Disappear" not "Remote Castles"
- "Where Ghosts Still Wander" not "Haunted Sites"
- "Kingdoms That Fell" not "Ruined Castles"
- "The Ones Time Forgot" not "Hidden Gems"
- Give every collection a mood, not just a category

### Branding — Full Medieval Immersion
**Goal:** Hit the site and feel transported. Not subtle nods — full commitment. High-end fantasy, not Renaissance faire.

**Typography**
- Blackletter/uncial display font for major headings (site name, page titles, collection names)
- Playfair Display for subheadings and body — bridges medieval and modern readability
- Consider: Cinzel, MedievalSharp, or a premium blackletter for the hero font

**Logo & Identity**
- Full heraldic crest/coat of arms — shield, motto banner, detailed elements
- Wax seal motif for badges, verified marks, editor's picks
- The logo should feel like it belongs on a medieval charter

**Textures & Materials**
- Parchment/aged paper backgrounds — not flat colors
- Stone texture for headers/nav
- Iron/wrought metal styling for buttons, borders
- Illuminated manuscript-style dividers and section breaks
- Leather-bound book feel for content sections
- Torch-lit glow effects on hover states

**Color Palette (expanded)**
- Burgundy `#8b2335` — stays (blood/wine)
- Cream `#f0ebe0` → shifts to aged parchment
- Candlelight gold `#c9a84c` — stays (torchlight/treasure)
- NEW: Deep forest `#2d4a2d` (tapestry green)
- NEW: Iron grey `#4a4a4f` (armor/stone)
- NEW: Torch amber `#d4872c` (warm glow accents)
- NEW: Ink black `#1a1a1e` (manuscript ink, dark sections)

**UI Elements**
- Buttons styled like carved stone or iron clasps
- Cards with torn/burnt parchment edges
- Navigation with stone archway or castle battlement motif
- Loading states: flickering torch or turning hourglass
- Scrollbar styled as a sword or torch
- Map pins as shield/banner markers

**Audio & Atmosphere**
- Optional ambient soundscape toggle (crackling fire, wind, distant horns)
- Hover sounds: subtle stone scrape, metal clink (very subtle, optional)

### The Screenshot Test
Every page, every section: would someone screenshot this and share it? If no, redesign it.

---

## Future Ideas
- Collections for sites with staff / ongoing events / family-friendly activities
- Claim a profile feature
- Login/user accounts/saved favorites

## Decisions Made
- ✅ Group small types aggressively → 6 landing pages
- ✅ Two-tier location structure:
  - **Region pages** (~20-25) = browsing/discovery, linked from mega menu
  - **Location pages** (50-100+) = county/city level, SEO long-tail targets ("castles in Cornwall", "abbeys near Kilkenny")
- Location pages won't be in nav — they exist for Google search + on-site search results

## Decisions Still Needed
- Location page threshold: 10+ listings? Lower?
- ✅ Location pages by county AND city/town/zip — as granular as possible for SEO
