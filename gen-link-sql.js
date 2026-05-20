// Generate SQL to insert all links. First wipe existing, then insert fresh.
const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));
const approved = data.filter(d => d.reviewStatus === 'approved');

function esc(s) { return s.replace(/'/g, "''"); }
function slugify(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

let sql = 'DELETE FROM links;\n';
let count = 0;

for (const entry of approved) {
  const slug = slugify(entry.name.trim());
  const links = [];

  const wikiUrl = entry.wikipediaUrl || entry.wiki;
  if (wikiUrl) {
    links.push({ type: 'wikipedia', url: wikiUrl, label: 'Wikipedia' });
  }
  if (entry.source && Array.isArray(entry.source)) {
    for (const src of entry.source) {
      if (src.url && !links.some(l => l.url === src.url)) {
        links.push({ type: 'heritage', url: src.url, label: src.name || 'Heritage Body' });
      }
    }
  }
  if (entry.mapsLink) {
    links.push({ type: 'google_places', url: entry.mapsLink, label: 'Google Maps' });
  }

  for (const link of links) {
    sql += `INSERT INTO links (listing_id, type, url, label) SELECT id, '${link.type}', '${esc(link.url)}', '${esc(link.label)}' FROM listings WHERE slug='${esc(slug)}';\n`;
    count++;
  }
}

fs.writeFileSync(path.join(__dirname, 'links.sql'), sql);
console.log(`Generated ${count} INSERT statements`);
