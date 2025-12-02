import { Baby, BookOpen, Clock, HeartPulse, ShieldCheck, Users } from 'lucide-react'
import { useState } from 'react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Competitive Compensation',
    desc: 'Industry-leading salary packages with annual reviews.',
    gradient: 'from-cyan-400/20 to-purple-500/10',
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    desc: 'Certifications, courses, workshops, and mentorships.',
    gradient: 'from-purple-400/20 to-pink-400/10',
  },
  {
    icon: Baby,
    title: 'Parental Leave',
    desc: 'Supportive policies for growing families.',
    gradient: 'from-blue-400/20 to-cyan-500/10',
  },
  {
    icon: HeartPulse,
    title: 'Wellness & Mental Health Support',
    desc: 'Access to wellness programs, mental health breaks, and employee assistance.',
    gradient: 'from-red-400/20 to-pink-500/10',
  },

  {
    icon: Clock,
    title: 'Generous Personal Time Off',
    desc: 'Flexible vacation, wellness days, and holidays.',
    gradient: 'from-amber-300/25 to-orange-400/10',
  },
  {
    icon: Users,
    title: 'Life Coverage',
    desc: 'Comprehensive insurance and safeguarding programs.',
    gradient: 'from-green-400/25 to-emerald-400/10',
  },
]

export default function BenefitsSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  return (
    <section
      // className="relative px-6 pt-10 pb-24 overflow-hidden text-white"
      className="px-6 pt-10 pb-24"
      // style={{
      //   backgroundImage:
      //     'linear-gradient(transparent 79px, rgba(148,163,184,0.16) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.16) 80px)',
      //   backgroundSize: '80px 80px',
      //   backgroundColor: 'rgb(2,6,23)',
      // }}
      onMouseMove={(e) => {
        setCursorPos({ x: e.clientX, y: e.clientY })
      }}
    >
      {/* Cursor glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0,180,255,0.12), transparent 45%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
          Benefits & Perks
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-white/70">
          Thoughtfully designed to help you grow, stay healthy, and live well.
        </p>
      </div>

      {/* Benefits grid */}
      <div className="relative z-10 grid max-w-6xl gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, index) => {
          const Icon = b.icon

          return (
            <div
              key={index}
              className="relative group p-[2px] rounded-3xl transition-all duration-500"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Soft + Neon glow border */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-br ${b.gradient}`}
              />

              {/* Card */}
              <div
                className="relative rounded-3xl bg-[#0b1625]/60 backdrop-blur-xl border border-white/10 p-8 h-full transition-all duration-500"
                style={{
                  transform: 'perspective(900px)',
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget
                  const rect = card.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const rotateX = ((y - rect.height / 2) / 20) * -1
                  const rotateY = (x - rect.width / 2) / 20
                  card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget
                  card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`
                }}
              >
                {/* Floating glow on hover */}
                <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />

                <Icon className="w-12 h-12 mb-5 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,200,255,0.4)]" />

                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{b.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
