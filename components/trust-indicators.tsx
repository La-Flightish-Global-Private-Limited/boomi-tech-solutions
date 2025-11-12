"use client"

import { contentConfig } from "@/lib/content-config"
import { Badge } from "@/components/ui/badge"

export function TrustIndicators() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 px-4 py-1">
            Technology Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {contentConfig.trustedBy.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {contentConfig.trustedBy.subtitle}
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 text-sm text-gray-500 font-medium">Cloud & Enterprise Platforms</span>
          </div>
        </div>
        
        <div className="mt-12 overflow-hidden">
          <div className="flex space-x-6 animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...contentConfig.trustedBy.companies, ...contentConfig.trustedBy.companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-48"
              >
                <div className="flex items-center justify-center h-12">
                  <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <style jsx global>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Certified experts in modern cloud technologies</span>
          </p>
        </div>
      </div>
    </section>
  )
}