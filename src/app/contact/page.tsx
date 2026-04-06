import { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Contact Us — Travel Power Plugs",
  description:
    "Get in touch with the Travel Power Plugs team. Questions about electrical standards, corrections to our database, partnership opportunities, or feedback — we're here to help.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Contact Travel Power Plugs</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're committed to providing accurate, up-to-date information about electrical standards worldwide. 
            Your feedback helps us maintain the most comprehensive power plug database on the internet.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
              <p className="text-sm text-gray-600 mb-3">For questions about electrical standards and travel adapters</p>
              <a href="mailto:info@travelpowerplugs.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                info@travelpowerplugs.com
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Corrections</h3>
              <p className="text-sm text-gray-600 mb-3">Found an error? Help us keep our database accurate</p>
              <a href="mailto:corrections@travelpowerplugs.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                corrections@travelpowerplugs.com
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-sm text-gray-600 mb-3">Interested in collaboration or business opportunities?</p>
              <a href="mailto:partnerships@travelpowerplugs.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                partnerships@travelpowerplugs.com
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Response Time</h3>
              <p className="text-sm text-gray-600 mb-4">
                We typically respond to inquiries within 24-48 hours during business days. 
                For urgent matters, please indicate this in your subject line.
              </p>
              <p className="text-xs text-gray-500">
                Business hours: Monday - Friday, 9:00 AM - 5:00 PM CET (Central European Time)
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Report an Issue</h3>
              <p className="text-sm text-gray-700 mb-3">
                Found outdated information or technical problems? We appreciate your help in keeping our site accurate and functional.
              </p>
              <a href="mailto:corrections@travelpowerplugs.com" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                Report Issue
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">How often is your data updated?</h3>
                <p className="text-sm text-gray-600">
                  We continuously monitor electrical standard changes worldwide and update our database within 48 hours of any official changes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Can I use your data for my project?</h3>
                <p className="text-sm text-gray-600">
                  For commercial use or API access, please contact us at partnerships@travelpowerplugs.com for licensing information.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Do you offer bulk adapter purchases?</h3>
                <p className="text-sm text-gray-600">
                  We partner with select manufacturers for bulk orders. Contact us for recommendations based on your needs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">How can I contribute to the site?</h3>
                <p className="text-sm text-gray-600">
                  We welcome corrections, photos, and first-hand travel experiences. Email us at info@travelpowerplugs.com.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Is the information on this site official?</h3>
                <p className="text-sm text-gray-600">
                  We compile data from official sources and verify with local electrical authorities. However, always double-check for safety-critical applications.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Why are there different plug types?</h3>
                <p className="text-sm text-gray-600">
                  Electrical standards evolved independently in different countries before international standardization efforts began, resulting in today's variety.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About Our Service</h2>
            <p className="text-gray-600 mb-4">
              Travel Power Plugs is the internet's most comprehensive resource for international electrical standards. 
              We maintain detailed information on plug types, voltages, and frequencies for 227 countries and territories worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our database is continuously updated to reflect changes in electrical standards, new country formations, 
              and updates to electrical safety regulations. We work with electrical engineers, travelers, and local experts 
              to ensure our information remains accurate and practical.
            </p>
            <p className="text-gray-600">
              Founded in 2016, we've helped millions of travelers prepare for their trips by providing clear, 
              accurate information about electrical compatibility. Whether you're a tourist, business traveler, 
              or digital nomad, our goal is to help you stay powered up wherever you go.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}