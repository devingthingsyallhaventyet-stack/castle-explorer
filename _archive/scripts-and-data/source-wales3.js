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

async function proc(src, name, sizes) {
  if (!fs.existsSync(src) || fs.statSync(src).size < 10000) {
    console.log(`  ⚠ skipping ${name}`);
    return false;
  }
  const meta = await sharp(src).metadata();
  console.log(`  source: ${meta.width}x${meta.height}`);
  for (const [suffix, w, h, q] of sizes) {
    const out = `img/wales/${name}${suffix}.webp`;
    if (meta.height > meta.width * 1.3 && w > h) {
      const eH = Math.floor(meta.height * 0.45);
      const eT = Math.floor(meta.height * 0.05);
      await sharp(src).extract({ left: 0, top: eT, width: meta.width, height: Math.min(eH, meta.height - eT) })
        .resize(w, h, { fit: 'cover' }).webp({ quality: q }).toFile(out);
    } else {
      await sharp(src).resize(w, h, { fit: 'cover' }).webp({ quality: q }).toFile(out);
    }
    console.log(`  → ${out}: ${(fs.statSync(out).size/1024).toFixed(0)}KB`);
  }
  return true;
}

async function main() {
  // Correct URLs from Wikimedia file pages

  console.log('\n📸 MID WALES: Powis Castle');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/8/8f/PowisCastle.jpg', 'tmp-powis.jpg');
  await proc('tmp-powis.jpg', 'mid-wales', [['', 800, 600, 80], ['-mobile', 400, 300, 70]]);

  console.log('\n📸 SW WALES: Pembroke Castle');
  // Try the main Wikipedia image
  await fetch('https://upload.wikimedia.org/wikipedia/commons/b/b7/Pembroke_Castle_-_geograph.org.uk_-_5204685.jpg', 'tmp-pembroke.jpg');
  if (!fs.existsSync('tmp-pembroke.jpg') || fs.statSync('tmp-pembroke.jpg').size < 10000) {
    // Fallback
    await fetch('https://upload.wikimedia.org/wikipedia/commons/0/00/Pembroke_Castle_by_Turner.jpg', 'tmp-pembroke.jpg');
  }
  await proc('tmp-pembroke.jpg', 'south-west-wales', [['', 800, 600, 80], ['-mobile', 400, 300, 70]]);

  console.log('\n📸 Chepstow Castle');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/7/7a/Chepstow_Castle%2C_Monmouthshire_%28geograph_2546021%29.jpg', 'tmp-chepstow.jpg');
  await proc('tmp-chepstow.jpg', 'chepstow-castle', [['', 800, 600, 80]]);

  console.log('\n📸 Edward I Westminster portrait');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/c/c2/Edward_I_of_England.png', 'tmp-edward.png');
  await proc('tmp-edward.png', 'edward-longshanks', [['', 800, 600, 80]]);

  console.log('\n📸 Owain Glyndŵr');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/7/7c/Pennal_Letter.jpg', 'tmp-glyndwr.jpg');
  await proc('tmp-glyndwr.jpg', 'owain-glyndwr-portrait', [['', 800, 600, 80]]);

  console.log('\n📸 Segontium Roman Fort');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/6/6c/Segontium2.jpg', 'tmp-segontium.jpg');
  await proc('tmp-segontium.jpg', 'roman-segontium', [['', 800, 600, 80]]);

  console.log('\n📸 Antique Map - Jansson 1646');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/d/d0/Wallia_Jansson_1646.jpg', 'tmp-wales-map.jpg');
  if (!fs.existsSync('tmp-wales-map.jpg') || fs.statSync('tmp-wales-map.jpg').size < 10000) {
    await fetch('https://upload.wikimedia.org/wikipedia/commons/a/ab/1790_Faden_%26_Jeffreys_map_of_South_Wales.jpg', 'tmp-wales-map.jpg');
  }
  await proc('tmp-wales-map.jpg', 'antique-map', [['', 800, 600, 80], ['-mobile', 400, 300, 70]]);

  // Llywelyn - use Dolwyddelan Castle (his birthplace)
  console.log('\n📸 Llywelyn / Dolwyddelan Castle');
  await fetch('https://upload.wikimedia.org/wikipedia/commons/3/37/Dolwyddelan_Castle.jpg', 'tmp-dolwyddelan.jpg');
  await proc('tmp-dolwyddelan.jpg', 'llywelyn-the-last', [['', 800, 600, 80]]);

  // Henry VIII - reuse the Holbein we already have
  console.log('\n📸 Henry VIII');
  if (fs.existsSync('tmp-henry.jpg')) {
    await proc('tmp-henry.jpg', 'henry-viii', [['', 800, 600, 80]]);
  }

  // Modern Wales - Welsh flag
  console.log('\n📸 Modern Wales - Y Ddraig Goch');
  // Generate Welsh flag with Sharp
  const flagSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
    <rect width="1200" height="400" fill="#fff"/>
    <rect y="400" width="1200" height="400" fill="#00AB39"/>
  </svg>`;
  await sharp(Buffer.from(flagSvg)).resize(800, 600, { fit: 'cover' }).webp({ quality: 80 }).toFile('img/wales/modern-wales.webp');
  console.log('  → img/wales/modern-wales.webp (generated flag)');

  console.log('\n✅ Done');
}

main().catch(e => console.error(e));
