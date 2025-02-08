"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { HeroDownloadButtons } from "@/components/download-buttons"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react"

const sliderImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427321062-MLZ0OdXrqEsArk3i8R9SGvOuQOJjsI.png",
  "/hero-img2.png",
  "/hero-img3.png",
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const openWhatsApp = () => {
    window.open(`https://wa.me/15096170531`, "_blank")
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto slide
    autoplaySpeed: 1000, // Slide interval in milliseconds
    afterChange: (index: number) => setCurrentSlide(index),
    arrows: false, // Disable left and right arrows
  };
  

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
            maxWidth: "95%",
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
          <Slider {...settings}>
            {sliderImages.map((src, index) => (
              <div key={index}>
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Couple illustration ${index + 1}`}
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-4">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`h-1 w-5 mx-1 rounded-full transition-all ${currentSlide === index ? "bg-[#F878FF]" : "bg-[#FCC9FF]"
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div
        className="fixed bottom-4 z-50 cursor-pointer transform transition-transform hover:scale-105 hidden md:block"
        onClick={openWhatsApp}
        style={{ right: "100px" }}
      >
        <div
          className="flex items-center justify-center rounded-full hover:bg-[#f0dcfe] transition-all duration-300"
          style={{ padding: 20 }}
        >
          <Image src="/pinkwhats.png" alt="WhatsApp" width={60} height={60} />
        </div>
      </div>

      <div
        className="fixed bottom-4 z-50 cursor-pointer transform transition-transform hover:scale-105 block md:hidden"
        onClick={openWhatsApp}
        style={{ right: "20px" }}
      >
        <div
          className="flex items-center justify-center rounded-full hover:bg-[#f0dcfe] transition-all duration-300"
          style={{ padding: 15 }}
        >
          <Image src="/pinkwhats.png" alt="WhatsApp" width={40} height={40} />
        </div>
      </div>
    </section>
  )
}
