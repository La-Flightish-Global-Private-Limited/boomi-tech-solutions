"use client"

import { contentConfig } from "@/lib/content-config"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Cloud, Brain, Code, Server, Shield, TrendingUp, CheckCircle2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap = {
  Cloud,
  Brain,
  Code,
  Server,
  Shield,
  TrendingUp,
}

export function TrainingSection() {
  return (
    <section id="training" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 px-4 py-1">
            <GraduationCap className="h-4 w-4 inline mr-2" />
            Professional Training
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {contentConfig.training.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {contentConfig.training.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-10">
          {contentConfig.training.categories.map((category, idx) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap]
            return (
              <Card key={idx} className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                </div>
                <div className="space-y-3">
                  {category.courses.map((course, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">{course.name}</p>
                        <p className="text-sm text-gray-600">{course.level} • {course.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">What You Get</h3>
              <ul className="space-y-3">
                {contentConfig.training.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl mb-6">Ready to upskill your team?</p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                View Training Schedule
              </Button>
              <p className="text-sm mt-4 opacity-90">
                {contentConfig.training.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
