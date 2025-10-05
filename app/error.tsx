'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Something went wrong!</h2>
        <p className="mt-2 text-muted-foreground">
          We're sorry for the inconvenience. Please try again.
        </p>
        <div className="mt-8">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}
