"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"

export function MissionVision() {
  return (
    <section className="bg-black py-24">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <h2 className="mb-6 font-nohemi text-4xl font-medium text-white">Our mission</h2>
            <p className="text-gray-400">
              At Bondyt, our mission is to empower individuals to forge authentic, meaningful relationships by providing a secure, innovative, and inclusive platform. We leverage advanced technology to create personalized experiences that transcend traditional digital dating, ensuring every interaction is built on trust, respect, and genuine connection. Our commitment is to foster a vibrant community where diversity is celebrated, and every user is inspired to pursue relationships that enrich their lives and transform their worlds.

              <br />

            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="mb-6 font-nohemi text-4xl font-medium text-white">Our Vision</h2>
            <p className="text-gray-400">
              At Bondyt, we envision a world where authentic connections transcend digital boundaries, empowering individuals to discover meaningful relationships and lifelong friendships. Our platform is dedicated to creating a safe, innovative, and inclusive space where every interaction is a step toward building genuine bonds and enriching lives. Through advanced technology and heartfelt experiences, we strive to redefine the digital dating landscape, connecting hearts and minds for a brighter, more connected future.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
