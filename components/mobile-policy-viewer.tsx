"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Policy {
  id: string
  title: string
  content: string
}

interface MobilePolicyViewerProps {
  policies: Policy[]
}

export function MobilePolicyViewer({ policies }: MobilePolicyViewerProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="space-y-4 px-4 py-6 md:hidden bg-white m-4 mt-6 rounded-3xl bg-white shadow-sm">
      {policies.map((policy) => (
        <div key={policy.id}>
          <button
            onClick={() => setExpandedId(expandedId === policy.id ? null : policy.id)}
            className={cn(
              "flex w-full items-center justify-between rounded-2xl px-6 py-4",
              "bg-gradient-to-r from-[#F878FF] to-[#CD8DFE] text-white",
              expandedId === policy.id ? "mb-4" : "",
            )}
          >
            <span className="text-base font-medium">{policy.title}</span>
            <ChevronDown
              className="h-5 w-5 transition-transform duration-200"
              style={{
                transform: expandedId === policy.id ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <AnimatePresence>
            {expandedId === policy.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4">
                  <div className="prose max-w-none text-gray-600 whitespace-pre-wrap">
                    {policy.content}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

