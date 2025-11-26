import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: "revealUp" | "revealLeft" | "revealRight" | "zoomIn" | "fadeInScale"
  delay?: number
  duration?: number
  threshold?: number
}

export const ScrollReveal = ({
  children,
  animation = "revealUp",
  delay = 0,
  duration = 0.9,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      style={{
        animation: isVisible ? `${animation} ${duration}s cubic-bezier(0.23, 1, 0.320, 1) forwards` : "none",
        animationDelay: `${delay}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}
