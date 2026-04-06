import type { CountryPlugData } from '../types';

const madagascar: CountryPlugData = {
  slug: 'madagascar-electric-plug-types-will-you-need-an-adapter',
  name: 'Madagascar',
  demonym: 'Malagasy',
  continent: 'Africa',
  region: 'Indian Ocean',
  voltage: 220,
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
    'Madagascar follows the French electrical system. Power infrastructure outside Antananarivo is significantly underdeveloped — eco-lodges near national parks like Andasibe, Ranomafana, and Isalo often rely on solar panels or generators. A reliable battery pack is essential for most itineraries.',
  ],
  travelContext:
    'Madagascar is a biodiversity hotspot unlike anywhere else, home to lemurs, baobab alleys, and unique ecosystems. Most travelers visit national parks via overland routes from Antananarivo. Infrastructure is basic across much of the island — roads are rough, and electricity outside the capital is not guaranteed. Eco-lodges range from surprisingly comfortable to extremely rustic, and power availability is one of the key variables.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Malagasy round-pin sockets. An adapter is required. Most US electronics are dual-voltage.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs will not fit. Bring an adapter for Type C or E outlets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit directly into Malagasy sockets. Type F also works in Type E outlets. No adapter needed for continental European travelers.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs do not fit. An adapter is required.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Shoprite',
      type: 'supermarket',
      city: 'Antananarivo',
      priceRange: '10,000–30,000 MGA',
      note: 'South African supermarket chain with a presence in Antananarivo. Limited adapter selection.',
    },
    {
      name: 'Score',
      type: 'supermarket',
      city: 'Antananarivo',
      priceRange: '8,000–25,000 MGA',
      note: 'Supermarket in the capital that may stock basic electrical accessories.',
    },
    {
      name: 'Analakely Market Electronics Shops',
      type: 'electronics',
      city: 'Antananarivo',
      priceRange: '5,000–20,000 MGA',
      note: 'Small electronics stalls in central Antananarivo\'s Analakely market area. Selection is unpredictable — buy before you travel if possible.',
    },
  ],
  airportName: 'Ivato International Airport',
  airportCode: 'TNR',
  neighbors: [
    {
      name: 'Comoros',
      slug: 'comoros-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Comoros uses the same French-standard Type C and E plugs. No adapter change needed between the two.',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'M'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Mozambique shares Type C but also uses South African Type M. You may need an additional adapter.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Upscale hotels in Antananarivo may provide adapters, but this is uncommon. Eco-lodges near national parks often operate on limited generator or solar power — outlets may only work during certain hours, and availability of adapters is essentially nonexistent outside the capital. A good portable battery pack and a pre-purchased adapter are essential for any Madagascar trip.',
  faqs: [
    {
      question: 'Will there be electricity at eco-lodges near Madagascar\'s national parks?',
      answer:
        'Many eco-lodges operate on generators that run during specific hours (typically evening to early morning) or on solar systems. Some higher-end lodges like Anjajavy and Mantadia Lodge have more consistent power. Always ask your lodge in advance and plan to charge devices during available windows.',
    },
    {
      question: 'Should I bring a power bank to Madagascar?',
      answer:
        'A portable battery pack is one of the most important items to pack for Madagascar. Unreliable or time-limited electricity at lodges, long overland drives between parks, and few opportunities to charge make a high-capacity power bank essential.',
    },
    {
      question: 'Is the same plug used throughout Madagascar?',
      answer:
        'Yes, Madagascar uses the French electrical standard with Type C and Type E sockets throughout the island. There is no regional variation in plug type, though power availability varies enormously between the capital and rural areas.',
    },
  ],
  metaTitle:
    'Madagascar Power Plugs & Adapters: Types C & E – Essential Travel Info',
  metaDescription:
    'Madagascar uses French-style Type C and E plugs at 220V/50Hz. Learn why a power bank is essential, where to find adapters in Antananarivo, and what to expect at eco-lodges.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Comoros',
      slug: 'comoros-electric-plug-type-do-you-need-an-adapter',
    },
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
    },
  ],
};

export default madagascar;
