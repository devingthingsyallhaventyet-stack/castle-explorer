// ===== CASTLE EXPLORER APP =====

const typeColors = {
  castle: '#c44040',
  abbey: '#d4a546',
  ruin: '#8888aa',
  'tower house': '#5577cc',
  palace: '#8855bb',
  'fortified house': '#44aa66'
};

const typeEmoji = {
  castle: '🏰', abbey: '⛪', ruin: '🪨',
  'tower house': '🗼', palace: '👑', 'fortified house': '🏠'
};

// ===== GOOGLE SERVICES (initialized when API loads) =====
let directionsService = null;
let geocoderService = null;
let placesService = null;
const placesCache = {}; // cache Google Places results by castle name

function initGoogleServices() {
  directionsService = new google.maps.DirectionsService();
  geocoderService = new google.maps.Geocoder();
  // PlacesService needs a DOM element or map div
  const dummyDiv = document.createElement('div');
  placesService = new google.maps.places.PlacesService(dummyDiv);
}

if (window._googleReady) {
  initGoogleServices();
} else {
  window._onGoogleReady = initGoogleServices;
}

// ===== MAP INIT =====
const map = L.map('map', {
  center: [54.5, -4],
  zoom: 6,
  zoomControl: false
});

L.control.zoom({ position: 'bottomright' }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CartoDB',
  maxZoom: 19
}).addTo(map);

// ===== MARKERS =====
const markers = L.markerClusterGroup({
  maxClusterRadius: 50,
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  iconCreateFunction: function(cluster) {
    const count = cluster.getChildCount();
    let size = count < 10 ? 'small' : count < 30 ? 'medium' : 'large';
    return L.divIcon({
      html: `<div class="cluster-icon cluster-${size}">${count}</div>`,
      className: 'custom-cluster',
      iconSize: [40, 40]
    });
  }
});

let allMarkers = [];

