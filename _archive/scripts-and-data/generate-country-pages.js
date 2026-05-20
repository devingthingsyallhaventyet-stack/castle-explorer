const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load data
const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8').replace(/\bconst\b/g, 'var');
const dataCtx = {};
vm.runInNewContext(dataJs, dataCtx);
const CASTLES = dataCtx.CASTLES;
console.log(`Loaded ${CASTLES.length} sites`);

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ===== Country Definitions =====
const COUNTRIES = {
  england: {
    name: 'England',
    slug: 'england',
    emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    filter: c => c.country === 'England',
    gradient: 'linear-gradient(135deg, #5a1a2a 0%, #8b2335 40%, #6e1a2a 100%)',
    heroImage: 'img/bamburgh.jpg',
    description: 'From the mighty Tower of London to the crumbling keeps of the North, England holds more than a thousand years of conquest, rebellion, and quiet decay within its castle walls. Norman strongholds, Tudor palaces, and romantic ruins scattered across green countryside — every county tells a different chapter.',
    seoDescription: 'Explore 544 castles, abbeys, palaces and ruins across England. From the Tower of London to Bamburgh, discover the most complete guide to English heritage sites.',
    regions: [
      { id: 'london-surrey', name: 'London & Surrey', icon: '🏙️' },
      { id: 'south-east-england', name: 'South East', icon: '🏰' },
      { id: 'south-west-england', name: 'South West', icon: '⚔️' },
      { id: 'northern-england', name: 'Northern England', icon: '🛡️' },
      { id: 'midlands', name: 'The Midlands', icon: '🏛️' },
      { id: 'yorkshire', name: 'Yorkshire', icon: '⛪' },
      { id: 'east-anglia', name: 'East Anglia', icon: '🗝️' },
    ],
    featuredSlugs: ['tower-of-london', 'bamburgh-castle', 'bodiam-castle', 'warwick-castle', 'tintagel-castle', 'whitby-abbey'],
  },
  scotland: {
    name: 'Scotland',
    slug: 'scotland',
    emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    filter: c => c.country === 'Scotland',
    gradient: 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 40%, #1a4a2e 100%)',
    heroImage: 'img/eilean-donan.jpg',
    description: 'Brooding fortresses on misty lochs, clan strongholds clinging to Highland crags, and haunted tower houses in the Borders. Scotland\'s castles are among the most dramatic and atmospheric in the world — and there are hundreds more than most people realise.',
    seoDescription: 'Explore 448 castles, tower houses, abbeys and ruins across Scotland. From Edinburgh Castle to the Highlands, the most complete guide to Scottish heritage.',
    regions: [
      { id: 'scottish-highlands', name: 'Highlands', icon: '⛰️' },
      { id: 'scottish-lowlands', name: 'Lowlands & Borders', icon: '🏰' },
    ],
    featuredSlugs: ['edinburgh-castle', 'eilean-donan-castle', 'stirling-castle', 'dunnottar-castle', 'urquhart-castle', 'glamis-castle'],
  },
  wales: {
    name: 'Wales',
    slug: 'wales',
    emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    filter: c => c.country === 'Wales',
    gradient: 'linear-gradient(135deg, #6b2a1a 0%, #8e4a2a 40%, #5a2010 100%)',
    heroImage: 'img/conwy.jpg',
    description: 'More castles per square mile than anywhere in the world. Edward I\'s legendary Iron Ring fortresses, native Welsh strongholds built into mountain passes, and crumbling towers guarding river valleys — Wales is a castle-lover\'s paradise wrapped in myth and wild beauty.',
    seoDescription: 'Explore 169 castles, abbeys and ruins across Wales. From Conwy to Caerphilly, discover the country with more castles per square mile than anywhere on Earth.',
    regions: [
      { id: 'north-wales', name: 'North Wales', icon: '🏔️' },
      { id: 'south-wales', name: 'South Wales', icon: '🏰' },
    ],
    featuredSlugs: ['conwy-castle', 'caernarfon-castle', 'harlech-castle', 'caerphilly-castle', 'pembroke-castle', 'raglan-castle'],
  },
  ireland: {
    name: 'Ireland',
    slug: 'ireland',
    emoji: '🍀',
    filter: c => c.country === 'Ireland',
    gradient: 'linear-gradient(135deg, #1a4a2a 0%, #2d6a3d 40%, #1a5a2e 100%)',
    heroImage: 'img/blarney.jpg',
    description: 'Nearly eight hundred castles, tower houses, and monastic ruins scattered across emerald fields and dramatic Atlantic coastlines. From the Rock of Cashel to crumbling Norman keeps hidden down country lanes, Ireland\'s heritage is wild, romantic, and endlessly surprising.',
    seoDescription: 'Explore 779 castles, tower houses, abbeys and ruins across Ireland. The most complete guide to Irish heritage sites, from the Rock of Cashel to hidden ruins.',
    regions: [
      { id: 'dublin-east-coast', name: 'Dublin & East Coast', icon: '🏙️' },
      { id: 'south-east-ireland', name: 'South East', icon: '🏰' },
      { id: 'south-west-ireland', name: 'South West', icon: '🌊' },
      { id: 'west-ireland', name: 'West', icon: '🌬️' },
      { id: 'midlands-ireland', name: 'Midlands', icon: '🏛️' },
      { id: 'north-west-ireland', name: 'North West', icon: '⛰️' },
      { id: 'northern-ireland', name: 'Northern Ireland', icon: '🛡️' },
    ],
    featuredSlugs: ['blarney-castle', 'rock-of-cashel', 'kilkenny-castle', 'dunluce-castle', 'trim-castle', 'bunratty-castle'],
  },
  'northern-ireland': {
    name: 'Northern Ireland',
    slug: 'northern-ireland',
    emoji: '🛡️',
    filter: c => c.country === 'Northern Ireland',
    gradient: 'linear-gradient(135deg, #2c3e5a 0%, #4a6fa5 40%, #2a3a5a 100%)',
    heroImage: null,
    description: 'From the dramatic ruins of Dunluce perched above crashing Atlantic waves to the ancient Norman mottes of County Down, Northern Ireland packs centuries of turbulent history into a compact and stunningly beautiful landscape.',
    seoDescription: 'Explore 64 castles, abbeys and ruins across Northern Ireland. From Dunluce Castle to the Mourne country, discover heritage sites off the beaten path.',
    regions: [],
    featuredSlugs: ['dunluce-castle', 'carrickfergus-castle', 'dundrum-castle'],
  },
};

