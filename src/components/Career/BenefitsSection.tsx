// import {
//   Baby,
//   BookOpen,
//   Clock,
//   HeartPulse,
//   ShieldCheck,
//   Users,
// } from "lucide-react";
// import { useState } from "react";

// const benefits = [
//   {
//     icon: ShieldCheck,
//     title: "Competitive Compensation",
//     desc: "Industry-leading salary packages with annual reviews.",
//     gradient: "from-cyan-400/20 to-purple-500/10",
//   },
//   {
//     icon: BookOpen,
//     title: "Learning & Development",
//     desc: "Certifications, courses, workshops, and mentorships.",
//     gradient: "from-purple-400/20 to-pink-400/10",
//   },
//   {
//     icon: Baby,
//     title: "Parental Leave",
//     desc: "Supportive policies for growing families.",
//     gradient: "from-blue-400/20 to-cyan-500/10",
//   },
//   {
//     icon: HeartPulse,
//     title: "Wellness & Mental Health Support",
//     desc: "Access to wellness programs, mental health breaks, and employee assistance.",
//     gradient: "from-red-400/20 to-pink-500/10",
//   },
//   {
//     icon: Clock,
//     title: "Generous Personal Time Off",
//     desc: "Flexible vacation, wellness days, and holidays.",
//     gradient: "from-amber-300/25 to-orange-400/10",
//   },
//   {
//     icon: Users,
//     title: "Life Coverage",
//     desc: "Comprehensive insurance and safeguarding programs.",
//     gradient: "from-green-400/25 to-emerald-400/10",
//   },
// ];

// export default function BenefitsSection() {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   return (
//     <section
//       className="relative px-4 pt-12 pb-24 text-white bg-black md:px-6"
//       onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
//     >
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

//       {/* Cursor glow - hidden on mobile */}
//       <div
//         className="fixed inset-0 z-0 hidden pointer-events-none md:block"
//         style={{
//           background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0,180,255,0.12), transparent 45%)`,
//         }}
//       />

//       {/* Heading */}
//       <div className="relative z-10 max-w-6xl mx-auto mb-12 text-center">
//         <h2 className="text-3xl font-extrabold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
//           Benefits & Perks
//         </h2>
//         <p className="max-w-2xl px-3 mx-auto mt-3 text-sm md:text-lg text-white/70">
//           Thoughtfully designed to help you grow, stay healthy, and live well.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {benefits.map((b, index) => {
//           const Icon = b.icon;

//           return (
//             <div
//               key={index}
//               className="relative group p-[2px] rounded-3xl transition-all duration-500"
//             >
//               {/* Glow border */}
//               <div
//                 className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-br ${b.gradient}`}
//               />

//               {/* Card - Updated for black background */}
//               <div
//                 className="relative rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 h-full transition-all duration-500"
//                 onMouseMove={(e) => {
//                   if (window.innerWidth < 768) return;
//                   const card = e.currentTarget;
//                   const rect = card.getBoundingClientRect();
//                   const x = e.clientX - rect.left;
//                   const y = e.clientY - rect.top;
//                   const rotateX = ((y - rect.height / 2) / 20) * -1;
//                   const rotateY = (x - rect.width / 2) / 20;
//                   card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
//                 }}
//                 onMouseLeave={(e) => {
//                   const card = e.currentTarget;
//                   card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
//                 }}
//               >
//                 {/* Hover surface effect */}
//                 <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />

//                 <Icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,200,255,0.4)]" />

//                 <h3 className="text-lg font-semibold md:text-xl">{b.title}</h3>
//                 <p className="mt-3 text-sm leading-relaxed md:text-base text-white/70">
//                   {b.desc}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
"use client";

import {
  Baby,
  BookOpen,
  Clock,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Competitive Compensation",
    desc: "Industry-leading salary packages with annual reviews.",
    gradient: "from-cyan-400/20 to-purple-500/10",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    desc: "Certifications, courses, workshops, and mentorships.",
    gradient: "from-purple-400/20 to-pink-400/10",
  },
  {
    icon: Baby,
    title: "Parental Leave",
    desc: "Supportive policies for growing families.",
    gradient: "from-blue-400/20 to-cyan-500/10",
  },
  {
    icon: HeartPulse,
    title: "Wellness & Mental Health Support",
    desc: "Access to wellness programs, mental health breaks, and employee assistance.",
    gradient: "from-red-400/20 to-pink-500/10",
  },
  {
    icon: Clock,
    title: "Generous Personal Time Off",
    desc: "Flexible vacation, wellness days, and holidays.",
    gradient: "from-amber-300/25 to-orange-400/10",
  },
  {
    icon: Users,
    title: "Life Coverage",
    desc: "Comprehensive insurance and safeguarding programs.",
    gradient: "from-green-400/25 to-emerald-400/10",
  },
];

export default function BenefitsSection() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative px-4 pt-12 pb-24 text-white bg-black md:px-6"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Cursor glow (desktop only) */}
      <div
        className="fixed inset-0 z-0 hidden pointer-events-none md:block"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0,180,255,0.12), transparent 45%)`,
        }}
      />

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
          Benefits & Perks
        </h2>
        <p className="max-w-2xl px-3 mx-auto mt-3 text-sm md:text-lg text-white/70">
          Thoughtfully designed to help you grow, stay healthy, and live well.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, index) => {
          const Icon = b.icon;

          return (
            <div
              key={index}
              className="relative group p-[2px] rounded-3xl transition-all duration-500"
            >
              {/* Glow border */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-br ${b.gradient}`}
              />

              {/* Card */}
              <div
                className="relative rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl
                           border border-white/10 p-6 md:p-8 h-full
                           transition-all duration-500
                           flex flex-col items-center text-center"
                onMouseMove={(e) => {
                  if (window.innerWidth < 768) return;
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rotateX = ((y - rect.height / 2) / 20) * -1;
                  const rotateY = (x - rect.width / 2) / 20;
                  card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                {/* Hover surface */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />

                {/* Icon */}
                <Icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,200,255,0.4)]" />

                {/* Title */}
                <h3 className="text-lg font-semibold md:text-xl">{b.title}</h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed md:text-base text-white/70">
                  {b.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
