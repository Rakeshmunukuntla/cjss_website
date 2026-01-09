// "use client";

// import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
// import {
//   ArrowRight,
//   CheckCircle2,
//   CloudCog,
//   Gauge,
//   LineChart,
//   ShieldCheck,
//   ShoppingCart,
//   Users,
//   Workflow,
// } from "lucide-react";

// interface CarrierProblemsProps {
//   navigateTo: (page: string) => void;
// }

// const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
//   const links = [
//     { label: "Home", page: "CarrierHome" },
//     { label: "Life at CJSS", page: "CarrierLife" },
//     { label: "Jobs", page: "CarrierFresher" },
//     // { label: "Job for Experienced", page: "CarrierExperienced" },
//     { label: "Problems we solve", page: "CarrierProblems" },
//   ];

//   return (
//     <>
//       <CareerNavigationBar
//         links={links}
//         navigateTo={navigateTo}
//         activePage="CarrierProblems"
//       />

//       {/* Push content down to avoid navbar overlap */}
//       <div className="h-[80px] md:h-[80px]"></div>

//       {/* GLOBAL WRAPPER – single continuous black background */}
//       <main className="relative w-full min-h-screen overflow-hidden text-white bg-black">
//         {/* unified background */}
//         <div className="absolute inset-0 pointer-events-none -z-20">
//           <div className="absolute inset-0 bg-black" />
//           {/* subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//           {/* top glow - subtle */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
//           {/* bottom glow - subtle */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
//           {/* grid pattern */}
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         {/* ───────────── HERO BANNER — PROBLEMS WE SOLVE ───────────── */}
//         <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
//           {/* Background image */}
//           <img
//             src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=90"
//             alt="Problems We Solve"
//             className="absolute inset-0 object-cover w-full h-full scale-105 carrier-hero-zoom"
//           />

//           {/* Gradient overlays */}
//           <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />

//           {/* Content */}
//           <div className="relative max-w-4xl px-4 text-center sm:px-6 carrier-fade-up">
//             <span className="inline-block mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-purple-300/90">
//               Problems We Solve
//             </span>

//             <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl xl:text-6xl sm:leading-tight">
//               We solve{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 mission-critical commerce & technology challenges
//               </span>{" "}
//               that slow down growth
//             </h1>

//             <p className="max-w-2xl mx-auto mt-4 text-xs leading-relaxed sm:mt-6 sm:text-sm md:text-base text-white/70">
//               From conversions to systems, workflows and decision-making — we
//               turn problems into opportunities for brands, customers and
//               careers.
//             </p>

//             {/* Call to action - Updated to hero style buttons */}
//             <div className="flex flex-wrap justify-center gap-3 mt-6 sm:mt-8">
//               <button
//                 onClick={() => navigateTo("CarrierFresher")}
//                 className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//               >
//                 {/* Job at CJSS */}
//                 Job Openings
//               </button>
//               {/* <button
//                 onClick={() => navigateTo("CarrierExperienced")}
//                 className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//               >
//                 Job for Experienced
//               </button> */}
//             </div>
//           </div>
//         </section>

