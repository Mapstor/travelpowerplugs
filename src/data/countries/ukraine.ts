import type { CountryPlugData } from '@/types';

const ukraine: CountryPlugData = {
  slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need',
  name: 'Ukraine',
  demonym: 'Ukrainian',
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
    'Older Soviet-era apartments may have slightly different recessed outlets, but standard European plugs fit. Some buildings feature a mix of old and new outlet styles — Type C works in all of them.',
    'Power infrastructure has been affected by the ongoing conflict. Portable battery packs and power banks are strongly recommended for all travelers.',
  ],
  travelContext:
    'Ukraine uses the standard European plug system. Before the current conflict, Lviv, Kyiv, and Odesa were major tourist destinations. Travel conditions vary significantly by region and timing. Visitors should check current advisories. For those traveling to western Ukraine, Lviv is often accessible via Rzeszów, Poland — which uses compatible plugs.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs will not fit Ukrainian outlets. An adapter is required. Modern electronics handle 230V automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs need an adapter. Voltage matches at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work throughout Ukraine. Travelers from Poland, Romania, or other EU countries need no adapter.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is the same 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Foxtrot',
      type: 'electronics',
      city: 'Lviv',
      priceRange: '₴100–₴400',
      note: 'Major Ukrainian electronics chain with stores in most cities.',
    },
    {
      name: 'Comfy',
      type: 'electronics',
      city: 'Lviv',
      priceRange: '₴100–₴400',
      note: 'Electronics retailer with a wide network across Ukraine.',
    },
    {
      name: 'Rozetka pickup points',
      type: 'electronics',
      city: 'Lviv',
      priceRange: '₴80–₴500',
      note: 'Ukraine\'s largest online retailer with pickup points in most cities. Order online and collect within hours.',
    },
    {
      name: 'Silpo',
      type: 'supermarket',
      city: 'Lviv',
      priceRange: '₴60–₴200',
      note: 'Premium Ukrainian supermarket chain; some locations stock basic adapters and power banks.',
    },
  ],
  airportName: 'Lviv Danylo Halytskyi Airport',
  airportCode: 'LWO',
  neighbors: [
    {
      name: 'Poland',
      slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C works in both. Poland uses Type E while Ukraine uses Type F for grounding — hybrid E/F plugs handle both.',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C is universal. Slovakia uses Type E for grounded outlets.',
    },
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Romania',
      slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Moldova',
      slug: 'moldova-electric-plug-types-will-you-need-an-adapter-for-moldova',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Belarus',
      slug: 'belarus-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotel availability and conditions depend heavily on the region and the current situation. Lviv\'s hotels are modern and functional with standard European outlets. Older Soviet-era buildings may have recessed outlets of a slightly different style, but standard Type C plugs fit. A portable power bank is essential given the possibility of infrastructure disruptions.',
  faqs: [
    {
      question: 'Are Ukrainian outlets different from other European countries?',
      answer:
        'Standard Ukrainian outlets accept Types C and F, just like most of continental Europe. Older Soviet-era buildings may have slightly different recessed sockets, but modern European plugs fit them. Very old outlets with thinner pin holes are rare but can occasionally be found in unrenovated apartments.',
    },
    {
      question: 'Should I bring a power bank to Ukraine?',
      answer:
        'Yes, strongly recommended. Power infrastructure has been affected by the ongoing conflict, and outages can occur. A high-capacity power bank ensures you can keep essential devices charged.',
    },
    {
      question: 'I\'m entering Ukraine via Rzeszów, Poland — will my adapter work in both countries?',
      answer:
        'Type C plugs work in both Poland and Ukraine. If you have a Type F (Schuko) plug, it fits Ukrainian sockets directly. Polish Type E sockets also accept F plugs in practice.',
    },
    {
      question: 'Where can I buy electronics in Lviv?',
      answer:
        'Foxtrot and Comfy have physical stores in Lviv. Rozetka — Ukraine\'s biggest online marketplace — offers rapid pickup from self-service lockers throughout the city.',
    },
    {
      question: 'Is it safe to travel to Ukraine right now?',
      answer:
        'Travel conditions vary by region and change frequently. Always check the latest government travel advisories from your home country before planning a trip. Western cities like Lviv have been more accessible, but the situation is dynamic.',
    },
  ],
  metaTitle: 'Ukraine Power Plugs — Types C & F | Do You Need an Adapter?',
  metaDescription:
    'Ukraine uses Type C and Type F plugs at 230V/50Hz. US and UK travelers need an adapter. Bring a power bank due to infrastructure conditions.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Poland', slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland' },
    { name: 'Romania', slug: 'romania-electric-plug-types-will-you-need-an-adapter-in-romania' },
    { name: 'Moldova', slug: 'moldova-electric-plug-types-will-you-need-an-adapter-for-moldova' },
    { name: 'Slovakia', slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava' },
  ],
};

export default ukraine;
