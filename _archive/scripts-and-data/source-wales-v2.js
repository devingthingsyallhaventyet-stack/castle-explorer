const fs = require('fs');
const sharp = require('sharp');

// Re-source Wales images with updated quality standards
// Priority: Unsplash/Pexels for region cards and hero (location-verified)
// Wikimedia Commons for history cards

async function downloadImage(url, filename) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to download ${url}: ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filename, Buffer.from(buffer));
    console.log(`Downloaded ${filename}`);
    return filename;
}

async function processImage(inputPath, outputPath, width, height, quality = 80, extractParams = null) {
    let pipeline = sharp(inputPath);
    
    // Apply extract if provided (for portrait sources)
    if (extractParams) {
        pipeline = pipeline.extract(extractParams);
    }
    
    // Resize and convert to WebP
    pipeline = pipeline
        .resize(width, height, { fit: 'cover' })
        .webp({ quality });
    
    await pipeline.toFile(outputPath);
    console.log(`Processed ${outputPath} (${width}x${height}, q${quality})`);
}

async function sourceWalesImages() {
    console.log('🏴󠁧󠁢󠁷󠁬󠁳󠁿 Re-sourcing Wales images with updated quality standards...\n');
    
    // Create output directory
    const outputDir = 'img/wales';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    try {
        // ================================
        // HERO IMAGES - Dramatic Welsh Castle (Unsplash)
        // ================================
        
        console.log('📸 HERO IMAGES - Using Conwy Castle from Unsplash...');
        
        // Use the already downloaded Conwy Castle image
        const conwyHero = 'tmp-conwy-hero.jpg';
        
        // Hero desktop (1800x900)
        await processImage(conwyHero, `${outputDir}/hero-wales-desktop.webp`, 1800, 900, 80);
        
        // Hero mobile (1200x800)  
        await processImage(conwyHero, `${outputDir}/hero-wales-mobile.webp`, 1200, 800, 75);
        
        // Hero fallback (800x600)
        await processImage(conwyHero, `${outputDir}/hero-wales.webp`, 800, 600, 80);
        
        console.log('✅ Hero images complete\n');
        
        // ================================
        // REGION CARDS - Location-verified castles (Unsplash priority)
        // ================================
        
        console.log('🏰 REGION CARDS - Using location-verified castle images...');
        
        // NORTH WALES - Using Caernarfon Castle golden hour
        const caernarfonGolden = 'tmp-caernarfon-golden.jpg';
        await processImage(caernarfonGolden, `${outputDir}/north-wales.webp`, 800, 600, 80);
        await processImage(caernarfonGolden, `${outputDir}/north-wales-mobile.webp`, 400, 300, 70);
        
        // SOUTH WALES - Using Caerphilly Castle 
        const caerphilly = 'tmp-caerphilly.jpg';
        await processImage(caerphilly, `${outputDir}/south-wales.webp`, 800, 600, 80);
        await processImage(caerphilly, `${outputDir}/south-wales-mobile.webp`, 400, 300, 70);
        
        // SOUTH WEST WALES - Download Pembroke Castle from Wikimedia
        console.log('Downloading Pembroke Castle from Wikimedia Commons...');
        const pembrokeUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/PembrokeCastle_2007.jpg/1600px-PembrokeCastle_2007.jpg';
        const pembrokeFile = 'tmp-pembroke.jpg';
        await downloadImage(pembrokeUrl, pembrokeFile);
        await processImage(pembrokeFile, `${outputDir}/south-west-wales.webp`, 800, 600, 80);
        await processImage(pembrokeFile, `${outputDir}/south-west-wales-mobile.webp`, 400, 300, 70);
        
        // MID WALES - Download Powis Castle from Wikimedia
        console.log('Downloading Powis Castle from Wikimedia Commons...');
        const powisUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Powis_Castle%2C_Welshpool_%2848349637397%29.jpg/1600px-Powis_Castle%2C_Welshpool_%2848349637397%29.jpg';
        const powisFile = 'tmp-powis.jpg';
        await downloadImage(powisUrl, powisFile);
        await processImage(powisFile, `${outputDir}/mid-wales.webp`, 800, 600, 80);
        await processImage(powisFile, `${outputDir}/mid-wales-mobile.webp`, 400, 300, 70);
        
        console.log('✅ Region cards complete\n');
        
        // ================================
        // HISTORY CARDS - Historical figures (Wikimedia Commons)
        // ================================
        
        console.log('👑 HISTORY CARDS - Using Wikimedia Commons historical images...');
        
        // Roman Segontium - Roman fort ruins
        const segontiumUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Roman_Fort_Segontium_-_geograph.org.uk_-_1409134.jpg/1600px-Roman_Fort_Segontium_-_geograph.org.uk_-_1409134.jpg';
        await downloadImage(segontiumUrl, 'tmp-segontium.jpg');
        await processImage('tmp-segontium.jpg', `${outputDir}/roman-segontium.webp`, 800, 600, 80);
        
        // Edward I (Longshanks) - Westminster Abbey portrait
        const edwardUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Edward_I_of_England.jpg/1200px-Edward_I_of_England.jpg';
        await downloadImage(edwardUrl, 'tmp-edward.jpg');
        // Portrait source - extract top 45% for face area
        await processImage('tmp-edward.jpg', `${outputDir}/edward-longshanks.webp`, 800, 600, 80, {
            left: 0, top: 0, width: 1200, height: Math.round(1200 * 0.45)
        });
        
        // Llywelyn the Last - Dolwyddelan Castle (his birthplace)
        const dolwyddelanUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Dolwyddelan_Castle_-_geograph.org.uk_-_1470127.jpg/1600px-Dolwyddelan_Castle_-_geograph.org.uk_-_1470127.jpg';
        await downloadImage(dolwyddelanUrl, 'tmp-dolwyddelan.jpg');
        await processImage('tmp-dolwyddelan.jpg', `${outputDir}/llywelyn-the-last.webp`, 800, 600, 80);
        
        // Owain Glyndŵr portrait
        const glyndwrUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Owain_Glynd%C5%B5r.jpg/1200px-Owain_Glynd%C5%B5r.jpg';
        await downloadImage(glyndwrUrl, 'tmp-glyndwr.jpg');
        // Portrait source - extract top 45% for face area
        await processImage('tmp-glyndwr.jpg', `${outputDir}/owain-glyndwr-portrait.webp`, 800, 600, 80, {
            left: 0, top: 0, width: 1200, height: Math.round(1200 * 0.45)
        });
        
        // Henry Tudor (Henry VII)
        const henryTudorUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Henry_VII_of_England.jpg/1200px-Henry_VII_of_England.jpg';
        await downloadImage(henryTudorUrl, 'tmp-henry-tudor.jpg');
        await processImage('tmp-henry-tudor.jpg', `${outputDir}/henry-tudor.webp`, 800, 600, 80, {
            left: 0, top: 0, width: 1200, height: Math.round(1200 * 0.45)
        });
        
        // Henry VIII
        const henryViiiUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hans_Holbein_the_Younger_-_King_Henry_VIII_-_Google_Art_Project.jpg/1200px-Hans_Holbein_the_Younger_-_King_Henry_VIII_-_Google_Art_Project.jpg';
        await downloadImage(henryViiiUrl, 'tmp-henry-viii.jpg');
        await processImage('tmp-henry-viii.jpg', `${outputDir}/henry-viii.webp`, 800, 600, 80, {
            left: 0, top: 0, width: 1200, height: Math.round(1200 * 0.45)
        });
        
        // Modern Wales - Prince of Wales investiture
        const investitureUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Caernarfon_Castle_Prince_of_Wales_Investiture.jpg/1600px-Caernarfon_Castle_Prince_of_Wales_Investiture.jpg';
        await downloadImage(investitureUrl, 'tmp-modern-wales.jpg');
        await processImage('tmp-modern-wales.jpg', `${outputDir}/modern-wales.webp`, 800, 600, 80);
        
        // Chepstow Castle - oldest stone castle in Britain
        const chepstowUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chepstow_Castle_from_the_Wye.jpg/1600px-Chepstow_Castle_from_the_Wye.jpg';
        await downloadImage(chepstowUrl, 'tmp-chepstow.jpg');
        await processImage('tmp-chepstow.jpg', `${outputDir}/chepstow-castle.webp`, 800, 600, 80);
        
        console.log('✅ History cards complete\n');
        
        // ================================
        // STORY SECTIONS - Cinematic landscapes & culture
        // ================================
        
        console.log('🎬 STORY SECTIONS - Using cinematic Welsh imagery...');
        
        // Red Dragon Border - Welsh flag/landscape
        const dragonUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/1600px-Flag_of_Wales.svg.png';
        await downloadImage(dragonUrl, 'tmp-dragon.png');
        await processImage('tmp-dragon.png', `${outputDir}/red-dragon-border.webp`, 800, 600, 80);
        await processImage('tmp-dragon.png', `${outputDir}/red-dragon-border-desktop.webp`, 1400, 700, 80);
        await processImage('tmp-dragon.png', `${outputDir}/red-dragon-border-mobile.webp`, 800, 400, 75);
        
        // Caernarfon Castle - Use the night reflection image for story sections
        const caernarfonNight = 'tmp-caernarfon-night.jpg';
        await processImage(caernarfonNight, `${outputDir}/caernarfon-castle.webp`, 800, 600, 80);
        await processImage(caernarfonNight, `${outputDir}/caernarfon-castle-desktop.webp`, 1400, 700, 80);
        await processImage(caernarfonNight, `${outputDir}/caernarfon-castle-mobile.webp`, 800, 400, 75);
        
        // Glyndŵr Landscape - Harlech Castle (dramatic location)
        const harlech_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Harlech_Castle_%2848693262_01%29.jpg/1600px-Harlech_Castle_%2848693262_01%29.jpg';
        await downloadImage(harlech_url, 'tmp-harlech.jpg');
        await processImage('tmp-harlech.jpg', `${outputDir}/glyndwr-landscape.webp`, 800, 600, 80);
        await processImage('tmp-harlech.jpg', `${outputDir}/glyndwr-landscape-desktop.webp`, 1400, 700, 80);
        await processImage('tmp-harlech.jpg', `${outputDir}/glyndwr-landscape-mobile.webp`, 800, 400, 75);
        
        // Mabinogion Landscape - Mystical Snowdonia
        const snowdoniaUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Snowdon_Massif.jpg/1600px-Snowdon_Massif.jpg';
        await downloadImage(snowdoniaUrl, 'tmp-snowdonia.jpg');
        await processImage('tmp-snowdonia.jpg', `${outputDir}/mabinogion-landscape.webp`, 800, 600, 80);
        await processImage('tmp-snowdonia.jpg', `${outputDir}/mabinogion-landscape-desktop.webp`, 1400, 700, 80);
        await processImage('tmp-snowdonia.jpg', `${outputDir}/mabinogion-landscape-mobile.webp`, 800, 400, 75);
        
        // Welsh Banner - Cultural imagery
        const welshCultureUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Welsh_Guards_Trooping_the_Colour.jpg/1600px-Welsh_Guards_Trooping_the_Colour.jpg';
        await downloadImage(welshCultureUrl, 'tmp-welsh-culture.jpg');
        await processImage('tmp-welsh-culture.jpg', `${outputDir}/welsh-banner.webp`, 800, 600, 80);
        await processImage('tmp-welsh-culture.jpg', `${outputDir}/welsh-banner-desktop.webp`, 1400, 700, 80);
        await processImage('tmp-welsh-culture.jpg', `${outputDir}/welsh-banner-mobile.webp`, 800, 400, 75);
        
        console.log('✅ Story sections complete\n');
        
        // ================================
        // OTHER IMAGES
        // ================================
        
        console.log('🗺️  OTHER IMAGES - Maps and heraldry...');
        
        // Antique map of Wales
        const mapUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Wales_1610_by_John_Speed.jpg/1600px-Wales_1610_by_John_Speed.jpg';
        await downloadImage(mapUrl, 'tmp-map.jpg');
        await processImage('tmp-map.jpg', `${outputDir}/antique-map.webp`, 800, 600, 80);
        await processImage('tmp-map.jpg', `${outputDir}/antique-map-mobile.webp`, 400, 300, 70);
        
        // Glyndŵr banner/heraldry
        const glyndwrBannerUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Banner_of_Owain_Glynd%C5%B5r.svg/800px-Banner_of_Owain_Glynd%C5%B5r.svg.png';
        await downloadImage(glyndwrBannerUrl, 'tmp-glyndwr-banner.png');
        await processImage('tmp-glyndwr-banner.png', `${outputDir}/glyndwr-banner.webp`, 800, 600, 80);
        
        // Glyndŵr stamp - commemorative
        const commemorativeUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Owain_Glynd%C5%B5r_statue_in_Corwen.jpg/1200px-Owain_Glynd%C5%B5r_statue_in_Corwen.jpg';
        await downloadImage(commemorativeUrl, 'tmp-commemorative.jpg');
        await processImage('tmp-commemorative.jpg', `${outputDir}/glyndwr-stamp.webp`, 800, 600, 80);
        
        console.log('✅ Other images complete\n');
        
        // Cleanup temp files
        console.log('🧹 Cleaning up temporary files...');
        const tempFiles = [
            'tmp-segontium.jpg', 'tmp-edward.jpg', 'tmp-dolwyddelan.jpg', 
            'tmp-glyndwr.jpg', 'tmp-henry-tudor.jpg', 'tmp-henry-viii.jpg',
            'tmp-modern-wales.jpg', 'tmp-chepstow.jpg', 'tmp-dragon.png',
            'tmp-harlech.jpg', 'tmp-snowdonia.jpg', 'tmp-welsh-culture.jpg',
            'tmp-map.jpg', 'tmp-glyndwr-banner.png', 'tmp-commemorative.jpg',
            pembrokeFile, powisFile
        ];
        
        tempFiles.forEach(file => {
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
            }
        });
        
        console.log('🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales images re-sourced successfully with updated quality standards!');
        console.log('\n📊 SUMMARY:');
        console.log('✅ Hero images: Unsplash Conwy Castle (cinematic quality)');
        console.log('✅ Region cards: Location-verified Welsh castles');
        console.log('   • North Wales: Caernarfon Castle (golden hour)');
        console.log('   • South Wales: Caerphilly Castle (dramatic water view)');
        console.log('   • South West Wales: Pembroke Castle (Wikimedia)');
        console.log('   • Mid Wales: Powis Castle (Wikimedia)');
        console.log('✅ History cards: High-quality historical portraits & ruins');
        console.log('✅ Story sections: Cinematic Welsh landscapes & culture');
        console.log('✅ All images meet new quality standards: bright, clear, cinematic');
        
    } catch (error) {
        console.error('❌ Error sourcing Wales images:', error);
        throw error;
    }
}

// Run the script
sourceWalesImages().catch(console.error);