function createIcon(type) {
  const color = typeColors[type] || '#888';
  return L.divIcon({
    html: `<div class="map-pin" style="background:${color}">${typeEmoji[type] || '📍'}</div>`,
    className: 'custom-pin',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

CASTLES.forEach((c, i) => {
  const marker = L.marker([c.lat, c.lng], { icon: createIcon(c.type) });
  marker._castleIndex = i;
  marker.on('click', () => openSidebar(c));
  markers.addLayer(marker);
  allMarkers.push({ marker, data: c });
});

map.addLayer(markers);

// ===== SIDEBAR =====
const sidebar = document.getElementById('sidebar');
const sidebarImg = document.getElementById('sidebar-img');
const sidebarPlaceholder = document.getElementById('sidebar-img-placeholder');
const sidebarGallery = document.getElementById('sidebar-gallery');
const sidebarImgWrap = document.getElementById('sidebar-img-wrap');
const galleryTrack = document.getElementById('gallery-track');
const galleryDots = document.getElementById('gallery-dots');
let galleryIndex = 0;
let galleryPhotos = [];

function setupGallery(photos) {
  galleryPhotos = photos;
  galleryIndex = 0;
  galleryTrack.innerHTML = '';
  galleryDots.innerHTML = '';

  if (!photos || photos.length === 0) {
    sidebarGallery.style.display = 'none';
    sidebarImgWrap.style.display = 'block';
    return;
  }

  sidebarGallery.style.display = 'block';
  sidebarImgWrap.style.display = 'none';

  photos.forEach((url, i) => {
    const img = document.createElement('img');
    img.src = url;
    img.className = 'gallery-slide';
    img.alt = 'Castle photo';
    galleryTrack.appendChild(img);

    const dot = document.createElement('span');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    galleryDots.appendChild(dot);
  });

  updateGalleryPosition();
}

function goToSlide(i) {
  galleryIndex = i;
  updateGalleryPosition();
}

function updateGalleryPosition() {
  galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
  galleryDots.querySelectorAll('.gallery-dot').forEach((d, i) => {
    d.classList.toggle('active', i === galleryIndex);
  });
}

document.getElementById('gallery-prev').addEventListener('click', () => {
  if (galleryPhotos.length === 0) return;
  galleryIndex = (galleryIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
  updateGalleryPosition();
});

document.getElementById('gallery-next').addEventListener('click', () => {
  if (galleryPhotos.length === 0) return;
  galleryIndex = (galleryIndex + 1) % galleryPhotos.length;
  updateGalleryPosition();
});

function openSidebar(c) {
  document.getElementById('sidebar-name').textContent = c.name;
  document.getElementById('sidebar-type').textContent = (typeEmoji[c.type] || '') + ' ' + c.type;
  document.getElementById('sidebar-era').textContent = c.era;
  document.getElementById('sidebar-condition').textContent = c.condition;
  document.getElementById('sidebar-location').textContent = `${c.county}, ${c.country}`;
  document.getElementById('sidebar-rating').textContent = c.rating.toFixed(1);
  document.getElementById('sidebar-stars').textContent = renderStars(c.rating);
  document.getElementById('sidebar-reviews').textContent = `(${c.reviewCount.toLocaleString()} reviews)`;
  document.getElementById('sidebar-desc').textContent = c.description;
  document.getElementById('sidebar-directions').href = `https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lng}`;

  // Reset Google-enhanced sections
  document.getElementById('sidebar-google-attr').style.display = 'none';
  document.getElementById('sidebar-hours').style.display = 'none';

  // Default: show existing image, no gallery
  setupGallery([]);
  if (c.image) {
    sidebarImg.src = c.image;
    sidebarImg.style.display = 'block';
    sidebarPlaceholder.style.display = 'none';
  } else {
    sidebarImg.style.display = 'none';
    sidebarPlaceholder.style.display = 'flex';
  }

  sidebar.classList.add('open');

  // Enhance with Google Places data
  fetchPlaceDetails(c);
}

function fetchPlaceDetails(castle) {
  if (!placesService) return;

  const cacheKey = castle.name + '|' + castle.lat + '|' + castle.lng;
  if (placesCache[cacheKey]) {
    applyPlaceDetails(castle, placesCache[cacheKey]);
    return;
  }

  const request = {
    query: castle.name + ' ' + castle.county,
    location: new google.maps.LatLng(castle.lat, castle.lng),
    radius: 5000
  };

  placesService.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
      const place = results[0];
      // Get full details including photos and hours
      placesService.getDetails({
        placeId: place.place_id,
        fields: ['rating', 'user_ratings_total', 'photos', 'opening_hours', 'url', 'name']
      }, (details, detailStatus) => {
        if (detailStatus === google.maps.places.PlacesServiceStatus.OK && details) {
          const data = {
            rating: details.rating || null,
            reviewCount: details.user_ratings_total || null,
            photos: (details.photos || []).slice(0, 3).map(p => p.getUrl({ maxWidth: 400 })),
            hours: details.opening_hours ? details.opening_hours.weekday_text : null,
            isOpen: details.opening_hours ? details.opening_hours.isOpen() : null,
            url: details.url || null
          };
          placesCache[cacheKey] = data;
          applyPlaceDetails(castle, data);
        }
      });
    }
  });
}

function applyPlaceDetails(castle, data) {
  // Only apply if the sidebar is still showing this castle
  if (document.getElementById('sidebar-name').textContent !== castle.name) return;

  // Photos gallery
  if (data.photos && data.photos.length > 0) {
    setupGallery(data.photos);
  }

  // Rating from Google
  if (data.rating) {
    document.getElementById('sidebar-rating').textContent = data.rating.toFixed(1);
    document.getElementById('sidebar-stars').textContent = renderStars(data.rating);
    if (data.reviewCount) {
      document.getElementById('sidebar-reviews').textContent = `(${data.reviewCount.toLocaleString()} reviews)`;
    }
    document.getElementById('sidebar-google-attr').style.display = 'flex';
  }

  // Opening hours
  if (data.hours && data.hours.length > 0) {
    const hoursList = document.getElementById('sidebar-hours-list');
    hoursList.innerHTML = data.hours.map(h => `<li>${h}</li>`).join('');
    document.getElementById('sidebar-hours').style.display = 'block';
  }

  // Google Maps URL for directions
  if (data.url) {
    document.getElementById('sidebar-directions').href = data.url;
  }
}

document.getElementById('sidebar-close').addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// ===== FILTERS =====
let filters = { country: 'all', type: 'all', condition: 'all' };

function setupFilterChips(containerId, filterKey) {
  const container = document.getElementById(containerId);
  container.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    filters[filterKey] = chip.dataset.value;
    applyFilters();
  });
}

