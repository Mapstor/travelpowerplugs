import type { CountryPlugData } from '@/types';

const mauritius: CountryPlugData = {
  slug: 'mauritius-electric-plug-types',
  name: 'Mauritius',
  demonym: 'Mauritian',
  continent: 'Africa',
  region: 'Eastern Africa',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
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
    'Mauritius uses both Type C (European) and Type G (British) plugs, reflecting its diverse colonial heritage and modern international connections.',
    'Many hotels and resorts in Mauritius provide rooms with both Type C and Type G outlets, making it convenient for travelers from Europe and the UK.',
    'The island nation\'s electrical infrastructure was modernized significantly in the 1990s and 2000s, leading to this dual-standard system.',
    'Type G outlets are more common in commercial and hotel settings, while Type C is often found in residential areas and older buildings.',
    'Luxury resorts often feature universal outlets or provide complimentary adapter kits that work with both plug types.',
    'The island\'s tropical climate means electrical installations include extra protection against humidity and salt air corrosion.',
  ],
  travelContext:
    'Mauritius is a tropical paradise in the Indian Ocean, famous for its pristine beaches, luxury resorts, and diverse cultural heritage. The island welcomes visitors from around the world, particularly Europeans, and its electrical system reflects this international appeal with both European and British plug standards. The tourism-focused infrastructure means excellent electrical reliability in hotels and tourist areas.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs won\'t fit either of Mauritius\'s outlet types. You need a universal adapter or separate US-to-Europe and US-to-UK adapters. Good news: most modern US electronics handle 230V automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'UK Type G plugs fit directly into many Mauritian outlets, especially in hotels and resorts. You might not need an adapter at all, but having a universal one provides more flexibility.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs don\'t fit either Type C or Type G sockets. Bring an AU-to-UK or universal adapter. Voltage is compatible (both around 230V).',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: 'maybe',
      converterNeeded: false,
      notes:
        'European Type C plugs fit directly into many Mauritian Type C outlets. Type F (Schuko) plugs may need an adapter depending on the specific outlet. A universal adapter provides full compatibility.',
    },
    {
      origin: 'France',
      originPlugTypes: 'C, E',
      adapterNeeded: 'maybe',
      converterNeeded: false,
      notes:
        'French Type C plugs work in Mauritian Type C outlets. Type E plugs may need an adapter. Given the French cultural influence in Mauritius, many accommodations accommodate French plugs.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts Mauritius',
      type: 'electronics',
      city: 'Port Louis',
      priceRange: 'Rs 150-500',
      note: 'Major electronics retailer with multiple locations. Good selection of travel adapters and universal plugs.',
    },
    {
      name: 'Galaxy',
      type: 'electronics',
      priceRange: 'Rs 120-400',
      note: 'Electronics chain found in shopping centers. Carries various international adapters and charging accessories.',
    },
    {
      name: 'Shoprite',
      type: 'supermarket',
      priceRange: 'Rs 100-300',
      note: 'Large supermarket chain with household goods sections that stock basic travel adapters.',
    },
    {
      name: 'Super U',
      type: 'supermarket',
      priceRange: 'Rs 150-350',
      note: 'French supermarket chain popular in Mauritius. Electronics sections carry European-style adapters.',
    },
    {
      name: 'Sir Seewoosagur Ramgoolam Airport (MRU)',
      type: 'airport',
      city: 'Mauritius',
      priceRange: 'Rs 200-800',
      note: 'Electronics and souvenir shops in the departure area sell universal adapters at premium prices.',
    },
    {
      name: 'Hotel gift shops',
      type: 'hotel',
      priceRange: 'Rs 250-600',
      note: 'Many resort hotels sell adapters in their gift shops, though at higher prices than local stores.',
    },
  ],
  airportName: 'Sir Seewoosagur Ramgoolam International Airport',
  airportCode: 'MRU',
  neighbors: [
    {
      name: 'Reunion',
      slug: 'reunion-electric-plug-types',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Reunion uses Type C (compatible) and Type E. Your Type C devices work, but Type G devices may need an adapter.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Mauritius\'s resort-focused tourism industry means hotels are well-equipped for international guests. Most 4-star and 5-star resorts provide universal adapters or rooms with both Type C and Type G outlets. Many properties offer complimentary adapter kits at check-in. Budget accommodations may have limited adapter availability, so bringing your own is advisable.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Mauritius\'s 230V is perfect for modern phone chargers.',
    },
    {
      device: 'Laptop charger',
      dualVoltage: 'Yes — virtually all laptop power adapters are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter. Mauritius has reliable power infrastructure, especially in tourist areas.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Check carefully — many US models are 120V only.',
      adapterOnly: 'No — you may need a converter for 120V-only devices.',
      note: 'US hair dryers rated for 120V only won\'t work safely with Mauritius\'s 230V. Check for dual voltage or use the hotel\'s dryer.',
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
      question: 'Do I need a power adapter for Mauritius?',
      answer:
        'It depends on your origin and which outlets you encounter. Mauritius uses both Type C (European) and Type G (British) plugs. UK travelers may not need an adapter in many hotels, European travelers with Type C plugs may work in some outlets, but a universal adapter ensures compatibility everywhere.',
    },
    {
      question: 'What types of electrical outlets does Mauritius use?',
      answer:
        'Mauritius uses both Type C (two-pin European) and Type G (three-pin British) outlets at 230V/50Hz. Hotels often have both types, while different buildings may favor one type over the other.',
    },
    {
      question: 'Will my European devices work in Mauritius?',
      answer:
        'European Type C (Europlug) devices often work directly in Mauritian Type C outlets. However, Type F (Schuko) plugs may need an adapter. A universal adapter ensures you can use any outlet.',
    },
    {
      question: 'Do Mauritius hotels provide power adapters?',
      answer:
        'Many do, especially resort hotels that cater to international guests. Mid-range and luxury properties commonly provide universal adapters or rooms with multiple outlet types. Budget accommodations are less likely to have adapters available.',
    },
    {
      question: 'Which adapter should I bring to Mauritius?',
      answer:
        'A universal adapter is your best bet since Mauritius uses two different plug types. Alternatively, bring both a European (Type C) and UK (Type G) adapter to cover all outlets you might encounter.',
    },
    {
      question: 'Where can I buy an adapter in Mauritius?',
      answer:
        'Electronics stores like Courts and Galaxy, supermarkets like Shoprite and Super U, and the airport all sell adapters. Hotel gift shops also carry them, though at higher prices.',
    },
    {
      question: 'Is electricity reliable in Mauritius?',
      answer:
        'Yes, especially in tourist areas. Mauritius has invested heavily in electrical infrastructure to support its tourism industry. Hotels and resorts have very reliable power, often with backup generators.',
    },
  ],
  metaTitle: 'Mauritius Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Mauritius uses Type C and G plugs at 230V/50Hz. Find out if you need an adapter for Port Louis, Grand Baie, Flic en Flac, and travel throughout Mauritius.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Reunion', slug: 'reunion-electric-plug-types' },
    { name: 'South Africa', slug: 'south-africa-electric-plug-types' },
    { name: 'Seychelles', slug: 'seychelles-electric-plug-types' },
  ],
};

export default mauritius;