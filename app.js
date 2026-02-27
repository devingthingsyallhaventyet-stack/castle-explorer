// ========== CONFIG ==========
const YT_API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';
const ytCache = {};

const TYPE_CONFIG = {
  castle:          { emoji: '🏰', color: '#E05A33', class: 'castle' },
  palace:          { emoji: '👑', color: '#E6A817', class: 'palace' },
  abbey:           { emoji: '⛪', color: '#2E8B57', class: 'abbey' },
  'tower house':   { emoji: '🗼', color: '#4A7FC1', class: 'tower' },
  'fortified house': { emoji: '🛡️', color: '#8B5CF6', class: 'fortified' },
};

const REGIONS = [
  { id: 'scottish-highlands', name: 'Scottish Highlands', country: 'Scotland', bounds: [[56.5, -7.5], [58.7, -3.0]], counties: ['Highland', 'Argyll and Bute', 'Moray', 'Ross and Cromarty', 'Inverness-shire', 'Sutherland', 'Caithness'] },
  { id: 'scottish-lowlands', name: 'Scottish Lowlands', country: 'Scotland', bounds: [[54.8, -5.5], [56.5, -2.0]], counties: ['Edinburgh', 'Glasgow', 'South Lanarkshire', 'East Lothian', 'West Lothian', 'Midlothian', 'Fife', 'Stirling', 'Clackmannanshire', 'Falkirk', 'Perth and Kinross', 'Angus', 'Dundee', 'Aberdeenshire', 'Aberdeen'] },
  { id: 'scottish-borders', name: 'Scottish Borders', country: 'Scotland', bounds: [[55.0, -3.5], [55.8, -2.0]], counties: ['Scottish Borders', 'Dumfries and Galloway', 'Roxburghshire'] },
  { id: 'northern-england', name: 'Northern England', country: 'England', bounds: [[54.0, -3.5], [55.8, -1.0]], counties: ['Northumberland', 'County Durham', 'Cumbria', 'Tyne and Wear', 'Durham'] },
  { id: 'yorkshire', name: 'Yorkshire', country: 'England', bounds: [[53.3, -2.5], [54.5, -0.5]], counties: ['North Yorkshire', 'West Yorkshire', 'South Yorkshire', 'East Riding of Yorkshire', 'York'] },
  { id: 'midlands', name: 'The Midlands', country: 'England', bounds: [[52.0, -3.0], [53.3, -0.5]], counties: ['Staffordshire', 'Warwickshire', 'Shropshire', 'Derbyshire', 'Nottinghamshire', 'Leicestershire', 'Northamptonshire', 'Worcestershire', 'Herefordshire', 'West Midlands', 'Lincolnshire'] },
  { id: 'south-east', name: 'South East England', country: 'England', bounds: [[50.5, -2.0], [52.0, 1.5]], counties: ['Kent', 'East Sussex', 'West Sussex', 'Surrey', 'Hampshire', 'Berkshire', 'Buckinghamshire', 'Oxfordshire', 'London', 'Essex', 'Hertfordshire'] },
  { id: 'south-west', name: 'South West England', country: 'England', bounds: [[50.0, -6.0], [52.0, -2.0]], counties: ['Cornwall', 'Devon', 'Dorset', 'Somerset', 'Wiltshire', 'Gloucestershire', 'Bristol'] },
  { id: 'east-anglia', name: 'East Anglia', country: 'England', bounds: [[51.8, 0.0], [53.0, 2.0]], counties: ['Norfolk', 'Suffolk', 'Cambridgeshire'] },
  { id: 'north-wales', name: 'North Wales', country: 'Wales', bounds: [[52.5, -5.5], [53.5, -3.0]], counties: ['Gwynedd', 'Conwy', 'Denbighshire', 'Flintshire', 'Anglesey', 'Wrexham'] },
  { id: 'south-wales', name: 'South Wales', country: 'Wales', bounds: [[51.3, -5.5], [52.5, -2.5]], counties: ['Carmarthenshire', 'Pembrokeshire', 'Ceredigion', 'Glamorgan', 'Monmouthshire', 'Powys', 'Cardiff', 'Swansea', 'Neath Port Talbot', 'Caerphilly'] },
  { id: 'ireland', name: 'Ireland', country: 'Ireland', bounds: [[51.4, -10.5], [55.4, -5.5]], counties: [] },
];

const COLLECTIONS = [
  { id: 'top-rated', name: 'Top Rated', emoji: '🏆', desc: 'Highest rated sites by visitors', filter: c => c.rating >= 4.5 },
  { id: 'hidden-gems', name: 'Hidden Gems', emoji: '💎', desc: 'Lesser-known treasures off the beaten path', filter: c => c.tags && c.tags.includes('hidden-gem') },
  { id: 'photogenic', name: 'Most Photogenic', emoji: '📸', desc: 'The most visually stunning sites', filter: c => c.tags && c.tags.includes('photogenic') },
  { id: 'free', name: 'Free to Visit', emoji: '🆓', desc: 'No admission fee required', filter: c => c.access === 'free' },
  { id: 'haunted', name: 'Haunted & Legendary', emoji: '👻', desc: 'Sites with ghost stories and legends', filter: c => c.tags && c.tags.includes('haunted') },
  { id: 'well-preserved', name: 'Best Preserved', emoji: '🏰', desc: 'Intact castles you can explore inside', filter: c => c.tags && c.tags.includes('well-preserved') },
  { id: 'romantic-ruins', name: 'Romantic Ruins', emoji: '🌿', desc: 'Atmospheric, overgrown, and moody', filter: c => c.tags && c.tags.includes('romantic-ruin') },
  { id: 'filming', name: 'As Seen On Screen', emoji: '🎬', desc: 'Famous filming locations', filter: c => c.tags && c.tags.includes('filming-location') },
];

// ========== STATE ==========
let map, markerGroup, markers = [], routePolylines = [], routePlannerMarkers = [];
let activeFilters = { country: new Set(), type: new Set(), condition: new Set() };
let placesService, geocoder, directionsService;
const placesCache = {};
let selectedCastle = null;
let nearMeCircle = null;
let nearMeLocation = null;
let nearMeCurrentRadius = 25;

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initGoogle();
  initMarkers();
  initFilters();
  initSearch();
  initUI();
});

function initMap() {
  map = L.map('map', { zoomControl: false }).setView([54.0, -4.0], 6);
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
  }).addTo(map);

  markerGroup = L.markerClusterGroup({
    maxClusterRadius: 40,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    disableClusteringAtZoom: 10,
    iconCreateFunction: function(cluster) {
      const count = cluster.getChildCount();
      const size = count < 10 ? 28 : count < 30 ? 34 : 40;
      const fontSize = count < 10 ? 12 : count < 30 ? 13 : 14;
      return L.divIcon({
        html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:#6B8F71;color:#fff;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-size:${fontSize}px;font-weight:600;box-shadow:0 2px 6px rgba(0,0,0,0.15);border:2px solid #fff;">${count}</div>`,
        className: '',
        iconSize: [size, size]
      });
    }
  }).addTo(map);
}

function initGoogle() {
  geocoder = new google.maps.Geocoder();
  directionsService = new google.maps.DirectionsService();
}

