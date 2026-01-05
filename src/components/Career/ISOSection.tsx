"use client";

import { BadgeCheck, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const ISOSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting)
          ref.current?.classList.add("iso-visible");
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section className="relative px-4 pt-12 pb-24 overflow-hidden text-white bg-black sm:px-6 md:px-10">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating lights (hidden on mobile for performance) */}
      <div className="hidden md:block absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[200px] rounded-full"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/15 blur-[220px] rounded-full"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto text-center translate-y-10 opacity-0 iso-transition"
      >
        {/* ISO Badge */}
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl animate-pulse"></div>

          <div className="relative p-8 sm:p-10 md:p-12 rounded-full bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,170,255,0.2)]">
            <BadgeCheck className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,200,255,0.6)] animate-float" />

            {/* Shine Sweep */}
            <div className="absolute top-0 left-[-100%] w-full h-full rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          We Are Certified & Compliant
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
            ISO 27001:2022
          </span>
        </h2>

        <p className="max-w-3xl px-2 mx-auto mb-16 text-sm leading-relaxed sm:text-base md:text-lg text-white/70">
          CJSS Technologies maintains the highest international standards for
          information security. We ensure enterprise-grade protection, rigorous
          compliance, secure engineering practices, and continuous monitoring —
          keeping your data and systems safe at all times.
        </p>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
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
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative p-6 sm:p-7 md:p-8
                   overflow-hidden rounded-3xl
                   border border-white/10
                   bg-[#0a0a0a]/80 backdrop-blur-xl
                   shadow-lg transition-all duration-300
                   hover:-translate-y-2
                   flex flex-col items-center text-center
                   group"
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all
                        bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-xl"
                />

                {/* Cursor Light Blob */}
                <div
                  className="absolute inset-0 pointer-events-none hidden md:block
                        opacity-0 group-hover:opacity-100 transition-all duration-500
                        bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(0,180,255,0.25),transparent_60%)]"
                />

                {/* ICON – CENTERED */}
                <Icon
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                     text-cyan-300 mb-5
                     drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]
                     magnetic-icon"
                />

                {/* TITLE */}
                <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
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

        .magnetic-icon {
          transition: transform 0.3s ease;
        }
        .group:hover .magnetic-icon {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};

export default ISOSection;
/*
 {/* Cards Grid */
// <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
//   {[
//     {
//       icon: ShieldCheck,
//       title: "Security Compliance",
//       desc: "Audited & certified for ISO 27001:2022",
//     },
//     {
//       icon: Lock,
//       title: "Password Policies",
//       desc: "Strict enforcement: rotation, MFA, encryption",
//     },
//     {
//       icon: KeyRound,
//       title: "Access Control",
//       desc: "Role-based access with zero-trust layers",
//     },
//     {
//       icon: BadgeCheck,
//       title: "Data Governance",
//       desc: "Continuous monitoring & audit readiness",
//     },
//   ].map((item, i) => {
//     const Icon = item.icon;
//     return (
//       <div
//         key={i}
//         className="relative p-6 overflow-hidden transition-all duration-300 border shadow-lg sm:p-7 md:p-8 group rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl hover:-translate-y-2"
//       >
//         {/* Hover Glow */}
//         <div className="absolute inset-0 transition-all opacity-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 group-hover:opacity-100 blur-xl"></div>

//         {/* Light Blob following cursor */}
//         <div className="absolute inset-0 pointer-events-none opacity-0 hidden md:block group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(0,180,255,0.25),transparent_60%)]"></div>

//         {/* <Icon className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-cyan-300 mb-4 drop-shadow-[0_0_10px_rgba(0,200,255,0.5)] magnetic-icon ml-15 " /> */}

//         <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
//           {item.title}
//         </h3>
//         <p className="text-xs leading-relaxed sm:text-sm md:text-base text-white/60">
//           {item.desc}
//         </p>
//       </div>
//     );
//   })}
// </div>
