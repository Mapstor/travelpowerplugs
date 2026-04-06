import type { CountryPlugData } from '@/types';

const ireland: CountryPlugData = {
  slug: 'ireland-electric-plug-types-will-you-need-an-adapter-for-ireland',
  name: 'Ireland',
  demonym: 'Irish',
  continent: 'Europe',
  region: 'Northern Europe',
  voltage: 230,
  frequency: 50,
  complexityTier: 'moderate',
  plugTypes: [
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
    'Ireland uses the exact same Type G plug as the United Kingdom, despite being a separate country. If you have a UK adapter, it works in Ireland and vice versa.',
    'Northern Ireland (part of the UK) and the Republic of Ireland have identical electrical systems — no adapter is needed when crossing the border, which is useful since many visitors explore both.',
  ],
  travelContext:
    'Ireland attracts visitors for its dramatic coastline, literary heritage, pubs, and cultural festivals. Dublin is the main gateway, but many travelers head west to Galway, the Ring of Kerry, and the Cliffs of Moher. The electrical system is modern and reliable throughout the country. UK visitors feel right at home electrically, while everyone else needs the same Type G adapter they\'d bring to London.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US/Canadian plugs are completely incompatible with Ireland\'s Type G outlets. You need an adapter. Modern US electronics are dual-voltage, so no converter is required.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Ireland uses the exact same Type G plug as the UK. No adapter needed — your devices plug in directly.',
    },
    {
      origin: 'Europe (Type C/F)',
      originPlugTypes: 'C, F',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'European round-pin plugs don\'t fit Ireland\'s rectangular-pin Type G outlets. You need an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'Australia / New Zealand',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Type I plugs won\'t fit Irish sockets. Bring an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Currys Ireland',
      type: 'electronics',
      note: 'Ireland\'s main electronics retailer. Stores in Dublin, Cork, Galway, and other cities.',
    },
    {
      name: 'Argos Ireland',
      type: 'electronics',
      note: 'Catalogue-style retailer found inside some Dunnes Stores and standalone locations. Stocks travel adapters.',
    },
    {
      name: 'Dunnes Stores',
      type: 'supermarket',
      note: 'Major Irish department store/supermarket chain. The household section in larger locations carries basic adapters.',
    },
    {
      name: 'Tesco Ireland',
      type: 'supermarket',
      note: 'Supermarket chain with locations across Ireland. Some carry travel adapters near the electronics or travel section.',
    },
    {
      name: 'Dublin Airport (DUB)',
      type: 'airport',
      city: 'Dublin',
      priceRange: '€10–20',
      note: 'Electronics shops in both Terminal 1 and Terminal 2 sell Type G adapters and universal adapters.',
    },
  ],
  airportName: 'Dublin Airport',
  airportCode: 'DUB',
  neighbors: [
    {
      name: 'United Kingdom',
      slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'The UK uses the exact same Type G system — no adapter needed. This includes Northern Ireland, which shares a border with the Republic.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Irish hotels and B&Bs almost universally provide hair dryers and often have adapters available at reception, especially in tourist-heavy areas like Dublin and Galway. Newer hotels increasingly include USB charging ports. Irish outlets have safety shutters — you may need to firmly push the adapter\'s top (earth) pin in first to open the shutters before the lower pins engage.',
  faqs: [
    {
      question: 'Do I need a power adapter for Ireland?',
      answer:
        'If you\'re from the UK, no — Ireland uses the identical Type G plug. Everyone else (US, European, Australian visitors) needs an adapter.',
    },
    {
      question: 'What plug type does Ireland use?',
      answer:
        'Ireland uses Type G — three rectangular pins in a triangular arrangement. It\'s the same plug used in the UK, and the outlets have built-in safety shutters.',
    },
    {
      question: 'Is the adapter the same for Ireland and the UK?',
      answer:
        'Yes, exactly the same. Type G is used in both countries. If you\'re visiting London and Dublin on the same trip, you only need one adapter.',
    },
    {
      question: 'Do I need a different adapter for Northern Ireland?',
      answer:
        'No. Northern Ireland (part of the UK) and the Republic of Ireland use identical Type G outlets at 230V/50Hz. No adapter change needed when crossing the border.',
    },
    {
      question: 'Why won\'t my adapter go into the Irish outlet?',
      answer:
        'Irish outlets have safety shutters that block the two lower holes. You need to insert the top (earth/ground) pin first — this opens the shutters. Some adapters have a dummy earth pin for exactly this purpose.',
    },
    {
      question: 'Where can I buy an adapter in Dublin?',
      answer:
        'Currys is the main electronics chain. Dunnes Stores and Tesco carry basic adapters too. Dublin Airport has them in the arrivals hall if you need one immediately.',
    },
  ],
  metaTitle: 'Ireland Power Plugs — Do You Need an Adapter? (Type G, Same as UK)',
  metaDescription:
    'Ireland uses Type G plugs (same as the UK) at 230V/50Hz. Find out if you need an adapter, where to buy one in Dublin, and tips for Irish outlet safety shutters.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk' },
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
  ],
};

export default ireland;
