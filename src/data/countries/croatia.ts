import type { CountryPlugData } from '@/types';

const croatia: CountryPlugData = {
  slug: 'croatia-electric-plug-types-do-you-need-to-take-adapter-on-trip',
  name: 'Croatia',
  demonym: 'Croatian',
  continent: 'Europe',
  region: 'Southeast Europe',
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

  quirks: [
    'Coastal Dalmatia (Split, Dubrovnik) is heavily touristed with reliable power infrastructure, but island-hopping by ferry means long stretches without outlets — bring a power bank.',
    'Some older stone apartments along the coast have limited outlet placement due to thick stone walls, so a short extension cord can be handy.',
  ],

  travelContext:
    'Croatia draws millions of visitors to its Adriatic coastline, from Dubrovnik\'s old town to the islands of Hvar and Korčula. Power infrastructure is modern and dependable in cities and tourist hubs. Ferries between islands typically have a few outlets in lounges but they fill up fast during peak season.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs require a Type A/B to C/F adapter. Most US electronics handle 230V (check the label), so no converter is needed.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs will not fit Croatian sockets. Bring a G to F adapter. Same 230V voltage means no converter needed.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Croatia uses the same Type C/F standard as Germany and most of continental Europe. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs are not compatible. Bring an adapter; voltage is the same 230V.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Links',
      type: 'electronics',
      city: 'Zagreb',
      priceRange: '€5–€15',
      note: 'Croatian electronics retailer with stores in major cities. Travel adapters available.',
    },
    {
      name: 'Elipso',
      type: 'electronics',
      priceRange: '€5–€12',
      note: 'Electronics and appliance chain found in shopping centers.',
    },
    {
      name: 'Konzum',
      type: 'supermarket',
      priceRange: '€4–€10',
      note: 'Croatia\'s largest supermarket chain — some locations carry basic adapters near electronics accessories.',
    },
    {
      name: 'Zagreb Airport (ZAG)',
      type: 'airport',
      city: 'Zagreb',
      priceRange: '€8–€18',
      note: 'Small electronics shops in departures sell universal adapters.',
    },
    {
      name: 'Split Airport (SPU)',
      type: 'airport',
      city: 'Split',
      priceRange: '€8–€18',
      note: 'Duty-free and convenience stores carry travel adapters during tourist season.',
    },
  ],

  airportName: 'Zagreb Airport',
  airportCode: 'ZAG',

  neighbors: [
    {
      name: 'Slovenia',
      slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Hungary',
      slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest',
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
      name: 'Bosnia And Herzegovina',
      slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed',
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
    {
      name: 'Italy',
      slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters',
      plugTypes: ['C', 'F', 'L'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Italy also uses Type L, but C and F sockets are common — most devices work without an adapter.',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Zagreb, Split, and Dubrovnik have modern electrical infrastructure. Boutique apartments in old-town areas may have fewer outlets. Island guesthouses are generally fine but pack a power bank for ferry days.',

  faqs: [
    {
      question: 'Do I need an adapter for Croatia from the US?',
      answer:
        'Yes. Croatia uses Type C and F plugs with round pins, so US flat-pin plugs (Type A/B) won\'t fit. Grab a travel adapter before your trip or buy one at the airport on arrival.',
    },
    {
      question: 'Is the voltage in Croatia safe for my US electronics?',
      answer:
        'Croatia uses 230V/50Hz. Most modern chargers (phones, laptops, tablets) are dual-voltage (100–240V) and work fine with just an adapter. Check the label on your device — if it only says "120V," you\'ll need a voltage converter.',
    },
    {
      question: 'Will my European plug work in Croatia?',
      answer:
        'If you\'re coming from a country that uses Type C or F plugs (Germany, France, Spain, etc.), your devices will plug in directly with no adapter needed.',
    },
    {
      question: 'Are there outlets on Croatian ferries?',
      answer:
        'Jadrolinija and other ferry operators typically have a few Schuko outlets in passenger lounges, but seats near outlets fill up quickly in summer. A portable battery is a smart backup for island-hopping days.',
    },
    {
      question: 'Can I buy a travel adapter in Dubrovnik?',
      answer:
        'Yes. Electronics shops and some convenience stores in Dubrovnik\'s newer commercial areas sell adapters. Selection may be limited in the old town itself, so buying one in advance or at the airport is more reliable.',
    },
  ],

  metaTitle: 'Croatia Power Plugs — Do You Need an Adapter? (Types C & F)',
  metaDescription:
    'Croatia uses Type C and F plugs at 230V/50Hz. Learn if you need an adapter for Split, Dubrovnik, or Zagreb, where to buy one locally, and ferry charging tips.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Slovenia', slug: 'slovenia-electric-plug-types-will-you-need-an-adapter-for-slovenia' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Montenegro', slug: 'montenegro-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Bosnia And Herzegovina', slug: 'bosnia-and-herzegovina-electric-plug-types-is-adapter-needed' },
    { name: 'Hungary', slug: 'hungary-electric-plug-types-will-you-need-an-adapter-in-budapest' },
  ],
};

export default croatia;
