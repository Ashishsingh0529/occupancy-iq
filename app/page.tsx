"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Users,
  Plane,
  Building,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ContactForm } from "./components/ContactForm"
import { Navigation } from "./components/Navigation"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Gradient background style
const gradientBg = "bg-gradient-to-r from-primary/30 via-primary/10 to-background"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        <section className={`w-full py-12 md:py-24 lg:py-32 bg-white`}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-4"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                  Intelligent People Counting & Occupancy Management
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empower your business with real-time occupancy data and analytics. Make informed decisions, optimize
                  space utilization, and enhance operational efficiency.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto lg:ml-auto flex w-full max-w-[600px] h-[400px] items-center justify-center rounded-xl bg-muted/50 backdrop-blur-sm p-4 shadow-xl"
              >
                <div className="w-full h-full rounded-lg bg-background/80 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/80" />
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                    <div className="absolute inset-0 bg-[url('/dashboard-preview.svg')] bg-cover bg-center opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2">
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

        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Solutions for Every Occupancy Need
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our solutions can help you manage occupancy effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <div id="people-counting" className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">People Counting Solution</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Accurate and real-time people counting technology to track foot traffic and occupancy levels across your facilities.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Real-time counting accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Multiple counting zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Historical data analysis</span>
                  </li>
                </ul>
              </div>
              <div id="occupancy" className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Occupancy Solution</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Comprehensive occupancy management system to optimize space utilization and ensure compliance with capacity limits.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Capacity monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Compliance reporting</span>
                  </li>
                </ul>
              </div>
              <div id="corporate" className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Corporate Offices</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Optimize workspace utilization, manage meeting room occupancy, and support hybrid work models with
                  real-time occupancy data.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Workspace optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Meeting room management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Hybrid work support</span>
                  </li>
                </ul>
              </div>
              <div id="retail" className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Retail & Shopping</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Enhance customer experience and optimize store operations with real-time foot traffic analytics and
                  occupancy monitoring.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Customer flow analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Store optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Queue management</span>
                  </li>
                </ul>
              </div>
              <div id="healthcare" className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Healthcare</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Manage patient flow, optimize waiting areas, and ensure compliance with healthcare facility
                  occupancy requirements.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Patient flow tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Waiting area optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Healthcare compliance</span>
                  </li>
                </ul>
              </div>
              <div id="education" className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Monitor classroom occupancy, manage campus facilities, and ensure optimal learning environments
                  with real-time data.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Classroom monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Campus facility management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Learning environment optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Occupancy Management?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team to schedule a personalized demo and consultation.
                </p>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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