import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-light tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#case-studies"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-light tracking-wide">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  SAAS Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-light tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-sm font-light tracking-wide">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-border/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm font-light text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
            </p>
            <p className="text-sm font-light text-muted-foreground">{siteConfig.company.location}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
