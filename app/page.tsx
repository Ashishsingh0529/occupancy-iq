"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ContactForm } from "./components/ContactForm"
import { Navigation } from "./components/Navigation"
import { DynamicContent } from "./components/DynamicContent"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className={`w-full py-16 md:py-24 lg:py-32 bg-white`}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                  Intelligent People Counting & Occupancy Management
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empower your business with real-time occupancy data and analytics. Make informed decisions, optimize
                  space utilization, and enhance operational efficiency.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button 
                    size="lg" 
                    className="bg-primary/20 hover:bg-primary/30 transition-all duration-300 shadow-lg cursor-not-allowed"
                    disabled
                  >
                    Dashboard Demo (Coming Soon)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/demo">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto lg:ml-auto flex w-full max-w-[600px] h-[400px] items-center justify-center rounded-xl bg-muted/50 backdrop-blur-sm p-4 shadow-xl"
              >
                <div className="w-full h-full rounded-lg bg-background/80 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/80" />
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                    <div className="absolute inset-0 bg-[url('/dashboard-preview.svg')] bg-cover bg-center opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <motion.div
                          animate={{ 
                            y: [0, -10, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 3,
                            ease: "easeInOut" 
                          }}
                        >
                          <BarChart3 className="mx-auto h-16 w-16 text-primary" />
                        </motion.div>
                        <p className="text-sm text-muted-foreground">Interactive dashboard visualization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section 
          id="features" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Features of Our Solution
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Discover the key features of our intelligent people counting and occupancy management solution.
                </p>
              </div>
            </motion.div>
            <DynamicContent />
          </div>
        </section>

        <section 
          id="people-counting" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  People Counting
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Accurate People Counting
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Learn about our advanced people counting technology and its benefits.
                </p>
              </div>
            </motion.div>
            <DynamicContent />
          </div>
        </section>

        <section 
          id="occupancy" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Occupancy Management
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Effective Occupancy Management
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Discover how our solution can help you manage occupancy effectively.
                </p>
              </div>
            </motion.div>
            <DynamicContent />
          </div>
        </section>

        <section 
          id="corporate" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Corporate
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Corporate Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Learn about our corporate solutions for managing occupancy effectively.
                </p>
              </div>
            </motion.div>
            <DynamicContent />
          </div>
        </section>

        <section 
          id="retail" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Retail
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Retail Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Discover how our retail solutions can help you manage occupancy effectively.
                </p>
              </div>
            </motion.div>
            <DynamicContent />
          </div>
        </section>

        <section 
          id="healthcare" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Healthcare
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Healthcare Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Learn about our healthcare solutions for managing occupancy effectively.
                </p>
              </div>
            </motion.div>
            <DynamicContent />
          </div>
        </section>

        <section 
          id="education" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 sm:px-6 md:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Education
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Education Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Discover how our education solutions can help you manage occupancy effectively.
                </p>
              </div>
            </motion.div>
            <DynamicContent />
          </div>
        </section>

        <section 
          id="contact" 
          className="scroll-mt-20 py-16"
        >
          <div className="container px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12 md:mb-16 lg:mb-20"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Ready to Transform Your Occupancy Management?
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                  Get in touch with our team to schedule a personalized demo and consultation.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto max-w-lg py-12"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 OPTURA. All rights reserved.</p>
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