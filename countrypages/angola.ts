import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'angola-electric-plug-types-adapter',
  name: 'Angola',
  demonym: 'Angolan',
  continent: 'Africa',
  region: 'Southern Africa',
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
  ],
  quirks: [
    'Portuguese colonial legacy means only Type C outlets are used throughout the country.',
  ],
  travelContext:
    'Angola is a large Southern African nation with a growing tourism sector. Luanda, the capital, has modern hotel infrastructure, but power reliability drops significantly outside major cities. Oil-producing regions like Cabinda and Soyo tend to have better electrical infrastructure due to industry investment.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-prong plugs will not fit Angolan round-pin Type C outlets. You also need a voltage converter for non-dual-voltage devices, as Angola uses 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs are too large for Type C outlets. You need an adapter, but voltage is compatible at 220–230V.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C plugs fit directly into Angolan outlets. Type E and F plugs also fit since Type C is compatible. No adapter or converter needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian Type I plugs will not fit. An adapter is required, but voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Kero Hypermarket',
      type: 'supermarket',
      city: 'Luanda',
      priceRange: '$5–15',
      note: 'Largest retail chain in Angola with an electronics section.',
    },
    {
      name: 'Shoprite Angola',
      type: 'supermarket',
      city: 'Luanda',
      priceRange: '$5–12',
      note: 'South African supermarket chain with basic adapter selection.',
    },
    {
      name: 'Luanda local markets',
      type: 'electronics',
      city: 'Luanda',
      priceRange: '$3–10',
      note: 'Street vendors and market stalls sometimes carry adapters. Quality varies.',
    },
  ],
  airportName: 'Dr. António Agostinho Neto International Airport',
  airportCode: 'LAD',
  neighbors: [
    {
      name: 'Congo',
      slug: 'congo-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Congo uses Type C and E. Your Type C adapter works in both countries.',
    },
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Zambia uses Type C, D, and G. Type C outlets are shared, but you may encounter British Type G sockets.',
    },
    {
      name: 'Namibia',
      slug: 'namibia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['D', 'M'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Namibia primarily uses South African Type D and M plugs, which are incompatible with Angolan Type C.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Luanda aimed at business travelers generally have reliable power. Outside the capital, expect frequent outages and consider bringing a portable battery pack.',
  faqs: [
    {
      question: 'What plug type does Angola use?',
      answer:
        'Angola uses Type C (Europlug) outlets with two round pins. This is the standard across the country, a legacy of Portuguese colonial infrastructure.',
    },
    {
      question: 'Do I need a voltage converter for Angola?',
      answer:
        'Angola runs on 220V at 50Hz. Most modern phone chargers, laptops, and camera chargers are dual-voltage (100–240V) and only need a plug adapter. Check the label on your device — if it says 100–240V, you are fine with just an adapter.',
    },
    {
      question: 'Is the power supply reliable in Angola?',
      answer:
        'Power reliability varies significantly. Luanda hotels are generally reliable, but outages are common outside the capital. Oil industry areas such as Cabinda tend to have better infrastructure. A portable power bank is recommended.',
    },
  ],
  metaTitle: 'Angola Power Plugs — Type C Outlets, 220V, Adapter Guide',
  metaDescription:
    'Angola uses Type C plugs at 220V/50Hz. Find out if you need an adapter, what to buy locally in Luanda, and how reliable the power supply is across the country.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Congo', slug: 'congo-electric-plug-type-do-you-need-an-adapter' },
    { name: 'Zambia', slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia' },
    { name: 'Namibia', slug: 'namibia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Mozambique', slug: 'mozambique-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default data;
