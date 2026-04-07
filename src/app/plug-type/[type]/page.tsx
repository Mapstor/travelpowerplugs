import Link from 'next/link';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { COUNTRIES } from '@/data/countries';
import { plugTypeDetails, plugTypeFacts } from '@/data/plugTypeDetails';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import { getCountryPlugData } from '@/lib/compatibility';

// Dynamic import for the map component
const PlugTypeWorldMap = dynamic(
  () => import('@/components/map/PlugTypeWorldMap'),
  { 
    loading: () => <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
  }
);

// Animated plug display component
const HTMLAnimatedPlug = dynamic(
  () => import('@/components/plugs/HTMLAnimatedPlug'),
  { 
    loading: () => <div className="h-[240px] bg-gray-100 animate-pulse rounded-lg" />
  }
);

const plugTypes = {
  'type-a': {
    type: 'A',
    name: 'Type A',
    title: 'Type A Electric Plug - The Original American Standard (NEMA 1-15)',
    description: 'Complete guide to Type A plugs: two flat parallel pins, used in 44 countries. History, specifications, safety features, and global compatibility map.',
    image: '/images/plugs/type-a-electric-plug-and-socket.webp',
    altNames: ['NEMA 1-15', 'North American 2-pin', 'Japanese 2-pin', 'Ungrounded US plug'],
    specs: {
      pins: '2 flat parallel pins',
      voltage: '100-127V',
      current: '15A',
      grounding: 'No',
      compatibility: 'Works in Type B sockets'
    },
    quickFacts: plugTypeFacts['type-a'] || [],
    relatedTypes: ['type-b', 'type-c', 'type-i']
  },
  'type-b': {
    type: 'B',
    name: 'Type B',
    title: 'Type B Electric Plug - Grounded North American Standard (NEMA 5-15)',
    description: 'Comprehensive Type B plug guide: grounded 3-pin design with two flat pins plus round grounding pin. Used in USA, Canada, Mexico, and 20+ countries worldwide.',
    image: '/images/plugs/type-b-electric-plug-and-socket.webp',
    altNames: ['NEMA 5-15', 'North American 3-pin', 'Grounded US plug', 'Edison plug'],
    specs: {
      pins: '2 flat pins + 1 round grounding pin',
      voltage: '100-127V', 
      current: '15A',
      grounding: 'Yes',
      compatibility: 'Accepts Type A plugs'
    },
    quickFacts: plugTypeFacts['type-b'] || [],
    relatedTypes: ['type-a', 'type-g', 'type-i']
  },
  'type-c': {
    type: 'C',
    name: 'Type C',
    title: 'Type C Electric Plug - The Universal Europlug (CEE 7/16)',
    description: 'Type C Europlug complete guide: most widely used international plug with two round pins. Compatible with 130+ countries across Europe, Asia, Africa, and South America.',
    image: '/images/plugs/type-c-electric-plug-and-socket.webp',
    altNames: ['Europlug', 'CEE 7/16', 'European 2-pin', 'Continental plug'],
    specs: {
      pins: '2 round pins (4.0-4.8mm)',
      voltage: '220-240V',
      current: '2.5A',
      grounding: 'No',
      compatibility: 'Works in E, F, J, K, L sockets'
    },
    quickFacts: plugTypeFacts['type-c'] || [],
    relatedTypes: ['type-e', 'type-f', 'type-j']
  },
  'type-g': {
    type: 'G',
    name: 'Type G',
    title: 'Type G Electric Plug - British Standard with Built-in Fuse (BS 1363)',
    description: 'Type G British plug complete guide: the world\'s safest plug design with three rectangular pins and integrated fuse. Used in UK, Ireland, Singapore, Malaysia, and 50+ countries.',
    image: '/images/plugs/type-g-electric-plug-and-socket.webp',
    altNames: ['BS 1363', 'British 3-pin', 'UK plug', '13 amp plug'],
    specs: {
      pins: '3 rectangular pins',
      voltage: '220-240V',
      current: '13A',
      grounding: 'Yes',
      compatibility: 'None'
    },
    quickFacts: plugTypeFacts['type-g'] || [],
    relatedTypes: ['type-d', 'type-m', 'type-i']
  },
  'type-d': {
    type: 'D',
    name: 'Type D',
    title: 'Type D Electric Plug - BS 546 Round Pin (India Standard)',
    description: 'Type D plug complete guide: British colonial legacy with three round pins. Standard in India, Pakistan, Bangladesh, Sri Lanka, and Nepal. Used by over 1.3 billion people.',
    image: '/images/plugs/type-d-electric-plug-and-socket.webp',
    altNames: ['BS 546', 'Indian 3-pin', 'Old British standard', '5A/15A plug'],
    specs: {
      pins: '3 round pins (triangular)',
      voltage: '220-240V',
      current: '5A/15A',
      grounding: 'Yes',
      compatibility: 'None'
    },
    quickFacts: plugTypeFacts['type-d'] || [],
    relatedTypes: ['type-m', 'type-g', 'type-c']
  },
  'type-e': {
    type: 'E',
    name: 'Type E',
    title: 'Type E Electric Plug - French Standard (CEE 7/5)',
    description: 'Type E French plug complete guide: two round pins with ground pin receptor. Used in France, Belgium, Poland, Czech Republic, Slovakia, and former French colonies.',
    image: '/images/plugs/type-e-electric-plug-and-socket.webp',
    altNames: ['CEE 7/5', 'French 2-pin', 'French standard', 'Socket with earth pin'],
    specs: {
      pins: '2 round pins + ground pin receptor',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes (pin in socket)',
      compatibility: 'Accepts C and E/F hybrid'
    },
    quickFacts: plugTypeFacts['type-e'] || [],
    relatedTypes: ['type-f', 'type-c', 'type-k']
  },
  'type-f': {
    type: 'F',
    name: 'Type F',
    title: 'Type F Electric Plug - Schuko German Standard (CEE 7/4)',
    description: 'Type F Schuko plug complete guide: German standard with two round pins and side grounding clips. Used by 400+ million Europeans from Portugal to Russia.',
    image: '/images/plugs/type-f-electric-plug-and-socket.webp',
    altNames: ['Schuko', 'CEE 7/4', 'German standard', 'Schutzkontakt'],
    specs: {
      pins: '2 round pins + side clips',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes (side clips)',
      compatibility: 'Accepts C and E/F hybrid'
    },
    quickFacts: plugTypeFacts['type-f'] || [],
    relatedTypes: ['type-e', 'type-c', 'type-k']
  },
  'type-h': {
    type: 'H',
    name: 'Type H',
    title: 'Type H Electric Plug - Israeli Standard (SI 32)',
    description: 'Type H Israeli plug complete guide: unique three-pin triangular configuration. Exclusive to Israel and Palestinian territories, symbol of technical independence.',
    image: '/images/plugs/type-h-electric-plug-and-socket.webp',
    altNames: ['SI 32', 'Israeli 3-pin', 'Israel standard'],
    specs: {
      pins: '3 round pins (triangular)',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes',
      compatibility: 'Modern sockets accept C'
    },
    quickFacts: plugTypeFacts['type-h'] || [],
    relatedTypes: ['type-c', 'type-j', 'type-n']
  },
  'type-i': {
    type: 'I',
    name: 'Type I',
    title: 'Type I Electric Plug - Australian/Chinese Standard (AS/NZS 3112)',
    description: 'Type I plug complete guide: distinctive V-shaped flat pins. Used in Australia, New Zealand, China, and Argentina. Mandatory pin insulation since 2005.',
    image: '/images/plugs/type-i-electric-plug-and-socket.webp',
    altNames: ['AS/NZS 3112', 'Australian plug', 'Chinese standard', 'Flat blade V-type'],
    specs: {
      pins: '2/3 flat pins (V-shaped)',
      voltage: '220-240V',
      current: '10A/15A',
      grounding: 'Optional',
      compatibility: 'None'
    },
    quickFacts: plugTypeFacts['type-i'] || [],
    relatedTypes: ['type-a', 'type-g', 'type-n']
  },
  'type-j': {
    type: 'J',
    name: 'Type J',
    title: 'Type J Electric Plug - Swiss Standard (SEV 1011)',
    description: 'Type J Swiss plug complete guide: compact diamond-shaped three-pin design. Exclusive to Switzerland and Liechtenstein, symbol of Swiss neutrality.',
    image: '/images/plugs/type-j-electric-plug-and-socket.webp',
    altNames: ['SEV 1011', 'Swiss 3-pin', 'T13/T23', 'Swiss standard'],
    specs: {
      pins: '3 round pins (diamond)',
      voltage: '220-240V',
      current: '10A/16A',
      grounding: 'Yes',
      compatibility: 'Accepts C in modern sockets'
    },
    quickFacts: plugTypeFacts['type-j'] || [],
    relatedTypes: ['type-c', 'type-h', 'type-n']
  },
  'type-k': {
    type: 'K',
    name: 'Type K',
    title: 'Type K Electric Plug - Danish Standard (DS 60884-2-D1)',
    description: 'Type K Danish plug complete guide: three round pins with offset ground. Being phased out since 2008. Used in Denmark, Greenland, and Bangladesh.',
    image: '/images/plugs/type-k-electric-plug-and-socket.webp',
    altNames: ['Danish standard', 'DEMKO plug', 'Denmark 3-pin'],
    specs: {
      pins: '3 round pins (offset ground)',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes',
      compatibility: 'Accepts C'
    },
    quickFacts: plugTypeFacts['type-k'] || [],
    relatedTypes: ['type-e', 'type-f', 'type-c']
  },
  'type-l': {
    type: 'L',
    name: 'Type L',
    title: 'Type L Electric Plug - Italian Standard (CEI 23-16)',
    description: 'Type L Italian plug complete guide: elegant inline three-pin design. Two incompatible versions (10A and 16A). Used in Italy, San Marino, and Vatican City.',
    image: '/images/plugs/type-l-electric-plug-and-socket.webp',
    altNames: ['CEI 23-16', 'Italian 3-pin', 'Italian standard', 'Bipasso'],
    specs: {
      pins: '3 round pins (inline)',
      voltage: '220-240V',
      current: '10A/16A',
      grounding: 'Yes',
      compatibility: 'Accepts C, bipasso accepts both'
    },
    quickFacts: plugTypeFacts['type-l'] || [],
    relatedTypes: ['type-c', 'type-f', 'type-e']
  },
  'type-m': {
    type: 'M',
    name: 'Type M',
    title: 'Type M Electric Plug - South African Standard (SANS 164-1)',
    description: 'Type M plug complete guide: heavy-duty 15-amp British colonial standard. Largest domestic plug pins. Used in South Africa, Namibia, and Swaziland.',
    image: '/images/plugs/type-m-electric-plug-and-socket.webp',
    altNames: ['SANS 164-1', 'BS 546 15A', 'South African plug', 'Large round pin'],
    specs: {
      pins: '3 large round pins',
      voltage: '220-240V',
      current: '15A',
      grounding: 'Yes',
      compatibility: 'None'
    },
    quickFacts: plugTypeFacts['type-m'] || [],
    relatedTypes: ['type-d', 'type-g', 'type-n']
  },
  'type-n': {
    type: 'N',
    name: 'Type N',
    title: 'Type N Electric Plug - Brazilian/IEC Standard (NBR 14136/IEC 60906-1)',
    description: 'Type N plug complete guide: newest major standard, IEC\'s failed universal plug. Mandatory in Brazil since 2010, adopted in South Africa 2013.',
    image: '/images/plugs/type-n-electric-plug-and-socket.webp',
    altNames: ['NBR 14136', 'IEC 60906-1', 'Brazilian standard', 'Universal grounded'],
    specs: {
      pins: '3 round pins (hexagonal)',
      voltage: '220-240V',
      current: '10A/20A',
      grounding: 'Yes',
      compatibility: 'Accepts C'
    },
    quickFacts: plugTypeFacts['type-n'] || [],
    relatedTypes: ['type-c', 'type-j', 'type-h']
  },
  'type-o': {
    type: 'O',
    name: 'Type O',
    title: 'Type O Electric Plug - Thai Standard (TIS 166-2549)',
    description: 'Type O Thai plug complete guide: unique hybrid accepting A, B, and C plugs. Thailand\'s pragmatic solution to electrical chaos. Used only in Thailand.',
    image: '/images/plugs/type-o-electric-plug-and-socket.webp',
    altNames: ['TIS 166-2549', 'Thai standard', 'Thailand plug', 'Universal Thai'],
    specs: {
      pins: '2 flat + 1 round ground pin',
      voltage: '220-240V',
      current: '16A',
      grounding: 'Yes',
      compatibility: 'Accepts A, B, C'
    },
    quickFacts: plugTypeFacts['type-o'] || [],
    relatedTypes: ['type-a', 'type-b', 'type-c']
  }
} as const;

