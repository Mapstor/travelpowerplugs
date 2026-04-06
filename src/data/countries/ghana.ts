import type { CountryPlugData } from '@/types';

const ghana: CountryPlugData = {
  slug: 'ghana-electric-plug-types-will-you-need-an-adapter-in-accra',
  name: 'Ghana',
  demonym: 'Ghanaian',
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
    'Ghana\'s power grid is more stable than many West African neighbors, but "dumsor" (load shedding) periods do occur, particularly during dry seasons when hydroelectric output drops.',
    'Type G is the dominant standard in modern buildings, while older structures may still have Type D sockets from the colonial era.',
  ],
  travelContext:
    'Ghana is one of West Africa\'s most welcoming and accessible destinations, popular for Cape Coast Castle, Kakum National Park, and Accra\'s vibrant culture. The electrical system mirrors Nigeria\'s D/G mix. British travelers are well-served; everyone else should pack an adapter and a portable battery.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pronged plugs are incompatible with Ghanaian outlets. Bring a Type G adapter for modern sockets. A universal adapter covers older Type D outlets too.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type G is the standard in modern Ghanaian buildings. Your UK plugs work directly. Occasionally you may find older Type D sockets.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs do not fit Type D or G sockets. Bring an adapter.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I is incompatible. Bring an adapter. Voltage (230V) matches Australia closely.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'CompuGhana',
      type: 'electronics',
      city: 'Accra',
      priceRange: '20–60 GHS',
      note: 'Well-known electronics retailer in Accra with adapters and accessories.',
    },
    {
      name: 'Telefonika',
      type: 'electronics',
      city: 'Accra',
      priceRange: '15–50 GHS',
      note: 'Phone and electronics shop with travel adapter stock.',
    },
    {
      name: 'Melcom',
      type: 'supermarket',
      city: 'Accra, Kumasi, Takoradi',
      priceRange: '15–45 GHS',
      note: 'Ghana\'s largest department store chain — electronics section carries adapters.',
    },
    {
      name: 'Kotoka Airport shops',
      type: 'airport',
      city: 'Accra',
      priceRange: '30–80 GHS',
      note: 'Available in the arrivals area at ACC, but at a markup.',
    },
  ],
  airportName: 'Accra Kotoka International',
  airportCode: 'ACC',
  neighbors: [
    {
      name: 'Ivory Coast',
      slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Ivory Coast uses French-style C/E — completely different from Ghana\'s D/G. You need a different adapter.',
    },
    {
      name: 'Togo',
      slug: 'togo-electric-plug-types-which-adapter-will-you-need-for-togo',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Togo uses European Type C — incompatible with Ghana\'s Type D and G outlets.',
    },
    {
      name: 'Burkina Faso',
      slug: 'burkina-faso-electric-plug-type-will-you-need-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'different',
      adapterNote: 'Burkina Faso uses French-style C/E plugs — not compatible with Ghana\'s system.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Accra\'s business districts (Airport City, East Legon, Osu) are modern and well-powered. Cape Coast and Kumasi hotels are generally reliable. During dumsor periods, upscale hotels switch to generators seamlessly, but budget guesthouses may have gaps. A portable battery is a smart precaution.',
  faqs: [
    {
      question: 'What is "dumsor" and will it affect my trip?',
      answer:
        'Dumsor is a Ghanaian term for load shedding — scheduled power cuts used to manage grid capacity. It occurs periodically, especially during dry spells. Major hotels have backup generators, but budget accommodations may experience outages. Dumsor schedules are sometimes published by the electricity company.',
    },
    {
      question: 'Do I need the same adapter for Ghana and Nigeria?',
      answer:
        'Yes, both countries use Type D and G outlets. A single universal adapter or Type G adapter will serve you in both destinations.',
    },
    {
      question: 'Are outlets at Cape Coast hotels reliable?',
      answer:
        'Cape Coast has improved its infrastructure significantly. Most mid-range and upscale hotels have stable power. Budget guesthouses near the castle area can be less consistent — a portable battery helps.',
    },
    {
      question: 'Can I charge my devices at Accra\'s Kotoka Airport?',
      answer:
        'Yes, Kotoka Airport (ACC) has charging stations and Type G outlets throughout the terminal, especially near gates. The newer Terminal 3 is well-equipped for travelers.',
    },
    {
      question: 'Where is the best place to buy an adapter in Accra?',
      answer:
        'Melcom stores are the most convenient and affordable option, with branches across the city. CompuGhana near the Accra Mall is another solid choice. Avoid airport shops unless you have no other option.',
    },
  ],
  metaTitle: 'Ghana Power Plugs: Types D & G — Do You Need an Adapter in Accra?',
  metaDescription:
    'Ghana uses Type D and G plugs at 230V/50Hz. UK visitors are set; US, European, and Australian travelers need an adapter. Dumsor tips and where to buy locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Nigeria', slug: 'nigeria-electric-plug-types-which-adapter-will-you-need' },
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'Ivory Coast', slug: 'cote-divoire-electric-plug-type-do-you-need-an-adapter' },
    { name: 'Senegal', slug: 'senegal-electric-plug-types-which-adapter-will-you-need-in-dakar' },
  ],
};

export default ghana;
