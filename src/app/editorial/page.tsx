import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Editorial - Travel Power Plugs Mission & Standards',
  description: 'Learn about Travel Power Plugs editorial mission, accuracy standards, and commitment to providing practical travel adapter information for international travelers.',
};

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 h-16">
        <div className="max-w-[960px] mx-auto px-4 h-full flex items-center">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Editorial' }
            ]}
          />
        </div>
      </header>

      <main className="max-w-[960px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
          Editorial Standards & Mission
        </h1>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-[15px] leading-[1.7] text-gray-800 mb-4">
              Travel Power Plugs exists to solve one of travel's most frustrating problems: arriving at your destination 
              only to discover your devices won't plug in. Since 2016, we've been the internet's most trusted source for 
              practical, real-world information about international electrical outlets and travel adapters.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 mb-4">
              Unlike other resources that focus on official standards, we prioritize <strong>practical accuracy</strong>. 
              We tell you what you'll actually encounter in hotels, airports, and homes around the world—not what the 
              official specifications say should be there.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Editorial Standards</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Practical Over Theoretical</h3>
              <p className="text-sm text-gray-700">
                We distinguish between what's officially standard and what travelers actually find. Our "primary" 
                classifications represent plugs used in 90%+ of sockets, while "legacy" indicates outdated systems 
                you might still encounter.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Real-World Testing</h3>
              <p className="text-sm text-gray-700">
                Our recommendations are based on traveler feedback, hotel surveys, and on-location verification. 
                We regularly update information based on infrastructure changes and user reports.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Safety First</h3>
              <p className="text-sm text-gray-700">
                All adapter recommendations prioritize safety. We never recommend solutions that could damage 
                devices or create electrical hazards, even if they might "work" technically.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Philosophy</h2>
            <ul className="space-y-3 text-[15px] leading-[1.7] text-gray-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Honesty over marketing:</strong> We tell you when you don't need an expensive universal adapter—sometimes a simple plug adapter is all you need.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Context matters:</strong> Business hotels may differ from budget accommodations. We provide context for different travel scenarios.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Regular updates:</strong> Electrical infrastructure changes. We continuously verify and update our information.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>User-centric design:</strong> Our tools prioritize quick answers over comprehensive theory. Most travelers just need to know: "Will my phone charger work?"
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About the Editor</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-[15px] leading-[1.7] text-gray-800 mb-4">
                <strong>Marko Visic</strong> is the founder and editor of Travel Power Plugs. A software engineer and 
                frequent traveler, Marko started this site after one too many trips where he couldn't charge his devices.
              </p>
              <p className="text-[15px] leading-[1.7] text-gray-800 mb-4">
                Having visited 40+ countries, Marko combines technical knowledge with practical travel experience. 
                He maintains the site's technical infrastructure while ensuring all information remains accessible 
                to non-technical travelers.
              </p>
              <p className="text-sm text-gray-600">
                "I built this site because I was tired of finding travel adapter information that was technically 
                correct but practically useless. Travelers need to know what actually works, not what the standards say."
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Transparency & Accuracy</h2>
            <div className="space-y-4 text-[15px] leading-[1.7] text-gray-800">
              <div>
                <h3 className="font-semibold mb-2">Data Sources</h3>
                <p className="text-sm text-gray-700">
                  Our information comes from official electrical standards, hotel industry surveys, traveler reports, 
                  and direct verification. We cite sources where helpful and acknowledge when information is based 
                  on practical experience rather than official documentation.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Corrections & Updates</h3>
                <p className="text-sm text-gray-700">
                  Found outdated information? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link>. 
                  We update content regularly and appreciate user feedback. All significant corrections are implemented 
                  within 48 hours.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Commercial Relationships</h3>
                <p className="text-sm text-gray-700">
                  We may earn commissions from adapter purchases through affiliate links, but this doesn't influence 
                  our recommendations. We recommend the cheapest, safest solution for your specific needs—sometimes 
                  that's a $5 adapter, not a $50 universal one.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Site History</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex">
                <span className="font-semibold w-20">2016:</span>
                <span>Site launched with basic plug type information for 50 countries</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20">2018:</span>
                <span>Added voltage and frequency data, expanded to 150 countries</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20">2021:</span>
                <span>Introduced practical classifications (primary/secondary/legacy plug types)</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20">2024:</span>
                <span>Launched interactive tools: adapter finder, voltage calculator, trip planner</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-20">2026:</span>
                <span>Complete rebuild with enhanced data for 259 countries and territories</span>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-xl font-semibold mb-4">Questions or Feedback?</h2>
              <p className="mb-6 text-blue-100">
                We're constantly working to improve our information and tools. Your travel experiences help make 
                this resource better for everyone.
              </p>
              <div className="space-x-4">
                <Link 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/tools/adapter-finder" 
                  className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Try Our Tools
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}