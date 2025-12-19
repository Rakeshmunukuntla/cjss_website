// import { EXPERTISE } from "../../lib/Constants"
// import { useState, useEffect, useRef } from "react"
// import Icon from "../Icon"

// export const ExpertiseSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = parseInt(entry.target.getAttribute("data-index") || "0")
//             setVisibleIndices((prev) => new Set([...prev, idx]))
//           }
//         })
//       },
//       { threshold: 0.1 }
//     )

//     const cards = sectionRef.current?.querySelectorAll("[data-index]")
//     cards?.forEach((card) => observer.observe(card))

//     return () => observer.disconnect()
//   }, [])

//   const columns = 3
//   const expertiseWithIndex = EXPERTISE.map((item, idx) => ({ ...item, idx }))
//   const columnData = Array.from({ length: columns }, (_, colIdx) =>
//     expertiseWithIndex.filter((item) => item.idx % columns === colIdx)
//   )

//   const columnOffsets = ["", "mt-10", "mt-20"]

//   return (
//     <section className="relative px-6 py-20 overflow-hidden bg-neutral-950" ref={sectionRef}>
//       {/* Animated background elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-orbFloat"></div>
//         <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
//         <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-2xl animate-breathe" style={{ animationDuration: "6s" }}></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">Our Expertise</h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {columnData.map((column, colIdx) => (
//             <div key={colIdx} className={`space-y-8 ${columnOffsets[colIdx] ?? ""}`}>
//               {column.map((item) => (
//                 <div
//                   key={item.name}
//                   data-index={item.idx}
//                   className={`group relative rounded-3xl border border-neutral-800 bg-neutral-900/70 backdrop-blur flex flex-col gap-4 p-6 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] hover:border-purple-400/40 hover:bg-linear-to-br hover:from-purple-600/10 hover:to-cyan-600/10 hover:shadow-2xl hover:shadow-purple-500/20 ${
//                     visibleIndices.has(item.idx) ? "animate-fadeInUp" : "opacity-0"
//                   }`}
//                   style={{ animationDelay: `${item.idx * 0.08}s` }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="text-3xl text-purple-300 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
//                         <Icon name={item.icon} className="w-8 h-8" />
//                       </div>
//                       <div>
//                         <p className="text-lg font-semibold text-white">{item.name}</p>
//                         <p className="text-xs uppercase tracking-[0.2em] text-white/60">Core capability</p>
//                       </div>
//                     </div>
//                     <span className="text-[11px] font-semibold text-white/60 border border-white/10 rounded-full px-3 py-1">
//                       {item.idx + 1 < 10 ? `0${item.idx + 1}` : item.idx + 1}
//                     </span>
//                   </div>

//                   <p className="text-sm leading-relaxed text-white/70">{item.description}</p>

//                   <div className="pt-4 mt-2 overflow-hidden text-sm transition-all duration-500 ease-out border-t opacity-0 border-white/5 text-white/80 max-h-0 group-hover:max-h-40 group-hover:opacity-100">
//                     <p className="mb-1 font-semibold text-white">How we apply it</p>
//                     <p className="text-white/70">
//                       Embedded squads leverage this capability inside client product teams—covering strategy, build, and run.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// import { EXPERTISE } from '../../lib/Constants';
// import { useState, useEffect, useRef } from 'react';
// import Icon from '../Icon';

// export const ExpertiseSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = parseInt(entry.target.getAttribute('data-index') || '0');
//             setVisibleIndices((prev) => new Set([...prev, idx]));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = sectionRef.current?.querySelectorAll('[data-index]');
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   const columns = 3;
//   const expertiseWithIndex = EXPERTISE.map((item, idx) => ({ ...item, idx }));
//   const columnData = Array.from({ length: columns }, (_, colIdx) =>
//     expertiseWithIndex.filter((item) => item.idx % columns === colIdx)
//   );

//   const columnOffsets = ['', 'mt-10', 'mt-20'];

//   return (
//     <section className="relative px-6 overflow-hidden py-28 bg-neutral-950" ref={sectionRef}>
//       {/* Keyframes inside this file only */}
//       <style>{`
//         @keyframes slowFloat {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-25px); }
//           100% { transform: translateY(0px); }
//         }
//         @keyframes slowFloat2 {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(25px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-slowFloat { animation: slowFloat 9s ease-in-out infinite; }
//         .animate-slowFloat2 { animation: slowFloat2 12s ease-in-out infinite; }
//       `}</style>

