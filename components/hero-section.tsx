"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { HeroDownloadButtons } from "@/components/download-buttons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Ellipse Background */}
      <div
        className="absolute left-1/2 top-[718px] -translate-x-1/2"
        style={{
          width: "100%",
          height: "100px",
          background: "#F878FF",
          borderRadius: "1000",
          filter: "blur(170px)",
        }}
      />

      <motion.div
        className="container relative mx-auto px-4 py-20 text-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          variants={fadeInUp}
          className="mx-auto text-center text-4xl sm:text-6xl lg:text-[64px] leading-tight sm:leading-[64px] lg:leading-[72px] tracking-[-0.03em]"
          style={{
            maxWidth: "95%", // Slightly wider on mobile
            opacity: 0,
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            fontWeight: 580,
          }}
        >
          Every moment could be
          <br />
          your Perfect match.
        </motion.h1>
        <motion.div variants={fadeInUp} className="mb-12 mt-6 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" fill="currentColor" />
            <span>Create an account</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" fill="currentColor" />
            <span>Find your person</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" fill="currentColor" />
            <span>Get bonded</span>
          </div>
        </motion.div>

        <HeroDownloadButtons />

        <motion.div variants={fadeInUp} className="relative mx-auto max-w-md">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427321062-MLZ0OdXrqEsArk3i8R9SGvOuQOJjsI.png"
            alt="Couple illustration"
            width={400}
            height={400}
            className="mx-auto"
          />
          <div className="absolute bottom-8 right-16 translate-x-1/2 translate-y-[-90%]" style={{ marginRight: -205 }}>
            <div
              className="flex items-center justify-center rounded-full"
              style={{ backgroundColor: "#f0dcfe", padding: 40 }}
            >
              <Image src="/pinkwhats.png" alt="WhatsApp" width={73} height={73} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

