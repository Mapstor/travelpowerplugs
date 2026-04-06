import type { CountryPlugData } from '@/types';

const kazakhstan: CountryPlugData = {
  slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
  name: 'Kazakhstan',
  demonym: 'Kazakh',
  continent: 'Asia',
  region: 'Central Asia',
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
    'Astana and Almaty have modern, reliable electrical infrastructure with standard European-style outlets. Older Soviet-era buildings may have slightly different socket housings, but standard Type C and F plugs fit.',
    'Steppe and mountain areas outside major cities can have limited or unreliable power access, particularly in yurt camps and remote homestays.',
  ],
  travelContext:
    'Kazakhstan is Central Asia\'s largest and most developed country, with the futuristic capital Astana (formerly Nur-Sultan), the cultural hub of Almaty, Silk Road heritage, and dramatic natural landscapes from the Charyn Canyon to the Altai Mountains. Major cities have excellent infrastructure comparable to European standards. Venturing into the steppe or mountainous regions means preparing for more basic electrical situations.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Kazakh round-pin sockets. An adapter is required. Modern US electronics handle 220V without a converter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs are incompatible with Kazakh outlets. Bring an adapter for Type C or F sockets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work directly in Kazakh outlets. No adapter needed.',
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
      name: 'Sulpak',
      type: 'electronics',
      city: 'Almaty',
      priceRange: '1,500–5,000 KZT',
      note: 'Kazakhstan\'s largest electronics retailer with stores in every major city. Reliable source for adapters and power accessories.',
    },
    {
      name: 'Technodom',
      type: 'electronics',
      city: 'Astana',
      priceRange: '1,200–4,000 KZT',
      note: 'Major electronics chain with locations across Kazakhstan.',
    },
    {
      name: 'Mechta',
      type: 'electronics',
      city: 'Almaty',
      priceRange: '1,000–3,500 KZT',
      note: 'Electronics and appliance retailer with multiple branches.',
    },
    {
      name: 'Magnum Supermarkets',
      type: 'supermarket',
      city: 'Almaty',
      priceRange: '800–2,500 KZT',
      note: 'Kazakhstan\'s largest supermarket chain. Household electronics section may carry basic adapters.',
    },
  ],
  airportName: 'Almaty International Airport',
  airportCode: 'ALA',
  neighbors: [
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Russia uses the same Type C and F plugs at the same voltage. No adapter change needed.',
    },
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote:
        'China uses Type A and I alongside Type C. Your European plug may work in some Chinese outlets, but a China-specific adapter is advisable.',
    },
    {
      name: 'Kyrgyzstan',
      slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Kyrgyzstan uses the same plugs and voltage. No adapter change needed between the two countries.',
    },
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Uzbekistan uses identical plug types and voltage. Seamless for multi-country Central Asia trips.',
    },
    {
      name: 'Turkmenistan',
      slug: 'turkmenistan-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same plugs and voltage as Kazakhstan.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'International hotels in Astana and Almaty (Ritz-Carlton, Hilton, Marriott) are fully equipped with modern outlets and often provide adapters. Business hotels in these cities have reliable power and USB ports. Guesthouses and yurt camps in rural or mountain areas may have limited outlets — a portable power bank is wise for any trip beyond the major cities.',
  faqs: [
    {
      question: 'Do I need an adapter for Kazakhstan if I am traveling from Europe?',
      answer:
        'No. Kazakhstan uses standard European Type C and Type F sockets at 220V/50Hz. European plugs work directly without any adapter.',
    },
    {
      question: 'Will the same adapter work across all Central Asian countries?',
      answer:
        'Yes. Kazakhstan, Kyrgyzstan, Uzbekistan, Tajikistan, and Turkmenistan all use Type C and F plugs at 220V. A single adapter covers the entire region, making multi-country Silk Road itineraries straightforward.',
    },
    {
      question: 'Do older Soviet-era buildings in Kazakhstan have different outlets?',
      answer:
        'Some older buildings have recessed Soviet-era socket housings that look slightly different, but they accept standard Type C and F plugs. The pin spacing and diameter are the same. You may occasionally find that a bulky Schuko plug sits less snugly in an older recessed socket, but it will still work.',
    },
    {
      question: 'Is there electricity in Kazakh steppe yurt camps?',
      answer:
        'Tourist yurt camps near popular destinations like Kolsai Lakes or Charyn Canyon usually have some form of power — often generator or solar. Authentic nomadic yurt experiences on the open steppe may have no electricity at all. Confirm with your tour operator and bring a power bank.',
    },
  ],
  metaTitle:
    'Kazakhstan Power Plugs & Adapters: Types C & F – Central Asia Travel Guide',
  metaDescription:
    'Kazakhstan uses standard European Type C and F plugs at 220V/50Hz. Learn what adapter you need, where to buy one in Almaty or Astana, and tips for steppe travel.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
    },
    {
      name: 'Kyrgyzstan',
      slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
    },
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
    },
  ],
};

export default kazakhstan;
