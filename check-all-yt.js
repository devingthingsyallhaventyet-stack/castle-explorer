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

for (const slug of pages) {
  const h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  
  // Check if YT code uses var (ES5, good) or const with arrow functions and backticks (might break)
  const hasBacktickInYT = h.includes("iframe>`") || h.includes('embed/`');
  const hasArrowInYT = h.includes('=>r.json()') || h.includes('=>{');
  const hasEmptyKey = h.includes("&key='") || h.includes("&key=`");
  const hasEmptyEmbed = h.includes('embed/"') || h.includes("embed/'");
  
  const issues = [];
  if (hasBacktickInYT) issues.push('BACKTICK IN YT');
  if (hasEmptyEmbed) issues.push('EMPTY EMBED');
  if (hasEmptyKey) issues.push('EMPTY KEY');
  
  if (issues.length) {
    console.log('⚠️ ' + slug + ': ' + issues.join(', '));
  }
}
console.log('Done checking');
