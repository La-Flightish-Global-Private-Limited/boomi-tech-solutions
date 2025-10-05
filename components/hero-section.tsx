"use client"

import { contentConfig } from "@/lib/content-config"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Eye } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-8 text-balance leading-[1.1] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {contentConfig.hero.title}
        </h1>
        <p
          className={`text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty font-light transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {contentConfig.hero.subtitle}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Link href={contentConfig.hero.ctaLink}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 text-base px-8 py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              {contentConfig.hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href={contentConfig.hero.secondaryCtaLink}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-base px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm"
            >
              <Eye className="mr-2 h-5 w-5" />
              {contentConfig.hero.secondaryCtaText}
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 text-base px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm"
            >
              🚀 Startup Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