// ===== Region filter logic (same as region.html) =====
const REGION_FILTERS = {
  'london-surrey': c => ['London','Surrey','Greater London','Middlesex'].some(r => (c.county||'').includes(r)),
  'scottish-highlands': c => c.country === 'Scotland' && ['Highland','Argyll','Inverness','Ross','Sutherland','Caithness','Skye','Lochaber','Moray','Nairn','Badenoch'].some(r => (c.county||'').includes(r)),
  'north-wales': c => c.country === 'Wales' && ['Gwynedd','Conwy','Anglesey','Denbighshire','Wrexham','Flintshire','Clwyd'].some(r => (c.county||'').includes(r)),
  'south-east-england': c => c.country === 'England' && ['Kent','Sussex','East Sussex','West Sussex','Hampshire','Berkshire','Oxfordshire','Buckinghamshire','Surrey'].some(r => (c.county||'').includes(r)),
  'scottish-lowlands': c => c.country === 'Scotland' && !['Highland','Argyll','Inverness','Ross','Sutherland','Caithness','Skye','Lochaber','Moray','Nairn','Badenoch'].some(r => (c.county||'').includes(r)),
  'northern-england': c => c.country === 'England' && ['Northumberland','Durham','Cumbria','Tyne and Wear','Cumberland','Westmorland','Lancashire'].some(r => (c.county||'').includes(r)),
  'south-west-england': c => c.country === 'England' && ['Cornwall','Devon','Dorset','Somerset','Wiltshire','Gloucestershire','Bristol','Avon'].some(r => (c.county||'').includes(r)),
  'yorkshire': c => c.country === 'England' && ['Yorkshire','North Yorkshire','South Yorkshire','West Yorkshire','East Yorkshire','East Riding'].some(r => (c.county||'').includes(r)),
  'south-wales': c => c.country === 'Wales' && !['Gwynedd','Conwy','Anglesey','Denbighshire','Wrexham','Flintshire','Clwyd'].some(r => (c.county||'').includes(r)),
  'midlands': c => c.country === 'England' && ['Warwickshire','Staffordshire','Shropshire','Herefordshire','Worcestershire','Leicestershire','Nottinghamshire','Derbyshire','West Midlands','Northamptonshire','Rutland'].some(r => (c.county||'').includes(r)),
  'east-anglia': c => c.country === 'England' && ['Norfolk','Suffolk','Essex','Cambridgeshire','Bedfordshire','Hertfordshire'].some(r => (c.county||'').includes(r)),
  'dublin-east-coast': c => c.country === 'Ireland' && ['Dublin','Wicklow','Louth','Meath','Kildare'].some(r => (c.county||'').includes(r)),
  'south-east-ireland': c => c.country === 'Ireland' && ['Wexford','Waterford','Kilkenny','Carlow','Laois'].some(r => (c.county||'').includes(r)),
  'south-west-ireland': c => c.country === 'Ireland' && ['Cork','Kerry'].some(r => (c.county||'').includes(r)),
  'west-ireland': c => c.country === 'Ireland' && ['Galway','Clare','Limerick','Tipperary'].some(r => (c.county||'').includes(r)),
  'midlands-ireland': c => c.country === 'Ireland' && ['Offaly','Westmeath','Longford','Roscommon'].some(r => (c.county||'').includes(r)),
  'north-west-ireland': c => c.country === 'Ireland' && ['Mayo','Sligo','Donegal','Leitrim','Cavan','Monaghan'].some(r => (c.county||'').includes(r)),
  'northern-ireland': c => c.country === 'Northern Ireland',
};

// ===== Shared nav/footer HTML =====
const NAV_HTML = `<nav class="nav">
<div class="nav-inner">
<a href="/" class="nav-logo"><img src="logo.png" alt="castlecore" style="height:42px;width:auto;border-radius:4px;vertical-align:middle">castlecore</a>
<div class="nav-center">
<div class="nav-dropdown">
<button class="nav-drop-btn">🏰 Sites <span style="font-size:.6rem">▼</span></button>
<div class="nav-drop-panel">
<a href="search.html?type=castle">🏰 Castles</a>
<a href="search.html?type=abbey">⛪ Abbeys</a>
<a href="search.html?type=tower+house">🗼 Tower Houses</a>
<a href="search.html?type=palace">👑 Palaces</a>
<a href="search.html?type=fort">🛡️ Forts</a>
<a href="search.html?type=fortified+house">🏠 Fortified Houses</a>
</div>
</div>
<div class="nav-dropdown mega-wrap">
<button class="nav-drop-btn">🗺️ Regions <span style="font-size:.6rem">▼</span></button>
<div class="mega-menu">
<div class="mega-countries">
<button class="mega-country active" data-country="england">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</button>
<button class="mega-country" data-country="scotland">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</button>
<button class="mega-country" data-country="wales">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</button>
<button class="mega-country" data-country="ireland">🍀 Ireland</button>
</div>
<div class="mega-regions">
<div class="mega-panel active" data-country="england">
<a href="region.html?id=london-surrey">London &amp; Surrey</a>
<a href="region.html?id=south-east-england">South East</a>
<a href="region.html?id=south-west-england">South West</a>
<a href="region.html?id=northern-england">Northern England</a>
<a href="region.html?id=midlands">The Midlands</a>
<a href="region.html?id=yorkshire">Yorkshire</a>
<a href="region.html?id=east-anglia">East Anglia</a>
</div>
<div class="mega-panel" data-country="scotland">
<a href="region.html?id=scottish-highlands">Highlands</a>
<a href="region.html?id=scottish-lowlands">Lowlands &amp; Borders</a>
</div>
<div class="mega-panel" data-country="wales">
<a href="region.html?id=north-wales">North Wales</a>
<a href="region.html?id=south-wales">South Wales</a>
</div>
<div class="mega-panel" data-country="ireland">
<a href="region.html?id=dublin-east-coast">Dublin &amp; East Coast</a>
<a href="region.html?id=south-east-ireland">South East</a>
<a href="region.html?id=south-west-ireland">South West</a>
<a href="region.html?id=west-ireland">West</a>
<a href="region.html?id=midlands-ireland">Midlands</a>
<a href="region.html?id=north-west-ireland">North West</a>
<a href="region.html?id=northern-ireland">Northern Ireland</a>
</div>
</div>
</div>
</div>
<div class="nav-dropdown">
<button class="nav-drop-btn">✨ Collections <span style="font-size:.6rem">▼</span></button>
<div class="nav-drop-panel">
<a href="collection.html?id=top-rated">🏆 Top Rated</a>
<a href="collection.html?id=hidden-gems">💎 Hidden Gems</a>
<a href="collection.html?id=haunted">👻 Haunted</a>
<a href="collection.html?id=filming-locations">🎬 Filming Locations</a>
<a href="collection.html?id=free">🆓 Free to Visit</a>
<a href="collection.html?id=romantic-ruins">🌿 Romantic Ruins</a>
<a href="collection.html?id=photogenic">📸 Most Photogenic</a>
<div class="drop-divider"></div>
<a href="collection.html">View all collections →</a>
</div>
</div>
<a href="trail.html" class="nav-drop-btn" style="text-decoration:none">🛤️ Routes</a>
<div class="nav-search-wrap">
<span class="nsi">🔍</span>
<input type="text" id="navSearch" placeholder="Search sites..." autocomplete="off">
</div>
</div>
<div class="nav-right">
<a href="explore.html" class="btn-explore">🧭 Explore Map</a>
</div>
<button class="hamburger" onclick="document.querySelector('.mobile-menu').classList.toggle('open')" aria-label="Menu">☰</button>
</div>
</nav>`;

const FOOTER_HTML = `<footer>
<div class="footer-inner">
<div class="footer-top">
<div class="footer-brand">
<div class="footer-logo"><img src="logo.png" alt="castlecore" style="height:32px;width:auto;border-radius:4px;vertical-align:middle;margin-right:8px">castlecore</div>
<p>The most complete heritage guide for the UK &amp; Ireland</p>
</div>
<div class="footer-col"><h4>Explore</h4><a href="explore.html">Map</a><a href="collection.html">Collections</a><a href="trail.html">Routes</a></div>
<div class="footer-col"><h4>Countries</h4><a href="england.html">England</a><a href="scotland.html">Scotland</a><a href="wales.html">Wales</a><a href="ireland.html">Ireland</a></div>
<div class="footer-col"><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a></div>
</div>
<div class="footer-bottom">
<span>Built with ❤️ for history lovers</span>
<span>© 2026 castlecore</span>
</div>
</div>
</footer>`;

