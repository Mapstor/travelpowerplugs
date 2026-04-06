import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CountryPlugData } from '@/types';
import Breadcrumb from '@/components/Breadcrumb';
import HTMLAnimatedPlug from '@/components/plugs/HTMLAnimatedPlug';

interface EnhancedPageProps {
  countryData: CountryPlugData;
}

export default function EnhancedCountryPage({ countryData }: EnhancedPageProps) {
  const plugTypeLetters = countryData.plugTypes.map(p => p.name.replace('Type ', ''));

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": countryData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://travelpowerplugs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": countryData.continent,
        "item": `https://travelpowerplugs.com/${countryData.continent.toLowerCase().replace(' ', '-')}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": countryData.name,
        "item": `https://travelpowerplugs.com/${countryData.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: countryData.continent, href: `/${countryData.continent.toLowerCase().replace(' ', '-')}` },
            { label: countryData.name }
          ]}
        />

        {/* Hero Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {countryData.name} Electric Plug Types & Travel Adapters
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              Type {plugTypeLetters.join(' & ')} • {countryData.voltage}V • {countryData.frequency}Hz
            </p>
          </div>

          {/* Quick Answer Box */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-600">
              <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
                Quick Answer
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {countryData.name} uses <span className="font-semibold">Type {plugTypeLetters.join(' and Type ')} plugs</span>. 
                The voltage is <span className="font-semibold">{countryData.voltage}V</span> at <span className="font-semibold">{countryData.frequency}Hz</span>.
              </p>
              {countryData.quirks && countryData.quirks[0] && (
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  ⚡ {countryData.quirks[0]}
                </p>
              )}
            </div>
          </div>

          {/* Animated Plug Display */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Plug Types in {countryData.name}
            </h2>
            <div className="space-y-4">
              {plugTypeLetters.map((plugType) => (
                <HTMLAnimatedPlug key={plugType} plugType={plugType} />
              ))}
            </div>
          </div>

          {/* Travel Context */}
          <div className="p-8 bg-gray-50 dark:bg-gray-900/50">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Travel Context
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {countryData.travelContext}
            </p>
          </div>

          {/* Do You Need an Adapter? */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Do You Need an Adapter?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {countryData.adapterNeeded.map((info, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                    From {info.origin}
                  </h3>
                  <div className="flex gap-4 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      info.adapterNeeded 
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      Adapter: {info.adapterNeeded ? 'Yes' : 'No'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      info.converterNeeded === true
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : info.converterNeeded === 'maybe'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      Converter: {info.converterNeeded === 'maybe' ? 'Maybe' : info.converterNeeded ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {info.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Where to Buy Locally */}
          <div className="p-8 bg-gray-50 dark:bg-gray-900/50">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Where to Buy an Adapter in {countryData.name}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {countryData.localPurchaseOptions.map((option, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {option.name}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {option.priceRange}
                    </span>
                  </div>
                  {option.city && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      📍 {option.city}
                    </p>
                  )}
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {option.note}
                  </p>
                </div>
              ))}
            </div>
            {countryData.airportName && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Airport:</span> {countryData.airportName} ({countryData.airportCode})
                </p>
              </div>
            )}
          </div>

          {/* Neighboring Countries */}
          {countryData.neighbors && countryData.neighbors.length > 0 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Neighboring Countries Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Country</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Plug Types</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Voltage</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Compatibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryData.neighbors.map((neighbor, idx) => (
                      <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4">
                          <Link href={`/${neighbor.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                            {neighbor.name}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                          Type {neighbor.plugTypes.join(', ')}
                        </td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                          {neighbor.voltage}V
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            neighbor.sameAsSubject === 'identical' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : neighbor.sameAsSubject === 'compatible' || neighbor.sameAsSubject === 'mostly'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : neighbor.sameAsSubject === 'partially'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {neighbor.sameAsSubject}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Hotel Information */}
          <div className="p-8 bg-gray-50 dark:bg-gray-900/50">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Hotels & Accommodation
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Adapter at Reception</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                  {countryData.hotelAdapterAvailability}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">USB Ports in Rooms</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                  {countryData.hotelUSBPorts}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Hair Dryers</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                  {countryData.hotelHairDryers}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {countryData.accommodationNote}
            </p>
          </div>

          {/* FAQs */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {countryData.faqs.map((faq, idx) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Countries */}
          {countryData.relatedCountries && countryData.relatedCountries.length > 0 && (
            <div className="p-8 bg-gray-50 dark:bg-gray-900/50">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Related Countries
              </h2>
              <div className="flex flex-wrap gap-3">
                {countryData.relatedCountries.map((related, idx) => (
                  <Link
                    key={idx}
                    href={`/${related.slug}`}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    {related.name} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}