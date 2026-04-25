const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function fetch(url, out) {
  return new Promise((resolve) => {
    const u = new URL(url);
    https.get({ hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        console.log(`  redirect → ${r.headers.location.slice(0,60)}...`);
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

async function processImage(src, name, sizes) {
  const meta = await sharp(src).metadata();
  console.log(`  source: ${meta.width}x${meta.height}`);
  
  for (const [suffix, w, h, q] of sizes) {
    const out = `img/wales/${name}${suffix}.webp`;
    
    // If portrait source and landscape output, extract first
    if (meta.height > meta.width * 1.2 && w > h) {
      const extractH = Math.floor(meta.height * 0.5);
      const extractTop = Math.floor(meta.height * 0.15);
      await sharp(src)
        .extract({ left: 0, top: extractTop, width: meta.width, height: Math.min(extractH, meta.height - extractTop) })
        .resize(w, h, { fit: 'cover' })
        .webp({ quality: q })
        .toFile(out);
    } else {
      await sharp(src)
        .resize(w, h, { fit: 'cover' })
        .webp({ quality: q })
        .toFile(out);
    }
    console.log(`  → ${out}: ${(fs.statSync(out).size/1024).toFixed(0)}KB`);
  }
}

async function main() {
  // === HERO: Conwy Castle by Martina Jorden (verified: "Conwy Castle in North Wales") ===
  console.log('\n📸 HERO: Conwy Castle (Unsplash - Martina Jorden)');
  await fetch('https://unsplash.com/photos/IZHhIZMGstQ/download?w=2400', 'tmp-hero-wales.jpg');
  if (fs.existsSync('tmp-hero-wales.jpg') && fs.statSync('tmp-hero-wales.jpg').size > 50000) {
    await processImage('tmp-hero-wales.jpg', 'hero-wales', [
      ['-desktop', 1800, 900, 80],
      ['-mobile', 1200, 800, 75],
      ['', 800, 600, 80]
    ]);
  }

  // === NORTH WALES: Caernarfon Castle by Neil Mark Thomas (verified: "my hometown of Caernarfon") ===
  console.log('\n📸 NORTH WALES: Caernarfon Castle (Unsplash - Neil Mark Thomas)');
  await fetch('https://unsplash.com/photos/HTpvyy64KSM/download?w=1600', 'tmp-north-wales.jpg');
  if (fs.existsSync('tmp-north-wales.jpg') && fs.statSync('tmp-north-wales.jpg').size > 50000) {
    await processImage('tmp-north-wales.jpg', 'north-wales', [
      ['', 800, 600, 80],
      ['-mobile', 400, 300, 70]
    ]);
  }

  // === SOUTH WALES: Caerphilly Castle by Andy Watkins (verified: "Caerphilly Castle 13th Century") ===
  console.log('\n📸 SOUTH WALES: Caerphilly Castle (Unsplash - Andy Watkins)');
  await fetch('https://unsplash.com/photos/78F9oyKIo9g/download?w=1600', 'tmp-south-wales.jpg');
  if (fs.existsSync('tmp-south-wales.jpg') && fs.statSync('tmp-south-wales.jpg').size > 50000) {
    await processImage('tmp-south-wales.jpg', 'south-wales', [
      ['', 800, 600, 80],
      ['-mobile', 400, 300, 70]
    ]);
  }

  // === SOUTH WALES alt (moat view) ===
  console.log('\n📸 SOUTH WALES alt: Caerphilly with moat (Unsplash - Andy Watkins)');
  await fetch('https://unsplash.com/photos/BlrWO6mRMCc/download?w=1600', 'tmp-south-wales-alt.jpg');
  if (fs.existsSync('tmp-south-wales-alt.jpg') && fs.statSync('tmp-south-wales-alt.jpg').size > 50000) {
    const meta = await sharp('tmp-south-wales-alt.jpg').metadata();
    console.log(`  alt source: ${meta.width}x${meta.height} (saved as backup)`);
  }

  // === CONWY aerial by K. Mitch Hodge (verified: "Conwy, Wales") ===
  console.log('\n📸 CONWY aerial (Unsplash - K. Mitch Hodge)');
  await fetch('https://unsplash.com/photos/plDqAUdS-68/download?w=1600', 'tmp-conwy-aerial.jpg');
  if (fs.existsSync('tmp-conwy-aerial.jpg') && fs.statSync('tmp-conwy-aerial.jpg').size > 50000) {
    const meta = await sharp('tmp-conwy-aerial.jpg').metadata();
    console.log(`  aerial source: ${meta.width}x${meta.height} (saved for story sections)`);
  }

  // === CAERNARFON by Julian Rayar (verified: "Caernarfon Castle, Wales") ===
  console.log('\n📸 CAERNARFON water view (Unsplash - Julian Rayar)');
  await fetch('https://unsplash.com/photos/mE82XhKIVXE/download?w=1600', 'tmp-caernarfon-water.jpg');
  if (fs.existsSync('tmp-caernarfon-water.jpg') && fs.statSync('tmp-caernarfon-water.jpg').size > 50000) {
    await processImage('tmp-caernarfon-water.jpg', 'caernarfon-castle', [
      ['-desktop', 1400, 700, 80],
      ['-mobile', 800, 400, 75],
      ['', 800, 600, 80]
    ]);
  }

  console.log('\n✅ Done with Unsplash sources');
}

main().catch(e => console.error(e));
