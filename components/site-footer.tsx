"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

// Get the current year
const currentYear = new Date().getFullYear();

const footerLinks = [
  { href: "/policies", label: "Privacy policy" },
  { href: "/policies", label: "Terms of use" },
  { href: "/support", label: "Support" },
]

const socialLinks = [
  { href: "https://t.me/bondytdating", icon: "/telegram.png", label: "Telegram" },
  { href: "https://www.instagram.com/bondyttech", icon: "/instagram.png", label: "Instagram" },
  { href: "https://www.facebook.com/bondyttech", icon: "/facebook.png", label: "Facebook" },
  { href: "https://twitter.com/bondyttech", icon: "/x.png", label: "Twitter" },
  { href: "https://www.youtube.com/@Bondyttech", icon: "/youtube.png", label: "YouTube" },
  { href: "https://www.linkedin.com/company/bondyttech", icon: "https://cdn-icons-png.flaticon.com/128/3536/3536569.png", label: "LinkedIn" },
]

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
  { code: "PT", label: "Português" },
]

export function SiteFooter() {
  const [selectedLang, setSelectedLang] = useState("EN")

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode)
    // Here you would typically integrate with your i18n solution
    // For example: i18n.changeLanguage(langCode)
  }

  return (
    <footer className="border-t py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col space-y-4 items-center text-center sm:items-start sm:text-left">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/esupposeblacklogo.png"
                alt="Bondyt"
                width={100}
                height={32}
                className="h-14 w-auto invert"
              />
            </Link>
            <p className="text-sm text-gray-600">Copyright {currentYear} Bondyt Technologies all rights reserved.</p>
          </div>

          {/* Links and Language Selector */}
          <div className="flex flex-col space-y-8 items-center sm:flex-row sm:space-y-0 sm:justify-between">
            <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                  {link.label}
                </Link>
              ))}
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 rounded-full border px-4">
                  <Globe className="h-4 w-4" />
                  <span>{selectedLang}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[150px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="cursor-pointer"
                  >
                    <span className="font-medium">{lang.code}</span>
                    <span className="ml-2 text-muted-foreground">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-600 transition hover:text-gray-900"
                aria-label={social.label}
              >
                <Image
                  src={social.icon || "/placeholder.svg"}
                  alt={social.label}
                  width={20}
                  height={20}
                  className={`h-5 w-5 ${social.className ? social.className : ""}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
