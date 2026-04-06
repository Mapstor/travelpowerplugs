import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter',
  name: 'Ivory Coast',
  demonym: 'Ivorian',
  continent: 'Africa',
  region: 'West Africa',
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
  quirks: [
    'Abidjan has the most reliable power supply in West Africa, thanks to significant investment in the country\'s energy infrastructure.',
  ],
  travelContext:
    'Ivory Coast (Côte d\'Ivoire) is West Africa\'s economic hub. Abidjan is a modern, fast-growing city with dependable electricity in business and tourist districts. The French colonial electrical system means European travelers will feel right at home. Outside Abidjan, infrastructure quality decreases but remains functional in cities like Yamoussoukro and Bouaké.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs won\'t fit French-style sockets. At 230V, non-dual-voltage US devices need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs require an adapter. Voltage is compatible at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit everywhere. Type F (Schuko) fits Type E sockets. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    { name: 'CFAO Technology', type: 'electronics', city: 'Abidjan', priceRange: 'CFA 2,000–6,000', note: 'Major technology distributor with retail presence' },
    { name: 'Prosuma supermarkets', type: 'supermarket', city: 'Abidjan', priceRange: 'CFA 1,500–4,000', note: 'Supermarket chain with some electronics and accessories' },
    { name: 'Shops on Rue du Commerce', type: 'electronics', city: 'Abidjan', priceRange: 'CFA 1,000–3,000', note: 'Street-level electronics and phone accessory shops in Plateau district' },
  ],
  airportName: 'Abidjan Félix-Houphouët-Boigny International Airport',
  airportCode: 'ABJ',
  neighbors: [
    { name: 'Ghana', slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra', plugTypes: ['D', 'G'], voltage: 230, sameAsSubject: 'different', adapterNote: 'Ghana uses British-style plugs — completely different system' },
    { name: 'Burkina Faso', slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter', plugTypes: ['C', 'E'], voltage: 220, sameAsSubject: 'compatible' },
    { name: 'Mali', slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali', plugTypes: ['C', 'E'], voltage: 220, sameAsSubject: 'compatible' },
    { name: 'Guinea', slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry', plugTypes: ['C', 'F', 'K'], voltage: 220, sameAsSubject: 'mostly' },
    { name: 'Liberia', slug: 'liberia-electric-plug-types-will-you-need-an-adapter-in-liberia', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'different', adapterNote: 'Liberia uses US-style plugs at 120V — completely different' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Abidjan\'s Cocody and Plateau neighborhoods have standard French Type E outlets. International chain hotels may lend adapters. Budget hotels and guesthouses outside Abidjan have basic electrical setups with limited outlet availability.',
  faqs: [
    {
      question: 'Is the electrical system in Ivory Coast the same as in France?',
      answer:
        'Yes. Ivory Coast uses the French system — Type C and Type E at 230V/50Hz. If your devices work in France, they\'ll work in Ivory Coast.',
    },
    {
      question: 'How reliable is the power in Abidjan?',
      answer:
        'Abidjan has West Africa\'s most reliable power grid. Outages are occasional but short. Major hotels have generator backup. A power bank is still useful for day trips.',
    },
    {
      question: 'Will I need a different adapter when crossing into Ghana from Ivory Coast?',
      answer:
        'Yes. Ghana uses British-style Type D and G plugs — a completely different system. You\'ll need a new adapter when crossing the border.',
    },
  ],
  metaTitle: 'Ivory Coast (Côte d\'Ivoire) Power Plugs — Types C & E | French System',
  metaDescription:
    'Ivory Coast uses the French electrical system: Types C and E at 230V/50Hz. European travelers are fine. US, UK, and Australian visitors need an adapter. Abidjan tips and local stores.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Ghana', slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra' },
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
    { name: 'Burkina Faso', slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter' },
  ],
};

export default data;
