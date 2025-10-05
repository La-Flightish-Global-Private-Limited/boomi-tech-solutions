import { type NextRequest, NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/rate-limit"
import { sendContactEmail } from "@/lib/email"

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const data = await request.json()

    if (!data.name || !data.email || !data.service || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: data.phone ? sanitizeInput(data.phone) : undefined,
      company: data.company ? sanitizeInput(data.company) : undefined,
      service: sanitizeInput(data.service),
      budget: data.budget ? sanitizeInput(data.budget) : undefined,
      message: sanitizeInput(data.message),
      newsletter: data.newsletter,
      timestamp: new Date().toISOString(),
    }

    console.log("New Lead Received:", sanitizedData)

    await sendContactEmail(sanitizedData)

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. We'll be in touch soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
