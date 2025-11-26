import { useState } from "react"
import TechnologyDropdown from "./components/TechnologyDropdown"

interface HeaderProps {
  currentPage: string
  navigateTo: (page: string) => void
}

export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Careers", page: "careers" },
    { label: "Resources", page: "resources" },
    { label: "About Us", page: "about" },
  ]

  const handleNavClick = (page: string) => {
    navigateTo(page)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 shadow-sm animate-slideDown">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavClick("home")} className="flex items-center gap-3 hover:opacity-80 transition-opacity animate-bounceIn">
            <img src="/images/cjss-logo.png" alt="CJSS Technologies" className="h-14 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {/* Overview Button */}
            <button
              onClick={() => handleNavClick("home")}
              className={`text-sm font-medium transition-all duration-300 relative px-4 py-2 rounded-full animate-fadeInUp ${
                currentPage === "home"
                  ? "bg-purple-500/20 text-white font-bold border border-purple-400/40 shadow-lg shadow-purple-500/10"
                  : "text-white/80 hover:text-white hover:bg-neutral-800"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative z-10">Overview</span>
            </button>

            {/* Technology Services dropdown */}
            <TechnologyDropdown navigateTo={navigateTo} currentPage={currentPage} />

            {/* Nav items */}
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-all duration-300 relative px-4 py-2 rounded-full ${
                  currentPage === item.page
                    ? "bg-purple-500/20 text-white font-bold border border-purple-400/40 shadow-lg shadow-purple-500/10"
                    : "text-white/80 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none z-50"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4 bg-neutral-900 rounded-2xl p-4 shadow-xl border border-neutral-800">
            <button
              onClick={() => handleNavClick("home")}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === "home"
                  ? "bg-purple-500/20 text-purple-300 font-bold"
                  : "text-white/80 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              Home
            </button>

            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.page
                    ? "bg-purple-500/20 text-purple-300 font-bold"
                    : "text-white/80 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile: list technology services for quick access */}
            <div className="mt-2 px-4">
              <div className="text-xs font-semibold text-white/70 mb-2">Technology Services</div>
              <div className="grid gap-2">
                {/* Lazy import to avoid circular imports; render minimal list by reading window-global constant */}
                {typeof window !== "undefined" && (window as any).__TECH_SERVICES_LIST ? (
                  (window as any).__TECH_SERVICES_LIST.map((s: any) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        handleNavClick(`service-${s.id}`)
                      }}
                      className={`text-left px-3 py-2 rounded text-sm transition-colors ${
                        currentPage === `service-${s.id}`
                          ? "bg-purple-500/20 text-purple-400 font-bold"
                          : "text-white hover:bg-neutral-800 hover:text-purple-400"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