//         {/* ─────────────── SECTION 2 — COMMERCE & CUSTOMER EXPERIENCE ─────────────── */}
//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//               <div>
//                 <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                   Commerce & experience
//                 </p>
//                 <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl text-white">
//                   Fixing the cracks in digital commerce journeys
//                 </h2>
//                 <p className="max-w-2xl mt-2 text-xs leading-relaxed sm:mt-3 sm:text-sm md:text-base text-white/70">
//                   We work with brands that are losing revenue to slow pages,
//                   broken journeys, and inconsistent experiences across channels.
//                   Our teams help stabilize, simplify, and scale what matters
//                   most: the customer journey.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-white/70">
//                 <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-[#0a0a0a]/80 border-white/10">
//                   <ShoppingCart className="w-3.5 h-3.5 text-purple-300" />
//                   Cart & checkout friction
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-[#0a0a0a]/80 border-white/10">
//                   <Users className="w-3.5 h-3.5 text-sky-300" />
//                   Inconsistent omnichannel experience
//                 </span>
//               </div>
//             </div>

//             <div className="grid gap-8 mt-8 sm:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* Left: problem cards */}
//               <div className="space-y-4">
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <Gauge className="w-3.5 h-3.5 text-purple-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Slow pages that bleed conversions
//                       </h3>
//                       <p className="mt-1 text-xs text-white/60">
//                         High page load times, third-party scripts, and heavy
//                         assets quietly erode add-to-cart and checkout completion
//                         rates.
//                       </p>

//                       {/* extra content on hover */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Audit lighthouse & core web vitals.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Prioritize fixes that unlock revenue.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Workflow className="w-3.5 h-3.5 text-sky-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Broken or fragmented journeys
//                       </h3>
//                       <p className="mt-1 text-xs text-white/60">
//                         Customers hit dead ends, inconsistent pricing, or
//                         missing information between search, PDP, cart, and
//                         post-purchase flows.
//                       </p>

//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Map actual customer paths vs ideal.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Design fixes that reduce dead ends.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-3 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <LineChart className="w-3.5 h-3.5 text-purple-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         No clear line from UX changes to revenue
//                       </h3>
//                       <p className="mt-1 text-xs text-white/60">
//                         Teams ship UX and content changes without a clear way to
//                         measure impact on funnel performance or LTV.
//                       </p>

//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Define hypotheses & success metrics.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>
//                             Connect experiments to real business KPIs.
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right: supporting image */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />
//                   <img
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
//                     alt="Commerce challenges and problem-solving"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   <div className="absolute space-y-2 bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
//                     <div className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[10px] sm:text-[11px] text-white border border-purple-300/60">
//                       <ShoppingCart className="w-3.5 h-3.5 text-purple-300" />
//                       <span>
//                         We stabilize the commerce engine before scaling it.
//                       </span>
//                     </div>

//                     <div className="carrier-hover-extra flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-white">
//                       <div className="inline-flex items-center gap-1 rounded-full bg-[#0a0a0a]/80 px-2.5 py-1 border border-white/20">
//                         <LineChart className="w-3 h-3 text-purple-300" />
//                         <span>Before/after impact views</span>
//                       </div>
//                       <div className="inline-flex items-center gap-1 rounded-full bg-[#0a0a0a]/80 px-2.5 py-1 border border-white/20">
//                         <Users className="w-3 h-3 text-sky-300" />
//                         <span>Aligned CX & product teams</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ───────── SECTION 3 — TECHNOLOGY, INTEGRATION & SCALE ───────── */}
//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute right-[-12%] top-[8%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//               Platforms, integrations & scale
//             </p>
//             <div className="grid gap-8 sm:gap-10 mt-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)] items-stretch">
//               {/* Left: two blocks */}
//               <div className="space-y-6">
//                 <div className="relative overflow-hidden border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-purple-400/10" />
//                   <div className="relative p-5 sm:p-6">
//                     <h3 className="text-base font-semibold text-transparent sm:text-lg bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                       Monoliths, patchwork systems & upgrade anxiety
//                     </h3>
//                     <p className="mt-2 text-xs sm:text-sm text-white/70">
//                       Legacy platforms, custom plugins, and tightly coupled
//                       integrations make every release risky and slow. Teams are
//                       afraid to touch critical flows.
//                     </p>
//                     <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-white/70">
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-300" />
//                         <span>
//                           Releases that feel fragile, manual and stressful.
//                         </span>
//                       </li>
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-300" />
//                         <span>
//                           Business logic buried across multiple systems.
//                         </span>
//                       </li>
//                     </ul>

//                     <div className="carrier-hover-extra mt-3 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Plan migrations with zero-downtime mindset.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>
//                           Introduce modular services around critical flows.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative overflow-hidden border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-sky-400/10" />
//                   <div className="relative p-5 sm:p-6">
//                     <h3 className="text-base font-semibold text-transparent sm:text-lg bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                       Limited observability, unknown failure modes
//                     </h3>
//                     <p className="mt-2 text-xs sm:text-sm text-white/70">
//                       Teams learn about issues from customers and business teams
//                       instead of their own dashboards and alerts.
//                     </p>
//                     <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-white/70">
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-300" />
//                         <span>
//                           Hard to answer simple questions like "what broke?"
//                         </span>
//                       </li>
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-300" />
//                         <span>
//                           No shared view of system health across product,
//                           engineering and business.
//                         </span>
//                       </li>
//                     </ul>

//                     <div className="carrier-hover-extra mt-3 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>
//                           Design alerting that matches customer impact.
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>
//                           Create shared runbooks for faster resolution.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right – image */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-3 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <img
//                     src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=90"
//                     alt="Platform Integration and Scale"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/15 via-transparent to-black/75" />

//                   <div className="absolute inset-x-0 bottom-0 px-4 py-3 space-y-2 sm:py-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
//                     <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-white">
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-sky-300/60 bg-sky-500/10">
//                         <CloudCog className="w-3.5 h-3.5 text-sky-300" />
//                         From monoliths to modular, observable systems
//                       </span>
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-purple-300/60 bg-purple-500/10">
//                         <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
//                         Safer releases with better insight & tooling
//                       </span>
//                     </div>

//                     <div className="carrier-hover-extra flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-white">
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-[#0a0a0a]/80 border-white/25">
//                         <Gauge className="w-3 h-3 text-purple-300" />
//                         Health checks built-in
//                       </span>
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-[#0a0a0a]/80 border-white/25">
//                         <LineChart className="w-3 h-3 text-sky-300" />
//                         Release impact tracked
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ───── SECTION 4 — DATA, OPERATIONS & DECISION-MAKING ───── */}
//         <section className="relative z-10 w-full pb-16 overflow-hidden sm:pb-20">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute left-[10%] bottom-[5%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-4 pt-6 mx-auto sm:px-6 sm:pt-4">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//               Data, operations & decisions
//             </p>

//             <div className="mt-4 grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-stretch">
//               {/* Left */}
//               <div className="space-y-5">
//                 <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                   Turning noisy operations into clear, data-backed decisions
//                 </h2>
//                 <p className="text-xs leading-relaxed sm:text-sm md:text-base text-white/70">
//                   Many teams are drowning in reports, tools and dashboards—but
//                   still lack a single view of what to fix first. We help connect
//                   the dots between data, operations, and customer outcomes.
//                 </p>

//                 <div className="mt-2 space-y-3 sm:mt-3">
//                   <div className="flex flex-col gap-3 px-4 py-4 border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                     <div className="flex items-start gap-3">
//                       <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/60">
//                         <LineChart className="w-3.5 h-3.5 text-purple-300" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-xs font-semibold sm:text-sm text-white">
//                           Problem: Reporting without decisions
//                         </p>
//                         <p className="mt-1 text-xs text-white/60">
//                           Teams generate reports, but they rarely lead to clear
//                           prioritization or changes in roadmap.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-2 pl-10 text-xs text-sky-300">
//                       <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-sky-300" />
//                       <span>
//                         Outcome: Focused views for decision-makers that link
//                         metrics to next best actions.
//                       </span>
//                     </div>

//                     <div className="carrier-hover-extra pl-10 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>
//                           Turn insights into backed decisions, not slides.
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>Align ops, product & leadership views.</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-3 px-4 py-4 border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                     <div className="flex items-start gap-3">
//                       <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/60">
//                         <Users className="w-3.5 h-3.5 text-sky-300" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-xs font-semibold sm:text-sm text-white">
//                           Problem: Ops & product not aligned
//                         </p>
//                         <p className="mt-1 text-xs text-white/60">
//                           Operations teams see issues, product teams own
//                           backlog, and engineering owns delivery—but they lack a
//                           shared view.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-2 pl-10 text-xs text-purple-300">
//                       <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-purple-300" />
//                       <span>
//                         Outcome: Shared operational dashboards that connect
//                         incidents, customer impact, and roadmap decisions.
//                       </span>
//                     </div>

//                     <div className="carrier-hover-extra pl-10 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Give everyone one source of truth.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>Turn incidents into roadmap inputs.</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right – image */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-3 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-sky-400/10" />
//                   <img
//                     src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90"
//                     alt="Data Operations and Decision Making"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 rounded-2xl bg-black/70 px-4 py-3 text-[10px] sm:text-[11px] text-white border border-purple-300/60 space-y-2">
//                     <p>
//                       We design systems and working rhythms so teams know what
//                       to fix first—and why it matters to customers and the
//                       business.
//                     </p>

//                     <div className="flex flex-wrap gap-2 carrier-hover-extra">
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-[#0a0a0a]/80 border-white/20">
//                         <LineChart className="w-3 h-3 text-purple-300" />
//                         Priority signals in one place
//                       </span>
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-[#0a0a0a]/80 border-white/20">
//                         <Users className="w-3 h-3 text-sky-300" />
//                         Shared rituals to act on data
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ───── SECTION 5 — HOW WE WORK WITH TEAMS ───── */}
//         <section className="relative z-10 w-full overflow-hidden border-t py-14 sm:py-16 border-white/5">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute right-[5%] top-[10%] h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
//             <div className="absolute left-[5%] bottom-[5%] h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6">
//             <div className="text-center">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 How we work with teams
//               </p>
//               <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl text-white">
//                 Your work sits at the intersection of business, tech & customers
//               </h2>
//               <p className="max-w-2xl mx-auto mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
//                 Whether you are a fresher or experienced professional, you'll
//                 work in small, cross-functional squads that own real
//                 outcomes—not just tasks.
//               </p>
//             </div>

//             <div className="grid gap-5 mt-8 sm:gap-6 sm:mt-10 md:grid-cols-3">
//               {/* Card 1 */}
//               <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-1 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
//                     <Gauge className="w-4 h-4 text-purple-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Performance & experience squads
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-white/60">
//                   Work on page speed, funnels, UX and experiments that directly
//                   move conversion and revenue.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Pair with designers, PMs & engineers.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>See your experiments ship in real campaigns.</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-2 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-sky-500/15 border-sky-300/60">
//                     <CloudCog className="w-4 h-4 text-sky-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Platform & integration pods
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-white/60">
//                   Modernize stacks, integrate systems and build reliable
//                   foundations that other teams can innovate on.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Work with APIs, events & data flows.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>Shape the technical foundation of brands.</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-3 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
//                     <ShieldCheck className="w-4 h-4 text-purple-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Ops, data & reliability circles
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-white/60">
//                   Build observability, dashboards and rhythms so teams detect,
//                   discuss and fix issues before customers feel them.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Own incident reviews & learning loops.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>Turn reliability into a team advantage.</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ───── SECTION 6 — PROBLEMS YOU'LL GET TO SOLVE ───── */}
//         <section className="relative z-10 w-full pb-20 overflow-hidden sm:pb-24">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6">
//             <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
//               {/* Left: bullets */}
//               <div>
//                 <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                   Problems you&apos;ll help solve
//                 </p>
//                 <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl text-white">
//                   Work on problems that compound your learning
//                 </h2>
//                 <p className="mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
//                   We don't optimize for vanity projects. You'll work on problems
//                   where every improvement teaches you something about systems,
//                   people and products.
//                 </p>

//                 <div className="grid gap-3 mt-5 sm:mt-6">
//                   {[
//                     "Reducing drop-offs in complex multi-step checkouts.",
//                     "Designing safer release pipelines for high-traffic campaigns.",
//                     "Creating shared dashboards used by both business & engineering.",
//                     "Untangling legacy integrations without stopping the business.",
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className={`carrier-chip-animate carrier-delay-${
//                         index + 1
//                       } inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-3 sm:px-4 py-2.5 text-xs text-white/80`}
//                     >
//                       <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-purple-300" />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right: stacked cards */}
//               <div className="space-y-4">
//                 <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-purple-300/50 bg-[#0a0a0a]/90">
//                   <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300">
//                     For freshers
//                   </p>
//                   <p className="mt-2 text-xs sm:text-sm text-white/80">
//                     Ship with guidance, own small but meaningful pieces of the
//                     journey, and grow from real feedback—not just tickets.
//                   </p>

//                   <div className="carrier-hover-extra mt-3 space-y-1.5">
//                     <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                       <CheckCircle2 className="w-3 h-3" />
//                       <span>Structured mentoring & code reviews.</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                       <ArrowRight className="w-3 h-3" />
//                       <span>Exposure to real clients & real metrics.</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-sky-300/50 bg-[#0a0a0a]/90">
//                   <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
//                     For experienced talent
//                   </p>
//                   <p className="mt-2 text-xs sm:text-sm text-white/80">
//                     Lead initiatives, coach teams, and help design the systems
//                     and practices that shape how we solve problems at scale.
//                   </p>

//                   <div className="carrier-hover-extra mt-3 space-y-1.5">
//                     <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                       <CheckCircle2 className="w-3 h-3" />
//                       <span>Influence architecture & product direction.</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                       <ArrowRight className="w-3 h-3" />
//                       <span>Coach juniors and shape how we work.</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-3 carrier-hover-card rounded-3xl border-white/15 bg-[#0a0a0a]/90">
//                   <div className="space-y-1.5">
//                     <p className="text-xs font-semibold sm:text-sm text-white">
//                       Ready to work on problems that actually matter?
//                     </p>
//                     <p className="text-[10px] sm:text-[11px] text-white/60">
//                       Explore fresher and experienced roles where your work is
//                       visible and valued.
//                     </p>

//                     <div className="carrier-hover-extra mt-2 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Clear growth paths for both IC & leads.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>
//                           Work on long-term partnerships, not one-off gigs.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     <button
//                       onClick={() => navigateTo("CarrierFresher")}
//                       className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                     >
//                       View Fresher Roles
//                     </button>
//                     <button
//                       onClick={() => navigateTo("CarrierExperienced")}
//                       className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                     >
//                       View Experienced Roles
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Component-scoped CSS */}
//       <style>{`
//         /* Hero animations */
//         @keyframes carrierHeroZoom {
//           0% {
//             transform: scale(1.05);
//           }
//           100% {
//             transform: scale(1.12);
//           }
//         }

//         .carrier-hero-zoom {
//           animation: carrierHeroZoom 18s ease-in-out infinite alternate;
//         }

//         @keyframes carrierFadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(25px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .carrier-fade-up {
//           animation: carrierFadeUp 1.2s ease-out forwards;
//         }

//         /* Block/card base animation on load */
//         @keyframes carrierCardUp {
//           0% {
//             opacity: 0;
//             transform: translateY(18px) scale(0.98);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .carrier-card-animate {
//           animation: carrierCardUp 0.9s ease-out both;
//         }

//         /* Chip / pill animations */
//         @keyframes carrierChipUp {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .carrier-chip-animate {
//           animation: carrierChipUp 0.7s ease-out both;
//         }

//         /* Simple stagger delays */
//         .carrier-delay-1 {
//           animation-delay: 0.08s;
//         }

//         .carrier-delay-2 {
//           animation-delay: 0.18s;
//         }

//         .carrier-delay-3 {
//           animation-delay: 0.28s;
//         }

//         .carrier-delay-4 {
//           animation-delay: 0.38s;
//         }

//         /* GLOBAL HOVER GLOW FOR ALL CARDS */
//         .carrier-hover-card {
//           position: relative;
//           overflow: hidden;
//           border-radius: 1.5rem;
//           isolation: isolate;
//           transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease,
//             background 0.35s ease;
//         }

//         .carrier-hover-card::before {
//           content: '';
//           position: absolute;
//           inset: -40%;
//           background: radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.25), transparent 55%),
//             radial-gradient(circle at 100% 100%, rgba(125, 211, 252, 0.2), transparent 55%);
//           opacity: 0;
//           transform: scale(0.9);
//           transition: opacity 0.45s ease, transform 0.45s ease;
//           z-index: -1;
//         }

//         .carrier-hover-card:hover {
//           transform: translateY(-8px) scale(1.01);
//           border-color: rgba(255, 255, 255, 0.3);
//           box-shadow: 0 26px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.2);
//         }

//         .carrier-hover-card:hover::before {
//           opacity: 1;
//           transform: scale(1);
//         }

//         /* Extra content reveal on hover */
//         .carrier-hover-extra {
//           opacity: 0;
//           transform: translateY(6px);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//         }

//         .carrier-hover-card:hover .carrier-hover-extra {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Circle-based unique design for Section 5 cards */
//         .carrier-role-card {
//           position: relative;
//           border-radius: 1.5rem;
//         }

//         .carrier-role-card::before {
//           content: '';
//           position: absolute;
//           width: 220px;
//           height: 220px;
//           border-radius: 9999px;
//           background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.25), transparent 60%),
//             radial-gradient(circle at 70% 70%, rgba(125, 211, 252, 0.2), transparent 65%);
//           top: -70px;
//           right: -80px;
//           opacity: 0.35;
//           filter: blur(2px);
//           transform: translate3d(0, 0, 0) scale(1);
//           transition: opacity 0.45s ease, transform 0.45s ease;
//           z-index: -1;
//         }

//         .carrier-role-card::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             circle at bottom left,
//             rgba(0, 0, 0, 0.5),
//             transparent 55%
//           );
//           opacity: 0.7;
//           z-index: -1;
//         }

//         /* Icon circle halo */
//         .carrier-role-icon {
//           position: relative;
//           z-index: 1;
//           box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
//           transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
//         }

//         .carrier-role-icon::after {
//           content: '';
//           position: absolute;
//           inset: -4px;
//           border-radius: 9999px;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           opacity: 0.6;
//           transform: scale(0.9);
//           transition: opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
//         }

//         .carrier-role-card:hover::before {
//           opacity: 0.9;
//           transform: translate3d(-18px, 18px, 0) scale(1.08);
//         }

//         .carrier-role-card:hover .carrier-role-icon {
//           transform: translateY(-2px) scale(1.05);
//           box-shadow: 0 0 24px rgba(168, 85, 247, 0.5);
//         }

//         .carrier-role-card:hover .carrier-role-icon::after {
//           opacity: 1;
//           transform: scale(1.06);
//           border-color: rgba(255, 255, 255, 0.6);
//         }
//       `}</style>
//     </>
//   );
// };

// export default CarrierProblems;
// "use client";

// import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
// import {
//   ArrowRight,
//   CheckCircle2,
//   CloudCog,
//   Gauge,
//   LineChart,
//   ShieldCheck,
//   // ShoppingCart,
//   Users,
//   Workflow,
// } from "lucide-react";

// interface CarrierProblemsProps {
//   navigateTo: (page: string) => void;
// }

// const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
//   const links = [
//     { label: "Home", page: "CarrierHome" },
//     { label: "Life at CJSS", page: "CarrierLife" },
//     { label: "Jobs", page: "CarrierFresher" },
//     // { label: "Job for Experienced", page: "CarrierExperienced" },
//     { label: "Problems we solve", page: "CarrierProblems" },
//   ];

//   return (
//     <>
//       <CareerNavigationBar
//         links={links}
//         navigateTo={navigateTo}
//         activePage="CarrierProblems"
//       />

//       {/* Push content down to avoid navbar overlap */}
//       <div className="h-[80px] md:h-[80px]"></div>

//       {/* GLOBAL WRAPPER – single continuous black background */}
//       <main className="relative w-full min-h-screen overflow-hidden text-white bg-black">
//         {/* unified background */}
//         <div className="absolute inset-0 pointer-events-none -z-20">
//           <div className="absolute inset-0 bg-black" />
//           {/* subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//           {/* top glow - subtle */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
//           {/* bottom glow - subtle */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
//           {/* grid pattern */}
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         {/* ───────────── HERO BANNER — PROBLEMS WE SOLVE ───────────── */}
//         <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
//           {/* Background image */}
//           <img
//             src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=90"
//             alt="Problems We Solve"
//             className="absolute inset-0 object-cover w-full h-full scale-105 carrier-hero-zoom"
//           />

//           {/* Gradient overlays */}
//           <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />

//           {/* Content */}
//           <div className="relative max-w-4xl px-4 text-center sm:px-6 carrier-fade-up">
//             <span className="inline-block mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-purple-300/90">
//               Problems We Solve
//             </span>

//             <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl xl:text-6xl sm:leading-tight">
//               We solve{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 mission-critical commerce & technology challenges
//               </span>{" "}
//               that slow down growth
//             </h1>

//             <p className="max-w-2xl mx-auto mt-4 text-xs leading-relaxed sm:mt-6 sm:text-sm md:text-base text-white/70">
//               From conversions to systems, workflows and decision-making — we
//               turn problems into opportunities for brands, customers and
//               careers.
//             </p>

//             {/* Call to action - Updated to hero style buttons */}
//             <div className="flex flex-wrap justify-center gap-3 mt-6 sm:mt-8">
//               <button
//                 onClick={() => navigateTo("CarrierFresher")}
//                 className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//               >
//                 {/* Job at CJSS */}
//                 Job Openings
//               </button>
//               {/* <button
//                 onClick={() => navigateTo("CarrierExperienced")}
//                 className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//               >
//                 Job for Experienced
//               </button> */}
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden bg-[#050505]">
//           {/* BACKGROUND AMBIANCE */}
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Platform scalability & performance
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Platform Scalability & Performance Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: SINGLE INTEGRATED PROBLEM & SOLUTION CARD */}
//               <div className="flex flex-col">
//                 <div className="h-full px-5 py-6 border sm:px-8 sm:py-8 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-[32px] border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex flex-col h-full gap-6">
//                     {/* ICON & TITLE AREA */}
//                     <div className="flex items-center gap-4">
//                       <div className="flex items-center justify-center border shrink-0 h-10 w-10 rounded-2xl bg-purple-500/15 border-purple-300/50">
//                         <Gauge className="w-5 h-5 text-purple-300" />
//                       </div>
//                       <h3 className="text-base font-semibold text-white">
//                         System Reliability & Growth
//                       </h3>
//                     </div>

//                     <div className="space-y-8 flex-1">
//                       {/* THE PROBLEM */}
//                       <div>
//                         <h4 className="text-[10px] font-bold tracking-[0.2em] text-purple-300 uppercase mb-2">
//                           The Problem
//                         </h4>
//                         <p className="text-sm leading-relaxed text-white/90">
//                           As transaction volumes, users, and content grow,
//                           platforms struggle to maintain performance and
//                           reliability. Peak traffic events expose architectural
//                           limitations, leading to slow response times, failures,
//                           and downtime.
//                         </p>
//                       </div>

//                       {/* HOW WE SOLVE IT */}
//                       <div className="pt-6 border-t border-white/5">
//                         <h4 className="text-[10px] font-bold tracking-[0.2em] text-sky-300 uppercase mb-2">
//                           How We Solve It
//                         </h4>
//                         <p className="text-sm leading-relaxed text-white/60">
//                           Through Digital Platform Services and Cloud & DevOps,
//                           we design and operate scalable architectures using
//                           enterprise commerce and experience platforms, cloud
//                           infrastructure, and performance engineering practices.
//                           By optimizing how platforms such as{" "}
//                           <span className="text-white/80 font-medium">
//                             SAP Commerce
//                           </span>{" "}
//                           and experience-driven systems are built and run, we
//                           ensure they scale reliably under growth and peak
//                           demand.
//                         </p>
//                       </div>
//                     </div>

//                     {/* HOVER CONTENT (Interactive items) */}
//                     <div className="carrier-hover-extra flex flex-wrap gap-4 pt-4 border-t border-white/5">
//                       <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                         <CheckCircle2 className="w-3.5 h-3.5" />
//                         <span>Identify bottlenecks early</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <ArrowRight className="w-3.5 h-3.5" />
//                         <span>Elastic architecture growth</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE AREA */}
//               <div className="relative h-64 lg:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 z-10 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />
//                   <img
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
//                     alt="Platform scalability and performance challenges"
//                     className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-105"
//                   />

//                   {/* IMAGE HOVER CONTENT */}
//                   <div className="carrier-hover-extra absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
//                     <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 border border-purple-300/40 text-[10px] text-white font-medium uppercase tracking-wider">
//                       <Gauge className="w-3 h-3 text-purple-300" />
//                       Scalable architectures
//                     </span>
//                     <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 border border-sky-300/40 text-[10px] text-white font-medium uppercase tracking-wider">
//                       <LineChart className="w-3 h-3 text-sky-300" />
//                       Performance under load
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Platform scalability & performance
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Platform Scalability & Performance Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 — FULL CONTENT */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <Gauge className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Platforms That Are Difficult to Scale
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         As transaction volumes, users, and content grow,
//                         platforms struggle to maintain performance and
//                         reliability. Systems that were not designed for scale
//                         become bottlenecks during peak usage and
//                         business-critical events.
//                       </p>

//                       {/* HOVER CONTENT */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Identify scalability bottlenecks early.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Design platforms for elastic growth.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 — FULL CONTENT */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Workflow className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Difficulty Managing Peak Traffic and Business-Critical
//                         Events
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Seasonal spikes, campaigns, and launches expose platform
//                         limitations, resulting in slow response times, failures,
//                         or downtime during high-impact periods.
//                       </p>

//                       {/* HOVER CONTENT */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Prepare systems for traffic surges.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Protect uptime during critical launches.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE (UNCHANGED) */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />
//                   <img
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
//                     alt="Platform scalability and performance challenges"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* IMAGE HOVER CONTENT */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <Gauge className="w-3 h-3 text-purple-300" />
//                       Scalable architectures
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <LineChart className="w-3 h-3 text-sky-300" />
//                       Performance under load
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Legacy architecture & modernization
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Legacy Architecture & Modernization Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <Workflow className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Legacy Systems Slowing Down Innovation
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Tightly coupled architectures and outdated systems make
//                         enhancements risky and time-consuming. Teams spend more
//                         effort maintaining legacy platforms than delivering new
//                         business capabilities.
//                       </p>

//                       {/* HOVER CONTENT */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Reduce risk in legacy modernization.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Decouple systems incrementally.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Gauge className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Inflexible Platforms Limiting Business Agility
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Rigid platform designs restrict the ability to adapt to
//                         new business models, customer expectations, or market
//                         changes.
//                       </p>

//                       {/* HOVER CONTENT */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Enable faster change with modular design.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Support evolving business needs.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE (UNCHANGED — YOU CAN REPLACE LATER) */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />
//                   <img
//                     src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=90"
//                     alt="Legacy architecture and modernization"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* IMAGE HOVER CONTENT */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <Workflow className="w-3 h-3 text-purple-300" />
//                       Decoupled architectures
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <Gauge className="w-3 h-3 text-sky-300" />
//                       Faster, safer evolution
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Digital experience & usability
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Digital Experience & Usability Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <Users className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Inconsistent and Outdated User Experiences
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Applications that evolve over time often result in
//                         fragmented interfaces, inconsistent journeys, and poor
//                         usability across devices, affecting adoption and
//                         productivity.
//                       </p>

//                       {/* HOVER CONTENT */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>
//                             Unify interfaces and interaction patterns.
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Improve usability across devices.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Workflow className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Disconnected Customer Journeys
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Content, commerce, and application layers operate in
//                         silos, leading to broken or inconsistent experiences
//                         across channels.
//                       </p>

//                       {/* HOVER CONTENT */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Connect journeys across touchpoints.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>
//                             Deliver consistent omnichannel experiences.
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE (UNCHANGED) */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />
//                   <img
//                     src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=90"
//                     alt="Digital experience and usability challenges"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* IMAGE HOVER CONTENT */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <Users className="w-3 h-3 text-purple-300" />
//                       Unified experiences
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <Workflow className="w-3 h-3 text-sky-300" />
//                       Connected journeys
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Integration & ecosystem
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Integration & Ecosystem Complexity
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <Workflow className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Complex and Fragmented Digital Ecosystems
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Multiple platforms and systems operate independently,
//                         creating data silos, operational inefficiencies, and
//                         inconsistent business processes.
//                       </p>

//                       {/* ✅ HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Break down system silos.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Unify data across platforms.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <LineChart className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Limited Real-Time Data Flow Across Systems
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Delayed or unreliable data exchange prevents
//                         organizations from gaining real-time visibility into
//                         operations and customer behavior.
//                       </p>

//                       {/* ✅ HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Enable real-time integrations.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Improve operational visibility.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE — SAME IMAGE, HOVER INFO RESTORED */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />

//                   {/* SAME IMAGE (REUSED) */}
//                   <img
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
//                     alt="Integration and ecosystem complexity"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* ✅ IMAGE HOVER INFO */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <Workflow className="w-3 h-3 text-purple-300" />
//                       Connected platforms
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <LineChart className="w-3 h-3 text-sky-300" />
//                       Real-time data flow
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Delivery & releases
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Delivery & Release Management Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <Workflow className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Slow Release Cycles and High Deployment Risk
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Manual processes, fragile pipelines, and lack of
//                         automation lead to delayed releases, frequent rollbacks,
//                         and production issues.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>
//                             Automate build, test, and deploy pipelines.
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>
//                             Reduce release risk and rollback frequency.
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Gauge className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Unpredictable Production Issues After Release
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Insufficient validation and late-stage testing increase
//                         the risk of defects and performance issues reaching
//                         production.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Shift testing earlier in the pipeline.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Catch issues before customers do.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE — SAME IMAGE REUSED */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />

//                   <img
//                     src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=90"
//                     alt="Delivery and release management"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* IMAGE HOVER INFO */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <Workflow className="w-3 h-3 text-purple-300" />
//                       Safer releases
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <Gauge className="w-3 h-3 text-sky-300" />
//                       Predictable deployments
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Operations & support
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Operational Stability & Support Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <Users className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         High Operational Overhead and Reactive Support
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Teams spend most of their time responding to incidents
//                         rather than improving systems. Limited observability
//                         results in firefighting instead of prevention.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Reduce incident-driven work.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>
//                             Shift focus from firefighting to prevention.
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Gauge className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Lack of Proactive Monitoring and Issue Prevention
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Without continuous visibility into system health, issues
//                         surface only after business impact has occurred.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Detect issues before customers notice.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Improve system reliability and uptime.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE — SAME IMAGE REUSED */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />

//                   <img
//                     src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90"
//                     alt="Operational stability and support"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* IMAGE HOVER INFO */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <Users className="w-3 h-3 text-purple-300" />
//                       Reduced operational load
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <Gauge className="w-3 h-3 text-sky-300" />
//                       Proactive system health
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Quality, reliability & risk
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Quality, Reliability & Risk Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Inconsistent Application Quality Across Releases
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Frequent changes without continuous quality practices
//                         result in regressions, defects, and reduced confidence
//                         in releases.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Introduce continuous testing practices.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Increase confidence in every release.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Gauge className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Performance and Reliability Issues in Production
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Applications behave differently under real-world load,
//                         leading to instability, slowdowns, and customer
//                         dissatisfaction.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>
//                             Validate performance under realistic load.
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>
//                             Improve reliability before customers feel impact.
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE — SAME IMAGE REUSED */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />

//                   <img
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
//                     alt="Quality and reliability challenges"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* IMAGE HOVER INFO */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <CheckCircle2 className="w-3 h-3 text-purple-300" />
//                       Release confidence
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <Gauge className="w-3 h-3 text-sky-300" />
//                       Production reliability
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//             {/* HEADER */}
//             <div className="mb-8">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 Visibility & insights
//               </p>

//               <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                 Visibility, Insights & Decision-Making Challenges
//               </h2>
//             </div>

//             <div className="grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* LEFT: PROBLEM CARDS */}
//               <div className="space-y-4">
//                 {/* CARD 1 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-purple-500/15 border-purple-300/50">
//                       <LineChart className="w-3.5 h-3.5 text-purple-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Limited Visibility into Platform Health and Performance
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Organizations lack clear insights into how systems are
//                         performing and where risks are emerging.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>
//                             Centralize health and performance signals.
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Detect risks before they escalate.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-300/50">
//                       <Users className="w-3.5 h-3.5 text-sky-300" />
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-white">
//                         Difficulty Linking Technology Performance to Business
//                         Impact
//                       </h3>

//                       <p className="mt-1 text-xs leading-relaxed text-white/60">
//                         Without actionable insights, teams struggle to
//                         prioritize improvements and make informed decisions.
//                       </p>

//                       {/* HOVER INFO */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>
//                             Connect technical metrics to business outcomes.
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Prioritize work based on real impact.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: IMAGE — SAME IMAGE REUSED */}
//               <div className="relative h-56 sm:h-64 md:h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80" />

//                   <img
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
//                     alt="Visibility and decision-making insights"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   {/* IMAGE HOVER INFO */}
//                   <div className="carrier-hover-extra absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[10px] text-white">
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-purple-300/60">
//                       <LineChart className="w-3 h-3 text-purple-300" />
//                       Actionable insights
//                     </span>
//                     <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 border border-sky-300/60">
//                       <Users className="w-3 h-3 text-sky-300" />
//                       Better decisions
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ───── SECTION 5 — HOW WE WORK WITH TEAMS ───── */}
//         <section className="relative z-10 w-full overflow-hidden border-t py-14 sm:py-16 border-white/5">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute right-[5%] top-[10%] h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
//             <div className="absolute left-[5%] bottom-[5%] h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6">
//             <div className="text-center">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                 How we work with teams
//               </p>
//               <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl text-white">
//                 Your work sits at the intersection of business, tech & customers
//               </h2>
//               <p className="max-w-2xl mx-auto mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
//                 Whether you are a fresher or experienced professional, you'll
//                 work in small, cross-functional squads that own real
//                 outcomes—not just tasks.
//               </p>
//             </div>

