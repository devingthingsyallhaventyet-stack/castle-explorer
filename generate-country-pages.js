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
  
  // Region counts
  const regionData = country.regions.map(r => {
    const filter = REGION_FILTERS[r.id];
    const count = filter ? CASTLES.filter(filter).length : 0;
    return { ...r, count };
  });
  
  // Featured sites
  const featured = country.featuredSlugs
    .map(slug => sites.find(s => slugify(s.name) === slug))
    .filter(Boolean);
  
  // Top rated sites (fallback for featured)
  const topRated = [...sites]
    .filter(s => s.rating)
    .sort((a,b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 12);
  
  // Card image helper
  function cardImg(s) {
    if (!s.image) return 'placeholder.svg';
    return s.image.replace(/\/\d+px-/, '/500px-');
  }
  
  // Type stats HTML
  const typeStatsHtml = topTypes.slice(0, 6).map(([type, count]) => {
    const pct = Math.round(count / sites.length * 100);
    const typeEmoji = { castle:'🏰', palace:'👑', abbey:'⛪', 'tower house':'🗼', fort:'🛡️', 'fortified house':'🏠', monastery:'⛪', 'historic-house':'🏛️', monument:'🗿' };
    const emoji = typeEmoji[type] || '🏛️';
    return `<div class="stat-bar"><div class="stat-bar-label"><span>${emoji} ${type}</span><span class="stat-bar-count">${count}</span></div><div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%"></div></div></div>`;
  }).join('');
  
  // County grid HTML (top 12)
  const countyGridHtml = topCounties.slice(0, 12).map(([county, count]) => {
    return `<a class="county-card" href="search.html?region=${encodeURIComponent(county)}"><span class="county-name">${escapeHtml(county)}</span><span class="county-count">${count} sites</span></a>`;
  }).join('');
  
  // Region grid HTML
  const regionGridHtml = regionData.map(r => {
    return `<a class="region-link-card" href="region.html?id=${r.id}"><span class="rlc-icon">${r.icon}</span><span class="rlc-name">${escapeHtml(r.name)}</span><span class="rlc-count">${r.count} sites</span></a>`;
  }).join('');
  
  // Featured cards HTML
  const featuredHtml = featured.slice(0, 6).map(s => {
    const loc = [s.county, s.country].filter(Boolean).join(', ');
    const rating = s.rating ? `<span class="card-rating">★ ${s.rating}</span>` : '';
    const hook = s.description ? `<p class="feat-hook">${escapeHtml(s.description.length > 80 ? s.description.slice(0, 77) + '…' : s.description)}</p>` : '';
    return `<a class="feat-card" href="site/${slugify(s.name)}.html">
<div class="feat-img"><img src="${cardImg(s)}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.src='placeholder.svg'"></div>
<div class="feat-body"><h3>${escapeHtml(s.name)}</h3><p class="feat-loc">${escapeHtml(loc)}</p>${hook}<div class="feat-meta"><span class="type-pill">${s.type || ''}</span>${rating}</div></div>
</a>`;
  }).join('\n');
  
  // Top rated grid
  const topRatedHtml = topRated.slice(0, 6).map(s => {
    const loc = [s.county, s.country].filter(Boolean).join(', ');
    return `<a class="feat-card" href="site/${slugify(s.name)}.html">
<div class="feat-img"><img src="${cardImg(s)}" alt="${escapeHtml(s.name)}" loading="lazy" onerror="this.src='placeholder.svg'"></div>
<div class="feat-body"><h3>${escapeHtml(s.name)}</h3><p class="feat-loc">${escapeHtml(loc)}</p><div class="feat-meta"><span class="type-pill">${s.type || ''}</span><span class="card-rating">★ ${s.rating}</span></div></div>
</a>`;
  }).join('\n');

  // === NEW: Quick-filter pills ===
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

  // === NEW: Era cards ===
  const ERA_MAP = [
    { keys: ['11th century','12th century'], name: 'Norman', color: '#8b2335', tagline: 'Conquest, keeps, and the clash of iron on stone' },
    { keys: ['13th century','14th century','15th century'], name: 'Medieval', color: '#2d5a3d', tagline: 'The golden age of chivalry and towering curtain walls' },
    { keys: ['16th century'], name: 'Tudor', color: '#1a2a4a', tagline: 'Palaces of power in an age of reformation' },
    { keys: ['17th century'], name: 'Stuart', color: '#6b3a6b', tagline: 'Civil war strongholds and baroque grandeur' },
    { keys: ['18th century','19th century'], name: 'Georgian & Victorian', color: '#b8860b', tagline: 'Romantic revival and the age of the country house' },
    { keys: ['prehistoric'], name: 'Prehistoric', color: '#8b7355', tagline: 'Ancient hillforts and stones older than memory' },
  ];
  const eraCards = ERA_MAP.map(era => {
    const count = sites.filter(s => era.keys.includes((s.era||'').toLowerCase())).length;
    return { ...era, count };
  }).filter(e => e.count > 0).sort((a,b) => b.count - a.count).slice(0, 5);
  const eraCardsHtml = eraCards.map(e => {
    const eraParam = e.keys.map(k => encodeURIComponent(k)).join(',');
    return `<a class="era-card" href="search.html?era=${eraParam}&region=${encodeURIComponent(country.name)}" style="background:linear-gradient(135deg,${e.color} 0%,${e.color}dd 100%)">
<span class="era-name">${escapeHtml(e.name)}</span>
<span class="era-count">${e.count} sites</span>
<span class="era-tagline">${escapeHtml(e.tagline)}</span>
</a>`;
  }).join('\n');

  // === NEW: Practical info counts ===
  const freeCount = sites.filter(s => (s.tags||[]).includes('free-entry')).length;
  const tearoomCount = sites.filter(s => (s.tags||[]).includes('tearoom-cafe')).length;
  const dogCount = sites.filter(s => (s.tags||[]).includes('dog-friendly')).length;
  const familyCount = sites.filter(s => (s.tags||[]).includes('kid-friendly')).length;

  // === NEW: Mini-map site data ===
  const mapSites = sites.filter(s => s.lat && s.lng).map(s => ({
    name: s.name,
    lat: s.lat,
    lng: s.lng,
    type: (s.type||'other').toLowerCase(),
    slug: slugify(s.name)
  }));
  const typeColors = { castle:'#8b2335', palace:'#b8860b', abbey:'#2d5a3d', 'tower house':'#6b3a6b', fort:'#4a6fa5', 'fortified house':'#8b7355', monastery:'#2d5a3d', monument:'#666' };

  // Hero image or gradient-only
  const heroStyle = country.heroImage 
    ? `background-image:${country.gradient}, url('${country.heroImage}');background-size:cover;background-position:center`
    : `background:${country.gradient}`;

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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--stone:#d4c5a9;--cream:#f0ebe0;--candlelight:#c9a84c;--burgundy:#8b2335;--forest:#2d5a3d;--ivy:#3d5a3e;--shadow:#2a2522;--twilight:#4a5568;--hearth:#6b4c3b;--border:#e8e8e8;--radius:12px;--pill:20px;--warm-white:#faf8f4}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;color:var(--shadow);line-height:1.6;-webkit-font-smoothing:antialiased;background:var(--warm-white)}
h1,h2,h3,h4{font-family:'Playfair Display',serif;font-weight:400}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:#fff;border-bottom:1px solid var(--border);height:64px;display:flex;align-items:center;padding:0 24px}
.nav-inner{max-width:1280px;margin:0 auto;width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.nav-logo{font-family:'Playfair Display',serif;font-size:1.3rem;display:flex;align-items:center;gap:8px;flex-shrink:0}
.nav-center{display:flex;align-items:center;gap:6px;flex:1;justify-content:center}
.nav-dropdown{position:relative}
.nav-dropdown>.nav-drop-btn{font-size:.88rem;font-weight:500;color:var(--twilight);background:none;border:none;cursor:pointer;padding:6px 10px;font-family:'Inter',sans-serif;transition:color .2s;display:flex;align-items:center;gap:3px}
.nav-dropdown>.nav-drop-btn:hover,.nav-dropdown:hover>.nav-drop-btn{color:var(--burgundy)}
.nav-drop-panel{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);background:#fff;border:1px solid var(--border);border-radius:var(--radius);box-shadow:0 8px 32px rgba(42,37,34,.12);min-width:200px;padding:8px 0;z-index:9999;padding-top:16px;margin-top:0}
.nav-dropdown::after{content:'';position:absolute;top:100%;left:0;right:0;height:16px}
.nav-dropdown:hover .nav-drop-panel{display:block}
.nav-drop-panel a{display:block;padding:8px 18px;font-size:.88rem;color:var(--shadow);transition:background .15s}
.nav-drop-panel a:hover{background:var(--cream);color:var(--burgundy)}
.nav-drop-panel .drop-divider{height:1px;background:var(--border);margin:4px 0}
.mega-wrap:hover .mega-menu{display:flex}
.mega-menu{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);background:#fff;border:1px solid var(--border);border-radius:var(--radius);box-shadow:0 8px 32px rgba(42,37,34,.12);min-width:420px;z-index:9999;margin-top:0;padding:0;overflow:hidden}
.mega-wrap::after{content:'';position:absolute;top:100%;left:0;right:0;height:16px}
.mega-countries{display:flex;flex-direction:column;background:var(--warm-white);border-right:1px solid var(--border);min-width:150px;padding:8px 0}
.mega-country{display:block;width:100%;text-align:left;padding:12px 20px;font-size:.9rem;font-weight:500;color:var(--twilight);background:none;border:none;cursor:pointer;font-family:'Inter',sans-serif;transition:all .15s;border-left:3px solid transparent}
.mega-country:hover{color:var(--burgundy);background:var(--cream)}
.mega-country.active{color:var(--burgundy);background:#fff;border-left-color:var(--burgundy);font-weight:600}
.mega-regions{flex:1;padding:12px 0}
.mega-panel{display:none}
.mega-panel.active{display:block}
.mega-panel a{display:block;padding:8px 24px;font-size:.88rem;color:var(--shadow);transition:background .15s,color .15s}
.mega-panel a:hover{background:var(--cream);color:var(--burgundy)}
.nav-search-wrap{position:relative;flex-shrink:1;max-width:200px}
.nav-search-wrap input{width:100%;padding:7px 12px 7px 32px;border:1px solid var(--border);border-radius:var(--pill);font-size:.82rem;font-family:'Inter',sans-serif;outline:none;background:var(--warm-white);transition:border-color .2s}
.nav-search-wrap input:focus{border-color:var(--candlelight);background:#fff;box-shadow:0 0 0 2px rgba(201,168,76,.12)}
.nav-search-wrap .nsi{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:.85rem;pointer-events:none}
.nav-right{display:flex;align-items:center;gap:12px;flex-shrink:0}
.nav-right .btn-explore{background:var(--burgundy);color:#fff;padding:8px 18px;border-radius:var(--pill);font-weight:600;font-size:.88rem;transition:background .2s;display:inline-block}
.nav-right .btn-explore:hover{background:#6e1a2a}
.hamburger{display:none;background:none;border:none;font-size:1.5rem;cursor:pointer}
.mobile-menu{display:none;position:fixed;top:64px;left:0;right:0;bottom:0;background:#fff;padding:16px 24px;flex-direction:column;gap:0;z-index:999;overflow-y:auto}
.mobile-menu.open{display:flex}
.mobile-menu a{font-size:1rem;font-weight:500;color:var(--twilight);padding:10px 0;border-bottom:1px solid var(--border)}
.mobile-menu .mob-heading{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--hearth);padding:14px 0 4px;border-bottom:none}
.mobile-menu .mob-sub a{padding-left:16px;font-size:.92rem}
@media(max-width:768px){
.nav-center{display:none}
.nav-right .btn-explore{display:none}
.hamburger{display:block}
}

/* HERO */
.country-hero{margin-top:64px;padding:80px 24px 64px;text-align:center;position:relative;overflow:hidden;background-blend-mode:overlay}
.country-hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.3),transparent 60%);pointer-events:none}
.country-hero *{position:relative;z-index:1}
.country-hero h1{font-size:clamp(2.2rem,5vw,3.4rem);color:#fff;margin-bottom:12px;text-shadow:0 2px 12px rgba(0,0,0,.3)}
.country-hero .hero-desc{color:rgba(255,255,255,.9);font-size:1.05rem;max-width:720px;margin:0 auto 20px;line-height:1.7;font-family:'Playfair Display',serif;font-style:italic;text-shadow:0 1px 6px rgba(0,0,0,.2)}
.hero-stats{display:flex;justify-content:center;gap:32px;flex-wrap:wrap}
.hero-stat{text-align:center;color:#fff}
.hero-stat .stat-num{font-family:'Playfair Display',serif;font-size:2rem;font-weight:700;display:block;text-shadow:0 2px 8px rgba(0,0,0,.3)}
.hero-stat .stat-label{font-size:.8rem;opacity:.8;text-transform:uppercase;letter-spacing:.5px}

/* BREADCRUMB */
.breadcrumb{max-width:1280px;margin:0 auto;padding:16px 24px;font-size:.85rem;color:var(--twilight)}
.breadcrumb a{color:var(--twilight);transition:color .2s}
.breadcrumb a:hover{color:var(--burgundy)}

/* SECTIONS */
section{padding:48px 24px}
.section-inner{max-width:1280px;margin:0 auto}
.section-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px}
.section-header h2{font-size:clamp(1.6rem,3vw,2.2rem)}
.section-header h2::after{content:'';display:block;width:40px;height:2px;background:var(--burgundy);margin-top:6px;border-radius:1px;opacity:.6}
.section-header a{color:var(--ivy);font-weight:600;font-size:.95rem}
.section-tagline{color:var(--twilight);font-size:.95rem;margin-bottom:28px;font-family:'Playfair Display',serif;font-style:italic}
.bg-cream{background:var(--cream)}

/* REGION LINK CARDS */
.region-link-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px}
.region-link-card{display:flex;flex-direction:column;align-items:center;gap:6px;padding:24px 16px;background:#fff;border:1px solid var(--border);border-radius:16px;transition:transform .2s,box-shadow .2s}
.region-link-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(120,90,50,.1)}
.rlc-icon{font-size:1.8rem}
.rlc-name{font-weight:600;font-size:.95rem}
.rlc-count{font-size:.8rem;color:var(--twilight)}

/* COUNTY GRID */
.county-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px}
.county-card{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;background:#fff;border:1px solid var(--border);border-radius:var(--radius);transition:all .2s}
.county-card:hover{border-color:var(--burgundy);transform:translateY(-2px);box-shadow:0 4px 16px rgba(120,90,50,.08)}
.county-name{font-weight:500;font-size:.9rem}
.county-count{font-size:.78rem;color:var(--twilight);white-space:nowrap}

/* STAT BARS */
.stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
@media(max-width:768px){.stats-grid{grid-template-columns:1fr}}
.stat-bar{margin-bottom:12px}
.stat-bar-label{display:flex;justify-content:space-between;font-size:.88rem;margin-bottom:4px;text-transform:capitalize}
.stat-bar-count{color:var(--twilight);font-size:.82rem}
.stat-bar-track{height:8px;background:var(--cream);border-radius:4px;overflow:hidden}
.stat-bar-fill{height:100%;background:var(--burgundy);border-radius:4px;transition:width .6s ease}

/* FEATURED GRID */
.featured-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.feat-card{border-radius:16px;overflow:hidden;background:#fff;border:1px solid var(--border);transition:transform .25s,box-shadow .25s;box-shadow:0 2px 12px rgba(120,90,50,.06)}
.feat-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(120,90,50,.12)}
.feat-img{height:200px;overflow:hidden}
.feat-img img{width:100%;height:100%;object-fit:cover;transition:transform .3s}
.feat-card:hover .feat-img img{transform:scale(1.05)}
.feat-body{padding:18px}
.feat-body h3{font-size:1.1rem;margin-bottom:4px}
.feat-loc{color:var(--twilight);font-size:.85rem;margin-bottom:8px}
.feat-meta{display:flex;align-items:center;gap:8px}
.type-pill{display:inline-block;background:var(--cream);color:var(--ivy);font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:var(--pill);text-transform:capitalize}
.card-rating{color:var(--candlelight);font-size:.85rem;font-weight:600}
@media(max-width:768px){.featured-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:480px){.featured-grid{grid-template-columns:1fr}}

/* MEDIEVAL CORNERS */
.feat-card{position:relative}
.feat-card::before,.feat-card::after{content:'';position:absolute;width:24px;height:24px;border-color:var(--candlelight);border-style:solid;opacity:.15;z-index:2;pointer-events:none}
.feat-card::before{top:8px;left:8px;border-width:2px 0 0 2px;border-radius:4px 0 0 0}
.feat-card::after{bottom:8px;right:8px;border-width:0 2px 2px 0;border-radius:0 0 4px 0}

/* DIVIDER */
.section-divider{display:flex;align-items:center;justify-content:center;padding:0 24px;max-width:1280px;margin:0 auto}
.section-divider::before,.section-divider::after{content:'';flex:1;height:1px;background:linear-gradient(to right,transparent,var(--hearth),transparent);opacity:.3}
.divider-ornament{padding:0 20px;display:flex;align-items:center}
.divider-ornament svg{width:60px;height:24px;fill:var(--hearth);opacity:.45}

/* CTA */
.country-cta{text-align:center;padding:64px 24px;background:var(--cream)}
.country-cta h2{font-size:clamp(1.5rem,3vw,2rem);margin-bottom:12px}
.country-cta p{color:var(--twilight);margin-bottom:24px;max-width:500px;margin-left:auto;margin-right:auto}
.btn-cta{display:inline-block;background:var(--burgundy);color:#fff;padding:14px 32px;border-radius:var(--pill);font-size:1rem;font-weight:600;transition:background .2s;border:none;cursor:pointer;font-family:'Inter',sans-serif}
.btn-cta:hover{background:#6e1a2a}

/* FOOTER */
footer{background:var(--shadow);color:#fff;padding:64px 24px 32px}
.footer-inner{max-width:1280px;margin:0 auto}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:32px;margin-bottom:48px}
.footer-brand .footer-logo{font-family:'Playfair Display',serif;font-size:1.3rem;margin-bottom:8px}
.footer-brand p{color:rgba(255,255,255,.6);font-size:.85rem;max-width:280px}
.footer-col h4{font-size:.85rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;color:rgba(255,255,255,.5)}
.footer-col a{display:block;color:rgba(255,255,255,.7);font-size:.9rem;margin-bottom:8px;transition:color .2s}
.footer-col a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;font-size:.8rem;color:rgba(255,255,255,.4);flex-wrap:wrap;gap:8px}
@media(max-width:768px){.footer-top{grid-template-columns:1fr 1fr;gap:24px}}
@media(max-width:480px){.footer-top{grid-template-columns:1fr}}

/* HERO PILLS */
.hero-pills{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:20px}
.hero-pill{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.15);backdrop-filter:blur(4px);color:#fff;padding:8px 18px;border-radius:var(--pill);font-size:.88rem;font-weight:500;transition:background .2s,transform .2s;border:1px solid rgba(255,255,255,.2)}
.hero-pill:hover{background:rgba(255,255,255,.28);transform:translateY(-2px)}
.hp-count{font-size:.75rem;opacity:.7}

/* ERA CARDS */
.era-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px}
.era-card{display:flex;flex-direction:column;justify-content:flex-end;padding:28px 24px;border-radius:16px;color:#fff;min-height:180px;transition:transform .25s,box-shadow .25s;text-decoration:none;position:relative;overflow:hidden}
.era-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.25)}
.era-card::before{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.35),transparent 60%);pointer-events:none}
.era-card>*{position:relative;z-index:1}
.era-name{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;margin-bottom:4px}
.era-count{font-size:.85rem;opacity:.8;margin-bottom:6px}
.era-tagline{font-size:.82rem;opacity:.7;font-style:italic;font-family:'Playfair Display',serif}

