"use client"

import { caseStudies as detailedCaseStudies } from "@/lib/case-studies-data-new"
import Image from "next/image"
import { useState } from "react"
import { ExternalLink, Clock, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Success Stories That Speak Volumes
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-600">
            Real results from real clients. See how we've helped businesses transform and scale.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {detailedCaseStudies.map((study, idx) => (
            <article
              key={idx}
              className="flex flex-col items-start justify-between bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              role="article"
              aria-labelledby={`case-study-${idx}`}
            >
              <div className="relative w-full">
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100 mb-6">
                  <Image
                    src={study.image}
                    alt={`${study.title} - ${study.industry} case study`}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                </div>
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="relative z-10 rounded-full bg-blue-600 px-3 py-1.5 font-medium text-white">
                    {study.industry}
                  </span>
                </div>
              </div>
              <div className="group relative">
                <h3 id={`case-study-${idx}`} className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{study.challenge.description}</p>
              </div>
              <div className="mt-6 w-full">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                <ul className="space-y-2">
                  {study.results.metrics.slice(0, 3).map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span><strong>{result.label}:</strong> {result.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.solution.technologies.map((tech, i) => (
                  <span key={i} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      aria-label={`Read full case study: ${study.title}`}
                    >
                      Read Full Case Study <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 flex flex-col">
                    {/* Fixed Header */}
                    <div className="flex-shrink-0 border-b bg-white">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0">
                            <DialogTitle className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                              {study.title}
                            </DialogTitle>
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-blue-500" />
                                <span className="font-medium">{study.client}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-green-500" />
                                <span>{study.duration}</span>
                              </div>
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                {study.industry}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-6">
                        {/* Hero Image */}
                        <div className="relative h-32 w-full overflow-hidden rounded-xl bg-gray-100 mb-8">
                          <Image
                            src={study.image}
                            alt={`${study.title} project overview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 80vw"
                          />
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                          {/* Main Content - Left Column */}
                          <div className="lg:col-span-2 space-y-8">
                            {/* Challenge */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-red-500 rounded-full" />
                                <h3 className="text-2xl font-bold text-gray-900">{study.challenge.title}</h3>
                              </div>
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">{study.challenge.description}</p>
                              <div className="grid gap-3">
                                {study.challenge.painPoints.map((point, i) => (
                                  <div key={i} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-red-900 font-medium">{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <Separator className="my-8" />
                            
                            {/* Solution */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-green-500 rounded-full" />
                                <h3 className="text-2xl font-bold text-gray-900">{study.solution.title}</h3>
                              </div>
                              <p className="text-gray-700 text-lg leading-relaxed mb-6">{study.solution.description}</p>
                              <div className="grid gap-3">
                                {study.solution.approach.map((item, i) => (
                                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-lg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-green-900 font-medium">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Sidebar - Right Column */}
                          <div className="space-y-6">
                            {/* Results */}
                            <div className="bg-white border rounded-xl p-6">
                              <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="h-5 w-5 text-blue-500" />
                                <h4 className="text-xl font-bold text-gray-900">Key Results</h4>
                              </div>
                              <div className="space-y-4">
                                {study.results.metrics.map((result, i) => (
                                  <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                                    <div className="text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">{result.label}</div>
                                    <div className="text-xs text-gray-600">{result.impact}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Technologies */}
                            <div className="bg-white border rounded-xl p-6">
                              <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {study.solution.technologies.map((tech, i) => (
                                  <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Full Width Sections */}
                        <div className="mt-8 space-y-6">
                          {/* Testimonial */}
                          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl border">
                            <blockquote className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                              "{study.results.testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {study.results.testimonial.author.charAt(0)}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 text-lg">{study.results.testimonial.author}</div>
                                <div className="text-gray-600">{study.results.testimonial.company}</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Global Impact */}
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full" />
                              Global Impact
                            </h4>
                            <p className="text-green-800 text-lg leading-relaxed">{study.globalImpact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
