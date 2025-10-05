import { siteConfig } from "@/lib/site-config"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6 text-base",
    md: "h-8 w-8 text-lg",
    lg: "h-12 w-12 text-2xl",
  }

  if (siteConfig.logo.useCustomLogo) {
    return (
      <div className={`relative ${sizeClasses[size]} ${className}`}>
        <Image
          src={siteConfig.logo.customLogoPath || "/placeholder.svg"}
          alt={`${siteConfig.company.name} Logo`}
          fill
          className="object-contain"
        />
      </div>
    )
  }

  // Default letter logo
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent ${sizeClasses[size]} ${className}`}
    >
      <span className={`font-mono font-bold text-primary-foreground ${sizeClasses[size]}`}>
        {siteConfig.logo.defaultLetter}
      </span>
    </div>
  )
}
