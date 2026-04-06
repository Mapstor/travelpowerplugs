import type { CountryPlugData } from '../types';

const bahrain: CountryPlugData = {
  slug: 'bahrain-electric-plug-types-will-you-need-an-adapter',
  name: 'Bahrain',
  demonym: 'Bahraini',
  continent: 'Asia',
  region: 'Middle East',
  voltage: 230,
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
    'Bahrain is connected to Saudi Arabia by the King Fahd Causeway — both countries use Type G, so your adapter works on both sides of the crossing.',
  ],
  travelContext: connected to Saudi Arabia by the King Fahd Causeway. Known for the Bahrain Fort, Manama\'s Souq, and Formula 1 Grand Prix, it has modern infrastructure throughout. Electrical reliability is excellent.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs are incompatible with Type G. Bring an adapter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same Type G system. No adapter needed.',
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
        'Type I is incompatible. Bring an adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Sharaf DG',
      type: 'electronics',
      city: 'Manama',
      priceRange: '1–4 BHD',
      note: 'Gulf electronics chain in major Bahrain malls.',
    },
    {
      name: 'Lulu Hypermarket',
      type: 'supermarket',
      city: 'Manama, Riffa',
      priceRange: '0.5–3 BHD',
      note: 'Affordable hypermarket with adapters in the electronics section.',
    },
    {
      name: 'Ashraf Electronics',
      type: 'electronics',
      city: 'Manama',
      priceRange: '1–3 BHD',
      note: 'Local electronics store with travel accessories.',
    },
  ],
  airportName: 'Bahrain International',
  airportCode: 'BAH',
  neighbors: [
    {
      name: 'Saudi Arabia',
      slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['G'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Connected by the King Fahd Causeway. Same Type G plug. Saudi uses 60Hz vs Bahrain\'s 50Hz — no concern for modern devices.',
    },
    {
      name: 'Qatar',
      slug: 'qatar-electric-plug-types-which-adapter-will-you-need-in-qatar',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'identical',
      adapterNote: 'Same Type G system. One adapter works for both.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Bahrain\'s hotel market is modern and compact. Manama\'s international hotels cater to business travelers and Formula 1 visitors, with reliable power and adapters usually available at reception. Even budget hotels maintain good electrical standards.',
  faqs: [
    {
      question: 'Will my adapter work on both sides of the King Fahd Causeway?',
      answer:
        'Yes. Both Bahrain and Saudi Arabia use Type G outlets. The only difference is that Saudi runs at 60Hz versus Bahrain\'s 50Hz, but modern electronics handle both frequencies without issue.',
    },
    {
      question: 'Is Bahrain\'s power supply reliable?',
      answer:
        'Very reliable. As a small, modern island nation, Bahrain has excellent electrical infrastructure. Outages are extremely uncommon.',
    },
    {
      question: 'Where can I buy an adapter near Bahrain Airport?',
      answer:
        'Bahrain International Airport has some electronics vendors. For better prices, Lulu Hypermarket near Manama is a short taxi ride away and offers adapters at lower prices.',
    },
    {
      question: 'Do Formula 1 weekend hotels have enough outlets?',
      answer:
        'Hotels in Bahrain are well-equipped year-round, including during the F1 Grand Prix. Most provide Type G outlets in adequate numbers and often have USB ports in newer rooms.',
    },
  ],
  metaTitle: 'Bahrain Power Plugs: Type G (British) — Do You Need an Adapter?',
  metaDescription:
    'Bahrain uses British Type G plugs at 230V/50Hz. UK travelers need no adapter; US, European, and Australian visitors do. Tips for the causeway to Saudi Arabia.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Saudi Arabia', slug: 'saudi-arabia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Qatar', slug: 'qatar-electric-plug-types-which-adapter-will-you-need-in-qatar' },
    { name: 'Kuwait', slug: 'kuwait-electric-plug-types-will-you-need-an-adapter-in-kuwait-city' },
    { name: 'United Arab Emirates', slug: 'united-arab-emirates-electric-plug-types-which-adapter-for-uae' },
  ],
};

export default bahrain;
