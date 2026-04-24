const sharp = require('C:/Users/Clawzisabot/.openclaw/workspace/node_modules/sharp');

async function convertHistoryImages() {
  const conversions = [
    // History cards - using existing castle images that fit the periods
    { src: 'img/tower-of-london.jpg', dest: 'img/england/norman-conquest.webp' },
    { src: 'img/warwick.jpg', dest: 'img/england/plantagenet-kings.webp' },
    { src: 'img/tower-of-london.jpg', dest: 'img/england/henry-viii-dissolution.webp' },
    { src: 'img/warwick.jpg', dest: 'img/england/wars-of-roses.webp' },
    { src: 'img/corfe.jpg', dest: 'img/england/english-civil-war.webp' }, // Corfe was destroyed in Civil War
    { src: 'img/tower-of-london.jpg', dest: 'img/england/william-the-conqueror.webp' },
    { src: 'img/tower-of-london.jpg', dest: 'img/england/eleanor-of-aquitaine.webp' },
    { src: 'img/conwy.jpg', dest: 'img/england/edward-i-welsh-wars.webp' }, // Edward I built Conwy
    { src: 'img/tower-of-london.jpg', dest: 'img/england/henry-viii-wives.webp' } // New card
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

convertHistoryImages().then(() => {
  console.log('History image conversion complete!');
}).catch(console.error);