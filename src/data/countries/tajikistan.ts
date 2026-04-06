import type { CountryPlugData } from '@/types';

const tajikistan: CountryPlugData = {
  slug: 'tajikistan-electric-plug-types-which-adapter-will-you-need-in-tajikistan',
  name: 'Tajikistan',
  demonym: 'Tajik',
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
    'Power supply along the Pamir Highway is unreliable — homestays in remote villages like Murghab, Alichur, and Bulunkul may only have electricity in the evening hours, if at all. Dushanbe city power is reasonably stable.',
  ],
  travelContext:
    'Tajikistan is defined by the Pamir Mountains — the "Roof of the World." The legendary Pamir Highway is one of the world\'s great road trips, passing through some of the most remote and dramatic landscapes in Central Asia. Dushanbe is a small but functional capital. The Fann Mountains offer stunning trekking. For Pamir travelers, electricity is a genuine logistical consideration, not a given.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with Tajik round-pin outlets. An adapter is required.',
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
        'European plugs work directly. No adapter needed.',
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
      name: 'Local Bazaar Electronics Stalls',
      type: 'electronics',
      city: 'Dushanbe',
      priceRange: '20–60 TJS',
      note: 'Small electronics stalls in Dushanbe\'s bazaars sell adapters, power strips, and cables. Quality varies — inspect before buying.',
    },
    {
      name: 'Auchan',
      type: 'supermarket',
      city: 'Dushanbe',
      priceRange: '25–70 TJS',
      note: 'Hypermarket in Dushanbe with a household electronics section.',
    },
    {
      name: 'Dushanbe City Mall',
      type: 'electronics',
      city: 'Dushanbe',
      priceRange: '30–80 TJS',
      note: 'Shopping mall with electronics shops that may stock adapters.',
    },
  ],
  airportName: 'Dushanbe International Airport',
  airportCode: 'DYU',
  neighbors: [
    {
      name: 'Kyrgyzstan',
      slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Kyrgyzstan uses the same plugs and voltage. Seamless for overland crossings.',
    },
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same system. One adapter for the entire Central Asia trip.',
    },
    {
      name: 'Afghanistan',
      slug: 'afghanistan-electric-plug-types',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote:
        'Same plug types, though infrastructure differs enormously.',
    },
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote:
        'China uses different plug types alongside Type C. A China-specific adapter may be needed if crossing into Xinjiang.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Dushanbe\'s hotels have standard European outlets and mostly reliable power. Along the Pamir Highway, accommodation is primarily in homestays — families who open their homes to travelers. These homestays may have electricity only from a small hydroelectric or solar source that operates in the evening. Charging windows can be as short as a few hours. A high-capacity power bank and a car charger (for Pamir Highway road trips) are essential gear.',
  faqs: [
    {
      question: 'Will I be able to charge my devices on the Pamir Highway?',
      answer:
        'Power along the Pamir Highway is unreliable. Homestays in towns like Khorog have more consistent electricity, but remote villages like Murghab and Alichur may only have power for a few evening hours. Some homestays have no electricity at all. Bring a high-capacity power bank and a 12V car charger for use in your vehicle.',
    },
    {
      question: 'What plug type does Tajikistan use?',
      answer:
        'Tajikistan uses European Type C and Type F sockets at 220V/50Hz. The same plug type is used across all of Central Asia.',
    },
    {
      question: 'Is the power reliable in Dushanbe?',
      answer:
        'Dushanbe has reasonably stable electricity, though brief outages can occur, especially in winter when demand peaks and hydroelectric capacity may be reduced. Hotels typically have backup power or manage outages without major disruption.',
    },
  ],
  metaTitle:
    'Tajikistan Power Plugs & Adapters: Types C & F – Pamir Highway Travel Guide',
  metaDescription:
    'Tajikistan uses European-style Type C and F plugs at 220V/50Hz. Learn what to expect on the Pamir Highway, why a power bank is essential, and where to find adapters.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Kyrgyzstan',
      slug: 'kyrgyzstan-electric-plug-type-will-you-need-an-adapter',
    },
    {
      name: 'Uzbekistan',
      slug: 'uzbekistan-electric-plug-types-which-adapter-for-uzbekistan',
    },
    {
      name: 'Afghanistan',
      slug: 'afghanistan-electric-plug-types',
    },
  ],
};

export default tajikistan;
