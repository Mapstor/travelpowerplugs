import type { CountryPlugData } from '../types';

const netherlands: CountryPlugData = {
  slug: 'netherlands-electric-plug-types-will-you-need-an-adapter',
  name: 'Netherlands',
  demonym: 'Dutch',
  continent: 'Europe',
  region: 'Western Europe',
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
    'The Netherlands uses the same Type C/F system found across Germany, France, and most of continental Europe. Electrically, there are no surprises here.',
  ],
  travelContext:
    'The Netherlands is a compact, highly developed country where Amsterdam alone welcomes millions of international visitors each year. Electrical infrastructure is modern and extremely reliable. Canal house hotels and houseboats may have slightly older wiring, but everything uses the standard European plug system.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US/Canadian flat-pin plugs don\'t fit Dutch round-pin outlets. You need an adapter. Most modern US devices are dual-voltage — no converter required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs won\'t fit. Bring a UK-to-Europe adapter. Voltage is the same 230V.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Visitors from Germany, Belgium, France, Spain, and most of Europe can plug in directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I angled flat-pin plugs won\'t fit Dutch sockets. Bring an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'MediaMarkt',
      type: 'electronics',
      note: 'Major electronics chain with locations throughout the Netherlands. Reliable for travel adapters and power accessories.',
    },
    {
      name: 'Coolblue',
      type: 'electronics',
      note: 'Popular Dutch electronics retailer with physical stores in major cities and fast online delivery (often same-day in the Randstad).',
    },
    {
      name: 'Action',
      type: 'convenience',
      note: 'Budget chain found everywhere in the Netherlands. Stocks basic adapters for a few euros.',
    },
    {
      name: 'HEMA',
      type: 'convenience',
      note: 'Beloved Dutch department/variety store chain. Carries travel adapters in the electronics section.',
    },
    {
      name: 'Amsterdam Schiphol Airport (AMS)',
      type: 'airport',
      city: 'Amsterdam',
      priceRange: '€10–25',
      note: 'Multiple electronics shops throughout the terminal sell universal adapters at typical airport prices.',
    },
  ],
  airportName: 'Amsterdam Schiphol Airport',
  airportCode: 'AMS',
  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Germany uses the exact same Type C/F system — no adapter needed.',
    },
    {
      name: 'Belgium',
      slug: 'belgium-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Belgium uses Type E (French-style with a ground pin) alongside Type C. Your Type C plugs work fine in Belgium; Type F plugs also fit most modern Belgian outlets.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Dutch hotels are generally well-equipped with modern outlets. Many properties — especially in Amsterdam\'s boutique hotel scene — now include USB ports in rooms. Canal house hotels may have limited outlets due to narrow historic layouts, so a small power strip can help.',
  faqs: [
    {
      question: 'Do I need a power adapter for the Netherlands?',
      answer:
        'If you\'re from the US, UK, or Australia, yes. European visitors using Type C or F plugs don\'t need one — it\'s the same system.',
    },
    {
      question: 'What plugs does the Netherlands use?',
      answer:
        'The Netherlands uses Type C (Europlug) and Type F (Schuko) — the same plugs used across Germany, France, Spain, and most of continental Europe.',
    },
    {
      question: 'Can I buy an adapter at Schiphol Airport?',
      answer:
        'Yes. Schiphol has several electronics shops selling universal adapters. Expect to pay €10–25, which is more than in-town shops like Action or HEMA.',
    },
    {
      question: 'Will my Netherlands adapter work in Belgium and Germany?',
      answer:
        'Yes. Germany uses identical Type C/F plugs. Belgium uses Type E for grounded connections, but Type C and most Type F plugs fit Belgian outlets too. One adapter covers all three countries.',
    },
    {
      question: 'Do I need a voltage converter for the Netherlands?',
      answer:
        'Almost certainly not. The Netherlands runs at 230V/50Hz, and modern electronics (phones, laptops, tablets) are dual-voltage. Check your device label for "100–240V" — if it says that, an adapter is all you need.',
    },
  ],
  metaTitle: 'Netherlands Power Plugs — Do You Need an Adapter? (Type C & F)',
  metaDescription:
    'The Netherlands uses Type C and F plugs at 230V/50Hz. Find out if you need an adapter for Amsterdam, where to buy one at Schiphol, and tips for canal house hotels.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Belgium', slug: 'belgium-electric-plug-types-do-you-need-an-adapter' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
  ],
};

export default netherlands;
