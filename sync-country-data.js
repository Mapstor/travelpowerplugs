const fs = require('fs');

// Load the updated countries-plugs.json with WordPress URLs
const countriesPlugs = JSON.parse(fs.readFileSync('./src/data/countries-plugs.json', 'utf8'));

// Read the current countries.ts file
const countriesTsContent = fs.readFileSync('./src/data/countries.ts', 'utf8');

// Build a new COUNTRIES array from countries-plugs.json
const countriesArray = Object.entries(countriesPlugs)
  .filter(([iso2, data]) => {
    // Only include countries that have valid data
    return data && data.name && data.slug;
  })
  .map(([iso2, data]) => {
    return `  {
    slug: '${data.slug}',
    name: '${data.name.replace(/'/g, "\\'")}',
    iso2: '${iso2.toUpperCase()}',
    continent: '${data.continent || 'africa'}',
    voltage: ${data.voltage || 230},
    frequency: ${data.frequency || 50},
    plugTypes: [${(data.plugTypes || []).map(p => `'${p.type}'`).join(', ')}],
    neighbors: [${(data.neighbors || []).map(n => `'${n}'`).join(', ')}]
  }`;
  });

// Create the new countries.ts content
const newCountriesTsContent = `export interface Country {
  slug: string;
  name: string;
  iso2: string;
  continent: string;
  voltage: number;
  frequency: number;
  plugTypes: string[];
  neighbors: string[];
}

export const COUNTRIES: Country[] = [
${countriesArray.join(',\n')}
];

export const continents = {
  europe: 'Europe',
  asia: 'Asia',
  africa: 'Africa',
  'north-america': 'North America',
  'south-america': 'South America',
  oceania: 'Oceania',
  'middle-east': 'Middle East'
};
`;

// Save the updated countries.ts
fs.writeFileSync('./src/data/countries.ts', newCountriesTsContent);

console.log('✅ Synced countries.ts with WordPress URLs from countries-plugs.json');
console.log(`Total countries: ${countriesArray.length}`);