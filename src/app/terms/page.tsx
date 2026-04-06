import { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Terms of Use — Travel Power Plugs",
  description:
    "Terms of use for travelpowerplugs.com. Understanding your rights and responsibilities when using our travel electrical information.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <article className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Terms of Use</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Welcome to <strong>Travel Power Plugs</strong> ("we", "us", "our"). 
              By accessing and using <strong>travelpowerplugs.com</strong> (the "Site"), 
              you agree to these Terms of Use. If you do not agree, please do not use the Site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of the Site</h2>
            <p className="mb-6">
              The Site provides information about electrical standards, plug types, and 
              power requirements worldwide. This information is for general reference only 
              and should not be your sole source for electrical safety decisions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Disclaimer of Warranties</h2>
            <p className="mb-6">
              The Site is provided "as is" without warranties of any kind. While we strive 
              for accuracy, electrical standards can change. Always verify information with 
              official sources and consult qualified electricians for safety-critical applications.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Limitation of Liability</h2>
            <p className="mb-6">
              We are not liable for any damages arising from your use of the Site or 
              reliance on its content. This includes, but is not limited to, damage to 
              electrical devices, personal injury, or property damage.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Verify all electrical information before use</li>
              <li>Consult local electricians for safety requirements</li>
              <li>Use appropriate safety equipment and procedures</li>
              <li>Check device compatibility before connecting to foreign outlets</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="mb-6">
              All content on the Site, including text, graphics, and code, is owned by 
              Travel Power Plugs or its licensors. You may not reproduce, distribute, or 
              create derivative works without our written permission.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
            <p className="mb-6">
              The Site may contain links to third-party websites. We are not responsible 
              for the content or practices of these external sites.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Affiliate Disclosure</h2>
            <p className="mb-6">
              The Site participates in affiliate programs. We may earn commissions from 
              purchases made through our links. This does not affect the price you pay.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Advertising</h2>
            <p className="mb-6">
              The Site displays advertisements through Raptive (formerly AdThrive). These 
              ads help support the free content we provide.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications to Terms</h2>
            <p className="mb-6">
              We may update these terms at any time. Continued use of the Site after 
              changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
            <p className="mb-6">
              These terms are governed by the laws of Slovenia and the European Union. 
              Any disputes shall be resolved in the courts of Slovenia.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Information</h2>
            <p className="mb-6">
              For questions about these terms, contact us at:{" "}
              <a 
                href="mailto:info@travelpowerplugs.com"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                info@travelpowerplugs.com
              </a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}