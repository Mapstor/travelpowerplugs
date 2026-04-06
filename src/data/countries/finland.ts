import type { CountryPlugData } from '@/types';

const finland: CountryPlugData = {
  slug: 'finland-electric-plug-types',
  name: 'Finland',
  demonym: 'Finnish',
  continent: 'Europe',
  region: 'Northern Europe',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-c',
      name: 'Type C',
      subtitle: 'Europlug',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 2.5,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.18,
      bodyHeight: 0.72,
      bodyCornerRadius: 0.2,
      noseRadius: 0.42,
      recessRadius: 0.92,
      faceplateSize: 2.7,
    },
    {
      id: 'type-f',
      name: 'Type F',
      subtitle: 'Schuko',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: true,
      pinRadius: 0.075,
      bodyWidth: 1.3,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.25,
      noseRadius: 0.52,
      recessRadius: 1.05,
      faceplateSize: 2.9,
    },
  ],
  quirks: [
    'Finland was one of the first countries to adopt the Schuko system after Germany, implementing it nationwide in the 1980s for safety reasons.',
    'Finnish electrical installations are among the most reliable in the world, with power outages being extremely rare even during harsh winter storms.',
    'Many Finnish homes and hotels feature heated bathroom floors, which require special electrical installations and may affect outlet placement.',
    'Lapland\'s extreme winter conditions led to specialized outdoor electrical standards — some northern Finnish outlets are designed to handle temperatures as low as -40°C.',
    'Finnish saunas typically use 400V three-phase power for their heaters, but regular wall outlets remain standard 230V single-phase.',
  ],
  travelContext:
    'Finland attracts millions of visitors each year to experience the Northern Lights in Lapland, explore Helsinki\'s design scene, and enjoy its pristine wilderness. The country\'s electrical infrastructure is exceptionally modern and reliable. Travelers from other European countries using Type C or F plugs won\'t need any adapter. Visitors from the US, UK, or Australia will need a plug adapter but generally not a voltage converter for modern electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs don\'t fit Finnish round-pin outlets. You\'ll need a US-to-Schuko adapter. Most modern electronics (phones, laptops, cameras) are dual-voltage (100–240V) and only need the adapter. Check older appliances like hair dryers — they may require a voltage converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are too large for Finnish sockets. Bring a UK-to-Europe adapter. Since both countries use 230V/50Hz, no voltage converter is needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs with angled flat pins won\'t fit Finnish outlets. You need an AU-to-Europe adapter. Voltage is identical (230V/50Hz) so all devices work with just the adapter.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C (Europlug) and Type F (Schuko) plugs fit directly into Finnish outlets. No adapter or converter needed.',
    },
    {
      origin: 'Germany/Austria',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'German and Austrian Schuko plugs work perfectly in Finland. Same plug system and voltage — no adapter needed.',
    },
    {
      origin: 'France',
      originPlugTypes: 'C, E',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'French Type E plugs are compatible with Finnish Type F sockets. Your French devices will work without any adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Verkkakauppa.com',
      type: 'electronics',
      city: 'Helsinki',
      priceRange: '€5–€15',
      note: 'Finland\'s largest electronics retailer with stores in Helsinki, Espoo, Tampere, and Turku. Wide selection of travel adapters.',
    },
    {
      name: 'Gigantti',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Major electronics chain found in shopping centers across Finland. Good selection of adapters and multi-plugs.',
    },
    {
      name: 'K-Market / K-Citymarket',
      type: 'supermarket',
      priceRange: '€4–€12',
      note: 'Finnish grocery chain with electronics sections in larger stores. Basic travel adapters available.',
    },
    {
      name: 'S-Market / Prisma',
      type: 'supermarket',
      priceRange: '€4–€12',
      note: 'Finnish cooperative grocery stores. Prisma hypermarkets carry travel adapters in their electronics aisles.',
    },
    {
      name: 'Helsinki Airport (HEL) shops',
      type: 'airport',
      city: 'Helsinki',
      priceRange: '€10–€25',
      note: 'Electronics stores and convenience shops in both terminals sell travel adapters at airport prices. Available before and after security.',
    },
  ],
  airportName: 'Helsinki-Vantaa Airport',
  airportCode: 'HEL',
  neighbors: [
    {
      name: 'Sweden',
      slug: 'sweden-electric-plug-types-will-you-need-an-adapter-in-stockholm',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Sweden uses the same Type C/F system as Finland. No adapter needed.',
    },
    {
      name: 'Norway',
      slug: 'norway-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Norway uses identical plugs and voltage. No adapter needed.',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Russia uses the same plug types. No adapter needed for the border regions.',
    },
    {
      name: 'Estonia',
      slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Estonia uses identical plugs. The Tallinn–Helsinki ferry route requires no adapter changes.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Finnish hotels, even budget ones, typically provide excellent amenities including hair dryers and increasingly USB charging ports built into desks or bedside units. Higher-end hotels in Helsinki and Lapland resorts often have international adapters available at reception. Finnish Airbnb accommodations in cities are usually well-equipped, though remote cabins in Lapland may have limited outlets — bringing a power strip can be useful for charging multiple devices.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all Apple and major Android chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Only a plug adapter is needed. No voltage converter required.',
    },
    {
      device: 'Laptop (MacBook, Dell, Lenovo, etc.)',
      dualVoltage: 'Yes — virtually all laptop power bricks handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'Use an adapter or buy a local power cable with a Schuko plug.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'Check your label. If it says 120V only, don\'t plug it into a 230V Finnish outlet. Most Finnish hotels provide hair dryers.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Verify on the label. Most modern electric razors and toothbrush chargers handle 230V fine.',
    },
    {
      device: 'Camera battery charger',
      dualVoltage: 'Yes — virtually all camera chargers are dual-voltage.',
      adapterOnly: 'Yes',
      note: 'Essential for Northern Lights photography in Lapland. Just bring an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Finland?',
      answer:
        'It depends on your home country. Travelers from the US, UK, Australia, and many Asian countries need a plug adapter since Finland uses round-pin Type C and Type F sockets. Visitors from other European countries (Germany, France, Spain, etc.) won\'t need any adapter.',
    },
    {
      question: 'What plug types does Finland use?',
      answer:
        'Finland uses Type C (Europlug) for low-power devices and Type F (Schuko) for grounded appliances. Both have round pins and operate at 230V/50Hz. This is the same system used in Germany, Austria, and many other European countries.',
    },
    {
      question: 'Will my US phone charger work in Finland?',
      answer:
        'Yes, with a plug adapter. All modern smartphone chargers (Apple, Samsung, Google, etc.) accept 100–240V input, making them compatible with Finland\'s 230V supply. You just need an adapter to fit the round-pin socket.',
    },
    {
      question: 'Do I need different adapters for Helsinki versus Lapland?',
      answer:
        'No. The entire country uses the same Type C/F plug system at 230V/50Hz. Whether you\'re in Helsinki, Rovaniemi, or a remote Lapland lodge, the outlets are identical.',
    },
    {
      question: 'Do Finnish hotels provide power adapters?',
      answer:
        'Some do, particularly international chain hotels and higher-end properties in Helsinki and Lapland resorts. They may have adapters available at reception on a loaner basis. However, it\'s not guaranteed, so bringing your own is recommended.',
    },
    {
      question: 'Can I use the same adapter for Finland and neighboring countries?',
      answer:
        'Yes. Finland, Sweden, Norway, and Estonia all use the same Type C/F plug system. One adapter works for your entire Nordic/Baltic trip.',
    },
    {
      question: 'Are there special electrical considerations for Lapland\'s cold weather?',
      answer:
        'Indoor outlets in Lapland work exactly the same as elsewhere in Finland. Outdoor electrical equipment is specially rated for extreme cold, but hotel and cabin outlets remain standard 230V Type C/F.',
    },
    {
      question: 'Where can I buy an adapter in Helsinki?',
      answer:
        'Verkkakauppa.com (Finland\'s largest electronics store), Gigantti, or any K-Market/S-Market with an electronics section. Helsinki Airport also has electronics kiosks selling adapters, though at higher prices.',
    },
  ],
  metaTitle: 'Finland Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Finland uses Type C and Type F (Schuko) plugs at 230V/50Hz. Find out if you need an adapter for Helsinki, Lapland, and beyond, plus where to buy one.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Sweden', slug: 'sweden-electric-plug-types-will-you-need-an-adapter-in-stockholm' },
    { name: 'Norway', slug: 'norway-electric-plug-types' },
    { name: 'Estonia', slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Denmark', slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2' },
  ],
};

export default finland;