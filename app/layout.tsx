import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Suspense } from "react"
import { seoConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.company.name }],
  creator: seoConfig.company.name,
  publisher: seoConfig.company.name,
  metadataBase: new URL(seoConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.openGraph.image.url,
        width: seoConfig.openGraph.image.width,
        height: seoConfig.openGraph.image.height,
        alt: seoConfig.openGraph.image.alt,
      },
    ],
    locale: seoConfig.openGraph.locale,
    type: seoConfig.openGraph.type,
  },
  twitter: {
    card: seoConfig.twitter.card,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: [seoConfig.twitter.image],
  },
  robots: seoConfig.robots,
  verification: {
    google: seoConfig.verification.google,
    // yandex: seoConfig.verification.yandex,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground">
          Skip to main content
        </a>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
