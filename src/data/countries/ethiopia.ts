import type { CountryPlugData } from '@/types';

const ethiopia: CountryPlugData = {
  slug: 'ethiopia-electric-plug-types-will-you-need-an-adapter-in-addis-abeba',
  name: 'Ethiopia',
  demonym: 'Ethiopian',
  continent: 'Africa',
  region: 'East Africa',
  voltage: 220,
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
  quirks: [
    'Power outages occur, especially during the dry season when Ethiopia\'s hydroelectric dams produce less electricity. The Grand Ethiopian Renaissance Dam is changing this, but interruptions persist outside Addis Ababa.',
    'A handful of older buildings may have Italian Type L outlets — a vestige of the brief Italian occupation — but this is increasingly rare.',
  ],
  travelContext:
    'Ethiopia offers the rock-hewn churches of Lalibela, the Simien Mountains, the Danakil Depression, and Addis Ababa\'s growing cultural scene. The European-style electrical system is familiar to continental visitors. Power reliability varies — Addis Ababa hotels are generally solid, but the historic circuit (Lalibela, Gondar, Axum) can have inconsistent supply.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-pronged plugs do not fit Ethiopian round-pin sockets. Bring a Type C adapter. Modern electronics handle 220V without a converter.',
    },
    {
      origin: 'UK / Ireland',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British Type G plugs are not compatible. You need a G-to-C/E adapter.',
    },
    {
      origin: 'Europe (Continental)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Type C, E, and F plugs all work in Ethiopian outlets. No adapter needed for continental European travelers.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I is incompatible. Bring an adapter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Sheger Electronics',
      type: 'electronics',
      city: 'Addis Ababa',
      priceRange: '100–400 ETB',
      note: 'Local electronics shop near Bole area with basic adapters.',
    },
    {
      name: 'Anbessa Electronics',
      type: 'electronics',
      city: 'Addis Ababa',
      priceRange: '100–350 ETB',
      note: 'Another Addis Ababa electronics vendor in the Piazza or Merkato area.',
    },
    {
      name: 'Shoa Supermarket',
      type: 'supermarket',
      city: 'Addis Ababa',
      priceRange: '150–400 ETB',
      note: 'Upscale supermarket near Bole that occasionally stocks travel adapters.',
    },
  ],
  airportName: 'Addis Ababa Bole International',
  airportCode: 'ADD',
  neighbors: [
    {
      name: 'Eritrea',
      slug: 'eritrea-electric-plug-types-will-you-need-an-adapter-in-eritrea',
      plugTypes: ['C'],
      voltage: 230,
      sameAsSubject: 'compatible',
      adapterNote: 'Eritrea uses Type C — compatible with Ethiopian outlets.',
    },
    {
      name: 'Djibouti',
      slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter',
      plugTypes: ['C', 'E'],
      voltage: 220,
      sameAsSubject: 'identical',
      adapterNote: 'Djibouti uses the same C/E system at the same voltage. No additional adapter needed.',
    },
    {
      name: 'Somalia',
      slug: 'somalia-electric-plug-types-which-adapter-will-you-need-in-somalia',
      plugTypes: ['C'],
      voltage: 220,
      sameAsSubject: 'compatible',
      adapterNote: 'Somalia uses Type C — works with Ethiopian outlets.',
    },
    {
      name: 'Kenya',
      slug: 'kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya',
      plugTypes: ['G'],
      voltage: 240,
      sameAsSubject: 'different',
      adapterNote: 'Kenya uses British Type G — completely different. You need a separate adapter.',
    },
    {
      name: 'Sudan',
      slug: 'sudan-electric-plug-types-which-adapter-will-you-need-in-sudan',
      plugTypes: ['C', 'D'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'Sudan uses Type C (compatible) and Type D (different). Your Type C devices will work.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'rare',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Addis Ababa\'s international hotels (Sheraton, Hyatt, Radisson Blu near Bole) are modern and reliable. Lodges and guesthouses on the northern historic circuit (Lalibela, Gondar, Axum) may experience power cuts, especially during dry season. Bring a headlamp and portable battery for these destinations.',
  faqs: [
    {
      question: 'Will power outages affect my trip to Lalibela?',
      answer:
        'Possibly. Lalibela and other towns on the historic circuit experience more frequent outages than Addis Ababa. Most mid-range hotels have generator backup, but it may not run 24 hours. A portable battery and a headlamp are essential packing items.',
    },
    {
      question: 'Can I use my European plugs everywhere in Ethiopia?',
      answer:
        'Yes, Type C, E, and F plugs all work in Ethiopian outlets. You will have no issues with standard continental European chargers and devices.',
    },
    {
      question: 'Are there Italian Type L outlets in Ethiopia?',
      answer:
        'Very rarely. A small number of older buildings from the Italian occupation period (1936–1941) may have Type L sockets, but modern construction uses C/E/F exclusively. You almost certainly will not encounter Type L.',
    },
    {
      question: 'Do Ethiopian Airlines flights have USB charging?',
      answer:
        'Most Ethiopian Airlines long-haul aircraft (Boeing 787s, Airbus A350s) have USB ports and power outlets at each seat. Regional flights on smaller aircraft may not. Ethiopian\'s hub at Bole Airport (ADD) has ample charging stations.',
    },
    {
      question: 'Where can I buy an adapter near Bole Airport in Addis Ababa?',
      answer:
        'Sheger Electronics and various small shops along Bole Road sell adapters. The Edna Mall area near Bole also has electronics vendors. Options at the airport itself are limited, so head into the Bole neighborhood if you can.',
    },
  ],
  metaTitle: 'Ethiopia Power Plugs: Types C, E & F — Do You Need an Adapter?',
  metaDescription:
    'Ethiopia uses Type C, E, and F plugs at 220V/50Hz. European travelers are set; US, UK, and Australian visitors need an adapter. Tips for the historic circuit and where to buy.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Kenya', slug: 'kenya-electric-plug-types-will-you-need-an-adapter-traveling-to-kenya' },
    { name: 'Djibouti', slug: 'djibouti-electric-plug-types-do-you-need-to-take-an-adapter' },
    { name: 'Morocco', slug: 'morocco-electric-plug-types-will-you-need-an-adapter-in-morocco' },
    { name: 'Egypt', slug: 'egypt-electric-plug-type-will-you-need-an-adapter-in-egypt' },
  ],
};

export default ethiopia;
