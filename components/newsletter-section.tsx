"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        })
        setEmail("")
      } else {
        throw new Error("Subscription failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-600 text-pretty">
            Get the latest insights on AI, cloud technology, and digital transformation delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-black"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-black hover:bg-gray-800 text-white px-8 whitespace-nowrap"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Join 5,000+ tech leaders. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  )
}
