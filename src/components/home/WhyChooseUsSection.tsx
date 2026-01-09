// import { WHY_CHOOSE_US } from "../../lib/Constants";
// import { useState, useEffect, useRef } from "react";

// export const WhyChooseUsSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = parseInt(
//               entry.target.getAttribute("data-index") || "0",
//               10
//             );
//             setVisibleIndices((prev) => new Set([...prev, idx]));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = sectionRef.current?.querySelectorAll("[data-index]");
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   // SVGs array (will rotate if card count > 4)
//   const svgs = [
//     // Concept (Lightbulb)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//      <path d="M9 18h6"></path>
//      <path d="M10 22h4"></path>
//      <path d="M12 2a7 7 0 0 0-7 7c0 2.6 1.7 4.8 4 6v1h6v-1c2.3-1.2 4-3.4 4-6a7 7 0 0 0-7-7z"></path>
//    </svg>`,

//     // Development (Laptop / Coding)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
//      <path d="M2 18h20"></path>
//      <path d="M9 10l-2 2 2 2"></path>
//      <path d="M15 10l2 2-2 2"></path>
//    </svg>`,

//     // Data Analyst (Chart / Analytics)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//      <path d="M3 3v18h18"></path>
//      <rect x="7" y="13" width="3" height="5" rx="1"></rect>
//      <rect x="12" y="9" width="3" height="9" rx="1"></rect>
//      <rect x="17" y="5" width="3" height="13" rx="1"></rect>
//    </svg>`,

//     // Cyber Security (Shield + Lock)
//     `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//      <path d="M12 2l8 4v6c0 6-4 10-8 10s-8-4-8-10V6l8-4z"></path>
//      <circle cx="12" cy="12" r="2"></circle>
//      <path d="M12 14v2"></path>
//    </svg>`,
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-6 py-20 overflow-hidden bg-black"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         {/* Base black background */}
//         <div className="absolute inset-0 bg-black" />

//         {/* Subtle gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

//         {/* Soft blobs – reduced opacity */}
//         <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-sky-300/10 blur-3xl animate-blob" />
//         <div className="absolute -bottom-40 -right-24 w-[460px] h-[460px] rounded-full bg-emerald-300/10 blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 w-[640px] h-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.10),transparent_65%)] blur-3xl" />

//         {/* Subtle dot grid pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
//           Why Choose Us
//         </h2>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {WHY_CHOOSE_US.map((item, idx) => (
//             <div
//               key={idx}
//               data-index={idx}
//               className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(168,85,247,0.25)] hover:border-purple-300/50 ${
//                 visibleIndices.has(idx)
//                   ? "animate-scaleIn opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               }`}
//               style={{ animationDelay: `${idx * 0.1}s` }}
//             >
//               {/* Smooth hover glow */}
//               {/* <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),transparent_75%)]" /> */}
//               <div
//                 className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
//                       bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),rgba(56,189,248,0.10),transparent_75%)]"
//               />

//               {/* Inline SVG inside the blue box */}
//               <div className="relative mb-4">
//                 <div
//                   className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-400 to-sky-400
//  shadow-[0_8px_18px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 animate-iconFloat"
//                 >
//                   <span
//                     className="w-6 h-6"
//                     dangerouslySetInnerHTML={{
//                       __html: svgs[idx % svgs.length],
//                     }}
//                   />
//                 </div>
//               </div>

//               <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-sky-200">
//                 {item.title}
//               </h3>

//               <div className="mb-3 h-0.5 w-12 bg-gradient-to-r from-sky-400 via-emerald-300 to-transparent opacity-80" />

//               <p className="text-sm leading-relaxed transition-colors duration-300 text-white/70 group-hover:text-white/90">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes iconFloat {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-4px); }
//           }
//           .animate-iconFloat {
//             animation: iconFloat 6s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };
// import { WHY_CHOOSE_US } from "../../lib/Constants";
// import { useState, useEffect, useRef } from "react";
// import {
//   Lightbulb,
//   Code2,
//   BarChart3,
//   ShieldCheck,
//   Rocket,
//   Users,
//   Zap,
//   Target,
// } from "lucide-react";

