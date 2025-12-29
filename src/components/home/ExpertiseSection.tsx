// "use client";

// import { useEffect, useRef, useState } from "react";
// import { EXPERTISE } from "../../lib/Constants";
// import Icon from "../Icon";

// export const ExpertiseSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = parseInt(
//               entry.target.getAttribute("data-index") || "0"
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

//   /* ---- Column layout logic ---- */
//   const columns = 3;
//   const expertiseWithIndex = EXPERTISE.map((item, idx) => ({ ...item, idx }));
//   const columnData = Array.from({ length: columns }, (_, colIdx) =>
//     expertiseWithIndex.filter((item) => item.idx % columns === colIdx)
//   );
//   const columnOffsets = ["", "mt-10", "mt-20"];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-6 py-28 overflow-hidden bg-black"
//     >
//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="mb-20 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
//           Our Expertise
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
//           {columnData.map((column, colIdx) => (
//             <div
//               key={colIdx}
//               className={`space-y-12 ${columnOffsets[colIdx]} pb-16`}
//             >
//               {column.map((item) => (
//                 <div
//                   key={item.name}
//                   data-index={item.idx}
//                   style={{ animationDelay: `${item.idx * 0.08}s` }}
//                   className={`
//                     group relative rounded-3xl border border-neutral-800
//                     bg-neutral-900
//                     px-6 py-7 flex flex-col gap-5
//                     transition-all duration-700 ease-out
//                     hover:-translate-y-2 hover:scale-[1.01]
//                     hover:border-white/30 hover:bg-neutral-800
//                     hover:shadow-xl hover:shadow-black/40
//                     ${
//                       visibleIndices.has(item.idx)
//                         ? "animate-fadeInUp"
//                         : "opacity-0"
//                     }
//                   `}
//                 >
//                   {/* Header */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="text-white transition-transform duration-500 group-hover:scale-110">
//                         <Icon name={item.icon} className="w-8 h-8" />
//                       </div>
//                       <div>
//                         <p className="text-lg font-semibold text-white">
//                           {item.name}
//                         </p>
//                         <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
//                           Core capability
//                         </p>
//                       </div>
//                     </div>

//                     <span className="text-[11px] font-semibold text-neutral-400 border border-neutral-700 rounded-full px-3 py-1">
//                       {item.idx + 1 < 10 ? `0${item.idx + 1}` : item.idx + 1}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="text-sm leading-relaxed text-neutral-300">
//                     {item.description}
//                   </p>

//                   {/* Hover Expand */}
//                   <div className="pt-4 overflow-hidden text-sm transition-all duration-700 ease-out border-t border-neutral-800 text-neutral-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
//                     <p className="mb-1 font-semibold text-white">
//                       How we apply it
//                     </p>
//                     <p className="text-neutral-400">
//                       Embedded squads leverage this capability inside client
//                       product teams—covering strategy, build, and run.
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
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-sky-300/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-24 w-[460px] h-[460px] rounded-full bg-emerald-300/10 blur-3xl animate-blob animation-delay-2000" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

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
                    group relative overflow-hidden rounded-3xl
                    border border-white/10
                    bg-[#0a0a0a]/80 backdrop-blur-xl
                    px-6 py-7 flex flex-col gap-5
                    shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-2
                    hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]
                    hover:border-cyan-400/40
                    ${
                      visibleIndices.has(item.idx)
                        ? "animate-fadeInUp opacity-100"
                        : "opacity-0"
                    }
                  `}
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_75%)]" />

                  {/* Header */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl
                        bg-gradient-to-br from-sky-500 to-indigo-500
                        shadow-[0_8px_18px_rgba(0,0,0,0.5)]
                        transition-transform duration-500 ease-out
                        group-hover:scale-110 group-hover:-translate-y-0.5
                        animate-iconFloat
                      "
                      >
                        <Icon name={item.icon} className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <p className="text-lg font-semibold text-white">
                          {item.name}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          Core capability
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-white/70 border border-white/15 rounded-full px-3 py-1">
                      {item.idx + 1 < 10 ? `0${item.idx + 1}` : item.idx + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/70 relative z-10">
                    {item.description}
                  </p>

                  {/* Hover Expand */}
                  <div className="relative z-10 pt-4 overflow-hidden text-sm transition-all duration-700 ease-out border-t border-white/10 text-white/70 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="mb-1 font-semibold text-white">
                      How we apply it
                    </p>
                    <p className="text-white/60">
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

      {/* Icon Float Animation */}
      <style>
        {`
          @keyframes iconFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-iconFloat {
            animation: iconFloat 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};
