import type { CountryPlugData } from '@/types';

const zambia: CountryPlugData = {
  slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
  name: 'Zambia',
  demonym: 'Zambian',
  continent: 'Africa',
  region: 'Southern Africa',
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
  quirks: [
    'Zambia has a mix of British Type G, old colonial Type D, and European Type C outlets. The specific type you encounter depends on the age and standard of the building. Victoria Falls lodges on the Livingstone side generally have reliable power with adapters readily available. Load shedding does occur, particularly during droughts when hydroelectric generation from the Zambezi drops.',
  ],
  travelContext:
    'Zambia is a premier safari destination, home to South Luangwa, Lower Zambezi, and Kafue national parks, as well as the Zambian side of Victoria Falls at Livingstone. The mix of plug types reflects its colonial history and gradual modernization. Safari camps range from luxury lodges with full power to rustic bush camps with generator or solar-only electricity.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs are incompatible with all Zambian socket types. A universal adapter is the safest choice given the mix of outlets you may encounter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit the newer Zambian outlets directly. Older buildings may have Type D sockets where your plug won\'t fit, but most tourist accommodations use Type G.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European Type C plugs work in some older outlets but not in Type G or Type D sockets. Bring an adapter to be safe, as you cannot predict which outlet type a given accommodation will have.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs do not fit any Zambian socket type. A universal adapter is recommended.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Game',
      type: 'electronics',
      city: 'Lusaka',
      priceRange: '50–150 ZMW',
      note: 'South African department store at Levy Junction and Manda Hill malls. Reliable source for adapters.',
    },
    {
      name: 'Shoprite',
      type: 'supermarket',
      city: 'Lusaka',
      priceRange: '30–100 ZMW',
      note: 'Widespread supermarket chain that may carry basic adapters.',
    },
    {
      name: 'Melisa Supermarket',
      type: 'supermarket',
      city: 'Lusaka',
      priceRange: '40–120 ZMW',
      note: 'Local supermarket with household electronics section.',
    },
  ],
  airportName: 'Lusaka Kenneth Kaunda International Airport',
  airportCode: 'LUN',
  neighbors: [
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote:
        'Zimbabwe uses Type D and G, both of which are also found in Zambia. The same adapter should work in both countries.',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'M'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Mozambique shares Type C with Zambia but also uses Type F and the large South African Type M. You may need a different adapter.',
    },
    {
      name: 'Malawi',
      slug: 'malawi-electric-plug-types-which-adapter-will-you-need-in-malawi',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Malawi uses Type G, which is one of the types found in Zambia. A British adapter should cover both.',
    },
    {
      name: 'Botswana',
      slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote:
        'Botswana uses the same Type D and G combination. Your Zambian adapter should work.',
    },
    {
      name: 'Namibia',
      slug: 'namibia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['D', 'M'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote:
        'Namibia shares Type D but also uses the large South African Type M. A universal adapter is best for both countries.',
    },
    {
      name: 'Congo',
      slug: 'congo-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'D', 'E'],
      voltage: 230,
      sameAsSubject: 'partially',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Luxury safari lodges in South Luangwa and Lower Zambezi typically provide universal adapters or multi-standard outlets. Hotels in Livingstone near Victoria Falls are well-equipped for international visitors. Budget lodges and guesthouses in Lusaka are less predictable — carry a universal adapter.',
  faqs: [
    {
      question: 'Why does Zambia have three different plug types?',
      answer:
        'Zambia\'s electrical infrastructure reflects its colonial past under British rule and subsequent modernization. Older buildings retain Type D (old British round-pin) sockets, newer construction uses Type G (modern British), and some locations have adopted European Type C for lighter-duty circuits.',
    },
    {
      question: 'What adapter should I bring for a Victoria Falls trip on the Zambian side?',
      answer:
        'A universal adapter is the safest bet. Most Livingstone hotels use British Type G, but you may encounter Type D in older properties. Universal adapters cover all possibilities and are useful for the rest of Southern Africa as well.',
    },
    {
      question: 'Is there load shedding in Zambia?',
      answer:
        'Yes, load shedding (scheduled power cuts) can occur in Zambia, particularly during low-water periods when the Kariba Dam hydroelectric output is reduced. Safari lodges and quality hotels typically have generator backup. A power bank is a good idea for any trip.',
    },
  ],
  metaTitle:
    'Zambia Power Plugs & Adapters: Types C, D & G – Travel Electrical Guide',
  metaDescription:
    'Zambia uses Type C, D, and G plugs at 230V/50Hz. Learn which adapter you need for Lusaka, Livingstone, and safari lodges, plus where to buy one locally.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
    },
    {
      name: 'Botswana',
      slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
    },
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
    },
  ],
};

export default zambia;
