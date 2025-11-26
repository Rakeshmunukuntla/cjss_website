import { TECHNOLOGY_SERVICES } from "../../lib/Constants"
import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

interface OurServicesSectionProps {
  navigateTo?: (page: string) => void
}

export const OurServicesSection = ({ navigateTo }: OurServicesSectionProps) => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleIndices((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background blobs with animations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-blob animation-delay-2000" />
      
      {/* Additional animated elements */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-600/6 rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDuration: "4s" }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-purple-600/6 rounded-full blur-2xl animate-pulse opacity-30" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-lg opacity-0 animate-float"></div>
      <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg opacity-0 animate-float" style={{ animationDelay: "1.5s" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp text-white">
            Explore Our <br />
            <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-xl text-white max-w-2xl animate-slideUp" style={{ animationDelay: "0.2s" }}>
            We combine strategic insight with technical expertise to deliver solutions that drive real business value.
          </p>
        </div>

        <div className="space-y-8">
          {TECHNOLOGY_SERVICES.map((service, idx) => {
            return (
            <div
              key={service.id}
              data-index={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex flex-col md:flex-row gap-12 md:gap-16 transition-all duration-1000 overflow-hidden rounded-3xl p-8 md:p-12 bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 ${
                visibleIndices.has(idx)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                animation: visibleIndices.has(idx) ? `revealUp 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards` : "none",
                animationDelay: `${idx * 0.15}s`
              }}
            >
              {/* Animated gradient overlay background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl">
                <div className="absolute inset-0 bg-purple-500/10 animate-pulse" style={{animationDuration: "3s"}}></div>
              </div>

              {/* Floating animated orbs inside card */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:animate-blob" style={{ animationDelay: '0s' }}></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:animate-blob" style={{ animationDelay: '1s' }}></div>

              {/* Number with glow effect */}
              <div className="md:w-32 shrink-0 relative">
                <span className="text-6xl md:text-8xl font-bold text-neutral-700 group-hover:text-purple-300 transition-all duration-500 relative z-10">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-purple-500/0 group-hover:text-purple-500/40 blur-2xl transition-all duration-500">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white group-hover:text-purple-200 transition-all duration-300 transform group-hover:translate-x-2">
                  {service.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-12 mb-8">
                  <div className="space-y-6">
                    <p className="text-lg text-neutral-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.banner}
                    </p>
                    <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-700 group-hover:border-purple-500/50 group-hover:bg-neutral-900 transition-all duration-300">
                      <p className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                        {service.approach}
                      </p>
                    </div>
                  </div>
                  
                  {/* Service List with stagger animation */}
                  <ul className="space-y-3">
                    {service.solutions.map((solution, sIdx) => (
                      <li 
                        key={solution.id} 
                        className="flex items-center gap-3 text-neutral-300 group/item group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2"
                        style={{
                          transitionDelay: hoveredIndex === idx ? `${sIdx * 50}ms` : '0ms'
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-cyan-400 group-hover/item:scale-150 transition-transform" />
                        <span>{solution.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigateTo && navigateTo(`service-${service.id}`)}
                  className="group/btn inline-flex items-center gap-3 px-6 py-3 font-bold tracking-widest uppercase text-sm rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/40 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

