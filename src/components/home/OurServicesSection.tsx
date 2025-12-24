// // import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
// // import { useState, useEffect, useRef } from "react";
// // import { ArrowRight } from "lucide-react";

// // interface OurServicesSectionProps {
// //   navigateTo?: (page: string) => void;
// // }

// // export const OurServicesSection = ({ navigateTo }: OurServicesSectionProps) => {
// //   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
// //   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
// //   const sectionRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const idx = parseInt(
// //               entry.target.getAttribute("data-index") || "0"
// //             );
// //             setVisibleIndices((prev) => new Set([...prev, idx]));
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     const items = sectionRef.current?.querySelectorAll("[data-index]");
// //     items?.forEach((item) => observer.observe(item));

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section
// //       className="relative px-6 py-32 overflow-hidden bg-black"
// //       ref={sectionRef}
// //     >
// //       {/* Background */}
// //       <div className="absolute inset-0 -z-10">
// //         {/* Soft blobs */}
// //         <div className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full bg-purple-500/18 blur-3xl animate-blob" />
// //         <div className="absolute -bottom-40 left-[-10%] w-[520px] h-[520px] rounded-full bg-cyan-400/18 blur-3xl animate-blob animation-delay-2000" />
// //         {/* Center halo */}
// //         <div className="absolute top-1/2 left-1/2 w-[820px] h-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_65%)] blur-3xl" />
// //         {/* Subtle grid */}
// //         <div
// //           className="absolute inset-0 opacity-[0.12]"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(transparent 79px, rgba(148,163,184,0.16) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.16) 80px)",
// //             backgroundSize: "80px 80px",
// //           }}
// //         />
// //       </div>

// //       <div className="relative z-10 mx-auto max-w-7xl">
// //         <div className="mb-24 text-center md:text-left">
// //           <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-[11px] font-semibold tracking-[0.25em] uppercase rounded-full border border-purple-400/40 bg-purple-500/15 text-purple-100/90 backdrop-blur-md">
// //             <span className="relative flex items-center justify-center w-3 h-3">
// //               <span className="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-60 animate-ping" />
// //               <span className="relative inline-flex w-2 h-2 bg-purple-300 rounded-full" />
// //             </span>
// //             <span style={{ fontFamily: '"Sora", system-ui, sans-serif' }}>
// //               Our services
// //             </span>
// //           </div>

// //           <h2
// //             className="mb-6 text-5xl font-bold text-white md:text-7xl animate-slideUp"
// //             style={{
// //               fontFamily: '"Sora", system-ui, sans-serif',
// //               letterSpacing: "-0.04em",
// //             }}
// //           >
// //             Explore Our <br />
// //             <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 bg-clip-text">
// //               Services
// //             </span>
// //           </h2>
// //           <p
// //             className="max-w-2xl text-xl text-slate-200 animate-slideUp"
// //             style={{
// //               animationDelay: "0.2s",
// //               fontFamily: '"Sora", system-ui, sans-serif',
// //             }}
// //           >
// //             We combine strategic insight with technical expertise to deliver
// //             solutions that drive real business value.
// //           </p>
// //         </div>

// //         <div className="space-y-8">
// //           {TECHNOLOGY_SERVICES.map((service, idx) => (
// //             <div
// //               key={service.id}
// //               data-index={idx}
// //               onMouseEnter={() => setHoveredIndex(idx)}
// //               onMouseLeave={() => setHoveredIndex(null)}
// //               className={`group relative flex flex-col gap-10 overflow-hidden rounded-3xl bg-black/95 border border-neutral-800/50 p-8 transition-all duration-600 ease-out md:flex-row md:gap-16 md:p-12 ${
// //                 visibleIndices.has(idx)
// //                   ? "opacity-100 translate-y-0"
// //                   : "opacity-0 translate-y-16"
// //               }`}
// //               style={{
// //                 boxShadow: visibleIndices.has(idx)
// //                   ? "0 18px 50px rgba(0,0,0,0.85)"
// //                   : "0 0 0 rgba(0,0,0,0)",
// //                 animation: visibleIndices.has(idx)
// //                   ? `revealUp 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards`
// //                   : "none",
// //                 animationDelay: `${idx * 0.15}s`,
// //               }}
// //             >
// //               {/* Hover overlay + outer glow */}
// //               <div className="absolute inset-0 transition-opacity ease-out opacity-0 pointer-events-none rounded-3xl duration-600 group-hover:opacity-100">
// //                 <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),transparent_70%)]" />
// //               </div>
// //               <div className="absolute transition-opacity ease-out border border-transparent opacity-0 pointer-events-none -inset-px rounded-3xl duration-600 group-hover:opacity-100">
// //                 <div className="absolute -inset-px rounded-3xl bg-[conic-gradient(from_210deg,rgba(168,85,247,0.35),rgba(56,189,248,0.28),rgba(129,140,248,0.32),rgba(168,85,247,0.35))] blur-[18px]" />
// //               </div>

// //               {/* Index */}
// //               <div className="relative shrink-0 md:w-32">
// //                 <span
// //                   className="relative z-10 text-6xl font-bold transition-all duration-500 md:text-8xl bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent group-hover:scale-[1.03]"
// //                   style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
// //                 >
// //                   {String(idx + 1).padStart(2, "0")}
// //                 </span>
// //                 <span className="absolute inset-0 text-6xl font-bold transition-all pointer-events-none text-purple-500/0 blur-2xl duration-600 group-hover:text-purple-400/40 md:text-8xl">
// //                   {String(idx + 1).padStart(2, "0")}
// //                 </span>
// //               </div>

