"use client"

import { useState, useEffect } from "react"

export const HeroSection = () => {
  const textLines = ["Commerce.", "Experience.", "Technology.", "Delivered."]
  const images = [
    "/images/E-Commerce Illustration Kit-01.png",
    "/images/E-Commerce Illustration Kit-02.png",
    "/images/E-Commerce Illustration Kit-03.png",
    "/images/E-Commerce Illustration Kit-04.png",
    "/images/E-Commerce Illustration Kit-05.png",
  ]

  const [displayedText, setDisplayedText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [completedLines, setCompletedLines] = useState<string[]>([])

  // Typing animation
  useEffect(() => {
    if (currentLineIndex >= textLines.length) return

    const currentLine = textLines[currentLineIndex]
    let timer: ReturnType<typeof setTimeout>

    if (isTyping) {
      if (displayedText.length < currentLine.length) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText + currentLine[displayedText.length])
        }, 100)
      } else {
        // Wait before moving to next line
        timer = setTimeout(() => {
          if (currentLineIndex < textLines.length - 1) {
            // Add current line to completed lines
            setCompletedLines([...completedLines, currentLine])
            setDisplayedText("")
            setCurrentLineIndex(currentLineIndex + 1)
          } else {
            // Final line is complete, add it and stop typing
            setCompletedLines([...completedLines, currentLine])
            setDisplayedText("")
            setIsTyping(false)
          }
        }, 1000)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, currentLineIndex, isTyping, completedLines])

  // Image carousel animation
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(imageTimer)
  }, [])

  return (
    <section className="relative pt-8 px-6 pb-20 flex items-center justify-center min-h-screen overflow-hidden bg-neutral-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {/* Gradient blobs with multiple animations */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />

        {/* Additional floating animation elements */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-2xl animate-pulse opacity-30" style={{ animationDuration: "5s", animationDelay: "1s" }}></div>

        {/* Grid pattern overlay for depth */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(0, 221, 179, 0.1) 25%, rgba(0, 221, 179, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 221, 179, 0.1) 75%, rgba(0, 221, 179, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 102, 255, 0.1) 25%, rgba(0, 102, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.1) 75%, rgba(0, 102, 255, 0.1) 76%, transparent 77%, transparent)",
          backgroundSize: "80px 80px"
        }}></div>

        {/* Floating orbs with staggered animation */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-teal/5 rounded-full blur-xl opacity-0 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-brand-blue/5 rounded-full blur-xl opacity-0 animate-float" style={{ animationDelay: "1s", animationDuration: "6s" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-brand-purple/5 rounded-full blur-xl opacity-0 animate-float" style={{ animationDelay: "2s", animationDuration: "7s" }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-5">
        <div className="grid lg:grid-cols-2 gap-9 items-center">
          {/* Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm mb-8 animate-fadeIn border border-purple-500/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-400"></span>
              </span>
              Transforming Digital Experiences
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight min-h-[400px] md:min-h-80">
              {completedLines.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
              {isTyping && displayedText && (
                <div>
                  {displayedText}
                  <span className="animate-blink">|</span>
                </div>
              )}
            </h1>
            
            <p className="text-xl text-neutral-300 mb-10 max-w-lg animate-slideUp leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Accelerating brands with Hybris, AEM, headless frontends and multi-cloud commerce solutions.
            </p>
          </div>

          {/* Hero Visual/Animation with Image Carousel */}
            <div className="relative lg:h-[600px] flex items-center justify-center animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-full h-full rounded-[3rem] border border-neutral-800 shadow-2xl shadow-neutral-900/50 p-8 flex items-center justify-center overflow-hidden bg-neutral-900">
              {/* Image Carousel */}
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`E-commerce illustration ${idx + 1}`}
                  className={`absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                    idx === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Carousel indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-purple-400 w-8"
                        : "bg-neutral-700 hover:bg-neutral-600"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
