import type { CountryPlugData } from '@/types';

const cameroon: CountryPlugData = {
  slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter',
  name: 'Cameroon',
  demonym: 'Cameroonian',
  continent: 'Africa',
  region: 'Central Africa',
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
    'Cameroon is often called "Africa in miniature" for its geographic diversity. Douala is the economic capital with the best electrical infrastructure. Yaoundé, the political capital, is also well-served. Power reliability decreases outside these two cities, and rural areas can experience extended outages.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs won\'t fit French-style sockets. The 230V supply requires a converter for non-dual-voltage devices.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs require an adapter. Voltage is compatible.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work in Cameroonian outlets. No adapter needed.',
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
    { name: 'Supermarché Mahima', type: 'supermarket', city: 'Douala', priceRange: 'CFA 1,500–5,000', note: 'Supermarket with household electronics section' },
    { name: 'Douala electronics markets', type: 'electronics', city: 'Douala', priceRange: 'CFA 1,000–3,000', note: 'Open-air markets with stalls selling adapters and power strips' },
    { name: 'Yaoundé electronics markets', type: 'electronics', city: 'Yaoundé', priceRange: 'CFA 1,000–4,000', note: 'Street markets near Mokolo and Mfoundi with electronics vendors' },
  ],
  airportName: 'Douala International Airport',
  airportCode: 'DLA',
  neighbors: [
    { name: 'Nigeria', slug: 'nigeria-electric-plug-types-which-adapter-will-you-need', plugTypes: ['D', 'G'], voltage: 230, sameAsSubject: 'different', adapterNote: 'Nigeria uses British-style plugs — different system' },
    { name: 'Chad', slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter', plugTypes: ['C', 'D', 'E', 'F'], voltage: 220, sameAsSubject: 'mostly' },
    { name: 'Central African Republic', slug: 'central-african-republic-electric-plug-types-need-an-adapter', plugTypes: ['C', 'E'], voltage: 220, sameAsSubject: 'compatible' },
    { name: 'Congo', slug: 'congo-electric-plug-type-do-you-need-an-adapter', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Gabon', slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Equatorial Guinea', slug: 'equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Douala and Yaoundé have standard French Type E outlets. International chains like Hilton Yaoundé have more consistent power with generator backup. Budget accommodations may have limited or unreliable outlets. Bring your own power strip.',
  faqs: [
    {
      question: 'Is Cameroon\'s electrical system the same as France\'s?',
      answer:
        'Yes. Cameroon uses the French system — Type C and E at 230V/50Hz. European travelers from France, Germany, or other continental countries won\'t need an adapter.',
    },
    {
      question: 'How reliable is electricity in Douala and Yaoundé?',
      answer:
        'Both cities have regular power but outages do occur, sometimes lasting a few hours. Hotels typically have generator backup. A portable power bank is a practical addition to your travel kit.',
    },
    {
      question: 'Will the same adapter work in Cameroon and neighboring Nigeria?',
      answer:
        'No. Nigeria uses British-style Type D and G plugs, which are completely different from Cameroon\'s French-style outlets. You\'ll need a separate adapter if crossing into Nigeria.',
    },
  ],
  metaTitle: 'Cameroon Power Plugs — Types C & E | French System Adapter Guide',
  metaDescription:
    'Cameroon uses French-style plugs (Types C and E) at 230V/50Hz. US, UK, and Australian travelers need an adapter. Tips for Douala, Yaoundé, and local store options.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Gabon', slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville' },
    { name: 'Nigeria', slug: 'nigeria-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Congo', slug: 'congo-electric-plug-type-do-you-need-an-adapter' },
  ],
};

export default cameroon;
