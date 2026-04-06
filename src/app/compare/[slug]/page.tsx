import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PLUG_TYPES } from '@/data/plugTypes';
import { COUNTRIES } from '@/data/countries';
import { PlugDisplay } from '@/components/plugs';
import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/Breadcrumb';
import { getCountryPlugData } from '@/lib/compatibility';

interface Comparison {
  slug: string;
  title: string;
  plugs: string[];
  description: string;
  differences: string[];
  similarities: string[];
}

const COMPARISONS: Comparison[] = [
  {
    slug: 'type-a-vs-type-b',
    title: 'Type A vs Type B Plugs',
    plugs: ['A', 'B'],
    description: 'Compare American Type A (ungrounded) and Type B (grounded) plugs.',
    differences: [
      'Type B has a third round grounding pin',
      'Type B provides better electrical safety',
      'Type A is more compact and lighter',
      'Type B outlets always accept Type A plugs'
    ],
    similarities: [
      'Both use flat parallel blades',
      'Same voltage (120V) and frequency (60Hz)',
      'Used primarily in North America',
      'Blade spacing is identical'
    ]
  },
  {
    slug: 'type-c-vs-type-e-vs-type-f',
    title: 'Type C vs Type E vs Type F',
    plugs: ['C', 'E', 'F'],
    description: 'Compare European plug standards: Europlug (C), French (E), and Schuko (F).',
    differences: [
      'Type C is ungrounded, E and F are grounded',
      'Type E has a grounding pin, Type F has grounding clips',
      'Type C fits in both E and F sockets',
      'E and F are not always compatible with each other'
    ],
    similarities: [
      'All use round pins',
      'Same voltage (230V) in Europe',
      '19mm pin spacing for all',
      'Widely used across Europe'
    ]
  },
  {
    slug: 'type-g-vs-type-d',
    title: 'Type G vs Type D',
    plugs: ['G', 'D'],
    description: 'British Type G vs Indian Type D plugs - colonial legacy standards.',
    differences: [
      'Type G has rectangular pins, Type D has round pins',
      'Type G is larger and includes a fuse',
      'Type D is based on old British 5A standard',
      'Pin configuration is completely different'
    ],
    similarities: [
      'Both are three-pin grounded plugs',
      'Both used in former British territories',
      'Similar voltage ranges (220-240V)',
      'Both have dedicated ground pin'
    ]
  },
  {
    slug: 'type-i-vs-type-h',
    title: 'Type I vs Type H',
    plugs: ['I', 'H'],
    description: 'Australian/Chinese Type I vs Israeli Type H plugs.',
    differences: [
      'Pin angles: Type I pins are angled, Type H pins form a Y shape',
      'Type I is used across Oceania and China',
      'Type H is unique to Israel',
      'Not compatible with each other'
    ],
    similarities: [
      'Both have three pins',
      'Both are grounded',
      'Similar voltage (220-240V)',
      'Flat blade design'
    ]
  },
  {
    slug: 'type-j-vs-type-c',
    title: 'Type J vs Type C',
    plugs: ['J', 'C'],
    description: 'Swiss Type J vs European Type C (Europlug).',
    differences: [
      'Type J has three pins, Type C has two',
      'Type J is grounded, Type C is not',
      'Type J is unique to Switzerland',
      'Pin diameter differs slightly'
    ],
    similarities: [
      'Type C plugs work in Type J sockets',
      'Both use round pins',
      'Same voltage in practice (230V)',
      'Similar pin spacing'
    ]
  },
  {
    slug: 'type-k-vs-type-c',
    title: 'Type K vs Type C',
    plugs: ['K', 'C'],
    description: 'Danish Type K vs European Type C plugs.',
    differences: [
      'Type K has a grounding pin',
      'Type K is specific to Denmark',
      'Different socket designs',
      'Type K being phased out for Type E'
    ],
    similarities: [
      'Type C works in Type K sockets',
      'Both use round pins',
      'Same voltage (230V)',
      'Compatible for ungrounded devices'
    ]
  },
  {
    slug: 'type-l-vs-type-c',
    title: 'Type L vs Type C',
    plugs: ['L', 'C'],
    description: 'Italian Type L vs European Type C plugs.',
    differences: [
      'Type L has inline pins, others have parallel',
      'Type L comes in 10A and 16A versions',
      'Type L is unique to Italy',
      'Different pin spacing'
    ],
    similarities: [
      'Both use round pins',
      'Same voltage (230V)',
      'Type C works in some Type L sockets',
      'Used in Europe'
    ]
  },
  {
    slug: 'type-n-vs-type-c',
    title: 'Type N vs Type C',
    plugs: ['N', 'C'],
    description: 'Brazilian Type N vs European Type C plugs.',
    differences: [
      'Type N is grounded with three pins',
      'Type N is unique to Brazil',
      'Type N is a newer IEC standard',
      'Different socket design'
    ],
    similarities: [
      'Type C plugs fit Type N sockets',
      'Both use round pins',
      'Similar pin diameter',
      'Compatible for 2-pin devices'
    ]
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARISONS.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const comparison = COMPARISONS.find((c) => c.slug === resolvedParams.slug);
  
  if (!comparison) {
    return { title: 'Comparison Not Found' };
  }

  const title = `${comparison.title} - Plug Comparison Guide | Travel Power Plugs`;
  const description = `${comparison.description} Detailed comparison of specifications, compatibility, and usage worldwide.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://travelpowerplugs.com/compare/${comparison.slug}`,
      siteName: 'Travel Power Plugs',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://travelpowerplugs.com/compare/${comparison.slug}`,
    },
  };
}

