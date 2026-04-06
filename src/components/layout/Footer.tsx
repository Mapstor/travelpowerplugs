import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-xl font-serif font-bold text-white">Travel Power Plugs</h3>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              The world's most comprehensive guide to electrical outlets, plug types, and power adapters. 
              Trusted by millions of travelers since 2016.
            </p>
            <div className="flex space-x-4">
              {/* Trust Badges */}
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h2a1 1 0 100 2 2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd" />
                </svg>
                <span>227 Countries</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/adapter-finder" className="text-sm hover:text-white transition-colors">
                  Adapter Finder
                </Link>
              </li>
              <li>
                <Link href="/tools/voltage-calculator" className="text-sm hover:text-white transition-colors">
                  Voltage Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/trip-planner" className="text-sm hover:text-white transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                <Link href="/tools/plug-identifier" className="text-sm hover:text-white transition-colors">
                  Plug Identifier
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Popular</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/united-states-electric-plug-types" className="text-sm hover:text-white transition-colors">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/united-kingdom-electric-plug-types-which-adapter-do-you-need-in-uk" className="text-sm hover:text-white transition-colors">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/japan-electric-plug-types-will-you-need-an-adapter-probably-yes" className="text-sm hover:text-white transition-colors">
                  Japan
                </Link>
              </li>
              <li>
                <Link href="/italy-electric-plug-types-which-outlets-they-use-in-italy-adapters" className="text-sm hover:text-white transition-colors">
                  Italy
                </Link>
              </li>
              <li>
                <Link href="/france-electric-plug-type-will-you-need-an-adapter-in-paris" className="text-sm hover:text-white transition-colors">
                  France
                </Link>
              </li>
              <li>
                <Link href="/germany-electric-plug-types-will-you-need-an-adapter-in-germany" className="text-sm hover:text-white transition-colors">
                  Germany
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/editorial" className="text-sm hover:text-white transition-colors">
                  Editorial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Travel Power Plugs. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-950 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 text-center">
            Disclaimer: While we strive for accuracy, electrical standards can change. Always verify with official sources and consult qualified electricians for safety-critical applications.
          </p>
        </div>
      </div>
    </footer>
  );
}