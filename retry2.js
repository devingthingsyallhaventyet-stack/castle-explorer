const fs = require('fs');
const https = require('https');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const R2_BASE = 'https://img.castlecore.uk';

function download(url, retries=5) {
  return new Promise((resolve, reject) => {
    https.get(url, {headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}}, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) { res.resume(); return download(res.headers.location, retries).then(resolve).catch(reject); }
      if (res.statusCode === 429 && retries > 0) { res.resume(); console.log('  429, wait 10s...'); return sleep(10000).then(() => download(url, retries-1)).then(resolve).catch(reject); }
      if (res.statusCode !== 200) return reject(new Error('HTTP '+res.statusCode));
      const c=[]; res.on('data',d=>c.push(d)); res.on('end',()=>resolve(Buffer.concat(c)));
    }).on('error', reject);
  });
}
function upload(key, buf) {
  return new Promise((resolve, reject) => {
    const req = https.request({hostname:'api.cloudflare.com',path:`/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/castle-images/objects/${encodeURIComponent(key)}`,method:'PUT',headers:{'Authorization':`Bearer ${API_TOKEN}`,'Content-Type':'image/jpeg','Content-Length':buf.length}}, res => {
      const c=[]; res.on('data',d=>c.push(d)); res.on('end',()=>res.statusCode<300?resolve():reject(new Error('R2 '+res.statusCode)));
    }); req.on('error',reject); req.write(buf); req.end();
  });
}

const todo = [
  {name:'Dowth Hall', url:'https://upload.wikimedia.org/wikipedia/commons/8/80/Outing_to_Dowth%2C_Co._Meath_%283%29_-_geograph.org.uk_-_2072061.jpg', key:'wiki-dowth-hall.jpg'},
  {name:'Dunderave Castle', url:'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dunderave_Castle%2C_Loch_Fyne%2C_Argyll_-_geograph.org.uk_-_47961.jpg', key:'wiki-dunderave-castle.jpg'}
];

async function main() {
  let dataStr = fs.readFileSync('data.js','utf8');
  let castles = JSON.parse(dataStr.slice(dataStr.indexOf('['), dataStr.lastIndexOf(']')+1));
  let done = 0;
  for (const t of todo) {
    try {
      console.log('Downloading '+t.name+'...');
      await sleep(15000);
      const buf = await download(t.url);
      console.log(`  ${buf.length} bytes, uploading...`);
      await upload(t.key, buf);
      const c = castles.find(x=>x.name===t.name);
      if (c) { c.image = R2_BASE+'/'+t.key; done++; console.log('  OK'); }
    } catch(e) { console.log('  FAIL: '+e.message); }
  }
  const out = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
  fs.writeFileSync('data.js', out);
  const wi = castles.filter(c=>c.image&&c.image!=='').length;
  console.log(`Done: ${done}/2, total with images: ${wi}/${castles.length}`);
}
main();
