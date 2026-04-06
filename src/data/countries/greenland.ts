import type { CountryPlugData } from '@/types';

const greenland: CountryPlugData = {
  slug: 'greenland-electric-plug-types',
  name: 'Greenland',
  demonym: 'Greenlandic',
  continent: 'North America',
  region: 'Arctic',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-k',
      name: 'Type K',
      subtitle: 'Danish Standard',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 13,
      grounded: true,
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
      pinRadius: 0.063,
      bodyWidth: 1.18,
      bodyHeight: 0.72,
      bodyCornerRadius: 0.2,
      noseRadius: 0.42,
      recessRadius: 0.92,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Greenland uses Danish electrical standards with Type K being most common, reflecting its status as an autonomous territory of Denmark.',
    'The Arctic climate means electrical installations must be extremely robust to handle extreme cold, ice, and extended polar nights.',
    'Many buildings in Greenland have mixed plug types (C, E, F, K) due to equipment imported from various European countries.',
    'Power outages can occur in remote areas during severe Arctic weather, making backup power sources essential for travelers.',
    'Greenland\'s electrical infrastructure has been modernized with renewable energy, including hydroelectric and wind power projects.',
    'The midnight sun in summer means lighting demands vary dramatically between seasons, affecting electrical usage patterns.',
  ],
  travelContext:
    'Greenland is the world\'s largest island, known for its massive ice sheet, Inuit culture, and Arctic adventures. Visitors come for dog sledding, Northern Lights, hiking, and experiencing traditional Greenlandic life. The Danish electrical system makes it familiar for European travelers, while the harsh Arctic environment requires reliable electrical infrastructure.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs don\'t fit Greenland\'s round-pin sockets (Types C, F, K). You need a US-to-Europe or universal adapter. Greenland uses 230V, which works with most modern US electronics.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs don\'t fit Greenland\'s round-pin sockets. You need a UK-to-Europe adapter. Voltage is compatible (both around 230V).',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs have angled flat pins incompatible with Greenland\'s round-pin sockets. Use an AU-to-Europe adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: 'maybe',
      converterNeeded: false,
      notes:
        'European Type C and F plugs work in most Greenlandic outlets. However, Type K sockets may require a specific adapter. A universal adapter ensures compatibility everywhere.',
    },
    {
      origin: 'Denmark',
      originPlugTypes: 'C, E, F, K',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Danish plugs work perfectly in Greenland - it\'s the same electrical system. No adapter needed whatsoever.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Brugseni (Coop stores)',
      type: 'supermarket',
      city: 'Nuuk',
      priceRange: 'DKK 80-300',
      note: 'Main retail chain in Greenland. Limited but adequate selection of travel adapters and electrical goods.',
    },
    {
      name: 'Pisiffik',
      type: 'supermarket',
      city: 'Various',
      priceRange: 'DKK 100-250',
      note: 'Second major retail chain with stores in several settlements. Basic adapter selection.',
    },
    {
      name: 'Kangerlussuaq Airport',
      type: 'airport',
      city: 'Kangerlussuaq',
      priceRange: 'DKK 150-400',
      note: 'Main international airport. Very limited selection - better to buy adapters before arriving.',
    },
    {
      name: 'Tourist information centers',
      type: 'tourism',
      city: 'Nuuk, Ilulissat',
      priceRange: 'DKK 120-300',
      note: 'May have basic adapters available, but selection is extremely limited.',
    },
  ],
  airportName: 'Kangerlussuaq Airport',
  airportCode: 'SFJ',
  neighbors: [
    {
      name: 'Iceland',
      slug: 'iceland-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Iceland uses Types C and F which work in most Greenlandic outlets. Type K sockets in Greenland may need adapters.',
    },
    {
      name: 'Denmark',
      slug: 'denmark-electric-plug-types',
      plugTypes: ['C', 'E', 'F', 'K'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Denmark and Greenland use identical electrical systems. Perfect compatibility - no adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'basic',
  accommodationNote:
    'Accommodation options in Greenland are limited and often basic compared to other destinations. Hotels in major settlements like Nuuk and Ilulissat may have some adapter availability, but bringing your own is essential. USB ports are not standard. Hair dryers may not be provided in budget accommodations.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone charger',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Greenland\'s 230V is perfect for modern phone chargers. Bring backup power banks for Arctic conditions.',
    },
    {
      device: 'Laptop charger',
      dualVoltage: 'Yes — virtually all laptop power adapters are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just use an adapter. Power can be unreliable in remote areas, so keep devices charged.',
    },
    {
      device: 'Camera equipment',
      dualVoltage: 'Usually yes — most modern camera chargers are dual voltage.',
      adapterOnly: 'Yes',
      note: 'Essential for Arctic photography. Cold weather drains batteries quickly - bring extra batteries and keep them warm.',
    },
    {
      device: 'Hair dryer / Styling tools',
      dualVoltage: 'Check carefully — many US models are 120V only.',
      adapterOnly: 'No — you may need a converter for 120V-only devices.',
      note: 'US hair dryers rated for 120V only won\'t work. Many accommodations may not provide hair dryers.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Greenland?',
      answer:
        'It depends on your origin and specific outlets. Greenland uses Types C, F, and K plugs at 230V/50Hz. European travelers may need adapters for Type K sockets. US, UK, and Australian travelers definitely need adapters.',
    },
    {
      question: 'What types of electrical outlets does Greenland use?',
      answer:
        'Greenland uses Types C, F, and K plugs at 230V/50Hz. Type K (Danish standard) is most common, while Types C and F are also found throughout settlements.',
    },
    {
      question: 'Are Greenland and Denmark electrical systems the same?',
      answer:
        'Yes, exactly the same. Greenland follows Danish electrical standards completely. Danish devices work perfectly in Greenland without any adapter.',
    },
    {
      question: 'Can I buy adapters in Greenland?',
      answer:
        'Very limited availability. Some stores in Nuuk and the airport may have basic adapters, but selection is extremely limited. Strongly recommended to bring adapters from home.',
    },
    {
      question: 'Is electricity reliable in Greenland?',
      answer:
        'Generally reliable in major settlements like Nuuk and Ilulissat, but power outages can occur during severe Arctic weather. Remote areas may have less reliable power - bring backup batteries.',
    },
    {
      question: 'What should I know about using electronics in Arctic conditions?',
      answer:
        'Cold weather drains batteries quickly and can affect electronic performance. Keep devices and spare batteries warm. Consider bringing portable power banks for extended outdoor activities.',
    },
  ],
  metaTitle: 'Greenland Power Plugs & Outlets: Do You Need an Adapter? (2025)',
  metaDescription:
    'Greenland uses Types C, F, K (Danish) plugs at 230V/50Hz. Find out if you need an adapter for Nuuk, Ilulissat, and travel throughout Greenland.',
  lastUpdated: '2025-01-15',
  relatedCountries: [
    { name: 'Denmark', slug: 'denmark-electric-plug-types' },
    { name: 'Iceland', slug: 'iceland-electric-plug-types' },
    { name: 'Norway', slug: 'norway-electric-plug-types' },
    { name: 'Faroe Islands', slug: 'faroe-islands-electric-plug-types' },
    { name: 'Canada', slug: 'canada-electric-plug-types' },
  ],
};

export default greenland;