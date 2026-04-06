import type { CountryPlugData } from '../types';

const iran: CountryPlugData = {
  slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
  name: 'Iran',
  demonym: 'Iranian',
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
    'International sanctions mean Western electronics and travel accessories may be harder to find locally. Bring your adapter from home rather than relying on purchasing one in Iran.',
    'Traditional guesthouses in desert towns like Yazd and Kerman generally have power, but outlets may be limited and wiring can be old. A compact power strip is useful.',
  ],
  travelContext:
    'Iran is one of the world\'s great cultural destinations — Isfahan\'s mosques, Persepolis, Shiraz\'s gardens, and Yazd\'s desert architecture. The European-style C/F electrical system is straightforward for continental travelers. Due to sanctions, finding specific electronics locally can be challenging, so come prepared.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pronged plugs are incompatible. Bring a Type C adapter from home. Adapter availability inside Iran is unreliable due to trade restrictions.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit. Bring an adapter from home — do not rely on finding one in Iran.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C and F plugs work directly in Iranian outlets. No adapter needed for European travelers.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I is incompatible. Bring an adapter before arriving in Iran.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Sam Center',
      type: 'electronics',
      city: 'Tehran',
      priceRange: '200,000–800,000 IRR',
      note: 'Large electronics mall in Tehran with multiple vendors. Adapter availability varies.',
    },
    {
      name: 'Local bazaar electronics stalls',
      type: 'convenience',
      city: 'Tehran, Isfahan, Shiraz',
      priceRange: '150,000–500,000 IRR',
      note: 'Electronics vendors in major bazaars sometimes carry adapters, but selection is unpredictable.',
    },
    {
      name: 'Imam Khomeini Airport shops',
      type: 'airport',
      city: 'Tehran',
      priceRange: '300,000–1,000,000 IRR',
      note: 'Limited electronics shops at IKA. Do not count on finding adapters here.',
    },
  ],
  airportName: 'Tehran Imam Khomeini International',
  airportCode: 'IKA',
  neighbors: [
    {
      name: 'Iraq',
      slug: 'iraq-electric-plug-types-will-you-need-an-adapter-traveling-to-iraq',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Iraq uses Type C (compatible) plus D and G (incompatible). Your Type C devices will work in Iraq\'s Type C outlets.',
    },
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Turkey uses the same C/F system at the same voltage. No additional adapter needed.',
    },
    {
      name: 'Afghanistan',
      slug: 'afghanistan-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'Afghanistan uses C/F — same as Iran.',
    },
    {
      name: 'Pakistan',
      slug: 'pakistan-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'D'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Pakistan uses Type C (compatible) and Type D (different). Type C devices work in both countries.',
    },
    {
      name: 'Azerbaijan',
      slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'Same C/F system. No additional adapter needed.',
    },
    {
      name: 'Turkmenistan',
      slug: 'turkmenistan-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'Same plug types. Compatible across the border.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Tehran\'s international hotels (Espinas, Parsian Azadi) are well-maintained with reliable power. Boutique guesthouses in Isfahan, Shiraz, and Yazd are charming but may have older wiring with limited outlets. Due to sanctions, Western-branded hotel amenities are scarce — bring everything you need from home.',
  faqs: [
    {
      question: 'Should I buy my adapter before arriving in Iran?',
      answer:
        'Absolutely. Due to international sanctions, specific electronics and travel accessories can be hard to find or unavailable in Iran. Bring your adapter, a portable battery, and any charging cables you need.',
    },
    {
      question: 'Will my European devices work in Iran?',
      answer:
        'Yes. Iran uses the same Type C and F outlets as continental Europe at 230V/50Hz. European travelers need no adapter at all.',
    },
    {
      question: 'Are there power outlets in desert guesthouses in Yazd?',
      answer:
        'Traditional guesthouses in Yazd generally have electricity, but outlets may be few and sometimes located inconveniently. A compact power strip or multi-port USB charger is very useful.',
    },
    {
      question: 'Can I use my phone and internet freely in Iran?',
      answer:
        'Power-wise, your phone charges fine with a Type C adapter. However, many Western apps and websites are restricted in Iran. Consider a VPN solution before arriving — this is a connectivity issue, not an electrical one.',
    },
    {
      question: 'Is the power supply reliable across Iran?',
      answer:
        'Major cities like Tehran, Isfahan, and Shiraz have reliable electricity. Rural and remote areas may experience occasional outages. Iran\'s grid is generally stable compared to some neighboring countries.',
    },
  ],
  metaTitle: 'Iran Power Plugs: Types C & F — Will You Need an Adapter?',
  metaDescription:
    'Iran uses Type C and F plugs at 230V/50Hz. European travelers need no adapter; US, UK, and Australian visitors must bring one from home due to limited local availability.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Turkey', slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey' },
    { name: 'Iraq', slug: 'iraq-electric-plug-types-will-you-need-an-adapter-traveling-to-iraq' },
    { name: 'Azerbaijan', slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter' },
    { name: 'Afghanistan', slug: 'afghanistan-electric-plug-types' },
  ],
};

export default iran;