//             <div className="grid gap-5 mt-8 sm:gap-6 sm:mt-10 md:grid-cols-3">
//               {/* Card 1 */}
//               <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-1 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
//                     <Gauge className="w-4 h-4 text-purple-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Performance & experience squads
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-white/60">
//                   Work on page speed, funnels, UX and experiments that directly
//                   move conversion and revenue.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Pair with designers, PMs & engineers.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>See your experiments ship in real campaigns.</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-2 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-sky-500/15 border-sky-300/60">
//                     <CloudCog className="w-4 h-4 text-sky-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Platform & integration pods
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-white/60">
//                   Modernize stacks, integrate systems and build reliable
//                   foundations that other teams can innovate on.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Work with APIs, events & data flows.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>Shape the technical foundation of brands.</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-3 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-[#0a0a0a]/80">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
//                     <ShieldCheck className="w-4 h-4 text-purple-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-white">
//                     Ops, data & reliability circles
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-white/60">
//                   Build observability, dashboards and rhythms so teams detect,
//                   discuss and fix issues before customers feel them.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Own incident reviews & learning loops.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>Turn reliability into a team advantage.</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ───── SECTION 6 — PROBLEMS YOU'LL GET TO SOLVE ───── */}
//         <section className="relative z-10 w-full pb-20 overflow-hidden sm:pb-24">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6">
//             <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
//               {/* Left: bullets */}
//               <div>
//                 <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
//                   Problems you&apos;ll help solve
//                 </p>
//                 <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl text-white">
//                   Work on problems that compound your learning
//                 </h2>
//                 <p className="mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
//                   We don't optimize for vanity projects. You'll work on problems
//                   where every improvement teaches you something about systems,
//                   people and products.
//                 </p>

