import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import AdapterFinderTool from '@/components/tools/AdapterFinderTool';

export const metadata: Metadata = {
  title: 'Travel Adapter Finder - Find the Right Plug Adapter for Your Trip',
  description: 'Find out if you need a travel adapter for your destination. Compare plug types between countries and get personalized adapter recommendations.',
  keywords: 'travel adapter finder, plug adapter, travel plugs, electrical outlet compatibility, power adapter',
  authors: [{ name: 'Marko Visic' }],
  openGraph: {
    title: 'Travel Adapter Finder - Find the Right Plug Adapter',
    description: 'Find out if you need a travel adapter for your destination. Compare plug types between countries.',
    type: 'website',
    url: 'https://travelpowerplugs.com/tools/adapter-finder',
    siteName: 'Travel Power Plugs',
  },
  alternates: {
    canonical: 'https://travelpowerplugs.com/tools/adapter-finder',
  },
};

interface PageProps {
  searchParams: Promise<{
    from?: string;
    to?: string;
  }>;
}

export default async function AdapterFinderPage({ searchParams }: PageProps) {
  const params = await searchParams;
  
  // JSON-LD for WebApplication and HowTo
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Travel Adapter Finder",
    "description": "Find the right travel adapter for your destination by comparing plug types between countries",
    "url": "https://travelpowerplugs.com/tools/adapter-finder",
    "applicationCategory": "Travel",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Find the Right Travel Adapter",
    "description": "Step-by-step guide to finding the correct travel adapter for your destination",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Select your home country",
        "text": "Choose the country where your devices and plugs are from"
      },
      {
        "@type": "HowToStep", 
        "name": "Choose your destination",
        "text": "Select the country you're traveling to"
      },
      {
        "@type": "HowToStep",
        "name": "Check compatibility",
        "text": "The tool will show if your plugs are compatible and what adapter you need"
      },
      {
        "@type": "HowToStep",
        "name": "Buy the right adapter", 
        "text": "Purchase the recommended adapter type for your trip"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <Header showFullNav={true} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🔌 Travel Adapter Finder
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Instantly discover if you need a travel adapter for your destination. 
            Compare plug types, voltage differences, and get specific adapter recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              227 Countries & Territories Covered
            </div>
            <div className="flex items-center text-blue-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Voltage Compatibility Check
            </div>
            <div className="flex items-center text-purple-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Visual Plug Comparison
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="font-bold text-lg mb-3 text-blue-900">⚡ Quick Start Guide</h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
              <div>
                <strong className="text-blue-900">Enter Origin</strong>
                <p className="text-blue-700">Type your home country name</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
              <div>
                <strong className="text-blue-900">Add Destination</strong>
                <p className="text-blue-700">Select where you're traveling</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
              <div>
                <strong className="text-blue-900">View Results</strong>
                <p className="text-blue-700">See adapter requirements</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
              <div>
                <strong className="text-blue-900">Share Link</strong>
                <p className="text-blue-700">Save or share your results</p>
              </div>
            </div>
          </div>
        </div>

        <AdapterFinderTool 
          initialFrom={params.from}
          initialTo={params.to}
        />

        {/* Enhanced Instructions */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">📖 Detailed Instructions & Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-green-600">✅ What This Tool Does</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Compares plug types between any two countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Shows visual plug compatibility animations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Identifies voltage conversion requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Provides specific adapter type recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Generates shareable links for trip planning</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-red-600">❌ Important Limitations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Doesn't check specific device compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Can't determine power converter wattage needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Doesn't account for regional variations within countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Always verify with your device manuals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Hotels may have different outlet types</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-3">💡 Pro Tips for Using This Tool</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-800">
              <div>
                <strong>For Multi-Country Trips:</strong>
                <p>Check each destination separately, then consider a universal adapter that covers all your stops.</p>
              </div>
              <div>
                <strong>Business Travelers:</strong>
                <p>Many business hotels offer universal outlets in rooms. Call ahead to confirm and save luggage space.</p>
              </div>
              <div>
                <strong>Long-Term Stays:</strong>
                <p>Consider buying local chargers for frequently used devices instead of relying on adapters.</p>
              </div>
              <div>
                <strong>Cruise Ships:</strong>
                <p>Ships often have both US and European outlets. Check with your cruise line for specifics.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular Travel Routes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: 'United States', to: 'United Kingdom', slug: 'us-to-uk' },
              { from: 'United States', to: 'Europe', slug: 'us-to-europe' },
              { from: 'United States', to: 'Japan', slug: 'us-to-japan' },
              { from: 'United Kingdom', to: 'Europe', slug: 'uk-to-europe' },
              { from: 'United States', to: 'Australia', slug: 'us-to-australia' },
              { from: 'United States', to: 'Thailand', slug: 'us-to-thailand' },
            ].map((route) => (
              <div key={route.slug} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">
                  {route.from} → {route.to}
                </h3>
                <p className="text-sm text-gray-600">
                  Check adapter requirements for this popular route
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}