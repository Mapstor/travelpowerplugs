import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Travel Power Plugs",
  description:
    "Terms of use for travelpowerplugs.com. Read the conditions that apply when using our travel power outlet guides and tools.",
};

export default function TermsOfUsePage() {
  return (
    <main className="static-page">
      <article className="container">
        <h1>Terms of Use</h1>
        <p className="last-updated">Last updated: March 2026</p>

        <p>
          Welcome to <strong>travelpowerplugs.com</strong> (the
          &ldquo;Site&rdquo;). By accessing or using this Site, you agree to be
          bound by these Terms of Use. If you do not agree with these terms,
          please do not use the Site.
        </p>

        <h2>1. About the Site</h2>
        <p>
          Travel Power Plugs is an informational website operated by Marko
          Visic, an individual based in Slovenia, European Union. The Site
          provides information about power plugs, outlets, voltage, and
          frequency standards used in countries around the world, along with
          travel adapter guidance and interactive tools.
        </p>

        <h2>2. Informational Purposes Only</h2>
        <p>
          All information on this Site is provided for general informational
          purposes only. While we strive to keep the information accurate and up
          to date, we make no representations or warranties of any kind, express
          or implied, about the completeness, accuracy, reliability, or
          suitability of the information.
        </p>
        <p>
          Electrical standards can change, and conditions may vary within a
          single country. Always verify critical electrical information with
          local sources before travelling, especially for medical devices or
          sensitive equipment.
        </p>

        <h2>3. Use at Your Own Risk</h2>
        <p>
          Any reliance you place on the information provided on this Site is
          strictly at your own risk. We shall not be liable for any loss or
          damage arising from the use of or reliance on the information on this
          Site, including but not limited to damage to electronic devices or
          appliances.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The content on this Site — including text, graphics, logos, icons, and
          data compilations — is the property of Travel Power Plugs or its
          content suppliers and is protected by applicable intellectual property
          laws. You may not reproduce, distribute, or create derivative works
          from any content on this Site without prior written permission.
        </p>

        <h2>5. Affiliate Links and Third-Party Content</h2>
        <p>
          The Site may contain links to third-party websites, including
          affiliate links to product retailers such as Amazon. We are not
          responsible for the content, accuracy, or practices of these
          third-party sites. The inclusion of any link does not imply
          endorsement. If you make a purchase through an affiliate link, we may
          earn a commission at no additional cost to you.
        </p>

        <h2>6. Interactive Tools</h2>
        <p>
          The Site offers interactive tools (adapter checker, voltage
          compatibility checker, power bank calculator) for convenience. These
          tools are based on general data and should not be used as the sole
          basis for electrical safety decisions. Always consult your
          device&rsquo;s specifications and local electrical guidelines.
        </p>

        <h2>7. User Conduct</h2>
        <p>When using the Site, you agree not to:</p>
        <ul>
          <li>
            Use the Site for any unlawful purpose or in violation of any
            applicable laws
          </li>
          <li>
            Attempt to interfere with the Site&rsquo;s operation or security
          </li>
          <li>Scrape, copy, or reproduce substantial portions of the Site</li>
          <li>
            Submit false or misleading information through the contact form
          </li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Travel Power Plugs and its
          operator shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to your
          use of the Site.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Use are governed by and construed in accordance with
          the laws of the Republic of Slovenia and applicable European Union
          regulations. Any disputes arising from these terms shall be subject to
          the exclusive jurisdiction of the courts of Slovenia.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms of Use at any time.
          Changes will be posted on this page with an updated date. Your
          continued use of the Site after changes are posted constitutes
          acceptance of the revised terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have questions about these Terms of Use, please contact us at{" "}
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
