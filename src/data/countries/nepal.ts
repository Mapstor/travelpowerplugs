import type { CountryPlugData } from '@/types';

const nepal: CountryPlugData = {
  slug: 'nepal-electric-plug-types-will-you-need-an-adapter-in-nepal',
  name: 'Nepal',
  demonym: 'Nepali',
  continent: 'Asia',
  region: 'South Asia',
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
    'Same plug types as India. Trekking lodges in the Himalayas (Annapurna, Everest region) charge per-device for electricity — bring a multi-port USB charger to save money. Some tea houses above 4,000m have no electricity at all.',
    'Load shedding (scheduled power cuts) was severe historically but has improved significantly since 2018. A portable solar panel or large battery pack is essential for high-altitude trekking.',
  ],
  travelContext:
    'Nepal is a tale of two experiences: Kathmandu and Pokhara have reasonably reliable power with standard outlets, while the high-altitude trekking routes are a different story entirely. Charging a phone at a tea house on the Everest Base Camp trek can cost several hundred rupees per charge, and above certain altitudes there may be no electricity at all. Plan your power strategy before hitting the trail.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'US flat-pin plugs do not fit Nepali round-pin outlets. You need an adapter. Nepal uses 230V — check device labels.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs do not fit. Bring an adapter to Type D or C. Voltage is compatible.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C Europlugs fit most Nepali outlets. Larger Schuko plugs may need a simple adapter. Voltage and frequency match.',
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
      name: 'CG Digital',
      type: 'electronics',
      city: 'Kathmandu',
      priceRange: 'NPR 200–NPR 1,000',
      note: 'Electronics retailer with branches in Kathmandu and other cities.',
    },
    {
      name: 'Thamel electronics shops',
      type: 'electronics',
      city: 'Kathmandu',
      priceRange: 'NPR 100–NPR 500',
      note: 'The Thamel tourist district has many small shops selling adapters, battery packs, and charging cables aimed at trekkers.',
    },
    {
      name: 'Daraz pickup points',
      type: 'electronics',
      city: 'Kathmandu',
      priceRange: 'NPR 150–NPR 800',
      note: 'Online marketplace with physical pickup locations. Order ahead if you have time.',
    },
    {
      name: 'Tribhuvan Airport shops',
      type: 'airport',
      city: 'Kathmandu',
      priceRange: 'NPR 300–NPR 1,500',
      note: 'Small shops in the arrivals area stock basic adapters.',
    },
  ],
  airportName: 'Tribhuvan International Airport',
  airportCode: 'KTM',
  neighbors: [
    {
      name: 'India',
      slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india',
      plugTypes: ['C', 'D', 'M'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Nepal and India use the same plug types and voltage. Your adapter works for both.',
    },
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'China shares Type C but also uses Type A and I, which Nepal does not.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Kathmandu and Pokhara are generally well-equipped with standard outlets and stable power. Trekking lodges (tea houses) vary widely — lower-altitude lodges usually have outlets but may charge per device (NPR 100–500 per charge). Above 4,000m, some lodges have solar-powered USB stations, others have no electricity. High-end lodges on popular routes increasingly offer free charging.',
  faqs: [
    {
      question: 'Do I need an adapter for Nepal?',
      answer:
        'US, UK, and Australian travelers all need an adapter. European travelers with Type C plugs usually do not — round-pin Europlugs fit most Nepali outlets. The plug system is identical to India.',
    },
    {
      question: 'Can I charge my phone while trekking in Nepal?',
      answer:
        'At lower-altitude tea houses, yes — but many charge NPR 100–500 per device per charge. A multi-port USB charger lets you charge several devices for the price of one outlet. Above 4,000m, some lodges have solar charging, others have nothing. A 20,000mAh battery pack is highly recommended.',
    },
    {
      question: 'Should I bring a solar charger to Nepal?',
      answer:
        'For multi-day treks above the tree line (Annapurna Circuit, Everest Base Camp), a portable solar panel can be very useful as a supplement to a battery pack. Sunlight is strong at altitude but weather can be unpredictable. A large battery bank remains the more reliable primary option.',
    },
    {
      question: 'Are power outages still a problem in Nepal?',
      answer:
        'Nepal suffered from severe load shedding for years, but the situation has improved dramatically since 2018 thanks to hydropower expansion. In Kathmandu and Pokhara, power is now generally reliable. Rural areas may still experience occasional outages.',
    },
    {
      question: 'Is the voltage in Nepal the same as India?',
      answer:
        'Yes — Nepal uses 230V at 50Hz with the same plug types (C, D, M) as India. If you have already prepared for an India trip, no additional adapters are needed for Nepal.',
    },
  ],
  metaTitle: 'Nepal Power Plugs: Types C, D & M — Adapter & Trekking Charging Guide',
  metaDescription:
    'Nepal uses Type C, D, and M plugs at 230V/50Hz — same as India. Find out what adapter you need, how to charge devices while trekking, and what to pack for the Himalayas.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'India', slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india' },
    { name: 'Sri Lanka', slug: 'sri-lanka-electric-plug-types-will-you-need-an-adapter-in-sri-lanka' },
    { name: 'Bangladesh', slug: 'bangladesh-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Bhutan', slug: 'bhutan-electric-plug-types-do-you-need-an-adapter-in-bhutan' },
  ],
};

export default nepal;
