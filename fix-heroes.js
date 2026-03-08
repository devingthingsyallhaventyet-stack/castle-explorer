const fs = require('fs');
const https = require('https');
const { execSync } = require('child_process');

// Load Cloudflare creds
let cfToken, cfAccountId, r2Bucket;
try {
  const creds = fs.readFileSync('../.cloudflare-creds', 'utf8');
  const tokenMatch = creds.match(/token[=:]\s*(.+)/i);
  const accountMatch = creds.match(/account[_-]?id[=:]\s*(.+)/i);
  const bucketMatch = creds.match(/bucket[=:]\s*(.+)/i);
  cfToken = tokenMatch ? tokenMatch[1].trim() : null;
  cfAccountId = accountMatch ? accountMatch[1].trim() : null;
  r2Bucket = bucketMatch ? bucketMatch[1].trim() : null;
  console.log('CF Token:', cfToken ? cfToken.substring(0, 10) + '...' : 'NOT FOUND');
  console.log('Account ID:', cfAccountId || 'NOT FOUND');
  console.log('Bucket:', r2Bucket || 'NOT FOUND');
} catch (e) {
  console.log('Could not read .cloudflare-creds:', e.message);
}

// For each broken page, switch hero to use the existing R2 image or the data.js image
const vm = require('vm');
const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const brokenPages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','cardiff-castle','castle-howard','conwy-castle',
  'corfe-castle','dover-castle','dunnottar-castle','eilean-donan-castle',
  'fountains-abbey','kilkenny-castle','leeds-castle','rock-of-cashel',
  'stirling-castle','tower-of-london','warwick-castle'
];

for (const slug of brokenPages) {
  const h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  
  // Check if we have an R2 hero image available
  const r2Hero = 'https://img.castlecore.uk/' + slug + '.jpg';
  
  // Also check data.js for the image
  const castle = ctx.CASTLES.find(x => x && x.name && slugify(x.name) === slug);
  const dataImg = castle ? castle.image : null;
  
  // Get current hero
  const heroMatch = h.match(/class="hero-img"[\s\S]*?src="([^"]+)"/);
  const currentHero = heroMatch ? heroMatch[1] : null;
  
  console.log(slug + ':');
  console.log('  Current hero: ' + (currentHero ? currentHero.substring(0, 80) : 'N/A'));
  console.log('  R2 candidate: ' + r2Hero);
  console.log('  data.js image: ' + (dataImg ? dataImg.substring(0, 80) : 'N/A'));
}