function getPinImageUrl(castle) {
  if (castle.image) return castle.image;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${castle.lat},${castle.lng}&zoom=17&size=64x64&maptype=satellite&key=AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8`;
}

function createPinHtml(castle, tc, bookmarked) {
  const cls = `map-pin map-pin-${tc.class}${bookmarked ? ' map-pin-bookmarked' : ''}`;
  const imgUrl = castle.image || '';
  if (imgUrl) {
    return `<div class="${cls}"><img src="${imgUrl}" alt="" referrerpolicy="no-referrer" onerror="this.outerHTML='<span class=\\'pin-emoji\\'>${tc.emoji}</span>'" /></div>`;
  }
  return `<div class="${cls}"><span class="pin-emoji">${tc.emoji}</span></div>`;
}

function getPinSize() {
  const zoom = map.getZoom();
  if (zoom <= 8) return 36;
  if (zoom >= 16) return 80;
  // Scale linearly from 36 at zoom 8 to 80 at zoom 16
  return Math.round(36 + (zoom - 8) * (80 - 36) / (16 - 8));
}

function initMarkers() {
  const bm = getBookmarks();
  CASTLES.forEach((c, i) => {
    const tc = getTypeConfig(c.type);
    const bookmarked = bm.includes(c.name);
    const size = getPinSize();
    const icon = L.divIcon({
      html: createPinHtml(c, tc, bookmarked),
      className: '', iconSize: [size, size], iconAnchor: [size/2, size/2]
    });
    const m = L.marker([c.lat, c.lng], { icon });
    m.castleIndex = i;
    m.on('click', () => handlePinClick(c));
    markers.push(m);
    markerGroup.addLayer(m);
  });
  initLegendCounts();

  // Resize pins on zoom
  map.on('zoomend', resizePins);
}

function resizePins() {
  const size = getPinSize();
  markers.forEach(m => {
    const icon = m.options.icon;
    const newIcon = L.divIcon({
      html: icon.options.html,
      className: '', iconSize: [size, size], iconAnchor: [size/2, size/2]
    });
    m.setIcon(newIcon);
  });
}

function handlePinClick(castle) {
  openListing(castle);
}

function updatePinImage(castleIndex, photoUrl) {
  const c = CASTLES[castleIndex];
  if (!c) return;
  const tc = getTypeConfig(c.type);
  const bm = getBookmarks();
  const bookmarked = bm.includes(c.name);
  const cls = `map-pin map-pin-${tc.class}${bookmarked ? ' map-pin-bookmarked' : ''}`;
  const size = getPinSize();
  const icon = L.divIcon({
    html: `<div class="${cls}"><img src="${photoUrl}" alt="" /></div>`,
    className: '', iconSize: [size, size], iconAnchor: [size/2, size/2]
  });
  markers[castleIndex].setIcon(icon);
}

function getTypeConfig(type) {
  return TYPE_CONFIG[type] || TYPE_CONFIG.castle;
}

// ========== FILTERS ==========
function initFilters() {
  const countries = [...new Set(CASTLES.map(c => c.country))].sort();
  const types = [...new Set(CASTLES.map(c => c.type))].sort();
  const conditions = [...new Set(CASTLES.map(c => c.condition))].sort();

  renderChips('countryFilters', countries, 'country');
  renderChips('typeFilters', types, 'type');
  renderChips('conditionFilters', conditions, 'condition');
  updateFilterCounter();
}

function renderChips(containerId, items, category) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item =>
    `<button class="filter-chip" data-category="${category}" data-value="${item}">${item}</button>`
  ).join('');
  el.addEventListener('click', e => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    const val = chip.dataset.value;
    const cat = chip.dataset.category;
    const activeClass = `active-${cat}`;
    if (activeFilters[cat].has(val)) {
      activeFilters[cat].delete(val);
      chip.classList.remove(activeClass);
    } else {
      activeFilters[cat].add(val);
      chip.classList.add(activeClass);
    }
    applyFilters();
  });
}

function getActiveLegendTypes() {
  const items = document.querySelectorAll('.legend-item.active');
  const types = new Set();
  items.forEach(item => types.add(item.dataset.type));
  return types;
}

function applyFilters() {
  markerGroup.clearLayers();
  const legendTypes = getActiveLegendTypes();
  let count = 0;
  CASTLES.forEach((c, i) => {
    const show =
      (activeFilters.country.size === 0 || activeFilters.country.has(c.country)) &&
      (activeFilters.type.size === 0 || activeFilters.type.has(c.type)) &&
      (activeFilters.condition.size === 0 || activeFilters.condition.has(c.condition)) &&
      legendTypes.has(c.type);
    if (show) { markerGroup.addLayer(markers[i]); count++; }
  });
  updateFilterCounter(count);
}

function toggleLegendType(type) {
  const item = document.querySelector(`.legend-item[data-type="${type}"]`);
  if (item) item.classList.toggle('active');
  applyFilters();
}

function initLegendCounts() {
  const counts = {};
  CASTLES.forEach(c => {
    counts[c.type] = (counts[c.type] || 0) + 1;
  });
  Object.keys(counts).forEach(type => {
    const el = document.getElementById(`legendCount-${type}`);
    if (el) el.textContent = counts[type];
  });
}

function updateFilterCounter(shown) {
  const total = CASTLES.length;
  const s = shown !== undefined ? shown : total;
  document.getElementById('filterCounter').textContent = `Showing ${s} of ${total} sites`;
}

// ========== SEARCH ==========
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.classList.remove('active'); return; }
    const matches = CASTLES.filter(c =>
      c.name.toLowerCase().includes(q) || c.county.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)
    ).slice(0, 8);
    if (matches.length === 0) { results.classList.remove('active'); return; }
    results.innerHTML = matches.map(c => {
      const tc = getTypeConfig(c.type);
      return `<div class="search-result-item" data-name="${c.name}">
        <span class="emoji">${tc.emoji}</span>
        <div class="info"><div class="name">${c.name}</div><div class="loc">${c.county}, ${c.country}</div></div>
      </div>`;
    }).join('');
    results.classList.add('active');
  });

  results.addEventListener('click', e => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    const castle = CASTLES.find(c => c.name === item.dataset.name);
    if (castle) {
      map.setView([castle.lat, castle.lng], 14);
      openSidebar(castle);
      results.classList.remove('active');
      input.value = '';
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.topbar-search')) results.classList.remove('active');
  });
}

// ========== SIDEBAR ==========
function openSidebar(castle) {
  selectedCastle = castle;
  const sidebar = document.getElementById('sidebar');
  const tc = getTypeConfig(castle.type);

  // Image
  const imgEl = document.getElementById('sidebarImage');
  if (castle.image) {
    imgEl.innerHTML = `<img src="${castle.image}" alt="${castle.name}" onerror="this.parentElement.innerHTML='🏰'" />`;
  } else {
    imgEl.innerHTML = '🏰';
  }

  document.getElementById('sidebarName').textContent = castle.name;
  document.getElementById('sidebarLocation').textContent = `${castle.county}, ${castle.country}`;
  document.getElementById('sidebarBadges').innerHTML = `
    <span class="badge badge-type">${tc.emoji} ${castle.type}</span>
    <span class="badge badge-era">${castle.era}</span>
    <span class="badge badge-condition">${castle.condition}</span>
  `;
  const fullStars = Math.floor(castle.rating);
  const halfStar = castle.rating % 1 >= 0.3;
  const starsHtml = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
  document.getElementById('sidebarRating').innerHTML = `
    <span class="stars">${starsHtml}</span>
    <span class="rating-num">${castle.rating}</span>
    <span class="review-count">(${castle.reviewCount.toLocaleString()} reviews)</span>
  `;
  document.getElementById('sidebarDesc').textContent = castle.description;

  // History section
  const historyEl = document.getElementById('sidebarHistory');
  if (castle.history) {
    const historyText = castle.history;
    const isLong = historyText.length > 400;
    const truncated = isLong ? historyText.substring(0, 400).replace(/\s+\S*$/, '') + '…' : historyText;
    historyEl.innerHTML = `<h3 class="history-title">History</h3>
      <p class="history-text"><span class="history-short">${truncated}</span>${isLong ? `<span class="history-full" style="display:none">${historyText}</span>
      <button class="review-expand history-toggle" onclick="const s=this.parentElement.querySelector('.history-short');const f=this.parentElement.querySelector('.history-full');if(f.style.display==='none'){f.style.display='inline';s.style.display='none';this.textContent='Show less';}else{f.style.display='none';s.style.display='inline';this.textContent='Read more';}">Read more</button>` : ''}</p>`;
  } else {
    historyEl.innerHTML = '';
  }
  document.getElementById('sidebarDirections').href = `https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}`;

  // Tags
  const TAG_LABELS = {
    'photogenic': '📸 Photogenic', 'hidden-gem': '💎 Hidden Gem', 'free': '🆓 Free to Visit',
    'kid-friendly': '👨‍👩‍👧‍👦 Kid-Friendly', 'haunted': '👻 Haunted', 'dramatic-ruin': '🏚️ Dramatic Ruin',
    'well-preserved': '🏰 Well Preserved', 'romantic-ruin': '🌿 Romantic Ruin', 'filming-location': '🎬 Filming Location'
  };
  const tagsEl = document.getElementById('sidebarTags');
  if (castle.tags && castle.tags.length) {
    tagsEl.innerHTML = castle.tags.map(t => `<span class="tag-pill">${TAG_LABELS[t] || t}</span>`).join('');
  } else {
    tagsEl.innerHTML = '';
  }

  // Access badge
  const accessEl = document.getElementById('sidebarAccess');
  if (castle.access) {
    const accessMap = {
      'free': { label: 'Free to visit', cls: 'access-free' },
      'paid': { label: 'Paid admission', cls: 'access-paid' },
      'private': { label: 'Private property', cls: 'access-private' },
      'exterior-only': { label: 'Exterior viewing only', cls: 'access-exterior' }
    };
    const a = accessMap[castle.access] || { label: castle.access, cls: '' };
    accessEl.innerHTML = `<span class="access-badge ${a.cls}">${a.label}</span>`;
  } else {
    accessEl.innerHTML = '';
  }

  // Nearby sites (within 30km)
  const nearbyEl = document.getElementById('sidebarNearby');
  const nearbySites = CASTLES
    .filter(c => c.name !== castle.name)
    .map(c => ({ ...c, dist: haversine(castle.lat, castle.lng, c.lat, c.lng) }))
    .filter(c => c.dist <= 30000)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 5);
  if (nearbySites.length > 0) {
    nearbyEl.innerHTML = `<h3>Nearby Sites</h3>` + nearbySites.map(c => {
      const tc2 = getTypeConfig(c.type);
      const distKm = (c.dist / 1000).toFixed(1);
      const imgTag = c.image ? `<img class="nearby-img" src="${c.image}" referrerpolicy="no-referrer" onerror="this.outerHTML='<span style=\\'font-size:24px\\'>${tc2.emoji}</span>'" />` : `<span style="font-size:24px">${tc2.emoji}</span>`;
      const safeName = c.name.replace(/'/g, "\\'");
      return `<div class="nearby-card" onclick="var cs=CASTLES.find(x=>x.name==='${safeName}'); if(cs) openSidebar(cs);">
        ${imgTag}
        <div class="nearby-info">
          <div class="nearby-name">${c.name}</div>
          <div class="nearby-meta">${tc2.emoji} ${c.type} · ${distKm} km away · ★ ${c.rating}</div>
        </div>
      </div>`;
    }).join('');
  } else {
    nearbyEl.innerHTML = '';
  }

  // Reset Google sections
  document.getElementById('sidebarGoogle').innerHTML = '';
  document.getElementById('sidebarPhotos').innerHTML = '';
  document.getElementById('sidebarHours').innerHTML = '';
  document.getElementById('sidebarReviews').innerHTML = '';

  // Set favorite button state
  const faved = isBookmarked(castle.name);
  const favBtn = document.getElementById('sidebarBookmark');
  favBtn.classList.toggle('bookmarked', faved);
  favBtn.innerHTML = faved ? '<span class="action-icon">★</span><span class="action-label">Saved</span>' : '<span class="action-icon">☆</span><span class="action-label">Save</span>';

  sidebar.classList.add('active');
  document.getElementById('overlayBackdrop').classList.add('active');

  // Google Places lookup
  lookupGooglePlaces(castle);

  // YouTube videos
  document.getElementById('sidebarVideos').innerHTML = '';
  lookupYouTube(castle);
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('overlayBackdrop').classList.remove('active');
  selectedCastle = null;
}

async function lookupGooglePlaces(castle) {
  const cacheKey = castle.name;
  if (placesCache[cacheKey]) {
    renderGoogleData(placesCache[cacheKey]);
    return;
  }

  try {
    const { Place } = await google.maps.importLibrary('places');
    const request = {
      textQuery: `${castle.name} ${castle.county} ${castle.country}`,
      fields: ['displayName', 'rating', 'userRatingCount', 'photos', 'regularOpeningHours', 'googleMapsURI', 'reviews'],
      locationBias: { lat: castle.lat, lng: castle.lng },
      maxResultCount: 1
    };

    const { places } = await Place.searchByText(request);
    if (places && places.length > 0) {
      const place = places[0];
      // Fetch reviews separately if not included
      if (!place.reviews || place.reviews.length === 0) {
        try {
          await place.fetchFields({ fields: ['reviews'] });
        } catch (e) { console.warn('Review fetch failed:', e); }
      }
      placesCache[cacheKey] = place;
      if (selectedCastle && selectedCastle.name === castle.name) renderGoogleData(place);
    }
  } catch (e) {
    console.warn('Places lookup failed:', e);
  }
}

function renderGoogleData(place) {
  // Build lightbox photos array from ALL photos
  lightboxPhotos = [];
  if (place.photos && place.photos.length > 0) {
    place.photos.slice(0, 10).forEach(p => {
      const fullUrl = p.getURI ? p.getURI({ maxWidth: 1200, maxHeight: 900 }) : (p.getUrl ? p.getUrl({ maxWidth: 1200, maxHeight: 900 }) : '');
      if (fullUrl) lightboxPhotos.push(fullUrl);
    });
  }

  // Banner gallery — swipeable through all photos
  if (place.photos && place.photos.length > 0) {
    const imgEl = document.getElementById('sidebarImage');
    const galleryHtml = place.photos.slice(0, 10).map((p, idx) => {
      const url = p.getURI ? p.getURI({ maxWidth: 800, maxHeight: 400 }) : (p.getUrl ? p.getUrl({ maxWidth: 800, maxHeight: 400 }) : '');
      return url ? `<img src="${url}" alt="Photo ${idx + 1}" onclick="openLightbox(${idx})" />` : '';
    }).filter(Boolean).join('');
    const count = Math.min(place.photos.length, 10);
    imgEl.innerHTML = `<div class="banner-gallery">${galleryHtml}</div>` +
      (count > 1 ? `<div class="banner-counter">1 / ${count}</div>` : '');
    // Track scroll for counter
    const gallery = imgEl.querySelector('.banner-gallery');
    if (gallery && count > 1) {
      gallery.addEventListener('scroll', () => {
        const scrollLeft = gallery.scrollLeft;
        const width = gallery.clientWidth;
        const current = Math.round(scrollLeft / width) + 1;
        const counter = imgEl.querySelector('.banner-counter');
        if (counter) counter.textContent = `${current} / ${count}`;
      });
    }
  }

  // Update map pin with Google photo
  if (place.photos && place.photos.length > 0 && selectedCastle) {
    const pinPhotoUrl = place.photos[0].getURI ? place.photos[0].getURI({ maxWidth: 64, maxHeight: 64 }) : (place.photos[0].getUrl ? place.photos[0].getUrl({ maxWidth: 64, maxHeight: 64 }) : '');
    if (pinPhotoUrl) {
      const idx = CASTLES.findIndex(c => c.name === selectedCastle.name);
      if (idx >= 0) updatePinImage(idx, pinPhotoUrl);
    }
  }

  // Google rating — skip, we show it in the reviews section instead
  document.getElementById('sidebarGoogle').innerHTML = '';

  // Photo gallery below description — hide since we now show all in banner
  document.getElementById('sidebarPhotos').innerHTML = '';

  // Hours
  if (place.regularOpeningHours && place.regularOpeningHours.weekdayDescriptions) {
    document.getElementById('sidebarHours').innerHTML =
      `<strong>Opening Hours</strong><br/>` + place.regularOpeningHours.weekdayDescriptions.join('<br/>');
  }

  // Reviews — show actual review cards + link to all
  if (place.reviews && place.reviews.length > 0) {
    const reviewCardsHtml = place.reviews.slice(0, 5).map(r => {
      const stars = '★'.repeat(Math.floor(r.rating || 0)) + '☆'.repeat(5 - Math.floor(r.rating || 0));
      const author = r.authorAttribution ? r.authorAttribution.displayName : 'Anonymous';
      const timeDesc = r.relativePublishTimeDescription || '';
      const text = r.text ? (typeof r.text === 'string' ? r.text : (r.text.text || '')) : '';
      const needsTruncate = text.length > 200;
      const truncated = needsTruncate ? text.substring(0, 200) + '…' : text;
      const expandHtml = needsTruncate ? `<span class="review-text-full" style="display:none">${text}</span><button class="review-expand" onclick="this.previousElementSibling.style.display='inline';this.previousElementSibling.previousElementSibling.style.display='none';this.textContent=this.textContent==='Read more'?'Show less':'Read more';if(this.textContent==='Read more'){this.previousElementSibling.style.display='none';this.previousElementSibling.previousElementSibling.style.display='inline';}">Read more</button>` : '';
      return `<div class="review-card">
        <div class="review-header">
          <strong class="review-author">${author}</strong>
          <span class="review-time">${timeDesc}</span>
        </div>
        <div class="review-stars">${stars}</div>
        <p class="review-text"><span class="review-text-short">${truncated}</span>${expandHtml}</p>
      </div>`;
    }).join('');
    const reviewsUrl = place.googleMapsURI || '#';
    document.getElementById('sidebarReviews').innerHTML =
      `<h3 class="reviews-title">Reviews</h3>` +
      reviewCardsHtml +
      `<a class="reviews-link" href="${reviewsUrl}" target="_blank">Read all reviews on Google Maps →</a>`;
  }

  // Google Maps link
  if (place.googleMapsURI) {
    document.getElementById('sidebarDirections').href = place.googleMapsURI;
  }
}

// ========== YOUTUBE ==========
async function lookupYouTube(castle) {
  const cacheKey = castle.name;
  if (ytCache[cacheKey]) {
    renderYouTubeData(ytCache[cacheKey], castle);
    return;
  }
  try {
    const q = encodeURIComponent(`${castle.name} ${castle.country} castle`);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&maxResults=3&videoDuration=medium&relevanceLanguage=en&key=${YT_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) { console.warn('YouTube API error:', res.status); return; }
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      ytCache[cacheKey] = data.items;
      if (selectedCastle && selectedCastle.name === castle.name) renderYouTubeData(data.items, castle);
    }
  } catch (e) { console.warn('YouTube lookup failed:', e); }
}

function renderYouTubeData(items, castle) {
  const el = document.getElementById('sidebarVideos');
  if (!items || items.length === 0) { el.innerHTML = ''; return; }
  const playIcon = `<svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg>`;
  const cardsHtml = items.slice(0, 3).map(item => {
    const vid = item.id.videoId;
    const title = item.snippet.title.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
    const channel = item.snippet.channelTitle;
    const thumb = item.snippet.thumbnails.medium ? item.snippet.thumbnails.medium.url : item.snippet.thumbnails.default.url;
    return `<div class="video-card" onclick="this.outerHTML='<div class=\\'video-embed-wrap\\'><iframe src=\\'https://www.youtube.com/embed/${vid}?autoplay=1\\' allow=\\'autoplay; encrypted-media\\' allowfullscreen></iframe></div>'">
      <div class="video-thumb-wrap">
        <img src="${thumb}" alt="${title}" loading="lazy" />
        <div class="play-overlay">${playIcon}</div>
      </div>
      <div class="video-info">
        <div class="video-title">${title}</div>
        <div class="video-channel">${channel}</div>
      </div>
    </div>`;
  }).join('');
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(castle.name + ' castle')}`;
  el.innerHTML = `<h3 class="videos-title">Videos</h3>${cardsHtml}<a class="videos-more" href="${searchUrl}" target="_blank">More videos on YouTube →</a>`;
}

// ========== LISTING OVERLAY (Zillow-style) ==========
let listingSheetExpanded = false;
let listingCurrentY = 0;
let listingSheetPeekY = 0;
let listingSheetFullY = 0;
let listingDragging = false;

function listingSetExpanded(val) {
  listingSheetExpanded = val;
  const overlay = document.getElementById('listingOverlay');
  if (val) {
    overlay.classList.add('expanded');
  } else {
    overlay.classList.remove('expanded');
  }
}
let listingDragTarget = null;
let listingStartTouchY = 0;
let listingStartSheetY = 0;
let listingCastle = null;

