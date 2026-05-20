const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function fetch(url, out) {
  return new Promise((resolve) => {
    const u = new URL(url);
    https.get({ hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) CastleCore/1.0 (contact: admin@castlecore.uk)' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        fetch(r.headers.location, out).then(resolve);
      } else if (r.statusCode === 200) {
        const chunks = [];
        r.on('data', c => chunks.push(c));
        r.on('end', () => { fs.writeFileSync(out, Buffer.concat(chunks)); console.log(`  ✓ ${out}: ${(fs.statSync(out).size/1024).toFixed(0)}KB`); resolve(true); });
      } else { console.log(`  ✗ ${out}: HTTP ${r.statusCode}`); resolve(false); }
    });
  });
}

async function proc(src, name, sizes) {
  if (!fs.existsSync(src) || fs.statSync(src).size < 10000) { console.log(`  ⚠ skip ${name}`); return; }
  const meta = await sharp(src).metadata();
  console.log(`  source: ${meta.width}x${meta.height}`);
  for (const [suffix, w, h, q] of sizes) {
    const out = `img/wales/${name}${suffix}.webp`;
    if (meta.height > meta.width * 1.3 && w > h) {
      const eH = Math.floor(meta.height * 0.45), eT = Math.floor(meta.height * 0.05);
      await sharp(src).extract({ left: 0, top: eT, width: meta.width, height: Math.min(eH, meta.height - eT) })
        .resize(w, h, { fit: 'cover' }).webp({ quality: q }).toFile(out);
    } else {
      await sharp(src).resize(w, h, { fit: 'cover' }).webp({ quality: q }).toFile(out);
    }
    console.log(`  → ${out}: ${(fs.statSync(out).size/1024).toFixed(0)}KB`);
  }
}

async function main() {
  // Carreg Cennen at Golden Hour - for SW Wales region card
  console.log('\n📸 SW WALES: Carreg Cennen at Golden Hour');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Carreg_Cennan_Castle_at_Golden_Hour.jpg/1920px-Carreg_Cennan_Castle_at_Golden_Hour.jpg', 'tmp-carreg-cennen.jpg');
  await proc('tmp-carreg-cennen.jpg', 'south-west-wales', [['', 800, 600, 80], ['-mobile', 400, 300, 70]]);

  // Chepstow Castle - history card
  console.log('\n📸 HISTORY: Chepstow Castle');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/201909_chepstow_castle_16.jpg/1920px-201909_chepstow_castle_16.jpg', 'tmp-chepstow.jpg');
  await proc('tmp-chepstow.jpg', 'chepstow-castle', [['', 800, 600, 80]]);

  // Dolwyddelan Castle - Llywelyn history card
  console.log('\n📸 HISTORY: Dolwyddelan Castle (Llywelyn)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/a/a9/Dolwyddelan_Castle.jpg', 'tmp-dolwyddelan.jpg');
  await proc('tmp-dolwyddelan.jpg', 'llywelyn-the-last', [['', 800, 600, 80]]);

  // Edward I portrait
  console.log('\n📸 HISTORY: Edward I');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/3/34/Edward_I_of_England.png', 'tmp-edward.png');
  await proc('tmp-edward.png', 'edward-longshanks', [['', 800, 600, 80]]);

  // Owain Glyndŵr - search via API
  console.log('\n📸 HISTORY: Owain Glyndŵr');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Owain_Glynd%C5%B5r_by_A._C._Michael.png/800px-Owain_Glynd%C5%B5r_by_A._C._Michael.png', 'tmp-glyndwr.png');
  await proc('tmp-glyndwr.png', 'owain-glyndwr-portrait', [['', 800, 600, 80]]);

  // Segontium - try API search
  console.log('\n📸 HISTORY: Segontium');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Segontium_Roman_fort%2C_Wales_%287%29.jpg/1920px-Segontium_Roman_fort%2C_Wales_%287%29.jpg', 'tmp-segontium.jpg');
  await proc('tmp-segontium.jpg', 'roman-segontium', [['', 800, 600, 80]]);

  // Antique map of Wales
  console.log('\n📸 Antique Map of Wales');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wallia_by_Blaeu.jpg/1920px-Wallia_by_Blaeu.jpg', 'tmp-wales-map.jpg');
  await proc('tmp-wales-map.jpg', 'antique-map', [['', 800, 600, 80], ['-mobile', 400, 300, 70]]);

  console.log('\n✅ Done');
}

main().catch(e => console.error(e));
