const fs = require('fs');
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';
const R2_BASE = 'https://img.castlecore.uk';
const GOOGLE_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

let dataStr = fs.readFileSync('data.js', 'utf8');
let castles = JSON.parse(dataStr.slice(dataStr.indexOf('['), dataStr.lastIndexOf(']') + 1));

function makeSlug(n) { return n.toLowerCase().replace(/\s*\(.*?\)\s*/g, '').trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

// Manual mappings for the 3 stubborn ones
const fixes = [
  { name: 'Dysart Church', photoRef: 'places/ChIJu0wkJPe0h0gRcEoPCPJVfnM/photos/ATCDNfU7iY0JAxxJUuqPhHyfqMW1RxziV5HAaUWgw7UevguoKiTFxe2elues3Ya965SwHEJCSo7dJ8u3JUvQbKzdRAJ9NGs5KNq3HreuZ6sGD9eZUrkGY0TCB7i60QVvGViWBgV314w9GRCX3BWmNQxCNz9CINjaGu21brs_ltKEDRrrGLNm_Bf_kAh4u6_7jTdgnQ9vfIoSypwmoGtRuCfwjGibV3BOOKk5FaCpeqrhR4hNz5tqO93n98K4MbZik13k7jeP7f5502asK30MeLJpWG9gJYDtpMAYede3HQb5JgM88ofIg9h15sG6W2S_R13ZVFMfkBHLMQP1dtnnAexN94r0M_IywVdWfdYIfFGdvpj6usEJpphwPPJW7PCdcgl1aa2VU-KdrKtmvRXIDCbRQ4LCNs2yix8K2A4y0oVGujZ4byea' },
  { name: 'O\'Dea Castle Museum', photoRef: 'places/ChIJDfP2UY4MW0gRFYlHPLAaHTE/photos/ATCDNfUZ5ocoSv34SRwa1P89WX1vUJpTYOmymGffG6_Xyh1BPoX67L1c8eVMezJlQGxMNHGu7umTkCD9Rh4kjTz_24Kx0naFgOjC6aCUMQkTJxCJR93RC8Dnbs474Xj-mwAesEVS2StsGnLg-jyX6pzO0JiaIXX78cUaw4cWowteWhGxWs5j_QAVBrghP-WgX2OAtV1JDCZD3TCVlqaI-RC_FiKaMHTskd5aXVcBHlLGNPKxmsysbAQKnImT4jK0PSYzbRGRCfN8GqLdsm9qXROa8xVM2DuVJvUNNtorOMjLC_vCrKea2qdzy9byqlhWSapAO1NbhldEBzD-nvVqJVbQNeMDrVPof2pqr80Cjcfl_VvdCEPrkh_cbT48EXVbT99CS9Lgi1TG4rrQlz3jv12RmCfnnalep_ELh-Ied6pUk7x4j-H12yI10ddjR9sIXg' },
];

async function main() {
  for (const fix of fixes) {
    const castle = castles.find(c => c.name === fix.name);
    if (!castle) { console.log(`Not found: ${fix.name}`); continue; }
    if (castle.image) { console.log(`Already has image: ${fix.name}`); continue; }

    const slug = makeSlug(fix.name);
    const photoUrl = `https://places.googleapis.com/v1/${fix.photoRef}/media?maxWidthPx=1280&key=${GOOGLE_KEY}`;
    
    try {
      process.stdout.write(`${fix.name}... `);
      const res = await fetch(photoUrl, { signal: AbortSignal.timeout(20000), redirect: 'follow' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const key = `google-${slug}.jpg`;
      const r2 = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`, {
        method: 'PUT', headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg' },
        body: buf, signal: AbortSignal.timeout(15000)
      });
      if (!r2.ok) throw new Error(`R2 ${r2.status}`);
      castle.image = `${R2_BASE}/${key}`;
      console.log(`✅ (${(buf.length/1024).toFixed(0)}KB)`);
    } catch(e) {
      console.log(`❌ ${e.message}`);
    }
  }

  // Gardenmorris - try Wikimedia Commons directly
  const gardenmorris = castles.find(c => c.name === 'Gardenmorris Castle');
  if (gardenmorris && !gardenmorris.image) {
    process.stdout.write('Gardenmorris Castle (commons search)... ');
    try {
      const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=Gardenmorris+Castle&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json';
      const res = await fetch(url, { headers: { 'User-Agent': 'castlecore-bot/1.0' }, signal: AbortSignal.timeout(5000) });
      const data = await res.json();
      let imgUrl = null;
      for (const p of Object.values(data.query?.pages || {})) {
        if (p.imageinfo?.[0]?.thumburl) { imgUrl = p.imageinfo[0].thumburl; break; }
        if (p.imageinfo?.[0]?.url) { imgUrl = p.imageinfo[0].url; break; }
      }
      if (imgUrl) {
        const imgRes = await fetch(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(20000), redirect: 'follow' });
        const buf = Buffer.from(await imgRes.arrayBuffer());
        const key = 'wiki-gardenmorris-castle.jpg';
        await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`, {
          method: 'PUT', headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg' },
          body: buf, signal: AbortSignal.timeout(15000)
        });
        gardenmorris.image = `${R2_BASE}/${key}`;
        console.log(`✅ commons (${(buf.length/1024).toFixed(0)}KB)`);
      } else {
        console.log('❌ nothing on Commons either');
      }
    } catch(e) { console.log(`❌ ${e.message}`); }
  }

  const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
  fs.writeFileSync('data.js', output);
  const noImg = castles.filter(c => !c.image).length;
  console.log(`\nTotal with images: ${castles.length - noImg}/${castles.length} (${noImg} remaining)`);
}
main().catch(console.error);
