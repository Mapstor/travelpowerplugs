import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'sri-lanka-electric-plug-types-will-you-need-an-adapter-in-sri-lanka',
  name: 'Sri Lanka',
  demonym: 'Sri Lankan',
  continent: 'Asia',
  region: 'South Asia',
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
    {
      id: 'type-m',
      name: 'Type M',
      subtitle: 'South African (large)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 7.06,
      pinSpacing: 25.4,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.11,
      bodyWidth: 1.5,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Sri Lanka primarily uses Type D (old British Indian, 3 round pins) and Type G (modern British, 3 rectangular pins). Some outlets accept Type M (large South African). Type C Europlugs often fit into Type D sockets, which can be handy in a pinch.',
  ],
  travelContext:
    'Sri Lanka\'s plug situation reflects its colonial history — a mix of old British Indian and modern British standards. Tourist hotels generally accommodate multiple plug types, but a universal adapter is the safest approach. The country\'s power grid is reliable in major cities and along the main tourist circuit (Colombo, Kandy, Galle, Ella).',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US plugs do not fit any Sri Lankan outlet type. You need an adapter. Sri Lanka uses 230V — check your device is dual-voltage.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'British Type G plugs work in the many Type G outlets found in Sri Lanka. You may occasionally encounter older Type D outlets that need an adapter, but most tourist-facing accommodation has Type G.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type C Europlugs sometimes fit into Type D sockets, but this is not guaranteed. Bring an adapter for reliability. Voltage is compatible.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs do not fit Sri Lankan outlets. You need an adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Softlogic',
      type: 'electronics',
      city: 'Colombo',
      priceRange: 'LKR 300–LKR 1,500',
      note: 'Major electronics retailer with branches across Sri Lanka.',
    },
    {
      name: 'Singer',
      type: 'electronics',
      priceRange: 'LKR 300–LKR 1,200',
      note: 'Well-known Sri Lankan electronics chain with stores in most towns.',
    },
    {
      name: 'Abans',
      type: 'electronics',
      priceRange: 'LKR 300–LKR 1,500',
      note: 'Electronics and appliance retailer with a national presence.',
    },
    {
      name: 'Keells / Cargills',
      type: 'supermarket',
      priceRange: 'LKR 200–LKR 800',
      note: 'Supermarket chains that sometimes carry basic adapters in their electronics aisle.',
    },
    {
      name: 'Bandaranaike Airport shops',
      type: 'airport',
      city: 'Colombo',
      priceRange: 'LKR 500–LKR 2,000',
      note: 'Electronics kiosks in the arrivals area carry travel adapters.',
    },
  ],
  airportName: 'Bandaranaike International Airport',
  airportCode: 'CMB',
  neighbors: [
    {
      name: 'India',
      slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india',
      plugTypes: ['C', 'D', 'M'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'India shares Type D and M with Sri Lanka. If traveling between both countries, the same adapter often works.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Tourist hotels across Sri Lanka — particularly in Colombo, Kandy, Galle, and the southern coast — generally have multi-standard outlets or adapters at reception. Boutique hotels and guesthouses in Ella and the hill country are usually well-equipped. Very basic guesthouses may only have Type D or Type G outlets.',
  faqs: [
    {
      question: 'Do I need an adapter for Sri Lanka?',
      answer:
        'US and Australian travelers definitely need an adapter. UK travelers will find their Type G plugs work in most tourist hotels. European travelers should bring an adapter — Type C sometimes fits Type D sockets but not reliably. A universal adapter is the safest choice.',
    },
    {
      question: 'What plug types will I encounter in Sri Lanka?',
      answer:
        'Primarily Type D (three round pins in a triangle, the old British Indian standard) and Type G (three rectangular pins, modern British). Some outlets are Type M (larger round pins). Many tourist hotels have multi-standard outlets that accept several types.',
    },
    {
      question: 'Is the power grid reliable in Sri Lanka?',
      answer:
        'In Colombo and along the popular tourist route (Kandy, Galle, Ella, Sigiriya), power is generally reliable. Rural and remote areas may experience occasional outages. Sri Lanka has invested significantly in its power infrastructure in recent years.',
    },
    {
      question: 'Can I use my European Europlug in Sri Lanka?',
      answer:
        'Sometimes. Type C Europlugs can physically fit into many Type D sockets because the pin spacing is close. However, the fit can be loose and unreliable. It is better to carry a proper adapter than to rely on this workaround.',
    },
    {
      question: 'Where is the best place to buy an adapter in Colombo?',
      answer:
        'Softlogic, Singer, and Abans electronics stores all carry adapters at reasonable prices. There are also electronics shops at Bandaranaike Airport if you need one immediately upon arrival.',
    },
  ],
  metaTitle: 'Sri Lanka Power Plugs: Types D, G & M — Do You Need an Adapter?',
  metaDescription:
    'Sri Lanka uses Type D, G, and M plugs at 230V/50Hz. Find out which adapter you need, where to buy one in Colombo, and what outlets to expect across the island.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'India', slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india' },
    { name: 'Maldives', slug: 'maldives-electric-plug-types-will-you-need-an-adapter-for-maldives' },
    { name: 'Nepal', slug: 'nepal-electric-plug-types-will-you-need-an-adapter-in-nepal' },
    { name: 'Bangladesh', slug: 'bangladesh-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default data;