function openListing(castle) {
  listingCastle = castle;
  selectedCastle = castle;
  const overlay = document.getElementById('listingOverlay');
  const tc = getTypeConfig(castle.type);
  const API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

  // Access info
  const accessMap = {
    'free': { emoji: '🏞️', label: 'Free to Visit', sublabel: 'Open access — no admission fee' },
    'paid': { emoji: '🎟️', label: 'Paid Admission', sublabel: 'Book online for discounted entry' },
    'private': { emoji: '🔒', label: 'Private Property', sublabel: 'Not open to the public' },
    'exterior-only': { emoji: '👁️', label: 'Exterior Only', sublabel: 'Viewable from outside only' }
  };
  const accessInfo = accessMap[castle.access] || { emoji: '❓', label: castle.access || 'Unknown', sublabel: '' };

  // Extract year from era
  const eraYear = castle.era ? castle.era.match(/\d{3,4}/) : null;
  const eraDisplay = eraYear ? eraYear[0] : (castle.era || '—');

  // Key stats access display
  const accessStatLabel = castle.access === 'free' ? 'Free' : castle.access === 'paid' ? 'Paid' : castle.access === 'private' ? 'Private' : castle.access === 'exterior-only' ? 'Exterior' : '—';

  // Tags
  const TAG_LABELS = {
    'photogenic': '📸 Photogenic', 'hidden-gem': '💎 Hidden Gem', 'free': '🆓 Free',
    'kid-friendly': '👨‍👩‍👧‍👦 Kid-Friendly', 'haunted': '👻 Haunted', 'dramatic-ruin': '🏚️ Dramatic Ruin',
    'well-preserved': '🏰 Well Preserved', 'romantic-ruin': '🌿 Romantic Ruin', 'filming-location': '🎬 Filming Location'
  };
  const tagsHtml = (castle.tags || []).map(t => `<span class="listing-tag">${TAG_LABELS[t] || t}</span>`).join('');

  // Rich data lookup
  const richData = (typeof RICH_SITE_DATA !== 'undefined') ? RICH_SITE_DATA[castle.name] : null;

  // Terrain chips
  let terrainChipsHtml, terrainNote;
  if (richData && richData.terrain) {
    terrainChipsHtml = richData.terrain.chips.map(c => `<div class="listing-terrain-chip ${c.cls}"><span class="listing-chip-icon">${c.icon}</span> ${c.text}</div>`).join('');
    terrainNote = richData.terrain.note ? `ℹ️ ${richData.terrain.note}` : '';
  } else {
    const terrainChips = [];
    const cond = (castle.condition || '').toLowerCase();
    if (cond === 'intact') {
      terrainChips.push({ icon: '♿', text: 'Wheelchair Likely', cls: 'green' });
      terrainChips.push({ icon: '🚶', text: 'Mostly Paved', cls: 'green' });
    } else if (cond === 'ruin') {
      terrainChips.push({ icon: '⚠️', text: 'Uneven Ground', cls: 'amber' });
      terrainChips.push({ icon: '👟', text: 'Sturdy Footwear', cls: 'amber' });
    } else if (cond === 'partial ruin') {
      terrainChips.push({ icon: '🚶', text: 'Mostly Walkable', cls: 'green' });
      terrainChips.push({ icon: '⚠️', text: 'Some Uneven Areas', cls: 'amber' });
    }
    if (castle.tags && castle.tags.includes('kid-friendly')) {
      terrainChips.push({ icon: '👶', text: 'Family Friendly', cls: 'green' });
    }
    if (castle.access === 'free') {
      terrainChips.push({ icon: '🏞️', text: 'Open Access', cls: 'green' });
    }
    terrainChipsHtml = terrainChips.map(c => `<div class="listing-terrain-chip ${c.cls}"><span class="listing-chip-icon">${c.icon}</span> ${c.text}</div>`).join('');
    terrainNote = '';
    const cond2 = (castle.condition || '').toLowerCase();
    if (cond2 === 'intact') terrainNote = 'ℹ️ This site is well-maintained and largely accessible. Paths are generally paved and suitable for most visitors.';
    else if (cond2 === 'ruin') terrainNote = 'ℹ️ As a ruin, expect rough terrain, loose stones, and uneven surfaces. Suitable footwear recommended. Not all areas may be accessible.';
    else if (cond2 === 'partial ruin') terrainNote = 'ℹ️ Parts of this site are well-maintained while other areas are ruined. Expect a mix of paved paths and rougher terrain.';
  }

  // Getting There HTML
  const gettingThereHtml = (richData && richData.gettingThere) ? richData.gettingThere.map(t => `
    <div class="listing-transport-card">
      <div class="listing-transport-icon">${t.icon}</div>
      <div>
        <div class="listing-transport-name">${t.name}</div>
        <div class="listing-transport-detail">${t.detail}</div>
        ${t.link ? `<a class="listing-transport-link" href="${t.link}" target="_blank">${t.linkText || 'Get directions →'}</a>` : ''}
      </div>
    </div>
  `).join('') : `<div class="listing-transport-card">
    <div class="listing-transport-icon">🗺️</div>
    <div>
      <div class="listing-transport-name">Directions</div>
      <div class="listing-transport-detail">Navigate to ${castle.name} via Google Maps.</div>
      <a class="listing-transport-link" href="https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}" target="_blank">Get directions →</a>
    </div>
  </div>`;

  // Events HTML
  const eventsHtml = (richData && richData.events && richData.events.length > 0) ? richData.events.map(e => `
    <div class="listing-event-card">
      <div class="listing-event-date-box">
        <div class="listing-event-month">${e.month}</div>
        <div class="listing-event-day">${e.day}</div>
      </div>
      <div class="listing-event-info">
        <div class="listing-event-name">${e.name}</div>
        <div class="listing-event-desc">${e.desc}</div>
        <div class="listing-event-meta">
          <span class="listing-event-badge ${e.badge}">${e.badgeText}</span>
          ${e.meta}
        </div>
      </div>
    </div>
  `).join('') : '<div style="color:#8a8a8a;font-size:13px;">No upcoming events listed.</div>';

  // Nearby sites
  const nearbySites = CASTLES
    .filter(c => c.name !== castle.name)
    .map(c => ({ ...c, dist: haversine(castle.lat, castle.lng, c.lat, c.lng) }))
    .filter(c => c.dist <= 30000)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 5);
  const nearbyHtml = nearbySites.map(c => {
    const tc2 = getTypeConfig(c.type);
    const distKm = (c.dist / 1000).toFixed(1);
    const safeName = c.name.replace(/'/g, "\\'");
    return `<div class="listing-nearby-card" onclick="var cs=CASTLES.find(x=>x.name==='${safeName}'); if(cs){closeListing();setTimeout(()=>openListing(cs),100);}">
      <div class="listing-nearby-card-img">${tc2.emoji}</div>
      <div class="listing-nearby-card-info">
        <div class="listing-nearby-card-name">${c.name}</div>
        <div class="listing-nearby-card-meta">★ ${c.rating} · ${distKm} km</div>
      </div>
    </div>`;
  }).join('');

  // Bookmark state
  const faved = isBookmarked(castle.name);
  const favText = faved ? '★ Saved' : '☆ Save';
  const favOverlayText = faved ? '❤' : '♡';

  // Rating
  const fullStars = Math.floor(castle.rating);
  const starsStr = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);

  overlay.innerHTML = `
    <!-- PHOTO LAYER -->
    <div class="listing-photo-layer" id="listingPhotoLayer">
      <div class="listing-photo-layer-inner">
        <div class="listing-gallery-item listing-photo"><img id="listingImg1" src="${castle.image || ''}" /><div class="listing-type-badge">${tc.emoji} ${castle.type}</div></div>
        <div class="listing-gallery-item listing-photo"><img id="listingImg2" src="" /></div>
        <div class="listing-gallery-item listing-photo"><img id="listingImg3" src="" /></div>
        <div class="listing-gallery-item listing-photo"><img id="listingImg4" src="" /></div>
        <!-- Street View + Satellite -->
        <div class="listing-gallery-item listing-street-view">
          <div class="listing-sv-panel" onclick="window.open('https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${castle.lat},${castle.lng}','_blank')">
            <img src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${castle.lat},${castle.lng}&key=${API_KEY}" />
            <div class="listing-sv-label">📍 Look Around</div>
          </div>
          <div class="listing-sv-panel">
            <iframe src="https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${castle.lat},${castle.lng}&zoom=15&maptype=satellite" loading="lazy"></iframe>
          </div>
        </div>
        <!-- Map -->
        <div class="listing-gallery-item listing-map-tile">
          <iframe src="https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(castle.name)}&center=${castle.lat},${castle.lng}&zoom=14" loading="lazy"></iframe>
          <div class="listing-map-badge">📍 ${castle.county}, ${castle.country}</div>
        </div>
        <!-- More photos loaded by Google Places -->
        <div class="listing-gallery-item listing-photo" id="listingExtraPhoto5"></div>
        <div class="listing-gallery-item listing-photo" id="listingExtraPhoto6"></div>
        <div class="listing-photo-spacer"></div>
      </div>
    </div>

    <!-- GALLERY OVERLAY -->
    <div class="listing-gallery-overlay" id="listingGalleryOverlay">
      <button class="listing-close-btn" onclick="closeListing()">‹</button>
      <div class="listing-overlay-actions">
        <button id="listingFavOverlay" onclick="listingToggleFav()">${favOverlayText}</button>
      </div>
    </div>

    <!-- BOTTOM SHEET -->
    <div class="listing-bottom-sheet" id="listingSheet">
      <div class="listing-sheet-handle-wrap" id="listingSheetPeek">
        <div class="listing-sheet-handle"></div>
      </div>
      <div class="listing-sheet-scroll" id="listingSheetScroll">
        <div class="listing-sheet-peek">
          <h1 class="listing-name">${castle.name}</h1>
          <div class="listing-location">${castle.county}, ${castle.country} · <a href="https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}" target="_blank">Get directions</a></div>
          <div class="listing-key-stats">
            <div class="listing-stat-item"><div class="listing-stat-value">${tc.emoji}</div><div class="listing-stat-label">${castle.type}</div></div>
            <div class="listing-stat-item"><div class="listing-stat-value">${eraDisplay}</div><div class="listing-stat-label">Built</div></div>
            <div class="listing-stat-item"><div class="listing-stat-value">${castle.condition || '—'}</div><div class="listing-stat-label">Condition</div></div>
            <div class="listing-stat-item"><div class="listing-stat-value">${accessStatLabel}</div><div class="listing-stat-label">Access</div></div>
          </div>
          <div class="listing-peek-buttons">
            <button class="listing-btn listing-btn-secondary" id="listingFavBtn" onclick="listingToggleFav()">${favText}</button>
            <button class="listing-btn listing-btn-primary" onclick="listingAddToRoute()">🚗 Add to Route</button>
          </div>
        </div>

        <div class="listing-divider"></div>

        <div class="listing-rating-bar" onclick="listingScrollToReviews()">
          <div class="listing-rating-big">${castle.rating}</div>
          <div>
            <div class="listing-rating-stars">${starsStr}</div>
            <div class="listing-rating-count">${castle.reviewCount.toLocaleString()} Google reviews</div>
          </div>
        </div>

        ${tagsHtml ? `<div class="listing-tags-row">${tagsHtml}</div>` : ''}

        <div class="listing-access-bar">
          <span class="listing-access-icon">${accessInfo.emoji}</span>
          <div>
            <div class="listing-access-label">${accessInfo.label}</div>
            <div class="listing-access-sublabel">${accessInfo.sublabel}</div>
          </div>
        </div>

        <div class="listing-share-bar">
          <button class="listing-btn listing-btn-share" onclick="listingShare()">📤 Share</button>
        </div>

        <div class="listing-links-section" id="listingLinksSection" style="display:none"></div>

        <div class="listing-divider"></div>

        <h2 class="listing-section-title">About</h2>
        <div class="listing-description">${castle.description || ''}${castle.history ? '<br><br>' + castle.history : ''}</div>

        <div class="listing-divider"></div>

        <h2 class="listing-section-title">Getting There</h2>
        <div>${gettingThereHtml}</div>

        <div class="listing-divider"></div>

        <h2 class="listing-section-title">Terrain & Accessibility</h2>
        <div class="listing-terrain-grid">${terrainChipsHtml}</div>
        ${terrainNote ? `<div class="listing-terrain-note">${terrainNote}</div>` : ''}

        <div class="listing-divider"></div>

        <h2 class="listing-section-title">Upcoming Events</h2>
        <div>${eventsHtml}</div>

        <div class="listing-divider"></div>

        <h2 class="listing-section-title">Opening Hours</h2>
        <div class="listing-hours-grid" id="listingHoursGrid">Loading...</div>

        <div class="listing-divider"></div>

        <h2 class="listing-section-title">Videos</h2>
        <div id="listingVideoCards">Loading...</div>

        <div class="listing-divider"></div>

        <h2 class="listing-section-title" id="listingReviewsTitle">Reviews</h2>
        <div id="listingReviewCards">Loading...</div>

        <div class="listing-divider"></div>

        <h2 class="listing-section-title">Nearby Sites</h2>
        <div class="listing-nearby-scroll">${nearbyHtml || '<div style="color:#8a8a8a;font-size:13px;">No nearby sites within 30 km</div>'}</div>

        <div style="height: 60px;"></div>
      </div>
    </div>

    <div class="listing-share-toast" id="listingShareToast">Link copied!</div>
  `;

  overlay.classList.add('active');
  closeQuickView();

  // Init bottom sheet drag
  requestAnimationFrame(() => initListingSheet());

  // Load Google Places data
  listingLoadGoogleData(castle);
  // Load YouTube
  listingLoadYouTube(castle);
}

function closeListing() {
  const overlay = document.getElementById('listingOverlay');
  overlay.classList.remove('active');
  overlay.innerHTML = '';
  listingCastle = null;
  listingSetExpanded(false);
  // Clean up photo layer scroll listener
  if (listingPhotoLayerCleanup) { listingPhotoLayerCleanup(); listingPhotoLayerCleanup = null; }
}
let listingPhotoLayerCleanup = null;

