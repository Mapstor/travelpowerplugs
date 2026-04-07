const fs = require('fs');
const path = require('path');

// WordPress URLs from the sitemap you provided
const wordpressUrls = [
  // Main pages
  '/',
  '/terms-of-use/',
  '/contact-us/',
  '/privacy-policy/',
  '/about-me/',
  
  // Continents
  '/europe/',
  '/north-america/',
  '/south-america/',
  '/asia/',
  '/africa/',
  '/oceania/',
  
  // Country pages (full list from your sitemap)
  '/algeria-electrical-plug-type/',
  '/afghanistan-electric-plug-types/',
  '/albanian-plug-types/',
  '/andorra-plug-types-electric-sockets-used-in-andorra-adapter/',
  '/angola-electric-plug-types-adapter/',
  '/antigua-and-barbuda-electric-plug-types-adapter/',
  '/argentina-electric-plug-types-do-you-need-an-adapter/',
  '/armenia-electric-socket-types-do-you-need-to-pack-an-adapter/',
  '/australia-electric-plug-types-do-you-need-adapter/',
  '/austria-electric-power-plug-types-do-you-need-an-adapter/',
  '/azerbaijan-electric-socket-types-will-you-need-an-adapter/',
  '/bahamas-electric-socket-types-will-you-need-an-adapter/',
  '/bahrain-electric-plug-types-will-you-need-an-adapter/',
  '/bangladesh-electric-plug-types-do-you-need-an-adapter/',
  '/barbados-electric-plug-types-do-you-need-an-adapter/',
  '/belarus-electric-plug-types-will-you-need-an-adapter/',
  '/belgium-electric-plug-types-do-you-need-an-adapter/',
  '/belize-electric-plug-types-do-you-need-an-adapter/',
  '/benin-electric-plug-types-do-you-need-an-adapter/',
  '/bhutan-electric-plug-types-do-you-need-an-adapter-in-bhutan/',
  '/bolivia-electric-plug-types-do-you-need-an-adapter/',
  '/bosnia-and-herzegovina-electric-plug-types-is-adapter-needed/',
  '/botswana-electric-plug-types-do-you-need-an-adapter/',
  '/brazil-electric-plug-types-do-you-need-an-adapter/',
  '/brunei-electric-plug-types-do-you-need-an-adapter/',
  '/bulgaria-electric-plug-types-do-you-need-an-adapter/',
  '/burkina-faso-electric-plug-type-will-you-need-an-adapter/',
  '/burundi-electric-plug-types-do-you-need-an-adapter/',
  '/cabo-verde-electric-plug-types-do-you-need-an-adapter/',
  '/cambodia-electric-plug-types-will-you-need-an-adapter/',
  '/cameroon-electric-plug-types-do-you-need-to-pack-an-adapter/',
  '/canada-electric-plug-types-do-you-need-an-adapter/',
  '/central-african-republic-electric-plug-types-need-an-adapter/',
  '/chad-electric-plug-types-do-you-need-to-pack-an-adapter/',
  '/chile-electric-plug-types-do-you-need-an-adapter-while-traveling/',
  '/3-electric-plug-types-in-china-will-you-need-an-adapter/',
  '/colombia-electric-plug-types-do-you-need-an-adapter/',
  '/comoros-electric-plug-type-do-you-need-an-adapter/',
  '/congo-electric-plug-type-do-you-need-an-adapter/',
  '/costa-rica-electric-plug-types-do-you-need-an-adapter/',
  '/cote-divoire-electric-plug-type-do-you-need-an-adapter/',
  '/croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip/',
  '/cuba-electric-plug-type-do-you-need-an-adapter-for-trip/',
  '/cyprus-electric-plug-types-will-you-need-an-adapter/',
  '/czech-republic-electric-plug-type-will-you-need-an-adapter/',
  '/denmark-electric-plug-type-will-you-need-an-adapter-2/',
  '/djibouti-electric-plug-types-do-you-need-to-take-an-adapter/',
  '/dominica-electric-plug-types-will-you-need-an-adapter-with-you/',
  '/dominican-republic-electric-plug-types-do-you-need-an-adapter/',
  '/east-timor-electric-plug-types-do-you-need-an-adapter/',
  '/ecuador-electric-plug-type-will-you-need-an-adapter/',
  '/egypt-electric-plug-type-will-you-need-an-adapter-in-egypt/',
  '/el-salvador-electric-plug-type-will-you-need-an-adapter/',
  '/equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you/',
  '/eritrea-electric-plug-types-will-you-need-an-adapter-in-eritrea/',
  '/estonia-electric-plug-types-will-you-need-an-adapter-in-estonia/',
  '/eswatini-electric-plug-types-will-you-need-an-adapter-in-mbabane/',
  '/ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba/',
  '/fiji-electric-plug-types-will-you-need-an-adapter-in-suva/',
  '/finland-electric-plug-type-will-you-need-an-adapter-in-helsinki/',
  '/france-electric-plug-type-will-you-need-an-adapter-in-paris/',
  '/gabon-electric-plug-types-will-you-need-an-adapter-libreville/',
  '/gambia-electric-plug-types-will-you-need-an-adapter-in-banjul/',
  '/georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi/',
  '/germany-electric-plug-types-will-you-need-an-adapter-in-germany/',
  '/ghana-electric-plug-types-will-you-need-an-adapter-in-accra/',
  '/greece-electric-plug-types-will-you-need-an-adapter-in-greece/',
  '/grenada-electric-plug-types-will-you-need-an-adapter-in-grenada/',
  '/guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city/',
  '/guinea-electric-plug-types-will-you-need-an-adapter-in-conakry/',
  '/guinea-bissau-electric-plug-type-will-you-need-an-adapter-in-bissau/',
  '/guyana-electric-plug-types-will-you-need-an-adapter-in-georgetown/',
  '/haiti-electric-plug-types-do-you-need-an-adapter-for-haiti/',
  '/honduras-electric-plug-types-do-you-need-an-adapter-in-honduras/',
  '/hungary-electric-plug-types-will-you-need-an-adapter-in-budapest/',
  '/iceland-electric-plug-types-will-you-need-an-adapter-in-reykjavik/',
  '/india-electric-plug-types-will-you-need-an-adapter-traveling-to-india/',
  '/indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia/',
  '/iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran/',
  '/iraq-electric-plug-types-will-you-need-an-adapter-traveling-to-iraq/',
  '/ireland-electric-plug-types-will-you-need-an-adapter-for-ireland/',
  '/israel-electric-plug-type-will-you-need-an-adapter-for-israel/',
  '/italy-electric-plug-types-which-outlets-they-use-in-italy-adapters/',
  '/jamaica-electric-plug-types-will-you-need-an-adapter-for-charging/',
  '/japan-electric-plug-types-will-you-need-an-adapter-probably-yes/',
  '/jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan/',
  '/kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes/',
  '/kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya/',
  '/kiribati-electric-plug-types-will-you-need-an-adapter-for-kiribati/',
  '/north-korea-electric-plug-types-will-you-need-an-adapter-yup/',
  '/south-korea-electric-plug-types-will-you-need-an-adapter-in-seoul/',
  '/kosovo-electric-plug-types-will-you-need-an-adapter-in-pristina/',
  '/kuwait-electric-plug-types-will-you-need-an-adapter-in-kuwait-city/',
  '/kyrgyzstan-electric-plug-type-will-you-need-an-adapter/',
  '/laos-electric-plug-types-which-adapter-will-you-need-in-laos/',
  '/latvia-electric-plug-type-will-you-need-an-adapter-in-riga/',
  '/lebanon-electric-plug-types-will-you-need-an-adapter-in-beirut/',
  '/lesotho-electric-plug-types-which-adapter-do-you-need-for-lesotho/',
  '/liberia-electric-plug-types-will-you-need-an-adapter-in-liberia/',
  '/libya-electric-plug-types-will-you-need-an-adapter-in-libya/',
  '/liechtenstein-electric-plug-types-will-you-need-an-adapter/',
  '/lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2/',
  '/luxembourg-electric-plug-types-will-you-need-an-adapter-in-luxembourg/',
  '/madagascar-electric-plug-types-will-you-need-an-adapter/',
  '/malawi-electric-plug-types-which-adapter-will-you-need-in-malawi/',
  '/malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur/',
  '/maldives-electric-plug-types-will-you-need-an-adapter-for-maldives/',
  '/mali-electric-plug-types-which-adapter-will-you-need-in-mali/',
  '/malta-electric-plug-types-will-you-need-an-adapter-for-valletta/',
  '/marshall-islands-electric-plug-types-will-you-need-an-adapter/',
  '/mauritania-electric-plug-types-will-you-need-an-adapter/',
  '/mauritius-electric-plug-types-will-you-need-an-adapter/',
  '/mexico-electric-plug-types-will-you-need-an-adapter-in-mexico/',
  '/micronesia-electric-plug-types-will-you-need-an-adapter-on-the-islands/',
  '/moldova-electric-plug-types-will-you-need-an-adapter-for-moldova/',
  '/monaco-electric-plug-types-will-you-need-an-adapter-in-monaco/',
  '/mongolia-electric-plug-types-will-you-need-an-adapter-in-the-steppe/',
  '/montenegro-electric-plug-types-will-you-need-an-adapter/',
  '/morocco-electric-plug-types-will-you-need-an-adapter-in-morocco/',
  '/mozambique-electric-plug-types-will-you-need-an-adapter/',
  '/myanmar-electric-plug-types-will-you-need-an-adapter-for-myanmar/',
  '/namibia-electric-plug-types-which-adapter-will-you-need/',
  '/nauru-electric-plug-types-which-adapter-will-you-need-in-nauru/',
  '/nepal-electric-plug-types-will-you-need-an-adapter-in-nepal/',
  '/netherlands-electric-plug-types-will-you-need-an-adapter/',
  '/new-zealand-electric-plug-types-which-adapter-should-you-get/',
  '/nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua/',
  '/niger-electric-plug-types-will-you-need-an-adapter-for-niger/',
  '/nigeria-electric-plug-types-which-adapter-will-you-need/',
  '/north-macedonia-electric-plug-types-will-you-need-an-adapter/',
  '/norway-electric-plug-types-will-you-need-an-adapter-for-oslo/',
  '/oman-electric-plug-types-which-adapter-will-you-need/',
  '/pakistan-electric-plug-types-will-you-need-an-adapter/',
  '/palau-electric-plug-types-will-you-need-an-adapter-for-palau/',
  '/panama-electric-plug-types-will-you-need-an-adapter-for-panama/',
  '/papua-new-guinea-electric-plug-types-which-adapter-will-you-need/',
  '/paraguay-electric-plug-types-which-adapter-will-you-need/',
  '/peru-electric-plug-types-will-you-need-an-adapter-for-peru/',
  '/philippines-electric-plug-types-will-you-need-an-adapter-for-philippines/',
  '/poland-electric-plug-types-will-you-need-an-adapter-in-poland/',
  '/portugal-electric-plug-types-will-you-need-adapter-in-lisbon-porto/',
  '/qatar-electric-plug-types-which-adapter-will-you-need-in-qatar/',
  '/romania-electric-plug-types-will-you-need-an-adapter-in-romania/',
  '/russia-electric-plug-types-will-you-need-an-adapter-in-russia/',
  '/rwanda-electric-plug-types-will-you-need-to-bring-an-adapter-with-you/',
  '/saint-kitts-and-nevis-electric-plug-types-will-you-need-an-adapter/',
  '/saint-lucia-electric-plug-types-which-adapter-will-you-need/',
  '/saint-vincent-and-the-grenadines-electric-plug-types-adapter-a-must/',
  '/samoa-electric-plug-types-will-you-need-an-adapter-for-samoa/',
  '/san-marino-electric-plug-types-will-you-need-an-adapter/',
  '/sao-tome-and-principe-electric-plug-types-which-adapter-will-you-need/',
  '/saudi-arabia-electric-plug-types-which-adapter-will-you-need/',
  '/senegal-electric-plug-types-which-adapter-will-you-need-in-dakar/',
  '/serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade/',
  '/seychelles-electric-plug-types-which-adapter-will-you-need-with-you/',
  '/sierra-leone-electric-plug-types-which-adapter-will-you-need-with-you/',
  '/singapore-electric-plug-types-will-you-need-an-adapter-for-singapore/',
  '/singapur-electric-plug-types-will-you-need-an-adapter-for-singapur/',
  '/slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava/',
  '/slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia/',
  '/solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you/',
  '/somalia-electric-plug-types-which-adapter-will-you-need-in-somalia/',
  '/south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa/',
  '/spain-electric-plug-types-will-you-need-an-adapter-for-spain/',
  '/sri-lanka-electric-plug-types-will-you-need-an-adapter-in-sri-lanka/',
  '/sudan-electric-plug-types-which-adapter-will-you-need-in-sudan/',
  '/suriname-electric-plug-types-will-you-need-an-adapter-for-suriname/',
  '/sweden-electric-plug-types-will-you-need-an-adapter-for-sweden/',
  '/switzerland-electric-plug-types-will-you-need-an-adapter-with-you/',
  '/syria-electric-plug-types-which-adapter-will-you-need-in-syria/',
  '/taiwan-electric-plug-types-which-adaptor-you-need-for-taiwan/',
  '/tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan/',
  '/tanzania-electric-plug-types-which-adapter-will-you-need-in-tanzania/',
  '/thailand-electric-plug-type-will-you-need-an-adapter-for-thailand/',
  '/togo-electric-plug-types-which-adapter-will-you-need-for-togo/',
  '/tongo-electric-plug-types-which-adapter-will-you-need-for-tongo/',
  '/trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter/',
  '/tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia/',
  '/turkey-electric-plug-types-will-you-need-an-adapter-for-turkey/',
  '/turkmenistan-electric-plug-types-which-adapter-will-you-need/',
  '/tuvalu-electric-plug-types-which-adapter-will-you-need-for-tuvalu/',
  '/uganda-electric-plug-types-which-adapter-do-you-need-in-uganda/',
  '/ukraine-electric-plug-types-what-kind-of-adapter-do-you-need/',
  '/united-arab-emirates-electric-plug-types-which-adapter-for-uae/',
  '/united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk/',
  '/usa-electric-plug-types-will-you-need-an-adapter-traveling-to-the-us/',
  '/uruguay-electric-plug-types-which-adapter-will-you-need-in-uruguay/',
  '/uzbekistan-electric-plug-types-which-adapter-for-uzbekistan/',
  '/vanuatu-electric-plug-types-which-adapter-do-you-need-for-vanuatu/',
  '/vatican-city-electric-plug-types-do-you-need-an-adapter-for-vatican-city/',
  '/venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela/',
  '/vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam/',
  '/yemen-electric-plug-types-do-you-need-an-adapter-for-yemen/',
  '/zambia-electric-plug-types-which-adapter-do-you-need-in-zambia/',
  '/zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe/',
  
  // Comparison page
  '/type-a-vs-type-b-plug/'
].map(url => url.replace(/\/$/, ''));  // Remove trailing slashes for consistency

