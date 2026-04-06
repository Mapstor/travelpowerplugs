import type { CountryPlugData } from '@/types';

const poland: CountryPlugData = {
  slug: 'poland-electric-plug-types',
  name: 'Poland',
  demonym: 'Polish',
  continent: 'Europe',
  region: 'Central Europe',
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
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
    'Poland uses the French Type E grounding system where the grounding pin protrudes from the socket rather than the plug — unusual for Central Europe.',
    'Many Polish buildings constructed during the communist era (1945–1989) still have older non-grounded outlets, though most have been upgraded to modern Type E standards.',
    'Polish Type E sockets are cross-compatible with German Schuko (Type F) plugs, making travel between Germany and Poland seamless for electrical devices.',
    'Poland\'s electrical grid was completely modernized after 1989, transforming from an unreliable Soviet-era system to one of Europe\'s most stable networks.',
    'Many Polish hotels now feature combo Type E/F sockets that accept both French Type E and German Schuko plugs, reflecting the country\'s position between Western European electrical standards.',
  ],
  travelContext:
    'Poland draws millions of visitors to explore medieval Krakow, vibrant Warsaw, and historic Gdansk. The country\'s electrical infrastructure has been thoroughly modernized and is highly reliable. European travelers using Type C, E, or F plugs will find their devices work without any adapter. Visitors from the US, UK, or Australia will need a plug adapter but generally not a voltage converter for modern electronics.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit Polish round-pin outlets. You\'ll need a US-to-Europe adapter. Most modern electronics (phones, laptops, cameras) are dual-voltage (100–240V) and only need the adapter. Check older appliances — they may require a voltage converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are too large for Polish sockets. Bring a UK-to-Europe adapter. Both countries use 230V/50Hz, so no voltage converter is needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs with angled flat pins don\'t fit Polish outlets. You need an AU-to-Europe adapter. Voltage is identical (230V/50Hz) so all devices work with just the adapter.',
    },
    {
      origin: 'Germany (Type F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'German Schuko (Type F) plugs are cross-compatible with Polish Type E sockets. No adapter needed — your German devices will work directly.',
    },
    {
      origin: 'France (Type E)',
      originPlugTypes: 'C, E',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'French Type E plugs fit directly into Polish outlets since both countries use the same grounding system. No adapter needed.',
    },
    {
      origin: 'Europe (Type C)',
      originPlugTypes: 'C',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'The standard European Europlug (Type C) fits directly into Polish outlets. No adapter needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Media Markt',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'German electronics chain with multiple locations in Warsaw, Krakow, and other major Polish cities. Good selection of travel adapters.',
    },
    {
      name: 'RTV Euro AGD',
      type: 'electronics',
      priceRange: '€5–€15',
      note: 'Polish electronics retailer with stores nationwide. Carries universal travel adapters and multi-plugs.',
    },
    {
      name: 'Neonet',
      type: 'electronics',
      priceRange: '€5–€12',
      note: 'Polish electronics chain found in shopping centers. Basic to universal travel adapters available.',
    },
    {
      name: 'Tesco',
      type: 'supermarket',
      priceRange: '€4–€10',
      note: 'British supermarket chain with locations throughout Poland. Electronics sections carry basic travel adapters.',
    },
    {
      name: 'Carrefour',
      type: 'supermarket',
      priceRange: '€4–€12',
      note: 'French hypermarket chain with Polish locations. Larger stores have electronics sections with travel adapters.',
    },
    {
      name: 'Warsaw Chopin Airport (WAW) shops',
      type: 'airport',
      city: 'Warsaw',
      priceRange: '€10–€25',
      note: 'Electronics kiosks and convenience stores in both terminals sell travel adapters at airport prices.',
    },
    {
      name: 'Krakow Airport (KRK) shops',
      type: 'airport',
      city: 'Krakow',
      priceRange: '€10–€20',
      note: 'Smaller selection than Warsaw but travel adapters available at electronics shops.',
    },
  ],
  airportName: 'Warsaw Chopin Airport',
  airportCode: 'WAW',
  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'German Schuko (Type F) and Polish Type E are cross-compatible. No adapter needed.',
    },
    {
      name: 'Czech Republic',
      slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Czech Republic uses the same Type C/E system as Poland. No adapter needed.',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Slovakia uses identical plugs and voltage. No adapter needed.',
    },
    {
      name: 'Lithuania',
      slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Lithuanian Type F (Schuko) is compatible with Polish Type E. No adapter needed.',
    },
    {
      name: 'Belarus',
      slug: 'belarus-electric-plug-types-will-you-need-an-adapter-in-minsk',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Belarusian Schuko plugs work with Polish Type E sockets. No adapter needed.',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine-electric-plug-types-will-you-need-an-adapter-in-kyiv',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Ukrainian Type F plugs are compatible with Polish Type E sockets. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Polish hotels have rapidly modernized and now commonly provide hair dryers and increasingly feature USB charging ports built into rooms. International chain hotels in Warsaw and Krakow often keep adapters available at reception. Boutique hotels in historic city centers and mountain resorts in the Tatras are usually well-equipped. Budget accommodations and older communist-era buildings may have fewer outlets, so a compact power strip can be useful.',
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
      note: 'Use an adapter or buy a local power cable with a Type E plug.',
    },
    {
      device: 'Hair dryer / Flat iron',
      dualVoltage: 'Rarely — most US models are 120V only.',
      adapterOnly: 'No — you likely need a converter or dual-voltage model.',
      note: 'Check your label. If it says 120V only, don\'t plug it into a 230V Polish outlet. Polish hotels reliably provide hair dryers.',
    },
    {
      device: 'Electric razor / Toothbrush charger',
      dualVoltage: 'Usually yes — most are rated 100–240V.',
      adapterOnly: 'Yes',
      note: 'Verify on the label. Most modern electric razors and toothbrush chargers handle 230V fine.',
    },
    {
      device: 'Camera equipment',
      dualVoltage: 'Yes — virtually all camera chargers and equipment are dual-voltage.',
      adapterOnly: 'Yes',
      note: 'Perfect for photographing Krakow\'s medieval architecture and Warsaw\'s modern skyline.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Poland?',
      answer:
        'It depends on your home country. Travelers from the US, UK, Australia, and many Asian countries need a plug adapter since Poland uses round-pin Type C and Type E sockets. European visitors from countries using compatible plug types won\'t need any adapter.',
    },
    {
      question: 'What plug types does Poland use?',
      answer:
        'Poland uses Type C (Europlug) for low-power devices and Type E (French-style) for grounded appliances. Type E features a grounding pin that protrudes from the socket rather than the plug. Both operate at 230V/50Hz.',
    },
    {
      question: 'Will my German Schuko plugs work in Poland?',
      answer:
        'Yes. German Type F (Schuko) plugs are designed to be cross-compatible with Polish Type E sockets. The Schuko\'s side grounding clips make contact with the Polish socket\'s protruding ground pin. No adapter needed.',
    },
    {
      question: 'Will my US phone charger work in Poland?',
      answer:
        'Yes, with a plug adapter. All modern smartphone chargers (Apple, Samsung, Google, etc.) support 100–240V input, making them compatible with Poland\'s 230V supply. You just need an adapter to fit the round-pin socket.',
    },
    {
      question: 'Do I need different adapters for Warsaw, Krakow, and Gdansk?',
      answer:
        'No. All of Poland uses the same Type C/E plug system at 230V/50Hz. Whether you\'re in Warsaw\'s business district, Krakow\'s Old Town, or Gdansk\'s historic center, the outlets are identical.',
    },
    {
      question: 'Do Polish hotels provide power adapters?',
      answer:
        'Some do, particularly international chain hotels and higher-end properties in Warsaw and Krakow. They may have adapters available at reception on a loaner basis. However, it\'s not guaranteed, so bringing your own is recommended.',
    },
    {
      question: 'Can I use the same adapter for Poland and neighboring countries?',
      answer:
        'Yes. Poland, Czech Republic, and Slovakia all use the Type E system. Polish outlets also accept German Type F plugs, so one European adapter works throughout Central Europe.',
    },
    {
      question: 'Are there any electrical differences between old and new Polish buildings?',
      answer:
        'Modern buildings use standard Type C/E outlets throughout. Some older communist-era buildings may have fewer outlets or occasional non-grounded sockets, but the plug types remain the same.',
    },
    {
      question: 'Where can I buy an adapter in Warsaw?',
      answer:
        'Media Markt, RTV Euro AGD, or Neonet electronics stores throughout the city. Larger Tesco and Carrefour hypermarkets also carry travel adapters. Warsaw Chopin Airport has electronics shops, though at higher prices.',
    },
  ],
  metaTitle: 'Poland Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Poland uses Type C and Type E plugs at 230V/50Hz. Find out if you need an adapter for Warsaw, Krakow, Gdansk, and beyond, plus where to buy one.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Czech Republic', slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Slovakia', slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Lithuania', slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2' },
  ],
};

export default poland;