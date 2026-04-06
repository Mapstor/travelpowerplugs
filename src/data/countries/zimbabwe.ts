import type { CountryPlugData } from '@/types';

const zimbabwe: CountryPlugData = {
  slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
  name: 'Zimbabwe',
  demonym: 'Zimbabwean',
  continent: 'Africa',
  region: 'Southern Africa',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
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
  quirks: [
    'Victoria Falls hotels on the Zimbabwe side are generally well-equipped for international visitors. Load shedding is common throughout the country, and safari lodges in Hwange National Park typically have generator backup systems.',
  ],
  travelContext:
    'Zimbabwe draws visitors for Victoria Falls (one of the Seven Natural Wonders), Hwange National Park, Matobo Hills, and Great Zimbabwe ruins. Despite economic challenges, the tourism sector is well-developed with excellent safari infrastructure. Power reliability varies — cities like Harare experience regular load shedding, while quality lodges have robust backup systems.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs do not fit either Type D or Type G Zimbabwean sockets. A universal adapter is recommended.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit the modern outlets found in most hotels and lodges. Older buildings may have Type D sockets, but tourist accommodations predominantly use Type G.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs are not compatible with Zimbabwean outlets. You need an adapter for Type G or Type D sockets.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. An adapter is required. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'TV Sales & Home',
      type: 'electronics',
      city: 'Harare',
      priceRange: '$3–10 USD',
      note: 'Major electronics and appliance retailer in Zimbabwe with branches in Harare and Bulawayo.',
    },
    {
      name: 'OK Zimbabwe',
      type: 'supermarket',
      city: 'Harare',
      priceRange: '$2–8 USD',
      note: 'Widespread Zimbabwean supermarket chain. May carry basic adapters.',
    },
    {
      name: 'Pick n Pay',
      type: 'supermarket',
      city: 'Harare',
      priceRange: '$3–10 USD',
      note: 'South African supermarket chain with locations in Harare and Victoria Falls.',
    },
  ],
  airportName: 'Robert Gabriel Mugabe International Airport',
  airportCode: 'HRE',
  neighbors: [
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote:
        'Zambia shares Type D and G with Zimbabwe and adds Type C. The same adapter works in both countries.',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'M'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote:
        'Mozambique uses European-style and South African plugs — different from Zimbabwe. You will likely need a different adapter.',
    },
    {
      name: 'Botswana',
      slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote:
        'Botswana uses the same Type D and G combination. Your adapter works in both countries.',
    },
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
      plugTypes: ['C', 'D', 'M', 'N'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'South Africa shares Type D but its dominant Type M (large round-pin) is different. A South African adapter is needed for Type M outlets.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Victoria Falls hotels and luxury safari lodges in Hwange and Mana Pools are generally well-prepared for international guests, often providing adapters at reception. Budget guesthouses and backpacker lodges are less likely to have them. Load shedding affects all accommodation tiers, but quality establishments have generator backup.',
  faqs: [
    {
      question: 'What plugs do hotels in Victoria Falls use?',
      answer:
        'Most hotels and lodges at Victoria Falls use British Type G sockets, which is the dominant standard in Zimbabwean tourist accommodations. Some older properties may still have Type D outlets. Upscale hotels typically provide adapters on request.',
    },
    {
      question: 'How bad is load shedding in Zimbabwe?',
      answer:
        'Load shedding is a regular occurrence in Zimbabwe, with scheduled power cuts that can last several hours. Quality hotels and safari lodges have generator or solar backup, so guests rarely notice. Budget accommodations may not have backup power — a portable battery pack is recommended.',
    },
    {
      question: 'Can I use the same adapter for Zimbabwe and South Africa?',
      answer:
        'Partially. Zimbabwe and South Africa share Type D, but South Africa predominantly uses the large Type M plug, which is not common in Zimbabwe. A universal adapter is the best investment for a Southern Africa trip covering multiple countries.',
    },
  ],
  metaTitle:
    'Zimbabwe Power Plugs & Adapters: Types D & G – Travel Guide',
  metaDescription:
    'Zimbabwe uses Type D and G plugs at 230V/50Hz. Learn what adapter you need for Victoria Falls, Hwange, and Harare, plus tips on load shedding and local purchases.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
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

export default zimbabwe;
