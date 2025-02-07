"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"

interface BlogPost {
  title: string
  excerpt: string
  image: string
  slug: string
}

const blogs: BlogPost[] = [
  {
    title: "The name is Bond",
    excerpt: "Bondyt launches its merch product, promoting the popular saying 'the name is Bond' curled from the movie James Bond (007). The stylish designed merch, is aimed at promoting the company's beautiful colour, creativity and also to ensure style, comfort and class for the individuals using it.",
    image: "/placeholder.svg",
    slug: "the-name-is-bond"
  },
  {
    title: "The Launch",
    excerpt: "The most asked question is when is Bondyt launching? Bondyt will launch out its product in the month of January, 2025. This is to start the new year with something interesting and fun, giving people a feel of something unique, different and captivating.",
    image: "/placeholder.svg",
    slug: "the-launch"
  }
]

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SiteHeader />

          <motion.main
            className="py-8 md:py-12"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h1 className="mb-4 font-nohemi text-3xl font-medium md:text-5xl">Bondyt Blog</h1>
              <p className="text-gray-600">Get the latest news on our product updates</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mx-auto mt-8 max-w-lg px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 py-3 sm:py-4 md:py-6 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="w-full px-4 sm:px-6 lg:px-40 py-8 md:py-16 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              style={{ backgroundColor: '#f3f5fc' }}
            >
              {blogs.map((blog, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-white transition hover:shadow-md p-4 mx-2 mb-6 flex-1"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-3xl p-2">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition group-hover:scale-105 rounded-xl"
                      />
                    </div>
                    <div className="mt-4">
                      <h2 className="mb-2 text-lg md:text-xl font-medium">{blog.title}</h2>
                      <p className="text-sm text-gray-600">{blog.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.main>

          <SiteFooter />
        </>
      )}
    </div>
  )
}
