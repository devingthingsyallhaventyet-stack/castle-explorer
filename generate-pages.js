const fs = require('fs');
const path = require('path');

// ===== Load Data =====
const vm = require('vm');
const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8').replace(/\bconst\b/g, 'var');
const dataCtx = {};
vm.runInNewContext(dataJs, dataCtx);
const CASTLES = dataCtx.CASTLES;

const richJs = fs.readFileSync(path.join(__dirname, 'rich-data.js'), 'utf8').replace(/\bconst\b/g, 'var');
const richCtx = {};
vm.runInNewContext(richJs, richCtx);
const RICH_SITE_DATA = richCtx.RICH_SITE_DATA;

console.log(`Loaded ${CASTLES.length} castles, ${Object.keys(RICH_SITE_DATA).length} rich entries`);

// ===== Helpers =====
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function escapeJson(str) {
  if (!str) return '';
  return String(str).replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'').replace(/\t/g,'\\t');
}

function truncate(str, max) {
  if (!str || str.length <= max) return str || '';
  return str.substring(0, max - 3) + '...';
}

const TYPE_EMOJI = {
  castle: '🏰', palace: '👑', abbey: '⛪', 'tower house': '🗼', 'fortified house': '🛡️'
};
function getTypeEmoji(type) { return TYPE_EMOJI[type] || '🏛️'; }

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2-lat1)*Math.PI/180;
  const dLng = (lng2-lng1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function starsHtml(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.3;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

function accessLabel(access) {
  if (access === 'free') return '🆓 Free';
  if (access === 'paid') return '🎟️ Paid';
  if (access === 'exterior-only') return '👁️ Exterior';
  return access || '—';
}

// Pre-compute slugs
const slugMap = new Map();
CASTLES.forEach(c => slugMap.set(c.name, slugify(c.name)));

// ===== Find Nearby =====
function findNearby(castle, count=5, maxKm=30) {
  const results = [];
  for (const c of CASTLES) {
    if (c.name === castle.name) continue;
    const d = haversine(castle.lat, castle.lng, c.lat, c.lng);
    if (d <= maxKm) results.push({ castle: c, dist: d });
  }
  results.sort((a,b) => a.dist - b.dist);
  return results.slice(0, count);
}

// ===== CSS =====
const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
:root{--sage:#4a7c59;--sage-light:#5a9a6e;--cream:#f5f0e8;--cream-dark:#e8e0d0;--text:#1a1a1a;--text-light:#555;--border:#e0d8c8;--radius:12px}
body{font-family:'Inter',sans-serif;background:var(--cream);color:var(--text);line-height:1.6}
a{color:var(--sage);text-decoration:none}a:hover{text-decoration:underline}
h1,h2,h3{font-family:'DM Serif Display',serif;font-weight:400}
h1{font-size:2.2rem;margin-bottom:.3rem}
h2{font-size:1.5rem;margin:2rem 0 1rem;color:var(--text)}
.site-header{background:#fff;border-bottom:1px solid var(--border);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.site-logo{font-family:'DM Serif Display',serif;font-size:1.3rem;color:var(--text);font-weight:400}
.site-header nav a{color:var(--sage);font-weight:600;font-size:.95rem}
.hero-image{position:relative;width:100%;max-height:420px;overflow:hidden;background:#ddd}
.hero-image img{width:100%;height:420px;object-fit:cover;display:block}
.hero-overlay{position:absolute;bottom:16px;left:16px}
.hero-type{background:rgba(0,0,0,.65);color:#fff;padding:6px 14px;border-radius:20px;font-size:.9rem;font-weight:600}
.page-content{max-width:780px;margin:0 auto;padding:2rem 1.5rem 3rem}
.location{color:var(--text-light);margin-bottom:1.5rem;font-size:1rem}
.location a{color:var(--sage);font-weight:600}
.key-stats{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:1.5rem;background:#fff}
.stat{padding:1rem;text-align:center;border-right:1px solid var(--border)}
.stat:last-child{border-right:none}
.stat-value{font-size:1.3rem;margin-bottom:2px}
.stat-label{font-size:.78rem;color:var(--text-light);text-transform:uppercase;letter-spacing:.5px}
.rating-section{display:flex;align-items:center;gap:.6rem;margin-bottom:1.5rem;flex-wrap:wrap}
.rating-big{font-family:'DM Serif Display',serif;font-size:2rem;color:var(--sage)}
.rating-stars{color:#e6a817;font-size:1.2rem}
.rating-count{color:var(--text-light);font-size:.9rem}
.tags{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem}
.tag{background:#fff;border:1px solid var(--border);padding:4px 12px;border-radius:20px;font-size:.82rem;color:var(--text-light)}
section{margin-bottom:1rem}
section p{color:var(--text);font-size:1rem;line-height:1.7}
.transport-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:1rem 1.2rem;margin-bottom:.7rem}
.transport-card .tc-header{display:flex;align-items:center;gap:.5rem;font-weight:600;margin-bottom:.3rem}
.transport-card .tc-detail{color:var(--text-light);font-size:.9rem}
.transport-card a{font-weight:600;font-size:.9rem}
.terrain-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.8rem}
.chip{padding:5px 12px;border-radius:20px;font-size:.82rem;font-weight:500;display:inline-flex;align-items:center;gap:4px}
.chip.green{background:#e8f5e9;color:#2e7d32}
.chip.amber{background:#fff8e1;color:#f57f17}
.chip.red{background:#fce4ec;color:#c62828}
.terrain-note{color:var(--text-light);font-size:.9rem;line-height:1.6}
.event-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:1rem 1.2rem;margin-bottom:.7rem;display:flex;gap:1rem;align-items:flex-start}
.event-date{background:var(--sage);color:#fff;border-radius:8px;padding:6px 10px;text-align:center;min-width:50px;flex-shrink:0}
.event-date .ed-month{font-size:.65rem;text-transform:uppercase;letter-spacing:1px;opacity:.85}
.event-date .ed-day{font-size:1.3rem;font-weight:700;line-height:1.1}
.event-body .eb-name{font-weight:600;margin-bottom:2px}
.event-body .eb-desc{color:var(--text-light);font-size:.88rem}
.event-badge{display:inline-block;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:10px;margin-top:4px;text-transform:uppercase}
.event-badge.family{background:#e8f5e9;color:#2e7d32}
.event-badge.concert{background:#e3f2fd;color:#1565c0}
.event-badge.seasonal{background:#fff8e1;color:#f57f17}
.event-badge.special{background:#fce4ec;color:#c62828}
.event-meta{color:var(--text-light);font-size:.8rem;margin-top:2px}
.nearby-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.8rem}
.nearby-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:1rem;display:block;transition:box-shadow .2s}
.nearby-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.08);text-decoration:none}
.nearby-name{font-weight:600;color:var(--text);margin-bottom:4px}
.nearby-meta{font-size:.82rem;color:var(--text-light)}
.cta-section{text-align:center;margin:2.5rem 0 1rem;display:flex;flex-direction:column;align-items:center;gap:.8rem}
.cta-button{background:var(--sage);color:#fff;padding:14px 32px;border-radius:var(--radius);font-weight:700;font-size:1.05rem;display:inline-block;transition:background .2s}
.cta-button:hover{background:var(--sage-light);text-decoration:none}
.cta-secondary{color:var(--sage);font-weight:600;font-size:.95rem}
footer{text-align:center;padding:2rem;color:var(--text-light);font-size:.85rem;border-top:1px solid var(--border);margin-top:1rem}
footer a{color:var(--sage)}
@media(max-width:600px){
  .key-stats{grid-template-columns:repeat(2,1fr)}
  .stat:nth-child(2){border-right:none}
  h1{font-size:1.7rem}
  .page-content{padding:1.5rem 1rem 2rem}
  .hero-image img{height:260px}
}
`;

// ===== Generate HTML =====
function generatePage(castle) {
  const slug = slugMap.get(castle.name);
  const rich = RICH_SITE_DATA[castle.name] || null;
  const typeEmoji = getTypeEmoji(castle.type);
  const rawDesc = castle.description || `${castle.name} - ${castle.type} in ${castle.county}, ${castle.country}. Discover visiting info, photos, reviews, and directions on Scenic Route.`;
  const metaDesc = truncate(rawDesc.replace(/\s+/g,' '), 160);
  const eraDisplay = castle.era || '—';
  const accLabel = accessLabel(castle.access);
  const stars = starsHtml(castle.rating);
  const baseUrl = 'https://devingthingsyallhaventyet-stack.github.io/castle-explorer';

  // Tags
  const tagsHtml = (castle.tags && castle.tags.length) ?
    `<div class="tags">${castle.tags.map(t => `<span class="tag">${escapeHtml(t.replace(/-/g,' '))}</span>`).join('')}</div>` : '';

  // Getting There
  let gettingThereHtml = '';
  if (rich && rich.gettingThere) {
    gettingThereHtml = rich.gettingThere.map(g =>
      `<div class="transport-card"><div class="tc-header">${g.icon} ${escapeHtml(g.name)}</div><div class="tc-detail">${escapeHtml(g.detail)}</div>${g.link ? `<a href="${escapeHtml(g.link)}">${escapeHtml(g.linkText || 'Directions →')}</a>` : ''}</div>`
    ).join('');
  } else {
    gettingThereHtml = `<div class="transport-card"><div class="tc-header">📍 Directions</div><div class="tc-detail">Use the link below to get directions to ${escapeHtml(castle.name)}.</div><a href="https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}">Get directions via Google Maps →</a></div>`;
  }

  // Terrain
  let terrainHtml = '';
  if (rich && rich.terrain) {
    const chips = rich.terrain.chips.map(c => `<span class="chip ${c.cls}">${c.icon} ${escapeHtml(c.text)}</span>`).join('');
    terrainHtml = `<div class="terrain-chips">${chips}</div>${rich.terrain.note ? `<p class="terrain-note">${escapeHtml(rich.terrain.note)}</p>` : ''}`;
  } else {
    terrainHtml = `<p class="terrain-note">Terrain information not yet available for this site. Check before visiting if you have accessibility requirements.</p>`;
  }

  // Events
  let eventsSection = '';
  if (rich && rich.events && rich.events.length) {
    const cards = rich.events.map(e =>
      `<div class="event-card"><div class="event-date"><div class="ed-month">${escapeHtml(e.month)}</div><div class="ed-day">${escapeHtml(String(e.day))}</div></div><div class="event-body"><div class="eb-name">${escapeHtml(e.name)}</div><div class="eb-desc">${escapeHtml(e.desc)}</div>${e.badge ? `<span class="event-badge ${e.badge}">${escapeHtml(e.badgeText)}</span>` : ''}${e.meta ? `<div class="event-meta">${escapeHtml(e.meta)}</div>` : ''}</div></div>`
    ).join('');
    eventsSection = `<section><h2>Events & Activities</h2>${cards}</section>`;
  }

  // Nearby
  const nearby = findNearby(castle);
  let nearbyHtml = '';
  if (nearby.length) {
    nearbyHtml = `<div class="nearby-grid">${nearby.map(n => {
      const ns = slugMap.get(n.castle.name);
      return `<a href="./${ns}.html" class="nearby-card"><div class="nearby-name">${escapeHtml(n.castle.name)}</div><div class="nearby-meta">★ ${n.castle.rating} · ${n.dist.toFixed(1)} km · ${escapeHtml(n.castle.type)}</div></a>`;
    }).join('')}</div>`;
  } else {
    nearbyHtml = `<p class="terrain-note">No nearby sites within 30 km.</p>`;
  }

  // About
  const aboutText = (castle.description || '') + (castle.history ? '<br><br>' + escapeHtml(castle.history) : '');

  // Schema.org
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": castle.name,
    "description": castle.description || '',
    "geo": { "@type": "GeoCoordinates", "latitude": castle.lat, "longitude": castle.lng },
    "address": { "@type": "PostalAddress", "addressRegion": castle.county, "addressCountry": castle.country },
    "image": castle.image || '',
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": String(castle.rating), "reviewCount": String(castle.reviewCount) },
    "isAccessibleForFree": castle.access === 'free',
    "url": `${baseUrl}/site/${slug}.html`
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(castle.name)} — Scenic Route | Castles &amp; Historic Sites</title>
<meta name="description" content="${escapeHtml(metaDesc)}">
<meta property="og:title" content="${escapeHtml(castle.name)} — Scenic Route">
<meta property="og:description" content="${escapeHtml(metaDesc)}">
<meta property="og:image" content="${escapeHtml(castle.image || '')}">
<meta property="og:url" content="${baseUrl}/site/${slug}.html">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(castle.name)} — Scenic Route">
<meta name="twitter:description" content="${escapeHtml(metaDesc)}">
<meta name="twitter:image" content="${escapeHtml(castle.image || '')}">
<script type="application/ld+json">
${schema}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<header class="site-header">
<a href="../index.html" class="site-logo">🏰 Scenic Route</a>
<nav><a href="../index.html">Explore Map</a></nav>
</header>
<main>
<div class="hero-image">
<img src="${escapeHtml(castle.image || '')}" alt="${escapeHtml(castle.name)}" loading="lazy">
<div class="hero-overlay"><span class="hero-type">${typeEmoji} ${escapeHtml(castle.type)}</span></div>
</div>
<div class="page-content">
<h1>${escapeHtml(castle.name)}</h1>
<p class="location">${escapeHtml(castle.county)}, ${escapeHtml(castle.country)} · <a href="https://www.google.com/maps/dir/?api=1&destination=${castle.lat},${castle.lng}">Get directions</a></p>
<div class="key-stats">
<div class="stat"><div class="stat-value">${typeEmoji}</div><div class="stat-label">${escapeHtml(castle.type)}</div></div>
<div class="stat"><div class="stat-value">${escapeHtml(eraDisplay)}</div><div class="stat-label">Built</div></div>
<div class="stat"><div class="stat-value">${escapeHtml(castle.condition || '—')}</div><div class="stat-label">Condition</div></div>
<div class="stat"><div class="stat-value">${accLabel}</div><div class="stat-label">Access</div></div>
</div>
<div class="rating-section">
<span class="rating-big">${castle.rating}</span>
<span class="rating-stars">${stars}</span>
<span class="rating-count">${(castle.reviewCount||0).toLocaleString()} Google reviews</span>
</div>
${tagsHtml}
<section><h2>About</h2><p>${aboutText}</p></section>
<section><h2>Getting There</h2>${gettingThereHtml}</section>
<section><h2>Terrain &amp; Accessibility</h2>${terrainHtml}</section>
${eventsSection}
<section><h2>Nearby Sites</h2>${nearbyHtml}</section>
<div class="cta-section">
<a href="../index.html" class="cta-button">🗺️ View on Interactive Map</a>
<a href="../index.html" class="cta-secondary">Explore all ${CASTLES.length.toLocaleString()}+ sites →</a>
</div>
</div>
</main>
<footer><p>© 2026 Scenic Route · <a href="../index.html">Explore Map</a></p></footer>
</body>
</html>`;
}

// ===== Main =====
const siteDir = path.join(__dirname, 'site');
if (!fs.existsSync(siteDir)) fs.mkdirSync(siteDir);

console.log('Generating pages...');
let count = 0;
const today = new Date().toISOString().split('T')[0];
const sitemapEntries = [`  <url><loc>https://devingthingsyallhaventyet-stack.github.io/castle-explorer/</loc><priority>1.0</priority></url>`];

for (const castle of CASTLES) {
  const slug = slugMap.get(castle.name);
  const html = generatePage(castle);
  fs.writeFileSync(path.join(siteDir, `${slug}.html`), html, 'utf8');
  sitemapEntries.push(`  <url><loc>https://devingthingsyallhaventyet-stack.github.io/castle-explorer/site/${slug}.html</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`);
  count++;
  if (count % 500 === 0) console.log(`  ${count} pages generated...`);
}

// Sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');

// Robots
fs.writeFileSync(path.join(__dirname, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: https://devingthingsyallhaventyet-stack.github.io/castle-explorer/sitemap.xml\n`, 'utf8');

console.log(`\nDone! Generated ${count} pages, sitemap.xml, and robots.txt`);
