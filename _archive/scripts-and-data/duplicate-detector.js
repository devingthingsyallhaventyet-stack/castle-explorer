const fs = require('fs');
const path = require('path');

// Load castle data
const dataPath = path.join(__dirname, 'data.js');
const s = fs.readFileSync(dataPath, 'utf8');
const fn = new Function(s + ';return CASTLES');
const castles = fn();

console.log(`Loaded ${castles.length} castles for duplicate detection...`);

// Levenshtein distance implementation
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Haversine distance calculation (returns km)
function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Normalize name for comparison
function normalizeName(name) {
    return name
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ') // Replace non-alphanumeric with spaces
        .replace(/\s+/g, ' ') // Collapse multiple spaces
        .trim();
}

// Extract name components and variants
function getNameVariants(name) {
    const normalized = normalizeName(name);
    const words = normalized.split(' ');
    
    const variants = [normalized];
    
    // Remove common suffixes/prefixes
    const suffixes = ['castle', 'house', 'tower', 'ruins', 'loch', 'fort', 'abbey', 'priory'];
    const filtered = words.filter(word => !suffixes.includes(word));
    if (filtered.length > 0 && filtered.length < words.length) {
        variants.push(filtered.join(' '));
    }
    
    // Reverse word order for multi-word names
    if (words.length > 1) {
        variants.push(words.reverse().join(' '));
    }
    
    return variants;
}

// Calculate name similarity score (0-1, higher = more similar)
function calculateNameSimilarity(name1, name2) {
    const variants1 = getNameVariants(name1);
    const variants2 = getNameVariants(name2);
    
    let maxSimilarity = 0;
    
    for (const v1 of variants1) {
        for (const v2 of variants2) {
            const distance = levenshteinDistance(v1, v2);
            const maxLength = Math.max(v1.length, v2.length);
            const similarity = maxLength > 0 ? 1 - (distance / maxLength) : 0;
            maxSimilarity = Math.max(maxSimilarity, similarity);
        }
    }
    
    return maxSimilarity;
}

// Detect duplicate pairs
function detectDuplicates() {
    const duplicates = [];
    const processed = new Set();
    
    console.log('Analyzing pairs for duplicates...');
    let pairsChecked = 0;
    const totalPairs = (castles.length * (castles.length - 1)) / 2;
    
    for (let i = 0; i < castles.length; i++) {
        for (let j = i + 1; j < castles.length; j++) {
            pairsChecked++;
            
            if (pairsChecked % 50000 === 0) {
                console.log(`Checked ${pairsChecked}/${totalPairs} pairs...`);
            }
            
            const castle1 = castles[i];
            const castle2 = castles[j];
            
            // Skip if already processed this pair
            const pairKey = `${Math.min(i, j)}-${Math.max(i, j)}`;
            if (processed.has(pairKey)) continue;
            processed.add(pairKey);
            
            // Calculate metrics
            const nameSimilarity = calculateNameSimilarity(castle1.name, castle2.name);
            const distance = haversineDistance(castle1.lat, castle1.lng, castle2.lat, castle2.lng);
            const sameImage = castle1.image === castle2.image;
            
            // Scoring logic
            let confidence = 0;
            let reasons = [];
            
            // High name similarity
            if (nameSimilarity >= 0.8) {
                confidence += 50;
                reasons.push(`High name similarity (${(nameSimilarity * 100).toFixed(1)}%)`);
            } else if (nameSimilarity >= 0.6) {
                confidence += 25;
                reasons.push(`Moderate name similarity (${(nameSimilarity * 100).toFixed(1)}%)`);
            }
            
            // Proximity bonus
            if (distance <= 0.1) { // Within 100m
                confidence += 40;
                reasons.push(`Very close proximity (${distance.toFixed(1)}km)`);
            } else if (distance <= 0.5) { // Within 500m
                confidence += 30;
                reasons.push(`Close proximity (${distance.toFixed(1)}km)`);
            } else if (distance <= 2) { // Within 2km
                confidence += 15;
                reasons.push(`Near proximity (${distance.toFixed(1)}km)`);
            }
            
            // Same image is very suspicious
            if (sameImage) {
                confidence += 45;
                reasons.push('Identical image URL');
            }
            
            // Combined name + proximity boost
            if (nameSimilarity >= 0.6 && distance <= 2) {
                confidence += 20;
                reasons.push('Name + proximity combination');
            }
            
            // Only flag if we have reasonable suspicion
            if (confidence >= 40) {
                let recommendation;
                if (confidence >= 80) {
                    recommendation = 'MERGE';
                } else if (confidence >= 60) {
                    recommendation = 'INVESTIGATE';
                } else {
                    recommendation = 'KEEP-BOTH';
                }
                
                duplicates.push({
                    castle1,
                    castle2,
                    nameSimilarity,
                    distance,
                    sameImage,
                    confidence,
                    reasons,
                    recommendation
                });
            }
        }
    }
    
    console.log(`Analysis complete. Found ${duplicates.length} potential duplicate pairs.`);
    return duplicates.sort((a, b) => b.confidence - a.confidence);
}