/* FEAT HOOK */
.feat-hook{font-style:italic;color:var(--twilight);font-size:.82rem;margin-top:4px;opacity:.75;line-height:1.4}

/* MINI MAP */
.mini-map-wrap{border-radius:var(--radius);overflow:hidden;border:1px solid var(--border)}
#countryMap{height:400px;width:100%;z-index:1}
.map-link{display:block;text-align:center;padding:12px;font-weight:600;color:var(--ivy);font-size:.95rem;background:#fff;border-top:1px solid var(--border)}
.map-link:hover{color:var(--burgundy)}

/* PRACTICAL INFO */
.practical-box{background:#fdf8ef;border:1px solid #e8dcc8;border-radius:16px;padding:32px;margin-bottom:24px}
.practical-box h3{font-size:1.3rem;margin-bottom:20px;text-align:center}
.practical-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center}
@media(max-width:600px){.practical-grid{grid-template-columns:repeat(2,1fr)}}
.prac-item .prac-icon{font-size:1.8rem;display:block;margin-bottom:6px}
.prac-item .prac-num{font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:700;color:var(--burgundy);display:block}
.prac-item .prac-label{font-size:.82rem;color:var(--twilight)}
</style>
</head>
<body>

${NAV_HTML}

<!-- MOBILE MENU (simplified) -->
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

<!-- HERO -->
<div class="country-hero" style="${heroStyle}">
<h1>${country.emoji} Castles in ${escapeHtml(country.name)}</h1>
<p class="hero-desc">${escapeHtml(country.description)}</p>
<div class="hero-stats">
<div class="hero-stat"><span class="stat-num">${sites.length}</span><span class="stat-label">Sites</span></div>
<div class="hero-stat"><span class="stat-num">${topTypes.length}</span><span class="stat-label">Types</span></div>
<div class="hero-stat"><span class="stat-num">${Object.keys(countyCounts).length}</span><span class="stat-label">Counties</span></div>
</div>
${pillsHtml ? `<div class="hero-pills">\n${pillsHtml}\n</div>` : ''}
</div>

<!-- BREADCRUMB -->
<div class="breadcrumb">
<a href="/">Home</a> › <strong>${escapeHtml(country.name)}</strong>
</div>

${regionData.length > 0 ? `
<!-- REGIONS -->
<section>
<div class="section-inner">
<div class="section-header"><h2>Explore by Region</h2></div>
<p class="section-tagline">Dive deeper into ${escapeHtml(country.name)}'s regions</p>
<div class="region-link-grid">
${regionGridHtml}
</div>
</div>
</section>

<div class="section-divider"><span class="divider-ornament"><svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M55 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M33 3c2 0 3.5 1.5 3.5 3.5S35 10 33 10s-3.5-1.5-3.5-3.5S31 3 33 3z" opacity=".7"/><path d="M47 3c-2 0-3.5 1.5-3.5 3.5S45 10 47 10s3.5-1.5 3.5-3.5S49 3 47 3z" opacity=".7"/><path d="M36 10c1.5-3 3-4.5 4-4.5s2.5 1.5 4 4.5c-1.5 3-3 4.5-4 4.5s-2.5-1.5-4-4.5z" opacity=".5"/><circle cx="40" cy="10" r="1.5"/></svg></span></div>
` : ''}

${eraCards.length > 0 ? `
<!-- ERAS -->
<section>
<div class="section-inner">
<div class="section-header"><h2>Sites Through the Centuries</h2></div>
<p class="section-tagline">From ancient hillforts to Victorian follies — explore by era</p>
<div class="era-grid">
${eraCardsHtml}
</div>
</div>
</section>

<div class="section-divider"><span class="divider-ornament"><svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M55 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M33 3c2 0 3.5 1.5 3.5 3.5S35 10 33 10s-3.5-1.5-3.5-3.5S31 3 33 3z" opacity=".7"/><path d="M47 3c-2 0-3.5 1.5-3.5 3.5S45 10 47 10s3.5-1.5 3.5-3.5S49 3 47 3z" opacity=".7"/><path d="M36 10c1.5-3 3-4.5 4-4.5s2.5 1.5 4 4.5c-1.5 3-3 4.5-4 4.5s-2.5-1.5-4-4.5z" opacity=".5"/><circle cx="40" cy="10" r="1.5"/></svg></span></div>
` : ''}

<!-- FEATURED -->
<section>
<div class="section-inner">
<div class="section-header"><h2>Must-Visit Sites</h2></div>
<p class="section-tagline">The best of ${escapeHtml(country.name)}'s heritage</p>
<div class="featured-grid">
${featuredHtml}
</div>
</div>
</section>

<div class="section-divider"><span class="divider-ornament"><svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M55 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M33 3c2 0 3.5 1.5 3.5 3.5S35 10 33 10s-3.5-1.5-3.5-3.5S31 3 33 3z" opacity=".7"/><path d="M47 3c-2 0-3.5 1.5-3.5 3.5S45 10 47 10s3.5-1.5 3.5-3.5S49 3 47 3z" opacity=".7"/><path d="M36 10c1.5-3 3-4.5 4-4.5s2.5 1.5 4 4.5c-1.5 3-3 4.5-4 4.5s-2.5-1.5-4-4.5z" opacity=".5"/><circle cx="40" cy="10" r="1.5"/></svg></span></div>

<!-- BROWSE BY COUNTY -->
<section class="bg-cream">
<div class="section-inner">
<div class="section-header"><h2>Browse by County</h2><a href="search.html?region=${encodeURIComponent(country.name)}">View all →</a></div>
<p class="section-tagline">Find sites in every corner of ${escapeHtml(country.name)}</p>
<div class="county-grid">
${countyGridHtml}
</div>
</div>
</section>

<!-- MINI MAP -->
<section>
<div class="section-inner">
<div class="section-header"><h2>All Sites on the Map</h2></div>
<p class="section-tagline">Every heritage site in ${escapeHtml(country.name)} at a glance</p>
<div class="mini-map-wrap">
<div id="countryMap"></div>
<a class="map-link" href="explore.html">View full map →</a>
</div>
</div>
</section>

<div class="section-divider"><span class="divider-ornament"><svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M55 10h25" stroke="currentColor" stroke-width="0.8" fill="none"/><path d="M33 3c2 0 3.5 1.5 3.5 3.5S35 10 33 10s-3.5-1.5-3.5-3.5S31 3 33 3z" opacity=".7"/><path d="M47 3c-2 0-3.5 1.5-3.5 3.5S45 10 47 10s3.5-1.5 3.5-3.5S49 3 47 3z" opacity=".7"/><path d="M36 10c1.5-3 3-4.5 4-4.5s2.5 1.5 4 4.5c-1.5 3-3 4.5-4 4.5s-2.5-1.5-4-4.5z" opacity=".5"/><circle cx="40" cy="10" r="1.5"/></svg></span></div>

<!-- STATS -->
<section>
<div class="section-inner">
<div class="section-header"><h2>At a Glance</h2></div>
<p class="section-tagline">${sites.length} heritage sites across ${Object.keys(countyCounts).length} counties</p>
<div class="stats-grid">
<div>
<h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--twilight)">By Type</h3>
${typeStatsHtml}
</div>
<div>
<h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--twilight)">Top Rated</h3>
${topRated.slice(0, 5).map((s, i) => `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)"><span style="font-family:'Playfair Display',serif;font-size:1.4rem;color:var(--candlelight);width:28px">${i+1}</span><div style="flex:1"><a href="site/${slugify(s.name)}.html" style="font-weight:500;font-size:.92rem;transition:color .2s" onmouseover="this.style.color='var(--burgundy)'" onmouseout="this.style.color='inherit'">${escapeHtml(s.name)}</a><div style="font-size:.78rem;color:var(--twilight)">${escapeHtml(s.county || '')} · ★ ${s.rating}</div></div></div>`).join('\n')}
</div>
</div>
</div>
</section>

