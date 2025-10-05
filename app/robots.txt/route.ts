export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boomi.tech'
  
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
