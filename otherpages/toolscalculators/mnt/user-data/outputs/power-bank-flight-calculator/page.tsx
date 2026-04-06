import { Metadata } from "next";
import PowerBankCalculator from "./PowerBankCalculator";

export const metadata: Metadata = {
  title: "Power Bank Flight Calculator — Can You Bring It on a Plane?",
  description:
    "Calculate your power bank's watt-hours and instantly check if it's allowed on flights. Covers IATA rules for carry-on lithium batteries.",
  openGraph: {
    title: "Power Bank Flight Calculator — Can You Bring It on a Plane?",
    description:
      "Enter your power bank's mAh capacity to calculate Wh and check IATA airline regulations.",
    url: "/power-bank-flight-calculator/",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "Why can't power banks go in checked luggage?",
    a: "Lithium-ion batteries can undergo thermal runaway — an uncontrollable chain reaction that generates intense heat and fire. In a cargo hold, there's no one to notice or respond. In the cabin, crew can intervene. This is why all airlines require lithium batteries in carry-on bags.",
  },
  {
    q: "What counts as a power bank?",
    a: "Any portable lithium battery pack used to charge devices — whether it's a slim phone charger, a large laptop power bank, or a portable power station. External laptop batteries and solar chargers with built-in batteries also count.",
  },
  {
    q: "Do these rules apply worldwide?",
    a: "Yes. IATA (International Air Transport Association) sets the global standard, and virtually all commercial airlines follow it. However, some airlines and countries are stricter — always check with your specific airline before traveling.",
  },
  {
    q: "Can I bring multiple power banks on a flight?",
    a: "Under 100 Wh: generally no limit (within reason). Between 100-160 Wh: most airlines allow a maximum of 2 per person with prior approval. Over 160 Wh: prohibited entirely.",
  },
  {
    q: "My power bank only shows mAh, not Wh. How do I convert?",
    a: "Use the formula Wh = mAh × V ÷ 1000. The voltage for most power banks is 3.7V. So a 20,000 mAh power bank = 20000 × 3.7 ÷ 1000 = 74 Wh. Some newer power banks list Wh directly on the label.",
  },
];

export default function PowerBankFlightCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "40px 20px 80px",
          fontFamily: "'DM Sans', sans-serif",
          color: "#2c2824",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: 8,
          }}
        >
          Power Bank Flight Calculator — Can You Bring It on a Plane?
        </h1>
        <p style={{ color: "#7a756e", fontSize: "1.05rem", marginBottom: 28 }}>
          Enter your power bank&apos;s capacity in mAh to calculate its watt-hours
          and check if it meets airline regulations.
        </p>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "28px 24px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            marginBottom: 48,
          }}
        >
          <PowerBankCalculator />
        </div>

        {/* SEO content */}
        <section style={{ lineHeight: 1.7, color: "#4a4540", fontSize: "0.97rem" }}>
          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginBottom: 8 }}>
            Why Can&apos;t Power Banks Go in Checked Luggage?
          </h2>
          <p>
            Lithium-ion batteries carry a risk of thermal runaway — a
            self-reinforcing chemical reaction that can produce intense heat,
            fire, and even explosion. In a pressurized cargo hold, no one can
            detect or respond to a battery fire before it spreads. In the cabin,
            flight attendants can use specialized fire-containment bags to
            suppress the event. This is why every major aviation authority
            worldwide requires lithium batteries to travel in the cabin, not the
            cargo hold.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            What Counts as a Power Bank?
          </h2>
          <p>
            Any portable lithium battery used to recharge other devices is
            classified as a &quot;portable power bank&quot; under aviation rules. This
            includes slim phone chargers, high-capacity laptop power banks,
            solar chargers with built-in lithium cells, portable power stations,
            and external battery packs of any size. If it has a lithium battery
            and isn&apos;t built into a device, it&apos;s a power bank as far as the
            airline is concerned.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            Do These Rules Apply Worldwide?
          </h2>
          <p>
            The watt-hour thresholds (100 Wh and 160 Wh) come from IATA, the
            global body that sets standards for air transport. Virtually all
            commercial airlines follow these rules. However, some airlines and
            countries impose stricter limits — for example, some Chinese
            domestic carriers cap at 100 Wh with no exceptions. Always confirm
            with your airline before you fly.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            Frequently Asked Questions
          </h2>
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={i}
              style={{ borderBottom: "1px solid #e8e5e0", padding: "14px 0" }}
            >
              <summary
                style={{
                  fontWeight: 600,
                  cursor: "pointer",
                  color: "#2c2824",
                  fontSize: "1rem",
                }}
              >
                {item.q}
              </summary>
              <p style={{ marginTop: 8, marginBottom: 0 }}>{item.a}</p>
            </details>
          ))}
        </section>
      </article>
    </>
  );
}
