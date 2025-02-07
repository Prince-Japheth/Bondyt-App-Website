"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { useState, useEffect } from "react"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    number: "100+",
    label: "Life long relationships",
  },
  {
    number: "25k",
    label: "Bonded",
  },
  {
    number: "50+",
    label: "Countries",
  },
]

export function StatsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-12 md:py-24" ref={ref}>
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 variants={fadeInUp} className="mb-4 font-nohemi text-3xl font-medium sm:text-4xl md:text-5xl">
          See how far Bondyt has come
        </motion.h2>

        <motion.p variants={fadeInUp} className="mx-auto mb-12 sm:mb-16 max-w-lg sm:max-w-2xl lg:max-w-3xl text-gray-600">
          What started out as an idea, and later came to be a reality after lots of research and effort put in, with
          God's grace and a dedicated and effective team, Bondyt has scaled to reach this height.
        </motion.p>

        <motion.div variants={staggerChildren} className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:px-40">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <p className="mb-2 font-nohemi text-3xl sm:text-4xl font-bold text-[#F878FF]">
                {inView ? (
                  <CountUp
                    end={parseInt(stat.number.replace("+", ""))}
                    suffix={stat.number.includes("+") ? "+" : stat.number.includes("k") ? "k" : ""}
                  />
                ) : (
                  <span>0</span>
                )}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}