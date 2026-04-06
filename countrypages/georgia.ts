import type { CountryPlugData } from '../types';

const georgia: CountryPlugData = {
  slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi',
  name: 'Georgia',
  demonym: 'Georgian',
  continent: 'Asia',
  region: 'Caucasus',
  voltage: 220,
  frequency: 50,
  complexityTier: 'moderate',
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
    'Tbilisi\'s old town guesthouses may have older Soviet-era outlets, but standard European plugs work. Georgian wine country and Svaneti mountain lodges have reliable power.',
    'Georgia is a very popular and affordable travel destination with excellent tourist infrastructure — adapters are easy to find locally if needed.',
  ],
  travelContext:
    'Georgia has become one of the world\'s hottest travel destinations, beloved for Tbilisi\'s atmospheric old town, the wine region of Kakheti, mountain scenery in Svaneti and Kazbegi, and the Black Sea coast at Batumi. Despite its affordability, the country has invested heavily in tourist infrastructure. Power is reliable throughout the country, even in remote mountain villages, though wiring quality in historic buildings can be dated.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Georgian round-pin sockets. An adapter is essential. Modern US electronics handle 220V.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs do not fit Georgian outlets. Bring an adapter for Type C or F sockets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work directly throughout Georgia. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. An adapter is required.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Zoommer',
      type: 'electronics',
      city: 'Tbilisi',
      priceRange: '8–25 GEL',
      note: 'Georgia\'s leading electronics retailer with stores across the country. Excellent for adapters and power accessories.',
    },
    {
      name: 'Technomart',
      type: 'electronics',
      city: 'Tbilisi',
      priceRange: '6–20 GEL',
      note: 'Electronics chain with competitive prices on travel accessories.',
    },
    {
      name: 'Carrefour Georgia',
      type: 'supermarket',
      city: 'Tbilisi',
      priceRange: '5–15 GEL',
      note: 'Hypermarket with electronics section. Multiple locations in Tbilisi.',
    },
  ],
  airportName: 'Shota Rustaveli Tbilisi International Airport',
  airportCode: 'TBS',
  neighbors: [
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Turkey uses the same plugs and voltage. No adapter change needed for cross-border travel.',
    },
    {
      name: 'Armenia',
      slug: 'armenia-electric-socket-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote:
        'Armenia uses the same plug types. Voltage is marginally different (230V vs 220V) but this is negligible.',
    },
    {
      name: 'Azerbaijan',
      slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Azerbaijan uses the same system. One adapter covers the entire Caucasus region.',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Russia uses the same Type C and F plugs.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'International hotels in Tbilisi and Batumi have modern outlets and often provide adapters. Guesthouses in the old town and in wine country typically have European-style outlets throughout. Mountain lodges in Svaneti and Kazbegi have reliable power, though some family-run guesthouses may have limited outlet availability in rooms.',
  faqs: [
    {
      question: 'Do I need an adapter for Georgia if I am traveling from Europe?',
      answer:
        'No. Georgia uses standard European Type C and Type F sockets. If you are coming from anywhere in continental Europe, your plugs will work directly.',
    },
    {
      question: 'Will my adapter work across all three Caucasus countries?',
      answer:
        'Yes. Georgia, Armenia, and Azerbaijan all use Type C and F plugs at 220–230V. A single adapter covers all three countries, making a Caucasus multi-country trip electrically straightforward.',
    },
    {
      question: 'Are Soviet-era outlets in Tbilisi\'s old town a problem?',
      answer:
        'Some older buildings in Tbilisi still have recessed Soviet-era socket housings. They look different from modern European outlets but accept the same Type C and F plugs. You may find that a large Schuko plug sits slightly loose in a worn Soviet socket, but it will work. Many guesthouses have been renovated with modern outlets.',
    },
    {
      question: 'Is there reliable electricity in the Svaneti mountains?',
      answer:
        'Yes. Even remote villages like Ushguli have grid electricity. Guesthouses in Mestia and the surrounding villages have reliable power. Charging devices is generally not an issue, though a power bank is always a sensible backup for hiking days.',
    },
  ],
  metaTitle:
    'Georgia Power Plugs & Adapters: Types C & F – Caucasus Travel Guide',
  metaDescription:
    'Georgia uses European-style Type C and F plugs at 220V/50Hz. Find out if you need an adapter for Tbilisi, Kakheti wine country, and the Svaneti mountains.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Armenia',
      slug: 'armenia-electric-socket-types-do-you-need-to-pack-an-adapter',
    },
    {
      name: 'Azerbaijan',
      slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter',
    },
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
    },
  ],
};

export default georgia;
