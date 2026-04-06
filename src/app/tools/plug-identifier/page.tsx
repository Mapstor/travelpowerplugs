import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import PlugIdentifierTool from '@/components/tools/PlugIdentifierTool';

export const metadata: Metadata = {
  title: 'What Plug Type Do I Have? - Identify Your Power Plug',
  description: 'Identify your plug type with our step-by-step visual guide. Find out what type of power plug you have and where it works worldwide.',
  keywords: 'plug identifier, what plug type do I have, identify plug, power plug types, electrical plug identification',
  authors: [{ name: 'Marko Visic' }],
  openGraph: {
    title: 'What Plug Type Do I Have? - Identify Your Power Plug',
    description: 'Identify your plug type with our step-by-step visual guide.',
    type: 'website',
    url: 'https://travelpowerplugs.com/tools/plug-identifier',
    siteName: 'Travel Power Plugs',
  },
  alternates: {
    canonical: 'https://travelpowerplugs.com/tools/plug-identifier',
  },
};

export default function PlugIdentifierPage() {
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Plug Type Identifier",
    "description": "Interactive tool to identify electrical plug types through visual step-by-step questions",
    "url": "https://travelpowerplugs.com/tools/plug-identifier",
    "applicationCategory": "Utility",
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
    "name": "How to Identify Your Plug Type",
    "description": "Step-by-step guide to identify what type of electrical plug you have",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Count the pins",
        "text": "Look at your plug and count how many metal pins or prongs it has - typically 2 or 3"
      },
      {
        "@type": "HowToStep",
        "name": "Identify pin shape",
        "text": "Determine if the pins are flat blades, round pins, or rectangular pins"
      },
      {
        "@type": "HowToStep",
        "name": "Check arrangement",
        "text": "Look at how the pins are arranged - parallel, triangular, or in a line"
      },
      {
        "@type": "HowToStep",
        "name": "Match to type",
        "text": "Compare your plug to the visual options to identify the exact plug type"
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
            What Plug Type Do I Have?
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Not sure what type of plug you have? Use our step-by-step visual guide 
            to identify your plug type and find out where it works around the world.
          </p>
        </div>

        <PlugIdentifierTool />

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Identification Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">🔍 What to Look For</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Pin count:</strong> 2 or 3 metal pins/prongs</li>
                <li>• <strong>Pin shape:</strong> Flat, round, or rectangular</li>
                <li>• <strong>Pin size:</strong> Thick, thin, or varying sizes</li>
                <li>• <strong>Arrangement:</strong> How pins are positioned</li>
                <li>• <strong>Ground pin:</strong> Extra pin for safety</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">🌍 Why It Matters</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Determines what adapter you need for travel</li>
                <li>• Helps identify your home region's standard</li>
                <li>• Ensures electrical safety when abroad</li>
                <li>• Helps you buy the right replacement plugs</li>
                <li>• Useful for international device compatibility</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Most Common Plug Types</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                type: 'A',
                name: 'US/Japan (Ungrounded)',
                description: '2 flat parallel pins',
                regions: 'United States, Canada, Japan, Mexico'
              },
              {
                type: 'B', 
                name: 'US/Canada (Grounded)',
                description: '2 flat pins + round ground pin',
                regions: 'United States, Canada, Mexico'
              },
              {
                type: 'C',
                name: 'European (Europlug)',
                description: '2 round pins, no ground',
                regions: 'Most of Europe, some Asia/Africa'
              },
              {
                type: 'E',
                name: 'French',
                description: '2 round pins + ground hole',
                regions: 'France, Belgium, Poland, some Africa'
              },
              {
                type: 'F',
                name: 'German (Schuko)',
                description: '2 round pins + side ground clips',
                regions: 'Germany, Netherlands, Spain, Russia'
              },
              {
                type: 'G',
                name: 'British',
                description: '3 rectangular pins in triangle',
                regions: 'UK, Ireland, Malaysia, Singapore'
              },
              {
                type: 'I',
                name: 'Australian',
                description: '3 flat pins (2 angled)',
                regions: 'Australia, New Zealand, China'
              },
              {
                type: 'J',
                name: 'Swiss',
                description: '3 round pins in triangle',
                regions: 'Switzerland, Liechtenstein'
              },
              {
                type: 'L',
                name: 'Italian',
                description: '3 round pins in line',
                regions: 'Italy, Chile, some North Africa'
              }
            ].map((plug) => (
              <div key={plug.type} className="bg-white border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    {plug.type}
                  </div>
                  <div>
                    <h3 className="font-semibold">Type {plug.type}</h3>
                    <p className="text-sm text-gray-600">{plug.name}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">{plug.description}</p>
                <p className="text-xs text-gray-500">{plug.regions}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}