"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { MobileNav } from "./mobile-nav"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/merchant", label: "Merchant" },
  { href: "/policies", label: "Policies" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
    //      className={cn(
    //        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    //        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent",
    //      )}    
    >
      <div className={cn(
        "container mx-auto flex h-16 items-center justify-between px-4 lg:px-40",
        isScrolled ? "" : "lg:py-20"
      )}>
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/pinklogo.png"
              alt="Bondyt"
              width={100}
              height={32}
              className="h-14 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-[#F878FF]",
                    pathname === link.href ? "text-[#F878FF]" : "text-gray-600",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/blog" className="hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-white bg-[linear-gradient(54.09deg,#F878FF_45.6%,#CD8DFE_93.28%)]"
          >
            <Bell className="h-5 w-5" />
          </Button>
        </Link>

        <MobileNav />

      </div>
    </header>
  )
}