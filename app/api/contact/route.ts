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

    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string
    const phone = formData.get('phone') as string | null
    const company = formData.get('company') as string | null
    const budget = formData.get('budget') as string | null
    const newsletter = formData.get('newsletter') === 'true'
    const file = formData.get('attachment') as File | null

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Validate file if present
    let fileData: { name: string; size: number; type: string; buffer: Buffer } | undefined
    if (file && file.size > 0) {
      const maxSize = 10 * 1024 * 1024 // 10MB
      if (file.size > maxSize) {
        return NextResponse.json({ error: "File size exceeds 10MB limit" }, { status: 400 })
      }
      
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'image/png', 'image/jpeg']
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json({ error: "Invalid file type. Allowed: PDF, DOC, DOCX, TXT, PNG, JPG" }, { status: 400 })
      }

      const buffer = Buffer.from(await file.arrayBuffer())
      fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        buffer
      }
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : undefined,
      company: company ? sanitizeInput(company) : undefined,
      service: sanitizeInput(service),
      budget: budget ? sanitizeInput(budget) : undefined,
      message: sanitizeInput(message),
      newsletter,
      timestamp: new Date().toISOString(),
      attachment: fileData
    }

    console.log("New Lead Received:", { ...sanitizedData, attachment: fileData ? { name: fileData.name, size: fileData.size } : undefined })

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
