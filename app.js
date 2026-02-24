// ========== CONFIG ==========
const TYPE_CONFIG = {
  castle:          { emoji: '🏰', color: '#C2714F', class: 'castle' },
  palace:          { emoji: '👑', color: '#D4A843', class: 'palace' },
  abbey:           { emoji: '⛪', color: '#6B8F71', class: 'abbey' },
  'tower house':   { emoji: '🗼', color: '#7B8DB5', class: 'tower' },
  'fortified house': { emoji: '🛡️', color: '#8B8680', class: 'fortified' },
};

const CORRIDOR_PROFILES = [
  { name: 'Castle Hunter', emoji: '🏰', width: 30000, maxStops: 8 },
  { name: 'Balanced Explorer', emoji: '⚖️', width: 15000, maxStops: 5 },
  { name: 'Quick Tour', emoji: '⚡', width: 8000, maxStops: 3 },
];

// ========== STATE ==========
let map, markerGroup, markers = [], routePolylines = [];
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

function initMarkers() {
  CASTLES.forEach((c, i) => {
    const tc = getTypeConfig(c.type);
    const icon = L.divIcon({
      html: `<div class="map-pin map-pin-${tc.class}">${tc.emoji}</div>`,
      className: '', iconSize: [28, 28], iconAnchor: [14, 14]
    });
    const m = L.marker([c.lat, c.lng], { icon });
    m.castleIndex = i;
    m.on('click', () => openSidebar(c));
    markers.push(m);
    markerGroup.addLayer(m);
  });
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

function applyFilters() {
  markerGroup.clearLayers();
  let count = 0;
  CASTLES.forEach((c, i) => {
    const show =
      (activeFilters.country.size === 0 || activeFilters.country.has(c.country)) &&
      (activeFilters.type.size === 0 || activeFilters.type.has(c.type)) &&
      (activeFilters.condition.size === 0 || activeFilters.condition.has(c.condition));
    if (show) { markerGroup.addLayer(markers[i]); count++; }
  });
  updateFilterCounter(count);
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
      fields: ['displayName', 'rating', 'userRatingCount', 'photos', 'regularOpeningHours', 'googleMapsURI'],
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
  // Google rating
  if (place.rating) {
    const count = place.userRatingCount || 0;
    document.getElementById('sidebarGoogle').innerHTML = `
      <div class="google-rating">
        <img src="https://www.gstatic.com/images/branding/product/1x/maps_round_48dp.png" alt="Google" width="20" height="20" />
        Google rating: <strong>${place.rating}</strong>/5 (${count.toLocaleString()} reviews)
      </div>
    `;
  }
  // Photos
  if (place.photos && place.photos.length > 0) {
    const photosHtml = place.photos.slice(0, 3).map(p => {
      const url = p.getURI ? p.getURI({ maxWidth: 300, maxHeight: 225 }) : (p.getUrl ? p.getUrl({ maxWidth: 300, maxHeight: 225 }) : '');
      if (!url) return '';
      return `<img src="${url}" alt="Photo" />`;
    }).join('');
    document.getElementById('sidebarPhotos').innerHTML = photosHtml;
  }
  // Hours
  if (place.regularOpeningHours && place.regularOpeningHours.weekdayDescriptions) {
    document.getElementById('sidebarHours').innerHTML =
      `<strong>Opening Hours</strong><br/>` + place.regularOpeningHours.weekdayDescriptions.join('<br/>');
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

    // Generate corridor-based route cards
    const resultsHtml = CORRIDOR_PROFILES.map((profile, pi) => {
      const nearby = findCastlesAlongRoute(routePath, profile.width, profile.maxStops, mustCastle);
      const leg = baseRoute.legs[0];
      return renderRouteCard(profile, nearby, leg, pi);
    }).join('');

    document.getElementById('routeResults').innerHTML = resultsHtml;

    // Clear old polylines
    routePolylines.forEach(p => map.removeLayer(p));
    routePolylines = [];

    // Show base route on map
    const latLngs = routePath.map(p => [p.lat ? p.lat() : p.lat, p.lng ? p.lng() : p.lng]);
    const polyline = L.polyline(latLngs, { color: '#6B8F71', weight: 4, opacity: 0.7 }).addTo(map);
    routePolylines.push(polyline);
    map.fitBounds(polyline.getBounds(), { padding: [60, 60] });

  } catch (err) {
    document.getElementById('routeResults').innerHTML = `<p style="padding:12px;color:var(--terracotta)">${err.message || 'Error finding route'}</p>`;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Find Castle Routes';
  }
}

function renderRouteCard(profile, castles, leg, index) {
  if (castles.length === 0) return '';
  const castleList = castles.map(c => {
    const tc = getTypeConfig(c.type);
    return `<li>${tc.emoji} ${c.name} <span class="castle-rating">★ ${c.rating}</span></li>`;
  }).join('');
  return `
    <div class="route-card" style="animation-delay:${index * 0.1}s">
      <div class="route-card-header">
        <span class="emoji">${profile.emoji}</span>
        <span class="title">${profile.name}</span>
      </div>
      <div class="route-card-meta">
        <strong>${leg.duration.text}</strong> · ${leg.distance.text} · ${castles.length} castle${castles.length > 1 ? 's' : ''}
      </div>
      <ul class="route-castle-list">${castleList}</ul>
      <button class="btn-show-route" onclick="showRouteCastles(${JSON.stringify(castles.map(c => c.name)).replace(/"/g, '&quot;')})">Show on Map</button>
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
}
