// "use client";

// import { BadgeCheck, KeyRound, Lock, ShieldCheck } from "lucide-react";
// import { useEffect, useRef } from "react";

// const ISOSection = () => {
//   const ref = useRef<HTMLDivElement>(null);

//   // Scroll reveal
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting)
//           ref.current?.classList.add("iso-visible");
//       },
//       { threshold: 0.3 }
//     );
//     if (ref.current) observer.observe(ref.current);
//   }, []);

//   return (
//     <section className="relative px-4 pt-12 pb-24 overflow-hidden text-white bg-black sm:px-6 md:px-10">
//       {/* Subtle gradient overlay for depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

//       {/* Subtle grid pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02] pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Floating lights (hidden on mobile for performance) */}
//       <div className="hidden md:block absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[200px] rounded-full"></div>
//       <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/15 blur-[220px] rounded-full"></div>

//       <div
//         ref={ref}
//         className="relative z-10 max-w-5xl mx-auto text-center translate-y-10 opacity-0 iso-transition"
//       >
//         {/* ISO Badge */}
//         <div className="relative inline-block mb-10">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl animate-pulse"></div>

//           <div className="relative p-8 sm:p-10 md:p-12 rounded-full bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,170,255,0.2)]">
//             <BadgeCheck className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,200,255,0.6)] animate-float" />

//             {/* Shine Sweep */}
//             <div className="absolute top-0 left-[-100%] w-full h-full rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
//           We Are Certified & Compliant
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
//             ISO 27001:2022
//           </span>
//         </h2>

//         <p className="max-w-3xl px-2 mx-auto mb-16 text-sm leading-relaxed sm:text-base md:text-lg text-white/70">
//           CJSS Technologies maintains the highest international standards for
//           information security. We ensure enterprise-grade protection, rigorous
//           compliance, secure engineering practices, and continuous monitoring —
//           keeping your data and systems safe at all times.
//         </p>
//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               icon: ShieldCheck,
//               title: "Security Compliance",
//               desc: "Audited & certified for ISO 27001:2022",
//             },
//             {
//               icon: Lock,
//               title: "Password Policies",
//               desc: "Strict enforcement: rotation, MFA, encryption",
//             },
//             {
//               icon: KeyRound,
//               title: "Access Control",
//               desc: "Role-based access with zero-trust layers",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Data Governance",
//               desc: "Continuous monitoring & audit readiness",
//             },
//           ].map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={i}
//                 className="relative p-6 sm:p-7 md:p-8
//                    overflow-hidden rounded-3xl
//                    border border-white/10
//                    bg-[#0a0a0a]/80 backdrop-blur-xl
//                    shadow-lg transition-all duration-300
//                    hover:-translate-y-2
//                    flex flex-col items-center text-center
//                    group"
//               >
//                 {/* Hover Glow */}
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all
//                         bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-xl"
//                 />

//                 {/* Cursor Light Blob */}
//                 <div
//                   className="absolute inset-0 pointer-events-none hidden md:block
//                         opacity-0 group-hover:opacity-100 transition-all duration-500
//                         bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(0,180,255,0.25),transparent_60%)]"
//                 />

//                 {/* ICON – CENTERED */}
//                 <Icon
//                   className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
//                      text-cyan-300 mb-5
//                      drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]
//                      magnetic-icon"
//                 />

//                 {/* TITLE */}
//                 <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
//                   {item.title}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Styles */}
//       <style>{`
//         .iso-transition {
//           transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.21,1.02,.73,1);
//         }
//         .iso-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         @keyframes float {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float { animation: float 4s ease-in-out infinite; }

//         @keyframes shine {
//           0% { transform: translateX(0); opacity: 0; }
//           40% { opacity: 0.3; }
//           100% { transform: translateX(200%); opacity: 0; }
//         }
//         .animate-shine {
//           animation: shine 3s infinite ease-in-out;
//         }

//         .magnetic-icon {
//           transition: transform 0.3s ease;
//         }
//         .group:hover .magnetic-icon {
//           transform: scale(1.08);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ISOSection;

// "use client";

// import { BadgeCheck, KeyRound, Lock, ShieldCheck } from "lucide-react";
// import { useEffect, useRef } from "react";

// /**
//  * Soft premium gradient
//  * Matches "Career Growth & Mentor Stories"
//  */
// const SOFT_GRADIENT =
//   "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400";

// const ISOSection = () => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           ref.current?.classList.add("iso-visible");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative px-4 pt-16 pb-28 overflow-hidden bg-black sm:px-6 md:px-10">
//       {/* SVG gradient for icons */}
//       <svg width="0" height="0">
//         <defs>
//           <linearGradient
//             id="softIconGradient"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="0%"
//           >
//             <stop offset="0%" stopColor="#a78bfa" /> {/* violet-400 */}
//             <stop offset="50%" stopColor="#38bdf8" /> {/* sky-400 */}
//             <stop offset="100%" stopColor="#22d3ee" /> {/* cyan-400 */}
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Background depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

//       {/* Subtle grid */}
//       <div
//         className="absolute inset-0 opacity-[0.02] pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div
//         ref={ref}
//         className="relative z-10 max-w-5xl mx-auto text-center translate-y-10 opacity-0 iso-transition"
//       >
//         {/* Floating badge icon */}
//         <div className="relative inline-block mb-12">
//           <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-2xl" />

