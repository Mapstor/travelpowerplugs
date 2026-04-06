import { Metadata } from "next";
import { getAllCountries } from "@/lib/countries";
import VoltageChecker from "./VoltageChecker";

export const metadata: Metadata = {
  title: "Voltage Compatibility Checker — Is Your Device Safe to Use Abroad?",
  description:
    "Check if your electronic device is safe to use in another country. Compare your device's voltage with the destination's power standard and find out if you need a converter.",
  openGraph: {
    title: "Voltage Compatibility Checker — Is Your Device Safe Abroad?",
    description:
      "Enter your device's voltage and destination country to instantly check if you need a voltage converter.",
    url: "/voltage-checker/",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What happens if you plug a 120V device into a 230V outlet?",
    a: "The device will receive nearly double the voltage it's designed for. In the best case, a fuse or circuit breaker trips. In the worst case, the device overheats, melts, sparks, or catches fire. Never plug a single-voltage 120V device into a 230V outlet without a step-down converter.",
  },
  {
    q: "Are phone chargers dual-voltage?",
    a: "Almost all modern phone and laptop chargers are dual-voltage (100-240V). Check the fine print on the charger brick — if it says 'INPUT: 100-240V', you're good to go anywhere with just a plug adapter.",
  },
  {
    q: "Which common devices are NOT dual-voltage?",
    a: "Hair dryers, curling irons, flat irons, and electric shavers are often single-voltage. Older electric toothbrush chargers, some coffee makers, and power tools are also commonly single-voltage. Always check the label before traveling.",
  },
  {
    q: "Is a small voltage difference (e.g., 220V vs 230V) a problem?",
    a: "Typically no. Most devices tolerate a ±10% variance from their rated voltage. A device rated for 220V will work fine on 230V, and vice versa. The real danger is large gaps like 120V vs 230V.",
  },
  {
    q: "Do I need a frequency converter for 50Hz vs 60Hz?",
    a: "For most electronics, no. Chargers, laptops, and LED lights handle both. But motorized devices (analog clocks, turntables, some fans) may run at the wrong speed. Frequency converters are rare and expensive; it's usually easier to buy a local equivalent.",
  },
];

export default function VoltageCheckerPage() {
  const allCountries = getAllCountries().map((c) => ({
    slug: c.slug,
    name: c.name,
    voltage: c.voltage,
    frequency: c.frequency,
  }));

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
          Voltage Compatibility Checker — Is Your Device Safe to Use Abroad?
        </h1>
        <p style={{ color: "#7a756e", fontSize: "1.05rem", marginBottom: 28 }}>
          Select your destination and enter your device&apos;s voltage to find out if
          it&apos;s safe to plug in — or if you need a voltage converter.
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
          <VoltageChecker countries={allCountries} />
        </div>

        {/* SEO content */}
        <section style={{ lineHeight: 1.7, color: "#4a4540", fontSize: "0.97rem" }}>
          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginBottom: 8 }}>
            What Happens If You Plug a 120V Device Into a 230V Outlet?
          </h2>
          <p>
            Supplying a single-voltage 120V device with 230V is extremely
            dangerous. The device receives roughly double its intended power,
            which can cause overheating, blown fuses, melted components, or in
            the worst case, electrical fire. This is why checking voltage
            compatibility before you travel is essential — an adapter changes
            the plug shape but does nothing to protect against voltage mismatch.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            Common Dual-Voltage Devices
          </h2>
          <p>
            The good news is that most modern portable electronics are designed
            for worldwide use. Phone chargers, laptop power bricks, tablet
            chargers, electric toothbrush bases, camera battery chargers, and
            e-reader chargers are almost always rated 100-240V. These only
            require a plug adapter, never a voltage converter.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#2c2824", marginTop: 32, marginBottom: 8 }}>
            Common Single-Voltage Devices (Converter Needed)
          </h2>
          <p>
            Hair dryers are the most common offender — the vast majority are
            single-voltage. Curling irons, flat irons, and straighteners are
            also frequently 120V-only or 230V-only. Older electric shavers,
            some coffee makers, desktop fans, and power tools also tend to be
            single-voltage. For these devices, you either need a heavy-duty
            voltage converter or it's often more practical to buy a cheap local
            version at your destination.
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
