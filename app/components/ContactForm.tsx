"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

type FormData = {
  company: string
  email: string
  phone: string
  message: string
}

type FormErrors = {
  company?: string
  email?: string
  phone?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    email: "",
    phone: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (formData.phone && !/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrors({})

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ company: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }))
    }
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="grid gap-4 p-6 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true }}
      aria-label="Contact form"
    >
      <div className="grid gap-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company Name <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">required</span>
        </label>
        <input
          id="company"
          value={formData.company}
          onChange={handleChange}
          className={`flex h-10 w-full rounded-md border ${
            errors.company ? 'border-red-500' : 'border-input'
          } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          placeholder="Enter your company name"
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company && (
          <p id="company-error" className="text-sm text-red-500" role="alert">
            {errors.company}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">required</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`flex h-10 w-full rounded-md border ${
            errors.email ? 'border-red-500' : 'border-input'
          } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          placeholder="Enter your email"
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className={`flex h-10 w-full rounded-md border ${
            errors.phone ? 'border-red-500' : 'border-input'
          } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          placeholder="Enter your phone number"
          disabled={isSubmitting}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-red-500" role="alert">
            {errors.phone}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">required</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={`flex min-h-[100px] w-full rounded-md border ${
            errors.message ? 'border-red-500' : 'border-input'
          } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          placeholder="Tell us about your requirements"
          required
          disabled={isSubmitting}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : submitStatus === "success" ? (
          "Message Sent!"
        ) : submitStatus === "error" ? (
          "Error - Try Again"
        ) : (
          "Submit Inquiry"
        )}
      </Button>
      {submitStatus === "success" && (
        <p className="text-sm text-green-600 text-center" role="alert">
          Thank you for your message. We'll get back to you soon!
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-sm text-red-500 text-center" role="alert">
          There was an error sending your message. Please try again.
        </p>
      )}
    </motion.form>
  )
}