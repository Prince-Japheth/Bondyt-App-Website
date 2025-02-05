"use client"

import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import Image from "next/image"
import { StarRating } from "./star-rating"
import { Quote } from "lucide-react"
import { EmojiHappy } from "iconsax-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah",
    rating: 5,
    text: "Found my perfect match here! The app's features made it incredibly easy to connect with like-minded people.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Michael",
    rating: 5,
    text: "The security features really made me feel safe while dating. Great experience overall!",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Jessica",
    rating: 5,
    text: "Love the intuitive interface and how easy it is to find compatible matches.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "David",
    rating: 5,
    text: "Best dating app I've ever used. The matching algorithm is spot on!",
    image: "/placeholder.svg",
  },
]

export function Testimonials() {
  const [[currentIndex, direction], setPage] = useState([0, 0])

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  const handleSwipe = (newDirection: number) => {
    setPage([(currentIndex + newDirection + testimonials.length) % testimonials.length, newDirection])
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-24">
        <div {...handlers} className="grid gap-12 md:gap-24 md:grid-cols-2 md:items-center grid-cols-1">
          {/* Right Content */}
          <div className="order-1 md:order-2 space-y-6 text-center md:text-left md:pl-16">
            <div className="flex justify-center md:justify-start">
              <Quote className="h-12 w-12 text-gray-300 transform rotate-180" />
            </div>
            <h2 className="text-4xl font-extrabold">What Our Users Say</h2>
            <p className="text-gray-600">
              At Bondyt, we're committed to making a positive impact on relationships. To ensure we're delivering on our
              promise, we track key metrics that measure our success:
            </p>
          </div>

          {/* Testimonial Card */}
          <div
            className="relative rounded-[2.5rem] bg-black p-4 order-2 md:order-1 overflow-hidden"
            style={{ height: "400px" }}
          >
            <div className="relative h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="space-y-4 absolute inset-0 p-6"
                >
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h3>
                  <StarRating rating={testimonials[currentIndex].rating} />
                  <p className="text-gray-300">{testimonials[currentIndex].text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Navigation Dots */}
        <div className="ml-5 mt-20 mb-20 flex justify-start space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection = index > currentIndex ? 1 : -1
                setPage([index, newDirection])
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-black w-6" : "bg-[#d9d9d9] hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