// Load our country data
const countriesData = require('./src/data/countries.ts');

// Load our vercel.json redirects
const vercelConfig = JSON.parse(fs.readFileSync('./vercel.json', 'utf8'));
const redirects = vercelConfig.redirects || [];

// Check each WordPress URL
const results = {
  exact_matches: [],
  has_redirect: [],
  missing: []
};

wordpressUrls.forEach(wpUrl => {
  // Check if we have a redirect for this URL
  const redirect = redirects.find(r => 
    r.source === wpUrl || r.source === wpUrl + '/'
  );
  
  if (redirect) {
    results.has_redirect.push({
      from: wpUrl,
      to: redirect.destination
    });
  } else {
    // Check if it's a direct match (for main pages)
    if (wpUrl === '' || wpUrl === '/') {
      results.exact_matches.push(wpUrl);
    } else if (
      wpUrl === '/about' || 
      wpUrl === '/contact' || 
      wpUrl === '/privacy' || 
      wpUrl === '/terms' ||
      wpUrl === '/type-a-vs-type-b-plug'
    ) {
      results.exact_matches.push(wpUrl);
    } else {
      // It's missing and needs a redirect
      results.missing.push(wpUrl);
    }
  }
});

console.log('URL MATCH REPORT');
console.log('================');
console.log(`Total WordPress URLs: ${wordpressUrls.length}`);
console.log(`Exact matches: ${results.exact_matches.length}`);
console.log(`Has redirect: ${results.has_redirect.length}`);
console.log(`Missing (needs redirect): ${results.missing.length}`);

if (results.missing.length > 0) {
  console.log('\n❌ MISSING URLs (need redirects):');
  results.missing.forEach(url => console.log(`  ${url}`));
}

console.log('\n✅ URLs with redirects:');
results.has_redirect.slice(0, 10).forEach(item => 
  console.log(`  ${item.from} → ${item.to}`)
);

if (results.has_redirect.length > 10) {
  console.log(`  ... and ${results.has_redirect.length - 10} more`);
}