import type { CountryPlugData } from '../types';

const algeria: CountryPlugData = {
  slug: 'algeria-electrical-plug-type',
  name: 'Algeria',
  demonym: 'Algerian',
  continent: 'Africa',
  region: 'North Africa',
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
  travelContext:
    'Algeria is the largest country in Africa, with major cities like Algiers, Oran, and Constantine offering modern infrastructure. Travelers exploring the Saharan south, including Tassili n\'Ajjer and Ghardaia, should expect more basic electrical setups in guesthouses and desert camps.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs do not fit Algerian round-pin sockets. An adapter is required. Most US electronics handle 230V natively.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs are incompatible with Algerian outlets. Bring an adapter. Voltage is the same at 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C and Type F plugs fit directly into Algerian sockets. No adapter needed.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs will not fit. You need an adapter for Type C or F outlets. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Condor Electronics',
      type: 'electronics',
      city: 'Algiers',
      priceRange: '300–800 DZD',
      note: 'Algerian electronics brand with retail outlets in major cities.',
    },
    {
      name: 'Ardis',
      type: 'electronics',
      city: 'Algiers',
      priceRange: '400–1000 DZD',
      note: 'Electronics retailer with multiple branches. Stocks adapters and power accessories.',
    },
    {
      name: 'Uno Supermarkets',
      type: 'supermarket',
      city: 'Algiers',
      priceRange: '200–600 DZD',
      note: 'Supermarket chain that occasionally carries basic travel adapters in the electronics section.',
    },
  ],
  airportName: 'Algiers Houari Boumediene Airport',
  airportCode: 'ALG',
  neighbors: [
    {
      name: 'Tunisia',
      slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote:
        'Tunisia uses Type E instead of Type F for grounded outlets. Ungrounded Type C works in both countries.',
    },
    {
      name: 'Libya',
      slug: 'libya-electric-plug-types-will-you-need-an-adapter-in-libya',
      plugTypes: ['C', 'L'],
      voltage: 127,
      sameAsSubject: 'partially',
      adapterNote:
        'Libya uses different plug types and a lower voltage. You may need a different adapter and potentially a converter.',
    },
    {
      name: 'Morocco',
      slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote:
        'Morocco uses the French-style Type E alongside Type C. Type C plugs work in both countries without an adapter.',
    },
    {
      name: 'Niger',
      slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote:
        'Niger uses several plug types including C and F. Your Algerian devices with Type C or F plugs should work.',
    },
    {
      name: 'Mali',
      slug: 'mali-electric-plug-types-which-adapter-will-you-need-in-mali',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
    {
      name: 'Mauritania',
      slug: 'mauritania-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'compatible',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'International hotels in Algiers and Oran may have adapters available on request, but this is not common. Budget and mid-range accommodations rarely provide them. Bring your own adapter, especially if traveling outside major cities.',
  faqs: [
    {
      question: 'What type of power plug does Algeria use?',
      answer:
        'Algeria uses Type C (ungrounded Europlug) and Type F (grounded Schuko) sockets. These are the same types found across much of continental Europe.',
    },
    {
      question: 'Do I need a voltage converter for Algeria?',
      answer:
        'Algeria operates at 230V/50Hz. Most modern chargers and electronics are dual-voltage (100–240V) and do not require a converter. Check the label on your device to confirm before traveling.',
    },
    {
      question: 'Can I find power adapters easily in Algiers?',
      answer:
        'Electronics stores like Condor and Ardis in Algiers stock adapters, though selection may be limited compared to international retailers. It is best to bring an adapter with you.',
    },
  ],
  metaTitle: 'Algeria Power Plugs & Adapters: Types C & F – Travel Guide',
  metaDescription:
    'Algeria uses Type C and Type F plugs at 230V/50Hz. Learn whether you need an adapter, what to expect across the country, and where to buy one locally.',
  lastUpdated: '2025-06',
  relatedCountries: [
    {
      name: 'Tunisia',
      slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia',
    },
    {
      name: 'Morocco',
      slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco',
    },
    {
      name: 'Libya',
      slug: 'libya-electric-plug-types-will-you-need-an-adapter-in-libya',
    },
  ],
};

export default algeria;
