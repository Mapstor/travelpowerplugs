// src/components/plug-type/PlugTypeFAQ.tsx
// FAQ accordion section for plug type pages

import type { FAQ } from "@/data/plug-types";

interface PlugTypeFAQProps {
  letter: string;
  faqs: FAQ[];
}

export function PlugTypeFAQ({ letter, faqs }: PlugTypeFAQProps) {
  return (
    <section className="plug-type-faq">
      <h2>Frequently Asked Questions — Type {letter}</h2>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <details key={i} className="faq-item" {...(i === 0 ? { open: true } : {})}>
            <summary>
              <span className="faq-question">{faq.question}</span>
              <svg
                className="faq-chevron"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4.5 6.75L9 11.25L13.5 6.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>

      <style jsx>{`
        .plug-type-faq {
          margin: 2.5rem 0;
        }
        .plug-type-faq h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2520;
          margin-bottom: 1rem;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid #e5e0da;
          border-radius: 8px;
          overflow: hidden;
        }
        .faq-item {
          border-bottom: 1px solid #e5e0da;
          background: #fff;
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-item summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          cursor: pointer;
          list-style: none;
          user-select: none;
          transition: background 0.15s ease;
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-item summary:hover {
          background: #faf8f6;
        }
        .faq-question {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #2c2520;
          line-height: 1.45;
          padding-right: 1rem;
        }
        .faq-chevron {
          flex-shrink: 0;
          color: #a09488;
          transition: transform 0.2s ease;
        }
        .faq-item[open] .faq-chevron {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 1.25rem 1.1rem;
        }
        .faq-answer p {
          font-family: "DM Sans", sans-serif;
          font-size: 0.92rem;
          color: #4a3f37;
          line-height: 1.65;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
