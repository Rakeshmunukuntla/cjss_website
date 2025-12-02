'use client'

import { BadgeCheck, KeyRound, Lock, ShieldCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'

const ISOSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  // Scroll reveal for the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current?.classList.add('iso-visible')
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
  }, [])

  return (
    <section
      // className="relative px-6 pt-10 overflow-hidden pb-28"
      className="px-6 pt-6 pb-28"
      // style={{
      //   backgroundImage:
      //     'linear-gradient(transparent 79px, rgba(148, 163, 184, 0.16) 80px), linear-gradient(90deg, transparent 79px, rgba(148, 163, 184, 0.16) 80px)',
      //   backgroundSize: '80px 80px',
      //   backgroundColor: 'rgba(2,6,23,1)',
      // }}
    >
      {/* Floating background lights */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/15 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-700/20 blur-[220px] rounded-full"></div>

      <div
        ref={ref}
        className="relative max-w-5xl mx-auto text-center translate-y-10 opacity-0 iso-transition"
      >
        {/* ISO Badge */}
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/10 blur-2xl animate-pulse"></div>

          <div className="relative p-12 rounded-full bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,170,255,0.25)]">
            <BadgeCheck className="w-24 h-24 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,200,255,0.6)] animate-float" />

            {/* Shine Sweep */}
            <div className="absolute top-0 left-[-100%] w-full h-full rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          </div>
        </div>

        <h2 className="mb-6 text-5xl font-extrabold leading-tight text-white">
          We Are Certified & Compliant
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
            ISO 27001:2022
          </span>
        </h2>

        <p className="max-w-3xl mx-auto mb-16 text-lg leading-relaxed text-white/70">
          CJSS Technologies maintains the highest international standards for information security.
          We ensure enterprise-grade protection, rigorous compliance, secure engineering practices,
          and continuous monitoring — keeping your data and systems safe at all times.
        </p>

        {/* Policies Grid */}
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {/* CARDS */}
          {[
            {
              icon: ShieldCheck,
              title: 'Security Compliance',
              desc: 'Audited & certified for ISO 27001:2022',
            },
            {
              icon: Lock,
              title: 'Password Policies',
              desc: 'Strict enforcement: rotation, MFA, encryption',
            },
            {
              icon: KeyRound,
              title: 'Access Control',
              desc: 'Role-based access with zero-trust layers',
            },
            {
              icon: BadgeCheck,
              title: 'Data Governance',
              desc: 'Continuous monitoring & audit readiness',
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="relative p-6 overflow-hidden transition-all duration-300 border shadow-lg group rounded-3xl border-white/10 bg-neutral-900/50 backdrop-blur-xl hover:-translate-y-2"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 transition-all opacity-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 group-hover:opacity-100 blur-xl"></div>

                {/* Light blob following cursor */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(0,180,255,0.25),transparent_60%)]"></div>

                <Icon className="w-12 h-12 text-cyan-300 mb-4 drop-shadow-[0_0_10px_rgba(0,200,255,0.5)] magnetic-icon" />

                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .iso-transition {
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.21,1.02,.73,1);
        }
        .iso-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes shine {
          0% { transform: translateX(0); opacity: 0; }
          40% { opacity: 0.3; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        .animate-shine {
          animation: shine 3s infinite ease-in-out;
        }

        /* Magnetic Icons */
        .magnetic-icon {
          transition: transform 0.3s ease;
        }
        .group:hover .magnetic-icon {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  )
}

export default ISOSection
