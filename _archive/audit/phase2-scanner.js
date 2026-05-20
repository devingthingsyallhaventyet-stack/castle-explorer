const fs = require('fs');
const https = require('https');
const url = require('url');

// Load castle data
console.log('Loading castle data...');
const dataContent = fs.readFileSync('data.js', 'utf8');
const fn = new Function(dataContent + '; return CASTLES;');
const castles = fn();

console.log(`Loaded ${castles.length} castles`);

// Find all wikimedia URLs
function extractWikimediaUrls(castles) {
    const wikimediaUrls = [];
    
    castles.forEach((castle, index) => {
        // Check main image
        if (castle.image && castle.image.includes('upload.wikimedia.org')) {
            wikimediaUrls.push({
                castleName: castle.name,
                country: castle.country,
                county: castle.county || 'Unknown',
                url: castle.image,
                source: 'image',
                castleIndex: index
            });
        }
        
        // Check gallery images
        if (castle.gallery && Array.isArray(castle.gallery)) {
            castle.gallery.forEach((galleryUrl, galleryIndex) => {
                if (galleryUrl && galleryUrl.includes('upload.wikimedia.org')) {
                    wikimediaUrls.push({
                        castleName: castle.name,
                        country: castle.country,
                        county: castle.county || 'Unknown',
                        url: galleryUrl,
                        source: `gallery[${galleryIndex}]`,
                        castleIndex: index
                    });
                }
            });
        }
    });
    
    return wikimediaUrls;
}

// Extract filename from wikimedia URL
function extractFilename(wikimediaUrl) {
    // Handle URLs like: /thumb/a/a6/Some_Image.jpg/500px-Some_Image.jpg
    const pathParts = wikimediaUrl.split('/');
    if (pathParts.includes('thumb')) {
        const thumbIndex = pathParts.indexOf('thumb');
        // The actual filename is usually 3 positions after 'thumb'
        if (thumbIndex + 3 < pathParts.length) {
            return decodeURIComponent(pathParts[thumbIndex + 3]);
        }
    }
    // Fallback: try to get the last meaningful part
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && lastPart.includes('.')) {
        return decodeURIComponent(lastPart);
    }
    return null;
}

// Test URL with timeout and proper headers
function testUrl(testUrl) {
    return new Promise((resolve) => {
        const parsedUrl = url.parse(testUrl);
        
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.path,
            method: 'HEAD',
            timeout: 15000,
            headers: {
                'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk; contact@castlecore.uk)'
            }
        };
        
        const req = https.request(options, (res) => {
            resolve({
                status: res.statusCode,
                headers: res.headers
            });
        });
        
        req.on('timeout', () => {
            req.destroy();
            resolve({ status: 'TIMEOUT' });
        });
        
        req.on('error', (err) => {
            resolve({ status: 'ERROR', error: err.message });
        });
        
        req.end();
    });
}

