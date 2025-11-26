import { EXPERTISE } from "../../lib/Constants"
import { useState, useEffect, useRef } from "react"
import Icon from "../Icon"

export const ExpertiseSection = () => {
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

  const columns = 3
  const expertiseWithIndex = EXPERTISE.map((item, idx) => ({ ...item, idx }))
  const columnData = Array.from({ length: columns }, (_, colIdx) =>
    expertiseWithIndex.filter((item) => item.idx % columns === colIdx)
  )

  const columnOffsets = ["", "mt-10", "mt-20"]

  return (
    <section className="py-20 px-6 bg-neutral-950 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-orbFloat"></div>
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-2xl animate-breathe" style={{ animationDuration: "6s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-slideUp">Our Expertise</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {columnData.map((column, colIdx) => (
            <div key={colIdx} className={`space-y-8 ${columnOffsets[colIdx] ?? ""}`}>
              {column.map((item) => (
                <div
                  key={item.name}
                  data-index={item.idx}
                  className={`group relative rounded-3xl border border-neutral-800 bg-neutral-900/70 backdrop-blur flex flex-col gap-4 p-6 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] hover:border-purple-400/40 hover:bg-linear-to-br hover:from-purple-600/10 hover:to-cyan-600/10 hover:shadow-2xl hover:shadow-purple-500/20 ${
                    visibleIndices.has(item.idx) ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${item.idx * 0.08}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-300 text-3xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                        <Icon name={item.icon} className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{item.name}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Core capability</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-white/60 border border-white/10 rounded-full px-3 py-1">
                      {item.idx + 1 < 10 ? `0${item.idx + 1}` : item.idx + 1}
                    </span>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>

                  <div className="mt-2 overflow-hidden border-t border-white/5 pt-4 text-sm text-white/80 opacity-0 max-h-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="font-semibold text-white mb-1">How we apply it</p>
                    <p className="text-white/70">
                      Embedded squads leverage this capability inside client product teams—covering strategy, build, and run.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

