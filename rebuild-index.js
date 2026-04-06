#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const countriesDir = '/Users/markovisic/Desktop/travelpowerplugs/src/data/countries';
const indexPath = path.join(countriesDir, 'index.ts');

// Get all TypeScript files except index.ts
const files = fs.readdirSync(countriesDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .sort();

console.log(`Building index for ${files.length} country files...`);

// Generate imports
const imports = files.map(file => {
  const countryName = path.basename(file, '.ts').replace(/-/g, '_');
  const fileName = path.basename(file, '.ts');
  return `import ${countryName} from './${fileName}';`;
}).join('\n');

// Generate the countries map
const mapEntries = files.map(file => {
  const countryName = path.basename(file, '.ts').replace(/-/g, '_');
  return `  ['${countryName}', ${countryName}],`;
}).join('\n');

const content = `${imports}

export const ENHANCED_COUNTRIES = new Map([
${mapEntries}
]);

export function getCountryDataBySlug(slug: string) {
  // Convert slug to expected key format (replace - with _)
  const key = slug.replace(/-/g, '_');
  return ENHANCED_COUNTRIES.get(key);
}

export function getCountryDataByName(name: string) {
  // Try to find by name match
  for (const [key, country] of ENHANCED_COUNTRIES.entries()) {
    if (country.name === name) {
      return country;
    }
  }
  return undefined;
}
`;

fs.writeFileSync(indexPath, content, 'utf8');
console.log(`✓ Generated index.ts with ${files.length} countries`);