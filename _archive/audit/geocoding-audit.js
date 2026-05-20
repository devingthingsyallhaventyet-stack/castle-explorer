const fs = require('fs');
const https = require('https');

// Configuration
const DATA_FILE = 'C:/Users/Clawzisabot/.openclaw/workspace/castle-explorer/data.js';
const OUTPUT_MD = 'C:/Users/Clawzisabot/.openclaw/workspace/castle-explorer/audit/phase3-location-audit.md';
const OUTPUT_JSON = 'C:/Users/Clawzisabot/.openclaw/workspace/castle-explorer/audit/phase3-location-data.json';
const RATE_LIMIT_MS = 1000; // 1 second between requests
const PROGRESS_INTERVAL = 100; // Log every 100 castles

// Utility function to sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Make HTTP request with promise wrapper
function makeRequest(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: {
        'User-Agent': 'CastlecoreAudit/1.0',
        ...headers
      }
    }, (response) => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (error) {
          resolve({ error: 'Failed to parse JSON', raw: data });
        }
      });
    });
    
    request.on('error', error => {
      reject(error);
    });
    
    request.setTimeout(10000, () => {
      request.abort();
      reject(new Error('Request timeout'));
    });
  });
}

// Fuzzy matching function for county names
function fuzzyMatch(str1, str2) {
  if (!str1 || !str2) return false;
  
  const normalize = (str) => str.toLowerCase()
    .replace(/[&]/g, 'and')
    .replace(/[-\s]/g, '')
    .replace(/shire$/, '')
    .replace(/county$/, '')
    .trim();
  
  const norm1 = normalize(str1);
  const norm2 = normalize(str2);
  
  // Exact match after normalization
  if (norm1 === norm2) return true;
  
  // Check if one contains the other
  if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
  
  // Special cases for Scottish regions
  const scottishMappings = {
    'highland': ['invernessshire', 'invernesshire', 'rosshire', 'cromartyshire', 'sutherlandshire'],
    'argyllandbute': ['argyll', 'argyllshire'],
    'perthkinross': ['perthshire', 'kinrossshire'],
    'dumfriesgalloway': ['dumfriesshire', 'wigtownshire', 'kirkcudbrightshire'],
    'scottishborders': ['roxburghshire', 'selkirkshire', 'peeblesshire', 'berwickshire'],
    'southlanarkshire': ['lanarkshire'],
    'northlanarkshire': ['lanarkshire'],
    'eastlothian': ['haddingtonshire'],
    'midlothian': ['edinburghshire'],
    'westlothian': ['linlithgowshire'],
    'eileanansiar': ['rossandcromarty', 'invernessshire'],
    'naheileananansiar': ['rossandcromarty', 'invernessshire']
  };
  
  // Check Scottish mappings
  for (const [modern, historic] of Object.entries(scottishMappings)) {
    if (norm1 === modern && historic.includes(norm2)) return true;
    if (norm2 === modern && historic.includes(norm1)) return true;
  }
  
  return false;
}

// Reverse geocode a single castle
async function reverseGeocode(castle) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${castle.lat}&lon=${castle.lng}&format=json&zoom=10`;
  
  try {
    const result = await makeRequest(url);
    return {
      castle: castle,
      geocoded: result,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      castle: castle,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

// Analyze geocoding results
function analyzeResults(results) {
  const mismatches = [];
  const errors = [];
  const matches = [];
  
  for (const result of results) {
    if (result.error) {
      errors.push(result);
      continue;
    }
    
    const castle = result.castle;
    const geocoded = result.geocoded;
    
    if (!geocoded.address) {
      errors.push({ ...result, error: 'No address in response' });
      continue;
    }
    
    // Determine geocoded county/state
    let geocodedRegion = null;
    if (castle.country === 'Scotland' || castle.country === 'Wales' || castle.country === 'Ireland') {
      geocodedRegion = geocoded.address.state || geocoded.address.county;
    } else {
      geocodedRegion = geocoded.address.county;
    }
    
    const castleCounty = castle.county;
    
    if (!geocodedRegion) {
      errors.push({ ...result, error: 'No county/state in geocoded response' });
      continue;
    }
    
    // Check for fuzzy match
    const isMatch = fuzzyMatch(castleCounty, geocodedRegion);
    
    if (isMatch) {
      matches.push({
        castle: castle.name,
        listed: castleCounty,
        geocoded: geocodedRegion,
        country: castle.country
      });
    } else {
      mismatches.push({
        castle: castle.name,
        listed: castleCounty,
        geocoded: geocodedRegion,
        country: castle.country,
        lat: castle.lat,
        lng: castle.lng
      });
    }
  }
  
  return { mismatches, errors, matches };
}

// Generate markdown report
function generateMarkdownReport(analysis, stats) {
  const { mismatches, errors, matches } = analysis;
  
  let report = `# Phase 3 Geocoding Audit Report

Generated: ${new Date().toISOString()}

## Summary

