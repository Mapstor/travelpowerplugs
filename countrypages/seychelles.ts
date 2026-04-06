import type { CountryPlugData } from '../types';

const seychelles: CountryPlugData = {
  slug: 'seychelles-electric-plug-types-which-adapter-will-you-need-with-you',
  name: 'Seychelles',
  demonym: 'Seychellois',
  continent: 'Africa',
  region: 'Indian Ocean',
  voltage: 240,
  frequency: 50,
  complexityTier: 'simple',
  plugTypes: [
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
  ],
  quirks: [
    'Luxury resorts in Seychelles typically provide adapters for guests. Smaller guesthouses and self-catering apartments on Mahé, Praslin, and La Digue may not. Power is reliable across all three main islands.',
  ],
  travelContext:
    'The Seychelles is an archipelago of 115 islands in the Indian Ocean, renowned for pristine beaches, granite boulder formations, and rare wildlife like the Aldabra giant tortoise. Tourism ranges from ultra-luxury private island resorts to charming local guesthouses. The three main islands — Mahé, Praslin, and La Digue — have reliable electricity. Outer islands may depend on generators.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs are incompatible with British Type G sockets used in Seychelles. An adapter is required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Seychelles uses the same Type G outlets as the UK. No adapter needed. Voltage is identical at 240V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Type G sockets. Bring an adapter. Many resort rooms provide one, but do not count on it.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian flat-pin plugs are incompatible. An adapter is needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'STC Hypermarket',
      type: 'supermarket',
      city: 'Victoria, Mahé',
      priceRange: 'SCR 100–300',
      note: 'The largest supermarket in Seychelles, located in Victoria. May carry basic adapters in the household section.',
    },
    {
      name: 'Cable & Wireless Shops',
      type: 'electronics',
      city: 'Mahé',
      priceRange: 'SCR 150–400',
      note: 'Telecom retail shops that sometimes stock phone accessories including adapters.',
    },
    {
      name: 'Resort Gift Shops',
      type: 'hotel',
      priceRange: 'SCR 200–500',
      note: 'Luxury resorts often sell adapters at their gift shops, though at a premium. Some provide them complimentary.',
    },
  ],
  airportName: 'Seychelles International Airport',
  airportCode: 'SEZ',
  neighbors: [
    {
      name: 'Madagascar',
      slug: 'madagascar-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote:
        'Madagascar uses French-style plugs — completely different from Seychelles\' British Type G. A separate adapter is needed.',
    },
    {
      name: 'Maldives',
      slug: 'maldives-electric-plug-types-will-you-need-an-adapter-for-maldives',
      plugTypes: ['C', 'D', 'G', 'K'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote:
        'The Maldives has no single standard but Type G is common. Your Seychelles adapter may work in many Maldivian resorts.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Five-star resorts like Four Seasons, Six Senses, and Raffles typically provide adapters in each room or at reception. Mid-range hotels on Mahé and Praslin usually have them on request. Budget guesthouses and self-catering chalets on La Digue are the least likely to provide one — bring your own to be safe.',
  faqs: [
    {
      question: 'Do Seychelles resorts provide power adapters?',
      answer:
        'Most luxury and upper-mid-range resorts in Seychelles provide adapters, either in the room or available from reception. However, smaller guesthouses and self-catering apartments may not. It is always safest to bring your own.',
    },
    {
      question: 'Is the electricity reliable in Seychelles?',
      answer:
        'Power is reliable on the three main islands — Mahé, Praslin, and La Digue. Outages are rare and typically brief. Outer islands with smaller resorts may rely on their own generators, which are generally well-maintained at the luxury tier.',
    },
    {
      question: 'What is the voltage in Seychelles?',
      answer:
        'Seychelles operates at 240V/50Hz, the same as the UK. All modern phone chargers, laptop adapters, and camera batteries are dual-voltage (100–240V) and work without a converter. Check older appliances before plugging them in.',
    },
  ],
  metaTitle:
    'Seychelles Power Plugs & Adapters: Type G – Island Travel Guide',
  metaDescription:
    'Seychelles uses British Type G plugs at 240V/50Hz. Find out if your resort provides adapters, where to buy one on Mahé, and what to expect across the islands.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'United Kingdom',
      slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk',
    },
    {
      name: 'Maldives',
      slug: 'maldives-electric-plug-types-will-you-need-an-adapter-for-maldives',
    },
    {
      name: 'Madagascar',
      slug: 'madagascar-electric-plug-types-will-you-need-an-adapter',
    },
  ],
};

export default seychelles;
