import type { CountryPlugData } from '@/types';

const andorra: CountryPlugData = {
  slug: 'andorra-plug-types-electric-sockets-used-in-andorra-adapter',
  name: 'Andorra',
  demonym: 'Andorran',
  continent: 'Europe',
  region: 'Western Europe',
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
  ],
  travelContext:
    'Andorra is a small Pyrenean microstate between France and Spain, popular for skiing and duty-free shopping. There is no airport — most visitors drive in from Barcelona or Toulouse. The plug system is compatible with both neighboring countries, so travelers crossing the border will not need to swap adapters.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs do not fit Andorran outlets. Bring an adapter before your trip — retail options are limited in this small country.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs need an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work throughout Andorra. Compatible with chargers from France, Spain, Germany, and the rest of continental Europe.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Pack an adapter; voltage is the same 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Pyrenees department store',
      type: 'electronics',
      city: 'Andorra la Vella',
      priceRange: '€5–€12',
      note: 'Andorra\'s main department store in the capital; electronics section stocks adapters.',
    },
    {
      name: 'Andorra 2000',
      type: 'electronics',
      city: 'Andorra la Vella',
      priceRange: '€5–€15',
      note: 'Electronics retailer on the main commercial avenue. Duty-free pricing may apply.',
    },
  ],
  neighbors: [
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C works in both. France uses Type E grounded sockets while Andorra uses Type F — hybrid E/F plugs fit both.',
    },
    {
      name: 'Spain',
      slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Andorra\'s ski resorts and hotels along the Grandvalira slopes are generally modern and well-equipped. Most use standard European outlets. Larger hotels may have adapters for international guests, but selection can be limited. If you need an adapter, it is better to buy one in Barcelona or Toulouse before arriving.',
  faqs: [
    {
      question: 'Does Andorra have an airport?',
      answer:
        'No. The nearest airports are Barcelona (BCN), about 3 hours by road, and Toulouse (TLS), about 2.5 hours away. Buy your adapter at one of those airports or in the city before driving up to Andorra.',
    },
    {
      question: 'Will my French or Spanish charger work in Andorra?',
      answer:
        'Yes. Andorra\'s outlets are compatible with standard European plugs from both France and Spain. You can cross the border without changing adapters.',
    },
    {
      question: 'Is it easy to find adapters in Andorra la Vella?',
      answer:
        'Reasonably easy. The Pyrenees department store and Andorra 2000 on the main commercial strip both stock adapters. However, options are more limited than in a larger city, so buying one before arrival is recommended.',
    },
    {
      question: 'Do Andorra\'s ski resorts have reliable electricity?',
      answer:
        'Yes. Andorra\'s power infrastructure is reliable across the country, including mountain resorts. Ski hotels are modern and well-maintained.',
    },
  ],
  metaTitle: 'Andorra Power Plugs — Types C & F | Do You Need an Adapter?',
  metaDescription:
    'Andorra uses Type C and Type F plugs at 230V/50Hz. Compatible with France and Spain. US and UK visitors need an adapter — here\'s what to know.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
  ],
};

export default andorra;
