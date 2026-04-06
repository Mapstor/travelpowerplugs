import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Travel Power Plugs",
  description:
    "Get in touch with the Travel Power Plugs team. Questions, corrections, or feedback — we'd love to hear from you.",
};

export default function ContactUsPage() {
  return (
    <main className="static-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="lead">
          Have a question about power plugs, spotted an error on the site, or
          want to suggest an improvement? Drop us a message and we&rsquo;ll get
          back to you as soon as we can.
        </p>

        {/*
         * Contact form — uses Formspree for serverless form handling.
         * Replace YOUR_FORM_ID with your actual Formspree endpoint,
         * or swap for Netlify Forms (add data-netlify="true") or another provider.
         */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <p className="alt-contact">
          You can also reach us directly at{" "}
          <a href="mailto:hello@travelpowerplugs.com" className="inline-link">
            hello@travelpowerplugs.com
          </a>
        </p>
      </div>

      <style jsx>{`
        .static-page {
          font-family: "DM Sans", sans-serif;
          color: #2c2c2c;
          background: #f7f5f2;
          padding: 48px 0 80px;
        }

        .container {
          max-width: 560px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h1 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .lead {
          color: #4a4a4a;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #2c2c2c;
        }

        input,
        textarea {
          font-family: inherit;
          font-size: 1rem;
          padding: 12px 14px;
          border: 2px solid #e8e4df;
          border-radius: 10px;
          background: #fff;
          color: #2c2c2c;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        input:focus,
        textarea:focus {
          border-color: #c85a3a;
          box-shadow: 0 0 0 3px rgba(200, 90, 58, 0.12);
        }

        input::placeholder,
        textarea::placeholder {
          color: #b0aca7;
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          align-self: flex-start;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          padding: 12px 32px;
          background: #c85a3a;
          color: #fff;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }

        .submit-btn:hover {
          background: #b04e32;
        }

        .submit-btn:active {
          transform: scale(0.98);
        }

        .alt-contact {
          margin-top: 32px;
          font-size: 0.9rem;
          color: #7a7672;
          text-align: center;
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
