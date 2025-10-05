import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { contentConfig } from "@/lib/content-config"
import Image from "next/image"

export function CaseStudiesSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">
            Success Stories That Speak Volumes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Real results from real clients. See how we've helped businesses transform and scale.
          </p>
        </div>

        <div className="space-y-12">
          {contentConfig.caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 overflow-hidden hover:border-gray-400 transition-all hover:shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-auto min-h-[300px]">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <Badge className="mb-4 bg-black text-white border-black">{study.industry}</Badge>
                  <h3 className="text-2xl font-bold text-black mb-4">{study.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Challenge</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Solution</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-black mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-black flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-black mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-gray-300 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-black hover:bg-gray-800 text-white">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
