// 'use client';

// import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';
// import {
//   CloudCog,
//   Gauge,
//   LineChart,
//   ShieldCheck,
//   ShoppingCart,
//   Users,
//   Workflow,
//   CheckCircle2,
//   ArrowRight,
// } from 'lucide-react';

// interface CarrierProblemsProps {
//   navigateTo: (page: string) => void;
// }

// const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
//   const links = [
//     { label: 'Home', page: 'CarrierHome' },
//     { label: 'Life at CJSS', page: 'CarrierLife' },
//     { label: 'Job for Fresher', page: 'CarrierFresher' },
//     { label: 'Job for Experienced', page: 'CarrierExperienced' },
//     { label: 'Problems we solve', page: 'CarrierProblems' },
//   ];

//   return (
//     <>
//       <CareerNavigationBar links={links} navigateTo={navigateTo} />

//       {/* GLOBAL WRAPPER – single continuous background for all sections */}
//       <main className="relative w-full min-h-screen overflow-hidden text-white bg-slate-950">
//         {/* unified background */}
//         <div className="absolute inset-0 pointer-events-none -z-20">
//           <div className="absolute inset-0 bg-[#020617]" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32)_0,transparent_55%)]" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,68,68,0.22)_0,transparent_60%)]" />
//           <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:140px_140px]" />
//         </div>

//         {/* ───────────── HERO BANNER — PROBLEMS WE SOLVE ───────────── */}
//         <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
//           {/* Background image */}
//           <img
//             src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=90"
//             alt="Problems We Solve"
//             className="absolute inset-0 object-cover w-full h-full scale-105 carrier-hero-zoom"
//           />

//           {/* Gradient overlays */}
//           <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-slate-950/90" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.32)_0,transparent_60%)]" />

//           {/* Content */}
//           <div className="relative max-w-4xl px-6 text-center carrier-fade-up">
//             <span className="inline-block mb-4 text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-300/90">
//               Problems We Solve
//             </span>

//             <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//               We solve{' '}
//               <span className="text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text">
//                 mission-critical commerce & technology challenges
//               </span>{' '}
//               that slow down growth
//             </h1>

//             <p className="max-w-2xl mx-auto mt-6 text-sm leading-relaxed text-white/80 sm:text-lg">
//               From conversions to systems, workflows and decision-making — we turn problems into
//               opportunities for brands, customers and careers.
//             </p>

//             {/* Call to action */}
//             <div className="flex flex-wrap justify-center gap-3 mt-8">
//               <button
//                 onClick={() => navigateTo('CarrierFresher')}
//                 className="px-6 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_10px_35px_rgba(56,189,248,0.45)] hover:shadow-[0_14px_45px_rgba(56,189,248,0.7)] transition-transform duration-300 hover:scale-[1.04]"
//               >
//                 Job for Fresher
//               </button>
//               <button
//                 onClick={() => navigateTo('CarrierExperienced')}
//                 className="px-6 py-2.5 text-sm font-medium rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-transform duration-300 hover:scale-[1.04]"
//               >
//                 Job for Experienced
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* ─────────────── SECTION 2 — COMMERCE & CUSTOMER EXPERIENCE ─────────────── */}
//         <section className="relative z-10 w-full overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-6 py-16 mx-auto">
//             <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//               <div>
//                 <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
//                   Commerce & experience
//                 </p>
//                 <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
//                   Fixing the cracks in digital commerce journeys
//                 </h2>
//                 <p className="max-w-2xl mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
//                   We work with brands that are losing revenue to slow pages, broken journeys, and
//                   inconsistent experiences across channels. Our teams help stabilize, simplify, and
//                   scale what matters most: the customer journey.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
//                 <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/70 border-slate-700">
//                   <ShoppingCart className="w-3.5 h-3.5 text-cyan-300" />
//                   Cart & checkout friction
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/70 border-slate-700">
//                   <Users className="w-3.5 h-3.5 text-sky-300" />
//                   Inconsistent omnichannel experience
//                 </span>
//               </div>
//             </div>

//             <div className="grid gap-8 mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
//               {/* Left: problem cards */}
//               <div className="space-y-4">
//                 <div className="px-5 py-4 border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-cyan-500/15 border-cyan-400/50">
//                       <Gauge className="w-3.5 h-3.5 text-cyan-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-semibold text-slate-50">
//                         Slow pages that bleed conversions
//                       </h3>
//                       <p className="mt-1 text-xs text-slate-300">
//                         High page load times, third-party scripts, and heavy assets quietly erode
//                         add-to-cart and checkout completion rates.
//                       </p>

//                       {/* extra content on hover */}
//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Audit lighthouse & core web vitals.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Prioritize fixes that unlock revenue.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-5 py-4 border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-400/50">
//                       <Workflow className="w-3.5 h-3.5 text-sky-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-semibold text-slate-50">
//                         Broken or fragmented journeys
//                       </h3>
//                       <p className="mt-1 text-xs text-slate-300">
//                         Customers hit dead ends, inconsistent pricing, or missing information
//                         between search, PDP, cart, and post-purchase flows.
//                       </p>

