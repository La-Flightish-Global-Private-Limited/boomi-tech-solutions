"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Rocket, Target, DollarSign, Lightbulb, Award, CheckCircle2 } from "lucide-react"
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

        {/* CTA - Innovative Multi-Tier Approach */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
          </div>
          
          <div className="relative p-8 md:p-12">
            {/* Status Badge */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <div className="h-3 w-3 bg-green-400 rounded-full animate-ping absolute" />
                <div className="h-3 w-3 bg-green-400 rounded-full" />
              </div>
              <span className="text-sm font-bold text-green-400 uppercase tracking-widest">Actively Fundraising</span>
              <Badge className="bg-red-500 text-white text-xs px-2 py-0.5">Limited Slots</Badge>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Don't Miss the Next <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">$1B</span> HR Tech Unicorn
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Early investors in LinkedIn, Indeed, and ZipRecruiter saw 100x+ returns. Interview.CV is positioned to be the next category leader.
              </p>
            </div>

            {/* Social Proof Ticker */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span><strong>100+</strong> waitlist signups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span><strong>3</strong> investor meetings scheduled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-400" />
                  <span><strong>$261B</strong> market opportunity</span>
                </div>
              </div>
            </div>

            {/* Three-Tier Engagement Options */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {/* Tier 1: Learn More */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all p-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-bold text-white mb-2">Explore Opportunity</h4>
                  <p className="text-xs text-blue-200 mb-4">Get pitch deck, financials, and market analysis</p>
                  <Button asChild className="w-full bg-white/10 text-white border border-white/30 hover:bg-white hover:text-blue-900 font-semibold">
                    <Link href="mailto:mydearkarthikeyan@gmail.com?subject=Request Interview.CV Pitch Deck">
                      Request Materials
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Tier 2: Schedule Call */}
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-yellow-400 hover:shadow-2xl transition-all p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-black text-xs font-bold px-3">MOST POPULAR</Badge>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-bold text-white mb-2">Book Investor Call</h4>
                  <p className="text-xs text-white/90 mb-4">30-min deep dive with founder + Q&A</p>
                  <Button asChild size="lg" className="w-full bg-white text-blue-600 hover:bg-yellow-400 hover:text-black font-bold">
                    <Link href="#contact">
                      Schedule Now
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Tier 3: Fast Track */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all p-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-bold text-white mb-2">Fast-Track Review</h4>
                  <p className="text-xs text-blue-200 mb-4">For qualified investors ready to commit</p>
                  <Button asChild className="w-full bg-white/10 text-white border border-white/30 hover:bg-white hover:text-blue-900 font-semibold">
                    <Link href="mailto:mydearkarthikeyan@gmail.com?subject=Fast-Track Investment - Interview.CV">
                      Express Interest
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Urgency + Trust Signals */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⏰</div>
                <div>
                  <p className="text-sm font-bold text-red-300 mb-1">Pre-Seed Round Closing Soon</p>
                  <p className="text-xs text-red-200">We're targeting to close our $250K pre-seed by end of Q1 2026. Early investors get preferred terms and advisory board seats.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 mb-6">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-400" />
                <span>NDA Protected</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-400" />
                <span>SAFE/Convertible Note</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-400" />
                <span>Wyoming LLC (C-Corp Conversion Ready)</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-400" />
                <span>US & India Operations</span>
              </div>
            </div>

            {/* Contact Footer */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-sm text-white/80 mb-2">
                <strong>Direct Line to Founder:</strong> Karthikeyan Veeran
              </p>
              <p className="text-xs text-white/60">
                📧 mydearkarthikeyan@gmail.com | 📞 +91 9789998455 | 💼 <a href="https://www.linkedin.com/in/karthikeyanvee/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">LinkedIn Profile</a>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-4 text-gray-500">
          *Market data from Statista, Grand View Research, IBISWorld, MarketsandMarkets, Gartner (2025)
        </p>

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
