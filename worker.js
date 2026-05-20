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

    // Everything else: static assets
    return env.ASSETS.fetch(request);
  }
};

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

  // --- STATS ---
  if (path === '/api/stats' && method === 'GET') {
    return getStats(env);
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

  const allowed = ['name', 'slug', 'subtitle', 'type', 'century', 'country', 'region', 'town', 'county', 'latitude', 'longitude', 'status', 'condition', 'google_place_id', 'google_rating', 'google_review_count', 'description_short', 'description_expanded', 'architecture', 'tags', 'terrain_description', 'terrain_tags', 'getting_there_car', 'getting_there_train', 'getting_there_bus', 'getting_there_airport'];

  for (const key of allowed) {
    if (key in data) {
      fields.push(`${key} = ?`);
      values.push(data[key]);
    }
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

  // For now, just mark as published. HTML generation comes next.
  await env.DB.prepare(
    "UPDATE listings SET published = 1, published_at = datetime('now'), updated_at = datetime('now') WHERE id = ?"
  ).bind(id).run();

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
