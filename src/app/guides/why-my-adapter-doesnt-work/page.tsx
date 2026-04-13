import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/Breadcrumb';
import HTMLAnimatedPlug from '@/components/plugs/HTMLAnimatedPlug';

export const metadata: Metadata = {
  title: 'Why Your Travel Adapter Doesn\'t Work: 17 Common Problems & Fixes',
  description: 'Travel adapter not working? Device won\'t charge? Complete troubleshooting guide for plug adapters, voltage issues, and compatibility problems. Real solutions that actually work.',
  keywords: 'adapter not working, travel adapter problems, plug adapter troubleshooting, device won\'t charge abroad, voltage converter issues',
  alternates: {
    canonical: 'https://travelpowerplugs.com/guides/why-my-adapter-doesnt-work'
  },
  openGraph: {
    title: 'Travel Adapter Not Working? Here\'s How to Fix It',
    description: 'The definitive troubleshooting guide for travel adapter problems. From loose connections to voltage mismatches, we solve your charging crisis.',
    images: ['/images/adapter-troubleshooting.jpg']
  }
};

export default function AdapterTroubleshootingGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Your Travel Adapter Doesn't Work: Complete Troubleshooting",
    "author": {
      "@type": "Person",
      "name": "Marko Visic"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://travelpowerplugs.com/guides/why-my-adapter-doesnt-work"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why won't my phone charge with the adapter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most common causes: 1) Loose connection - the adapter isn't fitting snugly, 2) Wrong adapter type for that country, 3) Outlet has no power (check the switch!), 4) Your charger needs grounding but adapter doesn't provide it, 5) Voltage incompatibility (rare for phones). Try wiggling the adapter, testing another outlet, or using a different adapter."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my adapter keep falling out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Universal adapters often fit loosely in outlets. Solutions: 1) Use tape to secure it temporarily, 2) Stack books underneath to support weight, 3) Buy a country-specific adapter for better fit, 4) Try different outlets - some are tighter than others, 5) Use the USB ports on the adapter instead of plugging your charger into it."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my device charging extremely slowly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Slow charging usually means: 1) Adapter's USB ports are low amperage (under 2.1A), 2) Voltage differences affecting charging efficiency, 3) Poor connection causing power loss, 4) Using wrong USB cable, 5) Adapter is overheating and throttling power. Solution: Use your original charger with just a plug adapter, not the adapter's USB ports."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: 'Adapter Troubleshooting' }
          ]}
        />

        <article className="mt-8 prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">Travel Adapter Not Working? Welcome to the "3 AM Hotel Room Panic Club"</h1>
          
          {/* Emergency Quick Fix Box */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 not-prose">
            <h2 className="text-xl font-bold mb-3">🚨 EMERGENCY QUICK FIXES (Try These First!)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold mb-2">If Nothing Works At All:</p>
                <ol className="space-y-1 text-sm list-decimal ml-6">
                  <li>Check for outlet ON/OFF switch (especially UK/Asia)</li>
                  <li>Push adapter HARDER - needs firm connection</li>
                  <li>Try rotating adapter 180° (some are directional)</li>
                  <li>Test different outlet in room</li>
                  <li>Remove adapter, plug directly if plug fits</li>
                </ol>
              </div>
              <div>
                <p className="font-bold mb-2">If It Works But Poorly:</p>
                <ol className="space-y-1 text-sm list-decimal ml-6">
                  <li>Wiggle while inserted - find the "sweet spot"</li>
                  <li>Support adapter's weight with books/shoes</li>
                  <li>Try adapter's USB ports instead of outlet</li>
                  <li>Use different cable (cable might be issue)</li>
                  <li>Let device cool down (overheating protection)</li>
                </ol>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded">
              <p className="text-sm font-bold">⚡ If you smell burning or see sparks: STOP immediately! Unplug everything!</p>
            </div>
          </div>

          {/* The 17 Most Common Problems */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">The 17 Reasons Your Adapter Isn't Working (Ranked by Frequency)</h2>
            
            {/* Problem 1-5: Physical Connection Issues */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Physical Connection Problems (65% of all issues)</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-xl font-bold mb-2">1. Loose Connection (The Wiggle Problem)</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Charges when held in place, stops when released</p>
                  <p className="mb-3"><strong>Why it happens:</strong> Universal adapters try to fit many outlet types, resulting in poor fit</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Wedge paper/cardboard around adapter for tighter fit</li>
                      <li>• Use electrical tape to secure (temporary fix)</li>
                      <li>• Stack items underneath to support weight</li>
                      <li>• Buy country-specific adapter (better fit)</li>
                      <li>• Try outlets at different heights (gravity helps)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold mb-2">2. Outlet Has Power Switch (OFF)</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Absolutely nothing works, even direct plug-in</p>
                  <p className="mb-3"><strong>Common in:</strong> UK, Ireland, Singapore, Hong Kong, India</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Look for switch next to outlet - flip it ON</li>
                      <li>• Red marking usually means OFF</li>
                      <li>• Some have switches on the outlet face itself</li>
                      <li>• Hotel room master switch near door</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-xl font-bold mb-2">3. Wrong Adapter Type</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Adapter physically won't fit or feels forced</p>
                  <p className="mb-3"><strong>Reality check:</strong> "Universal" doesn't mean "fits everything"</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Quick Reference:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• <Link href="/plug-type/type-g" className="text-blue-600 hover:underline">Type G</Link> for UK/Ireland (big 3-pin)</li>
                      <li>• <Link href="/plug-type/type-c" className="text-blue-600 hover:underline">Type C</Link> for most of Europe (2 round)</li>
                      <li>• <Link href="/plug-type/type-i" className="text-blue-600 hover:underline">Type I</Link> for Australia (angled flat)</li>
                      <li>• <Link href="/plug-type/type-a" className="text-blue-600 hover:underline">Type A/B</Link> for USA (flat parallel)</li>
                      <li>• Check our <Link href="/tools/adapter-finder" className="text-blue-600 hover:underline">Adapter Finder Tool</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-bold mb-2">4. Recessed Outlets (Can't Reach)</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Adapter won't go deep enough to connect</p>
                  <p className="mb-3"><strong>Common in:</strong> France (Type E), Switzerland (Type J), Italy (Type L)</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Need adapter with longer pins</li>
                      <li>• Type C adapters often too short for Type E</li>
                      <li>• Look for "France compatible" adapters</li>
                      <li>• Hotel may have extension cords</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold mb-2">5. Grounding Pin Mismatch</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Adapter fits but laptop/device won't charge</p>
                  <p className="mb-3"><strong>Affects:</strong> Laptops, desktop computers, some medical devices</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Use grounded adapter (has metal clips/third pin)</li>
                      <li>• Type F (Schuko) provides grounding via clips</li>
                      <li>• Cheap adapters often skip grounding</li>
                      <li>• Safety warning: Don't bypass grounding!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 6-10: Electrical Issues */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Electrical & Power Issues (25% of problems)</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-xl font-bold mb-2">6. Voltage Incompatibility (The Killer)</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Device dead, won't turn on, burning smell</p>
                  <p className="mb-3"><strong>The truth:</strong> Adapter ≠ Converter</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Critical Info:</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-bold">Safe (Dual Voltage):</p>
                        <ul className="mt-2 space-y-1">
                          <li>✅ Says "100-240V"</li>
                          <li>✅ Most phone chargers</li>
                          <li>✅ Laptop adapters</li>
                          <li>✅ USB chargers</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-red-600">Dangerous (Single Voltage):</p>
                        <ul className="mt-2 space-y-1">
                          <li>❌ Says "110V only"</li>
                          <li>❌ US hair dryers</li>
                          <li>❌ Many straighteners</li>
                          <li>❌ Older electronics</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-bold">Need a <Link href="/guides/110v-to-220v-converter" className="text-blue-600 hover:underline">voltage converter</Link>, not just adapter!</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-xl font-bold mb-2">7. Overloaded Circuit/Adapter</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Everything stops working suddenly, adapter very hot</p>
                  <p className="mb-3"><strong>Cause:</strong> Too many devices on one adapter</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Unplug everything, wait 10 minutes</li>
                      <li>• Use one device at a time</li>
                      <li>• Check adapter's max wattage rating</li>
                      <li>• High-power devices need own adapter</li>
                      <li>• Reset room circuit breaker if needed</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold mb-2">8. USB Ports Underpowered</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Phone charges at 1% per hour, tablets won't charge</p>
                  <p className="mb-3"><strong>Problem:</strong> Adapter USB ports often only 1A (need 2.1A+)</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Use your original charger + outlet (not USB)</li>
                      <li>• Check USB port amperage (needs 2.1A minimum)</li>
                      <li>• USB-C ports usually faster than USB-A</li>
                      <li>• Charge one device at a time</li>
                      <li>• Get dedicated USB charger instead</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-bold mb-2">9. Polarity Issues (Rare but Real)</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Device acts weird, touchscreens glitchy</p>
                  <p className="mb-3"><strong>Where:</strong> Older buildings, developing countries</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Try flipping plug 180° if possible</li>
                      <li>• Use different outlet</li>
                      <li>• Unpolarized adapters usually fine</li>
                      <li>• Modern devices handle this better</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold mb-2">10. Frequency Mismatch Effects</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Electric clocks run fast/slow, motors sound different</p>
                  <p className="mb-3"><strong>Info:</strong> US = 60Hz, Europe/Asia = 50Hz</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Reality Check:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Doesn't affect most modern electronics</li>
                      <li>• Clocks will be 20% off</li>
                      <li>• Some motors run slower</li>
                      <li>• Generally not a real problem</li>
                      <li>• Can't be fixed with adapters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 11-17: User & Equipment Issues */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-green-600">User Errors & Equipment Failures (10% of issues)</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="text-xl font-bold mb-2">11. Hotel Key Card Power Control</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Everything works when you're in room, dies when you leave</p>
                  <p className="mb-3"><strong>Common in:</strong> Modern hotels worldwide</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Leave any card in slot (business card works)</li>
                      <li>• Ask reception for second key card</li>
                      <li>• Some slots need specific card weight</li>
                      <li>• Charge devices while in room</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="text-xl font-bold mb-2">12. Damaged Cable (Not Adapter)</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Works with one cable but not another</p>
                  <p className="mb-3"><strong>Test:</strong> Try different cable with same adapter</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Cable Tips:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Travel damages cables more than home use</li>
                      <li>• Bring spare cables always</li>
                      <li>• Check for bent pins or tears</li>
                      <li>• USB-C more fragile than older types</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="text-xl font-bold mb-2">13. Device in Protection Mode</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Device won't charge after power issue</p>
                  <p className="mb-3"><strong>Cause:</strong> Safety feature after voltage spike</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Reset Methods:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Hold power button 30 seconds</li>
                      <li>• Remove battery if possible</li>
                      <li>• Let device fully discharge</li>
                      <li>• Try different charger</li>
                      <li>• Wait 24 hours (auto-reset)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="text-xl font-bold mb-2">14. Cheap Adapter = Poor Quality</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Intermittent connection, gets very hot, melting plastic</p>
                  <p className="mb-3"><strong>Truth:</strong> $3 adapters are usually garbage</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Quality Indicators:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• CE marking (for Europe)</li>
                      <li>• UL listing (for safety)</li>
                      <li>• Weight (good ones heavier)</li>
                      <li>• Brand reputation matters</li>
                      <li>• $10-20 is reasonable range</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="text-xl font-bold mb-2">15. Adapter Slider Mechanism Broken</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Pins won't extend or lock in place</p>
                  <p className="mb-3"><strong>Common with:</strong> All-in-one universal adapters</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Fixes:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Tape pins in extended position</li>
                      <li>• WD-40 on slider mechanism</li>
                      <li>• Hold manually while charging</li>
                      <li>• Time for new adapter</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="text-xl font-bold mb-2">16. Old Building Wiring Issues</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Works in some rooms/buildings but not others</p>
                  <p className="mb-3"><strong>Where:</strong> Historic hotels, old European buildings</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Workarounds:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Try outlets in bathroom (often newer)</li>
                      <li>• Ask for room in renovated section</li>
                      <li>• Charge in lobby/common areas</li>
                      <li>• Use power bank as buffer</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                  <h4 className="text-xl font-bold mb-2">17. Surge/Spike Damage</h4>
                  <p className="mb-3"><strong>Symptoms:</strong> Worked fine, then suddenly dead after storm/outage</p>
                  <p className="mb-3"><strong>Reality:</strong> Power quality varies worldwide</p>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold mb-2">Protection:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Unplug during storms</li>
                      <li>• Use surge-protected adapters</li>
                      <li>• Travel insurance may cover</li>
                      <li>• Charge during stable times</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Diagnostic Flowchart */}
          <section className="my-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">🔧 Quick Diagnostic Flowchart</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="font-bold">Nothing happens at all?</p>
                <p className="text-sm mt-1">→ Check outlet switch (ON/OFF)</p>
                <p className="text-sm">→ Try different outlet</p>
                <p className="text-sm">→ Check hotel key card slot</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <p className="font-bold">Works intermittently?</p>
                <p className="text-sm mt-1">→ Loose connection (wiggle/support)</p>
                <p className="text-sm">→ Overheating (let cool)</p>
                <p className="text-sm">→ Bad cable (try another)</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <p className="font-bold">Device damaged/dead?</p>
                <p className="text-sm mt-1">→ Voltage incompatibility</p>
                <p className="text-sm">→ Power surge</p>
                <p className="text-sm">→ Check device warranty/insurance</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <p className="font-bold">Charges very slowly?</p>
                <p className="text-sm mt-1">→ Use original charger (not USB)</p>
                <p className="text-sm">→ Check amperage rating</p>
                <p className="text-sm">→ One device at a time</p>
              </div>
            </div>
          </section>

          {/* Country-Specific Quirks */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">🌍 Country-Specific Outlet Quirks</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">European Challenges:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇬🇧 UK/Ireland</p>
                    <p className="text-sm">Every outlet has ON/OFF switch - always check!</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇫🇷 France</p>
                    <p className="text-sm">Recessed outlets - Type C adapters often too short</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇮🇹 Italy</p>
                    <p className="text-sm">Three different standards - bring universal adapter</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇨🇭 Switzerland</p>
                    <p className="text-sm">Type J unique - regular Euro adapters don't fit</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Rest of World:</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇮🇳 India</p>
                    <p className="text-sm">Multiple plug types + switched outlets + power cuts</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇦🇺 Australia</p>
                    <p className="text-sm">All outlets have switches, angled pins tricky</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇯🇵 Japan</p>
                    <p className="text-sm">100V (lowest in world), unpolarized outlets</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">🇿🇦 South Africa</p>
                    <p className="text-sm">Type M huge pins - special adapter needed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MacGyver Solutions */}
          <section className="my-12 bg-yellow-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">🛠️ MacGyver Solutions (Desperate Times...)</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Securing Loose Adapters:</h3>
                <ul className="space-y-2 text-sm">
                  <li>📚 Stack books/luggage underneath for support</li>
                  <li>🪑 Angle chair against wall to hold in place</li>
                  <li>👟 Wedge shoe heel under adapter</li>
                  <li>🧻 Fold toilet paper for shimming</li>
                  <li>🏨 Hotel Bible is perfect adapter prop</li>
                  <li>💼 Suitcase as support platform</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Emergency Fixes:</h3>
                <ul className="space-y-2 text-sm">
                  <li>🔌 Bathroom outlets often more reliable</li>
                  <li>📺 TV USB ports for emergency charging</li>
                  <li>💻 Charge phone from laptop battery</li>
                  <li>🚗 Rental car = mobile charging station</li>
                  <li>☕ Starbucks/McDonald's to the rescue</li>
                  <li>🏦 Banks often have charging stations</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded border border-yellow-500">
              <p className="font-bold text-yellow-700">⚠️ Disclaimer:</p>
              <p className="text-sm">These are temporary solutions. Don't leave jury-rigged setups unattended!</p>
            </div>
          </section>

          {/* What Different Lights/Sounds Mean */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">🚦 What Those Lights & Sounds Mean</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">LED Indicators:</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3">🟢</span>
                    <div>
                      <p className="font-semibold">Solid Green</p>
                      <p className="text-sm">Power flowing, all good</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-500 mr-3">🟡</span>
                    <div>
                      <p className="font-semibold">Amber/Orange</p>
                      <p className="text-sm">Charging but slowly, or standby mode</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3">🔴</span>
                    <div>
                      <p className="font-semibold">Red</p>
                      <p className="text-sm">Error, overload, or overheating</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3">💡</span>
                    <div>
                      <p className="font-semibold">Flashing Any Color</p>
                      <p className="text-sm">Poor connection or protection mode</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-3">⚫</span>
                    <div>
                      <p className="font-semibold">No Light</p>
                      <p className="text-sm">No power or adapter dead</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Sounds to Worry About:</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-yellow-500 mr-3">🔊</span>
                    <div>
                      <p className="font-semibold">Buzzing/Humming</p>
                      <p className="text-sm">Normal for some adapters, but shouldn't be loud</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3">⚡</span>
                    <div>
                      <p className="font-semibold">Crackling</p>
                      <p className="text-sm">Bad connection - stop using immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3">💥</span>
                    <div>
                      <p className="font-semibold">Popping</p>
                      <p className="text-sm">Electrical arc - unplug NOW</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-700 mr-3">🔥</span>
                    <div>
                      <p className="font-semibold">Sizzling</p>
                      <p className="text-sm">Melting/burning - fire hazard!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Recommendations for Problem Solving */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">🛒 Adapters That Actually Solve These Problems</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-300 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">For Loose Connection Issues:</h3>
                <p className="font-semibold text-green-600">Country-Specific Adapters</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>✅ Ceptics country sets - perfect fit</li>
                  <li>✅ TESSAN dedicated plugs - snug connection</li>
                  <li>✅ No moving parts = reliable</li>
                  <li>✅ $8-15 per country</li>
                </ul>
              </div>
              
              <div className="border border-blue-300 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">For Power/Charging Issues:</h3>
                <p className="font-semibold text-blue-600">High-Power USB Chargers</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>✅ Anker PowerPort - 60W+ output</li>
                  <li>✅ Multiple 2.4A ports</li>
                  <li>✅ GaN technology = cooler running</li>
                  <li>✅ $25-40</li>
                </ul>
              </div>
              
              <div className="border border-purple-300 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">For Grounding Requirements:</h3>
                <p className="font-semibold text-purple-600">Grounded Universal Adapters</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>✅ EPICKA Universal - full grounding</li>
                  <li>✅ Metal grounding clips</li>
                  <li>✅ Works with laptops</li>
                  <li>✅ $25-30</li>
                </ul>
              </div>
              
              <div className="border border-orange-300 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">For Old Buildings/Quirky Outlets:</h3>
                <p className="font-semibold text-orange-600">Extension Cord Solution</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>✅ Local extension cord + your adapter</li>
                  <li>✅ Bypasses weird outlet placement</li>
                  <li>✅ Buy at destination hardware store</li>
                  <li>✅ $10-20</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prevention Guide */}
          <section className="my-12 bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">🛡️ How to Prevent These Problems</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Before Your Trip:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ Test adapter with your devices at home</li>
                  <li>✅ Check all device voltage ratings</li>
                  <li>✅ Buy quality adapter ($15+ range)</li>
                  <li>✅ Get country-specific + universal backup</li>
                  <li>✅ Pack spare charging cables</li>
                  <li>✅ Screenshot device voltage labels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">While Traveling:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ Check outlet switches first</li>
                  <li>✅ Start with one device to test</li>
                  <li>✅ Never force an adapter</li>
                  <li>✅ Let adapters cool between uses</li>
                  <li>✅ Unplug during storms</li>
                  <li>✅ Keep adapters in carry-on</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded">
              <p className="font-bold">Golden Rule:</p>
              <p className="text-sm">If something feels wrong (too hot, strange smell, weird noise) - STOP immediately!</p>
            </div>
          </section>

          {/* Emergency Contacts */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">📞 When All Else Fails</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Where to Get Help:</h3>
                <ul className="space-y-2 text-sm">
                  <li>🏨 Hotel maintenance (often have adapters)</li>
                  <li>🏪 Electronic stores (MediaMarkt, Best Buy)</li>
                  <li>💼 Business centers in hotels</li>
                  <li>✈️ Airport shops (expensive but available)</li>
                  <li>🏬 Department stores</li>
                  <li>🔌 Local hardware stores</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Device Manufacturer Support:</h3>
                <ul className="space-y-2 text-sm">
                  <li>🍎 Apple Store - will help with charging</li>
                  <li>💻 Microsoft Store - adapter loans</li>
                  <li>📱 Samsung service centers</li>
                  <li>🔋 Phone carrier stores</li>
                  <li>💡 Local repair shops</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="my-12">
            <h2 className="text-3xl font-bold mb-6">Essential Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Understand the Basics:</h3>
                <ul className="space-y-2 text-sm">
                  <li>→ <Link href="/guides/grounded-vs-ungrounded-adapters" className="text-blue-600 hover:underline">Grounding Explained</Link></li>
                  <li>→ <Link href="/guides/110v-to-220v-converter" className="text-blue-600 hover:underline">Voltage Converters Guide</Link></li>
                  <li>→ <Link href="/guides/usb-charging-vs-plug-adapters" className="text-blue-600 hover:underline">USB vs Regular Charging</Link></li>
                  <li>→ <Link href="/tools/compatibility-matrix" className="text-blue-600 hover:underline">Plug Compatibility Tool</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Country Specifics:</h3>
                <ul className="space-y-2 text-sm">
                  <li>→ <Link href="/continent/europe" className="text-blue-600 hover:underline">All European Countries</Link></li>
                  <li>→ <Link href="/continent/asia" className="text-blue-600 hover:underline">Asian Power Systems</Link></li>
                  <li>→ <Link href="/guides/us-to-europe-adapter-guide" className="text-blue-600 hover:underline">US to Europe Guide</Link></li>
                  <li>→ <Link href="/tools/adapter-finder" className="text-blue-600 hover:underline">Find Your Adapter</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Plug Type Guides:</h3>
                <ul className="space-y-2 text-sm">
                  <li>→ <Link href="/plug-type/type-a" className="text-blue-600 hover:underline">Type A (American)</Link></li>
                  <li>→ <Link href="/plug-type/type-c" className="text-blue-600 hover:underline">Type C (European)</Link></li>
                  <li>→ <Link href="/plug-type/type-g" className="text-blue-600 hover:underline">Type G (British)</Link></li>
                  <li>→ <Link href="/plug-type/type-i" className="text-blue-600 hover:underline">Type I (Australian)</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold mb-2">About This Guide</h3>
            <p className="text-sm">Compiled from 15 years of travel disasters and reader submissions. Special thanks to everyone who emailed their "3 AM hotel room adapter crisis" stories. You're not alone!</p>
            <p className="text-sm mt-2 italic">Current record: 47 minutes to get one adapter working in a 14th-century Roman hotel. The outlet was behind a wardrobe, upside down, and required three books plus a shoe for support.</p>
          </div>

          {/* Quick Reference Card */}
          <section className="mt-12 border-4 border-red-500 p-6 rounded-lg bg-red-50">
            <h2 className="text-2xl font-bold mb-4">🆘 Emergency Card (Screenshot This!)</h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-2">Quick Fixes:</p>
                <ol className="list-decimal ml-4 space-y-1">
                  <li>Check outlet switch</li>
                  <li>Push harder/wiggle</li>
                  <li>Try different outlet</li>
                  <li>Support adapter weight</li>
                  <li>Test with different cable</li>
                </ol>
              </div>
              <div>
                <p className="font-bold mb-2">Stop If You Notice:</p>
                <ul className="space-y-1">
                  <li>🔥 Burning smell</li>
                  <li>⚡ Sparks or crackling</li>
                  <li>🌡️ Extreme heat</li>
                  <li>💨 Smoke</li>
                  <li>⚠️ Melting plastic</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}