<!-- PRACTICAL INFO -->
<section>
<div class="section-inner">
<div class="practical-box">
<h3>📋 Planning Your Visit</h3>
<div class="practical-grid">
<div class="prac-item"><span class="prac-icon">🆓</span><span class="prac-num">${freeCount}</span><span class="prac-label">Free Entry</span></div>
<div class="prac-item"><span class="prac-icon">☕</span><span class="prac-num">${tearoomCount}</span><span class="prac-label">Tearoom / Café</span></div>
<div class="prac-item"><span class="prac-icon">🐕</span><span class="prac-num">${dogCount}</span><span class="prac-label">Dog Friendly</span></div>
<div class="prac-item"><span class="prac-icon">👨‍👩‍👧</span><span class="prac-num">${familyCount}</span><span class="prac-label">Family Friendly</span></div>
</div>
</div>
</div>
</section>

<!-- CTA -->
<section class="country-cta">
<h2>Explore ${escapeHtml(country.name)} on the Map</h2>
<p>See every castle, abbey, and ruin plotted across ${escapeHtml(country.name)} — filter by type, era, and more</p>
<a href="explore.html" class="btn-cta">🧭 Open the Map</a>
</section>

${FOOTER_HTML}

<script>
/* Mega menu hover */
document.querySelectorAll('.mega-country').forEach(btn=>{
btn.addEventListener('mouseenter',function(){
const c=this.dataset.country;
this.closest('.mega-menu').querySelectorAll('.mega-country').forEach(b=>b.classList.remove('active'));
this.classList.add('active');
this.closest('.mega-menu').querySelectorAll('.mega-panel').forEach(p=>p.classList.toggle('active',p.dataset.country===c));
});
});
/* Nav search */
document.getElementById('navSearch').addEventListener('keydown',function(e){
if(e.key==='Enter'){var q=this.value.trim();if(q)window.location.href='search.html?q='+encodeURIComponent(q);}
});
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
