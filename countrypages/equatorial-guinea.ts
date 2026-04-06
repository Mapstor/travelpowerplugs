import { CountryPlugData } from '../types';

const equatorialGuinea: CountryPlugData = {
  slug: 'equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you',
  name: 'Equatorial Guinea',
  demonym: 'Equatoguinean',
  continent: 'Africa',
  region: 'Central Africa',
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
  travelContext:
    'Equatorial Guinea is the only Spanish-speaking country in sub-Saharan Africa, but its electrical system follows the French/European standard rather than a Spanish one. The country is an oil-rich nation with two main population centers: Malabo on Bioko Island and Bata on the mainland. Power infrastructure is better than in many neighboring countries thanks to oil revenue, though outages still occur.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit. A converter is needed for non-dual-voltage devices at 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly. Standard French-style C/E outlets are used throughout.',
    },
    {
      origin: 'Spain',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Spanish plugs work directly in Equatorial Guinea\'s European-style outlets. No adapter needed despite the different colonial histories of the electrical systems.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Local shops in Malabo',
      type: 'electronics',
      city: 'Malabo',
      priceRange: '$5–$15',
      note: 'Very limited selection. Spanish-influenced retail in the capital has some electronics, but adapter availability is not guaranteed.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Malabo',
      note: 'Hotels catering to oil industry workers may have adapters available.',
    },
  ],
  airportName: 'Malabo International Airport',
  airportCode: 'SSG',
  neighbors: [
    {
      name: 'Cameroon',
      slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Gabon',
      slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Malabo and Bata that serve the oil and gas industry tend to be well-equipped with reliable generator backup, USB ports, and modern amenities. These hotels are also among the most expensive in Africa. Budget options are very limited and have less reliable power.',
  faqs: [
    {
      question: 'Does Equatorial Guinea use Spanish-style plugs?',
      answer:
        'Not specifically, but the result is the same. Equatorial Guinea uses French-style Type C and E outlets, which are compatible with Spanish Type C and F plugs. If you are traveling from Spain, your devices will work without an adapter.',
    },
    {
      question: 'How reliable is electricity in Equatorial Guinea?',
      answer:
        'Power infrastructure is better than in many Central African countries due to oil revenue. Malabo and Bata have grid coverage, though outages occur. Hotels serving the oil industry typically have robust generator backup.',
    },
    {
      question: 'Is Equatorial Guinea expensive for travelers?',
      answer:
        'Yes. Equatorial Guinea is one of the most expensive countries in Africa, driven by the oil industry. Hotels, food, and consumer goods are priced significantly higher than in neighboring countries. Adapters and electronics are no exception — bring what you need to avoid paying premium prices.',
    },
  ],
  metaTitle: 'Equatorial Guinea Power Plugs — Types C & E | Adapter Guide',
  metaDescription:
    'Equatorial Guinea uses Type C and E plugs at 220V/50Hz. Learn what adapter to bring for Malabo and Bata and what to expect from power supply.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Cameroon', slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter' },
    { name: 'Gabon', slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
  ],
};

export default equatorialGuinea;
