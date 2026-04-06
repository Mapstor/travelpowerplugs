import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'san-marino-electric-plug-types-will-you-need-an-adapter',
  name: 'San Marino',
  demonym: 'Sammarinese',
  continent: 'Europe',
  region: 'Southern Europe',
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
    {
      id: 'type-l',
      name: 'Type L',
      subtitle: 'Italian',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.2,
      bodyHeight: 0.8,
      bodyCornerRadius: 0.2,
      noseRadius: 0.45,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'San Marino uses the same electrical system as Italy — Type C, F, and L. The country is completely surrounded by Italy, so anything that works in Italy works here.',
  ],
  travelContext:
    'San Marino is a microstate perched on Mount Titano, entirely surrounded by Italy. Most visitors come as day-trippers from Rimini or Bologna. If you\'re staying overnight, your Italian adapter setup carries over without any changes.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs won\'t fit. At 230V, non-dual-voltage US devices also need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs require an adapter. Voltage is the same at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work. You may also encounter Italian Type L sockets — Type C fits these, but a grounded Schuko (F) plug may need an adapter for Type L outlets.',
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
    { name: 'Small shops in San Marino city center', type: 'convenience', city: 'San Marino', priceRange: '€5–15', note: 'Very limited selection — a few tourist-oriented shops may stock basic adapters' },
    { name: 'Buy in nearby Rimini (Italy)', type: 'electronics', city: 'Rimini', priceRange: '€3–10', note: 'Electronics shops in Rimini are a 30-minute drive and have full adapter selection' },
  ],
  airportName: 'Bologna Guglielmo Marconi Airport',
  airportCode: 'BLQ',
  neighbors: [
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters', plugTypes: ['C', 'F', 'L'], voltage: 230, sameAsSubject: 'identical' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'San Marino has a small number of hotels and B&Bs, mostly in the historic center on Mount Titano. Outlet availability and quality mirror Italian standards. Don\'t expect USB ports — bring your own charging cables and adapter if needed.',
  faqs: [
    {
      question: 'Are San Marino\'s plugs the same as Italy\'s?',
      answer:
        'Yes, identical. Type C, F, and L at 230V/50Hz. If you\'re equipped for Italy, you\'re set for San Marino.',
    },
    {
      question: 'Can I buy an adapter in San Marino itself?',
      answer:
        'Possibly, but selection is very limited. San Marino is tiny and shops cater mostly to tourists buying souvenirs. Your best bet is to buy an adapter in Rimini or Bologna before visiting.',
    },
    {
      question: 'What is a Type L plug and will I encounter it?',
      answer:
        'Type L is the Italian grounded plug with three round pins in a row. It\'s common alongside Type C and F. Your ungrounded Europlug (Type C) fits Type L sockets, but if you have a grounded Schuko (Type F) device, you may need a small F-to-L adapter.',
    },
  ],
  metaTitle: 'San Marino Power Plugs — Types C, F & L | Italian System Guide',
  metaDescription:
    'San Marino uses the Italian electrical system: Types C, F, and L at 230V/50Hz. US, UK, and Australian travelers need an adapter. Practical tips for this tiny mountaintop state.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Vatican City', slug: 'vatican-city-electric-plug-types-do-you-need-an-adapter-for-vatican-city' },
  ],
};

export default data;
