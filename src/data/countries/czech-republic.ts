import type { CountryPlugData } from '@/types';

const czechRepublic: CountryPlugData = {
  slug: 'czech-republic-electric-plug-types',
  name: 'Czech Republic',
  demonym: 'Czech',
  continent: 'Europe',
  region: 'Central Europe',
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French Standard',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
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
    'Czech Republic uses Type E sockets (like France), not the German Type F that\'s common in neighboring countries. However, modern CEE 7/7 plugs work in both.',
    'Older buildings in Prague\'s historic center may have outdated wiring, but outlets are standardized to Type C/E.',
  ],
  
  travelContext: 'Czech Republic is a major European tourist destination with Prague, Český Krumlov, and Karlovy Vary attracting millions of visitors. The electrical infrastructure is modern and reliable, using standard European plugs throughout the country.',
  
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes: 'US flat-prong plugs won\'t fit Czech round-pin outlets. Bring a Type A/B to Type C/E adapter. Modern devices handle 230V automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes: 'British Type G plugs need an adapter. Voltage matches at 230V, so no converter needed.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes: 'Standard European plugs work throughout Czech Republic. German Schuko (Type F) plugs fit Type E sockets.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes: 'Australian Type I plugs require an adapter. Voltage is compatible at 230V.',
    },
  ],
  
  localPurchaseOptions: [
    {
      name: 'Alza.cz',
      type: 'electronics',
      city: 'Prague',
      priceRange: '100-300 CZK',
      note: 'Czech Republic\'s largest electronics retailer with stores in major cities.',
    },
    {
      name: 'Datart',
      type: 'electronics',
      city: 'Nationwide',
      priceRange: '100-250 CZK',
      note: 'Electronics chain with good adapter selection.',
    },
    {
      name: 'Tesco',
      type: 'supermarket',
      city: 'Major cities',
      priceRange: '150-300 CZK',
      note: 'Hypermarkets carry basic travel adapters.',
    },
    {
      name: 'Prague Airport',
      type: 'airport',
      city: 'Prague',
      priceRange: '200-500 CZK',
      note: 'Relay and other airport shops sell adapters at premium prices.',
    },
  ],
  
  airportName: 'Václav Havel Airport Prague',
  airportCode: 'PRG',
  
  neighbors: [
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Germany uses Type F (Schuko) while Czech Republic uses Type E, but modern plugs work in both.',
    },
    {
      name: 'Austria',
      slug: 'austria-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Austrian Type C/F plugs work in Czech outlets.',
    },
    {
      name: 'Poland',
      slug: 'poland-electric-plug-types',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Poland uses the same Type C/E system as Czech Republic.',
    },
    {
      name: 'Slovakia',
      slug: 'slovakia-electric-plug-types',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Former Czechoslovakia partners use identical electrical systems.',
    },
  ],
  
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  
  accommodationNote: 'Prague\'s international hotels often provide adapters at reception and USB ports in rooms. Traditional pensions and budget accommodations typically only have standard Type C/E outlets. Most hotels provide hair dryers.',
  
  faqs: [
    {
      question: 'Do I need an adapter for Czech Republic?',
      answer: 'If you\'re from the US, UK, or Australia, yes. If you\'re from continental Europe, your plugs will work directly. Czech Republic uses Type C and E plugs at 230V.',
    },
    {
      question: 'Will my German plug work in Czech Republic?',
      answer: 'Yes. While Czech Republic uses Type E and Germany uses Type F, modern CEE 7/7 plugs are designed to work in both socket types.',
    },
    {
      question: 'Can I buy adapters easily in Prague?',
      answer: 'Yes. Electronics stores like Alza and Datart sell adapters, as do larger Tesco supermarkets. Tourist shops in Prague\'s center also stock them, though prices are higher.',
    },
    {
      question: 'Is the voltage the same as other EU countries?',
      answer: 'Yes. Czech Republic uses the standard European 230V at 50Hz, same as Germany, France, and most of Europe.',
    },
    {
      question: 'Do Prague hotels provide adapters?',
      answer: 'Many international hotels in Prague keep adapters at reception for guests to borrow. It\'s best to ask when checking in. Budget hotels and Airbnbs typically don\'t provide them.',
    },
  ],
  
  metaTitle: 'Czech Republic Plugs: Type C & E, 230V — Need an Adapter for Prague?',
  metaDescription: 'Czech Republic uses Type C and E plugs at 230V/50Hz. US and UK travelers need adapters. Standard European plugs work everywhere from Prague to Český Krumlov.',
  lastUpdated: '2025-01-15',
  
  relatedCountries: [
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'Austria', slug: 'austria-electric-plug-types' },
    { name: 'Poland', slug: 'poland-electric-plug-types' },
    { name: 'Slovakia', slug: 'slovakia-electric-plug-types' },
  ],
};

export default czechRepublic;