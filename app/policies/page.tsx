"use client"

import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { cn } from "@/lib/utils"

const policies = [
  {
    id: "anti-porn",
    title: "Anti-porn",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Justo nec ultrices dui sapien eget mi proin sed libero. Ante in
    nibh mauris cursus mattis molestie a iaculis. Amet volutpat
    consequat mauris nunc. Sem fringilla ut morbi tincidunt augue
    interdum velit euismod.

    Viverra orci sagittis eu volutpat odio. Eu scelerisque felis
    imperdiet proin fermentum leo vel orci porta. Lorem dolor sed
    viverra ipsum nunc aliquet bibendum enim. Feugiat scelerisque
    varius morbi enim nunc faucibus a pellentesque. Malesuada
    proin libero nunc consequat interdum varius. Mauris sit amet
    massa vitae tortor condimentum lacinia quis.`,
  },
  {
    id: "anti-trafficking",
    title: "Anti-trafficking",
    content: `Fringilla phasellus faucibus scelerisque eleifend donec pretium
    vulputate sapien nec. Ut sem nulla pharetra diam sit amet nisl
    suscipit. Mus mauris vitae ultricies leo integer malesuada nunc.
    Et leo duis ut diam quam nulla porttitor. Amet volutpat consequat
    mauris nunc congue nisi vitae suscipit.`,
  },
  {
    id: "privacy-policy",
    title: "Privacy policy",
    content: `Lacus sed viverra tellus in hac habitasse platea dictumst.
    Malesuada nunc vel risus commodo. In mollis nunc sed id
    semper risus in hendrerit. Amet nulla facilisi morbi tempus iaculis
    urna. Pellentesque habitant morbi tristique senectus et netus et
    malesuada. Tristique nulla aliquet enim tortor at auctor urna
    nunc id. Est ultricies integer quis auctor elit sed vulputate.`,
  },
  {
    id: "terms-and-conditions",
    title: "Terms and conditions",
    content: `Fringilla phasellus faucibus scelerisque eleifend donec pretium
    vulputate sapien nec. Ut sem nulla pharetra diam sit amet nisl
    suscipit. Mus mauris vitae ultricies leo integer malesuada nunc.
    Et leo duis ut diam quam nulla porttitor. Amet volutpat consequat
    mauris nunc congue nisi vitae suscipit.`,
  },
  {
    id: "refund-policy",
    title: "Refund policy",
    content: `Viverra orci sagittis eu volutpat odio. Eu scelerisque felis
    imperdiet proin fermentum leo vel orci porta. Lorem dolor sed
    viverra ipsum nunc aliquet bibendum enim. Feugiat scelerisque
    varius morbi enim nunc faucibus a pellentesque.`,
  },
  {
    id: "merchant-policy",
    title: "Merchant policy",
    content: `Lacus sed viverra tellus in hac habitasse platea dictumst.
    Malesuada nunc vel risus commodo. In mollis nunc sed id
    semper risus in hendrerit. Amet nulla facilisi morbi tempus iaculis
    urna. Pellentesque habitant morbi tristique senectus et netus et.`,
  },
]

const userImages = ["/userimage1.png", "/userimage2.png", "/userimage3.png", "/userimage4.png"]

export default function PoliciesPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const [activePolicy, setActivePolicy] = useState(policies[0])

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SiteHeader />

          <motion.main
            className="container mx-auto px-4 py-12"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="mb-4 font-nohemi text-4xl font-medium md:text-5xl">
                We are committed to providing a safe space for everyone on Bondyt
              </h1>
              <p className="text-gray-600">
                To ensure your continuous safety when using our product, we have listed all our policies below, click on any
                of the policies below to see the efforts we have made to keep you safe
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 lg:mx-40">
              {userImages.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`User ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-[300px,1fr] lg:mt-20 gap-8 items-start">
              <motion.div variants={fadeInUp} className="space-y-3">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => setActivePolicy(policy)}
                    className={cn(
                      "w-full text-left px-6 py-3 rounded-lg transition-colors",
                      activePolicy.id === policy.id
                        ? "bg-gradient-to-r from-[#F878FF] to-[#CD8DFE] text-white"
                        : "hover:bg-gray-100",
                    )}
                  >
                    {policy.title}
                  </button>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 shadow-sm"
                key={activePolicy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-medium mb-6">{activePolicy.title}</h2>
                <div className="prose max-w-none">
                  {activePolicy.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-600">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.main>

          <SiteFooter />
        </>
      )}
    </div>
  )
}
