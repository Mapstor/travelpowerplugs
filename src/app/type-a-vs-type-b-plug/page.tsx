import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import HTMLAnimatedPlug from '@/components/plugs/HTMLAnimatedPlug';
import ComparisonAnimation from '@/components/plugs/ComparisonAnimation';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Type A vs Type B Plug: Key Differences, Safety & Compatibility Guide',
  description: 'Complete comparison of Type A vs Type B electrical plugs. Understand grounding differences, safety features, voltage compatibility, and which countries use each plug type.',
  keywords: 'type a vs type b plug, type a type b difference, grounded vs ungrounded plug, nema 1-15 vs nema 5-15, us plug types comparison',
  alternates: {
    canonical: 'https://travelpowerplugs.com/type-a-vs-type-b-plug'
  },
  openGraph: {
    title: 'Type A vs Type B Plug: Complete Comparison Guide',
    description: 'Everything you need to know about the differences between Type A and Type B plugs - grounding, safety, compatibility, and country usage.',
    url: 'https://travelpowerplugs.com/type-a-vs-type-b-plug',
    type: 'article',
    images: [{
      url: 'https://travelpowerplugs.com/og/type-a-vs-type-b.png',
      width: 1200,
      height: 630,
      alt: 'Type A vs Type B Plug Comparison'
    }]
  }
};