//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
//         <div
//           className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full blur-[180px]"
//           style={{
//             transform: 'translate(-50%, -50%)',
//             background:
//               'radial-gradient(circle at center, rgba(145, 92, 255, 0.28), rgba(63, 155, 255, 0.20) 35%, rgba(0, 160, 255, 0.12) 60%, rgba(0, 0, 0, 0) 78%)',
//           }}
//         />
//         <div
//           className="absolute -top-32 -left-28 w-[650px] h-[650px] blur-[150px] rounded-full animate-slowFloat"
//           style={{
//             background:
//               'conic-gradient(from 0deg, rgba(153, 0, 255, 0.32), rgba(0, 210, 255, 0.22), rgba(0, 255, 200, 0.20), rgba(153, 0, 255, 0.32))',
//           }}
//         />
//         <div
//           className="absolute bottom-[-220px] right-[-80px] w-[700px] h-[700px] blur-[170px] rounded-full animate-slowFloat2"
//           style={{
//             background: 'radial-gradient(circle at center, rgba(0, 185, 255, 0.22), rgba(0,0,0,0))',
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="mb-20 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
//           Our Expertise
//         </h2>

//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
//           {columnData.map((column, colIdx) => (
//             <div key={colIdx} className={`space-y-12 ${columnOffsets[colIdx] ?? ''} pb-16`}>
//               {column.map((item) => (
//                 <div
//                   key={item.name}
//                   data-index={item.idx}
//                   style={{ animationDelay: `${item.idx * 0.08}s` }}
//                   className={`
//                     group relative rounded-3xl border border-neutral-800 bg-neutral-900/70
//                     backdrop-blur px-6 py-7 flex flex-col gap-5
//                     transition-all duration-700 ease-out
//                     hover:-translate-y-2 hover:scale-[1.008]
//                     hover:border-purple-400/40 hover:bg-linear-to-br
//                     hover:from-purple-600/10 hover:to-cyan-600/10
//                     hover:shadow-2xl hover:shadow-purple-500/20
//                     ${visibleIndices.has(item.idx) ? 'animate-fadeInUp' : 'opacity-0'}
//                   `}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="text-3xl text-purple-300 transition-all duration-700 ease-out group-hover:scale-115">
//                         <Icon name={item.icon} className="w-8 h-8" />
//                       </div>
//                       <div>
//                         <p className="text-lg font-semibold text-white">{item.name}</p>
//                         <p className="text-xs uppercase tracking-[0.2em] text-white/60">
//                           Core capability
//                         </p>
//                       </div>
//                     </div>
//                     <span className="text-[11px] font-semibold text-white/60 border border-white/10 rounded-full px-3 py-1">
//                       {item.idx + 1 < 10 ? `0${item.idx + 1}` : item.idx + 1}
//                     </span>
//                   </div>

//                   <p className="text-sm leading-relaxed text-white/70">{item.description}</p>

//                   {/* Smooth, slower open/close like Careers but softer */}
//                   <div className="pt-4 overflow-hidden text-sm transition-all duration-700 ease-out border-t opacity-0 border-white/5 text-white/80 max-h-0 group-hover:max-h-40 group-hover:opacity-100">
//                     <p className="mb-1 font-semibold text-white">How we apply it</p>
//                     <p className="text-white/70">
//                       Embedded squads leverage this capability inside client product teams—covering
//                       strategy, build, and run.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

import { useEffect, useRef, useState } from "react";
import { EXPERTISE } from "../../lib/Constants";
import Icon from "../Icon";

export const ExpertiseSection = () => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(
              entry.target.getAttribute("data-index") || "0"
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

  /* ---- Column layout logic ---- */
  const columns = 3;
  const expertiseWithIndex = EXPERTISE.map((item, idx) => ({ ...item, idx }));
  const columnData = Array.from({ length: columns }, (_, colIdx) =>
    expertiseWithIndex.filter((item) => item.idx % columns === colIdx)
  );
  const columnOffsets = ["", "mt-10", "mt-20"];

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-28 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="mb-20 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
          Our Expertise
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {columnData.map((column, colIdx) => (
            <div
              key={colIdx}
              className={`space-y-12 ${columnOffsets[colIdx]} pb-16`}
            >
              {column.map((item) => (
                <div
                  key={item.name}
                  data-index={item.idx}
                  style={{ animationDelay: `${item.idx * 0.08}s` }}
                  className={`
                    group relative rounded-3xl border border-neutral-800
                    bg-neutral-900
                    px-6 py-7 flex flex-col gap-5
                    transition-all duration-700 ease-out
                    hover:-translate-y-2 hover:scale-[1.01]
                    hover:border-white/30 hover:bg-neutral-800
                    hover:shadow-xl hover:shadow-black/40
                    ${
                      visibleIndices.has(item.idx)
                        ? "animate-fadeInUp"
                        : "opacity-0"
                    }
                  `}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-white transition-transform duration-500 group-hover:scale-110">
                        <Icon name={item.icon} className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {item.name}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                          Core capability
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-neutral-400 border border-neutral-700 rounded-full px-3 py-1">
                      {item.idx + 1 < 10 ? `0${item.idx + 1}` : item.idx + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {item.description}
                  </p>

                  {/* Hover Expand */}
                  <div className="pt-4 overflow-hidden text-sm transition-all duration-700 ease-out border-t border-neutral-800 text-neutral-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="mb-1 font-semibold text-white">
                      How we apply it
                    </p>
                    <p className="text-neutral-400">
                      Embedded squads leverage this capability inside client
                      product teams—covering strategy, build, and run.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
