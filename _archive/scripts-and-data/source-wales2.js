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
        r.on('end', () => { 
          fs.writeFileSync(out, Buffer.concat(chunks)); 
          console.log(`  ✓ ${out}: ${(fs.statSync(out).size/1024).toFixed(0)}KB`);
          resolve(true);
        });
      } else { 
        console.log(`  ✗ ${out}: HTTP ${r.statusCode}`); 
        resolve(false); 
      }
    });
  });
}

async function process(src, name, sizes) {
  if (!fs.existsSync(src) || fs.statSync(src).size < 10000) {
    console.log(`  ⚠ skipping ${name} - source missing or too small`);
    return;
  }
  const meta = await sharp(src).metadata();
  console.log(`  source: ${meta.width}x${meta.height}`);
  
  for (const [suffix, w, h, q] of sizes) {
    const out = `img/wales/${name}${suffix}.webp`;
    if (meta.height > meta.width * 1.3 && w > h) {
      // Portrait → extract face/top area first
      const extractH = Math.floor(meta.height * 0.5);
      const extractTop = Math.floor(meta.height * 0.1);
      await sharp(src)
        .extract({ left: 0, top: extractTop, width: meta.width, height: Math.min(extractH, meta.height - extractTop) })
        .resize(w, h, { fit: 'cover' })
        .webp({ quality: q })
        .toFile(out);
    } else {
      await sharp(src).resize(w, h, { fit: 'cover' }).webp({ quality: q }).toFile(out);
    }
    console.log(`  → ${out}: ${(fs.statSync(out).size/1024).toFixed(0)}KB`);
  }
}

async function main() {
  // === MID WALES: Powis Castle (Wikimedia - verified category) ===
  console.log('\n📸 MID WALES: Powis Castle (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/c/c7/PowisCastle.jpg', 'tmp-mid-wales.jpg');
  await process('tmp-mid-wales.jpg', 'mid-wales', [
    ['', 800, 600, 80], ['-mobile', 400, 300, 70]
  ]);

  // === SOUTH WEST WALES: Pembroke Castle (Wikimedia) ===
  console.log('\n📸 SW WALES: Pembroke Castle (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/8/89/Pembroke_Castle_-_geograph.org.uk_-_1960498.jpg', 'tmp-sw-wales.jpg');
  await process('tmp-sw-wales.jpg', 'south-west-wales', [
    ['', 800, 600, 80], ['-mobile', 400, 300, 70]
  ]);

  // === HISTORY: Chepstow Castle (Wikimedia) ===
  console.log('\n📸 HISTORY: Chepstow Castle (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/5/5e/Chepstow_Castle%2C_Monmouthshire.jpg', 'tmp-chepstow.jpg');
  await process('tmp-chepstow.jpg', 'chepstow-castle', [
    ['', 800, 600, 80]
  ]);

  // === HISTORY: Henry VII portrait (Wikimedia NPG) ===
  console.log('\n📸 HISTORY: Henry VII portrait (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/e/e9/King_Henry_VII.jpg', 'tmp-henry-tudor.jpg');
  await process('tmp-henry-tudor.jpg', 'henry-tudor', [
    ['', 800, 600, 80]
  ]);

  // === HISTORY: Owain Glyndŵr (Wikimedia) ===
  console.log('\n📸 HISTORY: Owain Glyndŵr (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/6/6b/Glyndwr_Seal_1.svg.png', 'tmp-glyndwr.png');
  // Try the famous portrait instead
  await fetch('https://upload.wikimedia.org/wikipedia/commons/6/67/Owain_Glynd%C5%B5r.png', 'tmp-glyndwr2.png');
  if (fs.existsSync('tmp-glyndwr2.png') && fs.statSync('tmp-glyndwr2.png').size > 10000) {
    await process('tmp-glyndwr2.png', 'owain-glyndwr-portrait', [['', 800, 600, 80]]);
  }

  // === HISTORY: Edward I / Longshanks portrait (Wikimedia) ===
  console.log('\n📸 HISTORY: Edward I (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/b/b1/Edward_I_-_Westminster_Abbey_Sedilia.jpg', 'tmp-edward.jpg');
  await process('tmp-edward.jpg', 'edward-longshanks', [
    ['', 800, 600, 80]
  ]);

  // === HISTORY: Roman Segontium (Wikimedia) ===
  console.log('\n📸 HISTORY: Segontium Roman Fort (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/d/d1/Segontium_Roman_Fort.jpg', 'tmp-segontium.jpg');
  await process('tmp-segontium.jpg', 'roman-segontium', [
    ['', 800, 600, 80]
  ]);

  // === STORY: Use Conwy aerial for glyndwr-landscape ===
  console.log('\n📸 STORY: Conwy aerial → glyndwr-landscape');
  if (fs.existsSync('tmp-conwy-aerial.jpg')) {
    await process('tmp-conwy-aerial.jpg', 'glyndwr-landscape', [
      ['-desktop', 1400, 700, 80], ['-mobile', 800, 400, 75], ['', 800, 600, 80]
    ]);
  }

  // === ANTIQUE MAP of Wales (Wikimedia) ===
  console.log('\n📸 Antique Map of Wales (Wikimedia)');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/4/4f/Wales_Joannes_Jansson_1646.jpg', 'tmp-antique-map.jpg');
  await process('tmp-antique-map.jpg', 'antique-map', [
    ['', 800, 600, 80], ['-mobile', 400, 300, 70]
  ]);

  console.log('\n✅ Done with Wikimedia sources');
}

main().catch(e => console.error(e));