//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Map actual customer paths vs ideal.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Design fixes that reduce dead ends.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-5 py-4 border carrier-card-animate carrier-delay-3 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80 backdrop-blur-xl">
//                   <div className="flex items-start gap-3">
//                     <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-emerald-500/15 border-emerald-400/50">
//                       <LineChart className="w-3.5 h-3.5 text-emerald-300" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-semibold text-slate-50">
//                         No clear line from UX changes to revenue
//                       </h3>
//                       <p className="mt-1 text-xs text-slate-300">
//                         Teams ship UX and content changes without a clear way to measure impact on
//                         funnel performance or LTV.
//                       </p>

//                       <div className="carrier-hover-extra mt-2 space-y-1.5">
//                         <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                           <CheckCircle2 className="w-3 h-3" />
//                           <span>Define hypotheses & success metrics.</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                           <ArrowRight className="w-3 h-3" />
//                           <span>Connect experiments to real business KPIs.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right: supporting image – now with hover effect & extra content */}
//               <div className="relative h-full">
//                 <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80">
//                   <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/18 via-transparent to-slate-900/80" />
//                   <img
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
//                     alt="Commerce challenges and problem-solving"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   <div className="absolute space-y-2 bottom-4 left-4 right-4">
//                     <div className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[11px] text-slate-100 border border-cyan-400/60">
//                       <ShoppingCart className="w-3.5 h-3.5 text-cyan-300" />
//                       <span>We stabilize the commerce engine before scaling it.</span>
//                     </div>

//                     <div className="carrier-hover-extra flex flex-wrap items-center gap-2 text-[11px] text-slate-100">
//                       <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-white/20">
//                         <LineChart className="w-3 h-3 text-emerald-300" />
//                         <span>Before/after impact views</span>
//                       </div>
//                       <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-white/20">
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
//             <div className="absolute right-[-12%] top-[8%] h-72 w-72 rounded-full bg-sky-500/22 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-6 py-16 mx-auto">
//             <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
//               Platforms, integrations & scale
//             </p>
//             <div className="grid gap-10 mt-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)] items-stretch">
//               {/* Left: two blocks */}
//               <div className="space-y-6">
//                 <div className="relative overflow-hidden border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/85">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-emerald-400/20" />
//                   <div className="relative p-6">
//                     <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text">
//                       Monoliths, patchwork systems & upgrade anxiety
//                     </h3>
//                     <p className="mt-2 text-sm text-slate-200">
//                       Legacy platforms, custom plugins, and tightly coupled integrations make every
//                       release risky and slow. Teams are afraid to touch critical flows.
//                     </p>
//                     <ul className="mt-3 space-y-1.5 text-xs text-slate-200/90">
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
//                         <span>Releases that feel fragile, manual and stressful.</span>
//                       </li>
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
//                         <span>Business logic buried across multiple systems.</span>
//                       </li>
//                     </ul>

//                     <div className="carrier-hover-extra mt-3 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Plan migrations with zero-downtime mindset.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>Introduce modular services around critical flows.</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative overflow-hidden border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/85">
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/18 via-transparent to-sky-400/20" />
//                   <div className="relative p-6">
//                     <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-300 bg-clip-text">
//                       Limited observability, unknown failure modes
//                     </h3>
//                     <p className="mt-2 text-sm text-slate-200">
//                       Teams learn about issues from customers and business teams instead of their
//                       own dashboards and alerts.
//                     </p>
//                     <ul className="mt-3 space-y-1.5 text-xs text-slate-200/90">
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                         <span>Hard to answer simple questions like “what broke?”</span>
//                       </li>
//                       <li className="flex gap-2">
//                         <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                         <span>
//                           No shared view of system health across product, engineering and business.
//                         </span>
//                       </li>
//                     </ul>

//                     <div className="carrier-hover-extra mt-3 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Design alerting that matches customer impact.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>Create shared runbooks for faster resolution.</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right – image with hover effect & extra pills */}
//               <div className="relative h-full">
//                 <div className="carrier-card-animate carrier-delay-3 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85">
//                   <img
//                     src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=90"
//                     alt="Platform Integration and Scale"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/25 via-transparent to-slate-950/75" />

//                   <div className="absolute inset-x-0 bottom-0 px-4 py-4 space-y-2 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
//                     <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-200">
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-sky-400/60 bg-sky-500/10">
//                         <CloudCog className="w-3.5 h-3.5 text-sky-300" />
//                         From monoliths to modular, observable systems
//                       </span>
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-emerald-400/60 bg-emerald-500/10">
//                         <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
//                         Safer releases with better insight & tooling
//                       </span>
//                     </div>

//                     <div className="carrier-hover-extra flex flex-wrap gap-2 text-[11px] text-slate-100">
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/25">
//                         <Gauge className="w-3 h-3 text-cyan-300" />
//                         Health checks built-in
//                       </span>
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/25">
//                         <LineChart className="w-3 h-3 text-emerald-300" />
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
//         <section className="relative z-10 w-full pb-20 overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute left-[10%] bottom-[5%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-6 pt-4 mx-auto">
//             <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
//               Data, operations & decisions
//             </p>

