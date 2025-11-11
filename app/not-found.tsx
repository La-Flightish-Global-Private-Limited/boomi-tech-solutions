import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '404 - Page Not Found | Boomi Tech Solutions',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">404</h1>
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Don't worry, even the best explorers get lost sometimes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Back Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#contact">
              <Search className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500">Popular pages:</p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <Link href="/#services" className="text-blue-600 hover:underline text-sm">Services</Link>
            <Link href="/#case-studies" className="text-blue-600 hover:underline text-sm">Case Studies</Link>
            <Link href="/#about" className="text-blue-600 hover:underline text-sm">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
