// Check links from audit-data.json — heritage first, then Wikipedia
// Uses concurrency for speed and strict timeouts
const fs = require('fs');
const path = require('path');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function checkUrl(url, timeoutMs = 10000) {
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html'
      },
      redirect: 'follow',
      signal: controller.signal
    });
    clearTimeout(t);
    return { status: res.status };
  } catch (err) {
    if (err.name === 'AbortError') return { status: 'TIMEOUT' };
    return { status: 'ERR', error: err.message };
  }
}

// Process array in batches of N concurrent
async function batchCheck(links, concurrency, delayMs, label) {
  const broken = [];
  let checked = 0;
  for (let i = 0; i < links.length; i += concurrency) {
    const batch = links.slice(i, i + concurrency);
    const results = await Promise.all(batch.map(async (link) => {
      const r = await checkUrl(link.url);
      return { ...link, result: r };
    }));
    for (const { name, type, url, result } of results) {
      const s = result.status;
      if (s >= 400 || s === 'ERR' || s === 'TIMEOUT') {
        const err = typeof s === 'number' ? String(s) : s;
        broken.push({ name, type, url, error: err });
        console.log(`  BROKEN ${err} | ${name} | ${url}`);
      }
    }
    checked += batch.length;
    if (checked % 50 === 0 || checked === links.length) {
      console.log(`  [${label}] ${checked}/${links.length} checked, ${broken.length} broken`);
    }
    if (delayMs) await sleep(delayMs);
  }
  return broken;
}

async function main() {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));
  const approved = data.filter(d => d.reviewStatus === 'approved');
  console.log(`Approved: ${approved.length}`);

  const heritageLinks = [];
  const wikiLinks = [];

  for (const e of approved) {
    const wikiUrl = e.wikipediaUrl || e.wiki || null;
    if (wikiUrl) wikiLinks.push({ name: e.name, type: 'wikipedia', url: wikiUrl });

    if (Array.isArray(e.source)) {
      for (const s of e.source) {
        if (s.url && !s.url.includes('wikipedia.org') && !s.url.includes('google.com/maps')) {
          heritageLinks.push({ name: e.name, type: 'heritage', url: s.url });
        }
      }
    }
  }

  console.log(`Heritage: ${heritageLinks.length}, Wikipedia: ${wikiLinks.length}\n`);

  // Phase 1: Heritage links — 5 concurrent, no delay
  console.log('--- HERITAGE LINKS ---');
  const heritageBroken = await batchCheck(heritageLinks, 5, 0, 'heritage');

  // Phase 2: Wikipedia links — 3 concurrent, 1s delay between batches
  console.log('\n--- WIKIPEDIA LINKS ---');
  const wikiBroken = await batchCheck(wikiLinks, 3, 1500, 'wiki');
  // Filter out 429s (rate limiting, not actually broken)
  const realWikiBroken = wikiBroken.filter(b => b.error !== '429');

  const allBroken = [...heritageBroken, ...realWikiBroken];

  console.log(`\n=== SUMMARY ===`);
  console.log(`Heritage broken: ${heritageBroken.length}`);
  console.log(`Wikipedia broken (excl 429): ${realWikiBroken.length}`);
  console.log(`Wikipedia rate-limited (429, excluded): ${wikiBroken.length - realWikiBroken.length}`);
  console.log(`Total broken: ${allBroken.length}`);

  fs.writeFileSync(path.join(__dirname, 'broken-links-result.json'), JSON.stringify(allBroken, null, 2));
  console.log('Wrote broken-links-result.json');
}

main().catch(console.error);
