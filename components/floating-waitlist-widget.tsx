"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Sparkles, ArrowRight, CheckCircle2, TrendingUp, Users, Zap, Gift, Crown, Clock } from "lucide-react"

export function FloatingWaitlistWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [spotsLeft, setSpotsLeft] = useState(847)
  const [recentSignups, setRecentSignups] = useState(3)
  const [showPulse, setShowPulse] = useState(true)

  useEffect(() => {
    // Show widget after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    // Simulate live counter decreasing
    const counterInterval = setInterval(() => {
      setSpotsLeft(prev => Math.max(800, prev - Math.floor(Math.random() * 2)))
      setRecentSignups(prev => prev + Math.floor(Math.random() * 3))
    }, 8000)

    // Pulse animation
    const pulseInterval = setInterval(() => {
      setShowPulse(true)
      setTimeout(() => setShowPulse(false), 1000)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearInterval(counterInterval)
      clearInterval(pulseInterval)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, source: 'floating-widget' })
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist')
      }

      setSubmitted(true)
      setSpotsLeft(prev => Math.max(800, prev - 1))
      setRecentSignups(prev => prev + 1)
      
      setTimeout(() => {
        setIsExpanded(false)
        setTimeout(() => {
          setSubmitted(false)
          setEmail("")
          setRole("")
        }, 500)
      }, 3000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Collapsed Button - Ultra Innovative */}
      {!isExpanded && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Ripple effect background */}
          <div className="absolute inset-0 -m-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-ping" />
          </div>

          {/* Main button container with proper spacing */}
          <div className="relative pt-8 pl-8">
            <Button
              onClick={() => setIsExpanded(true)}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:scale-110 shadow-2xl rounded-2xl px-8 py-7 font-bold transition-all duration-300 group animate-bounce hover:animate-none"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 group-hover:animate-spin" />
                  <span className="text-lg">Join Waitlist</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  <TrendingUp className="h-3 w-3 animate-pulse" />
                  <span className="font-mono font-bold">{spotsLeft} spots left</span>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>

            {/* Live activity indicator - top left */}
            <div className="absolute top-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full px-3 py-1.5 shadow-xl flex items-center gap-1.5 z-10 animate-pulse">
              <div className="relative">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
              <span className="whitespace-nowrap">{recentSignups} joined today</span>
            </div>

            {/* Gem badge - top right */}
            <div className="absolute -top-1 -right-1 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-2xl z-10 animate-bounce border-4 border-white">
              💎
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
          </div>
        </div>
      )}

      {/* Expanded Form - Ultra Enhanced */}
      {isExpanded && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 w-auto sm:w-[400px] max-h-[90vh] overflow-y-auto">
          <Card className="bg-white shadow-2xl border-2 border-blue-300 rounded-2xl overflow-hidden">
            {/* Header with live stats */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5" />
              <div className="relative flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 animate-pulse flex-shrink-0" />
                    <h3 className="font-bold text-base sm:text-lg">Exclusive Early Access</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" />
                      <span className="font-mono">{spotsLeft} left</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-500/80 px-2 py-1 rounded-full">
                      <Users className="h-3 w-3" />
                      <span>{recentSignups} today</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="hover:bg-white/20 rounded-full p-2 transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 bg-green-100 rounded-full animate-ping" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Welcome Aboard! 🎉</h4>
                  <p className="text-sm text-gray-600 mb-4">You're now #<span className="font-bold text-blue-600">{1000 - spotsLeft}</span> on the waitlist</p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-gray-700 mb-2">✨ <strong>What's Next?</strong></p>
                    <ul className="text-xs text-gray-600 space-y-1 text-left">
                      <li>✅ Confirmation email sent to <strong>{email}</strong></li>
                      <li>✅ You'll get early access when we launch Q1 2026</li>
                      <li>✅ 50% lifetime discount locked in</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  {/* Gamified Benefits */}
                  <div className="mb-4">
                    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 border-2 border-yellow-400 rounded-xl p-4 mb-3 relative overflow-hidden">
                      <div className="absolute top-0 right-0 text-6xl opacity-10">💎</div>
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <Crown className="h-5 w-5 text-yellow-600 animate-pulse" />
                          <span className="font-bold text-gray-900 text-sm">Founding Member Perks:</span>
                        </div>
                        <div className="space-y-2.5">
                          <div className="flex items-start gap-2 text-sm bg-white/60 rounded-lg p-2">
                            <Gift className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-gray-900">50% OFF Forever</div>
                              <div className="text-xs text-gray-600">Save $500+/year on premium features</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 text-sm bg-white/60 rounded-lg p-2">
                            <Crown className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-gray-900">Founding Member Badge</div>
                              <div className="text-xs text-gray-600">Exclusive status on your profile</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 text-sm bg-white/60 rounded-lg p-2">
                            <Zap className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-gray-900">Priority Beta Access</div>
                              <div className="text-xs text-gray-600">First to try new AI features</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 text-sm bg-white/60 rounded-lg p-2">
                            <Users className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-gray-900">VIP Support</div>
                              <div className="text-xs text-gray-600">Direct line + exclusive community</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Urgency bar */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-red-700">CLOSING SOON</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${(spotsLeft / 1000) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600">Only <strong className="text-red-600">{spotsLeft}</strong> spots left out of 1,000</p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="w-full h-11"
                      />
                    </div>
                    <div>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        disabled={loading}
                        className="w-full h-11 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                      >
                        <option value="">Select your role</option>
                        <option value="job-seeker">🎯 Job Seeker</option>
                        <option value="recruiter">👔 Recruiter</option>
                        <option value="hr-professional">💼 HR Professional</option>
                        <option value="hiring-manager">🎖️ Hiring Manager</option>
                        <option value="career-coach">🎓 Career Coach</option>
                        <option value="other">🌟 Other</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 font-bold text-base shadow-lg hover:shadow-xl transition-all"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Joining...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Secure My Spot Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Trust signals */}
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>No spam</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>Launch Q1 2026</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>Unsubscribe anytime</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
