import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, role, source } = body

    if (!email || !role) {
      return NextResponse.json({ error: "Email and role are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    await sendEmail({
      to: email,
      subject: "Welcome to Interview.CV Waitlist! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .badge { display: inline-block; background: #fbbf24; color: #000; padding: 8px 16px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
              .perks { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .perk-item { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
              .perk-item:last-child { border-bottom: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Welcome to Interview.CV!</h1>
                <p>You're on the exclusive waitlist</p>
              </div>
              <div class="content">
                <p>Hi there,</p>
                <p>Thank you for joining the <strong>Interview.CV</strong> waitlist!</p>
                <div class="badge">💎 FOUNDING MEMBER STATUS CONFIRMED</div>
                <div class="perks">
                  <h3>Your Exclusive Perks:</h3>
                  <div class="perk-item"><strong>🎁 50% OFF Forever</strong><br>Save $500+/year</div>
                  <div class="perk-item"><strong>👑 Founding Member Badge</strong><br>Exclusive status</div>
                  <div class="perk-item"><strong>⚡ Priority Beta Access</strong><br>First to try new features</div>
                  <div class="perk-item"><strong>👥 VIP Support</strong><br>Direct line to our team</div>
                </div>
                <h3>What's Next?</h3>
                <ul>
                  <li>Launching in <strong>Q1 2026</strong></li>
                  <li>Early access before public launch</li>
                  <li>Regular updates on progress</li>
                </ul>
                <p><strong>The Interview.CV Team</strong><br>Boomi Tech Solutions</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    await sendEmail({
      to: "mydearkarthikeyan@gmail.com",
      subject: `New Waitlist Signup: ${email}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Source:</strong> ${source || 'floating-widget'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
