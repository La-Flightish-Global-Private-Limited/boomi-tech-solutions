"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isVisible) return null
  if (!mounted) return <div className="h-[52px]" />

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center justify-center gap-3">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <p className="text-sm font-medium sm:text-base">
              <span className="hidden sm:inline">🚀 Coming Soon: </span>
              <strong className="font-bold">Interview.CV</strong> - AI-Powered Career Platform
              <span className="hidden md:inline"> | Launching Q1 2026</span>
            </p>
            <Link href="/products/interview-cv">
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="rounded-full p-1 hover:bg-white/20 transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
