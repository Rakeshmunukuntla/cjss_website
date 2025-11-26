"use client"

import { useEffect, useRef, useState } from "react"

interface TestimonialCard {
  id: string
  text: string
  author: string
  role: string
  tech: string
}

const TESTIMONIAL_CARDS: TestimonialCard[] = [
  // Row 1
  {
    id: "1",
    text: "SAP Hybris enables seamless e-commerce experiences across multiple channels.",
    author: "Tech Lead",
    role: "E-commerce",
    tech: "SAP Hybris"
  },
  {
    id: "2",
    text: "Adobe Experience Manager transformed our content management workflow. Reduced publication time significantly.",
    author: "Content Director",
    role: "Digital Marketing",
    tech: "Adobe AEM"
  },
  {
    id: "3",
    text: "React provides the flexibility and performance our modern applications demand.",
    author: "Frontend Architect",
    role: "Web Development",
    tech: "React"
  },
  {
    id: "3b",
    text: "TypeScript ensures code quality and prevents runtime errors. Type safety is invaluable in large codebases.",
    author: "Code Lead",
    role: "Development",
    tech: "TypeScript"
  },
  {
    id: "3c",
    text: "Next.js accelerates development with server-side rendering and static generation capabilities.",
    author: "Full Stack Dev",
    role: "Engineering",
    tech: "Next.js"
  },
  // Row 2
  {
    id: "4",
    text: "Java backend services power our enterprise infrastructure with reliability and scalability.",
    author: "Backend Engineer",
    role: "Infrastructure",
    tech: "Java"
  },
  {
    id: "5",
    text: "Cloud infrastructure provides unmatched scalability and reliability for our operations.",
    author: "Cloud Architect",
    role: "DevOps",
    tech: "Cloud Tech"
  },
  {
    id: "6",
    text: "Automated testing frameworks ensure quality at scale. QA automation reduced bugs by 65%.",
    author: "QA Lead",
    role: "Quality Assurance",
    tech: "Automation"
  },
  {
    id: "6b",
    text: "Kubernetes orchestration simplified our container deployment and scaling processes.",
    author: "Platform Engineer",
    role: "DevOps",
    tech: "Kubernetes"
  },
  {
    id: "6c",
    text: "PostgreSQL database provides reliable persistence and advanced query capabilities.",
    author: "Database Admin",
    role: "Infrastructure",
    tech: "PostgreSQL"
  },
  // Row 3
  {
    id: "7",
    text: "Machine Learning capabilities drive intelligent decision-making in our platform.",
    author: "ML Engineer",
    role: "AI/ML",
    tech: "AI/ML"
  },
  {
    id: "8",
    text: "DevOps practices streamlined our deployment pipeline and reduced time-to-market.",
    author: "DevOps Engineer",
    role: "Infrastructure",
    tech: "DevOps"
  },
  {
    id: "9",
    text: "Microservices architecture provided modularity for rapid feature development.",
    author: "System Architect",
    role: "Architecture",
    tech: "Microservices"
  },
  {
    id: "9b",
    text: "Docker containerization ensures consistency across development and production environments.",
    author: "Ops Engineer",
    role: "DevOps",
    tech: "Docker"
  },
  {
    id: "9c",
    text: "GraphQL provides flexible and efficient data querying for modern applications.",
    author: "API Designer",
    role: "Backend",
    tech: "GraphQL"
  },
]

export const TechShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card-id")
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-card-id]")
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  const groupedCards = [
    TESTIMONIAL_CARDS.slice(0, 5),    // Row 1: 5 cards
    TESTIMONIAL_CARDS.slice(5, 10),   // Row 2: 5 cards
    TESTIMONIAL_CARDS.slice(10, 15),  // Row 3: 5 cards
  ]

  return (
    <section ref={sectionRef} className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-slideUp">
            Loved by devs worldwide
          </h2>
          <p className="text-xl text-white animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            See what developers are saying about our technology stack
          </p>
        </div>

        {/* Horizontal Scrolling Rows */}
        <div className="space-y-8">
          {groupedCards.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="overflow-hidden"
            >
              <div
                className="flex gap-6 pb-4 px-6"
                style={{
                  animation: rowIdx % 2 === 1 
                    ? 'scroll-reverse 20s linear infinite' 
                    : 'scroll 20s linear infinite',
                  direction: rowIdx % 2 === 1 ? 'rtl' : 'ltr',
                }}
              >
                {/* Duplicate cards for seamless scroll */}
                {[...row, ...row].map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    data-card-id={card.id}
                    className={`shrink-0 w-80 bg-linear-to-br from-neutral-900 to-neutral-800 border border-neutral-700 hover:border-purple-500/50 rounded-xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 cursor-pointer ${
                      visibleCards.has(card.id)
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                    style={{
                      animation: visibleCards.has(card.id)
                        ? `revealUp 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards`
                        : "none",
                    }}
                  >
                    {/* Tech Badge */}
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-3">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      <span className="text-xs font-semibold text-purple-300 whitespace-nowrap">{card.tech}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3 h-16 group-hover:text-white transition-colors">
                      "{card.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-3 border-t border-neutral-700">
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs">
                          {card.author.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white text-sm truncate">{card.author}</p>
                        <p className="text-xs text-white truncate">{card.role}</p>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-purple-500/5 to-cyan-500/5 -z-10 blur-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
