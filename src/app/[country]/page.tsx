import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COUNTRIES, Country } from '@/data/countries';
import { PLUG_TYPES } from '@/data/plugTypes';
import CountryPlugDisplay from '@/components/plugs/CountryPlugDisplay';
import AdapterFinder from '@/components/tools/AdapterFinder';
import Breadcrumb from '@/components/Breadcrumb';
import Header from '@/components/layout/Header';
import HTMLAnimatedPlug from '@/components/plugs/HTMLAnimatedPlug';
// Enhanced country pages removed - using practical data system
import { getCountryPlugData } from '@/lib/compatibility';

export async function generateStaticParams() {
  return COUNTRIES.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const country = COUNTRIES.find((c) => c.slug === resolvedParams.country);
  
  if (!country) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  // Generate metadata using practical data
  let title: string;
  let description: string;
  
  // Use practical plug data for better metadata if available
  const practicalPlugData = getCountryPlugData(country.iso2);
  if (practicalPlugData) {
    const primaryTypes = practicalPlugData.plugTypes.filter(p => p.status === 'primary').map(p => p.type);
    title = `${country.name} Electric Plug Types: PRIMARY Type ${primaryTypes.join(', ')} (${practicalPlugData.voltage.standard}V)`;
    description = `${country.name} PRIMARY plugs: Type ${primaryTypes.join(', ')}. Real-world usage patterns, practical adapter advice, ${practicalPlugData.voltage.standard}V/${practicalPlugData.frequency.standard}Hz.`;
  } else {
    const plugTypesString = country.plugTypes.join(', ');
    title = `${country.name} Electric Plug Types: Do You Need an Adapter? (${country.voltage}V)`;
    description = `${country.name} uses Type ${plugTypesString} plugs at ${country.voltage}V/${country.frequency}Hz. Find out if you need a travel adapter and which one to buy.`;
  }

  return {
    title,
    description,
    keywords: `${country.name} plug type, ${country.name} adapter, ${country.name} voltage, travel adapter, electrical outlet`,
    authors: [{ name: 'Marko Visic' }],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://travelpowerplugs.com/${country.slug}`,
      siteName: 'Travel Power Plugs',
      images: [
        {
          url: `/og/${country.iso2.toLowerCase()}.png`,
          width: 1200,
          height: 630,
          alt: `${country.name} plug types and electrical information`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og/${country.iso2.toLowerCase()}.png`],
    },
    alternates: {
      canonical: `https://travelpowerplugs.com/${country.slug}`,
    },
  };
}

interface PageProps {
  params: Promise<{
    country: string;
  }>;
}

export default async function CountryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const country = COUNTRIES.find((c) => c.slug === resolvedParams.country);

  if (!country) {
    notFound();
  }

  // Using practical plug data system - more reliable than enhanced country files

  // Load practical plug data for honest compatibility
  const practicalPlugData = getCountryPlugData(country.iso2);
  const primaryPlugs = practicalPlugData?.plugTypes.filter(p => p.status === 'primary').map(p => p.type) || [];
  const secondaryPlugs = practicalPlugData?.plugTypes.filter(p => p.status === 'secondary').map(p => p.type) || [];
  const legacyPlugs = practicalPlugData?.plugTypes.filter(p => p.status === 'legacy').map(p => p.type) || [];
  
  // Generate practical metadata
  const practicalDescription = practicalPlugData 
    ? `${country.name} PRIMARY plugs: Type ${primaryPlugs.join(', ')}. ${secondaryPlugs.length > 0 ? `SECONDARY: Type ${secondaryPlugs.join(', ')}. ` : ''}Voltage: ${practicalPlugData.voltage.standard}V.`
    : `${country.name} uses Type ${country.plugTypes.join(', ')} plugs at ${country.voltage}V.`;

  const plugSpecs = country.plugTypes.map(type => 
    PLUG_TYPES.find(p => p.id === type)
  ).filter(Boolean);

  // Generate related countries with same plug types
  const relatedCountries = COUNTRIES.filter(c => 
    c.slug !== country.slug && 
    c.plugTypes.some(plug => country.plugTypes.includes(plug))
  ).slice(0, 5);

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What plug type does ${country.name} use?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${country.name} uses Type ${country.plugTypes.join(' and Type ')} electrical outlets. The standard voltage is ${country.voltage}V at ${country.frequency}Hz frequency.`
        }
      },
      {
        "@type": "Question",
        "name": `Do I need a travel adapter for ${country.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": country.hasAdapter 
            ? `Whether you need an adapter depends on your home country. US travelers need an adapter since ${country.name} uses Type ${country.plugTypes.join(', ')} plugs, which are different from US Type A/B plugs. UK travelers ${country.plugTypes.includes('G') ? 'do not need an adapter' : 'need an adapter'}. EU travelers ${country.plugTypes.some(p => ['C', 'E', 'F'].includes(p)) ? 'typically do not need an adapter' : 'need an adapter'}.`
            : `Most travelers do not need an adapter for ${country.name} as it uses Type ${country.plugTypes.join(', ')} plugs which are widely compatible. However, check your specific device plugs to be sure.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the voltage in ${country.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The standard voltage in ${country.name} is ${country.voltage} volts at ${country.frequency}Hz. ${country.voltage > 127 ? 'This is higher than North American voltage (120V), so you may need a voltage converter for devices not designed for international use. Check your device labels for dual voltage support (100-240V).' : 'This voltage is compatible with most modern electronics designed for international use.'}`
        }
      },
      {
        "@type": "Question",
        "name": `Do I need a voltage converter for ${country.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": country.voltage > 127 ? `You may need a voltage converter for ${country.name} if your devices only support 120V. Most modern electronics (phones, laptops, cameras) support dual voltage (100-240V) and only need a plug adapter. However, hair dryers, curling irons, and some small appliances may require a voltage converter.` : `Most travelers do not need a voltage converter for ${country.name} as the ${country.voltage}V supply is compatible with dual voltage devices. Always check your device specifications to be sure.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the best travel adapter for ${country.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For ${country.name}, you need an adapter that supports Type ${country.plugTypes.join(' and Type ')} plugs. A universal travel adapter with these plug types will work perfectly. Look for adapters with surge protection and USB ports for added convenience.`
        }
      }
    ]
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
        "name": country.continent.charAt(0).toUpperCase() + country.continent.slice(1).replace('-', ' '),
        "item": `https://travelpowerplugs.com/continent/${country.continent}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": country.name,
        "item": `https://travelpowerplugs.com/${country.slug}`
      }
    ]
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${country.name} Electric Plug Types`,
    "description": `Complete guide to electrical plugs, sockets, voltage and frequency in ${country.name}`,
    "author": {
      "@type": "Person",
      "name": "Marko Visic"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      
      {/* Header */}
      <Header showFullNav={true} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { 
                label: country.continent.charAt(0).toUpperCase() + country.continent.slice(1).replace('-', ' '),
                href: `/continent/${country.continent}`
              },
              { label: country.name }
            ]}
          />
        </div>

        <article>
          {/* SEO-Optimized H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {country.name} Electric Power Plug Types: Do You Need an Adapter?
          </h1>
          
          {/* SEO-Focused Hero Answer */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 border border-blue-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={`https://flagcdn.com/w80/${country.iso2.toLowerCase()}.png`}
                  alt={`${country.name} flag`}
                  className="w-16 h-12 rounded shadow-md"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {practicalPlugData 
                    ? `${country.name} uses Type ${primaryPlugs.join(' and Type ')} plugs`
                    : `${country.name} uses Type ${country.plugTypes.join(' and Type ')} plugs`
                  }
                </h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Voltage:</span>
                    <span className="ml-2 text-lg font-semibold text-blue-900">
                      {practicalPlugData ? practicalPlugData.voltage.standard : country.voltage}V
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Frequency:</span>
                    <span className="ml-2 text-lg font-semibold text-blue-900">
                      {practicalPlugData ? practicalPlugData.frequency.standard : country.frequency}Hz
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">US Adapter:</span>
                    <span className={`ml-2 text-lg font-semibold ${country.hasAdapter ? 'text-red-700' : 'text-green-700'}`}>
                      {country.hasAdapter ? 'Required' : 'Not needed'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO-Optimized Introduction with Beautiful Design */}
          <div className="my-10">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-gray-900">{country.name} uses {practicalPlugData ? `Type ${primaryPlugs.join(' and Type ')}` : `Type ${country.plugTypes.join(' and Type ')}`} electrical plugs</span> operating at {practicalPlugData ? practicalPlugData.voltage.standard : country.voltage}V and {practicalPlugData ? practicalPlugData.frequency.standard : country.frequency}Hz.
                  {' '}The {country.name} plug type is {country.plugTypes.length > 1 ? 'part of the European standard' : 'the European standard'}, widely used across {country.continent === 'europe' ? 'the continent' : country.continent}.
                </p>
                
                {country.hasAdapter && (
                  <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p className="text-amber-900 font-medium">
                        US, UK, and Australian travelers need an adapter for {country.name}.
                      </p>
                      {country.voltage > 127 && (
                        <p className="text-sm text-amber-800 mt-1">
                          Check voltage compatibility – {country.name} uses {practicalPlugData ? practicalPlugData.voltage.standard : country.voltage}V (higher than US 120V).
                        </p>
                      )}
                    </div>
                  </div>
                )}
                
                {practicalPlugData && (primaryPlugs.length > 0 || secondaryPlugs.length > 0) && (
                  <div className="mt-4 text-sm text-gray-700">
                    {primaryPlugs.length > 0 && (
                      <span>
                        <span className="font-semibold">Primary plug:</span> Type {primaryPlugs.join(' and Type ')} (found in most outlets)
                      </span>
                    )}
                    {primaryPlugs.length > 0 && secondaryPlugs.length > 0 && (
                      <span className="mx-2">•</span>
                    )}
                    {secondaryPlugs.length > 0 && (
                      <span>
                        <span className="font-semibold">Secondary:</span> Type {secondaryPlugs.join(' and Type ')} (also common)
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Animated Plug Display - Hero Section */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-3 text-center">{country.name} Plug Types</h2>
            <div className="space-y-6">
              {country.plugTypes.map((plugType) => (
                <HTMLAnimatedPlug key={plugType} plugType={plugType} />
              ))}
            </div>
          </div>



          {/* Enhanced Quick Facts Cards */}
          <div className="my-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Electrical System Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Plug Types Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-semibold text-lg">Plug Types</h3>
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  Type {country.plugTypes.join(' & Type ')}
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  {country.plugTypes.length === 1 ? 'Single standard' : 'Multiple standards used'}
                </p>
              </div>

              {/* Voltage Card */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="font-semibold text-lg">Voltage</h3>
                </div>
                <div className="text-2xl font-bold text-yellow-900">
                  {country.voltage}V
                </div>
                <p className="text-sm text-yellow-700 mt-2">
                  {country.voltage > 127 ? 'High voltage system' : 'Standard voltage'}
                </p>
              </div>

              {/* Frequency Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-lg">Frequency</h3>
                </div>
                <div className="text-2xl font-bold text-purple-900">
                  {country.frequency}Hz
                </div>
                <p className="text-sm text-purple-700 mt-2">
                  {country.frequency === 50 ? 'European standard' : 'American standard'}
                </p>
              </div>

              {/* US Adapter Need Card */}
              <div className={`p-6 rounded-xl border ${
                country.hasAdapter 
                  ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-200' 
                  : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'
              }`}>
                <div className="flex items-center mb-3">
                  <svg className={`w-8 h-8 mr-3 ${country.hasAdapter ? 'text-red-600' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {country.hasAdapter ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                  <h3 className="font-semibold text-lg">US Adapter</h3>
                </div>
                <div className={`text-2xl font-bold ${country.hasAdapter ? 'text-red-900' : 'text-green-900'}`}>
                  {country.hasAdapter ? 'Required' : 'Not Needed'}
                </div>
                <p className={`text-sm mt-2 ${country.hasAdapter ? 'text-red-700' : 'text-green-700'}`}>
                  {country.hasAdapter ? 'Pack an adapter for US devices' : 'US plugs work directly'}
                </p>
              </div>

              {/* Voltage Converter Card */}
              <div className={`p-6 rounded-xl border ${
                country.voltage > 127 
                  ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200' 
                  : 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200'
              }`}>
                <div className="flex items-center mb-3">
                  <svg className={`w-8 h-8 mr-3 ${country.voltage > 127 ? 'text-orange-600' : 'text-teal-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <h3 className="font-semibold text-lg">Converter</h3>
                </div>
                <div className={`text-2xl font-bold ${country.voltage > 127 ? 'text-orange-900' : 'text-teal-900'}`}>
                  {country.voltage > 127 ? 'May Need' : 'Not Needed'}
                </div>
                <p className={`text-sm mt-2 ${country.voltage > 127 ? 'text-orange-700' : 'text-teal-700'}`}>
                  {country.voltage > 127 ? 'Check device compatibility' : 'Voltage compatible'}
                </p>
              </div>

              {/* Country Flag Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-3">
                  <img 
                    src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                    alt={`${country.name} flag`}
                    className="w-8 h-6 mr-3 rounded shadow"
                  />
                  <h3 className="font-semibold text-lg">Country</h3>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {country.name}
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  {country.continent.charAt(0).toUpperCase() + country.continent.slice(1).replace('-', ' ')}
                </p>
              </div>
            </div>
          </div>

          {/* Adapter Finder Widget */}
          <div className="my-8">
            <AdapterFinder destinationCountry={country} />
          </div>


          {/* Do I Need an Adapter Section */}
          <section id="do-i-need-adapter" className="my-12">
            <h2 className="text-3xl font-bold mb-6">Do You Need a Power Adapter in {country.name}?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* US Travelers */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🇺🇸</span> From United States
                </h3>
                <div className={`p-4 rounded-lg mb-4 ${
                  country.hasAdapter ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
                }`}>
                  <p className={`font-semibold ${
                    country.hasAdapter ? 'text-red-800' : 'text-green-800'
                  }`}>
                    {country.hasAdapter ? '✗ Adapter Required' : '✓ No Adapter Needed'}
                  </p>
                </div>
                <p className="text-gray-700">
                  {country.hasAdapter 
                    ? `You'll need a travel adapter as ${country.name} uses Type ${country.plugTypes.join(', ')} plugs, which are different from US Type A/B plugs.`
                    : `Your US plugs should work in ${country.name} as it uses compatible Type ${country.plugTypes.join(', ')} outlets.`
                  }
                </p>
              </div>

              {/* UK Travelers */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🇬🇧</span> From United Kingdom
                </h3>
                <div className={`p-4 rounded-lg mb-4 ${
                  country.plugTypes.includes('G') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}>
                  <p className={`font-semibold ${
                    country.plugTypes.includes('G') ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {country.plugTypes.includes('G') ? '✓ No Adapter Needed' : '✗ Adapter Required'}
                  </p>
                </div>
                <p className="text-gray-700">
                  {country.plugTypes.includes('G') 
                    ? `UK travelers don't need an adapter as ${country.name} uses Type G plugs, same as the UK.`
                    : `UK travelers need an adapter as ${country.name} uses Type ${country.plugTypes.join(', ')} plugs, different from UK Type G.`
                  }
                </p>
              </div>

              {/* EU Travelers */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🇪🇺</span> From Europe
                </h3>
                <div className={`p-4 rounded-lg mb-4 ${
                  country.plugTypes.some(p => ['C', 'E', 'F'].includes(p)) ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}>
                  <p className={`font-semibold ${
                    country.plugTypes.some(p => ['C', 'E', 'F'].includes(p)) ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {country.plugTypes.some(p => ['C', 'E', 'F'].includes(p)) ? '✓ Usually No Adapter Needed' : '✗ Adapter Required'}
                  </p>
                </div>
                <p className="text-gray-700">
                  {country.plugTypes.some(p => ['C', 'E', 'F'].includes(p))
                    ? `Most EU travelers won't need an adapter as ${country.name} uses European-compatible plugs.`
                    : `EU travelers need an adapter as ${country.name} uses Type ${country.plugTypes.join(', ')} plugs.`
                  }
                </p>
              </div>

              {/* Australia Travelers */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🇦🇺</span> From Australia
                </h3>
                <div className={`p-4 rounded-lg mb-4 ${
                  country.plugTypes.includes('I') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}>
                  <p className={`font-semibold ${
                    country.plugTypes.includes('I') ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {country.plugTypes.includes('I') ? '✓ No Adapter Needed' : '✗ Adapter Required'}
                  </p>
                </div>
                <p className="text-gray-700">
                  {country.plugTypes.includes('I')
                    ? `Australian travelers don't need an adapter as ${country.name} uses Type I plugs, same as Australia.`
                    : `Australian travelers need an adapter as ${country.name} uses Type ${country.plugTypes.join(', ')} plugs.`
                  }
                </p>
              </div>
            </div>

            {country.voltage > 127 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Voltage Warning</h3>
                <p className="text-yellow-800">
                  <strong>Important:</strong> {country.name} uses {country.voltage}V, which is higher than 
                  the 120V used in North America. Make sure your devices support dual voltage 
                  (usually labeled as 100-240V) before plugging them in. If not, you'll need a voltage converter 
                  in addition to a plug adapter.
                </p>
              </div>
            )}
          </section>


          {/* Voltage & Frequency Section */}
          <section id="voltage" className="my-12">
            <h2 className="text-3xl font-bold mb-6">Voltage & Frequency in {country.name}</h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">⚡ Electrical Standards</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Voltage:</span>
                      <span className="font-semibold">{country.voltage}V</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Frequency:</span>
                      <span className="font-semibold">{country.frequency}Hz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Voltage Type:</span>
                      <span className="font-semibold">{country.voltage > 127 ? 'High (220V+)' : 'Low (110-127V)'}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">🔌 Device Compatibility</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm">Phones & Laptops: Usually OK</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm">Cameras: Usually OK</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`w-2 h-2 ${country.voltage > 127 ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-2`}></span>
                      <span className="text-sm">Hair Dryers: {country.voltage > 127 ? 'Need Converter' : 'Usually OK'}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`w-2 h-2 ${country.voltage > 127 ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-2`}></span>
                      <span className="text-sm">Small Appliances: {country.voltage > 127 ? 'Need Converter' : 'Usually OK'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                {country.voltage > 127 
                  ? `${country.name} uses ${country.voltage}V electricity, which is significantly higher than the 120V standard used in North America. This means you need to be careful about which devices you plug in.`
                  : `${country.name} uses ${country.voltage}V electricity, which is compatible with most North American devices that typically operate on 120V.`
                }
              </p>
              
              <p className="mb-4">
                Most modern electronic devices (smartphones, tablets, laptop chargers, camera chargers) are designed to work with 
                both 110-240V, making them safe to use in {country.name} with just a plug adapter. Look for "Input: 100-240V" 
                on your device's label or power adapter.
              </p>
              
              {country.voltage > 127 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">High-Power Devices Need Converters</h4>
                  <p className="text-red-700">
                    Hair dryers, curling irons, electric shavers, and small kitchen appliances designed for 110-120V 
                    will be damaged by {country.name}'s {country.voltage}V supply. You'll need a voltage converter 
                    or step-down transformer for these devices.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Travel Tips Section */}
          <section id="travel-tips" className="my-12">
            <h2 className="text-3xl font-bold mb-6">🌍 Essential Travel Tips for {country.name}</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-4">📱 Device Charging Strategy</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Charge devices overnight when electricity is most stable</li>
                  <li>• Use power banks as backup for day trips</li>
                  <li>• Hotel safes often have charging outlets inside</li>
                  <li>• Airport lounges provide universal charging stations</li>
                  <li>• Consider portable solar chargers for remote areas</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-4">🏨 Hotel & Accommodation Tips</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Many hotels provide adapters - ask at reception</li>
                  <li>• Bathroom shaver sockets may have different voltage</li>
                  <li>• USB outlets increasingly common in modern hotels</li>
                  <li>• Request rooms with international outlets when booking</li>
                  <li>• Extension cords multiply available outlets</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Safety Precautions in {country.name}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                <div>
                  <h4 className="font-medium mb-2">Electrical Safety:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Test adapters with low-value devices first</li>
                    <li>• Avoid using adapters during thunderstorms</li>
                    <li>• Unplug devices when not in use</li>
                    <li>• Check for damaged outlets before use</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Shopping Tips:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Buy adapters at electronics stores, not tourist shops</li>
                    <li>• Airport adapters cost 3-4x more</li>
                    <li>• Local supermarkets often sell adapters cheaply</li>
                    <li>• Check compatibility before purchasing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-purple-900 mb-3">💡 Local Insights for {country.name}</h3>
              <div className="text-purple-800 space-y-3">
                <p>
                  <strong>Power Stability:</strong> {country.voltage > 200 ? 'Generally stable power supply suitable for sensitive electronics.' : 'Power supply is generally stable, though rural areas may experience fluctuations.'}
                </p>
                <p>
                  <strong>Adapter Availability:</strong> Universal adapters are widely available in major cities and tourist areas. 
                  Electronics stores and larger supermarkets typically stock them.
                </p>
                <p>
                  <strong>Emergency Charging:</strong> Most cafes, restaurants, and public spaces in {country.name} are accommodating 
                  about letting travelers charge devices. Always ask permission first.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="my-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-lg">
                <summary className="font-semibold text-lg p-6 cursor-pointer hover:bg-gray-50">
                  What plug type does {country.name} use?
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>
                    {country.name} uses Type {country.plugTypes.join(' and Type ')} electrical outlets. 
                    The standard voltage is {country.voltage}V at {country.frequency}Hz frequency.
                  </p>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg">
                <summary className="font-semibold text-lg p-6 cursor-pointer hover:bg-gray-50">
                  Do I need a travel adapter for {country.name}?
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>
                    {country.hasAdapter 
                      ? `Whether you need an adapter depends on your home country. US travelers need an adapter since ${country.name} uses Type ${country.plugTypes.join(', ')} plugs, which are different from US Type A/B plugs. UK travelers ${country.plugTypes.includes('G') ? 'do not need an adapter' : 'need an adapter'}. EU travelers ${country.plugTypes.some(p => ['C', 'E', 'F'].includes(p)) ? 'typically do not need an adapter' : 'need an adapter'}.`
                      : `Most travelers do not need an adapter for ${country.name} as it uses Type ${country.plugTypes.join(', ')} plugs which are widely compatible. However, check your specific device plugs to be sure.`
                    }
                  </p>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg">
                <summary className="font-semibold text-lg p-6 cursor-pointer hover:bg-gray-50">
                  What is the voltage in {country.name}?
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>
                    The standard voltage in {country.name} is {country.voltage} volts at {country.frequency}Hz. 
                    {country.voltage > 127 
                      ? 'This is higher than North American voltage (120V), so you may need a voltage converter for devices not designed for international use. Check your device labels for dual voltage support (100-240V).' 
                      : 'This voltage is compatible with most modern electronics designed for international use.'}
                  </p>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg">
                <summary className="font-semibold text-lg p-6 cursor-pointer hover:bg-gray-50">
                  Do I need a voltage converter for {country.name}?
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>
                    {country.voltage > 127 
                      ? `You may need a voltage converter for ${country.name} if your devices only support 120V. Most modern electronics (phones, laptops, cameras) support dual voltage (100-240V) and only need a plug adapter. However, hair dryers, curling irons, and some small appliances may require a voltage converter.`
                      : `Most travelers do not need a voltage converter for ${country.name} as the ${country.voltage}V supply is compatible with dual voltage devices. Always check your device specifications to be sure.`
                    }
                  </p>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg">
                <summary className="font-semibold text-lg p-6 cursor-pointer hover:bg-gray-50">
                  What is the best travel adapter for {country.name}?
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p>
                    For {country.name}, you need an adapter that supports Type {country.plugTypes.join(' and Type ')} plugs. 
                    A universal travel adapter with these plug types will work perfectly. Look for adapters with surge protection 
                    and USB ports for added convenience.
                  </p>
                </div>
              </details>
            </div>
          </section>
          {/* Related Countries Section */}
          {relatedCountries.length > 0 && (
            <section className="my-12">
              <h2 className="text-3xl font-bold mb-6">Other Countries Using the Same Plug Types</h2>
              <p className="text-gray-700 mb-6">
                These countries also use Type {country.plugTypes.join(' and/or Type ')} plugs like {country.name}:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedCountries.map((relatedCountry) => (
                  <Link
                    key={relatedCountry.slug}
                    href={`/${relatedCountry.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://flagcdn.com/w40/${relatedCountry.iso2.toLowerCase()}.png`}
                        alt={`${relatedCountry.name} flag`}
                        className="w-8 h-6 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{relatedCountry.name}</p>
                        <p className="text-sm text-gray-600">
                          Type {relatedCountry.plugTypes.join(', ')} • {relatedCountry.voltage}V
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  href={`/plug-type/type-${country.plugTypes[0].toLowerCase()}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  See all countries using Type {country.plugTypes[0]} plugs →
                </Link>
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}