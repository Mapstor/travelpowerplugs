import type { CountryPlugData } from '@/types';

const luxembourg: CountryPlugData = {
  slug: 'luxembourg-electric-plug-types-will-you-need-an-adapter-in-luxembourg',
  name: 'Luxembourg',
  demonym: 'Luxembourgish',
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
  travelContext:
    'Luxembourg is a small but wealthy country wedged between Belgium, France, and Germany. As a major EU institutional hub, it receives many business travelers. The plug system is standard continental European — identical to Germany and compatible with its other neighbors. Day-trippers from Belgium or France will have no issues.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Luxembourg\'s round-pin sockets. Bring an adapter. Most modern devices are dual-voltage.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs require an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work throughout Luxembourg. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. Bring an adapter; voltage matches at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hi-Fi International',
      type: 'electronics',
      city: 'Luxembourg City',
      priceRange: '€5–€15',
      note: 'Electronics retailer in Luxembourg City with a selection of adapters and travel accessories.',
    },
    {
      name: 'Auchan',
      type: 'supermarket',
      city: 'Luxembourg City',
      priceRange: '€4–€10',
      note: 'Large hypermarket with an electronics section stocking adapters.',
    },
    {
      name: 'Cactus',
      type: 'supermarket',
      city: 'Luxembourg City',
      priceRange: '€4–€10',
      note: 'Luxembourg\'s homegrown supermarket chain; larger branches carry basic travel adapters.',
    },
  ],
  airportName: 'Luxembourg Findel Airport',
  airportCode: 'LUX',
  neighbors: [
    {
      name: 'Belgium',
      slug: 'belgium-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C works in both. Belgium uses Type E for grounding while Luxembourg uses Type F — both accept standard European plugs.',
    },
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Type C is universal. France uses Type E grounded sockets; Luxembourg uses Type F. Hybrid E/F plugs work in both.',
    },
    {
      name: 'Germany',
      slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Luxembourg City\'s business hotels cater to international guests and often have USB ports and occasionally universal outlets. The country is compact and well-developed — hotel quality is consistently high. Adapters may be available at reception in larger properties.',
  faqs: [
    {
      question: 'Is Luxembourg\'s plug system the same as the rest of the Benelux?',
      answer:
        'Close but not identical. Luxembourg and Belgium both use Type C, but Luxembourg uses Type F (Schuko) for grounded outlets while Belgium uses Type E (French). In practice, any standard European device works across the Benelux without issues.',
    },
    {
      question: 'I\'m visiting Luxembourg on a day trip from Brussels — do I need a different adapter?',
      answer:
        'No. Your European plugs will work fine in both countries. The Type C plug is universal across the region.',
    },
    {
      question: 'Where can I buy an adapter near Luxembourg Findel Airport?',
      answer:
        'The airport has limited retail, but Luxembourg City is only 6 km away. Auchan and Cactus supermarkets near the city center stock adapters, and Hi-Fi International has a broader range.',
    },
    {
      question: 'Do I need a voltage converter for US electronics?',
      answer:
        'Check your charger\'s label. Most modern phones, laptops, and cameras are rated 100–240V and only need a plug adapter. Single-voltage US appliances (like some hair tools) would need a converter for Luxembourg\'s 230V system.',
    },
  ],
  metaTitle: 'Luxembourg Power Plugs — Types C & F | Do You Need an Adapter?',
  metaDescription:
    'Luxembourg uses Type C and Type F plugs at 230V/50Hz. US and UK travelers need an adapter. Same system as Germany — here\'s what to know.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Belgium', slug: 'belgium-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Germany', slug: 'germany-electric-plug-types-will-you-need-an-adapter-in-germany' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
  ],
};

export default luxembourg;
