import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import HTMLAnimatedPlug from '@/components/plugs/HTMLAnimatedPlug';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Type D vs Type M Plug: British Colonial Standards Comparison Guide',
  description: 'Complete comparison of Type D (5A India) vs Type M (15A South Africa) plugs. Learn about the British BS 546 standard evolution, where each is used, and critical safety differences for travelers to India, South Africa, and former British territories.',
  alternates: {
    canonical: 'https://travelpowerplugs.com/type-d-vs-type-m-plug/'
  },
  openGraph: {
    title: 'Type D vs Type M Plug: Indian vs South African Standards Explained',
    description: 'Detailed guide comparing Type D (5A) vs Type M (15A) British-origin plugs used in India, South Africa, and beyond.',
    url: 'https://travelpowerplugs.com/type-d-vs-type-m-plug/',
    images: [
      {
        url: 'https://travelpowerplugs.com/images/plugs/type-d-vs-type-m-comparison.webp',
        width: 1200,
        height: 630,
        alt: 'Type D vs Type M Plug Comparison'
      }
    ]
  }
};

export default function TypeDvsTypeMComparison() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Type D vs Type M Plug: British Colonial Standards Comparison',
    description: 'Comprehensive analysis of Type D (5A India) vs Type M (15A South Africa) electrical plugs from the British BS 546 standard family.',
    author: {
      '@type': 'Person',
      name: 'Marko Visic'
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://travelpowerplugs.com/type-d-vs-type-m-plug/'
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can Type D plugs fit in Type M sockets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, Type D plugs cannot fit in Type M sockets. Type M has larger pin diameter (7mm vs 5mm) and wider spacing (25.4mm vs 19mm). However, many Indian and South African sockets accept both through multi-standard designs.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the main difference between Type D and Type M?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Type D is rated for 5A (1150W) with 5mm pins spaced 19mm apart, while Type M is rated for 15A (3450W) with 7mm pins spaced 25.4mm apart. Both are based on British BS 546 but serve different power requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which countries use Type D vs Type M plugs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Type D is primarily used in India, Nepal, Sri Lanka, and parts of Africa. Type M dominates in South Africa, Botswana, Namibia, and Lesotho. Both trace their origins to British colonial electrical infrastructure.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Type D vs Type M Plug: The British BS 546 Legacy
          </h1>
          
          <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              <strong>Type D and Type M represent the small and large variants of the British BS 546 standard, still dominant across India and Southern Africa.</strong> While Britain itself moved to Type G in 1962, these robust three-pin designs continue powering billions of devices from Mumbai to Cape Town.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-orange-600 mb-2">🇮🇳 Type D (5A India)</h3>
                <ul className="text-sm space-y-1">
                  <li>• 5mm round pins, 19mm spacing</li>
                  <li>• 5A/1150W capacity at 230V</li>
                  <li>• 1.3 billion users in India</li>
                  <li>• Ideal for lighting and small appliances</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-green-600 mb-2">🇿🇦 Type M (15A South Africa)</h3>
                <ul className="text-sm space-y-1">
                  <li>• 7mm round pins, 25.4mm spacing</li>
                  <li>• 15A/3450W capacity at 230V</li>
                  <li>• 60 million users in Southern Africa</li>
                  <li>• Powers major appliances and geysers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Visual Comparison: Small vs Large BS 546</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Type D (BS 546 5A) - The Indian Standard</h3>
              <HTMLAnimatedPlug plugType="D" />
              <p className="mt-4 text-gray-600">
                The compact three-pin design with 5mm pins has been India's standard since 1947 independence, powering everything from ceiling fans to phone chargers.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Type M (BS 546 15A) - The South African Standard</h3>
              <HTMLAnimatedPlug plugType="M" />
              <p className="mt-4 text-gray-600">
                The heavy-duty variant with 7mm pins handles South Africa's high-power needs, from electric kettles to pool pumps, unchanged since the 1930s.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications: BS 546 Family</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-orange-600 to-green-600 text-white"
              style={{ color: '#ffffff !important' }}>
                <tr>
                  <th className="px-6 py-4 text-left">Specification</th>
                  <th className="px-6 py-4 text-center">Type D (BS 546 5A)</th>
                  <th className="px-6 py-4 text-center">Type M (BS 546 15A)</th>
                  <th className="px-6 py-4 text-left">Practical Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Pin Diameter</td>
                  <td className="px-6 py-4 text-center">5.08mm (0.2")</td>
                  <td className="px-6 py-4 text-center">7.06mm (0.278")</td>
                  <td className="px-6 py-4 text-sm text-gray-600">M pins 40% thicker for higher current</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Pin Spacing</td>
                  <td className="px-6 py-4 text-center">19mm (0.75")</td>
                  <td className="px-6 py-4 text-center">25.4mm (1.0")</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Imperial measurements reveal British origin</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Current Rating</td>
                  <td className="px-6 py-4 text-center">5A continuous</td>
                  <td className="px-6 py-4 text-center">15A continuous</td>
                  <td className="px-6 py-4 text-sm text-gray-600">3x power difference crucial for appliances</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Power at 230V</td>
                  <td className="px-6 py-4 text-center">1,150W max</td>
                  <td className="px-6 py-4 text-center">3,450W max</td>
                  <td className="px-6 py-4 text-sm text-gray-600">D: lights/fans | M: kettles/heaters</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Earth Pin</td>
                  <td className="px-6 py-4 text-center">Longer, thicker</td>
                  <td className="px-6 py-4 text-center">Longer, thicker</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Earth connects first for safety</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Socket Depth</td>
                  <td className="px-6 py-4 text-center">35mm typical</td>
                  <td className="px-6 py-4 text-center">45mm typical</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Deep insertion prevents arc flash</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Wire Gauge Required</td>
                  <td className="px-6 py-4 text-center">1.5mm² minimum</td>
                  <td className="px-6 py-4 text-center">2.5mm² minimum</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Thicker wiring needed for Type M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-900 mb-2">⚡ Power Calculation Examples</h3>
            <p className="text-gray-700">
              <strong>Type D at 5A:</strong> 230V × 5A = 1,150W (ceiling fans, TVs, computers, lights)<br/>
              <strong>Type M at 15A:</strong> 230V × 15A = 3,450W (geysers, air conditioners, ovens)<br/>
              <strong>Safety note:</strong> Never use Type D for high-power appliances - overheating and fire risk!
            </p>
          </div>
        </section>

        {/* Country Distribution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Global Distribution: The British Empire's Electrical Legacy</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Type D (5A) Territories</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">South Asia (Primary)</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🇮🇳 <strong>India</strong> - 230V/50Hz (1.4 billion people)</li>
                    <li>🇳🇵 <strong>Nepal</strong> - 230V/50Hz (30 million)</li>
                    <li>🇱🇰 <strong>Sri Lanka</strong> - 230V/50Hz (22 million)</li>
                    <li>🇧🇹 <strong>Bhutan</strong> - 230V/50Hz (800,000)</li>
                    <li>🇧🇩 <strong>Bangladesh</strong> - 220V/50Hz (Type C/D mix)</li>
                    <li>🇵🇰 <strong>Pakistan</strong> - 230V/50Hz (Type C/D mix)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Africa (Secondary)</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🇳🇦 <strong>Namibia</strong> - 220V/50Hz (D/M mix)</li>
                    <li>🇿🇦 <strong>South Africa</strong> - 230V/50Hz (D for lights)</li>
                    <li>🇬🇭 <strong>Ghana</strong> - 230V/50Hz (D/G mix)</li>
                    <li>🇳🇬 <strong>Nigeria</strong> - 230V/50Hz (D/G mix)</li>
                    <li>🇿🇼 <strong>Zimbabwe</strong> - 220V/50Hz (D/G mix)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Other Regions</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🇲🇲 <strong>Myanmar</strong> - 230V/50Hz (Type C/D/F/G mix)</li>
                    <li>🇱🇾 <strong>Libya</strong> - 230V/50Hz (Type D/L mix)</li>
                    <li>🇮🇶 <strong>Iraq</strong> - 230V/50Hz (Type C/D/G mix)</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-orange-100 rounded">
                  <p className="text-xs text-orange-900">
                    <strong>Population:</strong> ~1.5 billion people primarily use Type D
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Type M (15A) Territories</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Southern Africa (Primary)</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🇿🇦 <strong>South Africa</strong> - 230V/50Hz (60 million)</li>
                    <li>🇧🇼 <strong>Botswana</strong> - 230V/50Hz (2.4 million)</li>
                    <li>🇱🇸 <strong>Lesotho</strong> - 220V/50Hz (2.2 million)</li>
                    <li>🇸🇿 <strong>Eswatini (Swaziland)</strong> - 230V/50Hz (1.2 million)</li>
                    <li>🇳🇦 <strong>Namibia</strong> - 220V/50Hz (2.5 million)</li>
                    <li>🇲🇿 <strong>Mozambique</strong> - 220V/50Hz (Type C/F/M mix)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Mixed Usage Countries</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🇮🇳 <strong>India</strong> - Type M for air conditioners</li>
                    <li>🇱🇰 <strong>Sri Lanka</strong> - Type M for heavy appliances</li>
                    <li>🇮🇱 <strong>Israel</strong> - Old Type M being phased out</li>
                    <li>🇸🇬 <strong>Singapore</strong> - Some legacy Type M</li>
                    <li>🇦🇪 <strong>UAE</strong> - Industrial Type M usage</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Special Cases</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🏭 <strong>Industrial globally:</strong> BS 546 for 3-phase</li>
                    <li>🎭 <strong>Theaters worldwide:</strong> Stage lighting</li>
                    <li>🏥 <strong>Medical equipment:</strong> Isolated circuits</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-green-100 rounded">
                  <p className="text-xs text-green-900">
                    <strong>Population:</strong> ~75 million people primarily use Type M
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-50 rounded-xl">
            <h3 className="text-lg font-bold text-purple-900 mb-3">🌍 The Multi-Standard Reality</h3>
            <p className="text-gray-700 mb-3">
              Many countries use BOTH Type D and M in a tiered system:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>India:</strong> Type D for general use (5A), Type M for air conditioners (15A), Type C for mobile chargers</li>
              <li>• <strong>South Africa:</strong> Type M standard, but Type D common in older buildings, new Type N being introduced</li>
              <li>• <strong>Israel:</strong> Transitioning from Type M to Type H, creating a three-standard environment</li>
            </ul>
          </div>
        </section>

        {/* Historical Context */}
        <section className="mb-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The British BS 546 Story: From Empire Standard to Regional Legacy</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">1889: The Beginning - British General Electric</h3>
              <p className="text-gray-700">
                The round-pin plug system originated in the 1880s British electrical industry. By 1889, GEC (General Electric Company) standardized on round pins with proportional spacing: 0.75" for 5A, 1.0" for 15A, maintaining the sacred 3:4 ratio that ensured incompatibility for safety.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">1934: BS 546 Codification</h3>
              <p className="text-gray-700">
                The British Standards Institution formalized BS 546 "Two-pole and earthing-pin plugs, socket-outlets, and socket-outlet adaptors" covering 2A, 5A, 15A, and 30A variants. This became mandatory across the British Empire, from Delhi to Durban.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">1947: Indian Independence - Keeping the Plugs</h3>
              <p className="text-gray-700">
                When India gained independence, it retained BS 546 as IS 1293:2005. The infrastructure was too extensive to change - millions of sockets in government buildings, railways, and homes. Type D became more entrenched in India than it ever was in Britain.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">1948: South African Apartheid - Electrical Isolation</h3>
              <p className="text-gray-700">
                South Africa's apartheid government maintained BS 546 Type M partly for practical reasons (mining equipment compatibility) and partly as technological isolation. While the world moved to other standards, South Africa doubled down on 15A Type M for everything.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">1962: Britain Abandons BS 546 for Type G</h3>
              <p className="text-gray-700">
                Post-WWII copper shortages led Britain to develop Type G (BS 1363) with fused plugs and rectangular pins. BS 546 was phased out domestically but remained in theaters for stage lighting. Former colonies kept BS 546, creating today's geographic split.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">2000s: The Persistence of Legacy</h3>
              <p className="text-gray-700">
                Despite globalization, Type D and M persist due to massive installed base. India has an estimated 5 billion Type D sockets. South Africa has 200 million Type M sockets. The replacement cost would exceed $100 billion, ensuring BS 546's survival into the 22nd century.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Analysis: 5A vs 15A Design Philosophy</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Type D Safety Features</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-600">🔶</span>
                  <div>
                    <strong>Earth Pin Priority:</strong>
                    <p className="text-sm text-gray-600 mt-1">Longer earth pin (21mm vs 19mm) ensures ground connects first</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600">🔶</span>
                  <div>
                    <strong>Current Limitation:</strong>
                    <p className="text-sm text-gray-600 mt-1">5A max prevents overloading household circuits</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600">🔶</span>
                  <div>
                    <strong>Pin Insulation:</strong>
                    <p className="text-sm text-gray-600 mt-1">Modern Indian plugs have insulated sleeves on live/neutral</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600">⚠️</span>
                  <div>
                    <strong>Weakness:</strong>
                    <p className="text-sm text-gray-600 mt-1">Thin pins (5mm) can bend, loose connections cause arcing</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Type M Safety Features</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600">🟢</span>
                  <div>
                    <strong>Robust Construction:</strong>
                    <p className="text-sm text-gray-600 mt-1">7mm pins resist bending, maintain tight connection</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">🟢</span>
                  <div>
                    <strong>High Current Capacity:</strong>
                    <p className="text-sm text-gray-600 mt-1">15A handles any household appliance without overheating</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">🟢</span>
                  <div>
                    <strong>Deep Socket Design:</strong>
                    <p className="text-sm text-gray-600 mt-1">45mm depth provides excellent arc protection</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600">⚠️</span>
                  <div>
                    <strong>Weakness:</strong>
                    <p className="text-sm text-gray-600 mt-1">Large size makes multi-socket strips impractical</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl">
            <h3 className="font-bold text-red-900 mb-3">🔥 Fire Safety Statistics</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>India (Type D dominant):</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 25,000 electrical fires annually</li>
                  <li>• 40% from overloaded Type D circuits</li>
                  <li>• Common: Using D for air conditioners</li>
                  <li>• Solution: Mandatory Type M for devices over 1000W</li>
                </ul>
              </div>
              <div>
                <strong>South Africa (Type M dominant):</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 8,000 electrical fires annually</li>
                  <li>• 15% from plug/socket failures</li>
                  <li>• Robust Type M reduces incidents</li>
                  <li>• Issue: Illegal Type D for high loads</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility Issues */}
        <section className="mb-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Compatibility Matrix: The D/M Challenge</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-orange-600 to-green-600 text-white"
              style={{ color: '#ffffff !important' }}>
                <tr>
                  <th className="px-4 py-3 text-left">Configuration</th>
                  <th className="px-4 py-3 text-center">Physical Fit</th>
                  <th className="px-4 py-3 text-center">Electrical Safety</th>
                  <th className="px-4 py-3 text-left">Risk Assessment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Type D → Type M socket</td>
                  <td className="px-4 py-3 text-center">❌ No fit</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Pins too thin, wrong spacing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Type M → Type D socket</td>
                  <td className="px-4 py-3 text-center">❌ No fit</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Pins too thick, won't enter</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Type D → Multi-socket</td>
                  <td className="px-4 py-3 text-center">✅ Yes</td>
                  <td className="px-4 py-3 text-center">✅ Safe</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Indian multi-sockets accept D/C/M</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Type M → Multi-socket</td>
                  <td className="px-4 py-3 text-center">✅ Yes</td>
                  <td className="px-4 py-3 text-center">⚠️ Check rating</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Ensure socket rated for 15A</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Type C → Type D socket</td>
                  <td className="px-4 py-3 text-center">⚠️ Loose</td>
                  <td className="px-4 py-3 text-center">❌ Dangerous</td>
                  <td className="px-4 py-3 text-sm text-gray-600">No earth, poor contact</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Type G → D/M socket</td>
                  <td className="px-4 py-3 text-center">❌ No fit</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Completely different design</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-3">🔌 Indian Universal Sockets</h3>
              <p className="text-gray-700 mb-2">
                India's solution: 6A universal sockets accepting Type C, D, and M (but limited to 6A for safety). These hexagonal monsters have 6 holes accommodating multiple standards.
              </p>
              <p className="text-sm text-gray-600">
                Pros: Maximum compatibility | Cons: Compromised connection quality
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-bold text-green-900 mb-3">🔄 South African Transition</h3>
              <p className="text-gray-700 mb-2">
                South Africa introduced Type N (IEC 60906-1) as the future standard but maintains Type M. New buildings have both, creating a three-standard environment (M, N, and Europlug C).
              </p>
              <p className="text-sm text-gray-600">
                Timeline: Type N mandatory by 2025, Type M phase-out by 2050
              </p>
            </div>
          </div>
        </section>

        {/* Regional Usage Patterns */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Regional Usage Patterns & Local Practices</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">🇮🇳 India's Tiered Power System</h3>
              <p className="text-gray-700 mb-3">
                India uses a sophisticated tiered approach based on load requirements:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Type C (2-pin):</strong> Mobile chargers, LED bulbs - under 6A</li>
                <li><strong>Type D (5A):</strong> Fans, TVs, computers, small appliances - up to 1150W</li>
                <li><strong>Type M (15A):</strong> Air conditioners, washing machines, geysers - up to 3450W</li>
                <li><strong>Industrial 3-phase:</strong> BS 546 32A for heavy machinery</li>
              </ul>
              <p className="mt-3 text-xs text-gray-600 italic">
                Common issue: Using multiple Type D plugs for one air conditioner instead of proper Type M
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">🇿🇦 South Africa's Universal Type M</h3>
              <p className="text-gray-700 mb-3">
                South Africa uniquely uses Type M for everything, from phone chargers to pool pumps:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Advantage:</strong> No confusion about which plug to use</li>
                <li><strong>Disadvantage:</strong> Bulky plugs for small devices</li>
                <li><strong>Adaptation:</strong> Multi-plugs with built-in Type C/D converters common</li>
                <li><strong>Load shedding impact:</strong> Robust Type M handles power fluctuations better</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">🏭 Industrial & Special Applications</h3>
              <p className="text-gray-700 mb-3">
                BS 546 remains the global standard for specific industries:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Theater/Stage:</strong> BS 546 15A for lighting worldwide (even in UK/USA)</li>
                <li><strong>Medical:</strong> Red BS 546 sockets for essential/UPS circuits</li>
                <li><strong>Mining:</strong> 32A BS 546 for equipment compatibility</li>
                <li><strong>Railways:</strong> Indian Railways uses BS 546 exclusively</li>
                <li><strong>Data Centers:</strong> BS 546 for rack PDUs in Commonwealth countries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="mb-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Economic Analysis: The Cost of Colonial Infrastructure</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Manufacturing Costs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Type D plug:</strong> ₹25-40 ($0.30-0.50)</li>
                <li><strong>Type M plug:</strong> ₹60-100 ($0.75-1.25)</li>
                <li><strong>Type D socket:</strong> ₹40-80 ($0.50-1.00)</li>
                <li><strong>Type M socket:</strong> ₹120-200 ($1.50-2.50)</li>
              </ul>
              <p className="mt-3 text-xs text-gray-600">
                Type M costs 2.5x more due to heavier materials
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Infrastructure Investment</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>India Type D:</strong> $50B installed base</li>
                <li><strong>SA Type M:</strong> $8B installed base</li>
                <li><strong>Replacement cost:</strong> $200B combined</li>
                <li><strong>Annual maintenance:</strong> $2B</li>
              </ul>
              <p className="mt-3 text-xs text-gray-600">
                Too expensive to change, ensuring 50+ year persistence
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Adapter Economy</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>D to M adapter:</strong> $2-5 each</li>
                <li><strong>Universal adapter:</strong> $8-15</li>
                <li><strong>Annual sales:</strong> 200M units</li>
                <li><strong>Market value:</strong> $800M/year</li>
              </ul>
              <p className="mt-3 text-xs text-gray-600">
                Thriving adapter industry due to incompatibility
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
            <h3 className="font-bold text-yellow-900 mb-3">💰 The Hidden Costs</h3>
            <p className="text-gray-700 mb-3">
              The D/M incompatibility costs the Indian economy an estimated $500M annually:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Electrical fires from wrong plug usage: $200M damages</li>
              <li>• Productivity loss from incompatible equipment: $150M</li>
              <li>• Adapter purchases and replacements: $100M</li>
              <li>• Rewiring costs for load upgrades: $50M</li>
            </ul>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-16 bg-green-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Footprint: The Brass and Copper Legacy</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Material Consumption</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Type D specifications:</strong>
                  <p className="text-sm text-gray-600">15g brass pins, 25g bakelite/plastic body</p>
                  <p className="text-sm text-gray-600">India produces 500M plugs/year = 7,500 tons brass</p>
                </li>
                <li>
                  <strong>Type M specifications:</strong>
                  <p className="text-sm text-gray-600">35g brass pins, 45g plastic body</p>
                  <p className="text-sm text-gray-600">South Africa: 20M plugs/year = 700 tons brass</p>
                </li>
                <li>
                  <strong>Recycling rates:</strong>
                  <p className="text-sm text-gray-600">Brass: 85% recycled | Plastic: 20% recycled</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Sustainability Challenges</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Brass mining impact:</strong>
                  <p className="text-sm text-gray-600">Copper/zinc extraction for 8,200 tons annually</p>
                </li>
                <li>
                  <strong>E-waste generation:</strong>
                  <p className="text-sm text-gray-600">300M disposed plugs/year in India alone</p>
                </li>
                <li>
                  <strong>Energy inefficiency:</strong>
                  <p className="text-sm text-gray-600">Poor connections waste 0.5% of transmitted power</p>
                </li>
                <li>
                  <strong>Carbon footprint:</strong>
                  <p className="text-sm text-gray-600">0.8kg CO₂ per Type D, 1.4kg per Type M manufactured</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Transitions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Future: Modernization vs Legacy</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">India's Smart Grid Initiative</h3>
                <p className="text-gray-700 mb-3">
                  India plans to maintain Type D/M while adding smart features:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• IoT-enabled Type D sockets for demand management</li>
                  <li>• Automatic D/M detection and current limiting</li>
                  <li>• Retrofit smart plugs maintaining BS 546 form factor</li>
                  <li>• Target: 100M smart sockets by 2030</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">South Africa's Type N Transition</h3>
                <p className="text-gray-700 mb-3">
                  SA's ambitious plan to adopt IEC 60906-1 (Type N) faces challenges:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Type N mandatory in new construction from 2025</li>
                  <li>• Type M remains legal indefinitely (grandfathered)</li>
                  <li>• Dual socket installations creating confusion</li>
                  <li>• Resistance from industries dependent on Type M</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">USB-C Can't Replace BS 546</h3>
                <p className="text-gray-700">
                  Unlike Europe where USB-C might replace Type C/E/F for small devices, the high-power requirements in India (fans, coolers) and South Africa (geysers, pool pumps) mean BS 546 will persist. USB-C's 240W limit can't handle a 2000W room heater or 3000W geyser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Travel Adapter Guide for D/M Countries</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Traveling to India</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">What You Need:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🔌 Type D adapter (essential)</li>
                    <li>🔌 Type C adapter (for modern hotels)</li>
                    <li>🔌 Type M adapter (if using high-power devices)</li>
                    <li>⚡ Voltage: 230V (no converter for US devices needed if dual voltage)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Where to Buy:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Airport shops: ₹200-500 ($3-7)</li>
                    <li>• Electronic markets: ₹50-150 ($1-2)</li>
                    <li>• Hotels often provide adapters</li>
                    <li>• Amazon India delivers to hotels</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Pro Tips:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Carry a power strip - outlets are scarce</li>
                    <li>• USB chargers work in any socket type</li>
                    <li>• Avoid multi-socket adapters (fire risk)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Traveling to South Africa</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">What You Need:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>🔌 Type M adapter (absolutely essential)</li>
                    <li>🔌 Type C adapter (some hotels have Europlugs)</li>
                    <li>🔌 Type N adapter (newest buildings)</li>
                    <li>⚡ Voltage: 230V (same as Europe/Asia)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Where to Buy:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• OR Tambo Airport: R50-150 ($3-10)</li>
                    <li>• Checkers/Pick n Pay: R20-50 ($1-3)</li>
                    <li>• Hotels sell at premium prices</li>
                    <li>• Takealot.com for online delivery</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Load Shedding Alert:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Check EskomSePush app for schedules</li>
                    <li>• Charge devices when power is on</li>
                    <li>• Consider portable power banks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-purple-50 rounded-xl">
            <h3 className="font-bold text-purple-900 mb-3">🌍 Universal Adapter Limitations</h3>
            <p className="text-gray-700 mb-2">
              Most "universal" travel adapters DON'T properly support Type M due to the large pin size and spacing. Check specifically for "South Africa Type M" compatibility. Type D is often included but may have loose connections.
            </p>
            <p className="text-sm text-gray-600">
              Best solution: Buy proper Type D/M adapters at your destination - they're cheap and reliable.
            </p>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Reference: D vs M Decision Guide</h2>
          
          <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-orange-900 mb-4">Use Type D When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ In India, Nepal, Sri Lanka, Bangladesh</li>
                  <li>✅ Powering devices under 1000W</li>
                  <li>✅ Ceiling fans, lights, TVs, computers</li>
                  <li>✅ Space is limited (multi-socket strips)</li>
                  <li>✅ Budget-conscious installations</li>
                  <li>✅ Existing Type D infrastructure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-900 mb-4">Use Type M When:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>⚡ In South Africa, Botswana, Namibia</li>
                  <li>⚡ Powering devices over 1500W</li>
                  <li>⚡ Air conditioners, geysers, ovens</li>
                  <li>⚡ Industrial or commercial applications</li>
                  <li>⚡ Safety is paramount (robust design)</li>
                  <li>⚡ High-current continuous loads</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center p-4 bg-white rounded-lg">
              <p className="text-gray-700 font-semibold">
                Remember: Type D and M are NOT interchangeable. Using the wrong type risks fire, equipment damage, and electrocution. When in doubt, consult a local electrician.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gray-50 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Navigate BS 546 Standards with Confidence
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're traveling to India's tech hubs or South Africa's game reserves, understanding Type D and M plugs ensures you stay powered up safely.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/india-electric-plug-types"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-bold text-lg"
              style={{ color: '#ffffff !important' }}
            >
              Explore India (Type D)
            </Link>
            <Link 
              href="/south-africa-electric-plug-types"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg"
              style={{ color: '#ffffff !important' }}
            >
              Explore South Africa (Type M)
            </Link>
            <Link 
              href="/tools/adapter-finder"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-bold text-lg"
              style={{ color: '#ffffff !important' }}
            >
              Find Your Adapter
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}