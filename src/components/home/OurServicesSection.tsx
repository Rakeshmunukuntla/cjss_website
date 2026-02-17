// "use client";

// import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   ArrowRight,
//   Sparkles,
//   CheckCircle2,
//   Zap,
//   Shield,
//   Target,
// } from "lucide-react";

// interface OurServicesSectionProps {
//   navigateTo?: (page: string) => void;
// }

// const solutionIcons = [CheckCircle2, Zap, Shield, Target, Sparkles];

// export default function OurServicesSection({
//   navigateTo,
// }: OurServicesSectionProps) {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const stateRef = useRef({
//     isLocked: false,
//     hasCompletedCycle: false,
//     entryDirection: null as "top" | "bottom" | null,
//     activeIndex: 0,
//     exitAttempts: 0,
//     lastExitDirection: null as "up" | "down" | null,
//   });

//   const accumulatedDelta = useRef(0);
//   const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const cooldownRef = useRef(false);
//   const safetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const totalServices = TECHNOLOGY_SERVICES.length;
//   const EXIT_ATTEMPTS_THRESHOLD = 2;

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const scrollToSection = useCallback(() => {
//     const section = sectionRef.current;
//     if (!section) return;
//     const rect = section.getBoundingClientRect();
//     window.scrollTo({
//       top: window.scrollY + rect.top,
//       behavior: "smooth",
//     });
//   }, []);

//   const releaseLock = useCallback(() => {
//     stateRef.current = {
//       isLocked: false,
//       hasCompletedCycle: false,
//       entryDirection: null,
//       activeIndex: stateRef.current.activeIndex,
//       exitAttempts: 0,
//       lastExitDirection: null,
//     };
//     accumulatedDelta.current = 0;
//     cooldownRef.current = false;
//     if (safetyTimeoutRef.current) {
//       clearTimeout(safetyTimeoutRef.current);
//     }
//   }, []);

//   const startSafetyTimeout = useCallback(() => {
//     if (safetyTimeoutRef.current) {
//       clearTimeout(safetyTimeoutRef.current);
//     }
//     safetyTimeoutRef.current = setTimeout(() => {
//       if (stateRef.current.isLocked) {
//         releaseLock();
//       }
//     }, 4000);
//   }, [releaseLock]);

//   useEffect(() => {
//     if (isMobile) return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const SCROLL_THRESHOLD = 70;
//     const COOLDOWN_TIME = 400;

//     const onWheel = (e: WheelEvent) => {
//       const rect = section.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;
//       const scrollingDown = e.deltaY > 0;
//       const scrollingUp = e.deltaY < 0;

//       const state = stateRef.current;
//       const currentIndex = state.activeIndex;

//       const approachingFromTop =
//         rect.top > 0 &&
//         rect.top < viewportHeight * 0.6 &&
//         scrollingDown &&
//         !state.isLocked;

//       const approachingFromBottom =
//         rect.bottom > viewportHeight * 0.4 &&
//         rect.bottom <= viewportHeight &&
//         rect.top < 0 &&
//         scrollingUp &&
//         !state.isLocked;

//       if (approachingFromTop) {
//         e.preventDefault();
//         e.stopPropagation();

//         const newIndex = 0;
//         setActiveIndex(newIndex);
//         stateRef.current = {
//           ...stateRef.current,
//           isLocked: true,
//           activeIndex: newIndex,
//           entryDirection: "top",
//           hasCompletedCycle: false,
//           exitAttempts: 0,
//           lastExitDirection: null,
//         };

//         scrollToSection();
//         accumulatedDelta.current = 0;
//         cooldownRef.current = true;
//         setTimeout(() => (cooldownRef.current = false), COOLDOWN_TIME);
//         startSafetyTimeout();
//         return;
//       }

//       if (approachingFromBottom) {
//         e.preventDefault();
//         e.stopPropagation();

//         const newIndex = totalServices - 1;
//         setActiveIndex(newIndex);
//         stateRef.current = {
//           ...stateRef.current,
//           isLocked: true,
//           activeIndex: newIndex,
//           entryDirection: "bottom",
//           hasCompletedCycle: false,
//           exitAttempts: 0,
//           lastExitDirection: null,
//         };

//         scrollToSection();
//         accumulatedDelta.current = 0;
//         cooldownRef.current = true;
//         setTimeout(() => (cooldownRef.current = false), COOLDOWN_TIME);
//         startSafetyTimeout();
//         return;
//       }

//       if (!state.isLocked) {
//         return;
//       }

//       const atFirstElement = currentIndex === 0;
//       const atLastElement = currentIndex === totalServices - 1;

//       const tryingToExitUp = atFirstElement && scrollingUp;
//       const tryingToExitDown = atLastElement && scrollingDown;

//       if (tryingToExitUp || tryingToExitDown) {
//         const exitDirection = scrollingUp ? "up" : "down";

//         if (state.lastExitDirection === exitDirection) {
//           stateRef.current.exitAttempts += 1;
//         } else {
//           stateRef.current.exitAttempts = 1;
//           stateRef.current.lastExitDirection = exitDirection;
//         }

//         const completedCycle = state.hasCompletedCycle;
//         const sameAsEntry =
//           (tryingToExitUp && state.entryDirection === "top") ||
//           (tryingToExitDown && state.entryDirection === "bottom");
//         const forcedExit =
//           stateRef.current.exitAttempts >= EXIT_ATTEMPTS_THRESHOLD;

//         if (completedCycle || sameAsEntry || forcedExit) {
//           releaseLock();
//           return;
//         }

//         e.preventDefault();
//         e.stopPropagation();
//         return;
//       }

//       e.preventDefault();
//       e.stopPropagation();

//       stateRef.current.exitAttempts = 0;
//       stateRef.current.lastExitDirection = null;

//       if (cooldownRef.current || isTransitioning) {
//         return;
//       }

//       accumulatedDelta.current += e.deltaY;

//       if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
//       scrollTimeout.current = setTimeout(() => {
//         accumulatedDelta.current = 0;
//       }, 100);

//       if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
//         const direction = accumulatedDelta.current > 0 ? 1 : -1;
//         const newIndex = Math.max(
//           0,
//           Math.min(currentIndex + direction, totalServices - 1),
//         );

//         if (newIndex !== currentIndex) {
//           setIsTransitioning(true);
//           cooldownRef.current = true;

//           setActiveIndex(newIndex);
//           stateRef.current.activeIndex = newIndex;

//           if (
//             (state.entryDirection === "top" &&
//               newIndex === totalServices - 1) ||
//             (state.entryDirection === "bottom" && newIndex === 0)
//           ) {
//             stateRef.current.hasCompletedCycle = true;
//           }

//           setTimeout(() => {
//             setIsTransitioning(false);
//             cooldownRef.current = false;
//           }, COOLDOWN_TIME);
//         }

//         accumulatedDelta.current = 0;
//         startSafetyTimeout();
//       }
//     };

//     const onKeyDown = (e: KeyboardEvent) => {
//       if (!stateRef.current.isLocked) return;

//       const currentIndex = stateRef.current.activeIndex;

//       if (e.key === "ArrowDown" || e.key === "ArrowRight") {
//         e.preventDefault();
//         const newIndex = Math.min(currentIndex + 1, totalServices - 1);
//         if (newIndex !== currentIndex) {
//           setActiveIndex(newIndex);
//           stateRef.current.activeIndex = newIndex;
//         }
//       } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
//         e.preventDefault();
//         const newIndex = Math.max(currentIndex - 1, 0);
//         if (newIndex !== currentIndex) {
//           setActiveIndex(newIndex);
//           stateRef.current.activeIndex = newIndex;
//         }
//       } else if (e.key === "Escape") {
//         releaseLock();
//       }
//     };

//     const onScroll = () => {
//       const rect = section.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       if (rect.bottom < -150 || rect.top > viewportHeight + 150) {
//         if (stateRef.current.isLocked) {
//           releaseLock();
//         }
//       }
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("keydown", onKeyDown);

//     return () => {
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("keydown", onKeyDown);
//       if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
//       if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
//     };
//   }, [
//     totalServices,
//     scrollToSection,
//     isMobile,
//     startSafetyTimeout,
//     releaseLock,
//     isTransitioning,
//   ]);

//   // Get active service data
//   const activeService = TECHNOLOGY_SERVICES[activeIndex];

//   // ==================== MOBILE VIEW ====================
//   if (isMobile) {
//     return (
//       <section className="relative bg-black py-12 px-4">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

//         <div className="relative z-10 max-w-lg mx-auto">
//           <div className="mb-8 text-center">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200">
//               <Sparkles className="w-3 h-3" />
//               OUR SERVICES
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
//               Explore Our{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text">
//                 Services
//               </span>
//             </h2>
//             <p className="text-sm text-slate-400 leading-relaxed">
//               Strategic insight with technical expertise for real business
//               value.
//             </p>
//           </div>

//           <div className="space-y-4">
//             {TECHNOLOGY_SERVICES.map((svc) => (
//               <div
//                 key={svc.id}
//                 className="rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 p-4 sm:p-5"
//               >
//                 <div className="flex items-start gap-3 mb-4">
//                   <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg flex-shrink-0">
//                     <Sparkles className="w-5 h-5 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       {svc.title}
//                     </h3>
//                     <div className="flex items-center gap-2 flex-wrap">
//                       <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
//                         <CheckCircle2 className="w-3 h-3" />
//                         Enterprise Ready
//                       </span>
//                       <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 font-medium">
//                         <Zap className="w-3 h-3" />
//                         Fast Delivery
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-white/5 border border-white/5">
//                   <Target className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
//                   <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
//                     {svc.approach}
//                   </p>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   {svc.solutions.slice(0, 3).map((sol, solIdx) => {
//                     const SolIcon =
//                       solutionIcons[solIdx % solutionIcons.length];
//                     return (
//                       <div
//                         key={sol.id}
//                         className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-800/50 border border-white/5"
//                       >
//                         <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
//                           <SolIcon className="w-3 h-3 text-cyan-400" />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h5 className="text-white font-medium text-sm">
//                             {sol.title}
//                           </h5>
//                           <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5 ">
//                             {sol.summary}
//                           </p>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <button
//                   onClick={() => navigateTo?.(`service-${svc.id}`)}
//                   className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-cyan-600 transition-all"
//                 >
//                   Learn More
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // ==================== DESKTOP VIEW ====================
//   return (
//     <section ref={sectionRef} className="relative bg-black h-screen">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <div className="mx-auto max-w-7xl h-full flex flex-col px-6 md:px-10 lg:px-12 py-4">
//           {/* HEADER */}
//           <div className="mb-4 flex-shrink-0">
//             <div className="flex flex-col gap-2">
//               <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200 w-fit">
//                 <Sparkles className="w-2.5 h-2.5" />
//                 OUR SERVICES
//               </div>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
//                 Explore Our{" "}
//                 <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text">
//                   Services
//                 </span>
//               </h2>
//               <p className="max-w-md text-xs lg:text-sm text-slate-400 leading-relaxed">
//                 Strategic insight with technical expertise for real business
//                 value.
//               </p>
//             </div>
//           </div>

//           {/* SERVICE VIEW - FIXED HEIGHT CONTAINER */}
//           <div className="flex-1 min-h-0 relative">
//             <div className="h-full rounded-2xl shadow-2xl overflow-hidden">
//               {/* Background Orbs */}
//               <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
//               <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

//               <div className="grid grid-cols-12 gap-6 h-full px-6 py-5 relative z-10">
//                 {/* LEFT NAV - Fixed */}
//                 <div className="col-span-4 flex items-center border-r border-white/5">
//                   <div className="space-y-4 w-full pr-4">
//                     {TECHNOLOGY_SERVICES.map((item, i) => {
//                       const active = i === activeIndex;
//                       return (
//                         <div key={item.id} className="relative pl-4">
//                           <div
//                             className={`absolute left-0 top-1 h-6 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50 ${
//                               active
//                                 ? "opacity-100 scale-y-100"
//                                 : "opacity-0 scale-y-50"
//                             }`}
//                           />

//                           <div
//                             onClick={() => {
//                               setActiveIndex(i);
//                               stateRef.current.activeIndex = i;
//                               accumulatedDelta.current = 0;
//                             }}
//                             className="text-left w-full group cursor-pointer"
//                             role="button"
//                             tabIndex={0}
//                             onKeyDown={(e) => {
//                               if (e.key === "Enter" || e.key === " ") {
//                                 e.preventDefault();
//                                 setActiveIndex(i);
//                                 stateRef.current.activeIndex = i;
//                                 accumulatedDelta.current = 0;
//                               }
//                             }}
//                           >
//                             <h4
//                               className={`text-sm lg:text-base transition-all duration-500 ${
//                                 active
//                                   ? "text-white font-bold"
//                                   : "text-slate-500 hover:text-slate-300 font-medium"
//                               }`}
//                             >
//                               {item.title}
//                             </h4>

//                             <div
//                               className={`overflow-hidden transition-all duration-500 ${
//                                 active
//                                   ? "max-h-32 opacity-100 mt-2"
//                                   : "max-h-0 opacity-0"
//                               }`}
//                             >
//                               <div className="space-y-2">
//                                 <p className="text-xs text-slate-400 leading-relaxed">
//                                   {item.banner}
//                                 </p>
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     navigateTo?.(`service-${item.id}`);
//                                   }}
//                                   className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-all font-medium"
//                                 >
//                                   Learn more
//                                   <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* RIGHT CONTENT - FIXED CONTAINER, DYNAMIC CONTENT */}
//                 <div className="col-span-8 h-full">
//                   {/* Fixed Size Container */}
//                   <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/10 backdrop-blur-sm p-5 lg:p-6 relative overflow-hidden">
//                     {/* Background Decorations - Static */}
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
//                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

//                     {/* Content Area - Fixed Layout */}
//                     <div className="relative z-10 h-full flex flex-col">
//                       {/* Header - Fixed Height */}
//                       <div className="flex items-center gap-3 mb-4 h-14 flex-shrink-0">
//                         <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25">
//                           <Sparkles className="w-5 h-5 text-white" />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h3
//                             key={`title-${activeIndex}`}
//                             className="text-xl lg:text-2xl font-bold text-white truncate animate-fadeIn"
//                           >
//                             {activeService.title}
//                           </h3>
//                           <div className="flex items-center gap-2 mt-0.5">
//                             <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
//                               <CheckCircle2 className="w-3 h-3" />
//                               Enterprise Ready
//                             </span>
//                             <span className="text-slate-600">•</span>
//                             <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 font-medium">
//                               <Zap className="w-3 h-3" />
//                               Fast Delivery
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Approach - Fixed Height */}
//                       <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-white/5 h-20 flex-shrink-0 overflow-hidden">
//                         <Target className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
//                         <p
//                           key={`approach-${activeIndex}`}
//                           className="text-slate-300 text-sm leading-relaxed line-clamp-3 animate-fadeIn"
//                         >
//                           {activeService.approach}
//                         </p>
//                       </div>

//                       {/* Solutions Grid - Fills Remaining Space */}
//                       <div className="flex-1 min-h-0 overflow-hidden">
//                         <div
//                           key={`solutions-${activeIndex}`}
//                           className="grid grid-cols-2 gap-2 h-full content-start animate-fadeIn"
//                         >
//                           {activeService.solutions
//                             .slice(0, 4)
//                             .map((sol, solIdx) => {
//                               const SolIcon =
//                                 solutionIcons[solIdx % solutionIcons.length];
//                               return (
//                                 <div
//                                   key={sol.id}
//                                   className="group rounded-lg bg-neutral-800/50 border border-white/10 p-3 hover:bg-neutral-800 hover:border-cyan-400/30 transition-all duration-300 h-[72px] overflow-hidden"
//                                   style={{
//                                     animationDelay: `${solIdx * 50}ms`,
//                                   }}
//                                 >
//                                   <div className="flex items-center gap-3 h-full">
//                                     <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex-shrink-0">
//                                       <SolIcon className="w-3.5 h-3.5 text-cyan-400" />
//                                     </div>
//                                     <div className="flex-1 min-w-0 overflow-hidden">
//                                       <h5 className="text-white font-semibold text-xs lg:text-sm group-hover:text-cyan-400 transition-colors truncate">
//                                         {sol.title}
//                                       </h5>
//                                       <p className="text-[10px] lg:text-xs text-slate-400 leading-relaxed line-clamp-2 mt-0.5 ">
//                                         {sol.summary}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </div>
//                               );
//                             })}
//                         </div>
//                       </div>

//                       {/* Button - Fixed at Bottom */}
//                       <button
//                         onClick={() =>
//                           navigateTo?.(`service-${activeService.id}`)
//                         }
//                         className="mt-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/20 flex-shrink-0"
//                       >
//                         <span
//                           key={`btn-${activeIndex}`}
//                           className="animate-fadeIn"
//                         >
//                           Explore {activeService.title}
//                         </span>
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="flex justify-center gap-2 mt-3 flex-shrink-0">
//             {TECHNOLOGY_SERVICES.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   setActiveIndex(i);
//                   stateRef.current.activeIndex = i;
//                   accumulatedDelta.current = 0;
//                 }}
//                 className={`h-1.5 rounded-full transition-all duration-500 ${
//                   i === activeIndex
//                     ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"
//                     : "w-1.5 bg-slate-700 hover:bg-slate-600"
//                 }`}
//                 aria-label={`Go to service ${i + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(8px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.4s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { TECHNOLOGY_SERVICES } from "../../lib/Constants";
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Shield,
  Target,
} from "lucide-react";

