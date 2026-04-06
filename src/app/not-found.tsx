import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - Travel Power Plugs',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <svg
            className="mx-auto h-32 w-32 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Oops! Wrong Plug Type
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Looks like you're trying to connect to a page that doesn't exist. 
          No adapter can help with this one!
        </p>

        {/* Search Suggestions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Were you looking for:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <Link href="/united-states-electric-plug-type" className="flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">🇺🇸</span> United States Plugs
            </Link>
            <Link href="/united-kingdom-electric-plug-type" className="flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">🇬🇧</span> United Kingdom Plugs
            </Link>
            <Link href="/japan-electric-plug-types" className="flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">🇯🇵</span> Japan Plugs
            </Link>
            <Link href="/germany-electric-plug-types" className="flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">🇩🇪</span> Germany Plugs
            </Link>
            <Link href="/tools/adapter-finder" className="flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">🔌</span> Adapter Finder Tool
            </Link>
            <Link href="/compare" className="flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-2">⚡</span> Compare Plug Types
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Homepage
          </Link>
          <Link
            href="/tools/adapter-finder"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Find Your Adapter
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500">
          If you believe this is an error, please{' '}
          <a href="mailto:support@travelpowerplugs.com" className="text-blue-600 hover:underline">
            contact us
          </a>
        </p>
      </div>
    </div>
  );
}