// //               {/* Content */}
// //               <div className="relative z-10 flex-1">
// //                 <h3
// //                   className="mb-6 text-3xl font-bold transition-all md:text-5xl duration-400 group-hover:translate-x-1"
// //                   style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
// //                 >
// //                   <span className="text-transparent bg-gradient-to-r from-purple-300 via-cyan-100 to-sky-200 bg-clip-text">
// //                     {service.title}
// //                   </span>
// //                 </h3>

// //                 <div className="grid gap-10 md:grid-cols-2">
// //                   <div className="space-y-6">
// //                     <p className="text-lg leading-relaxed transition-colors text-slate-200 duration-400 group-hover:text-white">
// //                       {service.banner}
// //                     </p>
// //                     <div className="p-6 transition-all border rounded-2xl border-neutral-700/70 bg-neutral-900/60 duration-400 group-hover:border-purple-400/60 group-hover:bg-neutral-900/90">
// //                       <p className="text-sm leading-relaxed transition-colors text-slate-200 duration-400 group-hover:text-slate-50">
// //                         {service.approach}
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <ul className="space-y-3">
// //                     {service.solutions.map((solution, sIdx) => (
// //                       <li
// //                         key={solution.id}
// //                         className="flex items-center gap-3 text-sm transition-all group/item text-slate-200 duration-400"
// //                         style={{
// //                           transform:
// //                             hoveredIndex === idx
// //                               ? "translateX(4px)"
// //                               : "translateX(0)",
// //                           transitionDelay:
// //                             hoveredIndex === idx ? `${sIdx * 40}ms` : "0ms",
// //                         }}
// //                       >
// //                         <span className="inline-flex w-2 h-2 transition-transform rounded-full bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 duration-400 group-hover/item:scale-125" />
// //                         <span className="transition-colors duration-400 group-hover/item:text-slate-50">
// //                           {solution.title}
// //                         </span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 <button
// //                   onClick={() =>
// //                     navigateTo && navigateTo(`service-${service.id}`)
// //                   }
// //                   className="group/btn mt-8 inline-flex items-center gap-3 rounded-full border border-purple-400/60 bg-purple-500/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-purple-100 transition-all duration-400 hover:bg-purple-500/35 hover:text-white"
// //                   style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
// //                 >
// //                   Learn More
// //                   <ArrowRight className="w-4 h-4 transition-transform duration-400 group-hover/btn:translate-x-2" />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// // "use client";

// // import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
// // import { useEffect, useRef, useState } from "react";
// // import { ArrowRight } from "lucide-react";

// // interface OurServicesSectionProps {
// //   navigateTo?: (page: string) => void;
// // }

// // export default function OurServicesSection({
// //   navigateTo,
// // }: OurServicesSectionProps) {
// //   const sectionRef = useRef<HTMLDivElement>(null);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   // invisible scroll control
// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return;

// //     const onWheel = (e: WheelEvent) => {
// //       const delta = e.deltaY;

// //       setActiveIndex((prev) => {
// //         if (delta > 0) {
// //           return Math.min(prev + 1, TECHNOLOGY_SERVICES.length - 1);
// //         } else {
// //           return Math.max(prev - 1, 0);
// //         }
// //       });
// //     };

// //     section.addEventListener("wheel", onWheel, { passive: true });
// //     return () => section.removeEventListener("wheel", onWheel);
// //   }, []);

// //   const service = TECHNOLOGY_SERVICES[activeIndex];

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative bg-black px-6 md:px-10 lg:px-12 py-28"
// //     >
// //       <div className="mx-auto max-w-7xl">
// //         {/* 🔥 HEADER (exact like screenshot) */}
// //         <div className="mb-20">
// //           <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/15 text-purple-200">
// //             OUR SERVICES
// //           </div>

// //           <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
// //             Explore Our{" "}
// //             <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 bg-clip-text">
// //               Services
// //             </span>
// //           </h2>

// //           <p className="mt-6 max-w-2xl text-lg text-slate-300">
// //             We combine strategic insight with technical expertise to deliver
// //             solutions that drive real business value.
// //           </p>
// //         </div>

// //         {/* 🧠 STICKY SERVICE VIEW */}
// //         <div className="relative h-[70vh]">
// //           <div className="sticky top-28 h-[70vh] rounded-3xl border border-white/10 bg-neutral-950">
// //             <div className="grid grid-cols-12 gap-14 h-full px-12">
// //               {/* LEFT NAV */}
// //               <div className="col-span-4 flex items-center">
// //                 <div className="space-y-7">
// //                   {TECHNOLOGY_SERVICES.map((item, i) => {
// //                     const active = i === activeIndex;
// //                     return (
// //                       <div key={item.id} className="relative pl-5">
// //                         {active && (
// //                           <span className="absolute left-0 top-1 h-6 w-[3px] bg-cyan-400 rounded-full" />
// //                         )}

// //                         <h4
// //                           className={`text-lg transition-colors ${
// //                             active
// //                               ? "text-white font-semibold"
// //                               : "text-slate-500"
// //                           }`}
// //                         >
// //                           {item.title}
// //                         </h4>

// //                         {active && (
// //                           <div className="mt-3 space-y-3">
// //                             <p className="text-sm text-slate-400">
// //                               {item.banner}
// //                             </p>
// //                             <button
// //                               onClick={() => navigateTo?.(`service-${item.id}`)}
// //                               className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline"
// //                             >
// //                               Learn more
// //                               <ArrowRight className="w-4 h-4" />
// //                             </button>
// //                           </div>
// //                         )}
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </div>

// //               {/* RIGHT CONTENT */}
// //               <div className="col-span-8 flex items-center">
// //                 <div
// //                   key={service.id}
// //                   className="w-full rounded-2xl bg-neutral-900 border border-white/10 p-10 transition-all duration-500"
// //                 >
// //                   <h3 className="text-3xl font-bold text-white mb-4">
// //                     {service.title}
// //                   </h3>

