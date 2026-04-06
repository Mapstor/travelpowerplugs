import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'vatican-city-electric-plug-types-do-you-need-an-adapter-for-vatican-city',
  name: 'Vatican City',
  demonym: 'Vatican',
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
    'Vatican City has no hotels — all visitors stay in Rome and walk in. Your charging needs are entirely a Rome question, not a Vatican one.',
  ],
  travelContext:
    'Vatican City is the world\'s smallest state at 0.44 km². There are no hotels, no shops selling electronics, and no reason to worry about plugs specifically for the Vatican. You\'ll charge everything at your accommodation in Rome, which uses the same Italian electrical system.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'Same as Italy — US plugs won\'t fit and 230V requires a converter for non-dual-voltage devices.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs need an adapter. Voltage matches at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work. Same system as Italy.',
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
    { name: 'Electronics shops near Roma Termini', type: 'electronics', city: 'Rome', priceRange: '€3–10', note: 'No shops in Vatican City itself — buy in Rome near Termini station' },
    { name: 'Mediaworld', type: 'electronics', city: 'Rome', priceRange: '€5–15', note: 'Large Italian electronics chain with multiple Rome locations' },
  ],
  airportName: 'Rome Fiumicino Leonardo da Vinci Airport',
  airportCode: 'FCO',
  neighbors: [
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters', plugTypes: ['C', 'F', 'L'], voltage: 230, sameAsSubject: 'identical' },
  ],
  hotelAdapterAvailability: 'never',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'There are no hotels in Vatican City. Visitors stay in Rome, where hotel standards range from basic to luxury. Rome hotels increasingly offer USB ports and sometimes universal outlets. See the Italy page for detailed accommodation info.',
  faqs: [
    {
      question: 'Do I need a separate adapter for Vatican City?',
      answer:
        'No. Vatican City uses the same electrical system as Italy (Types C, F, L at 230V). Whatever adapter you have for Rome works everywhere, including inside Vatican walls.',
    },
    {
      question: 'Can I charge my phone inside the Vatican Museums?',
      answer:
        'There are no public charging stations in the Vatican Museums or St. Peter\'s Basilica. Charge your devices at your Rome hotel before visiting. A portable power bank is a smart idea for long museum days.',
    },
    {
      question: 'Where is the closest place to buy an adapter if I\'m staying near the Vatican?',
      answer:
        'The Prati neighborhood surrounding Vatican City has several small electronics and phone shops along Via Cola di Rienzo. You can also find adapters at any tabaccheria (tobacco shop) or the larger Mediaworld stores in Rome.',
    },
  ],
  metaTitle: 'Vatican City Power Plugs — Italian System (C, F, L) | No Hotels, No Worries',
  metaDescription:
    'Vatican City uses Italy\'s electrical system: Types C, F, and L at 230V/50Hz. No hotels exist in Vatican City — charge in Rome. Adapter tips for US, UK, and Australian visitors.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'San Marino', slug: 'san-marino-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default data;
