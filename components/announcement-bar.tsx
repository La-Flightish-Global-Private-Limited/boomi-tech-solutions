"use client"

import Link from "next/link"
import { Sparkles, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const closed = sessionStorage.getItem('announcement-closed')
    if (closed) setIsVisible(false)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('announcement-closed', 'true')
  }

  if (!isVisible) return null
  if (!mounted) return null

  return (
    <div id="announcement-bar" className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-3 py-2 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3 min-w-0">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse flex-shrink-0" />
            <p className="text-xs sm:text-sm font-medium truncate">
              <span className="hidden sm:inline">🚀 </span>
              <strong className="font-bold">Interview.CV</strong>
              <span className="hidden xs:inline"> - AI Career Platform</span>
              <span className="hidden md:inline"> | Q1 2026</span>
            </p>
            <Link href="/products/interview-cv" className="flex-shrink-0">
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold h-7 px-2 sm:h-8 sm:px-3 text-xs sm:text-sm"
              >
                <span className="hidden xs:inline">Join </span>Waitlist
              </Button>
            </Link>
          </div>
          <button
            onClick={handleClose}
            className="rounded-full p-1 hover:bg-white/20 transition-colors flex-shrink-0"
            aria-label="Close announcement"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
