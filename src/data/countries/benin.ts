import { CountryPlugData } from '@/types';

const benin: CountryPlugData = {
  slug: 'benin-electric-plug-types-do-you-need-an-adapter',
  name: 'Benin',
  demonym: 'Beninese',
  continent: 'Africa',
  region: 'West Africa',
  voltage: 220,
  frequency: 50,
  complexityTier: 'simple',
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French',
      pins: 2,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.075,
      bodyWidth: 1.3,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.25,
      noseRadius: 0.52,
      recessRadius: 1.05,
      faceplateSize: 2.9,
    },
  ],
  travelContext:
    'Benin uses the standard French electrical system found across francophone West Africa. Cotonou, the economic capital, has improving power infrastructure, though outages still occur. The country has been investing in power generation and cross-border energy trade with Nigeria and Togo.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs will not fit Beninese outlets. A converter is needed for non-dual-voltage devices at 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type G plugs need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs fit directly. No conversion needed.',
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
      name: 'CFAO',
      type: 'electronics',
      city: 'Cotonou',
      priceRange: '$5–$15',
      note: 'Major retail outlet that may carry adapters and electrical accessories.',
    },
    {
      name: 'Erevan Bénin',
      type: 'supermarket',
      city: 'Cotonou',
      priceRange: '$3–$10',
      note: 'Supermarket in Cotonou where basic electrical items may be available.',
    },
    {
      name: 'Local markets',
      type: 'electronics',
      city: 'Cotonou',
      priceRange: '$2–$8',
      note: 'Market vendors in central Cotonou sell basic electronics and adapters.',
    },
  ],
  airportName: 'Cotonou Cadjehoun Airport',
  airportCode: 'COO',
  neighbors: [
    {
      name: 'Togo',
      slug: 'togo-electric-plug-types-which-adapter-will-you-need-for-togo',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Nigeria',
      slug: 'nigeria-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Nigeria uses British-style plugs — you will need a different adapter when crossing into Nigeria.',
    },
    {
      name: 'Burkina Faso',
      slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
    },
    {
      name: 'Niger',
      slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Cotonou are improving, with several mid-range and business hotels offering generator backup. USB ports are becoming more common in newer hotels. Accommodation in smaller cities and rural areas remains basic with less reliable power.',
  faqs: [
    {
      question: 'Do I need a different adapter when traveling from Benin to Nigeria?',
      answer:
        'Yes. Nigeria uses British-style Type G outlets, which are completely different from the French C/E system in Benin. You will need a separate adapter for Nigeria.',
    },
    {
      question: 'How reliable is electricity in Cotonou?',
      answer:
        'Cotonou\'s power supply has been improving but outages still occur, particularly during peak demand. Better hotels have generator backup. A portable battery pack is useful for uninterrupted charging.',
    },
    {
      question: 'Can I use the same charger across Benin, Togo, and Burkina Faso?',
      answer:
        'Yes. All three countries use identical Type C and E outlets at 220V. Your charger will work in all three without any adapter changes.',
    },
  ],
  metaTitle: 'Benin Power Plugs — Types C & E | Adapter Guide for Cotonou',
  metaDescription:
    'Benin uses French-style Type C and E plugs at 220V/50Hz. Learn whether you need an adapter and what to expect from power supply in Cotonou and beyond.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Togo', slug: 'togo-electric-plug-types-which-adapter-will-you-need-for-togo' },
    { name: 'Nigeria', slug: 'nigeria-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Burkina Faso', slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter' },
  ],
};

export default benin;
