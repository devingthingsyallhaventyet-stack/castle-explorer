const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Read and parse data.js
console.log('Loading CASTLES data...');
const dataContent = fs.readFileSync('data.js', 'utf8');
const evalFunc = new Function(dataContent + ';return CASTLES');
const castles = evalFunc();

console.log(`Loaded ${castles.length} castles`);

// Extract all Wikimedia URLs
console.log('Extracting Wikimedia URLs...');
const wikimediaUrls = new Set();

castles.forEach(castle => {
  // Check image field
  if (castle.image && castle.image.includes('upload.wikimedia.org')) {
    wikimediaUrls.add(castle.image);
  }
  
  // Check gallery field
  if (castle.gallery && Array.isArray(castle.gallery)) {
    castle.gallery.forEach(url => {
      if (url && url.includes && url.includes('upload.wikimedia.org')) {
        wikimediaUrls.add(url);
      }
    });
  }
});

const urlList = Array.from(wikimediaUrls);
console.log(`Found ${urlList.length} unique Wikimedia URLs`);

// HTTP request helper with timeout
function makeRequest(url, method = 'HEAD', timeout = 10000) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const requestModule = parsedUrl.protocol === 'https:' ? https : http;
    
    const req = requestModule.request({
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.pathname + parsedUrl.search,
      method: method,
      headers: {
        'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk)',
      },
      timeout: timeout
    }, (res) => {
      // Consume response body to free up memory
      res.on('data', () => {});
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout'));
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.end();
  });
}

// Extract filename from Wikimedia URL
function extractFilename(url) {
  // Handle thumbnail URLs like /thumb/a/a6/Some_Image.jpg/500px-Some_Image.jpg
  if (url.includes('/thumb/')) {
    const parts = url.split('/thumb/');
    if (parts[1]) {
      const pathParts = parts[1].split('/');
      if (pathParts.length >= 4) {
        return pathParts[2]; // The original filename
      }
    }
  }
  
  // Handle direct URLs
  const urlPath = new URL(url).pathname;
  const pathParts = urlPath.split('/');
  return pathParts[pathParts.length - 1];
}

// Query Wikimedia API for attribution
async function getAttribution(filename) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=extmetadata&format=json`;
  
  try {
    const response = await makeRequest(apiUrl, 'GET', 10000);
    if (response.status !== 200) {
      return null;
    }
    
    // For GET request, we need to actually fetch the body
    return new Promise((resolve, reject) => {
      const parsedUrl = new URL(apiUrl);
      const req = https.request({
        hostname: parsedUrl.hostname,
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        headers: {
          'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk)',
        }
      }, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            const pages = json.query?.pages || {};
            const pageId = Object.keys(pages)[0];
            const page = pages[pageId];
            
            if (page?.imageinfo && page.imageinfo[0]?.extmetadata) {
              const metadata = page.imageinfo[0].extmetadata;
              
              const result = {
                filename: filename,
                photographer: metadata.Artist?.value || metadata.Credit?.value || 'Unknown',
                license: metadata.LicenseShortName?.value || metadata.License?.value || 'Unknown',
                commonsUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`,
                description: metadata.ImageDescription?.value || '',
                attribution: metadata.Attribution?.value || ''
              };
              
              resolve(result);
            } else {
              resolve(null);
            }
          } catch (e) {
            reject(e);
          }
        });
      });
      
      req.on('error', reject);
      req.end();
    });
  } catch (error) {
    return null;
  }
}

