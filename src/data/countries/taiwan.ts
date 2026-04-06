import type { CountryPlugData } from '@/types';

const taiwan: CountryPlugData = {
  slug: 'taiwan-electric-plug-types-which-adaptor-you-need-for-taiwan',
  name: 'Taiwan',
  demonym: 'Taiwanese',
  continent: 'Asia',
  region: 'East Asia',
  voltage: 110,
  frequency: 60,
  complexityTier: 'moderate',
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
    'Identical to the US/Japan system — 110V with Type A/B flat-pin plugs. US travelers need no adapter at all. European, UK, and Australian travelers need both an adapter and should check voltage ratings on their devices.',
  ],
  travelContext:
    'Taiwan is one of the easiest destinations in Asia for American and Canadian travelers — the outlets and voltage are identical to North America. Everyone else needs an adapter, and Europeans accustomed to 230V should double-check their device labels. Taiwan\'s electrical infrastructure is excellent, with no power reliability concerns. Convenience stores (7-Eleven and FamilyMart on literally every block) sell basic adapters.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'No adapter or converter needed. Taiwan uses the same Type A/B plugs and 110V voltage as the US and Canada. Everything works directly.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'British Type G plugs do not fit. You need an adapter. Taiwan runs at 110V — check your device labels. Most phone chargers and laptops handle 100–240V, but hair dryers and other appliances may not.',
    },
    {
      origin: 'Europe (Schuko)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European round-pin plugs do not fit Taiwanese flat-pin outlets. You need an adapter. Check voltage — Taiwan uses 110V, not 230V. Dual-voltage devices are fine; single-voltage 230V devices will underperform or not work.',
    },
    {
      origin: 'Australia / NZ',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs do not fit. You need an adapter, and check voltage since Taiwan runs at 110V rather than 240V.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Guanghua Digital Plaza',
      type: 'electronics',
      city: 'Taipei',
      priceRange: 'NT$50–NT$300',
      note: 'Taipei\'s electronics district. Every type of adapter and cable available.',
    },
    {
      name: '7-Eleven',
      type: 'convenience',
      priceRange: 'NT$50–NT$200',
      note: 'Over 6,000 locations across Taiwan. Many sell basic adapters and USB cables.',
    },
    {
      name: 'FamilyMart',
      type: 'convenience',
      priceRange: 'NT$50–NT$200',
      note: 'Another ubiquitous convenience chain that carries simple adapters.',
    },
    {
      name: 'Carrefour',
      type: 'supermarket',
      priceRange: 'NT$80–NT$400',
      note: 'Hypermarkets with electronics sections. Good for universal adapters.',
    },
    {
      name: 'Taoyuan Airport shops',
      type: 'airport',
      city: 'Taipei',
      priceRange: 'NT$150–NT$500',
      note: 'Electronics kiosks in arrivals at TPE carry travel adapters.',
    },
  ],
  airportName: 'Taiwan Taoyuan International Airport',
  airportCode: 'TPE',
  neighbors: [
    {
      name: 'Japan',
      slug: 'japan-electric-plug-types-will-you-need-an-adapter-probably-yes',
      plugTypes: ['A', 'B'],
      voltage: 100,
      sameAsSubject: 'mostly',
      adapterNote: 'Japan uses the same plug types but at 100V instead of 110V. Most devices handle both fine.',
    },
    {
      name: 'China',
      slug: '3-electric-plug-types-in-china-will-you-need-an-adapter',
      plugTypes: ['A', 'C', 'I'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'China shares Type A but runs at 220V — double the Taiwanese voltage.',
    },
    {
      name: 'Philippines',
      slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines',
      plugTypes: ['A', 'B', 'C'],
      voltage: 220,
      sameAsSubject: 'partially',
      adapterNote: 'Philippines shares Type A/B plugs but runs at 220V. Your plug fits but the voltage is different.',
    },
  ],
  hotelAdapterAvailability: 'common',
  hotelUSBPorts: 'common',
  hotelHairDryers: 'standard',
  accommodationNote:
    'Taiwanese hotels are consistently well-equipped. Most provide hair dryers, USB charging ports, and often have universal outlets or adapters at reception. Even budget hostels in Taipei have reliable power and plenty of outlets. Taiwan\'s hospitality infrastructure is among the best in Asia.',
  faqs: [
    {
      question: 'Do US travelers need an adapter for Taiwan?',
      answer:
        'No. Taiwan uses the exact same Type A/B plugs and 110V voltage as the United States and Canada. Your devices work directly without any adapter or converter.',
    },
    {
      question: 'Can I use my European devices in Taiwan?',
      answer:
        'You need a plug adapter (round to flat pins) and should check voltage. Taiwan uses 110V, not 230V. Dual-voltage devices (100–240V on the label) just need the adapter. Single-voltage 230V devices will not work properly and may need a converter.',
    },
    {
      question: 'Is Taiwan the same voltage as Japan?',
      answer:
        'Close but not identical. Taiwan uses 110V at 60Hz, Japan uses 100V at 50/60Hz. The difference is small enough that virtually all devices designed for one country work fine in the other.',
    },
    {
      question: 'Where can I buy an adapter in Taipei?',
      answer:
        'The easiest option is any 7-Eleven or FamilyMart — there is one on nearly every block and many carry basic adapters. For more selection, head to Guanghua Digital Plaza near Zhongxiao Xinsheng MRT station. Carrefour hypermarkets also have electronics sections.',
    },
    {
      question: 'Is Taiwan\'s power grid reliable?',
      answer:
        'Extremely reliable. Taiwan has world-class electrical infrastructure with very rare outages. You do not need to worry about power cuts or carry a backup battery for this reason.',
    },
  ],
  metaTitle: 'Taiwan Power Plugs: Types A & B at 110V — Same as the US',
  metaDescription:
    'Taiwan uses US-style Type A/B plugs at 110V/60Hz. US travelers need nothing. Europeans and Australians need an adapter and should check voltage. Here\'s the full guide.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Japan', slug: 'japan-electric-plug-types-will-you-need-an-adapter-probably-yes' },
    { name: 'South Korea', slug: 'south-korea-electric-plug-types-will-you-need-an-adapter-in-seoul' },
    { name: 'Philippines', slug: 'philippines-electric-plug-types-will-you-need-an-adapter-for-philippines' },
    { name: 'China', slug: '3-electric-plug-types-in-china-will-you-need-an-adapter' },
  ],
};

export default taiwan;
