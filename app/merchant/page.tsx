"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import Image from "next/image"
import { FAQSection } from "@/components/faq-section"
import { HeroDownloadButtons } from "@/components/download-buttons"
import Marquee from "react-fast-marquee"
import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"

const partners = [
  "/cocacola.png",
  "/kpmg.png",
  "/mtn.png",
  "/stanbic.png",
  "/sterling.png",
  "/terra.png",
  "/zenith.png",
]

const services = [
  {
    category: "Locations",
    title: "Restaurants, Hotels, clubs, bars, etc",
    description:
      "Restaurants, Night clubs, bars lets can now list their businesses on our Bondyt merchant app and accept bookings while tracking progress as well.",
    image: "/si1.png",
    align: "left",
  },
  {
    category: "Store",
    title: "Provide e-commerce services on Bondyt",
    description:
      "List your products on our platform and it won't be long till our Bondies to buy from and get it directly delivered to them while you make your gift.",
    image: "/si2.png",
    align: "right",
  },
  {
    category: "Books",
    title: "Grow an audience for your books on Bondyt",
    description:
      "Authors can now list their books on Bondyt and get a direct audience to interact with their books. The author can also get direct feedback from readers.",
    image: "/si3.png",
    align: "left",
  },
  {
    category: "Events",
    title: "Sell tickets to your events directly on Bondyt",
    description:
      "Got an event coming to your own small audience? Our Bondies are sure fun loving people, bring your events to Bondyt and get more audience.",
    image: "/si4.png",
    align: "right",
  },
  {
    category: "Security",
    title: "Provide security services on Bondyt",
    description:
      "At Bondyt we take security serious as such, we have made provision for private security agencies to offer their services to our Bondies.",
    image: "/si5.png",
    align: "left",
  },
]

export default function MerchantPage() {
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

          <motion.main
            className="py-12"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.section variants={fadeInUp} className="container mx-auto px-6 grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="mb-4 font-nohemi text-3xl font-extrabold md:text-4xl">List your business on Bondyt</h1>
                <p className="mb-6 text-gray-600">
                  You can place your business on the Bondyt app so our Bondies can patronize you as well. Download our
                  merchant app today!
                </p>
                <div style={{ width: "fit-content" }}>
                  <HeroDownloadButtons />
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/merchanthero.png"
                  alt="Merchant preview"
                  width={500}
                  height={300}
                  className="rounded-lg mx-auto lg:ml-auto lg:mr-0"
                />
              </div>
            </motion.section>

            <motion.section variants={fadeInUp} className="container mx-auto px-6 my-24 border-t border-b">
              <p className="text-center text-sm mt-8" style={{ color: '#595757' }}>Businesses who trust us</p>
              <Marquee className="grid grid-cols-3 md:grid-cols-6">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center p-6 lg:p-20 grayscale transition hover:grayscale-0">
                    <Image
                      src={partner || "/placeholder.svg"}
                      alt={`Partner ${index + 1}`}
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                ))}
              </Marquee>
            </motion.section>

            <motion.section variants={fadeInUp} className="container mx-auto px-6 mb-40 text-center">
              <h1 className="mb-4 font-nohemi text-3xl font-extrabold md:text-4xl">We have a variety of services for merchants</h1>
              <p className="mx-auto max-w-2xl text-gray-600">
                At Bondyt, we have built provision for merchants to offer different services to our Bondies. Below are some
                of the different categories of services offered.
              </p>
            </motion.section>

            <motion.section variants={staggerChildren} className="container mx-auto px-6 space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`pb-20 border-b-2 grid gap-8 md:grid-cols-2 md:items-center ${service.align === "left" ? "md:grid-flow-dense" : ""
                    }`}
                >
                  <div className={`${service.align === "left" ? "md:col-start-2" : ""}`}>
                    <p className="text-[#F878FF] mb-2">{service.category}</p>
                    <h1 className="mb-4 font-nohemi text-2xl font-extrabold md:text-3xl">{service.title}</h1>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className={`${service.align === "right" ? "justify-self-end" : ""}`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.section>

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
          </motion.main>

          <SiteFooter />
        </>
      )}
    </div>
  )
}
