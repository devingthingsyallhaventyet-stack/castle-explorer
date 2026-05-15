const fs = require('fs');
const API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

async function fetchWithTimeout(url, opts = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...opts, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch(e) {
    clearTimeout(timer);
    throw e;
  }
}

async function getWikiData(wikiUrl) {
  if (!wikiUrl) return null;
  const article = wikiUrl.split('/wiki/').pop();
  if (!article) return null;
  try {
    const res = await fetchWithTimeout(`https://en.wikipedia.org/api/rest_v1/page/summary/${article}`);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      image: data.thumbnail?.source || data.originalimage?.source || null,
      desc: data.extract || null,
      lat: data.coordinates?.lat || null,
      lng: data.coordinates?.lon || null,
      attribution: data.thumbnail ? (data.description_source || 'Wikipedia') : null
    };
  } catch(e) { return null; }
}

async function getGooglePlaces(name, county) {
  const query = `${name} ${county || ''} castle`;
  try {
    const res = await fetchWithTimeout('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.photos'
      },
      body: JSON.stringify({ textQuery: query, maxResultCount: 1 })
    }, 10000);
    if (!res.ok) return null;
    const data = await res.json();
    const place = data.places?.[0];
    if (!place) return null;
    
    const photos = [];
    for (const p of (place.photos || []).slice(0, 5)) {
      // Get photo URL
      const photoUrl = `https://places.googleapis.com/v1/${p.name}/media?maxWidthPx=800&key=${API_KEY}&skipHttpRedirect=true`;
      try {
        const pRes = await fetchWithTimeout(photoUrl, {}, 5000);
        if (pRes.ok) {
          const pData = await pRes.json();
          const author = p.authorAttributions?.[0];
          photos.push({
            googlePhotoUri: pData.photoUri || pData.uri || null,
            attribution: author?.displayName || 'Google Maps',
            authorUrl: author?.uri || null
          });
        }
      } catch(e) { /* skip this photo */ }
    }
    return { placeId: place.id, placeName: place.displayName?.text || name, photos };
  } catch(e) { return null; }
}

async function main() {
  const d = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
  const staging = JSON.parse(fs.readFileSync('google-images-staging.json', 'utf8'));
  let maxKey = Math.max(...Object.keys(staging).map(Number));
  
  const entries = [];
  d.forEach((entry, idx) => {
    if (entry.reviewStatus === 'approved' && !entry.imageReviewDone) {
      entries.push({ entry, idx });
    }
  });
  
  const START = parseInt(process.env.START || '0');
  const COUNT = parseInt(process.env.COUNT || '20');
  const batch = entries.slice(START, START + COUNT);
  
  console.log(`Processing ${batch.length} entries (${START} to ${START + batch.length - 1} of ${entries.length})`);
  
  for (let i = 0; i < batch.length; i++) {
    const { entry, idx } = batch[i];
    const wikiUrl = entry.wikipediaUrl || entry.wiki;
    
    // Wikipedia
    const wiki = await getWikiData(wikiUrl);
    if (wiki) {
      if (wiki.image) d[idx].image = wiki.image;
      if (wiki.attribution) d[idx].imageAttribution = wiki.attribution;
    }
    
    // Clear old gallery
    d[idx].gallery = [];
    
    // Google Places
    const gp = await getGooglePlaces(entry.name, entry.county);
    if (gp && gp.photos.length) {
      maxKey++;
      staging[maxKey] = gp;
    }
    
    console.log(`[${START + i + 1}/${entries.length}] ${entry.name} — wiki:${wiki?.image ? 'yes' : 'no'} google:${gp?.photos?.length || 0} photos`);
    
    // Small delay
    await new Promise(r => setTimeout(r, 200));
  }
  
  fs.writeFileSync('audit-data.json', JSON.stringify(d, null, 2));
  fs.writeFileSync('google-images-staging.json', JSON.stringify(staging, null, 2));
  console.log(`\nDone batch ${START}-${START + batch.length - 1}. Saved.`);
}

main().catch(e => console.error(e));
