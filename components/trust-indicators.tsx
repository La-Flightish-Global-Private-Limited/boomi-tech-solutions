import { contentConfig } from "@/lib/content-config"

export function TrustIndicators() {
  return (
    <section className="border-y border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">{contentConfig.trustedBy.title}</h2>
          <p className="text-gray-600">{contentConfig.trustedBy.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {contentConfig.trustedBy.companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center text-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-medium text-gray-700 hover:text-black transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
