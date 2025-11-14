export async function sendEmail(data: {
  to: string
  subject: string
  html: string
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'contact@boomitech.com',
        to: data.to,
        subject: data.subject,
        html: data.html,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export async function sendContactEmail(data: {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  budget?: string
  message: string
  attachment?: { name: string; size: number; type: string; buffer: Buffer }
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'contact@boomitech.com',
        to: process.env.EMAIL_TO || 'admin@boomitech.com',
        subject: `Boomi Tech Form - New Contact Form Submission - ${data.service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <p><strong>Service:</strong> ${data.service}</p>
          ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
          ${data.attachment ? `<p><strong>Attachment:</strong> ${data.attachment.name} (${(data.attachment.size / 1024).toFixed(2)} KB)</p>` : ''}
        `,
        ...(data.attachment && {
          attachments: [
            {
              filename: data.attachment.name,
              content: data.attachment.buffer.toString('base64'),
            },
          ],
        }),
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
