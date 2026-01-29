"use client";

import {
  ShieldCheck,
  BookOpen,
  Baby,
  HeartPulse,
  Clock,
  Users,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Competitive Compensation",
    desc: "Industry-leading salary packages with annual reviews.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    desc: "Certifications, courses, workshops, and mentorships.",
  },
  {
    icon: Baby,
    title: "Parental Leave",
    desc: "Supportive policies for growing families.",
  },
  {
    icon: HeartPulse,
    title: "Wellness & Mental Health Support",
    desc: "Access to wellness programs, mental health breaks, and employee assistance.",
  },
  {
    icon: Clock,
    title: "Generous Personal Time Off",
    desc: "Flexible vacation, wellness days, and holidays.",
  },
  {
    icon: Users,
    title: "Life Coverage",
    desc: "Comprehensive insurance and safeguarding programs.",
  },
];

export default function BenefitsSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative px-4 pt-16 pb-28 md:px-6 overflow-hidden"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Cursor glow */}
      <div
        className="fixed inset-0 z-0 hidden pointer-events-none md:block"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(56,189,248,0.14), transparent 45%)`,
        }}
      />

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto mb-14 text-center">
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Benefits &{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
            Perks
          </span>
        </h2>
        <p className="max-w-2xl px-3 mx-auto mt-4 text-sm md:text-lg text-white/60">
          Thoughtfully designed to help you grow, stay healthy, and live well.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, idx) => {
          const Icon = b.icon;
          const isPurple = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
            >
              {/* Icon - Same style as AboutPage */}
              <div className="mb-5">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border rounded-full transition-transform group-hover:scale-105 ${
                    isPurple
                      ? "bg-purple-500/15 border-purple-300/60"
                      : "bg-sky-500/15 border-sky-300/60"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 md:w-7 md:h-7 ${
                      isPurple ? "text-purple-300" : "text-sky-300"
                    }`}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg md:text-xl font-semibold text-white">
                {b.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-white/60">
                {b.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
