// Castlecore Worker — API + Static Assets
// Routes: /api/* for data, everything else falls through to static assets

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS headers for API routes
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    // API Routes
    if (path.startsWith('/api/')) {
      try {
        const response = await handleAPI(path, request, env);
        return addCors(response);
      } catch (err) {
        return addCors(json({ error: err.message }, 500));
      }
    }

    // Serve R2 images
    if (path.startsWith('/img/')) {
      const key = path.slice(5); // remove /img/
      const object = await env.R2.get(key);
      if (!object) return new Response('Not found', { status: 404 });
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('Cache-Control', 'public, max-age=31536000');
      return new Response(object.body, { headers });
    }

    // Public API for listing pages (not behind Cloudflare Access)
    const publicSlugMatch = path.match(/^\/public\/listing\/(.+)$/);
    if (publicSlugMatch && request.method === 'GET') {
      try {
        const response = await getListingBySlug(publicSlugMatch[1], env);
        return addCors(response);
      } catch (err) {
        return addCors(json({ error: err.message }, 500));
      }
    }

    // Public listings for country/region list pages (published only, public-safe fields)
    if (path === '/public/listings' && request.method === 'GET') {
      try {
        return addCors(await getPublicListings(url, env, ctx));
      } catch (err) {
        return addCors(json({ error: err.message }, 500));
      }
    }

    // Public per-listing hero photo — fetched LIVE from Google Places using the
    // listing's APPROVED google_place_id only (never a search), then edge-cached.
    const listingPhotoMatch = path.match(/^\/public\/listing-photo\/(.+)$/);
    if (listingPhotoMatch && request.method === 'GET') {
      try {
        return await getListingHeroPhoto(decodeURIComponent(listingPhotoMatch[1]), env, ctx);
      } catch (err) {
        return new Response('', { status: 404 });
      }
    }

    // Public per-card metadata (live star rating + required photo attribution),
    // via the approved google_place_id only. Edge-cached so views don't re-bill.
    const listingCardMatch = path.match(/^\/public\/listing-card\/(.+)$/);
    if (listingCardMatch && request.method === 'GET') {
      try {
        return addCors(await getListingCard(decodeURIComponent(listingCardMatch[1]), env, ctx));
      } catch (err) {
        return addCors(json({ error: err.message }, 500));
      }
    }

    // Public Google Places proxy (keeps API key server-side)
    const placesMatch = path.match(/^\/public\/places\/(.+)$/);
    if (placesMatch && request.method === 'GET') {
      try {
        return addCors(await getGooglePlacesData(placesMatch[1], env));
      } catch (err) {
        return addCors(json({ error: err.message }, 500));
      }
    }

    // Public Google Places text search (find place_id by name)
    if (path === '/public/places-search' && request.method === 'GET') {
      try {
        const query = url.searchParams.get('query');
        if (!query) return addCors(json({ error: 'query param required' }, 400));
        const apiKey = env.GOOGLE_PLACES_KEY;
        if (!apiKey) return addCors(json({ error: 'No API key' }, 500));
        const res = await fetch(
          `https://places.googleapis.com/v1/places:searchText`, {
            method: 'POST',
            headers: { 'X-Goog-Api-Key': apiKey, 'Content-Type': 'application/json', 'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress' },
            body: JSON.stringify({ textQuery: query, maxResultCount: 3 })
          }
        );
        const data = await res.json();
        return addCors(json(data));
      } catch (err) {
        return addCors(json({ error: err.message }, 500));
      }
    }

    // Public Google Places photo proxy
    const photoMatch = path.match(/^\/public\/places-photo\/(.+)$/);
    if (photoMatch && request.method === 'GET') {
      try {
        return await getGooglePlacesPhoto(decodeURIComponent(photoMatch[1]), env);
      } catch (err) {
        return new Response('Photo error', { status: 500 });
      }
    }

    // Dynamic listing pages: /:country/:region/:slug → serve listing template
    const countries = ['scotland','england','wales','ireland','northern-ireland'];
    const listingMatch = path.match(/^\/([a-z-]+)\/([a-z0-9-]+)\/([a-z0-9-]+)$/);
    if (listingMatch && countries.includes(listingMatch[1])) {
      // Check this isn't a static asset (region pages are /:country/:region)
      const asset = await env.ASSETS.fetch(new Request(new URL('/_listing-template.html', url.origin)));
      const html = await asset.text();
      return new Response(html, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    // Legacy listing URLs: /listing/{slug} → 301 redirect to new structure
    const legacyMatch = path.match(/^\/listing\/([a-z0-9-]+)$/);
    if (legacyMatch) {
      const slug = legacyMatch[1];
      const listing = await env.DB.prepare(
        'SELECT country, region FROM listings WHERE slug = ?'
      ).bind(slug).first();
      if (listing) {
        const countrySlug = listing.country.toLowerCase().replace(/\s+/g, '-');
        const regionSlug = regionToSlug(listing.region);
        return new Response(null, {
          status: 301,
          headers: { 'Location': `/${countrySlug}/${regionSlug}/${slug}` }
        });
      }
      // Fallback: serve template anyway for unpublished/missing listings
      const asset = await env.ASSETS.fetch(new Request(new URL('/_listing-template.html', url.origin)));
      const html = await asset.text();
      return new Response(html, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    // /site/* — resolve without .html extension
    if (path.startsWith('/site/') && !path.includes('.')) {
      const withHtml = new Request(new URL(path + '.html', url.origin));
      const asset = await env.ASSETS.fetch(withHtml);
      if (asset.status === 200) return asset;
    }

    // Everything else: static assets
    return env.ASSETS.fetch(request);
  }
};

// Region display name → URL slug mapping
const REGION_SLUGS = {
  'Scottish Highlands & Northern Isles': 'scottish-highlands',
  'Scottish Highlands': 'scottish-highlands',
  'Northeast Scotland & Tayside': 'northeast-scotland-tayside',
  'Aberdeenshire & Moray': 'northeast-scotland-tayside',
  'Argyll & the Western Isles': 'argyll-western-isles',
  'Glasgow & Central Scotland': 'glasgow-central-scotland',
  'Edinburgh & Lothians': 'edinburgh-lothians',
  'Edinburgh & the Lothians': 'edinburgh-lothians',
  'Fife & Perthshire': 'fife-perthshire',
  'Borders': 'borders',
  'Scottish Borders': 'borders',
  'Southwest Scotland': 'southwest-scotland',
  'South West England': 'south-west-england',
  'East Anglia & East England': 'east-anglia',
  'South East & London': 'south-east-london',
  'South East': 'south-east-london',
  'The Midlands': 'the-midlands',
  'Yorkshire': 'yorkshire',
  'Northern England': 'northern-england',
  'North East': 'northern-england',
  'North Wales & Snowdonia': 'north-wales-snowdonia',
  'Mid Wales & Borderlands': 'mid-wales-borderlands',
  'West Wales & Pembrokeshire': 'west-wales-pembrokeshire',
  'South Wales': 'south-wales',
  'The Wild Atlantic Way': 'wild-atlantic-way',
  "Ireland's Ancient East": 'irelands-ancient-east',
  'Southwest Ireland & Munster': 'southwest-ireland-munster',
  'Central Ireland & the Heartlands': 'central-ireland-heartlands',
  'Dublin & Eastern Ireland': 'dublin-eastern-ireland',
  'Northern Ireland & Ulster': 'northern-ireland-ulster',
  'Leinster': 'irelands-ancient-east',
};

function regionToSlug(region) {
  return REGION_SLUGS[region] || region.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ============================================
// API ROUTER
// ============================================
async function handleAPI(path, request, env) {
  const method = request.method;

  // --- LISTINGS ---
  if (path === '/api/listings' && method === 'GET') {
    return getListings(request, env);
  }
  if (path === '/api/listings' && method === 'POST') {
    return createListing(request, env);
  }
  if (path.match(/^\/api\/listings\/(\d+)$/) && method === 'GET') {
    return getListing(path.split('/')[3], env);
  }
  const slugMatch = path.match(/^\/api\/listings\/by-slug\/(.+)$/);
  if (slugMatch && method === 'GET') {
    return getListingBySlug(slugMatch[1], env);
  }
  if (path.match(/^\/api\/listings\/(\d+)$/) && method === 'PUT') {
    return updateListing(path.split('/')[3], request, env);
  }
  if (path.match(/^\/api\/listings\/(\d+)$/) && method === 'DELETE') {
    return deleteListing(path.split('/')[3], env);
  }

  // --- LISTING SUB-RESOURCES ---
  const subMatch = path.match(/^\/api\/listings\/(\d+)\/(timeline|people|designations|links|photos|videos|further-reading)$/);
  if (subMatch && method === 'GET') {
    return getSubResource(subMatch[1], subMatch[2], env);
  }
  if (subMatch && method === 'POST') {
    return createSubResource(subMatch[1], subMatch[2], request, env);
  }

  const subItemMatch = path.match(/^\/api\/listings\/(\d+)\/(timeline|people|designations|links|photos|videos|further-reading)\/(\d+)$/);
  if (subItemMatch && method === 'PUT') {
    return updateSubResource(subItemMatch[2], subItemMatch[3], request, env);
  }
  if (subItemMatch && method === 'DELETE') {
    return deleteSubResource(subItemMatch[2], subItemMatch[3], env);
  }

  // --- PUBLISH ---
  if (path.match(/^\/api\/listings\/(\d+)\/publish$/) && method === 'POST') {
    return publishListing(path.split('/')[3], env);
  }

  // --- CACHE GOOGLE PLACES DATA ---
  if (path.match(/^\/api\/listings\/(\d+)\/cache-places$/) && method === 'POST') {
    return cacheGooglePlacesData(path.split('/')[3], env);
  }

  // --- STATS ---
  if (path === '/api/stats' && method === 'GET') {
    return getStats(env);
  }

  // --- ADMIN MIGRATION ---
  if (path === '/api/admin/migrate' && method === 'POST') {
    return runMigrations(env);
  }

  // --- ENRICHMENT ---
  if (path === '/api/enrichment/coverage' && method === 'GET') {
    return getEnrichmentCoverage(env);
  }

  // --- GUESTBOOK ---
  if (path === '/api/guestbook' && method === 'GET') {
    return getGuestbook(request, env);
  }
  if (path.match(/^\/api\/guestbook\/(\d+)\/(approve|reject)$/) && method === 'POST') {
    const parts = path.split('/');
    return moderateGuestbook(parts[3], parts[4], env);
  }

  // --- IMPROVEMENTS ---
  if (path === '/api/improvements' && method === 'GET') {
    return getImprovements(request, env);
  }
  if (path.match(/^\/api\/improvements\/(\d+)\/(keep|delete)$/) && method === 'POST') {
    const parts = path.split('/');
    return moderateImprovement(parts[3], parts[4], env);
  }

  // --- PIPELINE ---
  if (path === '/api/pipeline' && method === 'GET') {
    return getPipeline(env);
  }
  if (path === '/api/pipeline' && method === 'POST') {
    return createPipelineEntry(request, env);
  }
  if (path.match(/^\/api\/pipeline\/(\d+)$/) && method === 'PUT') {
    return updatePipelineEntry(path.split('/')[3], request, env);
  }

  // --- PHOTO UPLOAD ---
  if (path.match(/^\/api\/listings\/(\d+)\/photos\/upload$/) && method === 'POST') {
    return uploadPhoto(path.split('/')[3], request, env);
  }

  // --- PHOTO SET HERO ---
  if (path.match(/^\/api\/listings\/(\d+)\/photos\/(\d+)\/hero$/) && method === 'POST') {
    const parts = path.split('/');
    return setHeroPhoto(parts[3], parts[5], env);
  }

  return json({ error: 'Not found' }, 404);
}

// ============================================
// LISTINGS
// ============================================
async function getListings(request, env) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const offset = (page - 1) * limit;
  const country = url.searchParams.get('country');
  const type = url.searchParams.get('type');
  const status = url.searchParams.get('status');
  const condition = url.searchParams.get('condition');
  const published = url.searchParams.get('published');
  const search = url.searchParams.get('search');
  const sort = url.searchParams.get('sort') || 'name';
  const order = url.searchParams.get('order') || 'asc';

  let where = [];
  let params = [];

  if (country) { where.push('country = ?'); params.push(country); }
  if (type) { where.push('type = ?'); params.push(type); }
  if (status) { where.push('status = ?'); params.push(status); }
  if (condition) { where.push('condition = ?'); params.push(condition); }
  if (published !== null && published !== undefined && published !== '') {
    where.push('published = ?'); params.push(parseInt(published));
  }
  if (search) { where.push('name LIKE ?'); params.push(`%${search}%`); }

  const whereClause = where.length > 0 ? `WHERE ${where.join(' AND ')}` : '';
  const validSorts = ['name', 'country', 'region', 'type', 'created_at', 'updated_at'];
  const sortCol = validSorts.includes(sort) ? sort : 'name';
  const sortOrder = order === 'desc' ? 'DESC' : 'ASC';

  const countResult = await env.DB.prepare(
    `SELECT COUNT(*) as total FROM listings ${whereClause}`
  ).bind(...params).first();

  const rows = await env.DB.prepare(
    `SELECT * FROM listings ${whereClause} ORDER BY ${sortCol} ${sortOrder} LIMIT ? OFFSET ?`
  ).bind(...params, limit, offset).all();

  return json({
    listings: rows.results,
    total: countResult.total,
    page,
    limit,
    pages: Math.ceil(countResult.total / limit)
  });
}

async function getListingBySlug(slug, env) {
  const listing = await env.DB.prepare('SELECT id FROM listings WHERE slug = ?').bind(slug).first();
  if (!listing) return json({ error: 'Not found' }, 404);
  return getListing(listing.id, env);
}

// Public, read-only listings for the country/region list pages.
// Source of truth = the live database. Returns ONLY published listings and
// only public-safe fields (never internal_notes / internal_tags). Edge-cached.
async function getPublicListings(url, env, ctx) {
  const cache = caches.default;
  const cacheKey = new Request(url.toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const country = url.searchParams.get('country');
  const regionParam = url.searchParams.get('region'); // optional region slug

  const where = ['published = 1'];
  const params = [];
  if (country) { where.push('country = ?'); params.push(country); }
  const whereClause = 'WHERE ' + where.join(' AND ');

  const rows = await env.DB.prepare(
    `SELECT slug, name, type, century, country, region, county, condition, status,
            google_rating, google_review_count, description_short, description_expanded, tags, google_place_id,
            (SELECT r2_key FROM photos p WHERE p.listing_id = listings.id AND p.is_hero = 1 ORDER BY p.sort_order LIMIT 1) AS hero_key
       FROM listings ${whereClause}
       ORDER BY (google_review_count IS NULL), google_review_count DESC, name ASC`
  ).bind(...params).all();

  let out = (rows.results || []).map(r => ({
    slug: r.slug,
    name: r.name,
    type: (r.type || '').toLowerCase(),
    region: r.region,
    county: r.county,
    era: r.century || '',
    condition: (r.condition || '').toLowerCase(),
    rating: r.google_rating || null,
    reviewCount: r.google_review_count || null,
    access: r.status === 'Freely Accessible' ? 'free' : 'paid',
    // Short descriptions were retired during enrichment; fall back to the first
    // sentence of the full description so every card still has a blurb.
    description: r.description_short || firstSentence(r.description_expanded),
    // Prefer an uploaded R2 hero photo; otherwise lazily fetch the Google photo
    // (live, via the approved place_id) only when the card is actually viewed.
    image: r.hero_key ? '/img/' + r.hero_key
         : (r.google_place_id ? '/public/listing-photo/' + encodeURIComponent(r.slug) : ''),
    // Whether a live per-card lookup (rating) is available at all.
    hasGoogle: !!r.google_place_id,
    // Whether the image shown is a Google photo (so it needs photo attribution).
    googlePhoto: !!r.google_place_id && !r.hero_key,
    tags: parseJsonArray(r.tags),
  }));

  if (regionParam) {
    out = out.filter(x => regionToSlug(x.region || '') === regionParam);
  }

  const response = json(out);
  response.headers.set('Cache-Control', 'public, max-age=300');
  if (ctx && ctx.waitUntil) ctx.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

function parseJsonArray(s) {
  if (!s) return [];
  try { const v = JSON.parse(s); return Array.isArray(v) ? v : []; } catch (e) { return []; }
}

// First sentence of a (possibly HTML/markdown) description, for card blurbs.
function firstSentence(text) {
  if (!text) return '';
  const plain = String(text).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const m = plain.match(/^.*?[.!?](?=\s|$)/);
  return (m ? m[0] : plain).trim();
}

// Per-listing hero photo, fetched LIVE from Google Places. Uses ONLY the
// listing's stored/approved google_place_id (never a search). Edge-cached so
// repeat views don't re-bill Google. Listings without an approved place_id 404.
async function getListingHeroPhoto(slug, env, ctx) {
  const cache = caches.default;
  const cacheKey = new Request('https://cache.internal/listing-photo/' + encodeURIComponent(slug));
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const row = await env.DB.prepare(
    'SELECT google_place_id FROM listings WHERE slug = ? AND published = 1'
  ).bind(slug).first();
  if (!row || !row.google_place_id) return new Response('', { status: 404 });

  const apiKey = env.GOOGLE_PLACES_KEY;
  if (!apiKey) return new Response('', { status: 404 });

  // 1) Place Details — request only the photos field (lowest-cost field mask).
  const det = await fetch(
    'https://places.googleapis.com/v1/places/' + encodeURIComponent(row.google_place_id),
    { headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': 'photos' } }
  );
  if (!det.ok) return new Response('', { status: 404 });
  const detData = await det.json();
  const photoName = detData.photos && detData.photos[0] && detData.photos[0].name;
  if (!photoName) return new Response('', { status: 404 });

  // 2) Fetch the photo media bytes (follows Google's redirect to the image).
  const media = await fetch(
    'https://places.googleapis.com/v1/' + photoName + '/media?maxWidthPx=800',
    { headers: { 'X-Goog-Api-Key': apiKey } }
  );
  if (!media.ok || !media.body) return new Response('', { status: 404 });

  const headers = new Headers();
  headers.set('Content-Type', media.headers.get('Content-Type') || 'image/jpeg');
  // Cache at the edge/browser for performance so we don't re-bill Google on every view.
  headers.set('Cache-Control', 'public, max-age=2592000');
  const resp = new Response(media.body, { status: 200, headers });
  if (ctx && ctx.waitUntil) ctx.waitUntil(cache.put(cacheKey, resp.clone()));
  return resp;
}

// Per-card metadata: live Google star rating + the photo's required attribution.
// Uses ONLY the stored/approved google_place_id (never a search). Edge-cached so
// repeat views don't re-bill. Falls back to any rating already saved in the DB.
async function getListingCard(slug, env, ctx) {
  const cache = caches.default;
  const cacheKey = new Request('https://cache.internal/listing-card/' + encodeURIComponent(slug));
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const row = await env.DB.prepare(
    'SELECT google_place_id, google_rating, google_review_count FROM listings WHERE slug = ? AND published = 1'
  ).bind(slug).first();
  if (!row) return json({}, 404);

  const out = { rating: row.google_rating || null, reviewCount: row.google_review_count || null, attribution: null };

  if (row.google_place_id && env.GOOGLE_PLACES_KEY) {
    try {
      const det = await fetch(
        'https://places.googleapis.com/v1/places/' + encodeURIComponent(row.google_place_id),
        { headers: { 'X-Goog-Api-Key': env.GOOGLE_PLACES_KEY, 'X-Goog-FieldMask': 'rating,userRatingCount,photos' } }
      );
      if (det.ok) {
        const d = await det.json();
        if (d.rating != null) out.rating = d.rating;
        if (d.userRatingCount != null) out.reviewCount = d.userRatingCount;
        const attr = d.photos && d.photos[0] && d.photos[0].authorAttributions && d.photos[0].authorAttributions[0];
        if (attr) out.attribution = { name: attr.displayName || 'Google user', uri: attr.uri || null };
      }
    } catch (e) { /* keep DB fallback values */ }
  }

  const resp = json(out);
  resp.headers.set('Cache-Control', 'public, max-age=2592000');
  if (ctx && ctx.waitUntil) ctx.waitUntil(cache.put(cacheKey, resp.clone()));
  return resp;
}

async function getListing(id, env) {
  const listing = await env.DB.prepare('SELECT * FROM listings WHERE id = ?').bind(id).first();
  if (!listing) return json({ error: 'Not found' }, 404);

  // Fetch all sub-resources
  const [timeline, people, designations, links, photos, videos, furtherReading] = await Promise.all([
    env.DB.prepare('SELECT * FROM timeline_entries WHERE listing_id = ? ORDER BY sort_order').bind(id).all(),
    env.DB.prepare('SELECT * FROM people WHERE listing_id = ? ORDER BY sort_order').bind(id).all(),
    env.DB.prepare('SELECT * FROM designations WHERE listing_id = ?').bind(id).all(),
    env.DB.prepare('SELECT * FROM links WHERE listing_id = ?').bind(id).all(),
    env.DB.prepare('SELECT * FROM photos WHERE listing_id = ? ORDER BY sort_order').bind(id).all(),
    env.DB.prepare('SELECT * FROM videos WHERE listing_id = ? ORDER BY sort_order').bind(id).all(),
    env.DB.prepare('SELECT * FROM further_reading WHERE listing_id = ? ORDER BY sort_order').bind(id).all(),
  ]);

  return json({
    ...listing,
    timeline: timeline.results,
    people: people.results,
    designations: designations.results,
    links: links.results,
    photos: photos.results,
    videos: videos.results,
    further_reading: furtherReading.results,
  });
}

async function createListing(request, env) {
  const data = await request.json();
  const slug = data.slug || slugify(data.name);

  const result = await env.DB.prepare(`
    INSERT INTO listings (slug, name, subtitle, type, century, country, region, town, county, latitude, longitude, status, condition, google_place_id, description_short, description_expanded, architecture, tags, terrain_description, terrain_tags, getting_there_car, getting_there_train, getting_there_bus, getting_there_airport)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    slug, data.name, data.subtitle || null, data.type || 'Castle', data.century || null,
    data.country, data.region, data.town || null, data.county || null,
    data.latitude || null, data.longitude || null,
    data.status || null, data.condition || null,
    data.google_place_id || null,
    data.description_short || null, data.description_expanded || null,
    data.architecture || null,
    data.tags ? JSON.stringify(data.tags) : null,
    data.terrain_description || null, data.terrain_tags ? JSON.stringify(data.terrain_tags) : null,
    data.getting_there_car || null, data.getting_there_train || null,
    data.getting_there_bus || null, data.getting_there_airport || null
  ).run();

  return json({ id: result.meta.last_row_id, slug }, 201);
}

async function updateListing(id, request, env) {
  const data = await request.json();
  const fields = [];
  const values = [];

  const allowed = ['name', 'slug', 'subtitle', 'type', 'century', 'country', 'region', 'town', 'county', 'latitude', 'longitude', 'status', 'condition', 'google_place_id', 'google_rating', 'google_review_count', 'description_short', 'description_expanded', 'architecture', 'tags', 'terrain_description', 'terrain_tags', 'getting_there_car', 'getting_there_train', 'getting_there_bus', 'getting_there_airport', 'internal_notes', 'internal_tags'];

  for (const key of allowed) {
    if (key in data) {
      let val = data[key];
      // Coerce empty strings to null (prevents CHECK constraint failures)
      if (val === '') val = null;
      fields.push(`${key} = ?`);
      values.push(val);
    }
  }

  // Auto-update slug when name changes
  if ('name' in data && !('slug' in data)) {
    fields.push('slug = ?');
    values.push(slugify(data.name));
  }

  if (fields.length === 0) return json({ error: 'No fields to update' }, 400);

  fields.push("updated_at = datetime('now')");
  values.push(id);

  await env.DB.prepare(
    `UPDATE listings SET ${fields.join(', ')} WHERE id = ?`
  ).bind(...values).run();

  return json({ ok: true });
}

async function deleteListing(id, env) {
  await env.DB.prepare('DELETE FROM listings WHERE id = ?').bind(id).run();
  return json({ ok: true });
}

// ============================================
// SUB-RESOURCES (timeline, people, etc.)
// ============================================
const tableMap = {
  timeline: 'timeline_entries',
  people: 'people',
  designations: 'designations',
  links: 'links',
  photos: 'photos',
  videos: 'videos',
  'further-reading': 'further_reading'
};

async function getSubResource(listingId, resource, env) {
  const table = tableMap[resource];
  const orderBy = ['timeline', 'people', 'photos', 'videos', 'further-reading'].includes(resource) ? ' ORDER BY sort_order' : '';
  const rows = await env.DB.prepare(
    `SELECT * FROM ${table} WHERE listing_id = ?${orderBy}`
  ).bind(listingId).all();
  return json(rows.results);
}

async function createSubResource(listingId, resource, request, env) {
  const data = await request.json();
  const table = tableMap[resource];

  let sql, params;
  switch (resource) {
    case 'timeline':
      sql = `INSERT INTO timeline_entries (listing_id, date_label, title, description, image_url, image_attribution, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      params = [listingId, data.date_label, data.title, data.description || null, data.image_url || null, data.image_attribution || null, data.sort_order || 0];
      break;
    case 'people':
      sql = `INSERT INTO people (listing_id, name, dates, role_description, portrait_url, wikipedia_url, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      params = [listingId, data.name, data.dates || null, data.role_description || null, data.portrait_url || null, data.wikipedia_url || null, data.sort_order || 0];
      break;
    case 'designations':
      sql = `INSERT INTO designations (listing_id, title, body_name, url) VALUES (?, ?, ?, ?)`;
      params = [listingId, data.title, data.body_name || null, data.url || null];
      break;
    case 'links':
      sql = `INSERT INTO links (listing_id, type, url, label) VALUES (?, ?, ?, ?)`;
      params = [listingId, data.type, data.url, data.label || null];
      break;
    case 'photos':
      sql = `INSERT INTO photos (listing_id, r2_key, filename, is_hero, alt_text, sort_order) VALUES (?, ?, ?, ?, ?, ?)`;
      params = [listingId, data.r2_key, data.filename, data.is_hero || 0, data.alt_text || null, data.sort_order || 0];
      break;
    case 'videos':
      sql = `INSERT INTO videos (listing_id, youtube_id, title, sort_order) VALUES (?, ?, ?, ?)`;
      params = [listingId, data.youtube_id, data.title || null, data.sort_order || 0];
      break;
    case 'further-reading':
      sql = `INSERT INTO further_reading (listing_id, author, title, year, url, sort_order) VALUES (?, ?, ?, ?, ?, ?)`;
      params = [listingId, data.author || null, data.title, data.year || null, data.url || null, data.sort_order || 0];
      break;
  }

  const result = await env.DB.prepare(sql).bind(...params).run();
  return json({ id: result.meta.last_row_id }, 201);
}

async function updateSubResource(resource, itemId, request, env) {
  const data = await request.json();
  const table = tableMap[resource];
  const fields = [];
  const values = [];

  for (const [key, val] of Object.entries(data)) {
    if (key !== 'id' && key !== 'listing_id') {
      fields.push(`${key} = ?`);
      values.push(val);
    }
  }

  if (fields.length === 0) return json({ error: 'No fields' }, 400);
  values.push(itemId);

  await env.DB.prepare(
    `UPDATE ${table} SET ${fields.join(', ')} WHERE id = ?`
  ).bind(...values).run();

  return json({ ok: true });
}

async function deleteSubResource(resource, itemId, env) {
  const table = tableMap[resource];
  await env.DB.prepare(`DELETE FROM ${table} WHERE id = ?`).bind(itemId).run();
  return json({ ok: true });
}

// ============================================
// PUBLISH
// ============================================
async function publishListing(id, env) {
  const listing = await env.DB.prepare('SELECT * FROM listings WHERE id = ?').bind(id).first();
  if (!listing) return json({ error: 'Not found' }, 404);

  // Parse and update internal tags: remove "ok-to-enrich", add "published"
  let internalTags = [];
  try {
    internalTags = JSON.parse(listing.internal_tags || '[]');
  } catch (e) {
    internalTags = [];
  }
  
  // Remove "ok-to-enrich" tag (enrichment is complete)
  internalTags = internalTags.filter(tag => tag !== 'ok-to-enrich');
  
  // Add "published" tag if not already present
  if (!internalTags.includes('published')) {
    internalTags.push('published');
  }

  // Mark as published and update internal tags
  await env.DB.prepare(
    "UPDATE listings SET published = 1, published_at = datetime('now'), updated_at = datetime('now'), internal_tags = ? WHERE id = ?"
  ).bind(JSON.stringify(internalTags), id).run();

  return json({ ok: true, slug: listing.slug, published: true });
}

// ============================================
// STATS
// ============================================
async function getStats(env) {
  const [total, published, pending, avgCompleteness] = await Promise.all([
    env.DB.prepare('SELECT COUNT(*) as count FROM listings').first(),
    env.DB.prepare('SELECT COUNT(*) as count FROM listings WHERE published = 1').first(),
    env.DB.prepare("SELECT COUNT(*) as count FROM guestbook_entries WHERE status = 'pending'").first()
      .then(r => r.count)
      .then(gb => env.DB.prepare("SELECT COUNT(*) as count FROM improvements WHERE status = 'pending'").first()
        .then(imp => gb + imp.count)),
    env.DB.prepare(`
      SELECT AVG(completeness) as avg FROM (
        SELECT l.id,
          (CASE WHEN l.subtitle IS NOT NULL AND l.subtitle != '' THEN 1 ELSE 0 END +
           CASE WHEN l.status IS NOT NULL THEN 1 ELSE 0 END +
           CASE WHEN l.condition IS NOT NULL THEN 1 ELSE 0 END +
           CASE WHEN l.description_short IS NOT NULL AND l.description_short != '' THEN 1 ELSE 0 END +
           CASE WHEN l.description_expanded IS NOT NULL AND l.description_expanded != '' THEN 1 ELSE 0 END +
           CASE WHEN l.google_place_id IS NOT NULL AND l.google_place_id != '' THEN 1 ELSE 0 END +
           CASE WHEN l.architecture IS NOT NULL AND l.architecture != '' THEN 1 ELSE 0 END +
           CASE WHEN l.century IS NOT NULL AND l.century != '' THEN 1 ELSE 0 END +
           CASE WHEN l.terrain_description IS NOT NULL AND l.terrain_description != '' THEN 1 ELSE 0 END +
           CASE WHEN (SELECT COUNT(*) FROM timeline_entries t WHERE t.listing_id = l.id) > 0 THEN 1 ELSE 0 END +
           CASE WHEN (SELECT COUNT(*) FROM people p WHERE p.listing_id = l.id) > 0 THEN 1 ELSE 0 END +
           CASE WHEN (SELECT COUNT(*) FROM photos ph WHERE ph.listing_id = l.id) > 0 THEN 1 ELSE 0 END +
           CASE WHEN (SELECT COUNT(*) FROM videos v WHERE v.listing_id = l.id) > 0 THEN 1 ELSE 0 END
          ) * 100.0 / 13 as completeness
        FROM listings l
      )
    `).first()
  ]);

  return json({
    total: total.count,
    published: published.count,
    pending_review: pending,
    avg_completeness: Math.round(avgCompleteness.avg || 0)
  });
}

// ============================================
// ENRICHMENT
// ============================================
async function getEnrichmentCoverage(env) {
  const fields = [
    { name: 'subtitle', col: 'subtitle' },
    { name: 'status', col: 'status' },
    { name: 'condition', col: 'condition' },
    { name: 'description_short', col: 'description_short' },
    { name: 'description_expanded', col: 'description_expanded' },
    { name: 'google_place_id', col: 'google_place_id' },
    { name: 'architecture', col: 'architecture' },
    { name: 'century', col: 'century' },
    { name: 'terrain_description', col: 'terrain_description' },
    { name: 'getting_there_car', col: 'getting_there_car' },
  ];

  const total = await env.DB.prepare('SELECT COUNT(*) as count FROM listings').first();
  const coverage = [];

  for (const f of fields) {
    const filled = await env.DB.prepare(
      `SELECT COUNT(*) as count FROM listings WHERE ${f.col} IS NOT NULL AND ${f.col} != ''`
    ).first();
    coverage.push({
      field: f.name,
      filled: filled.count,
      total: total.count,
      percent: total.count > 0 ? Math.round(filled.count / total.count * 100) : 0
    });
  }

  // Timeline and photos are separate tables
  const withTimeline = await env.DB.prepare(
    'SELECT COUNT(DISTINCT listing_id) as count FROM timeline_entries'
  ).first();
  coverage.push({ field: 'timeline', filled: withTimeline.count, total: total.count, percent: total.count > 0 ? Math.round(withTimeline.count / total.count * 100) : 0 });

  const withPhotos = await env.DB.prepare(
    'SELECT COUNT(DISTINCT listing_id) as count FROM photos'
  ).first();
  coverage.push({ field: 'own_photos', filled: withPhotos.count, total: total.count, percent: total.count > 0 ? Math.round(withPhotos.count / total.count * 100) : 0 });

  const withVideos = await env.DB.prepare(
    'SELECT COUNT(DISTINCT listing_id) as count FROM videos'
  ).first();
  coverage.push({ field: 'videos', filled: withVideos.count, total: total.count, percent: total.count > 0 ? Math.round(withVideos.count / total.count * 100) : 0 });

  const withFurtherReading = await env.DB.prepare(
    'SELECT COUNT(DISTINCT listing_id) as count FROM further_reading'
  ).first();
  coverage.push({ field: 'further_reading', filled: withFurtherReading.count, total: total.count, percent: total.count > 0 ? Math.round(withFurtherReading.count / total.count * 100) : 0 });

  return json(coverage);
}

// ============================================
// GUESTBOOK MODERATION
// ============================================
async function getGuestbook(request, env) {
  const url = new URL(request.url);
  const status = url.searchParams.get('status') || 'pending';

  const rows = await env.DB.prepare(`
    SELECT g.*, l.name as listing_name, l.slug as listing_slug
    FROM guestbook_entries g
    JOIN listings l ON g.listing_id = l.id
    WHERE g.status = ?
    ORDER BY g.submitted_at DESC
  `).bind(status).all();

  return json(rows.results);
}

async function moderateGuestbook(id, action, env) {
  const statusMap = { approve: 'approved', reject: 'rejected' };
  await env.DB.prepare(
    "UPDATE guestbook_entries SET status = ?, reviewed_at = datetime('now') WHERE id = ?"
  ).bind(statusMap[action], id).run();
  return json({ ok: true });
}

// ============================================
// IMPROVEMENTS MODERATION
// ============================================
async function getImprovements(request, env) {
  const url = new URL(request.url);
  const status = url.searchParams.get('status') || 'pending';

  const rows = await env.DB.prepare(`
    SELECT i.*, l.name as listing_name, l.slug as listing_slug
    FROM improvements i
    JOIN listings l ON i.listing_id = l.id
    WHERE i.status = ?
    ORDER BY i.submitted_at DESC
  `).bind(status).all();

  return json(rows.results);
}

async function moderateImprovement(id, action, env) {
  const statusMap = { keep: 'kept', delete: 'deleted' };
  await env.DB.prepare(
    "UPDATE improvements SET status = ?, reviewed_at = datetime('now') WHERE id = ?"
  ).bind(statusMap[action], id).run();
  return json({ ok: true });
}

// ============================================
// PIPELINE
// ============================================
async function getPipeline(env) {
  const rows = await env.DB.prepare(
    'SELECT * FROM pipeline ORDER BY created_at DESC'
  ).all();
  return json(rows.results);
}

async function createPipelineEntry(request, env) {
  const data = await request.json();
  const result = await env.DB.prepare(`
    INSERT INTO pipeline (name, country, region, type, source, notes, wikipedia_url, google_place_id, heritage_url, submitted_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    data.name, data.country || null, data.region || null, data.type || 'Castle',
    data.source || null, data.notes || null,
    data.wikipedia_url || null, data.google_place_id || null, data.heritage_url || null,
    data.submitted_by || null
  ).run();
  return json({ id: result.meta.last_row_id }, 201);
}

async function updatePipelineEntry(id, request, env) {
  const data = await request.json();
  const fields = [];
  const values = [];

  const allowed = ['name', 'country', 'region', 'type', 'stage', 'source', 'notes', 'wikipedia_url', 'google_place_id', 'heritage_url'];
  for (const key of allowed) {
    if (key in data) {
      fields.push(`${key} = ?`);
      values.push(data[key]);
    }
  }

  if (fields.length === 0) return json({ error: 'No fields' }, 400);
  fields.push("updated_at = datetime('now')");
  values.push(id);

  await env.DB.prepare(
    `UPDATE pipeline SET ${fields.join(', ')} WHERE id = ?`
  ).bind(...values).run();

  return json({ ok: true });
}

// ============================================
// PHOTO UPLOAD
// ============================================
async function uploadPhoto(listingId, request, env) {
  const formData = await request.formData();
  const file = formData.get('photo');
  if (!file) return json({ error: 'No photo provided' }, 400);

  const listing = await env.DB.prepare('SELECT slug FROM listings WHERE id = ?').bind(listingId).first();
  if (!listing) return json({ error: 'Listing not found' }, 404);

  const ext = file.name.split('.').pop();
  const key = `photos/${listing.slug}/${Date.now()}.${ext}`;

  await env.R2.put(key, file.stream(), {
    httpMetadata: { contentType: file.type }
  });

  const result = await env.DB.prepare(`
    INSERT INTO photos (listing_id, r2_key, filename, sort_order)
    VALUES (?, ?, ?, (SELECT COALESCE(MAX(sort_order), 0) + 1 FROM photos WHERE listing_id = ?))
  `).bind(listingId, key, file.name, listingId).run();

  return json({ id: result.meta.last_row_id, r2_key: key }, 201);
}

async function setHeroPhoto(listingId, photoId, env) {
  // Clear all hero flags for this listing, then set the chosen one
  await env.DB.prepare('UPDATE photos SET is_hero = 0 WHERE listing_id = ?').bind(listingId).run();
  await env.DB.prepare('UPDATE photos SET is_hero = 1 WHERE id = ? AND listing_id = ?').bind(photoId, listingId).run();
  return json({ ok: true });
}

// ============================================
// HELPERS
// ============================================
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

function addCors(response) {
  const headers = new Headers(response.headers);
  headers.set('Access-Control-Allow-Origin', '*');
  return new Response(response.body, { status: response.status, headers });
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ============================================
// HOURS FORMATTING
// ============================================
function condenseHours(hoursArray) {
  if (!hoursArray || !Array.isArray(hoursArray) || hoursArray.length === 0) return null;

  // Parse each line: "Monday: 10:00 AM – 5:00 PM" → { day, hours }
  const parsed = hoursArray.map(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return { day: line, hours: '' };
    return { day: line.substring(0, colonIdx).trim(), hours: line.substring(colonIdx + 1).trim() };
  });

  // Check if all days have the same hours
  const uniqueHours = [...new Set(parsed.map(p => p.hours))];
  if (uniqueHours.length === 1 && parsed.length === 7) {
    if (uniqueHours[0].toLowerCase() === 'closed') return ['Closed'];
    return [`Open daily: ${uniqueHours[0]}`];
  }

  // Group consecutive days with the same hours
  const groups = [];
  let current = { start: parsed[0].day, end: parsed[0].day, hours: parsed[0].hours };

  for (let i = 1; i < parsed.length; i++) {
    if (parsed[i].hours === current.hours) {
      current.end = parsed[i].day;
    } else {
      groups.push({ ...current });
      current = { start: parsed[i].day, end: parsed[i].day, hours: parsed[i].hours };
    }
  }
  groups.push(current);

  // Format output
  const shortDay = d => d.substring(0, 3);
  return groups.map(g => {
    const dayRange = g.start === g.end ? shortDay(g.start) : `${shortDay(g.start)} – ${shortDay(g.end)}`;
    return `${dayRange}: ${g.hours}`;
  });
}

// ============================================
// GOOGLE PLACES
// ============================================
async function getGooglePlacesData(placeId, env) {
  const apiKey = env.GOOGLE_PLACES_KEY;
  if (!apiKey) return json({ error: 'Google Places API key not configured' }, 500);

  // Check listing status — only fetch live currentOpeningHours for "Open to Visitors"
  const listingRow = await env.DB.prepare(
    'SELECT status FROM listings WHERE google_place_id = ?'
  ).bind(placeId).first();
  const needsLiveHours = listingRow?.status === 'Open to Visitors';
  const fields = needsLiveHours
    ? 'rating,userRatingCount,reviews,photos,currentOpeningHours'
    : 'rating,userRatingCount,reviews,photos';
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&languageCode=en`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!res.ok) {
    const err = await res.text();
    return json({ error: 'Google Places API error', status: res.status, detail: err }, 502);
  }

  const data = await res.json();

  // Transform photos to include proxied URLs (can't expose raw photo references to client)
  const photos = (data.photos || []).slice(0, 6).map((p, i) => ({
    url: `/public/places-photo/${encodeURIComponent(p.name)}`,
    attribution: p.authorAttributions?.[0]?.displayName || 'Google Maps',
    attributionUrl: p.authorAttributions?.[0]?.uri || null,
    width: p.widthPx,
    height: p.heightPx
  }));

  // Transform reviews
  const reviews = (data.reviews || []).slice(0, 4).map(r => ({
    author: r.authorAttribution?.displayName || 'Anonymous',
    rating: r.rating,
    text: r.text?.text || '',
    time: r.relativePublishTimeDescription || '',
    profilePhoto: r.authorAttribution?.photoUri || null
  }));

  // Get cached data from DB (hours, address, etc. stored during enrichment)
  const listing = await env.DB.prepare(
    'SELECT google_hours, google_address FROM listings WHERE google_place_id = ?'
  ).bind(placeId).first();

  return json({
    rating: data.rating || null,
    reviewCount: data.userRatingCount || null,
    isOpen: data.currentOpeningHours?.openNow ?? null,
    photos,
    reviews,
    // Cached from DB (stored during enrichment)
    hours: listing?.google_hours ? condenseHours(JSON.parse(listing.google_hours)) : null,
    address: listing?.google_address || null,
  });
}

// Cache Google Places static data (called during enrichment, behind auth)
async function cacheGooglePlacesData(listingId, env) {
  const listing = await env.DB.prepare('SELECT google_place_id FROM listings WHERE id = ?').bind(listingId).first();
  if (!listing?.google_place_id) return json({ error: 'No google_place_id for this listing' }, 400);

  const apiKey = env.GOOGLE_PLACES_KEY;
  if (!apiKey) return json({ error: 'Google Places API key not configured' }, 500);

  // Fetch ONLY the fields we want to cache (one-time cost)
  const fields = 'regularOpeningHours,formattedAddress';
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${listing.google_place_id}?fields=${fields}&languageCode=en`, {
      headers: { 'X-Goog-Api-Key': apiKey, 'Content-Type': 'application/json' }
    }
  );

  if (!res.ok) {
    const err = await res.text();
    return json({ error: 'Google Places API error', detail: err }, 502);
  }

  const data = await res.json();

  await env.DB.prepare(
    `UPDATE listings SET 
      google_hours = ?, google_address = ?,
      updated_at = datetime('now')
    WHERE id = ?`
  ).bind(
    data.regularOpeningHours?.weekdayDescriptions ? JSON.stringify(data.regularOpeningHours.weekdayDescriptions) : null,
    data.formattedAddress || null,
    listingId
  ).run();

  return json({
    cached: true,
    hours: data.regularOpeningHours?.weekdayDescriptions || null,
    address: data.formattedAddress || null,
  });
}

// Proxy Google Places photos (keeps API key server-side)
async function getGooglePlacesPhoto(photoName, env) {
  const apiKey = env.GOOGLE_PLACES_KEY;
  if (!apiKey) return new Response('No API key', { status: 500 });

  const res = await fetch(
    `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=800&skipHttpRedirect=true`, {
      headers: { 'X-Goog-Api-Key': apiKey }
    }
  );

  if (!res.ok) return new Response('Photo not found', { status: 404 });
  const data = await res.json();
  if (!data.photoUri) return new Response('No photo URI', { status: 404 });

  // Redirect to the actual photo
  return Response.redirect(data.photoUri, 302);
}

// ===== ADMIN MIGRATIONS =====
async function runMigrations(env) {
  const migrations = [
    { name: 'add_internal_notes', sql: 'ALTER TABLE listings ADD COLUMN internal_notes TEXT' },
    { name: 'add_internal_tags', sql: 'ALTER TABLE listings ADD COLUMN internal_tags TEXT' },
  ];
  const results = [];
  for (const m of migrations) {
    try {
      await env.DB.prepare(m.sql).run();
      results.push({ name: m.name, status: 'ok' });
    } catch (err) {
      // "duplicate column" means already applied
      if (err.message && err.message.includes('duplicate column')) {
        results.push({ name: m.name, status: 'already_exists' });
      } else {
        results.push({ name: m.name, status: 'error', error: err.message });
      }
    }
  }
  return json({ migrations: results });
}
