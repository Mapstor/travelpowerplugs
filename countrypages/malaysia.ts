import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur',
  name: 'Malaysia',
  demonym: 'Malaysian',
  continent: 'Asia',
  region: 'Southeast Asia',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 6.35,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.6,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Malaysia uses British Type G exclusively — the same three-rectangular-pin system as the UK, Singapore, and Hong Kong. Many mid-range and upscale hotels have universal outlets or adapters at reception.',
  ],
  travelContext:
    'Malaysia is a well-developed travel destination with reliable electricity across peninsular Malaysia and most of Borneo. If you are already carrying a Type G adapter from the UK, Singapore, or Hong Kong, it will work here. The country has a single, consistent plug standard — no surprises.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US plugs will not fit Malaysian Type G outlets. You need an adapter. Malaysia runs at 230V, so check your device is dual-voltage. Phone chargers and laptops are usually fine; hair dryers may not be.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'UK plugs work directly in Malaysian outlets. Same Type G standard, same voltage. No adapter needed.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Malaysian rectangular-pin outlets. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs are not compatible. Bring a Type I to Type G adapter. Voltage is very close (230V vs 240V).',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Harvey Norman Malaysia',
      type: 'electronics',
      priceRange: 'RM 10–RM 60',
      note: 'Electronics retailer in major malls with travel adapter selections.',
    },
    {
      name: 'Senheng',
      type: 'electronics',
      priceRange: 'RM 10–RM 50',
      note: 'Large Malaysian electronics chain with stores in most cities.',
    },
    {
      name: 'Mr DIY',
      type: 'convenience',
      priceRange: 'RM 5–RM 30',
      note: 'Budget home and hardware chain with basic adapters at very low prices. Found everywhere.',
    },
    {
      name: 'Courts',
      type: 'electronics',
      priceRange: 'RM 10–RM 50',
      note: 'Electronics and appliance retailer in shopping centres.',
    },
    {
      name: 'KLIA Airport shops',
      type: 'airport',
      city: 'Kuala Lumpur',
      priceRange: 'RM 25–RM 80',
      note: 'Electronics kiosks in both KLIA and KLIA2 terminals.',
    },
  ],
  airportName: 'Kuala Lumpur International Airport',
  airportCode: 'KUL',
  neighbors: [
    {
      name: 'Singapore',
      slug: 'singapur-electric-plug-types-will-you-need-an-adapter-for-singapur',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Singapore uses the same Type G outlets and voltage. Your adapter works in both countries.',
    },
    {
      name: 'Thailand',
      slug: 'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand',
      plugTypes: ['A', 'B', 'C', 'F'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Thailand uses a mix of US and European-style outlets — very different from Malaysia.',
    },
    {
      name: 'Indonesia',
      slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Indonesia uses European round-pin plugs. You will need a different adapter.',
    },
    {
      name: 'Brunei',
      slug: 'brunei-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'identical',
      adapterNote: 'Brunei uses the same Type G system as Malaysia.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Malaysian hotels are generally well-equipped. Many mid-range and above properties have universal outlets or keep a supply of adapters at reception. Business hotels in KL and Penang commonly feature USB ports in bedside panels. Even lodges in Borneo (Sabah, Sarawak) use Type G consistently.',
  faqs: [
    {
      question: 'Do I need an adapter for Malaysia?',
      answer:
        'If you are from the UK, Hong Kong, or Singapore — no, your plugs work directly. Travelers from the US, Europe, and Australia all need an adapter to the British-style Type G outlet used throughout Malaysia.',
    },
    {
      question: 'Is Malaysia the same plug as Singapore?',
      answer:
        'Yes, identical. Both countries use Type G at 230V/50Hz. If you buy an adapter for one, it works in the other. This also applies to Brunei.',
    },
    {
      question: 'Can I buy an adapter cheaply in Malaysia?',
      answer:
        'Absolutely. Mr DIY stores sell basic adapters for as little as RM 5–10 (roughly $1–2 USD). They are found in nearly every shopping mall. Senheng and Harvey Norman carry higher-quality universal adapters.',
    },
    {
      question: 'Does Borneo use the same plugs as peninsular Malaysia?',
      answer:
        'Yes. Sabah and Sarawak (Malaysian Borneo) use the same Type G outlets and 230V voltage as the rest of Malaysia. Electrical infrastructure in cities like Kota Kinabalu and Kuching is reliable.',
    },
    {
      question: 'Will my hotel have an adapter for me?',
      answer:
        'Many 3-star and above hotels in Malaysia stock adapters for guests — just ask at reception. Some rooms have universal outlets that accept multiple plug shapes. Budget hostels are less likely to provide them.',
    },
  ],
  metaTitle: 'Malaysia Power Plugs: Type G (British) — Do You Need an Adapter?',
  metaDescription:
    'Malaysia uses British-style Type G plugs at 230V/50Hz. Find out who needs an adapter, where to buy one cheaply, and how Malaysian plugs compare to neighbors.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Singapore', slug: 'singapur-electric-plug-types-will-you-need-an-adapter-for-singapur' },
    { name: 'Brunei', slug: 'brunei-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Thailand', slug: 'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand' },
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia' },
  ],
};

export default data;
