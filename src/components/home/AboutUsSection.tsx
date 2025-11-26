import { COMPANY_INFO } from "../../lib/Constants"
import { useState, useEffect, useRef } from "react"

export const AboutUsSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card")
            if (cardId) setVisibleCards((prev) => new Set([...prev, cardId]))
          }
        })
      },
      { threshold: 0.15 }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-card]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const cards = [
    { id: "vision", title: "Our Vision", content: COMPANY_INFO.vision, animation: "revealLeft", bgImage: "/images/Vision.png" },
    { id: "mission", title: "Our Mission", content: COMPANY_INFO.mission, animation: "revealUp", bgImage: "/images/Mission.png" },
    { id: "values", title: "Our Values", content: null, animation: "revealRight", bgImage: "/images/Values.png" },
  ]

  const highlightChips = [
    "Innovation-led delivery",
    "Global pods & studios",
    "Experience-first engineering",
  ]

  const statHighlights = [
    { value: "12+", label: "Years Engineering" },
    { value: "350+", label: "Experts" },
    { value: "5", label: "Delivery Hubs" },
    { value: "96%", label: "Client Retention" },
  ]

  return (
    <section className="relative py-24 px-6 bg-neutral-950 overflow-hidden" ref={sectionRef}>
      {/* Aurora + grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-80" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.25), transparent 55%)" }}></div>
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(transparent 79px, rgba(255,255,255,0.05) 80px), linear-gradient(90deg, transparent 79px, rgba(255,255,255,0.05) 80px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-cyan-500/30 rounded-full blur-[160px] animate-orbFloat"></div>
        <div className="absolute -bottom-40 left-10 w-[520px] h-[520px] bg-purple-600/25 rounded-full blur-[200px] opacity-70 animate-[spin_25s_linear_infinite]"></div>
        <div
          className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-40 animate-[spin_32s_linear_infinite]"
          style={{ maskImage: "radial-gradient(circle, rgba(255,255,255,0.7) 30%, transparent 70%)" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
              <span className="h-px w-12 bg-white/30"></span>
              About us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Crafting
              <span className="ml-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                digital craftsmanship
              </span>
              with fearless ambition.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              {COMPANY_INFO.mission}
            </p>
            <div className="flex flex-wrap gap-3">
              {highlightChips.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 text-sm text-white/80 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm hover:border-purple-400/50 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 blur-3xl opacity-70"></div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900/70 backdrop-blur-2xl p-8">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-40"></div>
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-3">Vision</p>
                <p className="text-2xl font-semibold text-white/90 leading-relaxed">{COMPANY_INFO.vision}</p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {statHighlights.map((stat) => (
                    <div key={stat.label} className="relative">
                      <span className="absolute -left-3 -top-3 inline-flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"></span>
                      </span>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/60 to-cyan-400/60 blur-3xl opacity-70 animate-orbFloat"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              data-card={card.id}
              className="group relative rounded-[28px] overflow-hidden border border-white/5 bg-neutral-900/40 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(76,29,149,0.45)]"
              style={{
                animation: visibleCards.has(card.id)
                  ? `${card.animation} 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards`
                  : "none",
                animationDelay: `${idx * 0.15}s`,
                opacity: visibleCards.has(card.id) ? 1 : 0,
              }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundImage: `url('${card.bgImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.35), transparent 55%)" }}
              ></div>
              <div className="absolute -right-10 top-1/2 h-32 w-32 bg-purple-500/50 blur-3xl rounded-full opacity-60 animate-orbFloat"></div>
              <div className="absolute inset-0 border border-white/10 rounded-[28px] pointer-events-none"></div>

              <div className="relative z-10 p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-white/80 backdrop-blur">
                    {idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{card.title}</h3>
                </div>
                {card.id === "values" ? (
                  <ul className="space-y-2">
                    {COMPANY_INFO.values.map((value, vidx) => (
                      <li key={vidx} className="text-white/85 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">◆</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/80 leading-relaxed">{card.content}</p>
                )}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"></span>
                  Culture driven by impact
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}