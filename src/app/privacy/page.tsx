import { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Privacy Policy — Travel Power Plugs",
  description:
    "Privacy policy for travelpowerplugs.com. Learn how we handle your data, cookies, and third-party services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <article className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              This privacy policy explains how <strong>Travel Power Plugs</strong>{" "}
              ("we", "us", "our") collects, uses, and protects your information when you visit{" "}
              <strong>travelpowerplugs.com</strong> (the "Site"). This Site is operated by 
              Marko Visic, an individual based in Slovenia, European Union.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Information you provide</h3>
            <p className="mb-6">
              If you use our contact form, we collect your name, email address, and
              message content. This data is transmitted through a third-party form
              processor (e.g., Formspree) and is used solely to respond to your inquiry.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Information collected automatically</h3>
            <p className="mb-6">
              When you visit the Site, we may automatically collect certain
              information including your IP address, browser type, operating system,
              referring URL, pages visited, and time spent on pages. This
              information is collected through cookies and similar technologies.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cookies and Tracking</h2>
            <p className="mb-6">We use the following cookies and tracking technologies:</p>

            <p className="mb-6">
              <strong>Google Analytics</strong> — We use Google Analytics to
              understand how visitors use the Site. Google Analytics collects
              information such as how often users visit, which pages they view, and
              what other sites they used prior to visiting.
            </p>

            <p className="mb-6">
              <strong>Raptive (formerly AdThrive)</strong> — We use Raptive for
              advertising. Raptive and its partners may use cookies to serve ads
              based on your prior visits to our Site or other websites.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To respond to inquiries submitted through our contact form</li>
              <li>To analyze Site usage and improve content</li>
              <li>To display relevant advertisements</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
            <p className="mb-6">
              We do not sell, trade, or rent your personal information. We may share
              information with service providers who assist us in operating the Site
              (e.g., Google Analytics, Raptive, Formspree).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect
              your information. However, no method of internet transmission is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights (EU Residents)</h2>
            <p className="mb-6">
              Under GDPR, EU residents have the right to access, rectify, erase, or
              restrict processing of their personal data. To exercise these rights,
              contact us at info@travelpowerplugs.com.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="mb-6">
              Our Site is not directed to children under 13. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. Changes will be
              posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-6">
              If you have questions about this privacy policy, please contact us at:{" "}
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