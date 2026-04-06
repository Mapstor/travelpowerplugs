import type { CountryPlugData } from '../types';

const nigeria: CountryPlugData = {
  slug: 'nigeria-electric-plug-types-which-adapter-will-you-need',
  name: 'Nigeria',
  demonym: 'Nigerian',
  continent: 'Africa',
  region: 'West Africa',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
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
    'Power outages are a daily reality across Nigeria. The national grid (formerly "NEPA," now PHCN) is notoriously unreliable. Virtually every hotel, business, and many residences have backup generators.',
    'Type G is dominant in modern buildings, while older structures — especially outside Lagos and Abuja — may still have Type D (old British Indian) sockets.',
  ],
  travelContext:
    'Nigeria is Africa\'s most populous country and a growing business travel hub. Lagos and Abuja have modern infrastructure in commercial districts and upscale hotels, but power reliability remains the country\'s biggest challenge. A portable battery pack and a surge protector are must-have items for any visitor.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs do not fit either Nigerian socket type. Bring a Type G adapter for modern buildings. A universal adapter is safest since you may encounter Type D as well.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type G outlets are the dominant modern standard. Your UK plugs will work in most hotels and offices. You may occasionally encounter older Type D sockets in some buildings.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European plugs are incompatible with both Type D and Type G. Bring an adapter — preferably a universal one to cover both socket types.',
    },
    {
      origin: 'India',
      originPlugTypes: 'C, D, M',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Indian Type D plugs work in older Nigerian Type D outlets. For modern Type G outlets, you will still need an adapter. A universal adapter is the safest choice.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Slot Systems',
      type: 'electronics',
      city: 'Lagos, Abuja, Port Harcourt',
      priceRange: '1,500–5,000 NGN',
      note: 'Popular Nigerian electronics chain with phone accessories and adapters.',
    },
    {
      name: 'Pointek',
      type: 'electronics',
      city: 'Lagos, Abuja',
      priceRange: '1,500–4,000 NGN',
      note: 'Another major electronics retailer with multiple mall locations.',
    },
    {
      name: 'Game (Shoprite group)',
      type: 'supermarket',
      city: 'Lagos, Abuja',
      priceRange: '2,000–6,000 NGN',
      note: 'South African chain inside Shoprite malls — carries travel adapters.',
    },
    {
      name: 'Jumia pickup stations',
      type: 'convenience',
      city: 'Lagos, Abuja, major cities',
      priceRange: '1,000–4,000 NGN',
      note: 'Order online and collect at a pickup point — useful if you have a day to spare.',
    },
  ],
  airportName: 'Lagos Murtala Muhammed International',
  airportCode: 'LOS',
  neighbors: [
    {
      name: 'Cameroon',
      slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Cameroon uses European-style C/E plugs — completely different from Nigeria\'s D/G system.',
    },
    {
      name: 'Chad',
      slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Chad uses a wide mix. Type D overlaps with Nigeria\'s older outlets.',
    },
    {
      name: 'Niger',
      slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Niger has a mix of plug types. Type D overlap exists, but you may need additional adapters.',
    },
    {
      name: 'Benin',
      slug: 'benin-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Benin uses French-style C/E — incompatible with Nigeria\'s Type D and G.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Upscale hotels in Lagos (Victoria Island, Ikoyi) and Abuja have reliable generator backup and modern Type G outlets. Mid-range hotels usually have generators too, though the switchover during outages can cause brief interruptions. A surge protector is strongly advised — voltage spikes during generator-to-grid transitions can damage sensitive electronics.',
  faqs: [
    {
      question: 'How often do power outages happen in Nigeria?',
      answer:
        'Very frequently. In most of the country, grid power is available only for portions of the day. Hotels and businesses compensate with diesel generators that kick in automatically. You will hear generators running — it is part of daily life in Nigeria.',
    },
    {
      question: 'Should I bring a surge protector to Nigeria?',
      answer:
        'Absolutely. Voltage fluctuations are common during switchovers between grid power and generator backup. A compact surge protector will protect your laptop, camera charger, and other sensitive electronics.',
    },
    {
      question: 'Will I find Type D or Type G outlets in my Lagos hotel?',
      answer:
        'Most modern hotels in Lagos use Type G (British) outlets exclusively. Type D is more common in older residential and commercial buildings. A universal adapter covers both scenarios.',
    },
    {
      question: 'Can I rely on airport shops for an adapter?',
      answer:
        'Lagos Murtala Muhammed Airport (LOS) has some electronics vendors, but selection and availability can be inconsistent. It is much safer to bring your adapter from home or buy one at a Slot Systems or Pointek store in the city.',
    },
    {
      question: 'Is a portable battery really necessary for Nigeria?',
      answer:
        'Yes. Even with hotel generators, power can be intermittent during travel between cities or at less developed locations. A portable battery ensures you can always keep your phone and essential devices charged.',
    },
  ],
  metaTitle: 'Nigeria Power Plugs: Types D & G — Which Adapter Do You Need?',
  metaDescription:
    'Nigeria uses Type D and G plugs at 230V/50Hz. UK visitors are mostly set; everyone else needs an adapter. Tips on power outages, surge protection, and where to buy locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Ghana', slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'South Africa', slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa' },
    { name: 'Cameroon', slug: 'cameroon-electric-plug-types-do-you-need-to-pack-an-adapter' },
  ],
};

export default nigeria;