//             <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-stretch">
//               {/* Left */}
//               <div className="space-y-5">
//                 <h2 className="text-2xl font-semibold sm:text-3xl">
//                   Turning noisy operations into clear, data-backed decisions
//                 </h2>
//                 <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
//                   Many teams are drowning in reports, tools and dashboards—but still lack a single
//                   view of what to fix first. We help connect the dots between data, operations, and
//                   customer outcomes.
//                 </p>

//                 <div className="mt-3 space-y-3">
//                   <div className="flex flex-col gap-3 px-4 py-4 border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80">
//                     <div className="flex items-start gap-3">
//                       <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-cyan-500/15 border-cyan-400/60">
//                         <LineChart className="w-3.5 h-3.5 text-cyan-300" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-xs font-semibold text-slate-50">
//                           Problem: Reporting without decisions
//                         </p>
//                         <p className="mt-1 text-xs text-slate-300">
//                           Teams generate reports, but they rarely lead to clear prioritization or
//                           changes in roadmap.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-2 pl-10 text-xs text-emerald-300">
//                       <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>
//                         Outcome: Focused views for decision-makers that link metrics to next best
//                         actions.
//                       </span>
//                     </div>

//                     <div className="carrier-hover-extra pl-10 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Turn insights into backed decisions, not slides.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>Align ops, product & leadership views.</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-3 px-4 py-4 border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80">
//                     <div className="flex items-start gap-3">
//                       <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-400/60">
//                         <Users className="w-3.5 h-3.5 text-sky-300" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-xs font-semibold text-slate-50">
//                           Problem: Ops & product not aligned
//                         </p>
//                         <p className="mt-1 text-xs text-slate-300">
//                           Operations teams see issues, product teams own backlog, and engineering
//                           owns delivery—but they lack a shared view.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-2 pl-10 text-xs text-emerald-300">
//                       <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>
//                         Outcome: Shared operational dashboards that connect incidents, customer
//                         impact, and roadmap decisions.
//                       </span>
//                     </div>

//                     <div className="carrier-hover-extra pl-10 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Give everyone one source of truth.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>Turn incidents into roadmap inputs.</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right – image with hover effect & extra chips */}
//               <div className="relative h-full">
//                 <div className="carrier-card-animate carrier-delay-3 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/18 via-transparent to-sky-400/18" />
//                   <img
//                     src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90"
//                     alt="Data Operations and Decision Making"
//                     className="absolute inset-0 object-cover w-full h-full"
//                   />

//                   <div className="absolute bottom-3 left-4 right-4 rounded-2xl bg-black/70 px-4 py-3 text-[11px] text-slate-100 border border-emerald-400/60 space-y-2">
//                     <p>
//                       We design systems and working rhythms so teams know what to fix first—and why
//                       it matters to customers and the business.
//                     </p>

//                     <div className="flex flex-wrap gap-2 carrier-hover-extra">
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/20">
//                         <LineChart className="w-3 h-3 text-emerald-300" />
//                         Priority signals in one place
//                       </span>
//                       <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/20">
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
//         <section className="relative z-10 w-full py-16 overflow-hidden border-t border-white/5">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute right-[5%] top-[10%] h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
//             <div className="absolute left-[5%] bottom-[5%] h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-6 mx-auto">
//             <div className="text-center">
//               <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
//                 How we work with teams
//               </p>
//               <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
//                 Your work sits at the intersection of business, tech & customers
//               </h2>
//               <p className="max-w-2xl mx-auto mt-3 text-sm text-slate-200 sm:text-base">
//                 Whether you are a fresher or experienced professional, you’ll work in small,
//                 cross-functional squads that own real outcomes—not just tasks.
//               </p>
//             </div>

//             <div className="grid gap-6 mt-10 md:grid-cols-3">
//               {/* Card 1 */}
//               <div className="px-5 py-6 border carrier-card-animate carrier-delay-1 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-slate-950/85">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center border rounded-full carrier-role-icon h-11 w-11 bg-cyan-500/15 border-cyan-400/60">
//                     <Gauge className="w-4 h-4 text-cyan-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-slate-50">
//                     Performance & experience squads
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-slate-300">
//                   Work on page speed, funnels, UX and experiments that directly move conversion and
//                   revenue.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Pair with designers, PMs & engineers.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>See your experiments ship in real campaigns.</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className="px-5 py-6 border carrier-card-animate carrier-delay-2 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-slate-950/85">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center border rounded-full carrier-role-icon h-11 w-11 bg-sky-500/15 border-sky-400/60">
//                     <CloudCog className="w-4 h-4 text-sky-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-slate-50">
//                     Platform & integration pods
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-slate-300">
//                   Modernize stacks, integrate systems and build reliable foundations that other
//                   teams can innovate on.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Work with APIs, events & data flows.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>Shape the technical foundation of brands.</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="px-5 py-6 border carrier-card-animate carrier-delay-3 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-slate-950/85">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center border rounded-full carrier-role-icon h-11 w-11 bg-emerald-500/15 border-emerald-400/60">
//                     <ShieldCheck className="w-4 h-4 text-emerald-300" />
//                   </div>
//                   <h3 className="text-sm font-semibold text-slate-50">
//                     Ops, data & reliability circles
//                   </h3>
//                 </div>
//                 <p className="mt-3 text-xs text-slate-300">
//                   Build observability, dashboards and rhythms so teams detect, discuss and fix
//                   issues before customers feel them.
//                 </p>

