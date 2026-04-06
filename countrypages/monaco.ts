import type { CountryPlugData } from '../types';

const data: CountryPlugData = {
  slug: 'monaco-electric-plug-types-will-you-need-an-adapter-in-monaco',
  name: 'Monaco',
  demonym: 'Monegasque',
  continent: 'Europe',
  region: 'Western Europe',
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
    'Monaco uses the same electrical system as France. Luxury hotels in Monte Carlo universally provide adapters and often have USB-C outlets built into room furnishings.',
  ],
  travelContext:
    'Monaco is a tiny city-state on the French Riviera, entirely surrounded by France. Its electrical system is identical to the French one. Visitors typically arrive via Nice Côte d\'Azur Airport and cross into Monaco by taxi, bus, or train — no adapter change needed between France and Monaco.',
  adapterNeeded: [
    {
      origin: 'US',
      originPlugTypes: 'A, B',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'US flat-prong plugs will not fit Monaco\'s round-pin sockets. An adapter is needed. Luxury hotels often provide them, but bring your own to be safe.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'British three-pin plugs require an adapter. Voltage is the same 230V.',
    },
    {
      origin: 'EU',
      originPlugTypes: 'C, E, F',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Standard European plugs work throughout Monaco. Same system as France.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'Australian plugs need an adapter. Voltage is compatible at 230V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Carrefour Monaco',
      type: 'supermarket',
      city: 'Monaco',
      priceRange: '€5–€12',
      note: 'Supermarket in the Fontvieille shopping area with a basic electronics section.',
    },
    {
      name: 'FNAC Nice',
      type: 'electronics',
      city: 'Nice',
      priceRange: '€8–€20',
      note: 'Major French electronics and media retailer in nearby Nice — 20 minutes by train.',
    },
    {
      name: 'Hotel concierge',
      type: 'hotel',
      city: 'Monaco',
      priceRange: 'Free (loaner)',
      note: 'Most luxury hotels in Monte Carlo lend adapters at no charge. Ask at reception or contact the concierge.',
    },
  ],
  airportName: 'Nice Côte d\'Azur Airport',
  airportCode: 'NCE',
  neighbors: [
    {
      name: 'France',
      slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris',
      plugTypes: ['C', 'E'],
      voltage: 230,
      sameAsSubject: 'identical',
      adapterNote: 'Identical system — Monaco and France share the same outlets.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Monaco\'s hotels skew heavily toward luxury and typically provide adapters as a standard amenity. Many rooms in top-tier properties like the Hôtel de Paris and the Fairmont feature built-in USB-A and USB-C ports. Even more modest accommodations maintain high standards given Monaco\'s overall wealth.',
  faqs: [
    {
      question: 'Does Monaco use the same plugs as France?',
      answer:
        'Yes, exactly. Monaco uses Types C and E at 230V/50Hz — identical to France. If you have an adapter for France, it works in Monaco and vice versa.',
    },
    {
      question: 'Will my Monaco hotel provide an adapter?',
      answer:
        'Almost certainly, if you\'re staying at one of Monaco\'s luxury hotels. They cater to an international clientele and routinely stock adapters. Ask the concierge or reception.',
    },
    {
      question: 'Where is the nearest airport to Monaco?',
      answer:
        'Monaco has no airport of its own. The nearest is Nice Côte d\'Azur (NCE), about 30 km away. A helicopter shuttle connects the airport to Monaco in 7 minutes, or you can take a 20-minute train ride.',
    },
    {
      question: 'Can I buy electronics in Monaco itself, or should I shop in Nice?',
      answer:
        'Monaco has limited retail for electronics. Carrefour in Fontvieille has basics, but for a wider selection of adapters and tech accessories, FNAC in Nice is your best bet — just a short train ride away.',
    },
  ],
  metaTitle: 'Monaco Power Plugs — Types C & E | Same as France | Adapter Guide',
  metaDescription:
    'Monaco uses the same Type C and Type E plugs as France at 230V/50Hz. US and UK travelers need an adapter. Luxury hotels typically provide them.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'France', slug: 'france-electric-plug-type-will-you-need-an-adapter-in-paris' },
    { name: 'Italy', slug: 'italy-electric-plug-types-which-outlets-they-use-in-italy-adapters' },
    { name: 'Spain', slug: 'spain-electric-plug-types-will-you-need-an-adapter-for-spain' },
  ],
};

export default data;