// export const WhyChooseUsSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = parseInt(
//               entry.target.getAttribute("data-index") || "0",
//               10
//             );
//             setVisibleIndices((prev) => new Set([...prev, idx]));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = sectionRef.current?.querySelectorAll("[data-index]");
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   // Icons array (will rotate if card count > 8)
//   const icons = [
//     Lightbulb,
//     Code2,
//     BarChart3,
//     ShieldCheck,
//     Rocket,
//     Users,
//     Zap,
//     Target,
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-6 py-20 overflow-hidden bg-black"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         {/* Base black background */}
//         <div className="absolute inset-0 bg-black" />

//         {/* Subtle gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

//         {/* Soft blobs – purple and sky colors */}
//         <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-3xl animate-blob" />
//         <div className="absolute -bottom-40 -right-24 w-[460px] h-[460px] rounded-full bg-sky-500/10 blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 w-[640px] h-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_65%)] blur-3xl" />

//         {/* Subtle dot grid pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Section Label */}
//         <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4 animate-slideUp">
//           Our Advantages
//         </p>

//         {/* Main Title */}
//         <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white animate-slideUp">
//           Why Choose{" "}
//           <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//             Us
//           </span>
//         </h2>

//         {/* Decorative Divider */}
//         <div className="flex items-center justify-center gap-4 mb-16 animate-slideUp">
//           <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-purple-400" />
//           <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-sky-400" />
//           <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-sky-400" />
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {WHY_CHOOSE_US.map((item, idx) => {
//             const IconComponent = icons[idx % icons.length];
//             return (
//               <div
//                 key={idx}
//                 data-index={idx}
//                 className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(168,85,247,0.20)] hover:border-purple-400/40 ${
//                   visibleIndices.has(idx)
//                     ? "animate-scaleIn opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-4"
//                 }`}
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 {/* Smooth hover glow - purple to sky gradient */}
//                 <div
//                   className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
//                   bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),rgba(56,189,248,0.08),transparent_75%)]"
//                 />

//                 {/* Top accent line on hover */}
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-1/2 transition-all duration-500 bg-gradient-to-r from-purple-400 via-purple-300 to-sky-400" />

//                 {/* Icon with gradient background */}
//                 <div className="relative mb-5">
//                   <div
//                     className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500
//                     shadow-[0_8px_20px_rgba(168,85,247,0.3)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(168,85,247,0.4)] animate-iconFloat"
//                   >
//                     <IconComponent className="w-6 h-6 text-white" />
//                   </div>
//                 </div>

//                 {/* Title with gradient on hover */}
//                 <h3 className="mb-3 text-lg sm:text-xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-sky-300 group-hover:bg-clip-text">
//                   {item.title}
//                 </h3>

//                 {/* Gradient divider line */}
//                 <div className="mb-4 h-[2px] w-12 bg-gradient-to-r from-purple-400 via-sky-400 to-transparent opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />

//                 {/* Description */}
//                 <p className="text-sm leading-relaxed transition-colors duration-300 text-white/60 group-hover:text-white/80">
//                   {item.description}
//                 </p>

//                 {/* Bottom corner accent */}
//                 <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="absolute bottom-3 right-3 w-8 h-[1px] bg-gradient-to-l from-sky-400/50 to-transparent" />
//                   <div className="absolute bottom-3 right-3 w-[1px] h-8 bg-gradient-to-t from-sky-400/50 to-transparent" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes iconFloat {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-4px); }
//           }
//           .animate-iconFloat {
//             animation: iconFloat 6s ease-in-out infinite;
//           }

//           @keyframes slideUp {
//             0% {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-slideUp {
//             animation: slideUp 0.8s ease-out both;
//           }

//           @keyframes scaleIn {
//             0% {
//               opacity: 0;
//               transform: scale(0.95) translateY(10px);
//             }
//             100% {
//               opacity: 1;
//               transform: scale(1) translateY(0);
//             }
//           }
//           .animate-scaleIn {
//             animation: scaleIn 0.6s ease-out both;
//           }

//           @keyframes blob {
//             0%, 100% { transform: translate(0, 0) scale(1); }
//             33% { transform: translate(20px, -30px) scale(1.05); }
//             66% { transform: translate(-15px, 15px) scale(0.95); }
//           }
//           .animate-blob {
//             animation: blob 12s ease-in-out infinite;
//           }
//           .animation-delay-2000 {
//             animation-delay: 2s;
//           }
//         `}
//       </style>
//     </section>
//   );
// };
import { WHY_CHOOSE_US } from "../../lib/Constants";
import { useState, useEffect, useRef } from "react";
import {
  Lightbulb,
  Code2,
  BarChart3,
  ShieldCheck,
  Rocket,
  Users,
  Zap,
  Target,
} from "lucide-react";

export const WhyChooseUsSection = () => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10
            );
            setVisibleIndices((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Icons array
  const icons = [
    Lightbulb,
    Code2,
    BarChart3,
    ShieldCheck,
    Rocket,
    Users,
    Zap,
    Target,
  ];

  // Alternating colors for icons (simple circular style)
  const getIconStyle = (idx: number) => {
    const isPurple = idx % 2 === 0;
    return {
      container: isPurple
        ? "bg-purple-500/15 border-purple-300/60"
        : "bg-sky-500/15 border-sky-300/60",
      icon: isPurple ? "text-purple-300" : "text-sky-300",
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 overflow-hidden bg-black"
    >
      {/* ================= BACKGROUND (Same as AboutUs) ================= */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

        {/* Floating orbs */}
        <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-cyan-400/8 blur-[150px] animate-orbFloat" />
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-fuchsia-500/8 blur-[190px]" />

        {/* Conic gradient animation */}
        <div
          className="absolute -inset-[30%] opacity-40 animate-conicDrift"
          style={{
            backgroundImage:
              "conic-gradient(from 220deg at 10% 0%, rgba(56,189,248,0.08), transparent 20%, rgba(168,85,247,0.10), transparent 55%, rgba(59,130,246,0.08), transparent 80%, rgba(236,72,153,0.10), transparent)",
            transformOrigin: "10% 0%",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Additional glows */}
        <div className="absolute rounded-full -left-40 top-[60%] h-72 w-72 bg-purple-500/10 blur-3xl" />
        <div className="absolute rounded-full -right-40 bottom-[20%] h-80 w-80 bg-sky-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4 animate-fadeInUp">
          Our Advantages
        </p>

        {/* Main Title */}
        <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white animate-fadeInUp">
          Why Choose{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
            Us
          </span>
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fadeInUp">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-purple-400" />
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-sky-400" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-sky-400" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            const iconStyle = getIconStyle(idx);
            const isVisible = visibleIndices.has(idx);

            return (
              <div
                key={idx}
                data-index={idx}
                className={`group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-5 sm:p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.05 + idx * 0.08}s` }}
              >
                {/* Simple circular icon (from carrier page style) */}
                <div className="mb-5">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 border rounded-full ${iconStyle.container} group-hover:scale-105 transition-transform`}
                  >
                    <IconComponent className={`w-5 h-5 ${iconStyle.icon}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg sm:text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= KEYFRAMES ================= */}
      <style>
        {`
          @keyframes conicDrift {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .animate-conicDrift {
            animation: conicDrift 48s linear infinite;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.7s ease-out both;
          }

          @keyframes orbFloat {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(30px, -30px);
            }
          }
          .animate-orbFloat {
            animation: orbFloat 20s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};
