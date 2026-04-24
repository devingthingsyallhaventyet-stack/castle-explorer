const sharp = require('C:/Users/Clawzisabot/.openclaw/workspace/node_modules/sharp');

async function createBackgrounds() {
  try {
    // Create an antique map-style background using an existing castle image
    // We'll use the Tower of London image and overlay it to create a textural background
    console.log('Creating antique map background...');
    
    // Create a simple textural background from tower of london
    await sharp('img/tower-of-london.jpg')
      .resize(1200, 800)
      .modulate({ brightness: 0.3, saturation: 0.4 }) // Make it darker and less saturated
      .tint({ r: 101, g: 78, b: 58 }) // Apply sepia tint for antique look
      .blur(2) // Slight blur for texture effect
      .webp({ quality: 70 })
      .toFile('img/england/antique-map.webp');
      
    // Mobile version
    await sharp('img/tower-of-london.jpg')
      .resize(600, 400)
      .modulate({ brightness: 0.3, saturation: 0.4 })
      .tint({ r: 101, g: 78, b: 58 })
      .blur(2)
      .webp({ quality: 65 })
      .toFile('img/england/antique-map-mobile.webp');
      
    console.log('✓ Created antique map backgrounds');
    
  } catch (error) {
    console.error('Error creating backgrounds:', error);
  }
}

createBackgrounds().then(() => {
  console.log('Background creation complete!');
}).catch(console.error);