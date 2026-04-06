import type { CountryPlugData } from '@/types';

const papua_new_guinea: CountryPlugData = {
  slug: 'papua-new-guinea-electric-plug-types',
  name: 'Papua New Guinea',
  demonym: 'Papua New Guinean',
  continent: 'Oceania',
  region: 'Pacific Islands',
  voltage: 240,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-i',
      name: 'Type I',
      subtitle: 'Australian',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 13.7,
      ratedAmps: 10,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.42,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Type I like Australia, but power infrastructure outside Port Moresby is very limited. Many highland lodges and dive resorts run on generators with electricity available only during set hours. A reliable battery pack is essential gear.',
  ],
  travelContext:
    'Papua New Guinea is an adventurous destination where electricity is not guaranteed outside the capital. Port Moresby has a functioning power grid, but highland lodges, dive resorts in Milne Bay, and village stays may rely entirely on generators or have no power at all. Treat every charging opportunity as precious — always top up your devices when you can.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US plugs do not fit PNG\'s Type I outlets. Bring an adapter. PNG uses 240V — check your device labels.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs do not fit. Bring a Type G to Type I adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same plug type and similar voltage. No adapter needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Brian Bell',
      type: 'electronics',
      city: 'Port Moresby',
      priceRange: 'PGK 20–PGK 100',
      note: 'PNG\'s main department store chain. Carries adapters and electronics.',
    },
    {
      name: 'SVS',
      type: 'electronics',
      city: 'Port Moresby',
      priceRange: 'PGK 15–PGK 80',
      note: 'Retail chain with electronics sections.',
    },
    {
      name: 'Stop N Shop',
      type: 'supermarket',
      city: 'Port Moresby',
      priceRange: 'PGK 15–PGK 60',
      note: 'Supermarket that may carry basic adapters.',
    },
    {
      name: 'Jacksons Airport shops',
      type: 'airport',
      city: 'Port Moresby',
      priceRange: 'PGK 30–PGK 150',
      note: 'Limited selection at the airport. Better to buy in town or bring your own.',
    },
  ],
  airportName: 'Jacksons International Airport',
  airportCode: 'POM',
  neighbors: [
    {
      name: 'Indonesia',
      slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Indonesia uses European-style round-pin plugs — completely different from PNG.',
    },
    {
      name: 'Australia',
      slug: 'australia-electric-plug-types-do-you-need-adapter',
      plugTypes: ['I'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Australia uses the same Type I system.',
    },
    {
      name: 'Solomon Islands',
      slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you',
      plugTypes: ['I', 'G'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Solomon Islands uses Type I alongside some Type G outlets.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'International hotels in Port Moresby have reliable power and Type I outlets. Outside the capital, accommodation ranges from basic lodges with generator power to dive resorts with solar systems. Many highland and island lodges have electricity only during set hours. Always ask about power availability and charge every device fully whenever you have the chance.',
  faqs: [
    {
      question: 'What plug type does Papua New Guinea use?',
      answer:
        'PNG uses Australian-style Type I plugs at 240V/50Hz. If you are coming from Australia or New Zealand, your devices work directly.',
    },
    {
      question: 'Is electricity reliable in Papua New Guinea?',
      answer:
        'In Port Moresby, generally yes. Outside the capital, power is often limited to generator hours or solar systems. Highland lodges and remote dive resorts may only have electricity for a few hours in the evening. A reliable, high-capacity battery pack is essential.',
    },
    {
      question: 'Should I bring a battery pack to PNG?',
      answer:
        'Absolutely — it is one of the most important items to pack. Outside Port Moresby, charging opportunities can be unpredictable. A 20,000mAh or larger battery pack will keep your phone and camera running through multi-day trips to remote areas.',
    },
    {
      question: 'Can I buy an adapter in Port Moresby?',
      answer:
        'Brian Bell and SVS stores in Port Moresby carry adapters. Selection is limited compared to larger countries, so it is better to bring one from home. Once you leave Port Moresby, your chances of finding an adapter are very low.',
    },
  ],
  metaTitle: 'Papua New Guinea Power Plugs: Type I (Australian) — Adapter & Battery Pack Guide',
  metaDescription:
    'PNG uses Australian-style Type I plugs at 240V/50Hz. Power is limited outside Port Moresby. Find out what adapter to bring and why a battery pack is essential.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Australia', slug: 'australia-electric-plug-types-do-you-need-adapter' },
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia' },
    { name: 'Fiji', slug: 'fiji-electric-plug-types-will-you-need-an-adapter-in-suva' },
    { name: 'Solomon Islands', slug: 'solomon-islands-electric-plug-types-will-you-need-an-adapter-with-you' },
  ],
};

export default papua_new_guinea;
