import { TECHNOLOGIES } from "../../lib/Constants"
import { useState, useEffect, useRef } from "react"

export const TechnologyIndexSection = () => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())
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

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-6 bg-neutral-950" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-slideUp">Technology Index</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TECHNOLOGIES.map((tech, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`flex flex-col items-center gap-3 p-6 bg-neutral-900 border border-neutral-800 rounded-2xl transition-all duration-700 hover:shadow-xl hover:shadow-purple-500/10 group hover:-translate-y-2 ${
                visibleIndices.has(idx) ? "animate-parallaxUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="text-4xl text-purple-300 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">{tech.icon}</div>
              <p className="text-sm font-semibold text-white text-center group-hover:text-purple-300 transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
