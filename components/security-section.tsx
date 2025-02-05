"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { DownloadButtons } from "@/components/download-buttons"

const securityFeatures = [
  {
    title: "Secure Infrastructure",
    description:
      "We utilize industry-leading security protocols and host your data in secure, encrypted cloud environments.",
  },
  {
    title: "Personal Protective Detail",
    description: "We have partnered with various private security agencies, to ensure your safety while out on dates.",
  },
  {
    title: "Data Privacy Compliance",
    description:
      "We adhere to all relevant data privacy regulations and are committed to protecting your information in accordance with the highest standards.",
  },
]

export function SecuritySection() {
  return (
    <section className="bg-black py-12 md:py-24">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="font-nohemi text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              Your Security,
              <br />
              Guaranteed.
            </h2>
            <p className="text-gray-400">
              We are committed to protecting you and your personal information. We understand the importance of trust,
              and we take your privacy seriously.
            </p>
          </motion.div>

          <motion.div variants={staggerChildren} className="space-y-6 md:space-y-8">
            {securityFeatures.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="mb-2 font-nohemi text-lg text-white sm:text-xl">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 md:mt-16">
          <DownloadButtons />
        </div>
      </motion.div>
    </section>
  )
}