// //                   <p className="text-slate-300 max-w-xl mb-8">
// //                     {service.approach}
// //                   </p>

// //                   <div className="space-y-4">
// //                     {service.solutions.map((sol) => (
// //                       <div
// //                         key={sol.id}
// //                         className="rounded-xl bg-neutral-800 border border-white/10 p-5"
// //                       >
// //                         <h5 className="text-white font-semibold mb-1">
// //                           {sol.title}
// //                         </h5>
// //                         <p className="text-sm text-slate-400">{sol.summary}</p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
// // import { useEffect, useRef, useState } from "react";
// // import { ArrowRight } from "lucide-react";

// // interface OurServicesSectionProps {
// //   navigateTo?: (page: string) => void;
// // }

// // export default function OurServicesSection({
// //   navigateTo,
// // }: OurServicesSectionProps) {
// //   const sectionRef = useRef<HTMLDivElement>(null);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const accumulatedDelta = useRef(0);

// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return;

// //     const SCROLL_THRESHOLD = 50;
// //     let scrollTimeout: NodeJS.Timeout | null = null;

// //     const onWheel = (e: WheelEvent) => {
// //       // Check if the mouse is over the sticky container
// //       const target = e.target as HTMLElement;
// //       const container = section.querySelector(".sticky");

// //       if (!container || !container.contains(target)) {
// //         // Not inside container, allow normal scroll
// //         return;
// //       }

// //       const scrollingDown = e.deltaY > 0;
// //       const scrollingUp = e.deltaY < 0;

// //       // Allow normal scrolling if at boundaries
// //       const atStart = activeIndex === 0 && scrollingUp;
// //       const atEnd =
// //         activeIndex === TECHNOLOGY_SERVICES.length - 1 && scrollingDown;

// //       if (atStart || atEnd) {
// //         accumulatedDelta.current = 0;
// //         return;
// //       }

// //       e.preventDefault();

// //       if (isTransitioning) return;

// //       accumulatedDelta.current += e.deltaY;

// //       if (scrollTimeout) {
// //         clearTimeout(scrollTimeout);
// //       }

// //       scrollTimeout = setTimeout(() => {
// //         accumulatedDelta.current = 0;
// //       }, 150);

// //       if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
// //         const direction = accumulatedDelta.current > 0 ? 1 : -1;

// //         setActiveIndex((prev) => {
// //           const newIndex =
// //             direction > 0
// //               ? Math.min(prev + 1, TECHNOLOGY_SERVICES.length - 1)
// //               : Math.max(prev - 1, 0);

// //           if (newIndex !== prev) {
// //             setIsTransitioning(true);
// //             setTimeout(() => setIsTransitioning(false), 700);
// //           }

// //           return newIndex;
// //         });

// //         accumulatedDelta.current = 0;
// //       }
// //     };

// //     section.addEventListener("wheel", onWheel, { passive: false });

// //     return () => {
// //       section.removeEventListener("wheel", onWheel);
// //       if (scrollTimeout) clearTimeout(scrollTimeout);
// //     };
// //   }, [isTransitioning, activeIndex]);

// //   const service = TECHNOLOGY_SERVICES[activeIndex];

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative bg-black px-6 md:px-10 lg:px-12 py-28"
// //     >
// //       <div className="mx-auto max-w-7xl">
// //         {/* HEADER */}
// //         <div className="mb-20">
// //           <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/15 text-purple-200">
// //             OUR SERVICES
// //           </div>

// //           <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
// //             Explore Our{" "}
// //             <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 bg-clip-text">
// //               Services
// //             </span>
// //           </h2>

// //           <p className="mt-6 max-w-2xl text-lg text-slate-300">
// //             We combine strategic insight with technical expertise to deliver
// //             solutions that drive real business value.
// //           </p>
// //         </div>

// //         {/* STICKY SERVICE VIEW */}
// //         <div className="relative min-h-screen">
// //           <div className="sticky top-20 h-[85vh] rounded-3xl border border-white/10 bg-neutral-950">
// //             <div className="grid grid-cols-12 gap-14 h-full px-14 py-8">
// //               {/* LEFT NAV */}
// //               <div className="col-span-4 flex items-center">
// //                 <div className="space-y-7 w-full">
// //                   {TECHNOLOGY_SERVICES.map((item, i) => {
// //                     const active = i === activeIndex;
// //                     return (
// //                       <div key={item.id} className="relative pl-5">
// //                         <div
// //                           className={`absolute left-0 top-1 h-6 w-[3px] bg-cyan-400 rounded-full transition-all duration-500 ${
// //                             active
// //                               ? "opacity-100 scale-y-100"
// //                               : "opacity-0 scale-y-50"
// //                           }`}
// //                         />

// //                         <button
// //                           onClick={() => {
// //                             setActiveIndex(i);
// //                             accumulatedDelta.current = 0;
// //                           }}
// //                           className="text-left w-full"
// //                         >
// //                           <h4
// //                             className={`text-lg transition-all duration-500 ${
// //                               active
// //                                 ? "text-white font-semibold"
// //                                 : "text-slate-500 hover:text-slate-400"
// //                             }`}
// //                           >
// //                             {item.title}
// //                           </h4>

// //                           <div
// //                             className={`overflow-hidden transition-all duration-500 ${
// //                               active
// //                                 ? "max-h-40 opacity-100 mt-3"
// //                                 : "max-h-0 opacity-0"
// //                             }`}
// //                           >
// //                             <div className="space-y-3">
// //                               <p className="text-sm text-slate-400">
// //                                 {item.banner}
// //                               </p>
// //                               <button
// //                                 onClick={(e) => {
// //                                   e.stopPropagation();
// //                                   navigateTo?.(`service-${item.id}`);
// //                                 }}
// //                                 className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline transition-all"
// //                               >
// //                                 Learn more
// //                                 <ArrowRight className="w-4 h-4" />
// //                               </button>
// //                             </div>
// //                           </div>
// //                         </button>
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </div>

