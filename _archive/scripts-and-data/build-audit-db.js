const fs = require('fs');

// Load all data files
function loadData(file, varName) {
  const js = fs.readFileSync(file, 'utf8');
  // Extract the array from the JS file
  const match = js.match(/\[[\s\S]*\]/);
  if (!match) return [];
  try { return JSON.parse(match[0]); } catch(e) { return []; }
}

// Load region JSONs instead - more reliable
function loadRegionJsons(country) {
  const dir = `${country}/data`;
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  const all = [];
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8'));
    const region = f.replace('.json', '');
    data.forEach(c => all.push({ ...c, region, country }));
  }
  return all;
}

const countries = ['scotland', 'england', 'wales', 'ireland'];
const allCastles = [];

for (const country of countries) {
  const castles = loadRegionJsons(country);
  allCastles.push(...castles);
  console.log(`${country}: ${castles.length} entries`);
}

console.log(`Total: ${allCastles.length} entries`);

// Build audit data
const auditRows = allCastles.map(c => {
  const name = c.name || 'Unknown';
  const country = c.country || '';
  const region = c.region || '';
  const county = c.county || '';
  const lat = c.lat || c.latitude || '';
  const lng = c.lng || c.longitude || c.lon || '';
  const image = c.image || '';
  const gallery = c.gallery || [];
  const desc = c.description || c.desc || '';
  const type = c.type || '';
  const period = c.period || c.era || c.date || '';
  const rating = c.rating || '';
  const tags = c.tags || [];
  const source = c.source || c.sources || '';
  const wiki = c.wikipedia || c.wiki || '';
  
  // Build Google Maps link
  const mapsLink = (lat && lng) 
    ? `https://www.google.com/maps/search/${encodeURIComponent(name)}/@${lat},${lng},15z`
    : `https://www.google.com/maps/search/${encodeURIComponent(name + ' ' + county + ' ' + country)}`;
  
  // Determine image source type
  let imgSource = 'unknown';
  if (image.includes('wikipedia') || image.includes('wikimedia')) imgSource = 'wikipedia';
  else if (image.includes('img.castlecore.uk')) imgSource = 'CDN';
  else if (image.includes('r2.dev')) imgSource = 'R2';
  else if (image.includes('pexels')) imgSource = 'pexels';
  else if (image) imgSource = 'other';
  
  return {
    name, country, region, county, lat, lng, mapsLink,
    image, imgSource, gallery,
    desc: desc.substring(0, 200),
    type, period, rating, tags,
    source, wiki
  };
});

// Write JSON for the dashboard
fs.writeFileSync('audit-data.json', JSON.stringify(auditRows, null, 2), 'utf8');
console.log(`Wrote audit-data.json (${auditRows.length} entries)`);

// Stats
const byCountry = {};
const byImgSource = {};
for (const r of auditRows) {
  byCountry[r.country] = (byCountry[r.country] || 0) + 1;
  byImgSource[r.imgSource] = (byImgSource[r.imgSource] || 0) + 1;
}
console.log('\nBy country:', byCountry);
console.log('By image source:', byImgSource);

const noCoords = auditRows.filter(r => !r.lat || !r.lng).length;
const noDesc = auditRows.filter(r => !r.desc).length;
console.log(`No coordinates: ${noCoords}`);
console.log(`No description: ${noDesc}`);
