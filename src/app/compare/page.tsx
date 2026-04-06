import { Metadata } from 'next';
import Link from 'next/link';
import { PlugDisplay } from '@/components/plugs';

export const metadata: Metadata = {
  title: 'Plug Type Comparisons - Compare Electric Plugs | Travel Power Plugs',
  description: 'Compare different electric plug types side by side. Understand the differences between Type A vs B, Type C vs E vs F, and more.',
  openGraph: {
    title: 'Electric Plug Type Comparisons',
    description: 'Compare different plug types and understand their compatibility',
    url: 'https://travelpowerplugs.com/compare',
    siteName: 'Travel Power Plugs',
    type: 'website',
  },
  alternates: {
    canonical: 'https://travelpowerplugs.com/compare',
  },
};

const comparisons = [
  {
    slug: 'type-a-vs-type-b',
    title: 'Type A vs Type B',
    plugs: ['A', 'B'],
    description: 'American ungrounded vs grounded plugs',
    highlight: 'Most common in North America',
  },
  {
    slug: 'type-c-vs-type-e-vs-type-f',
    title: 'Type C vs E vs F',
    plugs: ['C', 'E', 'F'],
    description: 'European plug standards comparison',
    highlight: 'Used across Europe',
  },
  {
    slug: 'type-g-vs-type-d',
    title: 'Type G vs Type D',
    plugs: ['G', 'D'],
    description: 'British vs Indian plug standards',
    highlight: 'Colonial legacy plugs',
  },
  {
    slug: 'type-i-vs-type-h',
    title: 'Type I vs Type H',
    plugs: ['I', 'H'],
    description: 'Australian/Chinese vs Israeli plugs',
    highlight: 'Regional standards',
  },
  {
    slug: 'type-j-vs-type-c',
    title: 'Type J vs Type C',
    plugs: ['J', 'C'],
    description: 'Swiss vs European plugs',
    highlight: 'Switzerland specific',
  },
  {
    slug: 'type-k-vs-type-c',
    title: 'Type K vs Type C',
    plugs: ['K', 'C'],
    description: 'Danish vs European plugs',
    highlight: 'Denmark specific',
  },
  {
    slug: 'type-l-vs-type-c',
    title: 'Type L vs Type C',
    plugs: ['L', 'C'],
    description: 'Italian vs European plugs',
    highlight: 'Italy specific',
  },
  {
    slug: 'type-n-vs-type-c',
    title: 'Type N vs Type C',
    plugs: ['N', 'C'],
    description: 'Brazilian vs European plugs',
    highlight: 'Brazil specific',
  },
];

export default function CompareIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Plug Type Comparisons',
            description: 'Compare different electric plug types and understand their compatibility',
            url: 'https://travelpowerplugs.com/compare',
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Compare Plug Types</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plug Type Comparisons
            </h1>
            <p className="text-xl opacity-95 max-w-3xl">
              Compare different electric plug types side by side. Understand compatibility, 
              differences, and which adapter you need for international travel.
            </p>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/compare/${comparison.slug}`}
                  className="bg-white border rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center space-x-4 mb-4">
                    {comparison.plugs.map((plug) => (
                      <div key={plug} className="bg-gray-50 rounded-lg p-3">
                        <PlugDisplay type={plug as any} size={60} />
                      </div>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 text-center">
                    {comparison.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    {comparison.description}
                  </p>
                  
                  <div className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full text-center">
                    {comparison.highlight}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Compare Plug Types?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Compatibility Check</h3>
                <p className="text-gray-600">
                  Understand which plugs work in which sockets and what adapters you need.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Safety Features</h3>
                <p className="text-gray-600">
                  Learn about grounding, fuses, and other safety features of different plug types.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Regional Standards</h3>
                <p className="text-gray-600">
                  Discover why different regions adopted different plug standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Adapter?</h2>
            <p className="text-gray-600 mb-8">
              Use our interactive tools to find exactly what you need for your travels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/adapter-finder"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Adapter Finder Tool
              </Link>
              <Link
                href="/tools/compatibility-matrix"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Compatibility Matrix
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}