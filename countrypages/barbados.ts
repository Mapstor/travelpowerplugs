import { CountryPlugData } from '../types';

const barbados: CountryPlugData = {
  slug: 'barbados-electric-plug-types-do-you-need-an-adapter',
  name: 'Barbados',
  demonym: 'Barbadian',
  continent: 'North America',
  region: 'Caribbean',
  voltage: 115,
  frequency: 50,
  frequencyNote: 'Barbados runs at 50Hz rather than the 60Hz found in the US and most of the Americas. This difference doesn\'t affect chargers, laptops, or typical travel electronics.',
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
    'Barbados uses US-style Type A/B plugs at 115V but 50Hz (not 60Hz) — the same frequency quirk as Jamaica. This has no practical impact on travel electronics. British visitors make up a large share of Barbados tourism and need a Type G to Type A/B adapter.',
  ],
  travelContext:
    'Barbados is a popular destination for both American and British travelers, known for its west coast beaches, Bridgetown\'s colonial heritage (a UNESCO World Heritage Site), and the rugged east coast surf. The island is well-developed with reliable infrastructure throughout — there are no remote off-grid areas to worry about.',
  adapterNeeded: [
    {
      origin: 'US / Canada',
      originPlugTypes: 'A, B',
      adapterNeeded: false,
      converterNeeded: false,
      notes:
        'Same Type A/B plugs at 115V. The 50Hz frequency is imperceptible for all travel electronics. No adapter needed.',
    },
    {
      origin: 'UK',
      originPlugTypes: 'G',
      adapterNeeded: true,
      converterNeeded: false,
      notes:
        'You\'ll need a Type G to Type A/B adapter. Barbados uses US-style outlets despite its British heritage. UK devices are dual-voltage and work fine on 115V.',
    },
    {
      origin: 'Europe (CEE 7)',
      originPlugTypes: 'C, E, F',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'European plugs don\'t fit. You need an adapter, and should check that your devices handle 115V.',
    },
    {
      origin: 'Australia',
      originPlugTypes: 'I',
      adapterNeeded: true,
      converterNeeded: 'maybe',
      notes:
        'Australian plugs won\'t fit. You need an adapter and should check voltage compatibility.',
    },
  ],
  localPurchaseOptions: [
    {
      name: 'Courts',
      type: 'electronics',
      city: 'Bridgetown',
      priceRange: '$5–$15 USD',
      note: 'Caribbean electronics chain with a Bridgetown location.',
    },
    {
      name: 'Unicomer',
      type: 'electronics',
      priceRange: '$5–$12 USD',
      note: 'Electronics and appliance retailer.',
    },
    {
      name: 'Cave Shepherd',
      type: 'electronics',
      city: 'Bridgetown',
      priceRange: '$8–$20 USD',
      note: 'Barbados\' oldest department store on Broad Street; carries travel accessories.',
    },
  ],
  airportName: 'Grantley Adams International Airport',
  airportCode: 'BGI',
  neighbors: [
    {
      name: 'Saint Lucia',
      slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need',
      plugTypes: ['G'],
      voltage: 230,
      sameAsSubject: 'different',
      adapterNote: 'Saint Lucia uses British Type G plugs at 230V — completely different system.',
    },
    {
      name: 'Saint Vincent And Grenadines',
      slug: 'saint-vincent-and-the-grenadines-electric-plug-types-adapter-a-must',
      plugTypes: ['A', 'B', 'G'],
      voltage: 230,
      sameAsSubject: 'partially',
      adapterNote: 'SVG has Type A/B outlets but at 230V — a significant voltage difference from Barbados.',
    },
    {
      name: 'Trinidad And Tobago',
      slug: 'trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter',
      plugTypes: ['A', 'B'],
      voltage: 115,
      sameAsSubject: 'compatible',
      adapterNote: 'Same plugs and voltage. Trinidad runs at 60Hz vs Barbados\' 50Hz, but this doesn\'t matter for travelers.',
    },
  ],
  hotelAdapterAvailability: 'sometimes',
  hotelUSBPorts: 'sometimes',
  hotelHairDryers: 'common',
  accommodationNote:
    'Barbados is a compact, well-developed island. Hotels and villas along the west coast (Platinum Coast) and south coast are modern and well-equipped. Many upscale properties catering to British guests keep Type G adapters at the front desk. Budget guesthouses may have fewer outlets but the same plug type.',
  faqs: [
    {
      question: 'Do I need an adapter for Barbados coming from the US?',
      answer:
        'No. Barbados uses the same Type A/B flat-pin plugs at 115V. The frequency is 50Hz instead of 60Hz, but this makes no difference for phones, laptops, cameras, or any modern electronics.',
    },
    {
      question: 'Do British travelers need an adapter for Barbados?',
      answer:
        'Yes. Despite Barbados\' strong British ties and Commonwealth membership, the island uses American-style Type A/B outlets — not UK Type G. You\'ll need a Type G to Type A/B adapter. Many hotels popular with British guests keep adapters available, but bring your own to be safe.',
    },
    {
      question: 'Is the power reliable across Barbados?',
      answer:
        'Yes. Barbados is a small, well-developed island with reliable power across the entire country. Tropical storms may cause brief outages, but hotels typically have backup systems.',
    },
    {
      question: 'Can I buy an adapter at the Barbados airport?',
      answer:
        'There are limited retail options at Grantley Adams International Airport. You\'re better off buying an adapter before your trip or trying Cave Shepherd or Courts in Bridgetown.',
    },
  ],
  metaTitle:
    'Barbados Plug Types & Adapter Guide — Type A/B, 115V/50Hz',
  metaDescription:
    'Barbados uses Type A and B plugs at 115V/50Hz — US-style outlets despite British heritage. Learn what adapter UK and European visitors need, and local buying options.',
  lastUpdated: '2025-06-01',
  relatedCountries: [
    { name: 'Trinidad And Tobago', slug: 'trinidad-and-tobago-electric-plug-types-will-you-need-an-adapter' },
    { name: 'Jamaica', slug: 'jamaica-electric-plug-types-will-you-need-an-adapter-for-charging' },
    { name: 'Saint Lucia', slug: 'saint-lucia-electric-plug-types-which-adapter-will-you-need' },
    { name: 'Dominican Republic', slug: 'dominican-republic-electric-plug-types-do-you-need-an-adapter' },
  ],
};

export default barbados;
