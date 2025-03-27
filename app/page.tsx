"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary/5 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative z-10 px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-center lg:text-left"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
                >
                  Welcome to OPTURA
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
                >
                  Intelligent People Counting & Occupancy Management
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
                >
                  Optimize your space utilization with real-time occupancy data and advanced analytics. Make data-driven decisions for better resource management.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/demo">
                    <Button size="lg" className="w-full sm:w-auto">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Contact Sales
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="relative max-w-[600px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-3xl"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                    <Image
                      src="/dashboard-preview.svg"
                      alt="OPTURA Dashboard Preview"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4">
                      <p className="text-white text-sm">Interactive dashboard visualization</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-lg shadow-lg"
                  >
                    <BarChart3 className="h-6 w-6" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          className="scroll-mt-20 py-20 bg-gradient-to-b from-background to-primary/5"
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