setupFilterChips('filter-country', 'country');
setupFilterChips('filter-type', 'type');
setupFilterChips('filter-condition', 'condition');

function applyFilters() {
  markers.clearLayers();
  let count = 0;
  allMarkers.forEach(({ marker, data }) => {
    const matchCountry = filters.country === 'all' || data.country === filters.country;
    const matchType = filters.type === 'all' || data.type === filters.type;
    const matchCondition = filters.condition === 'all' || data.condition === filters.condition;
    if (matchCountry && matchType && matchCondition) {
      markers.addLayer(marker);
      count++;
    }
  });
  document.getElementById('visible-count').textContent = count;
}

document.getElementById('total-count').textContent = CASTLES.length;
document.getElementById('visible-count').textContent = CASTLES.length;

// ===== FILTER TOGGLE =====
document.getElementById('btn-filter-toggle').addEventListener('click', () => {
  document.getElementById('filter-panel').classList.toggle('open');
  document.getElementById('route-panel').classList.remove('open');
});

// ===== SEARCH =====
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (q.length < 2) { searchResults.innerHTML = ''; searchResults.style.display = 'none'; return; }

  const matches = CASTLES.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.county.toLowerCase().includes(q) ||
    c.country.toLowerCase().includes(q)
  ).slice(0, 8);

  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="search-item">No results</div>';
  } else {
    searchResults.innerHTML = matches.map(c =>
      `<div class="search-item" data-lat="${c.lat}" data-lng="${c.lng}">
        <span class="search-emoji">${typeEmoji[c.type] || '📍'}</span>
        <span class="search-name">${c.name}</span>
        <span class="search-loc">${c.county}, ${c.country}</span>
      </div>`
    ).join('');
  }
  searchResults.style.display = 'block';
});

searchResults.addEventListener('click', (e) => {
  const item = e.target.closest('.search-item');
  if (!item || !item.dataset.lat) return;
  const lat = parseFloat(item.dataset.lat);
  const lng = parseFloat(item.dataset.lng);
  map.setView([lat, lng], 14);
  const castle = CASTLES.find(c => c.lat === lat && c.lng === lng);
  if (castle) openSidebar(castle);
  searchResults.style.display = 'none';
  searchInput.value = '';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap')) searchResults.style.display = 'none';
});

// ===== ROUTE PLANNER =====
document.getElementById('btn-route-toggle').addEventListener('click', () => {
  document.getElementById('route-panel').classList.toggle('open');
  document.getElementById('filter-panel').classList.remove('open');
});

// ===== GOOGLE POLYLINE DECODER =====
function decodePolyline(encoded) {
  const points = [];
  let index = 0, lat = 0, lng = 0;
  while (index < encoded.length) {
    let b, shift = 0, result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    lat += (result & 1) ? ~(result >> 1) : (result >> 1);

    shift = 0; result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    lng += (result & 1) ? ~(result >> 1) : (result >> 1);

    points.push([lat / 1e5, lng / 1e5]);
  }
  return points;
}

