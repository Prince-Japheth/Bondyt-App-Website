"use client"

import { SiteHeader } from "@/components/site-header"
import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { StatsSection } from "@/components/stats-section"
import { FAQSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"

export function AboutContent() {
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
          <AboutHero />
          <MissionVision />
          <StatsSection />
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
