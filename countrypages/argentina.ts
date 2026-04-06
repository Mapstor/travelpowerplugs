import { CountryPlugData } from '../types';

const argentina: CountryPlugData = {
  slug: 'argentina-electric-plug-types-do-you-need-an-adapter',
  name: 'Argentina',
  demonym: 'Argentine',
  continent: 'South America',
  region: 'Southern South America',
  voltage: 220,
  frequency: 50,
  complexityTier: 'moderate',
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
      id: 'type-i',
      name: 'Type I',
      subtitle: 'Australian',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 13.7,
      ratedAmps: 10,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.42,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Argentina uses a mix of Type C (European round-pin) and Type I (angled flat-pin) outlets. The Argentine Type I variant has three pins — two angled flats plus a ground — similar to the Australian version. Many older Buenos Aires apartments have only Type C, while newer buildings use Type I.',
    'Some Argentine outlets are combo sockets that accept both Type C and Type I plugs, but you shouldn\'t count on this everywhere. A universal adapter is the simplest solution.',
  ],
  travelContext:
    'Argentina stretches from the subtropical north to Patagonia in the south, with Buenos Aires as the main entry point for most travelers. The electrical system is consistent across the country, from Mendoza\'s wine country to Ushuaia at the tip of South America. Voltage fluctuations can occur in older Buenos Aires neighborhoods like San Telmo and La Boca.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs won\'t fit Argentine outlets. You\'ll need a Type A/B to Type I or Type C adapter. Most phone chargers and laptops are dual-voltage (100–240V), but single-voltage US appliances like hair dryers won\'t work on 220V without a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type I or Type C adapter. UK devices run on 230V, which is close enough to Argentina\'s 220V that no converter is needed.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type C Europlugs will fit Argentine Type C outlets directly. For Type I outlets, you\'ll need an adapter. Voltage is compatible — European devices are designed for 220–240V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Australian Type I plugs fit directly into Argentine Type I outlets. Voltage (220V vs 230V) is close enough for all devices. You may still encounter some older Type C-only outlets.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Garbarino',
      type: 'electronics',
      city: 'Buenos Aires',
      priceRange: '$5–$15 USD',
      note: 'Major electronics retailer with locations throughout Buenos Aires and other cities.',
    },
    {
      name: 'Frávega',
      type: 'electronics',
      priceRange: '$5–$15 USD',
      note: 'Electronics and appliance chain found in most Argentine cities.',
    },
    {
      name: 'Musimundo',
      type: 'electronics',
      priceRange: '$4–$12 USD',
      note: 'Electronics retailer with adapter sections in most locations.',
    },
    {
      name: 'Coto',
      type: 'supermarket',
      priceRange: '$3–$10 USD',
      note: 'Large supermarket chain; some branches carry basic adapters in the electronics aisle.',
    },
  ],
  airportName: 'Buenos Aires Ezeiza International Airport',
  airportCode: 'EZE',
  neighbors: [
    {
      name: 'Chile',
      slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling',
      plugTypes: ['C', 'L'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Chile uses Type C (compatible) and Type L (Italian-style). You may need a different adapter for Type L outlets.',
    },
    {
      name: 'Uruguay',
      slug: 'uruguay-electric-plug-types-which-adapter-will-you-need-in-uruguay',
      plugTypes: ['C', 'F', 'L'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Uruguay uses Type C (same), plus Type F and L. Partial compatibility.',
    },
    {
      name: 'Brazil',
      slug: 'brazil-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'N'],
      voltage: 127,
      sameAsSubject: 'partially',
      adapterNote: 'Brazil uses Type C (compatible) and Type N. Voltage varies by city (127V or 220V).',
    },
    {
      name: 'Paraguay',
      slug: 'paraguay-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Paraguay uses Type C at 220V — compatible with Argentina\'s Type C outlets.',
    },
    {
      name: 'Bolivia',
      slug: 'bolivia-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'C'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Bolivia uses Type A and C. Type C is compatible; Type A is not.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Most mid-range and upscale hotels in Buenos Aires provide adapters on request. In Patagonia and wine country, accommodation tends to be well-equipped but it\'s wise to carry your own adapter. Voltage fluctuations in older Buenos Aires neighborhoods can occasionally affect sensitive electronics — a small surge protector is a smart addition.',
  faqs: [
    {
      question: 'What kind of adapter do I need for Argentina from the US?',
      answer:
        'You\'ll need an adapter that converts US flat pins (Type A/B) to either Argentine Type I (angled flat pins) or Type C (round pins). A universal adapter is the easiest choice since Argentine outlets vary between these two types.',
    },
    {
      question: 'Can I plug my European charger into outlets in Buenos Aires?',
      answer:
        'If you have a slim Europlug (Type C), it will fit into many Argentine outlets directly. Larger Schuko-style plugs (Type E/F) may need an adapter. Voltage is compatible at 220V.',
    },
    {
      question: 'Do Australian plugs work in Argentina?',
      answer:
        'Yes, in most cases. Argentina\'s Type I outlets are very similar to Australia\'s, and the voltage (220V) is close to Australia\'s 230V. You may occasionally encounter older Type C-only outlets where your Australian plug won\'t fit.',
    },
    {
      question: 'Are there voltage problems in Argentina?',
      answer:
        'Argentina\'s nominal voltage is 220V, which is standard. However, older neighborhoods in Buenos Aires can experience voltage fluctuations, especially during peak usage. Modern electronics with switching power supplies handle this fine, but sensitive equipment may benefit from a small surge protector.',
    },
    {
      question: 'Will my US hair straightener work in Argentina?',
      answer:
        'Only if it\'s dual-voltage (check the label for "100–240V"). A single-voltage 120V hair straightener will be damaged by Argentina\'s 220V power — you\'d need a heavy voltage converter. It\'s often easier to buy an inexpensive one locally or use the hotel\'s hair dryer.',
    },
  ],
  metaTitle:
    'Argentina Plug Types & Adapter Guide — Type C/I, 220V, What You Need',
  metaDescription:
    'Argentina uses Type C and Type I plugs at 220V/50Hz. Find out which adapter you need, voltage tips, hotel availability, and where to buy adapters in Buenos Aires.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Chile', slug: 'chile-electric-plug-types-do-you-need-an-adapter-while-traveling' },
    { name: 'Uruguay', slug: 'uruguay-electric-plug-types-which-adapter-will-you-need-in-uruguay' },
    { name: 'Brazil', slug: 'brazil-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Australia', slug: 'australia-electric-plug-types-do-you-need-adapter' },
    { name: 'Peru', slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru' },
  ],
};

export default argentina;
