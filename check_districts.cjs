const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');
const districtsMatch = content.match(/export const districts = \[([\s\S]*?)\];/);

if (districtsMatch) {
  const districtsText = districtsMatch[1];
  const districts = districtsText.split(',').map(d => d.trim().replace(/"/g, ''));
  const duplicates = districts.filter((item, index) => districts.indexOf(item) !== index);
  console.log('Duplicate Districts:', duplicates);
} else {
  console.log('Could not find districts array.');
}
