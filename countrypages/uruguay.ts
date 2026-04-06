import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'uruguay-electric-plug-types-which-adapter-will-you-need-in-uruguay',
  name: 'Uruguay',
  demonym: 'Uruguayan',
  continent: 'South America',
  region: 'Southern Cone',
  voltage: 220,
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
    'Uruguay uses a mix of Type C (European), Type F (Schuko), and Type L (Italian). Many outlets are combo sockets that accept multiple plug shapes, reducing the need for adapters.',
    'Colonia del Sacramento\'s UNESCO-listed historic quarter has older wiring and may have fewer or more worn outlets than modern Montevideo buildings.',
  ],
  travelContext:
    'Uruguay is a compact, prosperous South American country popular for its beaches, wine country, and the charming colonial town of Colonia del Sacramento. Montevideo and Punta del Este have modern, reliable power. The country\'s Italian immigrant heritage is reflected in the widespread use of Type L sockets.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs won\'t fit Uruguayan round-pin sockets. At 220V, non-dual-voltage US devices also need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs need an adapter. Voltage is close to UK standards.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit everywhere. Type F (Schuko) plugs work in Type F outlets. Some Type L-only sockets may require an adapter for Schuko plugs, but combo outlets are common.',
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
    { name: 'Mosca', type: 'electronics', city: 'Montevideo', priceRange: 'UYU 200–600', note: 'Uruguayan electronics and appliance chain' },
    { name: 'Geant', type: 'supermarket', city: 'Montevideo', priceRange: 'UYU 150–400', note: 'Hypermarket with electronics section' },
    { name: 'Tienda Inglesa', type: 'supermarket', city: 'Montevideo', priceRange: 'UYU 200–500', note: 'Upscale supermarket chain with some electronics' },
    { name: 'Tata', type: 'supermarket', city: 'Montevideo', priceRange: 'UYU 100–350', note: 'Supermarket chain found throughout Uruguay' },
  ],
  airportName: 'Montevideo Carrasco International Airport',
  airportCode: 'MVD',
  neighbors: [
    { name: 'Argentina', slug: 'argentina-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'I'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'Argentina uses Type I alongside Type C — Uruguayan Type L/F plugs won\'t fit Type I outlets' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'N'], voltage: 127, sameAsSubject: 'partially', adapterNote: 'Brazil uses Type N and has dual voltage (127V/220V) — Type C overlaps but grounded plugs differ' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Montevideo and Punta del Este frequently have combo outlets that accept Type C, F, and L. USB charging ports are increasingly common in newer hotels. Colonia del Sacramento\'s boutique hotels in historic buildings may have older, less versatile outlets.',
  faqs: [
    {
      question: 'What is the most common outlet type in Uruguay?',
      answer:
        'Type C and Type L are the most common, often as combo sockets that accept both. Type F (Schuko) also appears, particularly in newer construction. You\'ll rarely struggle with a European Europlug.',
    },
    {
      question: 'Will my Argentina adapter work in Uruguay?',
      answer:
        'It depends. If you have a Type C adapter, it will work in Uruguay. If you have a Type I adapter (Australian-style, common in Argentina), it won\'t fit Uruguayan sockets. Uruguay\'s grounded outlets are Type F or L, not Type I.',
    },
    {
      question: 'Is the power reliable in Punta del Este?',
      answer:
        'Yes. Punta del Este has reliable electricity year-round. During the busy summer season (December–February), the resort town\'s infrastructure handles the influx well.',
    },
    {
      question: 'Do I need to worry about voltage in Uruguay?',
      answer:
        'Only if you\'re coming from a 120V country (US, Canada, Japan). Uruguay uses 220V. Most modern phone chargers and laptops are dual-voltage (100–240V) and work fine. Check the label on hair dryers and other appliances.',
    },
    {
      question: 'Are combo sockets really common?',
      answer:
        'Yes. Uruguay has widely adopted multi-standard combo sockets that accept Type C, F, and L plugs in a single outlet. They\'re standard in hotels and newer homes. Older buildings may still have single-type outlets.',
    },
  ],
  metaTitle: 'Uruguay Power Plugs — Types C, F & L | Adapter Guide for Montevideo',
  metaDescription:
    'Uruguay uses Types C, F, and L at 220V/50Hz. Combo sockets are common. European travelers usually need no adapter. US, UK, and Australian visitors do. Tips for Montevideo and Punta del Este.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Argentina', slug: 'argentina-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Paraguay', slug: 'paraguay-electric-plug-types-which-adapter-will-you-need' },
  ],
};

export default data;
