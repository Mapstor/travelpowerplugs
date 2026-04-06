import type { CountryPlugData } from '@/types';

const hongKong: CountryPlugData = {
  slug: 'hong-kong-electric-plug-types-they-use-type-g-british-plugs',
  name: 'Hong Kong',
  demonym: 'Hong Kong',
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
    'Hong Kong uses British-style Type G plugs, a legacy of its colonial history, making it unique among Chinese territories.',
    'Unlike mainland China which uses multiple plug types, Hong Kong exclusively uses Type G sockets with built-in fuses for safety.',
    'Many Hong Kong hotels and business centers provide multi-socket power strips that accept various international plug types alongside the standard Type G.',
    'The territory\'s compact living spaces have led to innovative vertical power strip designs and retractable cable solutions in hotels and apartments.',
    'Hong Kong\'s humid subtropical climate means electrical installations include extra moisture protection, especially in older buildings.',
    'Despite being part of China, Hong Kong maintains its separate electrical standard and doesn\'t use mainland China\'s Type A, C, or I plugs in standard installations.',
  ],
  travelContext:
    'Hong Kong is one of Asia\'s most visited destinations, seamlessly blending Eastern and Western cultures with incredible food, shopping, and skyline views. As a former British colony, it retains the British electrical system, making it familiar for UK travelers but requiring adapters for most other visitors. The city\'s modern infrastructure means reliable power throughout Central, Kowloon, and the New Territories.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs don\'t fit Hong Kong\'s three-pin rectangular Type G sockets. You need a US-to-UK adapter. Good news: Hong Kong uses 220V which is compatible with most modern US electronics (check for "100-240V" on your device).',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Perfect! UK Type G plugs fit directly into Hong Kong sockets — it\'s the exact same system. Voltage is nearly identical (UK: 230V, HK: 220V) so all your devices work without any adapter.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins that don\'t fit Hong Kong\'s rectangular Type G sockets. Use an AU-to-UK adapter. Voltage is compatible (both ~220-240V).',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs don\'t fit Hong Kong\'s Type G sockets. You need a Europe-to-UK adapter. Voltage is compatible so no converter needed.',
    },
    {
      origin: 'Mainland China',
      originPlugTypes: 'A, C, I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Despite being part of China, Hong Kong uses different plugs. Mainland Chinese Type A, C, and I plugs don\'t fit Hong Kong\'s Type G sockets. You need an adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Fortress',
      type: 'electronics',
      priceRange: 'HK$30-100',
      note: 'Hong Kong\'s largest electronics retailer with stores throughout the territory. Excellent selection of travel adapters and international converters.',
    },
    {
      name: 'Broadway',
      type: 'electronics',
      priceRange: 'HK$25-80',
      note: 'Popular electronics chain with locations in major shopping areas. Good variety of adapters and charging accessories.',
    },
    {
      name: '7-Eleven',
      type: 'convenience',
      priceRange: 'HK$20-50',
      note: 'Ubiquitous convenience stores throughout Hong Kong. Most locations carry basic universal adapters near phone accessories.',
    },
    {
      name: 'Circle K',
      type: 'convenience',
      priceRange: 'HK$20-60',
      note: 'Another widespread convenience store chain. Limited selection but convenient for basic adapters.',
    },
    {
      name: 'Hong Kong International Airport (HKG)',
      type: 'airport',
      city: 'Hong Kong',
      priceRange: 'HK$50-150',
      note: 'Electronics shops and duty-free stores throughout the airport sell adapters. Available before and after security in all terminals.',
    },
    {
      name: 'PARKnSHOP / Wellcome',
      type: 'supermarket',
      priceRange: 'HK$25-70',
      note: 'Major supermarket chains that carry basic travel adapters in their household goods sections.',
    },
  ],
  airportName: 'Hong Kong International Airport',
  airportCode: 'HKG',
  neighbors: [
    {
      name: 'Mainland China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Despite being part of China, Hong Kong uses Type G while mainland China uses Types A, C, and I. You need an adapter when traveling between them.',
    },
    {
      name: 'Macao',
      slug: 'macau-electric-plug-types',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'Macao uses the same British Type G plugs as Hong Kong. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'always',
  hotelUSBPorts: 'always',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Hong Kong hotels are exceptionally well-equipped for international travelers. Even budget properties typically provide universal adapters, multiple outlet types, and USB charging ports. Higher-end hotels feature built-in USB-C ports, wireless charging pads, and outlets that accept multiple international plug types. Hair dryers are standard in virtually all accommodations.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Hong Kong\'s 220V is perfect for phone chargers.',
    },
    {
      device: 'Laptop charger',
      dualVoltage: 'Yes — virtually all laptop power adapters are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter. Hong Kong\'s stable power grid and 220V work perfectly with laptops.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Check carefully — many US models are 120V only.',
      adapterOnly: 'No — you may need a converter for 120V-only devices.',
      note: 'US hair dryers rated for 120V only won\'t work safely with Hong Kong\'s 220V. Check for dual voltage or use the hotel\'s dryer.',
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
      question: 'Do I need a power adapter for Hong Kong?',
      answer:
        'It depends where you\'re from. UK travelers don\'t need anything — Hong Kong uses the same Type G plugs. Travelers from the US, Australia, Europe, and mainland China need plug adapters because Hong Kong uses British-style three-pin rectangular plugs.',
    },
    {
      question: 'What type of plugs does Hong Kong use?',
      answer:
        'Hong Kong uses Type G plugs (British standard) at 220V/50Hz. These are three-pin rectangular plugs with a larger earth pin and two smaller live/neutral pins. It\'s the same system as the UK.',
    },
    {
      question: 'Will my US electronics work in Hong Kong?',
      answer:
        'Yes, with a plug adapter. Most modern US electronics are dual-voltage (100-240V) and work fine with Hong Kong\'s 220V power. Just check your device labels to confirm dual voltage compatibility.',
    },
    {
      question: 'Do Hong Kong hotels provide power adapters?',
      answer:
        'Yes! Hong Kong hotels are among the world\'s best for international travelers. Even budget hotels typically provide universal adapters, and most have multiple outlet types and USB charging ports built into rooms.',
    },
    {
      question: 'Is Hong Kong\'s electrical system the same as mainland China?',
      answer:
        'No. Hong Kong uses British Type G plugs while mainland China uses Types A, C, and I. You need an adapter when traveling between Hong Kong and mainland China, even though both use similar voltages.',
    },
    {
      question: 'Where can I buy an adapter in Hong Kong?',
      answer:
        'Everywhere! Electronics stores like Fortress and Broadway, convenience stores like 7-Eleven and Circle K, supermarkets, and the airport all sell adapters. Hong Kong is very tourist-friendly for this.',
    },
    {
      question: 'Are Hong Kong\'s plugs the same as the UK?',
      answer:
        'Yes, exactly the same. Hong Kong uses Type G plugs identical to the UK. If you have UK devices, they plug right in without any adapter needed.',
    },
  ],
  metaTitle: 'Hong Kong Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Hong Kong uses Type G (British) plugs at 220V/50Hz. Find out if you need an adapter for Central, Kowloon, New Territories, and travel throughout Hong Kong.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Macao', slug: 'macau-electric-plug-types' },
    { name: 'Singapore', slug: 'singapore-electric-plug-types-adapters-and-voltage' },
    { name: 'Malaysia', slug: 'malaysia-electric-plug-types-type-g-travel-adapters' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter' },
  ],
};

export default hongKong;