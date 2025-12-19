// // // import { CLIENTS } from '../../lib/Constants';
// // // import { useState, useEffect, useRef } from 'react';
// // // import Icon from '../Icon';

// // // export const ClientsSection = () => {
// // //   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
// // //   const sectionRef = useRef<HTMLDivElement>(null);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             const idx = parseInt(entry.target.getAttribute('data-index') || '0');
// // //             setVisibleIndices((prev) => new Set([...prev, idx]));
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     const cards = sectionRef.current?.querySelectorAll('[data-index]');
// // //     cards?.forEach((card) => observer.observe(card));

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   return (
// // //     <section className="relative px-6 py-20 overflow-hidden bg-neutral-900" ref={sectionRef}>
// // //       {/* Animated background elements */}
// // //       <div className="absolute inset-0 -z-10">
// // //         <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-teal/8 rounded-full blur-3xl animate-orbFloat"></div>
// // //         <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-blue/8 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
// // //         <div
// // //           className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-brand-purple/6 rounded-full blur-2xl animate-breathe"
// // //           style={{ animationDuration: '7s' }}
// // //         ></div>
// // //       </div>

// // //       <div className="relative z-10 max-w-6xl mx-auto">
// // //         <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
// // //           Our Clients
// // //         </h2>

// // //         <div className="flex flex-wrap justify-center gap-12 md:gap-16">
// // //           {CLIENTS.map((client, idx) => (
// // //             <div
// // //               key={idx}
// // //               data-index={idx}
// // //               className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 group ${
// // //                 visibleIndices.has(idx) ? 'animate-fadeInScale' : 'opacity-0'
// // //               }`}
// // //               style={{ animationDelay: `${idx * 0.15}s` }}
// // //             >
// // //               {client.image ? (
// // //                 <div className="p-6 transition-all duration-300 rounded-2xl hover:bg-brand-teal/10 group-hover:shadow-lg group-hover:shadow-brand-teal/20">
// // //                   <img
// // //                     src={client.image}
// // //                     alt={client.name}
// // //                     className="object-contain w-auto h-16 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
// // //                   />
// // //                 </div>
// // //               ) : (
// // //                 <div className="transition-all duration-500 text-neutral-700 group-hover:text-brand-teal group-hover:scale-110">
// // //                   <Icon name={client.icon} className="w-8 h-8" />
// // //                 </div>
// // //               )}
// // //               <p className="text-sm font-semibold text-center transition-colors duration-300 text-neutral-700 group-hover:text-brand-teal animate-pulse">
// // //                 {client.name}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // import { useEffect, useRef, useState } from 'react';
// // import { CLIENTS } from '../../lib/Constants';
// // import Icon from '../Icon';

// // export const ClientsSection = () => {
// //   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
// //   const sectionRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const idx = parseInt(entry.target.getAttribute('data-index') || '0');
// //             setVisibleIndices((prev) => new Set([...prev, idx]));
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );
// //     const cards = sectionRef.current?.querySelectorAll('[data-index]');
// //     cards?.forEach((card) => observer.observe(card));
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section className="relative px-6 py-20 overflow-hidden bg-neutral-900" ref={sectionRef}>
// //       {/* Animated background elements */}
// //       <div className="absolute inset-0 -z-10">
// //         {/* 🔥 Gradient style like About Us */}
// //         {/* Corner radial washes */}
// //         <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-400/22 blur-[160px] animate-orbFloat" />
// //         <div className="absolute -bottom-48 -right-28 w-[650px] h-[650px] rounded-full bg-purple-500/22 blur-[180px]" />

// //         {/* Soft horizontal sweep light */}
// //         <div className="absolute inset-x-0 h-64 overflow-hidden -translate-y-1/2 pointer-events-none top-1/2 opacity-70">
// //           <div className="absolute inset-y-0 w-1/2 -left-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)] blur-3xl animate-clientSweep" />
// //         </div>

// //         {/* Subtle tech grid (same as About Us) */}
// //         <div
// //           className="absolute inset-0 opacity-[0.12]"
// //           style={{
// //             backgroundImage:
// //               'linear-gradient(transparent 79px, rgba(148,163,184,0.18) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.18) 80px)',
// //             backgroundSize: '80px 80px',
// //           }}
// //         />
// //       </div>

// //       <div className="relative z-10 max-w-6xl mx-auto">
// //         <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
// //           Our Clients
// //         </h2>

