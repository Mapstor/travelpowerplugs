import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES } from '@/data/countries';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import dynamic from 'next/dynamic';
import HTMLAnimatedPlug from '@/components/plugs/HTMLAnimatedPlug';
import { getCountryPlugData } from '@/lib/compatibility';

const ContinentMap = dynamic(() => import('@/components/map/ContinentMap'), {
  loading: () => (
    <div className="w-full h-96 bg-gray-50 flex items-center justify-center rounded-lg">
      <p className="text-gray-500">Loading interactive map...</p>
    </div>
  ),
});

const continents = {
  'europe': {
    name: 'Europe',
    title: 'European Countries Electric Plug Types & Power Adapters - Complete 2026 Guide',
    description: 'Complete guide to electrical outlets, plug types, voltage and frequency for all 44 European countries. Interactive map and adapter recommendations.',
    intro: `Planning a European adventure requires understanding the continent's unique electrical landscape, where centuries of innovation have created a fascinating patchwork of plug standards. From the universal Europlug (Type C) that works across most of continental Europe to the UK's distinctive three-pin Type G system, navigating Europe's power outlets can be surprisingly complex. While the European Union has harmonized many standards with most countries operating at 230V/50Hz, the plug types themselves remain diverse, with seven different standards in use across 44 countries. Understanding which adapter you'll need – and where you'll need it – is essential for keeping your devices charged as you explore everything from Nordic fjords to Mediterranean beaches.`,
    overview: 'Europe represents one of the most standardized electrical regions globally, thanks to EU harmonization efforts. The Europlug (Type C) works across most countries, while the German Schuko system (Type F) dominates central and eastern Europe. The notable exception is the UK and Ireland, which maintain their distinctive three-pin Type G system.',
    electricalHistory: 'European electrical standards evolved from early 20th-century national systems. Germany\'s Schuko connector, introduced in 1926, became the continental standard. The UK maintained its fused plug system for safety reasons. EU directives have since promoted compatibility while respecting national preferences.',
    bestAdapter: 'Universal Type C/E/F adapter covers 95% of continental Europe. Separate Type G adapter needed for UK/Ireland travel.',
    voltageWarning: 'All European countries use 220-240V except some older installations. North American devices need voltage converters.',
    seasonalConsiderations: 'Winter heating increases electricity demand and potential voltage fluctuations. Summer air conditioning usage varies significantly between northern and southern Europe.',
    transportationPower: {
      trains: 'European trains commonly have power outlets - Type C/F on continental railways, Type G on UK trains.',
      buses: 'Long-distance buses increasingly offer USB charging. Power outlets rare except on premium services.',
      airports: 'Major airports provide international power stations with multiple outlet types.',
      hotels: 'Business hotels typically provide adapter lending services. Youth hostels may have shared charging areas.'
    },
    culturalContext: 'European electrical usage reflects cultural patterns: Nordic countries have high per-capita consumption due to electric heating. Southern Europe sees peak usage during afternoon siesta cooling. Eastern Europe has modernized infrastructure post-1990s.',
    regions: {
      'Nordic': 'Sweden, Norway, Denmark, Finland, Iceland - excellent infrastructure, Type F standard, winter heating demand',
      'Western': 'UK, Ireland, France, Germany, Netherlands, Belgium - mixed Type G (UK) and C/F systems, reliable grids',
      'Central': 'Switzerland, Austria, Czech Republic, Poland, Hungary - Type C/F standard, mountain regions may have variations',
      'Southern': 'Spain, Italy, Portugal, Greece, Malta, Cyprus - Type C/F/L systems, summer cooling considerations',
      'Eastern': 'Russia, Ukraine, Belarus, Baltic states - Type C/F standard, infrastructure varies by region',
      'Balkans': 'Former Yugoslavia, Romania, Bulgaria, Albania - Type C/F standard, ongoing modernization'
    },
    faqs: [
      {
        question: 'Do I need different adapters for different European countries?',
        answer: 'Most of continental Europe uses Type C (Europlug) and Type F (Schuko) systems, so one universal adapter works for multiple countries. The UK and Ireland require a separate Type G adapter. Some countries like Italy also use Type L, but Type C plugs work there too.'
      },
      {
        question: 'Why does the UK use different plugs from the rest of Europe?',
        answer: 'The UK developed its Type G system independently, emphasizing safety with mandatory fuses in each plug and shuttered outlets. Brexit has reinforced the UK\'s commitment to maintaining its electrical standards separate from EU harmonization efforts.'
      },
      {
        question: 'Can I use my US electronics in Europe?',
        answer: 'US electronics need both plug adapters and often voltage conversion. Most modern chargers are dual-voltage (110-240V), but hair dryers, curling irons, and some appliances need voltage converters to avoid damage from Europe\'s 230V power.'
      },
      {
        question: 'Which European countries have the most reliable electricity?',
        answer: 'Nordic countries (Denmark, Sweden, Norway) and Germany have the most reliable grids with minimal outages. Southern European countries may experience summer brownouts during peak cooling demand. Eastern European infrastructure varies by country and region.'
      },
      {
        question: 'Do European hotels provide adapters?',
        answer: 'Business hotels commonly lend adapters to guests, especially in tourist areas. Budget accommodations and hostels may have shared charging stations. Always bring your own adapter as hotel supplies can be limited during peak season.'
      }
    ],
    didYouKnow: [
      'Germany\'s Schuko plug was designed in 1926 and remains one of the safest electrical connector systems globally',
      'The EU has standardized many electrical regulations, but plug types remain nationally determined',
      'Norway generates 98% of its electricity from hydroelectric power, the highest percentage globally',
      'The UK\'s electrical system runs on 230V despite maintaining different plugs from continental Europe',
      'Switzerland uses Type J plugs exclusively but Swiss sockets accept European Type C plugs',
      'Iceland\'s abundant geothermal and hydroelectric power makes it one of the cheapest electricity markets in Europe'
    ]
  },
  'asia': {
    name: 'Asia',
    title: 'Asian Countries Electric Plug Types & Power Adapters - Complete 2026 Guide',
    description: 'Comprehensive guide to electrical outlets across 48 Asian countries. From Japan\'s 100V to India\'s Type D plugs - interactive maps and travel planning.',
    intro: `Asia's electrical landscape is perhaps the most complex on Earth, where ancient trade routes now carry modern travelers through a bewildering array of plug types and voltage systems. From Japan's unique 100V system (the world's lowest) to the British colonial legacy of Type G plugs in Hong Kong and Singapore, every country tells its own electrical story shaped by history, politics, and industrial partnerships. The continent spans 13 different plug types across 48 countries, with voltage variations from 100V to 240V, making it essential for travelers to pack not just adapters but often voltage converters too. Whether you're exploring Tokyo's neon-lit streets, trekking through the Himalayas, or island-hopping in Southeast Asia, understanding Asia's electrical diversity is crucial for keeping your devices powered throughout your journey.`,
    overview: 'Asian electrical systems reflect complex historical influences: British colonial areas use Type G, Japanese-influenced regions use Type A/B, European colonial areas use Type C/F, while major powers like China and India developed unique mixed systems.',
    electricalHistory: 'Asian electrical development followed colonial patterns and post-war industrialization. Japan adopted 100V for safety, China mixed multiple systems during rapid development, India retained British 5A/15A distinctions, Southeast Asia shows diverse colonial influences.',
    bestAdapter: 'Universal adapter essential - no single adapter covers all Asian countries. Priority types: A/B (East Asia), C (widespread), G (former British colonies), D/M (India region).',
    voltageWarning: 'Extreme voltage diversity: Japan 100V, most others 220-240V. Always check device compatibility and consider voltage converters.',
    seasonalConsiderations: 'Monsoon seasons affect power reliability across South/Southeast Asia. Summer cooling demand causes brownouts in major cities. Winter heating minimal except in northern regions.',
    transportationPower: {
      trains: 'High-speed trains (Japan, China, South Korea) have power outlets. Indian trains increasingly add charging points. Southeast Asian trains vary widely.',
      buses: 'Modern buses in developed countries offer USB charging. Rural/budget transport typically lacks power options.',
      airports: 'Major airports provide international charging stations. Secondary airports may have limited outlet types.',
      hotels: 'International hotels provide universal adapters. Local hotels vary significantly by country and price level.'
    },
    culturalContext: 'Electrical usage patterns vary dramatically: East Asian countries have high consumption and excellent infrastructure. South Asia shows rapid electrification but variable reliability. Southeast Asia balances development with tropical cooling needs.',
    regions: {
      'East Asia': 'China, Japan, South Korea, Taiwan, Mongolia - mixed systems, excellent infrastructure in urban areas',
      'Southeast Asia': 'Thailand, Vietnam, Malaysia, Singapore, Indonesia, Philippines - diverse colonial influences, Type A/C/G mix',
      'South Asia': 'India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan - Type C/D/M systems, variable infrastructure',
      'Central Asia': 'Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan - Type C/F systems, Soviet legacy',
      'Western Asia': 'Turkey, Iran, Afghanistan, Georgia, Armenia, Azerbaijan - Type C/F standard, varying stability'
    },
    faqs: [
      {
        question: 'Why does Japan use 100V electricity?',
        answer: 'Japan adopted 100V in the early 1900s for safety reasons, influenced by American electrical advisors. The lower voltage reduces electrocution risk but requires different transformers and appliances. Japan also uniquely uses both 50Hz (eastern regions) and 60Hz (western regions).'
      },
      {
        question: 'Which Asian countries use British-style plugs?',
        answer: 'Former British colonies including Malaysia, Singapore, Hong Kong, India (alongside other types), Pakistan, Bangladesh, Sri Lanka, and Myanmar use Type G plugs. This reflects British colonial electrical infrastructure that remained after independence.'
      },
      {
        question: 'Is electricity reliable across Asia?',
        answer: 'Reliability varies dramatically: Japan, South Korea, Singapore have world-class grids. China\'s urban areas are excellent, rural areas variable. India faces regular brownouts and voltage fluctuations. Southeast Asia varies by country and season (monsoons affect infrastructure).'
      },
      {
        question: 'What\'s the best travel adapter strategy for multi-country Asian travel?',
        answer: 'Bring a high-quality universal adapter with multiple plug types plus a separate voltage converter for non-dual-voltage devices. Consider a power bank for areas with unreliable electricity. Research specific countries\' plug types before departure.'
      },
      {
        question: 'Do Asian hotels provide adapters?',
        answer: 'International chain hotels usually provide adapters, especially in business districts. Local hotels vary widely - urban areas more likely to have adapters than rural areas. Always bring your own as availability cannot be guaranteed.'
      }
    ],
    didYouKnow: [
      'China is the world\'s largest electricity producer and consumer, generating over 8,000 TWh annually',
      'Japan\'s electrical system is split: eastern Japan uses 50Hz, western Japan uses 60Hz - a legacy of different foreign consultants',
      'India has the world\'s third-largest electrical grid but still faces regular power outages in many regions',
      'Singapore has one of the world\'s most reliable electrical systems with 99.99% uptime',
      'South Korea generates significant electricity from nuclear power - about 30% of total production',
      'The Maldives imports all petroleum for electricity generation, making it one of the most expensive power systems globally'
    ]
  },
  'africa': {
    name: 'Africa',
    title: 'African Countries Electric Plug Types & Power Adapters - Complete 2026 Guide',
    description: 'Essential guide to electrical systems across 54 African countries. Colonial influences, infrastructure challenges, and the best adapters for African travel.',
    intro: `Africa's electrical map reads like a history book, with each plug type telling the story of colonial influence, post-independence partnerships, and modern development challenges. From the British Type G plugs still standard in Kenya and Nigeria to the French Type E systems across Francophone Africa, the continent's 54 countries use an astounding variety of electrical standards that can confound even experienced travelers. South Africa stands unique with its massive Type M plugs designed for high-current applications, while many rural areas across the continent rely on solar power and generators rather than grid electricity. Understanding Africa's electrical diversity isn't just about having the right adapter – it's about being prepared for everything from world-class infrastructure in Cape Town to off-grid adventures in the Serengeti.`,
    overview: 'African electrical systems directly reflect colonial histories: British areas use Type G, French regions use Type E, Portuguese areas use Type C/F, while South Africa developed its own Type M system. Infrastructure quality varies dramatically between countries and regions.',
    electricalHistory: 'Colonial powers installed their electrical standards across Africa. Post-independence, countries largely maintained inherited systems while expanding rural electrification. South Africa\'s apartheid-era development created unique standards. Recent Chinese investment brings new infrastructure approaches.',
    bestAdapter: 'Universal adapter essential - Africa uses more plug types than any other continent. Priority types: G (British areas), E (French areas), C/F (mixed), M (South Africa), D (some regions).',
    voltageWarning: '220-240V standard except some remote areas. Power quality varies significantly - surge protectors recommended for electronics.',
    seasonalConsiderations: 'Dry seasons stress hydroelectric systems. Wet seasons may cause outages from infrastructure damage. Desert regions face extreme temperature equipment stress.',
    transportationPower: {
      trains: 'Limited rail networks with few power outlets except South African premium services and some North African routes.',
      buses: 'Power outlets rare except premium international services. USB charging increasingly common on newer vehicles.',
      airports: 'Major airports have international charging stations. Smaller airports may have limited outlet types.',
      hotels: 'International hotels in major cities provide adapters. Rural accommodations typically lack adapter services.'
    },
    culturalContext: 'African electrical development priorities focus on expanding access over standardization. Rural electrification programs use various technical solutions. Urban areas show rapid smartphone adoption driving charging infrastructure demand.',
    regions: {
      'North Africa': 'Egypt, Libya, Tunisia, Algeria, Morocco, Sudan - Type C/F systems, Mediterranean development patterns',
      'West Africa': 'Nigeria, Ghana, Senegal, Mali, Burkina Faso - mixed British/French colonial systems, ongoing development',
      'East Africa': 'Kenya, Tanzania, Ethiopia, Uganda, Rwanda - British colonial legacy, Type G dominance, varying infrastructure',
      'Central Africa': 'Democratic Republic Congo, Cameroon, Central African Republic - French colonial systems, infrastructure challenges',
      'Southern Africa': 'South Africa, Botswana, Namibia, Zimbabwe, Zambia - Type M dominance, relatively advanced infrastructure'
    },
    faqs: [
      {
        question: 'Why does South Africa use different plugs from the rest of Africa?',
        answer: 'South Africa developed its Type M (15-amp) and Type D (5-amp) systems based on old British standards but optimized for local conditions. The large round pins handle higher currents safely in South African conditions, and the country maintained this system post-apartheid.'
      },
      {
        question: 'Is electricity reliable across Africa?',
        answer: 'Reliability varies dramatically: South Africa, Morocco, and Egypt have relatively stable grids. Many sub-Saharan countries face regular outages due to limited generation capacity, aging infrastructure, or political instability. Rural areas often lack grid connection entirely.'
      },
      {
        question: 'What should I know about power quality in Africa?',
        answer: 'Voltage fluctuations and power surges are common due to infrastructure limitations. Use surge protectors for valuable electronics. Power outages are frequent in many countries, so portable chargers and power banks are essential travel items.'
      },
      {
        question: 'Do I need different adapters for different African countries?',
        answer: 'Yes - Africa has the most diverse plug types globally. British colonial areas use Type G, French areas use Type E, Portuguese areas use Type C, South Africa uses Type M. A universal adapter is essential for multi-country African travel.'
      },
      {
        question: 'What about solar power and off-grid solutions in Africa?',
        answer: 'Africa leads globally in off-grid solar adoption. Many rural areas use solar charging systems with USB outlets or specialized connectors. Mobile phone charging is often available even in areas without grid electricity, using solar or generator power.'
      }
    ],
    didYouKnow: [
      'Africa has the lowest electricity access rate globally, with over 600 million people lacking grid connection',
      'South Africa generates about 40% of all electricity produced on the African continent',
      'Kenya is a world leader in off-grid solar power systems, with millions of households using solar charging',
      'The Democratic Republic of Congo has massive hydroelectric potential but limited distribution infrastructure',
      'Morocco is building one of the world\'s largest solar power complexes in the Sahara Desert',
      'Nigeria has Africa\'s largest economy but faces chronic electricity shortages affecting development'
    ]
  },
  'north-america': {
    name: 'North America',
    title: 'North American Countries Electric Plug Types & Power Adapters - Complete 2026 Guide', 
    description: 'Complete guide to electrical systems in USA, Canada, Mexico, and Central America. Type A/B plugs, 120V systems, and travel adapter recommendations.',
    intro: `North America stands as a beacon of electrical standardization, where travelers can journey from the Arctic Circle to the Panama Canal using the same Type A and Type B plugs throughout their entire journey. This remarkable consistency across 23 countries stems from early 20th-century American industrial influence and the NEMA standards that spread throughout the continent through trade and economic partnerships. However, North America's 120V/60Hz system sets it apart from most of the world, creating a unique electrical island where visitors from Europe, Asia, and Africa must adapt not just their plugs but often their voltage expectations. Whether you're road-tripping Route 66, exploring ancient Mayan ruins, or witnessing the Northern Lights in Canada, the continent's electrical uniformity is one less thing to worry about – though international visitors should pack those voltage converters alongside their adapters.`,
    overview: 'North American electrical systems evolved from early American and Canadian standards that spread south through economic and technical influence. The NEMA (National Electrical Manufacturers Association) standards dominate, creating plug compatibility from Canada to Central America.',
    electricalHistory: 'Thomas Edison\'s original DC system influenced early American electrical development. The adoption of 120V AC became the North American standard, spreading to Canada and Mexico through industrial cooperation. Central American countries adopted these standards through American economic influence.',
    bestAdapter: 'No adapters needed within North America - Type A/B plugs work from Canada to Panama. Visitors from other continents need Type A/B adapters.',
    voltageWarning: 'Consistent 120V across region (except some industrial applications). Visitors from 220-240V countries need voltage converters for non-dual-voltage devices.',
    seasonalConsiderations: 'Summer air conditioning creates peak demand across the region. Winter heating varies from electric (south) to gas/oil (north). Hurricane season affects Caribbean and Gulf Coast infrastructure.',
    transportationPower: {
      trains: 'Amtrak and VIA Rail provide power outlets at most seats. Commuter trains increasingly offer USB charging.',
      buses: 'Greyhound and major carriers provide power outlets. Regional buses vary in amenities.',
      airports: 'All major airports have abundant power outlets, including USB charging stations.',
      hotels: 'No adapter services needed - all outlets match regional standard Type A/B plugs.'
    },
    culturalContext: 'North American electrical usage is among the world\'s highest per capita. Air conditioning is standard in most buildings. Electric vehicle charging infrastructure expanding rapidly, especially in California and urban areas.',
    regions: {
      'United States': 'Highly developed grid, state regulations vary, increasing renewable integration, EV charging expansion',
      'Canada': 'Excellent infrastructure, heavy hydroelectric use, cold weather heating demands, grid stability focus',
      'Mexico': 'Improving infrastructure, mixed development levels, industrial growth increasing demand',
      'Central America': 'Variable infrastructure quality, increasing renewable projects, rural electrification ongoing',
      'Caribbean': 'Island systems, hurricane vulnerability, high electricity costs, solar potential'
    },
    faqs: [
      {
        question: 'Why does North America use 120V when most of the world uses 220-240V?',
        answer: 'North America adopted 120V in the early 1900s as a compromise between safety and efficiency. The lower voltage reduces electrocution risk for household use, while 240V is available for high-power appliances like dryers and ovens. This dual-voltage system became the regional standard.'
      },
      {
        question: 'Are plugs the same throughout North America?',
        answer: 'Yes - Type A (2-pin) and Type B (3-pin with ground) plugs are standard from Canada to Panama. This remarkable standardization makes travel throughout the region extremely convenient for electrical device compatibility.'
      },
      {
        question: 'Do I need adapters traveling within North America?',
        answer: 'No adapters needed for travel within North America. All countries use compatible Type A/B outlets. The only consideration is ensuring your devices work with 120V power (most modern electronics are dual-voltage).'
      },
      {
        question: 'How reliable is electricity across North America?',
        answer: 'Generally excellent: USA and Canada have world-class grid reliability. Mexico has good infrastructure in urban areas, variable in rural regions. Central American countries vary significantly - Costa Rica and Panama have better infrastructure than Guatemala or Honduras.'
      },
      {
        question: 'What about RV and camping electrical systems?',
        answer: 'North American RVs use specialized 30-amp and 50-amp connectors for high-power applications, plus standard Type A/B outlets for regular devices. Most campgrounds provide these specialized RV connections alongside standard outdoor outlets.'
      }
    ],
    didYouKnow: [
      'The United States has the world\'s largest electrical grid, with over 450,000 miles of high-voltage transmission lines',
      'Canada generates about 60% of its electricity from hydroelectric power, one of the highest percentages globally',
      'Mexico is rapidly expanding renewable energy, aiming for 35% clean electricity by 2024',
      'The North American electrical grid is actually three interconnected grids: Eastern, Western, and Texas',
      'Costa Rica runs almost entirely on renewable electricity - over 99% in recent years',
      'The 2003 Northeast blackout affected 55 million people across the USA and Canada, highlighting grid interconnection'
    ]
  },
  'south-america': {
    name: 'South America',
    title: 'South American Countries Electric Plug Types & Power Adapters - Complete 2026 Guide',
    description: 'Navigate South America\'s diverse electrical systems - from Brazil\'s Type N to Argentina\'s Type I. Essential adapter guide for 12 countries.',
    intro: `South America might just be the world's most electrically diverse continent, where neighboring countries can have completely incompatible electrical systems despite sharing thousands of kilometers of borders. Brazil chose to develop its own modern Type N standard in 2002, Argentina adopted the Australian Type I system, Chile uses European Type C and L plugs, while other nations maintain a mix of American and European influences from different periods of their history. This electrical Tower of Babel means that a traveler crossing from Buenos Aires to Rio de Janeiro to Santiago will need at least three different adapters, and possibly voltage converters too, as the continent uses both 110V and 220V systems. Understanding South America's electrical complexity is essential for any journey through this magnificent continent, where the diversity of plug types matches the incredible variety of landscapes from Patagonian glaciers to Amazon rainforests.`,
    overview: 'South American electrical diversity reflects varied colonial histories, post-independence development paths, and different industrialization patterns. No continent matches South America\'s plug type variety, requiring careful adapter planning for multi-country travel.',
    electricalHistory: 'Colonial influences, immigration patterns, and industrial development created South America\'s electrical complexity. Argentina adopted Australian-type plugs, Brazil developed its own IEC-based system, while other countries maintained European or American influences based on trade relationships.',
    bestAdapter: 'Universal adapter absolutely essential - South America uses more plug types than any other continent. Must include Types A, B, C, I, and N capabilities.',
    voltageWarning: 'Mixed voltage systems: some countries use 110V, others 220V, some have both. Always verify device compatibility and consider voltage converters.',
    seasonalConsiderations: 'Southern Hemisphere seasons opposite to North America/Europe. Summer (Dec-Mar) cooling demand, winter (Jun-Sep) heating needs. Rainy seasons affect hydroelectric-dependent countries.',
    transportationPower: {
      trains: 'Limited rail networks with few power amenities except some Argentine and Brazilian routes.',
      buses: 'Long-distance buses increasingly offer USB charging. Premium services may have power outlets.',
      airports: 'Major airports provide international charging stations. Smaller airports have limited options.',
      hotels: 'International hotels in major cities may lend adapters. Regional hotels rarely provide adapter services.'
    },
    culturalContext: 'South American electrical development varies dramatically by country wealth and geography. Urban areas show rapid smartphone adoption. Rural electrification ongoing, especially in Amazon regions. Energy independence important due to geographic isolation.',
    regions: {
      'Brazil': 'Type N system (IEC 60906-1), largest South American economy, mixed 110V/220V voltages',
      'Argentina/Uruguay': 'Type I plugs (Australian-style), relatively developed infrastructure, 220V standard',
      'Andean Countries': 'Chile, Peru, Bolivia, Ecuador, Colombia - mixed Type A/C systems, variable infrastructure',
      'Northern Countries': 'Venezuela, Guyana, Suriname, French Guiana - varied colonial influences, infrastructure challenges',
      'Paraguay': 'Type C system, developing infrastructure, hydroelectric focus'
    },
    faqs: [
      {
        question: 'Why does Brazil use different plugs from neighboring countries?',
        answer: 'Brazil adopted the IEC 60906-1 standard (Type N) in 2002 as part of modernizing its electrical infrastructure. This international standard was chosen for safety and compatibility reasons, though it created adapter challenges for regional travel.'
      },
      {
        question: 'Why does Argentina use Australian-style plugs?',
        answer: 'Argentina adopted Type I plugs due to historical trade relationships and technical cooperation with Australia in the early-mid 20th century. The angled-pin design was seen as safer and more secure than alternatives available at the time.'
      },
      {
        question: 'Do I need voltage converters in South America?',
        answer: 'Possibly - South American countries use both 110V and 220V systems, and some (like Brazil) have both voltages in the same country. Always check your devices\' voltage compatibility and bring converters for single-voltage appliances.'
      },
      {
        question: 'Which South American countries have the most reliable electricity?',
        answer: 'Chile, Uruguay, and southern Brazil have the most reliable electrical systems. Argentina\'s grid can be unstable during economic stress. Northern and Andean countries vary significantly between urban and rural areas.'
      },
      {
        question: 'What\'s the best adapter strategy for multi-country South American travel?',
        answer: 'Bring a high-quality universal adapter that includes Types A, C, I, and N. Consider separate dedicated adapters for countries where you\'ll spend significant time. Include voltage converters for non-dual-voltage devices.'
      }
    ],
    didYouKnow: [
      'Brazil has the world\'s third-largest hydroelectric capacity, generating about 65% of its electricity from water power',
      'Paraguay exports about 90% of its electricity generation - it produces far more than it consumes from massive hydroelectric dams',
      'Argentina experienced one of the world\'s largest blackouts in 2019, affecting nearly 50 million people across multiple countries',
      'Chile is rapidly expanding solar power in the Atacama Desert, one of the world\'s sunniest locations',
      'Venezuela has some of the world\'s lowest electricity prices due to subsidies, but faces severe infrastructure reliability problems',
      'The Itaipu Dam on the Brazil-Paraguay border is one of the world\'s largest hydroelectric facilities'
    ]
  },
  'oceania': {
    name: 'Oceania',
    title: 'Oceania Countries Electric Plug Types & Power Adapters - Complete 2026 Guide',
    description: 'Essential guide to electrical systems across Australia, New Zealand, and Pacific Islands. Type I plugs, 230V systems, and island power variations.',
    intro: `Oceania's electrical landscape perfectly illustrates the contrast between continental consistency and island diversity, where Australia and New Zealand's uniform Type I system gives way to a patchwork of standards across thousands of Pacific islands. The Australian Type I plug, with its distinctive angled pins, was designed for safety in harsh conditions and has become the gold standard from Perth to Auckland, creating a seamless electrical experience across the Tasman. Yet venture into the Pacific, and you'll discover a fascinating electrical mosaic: French Polynesia uses European Type C and E plugs reflecting its French governance, American Samoa follows US Type A/B standards, while independent nations like Fiji have adopted various systems based on historical ties and practical considerations. For travelers island-hopping through paradise, this means packing a universal adapter is as essential as sunscreen, especially considering that many remote islands rely on limited generator power or solar systems rather than 24/7 grid electricity.`,
    overview: 'Oceania\'s electrical systems are dominated by the Australia-New Zealand standard (Type I), but Pacific Islands show remarkable diversity due to different colonial histories, geographic isolation, and varying development levels.',
    electricalHistory: 'Australia developed its angled-pin system for safety and reliability in harsh conditions. New Zealand adopted the same standard. Pacific Islands inherited varied systems from different colonial powers, with some modernizing to Australian standards while others maintain original systems.',
    bestAdapter: 'Type I adapter covers Australia/New Zealand. Universal adapter needed for Pacific Island travel due to mixed systems (Type A/B, Type C/F, Type G, Type I).',
    voltageWarning: 'Australia/New Zealand use 230V. Pacific Islands vary: some use 110V (American influence), others 230V (Australian/British influence). Check each island specifically.',
    seasonalConsiderations: 'Southern Hemisphere seasons (opposite to Northern Hemisphere). Tropical islands have consistent temperatures. Cyclone seasons affect power infrastructure in Pacific regions.',
    transportationPower: {
      trains: 'Australian trains provide power outlets on intercity services. New Zealand trains have limited power amenities.',
      buses: 'Modern long-distance buses in Australia/New Zealand offer USB charging. Island buses typically lack power options.',
      airports: 'Major airports (Sydney, Melbourne, Auckland) have comprehensive charging facilities. Island airports vary widely.',
      hotels: 'Australian/New Zealand hotels standard Type I outlets. Pacific Island resorts may have multiple outlet types for international guests.'
    },
    culturalContext: 'Australia and New Zealand have high electricity consumption and excellent infrastructure. Pacific Islands balance traditional lifestyles with modern electrical needs, often relying on expensive imported fuel for generation.',
    regions: {
      'Australia': 'Type I standard, 230V, excellent infrastructure, world-class grid reliability, expanding renewable energy',
      'New Zealand': 'Type I standard, 230V, excellent infrastructure, heavy renewable energy use, smart grid development',
      'Melanesia': 'Papua New Guinea, Fiji, Solomon Islands, Vanuatu - mixed systems, variable infrastructure',
      'Micronesia': 'Palau, Marshall Islands, Federated States of Micronesia - American influence, Type A/B systems',
      'Polynesia': 'Samoa, Tonga, Cook Islands, French Polynesia - mixed colonial influences, tourism-focused development'
    },
    faqs: [
      {
        question: 'Do Australia and New Zealand use the same electrical plugs?',
        answer: 'Yes - both countries use Type I plugs with angled flat pins and 230V electricity. This makes trans-Tasman travel very convenient as the same adapter works in both countries. The systems are virtually identical.'
      },
      {
        question: 'Why do Pacific Islands have different electrical systems?',
        answer: 'Pacific Islands inherited different electrical systems from their colonial powers: American territories use Type A/B, French territories use Type C/E, British areas use Type G, while independent countries often adopted Australian Type I systems or maintained colonial standards.'
      },
      {
        question: 'Is electricity reliable across Oceania?',
        answer: 'Australia and New Zealand have world-class electrical reliability. Pacific Islands vary dramatically: resort areas and capitals generally have reliable power, while remote areas may have limited electricity hours or rely on generators.'
      },
      {
        question: 'What should I know about power costs in Pacific Islands?',
        answer: 'Pacific Islands typically have very high electricity costs due to imported fuel dependency. Many islands generate power from diesel, making electricity 3-5 times more expensive than mainland countries. Solar power is increasingly common.'
      },
      {
        question: 'Do Pacific Island resorts provide adapters?',
        answer: 'International resorts usually provide universal adapters or multiple outlet types to accommodate global guests. Local accommodations typically only have the country\'s standard outlets. Always bring your own adapters as backup.'
      }
    ],
    didYouKnow: [
      'Australia has one of the world\'s highest per-capita electricity consumption rates, partly due to energy-intensive mining operations',
      'New Zealand generates about 80% of its electricity from renewable sources, primarily hydroelectric and geothermal',
      'Many Pacific Islands are installing solar power systems to reduce dependence on expensive imported diesel fuel',
      'Australia\'s National Electricity Market covers the eastern seaboard and is one of the world\'s longest power grids',
      'French Polynesia uses the same electrical system as metropolitan France despite being 15,000km away',
      'Some remote Pacific Islands still lack grid electricity, relying entirely on solar power or generators'
    ]
  },
  'middle-east': {
    name: 'Middle East',
    title: 'Middle East Countries Electric Plug Types & Power Adapters - Complete 2026 Guide',
    description: 'Navigate Middle Eastern electrical systems - from Israel\'s unique Type H to Gulf states\' Type G. Essential adapter guide for regional travel.',
    intro: `The Middle East's electrical infrastructure tells a story of ancient crossroads meeting ultramodern development, where gleaming Dubai skyscrapers with state-of-the-art power systems stand just hours from remote desert camps powered by generators under starlit skies. Israel stands alone with its unique Type H three-pin Y-shaped plug, developed for both safety and national standardization, while the oil-rich Gulf states maintain the British Type G system as a legacy of the colonial era that paradoxically powers some of the world's most futuristic cities. The region's extreme climate puts unique demands on electrical systems, with summer temperatures exceeding 50°C testing equipment limits and creating massive air conditioning loads that would overwhelm many countries' entire power grids. Whether you're exploring Petra's ancient ruins, conducting business in Kuwait's towers, or making a pilgrimage to holy sites, understanding the Middle East's diverse electrical landscape – and packing the right adapters – ensures your devices stay powered through both sandstorms and technological marvels.`,
    overview: 'Middle Eastern electrical systems reflect British colonial influence (Type G in Gulf states), unique national development (Israel\'s Type H), and European connections (Type C/F in Turkey and Iran). Oil wealth has created excellent infrastructure in some countries while conflicts have damaged systems in others.',
    electricalHistory: 'British mandate periods established Type G systems in many Gulf states. Israel developed Type H for safety and uniqueness. Turkey maintains European connections through Type C/F systems. Iran combines European standards with unique local requirements.',
    bestAdapter: 'Universal adapter essential due to Type diversity: H (Israel), G (Gulf states), C/F (Turkey/Iran), mixed systems in other countries. No single adapter covers the entire region.',
    voltageWarning: 'Generally 220-240V across region except some older installations. Power quality varies significantly between oil-rich and conflict-affected countries.',
    seasonalConsiderations: 'Extreme summer heat creates massive cooling demand, straining electrical systems. Winter heating minimal except in northern regions (Turkey, Iran). Sandstorms can affect power transmission.',
    transportationPower: {
      trains: 'Limited rail networks with power outlets mainly in Israel, Turkey, and Iran. Gulf states developing rail with modern amenities.',
      buses: 'Modern buses in developed countries offer USB charging. Rural/older buses typically lack power options.',
      airports: 'Major airports provide international charging stations. Secondary airports may have limited outlet types.',
      hotels: 'International hotels provide adapters, especially in business centers like Dubai. Local hotels vary significantly.'
    },
    culturalContext: 'Middle Eastern electrical usage patterns reflect extreme climate (massive cooling needs), economic disparities (oil-rich vs. developing countries), and cultural factors (prayer times affecting peak demand patterns).',
    regions: {
      'Gulf States': 'UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman - Type G systems, excellent infrastructure, high consumption',
      'Levant': 'Syria, Lebanon, Jordan, Palestine - mixed systems, variable infrastructure, conflict impacts',
      'Israel': 'Unique Type H system, excellent infrastructure, high technology integration',
      'Turkey': 'Type C/F European systems, good infrastructure, growing renewable energy',
      'Iran': 'Type C/F systems, sanctions affecting equipment quality, variable reliability',
      'Iraq/Yemen': 'Mixed systems, severely damaged infrastructure, unreliable power'
    },
    faqs: [
      {
        question: 'Why does Israel use different plugs from surrounding countries?',
        answer: 'Israel developed the Type H plug system for safety and national standardization when establishing electrical infrastructure post-1948. The three-pin Y-shaped design was chosen for safety and to create a unique national standard different from neighboring Arab countries.'
      },
      {
        question: 'Do Gulf states have reliable electricity?',
        answer: 'Yes - oil-rich Gulf states (UAE, Saudi Arabia, Qatar, Kuwait) have excellent electrical infrastructure with minimal outages. They\'ve invested heavily in modern power generation and distribution to support air conditioning in extreme heat.'
      },
      {
        question: 'What challenges exist for electrical systems in the Middle East?',
        answer: 'Extreme heat stresses equipment and creates massive cooling demand. Political conflicts damage infrastructure in some countries. Sandstorms affect transmission lines. Economic sanctions limit equipment imports in some regions.'
      },
      {
        question: 'Are there cultural considerations for electricity use in the Middle East?',
        answer: 'Yes - prayer times create predictable demand patterns. Ramadan shifts electrical usage to nighttime hours. Friday prayers affect peak demand timing. Air conditioning is often considered essential, not luxury, due to extreme heat.'
      },
      {
        question: 'What about renewable energy in the Middle East?',
        answer: 'Despite oil wealth, Middle Eastern countries are rapidly investing in solar power due to abundant sunshine. UAE, Saudi Arabia, and Morocco lead regional solar development. Israel is a global leader in solar technology innovation.'
      }
    ],
    didYouKnow: [
      'The UAE has one of the world\'s highest per-capita electricity consumption rates due to intensive air conditioning use',
      'Israel generates about 90% of its domestic hot water from solar thermal systems - among the highest globally',
      'Saudi Arabia is building one of the world\'s largest solar power projects as part of Vision 2030 diversification',
      'Iran has significant electricity trade with neighboring countries, both importing and exporting power',
      'Dubai\'s Burj Khalifa has its own dedicated power station to meet the skyscraper\'s enormous electricity needs',
      'Iraq\'s electrical infrastructure was severely damaged during conflicts and still faces regular nationwide blackouts'
    ]
  }
} as const;

