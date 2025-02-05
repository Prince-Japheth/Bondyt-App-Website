"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Loader } from "@/components/loader" // Import Loader component

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/blog", label: "Blog" },
  { href: "/merchant", label: "Merchant" },
  { href: "/policies", label: "Policies" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (href: string) => {
    setIsLoading(true)
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      {isLoading && <Loader />} {/* Display the loader when navigating */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-10 w-10" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center space-x-2" onClick={(e) => {
              e.preventDefault()
              handleNavigation("/")
            }}>
              <Image
                src="/pinklogo.png"
                alt="Bondyt"
                width={100}
                height={100}
              />
            </Link>
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(link.href)
                  }}
                  className={cn(
                    "text-lg transition-colors hover:text-[#F878FF]",
                    pathname === link.href ? "text-[#F878FF]" : "text-gray-600",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
