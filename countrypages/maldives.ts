import type { CountryPlugData } from '../types';

const maldives: CountryPlugData = {
  slug: 'maldives-electric-plug-types-will-you-need-an-adapter-for-maldives',
  name: 'Maldives',
  demonym: 'Maldivian',
  continent: 'Asia',
  region: 'Indian Ocean',
  voltage: 230,
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
      id: 'type-g',
      name: 'Type G',
      subtitle: 'British',
      pins: 3,
      pinShape: 'rectangular',
      pinDiameter: 6.35,
      pinSpacing: 22.2,
      ratedAmps: 13,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.08,
      bodyWidth: 1.6,
      bodyHeight: 1.2,
      bodyCornerRadius: 0.2,
      noseRadius: 0.55,
      recessRadius: 1.15,
      faceplateSize: 3.1,
    },
    {
      id: 'type-k',
      name: 'Type K',
      subtitle: 'Danish',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.8,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
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
    'The Maldives has no single enforced plug standard — you may encounter British Type G, European Type C, Indian Type D, and Danish Type K across different resorts and local islands.',
    'Luxury resorts almost universally provide universal outlets or adapters at reception. Local islands like Maafushi and Thulusdhoo predominantly use Type G. A universal adapter is strongly recommended.',
  ],
  travelContext:
    'The Maldives consists of over 1,000 coral islands grouped into 26 atolls. Tourism is split between luxury private island resorts and budget-friendly local island guesthouses. Each resort essentially builds its own electrical infrastructure, which means plug types can vary from property to property. Malé, the capital, uses mainly Type G. The unpredictability of outlet types makes a universal adapter the single most reliable solution.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs are incompatible with all Maldivian socket types. A universal adapter is essential given the variety of outlets you may encounter.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'While many Maldivian outlets are Type G, some resorts use European or Indian-style sockets. Bring a universal adapter to be safe, though your UK plug may work in many locations.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European Type C plugs work in some Maldivian outlets but not in Type G or Type D sockets, which are also common. A universal adapter is the safest choice.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs do not fit standard Maldivian sockets. A universal adapter is needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'STO Supermarket',
      type: 'supermarket',
      city: 'Malé',
      priceRange: 'MVR 50–200',
      note: 'State Trading Organization supermarket in Malé. Limited adapter selection, but it\'s the most likely retail option.',
    },
    {
      name: 'Resort Receptions',
      type: 'hotel',
      priceRange: 'Free–$20 USD',
      note: 'Most luxury resorts provide adapters at reception, often complimentary. Ask upon check-in.',
    },
  ],
  airportName: 'Velana International Airport',
  airportCode: 'MLE',
  neighbors: [
    {
      name: 'Sri Lanka',
      slug: 'sri-lanka-electric-plug-types-will-you-need-an-adapter-in-sri-lanka',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'Sri Lanka shares Type D and G with the Maldives. Your universal adapter should cover both destinations.',
    },
    {
      name: 'India',
      slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india',
      plugTypes: ['C', 'D', 'M'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'India shares Type C and D with the Maldives. A universal adapter is the best choice for both countries.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Luxury resorts (Soneva, One&Only, Waldorf Astoria, etc.) invariably have universal outlets or multi-standard sockets built into rooms, or adapters at reception. Budget guesthouses on local islands like Maafushi are less consistent — most use British Type G, but bring your own adapter. Liveaboard dive boats typically provide a communal charging station with multiple socket types.',
  faqs: [
    {
      question: 'Why does the Maldives have so many different plug types?',
      answer:
        'The Maldives has no single enforced electrical standard. Each resort island builds its own infrastructure, and different developers have adopted different systems over the decades — British, European, Indian, and even Danish. Luxury resorts have largely standardized on universal or multi-standard outlets to solve this for guests.',
    },
    {
      question: 'Will my resort provide an adapter?',
      answer:
        'Most four- and five-star resorts in the Maldives provide adapters at reception or have universal outlets in rooms. Budget guesthouses on local islands are less likely to have them. Always bring a universal adapter as backup.',
    },
    {
      question: 'What plug type is used on local islands like Maafushi?',
      answer:
        'Local islands in the Maldives predominantly use British Type G sockets. Guesthouses on Maafushi, Thulusdhoo, and Dhigurah generally have Type G, though you may occasionally encounter other types.',
    },
    {
      question: 'Do I need a voltage converter for the Maldives?',
      answer:
        'The Maldives runs at 230V/50Hz. All modern phone chargers, laptop adapters, and camera battery chargers are dual-voltage (100–240V) and do not need a converter. Only older single-voltage appliances from the US or Japan would require one.',
    },
    {
      question: 'Can I charge devices on a Maldives liveaboard dive boat?',
      answer:
        'Most liveaboard boats in the Maldives have a communal charging area with multiple socket types and USB ports. Higher-end liveaboards may have outlets in cabins. Ask your operator before booking to confirm.',
    },
  ],
  metaTitle:
    'Maldives Power Plugs & Adapters: Types C, D, G & K – Resort Travel Guide',
  metaDescription:
    'The Maldives has no single plug standard — you may find Types C, D, G, or K across resorts and local islands. Find out why a universal adapter is essential.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Sri Lanka',
      slug: 'sri-lanka-electric-plug-types-will-you-need-an-adapter-in-sri-lanka',
    },
    {
      name: 'India',
      slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india',
    },
    {
      name: 'Seychelles',
      slug: 'seychelles-electric-plug-types-which-adapter-will-you-need-with-you',
    },
  ],
};

export default maldives;
