"use client"

import Link from "next/link"
import { Building2, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const solutions = [
  {
    title: "People Counting Solution",
    description: "Accurate and real-time people counting technology",
    href: "#people-counting",
    icon: "Users"
  },
  {
    title: "Occupancy Solution",
    description: "Comprehensive occupancy management system",
    href: "#occupancy",
    icon: "Building2"
  },
  {
    title: "Corporate Offices",
    description: "Workspace optimization and meeting room management",
    href: "#corporate",
    icon: "Building"
  },
  {
    title: "Retail & Shopping",
    description: "Customer flow analysis and store optimization",
    href: "#retail",
    icon: "ShoppingBag"
  },
  {
    title: "Healthcare",
    description: "Patient flow and facility management",
    href: "#healthcare",
    icon: "Stethoscope"
  },
  {
    title: "Education",
    description: "Campus occupancy and classroom management",
    href: "#education",
    icon: "GraduationCap"
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/optura-logo.svg"
            alt="OPTURA Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls="solutions-menu"
            >
              Solutions
              <ChevronDown 
                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="solutions-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="solutions-button"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50"
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      <div className="font-medium text-sm">{solution.title}</div>
                      <div className="text-xs text-gray-500">{solution.description}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#applications">
            Applications
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Demo
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  )
} 