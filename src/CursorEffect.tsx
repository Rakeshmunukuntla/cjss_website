"use client"

import { useEffect, useRef, useState } from "react"

export const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursorRef.current && cursorDotRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
          cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
        }
      })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, .cursor-hover")) {
        setCursorVariant("hover")
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, .cursor-hover")) {
        setCursorVariant("default")
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-9999 transition-all duration-150`}
        style={{
          width: cursorVariant === "hover" ? "48px" : "32px",
          height: cursorVariant === "hover" ? "48px" : "32px",
          willChange: "transform",
        }}
      >
        <div
          className={`w-full h-full border-2 border-white rounded-full transition-all duration-150 ${
            cursorVariant === "hover" ? "bg-white/20" : ""
          }`}
        />
      </div>
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-9999 transition-all duration-100"
        style={{ willChange: "transform" }}
      />
    </>
  )
}
