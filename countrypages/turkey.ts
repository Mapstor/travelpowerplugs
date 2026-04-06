import type { CountryPlugData } from '../types';

const turkey: CountryPlugData = {
  slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
  name: 'Turkey',
  demonym: 'Turkish',
  continent: 'Asia',
  region: 'Western Asia / Southeastern Europe',
  voltage: 230,
  frequency: 50,
  complexityTier: 'complex',
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
    'Turkey uses the same Type C/F system found across continental Europe, but outlet quality in older buildings can be noticeably lower — loose sockets and ungrounded wiring are more common in rural areas and Eastern Turkey.',
    'Istanbul\'s historic districts like Sultanahmet and Beyoğlu have a patchwork of old and renovated wiring, so the outlet you encounter can vary from room to room in the same building.',
    'Many Turkish hotels keep a small supply of adapters at reception — it\'s always worth asking before buying one.',
    'Power strips with built-in surge protection are a smart idea for older accommodations, where voltage spikes during grid fluctuations are possible.',
    'In resort areas along the Mediterranean and Aegean coasts (Antalya, Bodrum, Fethiye), electrical infrastructure is generally modern and well-maintained.',
  ],
  travelContext:
    'Turkey spans two continents and welcomes tens of millions of visitors per year. Most tourists concentrate in Istanbul, Cappadocia, and the Aegean/Mediterranean coast, where hotel infrastructure is modern. Venturing into Eastern Turkey or staying in historic-district guesthouses means older electrical systems — plan accordingly.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Your flat-pin Type A/B plugs will not fit Turkish Type C/F outlets. You need an adapter. Most modern US electronics (phones, laptops, cameras) are dual-voltage (100–240V), so no converter is required — just an adapter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'The UK\'s large rectangular-pin Type G plug does not fit Turkish sockets. Bring an adapter. Voltage is the same 230V, so no converter needed for any UK device.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'If you\'re coming from Germany, France, Spain, or most of continental Europe, your plugs will fit directly into Turkish outlets. No adapter or converter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australia\'s angled flat-pin Type I plug won\'t fit Turkish sockets. You\'ll need an adapter. Voltage is compatible (230V in both countries).',
    },
    {
      origin: 'Japan',
      originPlugTypes: 'A',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Japan uses Type A plugs at 100V. You\'ll need an adapter, and some older Japanese appliances may need a converter since Turkey runs at 230V. Check your device labels — modern electronics are usually dual-voltage.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Teknosa',
      type: 'electronics',
      note: 'Major electronics chain with locations in most Turkish cities and shopping malls. Carries travel adapters and power strips.',
    },
    {
      name: 'MediaMarkt Turkey',
      type: 'electronics',
      note: 'Large electronics retailer found in major malls across Istanbul, Ankara, and Izmir.',
    },
    {
      name: 'Vatan Bilgisayar',
      type: 'electronics',
      note: 'Popular Turkish electronics chain with competitive prices on adapters and accessories.',
    },
    {
      name: 'BİM / A101',
      type: 'convenience',
      note: 'Ubiquitous discount chains found on virtually every street — they occasionally stock basic adapters and power strips at very low prices.',
    },
    {
      name: 'Istanbul Airport (IST) shops',
      type: 'airport',
      city: 'Istanbul',
      priceRange: '€8–20',
      note: 'Electronics kiosks in the arrivals and departures halls sell universal adapters at airport-markup prices.',
    },
    {
      name: 'Antalya Airport (AYT) shops',
      type: 'airport',
      city: 'Antalya',
      priceRange: '€8–20',
      note: 'The main resort gateway has adapter availability in terminal shops.',
    },
  ],
  airportName: 'Istanbul Airport / Antalya Airport',
  airportCode: 'IST / AYT',
  neighbors: [
    {
      name: 'Greece',
      slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Greece uses the same Type C/F system — no adapter needed when crossing the border.',
    },
    {
      name: 'Bulgaria',
      slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Bulgaria also uses Type C/F at 230V — fully compatible.',
    },
    {
      name: 'Georgia',
      slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Georgia uses the same plug types and voltage — no adapter needed.',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Iran uses Type C/F at 230V — same as Turkey.',
    },
    {
      name: 'Iraq',
      slug: 'iraq-electric-plug-types-will-you-need-an-adapter-traveling-to-iraq',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Iraq uses a mix of plug types including Type G (British). Your Type C plug may work, but bring a universal adapter.',
    },
    {
      name: 'Syria',
      slug: 'syria-electric-plug-types-which-adapter-will-you-need-in-syria',
      plugTypes: ['C', 'E', 'L'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Syria has a mix of outlet types. Type C will fit, but grounded plugs may need an adapter.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Mid-range and upscale hotels in Istanbul, Antalya, and Cappadocia typically offer adapters at reception and often have USB ports built into bedside tables. Budget pensions and guesthouses in historic neighborhoods may have only basic two-pin outlets. Safari-style cave hotels in Cappadocia vary — ask ahead.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone',
      dualVoltage: 'Yes — all modern phone chargers are 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. USB charging via hotel-provided ports is increasingly common in Turkish hotels.',
    },
    {
      device: 'Laptop',
      dualVoltage: 'Yes — virtually all laptop power bricks support 100–240V.',
      adapterOnly: 'Yes',
      note: 'Check the fine print on your power brick to confirm, but you almost certainly just need an adapter.',
    },
    {
      device: 'Hair dryer / Straightener',
      dualVoltage: 'Often not — many North American hair dryers are 120V only.',
      adapterOnly: 'No — you likely need a converter OR a dual-voltage model.',
      note: 'Plugging a 120V hair dryer into a 230V Turkish outlet will burn it out. Most Turkish hotels provide hair dryers.',
    },
    {
      device: 'Electric shaver',
      dualVoltage: 'Usually yes — most modern shavers are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Some Turkish hotel bathrooms have a low-wattage shaver outlet that accepts Type C plugs.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Turkey?',
      answer:
        'If you\'re traveling from the US, UK, Australia, or any country that doesn\'t use Type C or F plugs, yes — you need an adapter. Visitors from most of continental Europe can plug in directly.',
    },
    {
      question: 'What type of plug does Turkey use?',
      answer:
        'Turkey uses Type C (Europlug, 2 round pins) and Type F (Schuko, 2 round pins with grounding clips). These are the same plugs used in Germany, France, Spain, and most of Europe.',
    },
    {
      question: 'Can I charge my iPhone or Android phone in Turkey?',
      answer:
        'Yes. All modern smartphone chargers are dual-voltage (100–240V). You just need a plug adapter to physically fit the outlet — no voltage converter required.',
    },
    {
      question: 'Should I buy an adapter before I go or in Turkey?',
      answer:
        'Buying before your trip is safer — you\'ll want to charge your phone immediately upon arrival. That said, adapters are widely available at Istanbul and Antalya airports, at Teknosa or MediaMarkt stores, and even at many hotel reception desks.',
    },
    {
      question: 'Is the power supply reliable in Turkey?',
      answer:
        'In major cities and tourist areas, yes. Istanbul, Ankara, Antalya, and the Aegean coast have reliable power. In rural Eastern Turkey, brief outages are more common — a portable power bank is a good precaution.',
    },
    {
      question: 'Will my hair dryer work in Turkey?',
      answer:
        'Only if it\'s dual-voltage (120/240V) — check the label. Most North American hair dryers are 120V only and will overheat or burn out on Turkey\'s 230V supply. Most mid-range Turkish hotels provide hair dryers in the room.',
    },
    {
      question: 'Are the outlets in old Istanbul hotels safe?',
      answer:
        'Hotels in Sultanahmet and Beyoğlu vary. Renovated properties are fine, but some older guesthouses may have loose sockets or ungrounded wiring. A power strip with surge protection adds peace of mind.',
    },
    {
      question: 'Can I use the same adapter in Turkey and Greece?',
      answer:
        'Yes — both countries use Type C and Type F plugs at 230V/50Hz. One adapter covers both destinations.',
    },
  ],
  metaTitle: 'Turkey Power Plugs — Do You Need an Adapter for Turkey? (Type C & F)',
  metaDescription:
    'Turkey uses Type C and Type F plugs at 230V/50Hz. Find out if you need an adapter, where to buy one in Istanbul or Antalya, and what to expect in Turkish hotels.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Greece', slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
    { name: 'Bulgaria', slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Georgia', slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi' },
  ],
};

export default turkey;