- **Total castles processed:** ${stats.total}
- **Successful geocoding:** ${stats.successful}
- **Geocoding errors:** ${errors.length}
- **Location matches:** ${matches.length}
- **Location mismatches:** ${mismatches.length}
- **Match rate:** ${((matches.length / (matches.length + mismatches.length)) * 100).toFixed(1)}%

## Methodology

This audit reverse-geocoded each castle's coordinates using OpenStreetMap Nominatim API to verify the listed county information. 

**Fuzzy matching** was used to account for:
- Different naming conventions (e.g., "Highland" vs "Inverness-shire")
- Punctuation variations (e.g., "Argyll & Bute" vs "Argyll and Bute")
- Administrative boundary changes over time
- Regional consolidations in Scotland

## Location Mismatches

The following castles show significant differences between their listed county and the geocoded location:

| Castle | Listed County | Geocoded County | Country | Coordinates |
|--------|---------------|-----------------|---------|-------------|
`;

  for (const mismatch of mismatches) {
    report += `| ${mismatch.castle} | ${mismatch.listed} | ${mismatch.geocoded} | ${mismatch.country} | ${mismatch.lat}, ${mismatch.lng} |\n`;
  }

  if (errors.length > 0) {
    report += `\n## Geocoding Errors

The following castles could not be successfully geocoded:

| Castle | County | Country | Error |
|--------|--------|---------|-------|
`;

    for (const error of errors) {
      report += `| ${error.castle?.name || 'Unknown'} | ${error.castle?.county || 'Unknown'} | ${error.castle?.country || 'Unknown'} | ${error.error} |\n`;
    }
  }

  report += `
## Notes

- Scottish administrative boundaries have changed significantly over time
- Modern council areas often combine multiple historic counties
- Some castles may be on county boundaries
- GPS coordinates may not always align with administrative boundaries at zoom level 10

## Next Steps

1. Review flagged mismatches manually
2. Consider updating coordinates or county information where appropriate
3. Document any boundary edge cases for future reference
`;

  return report;
}

// Main execution function
async function runGeocodingAudit() {
  console.log('🏰 Starting Phase 3 Geocoding Audit...');
  console.log(`📍 Rate limit: ${RATE_LIMIT_MS}ms between requests`);
  
  // Load and parse castle data
  console.log('📖 Loading castle data...');
  const dataContent = fs.readFileSync(DATA_FILE, 'utf8');
  const fn = new Function(dataContent + ';return CASTLES');
  const allCastles = fn();
  
  // Sort: Scottish castles first, then others
  const scottishCastles = allCastles.filter(c => c.country === 'Scotland');
  const otherCastles = allCastles.filter(c => c.country !== 'Scotland');
  const orderedCastles = [...scottishCastles, ...otherCastles];
  
  console.log(`📊 Processing ${orderedCastles.length} castles (${scottishCastles.length} Scottish, ${otherCastles.length} others)`);
  console.log(`⏱️  Estimated time: ~${Math.ceil(orderedCastles.length / 60)} minutes`);
  
  const results = [];
  const startTime = Date.now();
  
  for (let i = 0; i < orderedCastles.length; i++) {
    const castle = orderedCastles[i];
    
    // Progress logging
    if (i % PROGRESS_INTERVAL === 0) {
      const elapsed = (Date.now() - startTime) / 1000;
      const rate = i / elapsed;
      const remaining = orderedCastles.length - i;
      const eta = remaining / rate;
      console.log(`🔄 Progress: ${i}/${orderedCastles.length} (${(i/orderedCastles.length*100).toFixed(1)}%) - ETA: ${Math.ceil(eta/60)}min`);
    }
    
    // Geocode castle
    console.log(`🔍 Geocoding: ${castle.name} (${castle.county}, ${castle.country})`);
    const result = await reverseGeocode(castle);
    results.push(result);
    
    // Rate limiting
    if (i < orderedCastles.length - 1) {
      await sleep(RATE_LIMIT_MS);
    }
  }
  
  console.log('✅ Geocoding complete! Analyzing results...');
  
  // Analyze results
  const analysis = analyzeResults(results);
  const stats = {
    total: orderedCastles.length,
    successful: results.filter(r => !r.error).length
  };
  
  // Generate reports
  console.log('📝 Generating reports...');
  const markdownReport = generateMarkdownReport(analysis, stats);
  
  // Write files
  fs.writeFileSync(OUTPUT_MD, markdownReport, 'utf8');
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(results, null, 2), 'utf8');
  
  // Final summary
  console.log('\n🎉 Audit Complete!');
  console.log(`📊 Results: ${analysis.matches.length} matches, ${analysis.mismatches.length} mismatches, ${analysis.errors.length} errors`);
  console.log(`📁 Reports saved:`);
  console.log(`   📄 ${OUTPUT_MD}`);
  console.log(`   📄 ${OUTPUT_JSON}`);
  
  const totalTime = (Date.now() - startTime) / 1000 / 60;
  console.log(`⏱️  Total time: ${totalTime.toFixed(1)} minutes`);
}

// Run the audit
if (require.main === module) {
  runGeocodingAudit().catch(error => {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  });
}