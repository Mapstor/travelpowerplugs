import type { CountryPlugData } from '@/types';

const paraguay: CountryPlugData = {
  slug: 'paraguay-electric-plug-types-which-adapter-will-you-need',
  name: 'Paraguay',
  demonym: 'Paraguayan',
  continent: 'South America',
  region: 'Southern Cone',
  voltage: 220,
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
  ],
  travelContext:
    'Paraguay is a landlocked South American country that sees fewer tourists than its neighbors. Asunción, the capital, has reliable electricity in the city center and business districts. The Itaipú Dam on the Brazilian border is one of the world\'s largest hydroelectric plants and supplies much of Paraguay\'s power.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs won\'t fit Type C round-pin sockets. At 220V, non-dual-voltage US devices also need a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs require an adapter. Voltage is compatible.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit directly. Type F (Schuko) plugs may be too large for some older Type C-only outlets — bring a Europlug or a slim adapter just in case.',
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
    { name: 'Salemma', type: 'electronics', city: 'Asunción', priceRange: 'PYG 20,000–60,000', note: 'Major Paraguayan electronics retailer' },
    { name: 'Electroban', type: 'electronics', city: 'Asunción', priceRange: 'PYG 15,000–50,000', note: 'Electronics and appliance store' },
    { name: 'Stock supermarkets', type: 'supermarket', city: 'Asunción', priceRange: 'PYG 10,000–40,000', note: 'Supermarket chain with some electrical accessories' },
  ],
  airportName: 'Asunción Silvio Pettirossi International Airport',
  airportCode: 'ASU',
  neighbors: [
    { name: 'Argentina', slug: 'argentina-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'I'], voltage: 220, sameAsSubject: 'partially', adapterNote: 'Argentina uses Type I alongside Type C — your Paraguayan chargers will only fit Type C outlets' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter', plugTypes: ['C', 'N'], voltage: 127, sameAsSubject: 'partially', adapterNote: 'Brazil uses Type N and has mixed voltage — Type C overlaps but check voltage' },
    { name: 'Bolivia', slug: 'bolivia-electric-plug-types-do-you-need-an-adapter', plugTypes: ['A', 'C'], voltage: 230, sameAsSubject: 'partially', adapterNote: 'Bolivia uses Type C alongside Type A — your Type C plug works in Type C outlets' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Asunción\'s business district have standard Type C outlets. International chain hotels may have USB ports. Budget accommodations and rural guesthouses typically have few outlets and no extras.',
  faqs: [
    {
      question: 'Does Paraguay only use one plug type?',
      answer:
        'Officially, Type C is the standard. In practice, some newer buildings may have multi-standard or Type F outlets, but Type C covers the vast majority of situations.',
    },
    {
      question: 'Is the electricity reliable in Asunción?',
      answer:
        'Yes. Paraguay generates enormous amounts of hydroelectric power from the Itaipú and Yacyretá dams. Asunción has a reliable power supply with rare outages.',
    },
    {
      question: 'Will my Brazilian charger work in Paraguay?',
      answer:
        'If it has a Type C plug, yes. Brazil\'s Type N plug won\'t fit Paraguayan Type C sockets. Also note that Paraguay runs at 220V while parts of Brazil run at 127V — check your device\'s voltage range.',
    },
  ],
  metaTitle: 'Paraguay Power Plugs — Type C | Adapter Guide for Asunción',
  metaDescription:
    'Paraguay uses Type C plugs at 220V/50Hz. European travelers need no adapter. US, UK, and Australian visitors need one. Local stores in Asunción and practical travel tips.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Argentina', slug: 'argentina-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Bolivia', slug: 'bolivia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Uruguay', slug: 'uruguay-electric-plug-types-which-adapter-will-you-need-in-uruguay' },
  ],
};

export default paraguay;
