import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Boomi Tech Solutions",
  description: "Terms and conditions for using Boomi Tech Solutions services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main id="main-content" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                By accessing or using Boomi Tech Solutions LLC's services, you agree to be bound by these Terms of
                Service and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Boomi Tech Solutions provides technology consulting and development services including but not limited
                to:
              </p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>SAAS Application Development</li>
                <li>AI Product Development and AI Agent Development</li>
                <li>Mainframe Modernization</li>
                <li>Multi-Cloud Infrastructure Management</li>
                <li>DevOps and CI/CD Implementation</li>
                <li>Custom Application Development</li>
                <li>Digital Marketing and Internet Presence Enhancement</li>
                <li>Manpower Augmentation and Technical Consulting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
              <p className="text-slate-300 leading-relaxed mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Provide accurate and complete information for project requirements</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Provide necessary access to systems, data, and resources as required</li>
                <li>Maintain confidentiality of any credentials or access provided</li>
                <li>Pay all fees according to the agreed payment terms</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                <li>Late payments may incur interest charges at the rate of 1.5% per month</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All fees are non-refundable unless otherwise stated in writing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              <p className="text-slate-300 leading-relaxed mb-4">Unless otherwise agreed in writing:</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>
                  Upon full payment, clients receive ownership of custom-developed code and deliverables specific to
                  their project
                </li>
                <li>
                  Boomi Tech Solutions retains ownership of pre-existing intellectual property, frameworks, and tools
                </li>
                <li>Clients grant us the right to use project work in our portfolio and marketing materials</li>
                <li>We may reuse general knowledge, techniques, and methodologies across projects</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
              <p className="text-slate-300 leading-relaxed">
                Both parties agree to maintain confidentiality of proprietary information shared during the engagement.
                This includes business strategies, technical specifications, source code, and any information marked as
                confidential. This obligation survives termination of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Disclaimers</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We warrant that services will be performed in a professional manner consistent with industry standards.
                However:
              </p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Services are provided "as is" without warranties of any kind beyond those explicitly stated</li>
                <li>We do not guarantee specific business results or outcomes</li>
                <li>We are not responsible for issues arising from client-provided information or systems</li>
                <li>Third-party services and integrations are subject to their own terms and limitations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-300 leading-relaxed">
                To the maximum extent permitted by law, Boomi Tech Solutions shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues. Our total
                liability shall not exceed the amount paid by the client for the specific services giving rise to the
                claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Either party may terminate services under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>With 30 days written notice for ongoing services</li>
                <li>Immediately for material breach of terms</li>
                <li>Immediately for non-payment after 15 days notice</li>
                <li>Upon completion of project deliverables</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                Upon termination, client remains responsible for payment of all services rendered up to the termination
                date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
              <p className="text-slate-300 leading-relaxed">
                Client agrees to indemnify and hold harmless Boomi Tech Solutions from any claims, damages, or expenses
                arising from: (a) client's use of our services, (b) violation of these terms, (c) infringement of any
                third-party rights, or (d) client-provided content or data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-slate-300 leading-relaxed">
                These terms shall be governed by the laws of the United States and the state where Boomi Tech Solutions
                is registered. Any disputes shall first be attempted to be resolved through good faith negotiation. If
                unresolved, disputes shall be settled through binding arbitration in accordance with the American
                Arbitration Association rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Material changes will be communicated to active
                clients. Continued use of services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="text-slate-300 leading-relaxed">For questions about these terms, please contact us at:</p>
              <div className="mt-4 p-6 bg-slate-900 rounded-lg border border-slate-800">
                <p className="text-slate-300">
                  <strong className="text-white">Boomi Tech Solutions LLC</strong>
                  <br />
                  Email: legal@boomitechsolutions.com
                  <br />
                  Phone: [Your Phone Number]
                  <br />
                  Address: [Your Business Address]
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
