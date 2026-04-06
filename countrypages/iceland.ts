import type { CountryPlugData } from '../types';

const iceland: CountryPlugData = {
  slug: 'iceland-electric-plug-types-will-you-need-an-adapter-in-reykjavik',
  name: 'Iceland',
  demonym: 'Icelandic',
  continent: 'Europe',
  region: 'Northern Europe',
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
    'Iceland's power is nearly 100% renewable — generated from geothermal and hydroelectric sources. You're charging your phone with volcano power.',
    'Remote highland huts (accessible only by 4×4 or on foot) and some campsites along the Ring Road have no electrical outlets at all. A portable battery pack is essential for road trips outside Reykjavík.',
  ],

  travelContext:
    'Iceland draws visitors for the Golden Circle, the Ring Road, glaciers, hot springs, and northern lights. Reykjavík and towns along the main highway have reliable power. Remote highland interior roads (F-roads) lead to areas with zero infrastructure. Campervans are hugely popular — most rental companies provide a 12V car charger but not a mains inverter.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs require a Type A/B to C/F adapter. Most US electronics handle 230V. An adapter is essential — Iceland is not the place to arrive without one, as shops outside Reykjavík are sparse.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK three-pin plugs need an adapter for Icelandic Schuko sockets. Same 230V — no converter.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Iceland uses the same Type C/F standard as continental Europe. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Bring an adapter before arriving — buying one outside Reykjavík is difficult.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Elko',
      type: 'electronics',
      city: 'Reykjavík',
      priceRange: '€8–€20',
      note: 'Icelandic electronics retailer — your best bet for adapters in Reykjavík.',
    },
    {
      name: 'Hagkaup',
      type: 'supermarket',
      city: 'Reykjavík',
      priceRange: '€8–€18',
      note: 'Icelandic department/supermarket that may carry basic travel adapters.',
    },
    {
      name: 'Krónan',
      type: 'supermarket',
      priceRange: '€6–€15',
      note: 'Budget supermarket chain — limited electronics selection but worth checking.',
    },
    {
      name: 'Keflavík Airport (KEF)',
      type: 'airport',
      priceRange: '€10–€25',
      note: 'Duty-free and convenience shops at Keflavík sell universal adapters. Buy one here if you forgot — options thin out quickly once you leave the airport.',
    },
  ],

  airportName: 'Keflavík International Airport',
  airportCode: 'KEF',

  neighbors: [
    {
      name: 'United Kingdom',
      slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'UK uses Type G — completely different from Iceland's C/F. Adapter required.',
    },
    {
      name: 'Norway',
      slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Denmark',
      slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2',
      plugTypes: ['C', 'E', 'F', 'K'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Denmark also has Type K but modern outlets accept C/F.',
    },
  ],

  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Reykjavík hotels and guesthouses have modern Schuko outlets. Countryside hotels and farms along the Ring Road are well-powered. Highland huts maintained by Ferðafélag Íslands may have no electricity at all. Campervan travelers should bring a high-capacity power bank and a 12V USB car charger.',

  faqs: [
    {
      question: 'Do I need a power adapter for Iceland?',
      answer:
        'Yes, if you're from the US, UK, or Australia. Iceland uses European-standard Type C and F plugs. Buy your adapter before arrival or at Keflavík Airport — options outside Reykjavík are very limited.',
    },
    {
      question: 'Will I be able to charge devices on the Ring Road?',
      answer:
        'Towns and guesthouses along the Ring Road have electricity. However, remote campsites and highland huts may have no outlets. Bring a high-capacity power bank (20,000mAh+) and a 12V USB charger for your rental car.',
    },
    {
      question: 'Is Iceland's electricity really 100% renewable?',
      answer:
        'Nearly — about 99% of Iceland's electricity comes from geothermal and hydroelectric sources, making it one of the greenest power grids in the world.',
    },
    {
      question: 'Can I charge in a campervan?',
      answer:
        'Most Iceland campervan rentals have a 12V cigarette lighter socket. Bring or rent a 12V USB adapter for phone charging on the go. Some premium campervans have built-in inverters with Schuko outlets, but confirm with your rental company.',
    },
    {
      question: 'Where can I buy an adapter in Reykjavík?',
      answer:
        'Elko is the main electronics retailer. Hagkaup and 10-11 convenience stores may also carry basic adapters. Selection is limited compared to mainland Europe, so buying at Keflavík Airport on arrival is the safest option.',
    },
  ],

  metaTitle: 'Iceland Power Plugs — Will You Need an Adapter in Reykjavík? (Types C & F)',
  metaDescription:
    'Iceland uses Type C and F plugs at 230V/50Hz. Learn if you need an adapter, Ring Road charging tips, campervan power advice, and where to buy adapters.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Norway', slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo' },
    { name: 'Denmark', slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Sweden', slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden' },
  ],
};

export default iceland;
