"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sparkles, TrendingUp, Users, Rocket } from "lucide-react"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(true)

  useEffect(() => {
    const checkAnnouncement = () => {
      const bar = document.getElementById('announcement-bar')
      setAnnouncementVisible(!!bar)
    }
    
    checkAnnouncement()
    const interval = setInterval(checkAnnouncement, 100)
    return () => clearInterval(interval)
  }, [])

  const navTop = announcementVisible ? 'top-[44px] sm:top-[52px]' : 'top-0'
  const menuTop = announcementVisible ? 'top-[108px] sm:top-[116px]' : 'top-16'

  return (
    <nav className={`fixed ${navTop} left-0 right-0 z-40 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-base sm:text-lg font-semibold tracking-tight text-foreground whitespace-nowrap">
            <span className="hidden xs:inline">Boomi Tech Solutions</span>
            <span className="xs:hidden">Boomi Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground outline-none">
                Products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuItem asChild>
                  <Link href="/products/interview-cv" className="flex items-start gap-3 p-3 cursor-pointer">
                    <Sparkles className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Interview.CV</div>
                      <div className="text-xs text-muted-foreground">AI-Powered Career Platform</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/#investor" className="text-sm font-medium text-green-600 transition-colors hover:text-green-700 flex items-center gap-1">
              💼 For Investors
            </Link>
            <Link href="/#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link
              href="/#case-studies"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Work
            </Link>
            <Button
              size="sm"
              className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/90 font-medium"
              asChild
            >
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`fixed left-0 right-0 ${menuTop} bg-background border-t border-border py-4 md:hidden shadow-lg transition-all duration-300`} style={{maxHeight: announcementVisible ? 'calc(100vh - 116px)' : 'calc(100vh - 64px)', overflowY: 'auto'}}>
            <div className="flex flex-col gap-6 px-6">
              <Link
                href="/products/interview-cv"
                className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                Interview.CV
              </Link>
              <div className="border-t border-border my-3" />
              <div className="text-xs font-semibold text-muted-foreground mb-2 px-1">FOR INVESTORS</div>
              <Link
                href="/products/interview-cv#investors"
                className="text-sm text-green-600 transition-colors hover:text-green-700 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <TrendingUp className="h-4 w-4" />
                Investment Opportunity
              </Link>
              <Link
                href="/products/interview-cv#investors"
                className="text-sm text-purple-600 transition-colors hover:text-purple-700 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                Seeking Co-Founders
              </Link>
              <Link
                href="#contact"
                className="text-sm text-orange-600 transition-colors hover:text-orange-700 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Rocket className="h-4 w-4" />
                Seeking Incubation
              </Link>
              <div className="border-t border-border my-3" />
              <Link
                href="/#services"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#case-studies"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Button
                size="sm"
                className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium"
                asChild
              >
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