//                 <div className="carrier-hover-extra mt-3 space-y-1.5">
//                   <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Own incident reviews & learning loops.</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                     <ArrowRight className="w-3 h-3" />
//                     <span>Turn reliability into a team advantage.</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ───── SECTION 6 — PROBLEMS YOU'LL GET TO SOLVE ───── */}
//         <section className="relative z-10 w-full pb-24 overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//           </div>

//           <div className="max-w-6xl px-6 mx-auto">
//             <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
//               {/* Left: bullets */}
//               <div>
//                 <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
//                   Problems you&apos;ll help solve
//                 </p>
//                 <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
//                   Work on problems that compound your learning
//                 </h2>
//                 <p className="mt-3 text-sm text-slate-200 sm:text-base">
//                   We don’t optimize for vanity projects. You’ll work on problems where every
//                   improvement teaches you something about systems, people and products.
//                 </p>

//                 <div className="grid gap-3 mt-6">
//                   {[
//                     'Reducing drop-offs in complex multi-step checkouts.',
//                     'Designing safer release pipelines for high-traffic campaigns.',
//                     'Creating shared dashboards used by both business & engineering.',
//                     'Untangling legacy integrations without stopping the business.',
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className={`carrier-chip-animate carrier-delay-${
//                         index + 1
//                       } inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2.5 text-xs text-slate-200`}
//                     >
//                       <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right: stacked cards */}
//               <div className="space-y-4">
//                 <div className="px-5 py-5 border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-cyan-400/50 bg-slate-950/90">
//                   <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
//                     For freshers
//                   </p>
//                   <p className="mt-2 text-sm text-slate-100">
//                     Ship with guidance, own small but meaningful pieces of the journey, and grow
//                     from real feedback—not just tickets.
//                   </p>

//                   <div className="carrier-hover-extra mt-3 space-y-1.5">
//                     <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                       <CheckCircle2 className="w-3 h-3" />
//                       <span>Structured mentoring & code reviews.</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                       <ArrowRight className="w-3 h-3" />
//                       <span>Exposure to real clients & real metrics.</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-5 py-5 border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-emerald-400/50 bg-slate-950/90">
//                   <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
//                     For experienced talent
//                   </p>
//                   <p className="mt-2 text-sm text-slate-100">
//                     Lead initiatives, coach teams, and help design the systems and practices that
//                     shape how we solve problems at scale.
//                   </p>

//                   <div className="carrier-hover-extra mt-3 space-y-1.5">
//                     <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                       <CheckCircle2 className="w-3 h-3" />
//                       <span>Influence architecture & product direction.</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                       <ArrowRight className="w-3 h-3" />
//                       <span>Coach juniors and shape how we work.</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 border carrier-card-animate carrier-delay-3 carrier-hover-card rounded-3xl border-white/15 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-950/95">
//                   <div>
//                     <p className="text-xs font-semibold text-slate-100">
//                       Ready to work on problems that actually matter?
//                     </p>
//                     <p className="mt-1 text-[11px] text-slate-300">
//                       Explore fresher and experienced roles where your work is visible and valued.
//                     </p>

//                     <div className="carrier-hover-extra mt-3 space-y-1.5">
//                       <div className="flex items-center gap-2 text-[11px] text-cyan-300">
//                         <CheckCircle2 className="w-3 h-3" />
//                         <span>Clear growth paths for both IC & leads.</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-emerald-300">
//                         <ArrowRight className="w-3 h-3" />
//                         <span>Work on long-term partnerships, not one-off gigs.</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     <button
//                       onClick={() => navigateTo('CarrierFresher')}
//                       className="px-4 py-2 text-[11px] font-medium rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-black hover:opacity-90 transition-transform duration-300 hover:scale-[1.03]"
//                     >
//                       View Fresher Roles
//                     </button>
//                     <button
//                       onClick={() => navigateTo('CarrierExperienced')}
//                       className="px-4 py-2 text-[11px] font-medium rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-transform duration-300 hover:scale-[1.03]"
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

//       {/* 🔹 Component-scoped CSS – ONLY FOR THIS FILE */}
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

//         /* Chip / pill animations (slightly lighter) */
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

//         /* ==== GLOBAL HOVER GLOW FOR ALL CARDS (including image wrappers now) ==== */
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
//           background: radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.4), transparent 55%),
//             radial-gradient(circle at 100% 100%, rgba(52, 211, 153, 0.35), transparent 55%);
//           opacity: 0;
//           transform: scale(0.9);
//           transition: opacity 0.45s ease, transform 0.45s ease;
//           z-index: -1;
//         }

//         .carrier-hover-card:hover {
//           transform: translateY(-8px) scale(1.01);
//           border-color: rgba(191, 219, 254, 0.9);
//           box-shadow: 0 26px 70px rgba(15, 23, 42, 0.95), 0 0 45px rgba(56, 189, 248, 0.45);
//           background: radial-gradient(
//             circle at top left,
//             rgba(15, 23, 42, 0.96),
//             rgba(15, 23, 42, 0.98)
//           );
//         }

//         .carrier-hover-card:hover::before {
//           opacity: 1;
//           transform: scale(1);
//         }

