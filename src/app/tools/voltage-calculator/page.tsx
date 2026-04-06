import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import VoltageCalculatorTool from '@/components/tools/VoltageCalculatorTool';

export const metadata: Metadata = {
  title: 'Voltage Calculator - Check Device Compatibility for Travel',
  description: 'Calculate if your devices will work abroad. Check voltage and frequency compatibility, find out if you need a voltage converter.',
  keywords: 'voltage calculator, travel voltage converter, dual voltage, electrical compatibility, device voltage',
  authors: [{ name: 'Marko Visic' }],
  openGraph: {
    title: 'Voltage Calculator - Check Device Compatibility',
    description: 'Calculate if your devices will work abroad. Check voltage and frequency compatibility.',
    type: 'website',
    url: 'https://travelpowerplugs.com/tools/voltage-calculator',
    siteName: 'Travel Power Plugs',
  },
  alternates: {
    canonical: 'https://travelpowerplugs.com/tools/voltage-calculator',
  },
};

export default function VoltageCalculatorPage() {
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Voltage Calculator",
    "description": "Calculate voltage and frequency compatibility for travel devices between countries",
    "url": "https://travelpowerplugs.com/tools/voltage-calculator",
    "applicationCategory": "Travel",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const jsonLdCalculator = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Travel Voltage Calculator",
    "applicationCategory": "UtilitiesApplication",
    "description": "Calculate if your electrical devices will work in different countries based on voltage and frequency differences",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCalculator) }}
      />

      <Header showFullNav={true} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Voltage Calculator
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Check if your electrical devices will work abroad. Calculate voltage and frequency 
            compatibility to avoid damage to your electronics.
          </p>
        </div>

        <VoltageCalculatorTool />

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Understanding Voltage Compatibility</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-700">✅ Safe Scenarios</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Same voltage (±10V tolerance)</li>
                <li>• Dual voltage devices (100-240V)</li>
                <li>• Modern phone/laptop chargers</li>
                <li>• Cameras and small electronics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-700">⚠️ Need Converters</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hair dryers (120V only → 220V country)</li>
                <li>• Curling irons and straighteners</li>
                <li>• Small kitchen appliances</li>
                <li>• Older electronics (single voltage)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tip</h4>
            <p className="text-blue-700">
              Look for "INPUT: 100-240V" on your device's label or power adapter. 
              If you see this, your device is dual voltage and safe to use worldwide with just a plug adapter.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Common Voltage Standards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">110-120V Countries</h3>
              <p className="text-sm text-gray-600 mb-3">Lower voltage standard</p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• United States</li>
                <li>• Canada</li>
                <li>• Japan (100V)</li>
                <li>• Some Caribbean islands</li>
              </ul>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">220-240V Countries</h3>
              <p className="text-sm text-gray-600 mb-3">Higher voltage standard</p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Most of Europe</li>
                <li>• United Kingdom</li>
                <li>• Australia</li>
                <li>• Most of Asia & Africa</li>
              </ul>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Frequency</h3>
              <p className="text-sm text-gray-600 mb-3">AC frequency standards</p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• 60Hz: Americas, parts of Asia</li>
                <li>• 50Hz: Europe, most of world</li>
                <li>• Affects motors & clocks</li>
                <li>• Most electronics unaffected</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}