// ===== GEOCODE CITY NAME =====
function geocodeCity(name) {
  return new Promise((resolve, reject) => {
    if (!geocoderService) {
      reject(new Error('Google Maps not loaded yet'));
      return;
    }
    // Bias towards UK/Ireland
    geocoderService.geocode({
      address: name,
      region: 'gb'
    }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const loc = results[0].geometry.location;
        resolve({ lat: loc.lat(), lng: loc.lng(), name: results[0].formatted_address });
      } else {
        reject(new Error(`Could not geocode "${name}"`));
      }
    });
  });
}

// ===== DISTANCE UTILS =====
function distKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// Distance from point to polyline (array of [lat,lng])
function pointToPolylineDist(plat, plng, polyline) {
  let minDist = Infinity;
  for (let i = 0; i < polyline.length - 1; i++) {
    const d = pointToSegmentDist(plat, plng, polyline[i][0], polyline[i][1], polyline[i+1][0], polyline[i+1][1]);
    if (d < minDist) minDist = d;
  }
  return minDist;
}

function pointToSegmentDist(px, py, ax, ay, bx, by) {
  const t = Math.max(0, Math.min(1, ((px-ax)*(bx-ax)+(py-ay)*(by-ay)) / ((bx-ax)**2+(by-ay)**2 || 1)));
  return distKm(px, py, ax+t*(bx-ax), ay+t*(by-ay));
}

// Approximate progress along a polyline (0..1)
function progressAlongPolyline(plat, plng, polyline) {
  let minDist = Infinity, bestSeg = 0, bestT = 0;
  let totalLen = 0;
  const segLens = [];
  for (let i = 0; i < polyline.length - 1; i++) {
    const sl = distKm(polyline[i][0], polyline[i][1], polyline[i+1][0], polyline[i+1][1]);
    segLens.push(sl);
    totalLen += sl;
    const ax = polyline[i][0], ay = polyline[i][1], bx = polyline[i+1][0], by = polyline[i+1][1];
    const t = Math.max(0, Math.min(1, ((plat-ax)*(bx-ax)+(plng-ay)*(by-ay)) / ((bx-ax)**2+(by-ay)**2 || 1)));
    const d = distKm(plat, plng, ax+t*(bx-ax), ay+t*(by-ay));
    if (d < minDist) { minDist = d; bestSeg = i; bestT = t; }
  }
  let dist = 0;
  for (let i = 0; i < bestSeg; i++) dist += segLens[i];
  dist += segLens[bestSeg] * bestT;
  return totalLen > 0 ? dist / totalLen : 0;
}

// ===== FIND CASTLES ALONG A POLYLINE =====
function findCastlesAlongPolyline(polyline, corridorKm) {
  const results = [];
  // Sample polyline every ~10 points for speed
  const step = Math.max(1, Math.floor(polyline.length / 200));
  const sampled = polyline.filter((_, i) => i % step === 0 || i === polyline.length - 1);

  CASTLES.forEach(c => {
    const d = pointToPolylineDist(c.lat, c.lng, sampled);
    if (d <= corridorKm) {
      const progress = progressAlongPolyline(c.lat, c.lng, sampled);
      results.push({ ...c, distFromRoute: d, progress });
    }
  });
  return results.sort((a, b) => a.progress - b.progress);
}

// ===== ROUTE WITH GOOGLE DIRECTIONS =====
function getGoogleRoute(origin, destination, waypoints) {
  return new Promise((resolve, reject) => {
    if (!directionsService) {
      reject(new Error('Google Maps not loaded'));
      return;
    }
    const request = {
      origin: new google.maps.LatLng(origin.lat, origin.lng),
      destination: new google.maps.LatLng(destination.lat, destination.lng),
      travelMode: google.maps.TravelMode.DRIVING,
    };
    if (waypoints && waypoints.length > 0) {
      request.waypoints = waypoints.map(wp => ({
        location: new google.maps.LatLng(wp.lat, wp.lng),
        stopover: true
      }));
      request.optimizeWaypoints = true;
    }
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        resolve(result);
      } else {
        reject(new Error(`Directions failed: ${status}`));
      }
    });
  });
}

