'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { COUNTRIES } from '@/data/countries';
import Header from '@/components/layout/Header';

const WorldMap = dynamic(() => import('@/components/map/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-50 flex items-center justify-center">
      <p className="text-gray-500 text-sm">Loading map...</p>
    </div>
  ),
});

const CountrySearch = dynamic(() => import('@/components/CountrySearch'), {
  ssr: false,
});

const continents = [
  { name: 'Europe', slug: 'europe' },
  { name: 'Asia', slug: 'asia' },
  { name: 'Africa', slug: 'africa' },
  { name: 'North America', slug: 'north-america' },
  { name: 'South America', slug: 'south-america' },
  { name: 'Oceania', slug: 'oceania' },
  { name: 'Middle East', slug: 'middle-east' },
];

const plugTypes = [
  {
    type: 'a',
    image: 'type-a-electric-plug-and-socket.webp',
    description: 'Type A plugs are used primarily in North America, Central America, and parts of South America and Asia. They have two flat parallel pins and no grounding pin. This plug type is rated for 15 A and is used with devices that require less power.'
  },
  {
    type: 'b',
    image: 'type-b-electric-plug-and-socket.webp',
    description: 'Type B is similar to Type A but includes a third pin for grounding. It is the standard grounded plug in North America. The grounding pin is longer than the other two so that it makes contact first, providing extra safety.'
  },
  {
    type: 'c',
    image: 'type-c-electric-plug-and-socket.webp',
    description: 'Type C plugs are commonly called "Europlug" and are used throughout Europe, Asia, and South America. They have two round pins and no grounding. This plug type is designed to fit into any socket that accepts 4.0 – 4.8 mm round contacts with 19 mm spacing.'
  },
  {
    type: 'd',
    image: 'type-d-electric-plug-and-socket.webp',
    description: 'Type D plugs have three round pins and are used primarily in India, Sri Lanka, Nepal, and some African countries. This plug type is based on the old British 5 amp BS 546 plug. The pins are arranged in a triangular pattern.'
  },
  {
    type: 'e',
    image: 'type-e-electric-plug-and-socket.webp',
    description: 'Type E plugs are used in France, Belgium, Poland, Slovakia, and some other European and African countries. They have two round pins like Type C, but also have a hole for the socket\'s grounding pin.'
  },
  {
    type: 'f',
    image: 'type-f-electric-plug-and-socket.webp',
    description: 'Type F plugs are commonly called "Schuko" plugs (from "Schutzkontakt" meaning protective contact). They are used in Germany, Austria, Netherlands, Sweden, Norway, Finland, and many other European countries. They have two round pins and two grounding clips.'
  },
  {
    type: 'g',
    image: 'type-g-electric-plug-and-socket.webp',
    description: 'Type G plugs are used in the United Kingdom, Ireland, Cyprus, Malta, Malaysia, Singapore, and Hong Kong. They have three rectangular pins in a triangular pattern and include a fuse in the plug for additional safety.'
  },
  {
    type: 'h',
    image: 'type-h-electric-plug-and-socket.webp',
    description: 'Type H plugs are used exclusively in Israel and Palestine. They have three flat pins arranged in a triangle pattern. This plug type is unique to Israel and is not compatible with plugs from other countries.'
  },
  {
    type: 'i',
    image: 'type-i-electric-plug-and-socket.webp',
    description: 'Type I plugs are used in Australia, New Zealand, Papua New Guinea, and Argentina. They have two flat angled pins and may include a grounding pin. The pins form a distinctive upside-down V shape.'
  },
  {
    type: 'j',
    image: 'type-j-electric-plug-and-socket.webp',
    description: 'Type J plugs are used in Switzerland and Liechtenstein. They have three round pins: two for the line and neutral, and one offset grounding pin. Type C plugs can be used in Type J sockets.'
  },
  {
    type: 'k',
    image: 'type-k-electric-plug-and-socket.webp',
    description: 'Type K plugs are used primarily in Denmark and Greenland. They have two round pins like Type C, plus a grounding pin. Denmark is gradually switching to Type E plugs for new installations.'
  },
  {
    type: 'l',
    image: 'type-l-electric-plug-and-socket.webp',
    description: 'Type L plugs are used in Italy and Chile. They have three round pins in a straight line. There are two versions: 10A and 16A. The 10A version is compatible with Type C plugs.'
  },
  {
    type: 'm',
    image: 'type-m-electric-plug-and-socket.webp',
    description: 'Type M plugs are used in South Africa, Swaziland, and Lesotho. They have three large round pins and are based on the old British 15 amp BS 546 plug. This is a larger version of the Type D plug.'
  },
  {
    type: 'n',
    image: 'type-n-electric-plug-and-socket.webp',
    description: 'Type N plugs are used in Brazil. This is a newer IEC standard that was developed to be safer and more versatile. It can accept both Type C plugs and Type N plugs, and includes grounding.'
  }
];

