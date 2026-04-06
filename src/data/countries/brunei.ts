import type { CountryPlugData } from '@/types';

const brunei: CountryPlugData = {
  slug: 'brunei-electric-plug-types-do-you-need-an-adapter',
  name: 'Brunei',
  demonym: 'Bruneian',
  continent: 'Asia',
  region: 'Southeast Asia',
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
  travelContext:
    'Brunei is a small, wealthy nation with modern, reliable electrical infrastructure throughout. There is one plug type — British Type G — and one voltage. No surprises, no regional variations. If you have an adapter for the UK, Malaysia, or Singapore, it works here.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US plugs do not fit Brunei\'s Type G outlets. You need an adapter. Brunei uses 240V — check your device voltage ratings.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'UK plugs work directly. Same Type G outlets, compatible voltage.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit. Bring an adapter to Type G. Voltage is compatible.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs do not fit Brunei\'s outlets. Bring an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Hua Ho',
      type: 'supermarket',
      priceRange: 'BND 3–BND 15',
      note: 'Brunei\'s largest department store and supermarket chain. Carries adapters in the electronics section.',
    },
    {
      name: 'Soon Lee',
      type: 'supermarket',
      priceRange: 'BND 3–BND 12',
      note: 'Shopping centre chain with electronics and household items.',
    },
    {
      name: 'TelBru shops',
      type: 'electronics',
      priceRange: 'BND 5–BND 20',
      note: 'Telecom shops that carry chargers and basic adapters.',
    },
    {
      name: 'Brunei International Airport shops',
      type: 'airport',
      priceRange: 'BND 8–BND 25',
      note: 'Limited selection but adapters are available at airport retail.',
    },
  ],
  airportName: 'Brunei International Airport',
  airportCode: 'BWN',
  neighbors: [
    {
      name: 'Malaysia',
      slug: 'malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Malaysia uses the same Type G system. Your adapter works in both countries.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Brunei\'s hotels are modern and well-maintained. The Empire Hotel and other international properties have adapters at reception and often feature USB charging ports. Mid-range hotels in Bandar Seri Begawan are reliable with standard Type G outlets throughout. Budget options are limited but power quality is consistently good across the country.',
  faqs: [
    {
      question: 'Do I need an adapter for Brunei?',
      answer:
        'If you are from the UK, no — Brunei uses the same Type G plug. Travelers from the US, Europe, and Australia all need an adapter. If you already have one for Malaysia or Singapore, it works in Brunei.',
    },
    {
      question: 'Is Brunei the same plug as Malaysia?',
      answer:
        'Yes, identical — both use British-style Type G outlets. If you are visiting both countries on the same trip, one adapter covers both.',
    },
    {
      question: 'Is the power reliable in Brunei?',
      answer:
        'Very reliable. Brunei is a small, wealthy country with modern infrastructure. Power outages are extremely rare. You do not need to worry about backup batteries for reliability reasons.',
    },
    {
      question: 'Where can I buy an adapter in Brunei?',
      answer:
        'Hua Ho department stores are the easiest option — there are several locations in Bandar Seri Begawan. Soon Lee and TelBru shops also carry them. Prices are very reasonable.',
    },
  ],
  metaTitle: 'Brunei Power Plugs: Type G (British) — Do You Need an Adapter?',
  metaDescription:
    'Brunei uses British-style Type G plugs at 240V/50Hz. UK travelers need nothing. Find out if you need an adapter and where to buy one in Bandar Seri Begawan.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Malaysia', slug: 'malaysia-electric-plug-types-will-you-need-an-adapter-in-kuala-lumpur' },
    { name: 'Singapore', slug: 'singapur-electric-plug-types-will-you-need-an-adapter-for-singapur' },
    { name: 'Indonesia', slug: 'indonesia-electric-plug-types-will-you-need-an-adapter-in-indonesia' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
  ],
};

export default brunei;