function initListingSheet() {
  const sheet = document.getElementById('listingSheet');
  const sheetPeek = document.getElementById('listingSheetPeek');
  const sheetScroll = document.getElementById('listingSheetScroll');
  const photoLayer = document.getElementById('listingPhotoLayer');
  if (!sheet) return;

  const peekContent = sheet.querySelector('.listing-sheet-peek');
  const peekHeight = sheetPeek.offsetHeight + (peekContent ? peekContent.offsetHeight : 200) + 8;
  const vh = window.innerHeight;
  listingSheetPeekY = vh - peekHeight;
  listingSheetFullY = vh * 0.05;
  listingCurrentY = listingSheetPeekY;
  listingSetExpanded(false);
  sheet.style.height = `${vh - listingSheetFullY}px`;
  sheet.style.transform = `translateY(${listingCurrentY}px)`;

  // Desktop: override for centered sheet
  if (window.innerWidth >= 768) {
    sheet.style.transform = `translateX(-50%) translateY(${listingCurrentY}px)`;
  }

  function setSheetTransform(y) {
    if (window.innerWidth >= 768) {
      sheet.style.transform = `translateX(-50%) translateY(${y}px)`;
    } else {
      sheet.style.transform = `translateY(${y}px)`;
    }
  }

  function expandSheet() {
    listingSetExpanded(true);
    listingCurrentY = listingSheetFullY;
    setSheetTransform(listingCurrentY);
    sheetScroll.classList.add('scrollable');
    if (photoLayer) photoLayer.style.opacity = '0.6';
  }

  function collapseSheet() {
    listingSetExpanded(false);
    listingCurrentY = listingSheetPeekY;
    sheetScroll.scrollTop = 0;
    sheetScroll.classList.remove('scrollable');
    setSheetTransform(listingCurrentY);
    if (photoLayer) photoLayer.style.opacity = '1';
  }

  // Drag from handle
  sheetPeek.addEventListener('touchstart', onDragStart, { passive: true });
  sheetPeek.addEventListener('mousedown', onDragStart);

  // Drag from scroll area when collapsed
  sheetScroll.addEventListener('touchstart', (e) => {
    if (!listingSheetExpanded) onDragStart(e);
  }, { passive: true });

  function onDragStart(e) {
    const touch = e.touches ? e.touches[0] : e;
    listingStartTouchY = touch.clientY;
    listingStartSheetY = listingCurrentY;
    listingDragging = true;
    sheet.classList.add('dragging');
    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
    document.addEventListener('mouseup', onDragEnd);
  }

  function onDragMove(e) {
    if (!listingDragging) return;
    e.preventDefault();
    const touch = e.touches ? e.touches[0] : e;
    const dy = touch.clientY - listingStartTouchY;
    let newY = listingStartSheetY + dy;
    newY = Math.max(listingSheetFullY, Math.min(listingSheetPeekY, newY));
    listingCurrentY = newY;
    setSheetTransform(listingCurrentY);
    // Fade photo layer based on drag position
    if (photoLayer) {
      const progress = 1 - (listingCurrentY - listingSheetFullY) / (listingSheetPeekY - listingSheetFullY);
      photoLayer.style.opacity = String(1 - progress * 0.4);
    }
  }

  function onDragEnd() {
    if (!listingDragging) return;
    listingDragging = false;
    sheet.classList.remove('dragging');
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
    document.removeEventListener('mouseup', onDragEnd);

    const threshold = listingSheetPeekY - (listingSheetPeekY - listingSheetFullY) * 0.15;
    if (listingCurrentY < threshold) {
      expandSheet();
    } else {
      collapseSheet();
    }
  }

  // Pull-down to collapse when expanded and at scroll top
  sheetScroll.addEventListener('touchstart', (e) => {
    if (listingSheetExpanded && sheetScroll.scrollTop <= 0) {
      listingDragTarget = 'scroll';
      listingStartTouchY = e.touches[0].clientY;
      listingStartSheetY = listingCurrentY;
    }
  }, { passive: true });

  sheetScroll.addEventListener('touchmove', (e) => {
    if (listingDragTarget === 'scroll' && sheetScroll.scrollTop <= 0) {
      const dy = e.touches[0].clientY - listingStartTouchY;
      if (dy > 0) {
        e.preventDefault();
        let newY = listingStartSheetY + dy;
        newY = Math.max(listingSheetFullY, Math.min(listingSheetPeekY, newY));
        listingCurrentY = newY;
        sheet.classList.add('dragging');
        setSheetTransform(listingCurrentY);
        if (photoLayer) {
          const progress = 1 - (listingCurrentY - listingSheetFullY) / (listingSheetPeekY - listingSheetFullY);
          photoLayer.style.opacity = String(1 - progress * 0.4);
        }
      }
    }
  }, { passive: false });

  sheetScroll.addEventListener('touchend', () => {
    if (listingDragTarget === 'scroll') {
      listingDragTarget = null;
      sheet.classList.remove('dragging');
      const collapseThreshold = listingSheetFullY + (listingSheetPeekY - listingSheetFullY) * 0.15;
      if (listingCurrentY < collapseThreshold) {
        expandSheet();
      } else {
        collapseSheet();
      }
    }
  });

  // Tap peek area to expand (not buttons)
  const peekTapArea = sheet.querySelector('.listing-sheet-peek');
  if (peekTapArea) {
    peekTapArea.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) return;
      if (!listingSheetExpanded) {
        expandSheet();
      }
    });
  }

  // Auto-expand when photo layer scroll reaches bottom + dismiss on overscroll top
  if (photoLayer) {
    let lastPhotoScrollTop = 0;
    let pullDownStart = null;
    const onPhotoScroll = () => {
      const scrollTop = photoLayer.scrollTop;
      const scrollMax = photoLayer.scrollHeight - photoLayer.clientHeight;

      // Auto-expand when scrolled to bottom
      if (scrollTop >= scrollMax - 10 && !listingSheetExpanded) {
        expandSheet();
      }

      // Auto-collapse when scrolling back up while expanded
      if (listingSheetExpanded && scrollTop < lastPhotoScrollTop && lastPhotoScrollTop - scrollTop > 80) {
        collapseSheet();
      }

      lastPhotoScrollTop = scrollTop;
    };

    // Pull-down-to-dismiss when at top of photo layer
    let photoTouchStartY = 0;
    const onPhotoTouchStart = (e) => {
      if (photoLayer.scrollTop <= 0) {
        photoTouchStartY = e.touches[0].clientY;
      } else {
        photoTouchStartY = 0;
      }
    };
    const onPhotoTouchMove = (e) => {
      if (photoTouchStartY && photoLayer.scrollTop <= 0) {
        const dy = e.touches[0].clientY - photoTouchStartY;
        if (dy > 120) {
          closeListing();
          photoTouchStartY = 0;
        }
      }
    };

    photoLayer.addEventListener('scroll', onPhotoScroll, { passive: true });
    photoLayer.addEventListener('touchstart', onPhotoTouchStart, { passive: true });
    photoLayer.addEventListener('touchmove', onPhotoTouchMove, { passive: true });
    listingPhotoLayerCleanup = () => {
      photoLayer.removeEventListener('scroll', onPhotoScroll);
      photoLayer.removeEventListener('touchstart', onPhotoTouchStart);
      photoLayer.removeEventListener('touchmove', onPhotoTouchMove);
    };
  }
}

async function listingLoadGoogleData(castle) {
  const cacheKey = castle.name;
  if (placesCache[cacheKey]) {
    listingRenderGoogleData(placesCache[cacheKey], castle);
    return;
  }
  try {
    const { Place } = await google.maps.importLibrary('places');
    const { places } = await Place.searchByText({
      textQuery: `${castle.name} ${castle.county} ${castle.country}`,
      fields: ['displayName','rating','userRatingCount','photos','regularOpeningHours','googleMapsURI','reviews','websiteURI'],
      locationBias: { lat: castle.lat, lng: castle.lng },
      maxResultCount: 1
    });
    if (places && places.length > 0) {
      const p = places[0];
      // Always try to fetch reviews - initial searchByText often omits them
      try {
        await p.fetchFields({ fields: ['reviews', 'regularOpeningHours', 'websiteURI', 'googleMapsURI'] });
      } catch(e) { console.warn('fetchFields failed:', e); }
      placesCache[cacheKey] = p;
      if (listingCastle && listingCastle.name === castle.name) listingRenderGoogleData(p, castle);
    }
  } catch(e) { console.warn('Listing Places lookup failed:', e); }
}

function listingRenderGoogleData(place, castle) {
  // Photos — populate photo layer images
  if (place.photos && place.photos.length > 0) {
    const photos = place.photos.slice(0, 8);
    // Populate listingImg1-4
    for (let i = 0; i < Math.min(photos.length, 4); i++) {
      const url = photos[i].getURI ? photos[i].getURI({ maxWidth: 1200, maxHeight: 900 }) : '';
      const imgEl = document.getElementById(`listingImg${i + 1}`);
      if (imgEl && url) imgEl.src = url;
    }
    // Extra photos in the photo layer
    for (let i = 4; i < Math.min(photos.length, 6); i++) {
      const url = photos[i].getURI ? photos[i].getURI({ maxWidth: 1200, maxHeight: 900 }) : '';
      const container = document.getElementById(`listingExtraPhoto${i + 1}`);
      if (container && url) {
        container.innerHTML = `<img src="${url}" alt="Photo ${i + 1}" />`;
      }
    }
    // Update map pin
    const idx = CASTLES.findIndex(c => c.name === castle.name);
    if (idx >= 0) {
      const pinUrl = photos[0].getURI ? photos[0].getURI({ maxWidth: 64, maxHeight: 64 }) : '';
      if (pinUrl) updatePinImage(idx, pinUrl);
    }
  }

  // Hours
  const hoursEl = document.getElementById('listingHoursGrid');
  if (hoursEl) {
    if (place.regularOpeningHours && place.regularOpeningHours.weekdayDescriptions) {
      hoursEl.innerHTML = place.regularOpeningHours.weekdayDescriptions.map(d => {
        const p = d.split(': ');
        return `<div class="listing-hours-day">${p[0]}</div><div class="listing-hours-time">${p[1]||''}</div>`;
      }).join('');
    } else {
      hoursEl.innerHTML = '<div style="color:#8a8a8a;font-size:13px;">Hours not available</div>';
    }
  }

  // Reviews
  const reviewsEl = document.getElementById('listingReviewCards');
  if (reviewsEl) {
    if (place.reviews && place.reviews.length > 0) {
      reviewsEl.innerHTML = place.reviews.slice(0, 5).map(r => {
        const stars = '★'.repeat(Math.floor(r.rating||0)) + '☆'.repeat(5-Math.floor(r.rating||0));
        const author = r.authorAttribution ? r.authorAttribution.displayName : 'Anonymous';
        const time = r.relativePublishTimeDescription || '';
        const text = r.text ? (typeof r.text==='string'?r.text:(r.text.text||'')) : '';
        return `<div class="listing-review-card"><div class="listing-review-header"><div class="listing-review-avatar">${author.charAt(0)}</div><div class="listing-review-meta"><div class="listing-review-author">${author}</div><div class="listing-review-date">${time}</div></div></div><div class="listing-review-stars-sm">${stars}</div><div class="listing-review-body">${text.length>250?text.substring(0,250)+'…':text}</div></div>`;
      }).join('') + `<a class="listing-reviews-all-link" href="${place.googleMapsURI||'#'}" target="_blank">Read all ${(place.userRatingCount||castle.reviewCount||0).toLocaleString()} reviews</a>`;
    } else {
      const gmapsUrl = place.googleMapsURI || `https://www.google.com/maps/search/${encodeURIComponent(castle.name + ' ' + castle.county)}`;
      reviewsEl.innerHTML = `<a class="listing-reviews-all-link" href="${gmapsUrl}" target="_blank">Read ${castle.reviewCount ? castle.reviewCount.toLocaleString() + ' reviews' : 'reviews'} on Google Maps →</a>`;
    }
  }

  // Links
  const linksEl = document.getElementById('listingLinksSection');
  if (linksEl) {
    const links = [];
    if (place.websiteURI) {
      const domain = place.websiteURI.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
      links.push({ icon: '🌐', label: 'Official Website', url: place.websiteURI, display: domain });
    }
    if (place.googleMapsURI) {
      links.push({ icon: '📍', label: 'Google Maps', url: place.googleMapsURI, display: 'View on Google Maps' });
    }
    if (links.length > 0) {
      linksEl.style.display = 'block';
      linksEl.innerHTML = `<h2 class="listing-section-title">Links</h2>` + links.map(l =>
        `<a class="listing-link-row" href="${l.url}" target="_blank" rel="noopener">
          <div class="listing-link-icon">${l.icon}</div>
          <div class="listing-link-info"><div class="listing-link-label">${l.label}</div><div class="listing-link-url">${l.display}</div></div>
          <div class="listing-link-arrow">›</div>
        </a>`
      ).join('');
    }
  }
}

