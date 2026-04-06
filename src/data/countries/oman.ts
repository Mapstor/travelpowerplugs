import type { CountryPlugData } from '@/types';

const oman: CountryPlugData = {
  slug: 'oman-electric-plug-types-which-adapter-will-you-need',
  name: 'Oman',
  demonym: 'Omani',
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
    'Oman\'s desert camping destinations like Wahiba Sands have no electrical infrastructure — portable batteries are essential for overnight stays.',
  ],
  travelContext:
    'Oman is gaining popularity for its dramatic fjords (Musandam), desert landscapes (Wahiba Sands), historic forts, and Muscat\'s understated elegance. Electrical infrastructure is modern and reliable across urban areas. Desert camping requires a battery pack.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pronged plugs are incompatible with Omani Type G sockets. Bring an adapter. Modern electronics handle 240V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same Type G system as the UK. Your plugs work directly.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Type G. Bring an adapter.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I is incompatible. Bring an adapter. Voltage matches at 240V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Sharaf DG',
      type: 'electronics',
      city: 'Muscat',
      priceRange: '1–5 OMR',
      note: 'Major Gulf electronics retailer with a wide adapter selection.',
    },
    {
      name: 'Lulu Hypermarket',
      type: 'supermarket',
      city: 'Muscat, Salalah',
      priceRange: '0.5–3 OMR',
      note: 'Indian-owned hypermarket chain with affordable electronics accessories.',
    },
    {
      name: 'Carrefour Oman',
      type: 'supermarket',
      city: 'Muscat',
      priceRange: '1–4 OMR',
      note: 'French hypermarket in Muscat\'s malls with travel adapters.',
    },
  ],
  airportName: 'Muscat International',
  airportCode: 'MCT',
  neighbors: [
    {
      name: 'United Arab Emirates',
      slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'UAE uses the same Type G system. One adapter covers both countries.',
    },
    {
      name: 'Saudi Arabia',
      slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Same Type G plug. Saudi runs at 60Hz instead of 50Hz, but modern electronics handle this fine.',
    },
    {
      name: 'Yemen',
      slug: 'yemen-electric-plug-types-do-you-need-an-adapter-for-yemen',
      plugTypes: ['A', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Yemen has a mix of plug types. Type G overlaps with Oman, but you may encounter Type A and D.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Muscat\'s hotels are uniformly modern and reliable. Even mid-range properties are well-maintained. Desert camping in Wahiba Sands means no power — bring a fully charged portable battery. Beach resorts in Salalah have excellent infrastructure.',
  faqs: [
    {
      question: 'Will there be power at a Wahiba Sands desert camp?',
      answer:
        'Most desert camps in Wahiba Sands do not have electrical power in individual tents. Some luxury camps offer limited solar charging. Bring a portable battery and charge everything fully before heading into the desert.',
    },
    {
      question: 'Can I use the same adapter in Oman and the UAE?',
      answer:
        'Yes, both countries use Type G (British) outlets. One adapter serves both destinations — convenient for a Gulf itinerary.',
    },
    {
      question: 'Are Oman\'s outlets the same as the UK?',
      answer:
        'Identical. Oman uses British Type G three-pin rectangular outlets at 240V/50Hz, the same as the UK. British visitors need no adapter at all.',
    },
    {
      question: 'Where can I buy a cheap adapter in Muscat?',
      answer:
        'Lulu Hypermarket offers the best prices on adapters in Oman, with locations across Muscat. Sharaf DG in malls has a wider selection at slightly higher prices.',
    },
  ],
  metaTitle: 'Oman Power Plugs: Type G (British) — Which Adapter Will You Need?',
  metaDescription:
    'Oman uses British Type G plugs at 240V/50Hz. UK visitors need no adapter; US, European, and Australian travelers do. Desert camping tips and where to buy in Muscat.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'United Arab Emirates', slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae' },
    { name: 'Saudi Arabia', slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Qatar', slug: 'qatar-electric-plug-types-which-adapter-will-you-need-in-qatar' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
  ],
};

export default oman;
