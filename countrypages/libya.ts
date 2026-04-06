import { CountryPlugData } from '../types';

const libya: CountryPlugData = {
  slug: 'libya-electric-plug-types-will-you-need-an-adapter-in-libya',
  name: 'Libya',
  demonym: 'Libyan',
  continent: 'Africa',
  region: 'North Africa',
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
      id: 'type-l',
      name: 'Type L',
      subtitle: 'Italian',
      pins: 3,
      pinShape: 'round',
      pinDiameter: 4.0,
      pinSpacing: 19,
      ratedAmps: 16,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.063,
      bodyWidth: 1.2,
      bodyHeight: 0.8,
      bodyCornerRadius: 0.2,
      noseRadius: 0.45,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Italian colonial legacy means Type L outlets are common alongside Type C. Power supply is unreliable due to ongoing instability, and blackouts are frequent even in Tripoli.',
  ],
  travelContext:
    'Libya's electrical system reflects its Italian colonial history, with Type L sockets appearing alongside the more common European Type C. Power infrastructure has been heavily impacted by years of conflict. Rolling blackouts are a daily reality in most cities. Travelers should prepare for extended power outages and bring portable charging solutions.',
  adapterNeeded: [
    {
      origin: 'US / Canada / Mexico',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: true,
      notes:
        'US flat-pin plugs will not fit Libyan outlets. A voltage converter is also needed for non-dual-voltage devices since Libya runs at 230V.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs require an adapter. Voltage is compatible at 230V.',
    },
    {
      origin: 'Europe (most)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard Europlug (Type C) fits directly. Type E/F plugs also work in most outlets. No conversion needed.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs will not fit. You need an adapter for Type C or L outlets. Voltage is compatible.',
    },
    {
      origin: 'Italy',
      originPlugTypes: 'C, L',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Italian plugs fit directly — Libya uses the same Type C and L outlets as Italy. No adapter or converter needed.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Local electronics shops',
      type: 'electronics',
      city: 'Tripoli',
      priceRange: '$2–$8',
      note: 'Very limited selection. Availability depends heavily on current conditions. Buy adapters before traveling.',
    },
    {
      name: 'Hotel reception',
      type: 'hotel',
      city: 'Tripoli',
      note: 'Some hotels in Tripoli may have a small number of adapters available for guests.',
    },
  ],
  airportName: 'Tripoli Mitiga International Airport',
  airportCode: 'MJI',
  neighbors: [
    {
      name: 'Tunisia',
      slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Tunisia uses Type C (shared) but French-style Type E instead of Italian Type L.',
    },
    {
      name: 'Algeria',
      slug: 'algeria-electrical-plug-type',
      plugTypes: ['C', 'F'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Algeria uses Type C (shared) but Type F instead of Type L.',
    },
    {
      name: 'Chad',
      slug: 'chad-electric-plug-types-do-you-need-to-pack-an-adapter',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Chad shares Type C but uses a complex mix of other types.',
    },
    {
      name: 'Niger',
      slug: 'niger-electric-plug-types-will-you-need-an-adapter-for-niger',
      plugTypes: ['C', 'D', 'E', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
    },
    {
      name: 'Egypt',
      slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt',
      plugTypes: ['C', 'F'],
      voltage: 220,
      sameAsSubject: 'partially',
    },
    {
      name: 'Sudan',
      slug: 'sudan-electric-plug-types-which-adapter-will-you-need-in-sudan',
      plugTypes: ['C', 'D'],
      voltage: 230,
      sameAsSubject: 'partially',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'rare',
  accommodationNote:
    'Hotels in Tripoli typically have generator backup, but outages can still be lengthy. Outside the capital, accommodation is basic and power supply is very unreliable. Bring a portable battery pack and a flashlight.',
  faqs: [
    {
      question: 'Why does Libya use Italian-style plugs?',
      answer:
        'Libya was an Italian colony from 1911 to 1943, and much of the original electrical infrastructure was installed during that period. The Italian Type L socket remains common alongside the European Type C.',
    },
    {
      question: 'How reliable is electricity in Libya?',
      answer:
        'Power supply is unreliable throughout Libya. Even in Tripoli, rolling blackouts lasting several hours are common. Many buildings supplement with private generators. Bring a portable battery pack for essential devices.',
    },
    {
      question: 'Can I use a standard European charger in Libya?',
      answer:
        'Yes. The standard two-pin Europlug (Type C) fits most Libyan outlets. If you encounter an Italian Type L socket, a Type C plug will usually fit as well since the pin spacing is compatible.',
    },
  ],
  metaTitle: 'Libya Power Plugs — Types C & L | Adapter & Voltage Guide',
  metaDescription:
    'Libya uses Type C and L plugs at 230V/50Hz. Italian colonial legacy means Type L outlets are common. Learn what adapter to bring and how to handle unreliable power.',
  lastUpdated: '2025-03-30',
  relatedCountries: [
    { name: 'Tunisia', slug: 'tunisia-electric-plug-types-which-adapter-will-you-need-for-tunisia' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Egypt', slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt' },
  ],
};

export default libya;