async function listingLoadYouTube(castle) {
  const cacheKey = castle.name;
  if (ytCache[cacheKey]) {
    listingRenderYouTube(ytCache[cacheKey]);
    return;
  }
  try {
    const q = encodeURIComponent(`${castle.name} ${castle.country} castle`);
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&maxResults=3&videoDuration=medium&relevanceLanguage=en&key=${YT_API_KEY}`);
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      ytCache[cacheKey] = data.items;
      if (listingCastle && listingCastle.name === castle.name) listingRenderYouTube(data.items);
    } else {
      const el = document.getElementById('listingVideoCards');
      if (el) el.innerHTML = '<div style="color:#8a8a8a;font-size:13px;">No videos found</div>';
    }
  } catch(e) {
    const el = document.getElementById('listingVideoCards');
    if (el) el.innerHTML = '';
  }
}

function listingRenderYouTube(items) {
  const el = document.getElementById('listingVideoCards');
  if (!el) return;
  const play = '<svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg>';
  el.innerHTML = items.slice(0, 3).map(item => {
    const vid = item.id.videoId;
    const title = item.snippet.title.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"');
    const ch = item.snippet.channelTitle;
    const th = item.snippet.thumbnails.medium ? item.snippet.thumbnails.medium.url : item.snippet.thumbnails.default.url;
    return `<div class="listing-video-card" onclick="this.outerHTML='<div class=\\'listing-video-embed\\'><iframe src=\\'https://www.youtube.com/embed/${vid}?autoplay=1\\' allow=\\'autoplay; encrypted-media\\' allowfullscreen></iframe></div>'"><div class="listing-video-thumb"><img src="${th}" loading="lazy"/><div class="listing-play-btn">${play}</div></div><div class="listing-video-meta"><div class="listing-video-title">${title}</div><div class="listing-video-channel">${ch}</div></div></div>`;
  }).join('');
}

function listingToggleFav() {
  if (!listingCastle) return;
  toggleBookmark(listingCastle.name);
  const faved = isBookmarked(listingCastle.name);
  const btn = document.getElementById('listingFavBtn');
  if (btn) btn.textContent = faved ? '★ Saved' : '☆ Save';
  const overlay = document.getElementById('listingFavOverlay');
  if (overlay) overlay.textContent = faved ? '❤' : '♡';
}

function listingAddToRoute() {
  if (!listingCastle) return;
  if (!routeBuilderStops.find(s => s.name === listingCastle.name)) {
    routeBuilderStops.push({ ...listingCastle });
    renderRouteBuilderStops();
  }
  // Brief visual feedback
  const btn = document.querySelector('.listing-btn-primary');
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Added!';
    setTimeout(() => { btn.innerHTML = orig; }, 1500);
  }
}

function listingShare() {
  if (!listingCastle) return;
  const url = `${window.location.origin}${window.location.pathname}?castle=${encodeURIComponent(listingCastle.name)}`;
  const title = `${listingCastle.name} — Scenic Route`;
  const text = `Check out ${listingCastle.name} on Scenic Route!`;
  if (navigator.share) {
    navigator.share({ title, text, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      const toast = document.getElementById('listingShareToast');
      if (toast) { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2000); }
    }).catch(() => { prompt('Copy this link:', url); });
  }
}

function listingScrollToReviews() {
  const sheetScroll = document.getElementById('listingSheetScroll');
  const sheet = document.getElementById('listingSheet');
  if (!listingSheetExpanded) {
    listingSetExpanded(true);
    listingCurrentY = listingSheetFullY;
    if (window.innerWidth >= 768) {
      sheet.style.transform = `translateX(-50%) translateY(${listingCurrentY}px)`;
    } else {
      sheet.style.transform = `translateY(${listingCurrentY}px)`;
    }
    sheetScroll.classList.add('scrollable');
  }
  setTimeout(() => {
    const target = document.getElementById('listingReviewsTitle');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, listingSheetExpanded ? 50 : 400);
}

// ========== COLLECTIONS ==========
function openCollectionsPanel() {
  renderCollectionsList();
  document.getElementById('collectionsPanel').classList.add('active');
  document.getElementById('overlayBackdrop').classList.add('active');
}

function closeCollectionsPanel() {
  document.getElementById('collectionsPanel').classList.remove('active');
  document.getElementById('overlayBackdrop').classList.remove('active');
  showAllPins();
}

function renderCollectionsList() {
  const el = document.getElementById('collectionsContent');
  const collectionsHtml = COLLECTIONS.map(col => {
    const count = CASTLES.filter(col.filter).length;
    return `<div class="collection-card" onclick="openCollection('${col.id}')">
      <span class="col-emoji">${col.emoji}</span>
      <div class="col-info">
        <div class="col-name">${col.name}</div>
        <div class="col-desc">${col.desc}</div>
      </div>
      <span class="col-count">${count}</span>
    </div>`;
  }).join('');

  const regionsHtml = REGIONS.map(r => {
    const count = CASTLES.filter(c => {
      if (r.counties.length > 0) return r.counties.some(county => c.county && c.county.toLowerCase().includes(county.toLowerCase()));
      return c.country === r.country;
    }).length;
    return `<div class="collection-card" onclick="openRegion('${r.id}')">
      <span class="col-emoji">🗺️</span>
      <div class="col-info">
        <div class="col-name">${r.name}</div>
        <div class="col-desc">${count} sites</div>
      </div>
      <span class="col-count">${count}</span>
    </div>`;
  }).join('');

  el.innerHTML = `<div style="padding:0 16px 6px"><h3 style="font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);font-weight:600">Curated Collections</h3></div>` +
    collectionsHtml +
    `<div style="padding:12px 16px 6px;border-top:1px solid var(--border);margin-top:8px"><h3 style="font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);font-weight:600">Browse by Region</h3></div>` +
    regionsHtml;
}

function openCollection(id) {
  const col = COLLECTIONS.find(c => c.id === id);
  if (!col) return;
  const sites = CASTLES.filter(col.filter).sort((a, b) => b.rating - a.rating);
  const el = document.getElementById('collectionsContent');
  el.innerHTML = `<button class="collection-back" onclick="renderCollectionsList(); showAllPins();">← Back to Collections</button>
    <div style="padding:0 24px 8px"><h3 style="font-family:var(--font-serif);font-size:20px">${col.emoji} ${col.name}</h3>
    <p style="font-size:13px;color:var(--text-muted);margin:4px 0 12px">${sites.length} sites</p></div>` +
    sites.map(c => {
      const tc = getTypeConfig(c.type);
      const imgHtml = c.image ? `<img src="${c.image}" referrerpolicy="no-referrer" onerror="this.outerHTML='<span style=\\'font-size:24px\\'>${tc.emoji}</span>'" />` : `<span style="font-size:24px">${tc.emoji}</span>`;
      const safeName = c.name.replace(/'/g, "\\'");
      return `<div class="collection-site" onclick="var cs=CASTLES.find(x=>x.name==='${safeName}'); if(cs) openSidebar(cs);">
        ${imgHtml}
        <div class="cs-info">
          <div class="cs-name">${c.name}</div>
          <div class="cs-meta">★ ${c.rating} · ${c.county}</div>
        </div>
      </div>`;
    }).join('');
  // Highlight on map
  highlightCollectionOnMap(sites);
}

function openRegion(id) {
  const region = REGIONS.find(r => r.id === id);
  if (!region) return;
  const sites = CASTLES.filter(c => {
    if (region.counties.length > 0) return region.counties.some(county => c.county && c.county.toLowerCase().includes(county.toLowerCase()));
    return c.country === region.country;
  }).sort((a, b) => b.rating - a.rating);

  const el = document.getElementById('collectionsContent');
  el.innerHTML = `<button class="collection-back" onclick="renderCollectionsList(); showAllPins();">← Back</button>
    <div style="padding:0 24px 8px"><h3 style="font-family:var(--font-serif);font-size:20px">🗺️ ${region.name}</h3>
    <p style="font-size:13px;color:var(--text-muted);margin:4px 0 12px">${sites.length} sites</p></div>` +
    sites.map(c => {
      const tc = getTypeConfig(c.type);
      const imgHtml = c.image ? `<img src="${c.image}" referrerpolicy="no-referrer" onerror="this.outerHTML='<span style=\\'font-size:24px\\'>${tc.emoji}</span>'" />` : `<span style="font-size:24px">${tc.emoji}</span>`;
      const safeName = c.name.replace(/'/g, "\\'");
      return `<div class="collection-site" onclick="var cs=CASTLES.find(x=>x.name==='${safeName}'); if(cs) openSidebar(cs);">
        ${imgHtml}
        <div class="cs-info">
          <div class="cs-name">${c.name}</div>
          <div class="cs-meta">${tc.emoji} ${c.type} · ★ ${c.rating} · ${c.county}</div>
        </div>
      </div>`;
    }).join('');

  highlightCollectionOnMap(sites);
  // Zoom to region bounds
  if (region.bounds) map.fitBounds(region.bounds, { padding: [60, 60] });
}

function highlightCollectionOnMap(sites) {
  const names = new Set(sites.map(c => c.name));
  markerGroup.clearLayers();
  markers.forEach((m, i) => {
    if (names.has(CASTLES[i].name)) markerGroup.addLayer(m);
  });
  if (sites.length > 0) {
    const bounds = L.latLngBounds(sites.map(c => [c.lat, c.lng]));
    map.fitBounds(bounds, { padding: [60, 60] });
  }
}

// ========== NEAR ME ==========
function openNearMePanel() {
  document.getElementById('nearMePanel').classList.add('active');
  document.getElementById('overlayBackdrop').classList.add('active');
}

function closeNearMePanel() {
  document.getElementById('nearMePanel').classList.remove('active');
  document.getElementById('overlayBackdrop').classList.remove('active');
  if (nearMeCircle) { map.removeLayer(nearMeCircle); nearMeCircle = null; }
  showAllPins();
}

function useMyLocation() {
  if (!navigator.geolocation) { alert('Geolocation not supported'); return; }
  document.getElementById('btnUseMyLocation').textContent = '📍 Locating…';
  navigator.geolocation.getCurrentPosition(pos => {
    document.getElementById('btnUseMyLocation').textContent = '📍 Use My Location';
    nearMeLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    showNearbyResults(nearMeLocation.lat, nearMeLocation.lng, nearMeCurrentRadius);
  }, err => {
    document.getElementById('btnUseMyLocation').textContent = '📍 Use My Location';
    alert('Could not get your location. Try entering it manually.');
  });
}

function showNearbyResults(lat, lng, radiusKm = 25) {
  nearMeLocation = { lat, lng };
  nearMeCurrentRadius = radiusKm;
  document.getElementById('nearMeRadius').style.display = 'block';
  // Update radius buttons
  document.querySelectorAll('#nearMeRadius .filter-chip').forEach(btn => {
    btn.classList.toggle('active-type', parseInt(btn.dataset.radius) === radiusKm);
  });
  const radiusM = radiusKm * 1000;
  const results = CASTLES.map(c => ({ ...c, dist: haversine(lat, lng, c.lat, c.lng) }))
    .filter(c => c.dist <= radiusM)
    .sort((a, b) => a.dist - b.dist);
  const el = document.getElementById('nearMeResults');
  if (results.length === 0) {
    el.innerHTML = '<p style="padding:16px 0;color:var(--text-muted);text-align:center">No sites found within ' + radiusKm + ' km.</p>';
  } else {
    el.innerHTML = `<p style="font-size:13px;color:var(--text-muted);margin:12px 0 8px">${results.length} sites within ${radiusKm} km</p>` +
      results.map(c => {
        const tc = getTypeConfig(c.type);
        const distKm = (c.dist / 1000).toFixed(1);
        const imgHtml = c.image ? `<img src="${c.image}" referrerpolicy="no-referrer" onerror="this.outerHTML='<span style=\\'font-size:24px\\'>${tc.emoji}</span>'" />` : `<span style="font-size:24px">${tc.emoji}</span>`;
        const safeName = c.name.replace(/'/g, "\\'");
        return `<div class="near-me-result" onclick="var cs=CASTLES.find(x=>x.name==='${safeName}'); if(cs) openSidebar(cs);">
          ${imgHtml}
          <div class="nm-info">
            <div class="nm-name">${c.name}</div>
            <div class="nm-meta">${distKm} km · ★ ${c.rating} · ${tc.emoji} ${c.type}</div>
          </div>
        </div>`;
      }).join('');
  }
  // Draw circle on map
  if (nearMeCircle) map.removeLayer(nearMeCircle);
  nearMeCircle = L.circle([lat, lng], { radius: radiusM, color: '#C2714F', fillColor: '#C2714F', fillOpacity: 0.08, weight: 2 }).addTo(map);
  map.setView([lat, lng], radiusKm <= 10 ? 11 : radiusKm <= 25 ? 10 : radiusKm <= 50 ? 9 : 8);
  // Highlight matching pins
  const names = new Set(results.map(c => c.name));
  markerGroup.clearLayers();
  markers.forEach((m, i) => { if (names.has(CASTLES[i].name)) markerGroup.addLayer(m); });
}

function setNearMeRadius(km) {
  if (nearMeLocation) showNearbyResults(nearMeLocation.lat, nearMeLocation.lng, km);
}

function formatDualDist(meters) {
  const km = Math.round(meters / 1000);
  const mi = Math.round(km * 0.621371);
  return `${km} km (${mi} mi)`;
}
function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  return h > 0 ? `${h} hr ${m} min` : `${m} min`;
}

// ========== SUGGEST STOPS (Route Builder) ==========
async function suggestStopsAlongRoute() {
  const fromText = document.getElementById('rbSuggestFrom').value.trim();
  const toText = document.getElementById('rbSuggestTo').value.trim();
  if (!fromText || !toText) return;
  const btn = document.getElementById('btnSuggestStops');
  btn.disabled = true; btn.textContent = 'Finding…';
  document.getElementById('rbSuggestResults').innerHTML = '<div class="loading">Searching</div>';
  try {
    const [startCoords, endCoords] = await Promise.all([geocodeCity(fromText), geocodeCity(toText)]);
    const baseRoute = await getDirectionsRoute(startCoords, endCoords);
    if (!baseRoute) { document.getElementById('rbSuggestResults').innerHTML = '<p style="color:var(--text-muted);font-size:12px">No route found.</p>'; return; }
    const routePath = decodePolyline(baseRoute.overview_polyline);
    const nearby = findCastlesAlongRoute(routePath, 20000, 10, null);
    if (nearby.length === 0) {
      document.getElementById('rbSuggestResults').innerHTML = '<p style="color:var(--text-muted);font-size:12px">No castles found along this route.</p>';
      return;
    }
    document.getElementById('rbSuggestResults').innerHTML = nearby.map(c => {
      const tc = getTypeConfig(c.type);
      const distKm = (c.dist / 1000).toFixed(1);
      const imgHtml = c.image ? `<img src="${c.image}" referrerpolicy="no-referrer" onerror="this.outerHTML='${tc.emoji}'" />` : tc.emoji;
      const safeName = c.name.replace(/'/g, "\\'");
      return `<div class="rb-suggest-card">
        ${imgHtml}
        <div class="info">
          <div class="name">${c.name}</div>
          <div class="meta">★ ${c.rating} · ${distKm} km from route</div>
        </div>
        <button class="add-btn" onclick="addSuggestedStop('${safeName}')">Add +</button>
      </div>`;
    }).join('');
  } catch (err) {
    document.getElementById('rbSuggestResults').innerHTML = `<p style="color:var(--terracotta);font-size:12px">${err.message}</p>`;
  } finally {
    btn.disabled = false; btn.textContent = 'Find Nearby Stops';
  }
}

function addSuggestedStop(name) {
  const c = CASTLES.find(x => x.name === name);
  if (!c || routeBuilderStops.find(s => s.name === c.name)) return;
  routeBuilderStops.push({ ...c });
  renderRouteBuilderStops();
}

function saveRouteToBuilder(names) {
  names.forEach(name => {
    const c = CASTLES.find(x => x.name === name);
    if (c && !routeBuilderStops.find(s => s.name === c.name)) {
      routeBuilderStops.push({ ...c });
    }
  });
  renderRouteBuilderStops();
  openRouteBuilderPanel();
}

function findCastlesAlongRoute(routePath, corridorWidth, maxStops, mustCastle) {
  const routePoints = routePath.map(p => ({
    lat: typeof p.lat === 'function' ? p.lat() : p.lat,
    lng: typeof p.lng === 'function' ? p.lng() : p.lng
  }));

  let scored = CASTLES.map(c => {
    let minDist = Infinity;
    for (let i = 0; i < routePoints.length; i += Math.max(1, Math.floor(routePoints.length / 100))) {
      const d = haversine(c.lat, c.lng, routePoints[i].lat, routePoints[i].lng);
      if (d < minDist) minDist = d;
    }
    return { ...c, dist: minDist };
  }).filter(c => c.dist <= corridorWidth);

  // Sort by rating descending
  scored.sort((a, b) => b.rating - a.rating);

  // Ensure must-visit is included
  let result = [];
  if (mustCastle) {
    const mc = scored.find(c => c.name === mustCastle.name);
    if (mc) result.push(mc);
    else result.push({ ...mustCastle, dist: 0 });
  }
  for (const c of scored) {
    if (result.length >= maxStops) break;
    if (!result.find(r => r.name === c.name)) result.push(c);
  }
  return result;
}

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function geocodeCity(text) {
  return new Promise((resolve, reject) => {
    geocoder.geocode({ address: text }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const loc = results[0].geometry.location;
        resolve({ lat: loc.lat(), lng: loc.lng() });
      } else {
        reject(new Error(`Could not find "${text}"`));
      }
    });
  });
}

function getDirectionsRoute(start, end, mustCastle) {
  return new Promise((resolve, reject) => {
    const request = {
      origin: new google.maps.LatLng(start.lat, start.lng),
      destination: new google.maps.LatLng(end.lat, end.lng),
      travelMode: google.maps.TravelMode.DRIVING,
    };
    if (mustCastle) {
      request.waypoints = [{ location: new google.maps.LatLng(mustCastle.lat, mustCastle.lng), stopover: true }];
    }
    directionsService.route(request, (result, status) => {
      if (status === 'OK') resolve(result.routes[0]);
      else reject(new Error('Directions request failed'));
    });
  });
}

// Decode Google polyline (fallback if geometry library not loaded)
function decodePolyline(encoded) {
  const points = [];
  let index = 0, lat = 0, lng = 0;
  while (index < encoded.length) {
    let b, shift = 0, result = 0;
    do { b = encoded.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lat += (result & 1) ? ~(result >> 1) : (result >> 1);
    shift = 0; result = 0;
    do { b = encoded.charCodeAt(index++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lng += (result & 1) ? ~(result >> 1) : (result >> 1);
    points.push({ lat: lat / 1e5, lng: lng / 1e5 });
  }
  return points;
}

// ========== UI WIRING ==========
function closeAllPanels() {
  closeCollectionsPanel();
  closeNearMePanel();
  closeMyStuffPanel();
  closeSidebar();
  closeListing();
  document.getElementById('filterPanel').classList.remove('active');
  document.getElementById('btnFilter').classList.remove('active');
  const rb = document.getElementById('routeBuilderPanel');
  if (rb.classList.contains('active')) { rb.classList.remove('active'); }
}

function initUI() {
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('overlayBackdrop').addEventListener('click', () => {
    closeSidebar();
    closeCollectionsPanel();
    closeNearMePanel();
    closeMyStuffPanel();
  });

  // Collections
  document.getElementById('btnCollections').addEventListener('click', () => {
    if (document.getElementById('collectionsPanel').classList.contains('active')) { closeCollectionsPanel(); return; }
    closeAllPanels();
    openCollectionsPanel();
  });
  document.getElementById('collectionsClose').addEventListener('click', closeCollectionsPanel);

  // Near Me
  document.getElementById('btnNearMe').addEventListener('click', () => {
    if (document.getElementById('nearMePanel').classList.contains('active')) { closeNearMePanel(); return; }
    closeAllPanels();
    openNearMePanel();
  });
  document.getElementById('nearMeClose').addEventListener('click', closeNearMePanel);
  document.getElementById('btnUseMyLocation').addEventListener('click', useMyLocation);

  // Route Builder
  document.getElementById('btnRouteBuilder').addEventListener('click', () => {
    const rb = document.getElementById('routeBuilderPanel');
    if (rb.classList.contains('active')) { rb.classList.remove('active'); return; }
    closeAllPanels();
    openRouteBuilderPanel();
  });

  // My Stuff
  document.getElementById('btnMyStuff').addEventListener('click', () => {
    if (document.getElementById('myStuffPanel').classList.contains('active')) { closeMyStuffPanel(); return; }
    closeAllPanels();
    openMyStuffPanel();
  });
  document.getElementById('myStuffClose').addEventListener('click', closeMyStuffPanel);

  // Filters
  document.getElementById('btnFilter').addEventListener('click', () => {
    const panel = document.getElementById('filterPanel');
    const btn = document.getElementById('btnFilter');
    panel.classList.toggle('active');
    btn.classList.toggle('active');
  });

  // Suggest Stops toggle
  document.getElementById('rbSuggestToggle').addEventListener('click', () => {
    const form = document.getElementById('rbSuggestForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
  document.getElementById('btnSuggestStops').addEventListener('click', suggestStopsAlongRoute);

  // Mobile search toggle
  document.getElementById('mobileSearchToggle').addEventListener('click', () => {
    document.querySelector('.topbar-search').classList.toggle('mobile-active');
  });

  // Banner image lightbox
  document.getElementById('sidebarImage').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      openLightbox(0);
    }
  });
}

// ========== MY STUFF ==========
function openMyStuffPanel() {
  renderBookmarksPanel();
  renderSavedRoutes();
  document.getElementById('myStuffPanel').classList.add('active');
  document.getElementById('overlayBackdrop').classList.add('active');
}

function closeMyStuffPanel() {
  document.getElementById('myStuffPanel').classList.remove('active');
  document.getElementById('overlayBackdrop').classList.remove('active');
}

function switchMyStuffTab(tab) {
  document.querySelectorAll('.my-stuff-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('myStuffFavorites').style.display = tab === 'favorites' ? 'block' : 'none';
  document.getElementById('myStuffRoutes').style.display = tab === 'routes' ? 'block' : 'none';
}

// ========== LIGHTBOX ==========
let lightboxPhotos = [];
let lightboxIndex = 0;

function openLightbox(indexOrUrl) {
  if (typeof indexOrUrl === 'number') {
    lightboxIndex = indexOrUrl;
  } else {
    // Legacy: called with URL string (e.g. from banner)
    const idx = lightboxPhotos.indexOf(indexOrUrl);
    lightboxIndex = idx >= 0 ? idx : 0;
    if (idx < 0) { lightboxPhotos = [indexOrUrl]; lightboxIndex = 0; }
  }
  updateLightboxImage();
  document.getElementById('lightbox').classList.add('active');
}

function updateLightboxImage() {
  document.getElementById('lightboxImg').src = lightboxPhotos[lightboxIndex] || '';
  const counter = document.getElementById('lightboxCounter');
  if (counter) counter.textContent = lightboxPhotos.length > 1 ? `${lightboxIndex + 1} / ${lightboxPhotos.length}` : '';
  const prev = document.getElementById('lightboxPrev');
  const next = document.getElementById('lightboxNext');
  if (prev) prev.style.display = lightboxPhotos.length > 1 ? 'flex' : 'none';
  if (next) next.style.display = lightboxPhotos.length > 1 ? 'flex' : 'none';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxPhotos.length) % lightboxPhotos.length;
  updateLightboxImage();
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.getElementById('lightboxImg').src = '';
}

// Keyboard nav for lightbox
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('active')) return;
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  else if (e.key === 'ArrowRight') lightboxNav(1);
  else if (e.key === 'Escape') closeLightbox();
});

// Swipe support for lightbox
(function() {
  let startX = 0;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) lightboxNav(-1); else lightboxNav(1);
      e.preventDefault();
    }
  });
})();

// ========== ROUTE BUILDER ==========
let routeBuilderStops = [];
let lastRouteFormState = null;
let rbFormHTML = null;

function addToRoute() {
  if (!selectedCastle) return;
  // Don't add duplicates
  if (routeBuilderStops.find(s => s.name === selectedCastle.name)) {
    openRouteBuilderPanel();
    return;
  }
  routeBuilderStops.push({ ...selectedCastle });
  renderRouteBuilderStops();
  openRouteBuilderPanel();
  // Visual feedback on button
  const btn = document.getElementById('sidebarAddRoute');
  const orig = btn.innerHTML;
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M20 6L9 17l-5-5"/></svg> Added!';
  btn.style.background = 'var(--sage)';
  btn.style.color = '#fff';
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.style.color = ''; }, 1500);
}

function positionRouteBuilder() {
  const legend = document.getElementById('mapLegend');
  const panel = document.getElementById('routeBuilderPanel');
  if (!legend || !panel) return;
  const legendRect = legend.getBoundingClientRect();
  const mapRect = document.getElementById('map').getBoundingClientRect();
  const legendBottom = mapRect.bottom - legendRect.top + 8; // 8px gap
  panel.style.bottom = legendBottom + 'px';
}

function openRouteBuilderPanel() {
  // Capture form template on first open
  if (!rbFormHTML) rbFormHTML = document.getElementById('rbFloatBody').innerHTML;
  renderRouteBuilderStops();
  const panel = document.getElementById('routeBuilderPanel');
  panel.classList.add('active');
  panel.classList.remove('minimized');
  document.getElementById('rbToggle').textContent = '−';
  positionRouteBuilder();
}

function closeRouteBuilderPanel() {
  document.getElementById('routeBuilderPanel').classList.remove('active');
  routeBuilderStops = [];
  renderRouteBuilderStops();
  document.getElementById('rbRouteName').value = '';
  document.getElementById('rbStartLocation').value = '';
  document.getElementById('rbEndLocation').value = '';
  document.getElementById('rbRouteResults').innerHTML = '';
  // Restore all pins and clear route line
  showAllPins();
  routePolylines.forEach(p => map.removeLayer(p));
  routePolylines = [];
}

function toggleRouteBuilderMinimize() {
  const panel = document.getElementById('routeBuilderPanel');
  const btn = document.getElementById('rbToggle');
  panel.classList.toggle('minimized');
  btn.textContent = panel.classList.contains('minimized') ? '+' : '−';
}

function renderRouteBuilderStops() {
  const listEl = document.getElementById('rbStopsList');
  const countEl = document.getElementById('rbStopCount');
  const emptyMsg = document.getElementById('rbEmptyMsg');
  countEl.textContent = `${routeBuilderStops.length} stop${routeBuilderStops.length !== 1 ? 's' : ''}`;

  if (routeBuilderStops.length === 0) {
    listEl.innerHTML = '<div class="bookmarks-empty" id="rbEmptyMsg">Click "Add to Route" on any castle to add stops.</div>';
    listEl.classList.remove('has-stops');
    return;
  }
  listEl.classList.add('has-stops');
  listEl.innerHTML = routeBuilderStops.map((c, i) => {
    const tc = getTypeConfig(c.type);
    return `<div class="rb-stop-card" draggable="true" data-index="${i}">
      <span class="drag-handle">⠿</span>
      <span class="emoji">${tc.emoji}</span>
      <div class="info">
        <div class="name">${c.name}</div>
        <div class="loc">${c.county}, ${c.country}</div>
      </div>
      <button class="remove-btn" onclick="removeRouteBuilderStop(${i})">✕</button>
    </div>`;
  }).join('');

  // Drag reorder
  initStopsDragReorder();
}

function removeRouteBuilderStop(index) {
  routeBuilderStops.splice(index, 1);
  renderRouteBuilderStops();
}

function initStopsDragReorder() {
  const list = document.getElementById('rbStopsList');
  let dragIdx = null;
  list.querySelectorAll('.rb-stop-card').forEach(card => {
    card.addEventListener('dragstart', (e) => {
      dragIdx = parseInt(card.dataset.index);
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      dragIdx = null;
    });
    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });
    card.addEventListener('drop', (e) => {
      e.preventDefault();
      const dropIdx = parseInt(card.dataset.index);
      if (dragIdx !== null && dragIdx !== dropIdx) {
        const [moved] = routeBuilderStops.splice(dragIdx, 1);
        routeBuilderStops.splice(dropIdx, 0, moved);
        renderRouteBuilderStops();
      }
    });
  });
}

function sendFavoritesToRouteBuilder() {
  const checkboxes = document.querySelectorAll('.bm-select-cb:checked');
  const names = Array.from(checkboxes).map(cb => cb.value);
  if (names.length === 0) return;
  names.forEach(name => {
    if (!routeBuilderStops.find(s => s.name === name)) {
      const c = CASTLES.find(x => x.name === name);
      if (c) routeBuilderStops.push({ ...c });
    }
  });
  closeBookmarksPanel();
  openRouteBuilderPanel();
}

async function generateBuilderRoute() {
  if (routeBuilderStops.length === 0) return;
  const startText = document.getElementById('rbStartLocation').value.trim();
  const endText = document.getElementById('rbEndLocation').value.trim();

  const btn = document.getElementById('btnGenerateRoute');
  btn.disabled = true; btn.textContent = 'Generating…';
  document.getElementById('rbRouteResults').innerHTML = '<div class="loading">Planning route</div>';

  try {
    const castles = routeBuilderStops;
    let origin, destination;
    const waypoints = [];

    if (startText) {
      origin = await geocodeCity(startText);
    } else {
      origin = { lat: castles[0].lat, lng: castles[0].lng };
    }

    if (endText) {
      destination = await geocodeCity(endText);
    } else if (startText) {
      destination = { lat: origin.lat, lng: origin.lng }; // round trip
    } else {
      destination = { lat: castles[castles.length - 1].lat, lng: castles[castles.length - 1].lng };
    }

    castles.forEach(c => {
      waypoints.push({ location: new google.maps.LatLng(c.lat, c.lng), stopover: true });
    });

    const request = {
      origin: new google.maps.LatLng(origin.lat, origin.lng),
      destination: new google.maps.LatLng(destination.lat, destination.lng),
      waypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    const result = await new Promise((resolve, reject) => {
      directionsService.route(request, (res, status) => {
        if (status === 'OK') resolve(res); else reject(new Error('Route failed'));
      });
    });

    const route = result.routes[0];
    routePolylines.forEach(p => map.removeLayer(p));
    routePolylines = [];

    // Color-coded legs
    const legColors = ['#E05A33', '#4A7FC1', '#2E8B57', '#E6A817', '#8B5CF6', '#E84393', '#00B894', '#D35400', '#6C5CE7', '#636E72'];
    let allBounds = [];
    route.legs.forEach((leg, i) => {
      const pts = [];
      if (leg.steps) {
        leg.steps.forEach(step => {
          if (step.polyline && step.polyline.points) {
            const decoded = decodePolyline(step.polyline.points);
            decoded.forEach(p => pts.push([p.lat, p.lng]));
          } else if (step.path) {
            step.path.forEach(p => pts.push([p.lat(), p.lng()]));
          }
        });
      }
      // Fallback: use leg start/end lat/lng
      if (pts.length === 0 && leg.start_location && leg.end_location) {
        pts.push([leg.start_location.lat(), leg.start_location.lng()]);
        pts.push([leg.end_location.lat(), leg.end_location.lng()]);
      }
      if (pts.length > 0) {
        const color = legColors[i % legColors.length];
        const polyline = L.polyline(pts, { color, weight: 5, opacity: 0.8 }).addTo(map);
        routePolylines.push(polyline);
        allBounds = allBounds.concat(pts);
      }
    });
    if (allBounds.length > 0) map.fitBounds(allBounds, { padding: [60, 60] });

    let totalDist = 0, totalTime = 0;
    route.legs.forEach(leg => { totalDist += leg.distance.value; totalTime += leg.duration.value; });
    const distKm = (totalDist / 1000).toFixed(0);
    const distMi = (totalDist / 1609.344).toFixed(0);
    const timeH = Math.floor(totalTime / 3600);
    const timeM = Math.round((totalTime % 3600) / 60);

    const order = route.waypoint_order || castles.map((_, i) => i);
    const ordered = order.map(i => castles[i]);
    const routeName = document.getElementById('rbRouteName').value.trim() || 'Your Route';

    // Build leg-by-leg list with colors and distances
    const legListHtml = route.legs.map((leg, i) => {
      const color = legColors[i % legColors.length];
      const legDistKm = (leg.distance.value / 1000).toFixed(0);
      const legDistMi = (leg.distance.value / 1609.344).toFixed(0);
      const legTime = Math.round(leg.duration.value / 60);
      let label;
      if (i === 0) {
        label = startText || 'Start';
      } else {
        label = ordered[i - 1].name;
      }
      const destLabel = i < ordered.length ? ordered[i].name : (endText || 'End');
      return `<div class="rb-leg-item">
        <span class="rb-leg-color" style="background:${color}"></span>
        <div class="rb-leg-info">
          <div class="rb-leg-label">${label} → ${destLabel}</div>
          <div class="rb-leg-meta">${legTime} min · ${legDistKm} km (${legDistMi} mi)</div>
        </div>
      </div>`;
    }).join('');

    // Build Google Maps navigation URL
    const gmOrigin = startText || `${origin.lat},${origin.lng}`;
    const gmDest = endText || `${destination.lat},${destination.lng}`;
    const gmWaypoints = ordered.map(c => `${c.lat},${c.lng}`).join('|');
    const gmUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(gmOrigin)}&destination=${encodeURIComponent(gmDest)}&waypoints=${encodeURIComponent(gmWaypoints)}&travelmode=driving`;

    // Save form state for edit
    lastRouteFormState = {
      name: document.getElementById('rbRouteName').value,
      start: startText,
      end: endText,
      stops: [...routeBuilderStops]
    };

    // Replace entire panel body with route summary
    document.getElementById('rbFloatBody').innerHTML = `
      <div class="rb-route-summary">
        <div class="rb-summary-header">
          <span class="emoji">🧭</span>
          <div>
            <div class="rb-summary-name">${routeName}</div>
            <div class="rb-summary-meta"><strong>${timeH}h ${timeM}m</strong> · ${distKm} km (${distMi} mi) · ${ordered.length} stops</div>
          </div>
        </div>
        <div class="rb-leg-list">${legListHtml}</div>
        <a href="${gmUrl}" target="_blank" class="rb-start-nav-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
          Start Navigation
        </a>
        <button class="rb-edit-btn" onclick="editRoute()">✏️ Edit Route</button>
        <button class="rb-edit-btn" onclick="saveCurrentRoute()" style="margin-top:6px">💾 Save Route</button>
      </div>`;

    // Hide non-route pins, only show route stops
    hideNonRoutePins(ordered);
  } catch (err) {
    document.getElementById('rbRouteResults').innerHTML = `<p style="padding:12px;color:var(--terracotta)">${err.message}</p>`;
  } finally {
    btn.disabled = false; btn.textContent = 'Generate Route';
  }
}

