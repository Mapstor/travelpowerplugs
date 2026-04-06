import type { CountryPlugData } from '@/types';

const senegal: CountryPlugData = {
  slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar',
  name: 'Senegal',
  demonym: 'Senegalese',
  continent: 'Africa',
  region: 'West Africa',
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
      id: 'type-d',
      name: 'Type D',
      subtitle: 'Old British (India)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 5.08,
      pinSpacing: 19.1,
      ratedAmps: 5,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.3,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.48,
      recessRadius: 1.0,
      faceplateSize: 2.8,
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
    {
      id: 'type-k',
      name: 'Type K',
      subtitle: 'Danish',
      pins: 3,
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
    'Senegal\'s plug mix reflects layered colonial history: French Type C/E is dominant, older British-influenced Type D lingers in some buildings, and Danish Type K appears due to past Danish aid and infrastructure projects.',
    'A universal adapter is the safest approach to handle the mix. Dakar is relatively well-powered, but Saint-Louis and the Casamance region may experience irregular power supply.',
  ],
  travelContext:
    'Senegal is a popular West African destination known for Dakar\'s vibrant culture, Gorée Island, and the Casamance\'s natural beauty. Dakar has the most reliable power infrastructure in the country. Outside the capital, particularly in the Casamance and rural areas, power cuts are more frequent. Hotels in tourist zones generally maintain generator backup.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs won\'t fit any Senegalese socket type. At 230V, non-dual-voltage US devices need a converter too.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs don\'t fit. Bring an adapter. Voltage is compatible at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C fits everywhere. Type F (Schuko) plugs work in Type E sockets thanks to the shared pin dimensions. No adapter needed for most European travelers.',
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
    { name: 'Auchan Sénégal', type: 'supermarket', city: 'Dakar', priceRange: 'CFA 2,000–5,000', note: 'French-style hypermarket with electronics section' },
    { name: 'CCBM Informatique', type: 'electronics', city: 'Dakar', priceRange: 'CFA 3,000–8,000', note: 'IT and electronics retailer' },
    { name: 'Boutiques on Avenue Ponty', type: 'convenience', city: 'Dakar', priceRange: 'CFA 1,500–4,000', note: 'Small shops in central Dakar selling phone accessories and adapters' },
  ],
  airportName: 'Dakar Blaise Diagne International Airport',
  airportCode: 'DSS',
  neighbors: [
    { name: 'Gambia', slug: 'gambia-electric-plug-types-will-you-need-an-adapter-in-banjul', plugTypes: ['G'], voltage: 230, sameAsSubject: 'different', adapterNote: 'Gambia uses British Type G — completely different from Senegal' },
    { name: 'Guinea', slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry', plugTypes: ['C', 'F', 'K'], voltage: 220, sameAsSubject: 'mostly' },
    { name: 'Guinea-Bissau', slug: 'guinea-bissau-electric-plug-type-will-you-need-an-adapter-in-bissau', plugTypes: ['C'], voltage: 220, sameAsSubject: 'partially' },
    { name: 'Mali', slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali', plugTypes: ['C', 'E'], voltage: 220, sameAsSubject: 'mostly' },
    { name: 'Mauritania', slug: 'mauritania-electric-plug-types-will-you-need-an-adapter', plugTypes: ['C'], voltage: 220, sameAsSubject: 'partially' },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Dakar\'s Plateau and Almadies districts have French-style Type E outlets as standard. Higher-end hotels may stock adapters at reception. In Saint-Louis and Casamance lodges, expect basic outlets and bring your own power strip. Generator backup is common at tourist-oriented hotels.',
  faqs: [
    {
      question: 'Why does Senegal have four different plug types?',
      answer:
        'The mix reflects different influences: French colonial infrastructure (Type C/E), older British-style wiring (Type D) in some buildings, and Danish Type K sockets installed through Scandinavian development projects. In practice, Type C/E dominates in Dakar.',
    },
    {
      question: 'What adapter should I bring for Senegal?',
      answer:
        'A universal adapter is best given the mix of socket types. If you\'re coming from continental Europe, your Type C plugs will work in most outlets. From the US, UK, or Australia, a universal adapter covers all possibilities.',
    },
    {
      question: 'Are power outages common in Dakar?',
      answer:
        'Dakar is the most reliably powered city in Senegal. Outages happen but are less frequent than in the rest of the country. Hotels in tourist areas usually have generators. Outside Dakar, carry a power bank.',
    },
    {
      question: 'Can I charge my phone at Blaise Diagne Airport?',
      answer:
        'Yes. Dakar\'s international airport has charging stations and French-style Type E outlets in the terminal. There are also some USB charging points in the departure lounge.',
    },
    {
      question: 'Is the Casamance region different electrically?',
      answer:
        'The Casamance has the same plug types as the rest of Senegal, but power supply is less reliable. Eco-lodges and rural guesthouses may rely on solar or generator power with limited outlets. Bring a power bank and a universal adapter.',
    },
  ],
  metaTitle: 'Senegal Power Plugs — Types C, D, E & K | Adapter Guide for Dakar',
  metaDescription:
    'Senegal uses Types C, D, E, and K at 230V/50Hz — a mix of French, British, and Danish systems. A universal adapter is recommended. Tips for Dakar, Saint-Louis, and Casamance.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Gambia', slug: 'gambia-electric-plug-types-will-you-need-an-adapter-in-banjul' },
    { name: 'Mali', slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali' },
    { name: 'Guinea', slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry' },
    { name: 'Ivory Coast', slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter' },
  ],
};

export default senegal;
