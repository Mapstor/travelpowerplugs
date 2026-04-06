import { CountryPlugData } from '@/types';

const colombia: CountryPlugData = {
  slug: 'colombia-electric-plug-types-do-you-need-an-adapter',
  name: 'Colombia',
  demonym: 'Colombian',
  continent: 'South America',
  region: 'Northern South America',
  voltage: 110,
  frequency: 60,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Colombia uses the same plug shape as the US (Type A/B) at nearly the same voltage — 110V vs 120V. The slight difference is negligible for all modern electronics.',
    'Rural areas and jungle eco-lodges may rely on generator-based power with limited availability, so bring a portable battery pack for off-grid stays.',
  ],
  travelContext:
    'Colombia has become one of South America\'s hottest travel destinations, with Bogotá, Medellín, Cartagena, and the Coffee Triangle drawing millions of visitors. Major cities have modern electrical infrastructure, while remote jungle lodges and eco-resorts in the Amazon or Pacific coast may have limited or generator-based power.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Colombia uses the same Type A/B plugs at 110V/60Hz — virtually identical to the US and Canada. Your devices will work without any adapter or converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. Most UK electronics are dual-voltage (100–240V), so no converter is needed — just a plug adapter.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs won\'t fit Colombian outlets. You\'ll need a Type C/E/F to Type A adapter. Check that your devices support 110V — many European appliances are designed for 220–240V only.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Type I plugs won\'t fit. You\'ll need an adapter, and since Australia uses 230V, verify your devices handle 110V before plugging in.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Alkosto',
      type: 'electronics',
      city: 'Bogotá',
      priceRange: '$5–$15 USD',
      note: 'Large electronics chain with travel adapter sections.',
    },
    {
      name: 'Éxito',
      type: 'supermarket',
      priceRange: '$3–$10 USD',
      note: 'Colombia\'s largest supermarket chain; most locations carry basic adapters.',
    },
    {
      name: 'Falabella',
      type: 'electronics',
      priceRange: '$8–$20 USD',
      note: 'Department store with electronics sections in major malls.',
    },
    {
      name: 'Homecenter',
      type: 'electronics',
      priceRange: '$4–$12 USD',
      note: 'Hardware/home improvement chain stocking plug adapters and power strips.',
    },
  ],
  airportName: 'Bogotá El Dorado International Airport',
  airportCode: 'BOG',
  neighbors: [
    {
      name: 'Venezuela',
      slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types, slightly higher voltage (120V vs 110V) — no adapter needed.',
    },
    {
      name: 'Brazil',
      slug: 'brazil-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'N'],
      voltage: 127,
      sameAsSubject: 'different',
      adapterNote: 'Brazil uses Type C/N plugs at either 127V or 220V depending on the city. You\'ll need an adapter.',
    },
    {
      name: 'Ecuador',
      slug: 'ecuador-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Identical system — same plugs, same voltage range.',
    },
    {
      name: 'Peru',
      slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru',
      plugTypes: ['A', 'B', 'C'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Peru uses the same plug shapes but at 220V — a critical voltage difference. Check your devices carefully.',
    },
    {
      name: 'Panama',
      slug: 'panama-electric-plug-types-will-you-need-an-adapter-for-panama',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Same plug types and voltage. No adapter needed.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Bogotá, Medellín, and Cartagena generally have modern, well-maintained outlets. Budget hostels and rural eco-lodges may have fewer outlets — a compact power strip is helpful. Some jungle lodges provide power only during certain hours.',
  faqs: [
    {
      question: 'Do I need a plug adapter for Colombia if I\'m coming from the US?',
      answer:
        'No. Colombia uses the same Type A and Type B flat-pin plugs as the United States, and the voltage (110V) is close enough to the US standard (120V) that all your devices will work without any adapter or converter.',
    },
    {
      question: 'Can I charge my European phone charger in Colombia?',
      answer:
        'You\'ll need a plug adapter since European round pins don\'t fit Colombian flat-pin outlets. Most phone chargers and laptop adapters are dual-voltage (100–240V), so they\'ll handle the 110V fine — just check the label.',
    },
    {
      question: 'Is the power reliable in Cartagena and the Coffee Triangle?',
      answer:
        'Yes, Cartagena and the Coffee Triangle towns like Salento and Manizales have reliable urban power grids. Brief outages can happen, but hotels and restaurants typically have backup systems.',
    },
    {
      question: 'Will my hair dryer work in Colombia?',
      answer:
        'If it\'s a North American hair dryer (120V), it will work fine. If it\'s a European or Australian hair dryer rated for 220–240V only, it won\'t work properly on Colombia\'s 110V outlets — you\'d need a step-up voltage converter, or just use the hotel\'s hair dryer.',
    },
    {
      question: 'What about power in the Amazon jungle lodges?',
      answer:
        'Many Amazon eco-lodges near Leticia run on generators with limited electricity hours (typically evenings only). Bring a portable battery pack to keep your phone and camera charged during the day.',
    },
  ],
  metaTitle:
    'Colombia Plug Types & Adapter Guide — Type A/B, 110V, What You Need',
  metaDescription:
    'Colombia uses Type A and B plugs at 110V/60Hz — identical to the US. Find out if you need an adapter, what to expect at hotels, and where to buy one locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Ecuador', slug: 'ecuador-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Peru', slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru' },
    { name: 'Panama', slug: 'panama-electric-plug-types-will-you-need-an-adapter-for-panama' },
    { name: 'Venezuela', slug: 'venezuela-electric-plug-types-will-you-need-an-adapter-for-venezuela' },
    { name: 'Costa Rica', slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default colombia;
