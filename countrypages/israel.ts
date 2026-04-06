import type { CountryPlugData } from '../types';

const israel: CountryPlugData = {
  slug: 'israel-electric-plug-type-will-you-need-an-adapter-for-israel',
  name: 'Israel',
  demonym: 'Israeli',
  continent: 'Asia',
  region: 'Middle East',
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
      id: 'type-h',
      name: 'Type H',
      subtitle: 'Israeli',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.5,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.07,
      bodyWidth: 1.3,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.25,
      noseRadius: 0.5,
      recessRadius: 1.05,
      faceplateSize: 2.9,
    },
  ],
  quirks: [
    'Israel\'s modern Type H socket (SI 32, redesigned in 1989) was specifically engineered to also accept Type C Europlugs — so if you have a European 2-pin plug, it fits directly into Israeli outlets without an adapter.',
    'The older version of Type H had flat pins, but the current standard uses round pins. You\'ll only encounter flat-pin sockets in very old, unrenovated buildings.',
  ],
  travelContext:
    'Israel is a compact, high-tech country where modern infrastructure is the norm. Tel Aviv, Jerusalem, and the Dead Sea are the main draws for tourists. Hotels and Airbnbs generally have excellent electrical systems. The pleasant surprise for European visitors is that their Type C plugs often work without any adapter at all.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pin plugs won\'t fit Israeli outlets. You need an adapter. Modern US electronics are dual-voltage, so no converter is required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK Type G plugs are incompatible with Israeli sockets. Bring an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit directly into modern Israeli Type H sockets — no adapter needed. Type F (Schuko) grounded plugs may need an adapter since the grounding mechanism differs, but ungrounded Type C devices work perfectly.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I angled flat-pin plugs won\'t fit Israeli outlets. You need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'KSP',
      type: 'electronics',
      note: 'Israel\'s leading electronics retailer with stores in most major cities and shopping centres.',
    },
    {
      name: 'Bug',
      type: 'electronics',
      note: 'Popular Israeli electronics chain with locations in Tel Aviv, Jerusalem, and Haifa.',
    },
    {
      name: 'Ivory',
      type: 'electronics',
      note: 'Electronics and computer retailer found in major malls across Israel.',
    },
    {
      name: 'Ben Gurion Airport (TLV)',
      type: 'airport',
      city: 'Tel Aviv',
      priceRange: '₪30–80 (~$8–22)',
      note: 'Shops in the arrivals hall sell adapters, including universal models. Prices are higher than city shops.',
    },
  ],
  airportName: 'Ben Gurion International Airport',
  airportCode: 'TLV',
  neighbors: [
    {
      name: 'Jordan',
      slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan',
      plugTypes: ['B', 'C', 'D', 'F', 'G', 'J'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Jordan uses a mix of plug types. Type C will work in some outlets, but a universal adapter is recommended.',
    },
    {
      name: 'Egypt',
      slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Egypt uses Type C/F. Your Type C devices will work there; an adapter for Type H plugs may be needed.',
    },
    {
      name: 'Lebanon',
      slug: 'lebanon-electric-plug-types-will-you-need-an-adapter-in-beirut',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Lebanon has a mix of plug types. Type C plugs will work in some sockets.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'common',
  accommodationNote:
    'Israeli hotels are modern and well-equipped. Many properties in Tel Aviv and Jerusalem have universal outlets or multiple outlet types in rooms, and USB charging ports are increasingly standard. Hotel reception desks commonly have adapters available for guests.',
  faqs: [
    {
      question: 'Do I need a power adapter for Israel?',
      answer:
        'It depends where you\'re from. US, UK, and Australian visitors need an adapter. European visitors with Type C (Europlug) devices usually don\'t — modern Israeli Type H sockets are designed to accept Type C plugs directly.',
    },
    {
      question: 'What is a Type H plug?',
      answer:
        'Type H is Israel\'s unique plug standard — three round pins arranged in a V shape. The modern version (post-1989) also accepts 2-pin Type C Europlugs, which is a convenient design feature for international visitors.',
    },
    {
      question: 'Will my European Europlug work in Israel without an adapter?',
      answer:
        'In most cases, yes. The modern Israeli Type H socket (SI 32) was redesigned to accept Type C Europlugs. If you only have 2-pin round-pin devices, you\'re likely fine without an adapter.',
    },
    {
      question: 'Do Israeli hotels provide adapters?',
      answer:
        'Many do, especially mid-range and upscale hotels in Tel Aviv and Jerusalem. Some rooms even have universal outlets. But it\'s still safer to bring your own adapter rather than relying on hotel supply.',
    },
    {
      question: 'Does the same electrical system cover the Palestinian Territories?',
      answer:
        'Yes. The Palestinian Territories use the same Type C/H system at 230V/50Hz. The same adapter works throughout the region.',
    },
  ],
  metaTitle: 'Israel Power Plugs — Do You Need an Adapter? (Type H & C)',
  metaDescription:
    'Israel uses its unique Type H plug alongside Type C at 230V/50Hz. Find out if you need an adapter, whether European plugs fit directly, and where to buy one in Tel Aviv.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Jordan', slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan' },
    { name: 'Egypt', slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt' },
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey' },
  ],
};

export default israel;
