// This script runs the source finding process using OpenClaw's web search
const { setWebSearchFunction, main } = require('./main');

// Create a wrapper for the web search function that will be available in OpenClaw
async function webSearchWrapper(query) {
  // This is a placeholder - the actual web search will be injected
  // when this script is run from the OpenClaw environment
  throw new Error('Web search function must be provided by OpenClaw environment');
}

async function runSearch() {
  try {
    console.log('🔧 Setting up search environment...');
    
    // The web search function will be injected by OpenClaw
    setWebSearchFunction(webSearchWrapper);
    
    console.log('🚀 Starting source search process...');
    const results = await main();
    
    console.log('\n✅ Search process completed successfully!');
    return results;
  } catch (error) {
    console.error('❌ Error during search process:', error);
    throw error;
  }
}

module.exports = { runSearch, setWebSearchFunction };

// Export for OpenClaw to use
global.runCastlecoreSearch = runSearch;
global.setCastlecoreWebSearch = setWebSearchFunction;