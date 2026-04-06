import type { CountryPlugData } from '@/types';

const macao: CountryPlugData = {
  slug: 'macau-electric-plug-types',
  name: 'Macao',
  demonym: 'Macanese',
  continent: 'Asia',
  region: 'East Asia',
  voltage: 220,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British Standard',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 4.0,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.0,
      bodyWidth: 1.3,
      bodyHeight: 1.1,
      bodyCornerRadius: 0.1,
      noseRadius: 0.0,
      recessRadius: 0.0,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Macao uses British-style Type G plugs, inherited from its colonial history, despite being a Special Administrative Region of China since 1999.',
    'Unlike mainland China, Macao exclusively uses Type G sockets, making it identical to Hong Kong and the UK electrical systems.',
    'Many of Macao\'s world-famous casinos and luxury hotels have invested heavily in electrical infrastructure, providing multiple outlet types for international visitors.',
    'The territory\'s Portuguese colonial architecture often features beautifully integrated modern electrical installations that blend with historic facades.',
    'Macao\'s compact size (just 32 km²) means the electrical grid is exceptionally reliable, with backup systems for the casino and tourism industry.',
    'Hotel rooms in Macao often feature more electrical outlets than average due to the territory\'s focus on luxury tourism and extended gaming sessions.',
  ],
  travelContext:
    'Macao is known as the "Las Vegas of Asia" and attracts millions of visitors for its casinos, Portuguese colonial heritage, and fusion cuisine. This small Special Administrative Region uses the British electrical system, making it convenient for UK travelers but requiring adapters for most others. The territory\'s focus on luxury tourism means excellent electrical infrastructure in hotels and entertainment venues.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs don\'t fit Macao\'s three-pin rectangular Type G sockets. You need a US-to-UK adapter. Macao uses 220V, which works with most modern US electronics (check for "100-240V" on your devices).',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Perfect compatibility! UK Type G plugs fit directly into Macao sockets — it\'s identical to the UK system. Voltage is nearly the same (UK: 230V, Macao: 220V) so all devices work without any adapter.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins incompatible with Macao\'s rectangular Type G sockets. Use an AU-to-UK adapter. Voltage is compatible (both around 220-240V).',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs don\'t fit Macao\'s Type G sockets. You need a Europe-to-UK adapter. Voltage is compatible (both around 220-240V) so no converter needed.',
    },
    {
      origin: 'Mainland China',
      originPlugTypes: 'A, C, I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Despite being part of China, Macao uses different plugs. Mainland Chinese devices need an adapter to fit Macao\'s Type G sockets. Voltage is compatible.',
    },
    {
      origin: 'Hong Kong',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Hong Kong and Macao use identical electrical systems. Your Hong Kong devices work perfectly in Macao without any adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Fortress (Watsons)',
      type: 'electronics',
      priceRange: 'MOP$25-80',
      note: 'Electronics retailer with locations in major shopping areas. Good selection of travel adapters and charging accessories.',
    },
    {
      name: 'Broadway',
      type: 'electronics',
      priceRange: 'MOP$20-70',
      note: 'Electronics store chain with outlets in Macao\'s shopping districts. Carries various international adapters.',
    },
    {
      name: '7-Eleven',
      type: 'convenience',
      priceRange: 'MOP$15-40',
      note: 'Convenient store locations throughout Macao Peninsula, Taipa, and Cotai. Most carry basic universal adapters.',
    },
    {
      name: 'Circle K',
      type: 'convenience',
      priceRange: 'MOP$15-45',
      note: 'Another widespread convenience store chain. Limited but adequate selection of basic travel adapters.',
    },
    {
      name: 'Macao International Airport (MFM)',
      type: 'airport',
      city: 'Macao',
      priceRange: 'MOP$40-120',
      note: 'Small airport but electronics shops and duty-free stores sell adapters. Limited selection compared to Hong Kong.',
    },
    {
      name: 'PARKnSHOP / San Miu',
      type: 'supermarket',
      priceRange: 'MOP$20-60',
      note: 'Major supermarket chains with household goods sections that carry basic travel adapters.',
    },
  ],
  airportName: 'Macao International Airport',
  airportCode: 'MFM',
  neighbors: [
    {
      name: 'Mainland China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Macao uses Type G while mainland China uses Types A, C, and I. You need an adapter when crossing the border.',
    },
    {
      name: 'Hong Kong',
      slug: 'hong-kong-electric-plug-types-they-use-type-g-british-plugs',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'Hong Kong uses the identical Type G system as Macao. Perfect compatibility — no adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'always',
  hotelUSBPorts: 'always',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Macao\'s hotels cater extensively to international visitors, especially from mainland China, Hong Kong, and Western countries. Even mid-range properties provide universal adapters and USB charging facilities. Luxury casino resorts feature world-class electrical amenities including wireless charging, multiple outlet types, and premium USB-C ports. Hair dryers are standard across all hotel categories.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Macao\'s 220V is perfect for modern phone chargers.',
    },
    {
      device: 'Laptop charger',
      dualVoltage: 'Yes — virtually all laptop power adapters are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter. Macao has excellent power infrastructure with stable 220V supply.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Check carefully — many US models are 120V only.',
      adapterOnly: 'No — you may need a converter for 120V-only devices.',
      note: 'US hair dryers rated for 120V only won\'t work safely with Macao\'s 220V. Check for dual voltage or use the hotel\'s dryer.',
    },
    {
      device: 'Electric razor / Toothbrush',
      dualVoltage: 'Usually yes — most are 100–240V compatible.',
      adapterOnly: 'Yes',
      note: 'Most electric razors and toothbrush chargers work fine with just an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Macao?',
      answer:
        'It depends on your origin. UK travelers don\'t need anything — Macao uses identical Type G plugs. Travelers from the US, Australia, Europe, and mainland China need plug adapters because Macao uses British-style three-pin rectangular sockets.',
    },
    {
      question: 'What type of electrical outlets does Macao use?',
      answer:
        'Macao uses Type G plugs (British standard) at 220V/50Hz. These are three-pin rectangular plugs identical to those used in the UK and Hong Kong.',
    },
    {
      question: 'Will my mainland Chinese electronics work in Macao?',
      answer:
        'They need an adapter. Despite being part of China, Macao uses Type G (British) plugs while mainland China uses Types A, C, and I. Voltage is compatible at 220V.',
    },
    {
      question: 'Do Macao hotels provide power adapters?',
      answer:
        'Yes! Macao\'s tourism-focused hotels are excellent for international travelers. Even budget properties typically provide universal adapters, and luxury casino resorts feature world-class charging facilities.',
    },
    {
      question: 'Are Macao and Hong Kong electrical systems the same?',
      answer:
        'Yes, exactly the same. Both use Type G (British) plugs at 220V/50Hz. If your devices work in Hong Kong, they\'ll work in Macao without any adapter.',
    },
    {
      question: 'Where can I buy an adapter in Macao?',
      answer:
        'Electronics stores like Fortress and Broadway, convenience stores like 7-Eleven and Circle K, supermarkets, and the airport all sell adapters. The territory is well-equipped for international visitors.',
    },
    {
      question: 'Is electricity reliable in Macao?',
      answer:
        'Extremely reliable. Macao\'s small size and focus on tourism and gaming means it has excellent electrical infrastructure with backup systems for critical facilities like casinos and hotels.',
    },
  ],
  metaTitle: 'Macao Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Macao uses Type G (British) plugs at 220V/50Hz. Learn if you need an adapter for Macau Peninsula, Cotai, Taipa, and travel throughout Macao SAR.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'Hong Kong', slug: 'hong-kong-electric-plug-types-they-use-type-g-british-plugs' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter' },
    { name: 'Singapore', slug: 'singapore-electric-plug-types-adapters-and-voltage' },
    { name: 'Malaysia', slug: 'malaysia-electric-plug-types-type-g-travel-adapters' },
  ],
};

export default macao;