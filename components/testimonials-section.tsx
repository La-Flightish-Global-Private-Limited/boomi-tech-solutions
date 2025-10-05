import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { contentConfig } from "@/lib/content-config"

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contentConfig.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 p-8 hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                    aria-label="Star rating"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback className="bg-gray-900 text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-900">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
