import type { CountryPlugData } from '../types';

const azerbaijan: CountryPlugData = {
  slug: 'azerbaijan-electric-socket-types-will-you-need-an-adapter',
  name: 'Azerbaijan',
  demonym: 'Azerbaijani',
  continent: 'Asia',
  region: 'Caucasus',
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
  travelContext:
    'Azerbaijan blends Silk Road history with oil-boom modernity, most visibly in Baku where the medieval walled city sits alongside the futuristic Flame Towers and Heydar Aliyev Center. Beyond the capital, highlights include the fire temples of Ateshgah, the mountain village of Lahij, and the Caucasus foothills around Sheki. Baku\'s infrastructure is thoroughly modern, while rural areas have functional but older electrical setups.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Azerbaijani round-pin outlets. An adapter is required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs do not fit. Bring an adapter for Type C or F outlets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work directly in Azerbaijani outlets. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs do not fit. An adapter is required.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Kontakt Home',
      type: 'electronics',
      city: 'Baku',
      priceRange: '5–15 AZN',
      note: 'Azerbaijan\'s leading electronics retailer with stores across Baku. Reliable source for adapters.',
    },
    {
      name: 'Baku Electronics',
      type: 'electronics',
      city: 'Baku',
      priceRange: '4–12 AZN',
      note: 'Major electronics chain with multiple locations in the capital.',
    },
    {
      name: 'Bravo Supermarkets',
      type: 'supermarket',
      city: 'Baku',
      priceRange: '3–10 AZN',
      note: 'Premium supermarket chain in Baku. Larger branches may stock basic adapters and household electronics.',
    },
  ],
  airportName: 'Heydar Aliyev International Airport',
  airportCode: 'GYD',
  neighbors: [
    {
      name: 'Georgia',
      slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Georgia uses the same plugs and voltage. No adapter change needed for Caucasus travel.',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Russia uses the same system.',
    },
    {
      name: 'Iran',
      slug: 'iran-electric-plug-types-will-you-need-an-adapter-traveling-to-iran',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Iran uses the same plug types and voltage.',
    },
    {
      name: 'Armenia',
      slug: 'armenia-electric-socket-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote:
        'Armenia uses the same plugs. The minor voltage difference is negligible.',
    },
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Turkey uses identical plug types.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Baku\'s luxury and business hotels (Four Seasons, JW Marriott, Hilton) have modern outlets and may provide adapters on request. Boutique hotels in the old walled city (Icherisheher) have been renovated with standard European outlets. Guesthouses in rural areas like Sheki and Lahij have basic but functional electrical setups with European-style sockets.',
  faqs: [
    {
      question: 'What plug type does Azerbaijan use?',
      answer:
        'Azerbaijan uses European Type C (Europlug) and Type F (Schuko) sockets at 220V/50Hz. These are standard across the former Soviet Union and most of continental Europe.',
    },
    {
      question: 'Do I need a different adapter for Azerbaijan than for Georgia or Armenia?',
      answer:
        'No. All three Caucasus countries use identical Type C and F plug types. One adapter serves the entire region.',
    },
    {
      question: 'Is the power reliable in Baku?',
      answer:
        'Baku has reliable, modern electrical infrastructure thanks to oil-driven investment. Power outages are rare in the capital. Rural areas may experience occasional interruptions, but tourist accommodations generally maintain consistent service.',
    },
  ],
  metaTitle:
    'Azerbaijan Power Plugs & Adapters: Types C & F – Baku Travel Guide',
  metaDescription:
    'Azerbaijan uses European-style Type C and F plugs at 220V/50Hz. Learn if you need an adapter for Baku and the Caucasus, where to buy one, and what to expect.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Georgia',
      slug: 'georgia-electric-plug-types-will-you-need-an-adapter-in-tbilisi',
    },
    {
      name: 'Armenia',
      slug: 'armenia-electric-socket-types-do-you-need-to-pack-an-adapter',
    },
    {
      name: 'Turkey',
      slug: 'turkey-electric-plug-types-will-you-need-an-adapter-for-turkey',
    },
  ],
};

export default azerbaijan;