function editRoute() {
  // Restore the form
  document.getElementById('rbFloatBody').innerHTML = rbFormHTML;
  // Restore form state
  if (lastRouteFormState) {
    document.getElementById('rbRouteName').value = lastRouteFormState.name || '';
    document.getElementById('rbStartLocation').value = lastRouteFormState.start || '';
    document.getElementById('rbEndLocation').value = lastRouteFormState.end || '';
    routeBuilderStops = lastRouteFormState.stops || [];
  }
  renderRouteBuilderStops();
  // Re-init autocomplete on restored inputs
  ['rbStartLocation', 'rbEndLocation'].forEach(id => {
    const el = document.getElementById(id);
    if (el) initPlacesAutocomplete(el);
  });
  // Re-wire generate button
  document.getElementById('btnGenerateRoute').addEventListener('click', generateBuilderRoute);
  // Restore all pins and clear route lines
  showAllPins();
  routePolylines.forEach(p => map.removeLayer(p));
  routePolylines = [];
  positionRouteBuilder();
}

// ========== ROUTE PIN FILTERING ==========
function hideNonRoutePins(routeCastles) {
  const routeNames = new Set(routeCastles.map(c => c.name));
  markerGroup.clearLayers();
  markers.forEach((m, i) => {
    if (routeNames.has(CASTLES[i].name)) {
      markerGroup.addLayer(m);
    }
  });
}

