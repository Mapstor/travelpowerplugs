import type { CountryPlugData } from '@/types';

const gibraltar: CountryPlugData = {
  slug: 'gibraltar-electric-plug-types',
  name: 'Gibraltar',
  demonym: 'Gibraltarian',
  continent: 'Europe',
  region: 'Southern Europe',
  voltage: 230,
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
    'Gibraltar uses British-style Type G plugs exclusively, maintained from its colonial heritage despite being geographically connected to Spain.',
    'As a British Overseas Territory, Gibraltar follows UK electrical standards completely, making it convenient for British travelers.',
    'All plugs in Gibraltar are required to have built-in fuses (usually 13A, 5A, or 3A) for enhanced electrical safety.',
    'Gibraltar\'s compact size means the entire territory has uniform electrical standards - no regional variations like in larger countries.',
    'The famous Rock of Gibraltar attractions and cable car stations all use standard UK electrical fittings throughout.',
    'Hotels and businesses in Gibraltar often provide better electrical amenities than mainland Spain to cater to British visitors.',
  ],
  travelContext:
    'Gibraltar is a unique British territory at the southern tip of Spain, famous for the Rock of Gibraltar, its strategic location, and duty-free shopping. Popular with British tourists and Spanish day-trippers, Gibraltar combines British culture with Mediterranean charm. The territory uses identical electrical systems to the UK, making it especially convenient for British visitors.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs don\'t fit Gibraltar\'s three-pin rectangular Type G sockets. You need a US-to-UK adapter. Gibraltar uses 230V, which works with most modern US electronics (check for "100-240V" on your devices).',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Perfect compatibility! UK plugs fit directly into Gibraltar sockets - it\'s exactly the same system. No adapter needed whatsoever.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins incompatible with Gibraltar\'s rectangular Type G sockets. Use an AU-to-UK adapter. Voltage is compatible (both around 230-240V).',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs don\'t fit Gibraltar\'s Type G sockets. You need a Europe-to-UK adapter. Voltage is compatible (both around 220-240V) so no converter needed.',
    },
    {
      origin: 'Spain',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Spanish plugs don\'t work in Gibraltar despite being geographically connected. You need a Europe-to-UK adapter to use Spanish devices in Gibraltar.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Main Street Electronics',
      type: 'electronics',
      city: 'Gibraltar',
      priceRange: '£3-12',
      note: 'Various electronics stores along Main Street sell UK-compatible adapters and universal models.',
    },
    {
      name: 'Morrisons',
      type: 'supermarket',
      city: 'Gibraltar',
      priceRange: '£2-8',
      note: 'Large UK supermarket with electrical goods section. Familiar shopping experience for UK visitors.',
    },
    {
      name: 'Eroski',
      type: 'supermarket',
      city: 'Gibraltar',
      priceRange: '£3-10',
      note: 'Spanish supermarket chain that carries basic travel adapters alongside groceries.',
    },
    {
      name: 'Gibraltar Airport (GIB)',
      type: 'airport',
      city: 'Gibraltar',
      priceRange: '£8-20',
      note: 'Small airport but duty-free and travel shops sell universal adapters. Limited selection compared to major airports.',
    },
    {
      name: 'Tourist shops',
      type: 'souvenir',
      city: 'Gibraltar',
      priceRange: '£4-15',
      note: 'Shops near the cable car and Rock attractions often stock travel adapters alongside souvenirs.',
    },
  ],
  airportName: 'Gibraltar Airport',
  airportCode: 'GIB',
  neighbors: [
    {
      name: 'Spain',
      slug: 'spain-electric-plug-types-do-you-need-an-adapter-in-spain',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Gibraltar uses Type G while Spain uses Types C and F. You need an adapter when crossing the border at La Línea.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Gibraltar\'s hotels cater heavily to British visitors and maintain UK electrical standards throughout. Most hotels provide universal adapters or rooms with additional outlet types for international guests. Even budget accommodations typically offer adapter lending services. Hair dryers are standard in all hotel categories.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Gibraltar\'s 230V is perfect for modern phone chargers.',
    },
    {
      device: 'Laptop charger',
      dualVoltage: 'Yes — virtually all laptop power adapters are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter. Gibraltar has very reliable power infrastructure given its small size.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Check carefully — many US models are 120V only.',
      adapterOnly: 'No — you may need a converter for 120V-only devices.',
      note: 'US hair dryers rated for 120V only won\'t work safely with Gibraltar\'s 230V. Check for dual voltage or use the hotel\'s dryer.',
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
      question: 'Do I need a power adapter for Gibraltar?',
      answer:
        'It depends on your origin. UK travelers don\'t need anything — Gibraltar uses identical Type G plugs. Travelers from the US, Europe, Australia, and Spain need UK-compatible adapters because Gibraltar uses British electrical standards.',
    },
    {
      question: 'What type of electrical outlets does Gibraltar use?',
      answer:
        'Gibraltar uses Type G plugs (British standard) at 230V/50Hz. These are three-pin rectangular plugs identical to those used throughout the UK.',
    },
    {
      question: 'Will my Spanish devices work in Gibraltar?',
      answer:
        'No, Spanish Type C and F plugs don\'t fit Gibraltar\'s Type G sockets despite the geographical connection. You need a Europe-to-UK adapter.',
    },
    {
      question: 'Do Gibraltar hotels provide power adapters?',
      answer:
        'Yes, most Gibraltar hotels provide universal adapters, especially since they cater heavily to international visitors. Many properties offer adapter lending services at the front desk.',
    },
    {
      question: 'Are Gibraltar and UK electrical systems the same?',
      answer:
        'Yes, exactly the same. Gibraltar uses Type G plugs at 230V/50Hz with fused plugs, identical to the UK system. UK devices work without any adapter.',
    },
    {
      question: 'Where can I buy an adapter in Gibraltar?',
      answer:
        'Electronics stores on Main Street, supermarkets like Morrisons and Eroski, Gibraltar Airport, and tourist shops all sell adapters. Availability is good given the territory\'s focus on tourism.',
    },
    {
      question: 'Is electricity reliable in Gibraltar?',
      answer:
        'Very reliable. Gibraltar\'s small size and modern infrastructure mean consistent power supply. The territory has invested in robust electrical systems to support both residents and tourism.',
    },
  ],
  metaTitle: 'Gibraltar Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Gibraltar uses UK Type G plugs at 230V/50Hz. Find out if you need an adapter for the Rock of Gibraltar, Main Street, and travel throughout Gibraltar.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Spain', slug: 'spain-electric-plug-types-do-you-need-an-adapter-in-spain' },
    { name: 'Portugal', slug: 'portugal-electric-plug-types' },
    { name: 'Morocco', slug: 'morocco-electric-plug-types' },
    { name: 'Malta', slug: 'malta-electric-plug-types' },
  ],
};

export default gibraltar;