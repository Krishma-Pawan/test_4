const fs = require('fs');

const content = fs.readFileSync('src/data.ts', 'utf8');
const sitesMatch = content.match(/export const historicalSites: HistoricalSite\[\] = \[([\s\S]*?)\];/);

if (sitesMatch) {
  const sitesText = sitesMatch[1];
  const ids = [];
  const names = [];
  
  const idMatches = sitesText.matchAll(/id:\s*(\d+)/g);
  for (const match of idMatches) {
    ids.push(match[1]);
  }
  
  const nameMatches = sitesText.matchAll(/name:\s*"([^"]+)"/g);
  for (const match of nameMatches) {
    names.push(match[1]);
  }
  
  const duplicateIds = ids.filter((item, index) => ids.indexOf(item) !== index);
  const duplicateNames = names.filter((item, index) => names.indexOf(item) !== index);
  
  console.log('Duplicate IDs:', duplicateIds);
  console.log('Duplicate Names:', duplicateNames);
} else {
  console.log('Could not find historicalSites array.');
}
