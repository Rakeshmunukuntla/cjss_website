"use client"

import type React from "react"

import { ADVANTAGES, TECH_USAGE, EXPERTISE, CERTIFICATIONS } from "../lib/Constants"
import { LeadershipSection } from "../components/about/LeadershipSection"
import { useState, useEffect, useRef } from "react"

// Technology Usage Section Component with Counting Animation
const TechUsageSection = () => {
  const [counts, setCounts] = useState<number[]>(TECH_USAGE.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          // Start counting animation
          const targets = TECH_USAGE.map((tech) => tech.percentage)
          const duration = 2000 // 2 seconds
          const steps = 60
          const stepDuration = duration / steps

          let currentStep = 0

          const interval = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            const newCounts = targets.map((target) =>
              Math.floor(target * progress)
            )
            setCounts(newCounts)

            if (currentStep >= steps) {
              clearInterval(interval)
              setCounts(targets)
            }
          }, stepDuration)

          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center text-white">
          Technology{" "}
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Usage
          </span>
        </h2>
        <p className="text-center text-white mb-16 text-lg">
          Best for showing multiple technologies at once
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {TECH_USAGE.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mb-4">
                {/* Background circle */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="rgba(200, 200, 200, 0.3)"
                    strokeWidth="6"
                  />
                  {/* Animated progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="url(#gradientStroke)"
                    strokeWidth="6"
                    strokeDasharray={`${(counts[idx] / 100) * 2 * Math.PI * 54} ${
                      2 * Math.PI * 54
                    }`}
                    strokeLinecap="round"
                    className="transition-all ease-out group-hover:drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(0, 221, 179, 0.5))",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradientStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#0066FF", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#00DDB3", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center text with counting animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center animate-fadeIn">
                  <span className="text-2xl font-bold text-white">
                    {counts[idx]}%
                  </span>
                </div>

                {/* Pulsing ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/0 group-hover:border-purple-400/50 group-hover:animate-pulse transition-all duration-500"></div>
              </div>

              {/* Technology name */}
              <h3 className="text-center font-semibold text-white text-sm">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const AboutPage = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for subscribing!")
    setEmail("")
  }

  const heroStats = [
    { label: "Transformation Programs", value: "80+" },
    { label: "Experience Pods", value: "12" },
    { label: "Client NPS", value: "72" },
  ]

  const heroHighlights = [
    "SAP Commerce + AEM accelerators",
    "Design-to-run DevOps",
    "Global delivery hubs",
  ]

  const communitySpotlights = [
    {
      title: "STEM Mentorship",
      description:
        "Weekend SAP Commerce and AEM sandboxes where CJSS architects teach students how enterprise platforms power NGOs and civic portals.",
      metric: "250+ mentees",
    },
    {
      title: "Green Stack Pledge",
      description:
        "Reusable React component libraries donated to climate nonprofits so they can launch progressive web experiences without extra spend.",
      metric: "3 cities",
    },
    {
      title: "Open Source Grants",
      description:
        "Funding internal guilds that build testing harnesses, SAP accelerators, and AEM/React starter kits for social-impact founders.",
      metric: "$40K funded",
    },
  ]

  return (
    <div className="bg-neutral-950">
      {/* About Section */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/cjssfam.jpeg')", backgroundAttachment: "fixed" }}></div>
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.25), transparent 50%)" }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
                <span className="h-px w-12 bg-white/40"></span>
                About CJSS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Building experience-led platforms for courageous brands.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                CJSS Tech partners with enterprises and rising scale-ups to design, build, and run composable commerce and customer experience stacks. We bring pods of strategists, architects, engineers, and designers who obsess over measurable outcomes and delightful journeys.
              </p>
              <div className="flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span key={item} className="px-4 py-2 text-sm text-white/70 border border-white/15 rounded-full bg-white/5 backdrop-blur hover:border-purple-400/50 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-purple-500/30 via-transparent to-cyan-500/30 blur-3xl"></div>
              <div className="relative rounded-4xl border border-white/10 bg-neutral-900/70 backdrop-blur-2xl p-8 space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  "Technology only matters when people feel the difference. We craft platforms with empathy, experimentation, and relentless delivery discipline."
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div>
                    <p className="font-semibold text-white">SAP Commerce | AEM | Cloud</p>
                    <p>Strategy, build, run</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Studio model</p>
                    <p>Design + data + DevOps pods</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70">
                  Hyderabad HQ · Remote-first talent across APAC, EMEA, and North America.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Advantages Section */}
      <section className="py-28 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">Why CJSS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Advantages Designed for Velocity</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Every squad works from a shared playbook of engineering excellence so you get predictable delivery and creative problem solving.
            </p>
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {ADVANTAGES.map((adv, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur hover:-translate-y-2 transition-all">
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-80"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="text-4xl text-white">{adv.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{adv.title}</h3>
                    <p className="text-sm text-white/75 leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-4xl border border-white/10 bg-neutral-900/70 p-8 space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                We blend consulting rigor with product sensibilities. Engagements kick off with immersion workshops, evolve into design sprints, and land with controlled releases plus steady runbooks.
              </p>
              <div className="grid gap-4">
                {[
                  "Discovery → blueprint → pilot in 6 weeks",
                  "Shift-left QA and Site Reliability squads",
                  "Experience research plugged into every sprint",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3 text-white/75">
                    <span className="text-purple-400 mt-1">◆</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Usage Section */}
      <TechUsageSection />

      {/* Expertise Section */}
      <section className="py-28 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">What we ship</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Expertise you can plug in</h2>
            <p className="text-white/70 max-w-3xl mx-auto">From composable storefronts to AI copilots for operations, our guilds plug into your roadmap as autonomous squads.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE.map((exp, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur hover:-translate-y-2 transition-all">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-70"></div>
                <div className="relative z-10 space-y-3">
                  <div className="text-4xl text-white">{exp.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{exp.name}</h3>
                  {exp.description && <p className="text-sm text-white/75 leading-relaxed">{exp.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 px-6 bg-linear-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-4xl border border-white/10 bg-neutral-900/70 backdrop-blur p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">Start a conversation</p>
              <h2 className="text-4xl font-bold text-white">Let’s co-create your next release</h2>
              <p className="text-white/70 text-lg leading-relaxed">Tell us about your SAP Commerce upgrade, AEM personalization backlog, or platform ambition. We will assemble a discovery squad within 48 hours.</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <span className="px-4 py-2 rounded-full border border-white/15">Blueprint workshops</span>
                <span className="px-4 py-2 rounded-full border border-white/15">Accelerated pilots</span>
                <span className="px-4 py-2 rounded-full border border-white/15">Managed run teams</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full bg-neutral-950/60 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
                required
              />
              <textarea
                placeholder="Tell us about your initiative"
                className="w-full bg-neutral-950/60 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 min-h-[140px]"
              ></textarea>
              <button type="submit" className="w-full bg-linear-to-r from-purple-500 to-cyan-500 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-purple-500/30">
                Book a discovery call
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">
            CJSS{" "}
            <span className="text-5xl font-bold mb-16 text-center text-white">
              Certifications
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="group cursor-hover">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center transition-all duration-300 group-hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="text-6xl mb-4 text-purple-400">{cert.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{cert.name}</h3>
                  <p className="text-white text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-28 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">Community</p>
            <h2 className="text-4xl font-bold text-white">How CJSS Gives Back</h2>
            <p className="text-white/70">Impact programs run by CJSS volunteers and partners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {communitySpotlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{item.metric}</p>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
