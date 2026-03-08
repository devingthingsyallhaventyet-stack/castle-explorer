const fs = require('fs');
const https = require('https');
const path = require('path');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

const heroes = {
  'alnwick-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alnwick_Castle_in_uk.jpg/1280px-Alnwick_Castle_in_uk.jpg',
  'bamburgh-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bamburgh_Castle%2C_beautiful_day.jpg/1280px-Bamburgh_Castle%2C_beautiful_day.jpg',
  'blarney-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blarney_Castle_Ireland.jpg/1280px-Blarney_Castle_Ireland.jpg',
  'blenheim-palace': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Blenheim_Palace_2006.jpg/1280px-Blenheim_Palace_2006.jpg',
  'caernarfon-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Caernarfon_Castle_1994.jpg/1280px-Caernarfon_Castle_1994.jpg',
  'cardiff-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Aerial_view_of_Cardiff_Castle.jpg/1280px-Aerial_view_of_Cardiff_Castle.jpg',
  'castle-howard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Castle_Howard_and_garden.jpg/1280px-Castle_Howard_and_garden.jpg',
  'conwy-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Conwy_Castle%2C_water_view1.jpg/1280px-Conwy_Castle%2C_water_view1.jpg',
  'corfe-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Corfe_Castle%2C_Dorset.jpg/1280px-Corfe_Castle%2C_Dorset.jpg',
  'dover-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/1_dover_castle_aerial_panorama_2017.jpg/1280px-1_dover_castle_aerial_panorama_2017.jpg',
  'dunnottar-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Dunnottar_Castle_-_geograph.org.uk_-_8057610.jpg/1280px-Dunnottar_Castle_-_geograph.org.uk_-_8057610.jpg',
  'eilean-donan-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eilean_Donan_Castle%2C_Scotland_-_Jan_2011.jpg/1280px-Eilean_Donan_Castle%2C_Scotland_-_Jan_2011.jpg',
  'fountains-abbey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Fountains_Abbey_-_9447434368.jpg/1280px-Fountains_Abbey_-_9447434368.jpg',
  'kilkenny-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kilkenny-castle.jpg/1280px-Kilkenny-castle.jpg',
  'leeds-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Leeds_castle.JPG/1280px-Leeds_castle.JPG',
  'rock-of-cashel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rock_of_Cashel_%2849163525453%29.jpg/1280px-Rock_of_Cashel_%2849163525453%29.jpg',
  'stirling-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Scotland-2016-Aerial-Stirling-Stirling_Castle.jpg/1280px-Scotland-2016-Aerial-Stirling-Stirling_Castle.jpg',
  'tower-of-london': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/1280px-Tower_of_London_from_the_Shard_%288515883950%29.jpg',
  'warwick-castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Warwick_Castle_May_2016.jpg/1280px-Warwick_Castle_May_2016.jpg',
};

function download(url) {
  return new Promise((resolve, reject) => {
    const opts = {
      headers: {
        'User-Agent': 'CastlecoreBot/1.0 (https://castlecore.uk; clawzisabot@proton.me)'
      }
    };
    https.get(url, opts, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error('Download failed: ' + res.statusCode));
        return;
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function uploadR2(key, data) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.cloudflare.com',
      path: `/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${key}`,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'image/jpeg',
        'Content-Length': data.length
      }
    };
    const req = https.request(opts, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  let ok = 0, fail = 0;
  for (const [slug, url] of Object.entries(heroes)) {
    const key = slug + '.jpg';
    try {
      console.log('Downloading: ' + slug + '...');
      const data = await download(url);
      console.log('  Downloaded ' + (data.length / 1024).toFixed(0) + 'KB, uploading to R2...');
      const res = await uploadR2(key, data);
      if (res.status === 200) {
        console.log('  ✅ Uploaded: ' + key);
        ok++;
      } else {
        console.log('  ❌ Upload failed: ' + res.status + ' ' + res.body.substring(0, 200));
        fail++;
      }
    } catch (e) {
      console.log('  ❌ Error: ' + e.message);
      fail++;
    }
  }
  console.log('\nDone: ' + ok + ' uploaded, ' + fail + ' failed');
}

main();