// //               {/* RIGHT CONTENT */}
// //               <div className="col-span-8 flex items-center relative">
// //                 {TECHNOLOGY_SERVICES.map((svc, idx) => (
// //                   <div
// //                     key={svc.id}
// //                     className={`absolute inset-0 transition-all duration-700 ${
// //                       idx === activeIndex
// //                         ? "opacity-100 translate-x-0"
// //                         : idx < activeIndex
// //                         ? "opacity-0 -translate-x-8 pointer-events-none"
// //                         : "opacity-0 translate-x-8 pointer-events-none"
// //                     }`}
// //                   >
// //                     <div className="w-full rounded-2xl bg-neutral-900 border border-white/10 p-10">
// //                       <h3 className="text-3xl font-bold text-white mb-4">
// //                         {svc.title}
// //                       </h3>

// //                       <p className="text-slate-300 max-w-xl mb-8">
// //                         {svc.approach}
// //                       </p>

// //                       <div className="space-y-4">
// //                         {svc.solutions.map((sol, solIdx) => (
// //                           <div
// //                             key={sol.id}
// //                             className={`rounded-xl bg-neutral-800 border border-white/10 p-5 transition-all duration-500 ${
// //                               idx === activeIndex
// //                                 ? "opacity-100 translate-y-0"
// //                                 : "opacity-0 translate-y-4"
// //                             }`}
// //                             style={{
// //                               transitionDelay:
// //                                 idx === activeIndex
// //                                   ? `${solIdx * 100 + 200}ms`
// //                                   : "0ms",
// //                             }}
// //                           >
// //                             <h5 className="text-white font-semibold mb-1">
// //                               {sol.title}
// //                             </h5>
// //                             <p className="text-sm text-slate-400">
// //                               {sol.summary}
// //                             </p>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Scroll Indicator */}
// //         <div className="flex justify-center gap-2 mt-8">
// //           {TECHNOLOGY_SERVICES.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => {
// //                 setActiveIndex(i);
// //                 accumulatedDelta.current = 0;
// //               }}
// //               className={`h-2 rounded-full transition-all duration-500 ${
// //                 i === activeIndex
// //                   ? "w-8 bg-cyan-400"
// //                   : "w-2 bg-slate-600 hover:bg-slate-500"
// //               }`}
// //               aria-label={`Go to service ${i + 1}`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";

// // import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
// // import { useEffect, useRef, useState } from "react";
// // import { ArrowRight, Sparkles } from "lucide-react";

// // interface OurServicesSectionProps {
// //   navigateTo?: (page: string) => void;
// // }

// // export default function OurServicesSection({
// //   navigateTo,
// // }: OurServicesSectionProps) {
// //   const sectionRef = useRef<HTMLDivElement>(null);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const accumulatedDelta = useRef(0);

// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return;

// //     const SCROLL_THRESHOLD = 50;
// //     let scrollTimeout: NodeJS.Timeout | null = null;

// //     const onWheel = (e: WheelEvent) => {
// //       const target = e.target as HTMLElement;
// //       const container = section.querySelector(".sticky");

// //       if (!container || !container.contains(target)) {
// //         return;
// //       }

// //       const scrollingDown = e.deltaY > 0;
// //       const scrollingUp = e.deltaY < 0;

// //       const atStart = activeIndex === 0 && scrollingUp;
// //       const atEnd =
// //         activeIndex === TECHNOLOGY_SERVICES.length - 1 && scrollingDown;

// //       if (atStart || atEnd) {
// //         accumulatedDelta.current = 0;
// //         return;
// //       }

// //       e.preventDefault();

// //       if (isTransitioning) return;

// //       accumulatedDelta.current += e.deltaY;

// //       if (scrollTimeout) {
// //         clearTimeout(scrollTimeout);
// //       }

// //       scrollTimeout = setTimeout(() => {
// //         accumulatedDelta.current = 0;
// //       }, 150);

// //       if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
// //         const direction = accumulatedDelta.current > 0 ? 1 : -1;

// //         setActiveIndex((prev) => {
// //           const newIndex =
// //             direction > 0
// //               ? Math.min(prev + 1, TECHNOLOGY_SERVICES.length - 1)
// //               : Math.max(prev - 1, 0);

// //           if (newIndex !== prev) {
// //             setIsTransitioning(true);
// //             setTimeout(() => setIsTransitioning(false), 700);
// //           }

// //           return newIndex;
// //         });

// //         accumulatedDelta.current = 0;
// //       }
// //     };

// //     section.addEventListener("wheel", onWheel, { passive: false });

// //     return () => {
// //       section.removeEventListener("wheel", onWheel);
// //       if (scrollTimeout) clearTimeout(scrollTimeout);
// //     };
// //   }, [isTransitioning, activeIndex]);

// //   const service = TECHNOLOGY_SERVICES[activeIndex];

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative bg-black px-6 md:px-10 lg:px-12 py-28"
// //     >
// //       <div className="mx-auto max-w-7xl">
// //         {/* HEADER */}
// //         <div className="mb-20">
// //           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200 shadow-lg shadow-purple-500/20">
// //             <Sparkles className="w-3 h-3" />
// //             OUR SERVICES
// //           </div>

// //           <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
// //             Explore Our{" "}
// //             <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text animate-gradient">
// //               Services
// //             </span>
// //           </h2>

// //           <p className="mt-6 max-w-2xl text-xl text-slate-300 leading-relaxed">
// //             We combine strategic insight with technical expertise to deliver
// //             solutions that drive real business value.
// //           </p>
// //         </div>