type SortKey = 'country' | 'plugTypes' | 'voltage';
type SortOrder = 'asc' | 'desc';

export default function HomePage() {
  const [sortKey, setSortKey] = useState<SortKey>('country');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedCountries = useMemo(() => {
    return [...COUNTRIES].sort((a, b) => {
      let comparison = 0;
      
      switch (sortKey) {
        case 'country':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'plugTypes':
          comparison = a.plugTypes.join(',').localeCompare(b.plugTypes.join(','));
          break;
        case 'voltage':
          comparison = a.voltage - b.voltage;
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [sortKey, sortOrder]);

  const getCountryDescription = (country: any) => {
    // Generate 2-3 sentence descriptions for each country based on their electrical characteristics
    const plugTypeText = country.plugTypes.map((type: string) => `Type ${type}`).join(', ');
    const isUniversal = country.plugTypes.includes('C') || country.plugTypes.includes('F');
    const voltage = country.voltage;
    const frequency = country.frequency;
    
    let description = `${country.name} uses ${plugTypeText} electrical outlets with ${voltage}V at ${frequency}Hz frequency. `;
    
    // Add specific insights based on plug types and electrical characteristics
    if (country.plugTypes.includes('A') && country.plugTypes.includes('B')) {
      description += `Standard North American electrical system with grounded and ungrounded outlets. Most modern electronics work without adapters.`;
    } else if (country.plugTypes.includes('G')) {
      description += `British-style three-pin system with built-in fuses for enhanced safety. Distinctive rectangular pins require specific adapters.`;
    } else if (country.plugTypes.includes('I')) {
      description += `Australian/New Zealand standard with angled pins for secure connection. Unique design prevents accidental disconnection.`;
    } else if (isUniversal) {
      description += `European standard system compatible with most continental European devices. Widely adopted for international compatibility.`;
    } else if (country.plugTypes.includes('D') || country.plugTypes.includes('M')) {
      description += `Three-pin system common in former British colonies. Larger Type M for high-power appliances, Type D for general use.`;
    } else if (country.plugTypes.includes('N')) {
      description += `Modern Brazilian standard introduced in 2002 for improved safety. IEC-compliant design with enhanced grounding protection.`;
    } else {
      description += `Regional electrical standard requiring specific adapters for international travelers. Check device compatibility before travel.`;
    }
    
    return description;
  };

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Enhanced Intro Text */}
        <section className="py-12">
          <div className="max-w-[860px] mx-auto px-4">
            <div className="text-[15px] leading-[1.7] text-gray-800 space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h2 className="font-bold text-lg mb-2">🌍 Why Electrical Standards Matter for Travelers</h2>
                <p className="mb-3">
                  There are <strong>15 different plug types</strong> used across 227 countries and territories, with voltages ranging from <strong>100V to 240V</strong>.
                  Using the wrong adapter or plugging into incompatible voltage can damage your devices or even cause electrical hazards.
                </p>
                <p>
                  <strong>Did you know?</strong> The UK uses Type G plugs with built-in fuses, while Europe uses Types C, E, and F. 
                  The US uses Types A and B at 120V, but most of the world operates at 220-240V.
                </p>
              </div>
              
              <p>
                When traveling internationally, ensuring you can charge your essential devices—phones, laptops, cameras, and medical equipment—is crucial. 
                Different countries have evolved their own electrical standards over the past century, resulting in a complex global landscape of plug types, 
                voltages, and frequencies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">✅ What This Guide Provides:</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Plug types for 227 countries & territories</li>
                    <li>• Voltage and frequency standards</li>
                    <li>• Adapter compatibility charts</li>
                    <li>• Safety tips for each destination</li>
                    <li>• Visual plug identification</li>
                    <li>• Universal adapter recommendations</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">⚠️ Common Travel Mistakes:</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Forgetting voltage converters (not just adapters)</li>
                    <li>• Using cheap, unsafe adapters</li>
                    <li>• Not checking device voltage ratings</li>
                    <li>• Assuming neighboring countries match</li>
                    <li>• Buying adapters at airports (3x price)</li>
                    <li>• Not having backup charging options</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">💡 Pro Tip: The 80% Rule</h3>
                <p className="text-green-800">
                  A universal adapter covering Types A, C, G, and I will work in approximately 80% of countries worldwide. 
                  However, always check your specific destination as some countries (like India with Type D, Israel with Type H, 
                  or South Africa with Type M) require specific adapters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced World Map Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-full mx-auto px-4">
            <div className="max-w-[860px] mx-auto mb-6">
              <h2 className="text-2xl font-bold mb-4">🌎 Interactive World Electrical Standards Map</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🖱️</span>
                    <div>
                      <strong>Click Countries</strong><br/>
                      View plug types, voltage, and adapter needs
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🔍</span>
                    <div>
                      <strong>Hover for Details</strong><br/>
                      See quick info without clicking
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🎨</span>
                    <div>
                      <strong>Color Coded</strong><br/>
                      Similar electrical systems share colors
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <WorldMap />
            
            {/* Enhanced Map Legend */}
            <div className="max-w-[860px] mx-auto mt-8">
              <h3 className="font-semibold mb-4 text-center">Global Electrical Standards by Region:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full bg-red-500 mr-3"></span>
                    <strong className="text-sm">Type A/B - North America</strong>
                  </div>
                  <p className="text-xs text-gray-600">USA, Canada, Mexico, Japan</p>
                  <p className="text-xs mt-1">120V @ 60Hz (Japan: 100V @ 50/60Hz)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full bg-blue-500 mr-3"></span>
                    <strong className="text-sm">Type C/E/F - Continental Europe</strong>
                  </div>
                  <p className="text-xs text-gray-600">Germany, France, Spain, Italy</p>
                  <p className="text-xs mt-1">230V @ 50Hz</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full bg-green-500 mr-3"></span>
                    <strong className="text-sm">Type G - British Standard</strong>
                  </div>
                  <p className="text-xs text-gray-600">UK, Ireland, Singapore, Malaysia</p>
                  <p className="text-xs mt-1">230V @ 50Hz (with fused plugs)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full bg-purple-500 mr-3"></span>
                    <strong className="text-sm">Type I - Oceania & China</strong>
                  </div>
                  <p className="text-xs text-gray-600">Australia, New Zealand, China, Argentina</p>
                  <p className="text-xs mt-1">220-240V @ 50Hz</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></span>
                    <strong className="text-sm">Type D/M - India & Africa</strong>
                  </div>
                  <p className="text-xs text-gray-600">India, South Africa, Nepal</p>
                  <p className="text-xs mt-1">220-240V @ 50Hz</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full bg-gray-500 mr-3"></span>
                    <strong className="text-sm">Mixed/Unique Standards</strong>
                  </div>
                  <p className="text-xs text-gray-600">Brazil (Type N), Israel (Type H), Switzerland (Type J)</p>
                  <p className="text-xs mt-1">Varies by country</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electric Plug Types Table */}
        <section className="py-12">
          <div className="max-w-[900px] mx-auto px-4">
            <h2 className="text-[20px] font-semibold text-gray-900 mb-8">Electric Plug Types</h2>
            <div className="divide-y divide-gray-200">
              {plugTypes.map((plug, index) => (
                <div key={plug.type} className={`py-6 flex gap-8 ${index === 0 ? '' : 'border-t border-gray-200'}`}>
                  <div className="flex-shrink-0">
                    <Link href={`/plug-type/type-${plug.type}`}>
                      <div className="w-[150px] h-[125px] border border-gray-300 bg-white p-2 hover:border-gray-400 transition-colors">
                        <img
                          src={`/images/plugs/${plug.image}`}
                          alt={`Type ${plug.type.toUpperCase()} plug and socket`}
                          width={150}
                          height={125}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Type {plug.type.toUpperCase()}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-gray-700">
                      {plug.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Countries Table */}
        <section className="py-12">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-[20px] font-semibold text-gray-900 mb-8">All Countries And Plug Types</h2>
            <div className="border border-gray-200 overflow-x-auto">
              <table className="w-full text-[14px] min-w-[1000px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-700 font-medium">Flag</th>
                    <th 
                      className="px-4 py-3 text-left text-gray-700 font-medium cursor-pointer hover:text-blue-600"
                      onClick={() => handleSort('country')}
                    >
                      Country 
                      {sortKey === 'country' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
                    </th>
                    <th 
                      className="px-4 py-3 text-left text-gray-700 font-medium cursor-pointer hover:text-blue-600"
                      onClick={() => handleSort('plugTypes')}
                    >
                      Plug Types
                      {sortKey === 'plugTypes' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
                    </th>
                    <th 
                      className="px-4 py-3 text-left text-gray-700 font-medium cursor-pointer hover:text-blue-600"
                      onClick={() => handleSort('voltage')}
                    >
                      Voltage/Hz
                      {sortKey === 'voltage' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
                    </th>
                    <th className="px-4 py-3 text-left text-gray-700 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCountries.map((country, index) => (
                    <tr 
                      key={country.iso2}
                      className={`h-9 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}
                    >
                      <td className="px-4 py-2">
                        <img
                          src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`}
                          alt=""
                          width={20}
                          height={15}
                          className="inline-block"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <Link
                          href={`/${country.slug}`}
                          className="text-blue-600 hover:underline"
                        >
                          {country.name}
                        </Link>
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {country.plugTypes.map(type => `Type ${type}`).join(', ')}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {country.voltage}V / {country.frequency}Hz
                      </td>
                      <td className="px-4 py-2 text-gray-600 text-sm">
                        {getCountryDescription(country)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Travel Safety Tips Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[900px] mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">⚡ Essential Electrical Safety Tips for Travelers</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 text-red-600">🔴 High Priority Safety Rules</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">1.</span>
                    <span><strong>Check voltage compatibility first</strong> - Using 120V devices in 240V countries without a converter will destroy them instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">2.</span>
                    <span><strong>Never force plugs</strong> - If it doesn't fit easily, you have the wrong adapter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">3.</span>
                    <span><strong>Avoid daisy-chaining adapters</strong> - Multiple adapters stacked create fire hazards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">4.</span>
                    <span><strong>Use surge protectors</strong> - Protect expensive electronics from voltage spikes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">5.</span>
                    <span><strong>Check adapter ratings</strong> - Ensure they can handle your device's power requirements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 text-green-600">✅ Smart Travel Practices</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Buy quality adapters</strong> - CE or UL certified adapters are worth the extra cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Pack extras</strong> - Bring 2-3 adapters in case one fails or gets lost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Use USB charging</strong> - USB power banks and chargers work worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Hotel USB ports</strong> - Many modern hotels have USB outlets built-in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Label your adapters</strong> - Mark them with your contact info in case of loss</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Voltage Converter vs. Plug Adapter - Know the Difference!</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">🔌 Plug Adapter</h4>
                  <p className="text-yellow-800 mb-2">Only changes the plug shape. Does NOT convert voltage.</p>
                  <p className="text-yellow-700">Use for: Dual-voltage devices (100-240V) like phone chargers, laptops</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">⚡ Voltage Converter</h4>
                  <p className="text-yellow-800 mb-2">Changes voltage (e.g., 240V to 120V). Usually includes plug adapter.</p>
                  <p className="text-yellow-700">Use for: Single-voltage devices like hair dryers, electric shavers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links to Tools */}
        <section className="py-12 bg-white">
          <div className="max-w-[900px] mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">🛠️ Helpful Travel Planning Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/tools/adapter-finder" className="block p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">🔍 Adapter Finder</h3>
                <p className="text-sm text-gray-700">Enter your origin and destination to find exactly which adapter you need</p>
              </Link>
              <Link href="/tools/voltage-calculator" className="block p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">⚡ Voltage Calculator</h3>
                <p className="text-sm text-gray-700">Check if your devices will work safely at your destination's voltage</p>
              </Link>
              <Link href="/tools/trip-planner" className="block p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">✈️ Trip Planner</h3>
                <p className="text-sm text-gray-700">Plan multi-country trips and see all adapter requirements at once</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[900px] mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">❓ Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2">What's the most universal travel adapter?</h3>
                <p className="text-gray-700">A universal adapter with sliding pins that covers Types A, C, G, and I will work in about 150+ countries. However, it won't work everywhere - countries like India (Type D), Israel (Type H), and South Africa (Type M) need specific adapters.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2">Do I need a voltage converter for my phone and laptop?</h3>
                <p className="text-gray-700">Most modern phones, laptops, tablets, and camera chargers are dual-voltage (100-240V) and only need a plug adapter. Check your charger - if it says "INPUT: 100-240V" you're good with just an adapter.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2">Which devices typically need voltage converters?</h3>
                <p className="text-gray-700">Hair dryers, straighteners, curling irons, electric shavers, and other heating/motor devices often only work at one voltage. Many travelers buy dual-voltage travel versions or use hotel-provided appliances instead.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2">Can I use a European adapter in the UK?</h3>
                <p className="text-gray-700">No. The UK uses Type G plugs with rectangular pins, while continental Europe uses Types C, E, and F with round pins. They are completely incompatible. Ireland also uses Type G like the UK.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-2">Why do different countries use different plugs?</h3>
                <p className="text-gray-700">Electrical standards developed independently in different countries during the early 20th century. By the time international travel became common, billions had been invested in infrastructure, making standardization economically unfeasible.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}