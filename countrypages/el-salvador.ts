import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'el-salvador-electric-plug-type-will-you-need-an-adapter',
  name: 'El Salvador',
  demonym: 'Salvadoran',
  continent: 'North America',
  region: 'Central America',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  travelContext:
    'El Salvador is Central America\'s smallest and most densely populated country, increasingly popular for surfing, Mayan ruins at Joya de Cerén, and its Bitcoin-friendly economy. The electrical system mirrors the US. Power is generally stable in San Salvador and beach towns along the coast.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same system as the US. Your plugs and devices work without any changes.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'UK plugs won\'t fit. At 120V/60Hz, UK devices designed for 230V may need a converter. Most phone chargers and laptops are dual-voltage and work fine.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'European round-pin plugs don\'t fit flat-pin sockets. The 120V supply also requires a converter for non-dual-voltage devices.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'Australian plugs need an adapter. The 120V supply is half of Australia\'s 230V — verify your devices are dual-voltage.',
    },
  ],
  localPurchaseOptions: [
    { name: 'Omnisport', type: 'electronics', city: 'San Salvador', priceRange: '$3–10', note: 'Salvadoran electronics and department store chain' },
    { name: 'La Curacao', type: 'electronics', city: 'San Salvador', priceRange: '$3–12', note: 'Central American electronics retailer with multiple locations' },
    { name: 'Súper Selectos', type: 'supermarket', city: 'San Salvador', priceRange: '$2–8', note: 'El Salvador\'s largest supermarket chain — some carry basic adapters' },
  ],
  airportName: 'San Salvador Monseñor Óscar Arnulfo Romero International Airport',
  airportCode: 'SAL',
  neighbors: [
    { name: 'Guatemala', slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical' },
    { name: 'Honduras', slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras', plugTypes: ['A', 'B'], voltage: 120, sameAsSubject: 'identical' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in San Salvador and the beach areas of El Tunco and La Libertad have standard US-style Type A/B outlets. Newer hotels and hostels catering to digital nomads increasingly offer USB charging ports. Rural accommodations are basic but use the same plug standard.',
  faqs: [
    {
      question: 'Do US plugs work in El Salvador?',
      answer:
        'Yes. El Salvador uses the same Type A/B plugs and 120V/60Hz power as the United States. No adapter needed for American travelers.',
    },
    {
      question: 'Is the power reliable at surf beaches like El Tunco?',
      answer:
        'Yes, generally. Coastal surf towns have reliable electricity. Occasional outages happen during storms but are usually short. A power bank is handy for long beach days.',
    },
    {
      question: 'Can I use Bitcoin to buy an adapter in El Salvador?',
      answer:
        'El Salvador made Bitcoin legal tender, and some larger retailers accept it via the Chivo wallet. However, smaller shops may prefer cash (US dollars). Adapters are inexpensive either way.',
    },
  ],
  metaTitle: 'El Salvador Power Plugs — Types A & B (US System) | Adapter Guide',
  metaDescription:
    'El Salvador uses US-style Type A/B plugs at 120V/60Hz. American travelers need no adapter. European, UK, and Australian visitors need an adapter and possibly a converter.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Guatemala', slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city' },
    { name: 'Honduras', slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras' },
    { name: 'Nicaragua', slug: 'nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua' },
  ],
};

export default data;
