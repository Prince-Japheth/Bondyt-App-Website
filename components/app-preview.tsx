"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { ToggleButton } from "./toggle-button"

const avatars = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]

export function AppPreview() {
  return (
    <section className="py-24">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div variants={fadeInUp}>
            <ToggleButton options={["Bondies", "Merchant"]} />
          </motion.div>
          <br />

          <motion.div variants={fadeInUp} className="text-center">
            <h2
              className="mb-4 text-4xl"
              style={{
                fontWeight: 580,
                letterSpacing: "-0.05em",
              }}
            >
              Get bonded with people close to you.
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Get to meet various persons on Bondyt, people with different believes, culture, tradition, values,
              principles and characters. It is of a certainty that you will definitely find your person here on Bondyt.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-[2.5rem] sm:rounded-[2.5rem] md:rounded-[5.5rem] bg-gradient-to-r from-[#F878FF] to-[#CD8DFE]"
          >
            <div className="grid lg:gap-6 md:grid-cols-2 p-4 lg:p-0">
              {/* Left Side - App Interface */}
              <div className="lg:mt-10 lg:ml-10">
                <Image
                  src="/app-preview.png"
                  alt="App preview"
                  width={800}
                  height={600}
                  className="object-scale-down"
                />

              </div>

              {/* Right Side - Text Content */}
              <div className="flex flex-col text-white mt-20 lg:mr-8">
                <h3 className="mb-6 font-nohemi text-5xl font-medium leading-tight">
                  Every moment could be your Perfect match.
                </h3>
                <p className="text-lg">
                  Finding the right person does not have to be a hassle, Find people who share your in values, and turn
                  everyday encounter into meaningful connections. On Bondyt we make this process as easy as ABC.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
