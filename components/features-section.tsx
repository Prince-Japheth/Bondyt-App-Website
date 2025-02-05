"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/animations"
import { DownloadButtons } from "@/components/download-buttons"

const features = [
  {
    title: "Go on dates",
    description: "With Bondyt, you can easily book a date with any of our merchants and just stroll in.",
    image:
      "apf1.png",
  },
  {
    title: "Read Books",
    description: "Bondyt offers a well curated library with various e-books for our Bondies.",
    image:
      "apf2.png",
  },
  {
    title: "Receive gifts",
    description: "Bondies can nw share gift with their potential match or anther Bondie of interest.",
    image:
      "apf3.png",
  },
  {
    title: "Go live",
    description: "You can share your moments with other Bondies and get cash rewards in the process.",
    image:
      "apf4.png",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-black py-24">
      <motion.div
        className="container mx-auto px-6 lg:px-28"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 variants={fadeInUp} className="mb-16 text-center text-5xl font-medium text-white">
          App's Features
        </motion.h2>

        <motion.div variants={staggerChildren} className="grid gap-24 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group overflow-hidden rounded-3xl lg:rounded-[50px] bg-[#212121] transition-all duration-300 hover:border-[#F878FF] hover:border-2 p-6 lg:p-10 lg:pb-20 pb-6"
              style={{ opacity: 1, willChange: "opacity" }}
            >

              <img
                alt={feature.title}
                loading="lazy"
                decoding="async"
                className="object-cover rounded-xl sm:rounded-3xl w-full h-40 mb-6"
                src={feature.image || "/placeholder.svg"}
                style={{ color: "transparent" }}
              />
              <div>
                <h3 className="mb-4 text-2xl font-medium text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <DownloadButtons />

      </motion.div>
    </section>
  )
}

