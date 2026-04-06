import type { CountryPlugData } from '@/types';

const saudiArabia: CountryPlugData = {
  slug: 'saudi-arabia-electric-plug-types',
  name: 'Saudi Arabia',
  demonym: 'Saudi',
  continent: 'Asia',
  region: 'Middle East',
  voltage: 220,
  frequencyNote: 'Saudi Arabia uses 60Hz — unusual for a Type G country. This does not affect modern electronics but may cause issues with older motorized appliances designed for 50Hz.',
  frequency: 60,
  complexityTier: 'moderate',
  plugTypes: [
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
    'Saudi Arabia runs at 220V/60Hz — an unusual combination. Most Type G countries use 50Hz. The 60Hz frequency does not affect phones, laptops, or modern chargers, but older clock radios or motorized appliances designed for 50Hz may run faster.',
    'Many newer Saudi hotels — especially in Riyadh, Jeddah, and the holy cities — have USB ports built into bedside tables and sometimes universal outlets that accept multiple plug types.',
  ],
  travelContext:
    'Saudi Arabia has opened rapidly to tourism, with visitors exploring Riyadh, the AlUla heritage site, Jeddah\'s historic district, and the holy cities of Makkah and Madinah (for Muslim travelers). Electrical infrastructure is excellent and modern throughout the kingdom. Hajj and Umrah pilgrims should note that hotel rooms during peak seasons may be shared, so a compact power strip can be a lifesaver.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs do not fit Saudi Type G outlets. Bring an adapter. The 60Hz frequency is actually the same as in the US, and modern electronics handle the voltage difference automatically.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Saudi Arabia uses the same Type G plug as the UK. Your devices work directly. The 60Hz vs 50Hz difference does not affect normal electronics.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs are incompatible with Type G sockets. Bring an adapter. Modern chargers handle both 50Hz and 60Hz without issue.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs will not fit. Bring an adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Jarir Bookstore',
      type: 'electronics',
      city: 'Riyadh, Jeddah, Makkah, Madinah',
      priceRange: '15–60 SAR',
      note: 'Saudi Arabia\'s leading electronics and bookstore chain — excellent adapter selection.',
    },
    {
      name: 'eXtra Stores',
      type: 'electronics',
      city: 'Riyadh, Jeddah, Dammam',
      priceRange: '20–70 SAR',
      note: 'Major electronics retailer with branches in most malls.',
    },
    {
      name: 'Carrefour / Panda',
      type: 'supermarket',
      city: 'Nationwide',
      priceRange: '15–50 SAR',
      note: 'Hypermarket chains with travel adapters in the electronics aisle.',
    },
    {
      name: 'Airport shops',
      type: 'airport',
      city: 'Riyadh (RUH), Jeddah (JED)',
      priceRange: '25–80 SAR',
      note: 'Both major airports have electronics shops, though prices are higher than retail.',
    },
  ],
  airportName: 'Riyadh King Khalid / Jeddah King Abdulaziz',
  airportCode: 'RUH / JED',
  neighbors: [
    {
      name: 'United Arab Emirates',
      slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'UAE uses Type G at 220V/50Hz. Same plug — the only difference is frequency (50Hz vs Saudi\'s 60Hz), which doesn\'t affect modern devices.',
    },
    {
      name: 'Oman',
      slug: 'oman-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'mostly',
      adapterNote: 'Oman uses Type G at 240V/50Hz. Same plug shape; slight voltage and frequency differences are handled by modern electronics.',
    },
    {
      name: 'Yemen',
      slug: 'yemen-electric-plug-types-do-you-need-an-adapter-for-yemen',
      plugTypes: ['A', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Yemen has a mix of plug types. Type G overlap exists, but you may encounter Type A and D as well.',
    },
    {
      name: 'Jordan',
      slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan',
      plugTypes: ['C', 'D', 'F', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Jordan uses a mix including Type G, so your Saudi adapter may work. But C/D/F outlets are also common.',
    },
    {
      name: 'Kuwait',
      slug: 'kuwait-electric-plug-types-will-you-need-an-adapter-in-kuwait-city',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'mostly',
      adapterNote: 'Kuwait uses Type G at 240V/50Hz. Same plug; minor voltage/frequency differences are no concern for modern devices.',
    },
    {
      name: 'Bahrain',
      slug: 'bahrain-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Bahrain uses Type G. Connected to Saudi Arabia by the King Fahd Causeway — same plug type.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Saudi hotels are modern and well-equipped, especially in Riyadh, Jeddah, and the holy cities. Many newer hotels offer USB ports at bedsides and sometimes universal outlets. During Hajj and Umrah peak seasons, rooms near Makkah\'s Grand Mosque can be very basic — bring a compact power strip if sharing a room.',
  faqs: [
    {
      question: 'Will the 60Hz frequency damage my European appliances?',
      answer:
        'No, for modern electronics like phone chargers, laptops, and cameras. These are designed to handle both 50Hz and 60Hz. However, older motorized devices (some clocks, turntables, or appliances with synchronous motors) designed strictly for 50Hz may run slightly faster. When in doubt, check the label on your device.',
    },
    {
      question: 'Do Hajj hotels in Makkah have enough power outlets?',
      answer:
        'Hotels near the Grand Mosque range widely. Five-star properties are well-equipped with multiple outlets and USB ports. Budget accommodation during peak pilgrimage season may have limited outlets for shared rooms. A compact power strip is highly recommended.',
    },
    {
      question: 'Can I use the same adapter in Saudi Arabia and Dubai?',
      answer:
        'Yes — both use Type G (British) outlets. One adapter works for both countries. The frequency difference (60Hz in Saudi, 50Hz in UAE) does not affect modern electronics.',
    },
    {
      question: 'Is it easy to find adapters at Jarir Bookstore?',
      answer:
        'Jarir is the go-to shop in Saudi Arabia for electronics accessories. They carry travel adapters, universal adapters, and power strips at reasonable prices. Branches are in every major city and many malls.',
    },
    {
      question: 'Do I need a surge protector in Saudi Arabia?',
      answer:
        'Saudi Arabia\'s electrical grid is very reliable and modern. A surge protector is not essential, but it never hurts to have one for expensive electronics like laptops, especially if you are staying in older buildings.',
    },
  ],
  metaTitle: 'Saudi Arabia Power Plugs: Type G at 60Hz — Which Adapter Do You Need?',
  metaDescription:
    'Saudi Arabia uses Type G plugs at 220V/60Hz — unusual frequency for a British-style system. UK visitors need no adapter; everyone else does. Hajj tips and local stores.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'United Arab Emirates', slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae' },
    { name: 'Qatar', slug: 'qatar-electric-plug-types-which-adapter-will-you-need-in-qatar' },
    { name: 'Jordan', slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
  ],
};

export default saudiArabia;
