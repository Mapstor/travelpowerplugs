import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Travel Power Plugs - The Story Behind Your Ultimate Plug Guide | Marko Visic',
  description: 'Learn about Travel Power Plugs, created by Marko Visic after a charging crisis in Mexico. Discover our mission to help travelers worldwide stay connected with comprehensive plug type information for 227 countries and territories.',
  openGraph: {
    title: 'About Travel Power Plugs - The Story Behind Your Ultimate Plug Guide',
    description: 'The personal story of how a dead iPhone in Cancun led to creating the most comprehensive travel plug guide on the internet.',
    url: 'https://travelpowerplugs.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            About Travel Power Plugs
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The comprehensive guide to electrical outlets in 227 countries and territories, born from a travel nightmare in Mexico.
          </p>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Hi, I'm Marko Visic</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm the author and creator of Travel Power Plugs, your comprehensive guide to charging your devices anywhere in the world. What started as a personal Excel spreadsheet has evolved into a resource used by thousands of travelers daily to ensure they never face the dreaded dead battery abroad.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Travel Power Plugs is essentially a website that helps you charge your iPhone, laptop, camera, and battery pack in any country in the world. We provide detailed information on which power plugs are used in 227 countries and territories, along with voltage specifications, frequency details, and adapter recommendations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Story: How a Dead iPhone in Cancun Changed Everything</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The idea for Travel Power Plugs came to me during a trip to Mexico's Yucatan Peninsula in 2022. Here's what happened:
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I was traveling from Europe via Paris and Atlanta to Mexico City and then Cancun. We landed in Cancun on a Sunday with my iPhone battery at 27%. Naturally, after checking into the hotel room, I immediately wanted to charge my phone with my European plug. To my horror, the plug didn't fit into the outlet.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <p className="text-gray-700 italic">
                "I discovered that in Europe, we use Type C and Type F plugs. In Mexico, however, they use Type A and Type B plugs. A small detail that almost ruined my vacation."
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              I frantically used Google Maps (watching my battery percentage drop with each search) to locate an electronics store where I could buy a Mexican adapter. Since it was Sunday, only one electronics store was open – and it was 20 kilometers (about 15 miles) away from my hotel in Cancun.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The terror was real! I'm not immune to low phone battery anxiety, especially when I'm an ocean away from home with my phone being the only contact with the world. I can still remember the overwhelming relief and the urge to hug the guy at the electronics store who sold me that life-saving adapter.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The joyful pleasure of successfully charging my iPhone in Mexico (and yes, the coffee at that hipster café afterwards was absurdly good) made me realize how crucial this simple piece of information could be for travelers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">From Personal Spreadsheet to Global Resource</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Since that eye-opening experience in Cancun, I've traveled to many countries with non-European sockets, and my universal adapter became my most valuable travel companion. Japan, Cyprus, UK, USA, South Korea, Madagascar, and Nepal, to name a few. I was genuinely more comfortable climbing the Himalayas in Nepal knowing I already had an adapter that would keep my phone charged for emergency calls.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Now, I always check which outlet type a country uses before traveling. Initially, I created an Excel spreadsheet with all the countries in the world and their outlet types. A friend who does web development saw it and suggested I turn it into a website with an interactive world map. Since I found it helpful, I thought others would too – and that's how Travel Power Plugs was born, with the interactive world plug types map as the centerpiece.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Data Sources & Methodology</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Accuracy is paramount when it comes to travel information. Our plug type data comes from multiple authoritative sources to ensure you get the most reliable information:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
              <li><strong>International Electrotechnical Commission (IEC):</strong> The primary source for official plug type standards and classifications (IEC 60083).</li>
              <li><strong>World Standards Organization:</strong> Provides comprehensive electrical standards data for all countries.</li>
              <li><strong>National electrical regulatory bodies:</strong> Country-specific information from local electrical authorities.</li>
              <li><strong>Embassy and consulate resources:</strong> Official travel advisories and practical information.</li>
              <li><strong>Personal verification:</strong> I personally verify information through my travels and maintain a network of local contacts in various countries who confirm outlet types and voltage specifications.</li>
              <li><strong>User feedback:</strong> Travelers regularly send updates and corrections, which we verify against official sources.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              All data is cross-referenced across multiple sources and updated quarterly to reflect any changes in electrical standards or country-specific regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Makes Travel Power Plugs Unique</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike generic travel sites that provide basic plug information, Travel Power Plugs offers:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">🗺️ Interactive World Map</h3>
                <p className="text-gray-700">
                  Instantly see plug types for any country with our color-coded interactive map. Click any country to dive deep into its electrical specifications.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">📊 Comprehensive Coverage</h3>
                <p className="text-gray-700">
                  Detailed information for 227 countries and territories, including remote islands and disputed regions often overlooked by other resources.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">⚡ Technical Specifications</h3>
                <p className="text-gray-700">
                  Not just plug types – we provide voltage (100V-240V), frequency (50Hz/60Hz), and grounding information crucial for sensitive electronics.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">🔧 Practical Tools</h3>
                <p className="text-gray-700">
                  Adapter finder, voltage calculator, trip planner, and compatibility matrix to help you prepare for multi-country journeys.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Features & Tools We Offer</h2>
            
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
              <li><strong>Country Pages:</strong> Detailed electrical information for every country, including major cities and regional variations.</li>
              <li><strong>Plug Type Library:</strong> Visual guides for all 15 plug types (A through O) with technical drawings and compatibility information.</li>
              <li><strong>Interactive Animations:</strong> See how each plug connects with our detailed SVG animations.</li>
              <li><strong>Continent Guides:</strong> Regional overviews for easier trip planning across multiple countries.</li>
              <li><strong>Adapter Finder Tool:</strong> Input your home country and destination to get specific adapter recommendations.</li>
              <li><strong>Voltage Calculator:</strong> Check if your devices need voltage converters, not just plug adapters.</li>
              <li><strong>Trip Planner:</strong> Plan multi-country trips with a comprehensive adapter strategy.</li>
              <li><strong>Compatibility Matrix:</strong> See which plugs work in which sockets at a glance.</li>
              <li><strong>Mobile-Optimized:</strong> Access all information on the go, when you need it most.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mission is simple: ensure no traveler ever faces the frustration of incompatible plugs or dead devices abroad. We believe that staying connected while traveling shouldn't be a luxury or a source of stress – it should be straightforward and accessible to everyone.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're a business traveler needing to power your laptop for an important presentation, a photographer charging camera batteries for that perfect sunrise shot, or a backpacker keeping your phone alive for navigation and emergency calls, Travel Power Plugs has you covered.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Looking Forward</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Travel Power Plugs continues to evolve. We're constantly adding new features based on user feedback, updating our database with the latest electrical standards, and expanding our coverage to include emerging travel destinations. Future plans include:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
              <li>Mobile app for offline access to plug information</li>
              <li>USB charging standards guide for modern devices</li>
              <li>Electric vehicle charging guides for international road trips</li>
              <li>Renewable energy and solar charging resources for eco-conscious travelers</li>
              <li>Community forum for travelers to share adapter tips and experiences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              If you wish to follow my travels and see which outlets I'm encountering around the world, you can find me on Instagram where I post pictures and share too many stories about my adventures. I'm always happy to hear from fellow travelers and answer questions about plug types, adapters, or travel in general.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Have a question about a specific country's electrical system? Found an error or have updated information? Want to share your own plug-related travel story? Feel free to reach out – your feedback helps make Travel Power Plugs better for everyone.
            </p>
          </section>

          <section className="mb-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">A Personal Note</h3>
            
            <p className="text-gray-700 leading-relaxed">
              Every time I receive an email from a traveler who avoided my Cancun experience thanks to this website, it reminds me why I built Travel Power Plugs. Travel should be about discovering new places, meeting people, and creating memories – not frantically searching for an electronics store on a Sunday afternoon with a dying phone. Here's to keeping all your devices charged and your travels stress-free!
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              — Marko Visic, Creator of Travel Power Plugs
            </p>
          </section>
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Start Planning Your Trip
          </h2>
          <p className="text-gray-700 mb-6">
            Check plug types for your next destination and never worry about charging your devices again.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore World Map
            </Link>
            <Link 
              href="/tools/adapter-finder" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Find Your Adapter
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}