import { useEffect, useRef, useState } from "react"
import { TECHNOLOGY_SERVICES } from "../lib/Constants"

interface Props {
  navigateTo: (page: string) => void
  currentPage?: string
}

export const TechnologyDropdown = ({ navigateTo, currentPage }: Props) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleSelect = (id: string) => {
    // Navigate to service-specific page
    navigateTo(`service-${id}`)
    setOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [open])

  const isActive = currentPage?.startsWith("service-")

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`text-sm font-medium px-4 py-2 transition-colors relative rounded-full ${
          isActive || open
            ? "bg-purple-500/20 text-white font-bold border border-purple-400/40 shadow-lg shadow-purple-500/10"
            : "text-white/80 hover:text-white hover:bg-neutral-800"
        }`}
      >
        <span className="relative z-10">Technology Services</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl shadow-purple-500/10 z-50 overflow-hidden animate-fadeIn">
          <div className="p-2">
            {TECHNOLOGY_SERVICES.map((s) => {
              const isSelected = currentPage === `service-${s.id}`
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isSelected ? "bg-purple-500/20 border border-purple-500/30" : "hover:bg-neutral-800/80"
                  }`}
                >
                  <div className={`text-sm font-bold mb-1 ${isSelected ? "text-purple-300" : "text-white group-hover:text-purple-200"}`}>{s.title}</div>
                  <div className="text-xs text-white/70 truncate group-hover:text-white">{s.banner}</div>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default TechnologyDropdown
