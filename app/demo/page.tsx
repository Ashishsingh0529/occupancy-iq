"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Building2, Users, Clock, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "../components/ContactForm"

const features = [
  {
    icon: Users,
    title: "Real-time People Counting",
    description: "Accurate and instant occupancy tracking across your facilities"
  },
  {
    icon: Clock,
    title: "Peak Hours Analysis",
    description: "Identify and optimize your busiest periods"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights and reporting capabilities"
  }
]

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Request a Demo
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Experience OccupancyIQ in Action
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Schedule a personalized demo to see how our occupancy management solution can transform your business operations.
                  </p>
                </div>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="font-semibold mb-2">What to expect in your demo:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Personalized walkthrough of key features</li>
                    <li>• Real-world use cases and examples</li>
                    <li>• Q&A session with our experts</li>
                    <li>• Custom solution recommendations</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg mx-auto"
              >
                <div className="rounded-xl border bg-background p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Schedule Your Demo</h2>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 OccupancyIQ. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
} 