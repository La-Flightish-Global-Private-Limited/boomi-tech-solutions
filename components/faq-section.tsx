"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across multiple industries including FinTech, Healthcare, E-commerce, Manufacturing, and Enterprise SaaS. Our team has deep expertise in regulated industries and understands compliance requirements like HIPAA, SOC 2, and PCI-DSS.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. An MVP can be delivered in 8-12 weeks, while enterprise-scale applications typically take 3-6 months. We use agile methodologies to deliver value incrementally, so you'll see progress every 2 weeks.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer comprehensive post-launch support including 24/7 monitoring, maintenance, updates, and scaling assistance. Our support packages are flexible and can be customized to your needs, from basic monitoring to full DevOps management.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with 2-week sprints. The process includes discovery & planning, design & prototyping, iterative development, rigorous testing, deployment, and ongoing optimization. You'll have full visibility through regular demos and sprint reviews.",
  },
  {
    question: "Can you help modernize our legacy systems?",
    answer:
      "Yes, mainframe and legacy system modernization is one of our core specialties. We've successfully migrated numerous legacy systems to modern cloud-native architectures, ensuring zero downtime and data integrity throughout the transition.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We're technology-agnostic and choose the best tools for your needs. Our expertise includes Next.js, React, Node.js, Python, AWS, Azure, GCP, Kubernetes, PostgreSQL, MongoDB, and cutting-edge AI frameworks like OpenAI, TensorFlow, and PyTorch.",
  },
  {
    question: "How do you ensure project success?",
    answer:
      "We ensure success through clear communication, defined milestones, regular check-ins, comprehensive testing, and a dedicated project manager. We also provide detailed documentation and training to ensure your team can maintain and scale the solution.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. During our initial consultation, we'll recommend the best model based on your project scope, timeline, and budget. We provide transparent estimates with no hidden costs.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 text-pretty">
            Got questions? We've got answers. Find everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6 hover:border-gray-400 transition-all shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-black hover:text-gray-700 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
