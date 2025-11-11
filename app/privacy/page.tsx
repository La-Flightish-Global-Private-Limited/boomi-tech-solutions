import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Boomi Tech Solutions",
  description: "Learn how Boomi Tech Solutions collects, uses, and protects your personal information. GDPR compliant privacy policy and data protection practices.",
  openGraph: {
    title: "Privacy Policy | Boomi Tech Solutions",
    description: "Learn how Boomi Tech Solutions collects, uses, and protects your personal information.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main id="main-content" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Name, email address, phone number, and company information</li>
                <li>Project details and service requirements</li>
                <li>Communication preferences and newsletter subscriptions</li>
                <li>Technical information such as IP address, browser type, and device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-300 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you technical updates, security alerts, and support messages</li>
                <li>Communicate about products, services, and promotional offers (with your consent)</li>
                <li>Improve our website, services, and customer experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>With your explicit consent</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-slate-300 leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction. This includes encryption, secure servers, and regular
                security audits. However, no method of transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights and Choices</h2>
              <p className="text-slate-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Request a copy of the data we hold about you</li>
                <li>Object to processing of your personal information</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-slate-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and
                assist in our marketing efforts. You can control cookies through your browser settings, but disabling
                cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p className="text-slate-300 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                privacy policy, unless a longer retention period is required by law. When we no longer need your
                information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-slate-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence.
                We ensure appropriate safeguards are in place to protect your information in accordance with this
                privacy policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-slate-300 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-slate-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any material changes by
                posting the new policy on this page and updating the "Last updated" date. Your continued use of our
                services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-slate-900 rounded-lg border border-slate-800">
                <p className="text-slate-300">
                  <strong className="text-white">Boomi Tech Solutions LLC</strong>
                  <br />
                  Owner: Karthikeyan Veeran
                  <br />
                  Email: mydearkarthikeyan@gmail.com
                  <br />
                  Phone: +91 9789998455
                  <br />
                  <br />
                  <strong className="text-white">Registered Address:</strong>
                  <br />
                  30 N Gould St Ste R, Sheridan, WY 82801, USA
                  <br />
                  EIN: 35-2822033
                  <br />
                  <br />
                  <strong className="text-white">Trade Address:</strong>
                  <br />
                  D142, SBIOA Unity Enclave, Mambakkam
                  <br />
                  Chennai, Tamil Nadu 600127, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