const solutionIcons = [CheckCircle2, Zap, Shield, Target, Sparkles];

export default function OurServicesSection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const stateRef = useRef({
    isLocked: false,
    hasCompletedCycle: false,
    entryDirection: null as "top" | "bottom" | null,
    activeIndex: 0,
    exitAttempts: 0,
    lastExitDirection: null as "up" | "down" | null,
  });

  const accumulatedDelta = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cooldownRef = useRef(false);
  const safetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalServices = TECHNOLOGY_SERVICES.length;
  const EXIT_ATTEMPTS_THRESHOLD = 2;

  // Navigation helper
  const handleNavigate = useCallback(
    (serviceId: string) => {
      navigate(`/services/${serviceId}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate],
  );

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

  const releaseLock = useCallback(() => {
    stateRef.current = {
      isLocked: false,
      hasCompletedCycle: false,
      entryDirection: null,
      activeIndex: stateRef.current.activeIndex,
      exitAttempts: 0,
      lastExitDirection: null,
    };
    accumulatedDelta.current = 0;
    cooldownRef.current = false;
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
    }
  }, []);

  const startSafetyTimeout = useCallback(() => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
    }
    safetyTimeoutRef.current = setTimeout(() => {
      if (stateRef.current.isLocked) {
        releaseLock();
      }
    }, 4000);
  }, [releaseLock]);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const SCROLL_THRESHOLD = 70;
    const COOLDOWN_TIME = 400;

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const state = stateRef.current;
      const currentIndex = state.activeIndex;

      const approachingFromTop =
        rect.top > 0 &&
        rect.top < viewportHeight * 0.6 &&
        scrollingDown &&
        !state.isLocked;

      const approachingFromBottom =
        rect.bottom > viewportHeight * 0.4 &&
        rect.bottom <= viewportHeight &&
        rect.top < 0 &&
        scrollingUp &&
        !state.isLocked;

      if (approachingFromTop) {
        e.preventDefault();
        e.stopPropagation();

        const newIndex = 0;
        setActiveIndex(newIndex);
        stateRef.current = {
          ...stateRef.current,
          isLocked: true,
          activeIndex: newIndex,
          entryDirection: "top",
          hasCompletedCycle: false,
          exitAttempts: 0,
          lastExitDirection: null,
        };

        scrollToSection();
        accumulatedDelta.current = 0;
        cooldownRef.current = true;
        setTimeout(() => (cooldownRef.current = false), COOLDOWN_TIME);
        startSafetyTimeout();
        return;
      }

      if (approachingFromBottom) {
        e.preventDefault();
        e.stopPropagation();

        const newIndex = totalServices - 1;
        setActiveIndex(newIndex);
        stateRef.current = {
          ...stateRef.current,
          isLocked: true,
          activeIndex: newIndex,
          entryDirection: "bottom",
          hasCompletedCycle: false,
          exitAttempts: 0,
          lastExitDirection: null,
        };

        scrollToSection();
        accumulatedDelta.current = 0;
        cooldownRef.current = true;
        setTimeout(() => (cooldownRef.current = false), COOLDOWN_TIME);
        startSafetyTimeout();
        return;
      }

      if (!state.isLocked) {
        return;
      }

      const atFirstElement = currentIndex === 0;
      const atLastElement = currentIndex === totalServices - 1;

      const tryingToExitUp = atFirstElement && scrollingUp;
      const tryingToExitDown = atLastElement && scrollingDown;

      if (tryingToExitUp || tryingToExitDown) {
        const exitDirection = scrollingUp ? "up" : "down";

        if (state.lastExitDirection === exitDirection) {
          stateRef.current.exitAttempts += 1;
        } else {
          stateRef.current.exitAttempts = 1;
          stateRef.current.lastExitDirection = exitDirection;
        }

        const completedCycle = state.hasCompletedCycle;
        const sameAsEntry =
          (tryingToExitUp && state.entryDirection === "top") ||
          (tryingToExitDown && state.entryDirection === "bottom");
        const forcedExit =
          stateRef.current.exitAttempts >= EXIT_ATTEMPTS_THRESHOLD;

        if (completedCycle || sameAsEntry || forcedExit) {
          releaseLock();
          return;
        }

        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      stateRef.current.exitAttempts = 0;
      stateRef.current.lastExitDirection = null;

      if (cooldownRef.current || isTransitioning) {
        return;
      }

      accumulatedDelta.current += e.deltaY;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        accumulatedDelta.current = 0;
      }, 100);

      if (Math.abs(accumulatedDelta.current) >= SCROLL_THRESHOLD) {
        const direction = accumulatedDelta.current > 0 ? 1 : -1;
        const newIndex = Math.max(
          0,
          Math.min(currentIndex + direction, totalServices - 1),
        );

        if (newIndex !== currentIndex) {
          setIsTransitioning(true);
          cooldownRef.current = true;

          setActiveIndex(newIndex);
          stateRef.current.activeIndex = newIndex;

          if (
            (state.entryDirection === "top" &&
              newIndex === totalServices - 1) ||
            (state.entryDirection === "bottom" && newIndex === 0)
          ) {
            stateRef.current.hasCompletedCycle = true;
          }

          setTimeout(() => {
            setIsTransitioning(false);
            cooldownRef.current = false;
          }, COOLDOWN_TIME);
        }

        accumulatedDelta.current = 0;
        startSafetyTimeout();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!stateRef.current.isLocked) return;

      const currentIndex = stateRef.current.activeIndex;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const newIndex = Math.min(currentIndex + 1, totalServices - 1);
        if (newIndex !== currentIndex) {
          setActiveIndex(newIndex);
          stateRef.current.activeIndex = newIndex;
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const newIndex = Math.max(currentIndex - 1, 0);
        if (newIndex !== currentIndex) {
          setActiveIndex(newIndex);
          stateRef.current.activeIndex = newIndex;
        }
      } else if (e.key === "Escape") {
        releaseLock();
      }
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom < -150 || rect.top > viewportHeight + 150) {
        if (stateRef.current.isLocked) {
          releaseLock();
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [
    totalServices,
    scrollToSection,
    isMobile,
    startSafetyTimeout,
    releaseLock,
    isTransitioning,
  ]);

  // Get active service data
  const activeService = TECHNOLOGY_SERVICES[activeIndex];

  // ==================== MOBILE VIEW ====================
  if (isMobile) {
    return (
      <section className="relative bg-black py-12 px-4">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-lg mx-auto">
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

          <div className="space-y-4">
            {TECHNOLOGY_SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 p-4 sm:p-5"
              >
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

                <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-white/5 border border-white/5">
                  <Target className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {svc.approach}
                  </p>
                </div>

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
                          <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5 line-clamp-2">
                            {sol.summary}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleNavigate(svc.id)}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-cyan-600 transition-all transform hover:scale-105"
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

          {/* SERVICE VIEW - FIXED HEIGHT CONTAINER */}
          <div className="flex-1 min-h-0 relative">
            <div className="h-full rounded-2xl shadow-2xl overflow-hidden">
              {/* Background Orbs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-12 gap-6 h-full px-6 py-5 relative z-10">
                {/* LEFT NAV - Fixed */}
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
                              stateRef.current.activeIndex = i;
                              accumulatedDelta.current = 0;
                            }}
                            className="text-left w-full group cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setActiveIndex(i);
                                stateRef.current.activeIndex = i;
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
                                    handleNavigate(item.id);
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

                {/* RIGHT CONTENT - FIXED CONTAINER, DYNAMIC CONTENT */}
                <div className="col-span-8 h-full">
                  {/* Fixed Size Container */}
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/10 backdrop-blur-sm p-5 lg:p-6 relative overflow-hidden">
                    {/* Background Decorations - Static */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Content Area - Fixed Layout */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header - Fixed Height */}
                      <div className="flex items-center gap-3 mb-4 h-14 flex-shrink-0">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            key={`title-${activeIndex}`}
                            className="text-xl lg:text-2xl font-bold text-white truncate animate-fadeIn"
                          >
                            {activeService.title}
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

                      {/* Approach - Fixed Height */}
                      <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-white/5 h-20 flex-shrink-0 overflow-hidden">
                        <Target className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <p
                          key={`approach-${activeIndex}`}
                          className="text-slate-300 text-sm leading-relaxed line-clamp-3 animate-fadeIn"
                        >
                          {activeService.approach}
                        </p>
                      </div>

                      {/* Solutions Grid - Fills Remaining Space */}
                      <div className="flex-1 min-h-0 overflow-hidden">
                        <div
                          key={`solutions-${activeIndex}`}
                          className="grid grid-cols-2 gap-2 h-full content-start animate-fadeIn"
                        >
                          {activeService.solutions
                            .slice(0, 4)
                            .map((sol, solIdx) => {
                              const SolIcon =
                                solutionIcons[solIdx % solutionIcons.length];
                              return (
                                <div
                                  key={sol.id}
                                  className="group rounded-lg bg-neutral-800/50 border border-white/10 p-3 hover:bg-neutral-800 hover:border-cyan-400/30 transition-all duration-300 h-[72px] overflow-hidden"
                                  style={{
                                    animationDelay: `${solIdx * 50}ms`,
                                  }}
                                >
                                  <div className="flex items-center gap-3 h-full">
                                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex-shrink-0">
                                      <SolIcon className="w-3.5 h-3.5 text-cyan-400" />
                                    </div>
                                    <div className="flex-1 min-w-0 overflow-hidden">
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
                      </div>

                      {/* Button - Fixed at Bottom */}
                      <button
                        onClick={() => handleNavigate(activeService.id)}
                        className="mt-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/20 flex-shrink-0 hover:scale-105 transform"
                      >
                        <span
                          key={`btn-${activeIndex}`}
                          className="animate-fadeIn"
                        >
                          Explore {activeService.title}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-3 flex-shrink-0">
            {TECHNOLOGY_SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  stateRef.current.activeIndex = i;
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

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
