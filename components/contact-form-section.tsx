"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { siteConfig, getFullAddress } from "@/lib/site-config"

export function ContactFormSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      newsletter: formData.get("newsletter") === "on",
      timestamp: new Date().toISOString(),
    }

    try {
      // Call the API route to handle form submission
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        })
        // Reset form
        e.currentTarget.reset()
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send message")
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message. Please try again or email us directly."
      setErrorMessage(message)
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Let's Start a Conversation
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Ready to transform your business with cutting-edge technology? Fill out the form and our team will reach
              out within 24 hours to discuss your project.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email Us</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Call Us</h3>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">{getFullAddress()}</p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/10 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-primary">Thank you for reaching out!</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We've received your message and will respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl border border-border/40 bg-card p-8">
            <div role="status" aria-live="polite" className="sr-only">
              {errorMessage}
            </div>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input id="name" name="name" placeholder="John Doe" required />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" required />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" placeholder="Your Company Inc." />
              </div>

              {/* Service Interest */}
              <div className="space-y-2">
                <Label htmlFor="service">
                  Service Interest <span className="text-destructive">*</span>
                </Label>
                <Select name="service" required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-development">AI Product Development</SelectItem>
                    <SelectItem value="cloud-infrastructure">Multi-Cloud Infrastructure</SelectItem>
                    <SelectItem value="saas-development">SAAS Application Development</SelectItem>
                    <SelectItem value="mainframe-modernization">Mainframes & Modernization</SelectItem>
                    <SelectItem value="devops">DevOps & CI/CD</SelectItem>
                    <SelectItem value="api-architecture">API First Architecture</SelectItem>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="custom-erp">Custom ERP Solutions</SelectItem>
                    <SelectItem value="manpower-augmentation">Manpower Augmentation</SelectItem>
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label htmlFor="budget">Project Budget</Label>
                <Select name="budget">
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k-plus">$250,000+</SelectItem>
                    <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Project Details <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  required
                />
              </div>

              {/* Newsletter */}
              <div className="flex items-start gap-2">
                <Checkbox id="newsletter" name="newsletter" />
                <Label htmlFor="newsletter" className="text-sm font-normal leading-relaxed text-muted-foreground">
                  I'd like to receive updates about new services, case studies, and technology insights.
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="text-cyan-400 hover:underline">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-cyan-400 hover:underline">
                  terms of service
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
