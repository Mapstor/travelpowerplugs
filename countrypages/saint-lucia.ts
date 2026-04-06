import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need',
  name: 'Saint Lucia',
  demonym: 'Saint Lucian',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 240,
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
    'Saint Lucia is one of the most popular Caribbean holiday destinations, known for the Pitons and luxury all-inclusive resorts. The island uses British Type G outlets at 240V, consistent throughout. Resorts are well-equipped for international guests.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs do not fit British Type G outlets. Voltage is 240V — non-dual-voltage devices need a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit directly. Voltage is compatible at 240V. No adapter needed.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Type G sockets. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible at 240V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: 'Castries',
      priceRange: '$8–20',
      note: 'Major Caribbean electronics retailer with adapter selection.',
    },
    {
      name: 'M&C Home Depot',
      type: 'electronics',
      city: 'Castries',
      priceRange: '$5–15',
      note: 'Home and electronics store with travel adapters.',
    },
    {
      name: 'Gablewoods Mall shops',
      type: 'electronics',
      city: 'Castries',
      priceRange: '$5–15',
      note: 'Shopping mall with several stores that sell electronics and adapters.',
    },
  ],
  airportName: 'Hewanorra International Airport',
  airportCode: 'UVF',
  neighbors: [
    {
      name: 'Dominica',
      slug: 'dominica-electric-plug-types-will-you-need-an-adapter-with-you',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Dominica uses Type G alongside older Type D. Your British adapter works for the Type G outlets.',
    },
    {
      name: 'Saint Vincent And Grenadines',
      slug: 'saint-vincent-and-the-grenadines-electric-plug-types-adapter-a-must',
      plugTypes: ['A', 'C', 'E', 'G', 'I', 'K'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Saint Vincent has a chaotic mix of plug types including Type G. Your British adapter covers some outlets.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Saint Lucia\'s many all-inclusive resorts are well-prepared for international guests. Hair dryers are standard in most hotel rooms. Front desks at larger resorts typically keep adapters available for guests.',
  faqs: [
    {
      question: 'What plug type does Saint Lucia use?',
      answer:
        'Saint Lucia uses British Type G plugs with three rectangular pins at 240V/50Hz.',
    },
    {
      question: 'Do American visitors need an adapter in Saint Lucia?',
      answer:
        'Yes. US flat-prong plugs do not fit Type G outlets. You need a US-to-UK adapter. Also check that your devices are dual-voltage (100–240V), since Saint Lucia runs at 240V. Most phone and laptop chargers are fine, but hair dryers may not be.',
    },
    {
      question: 'Will my resort have adapters available?',
      answer:
        'Most all-inclusive and luxury resorts in Saint Lucia keep adapters at the front desk for guests. However, supply can be limited during peak season, so bringing your own is the safest approach.',
    },
  ],
  metaTitle: 'Saint Lucia Power Plugs — Type G Outlets, 240V, Adapter Guide',
  metaDescription:
    'Saint Lucia uses British Type G plugs at 240V/50Hz. Find out what adapter you need, whether your resort will have one, and where to buy locally in Castries.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Dominica', slug: 'dominica-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Saint Vincent And Grenadines', slug: 'saint-vincent-and-the-grenadines-electric-plug-types-adapter-a-must' },
    { name: 'Grenada', slug: 'grenada-electric-plug-types-will-you-need-an-adapter-in-grenada' },
    { name: 'Barbados', slug: 'barbados-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default data;
