import type { CountryPlugData } from '@/types';

const romania: CountryPlugData = {
  slug: 'romania-electric-plug-types',
  name: 'Romania',
  demonym: 'Romanian',
  continent: 'Europe',
  region: 'Eastern Europe',
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
    'Romania adopted the European standard after joining the EU in 2007, phasing out older Soviet-era outlets in favor of the safer Schuko system.',
    'Many older buildings in Bucharest and rural areas still have mixed outlet types, so travelers may encounter both Type C and Type F sockets in the same hotel room.',
    'Romanian electrical infrastructure was extensively modernized in the 2000s, making it one of the most reliable power grids in the Balkans.',
    'The medieval castles of Transylvania, including Bran Castle (Dracula\'s Castle), have been retrofitted with modern European outlets while preserving their historic character.',
  ],
  travelContext:
    'Romania has emerged as one of Europe\'s most fascinating travel destinations, combining medieval castles in Transylvania with vibrant cities like Bucharest and the stunning Carpathian Mountains. The country uses the standard European electrical system (Type C and F plugs at 230V/50Hz), making it easy for travelers from other EU countries. Visitors from the US, UK, or Australia will need plug adapters but not voltage converters for most modern electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit Romanian round-pin sockets. You need a US-to-Schuko adapter. Most modern electronics (phones, laptops) are dual-voltage and only need the adapter. Check hair dryers and other high-power appliances for voltage compatibility.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are much larger and incompatible with Romanian sockets. Bring a UK-to-Schuko adapter. Voltage is the same (230V) so no converter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins that don\'t fit Romanian sockets. Use an AU-to-Schuko adapter. Voltage is identical (230V/50Hz) so all devices work with just the adapter.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'If you\'re from Germany, Austria, Netherlands, Spain, or other countries using Type C/F, your plugs fit directly into Romanian outlets. No adapter needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'eMAG stores',
      type: 'electronics',
      city: 'Bucharest',
      priceRange: '25-50 RON',
      note: 'Romania\'s largest electronics retailer with stores in major cities. Good selection of travel adapters.',
    },
    {
      name: 'Altex',
      type: 'electronics',
      priceRange: '20-45 RON',
      note: 'Electronics chain found in shopping malls throughout Romania. Carries basic to premium adapters.',
    },
    {
      name: 'Mega Image',
      type: 'supermarket',
      priceRange: '15-30 RON',
      note: 'Convenience store chain that stocks basic travel adapters near electronics accessories.',
    },
    {
      name: 'Henri Coandă Airport (OTP) shops',
      type: 'airport',
      city: 'Bucharest',
      priceRange: '40-80 RON',
      note: 'Electronics and souvenir shops in the departure area sell adapters at airport prices. Available after security.',
    },
    {
      name: 'Kaufland',
      type: 'supermarket',
      priceRange: '20-35 RON',
      note: 'German hypermarket chain with electronics sections that carry travel adapters and universal plugs.',
    },
  ],
  airportName: 'Henri Coandă International Airport',
  airportCode: 'OTP',
  neighbors: [
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Hungary uses the same Type C/F system as Romania. No adapter needed when traveling between the two countries.',
    },
    {
      name: 'Serbia',
      slug: 'serbia-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Serbia uses identical Type C/F plugs and 230V power. Your Romanian devices work without any adapter.',
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
      name: 'Moldova',
      slug: 'moldova-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Moldova adopted the same European outlets as Romania. Perfect compatibility.',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Ukraine uses Type C/F plugs like Romania. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'common',
  accommodationNote:
    'Most Romanian hotels rated 3 stars and above provide hair dryers and increasingly feature USB ports in rooms. Mid-range and luxury hotels in Bucharest and major tourist areas often have adapters available at reception, but availability varies. Budget guesthouses and rural accommodations rarely provide adapters, so bring your own.',
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
      note: 'Just use an adapter. Consider buying a local power cable with Schuko plug for extended stays.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Rarely — most US hair dryers are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'Check the voltage label. 120V-only devices will burn out on 230V. Use the hotel\'s hair dryer or buy locally.',
    },
    {
      device: 'Electric razor / Toothbrush',
      dualVoltage: 'Usually yes — most are 100–240V compatible.',
      adapterOnly: 'Yes',
      note: 'Most modern electric razors and toothbrush chargers handle 230V. Check the label to confirm.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Romania?',
      answer:
        'It depends on where you\'re from. Travelers from the US, UK, Australia, and most non-European countries need a plug adapter because Romania uses round-pin Type C and F sockets. Visitors from other European countries using the same plug types won\'t need anything.',
    },
    {
      question: 'What plug types does Romania use?',
      answer:
        'Romania uses Type C (Europlug) and Type F (Schuko) plugs, the same as most European countries. These are the two-pin and two-pin-with-ground round plugs at 230V/50Hz.',
    },
    {
      question: 'Will my US electronics work in Romania?',
      answer:
        'Yes, with a plug adapter. Most modern US electronics (phones, laptops, cameras) are dual-voltage and work fine with Romania\'s 230V power. Just check the label — if it says "100-240V" you only need an adapter.',
    },
    {
      question: 'Are Romanian hotels helpful with power adapters?',
      answer:
        'Mid-range and upscale hotels in Bucharest, Brașov, and other tourist areas sometimes have adapters available at the front desk. However, availability isn\'t guaranteed, especially at budget properties, so it\'s best to bring your own.',
    },
    {
      question: 'Where can I buy an adapter in Romania?',
      answer:
        'Electronics stores like eMAG and Altex have good selections. Supermarkets like Kaufland and Mega Image carry basic adapters. Airport shops sell them too but at higher prices.',
    },
    {
      question: 'Do I need an adapter when traveling from Romania to other European countries?',
      answer:
        'Usually not. Romania uses the standard European plug system (Type C/F), so your devices will work in most EU countries without an adapter. Exceptions include the UK (Type G) and Switzerland (Type J).',
    },
  ],
  metaTitle: 'Romania Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Romania uses Type C and F (Schuko) plugs at 230V/50Hz. Learn if you need an adapter for Bucharest, Transylvania, and travel throughout Romania.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'Hungary', slug: 'hungary-electric-plug-types' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types' },
    { name: 'Bulgaria', slug: 'bulgaria-electric-plug-types' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Austria', slug: 'austria-electric-plug-types' },
  ],
};

export default romania;