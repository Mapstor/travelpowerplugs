import type { CountryPlugData } from '../types';

const sweden: CountryPlugData = {
  slug: 'sweden-electric-plug-types-will-you-need-an-adapter-for-sweden',
  name: 'Sweden',
  demonym: 'Swedish',
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
    'Swedish Lapland cabins and icehotels have reliable power, but remote wilderness stays and northern camping may have limited or no outlets — a high-capacity power bank is essential for aurora-chasing trips.',
    'SJ (Swedish Railways) long-distance trains have outlets at every seat, making Sweden one of the best countries for staying charged while traveling by rail.',
  ],

  travelContext:
    'Sweden stretches from cosmopolitan Stockholm to the Arctic wilderness of Lapland. Power infrastructure is excellent across the country. The SJ train network provides outlets on all X2000 and intercity services. Even remote northern towns have reliable electricity.',

  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs don't fit Swedish sockets. Bring a Type A/B to C/F adapter. Most US chargers handle 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs need an adapter for Swedish Schuko sockets. Same 230V — no converter.',
    },
    {
      origin: 'EU / Germany',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Sweden uses the same Type C/F standard. Your European plugs work directly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs won't fit. Pack an adapter; voltage matches.',
    },
  ],

  localPurchaseOptions: [
    {
      name: 'Elgiganten',
      type: 'electronics',
      city: 'Stockholm',
      priceRange: '50–150 SEK',
      note: 'Sweden's largest electronics chain with stores in every major city.',
    },
    {
      name: 'NetOnNet',
      type: 'electronics',
      priceRange: '40–120 SEK',
      note: 'Electronics retailer with warehouse-style stores and online pickup.',
    },
    {
      name: 'Clas Ohlson',
      type: 'electronics',
      priceRange: '50–130 SEK',
      note: 'Swedish hardware and accessories chain — reliable for travel adapters and power strips.',
    },
    {
      name: 'ICA',
      type: 'supermarket',
      priceRange: '40–100 SEK',
      note: 'Larger ICA Maxi stores sometimes carry basic adapters in their electronics section.',
    },
    {
      name: 'Stockholm Arlanda Airport (ARN)',
      type: 'airport',
      city: 'Stockholm',
      priceRange: '80–200 SEK',
      note: 'Tech accessories shops in terminals 2 and 5 sell universal adapters.',
    },
  ],

  airportName: 'Stockholm Arlanda Airport',
  airportCode: 'ARN',

  neighbors: [
    {
      name: 'Norway',
      slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Finland',
      slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki',
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
      adapterNote: 'Denmark also has Type K sockets, but most modern outlets accept C and F — your Swedish devices will work.',
    },
  ],

  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Swedish hotels are consistently well-equipped, from Stockholm city hotels to Lapland wilderness lodges. USB ports in rooms are increasingly standard. Even budget accommodations maintain high electrical standards. The ICEHOTEL in Jukkasjärvi has heated rooms with normal outlets alongside the famous ice rooms.',

  faqs: [
    {
      question: 'Do I need a travel adapter for Sweden?',
      answer:
        'If you're from the US, UK, or Australia — yes. Sweden uses Type C and F plugs with round pins. European travelers with standard Europlugs or Schuko plugs don't need anything extra.',
    },
    {
      question: 'What plug adapter do I need for Stockholm?',
      answer:
        'From the US, bring a Type A/B to Type C or F adapter. From the UK, a Type G to F adapter. These are the same adapters you'd use for most of continental Europe.',
    },
    {
      question: 'Are there outlets on Swedish trains?',
      answer:
        'Yes — SJ X2000 and intercity trains have Schuko outlets at every seat. Regional Mälartåg and local commuter trains also increasingly have charging options. Sweden is one of the best countries in Europe for train-based charging.',
    },
    {
      question: 'Will I have power in a Lapland cabin?',
      answer:
        'Most Lapland accommodations (hotels, lodges, cabins for rent) have reliable power with standard Schuko outlets. Only very remote wilderness huts without road access may lack electricity — bring a power bank for those adventures.',
    },
    {
      question: 'Can I use the same adapter in Sweden and Norway?',
      answer:
        'Yes. Sweden and Norway use identical plug types (C and F) at the same voltage and frequency. One adapter covers both countries.',
    },
  ],

  metaTitle: 'Sweden Power Plugs — Will You Need an Adapter? (Types C & F)',
  metaDescription:
    'Sweden uses Type C and F plugs at 230V/50Hz. Find out if you need an adapter for Stockholm or Lapland, train outlet info, and where to buy adapters locally.',
  lastUpdated: '2025-06-01',

  relatedCountries: [
    { name: 'Norway', slug: 'norway-electric-plug-types-will-you-need-an-adapter-for-oslo' },
    { name: 'Denmark', slug: 'denmark-electric-plug-type-will-you-need-an-adapter-2' },
    { name: 'Finland', slug: 'finland-electric-plug-type-will-you-need-an-adapter-in-helsinki' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
  ],
};

export default sweden;
