"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Users, TrendingUp, Globe, Rocket, ArrowRight, CheckCircle2 } from "lucide-react"

export function FlagshipProductSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold">
            <Sparkles className="mr-2 h-4 w-4" />
            Our Flagship AI Product
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Introducing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Interview.CV</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered platform transforming how professionals build careers, 
            companies find talent, and recruiters connect opportunities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Product Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                The Future of Career Development
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Interview.CV leverages cutting-edge AI to revolutionize the entire career journey - 
                from resume building to interview preparation, job matching to skill development.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI-Powered Resume Builder</h4>
                  <p className="text-gray-600">Create ATS-optimized resumes in minutes with intelligent suggestions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Smart Interview Preparation</h4>
                  <p className="text-gray-600">Practice with AI-driven mock interviews and real-time feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Intelligent Job Matching</h4>
                  <p className="text-gray-600">Connect with opportunities that match your skills and aspirations</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t">
              <div>
                <div className="text-3xl font-bold text-blue-600">AI</div>
                <div className="text-sm text-gray-600">Powered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">Global</div>
                <div className="text-sm text-gray-600">Platform</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">SaaS</div>
                <div className="text-sm text-gray-600">Model</div>
              </div>
            </div>
          </div>

          {/* Right: Visual/CTA */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-grid-white/10 rounded-2xl" />
              <div className="relative space-y-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">🚀 Seeking Strategic Partners</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5" />
                      <span>Co-Founders with US Market Expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5" />
                      <span>Investors & Venture Capital</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Rocket className="h-5 w-5" />
                      <span>Incubators & Accelerators</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5" />
                      <span>Strategic Tech Partners</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-white/90 text-sm mb-4">
                    Join us in revolutionizing the $200B+ global recruitment market
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                    >
                      <Link href="/products/interview-cv">
                        View Product Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10"
                    >
                      <Link href="#contact">
                        Partner With Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-blue-200">
              <span className="text-sm font-semibold text-blue-600">🌟 Live Now</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-purple-200">
              <span className="text-sm font-semibold text-purple-600">💼 B2B + B2C</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Boomi Tech Solutions</strong> built Interview.CV to showcase our AI/ML capabilities. 
            <br className="hidden sm:block" />
            We can build your next revolutionary SaaS platform too.
          </p>
          <Link href="https://www.interview.cv" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="font-semibold">
              Visit Interview.CV
              <Globe className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
