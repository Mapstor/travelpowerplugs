import type { CountryPlugData } from '../types';

const greece: CountryPlugData = {
  slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece',
  name: 'Greece',
  demonym: 'Greek',
  continent: 'Europe',
  region: 'Southern Europe',
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
    'Greece uses standard European Type C/F outlets — electrically straightforward for anyone from continental Europe, but US and UK visitors still need an adapter.',
    'Island accommodations on Santorini, Mykonos, and Crete can have older wiring with non-recessed outlets. Some very old buildings have only ungrounded 2-pin sockets.',
    'Ferry boats between the Greek islands have limited charging outlets — bring a power bank for island-hopping days.',
    'Cave hotels and converted traditional houses on Santorini sometimes have quirky outlet placement due to the carved-rock construction.',
  ],
  travelContext:
    'Greece is one of Europe\'s top tourist destinations, welcoming over 30 million visitors per year. Most travelers split time between Athens and the islands (Santorini, Mykonos, Crete, Rhodes). Mainland hotels and modern island resorts have reliable, modern electrical systems. Older traditional accommodations on the islands may have dated wiring.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US/Canadian flat-pin plugs don\'t fit Greek round-pin outlets. You need an adapter. Modern US electronics are dual-voltage, so no converter required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'The UK\'s Type G plug won\'t fit Greek outlets. Bring a UK-to-Europe adapter. Voltage is the same 230V.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'If you\'re traveling from Germany, France, Spain, Italy, or most of Europe, your plugs fit directly. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australia\'s angled flat-pin Type I plug won\'t fit. You need an adapter. Voltage is compatible at 230V.',
    },
    {
      origin: 'Japan',
      originPlugTypes: 'A',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Japan uses Type A plugs at 100V. You\'ll need an adapter, and older Japanese single-voltage appliances may require a converter. Modern electronics are usually dual-voltage.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Public',
      type: 'electronics',
      note: 'Greece\'s main electronics chain. Locations in Athens, Thessaloniki, and major cities. Stocks travel adapters and power accessories.',
    },
    {
      name: 'Kotsovolos',
      type: 'electronics',
      note: 'Large electronics retailer with stores throughout Greece, including on larger islands like Crete and Rhodes.',
    },
    {
      name: 'Plaisio',
      type: 'electronics',
      note: 'Electronics and office supply chain found in major Greek cities.',
    },
    {
      name: 'Sklavenitis',
      type: 'supermarket',
      note: 'Major Greek supermarket chain — some locations carry basic adapters and extension cords in their household sections.',
    },
    {
      name: 'Athens Eleftherios Venizelos Airport (ATH)',
      type: 'airport',
      city: 'Athens',
      priceRange: '€8–18',
      note: 'Electronics shops in the arrivals area sell universal adapters. Convenient but pricier than city stores.',
    },
  ],
  airportName: 'Athens Eleftherios Venizelos International Airport',
  airportCode: 'ATH',
  neighbors: [
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Turkey uses the same Type C/F plugs — the same adapter works in both countries.',
    },
    {
      name: 'Bulgaria',
      slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Bulgaria is electrically identical — no extra adapter needed.',
    },
    {
      name: 'North Macedonia',
      slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Same plug types and voltage — fully compatible.',
    },
    {
      name: 'Albania',
      slug: 'albanian-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Albania uses Type C/F at 230V — no adapter needed when crossing the border.',
    },
    {
      name: 'Italy',
      slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Italy also uses Type C/F but adds its own Type L. Your Type C plug will work in Italy; grounded Type F also fits most modern Italian outlets.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Athens and major island resorts generally have modern outlets and may lend adapters at reception. Smaller family-run guesthouses on the islands often have older wiring with only basic 2-pin outlets. USB ports in rooms are becoming more common in newer or recently renovated hotels.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone',
      dualVoltage: 'Yes — all modern phone chargers support 100–240V.',
      adapterOnly: 'Yes',
      note: 'You only need a plug adapter. Many Greek hotels now have USB ports on nightstands.',
    },
    {
      device: 'Laptop',
      dualVoltage: 'Yes — virtually all laptop power bricks are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just bring an adapter. No converter needed.',
    },
    {
      device: 'Hair dryer / Straightener',
      dualVoltage: 'Often not — check your device\'s voltage rating.',
      adapterOnly: 'No — you may need a converter if it\'s 120V only.',
      note: 'Most Greek hotels provide hair dryers. If yours is 120V only, leave it home.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a power adapter for Greece?',
      answer:
        'If you\'re from the US, UK, Australia, or anywhere that doesn\'t use Type C or F plugs, yes. Travelers from most of continental Europe (Germany, France, Spain, etc.) do not need an adapter.',
    },
    {
      question: 'What plugs does Greece use?',
      answer:
        'Greece uses Type C (Europlug, 2 round pins) and Type F (Schuko, 2 round pins with side grounding clips). These are the standard plugs used across most of continental Europe.',
    },
    {
      question: 'Can I charge my phone on a Greek ferry?',
      answer:
        'Some larger ferries (Blue Star, ANEK) have outlets in seating areas and cabins, but outlets are limited and often occupied. Bring a fully charged power bank for island-hopping days — especially on shorter high-speed ferries that may have fewer outlets.',
    },
    {
      question: 'Are the outlets on Greek islands different from Athens?',
      answer:
        'They\'re the same Type C/F standard, but older buildings on Santorini, Mykonos, and Crete may have non-recessed or ungrounded outlets. Your adapter will still work — the fit might just feel a bit different.',
    },
    {
      question: 'Will my adapter for Greece also work in Turkey?',
      answer:
        'Yes — Turkey uses the identical Type C/F system at 230V/50Hz. One adapter covers both countries, which is convenient for travelers doing a Greece-Turkey itinerary.',
    },
    {
      question: 'Where can I buy an adapter in Athens?',
      answer:
        'Public and Kotsovolos electronics stores are your best bet in the city. Athens airport also sells universal adapters in the arrivals area, though at higher prices.',
    },
  ],
  metaTitle: 'Greece Power Plugs — Do You Need an Adapter? (Type C & F)',
  metaDescription:
    'Greece uses Type C and Type F plugs at 230V/50Hz. Find out if you need an adapter for the islands, where to buy one in Athens, and tips for charging on Greek ferries.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Croatia', slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
  ],
};

export default greece;
