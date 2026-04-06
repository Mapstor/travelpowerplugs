#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of all 193 existing slugs from WordPress
const EXISTING_SLUGS = [
  'afghanistan-power-plug-type-electric-socket-type-and-adapter',
  'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam',
  'albania-electric-plug-types',
  'algeria-electric-plug-types',
  'andorra-electric-plug-types',
  'angola-electric-plug-types',
  'anguilla-electric-plug-types',
  'antigua-and-barbuda-electric-plug-types',
  'argentina-electric-plug-types',
  'armenia-electric-plug-types',
  'aruba-electric-plug-types',
  'australia-electric-plug-types-do-you-need-adapter',
  'austria-electric-plug-types',
  'azerbaijan-electric-plug-types',
  'bahamas-electric-plug-types',
  'bahrain-electric-plug-types',
  'bangladesh-electric-plug-types',
  'barbados-electric-plug-types',
  'belarus-electric-plug-types',
  'belgium-electric-plug-types',
  'belize-electric-plug-types',
  'benin-electric-plug-types',
  'bermuda-electric-plug-types',
  'bhutan-electric-plug-types',
  'bolivia-electric-plug-types',
  'bonaire-sint-eustatius-and-saba-electric-plug-types',
  'bosnia-and-herzegovina-electric-plug-types-type-c-and-f-adapter',
  'botswana-electric-plug-types',
  'brazil-electric-plug-types-type-n-plugs',
  'virgin-islands-british-electric-plug-types',
  'brunei-darussalam-electric-plug-types',
  'bulgaria-electric-plug-types',
  'burkina-faso-electric-plug-types',
  'burundi-electric-plug-types',
  'cambodia-electric-plug-types',
  'cameroon-electric-plug-types',
  'canada-electric-plug-types-same-as-usa',
  'cape-verde-electric-plug-types',
  'cayman-islands-electric-plug-types',
  'central-african-republic-electric-plug-types',
  'chad-electric-plug-types',
  'chile-electric-plug-types',
  '3-electric-plug-types-in-china-will-you-need-an-adapter',
  'colombia-electric-plug-types',
  'comoros-electric-plug-types',
  'congo-democratic-republic-electric-plug-types',
  'costa-rica-electric-plug-types',
  'ivory-coast-electric-plug-types',
  'croatia-electric-plug-types',
  'cuba-electric-plug-types',
  'curacao-electric-plug-types',
  'cyprus-electric-plug-types',
  'czech-republic-electric-plug-types',
  'denmark-electric-plug-types',
  'djibouti-electric-plug-types',
  'dominica-electric-plug-types',
  'dominican-republic-electric-plug-types',
  'ecuador-electric-plug-types-will-you-need-an-adapter-probably-not',
  'egypt-electric-plug-types',
  'el-salvador-electric-plug-types',
  'equatorial-guinea-electric-plug-types',
  'eritrea-electric-plug-types',
  'estonia-electric-plug-types',
  'ethiopia-electric-plug-types',
  'falkland-islands-electric-plug-types',
  'fiji-electric-plug-types-have-electrical-outlet-changed',
  'finland-electric-plug-types',
  'france-electric-plug-type-will-you-need-an-adapter-in-paris',
  'french-guiana-electric-plug-types',
  'french-polynesia-electric-plug-types-tahiti-and-bora-bora',
  'gabon-electric-plug-types',
  'gambia-electric-plug-types',
  'georgia-electric-plug-types',
  'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
  'ghana-electric-plug-types',
  'gibraltar-electric-plug-types',
  'greece-electric-plug-types',
  'greenland-electric-plug-types',
  'grenada-electric-plug-types',
  'guadeloupe-electric-plug-types',
  'guatemala-electric-plug-types',
  'guinea-electric-plug-types',
  'guinea-bissau-electric-plug-types',
  'guyana-electric-plug-types',
  'haiti-electric-plug-types',
  'honduras-electric-plug-types',
  'hong-kong-electric-plug-types-they-use-type-g-british-plugs',
  'hungary-electric-plug-types',
  'iceland-electric-plug-types-travel-adapter-for-iceland',
  'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india',
  'indonesia-electric-plug-types-electrical-outlets-in-bali-and-jakarta',
  'iran-electric-plug-types',
  'iraq-electric-plug-types',
  'ireland-electric-plug-types-travel-adapter-needed-for-dublin-and-cork',
  'israel-electric-plug-types-adapters-for-jerusalem-and-tel-aviv',
  'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
  'jamaica-electric-plug-types',
  'japan-electric-plug-types-will-you-need-an-adapter-probably-yes',
  'jordan-electric-plug-types',
  'kazakhstan-electric-plug-types',
  'kenya-electric-plug-types',
  'kiribati-electric-plug-types',
  'kosovo-electric-plug-types',
  'kuwait-electric-plug-types',
  'kyrgyzstan-electric-plug-types',
  'laos-electric-plug-types',
  'latvia-electric-plug-types',
  'lebanon-electric-plug-types',
  'lesotho-electric-plug-types',
  'liberia-electric-plug-types',
  'libya-electric-plug-types',
  'liechtenstein-electric-plug-types',
  'lithuania-electric-plug-types',
  'luxembourg-electric-plug-types',
  'macau-electric-plug-types',
  'north-macedonia-electric-plug-types',
  'madagascar-electric-plug-types',
  'malawi-electric-plug-types',
  'malaysia-electric-plug-types-type-g-travel-adapters',
  'maldives-electric-plug-types',
  'mali-electric-plug-types',
  'malta-electric-plug-types',
  'martinique-electric-plug-types',
  'mauritania-electric-plug-types',
  'mauritius-electric-plug-types',
  'mayotte-electric-plug-types',
  'mexico-electric-plug-types-will-you-need-an-adapter-for-mexico',
  'micronesia-electric-plug-types',
  'moldova-electric-plug-types',
  'monaco-electric-plug-types',
  'mongolia-electric-plug-types',
  'montenegro-electric-plug-types',
  'montserrat-electric-plug-types',
  'morocco-electric-plug-types',
  'mozambique-electric-plug-types',
  'myanmar-burma-electric-plug-types',
  'namibia-electric-plug-types',
  'nauru-electric-plug-types',
  'nepal-electric-plug-types',
  'netherlands-electric-plug-types',
  'new-caledonia-electric-plug-types',
  'new-zealand-electric-plug-types',
  'nicaragua-electric-plug-types',
  'niger-electric-plug-types',
  'nigeria-electric-plug-types',
  'north-korea-electric-plug-types',
  'norway-electric-plug-types',
  'oman-electric-plug-types',
  'pakistan-electric-plug-types',
  'palau-electric-plug-types',
  'palestine-electric-plug-types',
  'panama-electric-plug-types',
  'papua-new-guinea-electric-plug-types',
  'paraguay-electric-plug-types',
  'peru-electric-plug-types-electrical-outlet-and-adapters',
  'philippines-electric-plug-types',
  'poland-electric-plug-types',
  'portugal-electric-plug-types-travel-adapter-for-portugal',
  'qatar-electric-plug-types',
  'reunion-electric-plug-types',
  'romania-electric-plug-types',
  'russia-electric-plug-types-outlets-in-moscow-and-st-petersburg',
  'rwanda-electric-plug-types',
  'saint-helena-electric-plug-types',
  'saint-kitts-and-nevis-electric-plug-types',
  'saint-lucia-electric-plug-types',
  'saint-martin-electric-plug-types',
  'samoa-electric-plug-types',
  'sao-tome-and-principe-electric-plug-types',
  'saudi-arabia-electric-plug-types',
  'senegal-electric-plug-types',
  'serbia-electric-plug-types',
  'seychelles-electric-plug-types',
  'sierra-leone-electric-plug-types',
  'singapore-electric-plug-types-adapters-and-voltage',
  'slovakia-electric-plug-types',
  'slovenia-electric-plug-types',
  'solomon-islands-electric-plug-types',
  'somalia-electric-plug-types',
  'south-africa-electric-plug-types',
  'south-korea-electric-plug-types-adapters-for-seoul-and-busan',
  'south-sudan-electric-plug-types',
  'spain-electric-plug-types-will-you-need-an-adapter-for-spain',
  'sri-lanka-electric-plug-types',
  'sudan-electric-plug-types',
  'suriname-electric-plug-types',
  'swaziland-electric-plug-types',
  'sweden-electric-plug-types',
  'switzerland-electric-plug-types-electrical-outlets-in-zurich-geneva',
  'syria-electric-plug-types',
  'taiwan-electric-plug-types',
  'tajikistan-electric-plug-types',
  'tanzania-electric-plug-types',
  'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand',
  'timor-leste-electric-plug-types',
  'togo-electric-plug-types',
  'tonga-electric-plug-types',
  'trinidad-and-tobago-electric-plug-types',
  'tunisia-electric-plug-types',
  'turkey-electric-plug-types-outlets-in-istanbul-and-antalya',
  'turkmenistan-electric-plug-types',
  'tuvalu-electric-plug-types',
  'uganda-electric-plug-types',
  'ukraine-electric-plug-types',
  'united-arab-emirates-electric-plug-types-for-dubai-and-abu-dhabi',
  'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk',
  'united-states-electric-plug-types',
  'uruguay-electric-plug-types',
  'uzbekistan-electric-plug-types',
  'vanuatu-electric-plug-types',
  'venezuela-electric-plug-types',
  'yemen-electric-plug-types',
  'zambia-electric-plug-types',
  'zimbabwe-electric-plug-types',
];

