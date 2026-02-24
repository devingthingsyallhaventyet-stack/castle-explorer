// ========== CONFIG ==========
const TYPE_CONFIG = {
  castle:          { emoji: '🏰', color: '#E05A33', class: 'castle' },
  palace:          { emoji: '👑', color: '#E6A817', class: 'palace' },
  abbey:           { emoji: '⛪', color: '#2E8B57', class: 'abbey' },
  'tower house':   { emoji: '🗼', color: '#4A7FC1', class: 'tower' },
  'fortified house': { emoji: '🛡️', color: '#8B5CF6', class: 'fortified' },
};

const CORRIDOR_PROFILES = [
  { name: 'Castle Hunter', emoji: '🏰', width: 30000, maxStops: 8 },
  { name: 'Balanced Explorer', emoji: '⚖️', width: 15000, maxStops: 5 },
  { name: 'Quick Tour', emoji: '⚡', width: 8000, maxStops: 3 },
];

// ========== STATE ==========
let map, markerGroup, markers = [], routePolylines = [], routePlannerMarkers = [];
let activeFilters = { country: new Set(), type: new Set(), condition: new Set() };
let placesService, geocoder, directionsService;
const placesCache = {};
let selectedCastle = null;

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
  if (window.innerWidth < 768) {
    openQuickView(castle);
  } else {
    openSidebar(castle);
  }
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
  document.getElementById('sidebarDirections').href = `https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}`;

  // Reset Google sections
  document.getElementById('sidebarGoogle').innerHTML = '';
  document.getElementById('sidebarPhotos').innerHTML = '';
  document.getElementById('sidebarHours').innerHTML = '';
  document.getElementById('sidebarReviews').innerHTML = '';

  // Set favorite button state
  const faved = isBookmarked(castle.name);
  const favBtn = document.getElementById('sidebarBookmark');
  favBtn.classList.toggle('bookmarked', faved);
  favBtn.textContent = faved ? '★' : '☆';

  sidebar.classList.add('active');
  document.getElementById('overlayBackdrop').classList.add('active');

  // Google Places lookup
  lookupGooglePlaces(castle);
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
      placesCache[cacheKey] = place;
      if (selectedCastle && selectedCastle.name === castle.name) renderGoogleData(place);
    }
  } catch (e) {
    console.warn('Places lookup failed:', e);
  }
}