function showAllPins() {
  markerGroup.clearLayers();
  const legendTypes = getActiveLegendTypes();
  markers.forEach((m, i) => {
    if (legendTypes.has(CASTLES[i].type)) {
      markerGroup.addLayer(m);
    }
  });
}

// ========== PLACES AUTOCOMPLETE (New API) ==========
const GAPI_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';
let acDebounce = null;

function initPlacesAutocomplete(input) {
  // Create dropdown container
  const dropdown = document.createElement('div');
  dropdown.className = 'pac-dropdown';
  input.parentElement.style.position = 'relative';
  input.parentElement.appendChild(dropdown);

  input.addEventListener('input', () => {
    clearTimeout(acDebounce);
    const q = input.value.trim();
    if (q.length < 2) { dropdown.innerHTML = ''; dropdown.style.display = 'none'; return; }
    acDebounce = setTimeout(() => fetchPlaceSuggestions(q, dropdown, input), 300);
  });

  input.addEventListener('blur', () => {
    setTimeout(() => { dropdown.style.display = 'none'; }, 200);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') e.preventDefault();
  });
}

async function fetchPlaceSuggestions(query, dropdown, input) {
  try {
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GAPI_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress'
      },
      body: JSON.stringify({ textQuery: query, maxResultCount: 5 })
    });
    const data = await res.json();
    if (!data.places || data.places.length === 0) { dropdown.style.display = 'none'; return; }
    dropdown.innerHTML = data.places.map(p => {
      const name = p.displayName?.text || '';
      const addr = p.formattedAddress || '';
      return `<div class="pac-dropdown-item" data-value="${addr}">
        <strong>${name}</strong><br/><small>${addr}</small>
      </div>`;
    }).join('');
    dropdown.style.display = 'block';
    dropdown.querySelectorAll('.pac-dropdown-item').forEach(item => {
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        input.value = item.dataset.value;
        dropdown.style.display = 'none';
      });
    });
  } catch(e) {
    dropdown.style.display = 'none';
  }
}

// ========== FAVORITES ==========
function getBookmarks() {
  try {
    // Migrate old key
    const old = localStorage.getItem('castle-explorer-bookmarks');
    if (old && !localStorage.getItem('scenicRoute_favorites')) {
      localStorage.setItem('scenicRoute_favorites', old);
      localStorage.removeItem('castle-explorer-bookmarks');
    }
    return JSON.parse(localStorage.getItem('scenicRoute_favorites')) || [];
  } catch { return []; }
}
function saveBookmarks(arr) { localStorage.setItem('scenicRoute_favorites', JSON.stringify(arr)); }
function isBookmarked(name) { return getBookmarks().includes(name); }

function toggleBookmark(name) {
  let bm = getBookmarks();
  if (bm.includes(name)) bm = bm.filter(n => n !== name);
  else bm.push(name);
  saveBookmarks(bm);
  updateBookmarkUI();
  updateMapPinBookmarks();
}

function updateBookmarkUI() {
  // Update sidebar favorite button
  if (selectedCastle) {
    const btn = document.getElementById('sidebarBookmark');
    const faved = isBookmarked(selectedCastle.name);
    btn.classList.toggle('bookmarked', faved);
    btn.innerHTML = faved ? '<span class="action-icon">★</span><span class="action-label">Saved</span>' : '<span class="action-icon">☆</span><span class="action-label">Save</span>';
  }
  // Update quick view favorite button
  const qvBtn = document.getElementById('qvBookmark');
  if (qvBtn && window.quickViewCastle) {
    const faved = isBookmarked(quickViewCastle.name);
    qvBtn.classList.toggle('bookmarked', faved);
    qvBtn.textContent = faved ? '★' : '☆';
  }
  // Update favorites panel if open
  renderBookmarksPanel();
}

function renderBookmarksPanel() {
  const bm = getBookmarks();
  const listEl = document.getElementById('bookmarksList');
  const countEl = document.getElementById('bookmarksCount');
  const actionsEl = document.getElementById('bookmarksActions');
  countEl.textContent = `${bm.length} favorite${bm.length !== 1 ? 's' : ''}`;

  if (bm.length === 0) {
    listEl.innerHTML = '<div class="bookmarks-empty">No favorites yet. Tap the ⭐ icon on any castle to save it.</div>';
    actionsEl.style.display = 'none';
    return;
  }
  actionsEl.style.display = 'block';
  listEl.innerHTML = bm.map(name => {
    const c = CASTLES.find(x => x.name === name);
    if (!c) return '';
    const tc = getTypeConfig(c.type);
    const imgHtml = c.image ? `<div style="width:48px;height:48px;border-radius:8px;overflow:hidden;flex-shrink:0"><img src="${c.image}" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML='${tc.emoji}'"/></div>` : `<span class="emoji">${tc.emoji}</span>`;
    return `<div class="bookmark-card-select">
      <input type="checkbox" class="bm-select-cb" value="${c.name.replace(/"/g, '&quot;')}" />
      ${imgHtml}
      <div class="info">
        <div class="name">${c.name}</div>
        <div class="loc">${c.county}, ${c.country}</div>
        <div class="rating">★ ${c.rating}</div>
      </div>
      <button class="remove-btn" onclick="toggleBookmark('${c.name.replace(/'/g, "\\'")}')">✕</button>
    </div>`;
  }).join('');
}

function updateMapPinBookmarks() {
  const bm = getBookmarks();
  markers.forEach((m, i) => {
    const c = CASTLES[i];
    const tc = getTypeConfig(c.type);
    const bookmarked = bm.includes(c.name);
    const size = getPinSize();
    const icon = L.divIcon({
      html: createPinHtml(c, tc, bookmarked),
      className: '', iconSize: [size, size], iconAnchor: [size/2, size/2]
    });
    m.setIcon(icon);
  });
}

function openBookmarksPanel() {
  openMyStuffPanel();
  switchMyStuffTab('favorites');
}

function closeBookmarksPanel() {
  closeMyStuffPanel();
}

async function optimizeBookmarkRoute() {
  const startText = document.getElementById('bookmarkRouteStart').value.trim();
  if (!startText) return;
  const bm = getBookmarks();
  if (bm.length === 0) return;

  const btn = document.getElementById('btnOptimizeBookmarkRoute');
  btn.disabled = true; btn.textContent = 'Optimizing…';
  document.getElementById('bookmarkRouteResults').innerHTML = '<div class="loading">Planning route</div>';

  try {
    const startCoords = await geocodeCity(startText);
    const castles = bm.map(n => CASTLES.find(x => x.name === n)).filter(Boolean);
    if (castles.length === 0) return;

    // Use last castle as destination, rest as waypoints
    const waypoints = castles.map(c => ({
      location: new google.maps.LatLng(c.lat, c.lng), stopover: true
    }));

    const request = {
      origin: new google.maps.LatLng(startCoords.lat, startCoords.lng),
      destination: new google.maps.LatLng(startCoords.lat, startCoords.lng),
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    const result = await new Promise((resolve, reject) => {
      directionsService.route(request, (res, status) => {
        if (status === 'OK') resolve(res); else reject(new Error('Route failed'));
      });
    });

    const route = result.routes[0];
    // Clear old polylines
    routePolylines.forEach(p => map.removeLayer(p));
    routePolylines = [];

    // Draw route
    const path = decodePolyline(route.overview_polyline);
    const latLngs = path.map(p => [p.lat, p.lng]);
    const polyline = L.polyline(latLngs, { color: '#C2714F', weight: 4, opacity: 0.7 }).addTo(map);
    routePolylines.push(polyline);
    map.fitBounds(polyline.getBounds(), { padding: [60, 60] });

    // Compute totals
    let totalDist = 0, totalTime = 0;
    route.legs.forEach(leg => { totalDist += leg.distance.value; totalTime += leg.duration.value; });
    const distKm = (totalDist / 1000).toFixed(0);
    const distMi = (totalDist / 1609.344).toFixed(0);
    const timeH = Math.floor(totalTime / 3600);
    const timeM = Math.round((totalTime % 3600) / 60);

    // Order castles by waypoint_order
    const order = route.waypoint_order || castles.map((_, i) => i);
    const ordered = order.map(i => castles[i]);

    const listHtml = ordered.map((c, i) => {
      const tc = getTypeConfig(c.type);
      return `<li><span style="color:var(--text-muted);font-weight:600;margin-right:4px">${i + 1}.</span> ${tc.emoji} ${c.name} <span class="castle-rating">★ ${c.rating}</span></li>`;
    }).join('');

    document.getElementById('bookmarkRouteResults').innerHTML = `
      <div class="route-card">
        <div class="route-card-header"><span class="emoji">🗺️</span><span class="title">Optimized Route</span></div>
        <div class="route-card-meta"><strong>${timeH}h ${timeM}m</strong> · ${distKm} km (${distMi} mi) · ${ordered.length} stops</div>
        <ul class="route-castle-list">${listHtml}</ul>
      </div>`;
  } catch (err) {
    document.getElementById('bookmarkRouteResults').innerHTML = `<p style="padding:12px;color:var(--terracotta)">${err.message}</p>`;
  } finally {
    btn.disabled = false; btn.textContent = 'Optimize Route';
  }
}

// Wire up bookmark UI after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sidebarBookmark').addEventListener('click', () => {
    if (selectedCastle) toggleBookmark(selectedCastle.name);
  });
  document.getElementById('sidebarRouteAdd').addEventListener('click', () => {
    if (selectedCastle) addToRoute();
  });
  // Bookmarks wired through My Stuff panel now
  document.getElementById('btnClearBookmarks').addEventListener('click', () => {
    saveBookmarks([]);
    updateBookmarkUI();
    updateMapPinBookmarks();
  });
  // Route Builder wiring
  document.getElementById('routeBuilderClose').addEventListener('click', closeRouteBuilderPanel);
  document.getElementById('rbToggle').addEventListener('click', (e) => { e.stopPropagation(); toggleRouteBuilderMinimize(); });
  document.getElementById('rbFloatHeader').addEventListener('click', () => {
    const panel = document.getElementById('routeBuilderPanel');
    if (panel.classList.contains('minimized')) toggleRouteBuilderMinimize();
  });
  document.getElementById('btnGenerateRoute').addEventListener('click', generateBuilderRoute);
  window.addEventListener('resize', positionRouteBuilder);

  // Custom Places Autocomplete (New API)
  ['rbStartLocation', 'rbEndLocation', 'rbSuggestFrom', 'rbSuggestTo', 'nearMeInput'].forEach(id => {
    const el = document.getElementById(id);
    if (el) initPlacesAutocomplete(el);
  });

  // Near Me input geocoding on selection
  const nearMeInput = document.getElementById('nearMeInput');
  if (nearMeInput) {
    nearMeInput.addEventListener('change', async () => {
      const text = nearMeInput.value.trim();
      if (!text) return;
      try {
        const coords = await geocodeCity(text);
        showNearbyResults(coords.lat, coords.lng, nearMeCurrentRadius);
      } catch (e) { alert('Could not find that location.'); }
    });
  }

  // Update pin indicators on load
  updateMapPinBookmarks();

  // Quick view wiring
  document.getElementById('qvClose').addEventListener('click', closeQuickView);
  document.getElementById('qvDetailsBtn').addEventListener('click', () => {
    const castle = quickViewCastle;
    closeQuickView();
    if (castle) openListing(castle);
  });
  document.getElementById('qvBookmark').addEventListener('click', () => {
    if (quickViewCastle) {
      toggleBookmark(quickViewCastle.name);
      document.getElementById('qvBookmark').classList.toggle('bookmarked', isBookmarked(quickViewCastle.name));
    }
  });
  document.getElementById('qvRouteAdd').addEventListener('click', () => {
    if (quickViewCastle) {
      // Temporarily set selectedCastle for addToRoute
      const prev = selectedCastle;
      selectedCastle = quickViewCastle;
      addToRoute();
      selectedCastle = prev;
    }
  });

  // Close quick view when tapping map
  map.on('click', () => { closeQuickView(); if (listingCastle && !listingSheetExpanded) closeListing(); });
});

// ========== QUICK VIEW (MOBILE) ==========
let quickViewCastle = null;

