const url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://castlecore.uk/scotland/highlands&strategy=desktop&category=performance';

fetch(url).then(r => r.json()).then(d => {
  if (d.error) { console.log('API Error:', d.error.message); return; }
  
  const a = d.lighthouseResult.audits;
  const cats = d.lighthouseResult.categories;
  
  console.log('PERFORMANCE SCORE:', Math.round(cats.performance.score * 100));
  
  console.log('\n=== CORE WEB VITALS ===');
  ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index', 'interactive'].forEach(k => {
    if (a[k]) console.log(`${a[k].title}: ${a[k].displayValue} (score: ${a[k].score})`);
  });
  
  console.log('\n=== OPPORTUNITIES (things to fix) ===');
  Object.values(a)
    .filter(x => x.details?.type === 'opportunity' && x.score !== null && x.score < 0.9)
    .sort((a, b) => (a.score || 0) - (b.score || 0))
    .forEach(x => console.log(`${x.title}: ${x.displayValue || ''} (score: ${x.score})`));
  
  console.log('\n=== DIAGNOSTICS (warnings) ===');
  Object.values(a)
    .filter(x => x.details?.type === 'table' && x.score !== null && x.score < 0.9 && !x.details?.overallSavingsMs)
    .sort((a, b) => (a.score || 0) - (b.score || 0))
    .slice(0, 10)
    .forEach(x => console.log(`${x.title}: ${x.displayValue || ''} (score: ${x.score})`));

  console.log('\n=== PASSED AUDITS ===');
  Object.values(a)
    .filter(x => x.score === 1 && ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].includes(x.id))
    .forEach(x => console.log(`✅ ${x.title}: ${x.displayValue}`));

}).catch(e => console.error('Fetch error:', e));
