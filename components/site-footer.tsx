"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LanguageModal } from "@/components/language-modal"

interface SiteFooterProps {
    selectedLang: string
    setSelectedLang: (lang: string) => void
}

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

export function SiteFooter({ selectedLang = "EN", setSelectedLang }: SiteFooterProps) {
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false)

    return (
        <footer className="border-t py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-8">
                    {/* Logo */}
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
                    </div>

                    {/* Copyright and Links */}
                    <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start space-y-4 sm:space-y-0">
                        <p className="text-sm text-gray-600 text-center sm:text-left">Copyright {currentYear} Bondyt Technologies all rights reserved.</p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
                                {footerLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
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

                    {/* Social Links */}
                    <div className="flex justify-center sm:justify-start space-x-6">
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
                                    className={`h-5 w-5`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