//                 <div className="grid gap-3 mt-5 sm:mt-6">
//                   {[
//                     "Reducing drop-offs in complex multi-step checkouts.",
//                     "Designing safer release pipelines for high-traffic campaigns.",
//                     "Creating shared dashboards used by both business & engineering.",
//                     "Untangling legacy integrations without stopping the business.",
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className={`carrier-chip-animate carrier-delay-${
//                         index + 1
//                       } inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-3 sm:px-4 py-2.5 text-xs text-white/80`}
//                     >
//                       <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-purple-300" />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right: stacked cards */}
//               <div className="space-y-4">
//                 <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-purple-300/50 bg-[#0a0a0a]/90">
//                   <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300">
//                     For freshers
//                   </p>
//                   <p className="mt-2 text-xs sm:text-sm text-white/80">
//                     Ship with guidance, own small but meaningful pieces of the
//                     journey, and grow from real feedback—not just tickets.
//                   </p>

//                   <div className="carrier-hover-extra mt-3 space-y-1.5">
//                     <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                       <CheckCircle2 className="w-3 h-3" />
//                       <span>Structured mentoring & code reviews.</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                       <ArrowRight className="w-3 h-3" />
//                       <span>Exposure to real clients & real metrics.</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-sky-300/50 bg-[#0a0a0a]/90">
//                   <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
//                     For experienced talent
//                   </p>
//                   <p className="mt-2 text-xs sm:text-sm text-white/80">
//                     Lead initiatives, coach teams, and help design the systems
//                     and practices that shape how we solve problems at scale.
//                   </p>

