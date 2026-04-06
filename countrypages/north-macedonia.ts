import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter',
  name: 'North Macedonia',
  demonym: 'Macedonian',
  continent: 'Europe',
  region: 'Balkans',
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
    'North Macedonia is an affordable Balkan destination known for Lake Ohrid, Skopje\'s eclectic architecture, and the Matka Canyon. The country uses standard European plugs, identical to all its neighbors. Travelers combining North Macedonia with Greece, Kosovo, or Serbia can use the same adapter throughout.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Macedonian round-pin sockets. Bring an adapter. Most modern chargers handle 230V automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs need an adapter. Voltage is compatible at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'All standard European plugs work in North Macedonia without an adapter.',
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
    {
      name: 'Setec',
      type: 'electronics',
      city: 'Skopje',
      priceRange: '€3–€10',
      note: 'North Macedonia\'s leading electronics retailer with multiple stores in Skopje.',
    },
    {
      name: 'Anhoch',
      type: 'electronics',
      city: 'Skopje',
      priceRange: '€3–€10',
      note: 'Electronics chain with stores in Skopje and other cities.',
    },
    {
      name: 'Tinex',
      type: 'supermarket',
      city: 'Skopje',
      priceRange: '€2–€6',
      note: 'Major Macedonian supermarket chain; some larger locations carry basic electronics.',
    },
  ],
  airportName: 'Skopje Alexander the Great Airport',
  airportCode: 'SKP',
  neighbors: [
    {
      name: 'Serbia',
      slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Kosovo',
      slug: 'kosovo-electric-plug-types-will-you-need-an-adapter-in-pristina',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Albania',
      slug: 'albanian-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Greece',
      slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Bulgaria',
      slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Skopje has a range of hotels from international chains to local boutique properties, all using standard European outlets. Lake Ohrid guesthouses and vacation apartments are well-equipped for the tourist season. USB ports are uncommon outside newer city hotels. Bring your own adapter as most properties do not stock them.',
  faqs: [
    {
      question: 'Is Lake Ohrid\'s power infrastructure reliable for tourists?',
      answer:
        'Yes. Ohrid is North Macedonia\'s primary tourist destination and has reliable electricity. Hotels and guesthouses along the lakefront are well-maintained during the tourist season.',
    },
    {
      question: 'Can I use the same adapter in North Macedonia and Greece?',
      answer:
        'Yes. Both countries use Types C and F at 230V/50Hz. Your adapter works on both sides of the border.',
    },
    {
      question: 'Are there two airports in North Macedonia?',
      answer:
        'Yes. Skopje (SKP) handles most international flights, while Ohrid (OHD) has seasonal service during the summer tourist period. Neither airport has extensive shopping — buy your adapter before you travel.',
    },
    {
      question: 'Where is the best place to buy an adapter in Skopje?',
      answer:
        'Setec and Anhoch are electronics retailers with stores in Skopje\'s City Mall and other shopping centers. For a quick option, check the Tinex supermarket nearest your hotel.',
    },
  ],
  metaTitle: 'North Macedonia Power Plugs — Types C & F | Adapter Guide',
  metaDescription:
    'North Macedonia uses Type C and Type F plugs at 230V/50Hz. US and UK travelers need an adapter. Same system as all Balkan neighbors.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Greece', slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece' },
    { name: 'Albania', slug: 'albanian-plug-types' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade' },
    { name: 'Bulgaria', slug: 'bulgaria-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default data;
