"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"

interface BlogPost {
  title: string
  content: string[]
  image: string
}

interface BlogData {
  [key: string]: BlogPost
}

interface BlogPostParams {
  params: {
    slug: string
  }
}

const blogData: BlogData = {
  "how-do-lovers-grow": {
    title: "How do lovers grow",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi proin sed libero. Ante in nibh mauris cursus mattis molestie a iaculis. Amet volutpat consequat mauris nunc. Sem fringilla ut morbi tincidunt augue interdum velit euismod.",
      "Viverra orci sagittis eu volutpat odio. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Malesuada proin libero nunc consequat interdum varius. Mauris sit amet massa vitae tortor condimentum lacinia quis.",
      "Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ut sem nulla pharetra diam sit amet nisl suscipit. Mus mauris vitae ultricies leo integer malesuada nunc. Et leo duis ut diam quam nulla porttitor. Amet volutpat consequat mauris nunc congue nisi vitae suscipit.",
    ],
    image: "/placeholder.svg"
  },
  "the-name-is-bond": {
    title: "The name is Bond",
    content: [
      "Bondyt launches its merch product, promoting the popular saying 'the name is Bond' curled from the movie James Bond (007). The stylish designed merch, is aimed at promoting the company's beautiful colour, creativity and also to ensure style, comfort and class for the individuals using it.",
      "Bondyt merch will be added to the list of products that can be easily purchased on the Bondyt platforms and will be used to promote a community based feeling, where individuals feel they belong to a community of love, care, kindness and affectionate people."
    ],
    image: "/placeholder.svg"
  },
  "the-launch": {
    title: "The Launch",
    content: [
      "The most asked question is when is Bondyt launching? Bondyt will launch out its product in the month of January, 2025. This is to start the new year with something interesting and fun, giving people a feel of something unique, different and captivating.",
      "More details about the launch, can not be shared as the product is still a secret."
    ],
    image: "/placeholder.svg"
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { slug } = params
  const blog = blogData[slug]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!blog) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SiteHeader />

          <motion.main
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h1 className="mb-4 font-nohemi text-3xl font-medium sm:text-4xl md:text-5xl">
                Bondyt Blog
              </h1>
              <p className="text-gray-600">Get the latest news on our product updates</p>
            </motion.div>

            <div className="mt-10 py-8 px-4 sm:px-6 md:px-10 lg:px-40"
              style={{ backgroundColor: '#f3f5fc' }}>
              <motion.article 
                variants={fadeInUp} 
                className="mx-auto rounded-3xl bg-white p-4 pb-12 md:pb-20 mb-12 md:mb-20 shadow-sm"
              >
                <div className="mb-6 md:mb-8 aspect-[2/1] overflow-hidden rounded-3xl h-40 sm:h-48 md:h-56 w-full">
                  <Image
                    src={blog.image}
                    alt={`Header image for ${blog.title}`}
                    width={800}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56">
                  <h1
                    className="mb-6 font-nohemi text-2xl sm:text-3xl md:text-4xl font-medium text-[#595757] mt-8 md:mt-16"
                    style={{ fontWeight: "bold" }}
                  >
                    {blog.title}
                  </h1>

                  <div className="prose prose-base md:prose-lg max-w-none">
                    {blog.content.map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          </motion.main>

          <SiteFooter />
        </>
      )}
    </div>
  )
}
