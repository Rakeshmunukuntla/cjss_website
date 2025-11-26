import { useState, useEffect } from "react"
import Globe from "../Globe"

export const GlobeSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector(".globe-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      value: "500M+",
      label: "API requests per day, peaking at 13,000 requests a second",
    },
    {
      value: "99.999%",
      label: "historical uptime for Stripe services",
    },
    {
      value: "47+",
      label: "countries with local acquiring",
    },
    {
      value: "135+",
      label: "currencies and payment methods supported",
    },
  ]

  return (
    <section className="globe-section relative overflow-visible min-h-[120vh] flex flex-col items-center justify-center bg-neutral-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDuration: "5s" }}></div>
      </div>

      {/* Full background globe */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-100 overflow-visible">
        <Globe
          scale={2}
          theta={0.3}
          dark={1}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="text-center mb-20">
            {/* Center Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{
              animation: isVisible ? 'revealUp 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards' : 'none'
            }}>
              <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Global Reach</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-slideUp">
                Customer Journey<br />
                <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Smart Solutions
                </span>
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                Delivering transformative technology solutions across 47+ countries, powering thousands of businesses with our expertise in cloud, AI, and digital transformation.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 pt-12 border-t border-neutral-800">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-700`}
                style={{
                  animation: isVisible ? `zoomIn 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards` : 'none',
                  animationDelay: `${idx * 0.12}s`,
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="relative pt-6">
                  {/* Top border accent */}
                  <div className="absolute top-0 left-0 w-8 h-0.5 bg-linear-to-r from-purple-400 to-transparent" />

                  {/* Value */}
                  <div className="text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-neutral-700 text-sm leading-relaxed group-hover:text-brand-teal transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
