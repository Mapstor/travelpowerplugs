import type { CountryPlugData } from '../types';

const tunisia: CountryPlugData = {
  slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia',
  name: 'Tunisia',
  demonym: 'Tunisian',
  continent: 'Africa',
  region: 'North Africa',
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
    'Tunisia follows the French electrical system with Type C and Type E sockets throughout the country.',
    'Popular beach resort areas like Hammamet and Djerba have reliable and consistent power supply.',
  ],
  travelContext:
    'Tunisia is a popular Mediterranean destination combining coastal resorts, ancient ruins like Carthage and Dougga, and Saharan adventures. The northern cities and beach resorts have excellent electrical infrastructure, while remote oasis towns in the south may have fewer outlets and less reliable supply.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Tunisian round-pin sockets. You need an adapter for Type C or Type E outlets. Most modern US electronics are dual-voltage (100–240V), so a converter is typically unnecessary.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'The British three-pin rectangular plug does not fit Tunisian outlets. Bring an adapter for Type E sockets. Voltage is compatible at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European Type C plugs fit Tunisian sockets directly. Type F (Schuko) plugs also fit Type E outlets. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian angled flat-pin plugs are incompatible with Tunisian outlets. An adapter is required. Voltage is similar at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Mytek',
      type: 'electronics',
      city: 'Tunis',
      priceRange: '10–25 TND',
      note: 'Major electronics retailer with branches across Tunisia. Reliable source for adapters.',
    },
    {
      name: 'Tunisianet',
      type: 'electronics',
      city: 'Tunis',
      priceRange: '8–20 TND',
      note: 'Electronics store with online and physical presence in Tunis.',
    },
    {
      name: 'Monoprix Tunisia',
      type: 'supermarket',
      city: 'Tunis',
      priceRange: '8–15 TND',
      note: 'French-style supermarket chain; electronics section may carry basic adapters.',
    },
    {
      name: 'Carrefour',
      type: 'supermarket',
      city: 'Tunis',
      priceRange: '10–20 TND',
      note: 'Hypermarket with a wide electronics aisle. Most likely to stock universal adapters.',
    },
  ],
  airportName: 'Tunis-Carthage International Airport',
  airportCode: 'TUN',
  neighbors: [
    {
      name: 'Algeria',
      slug: 'algeria-electrical-plug-type',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote:
        'Algeria uses Type C (same) and Type F instead of Type E. The ungrounded Type C plug works in both countries, and Type E/F hybrid plugs are widely available.',
    },
    {
      name: 'Libya',
      slug: 'libya-electric-plug-types-will-you-need-an-adapter-in-libya',
      plugTypes: ['C', 'L'],
      voltage: 127,
      sameAsSubject: 'partially',
      adapterNote:
        'Libya uses different plug types and a lower voltage. Check device compatibility and bring a suitable adapter if crossing the border.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Resort hotels in Hammamet, Sousse, and Djerba frequently have adapters at reception for international guests. Budget riads and guesthouses in the medinas of Tunis or Kairouan are less likely to provide them, so bring your own.',
  faqs: [
    {
      question: 'Do I need an adapter for Tunisia if I am coming from Europe?',
      answer:
        'Most European travelers do not need an adapter. Tunisia uses Type C and Type E sockets, which are the same as in France and much of continental Europe. Your standard Europlug or Schuko plug will work directly.',
    },
    {
      question: 'Will my phone charger work in Tunisia?',
      answer:
        'If your phone charger has a USB adapter with a European-style two-round-pin plug, it will work without an adapter. US and UK plug chargers will need an adapter. All modern phone chargers are dual-voltage, so no converter is needed.',
    },
    {
      question: 'Is the power reliable in Tunisia's Saharan oasis towns?',
      answer:
        'Power in remote southern areas like Tozeur and Douz is generally available but can be less consistent than in the north. Some oasis guesthouses have limited outlets. A portable battery pack is a smart addition for desert excursions.',
    },
    {
      question: 'Can I buy a power adapter at the airport in Tunis?',
      answer:
        'Tunis-Carthage Airport has a limited selection of shops, and adapter availability is not guaranteed. It is safer to purchase one before your trip or at an electronics store like Mytek in the city.',
    },
    {
      question: 'What is the difference between Type C and Type E plugs in Tunisia?',
      answer:
        'Type C is the ungrounded two-round-pin Europlug used for low-power devices. Type E is the grounded French-style socket with a protruding earth pin on the outlet itself. Most Tunisian wall sockets are Type E, but they accept Type C plugs as well.',
    },
  ],
  metaTitle:
    'Tunisia Power Plugs & Adapters: Types C & E – What You Need to Know',
  metaDescription:
    'Tunisia uses Type C and Type E plugs at 230V/50Hz. Find out if you need an adapter, where to buy one locally, and how to stay charged from Tunis to the Sahara.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Algeria',
      slug: 'algeria-electrical-plug-type',
    },
    {
      name: 'Morocco',
      slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco',
    },
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
    },
  ],
};

export default tunisia;
