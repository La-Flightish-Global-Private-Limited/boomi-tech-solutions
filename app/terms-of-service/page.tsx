import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms of Service | Boomi Tech Solutions",
  description: "Terms of Service for Boomi Tech Solutions LLC - Legal terms and conditions for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          
          <div className="text-sm text-slate-600 mb-8 space-y-1">
            <p><strong>Effective Date:</strong> January 1, 2025</p>
            <p><strong>Last Updated:</strong> January 2025</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Service ("<strong>Terms</strong>") constitute a legally binding agreement between you ("<strong>Client</strong>", "<strong>you</strong>", or "<strong>your</strong>") 
                and {siteConfig.company.legalName} ("<strong>Boomi Tech</strong>", "<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), 
                governing your access to and use of our website, services, products, and platforms (collectively, the "<strong>Services</strong>").
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS.</strong> If you do not agree to these Terms, 
                you must immediately cease all use of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Services Provided</h2>
              <p className="text-slate-700 leading-relaxed mb-3">Boomi Tech Solutions provides professional technology services including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Custom software development and engineering</li>
                <li>Cloud infrastructure design, deployment, and management</li>
                <li>AI/ML solutions and LLM integration services</li>
                <li>SaaS product development and consulting</li>
                <li>Enterprise application development and modernization</li>
                <li>Technical training and certification preparation programs</li>
                <li>IT consulting and digital transformation services</li>
                <li>DevOps, security, and infrastructure automation</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                Specific service terms, deliverables, timelines, and pricing shall be defined in separate Service Agreements, 
                Statements of Work (SOW), or Order Forms executed between the parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Eligibility and Account Registration</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Eligibility</h3>
              <p className="text-slate-700 leading-relaxed">
                You must be at least 18 years old and have the legal capacity to enter into binding contracts. 
                By using our Services, you represent and warrant that you meet these requirements.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">3.2 Business Representation</h3>
              <p className="text-slate-700 leading-relaxed">
                If you are accessing Services on behalf of a company or organization, you represent that you have authority 
                to bind that entity to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">3.3 Account Security</h3>
              <p className="text-slate-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of account credentials and for all activities 
                under your account. Notify us immediately of any unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Service Agreements and Engagement</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 Proposal and Acceptance</h3>
              <p className="text-slate-700 leading-relaxed">
                All service engagements begin with a written proposal, quote, or SOW. Services commence only upon mutual 
                execution of a binding agreement and receipt of required deposits or payments.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">4.2 Scope of Work</h3>
              <p className="text-slate-700 leading-relaxed">
                We will perform Services in accordance with the agreed scope. Any changes, additions, or modifications 
                require written approval and may result in additional fees and timeline adjustments.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">4.3 Client Responsibilities</h3>
              <p className="text-slate-700 leading-relaxed mb-3">Clients must:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Provide timely access to necessary systems, data, and personnel</li>
                <li>Provide accurate requirements, specifications, and feedback</li>
                <li>Respond to requests for information within agreed timeframes</li>
                <li>Designate authorized representatives for decision-making</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                Failure to meet these responsibilities may result in project delays, additional costs, or termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Fees, Payment, and Billing</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">5.1 Pricing</h3>
              <p className="text-slate-700 leading-relaxed">
                Fees are specified in the applicable Service Agreement or SOW. All prices are in USD unless otherwise stated. 
                We reserve the right to modify pricing with 30 days' notice for ongoing services.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.2 Payment Terms</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Invoices are due within 15 days of invoice date</li>
                <li>Project-based work may require upfront deposits (typically 30-50%)</li>
                <li>Milestone payments are due upon completion of specified deliverables</li>
                <li>Recurring services are billed monthly in advance</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.3 Late Payments</h3>
              <p className="text-slate-700 leading-relaxed">
                Late payments incur interest at 1.5% per month (18% annually) or the maximum rate permitted by law, whichever is lower. 
                We may suspend services for accounts more than 15 days overdue and terminate for accounts more than 30 days overdue.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.4 Expenses</h3>
              <p className="text-slate-700 leading-relaxed">
                Client is responsible for reimbursing pre-approved expenses including third-party services, licenses, 
                hosting fees, and travel costs (if applicable).
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.5 Taxes</h3>
              <p className="text-slate-700 leading-relaxed">
                All fees are exclusive of applicable taxes. Client is responsible for all sales, use, VAT, GST, and other taxes 
                (excluding taxes based on our income).
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">5.6 No Refunds</h3>
              <p className="text-slate-700 leading-relaxed">
                All payments are non-refundable except as expressly provided in a Service Agreement. Deposits and advance payments 
                are non-refundable once work has commenced.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">6.1 Company IP</h3>
              <p className="text-slate-700 leading-relaxed">
                We retain all rights, title, and interest in: (a) our pre-existing intellectual property, tools, frameworks, 
                methodologies, and technologies; (b) any improvements or derivatives thereof; (c) our brand assets, trademarks, 
                and proprietary materials. These remain our exclusive property regardless of incorporation into Client deliverables.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">6.2 Work Product Ownership</h3>
              <p className="text-slate-700 leading-relaxed">
                Upon full payment of all fees, Client receives ownership of custom deliverables specifically created for Client 
                ("<strong>Work Product</strong>"), excluding Company IP. Until full payment, all Work Product remains our property.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">6.3 License Grant</h3>
              <p className="text-slate-700 leading-relaxed">
                We grant Client a non-exclusive, non-transferable license to use Company IP incorporated in deliverables 
                solely for Client's internal business purposes. Client may not reverse engineer, modify, or redistribute Company IP.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">6.4 Client Materials</h3>
              <p className="text-slate-700 leading-relaxed">
                Client grants us a non-exclusive license to use Client-provided materials solely to perform Services. 
                Client represents it has all necessary rights to provide such materials.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">6.5 Portfolio Rights</h3>
              <p className="text-slate-700 leading-relaxed">
                We may use project details, anonymized case studies, and non-confidential aspects of Work Product for 
                marketing, portfolio, and promotional purposes unless Client objects in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Confidentiality</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">7.1 Confidential Information</h3>
              <p className="text-slate-700 leading-relaxed">
                Each party agrees to protect the other's confidential information with the same degree of care used for its own 
                confidential information (but no less than reasonable care). Confidential information includes business plans, 
                technical data, customer information, and proprietary materials.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">7.2 Exceptions</h3>
              <p className="text-slate-700 leading-relaxed mb-3">Confidentiality obligations do not apply to information that:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Is or becomes publicly available through no breach of these Terms</li>
                <li>Was rightfully known prior to disclosure</li>
                <li>Is independently developed without use of confidential information</li>
                <li>Is rightfully received from a third party without confidentiality restrictions</li>
                <li>Must be disclosed pursuant to law or court order (with notice to disclosing party)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">7.3 Duration</h3>
              <p className="text-slate-700 leading-relaxed">
                Confidentiality obligations survive for 5 years after disclosure or termination of the relationship, 
                whichever is later.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Warranties and Disclaimers</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">8.1 Limited Warranty</h3>
              <p className="text-slate-700 leading-relaxed">
                We warrant that Services will be performed in a professional and workmanlike manner consistent with industry standards. 
                For 30 days after delivery, we will correct material defects in Work Product at no additional charge.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">8.2 Disclaimer</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, 
                INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ERROR-FREE OPERATION. 
                WE DO NOT WARRANT THAT SERVICES WILL MEET YOUR REQUIREMENTS OR THAT OPERATION WILL BE UNINTERRUPTED OR ERROR-FREE.</strong>
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">8.3 Third-Party Services</h3>
              <p className="text-slate-700 leading-relaxed">
                We are not responsible for third-party services, platforms, APIs, or tools integrated into solutions. 
                Client is responsible for compliance with third-party terms and licenses.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">8.4 No Business Outcome Guarantee</h3>
              <p className="text-slate-700 leading-relaxed">
                We do not guarantee specific business results, revenue, cost savings, ROI, or other outcomes from use of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Limitation of Liability</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">9.1 Liability Cap</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATED TO THESE TERMS 
                OR SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY CLIENT IN THE 12 MONTHS PRECEDING THE CLAIM, OR $10,000 USD, 
                WHICHEVER IS GREATER.</strong>
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">9.2 Exclusion of Damages</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>IN NO EVENT SHALL WE BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, 
                INCLUDING LOST PROFITS, LOST REVENUE, LOST DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL, EVEN IF ADVISED OF THE 
                POSSIBILITY OF SUCH DAMAGES.</strong>
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">9.3 Exceptions</h3>
              <p className="text-slate-700 leading-relaxed">
                These limitations do not apply to: (a) our gross negligence or willful misconduct; (b) death or personal injury 
                caused by our negligence; (c) fraud or fraudulent misrepresentation; or (d) liabilities that cannot be limited by law.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">9.4 Claims Period</h3>
              <p className="text-slate-700 leading-relaxed">
                Any claim must be brought within 12 months after the cause of action arises, or it is permanently barred.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Indemnification</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">10.1 Client Indemnification</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Client agrees to indemnify, defend, and hold harmless Boomi Tech, its affiliates, officers, directors, employees, 
                and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Client's breach of these Terms or applicable laws</li>
                <li>Client's use of Services or Work Product</li>
                <li>Client-provided materials, data, or content</li>
                <li>Infringement of third-party rights by Client materials</li>
                <li>Client's negligence or willful misconduct</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">10.2 Company Indemnification</h3>
              <p className="text-slate-700 leading-relaxed">
                We will indemnify Client against third-party claims that Work Product (excluding Client materials and third-party components) 
                infringes intellectual property rights, provided Client: (a) promptly notifies us; (b) grants us sole control of defense; 
                (c) cooperates reasonably. Our obligation is limited to obtaining rights, modifying deliverables, or refunding fees paid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Term and Termination</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">11.1 Term</h3>
              <p className="text-slate-700 leading-relaxed">
                These Terms remain in effect while you use our Services. Service Agreements specify engagement duration.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">11.2 Termination for Convenience</h3>
              <p className="text-slate-700 leading-relaxed">
                Either party may terminate ongoing services with 30 days' written notice. Client remains liable for all fees 
                for work performed through the termination date plus any non-cancellable commitments.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">11.3 Termination for Cause</h3>
              <p className="text-slate-700 leading-relaxed">
                Either party may terminate immediately if the other party: (a) materially breaches these Terms and fails to cure 
                within 15 days of written notice; (b) becomes insolvent or subject to bankruptcy proceedings; (c) ceases business operations.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">11.4 Effect of Termination</h3>
              <p className="text-slate-700 leading-relaxed mb-3">Upon termination:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Client must pay all outstanding fees and expenses</li>
                <li>We will deliver completed Work Product upon full payment</li>
                <li>Each party returns or destroys the other's confidential information</li>
                <li>Licenses granted to Client terminate (except for paid Work Product)</li>
                <li>Sections 5-10, 12-15 survive termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Acceptable Use Policy</h2>
              <p className="text-slate-700 leading-relaxed mb-3">You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Use Services for illegal, fraudulent, or malicious purposes</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Attempt unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt Services or servers</li>
                <li>Reverse engineer, decompile, or disassemble our technology</li>
                <li>Remove or modify proprietary notices or labels</li>
                <li>Use Services to compete with us or develop competing products</li>
                <li>Resell or redistribute Services without authorization</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                Violation may result in immediate termination and legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Dispute Resolution</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">13.1 Informal Resolution</h3>
              <p className="text-slate-700 leading-relaxed">
                Before initiating formal proceedings, parties agree to negotiate in good faith for 30 days to resolve disputes.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">13.2 Arbitration</h3>
              <p className="text-slate-700 leading-relaxed">
                Any dispute not resolved informally shall be resolved by binding arbitration under the American Arbitration Association 
                (AAA) Commercial Arbitration Rules. Arbitration shall be conducted in Sheridan, Wyoming, USA, or remotely by mutual agreement. 
                The arbitrator's decision is final and binding.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">13.3 Exceptions</h3>
              <p className="text-slate-700 leading-relaxed">
                Either party may seek injunctive relief in court for intellectual property infringement, confidentiality breaches, 
                or unauthorized use of Services.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">13.4 Class Action Waiver</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>DISPUTES MUST BE BROUGHT INDIVIDUALLY. YOU WAIVE THE RIGHT TO PARTICIPATE IN CLASS ACTIONS, 
                CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Governing Law and Jurisdiction</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms are governed by the laws of the State of Wyoming, USA, without regard to conflict of law principles. 
                Any court proceedings (where arbitration does not apply) shall be brought exclusively in state or federal courts 
                located in Sheridan County, Wyoming. You consent to personal jurisdiction and venue in these courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">15. General Provisions</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">15.1 Entire Agreement</h3>
              <p className="text-slate-700 leading-relaxed">
                These Terms, together with any Service Agreements and SOWs, constitute the entire agreement and supersede 
                all prior agreements and understandings.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.2 Amendments</h3>
              <p className="text-slate-700 leading-relaxed">
                We may modify these Terms at any time by posting updated Terms on our website. Material changes will be notified 
                via email. Continued use after changes constitutes acceptance.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.3 Assignment</h3>
              <p className="text-slate-700 leading-relaxed">
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms 
                in connection with mergers, acquisitions, or asset sales.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.4 Force Majeure</h3>
              <p className="text-slate-700 leading-relaxed">
                Neither party is liable for delays or failures due to circumstances beyond reasonable control (natural disasters, 
                war, terrorism, pandemics, government actions, internet failures, etc.).
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.5 Severability</h3>
              <p className="text-slate-700 leading-relaxed">
                If any provision is found invalid or unenforceable, the remaining provisions remain in full effect.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.6 Waiver</h3>
              <p className="text-slate-700 leading-relaxed">
                Failure to enforce any provision does not constitute a waiver of that or any other provision.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.7 Independent Contractors</h3>
              <p className="text-slate-700 leading-relaxed">
                The parties are independent contractors. Nothing creates a partnership, joint venture, agency, or employment relationship.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.8 Third-Party Beneficiaries</h3>
              <p className="text-slate-700 leading-relaxed">
                These Terms do not confer rights on any third parties.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.9 Notices</h3>
              <p className="text-slate-700 leading-relaxed">
                Notices must be in writing and sent to the addresses specified in Service Agreements or to {siteConfig.contact.email}.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">15.10 Export Compliance</h3>
              <p className="text-slate-700 leading-relaxed">
                Services and deliverables may be subject to U.S. export controls. Client agrees to comply with all applicable 
                export and import laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">16. Contact Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                For questions about these Terms, contact us:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-2">
                <p className="text-slate-900 font-semibold">{siteConfig.company.legalName}</p>
                <p className="text-slate-700">Email: {siteConfig.contact.email}</p>
                <p className="text-slate-700">Phone: {siteConfig.contact.phone}</p>
                <p className="text-slate-700">
                  Address: {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                </p>
                <p className="text-slate-700">EIN: {siteConfig.business.registrationNumber}</p>
              </div>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Acknowledgment and Acceptance</h2>
              <p className="text-slate-700 leading-relaxed">
                <strong>BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE. 
                IF YOU DO NOT AGREE, DO NOT USE OUR SERVICES.</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
