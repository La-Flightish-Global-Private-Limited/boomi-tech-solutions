'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="text-center max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-red-100 p-6">
            <AlertTriangle className="h-16 w-16 text-red-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Oops! Something went wrong</h2>
        <p className="mt-4 text-lg text-gray-600">
          We're sorry for the inconvenience. An unexpected error occurred.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
            <p className="text-sm font-mono text-gray-800">{error.message}</p>
          </div>
        )}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg" className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          If this problem persists, please{' '}
          <Link href="/#contact" className="text-blue-600 hover:underline">
            contact our support team
          </Link>
        </p>
      </div>
    </div>
  )
}
