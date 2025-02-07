"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AppPreview } from "@/components/app-preview"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { Testimonials } from "@/components/testimonials"
import { SecuritySection } from "@/components/security-section"
import { FAQSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"

export function HomeContent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SiteHeader />
          <HeroSection />
          <AppPreview />
          <FeaturesSection />
          <StatsSection />
          <Testimonials />
          <SecuritySection />
          <section className="py-24"
              style={{ backgroundColor: '#f3f5fc' }}>
            <motion.div
              className="container mx-auto px-4 lg:px-24"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <FAQSection />
            </motion.div>
          </section>
          <SiteFooter />
        </>
      )}
    </div>
  )
}
