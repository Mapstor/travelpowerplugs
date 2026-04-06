import type { CountryPlugData } from '@/types';

const saint_kitts_and_nevis: CountryPlugData = {
  slug: 'saint-kitts-and-nevis-electric-plug-types-will-you-need-an-adapter',
  name: 'Saint Kitts And Nevis',
  demonym: 'Kittitian',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 230,
  frequency: 60,
  complexityTier: 'moderate',
  plugTypes: [
    {
      id: 'type-d',
      name: 'Type D',
      subtitle: 'Old British (India)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 5.08,
      pinSpacing: 19.1,
      ratedAmps: 5,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.3,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.48,
      recessRadius: 1.0,
      faceplateSize: 2.8,
    },
    {
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 6.35,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.6,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  travelContext:
    'Saint Kitts and Nevis is a two-island Caribbean nation with a British colonial heritage reflected in its plug types. Most outlets are British Type G (three rectangular pins), though some older buildings have the round-pin Type D. Resorts are well-equipped for international visitors.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs do not fit either Type D or Type G outlets. Voltage is 230V, so non-dual-voltage devices need a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit the newer outlets directly. Voltage is compatible at 230V. You may encounter older Type D outlets, but most hotels have Type G.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs are not compatible with British-style outlets. An adapter is required. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'TDC',
      type: 'electronics',
      city: 'Basseterre',
      priceRange: '$8–20',
      note: 'Department store in Basseterre with electronics section.',
    },
    {
      name: "Horsford's",
      type: 'electronics',
      city: 'Basseterre',
      priceRange: '$5–15',
      note: 'Local retailer that stocks adapters and household electronics.',
    },
    {
      name: "Ram's Supermarket",
      type: 'supermarket',
      city: 'Basseterre',
      priceRange: '$5–12',
      note: 'Supermarket that may carry basic travel adapters.',
    },
  ],
  airportName: 'Robert L. Bradshaw International Airport',
  airportCode: 'SKB',
  neighbors: [
    {
      name: 'Antigua And Barbuda',
      slug: 'antigua-and-barbuda-electric-plug-types-adapter',
      plugTypes: ['A', 'B'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Antigua uses US-style Type A/B at 230V — completely different plug shape from Saint Kitts\' British system.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Resort hotels on both Saint Kitts and Nevis cater to international guests and typically have British Type G outlets. Front desk staff can often provide adapters on request.',
  faqs: [
    {
      question: 'What plug types does Saint Kitts and Nevis use?',
      answer:
        'The country uses British Type D (three round pins) and Type G (three rectangular pins) at 230V/60Hz. Type G is more common in newer buildings and hotels.',
    },
    {
      question: 'Do I need an adapter coming from the US?',
      answer:
        'Yes. US-style flat-prong plugs are incompatible with both Type D and Type G outlets. You also need to check that your device supports 230V, as US voltage is only 110V.',
    },
    {
      question: 'Will my UK plug work in Saint Kitts?',
      answer:
        'Yes. Most outlets in hotels and modern buildings are British Type G. Your UK devices plug in directly and the voltage matches at 230V.',
    },
  ],
  metaTitle: 'Saint Kitts & Nevis Power Plugs — Type D & G Outlets, 230V, Adapter Guide',
  metaDescription:
    'Saint Kitts and Nevis uses British Type D and G plugs at 230V/60Hz. Find out what adapter you need, where to buy one in Basseterre, and what to expect.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Antigua And Barbuda', slug: 'antigua-and-barbuda-electric-plug-types-adapter' },
    { name: 'Dominica', slug: 'dominica-electric-plug-types-will-you-need-an-adapter-with-you' },
    { name: 'Saint Lucia', slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need' },
  ],
};

export default saint_kitts_and_nevis;