// Read and parse the countries.ts file
function extractSlugsFromFile() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'countries.ts');
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract all slug values using regex
    // Looking for patterns like: slug: 'some-slug-value',
    const slugPattern = /slug:\s*['"]([^'"]+)['"]/g;
    const slugs = [];
    let match;
    
    while ((match = slugPattern.exec(fileContent)) !== null) {
      slugs.push(match[1]);
    }
    
    return slugs;
  } catch (error) {
    console.error('❌ Error reading countries.ts file:', error.message);
    process.exit(1);
  }
}

console.log('Extracting slugs from countries.ts file...\n');

const extractedSlugs = extractSlugsFromFile();
console.log(`📊 Found ${extractedSlugs.length} total slugs in countries.ts\n`);

// Create a Set for faster lookups
const extractedSlugSet = new Set(extractedSlugs);

console.log('Verifying all 193 existing WordPress slugs are present...\n');

let missingCount = 0;
let foundCount = 0;
const missingSlugs = [];

EXISTING_SLUGS.forEach((slug) => {
  if (extractedSlugSet.has(slug)) {
    foundCount++;
  } else {
    console.error(`❌ Missing slug: ${slug}`);
    missingSlugs.push(slug);
    missingCount++;
  }
});

// Also check for any duplicate slugs
const duplicates = extractedSlugs.filter((slug, index) => extractedSlugs.indexOf(slug) !== index);
if (duplicates.length > 0) {
  console.log('\n⚠️  Warning: Found duplicate slugs:');
  duplicates.forEach(dup => console.log(`  - ${dup}`));
}

// Find any extra slugs not in the WordPress list
const extraSlugs = extractedSlugs.filter(slug => !EXISTING_SLUGS.includes(slug));
if (extraSlugs.length > 0) {
  console.log('\n📝 Additional slugs not in WordPress list (new countries/territories):');
  extraSlugs.forEach(slug => console.log(`  + ${slug}`));
}

console.log('\n=== Verification Results ===');
console.log(`📊 Total slugs in countries.ts: ${extractedSlugs.length}`);
console.log(`✅ Found: ${foundCount}/193 existing WordPress slugs`);
console.log(`❌ Missing: ${missingCount} slugs`);
console.log(`➕ Extra/New: ${extraSlugs.length} slugs`);

if (missingCount === 0) {
  console.log('\n🎉 SUCCESS! All 193 existing WordPress slugs are properly configured.');
  process.exit(0);
} else {
  console.error('\n⚠️  WARNING! Some WordPress slugs are missing. This will break existing URLs.');
  console.error('\nMissing slugs that need to be added:');
  missingSlugs.forEach(slug => console.error(`  - ${slug}`));
  process.exit(1);
}