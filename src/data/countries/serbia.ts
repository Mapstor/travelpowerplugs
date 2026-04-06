import type { CountryPlugData } from '@/types';

const serbia: CountryPlugData = {
  slug: 'serbia-electric-plug-types',
  name: 'Serbia',
  demonym: 'Serbian',
  continent: 'Europe',
  region: 'Southern Europe',
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
    'Serbia modernized its electrical infrastructure significantly after 2000, transitioning from various Yugoslav-era plug types to the unified European standard.',
    'Many older buildings in Belgrade\'s city center still have a mix of outlet types, though all new construction uses the Type C/F standard.',
    'Serbian hotels and restaurants often provide power strips with multiple outlet types to accommodate travelers from neighboring countries.',
    'The country\'s electrical grid has improved dramatically in recent years, with major cities experiencing very reliable power supply.',
    'Serbia\'s position at the crossroads of Central and Southeast Europe means electrical infrastructure varies slightly between regions, but Type C/F dominates nationwide.',
  ],
  travelContext:
    'Serbia has become one of the Balkans\' most exciting travel destinations, with Belgrade\'s vibrant nightlife, Novi Sad\'s cultural festivals, and the historic monasteries throughout the country. The electrical system follows European standards, making it easy for EU travelers. The country sits at the intersection of Central European, Balkan, and Ottoman influences, and this diversity is reflected in its mix of older and modern electrical installations.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit Serbian round-pin sockets. You need a US-to-Schuko adapter. Most modern electronics (phones, laptops, cameras) are dual-voltage and only need the adapter. Check hair dryers and styling tools — 120V-only devices need a voltage converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are much larger and rectangular, incompatible with Serbian sockets. Bring a UK-to-Schuko adapter. Voltage is the same (230V/50Hz) so no converter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins that don\'t fit Serbian round sockets. Use an AU-to-Schuko adapter. Voltage is identical (230V/50Hz) so all devices work with just the adapter.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'If you\'re from Germany, Austria, Hungary, Romania, or other countries using Type C/F, your plugs fit directly into Serbian outlets. No adapter needed.',
    },
    {
      origin: 'Neighboring Balkans',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Travelers from Croatia, Bosnia and Herzegovina, Montenegro, and North Macedonia will find perfect plug compatibility in Serbia.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Tehnomanija',
      type: 'electronics',
      city: 'Belgrade',
      priceRange: '500-1500 RSD',
      note: 'Serbia\'s largest electronics retailer with stores in all major cities. Good selection of travel adapters and international plugs.',
    },
    {
      name: 'Gigatron',
      type: 'electronics',
      priceRange: '400-1200 RSD',
      note: 'Popular electronics chain found in shopping malls throughout Serbia. Carries basic to premium travel adapters.',
    },
    {
      name: 'Tempo / Maxi',
      type: 'supermarket',
      priceRange: '300-800 RSD',
      note: 'Large supermarket chains that stock basic travel adapters in their electronics/household sections.',
    },
    {
      name: 'Belgrade Nikola Tesla Airport (BEG)',
      type: 'airport',
      city: 'Belgrade',
      priceRange: '800-2000 RSD',
      note: 'Electronics and souvenir shops in the departure area sell adapters at premium airport prices.',
    },
    {
      name: 'DIS stores',
      type: 'convenience',
      priceRange: '350-700 RSD',
      note: 'Convenience store chain with locations throughout Serbia. Limited selection but affordable basic adapters.',
    },
  ],
  airportName: 'Belgrade Nikola Tesla Airport',
  airportCode: 'BEG',
  neighbors: [
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Hungary uses the same Type C/F system as Serbia. No adapter needed.',
    },
    {
      name: 'Romania',
      slug: 'romania-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Romania uses identical plugs and voltage. Perfect compatibility.',
    },
    {
      name: 'Bulgaria',
      slug: 'bulgaria-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Bulgaria uses the same European standard. No adapter required.',
    },
    {
      name: 'Bosnia and Herzegovina',
      slug: 'bosnia-and-herzegovina-electric-plug-types-type-c-and-f-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Bosnia uses the same plug system as Serbia. No adapter needed.',
    },
    {
      name: 'Croatia',
      slug: 'croatia-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Croatia uses identical Type C/F plugs. No adapter needed.',
    },
    {
      name: 'Montenegro',
      slug: 'montenegro-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Montenegro uses the same electrical system as Serbia.',
    },
    {
      name: 'Kosovo',
      slug: 'kosovo-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Kosovo uses the same Type C/F standard as Serbia.',
    },
    {
      name: 'North Macedonia',
      slug: 'north-macedonia-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'North Macedonia uses identical plugs and voltage as Serbia.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Serbian hotels in Belgrade and other major cities increasingly cater to international travelers. Mid-range and upscale properties often have adapters available at reception, and many newer hotels feature USB charging ports. Budget accommodations and rural guesthouses rarely provide adapters, so bringing your own is recommended.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. No voltage converter required.',
    },
    {
      device: 'Laptop charger',
      dualVoltage: 'Yes — virtually all laptop power adapters are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter. Serbia\'s power grid is stable in major cities.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Rarely — most US hair dryers are 120V only.',
      adapterOnly: 'No — you need a converter or dual-voltage model.',
      note: 'Check the voltage rating. 120V-only devices will be damaged by Serbia\'s 230V power. Use the hotel\'s hair dryer or buy locally.',
    },
    {
      device: 'Electric razor / Toothbrush',
      dualVoltage: 'Usually yes — most are 100–240V compatible.',
      adapterOnly: 'Yes',
      note: 'Most modern electric razors and toothbrush chargers work with just an adapter.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Serbia?',
      answer:
        'It depends on where you\'re from. Travelers from the US, UK, Australia, and most non-European countries need a plug adapter because Serbia uses round-pin Type C and F sockets. Visitors from other European countries and neighboring Balkan states typically don\'t need anything.',
    },
    {
      question: 'What type of electrical outlets does Serbia use?',
      answer:
        'Serbia uses Type C (Europlug) and Type F (Schuko) plugs at 230V/50Hz, the same as most European countries. These are round-pin plugs — Type C has two pins, Type F has two pins with side grounding clips.',
    },
    {
      question: 'Will my US electronics work in Serbia?',
      answer:
        'Yes, with a plug adapter. Most modern US electronics (phones, laptops, tablets) are dual-voltage and work fine with Serbia\'s 230V power. Just check the device label — if it says "100-240V" you only need an adapter.',
    },
    {
      question: 'Are Serbian hotels helpful with power adapters?',
      answer:
        'Hotels in Belgrade, Novi Sad, and other major cities often have adapters available at the front desk, especially mid-range and upscale properties. However, availability isn\'t guaranteed, particularly at budget accommodations.',
    },
    {
      question: 'Where can I buy an adapter in Serbia?',
      answer:
        'Electronics stores like Tehnomanija and Gigatron have good selections. Large supermarkets like Tempo and Maxi carry basic adapters. Airport shops sell them too but at higher prices.',
    },
    {
      question: 'Do I need an adapter when traveling between Balkan countries?',
      answer:
        'Generally no. Serbia, Croatia, Bosnia and Herzegovina, Montenegro, and North Macedonia all use the same Type C/F plug system. Your devices will work throughout the region.',
    },
    {
      question: 'Is electricity reliable in Serbia?',
      answer:
        'Power reliability has improved significantly in major cities like Belgrade and Novi Sad. Rural areas may occasionally experience outages, but tourist areas generally have stable electricity.',
    },
  ],
  metaTitle: 'Serbia Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Serbia uses Type C and F (Schuko) plugs at 230V/50Hz. Find out if you need an adapter for Belgrade, Novi Sad, Niš, and travel throughout Serbia.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'Croatia', slug: 'croatia-electric-plug-types' },
    { name: 'Bosnia and Herzegovina', slug: 'bosnia-and-herzegovina-electric-plug-types-type-c-and-f-adapter' },
    { name: 'Montenegro', slug: 'montenegro-electric-plug-types' },
    { name: 'Hungary', slug: 'hungary-electric-plug-types' },
    { name: 'Romania', slug: 'romania-electric-plug-types' },
  ],
};

export default serbia;