// //         {/* STICKY SERVICE VIEW */}
// //         <div className="relative min-h-screen">
// //           <div className="sticky top-20 h-[85vh] rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 shadow-2xl overflow-hidden">
// //             {/* Ambient background effects */}
// //             <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
// //             <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

// //             <div className="grid grid-cols-12 gap-14 h-full px-14 py-8 relative z-10">
// //               {/* LEFT NAV */}
// //               <div className="col-span-4 flex items-center border-r border-white/5">
// //                 <div className="space-y-6 w-full pr-8">
// //                   {TECHNOLOGY_SERVICES.map((item, i) => {
// //                     const active = i === activeIndex;
// //                     return (
// //                       <div key={item.id} className="relative pl-6">
// //                         <div
// //                           className={`absolute left-0 top-2 h-8 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50 ${
// //                             active
// //                               ? "opacity-100 scale-y-100"
// //                               : "opacity-0 scale-y-50"
// //                           }`}
// //                         />

// //                         <button
// //                           onClick={() => {
// //                             setActiveIndex(i);
// //                             accumulatedDelta.current = 0;
// //                           }}
// //                           className="text-left w-full group"
// //                         >
// //                           <h4
// //                             className={`text-xl transition-all duration-500 ${
// //                               active
// //                                 ? "text-white font-bold"
// //                                 : "text-slate-500 hover:text-slate-300 font-medium"
// //                             }`}
// //                           >
// //                             {item.title}
// //                           </h4>

// //                           <div
// //                             className={`overflow-hidden transition-all duration-500 ${
// //                               active
// //                                 ? "max-h-48 opacity-100 mt-4"
// //                                 : "max-h-0 opacity-0"
// //                             }`}
// //                           >
// //                             <div className="space-y-4">
// //                               <p className="text-sm text-slate-400 leading-relaxed">
// //                                 {item.banner}
// //                               </p>
// //                               <button
// //                                 onClick={(e) => {
// //                                   e.stopPropagation();
// //                                   navigateTo?.(`service-${item.id}`);
// //                                 }}
// //                                 className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-all font-medium group"
// //                               >
// //                                 Learn more
// //                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //                               </button>
// //                             </div>
// //                           </div>
// //                         </button>
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </div>

// //               {/* RIGHT CONTENT */}
// //               <div className="col-span-8 flex items-center relative pl-6">
// //                 {TECHNOLOGY_SERVICES.map((svc, idx) => (
// //                   <div
// //                     key={svc.id}
// //                     className={`absolute inset-0 transition-all duration-700 ${
// //                       idx === activeIndex
// //                         ? "opacity-100 translate-x-0"
// //                         : idx < activeIndex
// //                         ? "opacity-0 -translate-x-12 pointer-events-none"
// //                         : "opacity-0 translate-x-12 pointer-events-none"
// //                     }`}
// //                   >
// //                     <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/10 backdrop-blur-sm p-12 flex flex-col justify-center relative overflow-hidden">
// //                       {/* Card glow effect */}
// //                       <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
// //                       <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

// //                       <div className="relative z-10">
// //                         <div className="flex items-center gap-3 mb-6">
// //                           <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500">
// //                             <Sparkles className="w-5 h-5 text-white" />
// //                           </div>
// //                           <h3 className="text-4xl font-bold text-white">
// //                             {svc.title}
// //                           </h3>
// //                         </div>

// //                         <p className="text-slate-300 text-lg max-w-2xl mb-10 leading-relaxed">
// //                           {svc.approach}
// //                         </p>

// //                         <div className="space-y-4">
// //                           {svc.solutions.map((sol, solIdx) => (
// //                             <div
// //                               key={sol.id}
// //                               className={`group rounded-xl bg-neutral-800/50 border border-white/10 p-6 hover:bg-neutral-800 hover:border-cyan-400/30 transition-all duration-500 ${
// //                                 idx === activeIndex
// //                                   ? "opacity-100 translate-y-0"
// //                                   : "opacity-0 translate-y-4"
// //                               }`}
// //                               style={{
// //                                 transitionDelay:
// //                                   idx === activeIndex
// //                                     ? `${solIdx * 100 + 200}ms`
// //                                     : "0ms",
// //                               }}
// //                             >
// //                               <div className="flex items-start gap-4">
// //                                 <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform flex-shrink-0"></div>
// //                                 <div className="flex-1">
// //                                   <h5 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
// //                                     {sol.title}
// //                                   </h5>
// //                                   <p className="text-sm text-slate-400 leading-relaxed">
// //                                     {sol.summary}
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Scroll Indicator */}
// //         <div className="flex justify-center gap-3 mt-10">
// //           {TECHNOLOGY_SERVICES.map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => {
// //                 setActiveIndex(i);
// //                 accumulatedDelta.current = 0;
// //               }}
// //               className={`h-2 rounded-full transition-all duration-500 ${
// //                 i === activeIndex
// //                   ? "w-12 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"
// //                   : "w-2 bg-slate-700 hover:bg-slate-600"
// //               }`}
// //               aria-label={`Go to service ${i + 1}`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
// import { useEffect, useRef, useState } from "react";
// import { ArrowRight, Sparkles } from "lucide-react";

// interface OurServicesSectionProps {
//   navigateTo?: (page: string) => void;
// }

// export default function OurServicesSection({
//   navigateTo,
// }: OurServicesSectionProps) {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const accumulatedDelta = useRef(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const SCROLL_THRESHOLD = 50;
//     let scrollTimeout: NodeJS.Timeout | null = null;
//     let hasEnteredContainer = false;

//     const onWheel = (e: WheelEvent) => {
//       const target = e.target as HTMLElement;
//       const stickyContainer = section.querySelector(".sticky");

//       if (!stickyContainer) return;

//       const isOverContainer = stickyContainer.contains(target);

