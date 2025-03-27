"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Building2, Building, ShoppingBag, Stethoscope, GraduationCap, CheckCircle } from "lucide-react"

interface SolutionCard {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

const solutions: SolutionCard[] = [
  {
    id: "people-counting",
    title: "People Counting Solution",
    description: "Accurate and real-time people counting technology to track foot traffic and occupancy levels across your facilities.",
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    features: ["Real-time counting accuracy", "Multiple counting zones", "Historical data analysis"]
  },
  {
    id: "occupancy",
    title: "Occupancy Solution",
    description: "Comprehensive occupancy management system to optimize space utilization and ensure compliance with capacity limits.",
    icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    features: ["Capacity monitoring", "Automated alerts", "Compliance reporting"]
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    description: "Optimize workspace utilization, manage meeting room occupancy, and support hybrid work models with real-time occupancy data.",
    icon: <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    features: ["Workspace optimization", "Meeting room management", "Hybrid work support"]
  },
  {
    id: "retail",
    title: "Retail & Shopping",
    description: "Enhance customer experience and optimize store operations with real-time foot traffic analytics and occupancy monitoring.",
    icon: <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    features: ["Customer flow analysis", "Store optimization", "Queue management"]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Manage patient flow, optimize waiting areas, and ensure compliance with healthcare facility occupancy requirements.",
    icon: <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    features: ["Patient flow tracking", "Waiting area optimization", "Healthcare compliance"]
  },
  {
    id: "education",
    title: "Education",
    description: "Monitor classroom occupancy, manage campus facilities, and ensure optimal learning environments with real-time data.",
    icon: <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    features: ["Classroom monitoring", "Campus facility management", "Learning environment optimization"]
  }
]

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

export function DynamicContent() {
  const [isLoading, setIsLoading] = useState(true)
  const [visibleSolutions, setVisibleSolutions] = useState<SolutionCard[]>([])

  useEffect(() => {
    // Simulate dynamic loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      setVisibleSolutions(solutions)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="mx-auto grid gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
    >
      {visibleSolutions.map((solution, index) => (
        <motion.div
          key={solution.id}
          id={solution.id}
          variants={fadeIn}
          className="rounded-xl border bg-background p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[300px]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-primary/10 p-3">
              {solution.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold leading-tight">{solution.title}</h3>
          </div>
          <p className="text-base text-muted-foreground mb-8 flex-grow">
            {solution.description}
          </p>
          <ul className="grid gap-4">
            {solution.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3 text-base">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
} 