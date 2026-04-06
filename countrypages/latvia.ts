import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'latvia-electric-plug-type-will-you-need-an-adapter-in-riga',
  name: 'Latvia',
  demonym: 'Latvian',
  continent: 'Europe',
  region: 'Baltic States',
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
    'Latvia sits in the heart of the Baltic states, with Riga serving as a major regional hub. The country uses the standard continental European plug system shared by its neighbors Estonia and Lithuania. Travelers moving through the Baltics can use the same chargers and adapters everywhere.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs are flat-pronged and will not fit Latvian round-pin sockets. An adapter is essential. Most chargers and laptops are dual-voltage, so a converter is rarely needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'The large British three-pin plug requires a UK-to-Europe adapter. Voltage is the same 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'All standard European plugs work in Latvia without an adapter. Type C fits directly; Type E and F plugs are compatible with Latvian sockets.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage matches at 230V, so no converter necessary.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'RD Electronics',
      type: 'electronics',
      city: 'Riga',
      priceRange: '€5–€12',
      note: 'Latvia\'s largest electronics chain with multiple stores in Riga; stocks travel adapters.',
    },
    {
      name: 'Euronics',
      type: 'electronics',
      city: 'Riga',
      priceRange: '€5–€15',
      note: 'International electronics chain present in Riga\'s major shopping malls.',
    },
    {
      name: 'Rimi',
      type: 'supermarket',
      city: 'Riga',
      priceRange: '€3–€8',
      note: 'Large Rimi Hypermarket locations carry basic travel adapters in the electronics aisle.',
    },
  ],
  airportName: 'Riga International Airport',
  airportCode: 'RIX',
  neighbors: [
    {
      name: 'Estonia',
      slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Lithuania',
      slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Belarus',
      slug: 'belarus-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Riga\'s hotels range from renovated Art Nouveau buildings to modern business hotels. Most mid-range and upscale properties provide hair dryers and occasionally have USB ports. Budget hostels in the Old Town use standard European outlets. Reception desks at larger hotels may lend adapters on request.',
  faqs: [
    {
      question: 'Do all three Baltic countries use the same plugs?',
      answer:
        'Yes. Estonia, Latvia, and Lithuania all use Types C and F at 230V/50Hz. One adapter will serve you across all three countries.',
    },
    {
      question: 'Can I buy a travel adapter at Riga Airport?',
      answer:
        'There is a small selection of travel accessories at the airport shops, but prices are higher than in the city. If you can wait, RD Electronics or Rimi in central Riga will have better options for less.',
    },
    {
      question: 'Is the voltage in Latvia safe for my US laptop charger?',
      answer:
        'Check the small print on your charger. If it reads "Input: 100–240V" (which most laptop and phone chargers do), you only need a plug adapter — no voltage converter.',
    },
    {
      question: 'Are power outages a concern for travelers in Latvia?',
      answer:
        'Latvia has a reliable power grid. Outages are rare in Riga and other cities. Rural guesthouses may occasionally experience brief interruptions during severe winter storms, but this is uncommon.',
    },
  ],
  metaTitle: 'Latvia Power Plugs — Types C & F | Adapter Guide for Riga',
  metaDescription:
    'Latvia uses Type C and Type F plugs at 230V/50Hz. US and UK travelers need an adapter. Find out what to pack and where to buy adapters in Riga.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Estonia', slug: 'estonia-electric-plug-types-will-you-need-an-adapter-in-estonia' },
    { name: 'Lithuania', slug: 'lithuania-electric-plug-types-will-you-need-an-adapter-in-vilnius-2' },
    { name: 'Finland', slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki' },
  ],
};

export default data;