// //         <div className="flex flex-wrap justify-center gap-12 md:gap-16">
// //           {CLIENTS.map((client, idx) => (
// //             <div
// //               key={idx}
// //               data-index={idx}
// //               className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 group ${
// //                 visibleIndices.has(idx) ? 'animate-fadeInScale' : 'opacity-0'
// //               }`}
// //               style={{ animationDelay: `${idx * 0.15}s` }}
// //             >
// //               {client.image ? (
// //                 <div className="p-6 transition-all duration-300 rounded-2xl hover:bg-brand-teal/10 group-hover:shadow-lg group-hover:shadow-brand-teal/20">
// //                   <img
// //                     src={client.image}
// //                     alt={client.name}
// //                     className="object-contain w-auto h-16 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
// //                   />
// //                 </div>
// //               ) : (
// //                 <div className="transition-all duration-500 text-neutral-700 group-hover:text-brand-teal group-hover:scale-110">
// //                   <Icon name={client.icon} className="w-8 h-8" />
// //                 </div>
// //               )}
// //               <p className="text-sm font-semibold text-center transition-colors duration-300 text-neutral-400 group-hover:text-brand-teal animate-pulse">
// //                 {client.name}
// //               </p>

// //               {/* <p className="text-sm font-semibold text-center transition-colors duration-300 text-white-100 group-hover:text-brand-teal animate-pulse">
// //                 {client.name}
// //               </p> */}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Sweep keyframe */}
// //       <style>
// //         {`
// //           @keyframes clientSweep {
// //             0% { transform: translateX(-120%); }
// //             100% { transform: translateX(160%); }
// //           }
// //         `}
// //       </style>
// //     </section>
// //   );
// // };
// import { useEffect, useRef, useState } from "react";
// import { CLIENTS } from "../../lib/Constants";
// import Icon from "../Icon";

// export const ClientsSection = () => {
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

//   return (
//     <section
//       className="relative px-6 py-20 overflow-hidden bg-black"
//       ref={sectionRef}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 -z-10">
//         {/* Corner radial washes */}
//         <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-400/22 blur-[160px] animate-orbFloat" />
//         <div className="absolute -bottom-48 -right-28 w-[650px] h-[650px] rounded-full bg-purple-500/22 blur-[180px]" />

//         {/* Soft horizontal sweep light */}
//         <div className="absolute inset-x-0 h-64 overflow-hidden -translate-y-1/2 pointer-events-none top-1/2 opacity-70">
//           <div className="absolute inset-y-0 w-1/2 -left-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)] blur-3xl animate-clientSweep" />
//         </div>

//         {/* Subtle tech grid */}
//         <div
//           className="absolute inset-0 opacity-[0.12]"
//           style={{
//             backgroundImage:
//               "linear-gradient(transparent 79px, rgba(148,163,184,0.18) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.18) 80px)",
//             backgroundSize: "80px 80px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
//           Our Clients
//         </h2>

//         <div className="flex flex-wrap justify-center gap-12 md:gap-16">
//           {CLIENTS.map((client, idx) => (
//             <div
//               key={idx}
//               data-index={idx}
//               className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 group ${
//                 visibleIndices.has(idx) ? "animate-fadeInScale" : "opacity-0"
//               }`}
//               style={{ animationDelay: `${idx * 0.15}s` }}
//             >
//               {client.image ? (
//                 <div className="p-6 transition-all duration-300 rounded-2xl hover:bg-brand-teal/10 group-hover:shadow-lg group-hover:shadow-brand-teal/20">
//                   <img
//                     src={client.image}
//                     alt={client.name}
//                     className="object-contain w-auto h-16 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
//                   />
//                 </div>
//               ) : (
//                 <div className="transition-all duration-500 text-neutral-700 group-hover:text-brand-teal group-hover:scale-110">
//                   <Icon name={client.icon} className="w-8 h-8" />
//                 </div>
//               )}
//               <p className="text-sm font-semibold text-center transition-colors duration-300 text-neutral-400 group-hover:text-brand-teal animate-pulse">
//                 {client.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sweep keyframe */}
//       <style>
//         {`
//           @keyframes clientSweep {
//             0% { transform: translateX(-120%); }
//             100% { transform: translateX(160%); }
//           }
//         `}
//       </style>
//     </section>
//   );
// };
"use client";

import { useEffect, useRef, useState } from "react";
import { CLIENTS } from "../../lib/Constants";
import Icon from "../Icon";

export const ClientsSection = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
          Our Clients
        </h2>

        {/* Clients Grid */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 group ${
                visibleIndices.has(idx) ? "animate-fadeInScale" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {client.image ? (
                <div className="p-6 transition-all duration-300 rounded-2xl group-hover:bg-white/5 group-hover:shadow-lg">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="object-contain w-auto h-16 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="transition-all duration-500 text-neutral-500 group-hover:text-white group-hover:scale-110">
                  <Icon name={client.icon} className="w-8 h-8" />
                </div>
              )}

              <p className="text-sm font-semibold text-center text-neutral-400 transition-colors duration-300 group-hover:text-white">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