//                   <div className="carrier-hover-extra mt-3 space-y-1.5">
//                     <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                       <CheckCircle2 className="w-3 h-3" />
//                       <span>Influence architecture & product direction.</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                       <ArrowRight className="w-3 h-3" />
//                       <span>Coach juniors and shape how we work.</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-3 carrier-hover-card rounded-3xl border-white/15 bg-[#0a0a0a]/90">
//                   <div className="space-y-1.5">
//                     <p className="text-xs font-semibold sm:text-sm text-white">
//                       Ready to work on problems that actually matter?
//                     </p>
//                     <p className="text-[10px] sm:text-[11px] text-white/60">
//                       Explore fresher and experienced roles where your work is
//                       visible and valued.
//                     </p>

//                     <div className="carrier-hover-extra mt-2 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Clear growth paths for both IC & leads.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>
//                           Work on long-term partnerships, not one-off gigs.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     <button
//                       onClick={() => navigateTo("CarrierFresher")}
//                       className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                     >
//                       View Fresher Roles
//                     </button>
//                     <button
//                       onClick={() => navigateTo("CarrierExperienced")}
//                       className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                     >
//                       View Experienced Roles
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Component-scoped CSS */}
//       <style>{`
//         /* Hero animations */
//         @keyframes carrierHeroZoom {
//           0% {
//             transform: scale(1.05);
//           }
//           100% {
//             transform: scale(1.12);
//           }
//         }

//         .carrier-hero-zoom {
//           animation: carrierHeroZoom 18s ease-in-out infinite alternate;
//         }

//         @keyframes carrierFadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(25px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .carrier-fade-up {
//           animation: carrierFadeUp 1.2s ease-out forwards;
//         }

//         /* Block/card base animation on load */
//         @keyframes carrierCardUp {
//           0% {
//             opacity: 0;
//             transform: translateY(18px) scale(0.98);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .carrier-card-animate {
//           animation: carrierCardUp 0.9s ease-out both;
//         }

//         /* Chip / pill animations */
//         @keyframes carrierChipUp {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .carrier-chip-animate {
//           animation: carrierChipUp 0.7s ease-out both;
//         }

//         /* Simple stagger delays */
//         .carrier-delay-1 {
//           animation-delay: 0.08s;
//         }

//         .carrier-delay-2 {
//           animation-delay: 0.18s;
//         }

//         .carrier-delay-3 {
//           animation-delay: 0.28s;
//         }

//         .carrier-delay-4 {
//           animation-delay: 0.38s;
//         }

//         /* GLOBAL HOVER GLOW FOR ALL CARDS */
//         .carrier-hover-card {
//           position: relative;
//           overflow: hidden;
//           border-radius: 1.5rem;
//           isolation: isolate;
//           transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease,
//             background 0.35s ease;
//         }

//         .carrier-hover-card::before {
//           content: '';
//           position: absolute;
//           inset: -40%;
//           background: radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.25), transparent 55%),
//             radial-gradient(circle at 100% 100%, rgba(125, 211, 252, 0.2), transparent 55%);
//           opacity: 0;
//           transform: scale(0.9);
//           transition: opacity 0.45s ease, transform 0.45s ease;
//           z-index: -1;
//         }

//         .carrier-hover-card:hover {
//           transform: translateY(-8px) scale(1.01);
//           border-color: rgba(255, 255, 255, 0.3);
//           box-shadow: 0 26px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.2);
//         }

//         .carrier-hover-card:hover::before {
//           opacity: 1;
//           transform: scale(1);
//         }

//         /* Extra content reveal on hover */
//         .carrier-hover-extra {
//           opacity: 0;
//           transform: translateY(6px);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//         }

//         .carrier-hover-card:hover .carrier-hover-extra {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Circle-based unique design for Section 5 cards */
//         .carrier-role-card {
//           position: relative;
//           border-radius: 1.5rem;
//         }