//       // Once mouse enters container, lock the page scroll
//       if (isOverContainer) {
//         hasEnteredContainer = true;
//       }

//       // If we haven't entered the container yet, allow normal scroll
//       if (!hasEnteredContainer) {
//         return;
//       }

//       const scrollingDown = e.deltaY > 0;
//       const scrollingUp = e.deltaY < 0;

//       const atStart = activeIndex === 0 && scrollingUp;
//       const atEnd =
//         activeIndex === TECHNOLOGY_SERVICES.length - 1 && scrollingDown;

//       // Release scroll only at boundaries
//       if (atStart || atEnd) {
//         accumulatedDelta.current = 0;
//         hasEnteredContainer = false; // Reset for next time
//         return;
//       }

//       // Lock page scroll while navigating through services
//       e.preventDefault();
//       e.stopPropagation();

//       if (isTransitioning) return;

//       accumulatedDelta.current += e.deltaY;

//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }

//       scrollTimeout = setTimeout(() => {
//         accumulatedDelta.current = 0;
//       }, 150);

//       if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
//         const direction = accumulatedDelta.current > 0 ? 1 : -1;

//         setActiveIndex((prev) => {
//           const newIndex =
//             direction > 0
//               ? Math.min(prev + 1, TECHNOLOGY_SERVICES.length - 1)
//               : Math.max(prev - 1, 0);

//           if (newIndex !== prev) {
//             setIsTransitioning(true);
//             setTimeout(() => setIsTransitioning(false), 700);
//           }

//           return newIndex;
//         });

//         accumulatedDelta.current = 0;
//       }
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", onWheel);
//       if (scrollTimeout) clearTimeout(scrollTimeout);
//     };
//   }, [isTransitioning, activeIndex]);

//   const service = TECHNOLOGY_SERVICES[activeIndex];

//   return (
//     <section ref={sectionRef} className="relative bg-black">
//       <div className="mx-auto max-w-7xl min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-12 py-20">
//         {/* HEADER */}
//         <div className="mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200 shadow-lg shadow-purple-500/20">
//             <Sparkles className="w-3 h-3" />
//             OUR SERVICES
//           </div>

//           <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
//             Explore Our{" "}
//             <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text animate-gradient">
//               Services
//             </span>
//           </h2>

//           <p className="mt-6 max-w-2xl text-xl text-slate-300 leading-relaxed">
//             We combine strategic insight with technical expertise to deliver
//             solutions that drive real business value.
//           </p>
//         </div>

//         {/* STICKY SERVICE VIEW */}
//         <div className="relative flex-1">
//           <div className="sticky top-10 h-[80vh] rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 shadow-2xl overflow-hidden">
//             {/* Ambient background effects */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

//             <div className="grid grid-cols-12 gap-14 h-full px-14 py-8 relative z-10">
//               {/* LEFT NAV */}
//               <div className="col-span-4 flex items-center border-r border-white/5">
//                 <div className="space-y-6 w-full pr-8">
//                   {TECHNOLOGY_SERVICES.map((item, i) => {
//                     const active = i === activeIndex;
//                     return (
//                       <div key={item.id} className="relative pl-6">
//                         <div
//                           className={`absolute left-0 top-2 h-8 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50 ${
//                             active
//                               ? "opacity-100 scale-y-100"
//                               : "opacity-0 scale-y-50"
//                           }`}
//                         />

//                         <button
//                           onClick={() => {
//                             setActiveIndex(i);
//                             accumulatedDelta.current = 0;
//                           }}
//                           className="text-left w-full group"
//                         >
//                           <h4
//                             className={`text-xl transition-all duration-500 ${
//                               active
//                                 ? "text-white font-bold"
//                                 : "text-slate-500 hover:text-slate-300 font-medium"
//                             }`}
//                           >
//                             {item.title}
//                           </h4>

//                           <div
//                             className={`overflow-hidden transition-all duration-500 ${
//                               active
//                                 ? "max-h-48 opacity-100 mt-4"
//                                 : "max-h-0 opacity-0"
//                             }`}
//                           >
//                             <div className="space-y-4">
//                               <p className="text-sm text-slate-400 leading-relaxed">
//                                 {item.banner}
//                               </p>
//                               <button
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   navigateTo?.(`service-${item.id}`);
//                                 }}
//                                 className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-all font-medium group"
//                               >
//                                 Learn more
//                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                               </button>
//                             </div>
//                           </div>
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="col-span-8 flex items-center relative pl-6">
//                 {TECHNOLOGY_SERVICES.map((svc, idx) => (
//                   <div
//                     key={svc.id}
//                     className={`absolute inset-0 transition-all duration-700 ${
//                       idx === activeIndex
//                         ? "opacity-100 translate-x-0"
//                         : idx < activeIndex
//                         ? "opacity-0 -translate-x-12 pointer-events-none"
//                         : "opacity-0 translate-x-12 pointer-events-none"
//                     }`}
//                   >
//                     <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/10 backdrop-blur-sm p-12 flex flex-col justify-center relative overflow-hidden">
//                       {/* Card glow effect */}
//                       <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
//                       <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

//                       <div className="relative z-10">
//                         <div className="flex items-center gap-3 mb-6">
//                           <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500">
//                             <Sparkles className="w-5 h-5 text-white" />
//                           </div>
//                           <h3 className="text-4xl font-bold text-white">
//                             {svc.title}
//                           </h3>
//                         </div>

//                         <p className="text-slate-300 text-lg max-w-2xl mb-10 leading-relaxed">
//                           {svc.approach}
//                         </p>

