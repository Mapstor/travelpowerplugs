import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'slovakia-electric-plug-types-will-you-need-an-adapter-for-bratislava',
  name: 'Slovakia',
  demonym: 'Slovak',
  continent: 'Europe',
  region: 'Central Europe',
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
  travelContext:
    'Slovakia is a popular Central European destination, with Bratislava just an hour from Vienna by train. Many visitors arrive overland from Austria, Czech Republic, or Hungary. The country shares the same plug system as France and Belgium (Types C and E), so travelers from most of continental Europe will not need an adapter.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Slovak round-pin outlets. You need an adapter. Most modern electronics handle 230V automatically — check the label on your charger.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs require an adapter for Slovakia\'s Type C/E sockets. Voltage is the same 230V, so no converter needed.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs (Type C) fit directly. Type F (Schuko) plugs also work in Type E sockets, though the grounding mechanism differs slightly. No issues in practice.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian angled flat-pin plugs are incompatible with Slovak outlets. Bring an adapter; voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Datart',
      type: 'electronics',
      city: 'Bratislava',
      priceRange: '€5–€12',
      note: 'Major electronics chain with locations in shopping centers across Slovakia.',
    },
    {
      name: 'Nay Elektrodom',
      type: 'electronics',
      city: 'Bratislava',
      priceRange: '€4–€10',
      note: 'Slovak electronics retailer with a wide range of travel adapters.',
    },
    {
      name: 'Alza.sk',
      type: 'electronics',
      city: 'Bratislava',
      priceRange: '€5–€15',
      note: 'Online retailer with a physical showroom in Bratislava for same-day pickup.',
    },
  ],
  airportName: 'Bratislava Airport',
  airportCode: 'BTS',
  neighbors: [
    {
      name: 'Czech Republic',
      slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Poland',
      slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Ukraine',
      slug: 'ukraine-electric-plug-types-what-kind-of-adapter-do-you-need',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C plugs work in both countries. Slovakia uses Type E while Ukraine uses Type F — both accept Type C.',
    },
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C works everywhere. Hungary uses Type F (Schuko) for grounded outlets rather than Slovakia\'s Type E.',
    },
    {
      name: 'Austria',
      slug: 'austria-electric-power-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C is universal between both countries. Austria uses Type F grounding while Slovakia uses Type E.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Mid-range and upscale hotels in Bratislava typically have USB ports at the desk. Budget accommodations and pensions in the Tatra mountains may have older wiring but standard European outlets. Ask at reception if you need an adapter — some hotels keep a small stock.',
  faqs: [
    {
      question: 'Many visitors fly into Vienna instead of Bratislava — does Austria use the same plugs?',
      answer:
        'Almost. Austria uses Types C and F, while Slovakia uses Types C and E. The ungrounded Type C plug is identical, so your basic chargers work in both countries. The grounded outlets differ (F in Austria, E in Slovakia), but hybrid E/F plugs sold across Europe fit both.',
    },
    {
      question: 'Can I use the same adapter in Slovakia and Czech Republic?',
      answer:
        'Yes. Both countries use Types C and E at 230V/50Hz. If you have an adapter that works in one, it works in the other — convenient for travelers visiting both on the same trip.',
    },
    {
      question: 'Do I need a voltage converter for my US hair dryer in Slovakia?',
      answer:
        'If your hair dryer is single-voltage (120V only), yes — Slovakia runs on 230V. However, most travel hair dryers and modern electronics are dual-voltage (100–240V). Check the label. Many Slovak hotels provide hair dryers in the bathroom.',
    },
    {
      question: 'Are power strips and extension cords easy to find in Slovakia?',
      answer:
        'Yes. Datart, Nay Elektrodom, and even larger supermarkets like Tesco and Kaufland carry European power strips with Type E sockets. Prices start around €5.',
    },
    {
      question: 'Will my Type F (Schuko) plug from Germany work in Slovak outlets?',
      answer:
        'In practice, yes. Type F plugs physically fit into Type E sockets. The grounding pin arrangement differs, but most modern outlets in Slovakia accept both E and F plugs. You will not have any issues.',
    },
  ],
  metaTitle: 'Slovakia Power Plugs — Types C & E | Do You Need an Adapter?',
  metaDescription:
    'Slovakia uses Type C and Type E plugs at 230V/50Hz. US, UK, and Australian travelers need an adapter. Find out what to pack and where to buy one in Bratislava.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Czech Republic', slug: 'czech-republic-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Austria', slug: 'austria-electric-power-plug-types-do-you-need-an-adapter' },
    { name: 'Hungary', slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest' },
    { name: 'Poland', slug: 'poland-electric-plug-types-will-you-need-an-adapter-in-poland' },
  ],
};

export default data;
