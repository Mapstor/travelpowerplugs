import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me — Travel Power Plugs",
  description:
    "Meet Marko Visic, the traveller behind Travel Power Plugs. From a dead iPhone in Cancún to a power outlet guide used by thousands.",
};

export default function AboutMePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "About Me — Travel Power Plugs",
    author: {
      "@type": "Person",
      name: "Marko Visic",
      url: "https://travelpowerplugs.com/about-me/",
    },
    publisher: {
      "@type": "Organization",
      name: "Travel Power Plugs",
      url: "https://travelpowerplugs.com/",
    },
    mainEntityOfPage: "https://travelpowerplugs.com/about-me/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="static-page">
        <article className="container">
          <h1>About Me</h1>

          {/* Author photo placeholder */}
          <div className="author-photo-placeholder">
            <span>📷</span>
            <p>Author photo</p>
          </div>

          <p className="lead">
            Hi, I&rsquo;m <strong>Marko Visic</strong> — a traveller, tech nerd,
            and the person behind Travel Power Plugs.
          </p>

          <h2>How It All Started</h2>
          <p>
            It was 2017 and I was in Cancún, Mexico, ready to upload holiday
            photos when my iPhone battery hit zero. I reached for the charger,
            plugged it into the wall outlet&nbsp;… and nothing happened. Wrong
            plug. No adapter. No backup plan. I spent the rest of that evening
            hunting for a power adapter in a tourist shop that charged me triple
            the price.
          </p>
          <p>
            That moment stuck with me. When I got home, I started compiling a
            spreadsheet — every country, what plug types it uses, what voltage
            and frequency to expect, and whether I&rsquo;d need an adapter
            coming from Europe. The spreadsheet grew. Friends kept asking me for
            it before their trips. Eventually I thought: why not just put this
            online?
          </p>

          <h2>From Spreadsheet to Website</h2>
          <p>
            That Excel file became <strong>travelpowerplugs.com</strong>. What
            started as a personal reference now helps thousands of travellers
            every month figure out exactly what they need before they leave home.
            No more dead phones. No more overpriced airport adapters. No more
            guessing.
          </p>
          <p>
            I research every country individually, verify against multiple
            sources, and keep the data up to date. When a country changes its
            electrical standards (it happens more often than you&rsquo;d think),
            I update the guide.
          </p>

          <h2>Places I&rsquo;ve Plugged In</h2>
          <p>
            I&rsquo;ve personally tested outlets and adapters across a good
            chunk of the globe. Some of the countries I&rsquo;ve visited
            include Japan, the United Kingdom, Cyprus, Greece, Italy, Spain,
            Austria, Germany, Czechia, Croatia, Hungary, Montenegro, Turkey,
            Egypt, Thailand, and of course Mexico — where this whole adventure
            began.
          </p>
          <p>
            Every trip teaches me something new about travel power, and I bring
            those lessons back to this site.
          </p>

          <h2>Get in Touch</h2>
          <p>
            Have a question, spotted an error, or just want to share your own
            travel power horror story? I&rsquo;d love to hear from you — head
            over to the{" "}
            <Link href="/contact-us/" className="inline-link">
              contact page
            </Link>{" "}
            or find me on{" "}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Instagram
            </a>
            .
          </p>

          <p className="sign-off">
            Safe travels and charged devices,
            <br />
            <strong>— Marko</strong>
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
            margin-bottom: 24px;
          }

          h2 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 40px;
            margin-bottom: 12px;
          }

          p {
            line-height: 1.75;
            margin-bottom: 16px;
            color: #4a4a4a;
          }

          .lead {
            font-size: 1.1rem;
            color: #2c2c2c;
          }

          .author-photo-placeholder {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #e8e4df;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            color: #7a7672;
            font-size: 0.75rem;
          }

          .author-photo-placeholder span {
            font-size: 2rem;
            margin-bottom: 2px;
          }

          .inline-link {
            color: #c85a3a;
            text-decoration: underline;
            text-underline-offset: 2px;
          }

          .inline-link:hover {
            color: #b04e32;
          }

          .sign-off {
            margin-top: 32px;
            font-style: italic;
            color: #7a7672;
          }
        `}</style>
      </main>
    </>
  );
}