type ContinentSlug = keyof typeof continents;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const continent = continents[slug as ContinentSlug];
  
  if (!continent) {
    return { title: 'Continent Not Found' };
  }

  return {
    title: continent.title,
    description: continent.description,
    openGraph: {
      title: continent.title,
      description: continent.description,
      type: 'website',
      url: `https://travelpowerplugs.com/continent/${slug}`,
      siteName: 'Travel Power Plugs',
    },
    twitter: {
      card: 'summary_large_image',
      title: continent.title,
      description: continent.description,
    },
    alternates: {
      canonical: `https://travelpowerplugs.com/continent/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(continents).map((slug) => ({
    slug,
  }));
}

export default async function ContinentPage({ params }: PageProps) {
  const { slug } = await params;
  const continent = continents[slug as ContinentSlug];
  
  if (!continent) {
    notFound();
  }

  const continentCountries = COUNTRIES.filter(country => {
    const continentName = continent.name.toLowerCase();
    const countryContinent = country.continent.toLowerCase().replace('-', ' ');
    
    if (continentName === 'middle east') {
      return ['AE', 'SA', 'IL', 'JO', 'LB', 'SY', 'IQ', 'IR', 'KW', 'QA', 'BH', 'OM', 'YE'].includes(country.iso2);
    }
    
    // Special case: Asia includes Middle East countries and Russia (geographically in Asia)
    if (continentName === 'asia') {
      return countryContinent === 'asia' || 
             countryContinent === 'middle east' || 
             country.name === 'Russia';
    }
    
    return countryContinent === continentName;
  }).sort((a, b) => a.name.localeCompare(b.name));

  // Group countries by plug type
  const plugTypeGroups: { [key: string]: typeof continentCountries } = {};
  continentCountries.forEach(country => {
    const key = country.plugTypes.join(',');
    if (!plugTypeGroups[key]) {
      plugTypeGroups[key] = [];
    }
    plugTypeGroups[key].push(country);
  });

  // Get unique plug types and voltages
  const uniquePlugTypes = [...new Set(continentCountries.flatMap(c => c.plugTypes))].sort();
  const uniqueVoltages = [...new Set(continentCountries.map(c => c.voltage))].sort((a, b) => a - b);

  // Generate JSON-LD structured data with @graph pattern
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // CollectionPage schema
      {
        "@type": "CollectionPage",
        "name": continent.title,
        "description": continent.description,
        "url": `https://travelpowerplugs.com/continent/${slug}`,
        "author": {
          "@type": "Person",
          "name": "Marko Visic"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Travel Power Plugs",
          "url": "https://travelpowerplugs.com"
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en",
        "about": {
          "@type": "Place",
          "name": continent.name
        },
        "hasPart": continentCountries.map(country => ({
          "@type": "Country",
          "name": country.name,
          "identifier": country.iso2,
          "url": `https://travelpowerplugs.com/${country.slug}`
        })),
        "mainEntity": {
          "@type": "ItemList",
          "name": `${continent.name} Countries`,
          "numberOfItems": continentCountries.length,
          "itemListElement": continentCountries.map((country, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Country",
              "name": country.name,
              "identifier": country.iso2,
              "url": `https://travelpowerplugs.com/${country.slug}`
            }
          }))
        }
      },
      // FAQPage schema (if FAQs exist)
      ...(continent.faqs ? [{
        "@type": "FAQPage",
        "mainEntity": continent.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }] : []),
      // BreadcrumbList schema
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://travelpowerplugs.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${continent.name} Electric Plug Types`,
            "item": `https://travelpowerplugs.com/continent/${slug}`,
          },
        ],
      },
    ],
  };

  const getCountryDescription = (country: any) => {
    // Generate 2-3 sentence descriptions for each country based on their electrical characteristics
    const plugTypeText = country.plugTypes.map((type: string) => `Type ${type}`).join(', ');
    const isUniversal = country.plugTypes.includes('C') || country.plugTypes.includes('F');
    const voltage = country.voltage;
    const frequency = country.frequency;
    
    let description = `${country.name} uses ${plugTypeText} electrical outlets with ${voltage}V at ${frequency}Hz frequency. `;
    
    // Add specific insights based on plug types and electrical characteristics
    if (country.plugTypes.includes('A') && country.plugTypes.includes('B')) {
      description += `Standard North American electrical system with grounded and ungrounded outlets. Most modern electronics work without adapters.`;
    } else if (country.plugTypes.includes('G')) {
      description += `British-style three-pin system with built-in fuses for enhanced safety. Distinctive rectangular pins require specific adapters.`;
    } else if (country.plugTypes.includes('I')) {
      description += `Australian/New Zealand standard with angled pins for secure connection. Unique design prevents accidental disconnection.`;
    } else if (isUniversal) {
      description += `European standard system compatible with most continental European devices. Widely adopted for international compatibility.`;
    } else if (country.plugTypes.includes('D') || country.plugTypes.includes('M')) {
      description += `Three-pin system common in former British colonies. Larger Type M for high-power appliances, Type D for general use.`;
    } else if (country.plugTypes.includes('N')) {
      description += `Modern Brazilian standard introduced in 2002 for improved safety. IEC-compliant design with enhanced grounding protection.`;
    } else {
      description += `Regional electrical standard requiring specific adapters for international travelers. Check device compatibility before travel.`;
    }
    
    return description;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      
      {/* Header */}
      <Header showFullNav={true} />

      {/* Main Content */}
      <main className="max-w-[960px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: continent.name }
            ]}
          />
        </div>
        
        <h1 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
          {continent.name} Electric Plug Types
        </h1>
        
        {/* Split intro into 2-3 sections */}
        <div className="space-y-4 mb-8">
          {continent.intro.split('. ').slice(0, 3).map((sentence, index) => (
            <p key={index} className="text-[15px] leading-[1.7] text-gray-800">
              {sentence}{sentence.endsWith('.') ? '' : '.'}
            </p>
          ))}
          {continent.intro.split('. ').length > 3 && (
            <p className="text-[15px] leading-[1.7] text-gray-800">
              {continent.intro.split('. ').slice(3).join('. ')}
            </p>
          )}
        </div>

        {/* Interactive Continent Map */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Interactive {continent.name} Map
          </h2>
          <ContinentMap 
            continent={continent.name}
          />
          
          {/* Color Legend */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-700 mb-2">Color Key by Plug Type:</div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#E24B4A' }}></span>
                <span className="text-xs text-gray-600">Type A/B</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#378ADD' }}></span>
                <span className="text-xs text-gray-600">Type C/E/F</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#1D9E75' }}></span>
                <span className="text-xs text-gray-600">Type G</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#BA7517' }}></span>
                <span className="text-xs text-gray-600">Type D/M</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#639922' }}></span>
                <span className="text-xs text-gray-600">Type I</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#7F77DD' }}></span>
                <span className="text-xs text-gray-600">Type J</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#534AB7' }}></span>
                <span className="text-xs text-gray-600">Type K</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#D85A30' }}></span>
                <span className="text-xs text-gray-600">Type L</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded" style={{ backgroundColor: '#D4537E' }}></span>
                <span className="text-xs text-gray-600">Type N</span>
              </div>
            </div>
          </div>
        </div>

        {/* Plug Types Used in {continent.name} */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Plug Types Used in {continent.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
            {uniquePlugTypes.map((plugType) => (
              <div key={plugType} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="mb-2">
                  <img
                    src={`/images/plugs/type-${plugType.toLowerCase()}-electric-plug-and-socket.webp`}
                    alt={`Type ${plugType} plug`}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">Type {plugType}</span>
              </div>
            ))}
          </div>
          
          {/* Animated demonstrations of most common plugs */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Interactive Demonstration - Most Common {continent.name} Plugs
            </h3>
            <div className="space-y-4">
              {uniquePlugTypes.slice(0, 2).map((plugType) => (
                <HTMLAnimatedPlug 
                  key={plugType}
                  plugType={plugType} 
                  width={700} 
                  height={240}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PRACTICAL REGIONAL INSIGHTS */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            🌍 Real-World Usage Patterns Across {continent.name}
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-blue-500">
            <p className="text-gray-700 mb-4 text-sm">
              Colonial history and trade relationships shaped {continent.name}'s electrical landscape. 
              Here's the practical reality of what plugs you'll actually encounter:
            </p>
            
            {(() => {
              // Analyze practical usage across the continent
              const practicalAnalysis = continentCountries.reduce((acc, country) => {
                const practicalData = getCountryPlugData(country.iso2);
                if (practicalData) {
                  practicalData.plugTypes.forEach(plug => {
                    if (!acc[plug.type]) {
                      acc[plug.type] = { primary: 0, secondary: 0, legacy: 0, countries: [] };
                    }
                    acc[plug.type][plug.status]++;
                    acc[plug.type].countries.push({ name: country.name, status: plug.status });
                  });
                }
                return acc;
              }, {} as Record<string, { primary: number, secondary: number, legacy: number, countries: Array<{name: string, status: string}> }>);

              const sortedPlugTypes = Object.entries(practicalAnalysis).sort(([,a], [,b]) => b.primary - a.primary);
              const topPlugTypes = sortedPlugTypes.slice(0, 4);

              return (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {topPlugTypes.map(([plugType, data]) => (
                      <div key={plugType} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">Type {plugType}</h3>
                          <span className="text-sm text-gray-600">{data.primary + data.secondary + data.legacy} countries</span>
                        </div>
                        <div className="flex gap-2 text-xs">
                          {data.primary > 0 && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                              {data.primary} PRIMARY
                            </span>
                          )}
                          {data.secondary > 0 && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                              {data.secondary} SECONDARY
                            </span>
                          )}
                          {data.legacy > 0 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
                              {data.legacy} LEGACY
                            </span>
                          )}
                        </div>
                        <div className="mt-2 text-xs text-gray-600 max-h-12 overflow-hidden">
                          Primary in: {data.countries.filter(c => c.status === 'primary').map(c => c.name).slice(0, 3).join(', ')}
                          {data.countries.filter(c => c.status === 'primary').length > 3 && ` +${data.countries.filter(c => c.status === 'primary').length - 3} more`}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Regional insights based on continent */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Colonial & Historical Influences</h3>
                    <div className="text-sm text-gray-700">
                      {continent.name === 'Europe' && (
                        <p>🇪🇺 European standardization created the Europlug (Type C) for universal compatibility, while national systems like German Schuko (Type F) and British Type G reflect distinct engineering philosophies. The UK's unique system stems from post-WWII safety requirements.</p>
                      )}
                      {continent.name === 'Asia' && (
                        <p>🌏 Asian electrical diversity reflects colonial legacies: British Type G in former colonies (Hong Kong, Singapore), Japanese influence in Korea, and American systems in the Philippines. China's mixed system accommodates both domestic and international needs.</p>
                      )}
                      {continent.name === 'Africa' && (
                        <p>🌍 African plug types directly mirror colonial history: British Type G in former British colonies, French Type E in Francophone countries, and Portuguese/German influences elsewhere. South Africa's Type M dominates the southern region.</p>
                      )}
                      {continent.name === 'South America' && (
                        <p>🌎 South America showcases the world's greatest plug diversity: Brazil developed its own Type N standard, Argentina adopted Australian Type I, while other countries blend American and European influences based on trade relationships and immigration patterns.</p>
                      )}
                      {continent.name === 'North America' && (
                        <p>🍁 North American electrical unity reflects successful regional standardization. Type A/B systems span from Canada to Panama, creating the world's most unified continental electrical system despite Mexico's mixed voltage standards.</p>
                      )}
                      {continent.name === 'Oceania' && (
                        <p>🏝️ Pacific diversity reflects varied colonial administration: Australian Type I dominates the region, American influence appears in former US territories, while smaller islands often adopted systems from their colonial administrators or geographic neighbors.</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-50 p-6 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">Countries</div>
            <div className="text-2xl font-semibold">{continentCountries.length}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Plug Types</div>
            <div className="text-2xl font-semibold">
              {uniquePlugTypes.map(t => `${t}`).join(', ')}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Voltages</div>
            <div className="text-2xl font-semibold">
              {uniqueVoltages.join(', ')}V
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-4">{continent.overview}</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-medium text-blue-900 mb-2">Recommended Adapter</h3>
            <p className="text-sm text-blue-800">{continent.bestAdapter}</p>
          </div>
          
          {continent.voltageWarning && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-medium text-amber-900 mb-2">⚡ Voltage Warning</h3>
              <p className="text-sm text-amber-800">{continent.voltageWarning}</p>
            </div>
          )}
        </div>



        {/* Transportation Power Info */}
        {continent.transportationPower && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Transportation & Power Access</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  🚂 Trains
                </h3>
                <p className="text-sm text-gray-700">{continent.transportationPower.trains}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  🚌 Buses
                </h3>
                <p className="text-sm text-gray-700">{continent.transportationPower.buses}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  ✈️ Airports
                </h3>
                <p className="text-sm text-gray-700">{continent.transportationPower.airports}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  🏨 Hotels
                </h3>
                <p className="text-sm text-gray-700">{continent.transportationPower.hotels}</p>
              </div>
            </div>
          </div>
        )}

        {/* Countries Table */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          All {continent.name} Countries
        </h2>
        
        <div className="border border-gray-200 mb-8 overflow-x-auto">
          <table className="w-full text-sm min-w-[1000px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Country</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Plug Types</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Voltage</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Frequency</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {continentCountries.map((country, index) => (
                <tr 
                  key={country.iso2}
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-4 py-3">
                    <Link 
                      href={`/${country.slug}`}
                      className="text-blue-600 hover:underline flex items-center space-x-2"
                    >
                      <img
                        src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`}
                        alt=""
                        width={20}
                        height={15}
                        className="inline-block"
                      />
                      <span>{country.name}</span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {country.plugTypes.map(type => `Type ${type}`).join(', ')}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{country.voltage}V</td>
                  <td className="px-4 py-3 text-gray-700">{country.frequency}Hz</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">
                    {getCountryDescription(country)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQs */}
        {continent.faqs && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {continent.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Did You Know */}
        {continent.didYouKnow && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Did You Know?</h2>
            <div className="grid gap-3">
              {continent.didYouKnow.map((fact, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">💡 {fact}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cultural Context & Electrical History */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {continent.electricalHistory && (
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Electrical History</h3>
              <p className="text-sm text-gray-700">{continent.electricalHistory}</p>
            </div>
          )}
          {continent.culturalContext && (
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Cultural Context</h3>
              <p className="text-sm text-gray-700">{continent.culturalContext}</p>
            </div>
          )}
        </div>

        {/* Seasonal Considerations */}
        {continent.seasonalConsiderations && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Seasonal Considerations</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-sm text-orange-800">{continent.seasonalConsiderations}</p>
            </div>
          </div>
        )}

        {/* Grouped by Plug Type */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Countries Grouped by Plug Type
        </h2>
        
        <div className="space-y-4">
          {Object.entries(plugTypeGroups)
            .sort((a, b) => b[1].length - a[1].length)
            .map(([types, countries]) => (
              <div key={types} className="border border-gray-200 rounded-lg p-4">
                <div className="mb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={`/images/plugs/type-${types.split(',')[0].toLowerCase()}-electric-plug-and-socket.webp`}
                      alt={`Type ${types} plug`}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <h3 className="font-medium text-gray-900">
                      Type {types.split(',').join(', Type ')} ({countries.length} countries)
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {countries.map(country => (
                    <Link
                      key={country.iso2}
                      href={`/${country.slug}`}
                      className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                    >
                      <img
                        src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`}
                        alt=""
                        width={20}
                        height={15}
                      />
                      <span>{country.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
        
        {/* Continent Summary */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            {continent.name} Travel Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-blue-800 mb-2">Key Facts</h3>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• <strong>{continentCountries.length} countries</strong> across {continent.name}</li>
                <li>• <strong>{uniquePlugTypes.length} plug types</strong> in use: {uniquePlugTypes.join(', ')}</li>
                <li>• <strong>Voltage range:</strong> {Math.min(...uniqueVoltages)}V - {Math.max(...uniqueVoltages)}V</li>
                <li>• <strong>Frequency:</strong> 50Hz (60Hz in some regions)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-2">Travel Recommendation</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                {continent.bestAdapter} 
                {continent.voltageWarning && (
                  <span className="block mt-2 font-medium">
                    ⚡ {continent.voltageWarning}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}