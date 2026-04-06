import { CountryPlugData } from '../types';

const sudan: CountryPlugData = {
  slug: 'sudan-electric-plug-types-which-adapter-will-you-need-in-sudan',
  name: 'Sudan',
  demonym: 'Sudanese',
  continent: 'Africa',
  region: 'North Africa',
  voltage: 230,
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
  ],
  travelContext:
    'Sudan uses a mix of European Type C and older British-Indian Type D outlets. The electrical grid has been significantly impacted by ongoing conflict, particularly since 2023. Power outages are frequent and prolonged, especially outside Khartoum. Travelers should be prepared with portable power solutions.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs do not fit either Sudanese outlet type. A converter is also needed for non-dual-voltage devices at 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit. Although Sudan uses the older British Type D, the modern Type G is incompatible. Bring a universal adapter.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard Europlug (Type C) fits the Type C outlets directly. You may encounter Type D sockets where a C plug will not fit — a universal adapter is useful as a backup.',
    },
    {
      origin: 'India',
      originPlugTypes: 'C, D, M',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Indian Type C and D plugs fit Sudanese outlets directly. No adapter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs will not fit. Bring an adapter for Type C or D outlets. Voltage is close enough at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Afra Mall',
      type: 'electronics',
      city: 'Khartoum',
      priceRange: '$2–$8',
      note: 'Has some electronics shops where basic adapters may be available, depending on stock.',
    },
    {
      name: 'Local market stalls',
      type: 'electronics',
      city: 'Khartoum',
      priceRange: '$1–$5',
      note: 'Street-side electronics vendors sometimes carry basic adapters.',
    },
  ],
  airportName: 'Khartoum International Airport',
  airportCode: 'KRT',
  neighbors: [
    {
      name: 'Egypt',
      slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Egypt shares Type C but uses Type F instead of Type D.',
    },
    {
      name: 'Libya',
      slug: 'libya-electric-plug-types-will-you-need-an-adapter-in-libya',
      plugTypes: ['C', 'L'],
      voltage: 230,
      sameAsSubject: 'partially',
    },
    {
      name: 'Chad',
      slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Chad shares both Type C and D with Sudan.',
    },
    {
      name: 'Central African Republic',
      slug: 'central-african-republic-electric-plug-types-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'partially',
    },
    {
      name: 'Ethiopia',
      slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba',
      plugTypes: ['C', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
    },
    {
      name: 'Eritrea',
      slug: 'eritrea-electric-plug-types-will-you-need-an-adapter-in-eritrea',
      plugTypes: ['C', 'L'],
      voltage: 230,
      sameAsSubject: 'partially',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Khartoum generally have generator backup, but extended outages are common. Outside the capital, power availability is extremely limited. Bring your own portable battery and flashlight. Hotel adapter lending is uncommon.',
  faqs: [
    {
      question: 'Why does Sudan use Type D plugs?',
      answer:
        'Type D outlets are a legacy of British colonial influence in Sudan. These older three-pin round sockets coexist with the more modern European Type C, which has become increasingly common in newer buildings.',
    },
    {
      question: 'How bad are power outages in Sudan?',
      answer:
        'Power outages are a daily occurrence throughout Sudan. The grid has been further damaged by conflict since 2023. Even in Khartoum, expect multi-hour blackouts. A portable battery pack is essential.',
    },
    {
      question: 'Should I bring a universal adapter to Sudan?',
      answer:
        'Yes. Because Sudan uses both Type C and Type D outlets, a universal adapter gives you the most flexibility. You may encounter either type in the same building.',
    },
  ],
  metaTitle: 'Sudan Power Plugs — Types C & D | Adapter & Power Guide',
  metaDescription:
    'Sudan uses Type C and D plugs at 230V/50Hz. Power outages are frequent — learn what adapters and backup power to bring for travel to Sudan.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Egypt', slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt' },
    { name: 'Ethiopia', slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba' },
    { name: 'Chad', slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter' },
  ],
};

export default sudan;
