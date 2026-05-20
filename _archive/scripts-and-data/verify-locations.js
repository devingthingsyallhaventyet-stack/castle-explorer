const fs = require('fs');
const path = require('path');
const https = require('https');

// Load castle data
console.log('Loading castle data...');
const s = fs.readFileSync('data.js', 'utf8');
const fn = new Function(s + ';return CASTLES');
const castles = fn();

console.log(`Found ${castles.length} castles to verify`);

// Create audit directory if needed
const auditDir = path.join(__dirname, 'audit');
if (!fs.existsSync(auditDir)) {
    fs.mkdirSync(auditDir, { recursive: true });
    console.log('Created audit directory');
}

// Tracking variables
let processedCount = 0;
let errorCount = 0;
let countryMismatches = [];
let countyMismatches = [];

// Rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Smart name matching function
function normalizeLocationName(name) {
    if (!name) return '';
    return name.toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/\bcounty\b/g, '')
        .replace(/\bcouncil\b/g, '')
        .replace(/\bshire\b/g, '')
        .replace(/\bunitary authority\b/g, '')
        .replace(/\bborough\b/g, '')
        .replace(/\bdistrict\b/g, '')
        .replace(/\band\b/g, '&')
        .replace(/[^\w&\s]/g, '')
        .trim();
}

function locationNamesMatch(name1, name2) {
    if (!name1 || !name2) return false;
    
    const norm1 = normalizeLocationName(name1);
    const norm2 = normalizeLocationName(name2);
    
    // Direct match
    if (norm1 === norm2) return true;
    
    // One contains the other
    if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
    
    // Special case mappings
    const specialMappings = [
        ['highland', 'highland'],
        ['glasgow', 'glasgow'],
        ['edinburgh', 'edinburgh'],
        ['london', 'greater london'],
        ['city of london', 'london'],
    ];
    
    for (const [a, b] of specialMappings) {
        if ((norm1.includes(a) && norm2.includes(b)) || (norm1.includes(b) && norm2.includes(a))) {
            return true;
        }
    }
    
    return false;
}

function countryNamesMatch(expected, apiCountry) {
    if (!expected || !apiCountry) return false;
    
    const expectedLower = expected.toLowerCase();
    const apiLower = apiCountry.toLowerCase();
    
    // Direct match
    if (expectedLower === apiLower) return true;
    
    // UK constituent countries
    const ukCountries = ['england', 'scotland', 'wales', 'northern ireland'];
    const ukNames = ['united kingdom', 'uk', 'great britain', 'britain'];
    
    // If expected is a UK constituent and API returns UK, that's a match
    if (ukCountries.includes(expectedLower) && ukNames.some(uk => apiLower.includes(uk))) {
        return true;
    }
    
    // If expected is UK and API returns a constituent, that's also a match
    if (ukNames.some(uk => expectedLower.includes(uk)) && ukCountries.includes(apiLower)) {
        return true;
    }
    
    // Other country mappings
    const countryMappings = [
        ['france', 'republic of france'],
        ['germany', 'deutschland'],
        ['spain', 'españa'],
        ['ireland', 'republic of ireland'],
        ['republic of ireland', 'éire'],
    ];
    
    for (const [a, b] of countryMappings) {
        if ((expectedLower.includes(a) && apiLower.includes(b)) || 
            (expectedLower.includes(b) && apiLower.includes(a))) {
            return true;
        }
    }
    
    return false;
}

