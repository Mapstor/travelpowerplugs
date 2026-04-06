import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'dominica-electric-plug-types-will-you-need-an-adapter-with-you',
  name: 'Dominica',
  demonym: 'Dominican',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-d',
      name: 'Type D',
      subtitle: 'Old British (India)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 5.08,
      pinSpacing: 19.1,
      ratedAmps: 5,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.3,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.48,
      recessRadius: 1.0,
      faceplateSize: 2.8,
    },
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
    'Not to be confused with the Dominican Republic. Dominica is a small Caribbean island that uses British-style plugs, while the Dominican Republic uses US-style outlets.',
  ],
  travelContext:
    'Dominica is known as the "Nature Island" of the Caribbean, famous for its rainforests, hot springs, and eco-tourism. The British colonial heritage means Type D and G outlets are standard. Eco-lodges deep in the rainforest interior may rely on generator power with limited outlets.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs do not fit British-style outlets. Voltage is 230V, so non-dual-voltage US devices need a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit most outlets directly. Voltage is compatible at 230V.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs need an adapter for British-style outlets. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: 'Roseau',
      priceRange: '$8–20',
      note: 'Caribbean electronics and appliance retailer.',
    },
    {
      name: "Astaphan's",
      type: 'electronics',
      city: 'Roseau',
      priceRange: '$5–15',
      note: 'Local department store with some electronics and adapters.',
    },
    {
      name: 'IGA Supermarket',
      type: 'supermarket',
      city: 'Roseau',
      priceRange: '$5–12',
      note: 'Supermarket in Roseau that may stock basic adapters.',
    },
  ],
  airportName: 'Douglas-Charles Airport',
  airportCode: 'DOM',
  neighbors: [
    {
      name: 'Antigua And Barbuda',
      slug: 'antigua-and-barbuda-electric-plug-types-adapter',
      plugTypes: ['A', 'B'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Antigua uses US-style outlets at 230V — different plug shape from Dominica\'s British system.',
    },
    {
      name: 'Saint Lucia',
      slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'compatible',
      adapterNote: 'Saint Lucia also uses British Type G. Same adapter works for both islands.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Roseau and the coast generally have reliable power with Type G outlets. Eco-lodges in the rainforest interior may use generators with limited outlet availability. Bring a battery pack for off-grid stays.',
  faqs: [
    {
      question: 'What plug type does Dominica use?',
      answer:
        'Dominica uses British-style Type D and Type G plugs at 230V/50Hz. Type G (three rectangular pins) is more common in hotels and newer buildings.',
    },
    {
      question: 'Is Dominica the same as the Dominican Republic?',
      answer:
        'No. Dominica is a small island in the Eastern Caribbean with British-style plugs. The Dominican Republic shares the island of Hispaniola with Haiti and uses US-style Type A/B outlets. They are completely different countries with different electrical systems.',
    },
    {
      question: 'Will eco-lodges in the rainforest have power?',
      answer:
        'Many eco-lodges in Dominica\'s interior run on generators, which may only operate during certain hours. Outlet availability can be limited. A portable power bank is recommended for extended stays in the rainforest.',
    },
  ],
  metaTitle: 'Dominica Power Plugs — Type D & G Outlets, 230V, Adapter Guide',
  metaDescription:
    'Dominica uses British Type D and G plugs at 230V/50Hz. Learn what adapter you need, where to buy one in Roseau, and what to expect at rainforest eco-lodges.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Saint Lucia', slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Antigua And Barbuda', slug: 'antigua-and-barbuda-electric-plug-types-adapter' },
    { name: 'Saint Kitts And Nevis', slug: 'saint-kitts-and-nevis-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default data;