function renderGoogleData(place) {
  // Banner image — use first Google photo
  if (place.photos && place.photos.length > 0) {
    const bannerUrl = place.photos[0].getURI ? place.photos[0].getURI({ maxWidth: 800, maxHeight: 400 }) : (place.photos[0].getUrl ? place.photos[0].getUrl({ maxWidth: 800, maxHeight: 400 }) : '');
    if (bannerUrl) {
      const imgEl = document.getElementById('sidebarImage');
      imgEl.innerHTML = `<img src="${bannerUrl}" alt="${selectedCastle ? selectedCastle.name : 'Photo'}" />`;
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

  // Build lightbox photos array from ALL photos
  lightboxPhotos = [];
  if (place.photos && place.photos.length > 0) {
    place.photos.slice(0, 10).forEach(p => {
      const fullUrl = p.getURI ? p.getURI({ maxWidth: 1200, maxHeight: 900 }) : (p.getUrl ? p.getUrl({ maxWidth: 1200, maxHeight: 900 }) : '');
      if (fullUrl) lightboxPhotos.push(fullUrl);
    });
  }

  // Photo gallery — remaining photos (clickable for lightbox)
  if (place.photos && place.photos.length > 1) {
    const photosHtml = place.photos.slice(1, 6).map(p => {
      const thumbUrl = p.getURI ? p.getURI({ maxWidth: 300, maxHeight: 225 }) : (p.getUrl ? p.getUrl({ maxWidth: 300, maxHeight: 225 }) : '');
      const fullUrl = p.getURI ? p.getURI({ maxWidth: 1200, maxHeight: 900 }) : (p.getUrl ? p.getUrl({ maxWidth: 1200, maxHeight: 900 }) : '');
      if (!thumbUrl) return '';
      const idx = lightboxPhotos.indexOf(fullUrl);
      return `<img src="${thumbUrl}" alt="Photo" onclick="openLightbox(${idx >= 0 ? idx : 0})" />`;
    }).join('');
    document.getElementById('sidebarPhotos').innerHTML = photosHtml;
  }

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
      const truncated = text.length > 250 ? text.substring(0, 250) + '…' : text;
      return `<div class="review-card">
        <div class="review-header">
          <strong class="review-author">${author}</strong>
          <span class="review-time">${timeDesc}</span>
        </div>
        <div class="review-stars">${stars}</div>
        <p class="review-text">${truncated}</p>
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

// ========== ROUTE PLANNER ==========
function openRoutePanel() {
  document.getElementById('routePanel').classList.add('active');
  document.getElementById('overlayBackdrop').classList.add('active');
}

function closeRoutePanel() {
  document.getElementById('routePanel').classList.remove('active');
  document.getElementById('overlayBackdrop').classList.remove('active');
  // Restore all pins and clear route visuals
  showAllPins();
  routePolylines.forEach(p => map.removeLayer(p));
  routePolylines = [];
  if (typeof routePlannerMarkers !== 'undefined') {
    routePlannerMarkers.forEach(m => map.removeLayer(m));
    routePlannerMarkers = [];
  }
}

document.getElementById('btnFindRoutes').addEventListener('click', findRoutes);

async function findRoutes() {
  const startText = document.getElementById('routeStart').value.trim();
  const endText = document.getElementById('routeEnd').value.trim();
  const mustText = document.getElementById('routeMust').value.trim();
  if (!startText || !endText) return;

  const btn = document.getElementById('btnFindRoutes');
  btn.disabled = true;
  btn.textContent = 'Finding routes…';
  document.getElementById('routeResults').innerHTML = '<div class="loading">Searching for castle routes</div>';

  try {
    const [startCoords, endCoords] = await Promise.all([geocodeCity(startText), geocodeCity(endText)]);

    // Find must-visit castle
    let mustCastle = null;
    if (mustText) {
      mustCastle = CASTLES.find(c => c.name.toLowerCase().includes(mustText.toLowerCase()));
    }

    // Get base route
    const baseRoute = await getDirectionsRoute(startCoords, endCoords, mustCastle);
    if (!baseRoute) { document.getElementById('routeResults').innerHTML = '<p style="padding:12px;color:var(--text-muted)">Could not find a route.</p>'; return; }

    // Decode polyline
    const routePath = google.maps.geometry ?
      google.maps.geometry.encoding.decodePath(baseRoute.overview_polyline) :
      decodePolyline(baseRoute.overview_polyline);

    const ROUTE_COLORS = ['#E05A33', '#4A7FC1', '#2E8B57'];

    // Generate corridor-based route cards with per-profile stats
    const leg = baseRoute.legs[0];
    const baseDistM = leg.distance.value; // meters
    const baseDurS = leg.duration.value;  // seconds

    const latLngs = routePath.map(p => [typeof p.lat === 'function' ? p.lat() : p.lat, typeof p.lng === 'function' ? p.lng() : p.lng]);

    // Clear old polylines and markers
    routePolylines.forEach(p => map.removeLayer(p));
    routePolylines = [];
    routePlannerMarkers.forEach(m => map.removeLayer(m));
    routePlannerMarkers = [];

    const allBounds = L.latLngBounds(latLngs);

    const resultsHtml = CORRIDOR_PROFILES.map((profile, pi) => {
      const nearby = findCastlesAlongRoute(routePath, profile.width, profile.maxStops, mustCastle);

      // Estimate per-profile distance & duration
      let extraDistM = 0;
      nearby.forEach(c => {
        if (c.dist) extraDistM += c.dist * 2; // round trip detour from route
      });
      const totalDistM = baseDistM + extraDistM;
      const totalDurS = baseDurS + (extraDistM / 1000) * 180; // +3min per detour km

      const color = ROUTE_COLORS[pi];

      // Draw route polyline
      // Offset routes slightly so all 3 are visible (they share the same base road)
      const offsetLatLngs = latLngs.map(([lat, lng]) => {
        const offset = (pi - 1) * 0.003; // shift left/center/right
        return [lat + offset * 0.5, lng + offset];
      });
      const polyline = L.polyline(offsetLatLngs, { color: color, weight: 5, opacity: 0.8, dashArray: pi === 0 ? null : (pi === 1 ? '12 8' : '6 10') }).addTo(map);
      routePolylines.push(polyline);

      // Add castle pins
      nearby.forEach(c => {
        const tc = getTypeConfig(c.type);
        const marker = L.circleMarker([c.lat, c.lng], {
          radius: 8, fillColor: color, color: '#fff', weight: 2, fillOpacity: 0.9
        }).addTo(map);
        marker.bindTooltip(c.name, { direction: 'top', offset: [0, -8] });
        marker.on('click', () => {
          const castle = CASTLES.find(x => x.name === c.name);
          if (castle) openSidebar(castle);
        });
        routePlannerMarkers.push(marker);
        allBounds.extend([c.lat, c.lng]);
      });

      return renderRouteCard(profile, nearby, totalDistM, totalDurS, pi, color);
    }).join('');

    document.getElementById('routeResults').innerHTML = resultsHtml;

    // Hide all default pins — only show the route planner's circle markers
    markerGroup.clearLayers();

    map.fitBounds(allBounds, { padding: [60, 60] });

  } catch (err) {
    document.getElementById('routeResults').innerHTML = `<p style="padding:12px;color:var(--terracotta)">${err.message || 'Error finding route'}</p>`;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Find Castle Routes';
  }
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

function renderRouteCard(profile, castles, totalDistM, totalDurS, index, color) {
  if (castles.length === 0) return '';
  const castleList = castles.map(c => {
    const tc = getTypeConfig(c.type);
    const safeName = c.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    return `<li>${tc.emoji} <a href="#" class="route-castle-link" onclick="event.preventDefault(); var cs=CASTLES.find(x=>x.name==='${safeName}'); if(cs) openSidebar(cs);">${c.name}</a> <span class="castle-rating">★ ${c.rating}</span></li>`;
  }).join('');
  const namesJson = JSON.stringify(castles.map(c => c.name)).replace(/"/g, '&quot;');
  return `
    <div class="route-card" style="animation-delay:${index * 0.1}s">
      <div class="route-card-header" style="border-left: 4px solid ${color}; padding-left: 10px;">
        <span class="emoji">${profile.emoji}</span>
        <span class="title">${profile.name}</span>
      </div>
      <div class="route-card-meta">
        <strong>${formatDuration(totalDurS)}</strong> · ${formatDualDist(totalDistM)} · ${castles.length} castle${castles.length > 1 ? 's' : ''}
      </div>
      <ul class="route-castle-list">${castleList}</ul>
      <div class="route-card-actions">
        <button class="btn-show-route" onclick="showRouteCastles(${namesJson})">Show on Map</button>
        <button class="btn-save-route" onclick="saveRouteToBuilder(${namesJson})">Save Route</button>
      </div>
    </div>
  `;
}

function showRouteCastles(names) {
  const bounds = L.latLngBounds();
  names.forEach(name => {
    const c = CASTLES.find(x => x.name === name);
    if (c) bounds.extend([c.lat, c.lng]);
  });
  if (bounds.isValid()) map.fitBounds(bounds, { padding: [60, 60] });
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
function initUI() {
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('routeClose').addEventListener('click', closeRoutePanel);
  document.getElementById('overlayBackdrop').addEventListener('click', () => {
    closeSidebar();
    closeRoutePanel();
    closeBookmarksPanel();
  });

  document.getElementById('btnFilter').addEventListener('click', () => {
    const panel = document.getElementById('filterPanel');
    const btn = document.getElementById('btnFilter');
    panel.classList.toggle('active');
    btn.classList.toggle('active');
    // Close route panel if open
    if (panel.classList.contains('active')) closeRoutePanel();
  });

  document.getElementById('btnRoute').addEventListener('click', () => {
    openRoutePanel();
    document.getElementById('filterPanel').classList.remove('active');
    document.getElementById('btnFilter').classList.remove('active');
    closeSidebar();
  });

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
  try { return JSON.parse(localStorage.getItem('castle-explorer-bookmarks')) || []; }
  catch { return []; }
}
function saveBookmarks(arr) { localStorage.setItem('castle-explorer-bookmarks', JSON.stringify(arr)); }
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
    btn.textContent = faved ? '★' : '☆';
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
    return `<div class="bookmark-card-select">
      <input type="checkbox" class="bm-select-cb" value="${c.name.replace(/"/g, '&quot;')}" />
      <span class="emoji">${tc.emoji}</span>
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
  renderBookmarksPanel();
  document.getElementById('bookmarksPanel').classList.add('active');
  document.getElementById('overlayBackdrop').classList.add('active');
  document.getElementById('bookmarksRouteForm').style.display = 'none';
  document.getElementById('bookmarkRouteResults').innerHTML = '';
}

function closeBookmarksPanel() {
  document.getElementById('bookmarksPanel').classList.remove('active');
  document.getElementById('overlayBackdrop').classList.remove('active');
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
  document.getElementById('btnBookmarks').addEventListener('click', () => {
    openBookmarksPanel();
    document.getElementById('filterPanel').classList.remove('active');
    document.getElementById('btnFilter').classList.remove('active');
    closeSidebar();
    closeRoutePanel();
  });
  document.getElementById('bookmarksClose').addEventListener('click', closeBookmarksPanel);
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
  ['rbStartLocation', 'rbEndLocation', 'routeStart', 'routeEnd', 'bookmarkRouteStart'].forEach(id => {
    const el = document.getElementById(id);
    if (el) initPlacesAutocomplete(el);
  });

  // Update pin indicators on load
  updateMapPinBookmarks();

  // Quick view wiring
  document.getElementById('qvClose').addEventListener('click', closeQuickView);
  document.getElementById('qvDetailsBtn').addEventListener('click', () => {
    const castle = quickViewCastle;
    closeQuickView();
    if (castle) openSidebar(castle);
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
  map.on('click', () => closeQuickView());
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
