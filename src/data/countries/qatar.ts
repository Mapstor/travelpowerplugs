import type { CountryPlugData } from '@/types';

const qatar: CountryPlugData = {
  slug: 'qatar-electric-plug-types-which-adapter-will-you-need-in-qatar',
  name: 'Qatar',
  demonym: 'Qatari',
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
    'Qatar\'s hotel stock was massively expanded for the 2022 FIFA World Cup, meaning most accommodations are brand-new with USB ports and sometimes universal outlets built in.',
  ],
  travelContext:
    'Qatar — home to Doha\'s futuristic skyline, the Museum of Islamic Art, and the desert inland sea — has world-class infrastructure. Electrical reliability is excellent everywhere. Hamad International Airport is one of the best-connected transit hubs globally, with abundant charging facilities.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs will not fit Qatari Type G outlets. Bring an adapter. Modern devices handle 240V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same plug type as the UK. Everything works directly.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs are incompatible with Type G. Bring an adapter.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I does not fit. Bring an adapter. Voltage is the same as Australia.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Jarir Bookstore',
      type: 'electronics',
      city: 'Doha',
      priceRange: '15–50 QAR',
      note: 'Well-stocked electronics chain with travel adapters.',
    },
    {
      name: 'Lulu Hypermarket',
      type: 'supermarket',
      city: 'Doha',
      priceRange: '10–40 QAR',
      note: 'Budget-friendly hypermarket with a good electronics section.',
    },
    {
      name: 'Carrefour',
      type: 'supermarket',
      city: 'Doha',
      priceRange: '15–45 QAR',
      note: 'Inside major malls like Villaggio and City Center.',
    },
    {
      name: 'Hamad Airport shops',
      type: 'airport',
      city: 'Doha',
      priceRange: '25–70 QAR',
      note: 'Hamad International has extensive electronics shops — convenient for transit passengers.',
    },
  ],
  airportName: 'Doha Hamad International',
  airportCode: 'DOH',
  neighbors: [
    {
      name: 'Saudi Arabia',
      slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Same Type G plug. Saudi uses 60Hz vs Qatar\'s 50Hz, but modern electronics handle both.',
    },
    {
      name: 'Bahrain',
      slug: 'bahrain-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Same Type G system. One adapter covers both countries.',
    },
    {
      name: 'United Arab Emirates',
      slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'UAE uses the same Type G plugs. No additional adapter needed for a Gulf tour.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Qatar\'s hotel stock is ultra-modern, built largely for the 2022 FIFA World Cup. USB ports at bedsides are common, and many hotels offer universal outlets or adapters at reception. Even mid-range properties maintain excellent standards.',
  faqs: [
    {
      question: 'Can I charge my devices during a layover at Hamad Airport?',
      answer:
        'Absolutely. Hamad International Airport is one of the best airports in the world for charging. You will find Type G outlets and USB ports throughout the terminal, in lounges, at gates, and in the transit hotel.',
    },
    {
      question: 'Do Doha hotels have USB charging ports?',
      answer:
        'Many do. Qatar invested heavily in new hotel construction for the 2022 World Cup, and most modern properties feature USB ports at desks and bedsides. International chain hotels almost universally offer them.',
    },
    {
      question: 'Will my adapter from the UAE work in Qatar?',
      answer:
        'Yes. Qatar, the UAE, Bahrain, Kuwait, and Oman all use Type G outlets. A single adapter covers the entire Gulf region.',
    },
    {
      question: 'Is Qatar\'s power grid reliable?',
      answer:
        'Extremely. Qatar has one of the most reliable electrical grids in the world. Power outages are virtually unheard of in Doha. You do not need a surge protector or backup battery for reliability reasons — only for convenience while out sightseeing.',
    },
  ],
  metaTitle: 'Qatar Power Plugs: Type G (British) — Which Adapter for Doha?',
  metaDescription:
    'Qatar uses British Type G plugs at 240V/50Hz. UK travelers need no adapter; US, European, and Australian visitors do. Hamad Airport charging tips and local stores.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'United Arab Emirates', slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae' },
    { name: 'Bahrain', slug: 'bahrain-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Saudi Arabia', slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Kuwait', slug: 'kuwait-electric-plug-types-will-you-need-an-adapter-in-kuwait-city' },
  ],
};

export default qatar;
