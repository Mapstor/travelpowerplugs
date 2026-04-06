import type { CountryPlugData } from '../types';

const southAfrica: CountryPlugData = {
  slug: 'south-africa-electric-plug-types-which-adapter-will-you-need-for-south-africa',
  name: 'South Africa',
  demonym: 'South African',
  continent: 'Africa',
  region: 'Southern Africa',
  voltage: 230,
  frequency: 50,
  complexityTier: 'complex',
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
    {
      id: 'type-n',
      name: 'Type N',
      subtitle: 'Brazilian',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 20,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.2,
      bodyHeight: 1.0,
      bodyCornerRadius: 0.2,
      noseRadius: 0.45,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'South Africa\'s signature Type M plug — three large round pins arranged in a triangle — is bigger than almost any other plug type in the world, and it confuses nearly every first-time visitor.',
    'The country is officially transitioning from Type M to Type N (the same standard Brazil adopted), but progress is slow. Most existing buildings still have Type M sockets, while new construction increasingly includes Type N.',
    'Type C Europlugs can physically fit into many South African Type M and Type N sockets, but the connection can be loose and unreliable — a proper adapter is much safer.',
    'Load shedding (scheduled rolling blackouts by Eskom, the national utility) has been a recurring reality in South Africa. Bring a power bank and keep devices charged when you can.',
    'Safari lodges vary enormously — high-end lodges in Kruger or the Sabi Sands usually provide universal outlets and adapters, but budget bush camps may have limited or generator-only power.',
  ],
  phaseOutNote:
    'South Africa is gradually adopting Type N (SANS 164-2) as its new standard. New buildings and renovations are required to include Type N sockets, but the vast majority of outlets in the country are still Type M. This transition will take many years.',
  travelContext:
    'South Africa is the most-visited country in sub-Saharan Africa, drawing travelers for safaris, Cape Town, the Winelands, and the Garden Route. Its unique plug situation (Type M is found almost nowhere else) means virtually every international visitor needs an adapter. Load shedding adds another layer — keeping a power bank handy is essential.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Your flat-pin Type A/B plugs won\'t fit South Africa\'s large Type M sockets. You need a dedicated South Africa adapter (not just a generic European one). Most US electronics are dual-voltage, so no converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'The UK\'s Type G plug does not fit South African outlets. You\'ll need a Type G to Type M adapter. Voltage is the same 230V.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'While a Type C Europlug can sometimes fit loosely into South African sockets, it\'s not a reliable connection. Bring a proper adapter for Type M outlets. No voltage issues — both run at 230V.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australia\'s Type I plugs are incompatible with South African outlets. You need an adapter. Voltage is the same.',
    },
    {
      origin: 'India',
      originPlugTypes: 'C, D, M',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'India also uses Type D and Type M plugs, so many Indian appliances will fit South African sockets directly. Type C devices will also work. No adapter typically needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Incredible Connection',
      type: 'electronics',
      note: 'South Africa\'s largest electronics retailer. Stocks travel adapters including universal models and South Africa-specific ones.',
    },
    {
      name: 'HiFi Corp',
      type: 'electronics',
      note: 'Major electronics chain found in most shopping centres. Good selection of adapters and power strips.',
    },
    {
      name: 'Game',
      type: 'supermarket',
      note: 'Large department/discount store chain with an electronics section that stocks basic adapters at reasonable prices.',
    },
    {
      name: 'Takealot collection points',
      type: 'electronics',
      note: 'South Africa\'s leading online retailer — order an adapter for same-day or next-day pickup at collection points in major cities.',
    },
    {
      name: 'OR Tambo International Airport (JNB)',
      type: 'airport',
      city: 'Johannesburg',
      priceRange: 'R100–350 (~$6–20)',
      note: 'Multiple shops in arrivals sell South Africa adapters. Prices are higher than in town but convenient for immediate needs.',
    },
    {
      name: 'Cape Town International Airport (CPT)',
      type: 'airport',
      city: 'Cape Town',
      priceRange: 'R100–350 (~$6–20)',
      note: 'Electronics kiosks in the arrivals hall carry Type M adapters.',
    },
  ],
  airportName: 'OR Tambo International / Cape Town International',
  airportCode: 'JNB / CPT',
  neighbors: [
    {
      name: 'Namibia',
      slug: 'namibia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['D', 'M'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Namibia uses the same Type D/M plugs — your South Africa adapter will work there too.',
    },
    {
      name: 'Botswana',
      slug: 'botswana-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['D', 'G', 'M'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Botswana primarily uses Type D/M like South Africa, though some lodges have Type G (British) outlets.',
    },
    {
      name: 'Zimbabwe',
      slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe',
      plugTypes: ['D', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Zimbabwe uses Type D and G — your Type M adapter may not work. A universal adapter is recommended.',
    },
    {
      name: 'Mozambique',
      slug: 'mozambique-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['C', 'F', 'M'],
      voltage: 230,
      sameAsSubject: 'mostly',
      adapterNote: 'Mozambique uses a mix including Type M, so your South Africa adapter will often work.',
    },
    {
      name: 'Eswatini',
      slug: 'eswatini-electric-plug-types-will-you-need-an-adapter-in-mbabane',
      plugTypes: ['M'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Eswatini uses the same Type M system — no additional adapter needed.',
    },
    {
      name: 'Lesotho',
      slug: 'lesotho-electric-plug-types-which-adapter-do-you-need-for-lesotho',
      plugTypes: ['M'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Lesotho uses Type M just like South Africa — fully compatible.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Hotels in Cape Town and Johannesburg commonly lend adapters at reception, and many upscale properties have universal outlets or built-in USB ports. Safari lodges range widely: luxury lodges in the Sabi Sands or Timbavati provide everything you need, while remote budget camps may rely on generator power with limited outlets. Always bring your own adapter and a power bank.',
  deviceOverrides: [
    {
      device: 'iPhone / Android phone',
      dualVoltage: 'Yes — all modern phone chargers handle 100–240V.',
      adapterOnly: 'Yes',
      note: 'You need a plug adapter for South Africa\'s Type M outlets. Consider a power bank for load shedding periods.',
    },
    {
      device: 'Laptop',
      dualVoltage: 'Yes — virtually all laptop power supplies are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Just an adapter needed. Keep your laptop charged — load shedding can hit at any time.',
    },
    {
      device: 'Hair dryer / Straightener',
      dualVoltage: 'Often not — many US/Canadian models are 120V only.',
      adapterOnly: 'No — check voltage rating carefully.',
      note: 'South Africa runs at 230V. A 120V-only hair dryer will burn out. Hotels in cities almost always provide hair dryers.',
    },
    {
      device: 'Camera battery charger',
      dualVoltage: 'Usually yes — most are 100–240V.',
      adapterOnly: 'Yes',
      note: 'Charge batteries whenever you have power, especially before safari days.',
    },
  ],
  faqs: [
    {
      question: 'What does a South African plug look like?',
      answer:
        'South Africa\'s distinctive Type M plug has three large round pins arranged in a triangle. It\'s noticeably bigger than European or American plugs. The top pin is the earth/ground, and the two lower pins carry current.',
    },
    {
      question: 'Do I need a special adapter for South Africa?',
      answer:
        'Yes — a generic "European" adapter won\'t work. You need one specifically designed for South Africa\'s Type M socket, or a universal adapter that includes a Type M option. These are sometimes labeled "South Africa / India (large)" adapters.',
    },
    {
      question: 'What is load shedding and how will it affect me?',
      answer:
        'Load shedding is South Africa\'s system of scheduled rolling blackouts, managed by the utility Eskom when electricity demand exceeds supply. Outages typically last 2–4 hours. Hotels and lodges usually have backup generators, but bring a power bank for your phone and keep devices topped up.',
    },
    {
      question: 'Will my European Europlug (Type C) fit in South Africa?',
      answer:
        'It can sometimes physically fit into a Type M or Type N socket, but the connection is often loose and unreliable. It\'s much safer — and recommended — to use a proper adapter.',
    },
    {
      question: 'Can I buy an adapter at Johannesburg airport?',
      answer:
        'Yes. OR Tambo International Airport (JNB) has several shops in the arrivals hall selling South Africa adapters. Expect to pay around R100–350 (~$6–20). The same is true at Cape Town airport.',
    },
    {
      question: 'Will my adapter from South Africa work in neighboring countries?',
      answer:
        'It depends. Eswatini, Lesotho, and Namibia use the same Type M system, so your South Africa adapter works there. Botswana and Zimbabwe use a mix of plug types — a universal adapter is more versatile for a multi-country trip.',
    },
    {
      question: 'Do safari lodges have charging facilities?',
      answer:
        'High-end lodges almost always provide outlets (often universal ones) and adapters. Budget camps and mobile safari setups may only have generator power at certain hours with limited outlets. Bring a multi-port USB charger and a power bank.',
    },
    {
      question: 'Is South Africa switching to a new plug type?',
      answer:
        'Yes — South Africa is transitioning to Type N (SANS 164-2), the same plug Brazil uses. New buildings are required to have Type N sockets, but existing buildings overwhelmingly still use Type M. As a visitor, plan for Type M outlets.',
    },
  ],
  metaTitle: 'South Africa Power Plugs — Which Adapter Do You Need? (Type M, C, D, N)',
  metaDescription:
    'South Africa uses unique Type M plugs alongside Types C, D, and N at 230V/50Hz. Find out which adapter you need, where to buy one, and how to handle load shedding.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Namibia', slug: 'namibia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Botswana', slug: 'botswana-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Zimbabwe', slug: 'zimbabwe-electric-plug-types-which-adapter-do-you-need-for-zimbabwe' },
    { name: 'Mozambique', slug: 'mozambique-electric-plug-types-will-you-need-an-adapter' },
    { name: 'India', slug: 'india-electric-plug-types-will-you-need-an-adapter-traveling-to-india' },
  ],
};

export default southAfrica;