// ===== Build page for each country =====
function generateCountryPage(key) {
  const country = COUNTRIES[key];
  const sites = CASTLES.filter(country.filter);
  
  // Stats
  const typeCounts = {};
  const condCounts = {};
  const eraCounts = {};
  const countyCounts = {};
  sites.forEach(s => {
    const t = (s.type || 'other').toLowerCase();
    typeCounts[t] = (typeCounts[t] || 0) + 1;
    if (s.condition) condCounts[s.condition] = (condCounts[s.condition] || 0) + 1;
    if (s.era) eraCounts[s.era] = (eraCounts[s.era] || 0) + 1;
    if (s.county) countyCounts[s.county] = (countyCounts[s.county] || 0) + 1;
  });
  
  const topTypes = Object.entries(typeCounts).sort((a,b) => b[1] - a[1]);
  const topCounties = Object.entries(countyCounts).sort((a,b) => b[1] - a[1]);
  const maxCountyCount = topCounties.length > 0 ? topCounties[0][1] : 1;
  
  // Region counts + representative images
  const regionData = country.regions.map(r => {
    const filter = REGION_FILTERS[r.id];
    const regionSites = filter ? CASTLES.filter(filter) : [];
    const count = regionSites.length;
    const best = [...regionSites].filter(s => s.rating && s.image).sort((a,b) => (b.rating||0) - (a.rating||0))[0];
    const img = best ? best.image.replace(/\/\d+px-/, '/500px-') : '';
    return { ...r, count, img };
  });
  
  // Featured sites
  const featured = country.featuredSlugs
    .map(slug => sites.find(s => slugify(s.name) === slug))
    .filter(Boolean);
  
  // Top rated sites
  const topRated = [...sites]
    .filter(s => s.rating)
    .sort((a,b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 12);
  
  // Card image helpers
  function cardImg(s) {
    if (!s.image) return 'placeholder.svg';
    return s.image.replace(/\/\d+px-/, '/500px-');
  }
  function heroImg(s) {
    if (!s.image) return 'placeholder.svg';
    return s.image.replace(/\/\d+px-/, '/1280px-');
  }
  
  // Type stats HTML
  const typeStatsHtml = topTypes.slice(0, 6).map(([type, count]) => {
    const pct = Math.round(count / sites.length * 100);
    const typeEmoji = { castle:'🏰', palace:'👑', abbey:'⛪', 'tower house':'🗼', fort:'🛡️', 'fortified house':'🏠', monastery:'⛪', 'historic-house':'🏛️', monument:'🗿' };
    const emoji = typeEmoji[type] || '🏛️';
    return `<div class="stat-bar"><div class="stat-bar-label"><span>${emoji} ${type}</span><span class="stat-bar-count">${count}</span></div><div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%"></div></div></div>`;
  }).join('');

  // Quick-filter pills
  const pillDefs = [
    { emoji: '🐕', label: 'Dog Friendly', param: 'tag=dog-friendly', test: s => (s.tags||[]).includes('dog-friendly') },
    { emoji: '🆓', label: 'Free Entry', param: 'tag=free-entry', test: s => (s.tags||[]).includes('free-entry') },
    { emoji: '👨‍👩‍👧', label: 'Family Friendly', param: 'tag=kid-friendly', test: s => (s.tags||[]).includes('kid-friendly') },
    { emoji: '🏚️', label: 'Ruins', param: 'condition=ruin', test: s => (s.condition||'').toLowerCase() === 'ruin' },
    { emoji: '🏰', label: 'Intact', param: 'condition=intact', test: s => (s.condition||'').toLowerCase() === 'intact' },
    { emoji: '📸', label: 'Photogenic', param: 'tag=photogenic', test: s => (s.tags||[]).includes('photogenic') },
    { emoji: '👻', label: 'Haunted', param: 'tag=haunted', test: s => (s.tags||[]).includes('haunted') },
  ];
  const pillsHtml = pillDefs
    .map(p => ({ ...p, count: sites.filter(p.test).length }))
    .filter(p => p.count >= 5)
    .map(p => `<a class="hero-pill" href="search.html?${p.param}&region=${encodeURIComponent(country.name)}">${p.emoji} ${p.label} <span class="hp-count">${p.count}</span></a>`)
    .join('\n');

  // Era cards with representative images
  const ERA_MAP = [
    { keys: ['11th century','12th century'], name: 'Norman', color: '#8b2335', tagline: 'Conquest, keeps, and the clash of iron on stone' },
    { keys: ['13th century','14th century','15th century'], name: 'Medieval', color: '#2d5a3d', tagline: 'The golden age of chivalry and towering curtain walls' },
    { keys: ['16th century'], name: 'Tudor', color: '#1a2a4a', tagline: 'Palaces of power in an age of reformation' },
    { keys: ['17th century'], name: 'Stuart', color: '#6b3a6b', tagline: 'Civil war strongholds and baroque grandeur' },
    { keys: ['18th century','19th century'], name: 'Georgian & Victorian', color: '#b8860b', tagline: 'Romantic revival and the age of the country house' },
    { keys: ['prehistoric'], name: 'Prehistoric', color: '#8b7355', tagline: 'Ancient hillforts and stones older than memory' },
  ];
  const eraCards = ERA_MAP.map(era => {
    const eraSites = sites.filter(s => era.keys.includes((s.era||'').toLowerCase()));
    const count = eraSites.length;
    const best = [...eraSites].filter(s => s.rating && s.image).sort((a,b) => (b.rating||0) - (a.rating||0))[0];
    const img = best ? best.image.replace(/\/\d+px-/, '/1280px-') : '';
    return { ...era, count, img };
  }).filter(e => e.count > 0).sort((a,b) => b.count - a.count).slice(0, 5);

  // Practical info counts
  const freeCount = sites.filter(s => (s.tags||[]).includes('free-entry')).length;
  const tearoomCount = sites.filter(s => (s.tags||[]).includes('tearoom-cafe')).length;
  const dogCount = sites.filter(s => (s.tags||[]).includes('dog-friendly')).length;
  const familyCount = sites.filter(s => (s.tags||[]).includes('kid-friendly')).length;

  // Mini-map site data
  const mapSites = sites.filter(s => s.lat && s.lng).map(s => ({
    name: s.name,
    lat: s.lat,
    lng: s.lng,
    type: (s.type||'other').toLowerCase(),
    slug: slugify(s.name)
  }));
  const typeColors = { castle:'#8b2335', palace:'#b8860b', abbey:'#2d5a3d', 'tower house':'#6b3a6b', fort:'#4a6fa5', 'fortified house':'#8b7355', monastery:'#2d5a3d', monument:'#666' };

  // Hero background
  const heroBg = country.heroImage ? country.heroImage : '';

  // --- Build region cards HTML (image overlay style) ---
  const regionGridHtml = regionData.map(r => {
    const bgStyle = r.img ? `background-image:linear-gradient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,.15) 60%),url('${r.img}');background-size:cover;background-position:center` : `background:linear-gradient(135deg,var(--burgundy),var(--forest))`;
    return `<a class="region-card" href="region.html?id=${r.id}" style="${bgStyle}">
<div class="region-card-body"><span class="region-card-name">${escapeHtml(r.name)}</span><span class="region-card-count">${r.count} sites</span></div>
</a>`;
  }).join('\n');

  // --- Build era cards HTML (cinematic panels with images) ---
  const eraCardsHtml = eraCards.map((e, i) => {
    const eraParam = e.keys.map(k => encodeURIComponent(k)).join(',');
    const bgStyle = e.img ? `background-image:linear-gradient(to top,rgba(0,0,0,.75) 0%,rgba(0,0,0,.2) 60%),url('${e.img}');background-size:cover;background-position:center` : `background:linear-gradient(135deg,${e.color} 0%,${e.color}dd 100%)`;
    const cls = i === 0 ? 'era-card era-featured' : 'era-card';
    return `<a class="${cls}" href="search.html?era=${eraParam}&region=${encodeURIComponent(country.name)}" style="${bgStyle}">
<span class="era-name">${escapeHtml(e.name)}</span>
<span class="era-count">${e.count} sites</span>
<span class="era-tagline">${escapeHtml(e.tagline)}</span>
</a>`;
  }).join('\n');

  // --- Build featured sites HTML (editorial two-up + grid) ---
  const editorialHtml = featured.slice(0, 2).map((s, i) => {
    const loc = [s.county, s.country].filter(Boolean).join(', ');
    const rating = s.rating ? `<span class="card-rating">★ ${s.rating}</span>` : '';
    const hook = s.description ? escapeHtml(s.description.length > 90 ? s.description.slice(0, 87) + '…' : s.description) : '';
    const dir = i % 2 === 0 ? '' : ' editorial-reverse';
    return `<a class="editorial-card${dir}" href="site/${slugify(s.name)}.html">
<div class="editorial-img"><img src="${heroImg(s)}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.src='placeholder.svg'"></div>
<div class="editorial-body">
<span class="type-pill">${s.type || ''}</span>
<h3>${escapeHtml(s.name)}</h3>
<p class="editorial-loc">${escapeHtml(loc)}</p>
<p class="editorial-hook">${hook}</p>
<div class="editorial-meta">${rating}<span class="editorial-cta">Explore →</span></div>
</div>
</a>`;
  }).join('\n');

  const gridHtml = featured.slice(2, 6).map(s => {
    const loc = [s.county, s.country].filter(Boolean).join(', ');
    const rating = s.rating ? `<span class="card-rating">★ ${s.rating}</span>` : '';
    const hook = s.description ? `<p class="feat-hook">${escapeHtml(s.description.length > 90 ? s.description.slice(0, 87) + '…' : s.description)}</p>` : '';
    return `<a class="feat-card" href="site/${slugify(s.name)}.html">
<div class="feat-img"><img src="${cardImg(s)}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.src='placeholder.svg'"></div>
<div class="feat-body"><h3>${escapeHtml(s.name)}</h3><p class="feat-loc">${escapeHtml(loc)}</p>${hook}<div class="feat-meta"><span class="type-pill">${s.type || ''}</span>${rating}</div></div>
</a>`;
  }).join('\n');

  // --- County cards with density bars ---
  const countyGridHtml = topCounties.slice(0, 16).map(([county, count]) => {
    const pct = Math.round(count / maxCountyCount * 100);
    const isTop = count >= maxCountyCount * 0.7;
    return `<a class="county-card${isTop ? ' county-hot' : ''}" href="search.html?region=${encodeURIComponent(county)}">
<div class="county-info"><span class="county-name">${escapeHtml(county)}</span><span class="county-count">${count} sites</span></div>
<div class="county-bar-track"><div class="county-bar-fill" style="width:${pct}%"></div></div>
</a>`;
  }).join('\n');

  // Parallax break images — pick 2 highly-rated castles not in featured
  const featuredNames = new Set(featured.map(s => s.name));
  const parallaxCandidates = [...sites]
    .filter(s => s.rating && s.image && !featuredNames.has(s.name))
    .sort((a,b) => (b.rating||0) - (a.rating||0));
  const parallaxImg1 = parallaxCandidates[0] ? heroImg(parallaxCandidates[0]) : heroBg;
  const parallaxImg2 = parallaxCandidates[1] ? heroImg(parallaxCandidates[1]) : heroBg;

  // Country-specific evocative quotes
  const COUNTRY_QUOTES = {
    england: [
      'This royal throne of kings, this sceptred isle, this earth of majesty, this seat of Mars.',
      'In every English county, the stones remember what the living have forgotten.'
    ],
    scotland: [
      'O Caledonia! stern and wild, meet nurse for a poetic child!',
      'The mist rises from the loch, and the castle stands as it has for seven hundred years.'
    ],
    wales: [
      'In the shadow of Snowdon, the fortresses of princes still guard the mountain passes.',
      'More castles per square mile than anywhere on earth — every hilltop tells a story.'
    ],
    ireland: [
      'The stones of Ireland are steeped in a thousand years of song and sorrow.',
      'Where the Atlantic meets the land, the towers have watched since memory began.'
    ],
    'northern-ireland': [
      'Where the waves crash against Dunluce, history clings to the cliff edge.',
      'The castles of the North stand sentinel over a land of fierce beauty.'
    ],
  };
  const quotes = COUNTRY_QUOTES[key] || ['Every stone has a story. Every ruin was once a stronghold.', 'The past is never dead. It is not even past.'];

  // Region intro texts
  const REGION_INTROS = {
    england: 'From the white cliffs of Dover to the wilds of Northumberland, England\'s regions each hold their own chapter in the story of these islands.',
    scotland: 'From the misty Highlands to the gentle Borders, each region of Scotland guards its own treasury of stone and legend.',
    wales: 'From the fortress-crowned peaks of Snowdonia to the gentle valleys of the south, Wales unfolds in layers of myth and masonry.',
    ireland: 'From Dublin\'s coastal strongholds to the wild Atlantic towers of the west, Ireland\'s regions reveal centuries of conquest, faith, and resilience.',
    'northern-ireland': 'From the Antrim coast to the Mourne Mountains, Northern Ireland\'s heritage sites span millennia of turbulent history.',
  };
  const regionIntro = REGION_INTROS[key] || `Discover the diverse regions of ${country.name} and the heritage they hold.`;

  // Divider SVG shorthand
  const DIVIDER = `<div class="ornate-divider"><svg width="200" height="30" viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="15" x2="70" y2="15" stroke="currentColor" stroke-width="0.6"/><line x1="130" y1="15" x2="200" y2="15" stroke="currentColor" stroke-width="0.6"/><path d="M80 15c0-8 10-12 20-12s20 4 20 12-10 12-20 12-20-4-20-12z" fill="none" stroke="currentColor" stroke-width="0.6"/><circle cx="100" cy="15" r="3" fill="currentColor"/><path d="M90 15c3-5 7-8 10-8s7 3 10 8c-3 5-7 8-10 8s-7-3-10-8z" fill="currentColor" opacity="0.15"/></svg></div>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<title>Castles in ${escapeHtml(country.name)} — castlecore</title>
<meta name="description" content="${escapeHtml(country.seoDescription)}">
<link rel="canonical" href="https://castlecore.uk/${country.slug}.html">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--parchment:#f5f0e8;--parchment-dark:#ede6d6;--cream:#faf8f4;--candlelight:#c9a84c;--burgundy:#8b2335;--forest:#2d5a3d;--ivy:#3d5a3e;--shadow:#2a2522;--twilight:#4a5568;--hearth:#6b4c3b;--border:#e2ddd4;--radius:12px;--pill:20px;--ink:#1a1714}
html{scroll-behavior:smooth}
body{font-family:'Cormorant Garamond','Georgia',serif;color:var(--ink);line-height:1.7;-webkit-font-smoothing:antialiased;background:var(--parchment);font-size:18px}
h1,h2,h3,h4{font-family:'Playfair Display',serif;font-weight:400;color:var(--ink)}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(245,240,232,.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--border);height:64px;display:flex;align-items:center;padding:0 24px}
.nav-inner{max-width:1280px;margin:0 auto;width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.nav-logo{font-family:'Playfair Display',serif;font-size:1.3rem;display:flex;align-items:center;gap:8px;flex-shrink:0}
.nav-center{display:flex;align-items:center;gap:6px;flex:1;justify-content:center}
.nav-dropdown{position:relative}
.nav-dropdown>.nav-drop-btn{font-size:.88rem;font-weight:500;color:var(--twilight);background:none;border:none;cursor:pointer;padding:6px 10px;font-family:'Inter',sans-serif;transition:color .2s;display:flex;align-items:center;gap:3px}
.nav-dropdown>.nav-drop-btn:hover,.nav-dropdown:hover>.nav-drop-btn{color:var(--burgundy)}
.nav-drop-panel{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);background:var(--cream);border:1px solid var(--border);border-radius:var(--radius);box-shadow:0 8px 32px rgba(42,37,34,.12);min-width:200px;padding:8px 0;z-index:9999;padding-top:16px;margin-top:0}
.nav-dropdown::after{content:'';position:absolute;top:100%;left:0;right:0;height:16px}
.nav-dropdown:hover .nav-drop-panel{display:block}
.nav-drop-panel a{display:block;padding:8px 18px;font-size:.88rem;font-family:'Inter',sans-serif;color:var(--shadow);transition:background .15s}
.nav-drop-panel a:hover{background:var(--parchment);color:var(--burgundy)}
.nav-drop-panel .drop-divider{height:1px;background:var(--border);margin:4px 0}
.mega-wrap:hover .mega-menu{display:flex}
.mega-menu{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);background:var(--cream);border:1px solid var(--border);border-radius:var(--radius);box-shadow:0 8px 32px rgba(42,37,34,.12);min-width:420px;z-index:9999;margin-top:0;padding:0;overflow:hidden}
.mega-wrap::after{content:'';position:absolute;top:100%;left:0;right:0;height:16px}
.mega-countries{display:flex;flex-direction:column;background:var(--parchment);border-right:1px solid var(--border);min-width:150px;padding:8px 0}
.mega-country{display:block;width:100%;text-align:left;padding:12px 20px;font-size:.9rem;font-weight:500;color:var(--twilight);background:none;border:none;cursor:pointer;font-family:'Inter',sans-serif;transition:all .15s;border-left:3px solid transparent}
.mega-country:hover{color:var(--burgundy);background:var(--parchment-dark)}
.mega-country.active{color:var(--burgundy);background:var(--cream);border-left-color:var(--burgundy);font-weight:600}
.mega-regions{flex:1;padding:12px 0}
.mega-panel{display:none}
.mega-panel.active{display:block}
.mega-panel a{display:block;padding:8px 24px;font-size:.88rem;font-family:'Inter',sans-serif;color:var(--shadow);transition:background .15s,color .15s}
.mega-panel a:hover{background:var(--parchment);color:var(--burgundy)}
.nav-search-wrap{position:relative;flex-shrink:1;max-width:200px}
.nav-search-wrap input{width:100%;padding:7px 12px 7px 32px;border:1px solid var(--border);border-radius:var(--pill);font-size:.82rem;font-family:'Inter',sans-serif;outline:none;background:var(--cream);transition:border-color .2s}
.nav-search-wrap input:focus{border-color:var(--candlelight);background:#fff;box-shadow:0 0 0 2px rgba(201,168,76,.12)}
.nav-search-wrap .nsi{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:.85rem;pointer-events:none}
.nav-right{display:flex;align-items:center;gap:12px;flex-shrink:0}
.nav-right .btn-explore{background:var(--burgundy);color:#fff;padding:8px 18px;border-radius:var(--pill);font-weight:600;font-size:.88rem;font-family:'Inter',sans-serif;transition:background .2s;display:inline-block}
.nav-right .btn-explore:hover{background:#6e1a2a}
.hamburger{display:none;background:none;border:none;font-size:1.5rem;cursor:pointer}
.mobile-menu{display:none;position:fixed;top:64px;left:0;right:0;bottom:0;background:var(--cream);padding:16px 24px;flex-direction:column;gap:0;z-index:999;overflow-y:auto}
.mobile-menu.open{display:flex}
.mobile-menu a{font-size:1rem;font-weight:500;color:var(--twilight);padding:10px 0;border-bottom:1px solid var(--border);font-family:'Inter',sans-serif}
.mobile-menu .mob-heading{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--hearth);padding:14px 0 4px;border-bottom:none;font-family:'Inter',sans-serif}
.mobile-menu .mob-sub a{padding-left:16px;font-size:.92rem}
@media(max-width:768px){.nav-center{display:none}.nav-right .btn-explore{display:none}.hamburger{display:block}}

/* ===== PARCHMENT TEXTURE ===== */
.parchment{background:var(--parchment);position:relative}
.parchment::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 20% 50%,rgba(139,35,53,.015) 0%,transparent 70%),radial-gradient(ellipse at 80% 20%,rgba(201,168,76,.02) 0%,transparent 60%),radial-gradient(ellipse at 50% 80%,rgba(107,76,59,.015) 0%,transparent 50%);pointer-events:none;z-index:0}
.parchment-alt{background:var(--parchment-dark)}

/* ===== SCROLL ANIMATIONS ===== */
.fade-in{opacity:0;transform:translateY(30px);transition:opacity 0.8s ease,transform 0.8s ease}
.fade-in.visible{opacity:1;transform:translateY(0)}
.fade-in-left{opacity:0;transform:translateX(-40px);transition:opacity 0.8s ease,transform 0.8s ease}
.fade-in-left.visible{opacity:1;transform:translateX(0)}
.fade-in-right{opacity:0;transform:translateX(40px);transition:opacity 0.8s ease,transform 0.8s ease}
.fade-in-right.visible{opacity:1;transform:translateX(0)}

/* ===== ORNATE DIVIDER ===== */
.ornate-divider{text-align:center;padding:48px 0;color:var(--candlelight);opacity:0.4}
.ornate-divider svg{display:inline-block}

/* ===== PROLOGUE HERO ===== */
.hero{margin-top:64px;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:relative;overflow:hidden;background-attachment:fixed;background-size:cover;background-position:center}
.hero::before{content:'';position:absolute;inset:20px;border:1px solid rgba(201,168,76,.3);z-index:2;pointer-events:none}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.85) 0%,rgba(0,0,0,.4) 35%,rgba(0,0,0,.2) 60%,rgba(0,0,0,.35) 100%);z-index:1}
.hero-content{position:relative;z-index:3;max-width:800px;padding:0 32px}
.hero h1{font-size:clamp(3rem,6vw,5rem);color:#fff;letter-spacing:3px;text-transform:uppercase;margin-bottom:24px;text-shadow:0 2px 20px rgba(0,0,0,.5);line-height:1.05;font-weight:400}
.hero-prologue{color:rgba(255,255,255,.85);font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(1.1rem,2vw,1.35rem);max-width:650px;margin:0 auto 40px;line-height:1.8;text-shadow:0 1px 10px rgba(0,0,0,.4)}
.hero-prologue::before{content:'\\AB\\A0';font-size:1.3em;color:var(--candlelight);opacity:.7}
.hero-prologue::after{content:'\\A0\\BB';font-size:1.3em;color:var(--candlelight);opacity:.7}
.hero-stats-line{color:rgba(255,255,255,.65);font-family:'Cormorant Garamond',serif;font-size:1.05rem;letter-spacing:2px;margin-bottom:36px}
.hero-stats-line span{padding:0 16px;display:inline-block}
.hero-stats-line .stat-sep{color:rgba(201,168,76,.4)}
.hero-pills-bar{position:absolute;bottom:0;left:0;right:0;z-index:3;padding:20px 24px;display:flex;justify-content:center;background:linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 100%)}
.hero-pills{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
.hero-pill{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.1);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);color:#fff;padding:10px 20px;border-radius:var(--pill);font-size:.85rem;font-family:'Inter',sans-serif;font-weight:500;transition:all .25s;border:1px solid rgba(255,255,255,.15)}
.hero-pill:hover{background:rgba(255,255,255,.22);transform:translateY(-2px);box-shadow:0 4px 20px rgba(0,0,0,.2)}
.hp-count{font-size:.72rem;opacity:.5}
.scroll-indicator{position:absolute;bottom:80px;left:50%;transform:translateX(-50%);z-index:3;color:rgba(255,255,255,.5);font-family:'Cormorant Garamond',serif;font-size:.85rem;letter-spacing:2px;text-align:center;animation:scrollBounce 2s ease infinite}
.scroll-indicator::after{content:'\\2304';display:block;font-size:1.8rem;margin-top:2px;line-height:1}
@keyframes scrollBounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}
@media(max-width:768px){
.hero::before{inset:10px}
.hero-pills-bar{position:relative;background:rgba(0,0,0,.4)}
.hero-pills{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.hero-pill{justify-content:center;padding:10px 14px;font-size:.8rem}
}

/* ===== CHAPTER STRUCTURE ===== */
.chapter{padding:80px 24px;position:relative;z-index:1}
.chapter-inner{max-width:1100px;margin:0 auto}
.chapter-num{font-family:'Cormorant Garamond',serif;font-size:.85rem;text-transform:uppercase;letter-spacing:3px;color:var(--candlelight);margin-bottom:8px;display:block}
.chapter-title{font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;line-height:1.15}
.chapter-intro{font-family:'Cormorant Garamond',serif;font-size:1.15rem;color:var(--twilight);line-height:1.8;max-width:700px;margin-bottom:48px}
.drop-cap::first-letter{font-family:'Playfair Display',serif;font-size:4em;float:left;line-height:0.75;margin:0.05em 0.12em 0 0;color:var(--burgundy)}

/* ===== PARALLAX IMAGE BREAKS ===== */
.parallax-break{min-height:60vh;background-attachment:fixed;background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;position:relative}
.parallax-break::after{content:'';position:absolute;inset:0;background:rgba(26,23,20,.55)}
.parallax-quote{position:relative;z-index:1;color:#fff;font-family:'Cormorant Garamond',serif;font-size:clamp(1.5rem,3vw,2.5rem);font-style:italic;text-align:center;max-width:700px;padding:0 24px;text-shadow:0 2px 12px rgba(0,0,0,.4);line-height:1.6}
.parallax-quote::before{content:'\\201C';display:block;font-size:4rem;line-height:1;color:var(--candlelight);opacity:.5;margin-bottom:-8px}

/* ===== REGION CARDS (Chapter I) ===== */
.region-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.region-card{display:block;height:280px;border-radius:4px;overflow:hidden;position:relative;cursor:pointer;transition:transform .3s,box-shadow .3s}
.region-card:hover{transform:translateY(-5px);box-shadow:0 16px 48px rgba(42,37,34,.2)}
.region-card-body{position:absolute;bottom:0;left:0;right:0;padding:24px;color:#fff;z-index:1}
.region-card-name{display:block;font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;margin-bottom:4px;text-shadow:0 1px 6px rgba(0,0,0,.3)}
.region-card-count{font-size:.85rem;opacity:.75;font-family:'Cormorant Garamond',serif;letter-spacing:1px}
@media(max-width:900px){.region-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:480px){.region-grid{grid-template-columns:1fr 1fr}}

/* ===== ERA TIMELINE (Chapter II) ===== */
.era-timeline{display:flex;flex-direction:column;gap:0}
.era-row{display:grid;grid-template-columns:1.2fr 1fr;min-height:320px;overflow:hidden}
.era-row:nth-child(even){direction:rtl}
.era-row:nth-child(even)>*{direction:ltr}
.era-img{overflow:hidden;position:relative}
.era-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
.era-row:hover .era-img img{transform:scale(1.05)}
.era-body{display:flex;flex-direction:column;justify-content:center;padding:48px 40px}
.era-body .era-name{font-family:'Playfair Display',serif;font-size:clamp(1.6rem,3vw,2.2rem);margin-bottom:8px}
.era-body .era-name::first-letter{font-size:1.3em;color:var(--burgundy)}
.era-body .era-count{font-family:'Cormorant Garamond',serif;font-size:.95rem;color:var(--candlelight);letter-spacing:1px;margin-bottom:12px}
.era-body .era-tagline{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.1rem;color:var(--twilight);line-height:1.7}
.era-body .era-link{display:inline-block;margin-top:20px;font-family:'Inter',sans-serif;font-size:.85rem;font-weight:600;color:var(--burgundy);letter-spacing:.5px;transition:color .2s}
.era-body .era-link:hover{color:var(--candlelight)}
.era-row:nth-child(odd) .era-body{background:var(--parchment)}
.era-row:nth-child(even) .era-body{background:var(--parchment-dark)}
@media(max-width:768px){
.era-row,.era-row:nth-child(even){grid-template-columns:1fr;direction:ltr}
.era-row:nth-child(even)>*{direction:ltr}
.era-img{height:220px}
.era-body{padding:32px 24px}
}

/* ===== FEATURED EDITORIAL (Chapter III) ===== */
.editorial-spread{position:relative;height:400px;overflow:hidden;margin-bottom:32px;border-radius:4px}
.editorial-spread img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
.editorial-spread:hover img{transform:scale(1.04)}
.editorial-spread .editorial-overlay{position:absolute;bottom:0;left:0;right:0;padding:40px;background:linear-gradient(to top,rgba(0,0,0,.8) 0%,transparent 100%);color:#fff}
.editorial-spread .editorial-overlay h3{font-size:clamp(1.8rem,3vw,2.4rem);margin-bottom:8px;text-shadow:0 2px 8px rgba(0,0,0,.3)}
.editorial-spread .editorial-overlay .edit-loc{font-family:'Cormorant Garamond',serif;font-size:1rem;opacity:.8;margin-bottom:8px}
.editorial-spread .editorial-overlay .edit-hook{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.05rem;opacity:.75;max-width:500px}
.editorial-spread .editorial-overlay .card-rating{color:var(--candlelight);font-size:1rem;font-weight:600}
.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.story-card{background:var(--cream);border:1px solid var(--border);border-radius:4px;overflow:hidden;transition:transform .3s,box-shadow .3s;cursor:pointer}
.story-card:hover{transform:translateY(-6px) rotate(-0.5deg);box-shadow:0 16px 48px rgba(42,37,34,.15)}
.story-card-img{height:200px;overflow:hidden}
.story-card-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.story-card:hover .story-card-img img{transform:scale(1.06)}
.story-card-body{padding:20px 24px}
.story-card-body h3{font-size:1.15rem;margin-bottom:4px}
.story-card-body .sc-loc{font-family:'Cormorant Garamond',serif;color:var(--twilight);font-size:.92rem;margin-bottom:8px}
.story-card-body .sc-hook{font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--twilight);font-size:.95rem;line-height:1.5;opacity:.75;margin-bottom:12px}
.story-card-body .sc-meta{display:flex;align-items:center;gap:8px}
.card-rating{color:var(--candlelight);font-size:.9rem;font-weight:600}
.type-pill{display:inline-block;background:var(--parchment-dark);color:var(--ivy);font-size:.72rem;font-weight:600;font-family:'Inter',sans-serif;padding:3px 10px;border-radius:var(--pill);text-transform:capitalize}
@media(max-width:768px){
.editorial-spread{height:300px}
.story-grid{grid-template-columns:1fr}
}

/* ===== COUNTY INDEX (Chapter IV) ===== */
.county-index{columns:2;column-gap:48px}
.county-row{display:flex;align-items:baseline;padding:10px 0;border-bottom:1px dotted rgba(201,168,76,.25);break-inside:avoid;transition:color .2s}
.county-row:hover{color:var(--burgundy)}
.county-row .cn{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:500;white-space:nowrap}
.county-row .cn-featured{color:var(--burgundy);font-weight:600}
.county-row .cn-featured::after{content:' ✦';font-size:.7em;color:var(--candlelight)}
.county-row .dots{flex:1;margin:0 8px;border-bottom:1px dotted rgba(107,76,59,.2);min-width:20px;position:relative;top:-3px}
.county-row .cc{font-family:'Cormorant Garamond',serif;font-size:.95rem;color:var(--twilight);white-space:nowrap}
@media(max-width:600px){.county-index{columns:1}}

/* ===== MAP (Chapter V) ===== */
.map-wrap{border-radius:4px;overflow:hidden;border:3px solid var(--parchment-dark);box-shadow:0 8px 40px rgba(107,76,59,.1)}
#countryMap{height:450px;width:100%;z-index:1}
.map-link{display:block;text-align:center;padding:14px;font-weight:600;font-family:'Inter',sans-serif;color:var(--ivy);font-size:.9rem;background:var(--cream);border-top:1px solid var(--border);transition:all .2s}
.map-link:hover{color:var(--burgundy);background:var(--parchment)}

/* ===== PRACTICAL CARDS ===== */
.practical-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:40px}
.prac-card{background:var(--cream);border-radius:4px;padding:32px 20px;text-align:center;border:1px solid var(--border);transition:transform .2s,box-shadow .2s}
.prac-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(107,76,59,.1)}
.prac-card .prac-icon{font-size:2.2rem;display:block;margin-bottom:10px}
.prac-card .prac-num{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700;color:var(--burgundy);display:block;margin-bottom:4px}
.prac-card .prac-label{font-size:.85rem;color:var(--twilight);font-family:'Inter',sans-serif}
@media(max-width:768px){.practical-grid{grid-template-columns:1fr 1fr}}

/* ===== CTA BUTTON ===== */
.cta-section{text-align:center;padding:80px 24px}
.cta-section h2{font-size:clamp(1.6rem,3vw,2.2rem);margin-bottom:14px}
.cta-section p{font-family:'Cormorant Garamond',serif;color:var(--twilight);margin-bottom:32px;max-width:520px;margin-left:auto;margin-right:auto;font-size:1.15rem}
.btn-manuscript{display:inline-block;background:var(--burgundy);color:#fff;padding:18px 42px;border-radius:50px;font-size:1.05rem;font-weight:600;font-family:'Cormorant Garamond',serif;letter-spacing:1px;transition:all .3s;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(139,35,53,.3);position:relative}
.btn-manuscript:hover{background:#6e1a2a;transform:translateY(-2px);box-shadow:0 8px 30px rgba(139,35,53,.4)}

/* ===== FOOTER ===== */
footer{background:var(--shadow);color:#fff;padding:64px 24px 32px}
.footer-inner{max-width:1280px;margin:0 auto}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:32px;margin-bottom:48px}
.footer-brand .footer-logo{font-family:'Playfair Display',serif;font-size:1.3rem;margin-bottom:8px}
.footer-brand p{color:rgba(255,255,255,.6);font-size:.85rem;max-width:280px;font-family:'Inter',sans-serif}
.footer-col h4{font-size:.85rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;color:rgba(255,255,255,.5);font-family:'Inter',sans-serif}
.footer-col a{display:block;color:rgba(255,255,255,.7);font-size:.9rem;margin-bottom:8px;transition:color .2s;font-family:'Inter',sans-serif}
.footer-col a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;font-size:.8rem;color:rgba(255,255,255,.4);flex-wrap:wrap;gap:8px;font-family:'Inter',sans-serif}
@media(max-width:768px){.footer-top{grid-template-columns:1fr 1fr;gap:24px}}
@media(max-width:480px){.footer-top{grid-template-columns:1fr}}
</style>
</head>
<body>

${NAV_HTML}

<!-- MOBILE MENU -->
<div class="mobile-menu">
<a href="/" style="color:var(--burgundy);font-weight:700">🏠 Home</a>
<a href="explore.html" style="color:var(--burgundy);font-weight:700">🧭 Explore Map</a>
<span class="mob-heading">Countries</span>
<div class="mob-sub">
<a href="england.html">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</a>
<a href="scotland.html">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</a>
<a href="wales.html">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</a>
<a href="ireland.html">🍀 Ireland</a>
<a href="northern-ireland.html">🛡️ Northern Ireland</a>
</div>
<span class="mob-heading">✨ Collections</span>
<div class="mob-sub">
<a href="collection.html?id=top-rated">🏆 Top Rated</a>
<a href="collection.html?id=hidden-gems">💎 Hidden Gems</a>
<a href="collection.html?id=haunted">👻 Haunted</a>
<a href="collection.html?id=free">🆓 Free to Visit</a>
<a href="collection.html">View all →</a>
</div>
<a href="trail.html">🛤️ Routes</a>
</div>

<!-- ═══════════ PROLOGUE — HERO ═══════════ -->
<div class="hero" style="background-image:url('${heroBg}')">
<div class="hero-content">
<h1>${escapeHtml(country.name)}</h1>
<p class="hero-prologue">${escapeHtml(country.description)}</p>
<div class="hero-stats-line">
<span>${sites.length} Sites</span><span class="stat-sep">·</span><span>${topTypes.length} Types</span><span class="stat-sep">·</span><span>${Object.keys(countyCounts).length} Counties</span>
</div>
</div>
<div class="scroll-indicator">Scroll to begin</div>
${pillsHtml ? `<div class="hero-pills-bar"><div class="hero-pills">\n${pillsHtml}\n</div></div>` : ''}
</div>

${regionData.length > 0 ? `
<!-- ═══════════ CHAPTER I — EXPLORE THE REGIONS ═══════════ -->
<div class="chapter parchment">
<div class="chapter-inner">
<span class="chapter-num fade-in">Chapter I</span>
<h2 class="chapter-title fade-in">Explore the Regions</h2>
<p class="chapter-intro drop-cap fade-in">${escapeHtml(regionIntro)}</p>
<div class="region-grid">
${regionData.map(r => {
    const bgStyle = r.img ? `background-image:linear-gradient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,.1) 50%),url('${r.img}');background-size:cover;background-position:center` : `background:linear-gradient(135deg,var(--burgundy),var(--forest))`;
    return `<a class="region-card fade-in" href="region.html?id=${r.id}" style="${bgStyle}"><div class="region-card-body"><span class="region-card-name">${escapeHtml(r.name)}</span><span class="region-card-count">${r.count} sites</span></div></a>`;
  }).join('\n')}
</div>
</div>
</div>

<!-- PARALLAX BREAK 1 -->
<div class="parallax-break" style="background-image:url('${parallaxImg1}')">
<div class="parallax-quote">${escapeHtml(quotes[0])}</div>
</div>
` : ''}

${eraCards.length > 0 ? `
<!-- ═══════════ CHAPTER II — THROUGH THE CENTURIES ═══════════ -->
<div class="chapter parchment-alt">
<div class="chapter-inner">
<span class="chapter-num fade-in">Chapter II</span>
<h2 class="chapter-title fade-in">Through the Centuries</h2>
</div>
</div>
<div class="era-timeline">
${eraCards.map((e, i) => {
    const eraParam = e.keys.map(k => encodeURIComponent(k)).join(',');
    return `<div class="era-row fade-in">
<div class="era-img">${e.img ? `<img src="${e.img}" alt="${escapeHtml(e.name)}" loading="lazy" onerror="this.style.display='none'">` : ''}</div>
<div class="era-body">
<h3 class="era-name">${escapeHtml(e.name)}</h3>
<span class="era-count">${e.count} sites</span>
<p class="era-tagline">${escapeHtml(e.tagline)}</p>
<a class="era-link" href="search.html?era=${eraParam}&region=${encodeURIComponent(country.name)}">Explore ${escapeHtml(e.name)} sites →</a>
</div>
</div>`;
  }).join('\n')}
</div>

<!-- PARALLAX BREAK 2 -->
<div class="parallax-break" style="background-image:url('${parallaxImg2}')">
<div class="parallax-quote">${escapeHtml(quotes[1])}</div>
</div>
` : ''}

<!-- ═══════════ CHAPTER III — MUST-VISIT SITES ═══════════ -->
<div class="chapter parchment">
<div class="chapter-inner">
<span class="chapter-num fade-in">Chapter III</span>
<h2 class="chapter-title fade-in">Where to Begin</h2>
<p class="chapter-intro drop-cap fade-in">These are the sites that define ${escapeHtml(country.name)}'s heritage — the ones that stop you in your tracks, that make you reach for your camera, that remind you why old stones still matter.</p>

${featured.slice(0, 2).map(s => {
    const loc = [s.county, s.country].filter(Boolean).join(', ');
    const rating = s.rating ? `<span class="card-rating">★ ${s.rating}</span>` : '';
    const hook = s.description ? escapeHtml(s.description.length > 100 ? s.description.slice(0, 97) + '…' : s.description) : '';
    return `<a class="editorial-spread fade-in" href="site/${slugify(s.name)}.html">
<img src="${heroImg(s)}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.src='placeholder.svg'">
<div class="editorial-overlay"><h3>${escapeHtml(s.name)}</h3><p class="edit-loc">${escapeHtml(loc)}</p><p class="edit-hook">${hook}</p>${rating}</div>
</a>`;
  }).join('\n')}

<div class="story-grid">
${featured.slice(2, 6).map(s => {
    const loc = [s.county, s.country].filter(Boolean).join(', ');
    const rating = s.rating ? `<span class="card-rating">★ ${s.rating}</span>` : '';
    const hook = s.description ? escapeHtml(s.description.length > 100 ? s.description.slice(0, 97) + '…' : s.description) : '';
    return `<a class="story-card fade-in" href="site/${slugify(s.name)}.html">
<div class="story-card-img"><img src="${cardImg(s)}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.src='placeholder.svg'"></div>
<div class="story-card-body"><h3>${escapeHtml(s.name)}</h3><p class="sc-loc">${escapeHtml(loc)}</p><p class="sc-hook">${hook}</p><div class="sc-meta"><span class="type-pill">${s.type || ''}</span>${rating}</div></div>
</a>`;
  }).join('\n')}
</div>
</div>
</div>

${DIVIDER}

<!-- ═══════════ CHAPTER IV — THE COUNTIES ═══════════ -->
<div class="chapter parchment-alt">
<div class="chapter-inner">
<span class="chapter-num fade-in">Chapter IV</span>
<h2 class="chapter-title fade-in">The Counties</h2>
<p class="chapter-intro fade-in" style="font-style:italic">A gazetteer of every county in ${escapeHtml(country.name)} and the heritage it holds.</p>
<div class="county-index fade-in">
${topCounties.map(([county, count], i) => {
    const featured = i < 3 ? ' cn-featured' : '';
    return `<a class="county-row" href="search.html?region=${encodeURIComponent(county)}"><span class="cn${featured}">${escapeHtml(county)}</span><span class="dots"></span><span class="cc">${count}</span></a>`;
  }).join('\n')}
</div>
</div>
</div>

${DIVIDER}

<!-- ═══════════ CHAPTER V — PLAN YOUR JOURNEY ═══════════ -->
<div class="chapter parchment">
<div class="chapter-inner">
<span class="chapter-num fade-in">Chapter V</span>
<h2 class="chapter-title fade-in">Plan Your Journey</h2>

<div class="map-wrap fade-in">
<div id="countryMap"></div>
<a class="map-link" href="explore.html">Open full map →</a>
</div>

<div class="practical-grid">
<div class="prac-card fade-in"><span class="prac-icon">🆓</span><span class="prac-num">${freeCount}</span><span class="prac-label">Free Entry</span></div>
<div class="prac-card fade-in"><span class="prac-icon">☕</span><span class="prac-num">${tearoomCount}</span><span class="prac-label">Tearoom / Café</span></div>
<div class="prac-card fade-in"><span class="prac-icon">🐕</span><span class="prac-num">${dogCount}</span><span class="prac-label">Dog Friendly</span></div>
<div class="prac-card fade-in"><span class="prac-icon">👨‍👩‍👧</span><span class="prac-num">${familyCount}</span><span class="prac-label">Family Friendly</span></div>
</div>
</div>
</div>

<!-- CTA / EPILOGUE -->
<div class="cta-section parchment-alt">
<h2>Begin Your Adventure</h2>
<p>See every castle, abbey, and ruin plotted across ${escapeHtml(country.name)} — filter by type, era, and more</p>
<a href="explore.html" class="btn-manuscript">Begin Your Adventure →</a>
</div>

${FOOTER_HTML}

<!-- SCRIPTS -->
<script>
// Mega menu
document.querySelectorAll('.mega-country').forEach(btn=>{
btn.addEventListener('mouseenter',function(){
const c=this.dataset.country;
this.closest('.mega-menu').querySelectorAll('.mega-country').forEach(b=>b.classList.remove('active'));
this.classList.add('active');
this.closest('.mega-menu').querySelectorAll('.mega-panel').forEach(p=>p.classList.toggle('active',p.dataset.country===c));
});
});
document.getElementById('navSearch').addEventListener('keydown',function(e){
if(e.key==='Enter'){var q=this.value.trim();if(q)window.location.href='search.html?q='+encodeURIComponent(q);}
});

// Scroll-triggered animations
const observer=new IntersectionObserver((entries)=>{
entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});
},{threshold:0.15});
document.querySelectorAll('.fade-in,.fade-in-left,.fade-in-right').forEach(el=>observer.observe(el));
</script>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
(function(){
var sites=${JSON.stringify(mapSites)};
var colors=${JSON.stringify(typeColors)};
if(!sites.length)return;
var map=L.map('countryMap',{scrollWheelZoom:false});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:18}).addTo(map);
var bounds=[];
sites.forEach(function(s){
var c=colors[s.type]||'#666';
var m=L.circleMarker([s.lat,s.lng],{radius:5,fillColor:c,color:'#fff',weight:1,fillOpacity:.8}).addTo(map);
m.bindPopup('<b>'+s.name+'</b><br><a href="site/'+s.slug+'.html">View site →</a>');
bounds.push([s.lat,s.lng]);
});
if(bounds.length)map.fitBounds(bounds,{padding:[30,30]});
})();
</script>
</body>
</html>`;

  return html;
}

// ===== Generate =====
const only = process.argv[2]; // optional: node generate-country-pages.js england

for (const [key, country] of Object.entries(COUNTRIES)) {
  if (only && key !== only) continue;
  const html = generateCountryPage(key);
  const outPath = path.join(__dirname, `${country.slug}.html`);
  fs.writeFileSync(outPath, html, 'utf8');
  const sites = CASTLES.filter(country.filter);
  console.log(`✅ ${outPath} (${sites.length} sites)`);
}

console.log('\nDone!');
