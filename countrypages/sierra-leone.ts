import { CountryPlugData } from '../types';

const sierraLeone: CountryPlugData = {
  slug: 'sierra-leone-electric-plug-types-which-adapter-will-you-need-with-you',
  name: 'Sierra Leone',
  demonym: 'Sierra Leonean',
  continent: 'Africa',
  region: 'West Africa',
  voltage: 230,
  frequency: 50,
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
    'Sierra Leone uses a British-derived electrical system with both the older Type D and modern Type G outlets. Freetown has partial grid power supplemented by generators. The country\'s electrical infrastructure has been rebuilt since the civil war but remains limited, especially outside the capital. A universal adapter is recommended given the mix of outlet types.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit either Type D or G outlets. A converter is needed for non-dual-voltage devices at 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs fit the Type G outlets directly. You may encounter older Type D sockets, but Type G is becoming standard in newer buildings.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs do not fit Type D or G outlets. You need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Local electronics shops',
      type: 'electronics',
      city: 'Freetown',
      priceRange: '$3–$10',
      note: 'Limited selection. A few electronics shops in central Freetown may carry basic adapters.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Freetown',
      note: 'Some hotels in Freetown may have adapters for international guests. Buy before traveling to be safe.',
    },
  ],
  airportName: 'Freetown Lungi International Airport',
  airportCode: 'FNA',
  neighbors: [
    {
      name: 'Guinea',
      slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry',
      plugTypes: ['C', 'F', 'K'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Guinea uses the European/French system — completely different. You need a different adapter.',
    },
    {
      name: 'Liberia',
      slug: 'liberia-electric-plug-types-will-you-need-an-adapter-in-liberia',
      plugTypes: ['A', 'B', 'C', 'F'],
      voltage: 120,
      sameAsSubject: 'different',
      adapterNote: 'Liberia has a complex dual-voltage system with US and European outlets — different from Sierra Leone.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Freetown range from basic guesthouses to a few mid-range options. Generator backup is standard at the better hotels, as power outages are frequent. The airport is located across the Sierra Leone River from Freetown, requiring a ferry or hovercraft transfer. Plan your power needs for travel days accordingly.',
  faqs: [
    {
      question: 'Can I use UK plugs in Sierra Leone?',
      answer:
        'Yes. Modern Type G (British) outlets are increasingly common in Sierra Leone. You may also encounter older Type D three-pin round sockets in some buildings. A UK plug will work in the newer outlets directly.',
    },
    {
      question: 'How reliable is electricity in Freetown?',
      answer:
        'Freetown has partial grid coverage with frequent outages. Most hotels and businesses rely on private generators. Power supply has improved in recent years but remains inconsistent. A portable battery pack is strongly recommended.',
    },
    {
      question: 'What adapter do I need for Sierra Leone coming from Europe?',
      answer:
        'European round-pin plugs do not fit Sierra Leone\'s British-style outlets. Bring an adapter that converts European plugs to Type G (or a universal adapter that also handles Type D). Voltage is compatible at 230V.',
    },
  ],
  metaTitle: 'Sierra Leone Power Plugs — Types D & G | Adapter Guide',
  metaDescription:
    'Sierra Leone uses Type D and G plugs at 230V/50Hz. British-style outlets are standard — learn what adapter to bring for Freetown and beyond.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Guinea', slug: 'guinea-electric-plug-types-will-you-need-an-adapter-in-conakry' },
    { name: 'Liberia', slug: 'liberia-electric-plug-types-will-you-need-an-adapter-in-liberia' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
  ],
};

export default sierraLeone;
