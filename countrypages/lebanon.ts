import type { CountryPlugData } from '../types';

const lebanon: CountryPlugData = {
  slug: 'lebanon-electric-plug-types-will-you-need-an-adapter-in-beirut',
  name: 'Lebanon',
  demonym: 'Lebanese',
  continent: 'Asia',
  region: 'Middle East',
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
  ],
  quirks: [
    'Lebanon suffers from severe electricity shortages. State power (Électricité du Liban) often provides only a few hours of grid electricity per day, supplemented by neighborhood diesel generators. Hotels have their own backup systems, but power transitions cause fluctuations.',
    'A surge protector is strongly recommended — voltage spikes during generator-to-grid switchovers can damage sensitive electronics like laptops.',
  ],
  travelContext:
    'Beirut, Byblos, Baalbek, and the Kadisha Valley draw visitors to this small but culturally rich country. Lebanon\'s ongoing electricity crisis means power management is a daily reality. Hotels in Beirut have generator backup, but a surge protector and portable battery should be in every visitor\'s bag.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US plugs are incompatible with all Lebanese socket types. A universal adapter is recommended due to the C/D/G mix.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Some buildings have Type G, but it is not universal. Bring a universal adapter to cover Type C outlets as well.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C is widespread in Lebanon. European travelers will find compatible outlets in most locations without needing an adapter.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I is not used. Bring a universal adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Abed Tahan',
      type: 'electronics',
      city: 'Beirut',
      priceRange: '50,000–200,000 LBP',
      note: 'Lebanon\'s largest electronics retailer with branches in Beirut malls.',
    },
    {
      name: 'Virgin Megastore',
      type: 'electronics',
      city: 'Beirut',
      priceRange: '60,000–250,000 LBP',
      note: 'Located in Beirut Souks — carries travel adapters and tech accessories.',
    },
    {
      name: 'Spinneys',
      type: 'supermarket',
      city: 'Beirut, major cities',
      priceRange: '40,000–150,000 LBP',
      note: 'Supermarket chain that sometimes stocks basic adapters.',
    },
  ],
  airportName: 'Beirut-Rafic Hariri International',
  airportCode: 'BEY',
  neighbors: [
    {
      name: 'Syria',
      slug: 'syria-electric-plug-types-which-adapter-will-you-need-in-syria',
      plugTypes: ['C', 'E', 'L'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Syria uses Type C (compatible with Lebanon) plus E and L.',
    },
    {
      name: 'Israel',
      slug: 'israel-electric-plug-type-will-you-need-an-adapter-for-israel',
      plugTypes: ['C', 'H'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Israel uses Type C (compatible) and Type H (unique to Israel).',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Beirut hotels have private generator systems and maintain power around the clock, though brief interruptions during switchovers are normal. Hotels outside Beirut — in Byblos, Baalbek, or mountain towns — may have longer gaps. A surge protector protects your electronics during voltage fluctuations. Budget guesthouses may have limited outlets.',
  faqs: [
    {
      question: 'How bad is the electricity situation in Lebanon?',
      answer:
        'State electricity (Électricité du Liban) provides limited hours per day in most areas. Neighborhoods rely on private diesel generators to fill the gap. Hotels maintain their own generators and keep power running, but expect occasional brief interruptions during switchovers between grid and generator.',
    },
    {
      question: 'Do I really need a surge protector in Lebanon?',
      answer:
        'It is strongly recommended. The frequent transitions between grid power and generator power can cause voltage spikes that may damage laptops, cameras, and other sensitive electronics. A compact travel surge protector is a worthwhile investment.',
    },
    {
      question: 'Which plug type is most common in Beirut hotels?',
      answer:
        'Type C (European two-pin) is the most commonly encountered in hotel rooms. Some buildings also have Type G (British) or older Type D sockets. A universal adapter covers all possibilities.',
    },
    {
      question: 'Can I use my European charger in Lebanon?',
      answer:
        'Yes. Type C outlets are widespread, and Lebanon runs at 230V/50Hz — identical to European standards. Your chargers and devices will work without any adapter.',
    },
    {
      question: 'Should I bring a portable battery to Lebanon?',
      answer:
        'Absolutely. Between limited state electricity and the mix of outlet types, a portable battery ensures you always have phone charge for navigation, translation, and communication.',
    },
  ],
  metaTitle: 'Lebanon Power Plugs: Types C, D & G — Do You Need an Adapter in Beirut?',
  metaDescription:
    'Lebanon uses Type C, D, and G plugs at 230V/50Hz. European travelers are mostly set; others need an adapter. Important tips on power outages and surge protection.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Jordan', slug: 'jordan-electric-plug-types-will-you-need-adapter-traveling-to-jordan' },
    { name: 'Israel', slug: 'israel-electric-plug-type-will-you-need-an-adapter-for-israel' },
    { name: 'Syria', slug: 'syria-electric-plug-types-which-adapter-will-you-need-in-syria' },
    { name: 'Egypt', slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt' },
  ],
};

export default lebanon;
