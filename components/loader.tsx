import { Loader2 } from "lucide-react"

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Loader2 className="h-16 w-16 animate-spin text-[#f878ff]" />
    </div>
  )
}

