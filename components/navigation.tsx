"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sparkles, TrendingUp, Users, Rocket } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Boomi Tech Solutions
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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground outline-none">
                Investors
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <DropdownMenuItem asChild>
                  <Link href="/products/interview-cv#investors" className="flex items-start gap-3 p-3 cursor-pointer">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Investment Opportunity</div>
                      <div className="text-xs text-muted-foreground">$200B+ market, AI-powered platform</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/interview-cv#investors" className="flex items-start gap-3 p-3 cursor-pointer">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Seeking Co-Founders</div>
                      <div className="text-xs text-muted-foreground">US market expertise needed</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/interview-cv#investors" className="flex items-start gap-3 p-3 cursor-pointer">
                    <Rocket className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Incubator Programs</div>
                      <div className="text-xs text-muted-foreground">Y Combinator, Techstars ready</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-6 md:hidden">
            <div className="flex flex-col gap-6">
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
                href="/products/interview-cv#investors"
                className="text-sm text-orange-600 transition-colors hover:text-orange-700 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Rocket className="h-4 w-4" />
                Incubator Programs
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