// Get attribution from Wikimedia Commons API
function getAttribution(filename) {
    return new Promise((resolve) => {
        const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=extmetadata&format=json`;
        
        const parsedUrl = url.parse(apiUrl);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.path,
            method: 'GET',
            timeout: 15000,
            headers: {
                'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk; contact@castlecore.uk)'
            }
        };
        
        const req = https.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve(json);
                } catch (e) {
                    resolve({ error: 'JSON parse error' });
                }
            });
        });
        
        req.on('timeout', () => {
            req.destroy();
            resolve({ error: 'TIMEOUT' });
        });
        
        req.on('error', (err) => {
            resolve({ error: err.message });
        });
        
        req.end();
    });
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main processing function
async function processImages() {
    console.log('Extracting Wikimedia URLs...');
    const wikimediaUrls = extractWikimediaUrls(castles);
    console.log(`Found ${wikimediaUrls.length} Wikimedia URLs`);
    
    const results = {
        total: wikimediaUrls.length,
        working: [],
        broken: [],
        rateLimited: [],
        otherErrors: [],
        attribution: []
    };
    
    console.log('Starting URL tests...');
    
    for (let i = 0; i < wikimediaUrls.length; i++) {
        const urlData = wikimediaUrls[i];
        console.log(`Testing ${i + 1}/${wikimediaUrls.length}: ${urlData.castleName}`);
        
        try {
            const testResult = await testUrl(urlData.url);
            
            urlData.testResult = testResult;
            
            if (testResult.status === 200) {
                results.working.push(urlData);
                console.log(`  ✓ Working (200)`);
            } else if (testResult.status === 404 || testResult.status === 403) {
                results.broken.push(urlData);
                console.log(`  ✗ Broken (${testResult.status})`);
            } else if (testResult.status === 429) {
                results.rateLimited.push(urlData);
                console.log(`  ⚠ Rate limited (429)`);
            } else {
                results.otherErrors.push(urlData);
                console.log(`  ? Other error (${testResult.status || testResult.error || 'Unknown'})`);
            }
            
        } catch (error) {
            urlData.testResult = { status: 'EXCEPTION', error: error.message };
            results.otherErrors.push(urlData);
            console.log(`  ! Exception: ${error.message}`);
        }
        
        // Rate limiting: 1.5 second delay between requests
        if (i < wikimediaUrls.length - 1) {
            await sleep(1500);
        }
    }
    
    console.log(`\\nURL testing complete!`);
    console.log(`Working: ${results.working.length}`);
    console.log(`Broken: ${results.broken.length}`);
    console.log(`Rate limited: ${results.rateLimited.length}`);
    console.log(`Other errors: ${results.otherErrors.length}`);
    
    // Now get attribution for working images
    console.log(`\\nGetting attribution for ${results.working.length} working images...`);
    
    for (let i = 0; i < results.working.length; i++) {
        const workingUrl = results.working[i];
        const filename = extractFilename(workingUrl.url);
        
        console.log(`Attribution ${i + 1}/${results.working.length}: ${workingUrl.castleName}`);
        
        if (!filename) {
            console.log(`  ! Could not extract filename from URL`);
            continue;
        }
        
        try {
            const attributionData = await getAttribution(filename);
            
            if (attributionData.query && attributionData.query.pages) {
                const pages = Object.values(attributionData.query.pages);
                if (pages.length > 0 && pages[0].imageinfo) {
                    const imageinfo = pages[0].imageinfo[0];
                    const extmetadata = imageinfo.extmetadata || {};
                    
                    const attribution = {
                        castleName: workingUrl.castleName,
                        country: workingUrl.country,
                        county: workingUrl.county,
                        imageUrl: workingUrl.url,
                        commonsFilename: filename,
                        commonsPageUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`,
                        photographer: extmetadata.Artist ? extmetadata.Artist.value.replace(/<[^>]*>/g, '') : 'Unknown',
                        license: extmetadata.License ? extmetadata.License.value : 'Unknown',
                        licenseUrl: extmetadata.LicenseUrl ? extmetadata.LicenseUrl.value : null
                    };
                    
                    results.attribution.push(attribution);
                    console.log(`  ✓ Got attribution: ${attribution.photographer} (${attribution.license})`);
                } else {
                    console.log(`  ! No imageinfo found`);
                }
            } else {
                console.log(`  ! No pages found in API response`);
            }
            
        } catch (error) {
            console.log(`  ! Attribution error: ${error.message}`);
        }
        
        // Rate limiting: 1 second delay between API requests
        if (i < results.working.length - 1) {
            await sleep(1000);
        }
    }
    
    console.log(`\\nAttribution complete! Got data for ${results.attribution.length} images`);
    
    return results;
}