//         .carrier-role-card::before {
//           content: '';
//           position: absolute;
//           width: 220px;
//           height: 220px;
//           border-radius: 9999px;
//           background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.25), transparent 60%),
//             radial-gradient(circle at 70% 70%, rgba(125, 211, 252, 0.2), transparent 65%);
//           top: -70px;
//           right: -80px;
//           opacity: 0.35;
//           filter: blur(2px);
//           transform: translate3d(0, 0, 0) scale(1);
//           transition: opacity 0.45s ease, transform 0.45s ease;
//           z-index: -1;
//         }

//         .carrier-role-card::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             circle at bottom left,
//             rgba(0, 0, 0, 0.5),
//             transparent 55%
//           );
//           opacity: 0.7;
//           z-index: -1;
//         }

//         /* Icon circle halo */
//         .carrier-role-icon {
//           position: relative;
//           z-index: 1;
//           box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
//           transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
//         }

//         .carrier-role-icon::after {
//           content: '';
//           position: absolute;
//           inset: -4px;
//           border-radius: 9999px;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           opacity: 0.6;
//           transform: scale(0.9);
//           transition: opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
//         }

//         .carrier-role-card:hover::before {
//           opacity: 0.9;
//           transform: translate3d(-18px, 18px, 0) scale(1.08);
//         }

//         .carrier-role-card:hover .carrier-role-icon {
//           transform: translateY(-2px) scale(1.05);
//           box-shadow: 0 0 24px rgba(168, 85, 247, 0.5);
//         }

//         .carrier-role-card:hover .carrier-role-icon::after {
//           opacity: 1;
//           transform: scale(1.06);
//           border-color: rgba(255, 255, 255, 0.6);
//         }
//       `}</style>
//     </>
//   );
// };

// export default CarrierProblems;

"use client";

import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import {
  ArrowRight,
  CheckCircle2,
  CloudCog,
  Gauge,
  LineChart,
  ShieldCheck,
  Users,
  Workflow,
  Layers,
  Monitor,
  GitBranch,
  Headphones,
  Bug,
  BarChart3,
} from "lucide-react";

interface CarrierProblemsProps {
  navigateTo: (page: string) => void;
}