//         /* Extra content reveal on hover – no layout jump */
//         .carrier-hover-extra {
//           opacity: 0;
//           transform: translateY(6px);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//         }

//         .carrier-hover-card:hover .carrier-hover-extra {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* ==== Circle-based unique design for Section 5 cards ==== */
//         .carrier-role-card {
//           border-radius: 1.5rem;
//         }

//         .carrier-role-card::before {
//           content: '';
//           position: absolute;
//           width: 220px;
//           height: 220px;
//           border-radius: 9999px;
//           background: radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.45), transparent 60%),
//             radial-gradient(circle at 70% 70%, rgba(52, 211, 153, 0.35), transparent 65%);
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
//             rgba(15, 23, 42, 0.7),
//             transparent 55%
//           );
//           opacity: 0.7;
//           z-index: -1;
//         }

//         /* Icon circle halo */
//         .carrier-role-icon {
//           position: relative;
//           z-index: 1;
//           box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4);
//           transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
//         }

//         .carrier-role-icon::after {
//           content: '';
//           position: absolute;
//           inset: -4px;
//           border-radius: 9999px;
//           border: 1px solid rgba(148, 163, 184, 0.45);
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
//           box-shadow: 0 0 24px rgba(56, 189, 248, 0.8);
//         }

//         .carrier-role-card:hover .carrier-role-icon::after {
//           opacity: 1;
//           transform: scale(1.06);
//           border-color: rgba(248, 250, 252, 0.9);
//         }
//       `}</style>
//     </>
//   );
// };

// export default CarrierProblems;

'use client';