//                         <div className="space-y-4">
//                           {svc.solutions.map((sol, solIdx) => (
//                             <div
//                               key={sol.id}
//                               className={`group rounded-xl bg-neutral-800/50 border border-white/10 p-6 hover:bg-neutral-800 hover:border-cyan-400/30 transition-all duration-500 ${
//                                 idx === activeIndex
//                                   ? "opacity-100 translate-y-0"
//                                   : "opacity-0 translate-y-4"
//                               }`}
//                               style={{
//                                 transitionDelay:
//                                   idx === activeIndex
//                                     ? `${solIdx * 100 + 200}ms`
//                                     : "0ms",
//                               }}
//                             >
//                               <div className="flex items-start gap-4">
//                                 <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform flex-shrink-0"></div>
//                                 <div className="flex-1">
//                                   <h5 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
//                                     {sol.title}
//                                   </h5>
//                                   <p className="text-sm text-slate-400 leading-relaxed">
//                                     {sol.summary}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="flex justify-center gap-3 mt-10">
//           {TECHNOLOGY_SERVICES.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setActiveIndex(i);
//                 accumulatedDelta.current = 0;
//               }}
//               className={`h-2 rounded-full transition-all duration-500 ${
//                 i === activeIndex
//                   ? "w-12 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"
//                   : "w-2 bg-slate-700 hover:bg-slate-600"
//               }`}
//               aria-label={`Go to service ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Shield,
  Target,
} from "lucide-react";

interface OurServicesSectionProps {
  navigateTo?: (page: string) => void;
}

const solutionIcons = [CheckCircle2, Zap, Shield, Target, Sparkles];

