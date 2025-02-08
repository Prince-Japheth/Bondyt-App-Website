"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LanguageModalProps {
    isOpen: boolean
    onClose: () => void
    onSave: (country: string, language: string) => void
    initialCountry?: string
    initialLanguage?: string
}

const countries = [
    { value: "global", label: "Global" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    // Add more countries as needed
]

const languages = [
    { code: "EN", label: "English" },
    { code: "ES", label: "Español" },
    { code: "FR", label: "Français" },
    { code: "DE", label: "Deutsch" },
    { code: "IT", label: "Italiano" },
    { code: "PT", label: "Português" },
]

export function LanguageModal({
    isOpen,
    onClose,
    onSave,
    initialCountry = "global",
    initialLanguage = "EN",
}: LanguageModalProps) {
    const [selectedCountry, setSelectedCountry] = useState(initialCountry)
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage)

    const handleSave = () => {
        onSave(selectedCountry, selectedLanguage)
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md p-10" style={{borderRadius: 15,}}>
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle>Country and language</DialogTitle>

                </DialogHeader>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger className="w-full sm:w-[180px] bg-gray-50 rounded-xl">
                            <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                            {countries.map((country) => (
                                <SelectItem key={country.value} value={country.value}>
                                    {country.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                        <SelectTrigger className="w-full sm:w-[180px] bg-gray-50 rounded-xl">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            {languages.map((language) => (
                                <SelectItem key={language.code} value={language.code}>
                                    {language.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4 flex justify-start">
                    <Button onClick={handleSave} className="p-4 bg-[#F878FF] text-white hover:bg-[#F878FF]/90 rounded-xl p-6 w-full">
                        Save
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

