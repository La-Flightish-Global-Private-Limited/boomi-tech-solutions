import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Policy | Boomi Tech Solutions",
  description: "Privacy Policy for Boomi Tech Solutions LLC - How we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          
          <div className="text-sm text-slate-600 mb-8 space-y-1">
            <p><strong>Effective Date:</strong> January 1, 2025</p>
            <p><strong>Last Updated:</strong> January 2025</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                {siteConfig.company.legalName} ("<strong>Boomi Tech</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") 
                respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                By accessing or using our services, you agree to this Privacy Policy. If you do not agree, please discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Information You Provide</h3>
              <p className="text-slate-700 leading-relaxed mb-3">We collect information you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Submit contact forms or inquiry requests</li>
                <li>Request quotes, consultations, or services</li>
                <li>Register for training programs or webinars</li>
                <li>Subscribe to newsletters or communications</li>
                <li>Apply for employment or partnership opportunities</li>
                <li>Submit investment inquiries or business proposals</li>
                <li>Upload documents or files through our platform</li>
              </ul>
              
              <p className="text-slate-700 leading-relaxed mt-4 mb-3"><strong>This may include:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Personal identifiers (name, email, phone number, address)</li>
                <li>Professional information (company name, job title, industry)</li>
                <li>Financial information (budget ranges, investment amounts)</li>
                <li>Project details and business requirements</li>
                <li>Resume/CV and professional credentials</li>
                <li>Documents and files you upload (proposals, specifications, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-slate-700 leading-relaxed mb-3">When you visit our website, we automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages viewed, time spent, navigation paths)</li>
                <li>Referral sources and search terms</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Location data (country, region based on IP address)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">2.3 Third-Party Information</h3>
              <p className="text-slate-700 leading-relaxed">
                We may receive information about you from third-party sources such as business partners, marketing platforms, 
                public databases, and social media platforms when you interact with our content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Service Delivery</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Respond to inquiries and provide requested information</li>
                <li>Deliver consulting, development, and technology services</li>
                <li>Process service agreements and project engagements</li>
                <li>Provide customer support and technical assistance</li>
                <li>Conduct training programs and issue certifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">3.2 Business Operations</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Evaluate investment opportunities and partnership proposals</li>
                <li>Process employment applications and recruitment</li>
                <li>Conduct business development and sales activities</li>
                <li>Manage vendor and contractor relationships</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">3.3 Marketing and Communications</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Send newsletters, updates, and promotional materials</li>
                <li>Notify you about new services, products, or features</li>
                <li>Conduct market research and customer surveys</li>
                <li>Personalize your experience and content</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">3.4 Analytics and Improvement</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Analyze website usage and user behavior</li>
                <li>Improve our services, website, and user experience</li>
                <li>Develop new products and service offerings</li>
                <li>Monitor and prevent fraud, security threats, and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-slate-700 leading-relaxed mb-3">For users in the European Economic Area (EEA), we process your data based on:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Consent:</strong> You have given explicit consent for specific processing activities</li>
                <li><strong>Contract Performance:</strong> Processing is necessary to fulfill our contractual obligations</li>
                <li><strong>Legal Obligation:</strong> We must process data to comply with legal requirements</li>
                <li><strong>Legitimate Interests:</strong> Processing serves our legitimate business interests while respecting your rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. How We Share Your Information</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">5.1 Service Providers</h3>
              <p className="text-slate-700 leading-relaxed">
                Third-party vendors who perform services on our behalf (email delivery, hosting, analytics, payment processing, CRM systems). 
                These providers are contractually obligated to protect your data and use it only for specified purposes.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.2 Business Partners</h3>
              <p className="text-slate-700 leading-relaxed">
                Strategic partners, subcontractors, or technology providers when necessary to deliver services you requested. 
                We ensure appropriate data protection agreements are in place.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.3 Legal Requirements</h3>
              <p className="text-slate-700 leading-relaxed">
                Government authorities, law enforcement, or legal entities when required by law, court order, or to protect our rights, 
                property, or safety, or that of others.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.4 Business Transfers</h3>
              <p className="text-slate-700 leading-relaxed">
                In connection with mergers, acquisitions, asset sales, or bankruptcy proceedings, your information may be transferred 
                to successor entities. You will be notified of any such change.
              </p>

              <p className="text-slate-700 leading-relaxed mt-6 font-semibold">
                We do NOT sell your personal information to third parties for monetary consideration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Data Security</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Encryption of data in transit (SSL/TLS) and at rest</li>
                <li>Secure server infrastructure and access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your data, 
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Data Retention</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law. Retention periods vary based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Active Relationships:</strong> Duration of business relationship plus 7 years</li>
                <li><strong>Marketing Data:</strong> Until you unsubscribe or request deletion</li>
                <li><strong>Legal Requirements:</strong> As required by tax, accounting, or regulatory laws</li>
                <li><strong>Dispute Resolution:</strong> Until resolution of any claims or litigation</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                After retention periods expire, we securely delete or anonymize your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Your Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">8.1 General Rights</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Access:</strong> Request a copy of personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">8.2 California Residents (CCPA/CPRA)</h3>
              <p className="text-slate-700 leading-relaxed mb-3">California residents have additional rights:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Right to know what personal information is collected, used, and shared</li>
                <li>Right to delete personal information (with exceptions)</li>
                <li>Right to opt-out of sale/sharing of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to limit use of sensitive personal information</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">8.3 Exercising Your Rights</h3>
              <p className="text-slate-700 leading-relaxed">
                To exercise any of these rights, contact us at <strong>{siteConfig.contact.email}</strong>. 
                We will respond within 30 days. We may request verification of your identity before processing requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Cookies and Tracking</h2>
              <p className="text-slate-700 leading-relaxed mb-3">We use cookies and similar technologies:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Track visitors for advertising purposes</li>
                <li><strong>Preference Cookies:</strong> Remember your settings</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. International Data Transfers</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                We operate globally with offices in the USA and India. Your information may be transferred to, stored, and processed 
                in countries other than your own. We ensure appropriate safeguards including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions by relevant data protection authorities</li>
                <li>Binding Corporate Rules and other approved mechanisms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Children's Privacy</h2>
              <p className="text-slate-700 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information 
                from children. If you believe we have collected information from a child, contact us immediately at{" "}
                <strong>{siteConfig.contact.email}</strong> and we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Changes to This Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy periodically. We will post the updated policy with a new "Last Updated" date. 
                Material changes will be communicated via email or prominent website notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Contact Us</h2>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-2">
                <p className="text-slate-900 font-semibold">{siteConfig.company.legalName}</p>
                <p className="text-slate-700">Email: {siteConfig.contact.email}</p>
                <p className="text-slate-700">Phone: {siteConfig.contact.phone}</p>
                <p className="text-slate-700">
                  Address: {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                </p>
                <p className="text-slate-700 mt-4">
                  <strong>Data Protection Officer:</strong> {siteConfig.business.owner}
                </p>
              </div>
            </section>

            <section className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Acknowledgment</h2>
              <p className="text-slate-700 leading-relaxed">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
