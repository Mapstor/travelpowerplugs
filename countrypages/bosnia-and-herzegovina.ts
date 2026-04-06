import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed',
  name: 'Bosnia And Herzegovina',
  demonym: 'Bosnian',
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
    'Bosnia and Herzegovina is gaining popularity as a travel destination, with Sarajevo and Mostar drawing visitors interested in history, culture, and affordable prices. The plug system is the same standard European setup found across the Balkans. Travelers arriving from Croatia — the most common entry point — will find identical outlets.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs will not fit Bosnian outlets. Bring an adapter. Modern electronics handle the 230V voltage automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs need an adapter. Voltage is the same 230V — no converter required.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work throughout Bosnia and Herzegovina. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter for Bosnian sockets. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Domod',
      type: 'electronics',
      city: 'Sarajevo',
      priceRange: '€4–€10',
      note: 'Electronics and home appliance chain with stores in Sarajevo and other major cities.',
    },
    {
      name: 'Imtec',
      type: 'electronics',
      city: 'Sarajevo',
      priceRange: '€4–€12',
      note: 'Tech retailer in Sarajevo\'s shopping centers.',
    },
    {
      name: 'Bingo',
      type: 'supermarket',
      city: 'Sarajevo',
      priceRange: '€3–€8',
      note: 'Bosnia\'s major supermarket chain; larger hypermarket locations stock basic adapters and electronics accessories.',
    },
  ],
  airportName: 'Sarajevo International Airport',
  airportCode: 'SJJ',
  neighbors: [
    {
      name: 'Croatia',
      slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Serbia',
      slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Montenegro',
      slug: 'montenegro-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Sarajevo has a mix of modern hotels and renovated Ottoman-era guesthouses. Newer properties use standard European outlets and may have USB ports. Budget pensions and rural accommodations near Mostar or in Herzegovina\'s countryside have reliable power with standard sockets but fewer amenities. Bring your own adapter — hotels here are less likely to stock them than in Western Europe.',
  faqs: [
    {
      question: 'I\'m visiting Mostar on a day trip from Dubrovnik — do I need a different adapter?',
      answer:
        'No. Bosnia and Herzegovina uses the same Types C and F as Croatia. Your charger works in both countries without any changes.',
    },
    {
      question: 'Is Bosnia\'s electricity reliable for travelers?',
      answer:
        'Yes. Power is reliable in cities like Sarajevo and Mostar. Brief interruptions can occur in rural areas but are infrequent. A portable power bank is useful for long bus journeys through the countryside.',
    },
    {
      question: 'Where can I buy an adapter if I arrive without one?',
      answer:
        'Domod and Imtec stores in Sarajevo stock adapters. Bingo supermarkets are widespread and the larger ones carry basic electronics. In Mostar, try the shopping area near the Stari Most bridge.',
    },
    {
      question: 'Will the same adapter work across the whole Balkans region?',
      answer:
        'Yes. Bosnia, Croatia, Serbia, Montenegro, Kosovo, Albania, and North Macedonia all use Types C and F at 230V/50Hz. One adapter serves the entire region.',
    },
  ],
  metaTitle: 'Bosnia & Herzegovina Power Plugs — Types C & F | Adapter Guide',
  metaDescription:
    'Bosnia and Herzegovina uses Type C and Type F plugs at 230V/50Hz. Same as Croatia and Serbia. US and UK visitors need an adapter.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Croatia', slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip' },
    { name: 'Serbia', slug: 'serbia-electric-plug-types-which-adapter-will-you-need-in-belgrade' },
    { name: 'Montenegro', slug: 'montenegro-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default data;