export default async function ComparePage({ params }: PageProps) {
  const resolvedParams = await params;
  const comparison = COMPARISONS.find((c) => c.slug === resolvedParams.slug);
  
  if (!comparison) {
    notFound();
  }

  // Get plug type details
  const plugDetails = comparison.plugs.map(p => PLUG_TYPES.find(pt => pt.id === p)!);
  
  // Get countries using these plug types
  const countriesByPlug: Record<string, typeof COUNTRIES> = {};
  comparison.plugs.forEach(plug => {
    countriesByPlug[plug] = COUNTRIES.filter(c => c.plugTypes.includes(plug as any));
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: comparison.title,
            description: comparison.description,
            url: `https://travelpowerplugs.com/compare/${comparison.slug}`,
            author: {
              '@type': 'Person',
              name: 'Marko Visic',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Travel Power Plugs',
            },
          }),
        }}
      />

      <Header showFullNav={true} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-white/80 mb-4">
              <Breadcrumb 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Compare', href: '/compare' },
                  { label: comparison.title }
                ]}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {comparison.title}
            </h1>
            <p className="text-xl opacity-95 max-w-3xl">
              {comparison.description}
            </p>
          </div>
        </section>

        {/* Visual Comparison */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-{comparison.plugs.length} gap-8">
              {plugDetails.map((plug) => (
                <div key={plug.id} className="text-center">
                  <div className="bg-gray-50 rounded-lg p-8 mb-4">
                    <PlugDisplay type={plug.id as any} size={120} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Type {plug.id}</h2>
                  <p className="text-gray-600 mb-4">{plug.name}</p>
                  <div className="text-sm text-left bg-gray-50 rounded-lg p-4">
                    <div className="mb-2"><strong>Voltage:</strong> {plug.voltage}</div>
                    <div className="mb-2"><strong>Current:</strong> {plug.amperage}A</div>
                    <div className="mb-2"><strong>Grounded:</strong> {plug.grounded ? 'Yes' : 'No'}</div>
                    <div><strong>Countries:</strong> {countriesByPlug[plug.id].length}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differences & Similarities */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Key Differences</h3>
                <ul className="space-y-3">
                  {comparison.differences.map((diff, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Similarities</h3>
                <ul className="space-y-3">
                  {comparison.similarities.map((sim, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{sim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICAL COMPATIBILITY WARNINGS */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              🎯 Real-World Travel Compatibility
            </h3>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 text-yellow-600 mt-1">⚠️</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Practical Travel Reality</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Physical compatibility doesn't guarantee real-world usability. Here's what travelers actually encounter:
                  </p>
                </div>
              </div>

              {(() => {
                // Generate practical compatibility analysis based on the comparison
                const practicalAnalysis = comparison.plugs.map(plugType => {
                  // Get countries where this plug type is PRIMARY (actually dominant)
                  const practicalCountries = COUNTRIES.filter(country => {
                    const practicalData = getCountryPlugData(country.iso2);
                    if (practicalData) {
                      const plugData = practicalData.plugTypes.find(p => p.type === plugType);
                      return plugData && plugData.status === 'primary';
                    }
                    return false;
                  });

                  // Get countries where it's secondary/legacy
                  const theoreticalCountries = COUNTRIES.filter(country => {
                    const practicalData = getCountryPlugData(country.iso2);
                    if (practicalData) {
                      const plugData = practicalData.plugTypes.find(p => p.type === plugType);
                      return plugData && plugData.status !== 'primary';
                    } else {
                      // Fallback to theoretical compatibility
                      return country.plugTypes.includes(plugType as any);
                    }
                  });

                  return {
                    type: plugType,
                    primaryCount: practicalCountries.length,
                    theoreticalCount: theoreticalCountries.length,
                    totalCount: countriesByPlug[plugType].length,
                    practicalCountries: practicalCountries.slice(0, 5).map(c => c.name)
                  };
                });

                return (
                  <div className="space-y-4">
                    {practicalAnalysis.map(analysis => (
                      <div key={analysis.type} className="bg-white rounded-lg p-4 border border-yellow-200">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-900">Type {analysis.type}</h5>
                          <div className="text-sm text-gray-600">
                            {analysis.totalCount} countries officially, {analysis.primaryCount} as primary
                          </div>
                        </div>
                        
                        <div className="flex gap-4 text-xs">
                          <div className="flex-1">
                            <span className="font-medium text-green-700">PRIMARY usage: {analysis.primaryCount} countries</span>
                            <p className="text-gray-600 mt-1">
                              {analysis.practicalCountries.length > 0 
                                ? `Dominant in: ${analysis.practicalCountries.join(', ')}`
                                : 'Rarely the primary plug type anywhere'
                              }
                            </p>
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-yellow-700">SECONDARY/LEGACY: {analysis.theoreticalCount} countries</span>
                            <p className="text-gray-600 mt-1">
                              Found in some outlets but not reliable for travelers
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Specific warnings based on comparison type */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h5 className="font-semibold text-orange-900 mb-2">⚠️ Traveler Warnings</h5>
                      <div className="text-sm text-orange-800">
                        {comparison.slug === 'type-a-vs-type-b' && (
                          <p>🇺🇸 In North America: Both work everywhere, but Type B is standard in modern installations. Some older outlets only accept Type A.</p>
                        )}
                        {comparison.slug === 'type-c-vs-type-e-vs-type-f' && (
                          <p>🇪🇺 In Europe: Type C works universally but only for low-power devices. For high-power appliances, you need the local grounded standard (E in France, F in Germany).</p>
                        )}
                        {comparison.slug === 'type-g-vs-type-m' && (
                          <p>🌍 In former British colonies: Type G dominates in Asia/Europe, Type M in southern Africa. Don't rely on "compatibility" - bring the specific type for your destination.</p>
                        )}
                        {comparison.slug === 'type-i-vs-type-j' && (
                          <p>🏔️ Type I: Dominant in Australia/Argentina/China. Type J: Only reliable in Switzerland. Despite "compatibility," travelers need specific adapters.</p>
                        )}
                        {comparison.slug === 'type-n-vs-type-c' && (
                          <p>🇧🇷 In Brazil: Type N is the modern standard since 2011, but Type C legacy outlets still exist. For reliable power, plan for Type N.</p>
                        )}
                        {!['type-a-vs-type-b', 'type-c-vs-type-e-vs-type-f', 'type-g-vs-type-m', 'type-i-vs-type-j', 'type-n-vs-type-c'].includes(comparison.slug) && (
                          <p>Physical compatibility doesn't mean practical reliability. Research which plug type is PRIMARY in your destination countries, not just which ones are "officially supported."</p>
                        )}
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 border-t border-gray-200 pt-3">
                      💡 <strong>Why this matters:</strong> Most travel guides list theoretical compatibility. 
                      This analysis shows what plugs you'll actually find in 90%+ of outlets.
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* Countries Using Each Type */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Countries Using These Plug Types</h2>
            <div className="grid md:grid-cols-{comparison.plugs.length} gap-8">
              {comparison.plugs.map((plug) => (
                <div key={plug}>
                  <h3 className="text-xl font-semibold mb-4">
                    Type {plug} ({countriesByPlug[plug].length} countries)
                  </h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {countriesByPlug[plug].slice(0, 20).map((country) => (
                      <Link
                        key={country.iso2}
                        href={`/${country.slug}`}
                        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors"
                      >
                        <img
                          src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                          alt={country.name}
                          width={24}
                          height={18}
                          className="rounded"
                        />
                        <span className="text-sm">{country.name}</span>
                      </Link>
                    ))}
                    {countriesByPlug[plug].length > 20 && (
                      <div className="text-sm text-gray-500 p-2">
                        +{countriesByPlug[plug].length - 20} more countries
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Related Comparisons</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {COMPARISONS.filter(c => c.slug !== comparison.slug).slice(0, 3).map((related) => (
                <Link
                  key={related.slug}
                  href={`/compare/${related.slug}`}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{related.title}</h3>
                  <p className="text-gray-600 text-sm">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}