// Generate markdown report
function generateReport(duplicates) {
    const reportPath = path.join(__dirname, 'audit', 'phase1-duplicates.md');
    
    let report = `# Castlecore Duplicate Detection Report - Phase 1

**Generated:** ${new Date().toISOString()}
**Total castles analyzed:** ${castles.length}
**Potential duplicate pairs found:** ${duplicates.length}

## Summary

This report identifies potential duplicate castle entries based on:
1. **Name similarity** - Fuzzy matching with Levenshtein distance
2. **Geographic proximity** - Haversine distance calculation  
3. **Image matching** - Identical image URLs
4. **Combined signals** - Confidence scoring

## Findings

`;

    duplicates.forEach((dup, index) => {
        const { castle1, castle2, nameSimilarity, distance, sameImage, confidence, reasons, recommendation } = dup;
        
        report += `### ${index + 1}. ${recommendation} (Confidence: ${confidence}%)

**Castle A:** ${castle1.name}
- Location: ${castle1.lat}, ${castle1.lng}
- Country/County: ${castle1.country}${castle1.county ? `, ${castle1.county}` : ''}
- Type: ${castle1.type || 'N/A'}
- Image: ${castle1.image}

**Castle B:** ${castle2.name}  
- Location: ${castle2.lat}, ${castle2.lng}
- Country/County: ${castle2.country}${castle2.county ? `, ${castle2.county}` : ''}
- Type: ${castle2.type || 'N/A'}
- Image: ${castle2.image}

**Metrics:**
- Name similarity: ${(nameSimilarity * 100).toFixed(1)}%
- Distance: ${distance.toFixed(3)}km
- Same image: ${sameImage ? 'Yes' : 'No'}

**Reasons:** ${reasons.join(', ')}

**Recommendation:** **${recommendation}**

---

`;
    });
    
    report += `## Methodology

### Name Matching
- Normalized names (lowercase, removed punctuation)
- Generated variants (removed suffixes like "Castle", "Tower", etc.)
- Tested word order reversals
- Used Levenshtein distance for fuzzy matching

### Proximity Detection  
- Haversine formula for great-circle distance
- Flagged pairs within 2km as suspicious
- Weighted closer pairs higher

### Confidence Scoring
- Name similarity ≥80%: +50 points
- Name similarity ≥60%: +25 points  
- Distance ≤100m: +40 points
- Distance ≤500m: +30 points
- Distance ≤2km: +15 points
- Identical image: +45 points
- Name + proximity combo: +20 points

### Recommendations
- **MERGE (≥80%):** Very likely duplicates - combine entries
- **INVESTIGATE (60-79%):** Suspicious - manual review needed  
- **KEEP-BOTH (<60%):** Possibly legitimate separate entries

`;

    fs.writeFileSync(reportPath, report, 'utf8');
    console.log(`Report written to: ${reportPath}`);
    
    return reportPath;
}

// Main execution
try {
    const duplicates = detectDuplicates();
    const reportPath = generateReport(duplicates);
    
    console.log(`\n=== DUPLICATE DETECTION COMPLETE ===`);
    console.log(`Total potential duplicates: ${duplicates.length}`);
    console.log(`Report saved to: ${reportPath}`);
    
    // Summary by recommendation
    const summary = duplicates.reduce((acc, dup) => {
        acc[dup.recommendation] = (acc[dup.recommendation] || 0) + 1;
        return acc;
    }, {});
    
    console.log('\nBreakdown by recommendation:');
    Object.entries(summary).forEach(([rec, count]) => {
        console.log(`- ${rec}: ${count} pairs`);
    });
    
} catch (error) {
    console.error('Error during duplicate detection:', error);
    process.exit(1);
}