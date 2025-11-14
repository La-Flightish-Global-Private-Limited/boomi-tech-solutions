"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

export function FloatingWaitlistWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show widget after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with your email service
    console.log({ email, role })
    setSubmitted(true)
    setTimeout(() => {
      setIsExpanded(false)
      setSubmitted(false)
      setEmail("")
      setRole("")
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Collapsed Button */}
      {!isExpanded && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <Button
            onClick={() => setIsExpanded(true)}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-2xl rounded-full px-6 py-6 font-bold"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Join Waitlist
          </Button>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            🔥
          </div>
        </div>
      )}

      {/* Expanded Form */}
      {isExpanded && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md">
          <Card className="bg-white shadow-2xl border-2 border-blue-300 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <h3 className="font-bold">Join Interview.CV Waitlist</h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">You're on the list! 🎉</h4>
                  <p className="text-sm text-gray-600">Check your email for confirmation.</p>
                </div>
              ) : (
                <>
                  {/* Benefits */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">50% off lifetime pricing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Founding member badge</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Beta access to AI features</span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="">I am a...</option>
                      <option value="job-seeker">Job Seeker</option>
                      <option value="recruiter">Recruiter</option>
                      <option value="hr-professional">HR Professional</option>
                      <option value="hiring-manager">Hiring Manager</option>
                    </select>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-bold"
                    >
                      Secure My Spot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>

                  {/* Footer */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      ⚡ 847 spots left • Launch Q1 2026
                    </p>
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