import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';
import {
  CloudCog,
  Gauge,
  LineChart,
  ShieldCheck,
  ShoppingCart,
  Users,
  Workflow,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface CarrierProblemsProps {
  navigateTo: (page: string) => void;
}

const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life at CJSS', page: 'CarrierLife' },
    { label: 'Job for Fresher', page: 'CarrierFresher' },
    { label: 'Job for Experienced', page: 'CarrierExperienced' },
    { label: 'Problems we solve', page: 'CarrierProblems' },
  ];

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* GLOBAL WRAPPER – single continuous background for all sections */}
      <main className="relative w-full min-h-screen overflow-hidden text-white bg-slate-950">
        {/* unified background */}
        <div className="absolute inset-0 pointer-events-none -z-20">
          <div className="absolute inset-0 bg-[#020617]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32)_0,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,68,68,0.22)_0,transparent_60%)]" />
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:140px_140px]" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-slate-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.32)_0,transparent_60%)]" />

          {/* Content */}
          <div className="relative max-w-4xl px-4 text-center sm:px-6 carrier-fade-up">
            <span className="inline-block mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-cyan-300/90">
              Problems We Solve
            </span>

            <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl xl:text-6xl sm:leading-tight">
              We solve{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text">
                mission-critical commerce & technology challenges
              </span>{' '}
              that slow down growth
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-xs leading-relaxed sm:mt-6 sm:text-sm md:text-base text-white/80">
              From conversions to systems, workflows and decision-making — we turn problems into
              opportunities for brands, customers and careers.
            </p>

            {/* Call to action */}
            <div className="flex flex-wrap justify-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={() => navigateTo('CarrierFresher')}
                className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_10px_35px_rgba(56,189,248,0.45)] hover:shadow-[0_14px_45px_rgba(56,189,248,0.7)] transition-transform duration-300 hover:scale-[1.04]"
              >
                Job for Fresher
              </button>
              <button
                onClick={() => navigateTo('CarrierExperienced')}
                className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-transform duration-300 hover:scale-[1.04]"
              >
                Job for Experienced
              </button>
            </div>
          </div>
        </section>

        {/* ─────────────── SECTION 2 — COMMERCE & CUSTOMER EXPERIENCE ─────────────── */}
        <section className="relative z-10 w-full overflow-hidden">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          </div>

          <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
                  Commerce & experience
                </p>
                <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl">
                  Fixing the cracks in digital commerce journeys
                </h2>
                <p className="max-w-2xl mt-2 text-xs leading-relaxed sm:mt-3 sm:text-sm md:text-base text-slate-200">
                  We work with brands that are losing revenue to slow pages, broken journeys, and
                  inconsistent experiences across channels. Our teams help stabilize, simplify, and
                  scale what matters most: the customer journey.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-slate-300">
                <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/70 border-slate-700">
                  <ShoppingCart className="w-3.5 h-3.5 text-cyan-300" />
                  Cart & checkout friction
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/70 border-slate-700">
                  <Users className="w-3.5 h-3.5 text-sky-300" />
                  Inconsistent omnichannel experience
                </span>
              </div>
            </div>

            <div className="grid gap-8 mt-8 sm:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
              {/* Left: problem cards */}
              <div className="space-y-4">
                <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80 backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-cyan-500/15 border-cyan-400/50">
                      <Gauge className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        Slow pages that bleed conversions
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        High page load times, third-party scripts, and heavy assets quietly erode
                        add-to-cart and checkout completion rates.
                      </p>

                      {/* extra content on hover */}
                      <div className="carrier-hover-extra mt-2 space-y-1.5">
                        <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Audit lighthouse & core web vitals.</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                          <ArrowRight className="w-3 h-3" />
                          <span>Prioritize fixes that unlock revenue.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80 backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-400/50">
                      <Workflow className="w-3.5 h-3.5 text-sky-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        Broken or fragmented journeys
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Customers hit dead ends, inconsistent pricing, or missing information
                        between search, PDP, cart, and post-purchase flows.
                      </p>

                      <div className="carrier-hover-extra mt-2 space-y-1.5">
                        <div className="flex items-center gap-2 text-[11px] text-sky-300">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Map actual customer paths vs ideal.</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                          <ArrowRight className="w-3 h-3" />
                          <span>Design fixes that reduce dead ends.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 border sm:px-5 carrier-card-animate carrier-delay-3 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80 backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-emerald-500/15 border-emerald-400/50">
                      <LineChart className="w-3.5 h-3.5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        No clear line from UX changes to revenue
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Teams ship UX and content changes without a clear way to measure impact on
                        funnel performance or LTV.
                      </p>

                      <div className="carrier-hover-extra mt-2 space-y-1.5">
                        <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Define hypotheses & success metrics.</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                          <ArrowRight className="w-3 h-3" />
                          <span>Connect experiments to real business KPIs.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: supporting image – with fixed height on small screens */}
              <div className="relative h-56 sm:h-64 md:h-full">
                <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80">
                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/18 via-transparent to-slate-900/80" />
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
                    alt="Commerce challenges and problem-solving"
                    className="absolute inset-0 object-cover w-full h-full"
                  />

                  <div className="absolute space-y-2 bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[10px] sm:text-[11px] text-slate-100 border border-cyan-400/60">
                      <ShoppingCart className="w-3.5 h-3.5 text-cyan-300" />
                      <span>We stabilize the commerce engine before scaling it.</span>
                    </div>

                    <div className="carrier-hover-extra flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-slate-100">
                      <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-white/20">
                        <LineChart className="w-3 h-3 text-emerald-300" />
                        <span>Before/after impact views</span>
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-white/20">
                        <Users className="w-3 h-3 text-sky-300" />
                        <span>Aligned CX & product teams</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── SECTION 3 — TECHNOLOGY, INTEGRATION & SCALE ───────── */}
        <section className="relative z-10 w-full overflow-hidden">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute right-[-12%] top-[8%] h-72 w-72 rounded-full bg-sky-500/22 blur-3xl" />
          </div>

          <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
              Platforms, integrations & scale
            </p>
            <div className="grid gap-8 sm:gap-10 mt-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)] items-stretch">
              {/* Left: two blocks */}
              <div className="space-y-6">
                <div className="relative overflow-hidden border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/85">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-emerald-400/20" />
                  <div className="relative p-5 sm:p-6">
                    <h3 className="text-base font-semibold text-transparent sm:text-lg bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text">
                      Monoliths, patchwork systems & upgrade anxiety
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-200">
                      Legacy platforms, custom plugins, and tightly coupled integrations make every
                      release risky and slow. Teams are afraid to touch critical flows.
                    </p>
                    <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-slate-200/90">
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Releases that feel fragile, manual and stressful.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Business logic buried across multiple systems.</span>
                      </li>
                    </ul>

                    <div className="carrier-hover-extra mt-3 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Plan migrations with zero-downtime mindset.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>Introduce modular services around critical flows.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/85">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/18 via-transparent to-sky-400/20" />
                  <div className="relative p-5 sm:p-6">
                    <h3 className="text-base font-semibold text-transparent sm:text-lg bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-300 bg-clip-text">
                      Limited observability, unknown failure modes
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-200">
                      Teams learn about issues from customers and business teams instead of their
                      own dashboards and alerts.
                    </p>
                    <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-slate-200/90">
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Hard to answer simple questions like “what broke?”</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>
                          No shared view of system health across product, engineering and business.
                        </span>
                      </li>
                    </ul>

                    <div className="carrier-hover-extra mt-3 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Design alerting that matches customer impact.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>Create shared runbooks for faster resolution.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right – image with fixed height on small screens */}
              <div className="relative h-56 sm:h-64 md:h-full">
                <div className="carrier-card-animate carrier-delay-3 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=90"
                    alt="Platform Integration and Scale"
                    className="absolute inset-0 object-cover w-full h-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/25 via-transparent to-slate-950/75" />

                  <div className="absolute inset-x-0 bottom-0 px-4 py-3 space-y-2 sm:py-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-slate-200">
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-sky-400/60 bg-sky-500/10">
                        <CloudCog className="w-3.5 h-3.5 text-sky-300" />
                        From monoliths to modular, observable systems
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-emerald-400/60 bg-emerald-500/10">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                        Safer releases with better insight & tooling
                      </span>
                    </div>

                    <div className="carrier-hover-extra flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-slate-100">
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/25">
                        <Gauge className="w-3 h-3 text-cyan-300" />
                        Health checks built-in
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/25">
                        <LineChart className="w-3 h-3 text-emerald-300" />
                        Release impact tracked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SECTION 4 — DATA, OPERATIONS & DECISION-MAKING ───── */}
        <section className="relative z-10 w-full pb-16 overflow-hidden sm:pb-20">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute left-[10%] bottom-[5%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>

          <div className="max-w-6xl px-4 pt-6 mx-auto sm:px-6 sm:pt-4">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
              Data, operations & decisions
            </p>

            <div className="mt-4 grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-stretch">
              {/* Left */}
              <div className="space-y-5">
                <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                  Turning noisy operations into clear, data-backed decisions
                </h2>
                <p className="text-xs leading-relaxed sm:text-sm md:text-base text-slate-200">
                  Many teams are drowning in reports, tools and dashboards—but still lack a single
                  view of what to fix first. We help connect the dots between data, operations, and
                  customer outcomes.
                </p>

                <div className="mt-2 space-y-3 sm:mt-3">
                  <div className="flex flex-col gap-3 px-4 py-4 border carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-cyan-500/15 border-cyan-400/60">
                        <LineChart className="w-3.5 h-3.5 text-cyan-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold sm:text-sm text-slate-50">
                          Problem: Reporting without decisions
                        </p>
                        <p className="mt-1 text-xs text-slate-300">
                          Teams generate reports, but they rarely lead to clear prioritization or
                          changes in roadmap.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 pl-10 text-xs text-emerald-300">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        Outcome: Focused views for decision-makers that link metrics to next best
                        actions.
                      </span>
                    </div>

                    <div className="carrier-hover-extra pl-10 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Turn insights into backed decisions, not slides.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>Align ops, product & leadership views.</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 px-4 py-4 border carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-white/10 bg-slate-950/80">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-400/60">
                        <Users className="w-3.5 h-3.5 text-sky-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold sm:text-sm text-slate-50">
                          Problem: Ops & product not aligned
                        </p>
                        <p className="mt-1 text-xs text-slate-300">
                          Operations teams see issues, product teams own backlog, and engineering
                          owns delivery—but they lack a shared view.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 pl-10 text-xs text-emerald-300">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        Outcome: Shared operational dashboards that connect incidents, customer
                        impact, and roadmap decisions.
                      </span>
                    </div>

                    <div className="carrier-hover-extra pl-10 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-sky-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Give everyone one source of truth.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>Turn incidents into roadmap inputs.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right – image with fixed height on small screens */}
              <div className="relative h-56 sm:h-64 md:h-full">
                <div className="carrier-card-animate carrier-delay-3 carrier-hover-card relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/18 via-transparent to-sky-400/18" />
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90"
                    alt="Data Operations and Decision Making"
                    className="absolute inset-0 object-cover w-full h-full"
                  />

                  <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 rounded-2xl bg-black/70 px-4 py-3 text-[10px] sm:text-[11px] text-slate-100 border border-emerald-400/60 space-y-2">
                    <p>
                      We design systems and working rhythms so teams know what to fix first—and why
                      it matters to customers and the business.
                    </p>

                    <div className="flex flex-wrap gap-2 carrier-hover-extra">
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/20">
                        <LineChart className="w-3 h-3 text-emerald-300" />
                        Priority signals in one place
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/80 border-white/20">
                        <Users className="w-3 h-3 text-sky-300" />
                        Shared rituals to act on data
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SECTION 5 — HOW WE WORK WITH TEAMS ───── */}
        <section className="relative z-10 w-full overflow-hidden border-t py-14 sm:py-16 border-white/5">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute right-[5%] top-[10%] h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute left-[5%] bottom-[5%] h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>

          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="text-center">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
                How we work with teams
              </p>
              <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl">
                Your work sits at the intersection of business, tech & customers
              </h2>
              <p className="max-w-2xl mx-auto mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-slate-200">
                Whether you are a fresher or experienced professional, you’ll work in small,
                cross-functional squads that own real outcomes—not just tasks.
              </p>
            </div>

            <div className="grid gap-5 mt-8 sm:gap-6 sm:mt-10 md:grid-cols-3">
              {/* Card 1 */}
              <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-1 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-slate-950/85">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-cyan-500/15 border-cyan-400/60">
                    <Gauge className="w-4 h-4 text-cyan-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    Performance & experience squads
                  </h3>
                </div>
                <p className="mt-3 text-xs text-slate-300">
                  Work on page speed, funnels, UX and experiments that directly move conversion and
                  revenue.
                </p>

                <div className="carrier-hover-extra mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Pair with designers, PMs & engineers.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                    <ArrowRight className="w-3 h-3" />
                    <span>See your experiments ship in real campaigns.</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-2 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-slate-950/85">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-sky-500/15 border-sky-400/60">
                    <CloudCog className="w-4 h-4 text-sky-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    Platform & integration pods
                  </h3>
                </div>
                <p className="mt-3 text-xs text-slate-300">
                  Modernize stacks, integrate systems and build reliable foundations that other
                  teams can innovate on.
                </p>

                <div className="carrier-hover-extra mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-sky-300">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Work with APIs, events & data flows.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                    <ArrowRight className="w-3 h-3" />
                    <span>Shape the technical foundation of brands.</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-3 carrier-hover-card carrier-role-card rounded-3xl border-white/10 bg-slate-950/85">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full carrier-role-icon sm:h-11 sm:w-11 bg-emerald-500/15 border-emerald-400/60">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    Ops, data & reliability circles
                  </h3>
                </div>
                <p className="mt-3 text-xs text-slate-300">
                  Build observability, dashboards and rhythms so teams detect, discuss and fix
                  issues before customers feel them.
                </p>

                <div className="carrier-hover-extra mt-3 space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Own incident reviews & learning loops.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                    <ArrowRight className="w-3 h-3" />
                    <span>Turn reliability into a team advantage.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SECTION 6 — PROBLEMS YOU'LL GET TO SOLVE ───── */}
        <section className="relative z-10 w-full pb-20 overflow-hidden sm:pb-24">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          </div>

          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
              {/* Left: bullets */}
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
                  Problems you&apos;ll help solve
                </p>
                <h2 className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl md:text-3xl">
                  Work on problems that compound your learning
                </h2>
                <p className="mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-slate-200">
                  We don’t optimize for vanity projects. You’ll work on problems where every
                  improvement teaches you something about systems, people and products.
                </p>

                <div className="grid gap-3 mt-5 sm:mt-6">
                  {[
                    'Reducing drop-offs in complex multi-step checkouts.',
                    'Designing safer release pipelines for high-traffic campaigns.',
                    'Creating shared dashboards used by both business & engineering.',
                    'Untangling legacy integrations without stopping the business.',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`carrier-chip-animate carrier-delay-${
                        index + 1
                      } inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-3 sm:px-4 py-2.5 text-xs text-slate-200`}
                    >
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: stacked cards */}
              <div className="space-y-4">
                <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-3xl border-cyan-400/50 bg-slate-950/90">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    For freshers
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-100">
                    Ship with guidance, own small but meaningful pieces of the journey, and grow
                    from real feedback—not just tickets.
                  </p>

                  <div className="carrier-hover-extra mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Structured mentoring & code reviews.</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                      <ArrowRight className="w-3 h-3" />
                      <span>Exposure to real clients & real metrics.</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-2 carrier-hover-card rounded-3xl border-emerald-400/50 bg-slate-950/90">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    For experienced talent
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-100">
                    Lead initiatives, coach teams, and help design the systems and practices that
                    shape how we solve problems at scale.
                  </p>

                  <div className="carrier-hover-extra mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Influence architecture & product direction.</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                      <ArrowRight className="w-3 h-3" />
                      <span>Coach juniors and shape how we work.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-3 carrier-hover-card rounded-3xl border-white/15 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-950/95">
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold sm:text-sm text-slate-100">
                      Ready to work on problems that actually matter?
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-300">
                      Explore fresher and experienced roles where your work is visible and valued.
                    </p>

                    <div className="carrier-hover-extra mt-2 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Clear growth paths for both IC & leads.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>Work on long-term partnerships, not one-off gigs.</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => navigateTo('CarrierFresher')}
                      className="px-4 py-2 text-[10px] sm:text-[11px] font-medium rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-black hover:opacity-90 transition-transform duration-300 hover:scale-[1.03]"
                    >
                      View Fresher Roles
                    </button>
                    <button
                      onClick={() => navigateTo('CarrierExperienced')}
                      className="px-4 py-2 text-[10px] sm:text-[11px] font-medium rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-transform duration-300 hover:scale-[1.03]"
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

      {/* 🔹 Component-scoped CSS – ONLY FOR THIS FILE */}
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

        /* Chip / pill animations (slightly lighter) */
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

        /* ==== GLOBAL HOVER GLOW FOR ALL CARDS (including image wrappers now) ==== */
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
          background: radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.4), transparent 55%),
            radial-gradient(circle at 100% 100%, rgba(52, 211, 153, 0.35), transparent 55%);
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.45s ease, transform 0.45s ease;
          z-index: -1;
        }

        .carrier-hover-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(191, 219, 254, 0.9);
          box-shadow: 0 26px 70px rgba(15, 23, 42, 0.95), 0 0 45px rgba(56, 189, 248, 0.45);
          background: radial-gradient(
            circle at top left,
            rgba(15, 23, 42, 0.96),
            rgba(15, 23, 42, 0.98)
          );
        }

        .carrier-hover-card:hover::before {
          opacity: 1;
          transform: scale(1);
        }

        /* Extra content reveal on hover – no layout jump */
        .carrier-hover-extra {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .carrier-hover-card:hover .carrier-hover-extra {
          opacity: 1;
          transform: translateY(0);
        }

        /* ==== Circle-based unique design for Section 5 cards ==== */
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
          background: radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.45), transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(52, 211, 153, 0.35), transparent 65%);
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
            rgba(15, 23, 42, 0.7),
            transparent 55%
          );
          opacity: 0.7;
          z-index: -1;
        }

        /* Icon circle halo */
        .carrier-role-icon {
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4);
          transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
        }

        .carrier-role-icon::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 1px solid rgba(148, 163, 184, 0.45);
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
          box-shadow: 0 0 24px rgba(56, 189, 248, 0.8);
        }

        .carrier-role-card:hover .carrier-role-icon::after {
          opacity: 1;
          transform: scale(1.06);
          border-color: rgba(248, 250, 252, 0.9);
        }
      `}</style>
    </>
  );
};

export default CarrierProblems;
