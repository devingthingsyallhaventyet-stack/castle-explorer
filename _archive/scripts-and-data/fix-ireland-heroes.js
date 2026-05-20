const fs = require('fs');

const heroMap = {
  'wild-atlantic-way': 'https://img.castlecore.uk/Ireland/Galway/pexels-jonathanborba-33943888.jpg',
  'irelands-ancient-east': 'https://img.castlecore.uk/Ireland/County%20Kilkenny/pexels-jaysphotography-23995753.jpg',
  'the-heartlands': 'https://img.castlecore.uk/Ireland/Heartlands/pexels-kelly-2881405.jpg',
  'dublin-and-the-pale': 'https://img.castlecore.uk/Ireland/Dublin/pexels-lkloeppel-2416653.jpg',
  'ulster-and-the-north': 'https://img.castlecore.uk/Ireland/Ulster/pexels-kelly-2317892.jpg',
};

for (const [slug, newUrl] of Object.entries(heroMap)) {
  const file = `ireland/${slug}.html`;
  let h = fs.readFileSync(file, 'utf8');
  
  // Format: <div class="hero-bg"><img src="..." 
  const re = /(class="hero-bg"><img src=")([^"]+)(")/;
  const m = h.match(re);
  if (m) {
    console.log(`${slug}: ${m[2].split('/').pop()} → ${newUrl.split('/').pop()}`);
    h = h.replace(re, `$1${newUrl}$3`);
    fs.writeFileSync(file, h, 'utf8');
  } else {
    console.log(`${slug}: hero-bg not found`);
  }
}

console.log('Done');
