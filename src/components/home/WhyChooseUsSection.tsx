import { WHY_CHOOSE_US } from "../../lib/Constants"
import { useState, useEffect, useRef } from "react"
import Icon from "../Icon"

export const WhyChooseUsSection = () => {
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
    <section className="py-20 px-6 bg-neutral-950 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-0 w-[250px] h-[250px] bg-blue-600/8 rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDuration: "5s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-slideUp">Why Choose Us</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`bg-neutral-900 border border-neutral-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-700 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 group ${
                visibleIndices.has(idx) ? "animate-scaleIn" : "opacity-0 scale-95"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-purple-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce" style={{ animationDelay: `${idx * 0.2}s` }}><Icon name={item.icon} className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white text-sm group-hover:text-neutral-100 transition-colors duration-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