// API request function
function makeApiRequest(lat, lng) {
    return new Promise((resolve, reject) => {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=10`;
        
        const options = {
            headers: {
                'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk)'
            }
        };
        
        const req = https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    if (res.statusCode !== 200) {
                        reject(new Error(`API returned status ${res.statusCode}`));
                        return;
                    }
                    const result = JSON.parse(data);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
            });
        });
        
        req.on('error', reject);
        req.setTimeout(30000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });
    });
}

// Process a single castle
async function processCastle(castle, index) {
    try {
        const apiResult = await makeApiRequest(castle.lat, castle.lng);
        
        if (!apiResult || !apiResult.address) {
            console.log(`No address data for ${castle.name} (${index + 1}/${castles.length})`);
            processedCount++;
            return;
        }
        
        const address = apiResult.address;
        const apiCountry = address.country;
        const apiCounty = address.county || address.state || address.administrative_area_level_1;
        
        // Check country mismatch (only flag genuine mismatches)
        if (apiCountry && !countryNamesMatch(castle.country, apiCountry)) {
            countryMismatches.push({
                name: castle.name,
                id: castle.id,
                expected_country: castle.country,
                api_country: apiCountry,
                lat: castle.lat,
                lng: castle.lng,
                county: castle.county
            });
        }
        
        // Check county mismatch
        if (apiCounty && !locationNamesMatch(castle.county, apiCounty)) {
            countyMismatches.push({
                name: castle.name,
                id: castle.id,
                expected_county: castle.county,
                api_county: apiCounty,
                lat: castle.lat,
                lng: castle.lng,
                country: castle.country,
                api_country: apiCountry
            });
        }
        
        processedCount++;
        
        // Progress reporting
        if (processedCount % 100 === 0) {
            const elapsed = Math.round((Date.now() - startTime) / 60000);
            const remaining = Math.round(((castles.length - processedCount) * 1.5) / 60);
            console.log(`Processed ${processedCount}/${castles.length} (${Math.round(processedCount / castles.length * 100)}%) - ${elapsed}m elapsed, ~${remaining}m remaining`);
        }
        
    } catch (error) {
        errorCount++;
        console.error(`Error processing ${castle.name}: ${error.message}`);
        processedCount++;
    }
}

// Main processing function
let startTime;
async function processAllCastles() {
    console.log('Starting location verification...');
    console.log('This will take approximately 50 minutes due to API rate limiting (1.5s between requests)');
    
    startTime = Date.now();
    
    for (let i = 0; i < castles.length; i++) {
        await processCastle(castles[i], i);
        
        // Rate limiting: wait 1.5 seconds between requests
        if (i < castles.length - 1) {
            await delay(1500);
        }
    }
    
    const endTime = Date.now();
    const durationMinutes = Math.round((endTime - startTime) / 60000);
    
    console.log(`\n=== FINAL RESULTS ===`);
    console.log(`Completed verification in ${durationMinutes} minutes`);
    console.log(`Processed: ${processedCount} castles`);
    console.log(`Errors: ${errorCount} castles`);
    console.log(`Country mismatches: ${countryMismatches.length}`);
    console.log(`County mismatches: ${countyMismatches.length}`);
    console.log(`=====================`);
    
    // Write results
    await writeResults();
}

// Write output files
async function writeResults() {
    // Sort country mismatches by severity (country name alphabetically for consistency)
    countryMismatches.sort((a, b) => a.expected_country.localeCompare(b.expected_country));
    
    // Sort county mismatches by name
    countyMismatches.sort((a, b) => a.name.localeCompare(b.name));
    
    // Write markdown report
    const markdownContent = `# Phase 3: Castle Location Verification Results

## Summary

- **Total castles checked:** ${processedCount}
- **Total errors:** ${errorCount}
- **Country mismatches:** ${countryMismatches.length}
- **County mismatches:** ${countyMismatches.length}
- **Verification date:** ${new Date().toISOString().split('T')[0]}

## Country Mismatches

${countryMismatches.length === 0 ? 'No country mismatches found!' : countryMismatches.map(castle => 
`### ${castle.name} (ID: ${castle.id})
- **Expected:** ${castle.expected_country}
- **API returned:** ${castle.api_country}
- **Coordinates:** ${castle.lat}, ${castle.lng}
- **County:** ${castle.county}`).join('\n\n')}

## County Mismatches

${countyMismatches.length === 0 ? 'No county mismatches found!' : countyMismatches.map(castle => 
`### ${castle.name} (ID: ${castle.id})
- **Expected county:** ${castle.expected_county}
- **API returned:** ${castle.api_county}
- **Country:** ${castle.country} → ${castle.api_country || '(same)'}
- **Coordinates:** ${castle.lat}, ${castle.lng}`).join('\n\n')}

## Notes

- Country mismatches are considered more serious than county mismatches
- County differences may be due to administrative boundary changes or naming variations
- All coordinates were verified against OpenStreetMap Nominatim API
- Rate limited to 1 request per 1.5 seconds as required by Nominatim
- ${errorCount} castles encountered errors during processing
- UK constituent countries (England, Scotland, Wales, Northern Ireland) are treated as equivalent to "United Kingdom" for country matching
`;

    fs.writeFileSync(path.join(auditDir, 'phase3-locations.md'), markdownContent);
    
    // Write JSON data
    const jsonData = {
        metadata: {
            total_checked: processedCount,
            total_errors: errorCount,
            country_mismatches: countryMismatches.length,
            county_mismatches: countyMismatches.length,
            verification_date: new Date().toISOString()
        },
        country_mismatches: countryMismatches,
        county_mismatches: countyMismatches
    };
    
    fs.writeFileSync(path.join(auditDir, 'phase3-locations.json'), JSON.stringify(jsonData, null, 2));
    
    console.log('\nResults written to:');
    console.log('- audit/phase3-locations.md');
    console.log('- audit/phase3-locations.json');
}

// Run the verification
processAllCastles().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});