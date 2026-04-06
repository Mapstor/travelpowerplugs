import type { CountryPlugData } from '@/types';

const congo: CountryPlugData = {
  slug: 'congo-electric-plug-type-do-you-need-an-adapter',
  name: 'Congo',
  demonym: 'Congolese',
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
    'The Republic of the Congo (Congo-Brazzaville) uses the French electrical system. Brazzaville has reasonable infrastructure in the city center, though power outages are not uncommon. Pointe-Noire, the economic capital, also has decent power in business areas. Rural regions have limited and unreliable electricity.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs won\'t fit. The 230V supply means non-dual-voltage devices also need a converter.',
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
        'European plugs work directly in Congolese outlets.',
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
    { name: 'Casino supermarket', type: 'supermarket', city: 'Brazzaville', priceRange: 'CFA 2,000–5,000', note: 'French-owned supermarket chain with some electronics' },
    { name: 'Local electronics stalls', type: 'electronics', city: 'Brazzaville', priceRange: 'CFA 1,000–3,000', note: 'Market stalls near the central market area selling adapters and chargers' },
  ],
  airportName: 'Brazzaville Maya-Maya Airport',
  airportCode: 'BZV',
  neighbors: [
    { name: 'Cameroon', slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Gabon', slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Central African Republic', slug: 'central-african-republic-electric-plug-types-need-an-adapter', plugTypes: ['C', 'E'], voltage: 220, sameAsSubject: 'compatible' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in central Brazzaville and Pointe-Noire have French Type E outlets. Generator backup is common at international hotels. Budget accommodations may have limited power and few outlets. Bring a power bank and a portable power strip for longer stays.',
  faqs: [
    {
      question: 'Is this the same Congo as the DRC?',
      answer:
        'No. This is the Republic of the Congo (Congo-Brazzaville), on the western bank of the Congo River. The Democratic Republic of the Congo (DRC/Congo-Kinshasa) is a separate, much larger country across the river. Both use the French plug system.',
    },
    {
      question: 'Can I use the same adapter in Congo, Gabon, and Cameroon?',
      answer:
        'Yes. All three countries use French-style Type C and E plugs at 230V. One adapter covers the entire region.',
    },
    {
      question: 'How often do power outages happen in Brazzaville?',
      answer:
        'Power cuts occur periodically in Brazzaville, sometimes lasting several hours. Hotels in the business district generally have generator backup. A power bank is essential for staying connected.',
    },
  ],
  metaTitle: 'Congo (Brazzaville) Power Plugs — Types C & E | French System Guide',
  metaDescription:
    'The Republic of the Congo uses French-style plugs (C and E) at 230V/50Hz. European travelers need no adapter. US, UK, and Australian visitors do. Brazzaville tips included.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Gabon', slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville' },
    { name: 'Cameroon', slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter' },
    { name: 'Central African Republic', slug: 'central-african-republic-electric-plug-types-need-an-adapter' },
  ],
};

export default congo;
