import type { CountryPlugData } from '@/types';

const namibia: CountryPlugData = {
  slug: 'namibia-electric-plug-types-which-adapter-will-you-need',
  name: 'Namibia',
  demonym: 'Namibian',
  continent: 'Africa',
  region: 'Southern Africa',
  voltage: 220,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-d',
      name: 'Type D',
      subtitle: 'Old British (India)',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 5.08,
      pinSpacing: 19.1,
      ratedAmps: 5,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.3,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.48,
      recessRadius: 1.0,
      faceplateSize: 2.8,
    },
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
    'Namibia uses South African-style Type D and large Type M plugs. Safari lodges in Etosha and Sossusvlei generally have full power, but some remote desert camps in the Skeleton Coast and NamibRand Nature Reserve operate on solar power only with limited charging opportunities.',
  ],
  travelContext:
    'Namibia is a stunning desert destination known for the towering dunes of Sossusvlei, wildlife in Etosha National Park, the haunting Skeleton Coast, and Windhoek\'s German colonial architecture. Self-drive safaris are popular, meaning travelers move between diverse accommodations — from well-powered city hotels to completely off-grid desert camps. A South African-style adapter is essential.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are completely incompatible with Namibian round-pin sockets. You need an adapter specifically for Type D or M outlets.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit Namibian outlets. You need an adapter for the South African-style sockets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs are too small for Namibian Type D and M sockets. An adapter is required.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. An adapter for South African-style outlets is required.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'HiFi Corp Namibia',
      type: 'electronics',
      city: 'Windhoek',
      priceRange: 'N$50–150',
      note: 'South African electronics chain with a branch in Windhoek. Good selection of adapters.',
    },
    {
      name: 'Game',
      type: 'electronics',
      city: 'Windhoek',
      priceRange: 'N$40–120',
      note: 'Department store at Maerua Mall. Carries South African-compatible adapters.',
    },
    {
      name: 'Checkers/Shoprite',
      type: 'supermarket',
      city: 'Windhoek',
      priceRange: 'N$30–100',
      note: 'Major supermarket chain with locations across Namibia. May carry basic adapters.',
    },
  ],
  airportName: 'Hosea Kutako International Airport',
  airportCode: 'WDH',
  neighbors: [
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
      plugTypes: ['C', 'D', 'M', 'N'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote:
        'South Africa shares Type D and M with Namibia. The same South African adapter works in both countries.',
    },
    {
      name: 'Botswana',
      slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Botswana shares Type D with Namibia but also uses British Type G. You may need an additional adapter for Type G outlets.',
    },
    {
      name: 'Angola',
      slug: 'angola-electric-plug-types-adapter',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote:
        'Angola uses European Type C, which is different from Namibia\'s South African-style plugs. A separate adapter is needed.',
    },
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
      plugTypes: ['C', 'D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Zambia shares Type D but also uses Type C and G. A universal adapter is best for both.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Windhoek hotels and established safari lodges in Etosha usually have adapters available. Many lodges provide South African-style multi-plug extensions. Remote desert camps at Sossusvlei and the Skeleton Coast may be solar-only with limited outlets — charge all devices fully when power is available.',
  faqs: [
    {
      question: 'What adapter do I need for Namibia?',
      answer:
        'Namibia uses South African-style Type D and Type M plugs. Type M has three large round pins in a triangular pattern. Look for adapters specifically marketed for South Africa — they work throughout Namibia.',
    },
    {
      question: 'Will my adapter from South Africa work in Namibia?',
      answer:
        'Yes. Namibia and South Africa share the same Type D and M socket standards. If you already have a South African adapter, it will work throughout Namibia.',
    },
    {
      question: 'Do desert camps in Namibia have electricity?',
      answer:
        'It varies. Luxury lodges near Sossusvlei (like &Beyond Sossusvlei Desert Lodge) have full 24-hour power. Mid-range camps may run generators during set hours. Some wilderness campsites and mobile safari camps have no electricity at all. Always bring a portable battery pack for desert itineraries.',
    },
  ],
  metaTitle:
    'Namibia Power Plugs & Adapters: Types D & M – Safari Travel Guide',
  metaDescription:
    'Namibia uses South African-style Type D and M plugs at 220V/50Hz. Learn which adapter to bring for Windhoek, Etosha, and Sossusvlei desert camps.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'South Africa',
      slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
    },
    {
      name: 'Botswana',
      slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
    },
    {
      name: 'Zambia',
      slug: 'zambia-electric-plug-types-which-adapter-do-you-need-in-zambia',
    },
  ],
};

export default namibia;