//           <div className="relative p-10 rounded-full bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl">
//             <BadgeCheck className="w-20 h-20" stroke="url(#softIconGradient)" />
//           </div>
//         </div>

//         {/* Headings */}
//         <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
//           <span className={`block ${SOFT_GRADIENT}`}>
//             We Are Certified &amp; Compliant
//           </span>
//           <span className={`block ${SOFT_GRADIENT}`}>ISO 27001:2022</span>
//         </h2>

//         {/* Description (unchanged, calm) */}
//         <p className="max-w-3xl px-2 mx-auto mb-14 text-sm leading-relaxed sm:text-base md:text-lg text-white/70">
//           CJSS Technologies maintains the highest international standards for
//           information security. We ensure enterprise-grade protection, rigorous
//           compliance, secure engineering practices, and continuous monitoring —
//           keeping your data and systems safe at all times.
//         </p>

//         {/* Certification logos */}
//         <div className="flex flex-wrap items-center justify-center gap-14 mb-20">
//           <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-white/95 shadow-md">
//             <img
//               src="/images/intertek-iso.jpg"
//               alt="Intertek ISO 27001 Certification"
//               className="h-24 sm:h-28 md:h-32 w-auto"
//             />
//           </div>

//           <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-white/95 shadow-md">
//             <img
//               src="/images/ukas.jpg"
//               alt="UKAS Management Systems"
//               className="h-24 sm:h-28 md:h-32 w-auto"
//             />
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               icon: ShieldCheck,
//               title: "Security Compliance",
//               desc: "Audited & certified for ISO 27001:2022",
//             },
//             {
//               icon: Lock,
//               title: "Password Policies",
//               desc: "Strict enforcement: rotation, MFA, encryption",
//             },
//             {
//               icon: KeyRound,
//               title: "Access Control",
//               desc: "Role-based access with zero-trust layers",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Data Governance",
//               desc: "Continuous monitoring & audit readiness",
//             },
//           ].map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={i}
//                 className="relative p-6 sm:p-7 md:p-8
//                   rounded-3xl border border-white/10
//                   bg-[#0a0a0a]/80 backdrop-blur-xl
//                   transition-all duration-300
//                   hover:-translate-y-2
//                   text-center"
//               >
//                 {/* Icon */}
//                 <Icon
//                   className="w-11 h-11 mx-auto mb-5 opacity-90"
//                   stroke="url(#softIconGradient)"
//                 />

//                 {/* Title */}
//                 <h3
//                   className={`mb-2 text-lg font-semibold sm:text-xl ${SOFT_GRADIENT}`}
//                 >
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         .iso-transition {
//           transition: opacity 0.8s ease,
//             transform 0.8s cubic-bezier(.21,1.02,.73,1);
//         }
//         .iso-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ISOSection;
"use client";

import { BadgeCheck, KeyRound, Lock, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

/* Gradient used everywhere */
const SOFT_GRADIENT =
  // "text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-sky-300 to-cyan-300";
  "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300";

export default function ISOSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("iso-visible");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative px-4 pt-20 pb-32 overflow-hidden sm:px-6 md:px-10">
      {/* ================= ICON GRADIENT ================= */}
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="softIconGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="50%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
        </defs>
      </svg>

      {/* ================= BACKGROUND (MATCHES BENEFITS) ================= */}
      <div className="absolute inset-0 bg-black" />

      {/* Ambient glows */}
      {/* <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] bg-violet-500/20 blur-[160px]" /> */}

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
        {/* Floating Badge */}
        <div className="relative inline-block mb-14">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative p-10 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
            <BadgeCheck className="w-20 h-20" stroke="url(#softIconGradient)" />
          </div>
        </div>

        {/* ================= HEADINGS (FIXED GRADIENT) ================= */}
        <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          <span className={`block ${SOFT_GRADIENT}`}>
            We Are Certified &amp; Compliant
          </span>
          <span className={`block ${SOFT_GRADIENT}`}>ISO 27001:2022</span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl px-2 mx-auto mb-16 text-sm leading-relaxed sm:text-base md:text-lg text-white/75">
          CJSS Technologies maintains the highest international standards for
          information security. We ensure enterprise-grade protection, rigorous
          compliance, secure engineering practices, and continuous monitoring —
          keeping your data and systems safe at all times.
        </p>

        {/* ================= LOGOS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-14 mb-24">
          <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-white shadow-md">
            <img
              src="/images/intertek-iso.jpg"
              alt="Intertek ISO 27001 Certification"
              className="h-24 sm:h-28 md:h-32 w-auto"
            />
          </div>

          <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-white shadow-md">
            <img
              src="/images/ukas.jpg"
              alt="UKAS Management Systems"
              className="h-24 sm:h-28 md:h-32 w-auto"
            />
          </div>
        </div>

        {/* ================= SECURITY CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl
                           p-6 sm:p-7 md:p-8 text-center transition-all duration-300
                           hover:-translate-y-2"
              >
                <Icon
                  className="w-11 h-11 mx-auto mb-5"
                  stroke="url(#softIconGradient)"
                />

                <h3
                  className={`mb-2 text-lg font-semibold sm:text-xl ${SOFT_GRADIENT}`}
                >
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
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
