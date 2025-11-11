import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Sparkles, Users, TrendingUp, Globe, Rocket, ArrowRight, 
  CheckCircle2, Target, Zap, Shield, BarChart3, Brain, 
  DollarSign, Award, Briefcase, GraduationCap
} from "lucide-react"

export const metadata = {
  title: "Interview.CV - AI-Powered Career Platform | Boomi Tech Solutions",
  description: "Revolutionary AI SaaS platform transforming recruitment, resume building, and career development. Seeking investors, co-founders, and strategic partners.",
  openGraph: {
    title: "Interview.CV - AI-Powered Career Platform",
    description: "Join us in revolutionizing the $200B+ global recruitment market with AI",
    type: "website",
  },
}

export default function InterviewCVPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-white/20 text-white px-6 py-2 text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Flagship Product by Boomi Tech Solutions
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Interview.CV
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-blue-100">
                AI-Powered Career Intelligence Platform
              </p>
              <p className="text-xl mb-12 text-white/90 leading-relaxed">
                Revolutionizing how 100M+ professionals build careers, companies find talent, 
                and recruiters connect opportunities using cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-6">
                  <Link href="https://www.interview.cv" target="_blank">
                    Visit Interview.CV
                    <Globe className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6">
                  <Link href="/#contact">
                    Partner With Us
                    <Rocket className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The $200B+ Market Opportunity</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The global recruitment and career development market is broken. We're fixing it with AI.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="text-4xl font-bold text-red-600 mb-4">73%</div>
                <h3 className="text-xl font-semibold mb-3">Resume Rejection Rate</h3>
                <p className="text-gray-600">Qualified candidates rejected by ATS systems due to poor resume formatting</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500">
                <div className="text-4xl font-bold text-orange-600 mb-4">$4,000</div>
                <h3 className="text-xl font-semibold mb-3">Cost Per Hire</h3>
                <p className="text-gray-600">Average company spending per new employee hire in the US market</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <div className="text-4xl font-bold text-yellow-600 mb-4">42 Days</div>
                <h3 className="text-xl font-semibold mb-3">Time to Fill</h3>
                <p className="text-gray-600">Average time companies take to fill an open position</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI-Powered Solution</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Interview.CV uses advanced AI to solve every pain point in the career journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Resume Builder</h3>
                <p className="text-gray-600 text-sm">ATS-optimized resumes in 5 minutes</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Job Matching</h3>
                <p className="text-gray-600 text-sm">AI-powered opportunity discovery</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Interview Prep</h3>
                <p className="text-gray-600 text-sm">Mock interviews with real-time AI feedback</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Analytics</h3>
                <p className="text-gray-600 text-sm">Data-driven career insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Markets */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Multi-Sided Platform</h2>
              <p className="text-xl text-gray-600">Serving three distinct customer segments</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Job Seekers (B2C)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>100M+ global professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Freemium + Premium ($9.99/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Resume, interview prep, job search</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <Briefcase className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Companies (B2B)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>10M+ companies worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enterprise plans ($499-$2,999/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>ATS integration, talent pool access</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Recruiters (B2B)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>500K+ recruitment agencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Pro plans ($99-$499/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Candidate sourcing, placement tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investors Section */}
        <section id="investors" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Seeking Strategic Partners</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join us in building the future of career intelligence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Users className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Co-Founders</h3>
                <p className="text-blue-100 text-sm">US market expertise, sales/marketing leaders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <DollarSign className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Investors</h3>
                <p className="text-blue-100 text-sm">Seed to Series A funding ($500K-$5M)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Rocket className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Incubators</h3>
                <p className="text-blue-100 text-sm">Y Combinator, Techstars, 500 Startups</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Award className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Tech Partners</h3>
                <p className="text-blue-100 text-sm">OpenAI, Microsoft, AWS partnerships</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Partner With Us?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Shield className="h-8 w-8 mb-3" />
                  <h4 className="font-semibold mb-2">Proven Team</h4>
                  <p className="text-blue-100 text-sm">18+ years building enterprise SaaS platforms</p>
                </div>
                <div>
                  <TrendingUp className="h-8 w-8 mb-3" />
                  <h4 className="font-semibold mb-2">Market Timing</h4>
                  <p className="text-blue-100 text-sm">AI revolution + remote work = perfect storm</p>
                </div>
                <div>
                  <Globe className="h-8 w-8 mb-3" />
                  <h4 className="font-semibold mb-2">Global Scale</h4>
                  <p className="text-blue-100 text-sm">Multi-language, multi-currency ready</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-12 py-6">
                <Link href="/#contact">
                  Schedule Partnership Discussion
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join the Revolution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're an investor, co-founder, or strategic partner, let's discuss how we can transform the career industry together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 font-bold text-lg px-8 py-6">
                <Link href="/#contact">
                  Contact Us for Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6">
                <Link href="https://www.interview.cv" target="_blank">
                  Explore Interview.CV
                  <Globe className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              <strong>Boomi Tech Solutions LLC</strong> | EIN: 35-2822033 | Registered in Wyoming, USA
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
