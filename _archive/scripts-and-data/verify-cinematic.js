const fs = require('fs');
const pages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','canterbury-cathedral','cardiff-castle','castle-howard',
  'chatsworth-house','conwy-castle','corfe-castle','dover-castle',
  'dunnottar-castle','durham-cathedral','edinburgh-castle','eilean-donan-castle',
  'fountains-abbey','hampton-court-palace','kilkenny-castle','leeds-castle',
  'rock-of-cashel','stirling-castle','tower-of-london','warwick-castle',
  'windsor-castle'
];

let ok = 0, bad = 0;
for (const p of pages) {
  const path = 'site/' + p + '.html';
  if (!fs.existsSync(path)) { console.log('MISSING: ' + p); bad++; continue; }
  const h = fs.readFileSync(path, 'utf8');
  const hasCinzel = h.includes('Cinzel');
  const hasCormorant = h.includes('Cormorant');
  const hasHero = h.includes('hero-img');
  const hasBrokenYT = h.includes('${encodeURIComponent');
  const hasInterior = h.includes('Interior');
  
  const issues = [];
  if (!hasCinzel) issues.push('NO CINZEL');
  if (!hasCormorant) issues.push('NO CORMORANT');
  if (!hasHero) issues.push('NO HERO-IMG');
  if (hasBrokenYT) issues.push('BROKEN YT');
  if (hasInterior) issues.push('HAS INTERIOR');
  
  if (issues.length) { console.log('⚠️ ' + p + ': ' + issues.join(', ')); bad++; }
  else { console.log('✅ ' + p); ok++; }
}
console.log('\n' + ok + '/25 good, ' + bad + '/25 issues');
