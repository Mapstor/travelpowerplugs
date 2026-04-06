import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'mongolia-electric-plug-types-will-you-need-an-adapter-in-the-steppe',
  name: 'Mongolia',
  demonym: 'Mongolian',
  continent: 'Asia',
  region: 'East Asia',
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
  quirks: [
    'Ulaanbaatar has reliable modern infrastructure, but ger (yurt) camps in the countryside vary enormously. Some tourist ger camps have solar-powered charging stations, others run generators for limited evening hours, and some have no electricity at all.',
    'A large battery pack and ideally a portable solar charger are essential gear for steppe trips beyond the capital.',
  ],
  travelContext:
    'Mongolia is two very different electrical experiences. Ulaanbaatar is a modern city with reliable power and standard European-style outlets. Step outside the capital onto the steppe, and electricity becomes a luxury. Multi-day overland trips across the Gobi or to remote national parks may involve days without access to a wall outlet. Plan your power strategy like you would plan your water supply.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs do not fit Mongolian round-pin outlets. You need an adapter. Mongolia uses 230V — check device labels.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit. Bring an adapter. Voltage is compatible.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'European Type C Europlugs and Type E/F plugs work in Mongolian outlets. No adapter or converter needed.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs do not fit. Bring an adapter. Voltage is compatible.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Nomin Supermarket',
      type: 'supermarket',
      city: 'Ulaanbaatar',
      priceRange: '₮5,000–₮25,000',
      note: 'Major supermarket chain with electronics sections.',
    },
    {
      name: 'Shangri-La Mall electronics',
      type: 'electronics',
      city: 'Ulaanbaatar',
      priceRange: '₮8,000–₮30,000',
      note: 'Ulaanbaatar\'s main modern mall with electronics retailers.',
    },
    {
      name: 'Peace Avenue shops',
      type: 'electronics',
      city: 'Ulaanbaatar',
      priceRange: '₮3,000–₮15,000',
      note: 'Small electronics shops along Ulaanbaatar\'s main commercial street.',
    },
    {
      name: 'Chinggis Khaan Airport shops',
      type: 'airport',
      city: 'Ulaanbaatar',
      priceRange: '₮10,000–₮40,000',
      note: 'Mongolia\'s new international airport has a small selection of travel accessories.',
    },
  ],
  airportName: 'Chinggis Khaan International Airport',
  airportCode: 'UBN',
  neighbors: [
    {
      name: 'Russia',
      slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'mostly',
      adapterNote: 'Russia uses compatible European-style plugs. Your adapter works in both countries.',
    },
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'China shares Type C but also uses Type A and I which Mongolia does not.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Ulaanbaatar have standard European-style outlets and reliable power. Tourist ger camps vary widely: upscale camps may have individual outlets in each ger and solar charging stations, while basic camps may run a generator for a few hours in the evening or have no power at all. Always confirm electricity availability with your tour operator before departure.',
  faqs: [
    {
      question: 'Do I need an adapter for Mongolia?',
      answer:
        'European travelers with Type C or E/F plugs do not need one. US, UK, and Australian travelers all need an adapter to fit Mongolian round-pin outlets.',
    },
    {
      question: 'Can I charge my phone at a ger camp?',
      answer:
        'It depends entirely on the camp. Upscale tourist ger camps often have outlets or solar charging stations. Mid-range camps may run a generator in the evening. Basic camps and nomadic family stays may have no electricity at all. A 20,000mAh+ battery pack is essential for any countryside trip.',
    },
    {
      question: 'Should I bring a solar charger to Mongolia?',
      answer:
        'For multi-day steppe or Gobi trips, a portable solar panel is extremely useful. Mongolia gets abundant sunshine, especially in summer. Pair it with a large battery pack for the most reliable setup. Solar alone is insufficient on overcast days.',
    },
    {
      question: 'Is the power reliable in Ulaanbaatar?',
      answer:
        'Yes. Ulaanbaatar has a modern power grid and outages are uncommon. Hotels, restaurants, and cafés all have reliable electricity. The challenge is entirely about getting power outside the capital.',
    },
    {
      question: 'What voltage does Mongolia use?',
      answer:
        'Mongolia uses 230V at 50Hz — the same as most of Europe. Dual-voltage devices (100–240V) work fine. Single-voltage US devices rated for 120V will need a converter.',
    },
  ],
  metaTitle: 'Mongolia Power Plugs: Types C & E — Adapter & Steppe Charging Guide',
  metaDescription:
    'Mongolia uses European-style Type C and E plugs at 230V/50Hz. Ulaanbaatar has reliable power, but the steppe is another story. Here\'s what to pack.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Russia', slug: 'russia-electric-plug-types-will-you-need-an-adapter-in-russia' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter' },
    { name: 'South Korea', slug: 'south-korea-electric-plug-types-will-you-need-an-adapter-in-seoul' },
    { name: 'Kazakhstan', slug: 'kazakhstan-electric-plug-types-will-you-need-an-adapter-probably-yes' },
  ],
};

export default data;