// Run the process
processImages().then(results => {
    // Save results to files
    console.log('\\nSaving results...');
    
    // Create audit directory if it doesn't exist
    if (!fs.existsSync('audit')) {
        fs.mkdirSync('audit');
    }
    
    // Generate markdown report
    let markdown = `# Phase 2 Image Scan Results (v2)\\n\\n`;
    markdown += `**Generated:** ${new Date().toISOString()}\\n\\n`;
    
    // Summary stats
    markdown += `## Summary Statistics\\n\\n`;
    markdown += `- **Total URLs tested:** ${results.total}\\n`;
    markdown += `- **Working (200):** ${results.working.length}\\n`;
    markdown += `- **Broken (404/403):** ${results.broken.length}\\n`;
    markdown += `- **Rate-limited (429):** ${results.rateLimited.length}\\n`;
    markdown += `- **Other errors:** ${results.otherErrors.length}\\n`;
    markdown += `- **Attribution retrieved:** ${results.attribution.length}\\n\\n`;
    
    // Broken images
    if (results.broken.length > 0) {
        markdown += `## Broken Images (${results.broken.length})\\n\\n`;
        results.broken.forEach(item => {
            markdown += `- **${item.castleName}** (${item.county}, ${item.country})\\n`;
            markdown += `  - URL: \`${item.url}\`\\n`;
            markdown += `  - Status: ${item.testResult.status}\\n\\n`;
        });
    }
    
    // Working images with attribution
    if (results.attribution.length > 0) {
        markdown += `## Working Images with Attribution (${results.attribution.length})\\n\\n`;
        results.attribution.forEach(item => {
            markdown += `- **${item.castleName}** (${item.county}, ${item.country})\\n`;
            markdown += `  - URL: \`${item.imageUrl}\`\\n`;
            markdown += `  - Photographer: ${item.photographer}\\n`;
            markdown += `  - License: ${item.license}\\n`;
            if (item.licenseUrl) {
                markdown += `  - License URL: ${item.licenseUrl}\\n`;
            }
            markdown += `  - Commons: [${item.commonsFilename}](${item.commonsPageUrl})\\n\\n`;
        });
    }
    
    // License breakdown
    if (results.attribution.length > 0) {
        const licenseBreakdown = {};
        results.attribution.forEach(item => {
            const license = item.license || 'Unknown';
            licenseBreakdown[license] = (licenseBreakdown[license] || 0) + 1;
        });
        
        markdown += `## License Breakdown\\n\\n`;
        Object.entries(licenseBreakdown)
            .sort((a, b) => b[1] - a[1])
            .forEach(([license, count]) => {
                markdown += `- **${license}:** ${count}\\n`;
            });
    }
    
    // Rate limited entries
    if (results.rateLimited.length > 0) {
        markdown += `\\n## Rate-Limited URLs (${results.rateLimited.length})\\n\\n`;
        results.rateLimited.forEach(item => {
            markdown += `- **${item.castleName}** (${item.county}, ${item.country})\\n`;
            markdown += `  - URL: \`${item.url}\`\\n\\n`;
        });
    }
    
    // Other errors
    if (results.otherErrors.length > 0) {
        markdown += `\\n## Other Errors (${results.otherErrors.length})\\n\\n`;
        results.otherErrors.forEach(item => {
            markdown += `- **${item.castleName}** (${item.county}, ${item.country})\\n`;
            markdown += `  - URL: \`${item.url}\`\\n`;
            markdown += `  - Error: ${item.testResult.status || item.testResult.error || 'Unknown'}\\n\\n`;
        });
    }
    
    fs.writeFileSync('audit/phase2-images-v2.md', markdown);
    
    // Save attribution JSON
    fs.writeFileSync('audit/phase2-attribution-v2.json', JSON.stringify(results.attribution, null, 2));
    
    console.log('Results saved to:');
    console.log('- audit/phase2-images-v2.md');
    console.log('- audit/phase2-attribution-v2.json');
    console.log('\\nPhase 2 scan complete!');
    
}).catch(error => {
    console.error('Error during processing:', error);
});