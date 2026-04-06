import { CountryPlugData } from '../types';

const centralAfricanRepublic: CountryPlugData = {
  slug: 'central-african-republic-electric-plug-types-need-an-adapter',
  name: 'Central African Republic',
  demonym: 'Central African',
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
    'The Central African Republic uses the French C/E electrical standard, but infrastructure is severely limited. Bangui, the capital, has partial grid coverage with frequent outages. Much of the country outside Bangui has no electricity at all. Ongoing security concerns further complicate travel logistics. Portable power is essential for any visit.',
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
        'Type G plugs need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly. French-standard C/E outlets are used.',
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
      name: 'Small electronics stalls',
      type: 'electronics',
      city: 'Bangui',
      priceRange: '$2–$8',
      note: 'Very limited. A few stalls in Bangui may carry basic adapters, but availability is unreliable. Bring everything from home.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Bangui',
      note: 'Hotels and guesthouses serving NGO workers may have some adapters available.',
    },
  ],
  airportName: "Bangui M'Poko International Airport",
  airportCode: 'BGF',
  neighbors: [
    {
      name: 'Cameroon',
      slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Chad',
      slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Chad shares C/E types but also has Type D and F outlets.',
    },
    {
      name: 'Sudan',
      slug: 'sudan-electric-plug-types-which-adapter-will-you-need-in-sudan',
      plugTypes: ['C', 'D'],
      voltage: 230,
      sameAsSubject: 'partially',
    },
    {
      name: 'Congo',
      slug: 'congo-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Accommodation in Bangui is limited to a handful of hotels and guesthouses, many of which serve humanitarian workers and diplomats. These typically have generator backup, but outages are still common. Outside Bangui, accommodation options are extremely basic with minimal or no electricity. A portable battery pack, flashlight, and solar charger are essential.',
  faqs: [
    {
      question: 'Is there reliable electricity in the Central African Republic?',
      answer:
        'No. Even Bangui has very unreliable power with frequent extended outages. Most of the country outside the capital has no grid electricity. Hotels with generator backup provide the most reliable power, but fuel shortages can affect generator operation too.',
    },
    {
      question: 'What adapter should I bring?',
      answer:
        'If you have standard European devices with Type C or E/F plugs, no adapter is needed. For all other plug types, a universal adapter is recommended. The bigger concern is having portable power, since outlets may not have electricity even if the plug fits.',
    },
    {
      question: 'Will my adapter from Cameroon work in the Central African Republic?',
      answer:
        'Yes. Both countries use identical Type C and E outlets at 220V/50Hz. Your adapter and chargers will work the same way in both countries.',
    },
  ],
  metaTitle: 'Central African Republic Power Plugs — Types C & E | Adapter Guide',
  metaDescription:
    'The Central African Republic uses Type C and E plugs at 220V/50Hz. Power is extremely unreliable — learn what adapter and backup power to bring.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Cameroon', slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter' },
    { name: 'Chad', slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter' },
    { name: 'Congo', slug: 'congo-electric-plug-type-do-you-need-an-adapter' },
  ],
};

export default centralAfricanRepublic;
