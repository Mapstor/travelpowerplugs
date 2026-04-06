import type { CountryPlugData } from '../types';

const kuwait: CountryPlugData = {
  slug: 'kuwait-electric-plug-types-will-you-need-an-adapter-in-kuwait-city',
  name: 'Kuwait',
  demonym: 'Kuwaiti',
  continent: 'Asia',
  region: 'Middle East',
  voltage: 240,
  frequency: 50,
  complexityTier: 'simple',
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
    'Kuwait\'s extreme summer heat (often exceeding 50°C) means the electrical grid is heavily loaded by air conditioning — infrastructure is built to handle it, but it is worth noting for travelers with sensitive equipment.',
  ],
  travelContext: a business travel destination, with Kuwait City\'s modern towers, the Kuwait Towers landmark, and Failaka Island as points of interest. Infrastructure is modern and power is completely reliable throughout the city.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs do not fit Type G sockets. Bring an adapter. Modern electronics handle 240V without a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Identical Type G system — your UK devices work directly.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs are incompatible with Type G. Bring an adapter.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I does not fit. Bring an adapter. Voltage is the same at 240V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Xcite (Alghanim Electronics)',
      type: 'electronics',
      city: 'Kuwait City',
      priceRange: '1–5 KWD',
      note: 'Kuwait\'s leading electronics retailer — large stores in most major malls.',
    },
    {
      name: 'Eureka',
      type: 'electronics',
      city: 'Kuwait City',
      priceRange: '1–4 KWD',
      note: 'Electronics chain with travel accessories and adapters.',
    },
    {
      name: 'The Sultan Center',
      type: 'supermarket',
      city: 'Kuwait City',
      priceRange: '1–3 KWD',
      note: 'Premium supermarket chain with an electronics section.',
    },
    {
      name: 'Lulu Hypermarket',
      type: 'supermarket',
      city: 'Kuwait City',
      priceRange: '0.5–3 KWD',
      note: 'Budget-friendly hypermarket with adapters in the electronics aisle.',
    },
  ],
  airportName: 'Kuwait International',
  airportCode: 'KWI',
  neighbors: [
    {
      name: 'Saudi Arabia',
      slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Same Type G plug. Saudi runs at 60Hz vs Kuwait\'s 50Hz — no concern for modern electronics.',
    },
    {
      name: 'Iraq',
      slug: 'iraq-electric-plug-types-will-you-need-an-adapter-traveling-to-iraq',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Iraq has Type G outlets, but also C and D. Your Kuwait adapter covers Type G situations.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Kuwait City hotels are modern and well-maintained. International chains and local luxury properties have reliable power, USB ports in newer rooms, and adapters available at reception. The hotel scene caters heavily to business travelers.',
  faqs: [
    {
      question: 'Is Kuwait\'s power grid reliable?',
      answer:
        'Very reliable. Kuwait has robust, modern electrical infrastructure. Power outages are extremely rare in Kuwait City. You do not need a backup battery for reliability concerns.',
    },
    {
      question: 'Can I use the same adapter across all Gulf countries?',
      answer:
        'Yes. Kuwait, Qatar, Bahrain, Oman, the UAE, and Saudi Arabia all use Type G. A single adapter works for the entire Gulf Cooperation Council region.',
    },
    {
      question: 'Where is the cheapest place to buy an adapter in Kuwait?',
      answer:
        'Lulu Hypermarket offers the lowest prices. Xcite by Alghanim Electronics has a wider selection but at slightly higher prices. Both are found in major Kuwait City malls.',
    },
    {
      question: 'Do Kuwait hotels provide adapters?',
      answer:
        'Most international-brand hotels in Kuwait City keep adapters at the front desk for guests. It is worth calling ahead to confirm, especially for less common plug types like Australian Type I.',
    },
  ],
  metaTitle: 'Kuwait Power Plugs: Type G (British) — Do You Need an Adapter?',
  metaDescription:
    'Kuwait uses British Type G plugs at 240V/50Hz. UK visitors need no adapter; US, European, and Australian travelers do. Local store tips for Kuwait City.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Saudi Arabia', slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Qatar', slug: 'qatar-electric-plug-types-which-adapter-will-you-need-in-qatar' },
    { name: 'Bahrain', slug: 'bahrain-electric-plug-types-will-you-need-an-adapter' },
    { name: 'United Arab Emirates', slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae' },
  ],
};

export default kuwait;
