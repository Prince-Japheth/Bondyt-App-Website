"use client"

import { useState } from "react"
import { Globe, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageModal } from "@/components/language-modal"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Loader } from "@/components/loader"

interface SiteMobileNavProps {
  selectedLang: string
  setSelectedLang: (lang: string) => void
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/merchant", label: "Merchant" },
  { href: "/policies", label: "Policies" },
  { href: "/blog", label: "Updates" },
]


export function MobileNav({ selectedLang = "EN", setSelectedLang }: SiteMobileNavProps) {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false)

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode)
    // Here you would typically integrate with your i18n solution
    // For example: i18n.changeLanguage(langCode)
  }

  const handleNavigation = (href: string) => {
    setIsLoading(true)
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      {isLoading && <Loader />}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-10 w-10" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full p-0 border-none rounded-b-[32px] max-h-[85vh]">
          <div className="flex flex-col bg-white/80 backdrop-blur-xl rounded-b-[32px] p-6">
            <div className="flex justify-end mb-16">
              <SheetClose asChild>
              </SheetClose>
            </div>
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
                    "text-lg py-3 px-4 rounded-2xl transition-all flex justify-between items-center",
                    pathname === link.href
                      ? "bg-gradient-to-r from-[#C986FD] to-[#F878FF] text-white"
                      : "text-gray-900 hover:bg-gray-100",
                  )}
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "h-5 w-5",
                      pathname === link.href ? "text-white" : "text-[#EDE4D3]",
                    )}
                  />
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-6">

              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 rounded-full border px-4"
                onClick={() => setIsLanguageModalOpen(true)}
              >
                <Globe className="h-4 w-4" />
                <span>{selectedLang}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
              <LanguageModal
                isOpen={isLanguageModalOpen}
                onClose={() => setIsLanguageModalOpen(false)}
                onSave={(country, language) => {
                  setSelectedLang(language)
                  // Here you would typically integrate with your i18n solution
                  // For example: i18n.changeLanguage(language)
                }}
                initialLanguage={selectedLang}
              />


            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

