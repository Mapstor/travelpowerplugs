import type { CountryPlugData } from '../types';

const rwanda: CountryPlugData = {
  slug: 'rwanda-electric-plug-types-will-you-need-to-bring-an-adapter-with-you',
  name: 'Rwanda',
  demonym: 'Rwandan',
  continent: 'Africa',
  region: 'East Africa',
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
      id: 'type-j',
      name: 'Type J',
      subtitle: 'Swiss',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 10,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.2,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.45,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Rwanda uses European Type C alongside Swiss Type J — an uncommon pairing in Africa that reflects the country\'s unique infrastructure development. Kigali is one of the cleanest and most modern cities on the continent with reliable electricity.',
  ],
  travelContext:
    'Rwanda is known for mountain gorilla trekking in Volcanoes National Park, the poignant Kigali Genocide Memorial, and increasingly as a hub for conferences and ecotourism. Kigali is remarkably well-organized and modern, with dependable power throughout the city. Rural areas and national park lodges generally have reliable electricity as well, reflecting Rwanda\'s significant investment in infrastructure.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Rwandan round-pin sockets. An adapter is required. Most US devices are dual-voltage.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs are incompatible with Rwandan Type C and J sockets. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit Rwandan sockets directly. Type F (Schuko) plugs also fit Type J outlets for the round-pin portion. No adapter needed for most European devices.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian angled flat-pin plugs do not fit. An adapter is needed. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Simba Supermarket',
      type: 'supermarket',
      city: 'Kigali',
      priceRange: '3,000–8,000 RWF',
      note: 'Large supermarket in Kigali. May stock basic adapters.',
    },
    {
      name: 'T2000',
      type: 'electronics',
      city: 'Kigali',
      priceRange: '5,000–15,000 RWF',
      note: 'Electronics retailer in Kigali with adapters and power accessories.',
    },
    {
      name: 'KN 3 Ave Electronics Shops',
      type: 'electronics',
      city: 'Kigali',
      priceRange: '2,000–10,000 RWF',
      note: 'Small independent electronics shops along KN 3 Avenue in central Kigali. Bargaining is expected.',
    },
  ],
  airportName: 'Kigali International Airport',
  airportCode: 'KGL',
  neighbors: [
    {
      name: 'Uganda',
      slug: 'uganda-electric-plug-types-which-adapter-do-you-need-in-uganda',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'different',
      adapterNote:
        'Uganda uses British Type G, which is completely different from Rwanda\'s Type C/J. You will need a separate adapter.',
    },
    {
      name: 'Congo',
      slug: 'congo-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'D', 'E'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Congo shares Type C with Rwanda. Type D and E outlets may require a different adapter.',
    },
    {
      name: 'Burundi',
      slug: 'burundi-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote:
        'Burundi shares Type C with Rwanda. Your ungrounded European plug will work in both countries.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Kigali\'s international hotels and upscale lodges near Volcanoes National Park typically have adapters available. Many newer hotels have been built with universal or multi-standard outlets. Budget guesthouses may not provide adapters, so carry your own.',
  faqs: [
    {
      question: 'Why does Rwanda use Swiss-style plugs?',
      answer:
        'Rwanda\'s adoption of Type J (Swiss) alongside Type C reflects its post-conflict infrastructure rebuilding, which drew on various international standards. It is one of only a few African countries using this combination.',
    },
    {
      question: 'Do I need an adapter for gorilla trekking lodges in Rwanda?',
      answer:
        'Yes, unless you are traveling from continental Europe with a Type C plug. Luxury lodges like Bisate and Singita Kwitonda have reliable power and may provide adapters, but it is wise to carry your own.',
    },
    {
      question: 'Is the electricity reliable in Kigali?',
      answer:
        'Kigali has one of the more reliable power grids in East Africa. Outages are infrequent and typically short. Most hotels and business centers have backup generators.',
    },
    {
      question: 'Can a European Type F (Schuko) plug work in Rwanda?',
      answer:
        'The ungrounded pins of a Schuko plug will physically fit into a Type J socket, but the grounding clips may not engage. For grounded connections, a proper Type C-to-J adapter is recommended. For phone and laptop chargers (typically Type C plug), no adapter is needed.',
    },
  ],
  metaTitle:
    'Rwanda Power Plugs & Adapters: Types C & J – Travel Electrical Guide',
  metaDescription:
    'Rwanda uses Type C and Swiss Type J plugs at 230V/50Hz. Find out if you need an adapter for Kigali and gorilla trekking lodges, plus where to buy one locally.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Uganda',
      slug: 'uganda-electric-plug-types-which-adapter-do-you-need-in-uganda',
    },
    {
      name: 'Switzerland',
      slug: 'switzerland-electric-plug-types-will-you-need-an-adapter-with-you',
    },
    {
      name: 'Burundi',
      slug: 'burundi-electric-plug-types-do-you-need-an-adapter',
    },
  ],
};

export default rwanda;
