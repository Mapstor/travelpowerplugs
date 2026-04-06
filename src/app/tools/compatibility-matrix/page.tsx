import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import CompatibilityMatrixTool from '@/components/tools/CompatibilityMatrixTool';

export const metadata: Metadata = {
  title: 'Plug Type Compatibility Matrix - Which Plugs Fit Which Sockets?',
  description: 'Interactive compatibility matrix showing which plug types fit in which socket types. Visual guide for all 15 international plug types A through O.',
  keywords: 'plug compatibility matrix, socket compatibility, plug types, electrical plugs, power plug compatibility, international plugs',
  authors: [{ name: 'Marko Visic' }],
  openGraph: {
    title: 'Plug Type Compatibility Matrix - Which Plugs Fit Which Sockets?',
    description: 'Interactive compatibility matrix showing which plug types fit in which socket types.',
    type: 'website',
    url: 'https://travelpowerplugs.com/tools/compatibility-matrix',
    siteName: 'Travel Power Plugs',
  },
  alternates: {
    canonical: 'https://travelpowerplugs.com/tools/compatibility-matrix',
  },
};

export default function CompatibilityMatrixPage() {
  const jsonLdDataset = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "International Plug Type Compatibility Matrix",
    "description": "Comprehensive dataset showing compatibility between all international electrical plug types (A-O) and socket types",
    "keywords": ["plug compatibility", "electrical plugs", "power sockets", "international standards", "travel adapters"],
    "creator": {
      "@type": "Organization",
      "name": "Travel Power Plugs"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Travel Power Plugs"
    },
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "version": "1.0",
    "datePublished": "2024-01-01"
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Plug Compatibility Matrix",
    "description": "Interactive matrix showing which plug types are compatible with which socket types",
    "url": "https://travelpowerplugs.com/tools/compatibility-matrix",
    "applicationCategory": "Reference",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDataset) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />

      <Header showFullNav={true} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Plug Type Compatibility Matrix
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Interactive matrix showing which plug types fit in which socket types. 
            Click any cell to see detailed compatibility information for all 15 international plug standards.
          </p>
        </div>

        <CompatibilityMatrixTool />

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Understanding Plug Compatibility</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-700">✅ Compatible</h3>
              <p className="text-gray-700 mb-3">
                The plug physically fits into the socket and can establish electrical contact safely.
              </p>
              <div className="bg-green-100 p-3 rounded text-sm">
                Example: Type A plug fits in Type A socket
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-600">⚠️ Partial</h3>
              <p className="text-gray-700 mb-3">
                The plug may fit but without proper grounding, or with some compatibility issues.
              </p>
              <div className="bg-yellow-100 p-3 rounded text-sm">
                Example: Type A plug in Type B socket (missing ground)
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-700">❌ Incompatible</h3>
              <p className="text-gray-700 mb-3">
                The plug does not fit in the socket due to different pin configurations or spacing.
              </p>
              <div className="bg-red-100 p-3 rounded text-sm">
                Example: Type G plug cannot fit in Type A socket
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">💡 How to Use This Matrix</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>Rows</strong> represent plug types (what you're plugging in)</li>
              <li>• <strong>Columns</strong> represent socket types (what's in the wall)</li>
              <li>• <strong>Click any cell</strong> to see detailed compatibility information</li>
              <li>• <strong>Use filters</strong> to highlight specific plug or socket types</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Plug Type Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'A', name: 'North American (ungrounded)', description: 'Two flat parallel pins, 120V' },
              { type: 'B', name: 'North American (grounded)', description: 'Two flat pins + ground, 120V' },
              { type: 'C', name: 'Europlug', description: 'Two round pins, 220-240V' },
              { type: 'D', name: 'Indian (old)', description: 'Three round pins, large, 220V' },
              { type: 'E', name: 'French', description: 'Two round pins + ground hole, 220V' },
              { type: 'F', name: 'German/Schuko', description: 'Two round pins + side grounds, 220V' },
              { type: 'G', name: 'British', description: 'Three rectangular pins, 230V' },
              { type: 'H', name: 'Israeli', description: 'Three flat pins, 230V' },
              { type: 'I', name: 'Australian', description: 'Three flat pins (angled), 230V' },
              { type: 'J', name: 'Swiss', description: 'Three round pins, 230V' },
              { type: 'K', name: 'Danish', description: 'Three round pins, 230V' },
              { type: 'L', name: 'Italian', description: 'Three round pins (line), 230V' },
              { type: 'M', name: 'South African', description: 'Three round pins, large, 220V' },
              { type: 'N', name: 'Brazilian', description: 'Three round pins, 220V' },
              { type: 'O', name: 'Thai', description: 'Three round pins, 220V' },
            ].map((plug) => (
              <div key={plug.type} className="bg-white border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center font-bold text-blue-600">
                    {plug.type}
                  </div>
                  <h3 className="font-semibold">Type {plug.type}</h3>
                </div>
                <p className="font-medium text-sm text-gray-800 mb-1">{plug.name}</p>
                <p className="text-xs text-gray-600">{plug.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}