import type { CountryPlugData } from '@/types';

const albania: CountryPlugData = {
  slug: 'albanian-plug-types',
  name: 'Albania',
  demonym: 'Albanian',
  continent: 'Europe',
  region: 'Balkans',
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
    'Power outages were common historically in Albania but have improved significantly in recent years. The Albanian Riviera is increasingly popular — beachfront accommodations along the coast from Sarandë to Vlorë have reliable power. Bring a power bank for long bus journeys.',
  ],
  travelContext:
    'Albania has become one of Europe\'s hottest emerging destinations, with the Albanian Riviera, Tirana\'s vibrant culture, and UNESCO sites like Berat and Gjirokastër drawing adventurous travelers. The plug system is standard European, identical to neighboring Montenegro, Kosovo, and North Macedonia.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Albanian round-pin outlets. Bring an adapter. Modern electronics handle 230V automatically.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs need an adapter. Voltage matches at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work everywhere in Albania. No adapter needed for continental European travelers.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs require an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Neptune',
      type: 'electronics',
      city: 'Tirana',
      priceRange: '€3–€10',
      note: 'Electronics retailer in Tirana with stores in major shopping centers.',
    },
    {
      name: 'Neptun',
      type: 'electronics',
      city: 'Tirana',
      priceRange: '€3–€10',
      note: 'Another electronics chain in Albanian cities stocking adapters and accessories.',
    },
    {
      name: 'Spar Albania',
      type: 'supermarket',
      city: 'Tirana',
      priceRange: '€2–€6',
      note: 'Supermarket chain with locations in Tirana and other cities; some carry basic adapters.',
    },
  ],
  airportName: 'Tirana International Airport',
  airportCode: 'TIA',
  neighbors: [
    {
      name: 'Montenegro',
      slug: 'montenegro-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Kosovo',
      slug: 'kosovo-electric-plug-types-will-you-need-an-adapter-in-pristina',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'North Macedonia',
      slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
    {
      name: 'Greece',
      slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Tirana\'s modern hotels and international chains are well-equipped with standard European outlets. Along the Albanian Riviera, beachfront hotels and guesthouses vary in quality — power is now reliable, but USB ports are uncommon. Bring your own adapter and a power bank for bus travel between coastal towns.',
  faqs: [
    {
      question: 'Are power outages still a problem in Albania?',
      answer:
        'Albania has significantly improved its power infrastructure in recent years. In Tirana and major tourist areas like the Albanian Riviera, outages are now infrequent. Carrying a power bank is still a good idea for long bus rides through the countryside.',
    },
    {
      question: 'I\'m traveling from Greece to Albania — do I need a different adapter?',
      answer:
        'No. Greece and Albania both use Types C and F at 230V/50Hz. Your charger and adapter work in both countries.',
    },
    {
      question: 'Can I find adapters along the Albanian Riviera?',
      answer:
        'Small shops in Sarandë and Vlorë may stock basic adapters, but selection is limited in beach towns. It is much easier to buy one in Tirana before heading south, or bring one from home.',
    },
    {
      question: 'Is one adapter enough for a trip through the Western Balkans?',
      answer:
        'Yes. Albania, Montenegro, Kosovo, North Macedonia, Serbia, Croatia, and Bosnia all use Types C and F at 230V/50Hz. A single adapter covers the entire region.',
    },
    {
      question: 'Should I bring a power bank to Albania?',
      answer:
        'It is a good idea, especially if you plan to take long-distance buses between cities. Albanian intercity buses do not always have charging outlets. A power bank keeps your phone topped up for maps and translation apps.',
    },
  ],
  metaTitle: 'Albania Power Plugs — Types C & F | Do You Need an Adapter?',
  metaDescription:
    'Albania uses Type C and Type F plugs at 230V/50Hz. US and UK travelers need an adapter. Power has improved — here\'s what to know for the Albanian Riviera.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Montenegro', slug: 'montenegro-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Greece', slug: 'greece-electric-plug-types-will-you-need-an-adapter-in-greece' },
    { name: 'Kosovo', slug: 'kosovo-electric-plug-types-will-you-need-an-adapter-in-pristina' },
    { name: 'North Macedonia', slug: 'north-macedonia-electric-plug-types-will-you-need-an-adapter' },
  ],
};

export default albania;
