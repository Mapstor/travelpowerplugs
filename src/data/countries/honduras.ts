import { CountryPlugData } from '@/types';

const honduras: CountryPlugData = {
  slug: 'honduras-electric-plug-types-do-you-need-an-adapter-in-honduras',
  name: 'Honduras',
  demonym: 'Honduran',
  continent: 'North America',
  region: 'Central America',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  travelContext:
    'Honduras is best known for the Bay Islands (Roatán, Utila, Guanaja) — a top Caribbean diving destination — and the Mayan ruins of Copán. San Pedro Sula is the main commercial hub while Tegucigalpa is the capital. The Bay Islands and Copán have decent tourist infrastructure. Mainland infrastructure is less consistent outside major cities.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Identical to the US — Type A/B at 120V/60Hz. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. UK electronics are dual-voltage and handle 120V.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs don\'t fit Honduran outlets. You need an adapter and should confirm your devices support 120V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. Adapter needed, and check that your 230V devices handle 120V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Diunsa',
      type: 'electronics',
      city: 'San Pedro Sula',
      priceRange: '$4–$12 USD',
      note: 'Honduras\' largest department store chain with electronics sections.',
    },
    {
      name: 'Jetstereo',
      type: 'electronics',
      priceRange: '$5–$15 USD',
      note: 'Electronics retailer with locations in major Honduran cities.',
    },
    {
      name: 'La Curacao',
      type: 'electronics',
      priceRange: '$5–$15 USD',
      note: 'Central American electronics chain with stores across Honduras.',
    },
  ],
  airportName: 'San Pedro Sula Ramón Villeda Morales International Airport',
  airportCode: 'SAP',
  neighbors: [
    {
      name: 'Guatemala',
      slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Identical system. No adapter needed when crossing the border.',
    },
    {
      name: 'El Salvador',
      slug: 'el-salvador-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Same plugs and voltage. Fully compatible.',
    },
    {
      name: 'Nicaragua',
      slug: 'nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua',
      plugTypes: ['A', 'B'],
      voltage: 120,
      sameAsSubject: 'identical',
      adapterNote: 'Identical electrical system.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Dive resorts on Roatán and Utila have reliable power with US-style outlets — many cater to American divers. Hotels near the Copán ruins are well-equipped for tourists. In Tegucigalpa and San Pedro Sula, mid-range and upscale hotels are fine. Budget options on the mainland may have fewer outlets and occasional power interruptions.',
  faqs: [
    {
      question: 'Do I need an adapter for Honduras from the US?',
      answer:
        'No. Honduras uses the same Type A/B plugs and 120V/60Hz power as the United States. Your devices work without any adapter.',
    },
    {
      question: 'Is the power reliable on Roatán?',
      answer:
        'Roatán has generally reliable power, especially in the West End and West Bay tourist areas. Dive resorts have backup generators. Utila is smaller and may have occasional outages, though guesthouses generally manage well.',
    },
    {
      question: 'What about charging devices near Copán?',
      answer:
        'The town of Copán Ruinas has reliable power with standard outlets in hotels and restaurants. The ruins themselves don\'t have charging facilities, so charge up the night before your visit.',
    },
    {
      question: 'Do European divers need a special adapter for Roatán?',
      answer:
        'Yes — you\'ll need a round-to-flat pin adapter, and you should confirm your devices handle 120V. Dive computer chargers and camera battery chargers are almost always dual-voltage. Your dive light charger may vary, so check the label.',
    },
  ],
  metaTitle:
    'Honduras Plug Types & Adapter Guide — Type A/B, 120V, Roatán & Copán Tips',
  metaDescription:
    'Honduras uses Type A and B plugs at 120V/60Hz — identical to the US. Learn about power on Roatán, at Copán, and where to buy adapters in San Pedro Sula.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Guatemala', slug: 'guatemala-electric-plug-types-will-you-need-an-adapter-in-guatemala-city' },
    { name: 'El Salvador', slug: 'el-salvador-electric-plug-type-will-you-need-an-adapter' },
    { name: 'Nicaragua', slug: 'nicaragua-electric-plug-types-will-you-need-an-adapter-in-nicaragua' },
    { name: 'Costa Rica', slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Belize', slug: 'belize-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default honduras;
