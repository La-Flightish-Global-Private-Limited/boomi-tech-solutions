"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

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