// Main processing function
async function processUrls() {
  const results = {
    total: urlList.length,
    working: [],
    broken: [],
    rateLimited: [],
    errors: [],
    attributions: []
  };

  console.log(`Starting URL testing (${urlList.length} URLs)...`);
  
  for (let i = 0; i < urlList.length; i++) {
    const url = urlList[i];
    console.log(`[${i + 1}/${urlList.length}] Testing: ${url.substring(0, 80)}...`);
    
    try {
      const response = await makeRequest(url, 'HEAD', 10000);
      
      if (response.status === 200) {
        results.working.push(url);
        
        // Extract filename and get attribution
        const filename = extractFilename(url);
        console.log(`  ✓ Working (${response.status}) - Getting attribution for: ${filename}`);
        
        try {
          await new Promise(r => setTimeout(r, 1000)); // 1s delay for API calls
          const attribution = await getAttribution(filename);
          if (attribution) {
            attribution.originalUrl = url;
            results.attributions.push(attribution);
            console.log(`    → Attribution found: ${attribution.photographer} (${attribution.license})`);
          } else {
            console.log(`    → No attribution found for ${filename}`);
          }
        } catch (apiError) {
          console.log(`    → API error for ${filename}: ${apiError.message}`);
        }
        
      } else if (response.status === 404 || response.status === 403) {
        results.broken.push({ url, status: response.status });
        console.log(`  ✗ Broken (${response.status})`);
      } else if (response.status === 429) {
        results.rateLimited.push({ url, status: response.status });
        console.log(`  ⚠ Rate limited (${response.status})`);
      } else {
        results.errors.push({ url, status: response.status });
        console.log(`  ? Other status (${response.status})`);
      }
      
    } catch (error) {
      results.errors.push({ url, error: error.message });
      console.log(`  ✗ Error: ${error.message}`);
    }
    
    // 1.5s delay between requests
    if (i < urlList.length - 1) {
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  return results;
}

// Generate markdown report
function generateMarkdownReport(results) {
  const now = new Date().toISOString();
  let md = `# Castlecore Wikipedia Image Audit - Phase 2 Final\n\n`;
  md += `Generated: ${now}\n\n`;
  
  md += `## Summary\n\n`;
  md += `- **Total URLs**: ${results.total}\n`;
  md += `- **Working**: ${results.working.length} (${(results.working.length / results.total * 100).toFixed(1)}%)\n`;
  md += `- **Broken**: ${results.broken.length} (${(results.broken.length / results.total * 100).toFixed(1)}%)\n`;
  md += `- **Rate Limited**: ${results.rateLimited.length}\n`;
  md += `- **Other Errors**: ${results.errors.length}\n`;
  md += `- **Attributions Found**: ${results.attributions.length}\n\n`;
  
  if (results.broken.length > 0) {
    md += `## Broken URLs (${results.broken.length})\n\n`;
    results.broken.forEach(item => {
      md += `- [${item.status}] ${item.url}\n`;
    });
    md += `\n`;
  }
  
  if (results.rateLimited.length > 0) {
    md += `## Rate Limited URLs (${results.rateLimited.length})\n\n`;
    results.rateLimited.forEach(item => {
      md += `- [${item.status}] ${item.url}\n`;
    });
    md += `\n`;
  }
  
  if (results.errors.length > 0) {
    md += `## Error URLs (${results.errors.length})\n\n`;
    results.errors.forEach(item => {
      md += `- [${item.status || 'ERROR'}] ${item.url}\n`;
      if (item.error) md += `  - Error: ${item.error}\n`;
    });
    md += `\n`;
  }
  
  md += `## Working URLs with Attribution (${results.attributions.length})\n\n`;
  results.attributions.forEach(attr => {
    md += `### ${attr.filename}\n`;
    md += `- **URL**: ${attr.originalUrl}\n`;
    md += `- **Photographer**: ${attr.photographer}\n`;
    md += `- **License**: ${attr.license}\n`;
    md += `- **Commons**: [${attr.filename}](${attr.commonsUrl})\n`;
    if (attr.description) {
      md += `- **Description**: ${attr.description.replace(/<[^>]*>/g, '').substring(0, 200)}\n`;
    }
    md += `\n`;
  });
  
  // License breakdown
  const licenseCount = {};
  results.attributions.forEach(attr => {
    const license = attr.license;
    licenseCount[license] = (licenseCount[license] || 0) + 1;
  });
  
  md += `## License Breakdown\n\n`;
  Object.entries(licenseCount)
    .sort((a, b) => b[1] - a[1])
    .forEach(([license, count]) => {
      md += `- **${license}**: ${count} images\n`;
    });
  
  return md;
}

// Main execution
async function main() {
  console.log('='.repeat(50));
  console.log('CASTLECORE WIKIPEDIA IMAGE AUDIT - PHASE 2 FINAL');
  console.log('='.repeat(50));
  
  // Create audit directory if needed
  if (!fs.existsSync('audit')) {
    fs.mkdirSync('audit');
    console.log('Created audit/ directory');
  }
  
  const results = await processUrls();
  
  console.log('\n' + '='.repeat(50));
  console.log('GENERATING REPORTS...');
  console.log('='.repeat(50));
  
  // Generate markdown report
  const markdownReport = generateMarkdownReport(results);
  fs.writeFileSync('audit/phase2-images-v2.md', markdownReport);
  console.log('✓ Written: audit/phase2-images-v2.md');
  
  // Generate JSON report
  fs.writeFileSync('audit/phase2-attribution-v2.json', JSON.stringify(results.attributions, null, 2));
  console.log('✓ Written: audit/phase2-attribution-v2.json');
  
  console.log('\n' + '='.repeat(50));
  console.log('FINAL SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total URLs processed: ${results.total}`);
  console.log(`Working URLs: ${results.working.length} (${(results.working.length / results.total * 100).toFixed(1)}%)`);
  console.log(`Broken URLs: ${results.broken.length} (${(results.broken.length / results.total * 100).toFixed(1)}%)`);
  console.log(`Attributions collected: ${results.attributions.length}`);
  console.log('='.repeat(50));
}

main().catch(console.error);