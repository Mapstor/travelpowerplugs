import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Travel Adapter Guides - Essential Information for International Travel',
  description: 'Comprehensive guides about travel adapters, voltage converters, electrical safety, and international plug standards. Everything you need to know before traveling.',
};

const guides = [
  {
    slug: 'universal-travel-adapter',
    title: 'Universal Travel Adapter Guide',
    description: 'Complete buying guide for universal travel adapters. Learn about features, safety, and how to choose the right one.',
    icon: '🔌'
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 h-16">
        <div className="max-w-[960px] mx-auto px-4 h-full flex items-center">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides' }
            ]}
          />
        </div>
      </header>

      <main className="max-w-[960px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
          Travel Adapter Guides
        </h1>
        
        <p className="text-[15px] leading-[1.7] text-gray-800 mb-8">
          Essential information and comprehensive guides about travel adapters, voltage converters, and electrical safety 
          for international travel. Whether you're a first-time traveler or a seasoned globetrotter, these guides will 
          help you stay powered up safely around the world.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{guide.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips for International Travel</h2>
          <div className="grid md:grid-cols-2 gap-4 text-[15px]">
            <div>
              <h3 className="font-medium mb-2">Before You Travel:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Check plug types for your destination</li>
                <li>• Verify voltage compatibility of devices</li>
                <li>• Purchase adapters in advance</li>
                <li>• Test adapters before departure</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">While Traveling:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Never force plugs into sockets</li>
                <li>• Check adapter ratings before use</li>
                <li>• Unplug devices when not in use</li>
                <li>• Keep adapters dry and clean</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-[15px] text-gray-700 mb-4">
            Quick links to plug type information for popular travel destinations:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'United Kingdom', slug: 'united-kingdom-electric-plug-types' },
              { name: 'France', slug: 'france-electric-plug-types' },
              { name: 'Italy', slug: 'italy-electric-plug-types' },
              { name: 'Germany', slug: 'germany-electric-plug-types' },
              { name: 'Spain', slug: 'spain-electric-plug-types' },
              { name: 'Japan', slug: 'japan-electric-plug-types' },
              { name: 'Australia', slug: 'australia-electric-plug-types-do-you-need-adapter' },
              { name: 'Thailand', slug: 'thailand-electric-plug-types' },
            ].map(country => (
              <Link
                key={country.slug}
                href={`/${country.slug}`}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
              >
                {country.name}
              </Link>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}