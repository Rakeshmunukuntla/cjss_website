import { CLIENTS } from "../../lib/Constants"
import { useState, useEffect, useRef } from "react"
import Icon from "../Icon"

export const ClientsSection = () => {
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
    <section className="py-20 px-6 bg-neutral-900 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-teal/8 rounded-full blur-3xl animate-orbFloat"></div>
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-blue/8 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-brand-purple/6 rounded-full blur-2xl animate-breathe" style={{ animationDuration: "7s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-slideUp">Our Clients</h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 group ${
                visibleIndices.has(idx) ? "animate-fadeInScale" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {client.image ? (
                <div className="p-6 rounded-2xl hover:bg-brand-teal/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-teal/20">
                  <img src={client.image} alt={client.name} className="h-16 w-auto object-contain group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-lg" />
                </div>
              ) : (
                <div className="text-neutral-700 group-hover:text-brand-teal group-hover:scale-110 transition-all duration-500"><Icon name={client.icon} className="w-8 h-8" /></div>
              )}
              <p className="text-sm font-semibold text-neutral-700 text-center group-hover:text-brand-teal transition-colors duration-300 animate-pulse">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