const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life at CJSS", page: "CarrierLife" },
    { label: "Jobs", page: "CarrierFresher" },
    { label: "Problems we solve", page: "CarrierProblems" },
  ];

  // Problems data array
  const problemsData = [
    {
      id: 1,
      label: "Platform scalability & performance",
      title: "Platform Scalability & Performance Challenges",
      cardTitle: "System Reliability & Growth",
      icon: Gauge,
      iconColor: "purple",
      problem:
        "As transaction volumes, users, and content grow, platforms struggle to maintain performance and reliability. Peak traffic events expose architectural limitations, leading to slow response times, failures, and downtime.",
      solution:
        "Through Digital Platform Services and Cloud & DevOps, we design and operate scalable architectures using enterprise commerce and experience platforms, cloud infrastructure, and performance engineering practices. By optimizing how platforms such as",
      solutionHighlight: "SAP Commerce",
      solutionEnd:
        "and experience-driven systems are built and run, we ensure they scale reliably under growth and peak demand.",
      hoverItems: [
        { text: "Identify bottlenecks early", color: "purple" },
        { text: "Elastic architecture growth", color: "sky" },
      ],
      imageTags: [
        { text: "Scalable architectures", color: "purple", icon: Gauge },
        { text: "Performance under load", color: "sky", icon: LineChart },
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      label: "Legacy architecture & modernization",
      title: "Legacy Architecture & Modernization Challenges",
      cardTitle: "Architecture Evolution",
      icon: Layers,
      iconColor: "sky",
      problem:
        "Legacy applications and tightly coupled architectures slow innovation and increase risk. Teams spend more time maintaining existing systems than delivering new business capabilities.",
      solution:
        "Our Application Modernization Services help evolve legacy Java-based and enterprise applications incrementally. By modernizing architectures while preserving core business logic, we reduce technical debt, improve agility, and enable continuous evolution without disrupting live operations.",
      solutionHighlight: "Application Modernization Services",
      solutionEnd: "",
      hoverItems: [
        { text: "Reduce technical debt", color: "sky" },
        { text: "Preserve business logic", color: "purple" },
      ],
      imageTags: [
        { text: "Legacy modernization", color: "sky", icon: Layers },
        { text: "Continuous evolution", color: "purple", icon: Workflow },
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      label: "Digital experience & usability",
      title: "Digital Experience & Usability Challenges",
      cardTitle: "User Experience Excellence",
      icon: Monitor,
      iconColor: "purple",
      problem:
        "Inconsistent interfaces and fragmented journeys reduce user adoption, productivity, and customer satisfaction. Experiences often vary across channels and devices.",
      solution:
        "Through Digital Platform & Experience Services, we modernize user interfaces and digital journeys using experience management platforms and modern frontend frameworks. By aligning content, commerce, and presentation layers, we deliver consistent, intuitive, and scalable digital experiences.",
      solutionHighlight: "Digital Platform & Experience Services",
      solutionEnd: "",
      hoverItems: [
        { text: "Consistent interfaces", color: "purple" },
        { text: "Cross-channel experiences", color: "sky" },
      ],
      imageTags: [
        { text: "Modern UX", color: "purple", icon: Monitor },
        { text: "Seamless journeys", color: "sky", icon: Users },
      ],
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      label: "Integration & ecosystem complexity",
      title: "Integration & Ecosystem Complexity",
      cardTitle: "Connected Systems",
      icon: Workflow,
      iconColor: "sky",
      problem:
        "Disconnected platforms and applications create data silos, manual processes, and limited real-time visibility, making operations inefficient and decision-making slow.",
      solution:
        "Our Enterprise Integration & Platform Enablement services connect commerce, content, and backend systems using API-led and event-driven integration approaches. This enables seamless data flow, unified workflows, and real-time operational visibility across the enterprise.",
      solutionHighlight: "Enterprise Integration & Platform Enablement",
      solutionEnd: "",
      hoverItems: [
        { text: "Unified data flows", color: "sky" },
        { text: "Real-time visibility", color: "purple" },
      ],
      imageTags: [
        { text: "API-led integration", color: "sky", icon: Workflow },
        { text: "Event-driven systems", color: "purple", icon: CloudCog },
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      label: "Delivery & release management",
      title: "Delivery & Release Management Challenges",
      cardTitle: "Deployment Excellence",
      icon: GitBranch,
      iconColor: "purple",
      problem:
        "Slow release cycles, manual deployments, and fragile pipelines increase deployment risk and delay business outcomes.",
      solution:
        "With Cloud & DevOps Services and Quality Engineering, we enable automated delivery pipelines, continuous validation, and controlled releases. This helps teams deploy faster, reduce errors, and release with confidence while maintaining quality and stability.",
      solutionHighlight: "Cloud & DevOps Services",
      solutionEnd: "",
      hoverItems: [
        { text: "Automated pipelines", color: "purple" },
        { text: "Continuous validation", color: "sky" },
      ],
      imageTags: [
        { text: "CI/CD excellence", color: "purple", icon: GitBranch },
        { text: "Quality gates", color: "sky", icon: ShieldCheck },
      ],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      label: "Operational stability & support",
      title: "Operational Stability & Support Challenges",
      cardTitle: "Proactive Operations",
      icon: Headphones,
      iconColor: "sky",
      problem:
        "Teams operate reactively, spending significant effort resolving incidents instead of improving systems. Limited observability leads to firefighting rather than prevention.",
      solution:
        "Our Application Management Services provide proactive monitoring, predictive insights, and continuous optimization. By managing platforms such as SAP Commerce–based systems and enterprise applications end to end, we improve stability, reduce downtime, and lower operational overhead.",
      solutionHighlight: "Application Management Services",
      solutionEnd: "",
      hoverItems: [
        { text: "Proactive monitoring", color: "sky" },
        { text: "Predictive insights", color: "purple" },
      ],
      imageTags: [
        { text: "24/7 operations", color: "sky", icon: Headphones },
        { text: "Incident prevention", color: "purple", icon: ShieldCheck },
      ],
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      label: "Quality, reliability & risk",
      title: "Quality, Reliability & Risk Challenges",
      cardTitle: "Quality Assurance",
      icon: Bug,
      iconColor: "purple",
      problem:
        "Frequent changes without continuous quality practices lead to regressions, performance issues, and reduced confidence in releases.",
      solution:
        "Through Quality Engineering & Assurance, we embed quality across the delivery lifecycle. Continuous testing, performance validation, and risk assessment ensure applications perform reliably under real-world conditions and business-critical loads.",
      solutionHighlight: "Quality Engineering & Assurance",
      solutionEnd: "",
      hoverItems: [
        { text: "Continuous testing", color: "purple" },
        { text: "Risk assessment", color: "sky" },
      ],
      imageTags: [
        { text: "Test automation", color: "purple", icon: Bug },
        { text: "Performance validation", color: "sky", icon: LineChart },
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      label: "Visibility, insights & decision-making",
      title: "Visibility, Insights & Decision-Making Challenges",
      cardTitle: "Data-Driven Decisions",
      icon: BarChart3,
      iconColor: "sky",
      problem:
        "Limited insight into platform health and business impact makes it difficult to prioritize improvements and plan effectively.",
      solution:
        "Across Application Management, Cloud & DevOps, and Digital Platform Services, we provide continuous visibility into system behavior and performance. This enables informed decision-making, proactive optimization, and better alignment between technology operations and business goals.",
      solutionHighlight:
        "Application Management, Cloud & DevOps, and Digital Platform Services",
      solutionEnd: "",
      hoverItems: [
        { text: "Continuous visibility", color: "sky" },
        { text: "Informed decisions", color: "purple" },
      ],
      imageTags: [
        { text: "Real-time dashboards", color: "sky", icon: BarChart3 },
        { text: "Business insights", color: "purple", icon: LineChart },
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <>
      <CareerNavigationBar
        links={links}
        navigateTo={navigateTo}
        activePage="CarrierProblems"
      />

      {/* Push content down to avoid navbar overlap */}
      <div className="h-[80px] md:h-[80px]"></div>

      {/* GLOBAL WRAPPER – single continuous black background */}
      <main className="relative w-full min-h-screen overflow-hidden text-white bg-black">
        {/* unified background */}
        <div className="absolute inset-0 pointer-events-none -z-20">
          <div className="absolute inset-0 bg-black" />
          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
          {/* top glow - subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
          {/* bottom glow - subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
          {/* grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* ───────────── HERO BANNER — PROBLEMS WE SOLVE ───────────── */}
        <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=90"
            alt="Problems We Solve"
            className="absolute inset-0 object-cover w-full h-full scale-105 carrier-hero-zoom"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />

          {/* Content */}
          <div className="relative max-w-4xl px-4 text-center sm:px-6 carrier-fade-up">
            <span className="inline-block mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-purple-300/90">
              Problems We Solve
            </span>

            <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl xl:text-6xl sm:leading-tight">
              We solve{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                mission-critical commerce & technology challenges
              </span>{" "}
              that slow down growth
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-xs leading-relaxed sm:mt-6 sm:text-sm md:text-base text-white/70">
              From conversions to systems, workflows and decision-making — we
              turn problems into opportunities for brands, customers and
              careers.
            </p>

            {/* Call to action - Updated to hero style buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={() => navigateTo("CarrierFresher")}
                className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
              >
                Job Openings
              </button>
            </div>
          </div>
        </section>

        {/* ───────────── INTRO SECTION ───────────── */}
        {/* <section className="relative z-10 w-full overflow-hidden bg-[#050505] py-16 sm:py-20">
          <div className="max-w-5xl px-4 mx-auto text-center sm:px-6">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl text-white">
              Problems We Solve{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                — And How We Help
              </span>
            </h2>
            <p className="max-w-4xl mx-auto mt-4 text-sm leading-relaxed sm:text-base md:text-lg text-white/60">
              We help organizations overcome critical challenges that arise as
              digital platforms and enterprise systems grow in scale,
              complexity, and business impact. Each challenge is addressed
              through a combination of specialized services and proven
              technology platforms.
            </p>
          </div>
        </section> */}

        {/* ───────────── INTRO SECTION ───────────── */}
        <section className="relative z-10 w-full overflow-hidden bg-[#050505] py-20 sm:py-28">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-6xl px-4 mx-auto sm:px-6 relative">
            {/* Main Card */}
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12 md:p-16 overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-6 left-6 w-16 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                <div className="absolute top-6 left-6 w-[1px] h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32">
                <div className="absolute top-6 right-6 w-16 h-[1px] bg-gradient-to-l from-sky-500/50 to-transparent" />
                <div className="absolute top-6 right-6 w-[1px] h-16 bg-gradient-to-b from-sky-500/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32">
                <div className="absolute bottom-6 left-6 w-16 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                <div className="absolute bottom-6 left-6 w-[1px] h-16 bg-gradient-to-t from-purple-500/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-6 right-6 w-16 h-[1px] bg-gradient-to-l from-sky-500/50 to-transparent" />
                <div className="absolute bottom-6 right-6 w-[1px] h-16 bg-gradient-to-t from-sky-500/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative text-center">
                {/* Main Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Problems We Solve
                </h2>

                {/* Gradient Subtitle */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-purple-500" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-light text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text">
                    And How We Help
                  </p>
                  <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-sky-500" />
                </div>

                {/* Description */}
                <p className="max-w-3xl mx-auto mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/60">
                  We help organizations overcome{" "}
                  <span className="text-purple-300">critical challenges</span>{" "}
                  that arise as digital platforms and enterprise systems grow in
                  scale, complexity, and business impact. Each challenge is
                  addressed through{" "}
                  <span className="text-sky-300">specialized services</span> and
                  proven technology platforms.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
                  {[
                    { text: "Scalability", color: "purple" },
                    { text: "Modernization", color: "sky" },
                    { text: "Integration", color: "purple" },
                    { text: "Performance", color: "sky" },
                    { text: "Reliability", color: "purple" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`group px-5 py-2.5 rounded-full border transition-all duration-300 cursor-default
                ${
                  item.color === "purple"
                    ? "border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10"
                    : "border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/10"
                }`}
                    >
                      <span
                        className={`text-sm font-medium transition-colors duration-300
                ${
                  item.color === "purple"
                    ? "text-purple-300/70 group-hover:text-purple-300"
                    : "text-sky-300/70 group-hover:text-sky-300"
                }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Scroll Hint */}
                <div className="mt-12 flex flex-col items-center gap-2">
                  <span className="text-xs text-white/30 tracking-wider uppercase">
                    Explore Challenges
                  </span>
                  <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ───────────── ALL PROBLEM SECTIONS ───────────── */}
        {problemsData.map((item, index) => {
          const IconComponent = item.icon;
          const isReversed = index % 2 === 1;

          return (
            <section
              key={item.id}
              className="relative z-10 w-full overflow-hidden bg-[#050505]"
            >
              {/* BACKGROUND AMBIANCE */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
              </div>

              <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
                {/* HEADER */}
                <div className="mb-8">
                  <p
                    className={`text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase ${
                      item.iconColor === "purple"
                        ? "text-purple-300"
                        : "text-sky-300"
                    }`}
                  >
                    {item.label}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
                    {item.title}
                  </h2>
                </div>

                <div
                  className={`grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch ${
                    isReversed
                      ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]"
                      : ""
                  }`}
                >
                  {/* LEFT/RIGHT: SINGLE INTEGRATED PROBLEM & SOLUTION CARD */}
                  <div
                    className={`flex flex-col ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div
                      className={`h-full px-5 py-6 border sm:px-8 sm:py-8 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-[32px] border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl`}
                    >
                      <div className="flex flex-col h-full gap-6">
                        {/* ICON & TITLE AREA */}
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex items-center justify-center border shrink-0 h-10 w-10 rounded-2xl ${
                              item.iconColor === "purple"
                                ? "bg-purple-500/15 border-purple-300/50"
                                : "bg-sky-500/15 border-sky-300/50"
                            }`}
                          >
                            <IconComponent
                              className={`w-5 h-5 ${
                                item.iconColor === "purple"
                                  ? "text-purple-300"
                                  : "text-sky-300"
                              }`}
                            />
                          </div>
                          <h3 className="text-base font-semibold text-white">
                            {item.cardTitle}
                          </h3>
                        </div>

                        <div className="space-y-8 flex-1">
                          {/* THE PROBLEM */}
                          <div>
                            <h4
                              className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${
                                item.iconColor === "purple"
                                  ? "text-purple-300"
                                  : "text-sky-300"
                              }`}
                            >
                              The Problem
                            </h4>
                            <p className="text-sm leading-relaxed text-white/90">
                              {item.problem}
                            </p>
                          </div>

                          {/* HOW WE SOLVE IT */}
                          <div className="pt-6 border-t border-white/5">
                            <h4
                              className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${
                                item.iconColor === "purple"
                                  ? "text-sky-300"
                                  : "text-purple-300"
                              }`}
                            >
                              How We Solve It
                            </h4>
                            <p className="text-sm leading-relaxed text-white/60">
                              {item.solution}{" "}
                              {item.solutionHighlight && (
                                <span className="text-white/80 font-medium">
                                  {/* {item.solutionHighlight} */}
                                </span>
                              )}{" "}
                              {item.solutionEnd}
                            </p>
                          </div>
                        </div>

                        {/* HOVER CONTENT (Interactive items) */}
                        <div className="carrier-hover-extra flex flex-wrap gap-4 pt-4 border-t border-white/5">
                          {item.hoverItems.map((hoverItem, hoverIndex) => (
                            <div
                              key={hoverIndex}
                              className={`flex items-center gap-2 text-[11px] ${
                                hoverItem.color === "purple"
                                  ? "text-purple-300"
                                  : "text-sky-300"
                              }`}
                            >
                              {hoverIndex === 0 ? (
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              ) : (
                                <ArrowRight className="w-3.5 h-3.5" />
                              )}
                              <span>{hoverItem.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT/LEFT: IMAGE AREA */}
                  <div
                    className={`relative h-64 lg:h-full ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/80">
                      <div
                        className={`absolute inset-0 z-10 ${
                          item.iconColor === "purple"
                            ? "bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80"
                            : "bg-gradient-to-tl from-sky-500/10 via-transparent to-black/80"
                        }`}
                      />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                      />

                      {/* IMAGE HOVER CONTENT */}
                      <div className="carrier-hover-extra absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
                        {item.imageTags.map((tag, tagIndex) => {
                          const TagIcon = tag.icon;
                          return (
                            <span
                              key={tagIndex}
                              className={`inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 border text-[10px] text-white font-medium uppercase tracking-wider ${
                                tag.color === "purple"
                                  ? "border-purple-300/40"
                                  : "border-sky-300/40"
                              }`}
                            >
                              <TagIcon
                                className={`w-3 h-3 ${
                                  tag.color === "purple"
                                    ? "text-purple-300"
                                    : "text-sky-300"
                                }`}
                              />
                              {tag.text}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Divider */}
              {index < problemsData.length - 1 && (
                <div className="max-w-6xl px-4 mx-auto sm:px-6">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}
            </section>
          );
        })}

        {/* ───── SECTION — HOW WE WORK WITH TEAMS ───── */}
        <section className="relative z-10 w-full overflow-hidden border-t py-14 sm:py-16 border-white/5">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="text-center">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
                How we work with teams
              </p>
              <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl text-white">
                Your work sits at the intersection of business, tech & customers
              </h2>
              <p className="max-w-2xl mx-auto mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
                Whether you are a fresher or experienced professional, you'll
                work in small, cross-functional squads that own real
                outcomes—not just tasks.
              </p>
            </div>

            <div className="grid gap-5 mt-8 sm:gap-6 sm:mt-10 md:grid-cols-3">
              {/* Card 1 */}
              <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-1 rounded-3xl border-white/10 bg-[#0a0a0a]/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
                    <Gauge className="w-4 h-4 text-purple-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    Performance & experience squads
                  </h3>
                </div>
                <p className="mt-3 text-xs text-white/60">
                  Work on page speed, funnels, UX and experiments that directly
                  move conversion and revenue.
                </p>

                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-purple-300">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Pair with designers, PMs & engineers.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-sky-300">
                    <ArrowRight className="w-3 h-3" />
                    <span>See your experiments ship in real campaigns.</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-2 rounded-3xl border-white/10 bg-[#0a0a0a]/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full sm:h-11 sm:w-11 bg-sky-500/15 border-sky-300/60">
                    <CloudCog className="w-4 h-4 text-sky-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    Platform & integration pods
                  </h3>
                </div>
                <p className="mt-3 text-xs text-white/60">
                  Modernize stacks, integrate systems and build reliable
                  foundations that other teams can innovate on.
                </p>

                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-sky-300">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Work with APIs, events & data flows.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-purple-300">
                    <ArrowRight className="w-3 h-3" />
                    <span>Shape the technical foundation of brands.</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-3 rounded-3xl border-white/10 bg-[#0a0a0a]/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
                    <ShieldCheck className="w-4 h-4 text-purple-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    Ops, data & reliability circles
                  </h3>
                </div>
                <p className="mt-3 text-xs text-white/60">
                  Build observability, dashboards and rhythms so teams detect,
                  discuss and fix issues before customers feel them.
                </p>

                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-purple-300">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Own incident reviews & learning loops.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-sky-300">
                    <ArrowRight className="w-3 h-3" />
                    <span>Turn reliability into a team advantage.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SECTION — PROBLEMS YOU'LL GET TO SOLVE ───── */}
        <section className="relative z-10 w-full pb-20 overflow-hidden sm:pb-24">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
              {/* Left: bullets */}
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
                  Problems you&apos;ll help solve
                </p>
                <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl text-white">
                  Work on problems that compound your learning
                </h2>
                <p className="mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
                  We don't optimize for vanity projects. You'll work on problems
                  where every improvement teaches you something about systems,
                  people and products.
                </p>

                <div className="grid gap-3 mt-5 sm:mt-6">
                  {[
                    "Reducing drop-offs in complex multi-step checkouts.",
                    "Designing safer release pipelines for high-traffic campaigns.",
                    "Creating shared dashboards used by both business & engineering.",
                    "Untangling legacy integrations without stopping the business.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`carrier-chip-animate carrier-delay-${
                        index + 1
                      } inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-3 sm:px-4 py-2.5 text-xs text-white/80`}
                    >
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-purple-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: stacked cards */}
              <div className="space-y-4">
                <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-1 rounded-3xl border-purple-300/50 bg-[#0a0a0a]/90">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300">
                    For freshers
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-white/80">
                    Ship with guidance, own small but meaningful pieces of the
                    journey, and grow from real feedback—not just tickets.
                  </p>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Structured mentoring & code reviews.</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-sky-300">
                      <ArrowRight className="w-3 h-3" />
                      <span>Exposure to real clients & real metrics.</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-2 rounded-3xl border-sky-300/50 bg-[#0a0a0a]/90">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                    For experienced talent
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-white/80">
                    Lead initiatives, coach teams, and help design the systems
                    and practices that shape how we solve problems at scale.
                  </p>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-sky-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Influence architecture & product direction.</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <ArrowRight className="w-3 h-3" />
                      <span>Coach juniors and shape how we work.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-3 rounded-3xl border-white/15 bg-[#0a0a0a]/90">
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold sm:text-sm text-white">
                      Ready to work on problems that actually matter?
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-white/60">
                      Explore fresher and experienced roles where your work is
                      visible and valued.
                    </p>

                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-purple-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Clear growth paths for both IC & leads.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-sky-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>
                          Work on long-term partnerships, not one-off gigs.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => navigateTo("CarrierFresher")}
                      className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                    >
                      View Fresher Roles
                    </button>
                    <button
                      onClick={() => navigateTo("CarrierExperienced")}
                      className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                    >
                      View Experienced Roles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Component-scoped CSS */}
      <style>{`
        /* Hero animations */
        @keyframes carrierHeroZoom {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.12);
          }
        }

        .carrier-hero-zoom {
          animation: carrierHeroZoom 18s ease-in-out infinite alternate;
        }

        @keyframes carrierFadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .carrier-fade-up {
          animation: carrierFadeUp 1.2s ease-out forwards;
        }

        /* Block/card base animation on load */
        @keyframes carrierCardUp {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .carrier-card-animate {
          animation: carrierCardUp 0.9s ease-out both;
        }

        /* Chip / pill animations */
        @keyframes carrierChipUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .carrier-chip-animate {
          animation: carrierChipUp 0.7s ease-out both;
        }

        /* Simple stagger delays */
        .carrier-delay-1 {
          animation-delay: 0.08s;
        }

        .carrier-delay-2 {
          animation-delay: 0.18s;
        }

        .carrier-delay-3 {
          animation-delay: 0.28s;
        }

        .carrier-delay-4 {
          animation-delay: 0.38s;
        }

        /* GLOBAL HOVER GLOW FOR ALL CARDS */
        .carrier-hover-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          isolation: isolate;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease,
            background 0.35s ease;
        }

        .carrier-hover-card::before {
          content: '';
          position: absolute;
          inset: -40%;
          background: radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.25), transparent 55%),
            radial-gradient(circle at 100% 100%, rgba(125, 211, 252, 0.2), transparent 55%);
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.45s ease, transform 0.45s ease;
          z-index: -1;
        }

        .carrier-hover-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.2);
        }

        .carrier-hover-card:hover::before {
          opacity: 1;
          transform: scale(1);
        }

        /* Extra content reveal on hover */
        .carrier-hover-extra {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .carrier-hover-card:hover .carrier-hover-extra {
          opacity: 1;
          transform: translateY(0);
        }

        /* Circle-based unique design for Section 5 cards */
        .carrier-role-card {
          position: relative;
          border-radius: 1.5rem;
        }

        .carrier-role-card::before {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.25), transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(125, 211, 252, 0.2), transparent 65%);
          top: -70px;
          right: -80px;
          opacity: 0.35;
          filter: blur(2px);
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.45s ease, transform 0.45s ease;
          z-index: -1;
        }

        .carrier-role-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at bottom left,
            rgba(0, 0, 0, 0.5),
            transparent 55%
          );
          opacity: 0.7;
          z-index: -1;
        }

        /* Icon circle halo */
        .carrier-role-icon {
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
          transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
        }

        .carrier-role-icon::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0.6;
          transform: scale(0.9);
          transition: opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
        }

        .carrier-role-card:hover::before {
          opacity: 0.9;
          transform: translate3d(-18px, 18px, 0) scale(1.08);
        }

        .carrier-role-card:hover .carrier-role-icon {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 24px rgba(168, 85, 247, 0.5);
        }

        .carrier-role-card:hover .carrier-role-icon::after {
          opacity: 1;
          transform: scale(1.06);
          border-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default CarrierProblems;