type PlugTypeKey = keyof typeof plugTypes;

interface PageProps {
  params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const plugType = plugTypes[type as PlugTypeKey];
  
  if (!plugType) {
    return { title: 'Plug Type Not Found' };
  }

  return {
    title: plugType.title,
    description: plugType.description,
    openGraph: {
      title: plugType.title,
      description: plugType.description,
      type: 'website',
      images: [plugType.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(plugTypes).map((type) => ({
    type,
  }));
}

export default async function EnhancedPlugTypePage({ params }: PageProps) {
  const { type } = await params;
  const plugType = plugTypes[type as PlugTypeKey];
  const details = plugTypeDetails[type as keyof typeof plugTypeDetails];
  
  if (!plugType) {
    notFound();
  }

  // Find all countries using this plug type
  const countriesUsingType = COUNTRIES.filter(country => 
    country.plugTypes.includes(plugType.type as any)
  ).sort((a, b) => a.name.localeCompare(b.name));

  // Group countries by continent
  const countriesByContinent: { [key: string]: typeof countriesUsingType } = {};
  countriesUsingType.forEach(country => {
    const continent = country.continent;
    if (!countriesByContinent[continent]) {
      countriesByContinent[continent] = [];
    }
    countriesByContinent[continent].push(country);
  });

  // Calculate global statistics
  const totalCountries = COUNTRIES.length;
  const coverage = Math.round((countriesUsingType.length / totalCountries) * 100);

  // Analyze real-world usage patterns using practical data
  const usageAnalysis = () => {
    let primaryUsage = 0;
    let secondaryUsage = 0; 
    let legacyUsage = 0;
    const primaryCountries: string[] = [];
    const secondaryCountries: string[] = [];
    const legacyCountries: string[] = [];

    countriesUsingType.forEach(country => {
      const practicalData = getCountryPlugData(country.iso2);
      if (practicalData) {
        const plugData = practicalData.plugTypes.find(p => p.type === plugType.type);
        if (plugData) {
          switch (plugData.status) {
            case 'primary':
              primaryUsage++;
              primaryCountries.push(country.name);
              break;
            case 'secondary':
              secondaryUsage++;
              secondaryCountries.push(country.name);
              break;
            case 'legacy':
              legacyUsage++;
              legacyCountries.push(country.name);
              break;
          }
        }
      } else {
        // Fallback for countries without practical data - assume secondary
        secondaryUsage++;
        secondaryCountries.push(country.name);
      }
    });

    return {
      primary: { count: primaryUsage, countries: primaryCountries },
      secondary: { count: secondaryUsage, countries: secondaryCountries },
      legacy: { count: legacyUsage, countries: legacyCountries },
      total: countriesUsingType.length
    };
  };

  const realWorldUsage = usageAnalysis();

  return (
    <div className="min-h-screen bg-white">
      <Header showFullNav={true} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Plug Types', href: '/#plug-types' },
              { label: plugType.name }
            ]}
          />
        </div>

        {/* Hero Section with World Map */}
        <div className="mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            {plugType.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {plugType.description}
          </p>
          
          {/* World Map */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <PlugTypeWorldMap plugType={plugType.type} />
          </div>

        </div>

        {/* Interactive Plug Animation - Moved before main content grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Interactive {plugType.name} Plug Animation
          </h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <HTMLAnimatedPlug 
              plugType={plugType.type} 
              width={700} 
              height={240}
            />
          </div>
        </section>

        {/* Key Facts Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Facts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {plugType.quickFacts.map((fact, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Fact #{index + 1}</div>
                <div className="text-sm text-gray-700 leading-relaxed">{fact}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Content */}
          <div>
            {/* History Section */}
            {details && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  History & Development
                </h2>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-4">
                  <div className="font-semibold text-gray-900 mb-2">
                    Invented in {details.history.invented} by {details.history.inventor} ({details.history.country})
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  {details.history.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Specifications */}
            {details && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Detailed Technical Specifications
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Dimensions</h3>
                      <dl className="space-y-2 text-sm">
                        {Object.entries(details.technical.dimensions).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <dt className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </dt>
                            <dd className="text-gray-900 font-medium">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Performance</h3>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Standard:</dt>
                          <dd className="text-gray-900 font-medium">{details.technical.standard}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Max Power:</dt>
                          <dd className="text-gray-900 font-medium">{details.technical.maxPower}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Test Voltage:</dt>
                          <dd className="text-gray-900 font-medium">{details.technical.testVoltage}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Temperature:</dt>
                          <dd className="text-gray-900 font-medium">{details.technical.temperature}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Real-World Usage Patterns */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                🌍 Real-World Usage Patterns
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-gray-700 mb-6 text-sm">
                  Most sources just list which countries use {plugType.name}, but here's the reality: 
                  not all usage is equal. This breakdown shows actual dominance in real outlets.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {realWorldUsage.primary.count > 0 && (
                    <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span className="font-semibold text-green-800">PRIMARY USAGE</span>
                      </div>
                      <div className="text-2xl font-bold text-green-700 mb-1">
                        {realWorldUsage.primary.count} countries
                      </div>
                      <div className="text-sm text-green-600">
                        Found in 90%+ of outlets
                      </div>
                      <div className="mt-2 max-h-20 overflow-y-auto">
                        <div className="text-xs text-green-700">
                          {realWorldUsage.primary.countries.slice(0, 5).join(', ')}
                          {realWorldUsage.primary.countries.length > 5 && ` +${realWorldUsage.primary.countries.length - 5} more`}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {realWorldUsage.secondary.count > 0 && (
                    <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        <span className="font-semibold text-yellow-800">SECONDARY USAGE</span>
                      </div>
                      <div className="text-2xl font-bold text-yellow-700 mb-1">
                        {realWorldUsage.secondary.count} countries
                      </div>
                      <div className="text-sm text-yellow-600">
                        Newer/specific buildings
                      </div>
                      <div className="mt-2 max-h-20 overflow-y-auto">
                        <div className="text-xs text-yellow-700">
                          {realWorldUsage.secondary.countries.slice(0, 5).join(', ')}
                          {realWorldUsage.secondary.countries.length > 5 && ` +${realWorldUsage.secondary.countries.length - 5} more`}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {realWorldUsage.legacy.count > 0 && (
                    <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                        <span className="font-semibold text-gray-800">LEGACY USAGE</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-700 mb-1">
                        {realWorldUsage.legacy.count} countries
                      </div>
                      <div className="text-sm text-gray-600">
                        Old installations only
                      </div>
                      <div className="mt-2 max-h-20 overflow-y-auto">
                        <div className="text-xs text-gray-700">
                          {realWorldUsage.legacy.countries.slice(0, 5).join(', ')}
                          {realWorldUsage.legacy.countries.length > 5 && ` +${realWorldUsage.legacy.countries.length - 5} more`}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Usage Summary */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Traveler's Reality Check</h3>
                  <div className="text-sm text-gray-700">
                    {realWorldUsage.primary.count > 0 ? (
                      <p>
                        ✅ <strong>Travelers will find {plugType.name}</strong> as the dominant plug type in {realWorldUsage.primary.count} countries.
                        {realWorldUsage.secondary.count > 0 && (
                          <> You might encounter it in {realWorldUsage.secondary.count} additional countries, but bring backup adapters.</>
                        )}
                        {realWorldUsage.legacy.count > 0 && (
                          <> In {realWorldUsage.legacy.count} countries, it's mostly in old buildings.</>
                        )}
                      </p>
                    ) : (
                      <p>
                        ⚠️ <strong>Travelers should note:</strong> {plugType.name} is rarely the primary plug type. 
                        While officially used in {realWorldUsage.total} countries, it's typically secondary or legacy.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Advantages and Disadvantages */}
            {details && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Advantages & Disadvantages
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                      <span className="text-2xl mr-2">✓</span> Advantages
                    </h3>
                    <ul className="space-y-2">
                      {details.advantages.map((advantage, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="font-semibold text-red-900 mb-3 flex items-center">
                      <span className="text-2xl mr-2">✗</span> Disadvantages
                    </h3>
                    <ul className="space-y-2">
                      {details.disadvantages.map((disadvantage, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {disadvantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Evolution */}
            {details && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Evolution & Modern Developments
                </h2>
                <div className="prose prose-lg max-w-none">
                  {details.evolution.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Countries List */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                All {countriesUsingType.length} Countries Using {plugType.name}
              </h2>
              <div className="space-y-6">
                {Object.entries(countriesByContinent).map(([continent, countries]) => (
                  <div key={continent} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {continent} ({countries.length} countries)
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {countries.map(country => (
                        <Link
                          key={country.iso2}
                          href={`/${country.slug}`}
                          className="flex items-center space-x-2 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <img
                            src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`}
                            alt=""
                            width={20}
                            height={15}
                            className="flex-shrink-0"
                          />
                          <span className="text-sm">{country.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plug Image */}
            <div className="bg-gray-50 rounded-lg p-6">
              <img
                src={plugType.image}
                alt={`${plugType.name} plug and socket`}
                className="w-full h-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">
                {plugType.name} Plug
              </h2>
              <div className="text-sm text-gray-600 text-center space-y-1">
                {plugType.altNames.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </div>
            </div>

            {/* Quick Specs */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Specifications</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Pins:</dt>
                  <dd className="text-gray-900 font-medium">{plugType.specs.pins}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Voltage:</dt>
                  <dd className="text-gray-900 font-medium">{plugType.specs.voltage}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Current:</dt>
                  <dd className="text-gray-900 font-medium">{plugType.specs.current}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Grounding:</dt>
                  <dd className="text-gray-900 font-medium">{plugType.specs.grounding}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Compatibility:</dt>
                  <dd className="text-gray-900 font-medium">{plugType.specs.compatibility}</dd>
                </div>
              </dl>
            </div>

            {/* Global Coverage */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Global Coverage</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">{coverage}%</div>
                <div className="text-sm text-gray-600 mt-1">of all countries</div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <div className="text-2xl font-bold text-gray-900">
                    {countriesUsingType.length} / {totalCountries}
                  </div>
                  <div className="text-sm text-gray-600">countries</div>
                </div>
              </div>
            </div>

            {/* Related Plug Types */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Related Plug Types</h3>
              <div className="space-y-3">
                {plugType.relatedTypes.map(relatedType => {
                  const related = plugTypes[`type-${relatedType.toLowerCase()}` as PlugTypeKey];
                  if (!related) return null;
                  
                  return (
                    <Link
                      key={relatedType}
                      href={`/plug-type/type-${relatedType.toLowerCase()}`}
                      className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <div className="font-medium">{related.name}</div>
                        <div className="text-xs text-gray-600">{related.specs.voltage}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Travel Tip */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">🧳 Travel Tip</h3>
              <p className="text-sm text-gray-700">
                {plugType.type === 'A' || plugType.type === 'B' 
                  ? 'Remember that North American plugs operate at 120V. If traveling from Europe or Asia, you\'ll need both an adapter AND a voltage converter for high-power devices.'
                  : plugType.type === 'C'
                  ? 'The Europlug is limited to 2.5 amps. It\'s perfect for phone chargers and small electronics but won\'t work for hair dryers or other high-power devices.'
                  : 'Always check voltage compatibility. Most modern electronics are dual-voltage (100-240V), but older devices may require a voltage converter.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}