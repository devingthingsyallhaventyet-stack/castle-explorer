const fs = require('fs');
const pages = [
  'windsor-castle-interior','edinburgh-castle-interior','hampton-court-palace-interior',
  'warwick-castle','blenheim-palace','chatsworth-house','canterbury-cathedral',
  'bamburgh-castle','fountains-abbey','stirling-castle','durham-cathedral',
  'dover-castle','caernarfon-castle','tower-of-london','leeds-castle',
  'corfe-castle','castle-howard','alnwick-castle','dunnottar-castle',
  'eilean-donan-castle','conwy-castle','cardiff-castle','blarney-castle',
  'rock-of-cashel','kilkenny-castle'
];

const issues = [];
for (const slug of pages) {
  const f = `site/${slug}.html`;
  if (!fs.existsSync(f)) { issues.push(`${slug}: FILE MISSING`); continue; }
  const h = fs.readFileSync(f, 'utf8');
  
  // Check hero image
  const heroMatch = h.match(/class="hero-img"[\s\S]*?<img src="([^"]+)"/);
  const hero = heroMatch ? heroMatch[1] : 'NOT FOUND';
  if (hero.includes('logo') || hero === 'NOT FOUND' || hero === '') issues.push(`${slug}: BAD HERO IMAGE → ${hero}`);
  
  // Check for uninterpolated template vars
  if (h.includes('${')) issues.push(`${slug}: UNINTERPOLATED TEMPLATE VARS`);
  
  // Check YT query
  const ytMatch = h.match(/q=([^&"']+)/);
  const yt = ytMatch ? ytMatch[1] : 'NOT FOUND';
  if (yt.includes('encodeURI') || yt.includes('$')) issues.push(`${slug}: BAD YT QUERY → ${yt}`);
  
  // Check Foulksrath images
  const imgMissing = h.includes('img.castlecore.uk/foulksrath');
}

if (issues.length === 0) console.log('All pages look clean!');
else issues.forEach(i => console.log('⚠️', i));