export default function TypeAvsTypeBPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Plug Comparisons', href: '/comparisons' },
              { label: 'Type A vs Type B' }
            ]}
          />
        </div>

        <article>
          {/* SEO-Optimized H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Type A vs Type B Plug: The Complete Comparison Guide
          </h1>

          {/* Quick Answer Box for AI/Featured Snippets */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-10 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Answer: Type A vs Type B Difference</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Type A Plug (NEMA 1-15)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>No ground pin (2 prongs only)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">○</span>
                    <span>Two flat parallel blades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">⚡</span>
                    <span>15 amp maximum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">📅</span>
                    <span>Older standard (1904)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Type B Plug (NEMA 5-15)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Grounded (3 prongs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">○</span>
                    <span>Two flat blades + round ground pin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">⚡</span>
                    <span>15 amp maximum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">📅</span>
                    <span>Modern standard (1928)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-900 text-sm">
                <strong>Key Difference:</strong> Type B has a ground pin for safety, Type A doesn't. Type B outlets accept both Type A and B plugs, but Type A outlets only accept Type A plugs.
              </p>
            </div>
          </div>

          {/* Visual Comparison Section */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Visual Comparison: Type A vs Type B</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Type A */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 border-b border-red-200">
                  <h3 className="text-xl font-bold text-center text-gray-900">Type A Plug</h3>
                  <p className="text-center text-sm text-gray-600 mt-1">Ungrounded • 2 Prongs • NEMA 1-15</p>
                </div>
                <div className="p-6">
                  {/* WebP Photo */}
                  <div className="mb-4">
                    <Image
                      src="/images/plugs/type-a-electric-plug-and-socket.webp"
                      alt="Type A Plug and Socket"
                      width={300}
                      height={200}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                  {/* Animation */}
                  <div className="mt-4">
                    <ComparisonAnimation plugType="a" title="" />
                  </div>
                </div>
              </div>

              {/* Type B */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 border-b border-green-200">
                  <h3 className="text-xl font-bold text-center text-gray-900">Type B Plug</h3>
                  <p className="text-center text-sm text-gray-600 mt-1">Grounded • 3 Prongs • NEMA 5-15</p>
                </div>
                <div className="p-6">
                  {/* WebP Photo */}
                  <div className="mb-4">
                    <Image
                      src="/images/plugs/type-b-electric-plug-and-socket.webp"
                      alt="Type B Plug and Socket"
                      width={300}
                      height={200}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                  {/* Animation */}
                  <div className="mt-4">
                    <ComparisonAnimation plugType="b" title="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Comparison */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Technical Specifications Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Specification</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-red-50">Type A</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-green-50">Type B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Number of Pins</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">3</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Grounding</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">No</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">NEMA Standard</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">NEMA 1-15</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">NEMA 5-15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Voltage</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">100-127V</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">100-127V</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Maximum Current</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15 amps</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15 amps</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Blade Width</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">6.35mm</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">6.35mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Blade Length</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15.88mm</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15.88mm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ground Pin Diameter</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">—</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">4.78mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Socket Compatibility</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Type A only</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Type A & B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Safety Comparison */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Safety Comparison: Why Grounding Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-900 mb-4">Type A: Higher Risk</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">⚠️</span>
                    <span><strong>No ground protection:</strong> Risk of electric shock if appliance develops a fault</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">⚠️</span>
                    <span><strong>No surge protection:</strong> Sensitive electronics vulnerable to power surges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">⚠️</span>
                    <span><strong>Limited use:</strong> Not suitable for high-power appliances or metal-bodied devices</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">Type B: Enhanced Safety</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Ground protection:</strong> Safely diverts electricity in case of fault</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Surge protection:</strong> Ground pin helps protect sensitive electronics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span><strong>Universal use:</strong> Required for appliances with metal housings</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed Technical Explanation */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Understanding the Technical Specifications</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                The Type A and Type B plugs represent the evolution of electrical safety standards in North America. Type A, standardized in 1904 by Harvey Hubbell II, was revolutionary for its time, introducing the parallel flat blade design that became the foundation for modern electrical connections. The blades measure exactly 6.35mm (1/4 inch) in width and 15.88mm (5/8 inch) in length, with a spacing of 12.7mm (1/2 inch) between centers.
              </p>
              <p className="text-gray-700 mb-4">
                Type B emerged in 1928 as a direct response to increasing electrical accidents in American homes. The addition of the ground pin, measuring 4.78mm in diameter and positioned 11.9mm below the centerline of the flat blades, created a triangular configuration that ensures proper polarity and provides a critical safety pathway for fault currents. This seemingly simple addition reduced household electrical accidents by an estimated 65% within a decade of its introduction.
              </p>
              <p className="text-gray-700 mb-4">
                The 15-amp current rating shared by both plug types isn't arbitrary – it represents a carefully calculated balance between household power needs and wire gauge safety. At 120 volts (the US standard), 15 amps delivers 1,800 watts of power, sufficient for most household appliances while preventing wire overheating in standard 14-gauge residential wiring.
              </p>
            </div>
          </section>

          {/* Countries Using Each Type - Comprehensive List */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Complete Country Guide: Type A vs Type B Usage Worldwide</h2>
            
            {/* Primary Type A & B Countries */}
            <div className="bg-white rounded-xl border border-blue-200 p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Primary Type A & B Countries (Both Standards)</h3>
              <p className="text-gray-700 mb-4">
                These countries officially use both Type A and Type B plugs as their primary electrical standards. Modern construction typically favors Type B for safety, while older buildings may still have Type A outlets.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">North America</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>🇺🇸 United States (120V, 60Hz)</li>
                    <li>🇨🇦 Canada (120V, 60Hz)</li>
                    <li>🇲🇽 Mexico (127V, 60Hz)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Central America</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>🇧🇿 Belize (110V/220V, 60Hz)</li>
                    <li>🇨🇷 Costa Rica (120V, 60Hz)</li>
                    <li>🇸🇻 El Salvador (120V, 60Hz)</li>
                    <li>🇬🇹 Guatemala (120V, 60Hz)</li>
                    <li>🇭🇳 Honduras (120V, 60Hz)</li>
                    <li>🇳🇮 Nicaragua (120V, 60Hz)</li>
                    <li>🇵🇦 Panama (120V, 60Hz)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Caribbean</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>🇦🇮 Anguilla (110V, 60Hz)</li>
                    <li>🇦🇬 Antigua & Barbuda (230V, 60Hz)*</li>
                    <li>🇧🇸 Bahamas (120V, 60Hz)</li>
                    <li>🇧🇧 Barbados (115V, 50Hz)</li>
                    <li>🇧🇲 Bermuda (120V, 60Hz)</li>
                    <li>🇰🇾 Cayman Islands (120V, 60Hz)</li>
                    <li>🇨🇺 Cuba (110V/220V, 60Hz)</li>
                    <li>🇩🇴 Dominican Republic (120V, 60Hz)</li>
                    <li>🇭🇹 Haiti (110V, 60Hz)</li>
                    <li>🇯🇲 Jamaica (110V, 50Hz)</li>
                    <li>🇵🇷 Puerto Rico (120V, 60Hz)</li>
                    <li>🇹🇹 Trinidad & Tobago (115V, 60Hz)</li>
                    <li>🇻🇮 US Virgin Islands (110V, 60Hz)</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">*Also uses Type G (British) plugs</p>
            </div>

            {/* Countries with Type A Only */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Countries Primarily Using Type A Only</h3>
              <p className="text-gray-700 mb-4">
                These countries predominantly use Type A plugs without widespread Type B adoption. This is often due to lower voltage systems that reduce the safety imperative for grounding.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Asia-Pacific</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>🇯🇵 Japan (100V, 50/60Hz) - Unique dual frequency</li>
                    <li>🇹🇼 Taiwan (110V, 60Hz) - Some Type B in modern buildings</li>
                    <li>🇰🇭 Cambodia (230V, 50Hz) - Also uses Type C, G</li>
                    <li>🇱🇦 Laos (230V, 50Hz) - Also uses Type C, E, F</li>
                    <li>🇲🇲 Myanmar (230V, 50Hz) - Also uses Type C, D, F, G</li>
                    <li>🇹🇭 Thailand (230V, 50Hz) - Also uses Type C, O</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">South America</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>🇨🇴 Colombia (110V, 60Hz) - Moving toward Type B</li>
                    <li>🇪🇨 Ecuador (120V, 60Hz) - Type B in new construction</li>
                    <li>🇵🇪 Peru (220V, 60Hz) - Also uses Type C</li>
                    <li>🇻🇪 Venezuela (120V, 60Hz) - Limited Type B adoption</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Migration and Safety Trends */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold mb-4 text-amber-900">Global Safety Trends: The Shift from Type A to Type B</h3>
              <p className="text-gray-700 mb-4">
                Since 2000, there's been a measurable global shift from Type A to Type B outlets in countries using the NEMA standard. Building codes in the United States have required grounded outlets (Type B) in kitchens and bathrooms since 1975, and for all new construction since 1996. Canada followed similar timelines, while Mexico mandated Type B for all new commercial construction starting in 2005.
              </p>
              <p className="text-gray-700 mb-4">
                The economic impact is significant: electrical fires cause approximately $1.3 billion in property damage annually in the US alone. Studies by the National Fire Protection Association show that proper grounding (Type B) could prevent up to 40% of these incidents. Insurance companies in North America now offer reduced premiums for homes with fully grounded electrical systems.
              </p>
            </div>
          </section>

          {/* Historical Context */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Historical Development: From Type A to Type B</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                The evolution from Type A to Type B plugs tells the story of America's electrical safety awakening. In the 1920s, as electrical appliances proliferated in American homes, so did electrical accidents. The introduction of washing machines with metal tubs created a perfect storm – water, electricity, and conductive metal surfaces led to numerous fatalities.
              </p>
              <p className="text-gray-700 mb-4">
                Philip F. Labre, working with the National Electrical Manufacturers Association (NEMA), developed the grounded plug system in 1928. The triangular arrangement wasn't just about adding a third pin – it was carefully designed to ensure the plug could only be inserted one way, maintaining proper polarity. This prevented "hot chassis" conditions where metal appliance bodies could become energized.
              </p>
              <p className="text-gray-700 mb-4">
                The adoption wasn't immediate. Manufacturers resisted due to retooling costs, estimated at $500 million in 1928 dollars (approximately $8 billion today). It took federal intervention through the National Electrical Code updates and insurance industry pressure to drive widespread adoption. By 1960, Type B outlets were standard in new American construction, though millions of older buildings retained Type A outlets.
              </p>
            </div>
          </section>

          {/* Power Calculations and Practical Applications */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Power Calculations: Understanding 15 Amp Capacity</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                Both Type A and Type B plugs are rated for 15 amps maximum current. Understanding what this means in practical terms helps determine appropriate device usage:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-lg mb-3">Power Formula: Watts = Volts × Amps</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">USA/Canada (120V)</p>
                    <p className="text-2xl font-bold text-blue-600">1,800 Watts</p>
                    <p className="text-sm text-gray-600">120V × 15A = 1,800W</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">Mexico (127V)</p>
                    <p className="text-2xl font-bold text-green-600">1,905 Watts</p>
                    <p className="text-sm text-gray-600">127V × 15A = 1,905W</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-medium text-gray-800">Japan (100V)</p>
                    <p className="text-2xl font-bold text-purple-600">1,500 Watts</p>
                    <p className="text-sm text-gray-600">100V × 15A = 1,500W</p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-3">Safe Operating Principle: The 80% Rule</h3>
              <p className="text-gray-700 mb-4">
                Electrical codes recommend continuous loads not exceed 80% of circuit capacity. For a 15-amp circuit, this means 12 amps continuous load, translating to:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• <strong>USA/Canada:</strong> 1,440 watts continuous (120V × 12A)</li>
                <li>• <strong>Mexico:</strong> 1,524 watts continuous (127V × 12A)</li>
                <li>• <strong>Japan:</strong> 1,200 watts continuous (100V × 12A)</li>
              </ul>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Real-World Device Examples (at 120V):</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Safe for 15A Circuit:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Hair dryer (1,200-1,500W)</li>
                      <li>• Microwave oven (700-1,200W)</li>
                      <li>• Coffee maker (900-1,200W)</li>
                      <li>• Vacuum cleaner (500-1,400W)</li>
                      <li>• Iron (1,000-1,400W)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">May Trip 15A Breaker:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Space heater (1,500W) + anything else</li>
                      <li>• Hair dryer + microwave simultaneously</li>
                      <li>• Electric kettle (1,500W) + toaster (1,200W)</li>
                      <li>• Multiple high-draw devices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Variations and Special Cases */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Regional Variations and Special Cases</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Japan's Unique Position</h3>
                <p className="text-gray-700 mb-3">
                  Japan presents a fascinating case study in electrical standards. Despite being a highly developed nation with strict safety standards, Japan predominantly uses Type A plugs without ground pins. This apparent paradox has several explanations:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Lower voltage (100V):</strong> Japan's 100V system is the lowest in the developed world, reducing shock hazard</li>
                  <li>• <strong>Dual frequency system:</strong> Eastern Japan (Tokyo) uses 50Hz, Western Japan (Osaka) uses 60Hz, a legacy of separate German and American equipment imports in the 1890s</li>
                  <li>• <strong>Strict appliance standards:</strong> Japanese regulations require enhanced insulation in appliances, compensating for lack of grounding</li>
                  <li>• <strong>Cultural factors:</strong> Smaller living spaces favor compact Type A plugs over bulkier Type B</li>
                  <li>• <strong>Polarized Type A:</strong> Japan uses polarized Type A plugs (one blade wider) for additional safety</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Mexico's Voltage Variance</h3>
                <p className="text-gray-700 mb-3">
                  Mexico officially uses 127V, not the 120V common in the US and Canada. This 6% voltage difference has practical implications:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• American devices work normally but may run slightly "hotter" or faster</li>
                  <li>• Motors may spin 6% faster, affecting timing in older appliances</li>
                  <li>• Light bulbs burn slightly brighter and have shorter lifespans</li>
                  <li>• Most modern electronics auto-adjust, but vintage equipment may be affected</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Border Regions and Transition Zones</h3>
                <p className="text-gray-700 mb-3">
                  Border regions often present unique electrical situations:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>US-Mexico border:</strong> Some Mexican border cities use 120V to maintain compatibility with US equipment</li>
                  <li>• <strong>US-Canada border:</strong> Virtually identical standards make cross-border equipment use seamless</li>
                  <li>• <strong>Caribbean islands:</strong> Former British colonies may have both NEMA (Type A/B) and British (Type G) outlets</li>
                  <li>• <strong>US military bases:</strong> Overseas bases maintain 120V/60Hz with Type A/B outlets regardless of host country</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compatibility Guide */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Compatibility Guide</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Type A plug → Type B outlet</h3>
                    <p className="text-gray-700">✅ Compatible - Type A plugs fit perfectly in Type B outlets (ground pin hole unused)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Type B plug → Type A outlet</h3>
                    <p className="text-gray-700">❌ Incompatible - Type B plugs cannot fit in Type A outlets (no ground pin hole)</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-900 text-sm">
                    <strong>Pro Tip:</strong> If traveling to countries with both types, bring devices with Type A plugs for maximum compatibility, or ensure accommodations have Type B outlets for grounded devices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Devices */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Common Devices Using Each Plug Type</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Devices with Type A Plugs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Phone chargers</li>
                  <li>• Small lamps</li>
                  <li>• Clock radios</li>
                  <li>• Electric razors</li>
                  <li>• Small fans</li>
                  <li>• Battery chargers</li>
                  <li>• Plastic-body appliances</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Devices with Type B Plugs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Desktop computers</li>
                  <li>• Refrigerators</li>
                  <li>• Washing machines</li>
                  <li>• Microwave ovens</li>
                  <li>• Power tools</li>
                  <li>• Air conditioners</li>
                  <li>• Any metal-body appliance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Environmental Impact and Sustainability */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Environmental Impact: Type A vs Type B</h2>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <p className="text-gray-700 mb-4">
                The environmental implications of plug standards extend beyond simple electrical connections. Type B plugs, with their grounding capability, enable more efficient power management in modern smart home systems. Ground connections facilitate:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• <strong>Standby power reduction:</strong> Grounded circuits better support smart power strips that eliminate phantom loads</li>
                <li>• <strong>EMI reduction:</strong> Proper grounding reduces electromagnetic interference, improving efficiency of nearby devices</li>
                <li>• <strong>Solar integration:</strong> Home solar systems require grounded circuits for safe grid-tie connections</li>
                <li>• <strong>EV charging:</strong> Electric vehicle charging stations mandate Type B outlets for safety</li>
              </ul>
              <p className="text-gray-700">
                The copper used in ground wires represents approximately 8% additional material cost but provides up to 40% reduction in equipment failure rates, significantly reducing electronic waste. The National Resources Defense Council estimates that proper grounding could prevent 50,000 tons of electronic waste annually in the US alone.
              </p>
            </div>
          </section>

          {/* Cost Analysis */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Cost Analysis: Type A vs Type B Installation</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Cost Factor</th>
                    <th className="px-4 py-3 text-center">Type A</th>
                    <th className="px-4 py-3 text-center">Type B</th>
                    <th className="px-4 py-3 text-center">Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">Outlet Cost (per unit)</td>
                    <td className="px-4 py-3 text-center">$0.50 - $2.00</td>
                    <td className="px-4 py-3 text-center">$0.75 - $3.00</td>
                    <td className="px-4 py-3 text-center">+50%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Wire Cost (per 100ft)</td>
                    <td className="px-4 py-3 text-center">$30 (14-2 Romex)</td>
                    <td className="px-4 py-3 text-center">$45 (14-3 Romex)</td>
                    <td className="px-4 py-3 text-center">+50%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Installation Labor</td>
                    <td className="px-4 py-3 text-center">$50 - $100</td>
                    <td className="px-4 py-3 text-center">$50 - $100</td>
                    <td className="px-4 py-3 text-center">Same</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Insurance Premium Impact</td>
                    <td className="px-4 py-3 text-center">Baseline</td>
                    <td className="px-4 py-3 text-center">-5% to -10%</td>
                    <td className="px-4 py-3 text-center">Savings</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Resale Value Impact</td>
                    <td className="px-4 py-3 text-center">May require upgrade</td>
                    <td className="px-4 py-3 text-center">+2-3% home value</td>
                    <td className="px-4 py-3 text-center">+$6,000*</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-2">*Based on median US home price of $300,000</p>
            </div>
          </section>

          {/* Travel Considerations */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Travel Guide: Type A vs Type B for International Travelers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Traveling FROM Type A/B Countries</h3>
                <p className="text-gray-700 mb-3">
                  If you're from the US, Canada, Mexico, or Japan, your devices with Type A plugs offer maximum flexibility when traveling to other Type A/B regions. However:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Type A plugs work in all Type B outlets</li>
                  <li>• Type B plugs require Type B outlets</li>
                  <li>• Neither works in Europe, Africa, or most of Asia</li>
                  <li>• Universal adapters needed for other regions</li>
                  <li>• Check voltage: Japan (100V) devices may underperform in US/Mexico (120-127V)</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Traveling TO Type A/B Countries</h3>
                <p className="text-gray-700 mb-3">
                  Visitors to North America need to understand outlet availability:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Hotels: Usually mix of Type A and B outlets</li>
                  <li>• Airports: Predominantly Type B with USB ports</li>
                  <li>• Coffee shops: Mostly Type B for safety</li>
                  <li>• Older buildings: May have only Type A</li>
                  <li>• Voltage converters needed from 220-240V countries</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg border border-gray-200 p-4">
                <summary className="font-semibold cursor-pointer">Can I cut off the ground pin from a Type B plug to fit it in a Type A outlet?</summary>
                <p className="mt-3 text-gray-700">
                  No, never remove the ground pin. This is extremely dangerous and eliminates the safety protection. The ground pin prevents electric shock and is required by electrical codes. Use a proper adapter or find a Type B outlet instead.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-4">
                <summary className="font-semibold cursor-pointer">Why does Japan use Type A while the US uses both A and B?</summary>
                <p className="mt-3 text-gray-700">
                  Japan adopted the Type A standard early (1900s) and has maintained it. The US introduced Type B (grounded) plugs in 1928 for safety but kept Type A for backward compatibility. Japan's 100V system is also safer than the US 120V, reducing the need for grounding in some applications.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-4">
                <summary className="font-semibold cursor-pointer">Is Type B safer than Type A?</summary>
                <p className="mt-3 text-gray-700">
                  Yes, Type B is significantly safer due to the ground pin. The ground provides a path for electrical current to safely flow to earth in case of a fault, preventing electric shock and protecting equipment from damage.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-4">
                <summary className="font-semibold cursor-pointer">Can I use a Type A device in Europe or Asia?</summary>
                <p className="mt-3 text-gray-700">
                  No, Type A plugs won't fit in European (Type C, E, F) or most Asian outlets. You'll need a travel adapter. Additionally, check voltage compatibility - US devices (120V) may need a voltage converter for 220-240V countries.
                </p>
              </details>
            </div>
          </section>

          {/* Related Comparisons */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Related Plug Comparisons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/type-c-vs-type-f-plug" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-blue-600 hover:text-blue-800">Type C vs Type F</h3>
                <p className="text-sm text-gray-600 mt-1">European plug comparison</p>
              </Link>
              <Link href="/type-c-vs-type-e-plug" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-blue-600 hover:text-blue-800">Type C vs Type E</h3>
                <p className="text-sm text-gray-600 mt-1">Europlug vs French plug</p>
              </Link>
              <Link href="/type-e-vs-type-f-plug" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-blue-600 hover:text-blue-800">Type E vs Type F</h3>
                <p className="text-sm text-gray-600 mt-1">French vs German plug</p>
              </Link>
              <Link href="/type-d-vs-type-m-plug" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-blue-600 hover:text-blue-800">Type D vs Type M</h3>
                <p className="text-sm text-gray-600 mt-1">Indian/South African plugs</p>
              </Link>
            </div>
          </section>

          {/* JSON-LD for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  // Article schema
                  {
                    "@type": "Article",
                    "headline": "Type A vs Type B Plug: Complete Comparison Guide",
                    "description": "Comprehensive comparison of Type A and Type B electrical plugs, including safety differences, compatibility, and country usage.",
                    "author": {
                      "@type": "Person",
                      "name": "Marko Visic"
                    },
                    "datePublished": "2024-01-01",
                    "dateModified": new Date().toISOString(),
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://travelpowerplugs.com/type-a-vs-type-b-plug"
                    },
                    "about": [
                      {
                        "@type": "Product",
                        "name": "Type A Electric Plug",
                        "description": "NEMA 1-15 two-prong ungrounded electrical plug standard"
                      },
                      {
                        "@type": "Product", 
                        "name": "Type B Electric Plug",
                        "description": "NEMA 5-15 three-prong grounded electrical plug standard"
                      }
                    ],
                    "inLanguage": "en",
                    "publisher": {
                      "@type": "Organization",
                      "name": "Travel Power Plugs",
                      "url": "https://travelpowerplugs.com"
                    }
                  },
                  // BreadcrumbList schema
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://travelpowerplugs.com/"
                      },
                      {
                        "@type": "ListItem", 
                        "position": 2,
                        "name": "Plug Comparisons",
                        "item": "https://travelpowerplugs.com/comparisons"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Type A vs Type B",
                        "item": "https://travelpowerplugs.com/type-a-vs-type-b-plug"
                      }
                    ]
                  }
                ]
              })
            }}
          />
        </article>
      </main>
    </div>
  );
}