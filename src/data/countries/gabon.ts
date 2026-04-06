import type { CountryPlugData } from '@/types';

const gabon: CountryPlugData = {
  slug: 'gabon-electric-plug-types-will-you-need-an-adapter-libreville',
  name: 'Gabon',
  demonym: 'Gabonese',
  continent: 'Africa',
  region: 'Central Africa',
  voltage: 230,
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
    'Gabon is one of Central Africa\'s wealthier nations, known for its rainforest national parks and wildlife. Libreville, the capital, has decent infrastructure and steady electricity in the city center. Eco-tourism lodges in places like Lopé National Park may rely on generators or solar power.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs won\'t fit. At 230V, non-dual-voltage US devices require a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'UK plugs require an adapter. Voltage is compatible.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work directly in Gabonese outlets.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    { name: 'CECADO', type: 'electronics', city: 'Libreville', priceRange: 'CFA 2,000–6,000', note: 'Electronics distributor with retail outlets' },
    { name: 'Prix Import', type: 'electronics', city: 'Libreville', priceRange: 'CFA 1,500–5,000', note: 'General goods store with some electronics' },
    { name: 'Mbolo supermarket', type: 'supermarket', city: 'Libreville', priceRange: 'CFA 2,000–4,000', note: 'Supermarket chain that stocks basic electrical accessories' },
  ],
  airportName: 'Libreville Léon M\'ba International Airport',
  airportCode: 'LBV',
  neighbors: [
    { name: 'Cameroon', slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Congo', slug: 'congo-electric-plug-type-do-you-need-an-adapter', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
    { name: 'Equatorial Guinea', slug: 'equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you', plugTypes: ['C', 'E'], voltage: 230, sameAsSubject: 'identical' },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Libreville use standard French Type E sockets. International business hotels have generator backup for outages. Eco-lodges in the interior may have limited power hours, often generator- or solar-based — charge everything when power is available.',
  faqs: [
    {
      question: 'Does Gabon use the same plugs as France?',
      answer:
        'Yes. Gabon uses the French electrical system — Type C and E at 230V/50Hz. If you\'re traveling from France or continental Europe, no adapter is needed.',
    },
    {
      question: 'Will my adapter from Cameroon work in Gabon?',
      answer:
        'Yes. Cameroon, Gabon, Congo, and Equatorial Guinea all share the same French-style plug system. One adapter covers all four countries.',
    },
    {
      question: 'Is there reliable power in Gabon\'s national parks?',
      answer:
        'Eco-lodges and park camps typically run on generators or solar power with limited hours of electricity. Charge devices fully at your Libreville hotel before heading into the parks, and bring a power bank.',
    },
  ],
  metaTitle: 'Gabon Power Plugs — Types C & E | Adapter Guide for Libreville',
  metaDescription:
    'Gabon uses French-style plugs (Types C and E) at 230V/50Hz. European travelers need no adapter. US, UK, and Australian visitors do. Tips for Libreville and national park lodges.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Cameroon', slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter' },
    { name: 'Congo', slug: 'congo-electric-plug-type-do-you-need-an-adapter' },
    { name: 'Equatorial Guinea', slug: 'equatorial-guinea-electric-plug-types-will-you-need-to-take-an-adapter-with-you' },
  ],
};

export default gabon;
