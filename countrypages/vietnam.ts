import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam',
  name: 'Vietnam',
  demonym: 'Vietnamese',
  continent: 'Asia',
  region: 'Southeast Asia',
  voltage: 220,
  frequency: 50,
  complexityTier: 'moderate',
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
    'Vietnam uses a chaotic mix — US-style Type A sockets coexist with European Type C/F, often in the same room. Many outlets accept both flat and round pins without an adapter.',
    'Budget hotels and guesthouses frequently have loose, poorly grounded outlets. Power outages occur in rural areas and during storm season.',
  ],
  travelContext:
    'Vietnam is one of the easier countries in Southeast Asia for charging devices because many outlets accept multiple plug shapes. However, the lack of standardisation means you cannot predict what you will find. Carry a compact universal adapter as insurance, especially if heading to rural areas or budget accommodation.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: true,
      notes:
        'Most Vietnamese outlets accept US-style flat-pin Type A plugs. However, the voltage is 220V — double-check that your device is dual-voltage before plugging in. Grounded Type B plugs may not fit all outlets.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs will not fit any Vietnamese outlet. You need an adapter to Type A or Type C/F. Voltage is compatible at 220V.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European two-pin plugs (Type C) fit most outlets in Vietnam. Schuko Type F plugs also work in many sockets. Voltage and frequency are compatible.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs will not fit Vietnamese outlets. You need an adapter. Voltage is close enough (220V vs 230V) for most devices.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Điện máy XANH',
      type: 'electronics',
      priceRange: '₫30,000–₫150,000',
      note: 'Vietnam\'s largest electronics chain. Wide range of adapters and power strips.',
    },
    {
      name: 'Thế Giới Di Động',
      type: 'electronics',
      priceRange: '₫30,000–₫120,000',
      note: 'Major electronics retailer with locations across the country.',
    },
    {
      name: 'Nguyễn Kim',
      type: 'electronics',
      priceRange: '₫40,000–₫150,000',
      note: 'Electronics chain found in larger cities.',
    },
    {
      name: 'Circle K / GS25',
      type: 'convenience',
      priceRange: '₫30,000–₫80,000',
      note: 'Convenience stores in urban areas sometimes carry basic adapters and USB cables.',
    },
    {
      name: 'Tan Son Nhat / Noi Bai Airport shops',
      type: 'airport',
      city: 'Ho Chi Minh City / Hanoi',
      priceRange: '₫80,000–₫250,000',
      note: 'Airport electronics kiosks stock adapters at a premium.',
    },
  ],
  airportName: 'Tan Son Nhat International / Noi Bai International',
  airportCode: 'SGN / HAN',
  neighbors: [
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'China shares Type A and C with Vietnam but also uses Type I.',
    },
    {
      name: 'Laos',
      slug: 'laos-electric-plug-types-which-adapter-will-you-need-in-laos',
      plugTypes: ['A', 'B', 'C', 'E', 'F'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Laos has a similarly mixed outlet situation. Your Vietnam adapter should work.',
    },
    {
      name: 'Cambodia',
      slug: 'cambodia-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['A', 'C'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Cambodia uses the same Type A and C mix as Vietnam.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Mid-range and upscale hotels in Hanoi and Ho Chi Minh City usually have multi-standard outlets or adapters at reception. Budget guesthouses and homestays in rural Vietnam may have only one or two loose wall sockets. Hostels in backpacker areas typically have power strips available.',
  faqs: [
    {
      question: 'Do I need a travel adapter for Vietnam?',
      answer:
        'It depends on where you are from. US travelers usually do not need an adapter because Type A flat-pin plugs fit most Vietnamese outlets — but check your device is dual-voltage since Vietnam uses 220V. UK and Australian travelers will need an adapter. European travelers with Type C plugs generally do not.',
    },
    {
      question: 'Is the voltage in Vietnam safe for my US electronics?',
      answer:
        'Vietnam uses 220V at 50Hz. Many US devices are only rated for 120V and could be damaged. Check the label on your charger or device — if it says "100–240V" it is dual-voltage and safe. Hair dryers, curling irons, and other heat appliances from the US often require a voltage converter.',
    },
    {
      question: 'Can I charge my phone in Vietnam without an adapter?',
      answer:
        'Most phone chargers are dual-voltage (100–240V) and come with either a Type A flat-pin or Type C round-pin plug — both of which fit many Vietnamese outlets. You will likely be fine without an adapter, but carrying one is cheap insurance.',
    },
    {
      question: 'Are power outages common in Vietnam?',
      answer:
        'In major cities like Hanoi and Ho Chi Minh City, power is generally reliable. Rural areas and smaller towns can experience outages, especially during typhoon season (roughly September to November). A portable battery pack is a smart addition to your packing list.',
    },
    {
      question: 'What kind of adapter should I buy for Vietnam?',
      answer:
        'A universal travel adapter is the best choice because Vietnam uses multiple plug types (A, C, and F) with no single standard. If you are coming from the UK or Australia, any adapter that converts to Type A or Type C will work.',
    },
  ],
  metaTitle: 'Vietnam Power Plugs: Types A, C & F — Do You Need an Adapter?',
  metaDescription:
    'Vietnam uses Type A, C, and F plugs at 220V/50Hz. Find out if you need an adapter, where to buy one locally, and what to expect from Vietnamese outlets.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Cambodia', slug: 'cambodia-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Laos', slug: 'laos-electric-plug-types-which-adapter-will-you-need-in-laos' },
    { name: 'Thailand', slug: 'thailand-electric-plug-type-will-you-need-an-adapter-for-thailand' },
    { name: 'Philippines', slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines' },
  ],
};

export default data;
