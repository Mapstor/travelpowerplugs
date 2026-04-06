import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import TripPlannerTool from '@/components/tools/TripPlannerTool';

export const metadata: Metadata = {
  title: 'Travel Adapter Planner for Multi-Country Trips | Country-to-Country Guide',
  description: 'Plan your travel adapters for any trip. Detailed country-to-country guides: USA to Italy, UK to Japan, Australia to Thailand. Universal adapter calculator for 227 countries and territories.',
  keywords: 'multi country trip planner, travel adapter planner, USA to Italy adapter, UK to Japan plug, country to country adapter guide, universal adapter calculator, international travel adapter planner, voltage converter guide, Europe Asia adapter, backpacking adapter guide, digital nomad power adapter',
  authors: [{ name: 'Marko Visic' }],
  openGraph: {
    title: 'Travel Adapter Planner - Country-to-Country Power Guide',
    description: 'Complete adapter guide for international travel. Detailed requirements for USA to Europe, UK to Asia, and 250+ country combinations. Plan your adapters perfectly.',
    type: 'website',
    url: 'https://travelpowerplugs.com/tools/trip-planner',
    siteName: 'Travel Power Plugs',
    images: [
      {
        url: '/og/trip-planner.png',
        width: 1200,
        height: 630,
        alt: 'Multi-country travel adapter planning tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Adapter Planner for Any Trip',
    description: 'Plan adapters for USA to Italy, UK to Japan, and any country combination. Universal adapter guide.',
  },
  alternates: {
    canonical: 'https://travelpowerplugs.com/tools/trip-planner',
  },
};

export default function TripPlannerPage() {
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Travel Adapter Planner - Country to Country Guide",
    "description": "Plan travel adapters for any international trip. Detailed guides for USA to Italy, UK to Japan, Australia to Thailand, and 250+ country combinations.",
    "url": "https://travelpowerplugs.com/tools/trip-planner",
    "applicationCategory": "Travel",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Country-to-country adapter guides",
      "Voltage converter calculator",
      "Universal adapter recommendations",
      "Multi-country trip planning",
      "Plug type compatibility checker"
    ]
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What adapter do I need from USA to Italy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For USA to Italy travel, you need a Type L adapter (Italy's unique 3-pin inline plug) and a Type C adapter as backup. Italy uses 230V/50Hz vs USA's 120V/60Hz, so check if your devices are dual voltage (100-240V label)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a voltage converter from UK to Japan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UK to Japan requires a Type A adapter. Japan uses 100V (world's lowest) vs UK's 230V. Most modern electronics work but may charge slowly. Hair dryers and straighteners may not work properly due to voltage difference."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best universal adapter for multi-country travel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A universal adapter covering Types A, B, C, E, F, G, and I covers about 95% of countries. However, South Africa (Type M), Israel (Type H), and Italy (Type L) may need specific adapters."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use my Australian plugs in Thailand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Australian Type I plugs don't work in Thailand which uses Types A, B, C, and O. You'll need a universal adapter. No voltage converter needed (Thailand 220V, Australia 230V are compatible)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need different adapters for each European country?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most of continental Europe uses Type C/E/F plugs interchangeably. One European adapter works in Germany, France, Spain, Netherlands, etc. UK and Ireland use Type G (different adapter needed)."
        }
      }
    ]
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Choose Travel Adapters for International Trips",
    "description": "Step-by-step guide to selecting the right travel adapters and voltage converters",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check your destination's plug types",
        "text": "Look up the plug types used in your destination country"
      },
      {
        "@type": "HowToStep",
        "name": "Compare voltages",
        "text": "Check if destination voltage matches your devices (look for 100-240V on labels)"
      },
      {
        "@type": "HowToStep",
        "name": "Choose adapter type",
        "text": "Select specific country adapter or universal adapter based on your needs"
      },
      {
        "@type": "HowToStep",
        "name": "Consider voltage converter",
        "text": "Only needed if your devices aren't dual voltage (hair tools often aren't)"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <Header showFullNav={true} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Multi-Country Trip Planner
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Planning a multi-country trip? Get a complete packing list with the adapters 
            and converters you'll need for all your destinations.
          </p>
        </div>

        <TripPlannerTool />

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Traveler-Specific Packing Guides</h2>
          
          {/* Business Traveler */}
          <div className="mb-12 bg-white rounded-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Business Traveler</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-purple-700">Essential Adapters</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Compact universal adapter (Anker PowerPort III)</li>
                  <li>• USB-C PD charger (65W minimum)</li>
                  <li>• Laptop-specific adapter backup</li>
                  <li>• Car charger for ground transport</li>
                  <li>• Airline adapter for long flights</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-purple-700">Power Banks & Backup</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 20,000mAh power bank (TSA compliant)</li>
                  <li>• Laptop power bank (if available)</li>
                  <li>• Wireless charging pad for hotels</li>
                  <li>• Multi-port USB hub</li>
                  <li>• Cable organizer pouch</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-purple-700">Pro Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Check hotel room outlets beforehand</li>
                  <li>• Pack adapters in carry-on always</li>
                  <li>• Bring presentation clicker backup</li>
                  <li>• Test all equipment before departure</li>
                  <li>• Keep receipts for expense reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Digital Nomad */}
          <div className="mb-12 bg-white rounded-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800">Digital Nomad</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Complete Kit</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• World universal adapter with all types</li>
                  <li>• Multiple USB-C cables (2m length)</li>
                  <li>• Portable monitor adapter (HDMI/USB-C)</li>
                  <li>• Ethernet to USB adapter</li>
                  <li>• Extension cord with multiple outlets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Long-term Setup</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Surge protector power strip</li>
                  <li>• Voltage converter (for hairdryer)</li>
                  <li>• Solar power bank for outdoor work</li>
                  <li>• Backup everything (cables, adapters)</li>
                  <li>• Local SIM/eSIM for internet backup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Nomad Wisdom</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Buy local adapters in each country</li>
                  <li>• Keep adapters for future visits</li>
                  <li>• Join nomad groups for equipment tips</li>
                  <li>• Test coworking spaces' power setup</li>
                  <li>• Always have offline backup plans</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backpacker */}
          <div className="mb-12 bg-white rounded-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800">Budget Backpacker</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-orange-700">Minimal Essentials</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Single universal adapter (Epicka/TESSAN)</li>
                  <li>• USB-A to everything cables</li>
                  <li>• Lightweight power bank (10,000mAh)</li>
                  <li>• Shared charging cable (micro-USB/USB-C)</li>
                  <li>• Waterproof storage bag</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-orange-700">Budget Hacks</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Buy cheap local adapters as backup</li>
                  <li>• Share adapters with travel buddies</li>
                  <li>• Use hostels' charging stations</li>
                  <li>• Solar charger for long treks</li>
                  <li>• Multi-tool with electrical components</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-orange-700">Safety First</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Avoid cheap fake adapters</li>
                  <li>• Check voltage before plugging in</li>
                  <li>• Keep electronics in waterproof bags</li>
                  <li>• Backup photos/contacts regularly</li>
                  <li>• Know local emergency numbers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Family Traveler */}
          <div className="mb-12 bg-white rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Family Traveler</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Family Electronics</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Multiple universal adapters (one per person)</li>
                  <li>• Car charger with multiple ports</li>
                  <li>• Tablet/iPad chargers for kids</li>
                  <li>• Camera/GoPro charging setup</li>
                  <li>• Baby monitor adapter (if needed)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Kid-Friendly Gear</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Outlet covers for safety</li>
                  <li>• Night light with adapter</li>
                  <li>• Portable white noise machine</li>
                  <li>• Gaming device chargers</li>
                  <li>• Extra-long charging cables</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Family Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Pack adapters in carry-on bags</li>
                  <li>• Teach older kids about voltage</li>
                  <li>• Bring entertainment for flights</li>
                  <li>• Label all charging cables</li>
                  <li>• Create a charging station in hotel room</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Adventure Traveler */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-800">Adventure Traveler</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-red-700">Rugged Equipment</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Waterproof/dustproof adapters</li>
                  <li>• Solar power bank (25,000mAh+)</li>
                  <li>• Wind-up emergency charger</li>
                  <li>• Satellite communicator charger</li>
                  <li>• Headlamp with USB charging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-700">Remote Area Prep</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Multiple backup power sources</li>
                  <li>• 12V car adapter for off-road vehicles</li>
                  <li>• Portable solar panel setup</li>
                  <li>• Emergency power hand-crank</li>
                  <li>• Waterproof cable storage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-700">Survival Mode</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• GPS device with long battery life</li>
                  <li>• Emergency beacon with charger</li>
                  <li>• Camera batteries for extreme weather</li>
                  <li>• Power conservation techniques</li>
                  <li>• Know embassy/rescue contact info</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular Multi-Country Routes</h2>
          
          {/* Country to Country Detailed Guides */}
        <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-2">Country-to-Country Adapter Guides</h2>
          <p className="text-gray-600 mb-8">Detailed adapter requirements for the most popular international travel routes</p>
          
          <div className="space-y-8">
            {/* USA to Italy */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇺🇸 USA to Italy 🇮🇹</h3>
                  <p className="text-sm text-gray-600 mb-3">One of the most popular American tourist routes</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From USA:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: A & B</li>
                        <li>• Voltage: 120V</li>
                        <li>• Frequency: 60Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To Italy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: C, F & L</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-blue-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-blue-800 mb-2">✅ <strong>Type L adapter</strong> - Italy's unique 3-pin inline plug (essential for Italian hotels)</p>
                    <p className="text-sm text-blue-800 mb-2">✅ <strong>Type C adapter</strong> - Works in many Italian outlets (good backup)</p>
                    <p className="text-sm text-blue-800">⚠️ <strong>Voltage converter</strong> - Only if your devices aren't dual voltage (check for "100-240V" label)</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Pro Tips:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Italian outlets vary - older buildings may have Type L only, newer ones accept Type C</li>
                      <li>• Hotels in Rome, Florence, Venice often provide adapters at reception</li>
                      <li>• Buy adapters at local "Tabacchi" shops for €2-5 vs €15-20 at airports</li>
                      <li>• Most US phone/laptop chargers are dual voltage - just need the plug adapter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* UK to Japan */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇬🇧 UK to Japan 🇯🇵</h3>
                  <p className="text-sm text-gray-600 mb-3">Business and tourism route requiring special attention to voltage</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From UK:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Type: G</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To Japan:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: A & B</li>
                        <li>• Voltage: 100V (⚠️ Lowest in the world)</li>
                        <li>• Frequency: 50/60Hz (varies by region)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-green-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-green-800 mb-2">✅ <strong>Type A adapter</strong> - Works everywhere in Japan</p>
                    <p className="text-sm text-green-800 mb-2">⚠️ <strong>Voltage consideration</strong> - Japan's 100V is unique; UK devices may charge slowly</p>
                    <p className="text-sm text-green-800">💡 <strong>Hair dryers/straighteners</strong> - May not work properly due to voltage difference</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Japan-Specific Tips:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Eastern Japan (Tokyo) uses 50Hz, Western Japan (Osaka) uses 60Hz</li>
                      <li>• Many hotels provide adapters, but not voltage converters</li>
                      <li>• Buy adapters at Don Quijote or Bic Camera stores (¥100-500)</li>
                      <li>• Japanese outlets rarely have grounding pins (Type B less common)</li>
                      <li>• Consider buying Japanese versions of hair tools rather than converting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Germany to India */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇩🇪 Germany to India 🇮🇳</h3>
                  <p className="text-sm text-gray-600 mb-3">Growing business and spiritual tourism route</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From Germany:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: C & F (Schuko)</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To India:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: C, D & M</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-orange-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-orange-800 mb-2">✅ <strong>Type D adapter</strong> - India's standard 3-pin plug</p>
                    <p className="text-sm text-orange-800 mb-2">✅ <strong>Type C works partially</strong> - Your German Type C devices fit many Indian sockets</p>
                    <p className="text-sm text-orange-800">✅ <strong>No voltage converter needed</strong> - Same 230V/50Hz as Germany!</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>India Travel Tips:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Power cuts are common - always charge devices when you can</li>
                      <li>• Hotels often have universal sockets that accept Type C/F directly</li>
                      <li>• Local adapters cost ₹50-100 ($0.60-1.20) at electrical shops</li>
                      <li>• Type M (large 3-pin) used for high-power appliances like AC units</li>
                      <li>• Carry a power bank - essential for long train journeys</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Australia to Thailand */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇦🇺 Australia to Thailand 🇹🇭</h3>
                  <p className="text-sm text-gray-600 mb-3">Popular holiday route for Aussie travelers</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From Australia:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Type: I</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To Thailand:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: A, B, C, O</li>
                        <li>• Voltage: 220V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-purple-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-purple-800 mb-2">✅ <strong>Universal adapter recommended</strong> - Thailand uses multiple plug types</p>
                    <p className="text-sm text-purple-800 mb-2">✅ <strong>Type O adapter</strong> - Thailand's unique plug, though less common</p>
                    <p className="text-sm text-purple-800">✅ <strong>No voltage converter needed</strong> - 220V is compatible with 230V devices</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Thailand Specifics:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Most hotels and modern buildings accept multiple plug types</li>
                      <li>• 7-Eleven stores sell adapters for ฿60-100 ($2-3)</li>
                      <li>• Older buildings may only have Type A (US-style) outlets</li>
                      <li>• Bangkok malls have phone charging stations (฿10-20 per hour)</li>
                      <li>• Island resorts may have limited power - bring power banks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Canada to France */}
            <div className="border-l-4 border-red-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇨🇦 Canada to France 🇫🇷</h3>
                  <p className="text-sm text-gray-600 mb-3">Popular transatlantic route for Canadians</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From Canada:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: A & B</li>
                        <li>• Voltage: 120V</li>
                        <li>• Frequency: 60Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To France:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: C & E</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-red-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-red-800 mb-2">✅ <strong>Type E adapter</strong> - French standard with grounding pin</p>
                    <p className="text-sm text-red-800 mb-2">✅ <strong>Type C adapter</strong> - Works for non-grounded devices</p>
                    <p className="text-sm text-red-800">⚠️ <strong>Voltage converter</strong> - Only for single-voltage Canadian devices</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>France Travel Advice:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Most modern Canadian electronics are dual voltage (check labels)</li>
                      <li>• French Type E has a grounding pin that protrudes from the socket</li>
                      <li>• Buy adapters at Fnac or Darty stores (€5-15)</li>
                      <li>• Paris Métro stations often have USB charging points</li>
                      <li>• Hotels typically provide adapters but may require a deposit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Brazil to Portugal */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇧🇷 Brazil to Portugal 🇵🇹</h3>
                  <p className="text-sm text-gray-600 mb-3">Common route with shared language but different plugs</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From Brazil:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: N (Brazilian standard)</li>
                        <li>• Voltage: 127V/220V (varies by region)</li>
                        <li>• Frequency: 60Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To Portugal:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: C & F</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-yellow-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-yellow-800 mb-2">✅ <strong>Type C/F adapter</strong> - European standard works throughout Portugal</p>
                    <p className="text-sm text-yellow-800 mb-2">⚠️ <strong>Check your Brazilian device voltage</strong> - São Paulo/Rio use 127V, Brasília uses 220V</p>
                    <p className="text-sm text-yellow-800">✅ <strong>Type N to C adapter</strong> - Converts Brazilian to European</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Important Notes:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Brazil's Type N is unique - not compatible with old Type C</li>
                      <li>• If from 127V Brazilian regions, you may need voltage converter</li>
                      <li>• Portuguese shops sell adapters for €3-10 at Worten or FNAC</li>
                      <li>• Lisbon and Porto airports have charging stations</li>
                      <li>• Most Brazilian phone chargers are already dual voltage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* China to USA */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇨🇳 China to USA 🇺🇸</h3>
                  <p className="text-sm text-gray-600 mb-3">Major business and education travel corridor</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From China:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: A, C & I</li>
                        <li>• Voltage: 220V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To USA:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: A & B</li>
                        <li>• Voltage: 120V</li>
                        <li>• Frequency: 60Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-indigo-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-indigo-800 mb-2">✅ <strong>May not need adapter!</strong> - Chinese Type A plugs work in USA</p>
                    <p className="text-sm text-indigo-800 mb-2">⚠️ <strong>Voltage converter essential</strong> - USA uses 120V vs China's 220V</p>
                    <p className="text-sm text-indigo-800">💡 <strong>Type I & C devices</strong> - Need Type A/B adapter</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Practical Advice:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Many Chinese devices already use Type A plugs for US market</li>
                      <li>• Chinese electronics often support 100-240V (check labels)</li>
                      <li>• Buy voltage converters in China (cheaper than USA)</li>
                      <li>• US stores: Best Buy, Target sell adapters ($10-30)</li>
                      <li>• Consider buying US versions of appliances for long stays</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* South Africa to UK */}
            <div className="border-l-4 border-teal-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇿🇦 South Africa to UK 🇬🇧</h3>
                  <p className="text-sm text-gray-600 mb-3">Historical ties but completely different plug systems</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From South Africa:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: M (unique large 3-pin)</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To UK:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Type: G</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-teal-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-teal-800 mb-2">✅ <strong>Type M to Type G adapter</strong> - Specific adapter needed</p>
                    <p className="text-sm text-teal-800 mb-2">✅ <strong>No voltage converter needed</strong> - Same 230V/50Hz</p>
                    <p className="text-sm text-teal-800">💡 <strong>UK plugs have fuses</strong> - Built-in safety feature</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Travel Tips:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• SA Type M plugs are huge - very different from UK Type G</li>
                      <li>• Many SA travelers buy UK adapters at OR Tambo Airport</li>
                      <li>• UK shops: Argos, Currys sell adapters (£5-15)</li>
                      <li>• Both countries use same voltage - electronics work fine</li>
                      <li>• Some newer SA hotels also have Type C outlets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mexico to Spain */}
            <div className="border-l-4 border-pink-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇲🇽 Mexico to Spain 🇪🇸</h3>
                  <p className="text-sm text-gray-600 mb-3">Cultural connection with different electrical systems</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From Mexico:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: A & B</li>
                        <li>• Voltage: 127V</li>
                        <li>• Frequency: 60Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To Spain:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Types: C & F</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-pink-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-pink-800 mb-2">✅ <strong>Type C/F adapter</strong> - European standard for Spain</p>
                    <p className="text-sm text-pink-800 mb-2">⚠️ <strong>Voltage converter maybe</strong> - Check if devices are dual voltage</p>
                    <p className="text-sm text-pink-800">💡 <strong>Frequency difference</strong> - Some devices may run differently</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Spain Specifics:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Most Mexican phone/laptop chargers work in Spain (dual voltage)</li>
                      <li>• Spanish shops: MediaMarkt, El Corte Inglés sell adapters</li>
                      <li>• Barcelona and Madrid airports have charging stations</li>
                      <li>• Hair dryers from Mexico won't work well (voltage too different)</li>
                      <li>• Consider buying electrical items in Spain for extended stays</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Singapore to New Zealand */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">🇸🇬 Singapore to New Zealand 🇳🇿</h3>
                  <p className="text-sm text-gray-600 mb-3">Popular route requiring different adapter despite similar systems</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">From Singapore:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Type: G (British standard)</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">To New Zealand:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plug Type: I</li>
                        <li>• Voltage: 230V</li>
                        <li>• Frequency: 50Hz</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg mb-3">
                    <h4 className="font-semibold text-cyan-900 mb-2">What You Need:</h4>
                    <p className="text-sm text-cyan-800 mb-2">✅ <strong>Type G to Type I adapter</strong> - Simple plug adapter only</p>
                    <p className="text-sm text-cyan-800 mb-2">✅ <strong>No voltage converter needed</strong> - Identical electrical systems</p>
                    <p className="text-sm text-cyan-800">💡 <strong>Electronics work perfectly</strong> - Just plug shape differs</p>
                  </div>
                  
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Easy Travel:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Both former British systems but diverged on plug types</li>
                      <li>• Buy adapters at Changi Airport (S$10-20) or Auckland (NZ$10-15)</li>
                      <li>• NZ stores: The Warehouse, Noel Leeming sell adapters</li>
                      <li>• All Singapore electronics work perfectly in NZ</li>
                      <li>• Many NZ accommodations provide adapters for international guests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-bold mb-3">🌍 Universal Travel Tip</h3>
            <p className="text-sm text-gray-700">
              For any country-to-country travel, always check three things: <strong>1) Plug type compatibility</strong>, 
              <strong>2) Voltage difference</strong> (converters needed if different), and <strong>3) Device labels</strong> 
              (most modern electronics show "100-240V" meaning they work worldwide with just a plug adapter).
            </p>
          </div>
        </div>

        {/* Classic Continental Tours */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">🌍 Classic Continental Tours</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Europe Grand Tour',
                  countries: ['UK', 'France', 'Germany', 'Italy', 'Spain', 'Netherlands'],
                  description: 'Major European destinations with mostly Type C/E/F plugs',
                  duration: '14-21 days',
                  plugs: ['C', 'E', 'F', 'G'],
                  recommendation: 'Universal adapter + Type G for UK'
                },
                {
                  title: 'Southeast Asia Circuit',
                  countries: ['Thailand', 'Vietnam', 'Singapore', 'Malaysia', 'Cambodia'],
                  description: 'Mix of Type A, C, and G plugs across the region',
                  duration: '10-28 days',
                  plugs: ['A', 'C', 'G'],
                  recommendation: 'Universal adapter covers all destinations'
                },
                {
                  title: 'East Asia Explorer',
                  countries: ['Japan', 'South Korea', 'China', 'Hong Kong', 'Taiwan'],
                  description: 'Variety from Type A/B to G depending on country',
                  duration: '10-21 days',
                  plugs: ['A', 'B', 'C', 'G', 'I'],
                  recommendation: 'Universal + Type A/B for Japan/Korea'
                },
                {
                  title: 'Australia & New Zealand',
                  countries: ['Australia', 'New Zealand'],
                  description: 'Consistent Type I plugs across both countries',
                  duration: '14-28 days',
                  plugs: ['I'],
                  recommendation: 'Single Type I adapter sufficient'
                },
                {
                  title: 'UK & Ireland Discovery',
                  countries: ['United Kingdom', 'Ireland'],
                  description: 'Type G plugs throughout both countries',
                  duration: '7-14 days',
                  plugs: ['G'],
                  recommendation: 'Single Type G adapter sufficient'
                },
                {
                  title: 'Scandinavia Adventure',
                  countries: ['Sweden', 'Norway', 'Denmark', 'Finland', 'Iceland'],
                  description: 'European standard Type C/E/F plugs',
                  duration: '10-14 days',
                  plugs: ['C', 'E', 'F'],
                  recommendation: 'Type C adapter covers all destinations'
                },
              ].map((route) => (
                <div key={route.title} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{route.title}</h4>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{route.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{route.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {route.countries.map((country) => (
                      <span
                        key={country}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Plug Types: {route.plugs.join(', ')}
                  </div>
                  <div className="text-xs font-medium text-green-700">
                    💡 {route.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Backpacker Routes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">🎒 Budget Backpacker Routes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Central America Explorer',
                  countries: ['Mexico', 'Guatemala', 'Belize', 'Costa Rica', 'Panama'],
                  description: 'Affordable overland route with Type A/B plugs',
                  cost: '$30-50/day',
                  plugs: ['A', 'B'],
                  voltage: '110-120V',
                  recommendation: 'Type A adapter (same as US/Canada)'
                },
                {
                  title: 'Eastern Europe Trail',
                  countries: ['Poland', 'Czech Republic', 'Slovakia', 'Hungary', 'Romania'],
                  description: 'Budget-friendly European circuit',
                  cost: '$25-40/day',
                  plugs: ['C', 'E'],
                  voltage: '230V',
                  recommendation: 'Type C/E adapter covers everything'
                },
                {
                  title: 'Balkans Adventure',
                  countries: ['Croatia', 'Bosnia', 'Montenegro', 'Serbia', 'Albania'],
                  description: 'Stunning landscapes on a budget',
                  cost: '$20-35/day',
                  plugs: ['C', 'F'],
                  voltage: '230V',
                  recommendation: 'European universal adapter'
                },
                {
                  title: 'India Golden Triangle Plus',
                  countries: ['India', 'Nepal', 'Bhutan'],
                  description: 'Spiritual journey through the Himalayas',
                  cost: '$15-30/day',
                  plugs: ['C', 'D', 'M'],
                  voltage: '230V',
                  recommendation: 'India-specific multi-adapter'
                },
                {
                  title: 'South America Pacific',
                  countries: ['Peru', 'Bolivia', 'Chile', 'Ecuador'],
                  description: 'Andes mountains and Pacific coast',
                  cost: '$25-45/day',
                  plugs: ['A', 'C', 'L'],
                  voltage: '220V',
                  recommendation: 'Universal adapter + Type L'
                },
                {
                  title: 'Trans-Siberian Express',
                  countries: ['Russia', 'Mongolia', 'China'],
                  description: 'Epic overland rail journey',
                  cost: '$40-70/day',
                  plugs: ['C', 'F', 'A', 'I'],
                  voltage: '220V',
                  recommendation: 'Multiple adapters recommended'
                }
              ].map((route) => (
                <div key={route.title} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{route.title}</h4>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">{route.cost}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{route.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {route.countries.map((country) => (
                      <span
                        key={country}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-1">
                    Plugs: {route.plugs.join(', ')} • Voltage: {route.voltage}
                  </div>
                  <div className="text-xs font-medium text-green-700">
                    🔌 {route.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Travel Circuits */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">💼 Business Travel Circuits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Asian Financial Hubs',
                  countries: ['Singapore', 'Hong Kong', 'Tokyo', 'Seoul', 'Shanghai'],
                  description: 'Major business centers across Asia',
                  focus: 'High-speed internet, coworking spaces',
                  plugs: ['A', 'B', 'C', 'G', 'I'],
                  recommendation: 'Premium universal adapter with USB-C'
                },
                {
                  title: 'European Business Tour',
                  countries: ['London', 'Frankfurt', 'Zurich', 'Amsterdam', 'Brussels'],
                  description: 'Financial capitals of Europe',
                  focus: 'Banking, finance conferences',
                  plugs: ['C', 'E', 'F', 'G'],
                  recommendation: 'Compact EU + UK adapter combo'
                },
                {
                  title: 'Middle East Expansion',
                  countries: ['Dubai', 'Qatar', 'Saudi Arabia', 'Kuwait'],
                  description: 'Emerging markets and oil economies',
                  focus: 'Trade shows, energy sector',
                  plugs: ['A', 'C', 'G'],
                  recommendation: 'UK-style adapter (Type G) preferred'
                },
                {
                  title: 'Americas Trade Route',
                  countries: ['Toronto', 'New York', 'Mexico City', 'São Paulo'],
                  description: 'NAFTA corridor plus Brazil',
                  focus: 'Manufacturing, trade agreements',
                  plugs: ['A', 'B', 'N'],
                  recommendation: 'US adapter + Brazil-specific (Type N)'
                },
                {
                  title: 'Tech Innovation Circuit',
                  countries: ['San Francisco', 'Austin', 'Tel Aviv', 'Bangalore', 'Shenzhen'],
                  description: 'Global technology hubs',
                  focus: 'Startups, venture capital',
                  plugs: ['A', 'B', 'C', 'D', 'H'],
                  recommendation: 'Universal adapter with fast charging'
                },
                {
                  title: 'African Markets Tour',
                  countries: ['South Africa', 'Kenya', 'Nigeria', 'Morocco', 'Egypt'],
                  description: 'Emerging African economies',
                  focus: 'Mining, agriculture, fintech',
                  plugs: ['C', 'D', 'G', 'M'],
                  recommendation: 'Multi-adapter kit required'
                }
              ].map((route) => (
                <div key={route.title} className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{route.title}</h4>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">Business</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{route.description}</p>
                  <p className="text-xs text-purple-600 mb-3 italic">Focus: {route.focus}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {route.countries.map((country) => (
                      <span
                        key={country}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Plug Types: {route.plugs.join(', ')}
                  </div>
                  <div className="text-xs font-medium text-green-700">
                    🔌 {route.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Adventure & Remote Travel */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">🏔️ Adventure & Remote Travel</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Patagonia Expedition',
                  countries: ['Chile', 'Argentina'],
                  description: 'Remote wilderness with limited power access',
                  challenge: 'Unreliable power, weather extremes',
                  plugs: ['C', 'I', 'L'],
                  recommendation: 'Power bank essential, multiple adapters'
                },
                {
                  title: 'Trans-Africa Overland',
                  countries: ['Morocco', 'Mali', 'Ghana', 'Kenya', 'South Africa'],
                  description: 'Epic overland journey across the continent',
                  challenge: 'Variable infrastructure, border issues',
                  plugs: ['C', 'D', 'G', 'M'],
                  recommendation: 'Full adapter kit + backup power'
                },
                {
                  title: 'Silk Road Revival',
                  countries: ['Turkey', 'Georgia', 'Uzbekistan', 'Kyrgyzstan', 'China'],
                  description: 'Ancient trade route with modern logistics',
                  challenge: 'Remote areas, visa complexities',
                  plugs: ['C', 'E', 'F', 'A', 'I'],
                  recommendation: 'Universal adapter + regional specifics'
                },
                {
                  title: 'Pacific Island Hopping',
                  countries: ['Fiji', 'Vanuatu', 'New Caledonia', 'Solomon Islands'],
                  description: 'Remote Pacific paradise chain',
                  challenge: 'Limited power, boat transfers',
                  plugs: ['I', 'C', 'E'],
                  recommendation: 'Waterproof adapters, solar charging'
                },
                {
                  title: 'Arctic Circle Adventure',
                  countries: ['Greenland', 'Faroe Islands', 'Iceland', 'Norway', 'Finland'],
                  description: 'Northern lights and midnight sun',
                  challenge: 'Extreme weather, seasonal access',
                  plugs: ['C', 'E', 'F', 'K'],
                  recommendation: 'Cold-weather adapters, backup heating'
                },
                {
                  title: 'Central Asian Highlands',
                  countries: ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Afghanistan'],
                  description: 'High-altitude nomadic cultures',
                  challenge: 'Security concerns, altitude effects',
                  plugs: ['C', 'E', 'F'],
                  recommendation: 'Rugged adapters, emergency power'
                }
              ].map((route) => (
                <div key={route.title} className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{route.title}</h4>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Adventure</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{route.description}</p>
                  <p className="text-xs text-orange-600 mb-3 italic">Challenge: {route.challenge}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {route.countries.map((country) => (
                      <span
                        key={country}
                        className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Plug Types: {route.plugs.join(', ')}
                  </div>
                  <div className="text-xs font-medium text-green-700">
                    ⚡ {route.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Nomad Circuits */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">💻 Digital Nomad Circuits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Mexico Digital Nomad Trail',
                  countries: ['Mexico City', 'Playa del Carmen', 'Mérida', 'Puerto Vallarta'],
                  description: 'Perfect weather, great wifi, affordable living',
                  wifi: 'Excellent (20-100 Mbps)',
                  cost: '$800-1500/month',
                  plugs: ['A', 'B'],
                  recommendation: 'US-style adapter sufficient'
                },
                {
                  title: 'European Nomad Hub',
                  countries: ['Lisbon', 'Barcelona', 'Berlin', 'Prague', 'Tallinn'],
                  description: 'Startup cities with nomad communities',
                  wifi: 'Excellent (50-200 Mbps)',
                  cost: '$1200-2500/month',
                  plugs: ['C', 'E', 'F'],
                  recommendation: 'European universal adapter'
                },
                {
                  title: 'Southeast Asian Circuit',
                  countries: ['Bangkok', 'Chiang Mai', 'Ho Chi Minh', 'Canggu', 'Kuala Lumpur'],
                  description: 'Low cost of living, strong nomad network',
                  wifi: 'Good-Excellent (10-100 Mbps)',
                  cost: '$600-1200/month',
                  plugs: ['A', 'C', 'G'],
                  recommendation: 'Universal adapter essential'
                },
                {
                  title: 'Latin America Remote Work',
                  countries: ['Buenos Aires', 'Medellín', 'Lima', 'Montevideo'],
                  description: 'Emerging nomad destinations',
                  wifi: 'Good (10-50 Mbps)',
                  cost: '$700-1400/month',
                  plugs: ['A', 'C', 'I', 'L'],
                  recommendation: 'Multiple adapters needed'
                },
                {
                  title: 'Middle East Tech Hubs',
                  countries: ['Dubai', 'Tel Aviv', 'Istanbul', 'Amman'],
                  description: 'Growing tech scenes, tax advantages',
                  wifi: 'Excellent (20-200 Mbps)',
                  cost: '$1500-3000/month',
                  plugs: ['C', 'G', 'H'],
                  recommendation: 'Universal + UK adapter'
                },
                {
                  title: 'African Innovation Centers',
                  countries: ['Cape Town', 'Nairobi', 'Lagos', 'Casablanca'],
                  description: 'Emerging markets with growing tech scenes',
                  wifi: 'Variable (5-50 Mbps)',
                  cost: '$500-1200/month',
                  plugs: ['C', 'D', 'G', 'M'],
                  recommendation: 'Full adapter kit required'
                }
              ].map((route) => (
                <div key={route.title} className="bg-white border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{route.title}</h4>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Remote Work</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{route.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className="text-green-600">📶 {route.wifi}</div>
                    <div className="text-blue-600">💰 {route.cost}</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {route.countries.map((country) => (
                      <span
                        key={country}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Plug Types: {route.plugs.join(', ')}
                  </div>
                  <div className="text-xs font-medium text-green-700">
                    🔌 {route.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seasonal Travel Considerations */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Seasonal Travel Considerations</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Spring */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  🌸
                </div>
                <h3 className="text-lg font-semibold text-green-800">Spring Travel</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-green-700 text-sm mb-1">Best Destinations</h4>
                  <p className="text-xs text-gray-600">Japan (Cherry Blossoms), Turkey, Morocco, Nepal</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 text-sm mb-1">Power Considerations</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Weather is mild, standard adapters work fine</li>
                    <li>• Tourist season starting, book early</li>
                    <li>• Daylight increases, less charging needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 text-sm mb-1">Packing Tips</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Camera for blooming flowers</li>
                    <li>• Layers for variable weather</li>
                    <li>• Power bank for outdoor photography</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Summer */}
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  ☀️
                </div>
                <h3 className="text-lg font-semibold text-yellow-800">Summer Travel</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-yellow-700 text-sm mb-1">Best Destinations</h4>
                  <p className="text-xs text-gray-600">Europe, Scandinavia, Russia, Canada, Alaska</p>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-700 text-sm mb-1">Power Considerations</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• A/C usage increases power needs</li>
                    <li>• Solar chargers work excellently</li>
                    <li>• Long daylight = more outdoor time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-700 text-sm mb-1">Packing Tips</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Heat-resistant adapters</li>
                    <li>• Extra cooling for electronics</li>
                    <li>• Waterproof gear for beach/lake</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Autumn */}
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  🍂
                </div>
                <h3 className="text-lg font-semibold text-orange-800">Autumn Travel</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-orange-700 text-sm mb-1">Best Destinations</h4>
                  <p className="text-xs text-gray-600">Northeast USA, China, India, Nepal, Iran</p>
                </div>
                <div>
                  <h4 className="font-medium text-orange-700 text-sm mb-1">Power Considerations</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Shorter days = more charging</li>
                    <li>• Weather can be unpredictable</li>
                    <li>• Perfect for outdoor activities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-orange-700 text-sm mb-1">Packing Tips</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Camera for fall foliage</li>
                    <li>• Backup batteries for cold snaps</li>
                    <li>• Layered charging approach</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Winter */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  ❄️
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Winter Travel</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-blue-700 text-sm mb-1">Best Destinations</h4>
                  <p className="text-xs text-gray-600">Southeast Asia, Australia, South America, Middle East</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 text-sm mb-1">Power Considerations</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Cold weather drains batteries fast</li>
                    <li>• Heating increases power usage</li>
                    <li>• Shorter daylight in north</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 text-sm mb-1">Packing Tips</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Keep batteries warm</li>
                    <li>• Extra charging cables</li>
                    <li>• Avoid condensation on electronics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive FAQ */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">Do I need a voltage converter or just an adapter?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Most modern electronics (phones, laptops, tablets) are dual voltage (100-240V) and only need plug adapters. Check device labels - if it says "100-240V" you're good with just an adapter.
                </p>
                <p className="text-sm text-gray-600">
                  Hair dryers, curling irons, and some appliances may need voltage converters for different voltage countries.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">Can I use one universal adapter for multiple countries?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Yes! A good universal adapter covers Types A, B, C, E, F, G, and I - which covers about 95% of worldwide destinations. However, some countries use unique types like Type M (South Africa) or Type L (Italy/Chile).
                </p>
                <p className="text-sm text-gray-600">
                  Our trip planner above will tell you exactly which adapter types you need for your specific destinations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">What's the difference between grounded and ungrounded plugs?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Grounded plugs have a third pin for safety (earth/ground). Type A (US) is ungrounded, Type B (US) is grounded. Type C (Europe) is ungrounded, Type E/F (Europe) are grounded.
                </p>
                <p className="text-sm text-gray-600">
                  You can usually plug ungrounded devices into grounded sockets, but not vice versa. Most adapters handle this automatically.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">Are there any countries with unique or rare plug types?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Yes! Some examples:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>South Africa:</strong> Unique Type M (large 3-pin)</li>
                  <li>• <strong>Israel:</strong> Type H (3 flat pins)</li>
                  <li>• <strong>Switzerland:</strong> Type J (3-pin offset)</li>
                  <li>• <strong>Denmark:</strong> Type K (similar to Type F)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">Can I charge my devices on international flights?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Many modern aircraft have USB ports and/or AC outlets. Long-haul flights usually have power, while short domestic flights may not. Business/First class generally has more charging options.
                </p>
                <p className="text-sm text-gray-600">
                  Always bring a fully charged power bank as backup - it's your most reliable charging source.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">What should I do if my adapter doesn't fit properly?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  First, don't force it! Check if you're using the right adapter type for that country. Some outlets are recessed or have tight fits. Old buildings might have worn outlets.
                </p>
                <p className="text-sm text-gray-600">
                  Buy a local adapter from a convenience store or ask hotel reception for help. Most hotels can lend adapters or direct you to nearby electronics stores.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">Are airport adapters worth buying?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Airport adapters are convenient but often overpriced (2-3x normal cost) and lower quality. They're fine for emergencies, but plan ahead and buy quality adapters before you travel.
                </p>
                <p className="text-sm text-gray-600">
                  If you must buy at airports, stick to major brands like Anker, Belkin, or local quality brands.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">How do I pack adapters and cables efficiently?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Use a dedicated tech organizer pouch with elastic bands and pockets. Group cables by device type. Consider packing cubes specifically for electronics.
                </p>
                <p className="text-sm text-gray-600">
                  Label everything and keep one universal adapter in your carry-on. Take photos of your packing setup for future reference.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">What about charging in remote areas or developing countries?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Power can be unreliable in remote areas. Bring multiple power banks, solar chargers, and keep devices in power-saving mode. Many guesthouses have charging areas even if rooms don't have outlets.
                </p>
                <p className="text-sm text-gray-600">
                  Consider offline maps, downloaded entertainment, and backup communication methods. Hand-crank chargers can be lifesavers in extreme situations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border">
                <h3 className="font-semibold mb-3 text-lg">Should I buy adapters before I travel or in the destination country?</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Buy quality universal adapters before traveling for peace of mind. However, buying local adapters in each country can be cheaper and ensures perfect fit for that specific country's outlets.
                </p>
                <p className="text-sm text-gray-600">
                  Hybrid approach: Bring one universal adapter as backup, buy local ones for daily use. Keep local adapters for future visits to those countries.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Reference Cards */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Quick Reference Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Emergency Kit</h4>
                <ul className="text-sm space-y-1">
                  <li>• Universal adapter</li>
                  <li>• Power bank (20,000mAh)</li>
                  <li>• USB-C cable</li>
                  <li>• Local adapter backup</li>
                  <li>• Voltage tester (optional)</li>
                </ul>
              </div>
              
              <div className="bg-green-600 text-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Must-Have Apps</h4>
                <ul className="text-sm space-y-1">
                  <li>• Maps.me (offline maps)</li>
                  <li>• Google Translate (offline)</li>
                  <li>• XE Currency (offline rates)</li>
                  <li>• World Clock Pro</li>
                  <li>• Trail Wallet (budget tracking)</li>
                </ul>
              </div>
              
              <div className="bg-purple-600 text-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Voltage Quick Check</h4>
                <ul className="text-sm space-y-1">
                  <li>• 110-120V: Americas, Japan</li>
                  <li>• 220-240V: Europe, Asia, Africa</li>
                  <li>• Check device: "100-240V" = OK</li>
                  <li>• Hair tools usually need converter</li>
                  <li>• When in doubt, ask locals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}