function openQuickView(castle) {
  quickViewCastle = castle;
  const qv = document.getElementById('quickView');
  const tc = getTypeConfig(castle.type);

  // Image
  const imgEl = document.getElementById('qvImage');
  if (castle.image) {
    imgEl.style.backgroundImage = `url(${castle.image})`;
    imgEl.style.backgroundSize = 'cover';
    imgEl.style.backgroundPosition = 'center';
  } else {
    imgEl.style.backgroundImage = 'none';
    imgEl.style.backgroundColor = '#E8DDD3';
  }

  document.getElementById('qvName').textContent = castle.name;
  document.getElementById('qvBadges').innerHTML = `
    <span class="badge badge-type">${tc.emoji} ${castle.type}</span>
    <span class="badge badge-era">${castle.era}</span>
    <span class="badge badge-condition">${castle.condition}</span>
  `;
  const fullStars = Math.floor(castle.rating);
  const halfStar = castle.rating % 1 >= 0.3;
  const starsHtml = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
  document.getElementById('qvRating').innerHTML = `<span class="stars">${starsHtml}</span> <span class="rating-num">${castle.rating}</span> <span class="review-count">(${castle.reviewCount.toLocaleString()})</span>`;

  // First sentence only
  const desc = castle.description || '';
  const firstPeriod = desc.indexOf('.');
  document.getElementById('qvDesc').textContent = firstPeriod > 0 ? desc.substring(0, firstPeriod + 1) : desc;

  // Bookmark state
  document.getElementById('qvBookmark').classList.toggle('bookmarked', isBookmarked(castle.name));

  qv.classList.add('active');

  // If Google data cached, update image; otherwise fetch it
  if (placesCache[castle.name] && placesCache[castle.name].photos && placesCache[castle.name].photos.length > 0) {
    const url = placesCache[castle.name].photos[0].getURI ? placesCache[castle.name].photos[0].getURI({ maxWidth: 800, maxHeight: 300 }) : '';
    if (url) {
      imgEl.style.backgroundImage = `url(${url})`;
    }
  } else {
    // Fetch Google Places data for the quick view
    lookupGooglePlacesForQuickView(castle);
  }
}

async function lookupGooglePlacesForQuickView(castle) {
  const cacheKey = castle.name;
  if (placesCache[cacheKey]) return;
  try {
    const { Place } = await google.maps.importLibrary('places');
    const request = {
      textQuery: `${castle.name} ${castle.county} ${castle.country}`,
      fields: ['displayName', 'rating', 'userRatingCount', 'photos', 'googleMapsURI'],
      locationBias: { lat: castle.lat, lng: castle.lng },
      maxResultCount: 1
    };
    const { places } = await Place.searchByText(request);
    if (places && places.length > 0) {
      const place = places[0];
      placesCache[cacheKey] = place;
      // Update quick view banner if still showing this castle
      if (quickViewCastle && quickViewCastle.name === castle.name && place.photos && place.photos.length > 0) {
        const url = place.photos[0].getURI ? place.photos[0].getURI({ maxWidth: 800, maxHeight: 300 }) : '';
        if (url) {
          document.getElementById('qvImage').style.backgroundImage = `url(${url})`;
        }
      }
      // Update the map pin too
      const idx = CASTLES.findIndex(c => c.name === castle.name);
      if (idx >= 0 && place.photos && place.photos.length > 0) {
        const pinUrl = place.photos[0].getURI ? place.photos[0].getURI({ maxWidth: 64, maxHeight: 64 }) : '';
        if (pinUrl) updatePinImage(idx, pinUrl);
      }
    }
  } catch (e) {
    console.warn('Quick view Places lookup failed:', e);
  }
}

function closeQuickView() {
  document.getElementById('quickView').classList.remove('active');
  quickViewCastle = null;
}

// ========== SAVED ROUTES ==========
let savedRoutes = [];
(function loadSavedRoutes() {
  try { savedRoutes = JSON.parse(localStorage.getItem('scenicRoute_savedRoutes')) || []; } catch { savedRoutes = []; }
})();

function persistSavedRoutes() {
  localStorage.setItem('scenicRoute_savedRoutes', JSON.stringify(savedRoutes));
}

function saveCurrentRoute() {
  const nameEl = document.getElementById('rbRouteName');
  // Use routeBuilderStops array (the source of truth) for stops
  const stops = routeBuilderStops.map(s => s.name);
  const startEl = document.getElementById('rbStartLocation');
  const endEl = document.getElementById('rbEndLocation');
  const start = startEl ? startEl.value.trim() : (lastRouteFormState && lastRouteFormState.start || '');
  const end = endEl ? endEl.value.trim() : (lastRouteFormState && lastRouteFormState.end || '');
  const name = (nameEl && nameEl.value.trim()) || '';

  // Try to grab summary stats from the results
  const metaEl = document.querySelector('.rb-summary-meta');
  let totalDist = 0, totalDur = 0;
  if (metaEl) {
    const text = metaEl.textContent;
    const hMatch = text.match(/(\d+)h/); const mMatch = text.match(/(\d+)m/);
    if (hMatch) totalDur += parseInt(hMatch[1]) * 3600;
    if (mMatch) totalDur += parseInt(mMatch[1]) * 60;
    const kmMatch = text.match(/([\d.]+)\s*km/);
    if (kmMatch) totalDist = Math.round(parseFloat(kmMatch[1]) * 1000);
  }
  savedRoutes.push({
    name, stops, start, end, totalDist, totalDur,
    timestamp: Date.now()
  });
  persistSavedRoutes();
  // Reset map to show all sites
  showAllPins();
  routePolylines.forEach(p => map.removeLayer(p));
  routePolylines = [];
  routePlannerMarkers.forEach(m => map.removeLayer(m));
  routePlannerMarkers = [];
  alert('Route saved! Find it in "My Routes" at the top of the page.');
}

function openSavedRoutesPanel() {
  openMyStuffPanel();
  switchMyStuffTab('routes');
}

function closeSavedRoutesPanel() {
  closeMyStuffPanel();
}

function renderSavedRoutes() {
  const listEl = document.getElementById('savedRoutesList');
  const countEl = document.getElementById('savedRoutesCount');
  countEl.textContent = `${savedRoutes.length} saved route${savedRoutes.length !== 1 ? 's' : ''}`;
  if (savedRoutes.length === 0) {
    listEl.innerHTML = '<div class="bookmarks-empty">No saved routes yet. Build a route and tap 💾 Save Route.</div>';
    return;
  }
  listEl.innerHTML = savedRoutes.map((r, i) => {
    let displayName = r.name;
    if (!displayName || displayName === 'Unnamed Route') {
      const first = r.start || (r.stops.length ? r.stops[0] : '');
      const last = r.end || (r.stops.length ? r.stops[r.stops.length - 1] : '');
      displayName = first && last ? `${first} → ${last}` : first || last || 'Unnamed Route';
    }

    let thumbUrl = '';
    for (const stopName of r.stops) {
      const castle = CASTLES.find(c => c.name === stopName);
      if (castle && castle.image) { thumbUrl = castle.image; break; }
    }

    const dateStr = new Date(r.timestamp).toLocaleDateString();
    const stopsStr = r.stops.length + ' stop' + (r.stops.length !== 1 ? 's' : '');
    const durStr = typeof r.totalDur === 'number' && r.totalDur ? formatDuration(r.totalDur) : r.totalDur;
    const distStr = typeof r.totalDist === 'number' && r.totalDist ? formatDualDist(r.totalDist) : r.totalDist;
    const meta = [durStr, distStr, stopsStr, dateStr].filter(Boolean).join(' · ');
    const gmWaypoints = r.stops.map(s => encodeURIComponent(s + ', UK')).join('|');
    const gmUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(r.start)}&destination=${encodeURIComponent(r.end)}&waypoints=${gmWaypoints}&travelmode=driving`;

    const imgHtml = thumbUrl ? `<div style="width:60px;height:60px;border-radius:8px;overflow:hidden;flex-shrink:0"><img src="${thumbUrl}" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.style.display='none'"/></div>` : '';

    // Build stop list for expanded view
    const stopListHtml = r.stops.map((s, si) => {
      const c = CASTLES.find(x => x.name === s);
      const tc = c ? getTypeConfig(c.type) : { emoji: '📍' };
      const sImg = c && c.image ? `<img src="${c.image}" referrerpolicy="no-referrer" style="width:32px;height:32px;border-radius:6px;object-fit:cover" onerror="this.outerHTML='${tc.emoji}'"/>` : tc.emoji;
      return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:11px;color:var(--text-muted);width:18px;text-align:center">${si + 1}</span>
        ${sImg}
        <span style="font-size:13px;flex:1">${s}</span>
        <button onclick="event.stopPropagation();removeSavedRouteStop(${i},${si})" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:14px;padding:2px 6px" title="Remove stop">✕</button>
      </div>`;
    }).join('');

    return `<div class="saved-route-card" id="savedRouteCard-${i}" style="margin-bottom:8px;border-radius:var(--radius);background:var(--white);border:1px solid var(--border);overflow:hidden">
      <div onclick="toggleSavedRouteExpand(${i})" style="padding:12px;display:flex;gap:12px;align-items:center;cursor:pointer;position:relative">
        ${imgHtml}
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;margin-bottom:2px;padding-right:24px">${displayName}</div>
          <div style="font-size:12px;color:var(--text-muted)">${meta}</div>
        </div>
        <button onclick="event.stopPropagation();deleteSavedRoute(${i})" style="position:absolute;top:8px;right:8px;background:none;border:none;cursor:pointer;font-size:16px;color:var(--text-muted);padding:4px" title="Delete route">✕</button>
      </div>
      <div class="saved-route-expanded" id="savedRouteExpanded-${i}" style="display:none;padding:0 12px 12px;border-top:1px solid var(--border)">
        <div style="padding:8px 0;font-size:12px;color:var(--text-muted);font-weight:600">ITINERARY</div>
        ${r.start ? `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)"><span style="font-size:11px;color:var(--sage);width:18px;text-align:center">📍</span><span style="font-size:13px;color:var(--sage)">${r.start}</span></div>` : ''}
        ${stopListHtml}
        ${r.end ? `<div style="display:flex;align-items:center;gap:8px;padding:6px 0"><span style="font-size:11px;color:var(--terracotta);width:18px;text-align:center">🏁</span><span style="font-size:13px;color:var(--terracotta)">${r.end}</span></div>` : ''}
        <div style="display:flex;gap:6px;margin-top:10px">
          <button class="btn-pill" style="font-size:11px" onclick="viewSavedRouteOnMap(${i})">🗺️ View Route</button>
          <a class="btn-pill" style="font-size:11px;text-decoration:none" href="${gmUrl}" target="_blank">📍 Google Maps</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

let expandedSavedRoute = -1;

function toggleSavedRouteExpand(index) {
  const prev = document.getElementById(`savedRouteExpanded-${expandedSavedRoute}`);
  if (prev && expandedSavedRoute !== index) prev.style.display = 'none';

  const el = document.getElementById(`savedRouteExpanded-${index}`);
  if (!el) return;
  const isOpen = el.style.display !== 'none';
  el.style.display = isOpen ? 'none' : 'block';
  expandedSavedRoute = isOpen ? -1 : index;

  // Draw route on map when expanding
  if (!isOpen) viewSavedRouteOnMap(index);
  else {
    // Collapse: clear route visuals, restore pins
    routePolylines.forEach(p => map.removeLayer(p));
    routePolylines = [];
    routePlannerMarkers.forEach(m => map.removeLayer(m));
    routePlannerMarkers = [];
    showAllPins();
  }
}

function viewSavedRouteOnMap(index) {
  const r = savedRoutes[index];
  if (!r || r.stops.length === 0) return;

  // Clear old visuals
  routePolylines.forEach(p => map.removeLayer(p));
  routePolylines = [];
  routePlannerMarkers.forEach(m => map.removeLayer(m));
  routePlannerMarkers = [];
  markerGroup.clearLayers();

  const bounds = L.latLngBounds();

  // Add castle markers
  r.stops.forEach((name, si) => {
    const c = CASTLES.find(x => x.name === name);
    if (!c) return;
    const marker = L.circleMarker([c.lat, c.lng], {
      radius: 10, fillColor: '#C2714F', color: '#fff', weight: 2, fillOpacity: 0.9
    }).addTo(map);
    marker.bindTooltip(`${si + 1}. ${c.name}`, { direction: 'top', offset: [0, -10], permanent: false });
    marker.on('click', () => openSidebar(c));
    routePlannerMarkers.push(marker);
    bounds.extend([c.lat, c.lng]);
  });

  // Get driving route
  const waypoints = r.stops.map(name => {
    const c = CASTLES.find(x => x.name === name);
    return c ? new google.maps.LatLng(c.lat, c.lng) : null;
  }).filter(Boolean);

  const origin = r.start ? r.start : waypoints.shift();
  const destination = r.end ? r.end : waypoints.pop();

  if (origin && destination) {
    const request = {
      origin: typeof origin === 'string' ? origin : origin,
      destination: typeof destination === 'string' ? destination : destination,
      waypoints: waypoints.map(w => ({ location: w, stopover: true })),
      optimizeWaypoints: false,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, (res, status) => {
      if (status === 'OK') {
        const route = res.routes[0];
        const pts = decodePolyline(route.overview_polyline).map(p => [p.lat, p.lng]);
        const polyline = L.polyline(pts, { color: '#C2714F', weight: 5, opacity: 0.8 }).addTo(map);
        routePolylines.push(polyline);
        pts.forEach(p => bounds.extend(p));
        if (bounds.isValid()) map.fitBounds(bounds, { padding: [60, 60] });
      }
    });
  }

  if (bounds.isValid()) map.fitBounds(bounds, { padding: [60, 60] });
}

function removeSavedRouteStop(routeIndex, stopIndex) {
  savedRoutes[routeIndex].stops.splice(stopIndex, 1);
  persistSavedRoutes();
  renderSavedRoutes();
  // Re-expand the same card
  const el = document.getElementById(`savedRouteExpanded-${routeIndex}`);
  if (el) { el.style.display = 'block'; expandedSavedRoute = routeIndex; }
  viewSavedRouteOnMap(routeIndex);
}

function loadSavedRoute(index) {
  const r = savedRoutes[index];
  if (!r) return;
  closeSavedRoutesPanel();
  openRouteBuilderPanel();
  const nameEl = document.getElementById('rbRouteName');
  const startEl = document.getElementById('rbStartLocation');
  const endEl = document.getElementById('rbEndLocation');
  if (nameEl) nameEl.value = r.name;
  if (startEl) startEl.value = r.start;
  if (endEl) endEl.value = r.end;
  if (typeof routeBuilderStops !== 'undefined') {
    routeBuilderStops.length = 0;
  }
  r.stops.forEach(stopName => {
    const castle = CASTLES.find(c => c.name === stopName);
    if (castle) addToRouteBuilder(castle);
  });
}

function deleteSavedRoute(index) {
  savedRoutes.splice(index, 1);
  persistSavedRoutes();
  renderSavedRoutes();
}
