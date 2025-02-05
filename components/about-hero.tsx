"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-24">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          variants={fadeInUp}
          className="mb-6 font-nohemi text-5xl leading-tight"
          style={{ fontWeight: '590' }} // Inline styling for font weight
        >
          We have provided one of the most
          <br />
          efficeint way to go about online Dating
        </motion.h1>

        <motion.p variants={fadeInUp} className="mx-auto mb-16 max-w-3xl text-gray-600">
          Steadily improving the importance of a healthy love bond in our societies, Bondyt is a platform that allows individuals to connect with each other, go out on dates and build a healthy relationship. Our aim is to bring back the love of old where people actually said the three words and meant it while literally stirring up butterflies in the belly of the recipients.
        </motion.p>

        <motion.p variants={fadeInUp} className="mx-auto mb-16 max-w-3xl text-gray-600">
          Bondyt platform is a love community boosting app, for people in search of soul mates, a special person, love, marriage or even best friends. We provide avenues for our users to send messages, make calls and oh yes! Have fun. At Bondyt Technologies, we believe in relaxation as such we have taken it up to not just create a platform to connect with people but a platform you can come to as a resting place. Not only do we value your commitment to ensuring you get the right person for you, we also ensure that the safety of every user is a priority. To do so we have put in place policies, standards and various features to checkmate and also safe guard our users.
        </motion.p>

        <motion.div variants={fadeInUp} className="relative mx-auto max-w-4xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Location-vpIMZ0i9ceT64yd6ifhK7xetYREEGF.png"
            alt="Global presence"
            width={1200}
            height={600}
            className="mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

