"use client";

import { BadgeCheck, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ISOSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("iso-visible");
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const securityItems = [
    {
      icon: ShieldCheck,
      title: "Security Compliance",
      desc: "Audited & certified for ISO 27001:2022",
    },
    {
      icon: Lock,
      title: "Password Policies",
      desc: "Strict enforcement: rotation, MFA, encryption",
    },
    {
      icon: KeyRound,
      title: "Access Control",
      desc: "Role-based access with zero-trust layers",
    },
    {
      icon: BadgeCheck,
      title: "Data Governance",
      desc: "Continuous monitoring & audit readiness",
    },
  ];

  return (
    <section className="relative px-4 pt-20 pb-32 overflow-hidden sm:px-6 md:px-10">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto text-center translate-y-10 opacity-0 iso-transition"
      >
        {/* Floating Badge - Updated with AboutPage style */}
        <div className="relative inline-block mb-14">
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="relative p-8 sm:p-10 rounded-full bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 border rounded-full bg-purple-500/15 border-purple-300/60">
              <BadgeCheck className="w-10 h-10 sm:w-12 sm:h-12 text-purple-300" />
            </div>
          </div>
        </div>

        {/* ================= HEADINGS ================= */}
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
          Certified & Compliant
        </p>

        <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-white">
          ISO{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
            27001:2022
          </span>{" "}
          Certified
        </h2>

        {/* Description */}
        <p className="max-w-3xl px-2 mx-auto mb-16 text-sm leading-relaxed sm:text-base md:text-lg text-white/60">
          CJSS Technologies maintains the highest international standards for
          information security. We ensure enterprise-grade protection, rigorous
          compliance, secure engineering practices, and continuous monitoring —
          keeping your data and systems safe at all times.
        </p>

        {/* ================= LOGOS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-20 sm:mb-24">
          <div className="group relative p-6 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60">
            <div className="flex items-center justify-center px-4 py-3 rounded-xl bg-white">
              <img
                src="/images/intertek-iso.jpg"
                alt="Intertek ISO 27001 Certification"
                className="h-20 sm:h-24 md:h-28 w-auto"
              />
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(56,189,248,0.25)] hover:border-sky-300/60">
            <div className="flex items-center justify-center px-4 py-3 rounded-xl bg-white">
              <img
                src="/images/ukas.jpg"
                alt="UKAS Management Systems"
                className="h-20 sm:h-24 md:h-28 w-auto"
              />
            </div>
          </div>
        </div>

        {/* ================= SECURITY CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityItems.map((item, idx) => {
            const Icon = item.icon;
            const isPurple = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center p-6 sm:p-7 md:p-8 text-center rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
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
                <h3 className="mb-2 text-lg font-semibold sm:text-xl text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .iso-transition {
          transition: opacity 0.8s ease,
            transform 0.8s cubic-bezier(.21,1.02,.73,1);
        }
        .iso-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
