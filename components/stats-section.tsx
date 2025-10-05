import { contentConfig } from "@/lib/content-config"

export function StatsSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">
            Numbers That Define Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {contentConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all"
            >
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-black mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