// Extract polyline, total distance, total duration from DirectionsResult
function parseDirectionsResult(result) {
  const route = result.routes[0];
  let totalDist = 0, totalDur = 0;
  const allPoints = [];
  route.legs.forEach(leg => {
    totalDist += leg.distance.value; // meters
    totalDur += leg.duration.value; // seconds
    leg.steps.forEach(step => {
      const pts = decodePolyline(step.polyline.points);
      pts.forEach(p => allPoints.push(p));
    });
  });
  return {
    polyline: allPoints,
    distanceKm: totalDist / 1000,
    durationMin: Math.round(totalDur / 60),
    distanceText: route.legs.map(l => l.distance.text).join(' + '),
    durationText: formatDuration(totalDur)
  };
}

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  if (h === 0) return `${m} min`;
  return `${h}h ${m}m`;
}

// Store route polylines on map
let routePolylines = [];

function clearRoutePolylines() {
  routePolylines.forEach(p => map.removeLayer(p));
  routePolylines = [];
  if (window._routeLine) { map.removeLayer(window._routeLine); window._routeLine = null; }
}

// ===== ROUTE BUTTON HANDLER =====
document.getElementById('btn-find-route').addEventListener('click', async () => {
  const fromText = document.getElementById('route-from').value.trim();
  const toText = document.getElementById('route-to').value.trim();
  const viaText = document.getElementById('route-via').value.trim();
  const resultsDiv = document.getElementById('route-results');
  const loadingDiv = document.getElementById('route-loading');

  if (!fromText || !toText) {
    resultsDiv.innerHTML = '<p class="route-error">Please enter both a start and end point.</p>';
    return;
  }

  if (!directionsService || !geocoderService) {
    resultsDiv.innerHTML = '<p class="route-error">Google Maps is still loading. Please wait a moment and try again.</p>';
    return;
  }

  resultsDiv.innerHTML = '';
  loadingDiv.style.display = 'flex';
  clearRoutePolylines();

  try {
    // Geocode start and end
    const [fromGeo, toGeo] = await Promise.all([
      geocodeCity(fromText),
      geocodeCity(toText)
    ]);

    // Find "must visit" castle
    let mustVisit = null;
    if (viaText) {
      const vq = viaText.toLowerCase();
      mustVisit = CASTLES.find(c => c.name.toLowerCase().includes(vq));
    }

    // Get base route (no waypoints) to establish the corridor
    const baseResult = await getGoogleRoute(fromGeo, toGeo, mustVisit ? [{ lat: mustVisit.lat, lng: mustVisit.lng }] : []);
    const baseParsed = parseDirectionsResult(baseResult);

    // Route configs
    const routeConfigs = [
      { name: '🏰 Castle Hunter', corridor: 30, maxCastles: 8, minRating: 0, color: '#c44040' },
      { name: '⚖️ Balanced', corridor: 15, maxCastles: 5, minRating: 0, color: '#d4a546' },
      { name: '⚡ Quick Detour', corridor: 8, maxCastles: 3, minRating: 4.3, color: '#44aa66' },
    ];

    const descs = [
      'Maximum castles, scenic detours',
      'Great stops without major detours',
      'Fastest route, nearby highlights only'
    ];

    let html = '';

    for (let ri = 0; ri < routeConfigs.length; ri++) {
      const rc = routeConfigs[ri];

      // Find castles along the base route polyline
      let castles = findCastlesAlongPolyline(baseParsed.polyline, rc.corridor);

      // Filter by rating
      if (rc.minRating > 0) castles = castles.filter(c => c.rating >= rc.minRating);

      // Sort by rating descending, take top N
      const topCastles = [...castles].sort((a, b) => b.rating - a.rating).slice(0, rc.maxCastles);

      // Re-sort by progress along route
      topCastles.sort((a, b) => a.progress - b.progress);

      // Add must-visit if not already included
      if (mustVisit && !topCastles.find(c => c.name === mustVisit.name)) {
        const progress = progressAlongPolyline(mustVisit.lat, mustVisit.lng, baseParsed.polyline);
        topCastles.push({ ...mustVisit, distFromRoute: 0, progress });
        topCastles.sort((a, b) => a.progress - b.progress);
      }

      // Build waypoints (limit to 8 for Directions API)
      const waypoints = topCastles.slice(0, 8).map(c => ({ lat: c.lat, lng: c.lng }));

      let routeResult, routeParsed;
      try {
        if (waypoints.length > 0) {
          routeResult = await getGoogleRoute(fromGeo, toGeo, waypoints);
          routeParsed = parseDirectionsResult(routeResult);
        } else {
          routeResult = baseResult;
          routeParsed = baseParsed;
        }
      } catch (e) {
        // If waypoint route fails, fall back to base
        routeResult = baseResult;
        routeParsed = baseParsed;
      }

      // Calculate stop time estimate (30 min per castle)
      const stopTimeSec = topCastles.length * 30 * 60;
      const totalWithStops = formatDuration(routeParsed.durationMin * 60 + stopTimeSec);

      html += `
        <div class="route-card" data-route-index="${ri}">
          <div class="route-header">
            <span class="route-name">${rc.name}</span>
            <span class="route-time">${routeParsed.durationText} driving</span>
          </div>
          <p class="route-desc">${descs[ri]}</p>
          <div class="route-stats-row">
            <span class="route-stat-item">📏 ${routeParsed.distanceKm.toFixed(0)} km</span>
            <span class="route-stat-item">🏰 ${topCastles.length} stops</span>
            <span class="route-stat-item">⏱ ~${totalWithStops} total</span>
          </div>
          <div class="route-castles">
            ${topCastles.map(c => `<div class="route-castle-item">${typeEmoji[c.type] || '📍'} ${c.name} <span class="route-castle-rating">★ ${c.rating}</span></div>`).join('')}
          </div>
          <button class="btn-show-route" data-route-index="${ri}">Show on map</button>
        </div>
      `;

      // Store polyline data for later display
      if (!window._routeData) window._routeData = [];
      window._routeData[ri] = { polyline: routeParsed.polyline, color: rc.color, castles: topCastles };
    }

    resultsDiv.innerHTML = html;

    // Show the first route by default
    showRouteOnMap(0);

    // Add click handlers for "Show on map" buttons
    resultsDiv.querySelectorAll('.btn-show-route').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.routeIndex);
        showRouteOnMap(idx);
        // Highlight active card
        resultsDiv.querySelectorAll('.route-card').forEach(card => card.classList.remove('active'));
        btn.closest('.route-card').classList.add('active');
      });
    });

  } catch (err) {
    resultsDiv.innerHTML = `<p class="route-error">⚠️ ${err.message}</p>`;
  } finally {
    loadingDiv.style.display = 'none';
  }
});

function showRouteOnMap(index) {
  clearRoutePolylines();
  const data = window._routeData && window._routeData[index];
  if (!data) return;

  const polyline = L.polyline(data.polyline, {
    color: data.color,
    weight: 4,
    opacity: 0.8
  }).addTo(map);
  routePolylines.push(polyline);

  // Add castle markers along route
  data.castles.forEach(c => {
    const marker = L.circleMarker([c.lat, c.lng], {
      radius: 8,
      fillColor: data.color,
      fillOpacity: 0.9,
      color: '#fff',
      weight: 2
    }).addTo(map);
    marker.bindTooltip(c.name, { permanent: false });
    routePolylines.push(marker);
  });

  map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
}

// ===== KEYBOARD SHORTCUT =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    sidebar.classList.remove('open');
    document.getElementById('filter-panel').classList.remove('open');
    document.getElementById('route-panel').classList.remove('open');
  }
  if (e.key === '/' && !e.ctrlKey && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    searchInput.focus();
  }
});
