const sharp = require('C:/Users/Clawzisabot/.openclaw/workspace/node_modules/sharp');
const path = require('path');

async function convertRegionImages() {
  const conversions = [
    // Region cards - using existing images
    { src: 'img/bamburgh.jpg', dest: 'img/england/northern-england.webp' },
    { src: 'img/warwick.jpg', dest: 'img/england/yorkshire.webp' }, // Will use this for now, can update later
    { src: 'img/warwick.jpg', dest: 'img/england/midlands.webp' },
    { src: 'img/bodiam.jpg', dest: 'img/england/south-east.webp' },
    { src: 'img/corfe.jpg', dest: 'img/england/south-west.webp' },
    { src: 'img/framlingham.jpg', dest: 'img/england/east-anglia.webp' },
    { src: 'img/tower-of-london.jpg', dest: 'img/england/london-thames.webp' }
  ];

  for (const conv of conversions) {
    try {
      console.log(`Converting ${conv.src} to ${conv.dest}...`);
      
      // Full size (800w)
      await sharp(conv.src)
        .resize(800)
        .webp({ quality: 80 })
        .toFile(conv.dest);
        
      // Mobile size (400w)  
      const mobileDest = conv.dest.replace('.webp', '-mobile.webp');
      await sharp(conv.src)
        .resize(400)
        .webp({ quality: 75 })
        .toFile(mobileDest);
        
      console.log(`✓ Created ${conv.dest} and ${mobileDest}`);
    } catch (error) {
      console.error(`Error converting ${conv.src}:`, error);
    }
  }
}

convertRegionImages().then(() => {
  console.log('Region image conversion complete!');
}).catch(console.error);