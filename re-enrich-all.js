const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'audit-data.json');
const BACKUP_FILE = DATA_FILE + '.bak';
const REPORT_FILE = path.join(__dirname, 're-enrich-all-report.json');
const PROGRESS_FILE = path.join(__dirname, 're-enrich-progress.json');
const RATE_LIMIT = 150;
const MAX_RETRIES = 5;

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Global rate limiter - single queue
let lastRequest = 0;
async function rateLimitedFetch(url) {
  const now = Date.now();
  const wait = Math.max(0, lastRequest + RATE_LIMIT - now);
  if (wait > 0) await sleep(wait);
  lastRequest = Date.now();
  
  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const res = await fetch(url, { 
        headers: { 'User-Agent': 'CastleCore/1.0 (castle enrichment bot; contact@castlecore.uk)' },
        signal: AbortSignal.timeout(10000)
      });
      if (res.status === 429) {
        const wait = 5000 * (i + 1);
        console.log(`  429 rate limited, backing off ${wait}ms...`);
        await sleep(wait);
        lastRequest = Date.now();
        continue;
      }
      if (res.status === 404) return null;
      if (!res.ok) return null;
      const text = await res.text();
      try { return JSON.parse(text); } catch { return null; }
    } catch (err) {
      if (i < MAX_RETRIES - 1) { await sleep(2000); continue; }
      return null;
    }
  }
  return null;
}

async function findWikiArticle(name) {
  const encoded = encodeURIComponent(name.replace(/ /g, '_'));
  let data = await rateLimitedFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`);
  if (data && data.extract) return data;

  let altName = null;
  if (name.startsWith('Castle ')) altName = name.slice(7) + ' Castle';
  else if (name.endsWith(' Castle')) altName = 'Castle ' + name.slice(0, -7);
  
  if (altName) {
    data = await rateLimitedFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(altName.replace(/ /g, '_'))}`);
    if (data && data.extract) return data;
  }

  const searchData = await rateLimitedFetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(name)}&limit=5&format=json`);
  
  if (searchData && Array.isArray(searchData) && searchData[1]?.length > 0) {
    const titles = searchData[1];
    const nameLower = name.toLowerCase();
    let best = titles[0];
    for (const t of titles) {
      if (t.toLowerCase() === nameLower) { best = t; break; }
      if (t.toLowerCase().includes('castle') && !best.toLowerCase().includes('castle')) best = t;
    }
    
    data = await rateLimitedFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(best.replace(/ /g, '_'))}`);
    if (data && data.extract) return data;
  }

  return null;
}

async function main() {
  if (!fs.existsSync(BACKUP_FILE)) {
    fs.copyFileSync(DATA_FILE, BACKUP_FILE);
    console.log('Created backup');
  }
  
  const allData = JSON.parse(fs.readFileSync(BACKUP_FILE, 'utf8'));
  const scotland = allData.filter(e => e.country === 'scotland');
  const toProcess = allData.filter(e => e.country !== 'scotland');
  
  const order = { england: 0, wales: 1, ireland: 2 };
  toProcess.sort((a, b) => (order[a.country] ?? 99) - (order[b.country] ?? 99));
  
  // Load progress if resuming
  let progress = {};
  if (fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    console.log(`Resuming from progress file: ${Object.keys(progress).length} entries already done`);
  }
  
  const stats = { matched: {}, deleted: [], imageFixed: 0, coordsUpdated: 0, descUpdated: 0 };
  const kept = [];
  let processed = 0;
  let skipped = 0;
  
  console.log(`Processing ${toProcess.length} non-Scotland entries...`);
  
  for (const entry of toProcess) {
    processed++;
    
    // Check if already processed
    if (progress[entry.name]) {
      const p = progress[entry.name];
      if (p.status === 'deleted') {
        stats.deleted.push({ name: entry.name, country: entry.country });
      } else {
        // Apply saved wiki data
        Object.assign(entry, p.data);
        kept.push(entry);
        stats.matched[entry.country] = (stats.matched[entry.country] || 0) + 1;
        if (p.descUpdated) stats.descUpdated++;
        if (p.coordsUpdated) stats.coordsUpdated++;
        if (p.imageFixed) stats.imageFixed++;
      }
      skipped++;
      continue;
    }
    
    if ((processed - skipped) % 50 === 0 && processed > skipped) {
      console.log(`Progress: ${processed}/${toProcess.length} (${skipped} cached, ${entry.country})`);
    }
    
    try {
      const wiki = await findWikiArticle(entry.name);
      
      if (!wiki) {
        stats.deleted.push({ name: entry.name, country: entry.country });
        progress[entry.name] = { status: 'deleted' };
        console.log(`DELETED: ${entry.name} (${entry.country})`);
      } else {
        const updates = {};
        let descUpdated = false, coordsUpdated = false, imageFixed = false;
        
        if (wiki.extract && entry.desc !== wiki.extract) {
          updates.desc = wiki.extract;
          descUpdated = true;
          stats.descUpdated++;
        }
        
        updates.wiki = wiki.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(wiki.title.replace(/ /g, '_'))}`;
        
        if (wiki.coordinates) {
          if (entry.lat != wiki.coordinates.lat || entry.lng != wiki.coordinates.lon) {
            updates.lat = wiki.coordinates.lat;
            updates.lng = wiki.coordinates.lon;
            coordsUpdated = true;
            stats.coordsUpdated++;
          }
        }
        
        const wikiThumb = wiki.thumbnail?.source || null;
        if (wikiThumb) updates.wikiImage = wikiThumb;
        
        if (entry.image && entry.image.includes('upload.wikimedia.org')) {
          if (wikiThumb && entry.image !== wikiThumb) {
            updates.image = wikiThumb;
            imageFixed = true;
            stats.imageFixed++;
          }
        } else if (!entry.image && wikiThumb) {
          updates.image = wikiThumb;
          updates.imgSource = 'wikipedia';
          imageFixed = true;
          stats.imageFixed++;
        }
        
        Object.assign(entry, updates);
        kept.push(entry);
        stats.matched[entry.country] = (stats.matched[entry.country] || 0) + 1;
        
        progress[entry.name] = { status: 'matched', data: updates, descUpdated, coordsUpdated, imageFixed };
      }
      
      // Save progress every 25 entries
      if ((processed - skipped) % 25 === 0) {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress));
      }
    } catch (err) {
      console.error(`ERROR: ${entry.name} - ${err.message}`);
      kept.push(entry);
    }
  }
  
  // Save final progress
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress));
  
  const final = [...scotland, ...kept];
  fs.writeFileSync(DATA_FILE, JSON.stringify(final, null, 2));
  
  const report = {
    matched: stats.matched,
    deleted: stats.deleted,
    imageFixed: stats.imageFixed,
    coordsUpdated: stats.coordsUpdated,
    descUpdated: stats.descUpdated,
    totalBefore: allData.length,
    totalAfter: final.length
  };
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  
  console.log('\n=== SUMMARY ===');
  console.log(`Matched: ${JSON.stringify(stats.matched)}`);
  console.log(`Deleted: ${stats.deleted.length} entries`);
  console.log(`Descriptions updated: ${stats.descUpdated}`);
  console.log(`Coordinates updated: ${stats.coordsUpdated}`);
  console.log(`Images fixed: ${stats.imageFixed}`);
  console.log(`Total: ${allData.length} -> ${final.length}`);
  
  // Clean up progress file on completion
  if (fs.existsSync(PROGRESS_FILE)) fs.unlinkSync(PROGRESS_FILE);
  console.log('Done! Progress file cleaned up.');
}

main().catch(console.error);
