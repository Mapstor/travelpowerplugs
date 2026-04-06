import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'eswatini-electric-plug-types-will-you-need-an-adapter-in-mbabane',
  name: 'Eswatini',
  demonym: 'Swazi',
  continent: 'Africa',
  region: 'Southern Africa',
  voltage: 230,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-m',
      name: 'Type M',
      subtitle: 'South African (large)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 7.06,
      pinSpacing: 25.4,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.11,
      bodyWidth: 1.5,
      bodyHeight: 1.3,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
  ],
  quirks: [
    'Eswatini uses the same South African Type M system — bring the same adapter you would for South Africa.',
  ],
  travelContext:
    'Eswatini (formerly Swaziland) is a small landlocked kingdom entirely bordered by South Africa and Mozambique. Many visitors arrive overland from South Africa, and the electrical system is identical. The power standard is consistent throughout the country.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs are incompatible with Eswatini\'s large three-round-pin Type M outlets. A voltage converter is needed for non-dual-voltage devices (230V vs 120V).',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit Type M outlets. An adapter is required, but voltage is compatible.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs will not fit the large Type M sockets. You need a specific Type M adapter. Voltage is compatible.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are not compatible. An adapter is required, and voltage is close enough at 230V.',
    },
    {
      origin: 'South Africa',
      originPlugTypes: 'M',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Eswatini uses the identical South African Type M system. No adapter needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Game',
      type: 'electronics',
      city: 'Mbabane',
      priceRange: '$5–15',
      note: 'South African retail chain with adapter and electronics selection.',
    },
    {
      name: 'Pick n Pay',
      type: 'supermarket',
      city: 'Mbabane',
      priceRange: '$5–10',
      note: 'May carry basic travel adapters near the checkout or electronics aisle.',
    },
    {
      name: 'Local shops in Manzini',
      type: 'electronics',
      city: 'Manzini',
      priceRange: '$3–10',
      note: 'Small electronics shops in Manzini\'s commercial district stock adapters.',
    },
  ],
  airportName: 'King Mswati III International Airport',
  airportCode: 'SHO',
  neighbors: [
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
      plugTypes: ['C', 'D', 'M', 'N'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Same Type M system. One adapter covers both countries.',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'M'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Mozambique uses a mix including Type M, so your adapter may work in some outlets.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Most visitors fly into Johannesburg and drive to Eswatini. Hotels and lodges use standard South African Type M outlets. Many visitors arrive already equipped with the right adapter from their South Africa trip.',
  faqs: [
    {
      question: 'What plug type does Eswatini use?',
      answer:
        'Eswatini uses Type M plugs — the same large three-round-pin design used in South Africa. If you already have a South African adapter, it works perfectly in Eswatini.',
    },
    {
      question: 'Can I use the same adapter for South Africa and Eswatini?',
      answer:
        'Yes. The electrical system is identical. One Type M adapter covers both countries without any issues.',
    },
    {
      question: 'Is the voltage in Eswatini safe for my electronics?',
      answer:
        'Eswatini uses 230V at 50Hz. Most modern chargers for phones, laptops, and cameras are dual-voltage (100–240V). Check the label on your charger. If it only says 110V or 120V, you will need a voltage converter.',
    },
  ],
  metaTitle: 'Eswatini Power Plugs — Type M Outlets, 230V, Adapter Guide',
  metaDescription:
    'Eswatini uses South African Type M plugs at 230V/50Hz. Learn if you need an adapter, where to buy one in Mbabane, and what to expect from the power system.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'South Africa', slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa' },
    { name: 'Mozambique', slug: 'mozambique-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Lesotho', slug: 'lesotho-electric-plug-types-which-adapter-do-you-need-for-lesotho' },
  ],
};

export default data;
