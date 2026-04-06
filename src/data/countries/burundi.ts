import { CountryPlugData } from '@/types';

const burundi: CountryPlugData = {
  slug: 'burundi-electric-plug-types-do-you-need-an-adapter',
  name: 'Burundi',
  demonym: 'Burundian',
  continent: 'Africa',
  region: 'East Africa',
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
      id: 'type-e',
      name: 'Type E',
      subtitle: 'French',
      pins: 2,
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
  travelContext:
    'Burundi, one of the smallest and most densely populated countries in Africa, uses the standard European C/E system. Bujumbura, the economic capital on the shores of Lake Tanganyika, has partial grid coverage but outages are common. Electrification rates outside the capital are very low. The country shares Lake Tanganyika with Congo and Tanzania, and is often visited alongside neighboring Rwanda.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US plugs do not fit. A converter is needed for non-dual-voltage devices at 220V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs need an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European plugs fit directly. No adapter or conversion needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs need an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Local shops in Bujumbura',
      type: 'electronics',
      city: 'Bujumbura',
      priceRange: '$2–$8',
      note: 'Very limited selection. Some small shops in the center of Bujumbura may carry basic adapters.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Bujumbura',
      note: 'Hotels serving international visitors and NGO workers may have adapters available on request.',
    },
  ],
  airportName: 'Bujumbura Melchior Ndadaye International Airport',
  airportCode: 'BJM',
  neighbors: [
    {
      name: 'Rwanda',
      slug: 'rwanda-electric-plug-types-will-you-need-to-bring-an-adapter-with-you',
      plugTypes: ['C', 'J'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Rwanda shares Type C. Your European charger works in both countries.',
    },
    {
      name: 'Congo',
      slug: 'congo-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Bujumbura range from basic guesthouses to a handful of mid-range options along the lakefront. Generator backup is available at better hotels but may not cover all hours. Outside Bujumbura, accommodation is very basic with minimal electricity. Bring a portable battery pack and flashlight.',
  faqs: [
    {
      question: 'Can I use my adapter from Rwanda in Burundi?',
      answer:
        'If you have a European Type C adapter, it will work in both Rwanda and Burundi. Rwanda also uses Type J (Swiss), which is not found in Burundi, but the shared Type C ensures compatibility.',
    },
    {
      question: 'How reliable is electricity in Bujumbura?',
      answer:
        'Bujumbura has partial grid coverage but outages are a regular occurrence. The city\'s power supply depends partly on hydroelectric generation, which can be affected by seasonal water levels. Hotels with generators provide the most consistent power.',
    },
    {
      question: 'What should I bring for power when visiting Burundi?',
      answer:
        'If traveling from Europe, your chargers will work directly. From anywhere else, bring a European-style adapter. A portable battery pack is strongly recommended given the frequency of power outages, especially if traveling outside Bujumbura.',
    },
  ],
  metaTitle: 'Burundi Power Plugs — Types C & E | Adapter Guide for Bujumbura',
  metaDescription:
    'Burundi uses Type C and E plugs at 220V/50Hz. Learn what adapter to bring and how to handle frequent power outages in Bujumbura and beyond.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Rwanda', slug: 'rwanda-electric-plug-types-will-you-need-to-bring-an-adapter-with-you' },
    { name: 'Congo', slug: 'congo-electric-plug-type-do-you-need-an-adapter' },
  ],
};

export default burundi;
