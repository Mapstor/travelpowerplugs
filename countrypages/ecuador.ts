import { CountryPlugData } from '../types';

const ecuador: CountryPlugData = {
  slug: 'ecuador-electric-plug-type-will-you-need-an-adapter',
  name: 'Ecuador',
  demonym: 'Ecuadorian',
  continent: 'South America',
  region: 'Western South America',
  voltage: 120,
  frequency: 60,
  complexityTier: 'simple',
  plugTypes: [
    {
      id: 'type-a',
      name: 'Type A',
      subtitle: 'US ungrounded',
      pins: 2,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: false,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.0,
      bodyHeight: 0.7,
      bodyCornerRadius: 0.15,
      noseRadius: 0.35,
      recessRadius: 0.85,
      faceplateSize: 2.5,
    },
    {
      id: 'type-b',
      name: 'Type B',
      subtitle: 'US grounded',
      pins: 3,
      pinShape: 'flat',
      pinDiameter: 6.35,
      pinSpacing: 12.7,
      ratedAmps: 15,
      grounded: true,
      hasGroundClips: false,
      pinRadius: 0.05,
      bodyWidth: 1.2,
      bodyHeight: 0.9,
      bodyCornerRadius: 0.15,
      noseRadius: 0.4,
      recessRadius: 0.95,
      faceplateSize: 2.7,
    },
  ],
  quirks: [
    'Ecuador\'s electrical system is identical to the US — 120V, 60Hz, Type A/B plugs. The Galápagos Islands use the same system as the mainland, though some eco-lodges rely on solar power with limited charging windows.',
  ],
  travelContext:
    'Ecuador packs an extraordinary range of landscapes into a small country — the Andes, the Amazon, the Pacific coast, and the Galápagos Islands. Quito and Guayaquil have fully modern electrical infrastructure. Galápagos lodges and Amazon eco-lodges generally have power, though some use solar with limited charging hours.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Ecuador uses the same Type A/B plugs at 120V/60Hz — identical to the US and Canada. No adapter or converter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. UK electronics are dual-voltage, so no converter is necessary.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European round-pin plugs won\'t fit Ecuadorian flat-pin outlets. You\'ll need an adapter. Check that your devices support 120V — many European appliances are designed for 220–240V only.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. You\'ll need an adapter, and Australian devices designed for 230V may not work properly on 120V without a converter.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Comandato',
      type: 'electronics',
      city: 'Quito',
      priceRange: '$5–$15 USD',
      note: 'Ecuador\'s leading electronics chain with stores in major cities.',
    },
    {
      name: 'La Ganga',
      type: 'electronics',
      priceRange: '$4–$12 USD',
      note: 'Budget electronics retailer with adapter selections.',
    },
    {
      name: 'De Prati',
      type: 'electronics',
      city: 'Guayaquil',
      priceRange: '$6–$15 USD',
      note: 'Department store chain with electronics sections.',
    },
    {
      name: 'Supermaxi',
      type: 'supermarket',
      priceRange: '$3–$10 USD',
      note: 'Ecuador\'s main supermarket chain; some locations carry adapters.',
    },
  ],
  airportName: 'Quito Mariscal Sucre International Airport',
  airportCode: 'UIO',
  neighbors: [
    {
      name: 'Colombia',
      slug: 'colombia-electric-plug-types-do-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 110,
      sameAsSubject: 'identical',
      adapterNote: 'Same plug types and nearly identical voltage. No adapter needed.',
    },
    {
      name: 'Peru',
      slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru',
      plugTypes: ['A', 'B', 'C'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Peru has the same plug shapes but runs on 220V — nearly double Ecuador\'s voltage. Check that your devices are dual-voltage before crossing the border.',
    },
  ],
  hotelAdapterAvailability: 'rare',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'sometimes',
  accommodationNote:
    'Hotels in Quito and Guayaquil have standard US-style outlets throughout. Galápagos lodges have normal power but some budget options or liveaboard boats may have limited outlets. Amazon lodges near Tena or Coca may run on solar or generator power with restricted charging times — bring a portable battery.',
  faqs: [
    {
      question: 'Do I need an adapter for Ecuador if I\'m from the US?',
      answer:
        'No. Ecuador uses the same Type A/B plugs and 120V/60Hz electricity as the United States. Everything works the same as at home.',
    },
    {
      question: 'Does the Galápagos Islands have different plugs than mainland Ecuador?',
      answer:
        'No, the Galápagos uses the same Type A/B outlets and 120V electricity as the Ecuadorian mainland. Some eco-lodges use solar power with limited charging windows, but the plugs and voltage are identical.',
    },
    {
      question: 'Can I charge my European devices in Ecuador?',
      answer:
        'You\'ll need a plug adapter since European round pins don\'t fit Ecuadorian flat-pin outlets. Also check voltage — if your device only supports 220–240V, it won\'t work on Ecuador\'s 120V without a step-up converter. Most modern chargers are dual-voltage (100–240V) and will be fine with just an adapter.',
    },
    {
      question: 'Is the power reliable in Ecuador\'s Amazon lodges?',
      answer:
        'Many Amazon eco-lodges use solar panels or generators and offer electricity during limited hours. Bring a portable power bank to keep devices charged between power windows.',
    },
  ],
  metaTitle:
    'Ecuador Plug Types & Adapter Guide — Type A/B, 120V, Same as the US',
  metaDescription:
    'Ecuador uses Type A and B plugs at 120V/60Hz — identical to the US. Find out if you need an adapter, including Galápagos info, and where to buy adapters locally.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Colombia', slug: 'colombia-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Peru', slug: 'peru-electric-plug-types-will-you-need-an-adapter-for-peru' },
    { name: 'Costa Rica', slug: 'costa-rica-electric-plug-types-do-you-need-an-adapter' },
    { name: 'Panama', slug: 'panama-electric-plug-types-will-you-need-an-adapter-for-panama' },
  ],
};

export default ecuador;
