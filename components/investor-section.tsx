"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Globe, Rocket, Target, DollarSign, Lightbulb, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function InvestorSection() {
  return (
    <section id="investor" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 px-4 py-1">
            <DollarSign className="h-4 w-4 inline mr-2" />
            Investment Opportunity
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Us in Building the Future of AI-Powered Recruitment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pre-seed investment opportunity in an AI-powered career platform targeting the $260B+ global recruitment market
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-2 hover:border-blue-300 transition-all">
            <div className="text-4xl font-bold text-blue-600 mb-2">$261B</div>
            <div className="text-sm font-semibold text-gray-900">Total Addressable Market</div>
            <div className="text-xs text-gray-600 mt-1">Global recruitment industry 2025*</div>
          </Card>
          <Card className="p-6 text-center border-2 hover:border-purple-300 transition-all">
            <div className="text-4xl font-bold text-purple-600 mb-2">5.8%</div>
            <div className="text-sm font-semibold text-gray-900">Market CAGR</div>
            <div className="text-xs text-gray-600 mt-1">2025-2030 projected growth*</div>
          </Card>
          <Card className="p-6 text-center border-2 hover:border-green-300 transition-all">
            <div className="text-4xl font-bold text-green-600 mb-2">$1.8B</div>
            <div className="text-sm font-semibold text-gray-900">AI Recruitment Tech</div>
            <div className="text-xs text-gray-600 mt-1">Market size 2025* (28% YoY growth)</div>
          </Card>
          <Card className="p-6 text-center border-2 hover:border-orange-300 transition-all">
            <div className="text-4xl font-bold text-orange-600 mb-2">Q1 2026</div>
            <div className="text-sm font-semibold text-gray-900">Beta Launch</div>
            <div className="text-xs text-gray-600 mt-1">MVP in deployment now</div>
          </Card>
        </div>

        {/* Why Invest */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Invest in Interview.CV?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900">Massive Market Opportunity</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>$261B global recruitment market growing at 5.8% CAGR to $345B by 2030</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>AI recruitment tech at $1.8B (2025), projected $4.3B by 2030</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Dual revenue model: B2B (recruiters) + B2C (job seekers)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900">Proven Technology & Team</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>18+ years combined experience in AI/ML and SaaS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>50+ successful projects delivered across industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Expertise in GPT-4, RAG, LangChain, and modern AI stack</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Rocket className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900">Clear Path to Scale</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>MVP in deployment, beta launch Q1 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>100+ waitlist signups, strong early interest</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Scalable SaaS model with recurring revenue potential</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* What We're Looking For */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We're Looking For</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Investment Partners
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">Angel Investors:</span>
                  <span>$10K-$50K tickets, hands-on mentorship, US market expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">Venture Capital:</span>
                  <span>Pre-seed/seed stage VCs focused on AI/SaaS, $250K-$1M rounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">Incubators:</span>
                  <span>Y Combinator, Techstars, 500 Global, or similar programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">Accelerators:</span>
                  <span>AI-focused programs with strong network and mentorship</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                Co-Founder & Strategic Partners
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">US Co-Founder:</span>
                  <span>Business development, US market expertise, fundraising experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">Sales Leader:</span>
                  <span>B2B SaaS sales experience, recruitment industry connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">Marketing Expert:</span>
                  <span>Growth marketing, SEO, content strategy for B2B/B2C SaaS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[120px]">Strategic Advisors:</span>
                  <span>HR tech veterans, AI/ML experts, successful founders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use of Funds */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Use of Funds (Pre-Seed Target: $250K)</h3>
          <div className="grid md:grid-cols-5 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Product Development</div>
              <div className="text-xs text-gray-600">$100K: AI features, beta launch</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Marketing & Growth</div>
              <div className="text-xs text-gray-600">$62.5K: User acquisition, content</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">20%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Infrastructure</div>
              <div className="text-xs text-gray-600">$50K: Cloud, APIs, security</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Operations</div>
              <div className="text-xs text-gray-600">$25K: Legal, compliance, admin</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">5%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Contingency</div>
              <div className="text-xs text-gray-600">$12.5K: 12-month runway</div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how you can be part of revolutionizing the recruitment industry with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="#contact">Schedule a Meeting</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold">
              <Link href="mailto:mydearkarthikeyan@gmail.com">Email Us Directly</Link>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            📧 Direct inquiries: mydearkarthikeyan@gmail.com | 📞 +91 9789998455
          </p>
          <p className="text-xs mt-4 opacity-60">
            *Market data from Statista, Grand View Research, IBISWorld, MarketsandMarkets, Gartner (2025)
          </p>
        </div>

        {/* Market Research Sources - Collapsible */}
        <details className="mt-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-600" />
              View Market Research Sources & Methodology
            </span>
            <span className="text-gray-400 text-xs">Click to expand</span>
          </summary>
          <div className="px-6 py-4 bg-gray-50 border-t">
            <div className="grid md:grid-cols-2 gap-6 text-xs text-gray-600">
              <div>
                <p className="font-semibold text-gray-900 mb-3">Global Recruitment Market Data:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Statista (2025):</strong> Global recruitment services market valued at $261B with projected growth to $345B by 2030</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>IBISWorld (2025):</strong> Staffing & recruiting industry analysis showing 5.8% CAGR through 2030</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Grand View Research:</strong> Recruitment software market report covering 2025-2030 forecast period</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">AI Recruitment Technology Market:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>MarketsandMarkets (2025):</strong> AI in recruitment market forecast at $1.8B, growing at 28% CAGR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Grand View Research:</strong> AI-powered recruitment technology projected to reach $4.3B by 2030</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Gartner (2025):</strong> HR technology trends report highlighting AI adoption rates and market dynamics</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 italic">
                <strong>Methodology Note:</strong> Market figures represent conservative estimates aggregated from multiple industry reports published in 2024-2025. 
                Actual market size may vary based on regional definitions, market segmentation methodologies, and inclusion criteria. 
                All projections assume stable economic conditions and continued AI technology adoption trends.
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  )
}
