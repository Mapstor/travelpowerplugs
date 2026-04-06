import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'grenada-electric-plug-types-will-you-need-an-adapter-in-grenada',
  name: 'Grenada',
  demonym: 'Grenadian',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 6.35,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.6,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  travelContext:
    'Grenada, the "Spice Island," is a popular Caribbean destination with a straightforward electrical system. British Type G outlets are standard across the island, including in the sister islands of Carriacou and Petite Martinique. Power is generally reliable in tourist areas.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs do not fit British Type G outlets. Grenada runs at 230V, so non-dual-voltage devices need a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit directly. Voltage is compatible at 230V. No adapter or converter needed.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs are incompatible with Type G sockets. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: "St. George's",
      priceRange: '$8–20',
      note: 'Caribbean electronics retailer with adapters and appliances.',
    },
    {
      name: 'Jonas Browne & Hubbard',
      type: 'electronics',
      city: "St. George's",
      priceRange: '$5–15',
      note: 'Long-established Grenadian retailer with hardware and electronics.',
    },
    {
      name: 'IGA Grenada',
      type: 'supermarket',
      city: "St. George's",
      priceRange: '$5–12',
      note: 'Supermarket that may carry basic travel adapters.',
    },
  ],
  airportName: 'Maurice Bishop International Airport',
  airportCode: 'GND',
  neighbors: [
    {
      name: 'Saint Vincent And Grenadines',
      slug: 'saint-vincent-and-the-grenadines-electric-plug-types-adapter-a-must',
      plugTypes: ['A', 'C', 'E', 'G', 'I', 'K'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Saint Vincent has multiple plug types including Type G. Your British adapter works for some outlets there.',
    },
    {
      name: 'Trinidad And Tobago',
      slug: 'trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 115,
      sameAsSubject: 'different',
      adapterNote: 'Trinidad and Tobago uses US-style Type A/B at 115V — completely different from Grenada\'s British system.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels and resorts in Grenada use standard British Type G outlets. Larger resorts generally have hair dryers in rooms and can provide adapters at reception. Power is reliable in tourist areas around Grand Anse and St. George\'s.',
  faqs: [
    {
      question: 'What plug type does Grenada use?',
      answer:
        'Grenada uses British Type G plugs with three rectangular pins at 230V/50Hz. This is consistent across the main island and the smaller islands of Carriacou and Petite Martinique.',
    },
    {
      question: 'Do I need an adapter coming from the US?',
      answer:
        'Yes. US flat-prong plugs are incompatible with Grenada\'s British Type G outlets. You also need to ensure your devices are dual-voltage (100–240V), as Grenada runs at 230V. Most modern phone and laptop chargers handle this automatically.',
    },
    {
      question: 'Is power reliable in Grenada?',
      answer:
        'Power is generally reliable in Grenada, especially in tourist areas around St. George\'s and Grand Anse Beach. Occasional outages can occur, but hotels typically restore power quickly.',
    },
  ],
  metaTitle: 'Grenada Power Plugs — Type G Outlets, 230V, Adapter Guide',
  metaDescription:
    'Grenada uses British Type G plugs at 230V/50Hz. Learn what adapter to bring, where to buy one in St. George\'s, and what to expect from the Spice Island\'s power system.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Saint Vincent And Grenadines', slug: 'saint-vincent-and-the-grenadines-electric-plug-types-adapter-a-must' },
    { name: 'Trinidad And Tobago', slug: 'trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Saint Lucia', slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Barbados', slug: 'barbados-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default data;
