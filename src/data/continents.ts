export interface ContinentData {
  slug: string;
  name: string;
  description: string;
  countries: number;
  plugTypes: string[];
  commonVoltages: string[];
  keyInfo: string[];
}

export const CONTINENTS: ContinentData[] = [
  {
    slug: 'africa',
    name: 'Africa',
    description: 'Africa has diverse plug standards across its 54 countries. Most use Type C, D, E, F, G, or M plugs.',
    countries: 54,
    plugTypes: ['C', 'D', 'E', 'F', 'G', 'M'],
    commonVoltages: ['220-240V'],
    keyInfo: [
      'South Africa uses unique Type M plugs',
      'North African countries typically use European Type C/E/F',
      'Many East African nations use British Type G plugs',
      'West Africa has mixed standards from colonial influences'
    ]
  },
  {
    slug: 'asia',
    name: 'Asia',
    description: 'Asia features the most varied plug types globally, from Type A/B in Japan to Type G in Southeast Asia.',
    countries: 48,
    plugTypes: ['A', 'B', 'C', 'D', 'F', 'G', 'I', 'M'],
    commonVoltages: ['100V', '220-240V'],
    keyInfo: [
      'Japan uses 100V with Type A/B plugs',
      'China uses Type A, C, and I plugs',
      'India primarily uses Type C, D, and M',
      'Southeast Asia commonly uses Type G (British standard)'
    ]
  },
  {
    slug: 'europe',
    name: 'Europe',
    description: 'Europe is largely standardized on Type C/E/F plugs with 230V, though the UK and Ireland use Type G.',
    countries: 44,
    plugTypes: ['C', 'E', 'F', 'G', 'J', 'K', 'L'],
    commonVoltages: ['230V'],
    keyInfo: [
      'Continental Europe uses Type C/E/F (Europlug/Schuko)',
      'UK and Ireland use Type G plugs',
      'Switzerland has unique Type J plugs',
      'Italy uses Type L alongside Type C/F'
    ]
  },
  {
    slug: 'north-america',
    name: 'North America',
    description: 'North America primarily uses Type A/B plugs with 120V, the lowest common voltage worldwide.',
    countries: 23,
    plugTypes: ['A', 'B'],
    commonVoltages: ['120V'],
    keyInfo: [
      'USA, Canada, and Mexico all use Type A/B',
      'Central America mostly uses Type A/B',
      'Caribbean islands vary between American and European standards',
      '120V/60Hz is standard across the continent'
    ]
  },
  {
    slug: 'south-america',
    name: 'South America',
    description: 'South America uses various plug types, with Brazil having its unique Type N standard.',
    countries: 12,
    plugTypes: ['A', 'B', 'C', 'I', 'L', 'N'],
    commonVoltages: ['110-127V', '220-240V'],
    keyInfo: [
      'Brazil uses unique Type N plugs',
      'Argentina and Uruguay use Type C/I',
      'Colombia and Venezuela use Type A/B',
      'Voltage varies significantly by country'
    ]
  },
  {
    slug: 'oceania',
    name: 'Oceania',
    description: 'Oceania primarily uses Type I plugs (Australian/New Zealand standard) with 230-240V.',
    countries: 14,
    plugTypes: ['I'],
    commonVoltages: ['230-240V'],
    keyInfo: [
      'Australia and New Zealand use Type I',
      'Pacific islands mostly follow Australian standards',
      'Some islands use American Type A/B',
      'Consistent 230-240V across the region'
    ]
  },
  {
    slug: 'antarctica',
    name: 'Antarctica',
    description: 'Antarctica has no standard plug type. Research stations use their home country\'s standards.',
    countries: 0,
    plugTypes: ['Various'],
    commonVoltages: ['Various'],
    keyInfo: [
      'Each research station uses its country\'s standard',
      'No permanent population or infrastructure',
      'Generators provide power at research bases',
      'Plug types depend on the operating country'
    ]
  }
];