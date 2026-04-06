import type { CountryPlugData } from '../types';

const kyrgyzstan: CountryPlugData = {
  slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
  name: 'Kyrgyzstan',
  demonym: 'Kyrgyz',
  continent: 'Asia',
  region: 'Central Asia',
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
  quirks: [
    'Yurt stays (jailoo tourism) near Son-Kul Lake and remote Issyk-Kul pastures may have solar power only or no electricity at all. Bishkek city power is reliable.',
  ],
  travelContext:
    'Kyrgyzstan is Central Asia\'s adventure travel hub — a land of soaring Tien Shan mountains, alpine lakes like Issyk-Kul and Son-Kul, and a thriving community-based tourism network. Bishkek is a modern city with reliable infrastructure. The real draw is the backcountry: horse treks, yurt stays on high-altitude pastures (jailoos), and multi-day hikes. In these settings, electricity is often absent or limited to solar panels, making a power bank essential.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Kyrgyz round-pin sockets. An adapter is required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British plugs do not fit. Bring an adapter for Type C or F outlets.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and F plugs work directly throughout Kyrgyzstan. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs are incompatible. An adapter is needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Globus',
      type: 'electronics',
      city: 'Bishkek',
      priceRange: '200–600 KGS',
      note: 'Electronics retailer in Bishkek with adapters and power accessories.',
    },
    {
      name: 'Beta Stores',
      type: 'supermarket',
      city: 'Bishkek',
      priceRange: '150–500 KGS',
      note: 'Kyrgyz supermarket chain. Larger branches may carry basic adapters.',
    },
    {
      name: 'Frunze Mall Electronics',
      type: 'electronics',
      city: 'Bishkek',
      priceRange: '200–700 KGS',
      note: 'Electronics shops inside Frunze Mall in central Bishkek.',
    },
  ],
  airportName: 'Manas International Airport',
  airportCode: 'FRU',
  neighbors: [
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Kazakhstan uses the same plugs and voltage. No adapter change needed.',
    },
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Uzbekistan uses the same system. One adapter covers both countries.',
    },
    {
      name: 'Tajikistan',
      slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same plug types, though power reliability in Tajikistan\'s Pamir region is much lower.',
    },
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote:
        'China uses Type A and I alongside Type C. A different adapter may be needed for Chinese outlets.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Bishkek hotels have standard European outlets and reliable power. Community-based tourism (CBT) homestays in towns like Karakol, Kochkor, and Arslanbob have grid electricity with basic outlets. Yurt camps at Son-Kul Lake and on jailoos are the wild card — some have small solar panels for phone charging, others have no electricity whatsoever. Always charge fully before heading to the high pastures.',
  faqs: [
    {
      question: 'Will there be electricity at yurt stays in Kyrgyzstan?',
      answer:
        'It depends on the camp. Tourist-oriented yurt camps near Son-Kul and Issyk-Kul may have a communal solar panel for basic phone charging. Authentic nomadic yurts on remote jailoos typically have no electricity at all. A high-capacity portable battery pack is essential for any yurt-based itinerary.',
    },
    {
      question: 'What adapter do I need for Kyrgyzstan?',
      answer:
        'Kyrgyzstan uses European Type C and Type F plugs at 220V/50Hz. If you are coming from the US, UK, or Australia, you need an adapter with round pins. European travelers do not need any adapter.',
    },
    {
      question: 'Can I use the same adapter across all Central Asian countries?',
      answer:
        'Yes. Kyrgyzstan, Kazakhstan, Uzbekistan, Tajikistan, and Turkmenistan all use Type C and F at 220V. A single adapter covers the full Central Asia circuit.',
    },
  ],
  metaTitle:
    'Kyrgyzstan Power Plugs & Adapters: Types C & F – Adventure Travel Guide',
  metaDescription:
    'Kyrgyzstan uses European-style Type C and F plugs at 220V/50Hz. Learn what adapter you need, what to expect at yurt camps, and why a power bank is essential.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Kazakhstan',
      slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes',
    },
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
    },
    {
      name: 'Tajikistan',
      slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan',
    },
  ],
};

export default kyrgyzstan;
