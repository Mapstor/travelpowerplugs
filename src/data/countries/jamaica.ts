import { CountryPlugData } from '@/types';

const jamaica: CountryPlugData = {
  slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging',
  name: 'Jamaica',
  demonym: 'Jamaican',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 110,
  frequency: 50,
  frequencyNote: 'Jamaica uses 50Hz rather than the 60Hz common in other Caribbean countries. This difference doesn\'t affect chargers, laptops, or most electronics.',
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Jamaica uses 110V like the US but at 50Hz instead of 60Hz. The frequency difference is irrelevant for phone chargers, laptops, and most modern electronics. It could theoretically affect older motorized appliances (clocks, turntables) but this is a non-issue for travelers.',
  ],
  travelContext:
    'Jamaica\'s main tourist areas — Montego Bay, Ocho Rios, Negril, and Kingston — have reliable power with modern infrastructure. Resorts along the north coast are well-equipped with ample outlets. Rural areas in the Blue Mountains or interior parishes may experience occasional outages.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Jamaica uses the same Type A/B plugs at 110V. The 50Hz frequency (vs 60Hz in the US) makes no practical difference for any travel electronics. No adapter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. Despite Jamaica\'s British heritage, it uses US-style outlets. UK electronics are dual-voltage and will work fine.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European round-pin plugs don\'t fit. You need an adapter and should verify your devices handle 110V since most European appliances expect 220–240V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. You need an adapter and should check voltage compatibility (230V devices on 110V).',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: 'Montego Bay',
      priceRange: '$5–$15 USD',
      note: 'Caribbean electronics chain with locations in major Jamaican cities.',
    },
    {
      name: 'Singer',
      type: 'electronics',
      priceRange: '$5–$12 USD',
      note: 'Appliance and electronics retailer found across Jamaica.',
    },
    {
      name: 'Hi-Lo / MegaMart',
      type: 'supermarket',
      priceRange: '$3–$10 USD',
      note: 'Large supermarkets that may carry basic adapters in their electronics aisle.',
    },
  ],
  airportName: 'Montego Bay Sangster International Airport',
  airportCode: 'MBJ',
  neighbors: [
    {
      name: 'Cuba',
      slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types and voltage, but Cuba has a dual-voltage complication (some outlets are 220V).',
    },
    {
      name: 'Haiti',
      slug: 'haiti-electric-plug-types-do-you-need-an-adapter-for-haiti',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types and similar voltage.',
    },
    {
      name: 'Bahamas',
      slug: 'bahamas-electric-socket-types-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plug types, very similar voltage.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Resorts in Montego Bay, Ocho Rios, and Negril have modern outlets and reliable power with backup generators. Boutique hotels in Kingston\'s New Kingston district are equally well-equipped. Smaller guesthouses and eco-lodges in the Blue Mountains may have limited outlets — bring a small power strip.',
  faqs: [
    {
      question: 'Do US plugs work in Jamaica?',
      answer:
        'Yes. Jamaica uses the same Type A/B flat-pin outlets as the US at 110V. Your devices will work without any adapter or converter.',
    },
    {
      question: 'Does the 50Hz frequency matter for my electronics?',
      answer:
        'Not for any modern travel electronics. Phone chargers, laptops, cameras, and tablets all handle both 50Hz and 60Hz without issues. The only devices that could theoretically be affected are those with synchronous motors (like vintage clocks), which aren\'t typical travel items.',
    },
    {
      question: 'Do British visitors need a special adapter for Jamaica?',
      answer:
        'Yes — despite Jamaica\'s historical British connections, the country uses US-style Type A/B outlets, not British Type G. UK travelers need a Type G to Type A/B adapter. Your UK electronics are dual-voltage, so no converter is needed.',
    },
    {
      question: 'Is the power reliable at Jamaican resorts?',
      answer:
        'Major resorts in Montego Bay, Ocho Rios, and Negril have reliable power and backup generators. Power outages are more common in rural areas but rarely affect the tourist zones.',
    },
  ],
  metaTitle:
    'Jamaica Plug Types & Adapter Guide — Type A/B, 110V/50Hz, What to Know',
  metaDescription:
    'Jamaica uses Type A and B plugs at 110V/50Hz — same as the US except for frequency. Learn if you need an adapter, resort power tips, and local purchase options.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Cuba', slug: 'cuba-electric-plug-type-do-you-need-an-adapter-for-trip' },
    { name: 'Bahamas', slug: 'bahamas-electric-socket-types-will-you-need-an-adapter' },
    { name: 'Dominican Republic', slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Barbados', slug: 'barbados-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default jamaica;
