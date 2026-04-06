import { Metadata } from "next";
import { getAllCountries } from "@/lib/countries";
import AdapterChecker from "./AdapterChecker";

export const metadata: Metadata = {
  title: "Do I Need a Power Adapter? — Instant Travel Plug Checker",
  description:
    "Instantly check if you need a power adapter for your trip. Compare plug types and voltage between any two countries and get a clear yes/no answer.",
  openGraph: {
    title: "Do I Need a Power Adapter? — Instant Travel Plug Checker",
    description:
      "Compare plug types and voltage between any two countries. Get instant adapter recommendations for your trip.",
    url: "/do-i-need-an-adapter/",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "Do I always need an adapter when traveling to Europe?",
    a: "It depends on where you're coming from. Most of Europe uses Type C, E, or F sockets. If your home country uses Type C plugs (common across continental Europe, South America, and Asia), you may not need an adapter at all. Travelers from the US, UK, or Australia will need one.",
  },
  {
    q: "Is a universal adapter worth it?",
    a: "A universal adapter is a convenient option if you travel to many different countries. However, they tend to be bulkier and sometimes less reliable than a dedicated adapter for a specific plug type. For a single trip, a targeted adapter is usually cheaper and more compact.",
  },
  {
    q: "What is the difference between an adapter and a voltage converter?",
    a: "An adapter only changes the physical shape of the plug so it fits the socket. It does NOT change voltage. A voltage converter (or transformer) actually changes the electrical voltage. Most modern electronics like phones and laptops are dual-voltage (100-240V) and only need an adapter, not a converter.",
  },
  {
    q: "Can using the wrong adapter damage my devices?",
    a: "A plug adapter itself won't damage devices — it simply allows the physical connection. Damage comes from voltage mismatch: plugging a 120V-only device into a 230V outlet without a converter can fry the device. Always check the voltage label on your charger or device.",
  },
  {
    q: "Do I need an adapter for USB chargers?",
    a: "You need an adapter if the charger's prongs don't fit the local sockets. However, virtually all USB chargers are dual-voltage (100-240V), so you won't need a voltage converter — just a plug adapter.",
  },
];

export default function DoINeedAnAdapterPage() {
  // Fetch all countries at build/request time (server)
  const allCountries = getAllCountries().map((c) => ({
    slug: c.slug,
    name: c.name,
    plugTypes: c.plugTypes,
    voltage: c.voltage,
    frequency: c.frequency,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
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
          Do I Need a Power Adapter? — Instant Travel Plug Checker
        </h1>
        <p style={{ color: "#7a756e", fontSize: "1.05rem", marginBottom: 28 }}>
          Select your home country and destination to instantly see if you need a
          plug adapter, voltage converter, or nothing at all.
        </p>

        {/* Interactive tool — hydrated client-side */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "28px 24px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            marginBottom: 48,
          }}
        >
          <AdapterChecker countries={allCountries} />
        </div>

        {/* SEO content */}
        <section style={{ lineHeight: 1.7, color: "#4a4540", fontSize: "0.97rem" }}>
          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginBottom: 8 }}>
            How to Use This Tool
          </h2>
          <p>
            Choose the country you're traveling from and the country you're going
            to using the dropdown menus above. The tool instantly compares the
            plug types and voltage standards of both countries and gives you a
            clear answer: no adapter needed, adapter required, or partial
            compatibility. It also flags voltage differences and recommends
            exactly which adapter type to buy.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            What Is a Plug Adapter?
          </h2>
          <p>
            A plug adapter (sometimes called a travel adapter) is a small device
            that allows you to physically connect your plug into a foreign
            socket. It changes the shape and configuration of the prongs — but
            it does <em>not</em> change the electrical voltage or frequency. For
            example, a US-to-EU adapter lets you plug your American two-prong
            Type A plug into a European Type C or Type F socket.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            Adapter vs. Voltage Converter
          </h2>
          <p>
            An adapter changes the plug shape. A voltage converter (or
            transformer) changes the electrical voltage. Most modern chargers for
            phones, laptops, and cameras are dual-voltage — they accept
            100–240V input and work worldwide with just an adapter. Older or
            high-wattage devices like hair dryers and curling irons may be
            single-voltage and require a converter if the destination voltage
            differs from your home country's standard.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            Frequently Asked Questions
          </h2>
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid #e8e5e0",
                padding: "14px 0",
              }}
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