export default function OurServicesSection({
  navigateTo,
}: OurServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);
  const [entryDirection, setEntryDirection] = useState<"top" | "bottom" | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  const accumulatedDelta = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null); // Fixed type
  const cooldownRef = useRef(false);

  const totalServices = TECHNOLOGY_SERVICES.length;

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top,
      behavior: "smooth",
    });
  }, []);

  // Desktop scroll handling only
  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const SCROLL_THRESHOLD = 100;
    const COOLDOWN_TIME = 700;

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionCoversViewport = sectionTop <= 5 && sectionTop >= -5;

      const approachingFromTop =
        sectionTop > 0 &&
        sectionTop < viewportHeight * 0.8 &&
        scrollingDown &&
        !isLocked;

      const approachingFromBottom =
        sectionBottom > viewportHeight * 0.2 &&
        sectionBottom < viewportHeight &&
        scrollingUp &&
        !isLocked;

      if (approachingFromTop) {
        e.preventDefault();
        e.stopPropagation();
        setActiveIndex(0);
        setEntryDirection("top");
        setHasCompletedCycle(false);
        scrollToSection();
        setIsLocked(true);
        accumulatedDelta.current = 0;
        cooldownRef.current = true;
        setTimeout(() => {
          cooldownRef.current = false;
        }, COOLDOWN_TIME);
        return;
      }

      if (approachingFromBottom) {
        e.preventDefault();
        e.stopPropagation();
        setActiveIndex(totalServices - 1);
        setEntryDirection("bottom");
        setHasCompletedCycle(false);
        scrollToSection();
        setIsLocked(true);
        accumulatedDelta.current = 0;
        cooldownRef.current = true;
        setTimeout(() => {
          cooldownRef.current = false;
        }, COOLDOWN_TIME);
        return;
      }

      if (!sectionCoversViewport && !isLocked) return;

      const atFirstElement = activeIndex === 0;
      const atLastElement = activeIndex === totalServices - 1;

      const canExitTop =
        atFirstElement &&
        scrollingUp &&
        hasCompletedCycle &&
        entryDirection === "bottom";
      const canExitBottom =
        atLastElement &&
        scrollingDown &&
        hasCompletedCycle &&
        entryDirection === "top";
      const forceExitTop =
        atFirstElement && scrollingUp && entryDirection === "top";
      const forceExitBottom =
        atLastElement && scrollingDown && entryDirection === "bottom";

      if (canExitTop || canExitBottom || forceExitTop || forceExitBottom) {
        setIsLocked(false);
        setHasCompletedCycle(false);
        setEntryDirection(null);
        accumulatedDelta.current = 0;
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      if (cooldownRef.current || isTransitioning) return;

      accumulatedDelta.current += e.deltaY;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        accumulatedDelta.current = 0;
      }, 150);

      if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
        const direction = accumulatedDelta.current > 0 ? 1 : -1;

        setActiveIndex((prev) => {
          const newIndex = Math.max(
            0,
            Math.min(prev + direction, totalServices - 1)
          );

          if (newIndex !== prev) {
            setIsTransitioning(true);
            cooldownRef.current = true;

            if (
              (entryDirection === "top" && newIndex === totalServices - 1) ||
              (entryDirection === "bottom" && newIndex === 0)
            ) {
              setHasCompletedCycle(true);
            }

            setTimeout(() => {
              setIsTransitioning(false);
              cooldownRef.current = false;
            }, COOLDOWN_TIME);
          }
          return newIndex;
        });

        accumulatedDelta.current = 0;
      }
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom < -200 || rect.top > viewportHeight + 200) {
        setIsLocked(false);
        setHasCompletedCycle(false);
        setEntryDirection(null);
        accumulatedDelta.current = 0;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [
    isTransitioning,
    activeIndex,
    isLocked,
    totalServices,
    scrollToSection,
    hasCompletedCycle,
    entryDirection,
    isMobile,
  ]);

  // ==================== MOBILE VIEW ====================
  if (isMobile) {
    return (
      <section className="relative bg-black py-12 px-4">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-lg mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200">
              <Sparkles className="w-3 h-3" />
              OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
              Explore Our{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text">
                Services
              </span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Strategic insight with technical expertise for real business
              value.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-4">
            {TECHNOLOGY_SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 p-4 sm:p-5"
              >
                {/* Service Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {svc.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        Enterprise Ready
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 font-medium">
                        <Zap className="w-3 h-3" />
                        Fast Delivery
                      </span>
                    </div>
                  </div>
                </div>

                {/* Approach */}
                <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-white/5 border border-white/5">
                  <Target className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {svc.approach}
                  </p>
                </div>

                {/* Solutions */}
                <div className="space-y-2 mb-4">
                  {svc.solutions.slice(0, 3).map((sol, solIdx) => {
                    const SolIcon =
                      solutionIcons[solIdx % solutionIcons.length];
                    return (
                      <div
                        key={sol.id}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-800/50 border border-white/5"
                      >
                        <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                          <SolIcon className="w-3 h-3 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-white font-medium text-sm">
                            {sol.title}
                          </h5>
                          <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                            {sol.summary}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => navigateTo?.(`service-${svc.id}`)}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-cyan-600 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ==================== DESKTOP VIEW ====================
  return (
    <section ref={sectionRef} className="relative bg-black h-screen">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto max-w-7xl h-full flex flex-col px-6 md:px-10 lg:px-12 py-4">
          {/* HEADER */}
          <div className="mb-4 flex-shrink-0">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200 w-fit">
                <Sparkles className="w-2.5 h-2.5" />
                OUR SERVICES
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Explore Our{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text">
                  Services
                </span>
              </h2>
              <p className="max-w-md text-xs lg:text-sm text-slate-400 leading-relaxed">
                Strategic insight with technical expertise for real business
                value.
              </p>
            </div>
          </div>

          {/* SERVICE VIEW */}
          <div className="flex-1 min-h-0 relative">
            <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 shadow-2xl overflow-hidden">
              {/* Ambient background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-12 gap-6 h-full px-6 py-5 relative z-10">
                {/* LEFT NAV */}
                <div className="col-span-4 flex items-center border-r border-white/5">
                  <div className="space-y-4 w-full pr-4">
                    {TECHNOLOGY_SERVICES.map((item, i) => {
                      const active = i === activeIndex;
                      return (
                        <div key={item.id} className="relative pl-4">
                          <div
                            className={`absolute left-0 top-1 h-6 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50 ${
                              active
                                ? "opacity-100 scale-y-100"
                                : "opacity-0 scale-y-50"
                            }`}
                          />

                          <div
                            onClick={() => {
                              setActiveIndex(i);
                              accumulatedDelta.current = 0;
                            }}
                            className="text-left w-full group cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setActiveIndex(i);
                                accumulatedDelta.current = 0;
                              }
                            }}
                          >
                            <h4
                              className={`text-sm lg:text-base transition-all duration-500 ${
                                active
                                  ? "text-white font-bold"
                                  : "text-slate-500 hover:text-slate-300 font-medium"
                              }`}
                            >
                              {item.title}
                            </h4>

                            <div
                              className={`overflow-hidden transition-all duration-500 ${
                                active
                                  ? "max-h-32 opacity-100 mt-2"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="space-y-2">
                                <p className="text-xs text-slate-400 leading-relaxed">
                                  {item.banner}
                                </p>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigateTo?.(`service-${item.id}`);
                                  }}
                                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-all font-medium"
                                >
                                  Learn more
                                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-span-8 relative h-full">
                  {TECHNOLOGY_SERVICES.map((svc, idx) => (
                    <div
                      key={svc.id}
                      className={`absolute inset-0 transition-all duration-700 ${
                        idx === activeIndex
                          ? "opacity-100 translate-x-0"
                          : idx < activeIndex
                          ? "opacity-0 -translate-x-12 pointer-events-none"
                          : "opacity-0 translate-x-12 pointer-events-none"
                      }`}
                    >
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/10 backdrop-blur-sm p-5 lg:p-6 flex flex-col relative overflow-hidden">
                        {/* Glow effects */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col">
                          {/* Title */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25">
                              <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl lg:text-2xl font-bold text-white">
                                {svc.title}
                              </h3>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Enterprise Ready
                                </span>
                                <span className="text-slate-600">•</span>
                                <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 font-medium">
                                  <Zap className="w-3 h-3" />
                                  Fast Delivery
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Approach */}
                          <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-white/5">
                            <Target className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <p className="text-slate-300 text-sm leading-relaxed">
                              {svc.approach}
                            </p>
                          </div>

                          {/* Solutions Grid */}
                          <div className="flex-1 grid grid-cols-2 gap-2 content-start">
                            {svc.solutions.slice(0, 4).map((sol, solIdx) => {
                              const SolIcon =
                                solutionIcons[solIdx % solutionIcons.length];
                              return (
                                <div
                                  key={sol.id}
                                  className={`group rounded-lg bg-neutral-800/50 border border-white/10 p-3 hover:bg-neutral-800 hover:border-cyan-400/30 transition-all duration-500 ${
                                    idx === activeIndex
                                      ? "opacity-100 translate-y-0"
                                      : "opacity-0 translate-y-4"
                                  }`}
                                  style={{
                                    transitionDelay:
                                      idx === activeIndex
                                        ? `${solIdx * 100 + 200}ms`
                                        : "0ms",
                                  }}
                                >
                                  <div className="flex items-start gap-2">
                                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex-shrink-0">
                                      <SolIcon className="w-3.5 h-3.5 text-cyan-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className="text-white font-semibold text-xs lg:text-sm group-hover:text-cyan-400 transition-colors truncate">
                                        {sol.title}
                                      </h5>
                                      <p className="text-[10px] lg:text-xs text-slate-400 leading-relaxed line-clamp-2 mt-0.5">
                                        {sol.summary}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* CTA */}
                          <button
                            onClick={() => navigateTo?.(`service-${svc.id}`)}
                            className="mt-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/20"
                          >
                            Explore {svc.title}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-3 flex-shrink-0">
            {TECHNOLOGY_SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  accumulatedDelta.current = 0;
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"
                    : "w-1.5 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
