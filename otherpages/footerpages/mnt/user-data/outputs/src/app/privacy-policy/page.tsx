import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Travel Power Plugs",
  description:
    "Privacy policy for travelpowerplugs.com. Learn how we handle your data, cookies, and third-party services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="static-page">
      <article className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: March 2026</p>

        <p>
          This privacy policy explains how <strong>Travel Power Plugs</strong>{" "}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
          uses, and protects your information when you visit{" "}
          <strong>travelpowerplugs.com</strong> (the &ldquo;Site&rdquo;). This
          Site is operated by Marko Visic, an individual based in Slovenia,
          European Union.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>Information you provide</h3>
        <p>
          If you use our contact form, we collect your name, email address, and
          message content. This data is transmitted through a third-party form
          processor (e.g., Formspree) and is used solely to respond to your
          inquiry.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          When you visit the Site, we may automatically collect certain
          information including your IP address, browser type, operating system,
          referring URL, pages visited, and time spent on pages. This
          information is collected through cookies and similar technologies.
        </p>

        <h2>2. Cookies and Tracking</h2>
        <p>We use the following cookies and tracking technologies:</p>

        <p>
          <strong>Google Analytics</strong> — We use Google Analytics to
          understand how visitors use the Site. Google Analytics collects
          information such as how often users visit, which pages they view, and
          what other sites they used prior to visiting. We use this information
          to improve the Site&rsquo;s content and user experience. Google
          Analytics collects only the IP address assigned to you on the date you
          visit the Site. You can opt out of Google Analytics by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>

        <p>
          <strong>Essential cookies</strong> — These are necessary for the
          website to function properly and cannot be switched off.
        </p>

        <h2>3. Affiliate Links</h2>
        <p>
          The Site may contain affiliate links to products on Amazon and other
          retailers. When you click an affiliate link and make a purchase, we
          may earn a small commission at no additional cost to you. These
          third-party sites have their own privacy policies, which we encourage
          you to review.
        </p>

        <h2>4. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries via the contact form</li>
          <li>Analyse site traffic and usage patterns to improve our content</li>
          <li>Ensure the Site functions correctly</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>5. Legal Basis for Processing (GDPR)</h2>
        <p>
          Under the General Data Protection Regulation (GDPR), we process your
          personal data based on the following legal grounds:
        </p>
        <ul>
          <li>
            <strong>Consent</strong> — For analytics cookies (where required by
            applicable law)
          </li>
          <li>
            <strong>Legitimate interest</strong> — For understanding site usage
            and improving our content
          </li>
          <li>
            <strong>Contract performance</strong> — For responding to contact
            form submissions
          </li>
        </ul>

        <h2>6. Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties, except as described in this policy (Google
          Analytics, form processors, and affiliate programmes). These
          third-party service providers are contractually obligated to protect
          your data.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Contact form submissions are retained for as long as necessary to
          respond to your inquiry and for up to 12 months afterwards. Analytics
          data is retained according to Google Analytics default settings (26
          months).
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Under the GDPR, you have the right to access, correct, delete, or
          restrict the processing of your personal data. You also have the right
          to data portability and to withdraw consent at any time. To exercise
          these rights, please contact us at{" "}
          <a
            href="mailto:hello@travelpowerplugs.com"
            className="inline-link"
          >
            hello@travelpowerplugs.com
          </a>
          .
        </p>

        <h2>9. Children&rsquo;s Privacy</h2>
        <p>
          The Site is not directed at individuals under the age of 16. We do not
          knowingly collect personal data from children.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be
          posted on this page with an updated &ldquo;last updated&rdquo; date.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{" "}
          <a
            href="mailto:hello@travelpowerplugs.com"
            className="inline-link"
          >
            hello@travelpowerplugs.com
          </a>
          .
        </p>
      </article>

      <style jsx>{`
        .static-page {
          font-family: "DM Sans", sans-serif;
          color: #2c2c2c;
          background: #f7f5f2;
          padding: 48px 0 80px;
        }

        .container {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h1 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .last-updated {
          font-size: 0.85rem;
          color: #7a7672;
          margin-bottom: 32px;
        }

        h2 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 36px;
          margin-bottom: 10px;
        }

        h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-top: 20px;
          margin-bottom: 8px;
        }

        p {
          line-height: 1.75;
          margin-bottom: 14px;
          color: #4a4a4a;
        }

        ul {
          padding-left: 24px;
          margin-bottom: 14px;
        }

        li {
          line-height: 1.75;
          color: #4a4a4a;
          margin-bottom: 6px;
        }

        .inline-link {
          color: #c85a3a;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .inline-link:hover {
          color: #b04e32;
        }
      `}</style>
    </main>
  );
}
