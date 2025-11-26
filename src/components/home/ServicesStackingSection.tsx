"use client"

import { useEffect, useRef, useState } from "react"

interface StackImage {
  id: string
  src: string
  title: string
  description: string
}

const STACK_IMAGES: StackImage[] = [
  {
    id: "1",
    src: "/images/i1.png",
    title: "Adobe Experience Manager",
    description: "Enterprise content management and digital experience platform",
  },
  {
    id: "2",
    src: "/images/i2.png",
    title: "SAP Solutions",
    description: "Comprehensive enterprise resource planning and business intelligence",
  },
  {
    id: "3",
    src: "/images/i3.png",
    title: "Application Managed Services",
    description: "Full-lifecycle application support and optimization",
  },
]

export const ServicesStackingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const stackContainerRef = useRef<HTMLDivElement>(null)
  const [imagePositions, setImagePositions] = useState<number[]>(Array(STACK_IMAGES.length).fill(0))
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!stackContainerRef.current) return

        const rect = stackContainerRef.current.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionHeight = rect.height
        const windowHeight = window.innerHeight

        // Calculate progress (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))

        // Calculate individual image positions with stagger
        const positions = STACK_IMAGES.map((_, idx) => {
          const staggerDelay = idx * 0.25 // Stagger between images
          const adjustedProgress = Math.max(0, progress - staggerDelay)
          return adjustedProgress
        })
        setImagePositions(positions)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 px-6 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 animate-slideUp">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Enterprise{" "}
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Solutions
            </span>
          </h2>
            <p className="text-lg text-white max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Powerful platforms transforming enterprise operations
          </p>
        </div>

        {/* Stacking Images Container */}
        <div className="relative py-12 md:py-20">
          {/* Desktop: Stacking Animation */}
          <div className="hidden lg:block relative h-[700px]" ref={stackContainerRef}>
            <div className="sticky top-1/2 -translate-y-1/2 w-full h-96 md:h-[450px]">
              <div className="relative w-full max-w-4xl mx-auto h-full">
                {STACK_IMAGES.map((image, idx) => {
                  const progress = imagePositions[idx] || 0
                  // Smooth easing: ease-out cubic
                  const easeProgress = 1 - Math.pow(1 - progress, 3)

                  // Transformations
                  const yOffset = easeProgress * 120 // Downward movement
                  const rotation = easeProgress * 10 - 5 // -5 to +5 degrees
                  const scale = 0.85 + easeProgress * 0.15 // Scale up effect
                  const opacity = 0.3 + easeProgress * 0.7

                  return (
                    <div
                      key={idx}
                      className="absolute left-1/2 top-0 w-full max-w-3xl -translate-x-1/2 rounded-3xl overflow-hidden transition-none shadow-2xl shadow-purple-500/20"
                      style={{
                        transform: `translateY(${yOffset}px) rotateZ(${rotation}deg) scale(${scale})`,
                        opacity: opacity,
                        zIndex: STACK_IMAGES.length - idx,
                      }}
                    >
                      {/* Image */}
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay with info */}
                      <div
                        className="absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 to-transparent flex flex-col justify-end p-8 md:p-12"
                        style={{
                          opacity: Math.min(1, easeProgress * 1.5),
                        }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{image.title}</h3>
                        <p className="text-white/90 text-base md:text-lg">{image.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Image Grid */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {STACK_IMAGES.map((image, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden h-80 md:h-96 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm md:text-base">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - Desktop Only */}
            <div className="hidden lg:flex absolute -bottom-24 left-1/2 -translate-x-1/2 text-center pointer-events-none flex-col items-center gap-3">
              <p className="text-white/70 text-sm font-medium">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}

