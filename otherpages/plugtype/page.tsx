// src/app/plug-types/[type]/page.tsx
// Dynamic plug type page — renders any of the 14 plug types from shared data

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  plugTypes,
  getAllPlugTypeSlugs,
  getPlugTypeBySlug,
} from "@/data/plug-types";
import { PlugAnimationCard } from "@/components/PlugAnimationCard";
import {
  PlugTypeQuickSpec,
  PlugTypeCountryList,
  PlugTypeCompatibility,
  PlugTypeFAQ,
  PlugTypeRelated,
} from "@/components/plug-type";

// ---------------------------------------------------------------------------
// Static params — pre-render all 14 plug type pages
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllPlugTypeSlugs().map((slug) => ({ type: slug }));
}

// ---------------------------------------------------------------------------
// Metadata — SEO title, description, and structured data
// ---------------------------------------------------------------------------
interface PageProps {
  params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const data = getPlugTypeBySlug(type);
  if (!data) return {};

  const title = `Type ${data.letter} Plug (${data.subtitle}) — Which Countries Use It?`;
  const description = `Everything about the Type ${data.letter} plug${
    data.commonName ? ` (${data.commonName})` : ""
  }: specs, country list, compatibility, history, and FAQs. ${data.spec.pinCount}-pin, ${
    data.spec.grounded ? "grounded" : "ungrounded"
  }, ${data.spec.ratedAmps}, ${data.spec.voltageRange}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/plug-types/${data.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `/plug-types/${data.slug}/`,
      type: "article",
    },
  };
}

// ---------------------------------------------------------------------------
// Schema markup — FAQPage + Article
// ---------------------------------------------------------------------------
function buildStructuredData(data: NonNullable<ReturnType<typeof getPlugTypeBySlug>>) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Type ${data.letter} Plug (${data.subtitle}) — Which Countries Use It?`,
    description: `Complete guide to the Type ${data.letter} electrical plug${
      data.commonName ? ` (${data.commonName})` : ""
    }.`,
    author: {
      "@type": "Organization",
      name: "Travel Power Plugs",
      url: "https://travelpowerplugs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Travel Power Plugs",
      url: "https://travelpowerplugs.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://travelpowerplugs.com/plug-types/${data.slug}/`,
    },
  };

  return [faqSchema, articleSchema];
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function PlugTypePage({ params }: PageProps) {
  const { type } = await params;
  const data = getPlugTypeBySlug(type);
  if (!data) notFound();

  const schemas = buildStructuredData(data);

  return (
    <>
      {/* Structured data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="plug-type-page">
        {/* ---------------------------------------------------------------- */}
        {/* Hero / H1 */}
        {/* ---------------------------------------------------------------- */}
        <header className="plug-type-hero">
          <h1>
            Type {data.letter} Plug ({data.subtitle}) — Which Countries Use It?
          </h1>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Quick spec card */}
        {/* ---------------------------------------------------------------- */}
        <PlugTypeQuickSpec
          letter={data.letter}
          spec={data.spec}
          commonName={data.commonName}
        />

        {/* ---------------------------------------------------------------- */}
        {/* 3D animation */}
        {/* ---------------------------------------------------------------- */}
        <div className="plug-type-animation-wrap">
          <PlugAnimationCard plugType={data} />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* What is Type X? */}
        {/* ---------------------------------------------------------------- */}
        <section className="plug-type-section">
          <h2>What Is a Type {data.letter} Plug?</h2>
          <p>{data.whatIsIt}</p>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* History & origin */}
        {/* ---------------------------------------------------------------- */}
        <section className="plug-type-section">
          <h2>History &amp; Origin</h2>
          <p>{data.historyOrigin}</p>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Countries */}
        {/* ---------------------------------------------------------------- */}
        <PlugTypeCountryList
          letter={data.letter}
          continentGrouping={data.continentGrouping}
          phasingOutNote={data.phasingOutNote}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Compatibility */}
        {/* ---------------------------------------------------------------- */}
        <PlugTypeCompatibility
          letter={data.letter}
          compatibility={data.compatibility}
        />

        {/* ---------------------------------------------------------------- */}
        {/* FAQ */}
        {/* ---------------------------------------------------------------- */}
        <PlugTypeFAQ letter={data.letter} faqs={data.faqs} />

        {/* ---------------------------------------------------------------- */}
        {/* Related plug types */}
        {/* ---------------------------------------------------------------- */}
        <PlugTypeRelated
          currentLetter={data.letter}
          relatedSlugs={data.relatedTypes}
        />
      </article>

      <style jsx>{`
        .plug-type-page {
          max-width: 780px;
          margin: 0 auto;
          padding: 2rem 1.25rem 4rem;
          background: #f7f5f2;
          font-family: "DM Sans", sans-serif;
        }
        .plug-type-hero h1 {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(1.5rem, 4vw, 2.15rem);
          font-weight: 800;
          color: #2c2520;
          line-height: 1.25;
          margin: 0 0 0.25rem;
        }
        .plug-type-animation-wrap {
          margin: 1.5rem 0 2rem;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e0da;
        }
        .plug-type-section {
          margin: 2.5rem 0;
        }
        .plug-type-section h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2520;
          margin-bottom: 0.6rem;
        }
        .plug-type-section p {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          color: #4a3f37;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </>
  );
}
