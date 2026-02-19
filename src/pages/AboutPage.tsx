// "use client";

// import GlobalPresenceMerged from "@/components/GlobalPresenceMap";
// import { LeadershipSection } from "../components/about/LeadershipSection";
// import ContactForm from "./ContactForm";
// import Conversation from "./Conversation";
// import { ADVANTAGES, CERTIFICATIONS, EXPERTISE } from "../lib/Constants";
// import ISOImageSection from "./ISOImageSection";
// import {
//   Zap,
//   Target,
//   Shield,
//   Users,
//   TrendingUp,
//   BarChart3,
//   Rocket,
//   Globe,
//   Mail,
//   Building2,
//   GraduationCap,
//   ShoppingCart,
//   Cloud,
//   Code2,
//   Palette,
//   Database,
//   Lock,
//   Settings,
//   Headphones,
//   CheckCircle2,
//   Sparkles,
//   Brain,
//   Cpu,
//   GitBranch,
//   LayoutDashboard,
//   Store,
//   CreditCard,
//   Smartphone,
//   Monitor,
//   Server,
//   Workflow,
//   FileCode,
//   Puzzle,
//   RefreshCw,
//   Handshake,
//   HeartHandshake,
//   LineChart,
//   Megaphone,
//   BookOpen,
//   Lightbulb,
//   Gauge,
//   ShieldCheck,
//   BadgeCheck,
//   Timer,
//   Boxes,
//   Wrench,
//   Search,
//   Eye,
//   Scale,
//   Clock,
//   type LucideIcon,
// } from "lucide-react";

// // Smart icon mapper based on content keywords
// const getIconForContent = (title: string, description?: string): LucideIcon => {
//   const text = `${title} ${description || ""}`.toLowerCase();

//   // E-commerce & Commerce
//   if (
//     text.includes("commerce") ||
//     text.includes("ecommerce") ||
//     text.includes("e-commerce") ||
//     text.includes("storefront")
//   )
//     return ShoppingCart;
//   if (text.includes("retail") || text.includes("store")) return Store;
//   if (text.includes("payment") || text.includes("checkout")) return CreditCard;

//   // Adobe & SAP
//   if (
//     text.includes("aem") ||
//     text.includes("adobe") ||
//     text.includes("experience manager") ||
//     text.includes("cms")
//   )
//     return LayoutDashboard;
//   if (text.includes("sap")) return Boxes;

//   // Cloud & Infrastructure
//   if (
//     text.includes("cloud") ||
//     text.includes("aws") ||
//     text.includes("azure") ||
//     text.includes("gcp")
//   )
//     return Cloud;
//   if (text.includes("infrastructure") || text.includes("server")) return Server;
//   if (
//     text.includes("devops") ||
//     text.includes("ci/cd") ||
//     text.includes("pipeline")
//   )
//     return GitBranch;

//   // Development
//   if (
//     text.includes("development") ||
//     text.includes("coding") ||
//     text.includes("engineering")
//   )
//     return Code2;
//   if (
//     text.includes("frontend") ||
//     text.includes("react") ||
//     text.includes("web")
//   )
//     return Monitor;
//   if (text.includes("mobile") || text.includes("app")) return Smartphone;
//   if (
//     text.includes("api") ||
//     text.includes("integration") ||
//     text.includes("connect")
//   )
//     return Puzzle;
//   if (text.includes("custom") || text.includes("bespoke")) return FileCode;

//   // Data & Analytics
//   if (text.includes("data") || text.includes("database")) return Database;
//   if (
//     text.includes("analytics") ||
//     text.includes("insight") ||
//     text.includes("reporting")
//   )
//     return LineChart;
//   if (text.includes("dashboard")) return BarChart3;
//   if (text.includes("seo") || text.includes("search")) return Search;

//   // AI & Innovation
//   if (
//     text.includes("ai") ||
//     text.includes("artificial") ||
//     text.includes("machine learning") ||
//     text.includes("ml")
//   )
//     return Brain;
//   if (text.includes("innovation") || text.includes("idea")) return Lightbulb;
//   if (text.includes("automat")) return Workflow;

//   // Security & Compliance
//   if (text.includes("security") || text.includes("secure")) return Lock;
//   if (
//     text.includes("compliance") ||
//     text.includes("iso") ||
//     text.includes("gdpr")
//   )
//     return ShieldCheck;
//   if (text.includes("certif")) return BadgeCheck;

//   // Quality & Performance
//   if (
//     text.includes("quality") ||
//     text.includes("qa") ||
//     text.includes("testing")
//   )
//     return CheckCircle2;
//   if (
//     text.includes("performance") ||
//     text.includes("speed") ||
//     text.includes("fast")
//   )
//     return Gauge;
//   if (
//     text.includes("reliable") ||
//     text.includes("reliability") ||
//     text.includes("uptime")
//   )
//     return Shield;
//   if (text.includes("monitor")) return Eye;

//   // Teams & Support
//   if (text.includes("team") || text.includes("squad") || text.includes("pod"))
//     return Users;
//   if (
//     text.includes("support") ||
//     text.includes("help") ||
//     text.includes("service")
//   )
//     return Headphones;
//   if (text.includes("partner") || text.includes("collaborat")) return Handshake;
//   if (
//     text.includes("customer") ||
//     text.includes("client") ||
//     text.includes("success")
//   )
//     return HeartHandshake;

//   // Business & Strategy
//   if (text.includes("strategy") || text.includes("consult")) return Target;
//   if (text.includes("transform") || text.includes("digital")) return RefreshCw;
//   if (text.includes("growth") || text.includes("scale")) return TrendingUp;
//   if (text.includes("market") || text.includes("campaign")) return Megaphone;

//   // Design & UX
//   if (
//     text.includes("design") ||
//     text.includes("ux") ||
//     text.includes("ui") ||
//     text.includes("experience")
//   )
//     return Palette;
//   if (text.includes("personali")) return Sparkles;

//   // Training & Documentation
//   if (
//     text.includes("training") ||
//     text.includes("learning") ||
//     text.includes("education")
//   )
//     return GraduationCap;
//   if (text.includes("document")) return BookOpen;

//   // Time & Delivery
//   if (
//     text.includes("delivery") ||
//     text.includes("agile") ||
//     text.includes("sprint")
//   )
//     return Timer;
//   if (text.includes("accelerat") || text.includes("rapid")) return Rocket;
//   if (text.includes("time") || text.includes("hours") || text.includes("24"))
//     return Clock;

//   // Operations & Maintenance
//   if (
//     text.includes("operation") ||
//     text.includes("ops") ||
//     text.includes("run")
//   )
//     return Settings;
//   if (text.includes("maintain") || text.includes("managed")) return Wrench;

//   // Technology
//   if (text.includes("tech") || text.includes("platform")) return Cpu;

//   // Scalability
//   if (text.includes("scal")) return Scale;

//   // Global
//   if (text.includes("global") || text.includes("world")) return Globe;

//   // Default fallback
//   return Zap;
// };

// export const AboutPage = () => {
//   const heroStats = [
//     { label: "Client Retention", value: "95%" },
//     { label: "Active Client Partnerships", value: "5" },
//     { label: "Years Avg. Client Association", value: "3+" },
//   ];

//   const heroHighlights = [
//     "SAP Commerce + AEM accelerators",
//     "Design-to-run DevOps",
//   ];

//   // const communitySpotlights = [
//   //   {
//   //     title: "STEM Mentorship",
//   //     description:
//   //       "Weekend SAP Commerce and AEM sandboxes where CJSS architects teach students how enterprise platforms power NGOs and civic portals.",
//   //     metric: "250+ mentees",
//   //   },
//   //   {
//   //     title: "Green Stack Pledge",
//   //     description:
//   //       "Reusable React component libraries donated to climate nonprofits so they can launch progressive web experiences without extra spend.",
//   //     metric: "3 cities",
//   //   },
//   //   {
//   //     title: "Open Source Grants",
//   //     description:
//   //       "Funding internal guilds that build testing harnesses, SAP accelerators, and AEM/React starter kits for social-impact founders.",
//   //     metric: "$40K funded",
//   //   },
//   // ];

//   // Icons for community spotlights
//   // const communityIcons = [GraduationCap, Leaf, Gift];

//   return (
//     <div className="bg-neutral-950">
//       <div className="relative z-10"></div>

//       {/* ================= ABOUT HERO SECTION ================= */}
//       <section className="relative px-6 pt-32 pb-24 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage: "url('/images/cjssfam.jpeg')",
//             backgroundAttachment: "fixed",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"></div>
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.25), transparent 50%)",
//           }}
//         ></div>

//         <div className="relative z-10 max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
//                 <span className="w-12 h-px bg-gradient-to-r from-purple-400/60 to-sky-400/60"></span>
//                 About CJSS
//               </div>
//               <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
//                 Building experience-led platforms for courageous brands.
//               </h1>
//               <p className="text-lg leading-relaxed text-white/80">
//                 CJSS Tech partners with enterprises and rising scale-ups to
//                 design, build, and run composable commerce and customer
//                 experience stacks. We bring pods of strategists, architects,
//                 engineers, and designers who obsess over measurable outcomes and
//                 delightful journeys.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 {heroHighlights.map((item) => (
//                   <span
//                     key={item}
//                     className="px-4 py-2 text-sm transition-all border rounded-full text-white/70 border-white/15 bg-[#0a0a0a]/60 backdrop-blur hover:border-purple-400/50 hover:text-white/90"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               {/* Hero Stats Cards */}
//               <div className="grid gap-4 sm:grid-cols-3">
//                 {heroStats.map((stat, idx) => {
//                   const Icon = getIconForContent(stat.label);
//                   const isPurple = idx % 2 === 0;
//                   return (
//                     <div
//                       key={stat.label}
//                       className="group relative p-4 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
//                     >
//                       <div className="flex items-center gap-3 mb-2">
//                         <div
//                           className={`inline-flex items-center justify-center w-9 h-9 border rounded-full transition-transform group-hover:scale-105 ${
//                             isPurple
//                               ? "bg-purple-500/15 border-purple-300/60"
//                               : "bg-sky-500/15 border-sky-300/60"
//                           }`}
//                         >
//                           <Icon
//                             className={`w-4 h-4 ${
//                               isPurple ? "text-purple-300" : "text-sky-300"
//                             }`}
//                           />
//                         </div>
//                         <p className="text-3xl font-semibold text-white">
//                           {stat.value}
//                         </p>
//                       </div>
//                       <p className="text-xs uppercase tracking-[0.3em] text-white/50">
//                         {stat.label}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Vision Card */}
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30 blur-3xl"></div>
//               <div className="relative p-8 space-y-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)]">
//                 <p className="text-lg leading-relaxed text-white/80">
//                   "Technology only matters when people feel the difference. We
//                   craft platforms with empathy, experimentation, and relentless
//                   delivery discipline."
//                 </p>
//                 <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
//                   <div>
//                     <p className="font-semibold text-white">
//                       AI | AEM | Cloud | SAP Commerce
//                     </p>
//                     <p>Strategy, build, run</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-white">Studio model</p>
//                     <p>Design + data + DevOps pods</p>
//                   </div>
//                 </div>
//                 <div className="px-5 py-4 text-sm rounded-2xl border border-white/10 bg-white/5 text-white/70">
//                   Hyderabad HQ .
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Section */}
//       <LeadershipSection />

//       {/* ================= ADVANTAGES SECTION ================= */}
//       <section className="relative px-6 py-28 overflow-hidden bg-black">
//         {/* Background */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//           <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-cyan-400/8 blur-[150px] animate-orbFloat" />
//           <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-fuchsia-500/8 blur-[190px]" />
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage:
//                 "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 mx-auto space-y-12 max-w-7xl">
//           <div className="space-y-4 text-center">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase">
//               Why CJSS
//             </p>
//             <h2 className="text-4xl font-bold text-white md:text-5xl">
//               Advantages Designed for{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 Velocity
//               </span>
//             </h2>
//             <p className="max-w-3xl mx-auto text-white/70">
//               Every squad works from a shared playbook of engineering excellence
//               so you get predictable delivery and creative problem solving.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
//             {/* Advantage Cards */}
//             <div className="grid gap-6 sm:grid-cols-2">
//               {ADVANTAGES.map((adv, idx) => {
//                 const Icon = getIconForContent(adv.title, adv.description);
//                 const isPurple = idx % 2 === 0;
//                 return (
//                   <div
//                     key={idx}
//                     className="group relative flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
//                   >
//                     {/* Icon */}
//                     <div className="mb-4">
//                       <div
//                         className={`inline-flex items-center justify-center w-11 h-11 border rounded-full transition-transform group-hover:scale-105 ${
//                           isPurple
//                             ? "bg-purple-500/15 border-purple-300/60"
//                             : "bg-sky-500/15 border-sky-300/60"
//                         }`}
//                       >
//                         <Icon
//                           className={`w-5 h-5 ${
//                             isPurple ? "text-purple-300" : "text-sky-300"
//                           }`}
//                         />
//                       </div>
//                     </div>

//                     <h3 className="mb-3 text-xl font-semibold text-white">
//                       {adv.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed text-white/60">
//                       {adv.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Info Card */}
//             <div className="p-8 space-y-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)]">
//               <p className="text-lg leading-relaxed text-white/80">
//                 We blend consulting rigor with product sensibilities.
//                 Engagements kick off with immersion workshops, evolve into
//                 design sprints, and land with controlled releases plus steady
//                 runbooks.
//               </p>
//               <div className="grid gap-4">
//                 {[
//                   "Discovery → blueprint → pilot in 6 weeks",
//                   "Shift-left QA and Site Reliability squads",
//                   "Experience research plugged into every sprint",
//                 ].map((line, idx) => (
//                   <div
//                     key={line}
//                     className="flex items-start gap-3 text-white/75"
//                   >
//                     <span
//                       className={`mt-1.5 inline-block h-2 w-2 rounded-full ${
//                         idx % 2 === 0 ? "bg-purple-300" : "bg-sky-300"
//                       }`}
//                     />
//                     <span>{line}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= EXPERTISE SECTION ================= */}
//       <section className="relative px-6 py-28 overflow-hidden bg-black">
//         {/* Background */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//           <div className="absolute rounded-full -left-40 top-[40%] h-72 w-72 bg-purple-500/10 blur-3xl" />
//           <div className="absolute rounded-full -right-40 bottom-[30%] h-80 w-80 bg-sky-600/10 blur-3xl" />
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage:
//                 "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 mx-auto space-y-12 max-w-7xl">
//           <div className="space-y-3 text-center">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase">
//               What we ship
//             </p>
//             <h2 className="text-4xl font-bold text-white md:text-5xl">
//               Expertise you can{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 plug in
//               </span>
//             </h2>
//             <p className="max-w-3xl mx-auto text-white/70">
//               From composable storefronts to AI copilots for operations, our
//               guilds plug into your roadmap as autonomous squads.
//             </p>
//           </div>

//           {/* Expertise Cards */}
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {EXPERTISE.map((exp, idx) => {
//               const Icon = getIconForContent(exp.name, exp.description);
//               const isPurple = idx % 2 === 0;
//               return (
//                 <div
//                   key={idx}
//                   className="group relative flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
//                 >
//                   {/* Icon */}
//                   <div className="mb-4">
//                     <div
//                       className={`inline-flex items-center justify-center w-11 h-11 border rounded-full transition-transform group-hover:scale-105 ${
//                         isPurple
//                           ? "bg-purple-500/15 border-purple-300/60"
//                           : "bg-sky-500/15 border-sky-300/60"
//                       }`}
//                     >
//                       <Icon
//                         className={`w-5 h-5 ${
//                           isPurple ? "text-purple-300" : "text-sky-300"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   <h3 className="mb-3 text-xl font-semibold text-white">
//                     {exp.name}
//                   </h3>
//                   {exp.description && (
//                     <p className="text-sm leading-relaxed text-white/60">
//                       {exp.description}
//                     </p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Conversation */}
//       <Conversation />

//       {/* ================= CERTIFICATIONS SECTION ================= */}
//       <section className="relative px-6 py-32 overflow-hidden bg-black">
//         {/* Background */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//           <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-3xl" />
//           <div className="absolute -bottom-40 -right-24 w-[460px] h-[460px] rounded-full bg-sky-500/10 blur-3xl" />
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage:
//                 "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 mx-auto max-w-7xl">
//           <div className="mb-16 text-center">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//               Our Credentials
//             </p>
//             <h2 className="text-4xl font-bold text-white md:text-5xl">
//               CJSS{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 Certifications
//               </span>
//             </h2>
//           </div>

//           {/* Certification Cards */}
//           <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//             {CERTIFICATIONS.map((cert, idx) => {
//               const Icon = getIconForContent(cert.name, cert.description);
//               const isPurple = idx % 2 === 0;
//               return (
//                 <div
//                   key={idx}
//                   className="group relative flex flex-col items-center p-6 text-center rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
//                 >
//                   {/* Icon */}
//                   <div className="mb-4">
//                     <div
//                       className={`inline-flex items-center justify-center w-14 h-14 border rounded-full transition-transform group-hover:scale-105 ${
//                         isPurple
//                           ? "bg-purple-500/15 border-purple-300/60"
//                           : "bg-sky-500/15 border-sky-300/60"
//                       }`}
//                     >
//                       <Icon
//                         className={`w-7 h-7 ${
//                           isPurple ? "text-purple-300" : "text-sky-300"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   <h3 className="mb-2 text-lg font-bold text-white">
//                     {cert.name}
//                   </h3>
//                   <p className="text-sm text-white/60">{cert.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <ISOImageSection></ISOImageSection>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="relative py-24 overflow-hidden bg-black">
//         {/* Background */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//           <div className="absolute rounded-full -left-40 top-[30%] h-72 w-72 bg-purple-500/10 blur-3xl" />
//           <div className="absolute rounded-full -right-40 bottom-[20%] h-80 w-80 bg-sky-600/10 blur-3xl" />
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage:
//                 "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 grid grid-cols-1 gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2">
//           {/* LEFT SIDE — CONTACT DETAILS */}
//           <div>
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//               Contact Details
//             </p>

//             <h2 className="mb-4 text-4xl font-bold text-white">
//               Contact{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 Us
//               </span>
//             </h2>

//             <p className="max-w-lg mb-10 leading-relaxed text-white/70">
//               Give us a call or drop by anytime. We endeavour to answer all
//               enquiries within 24 hours on business days. We will be happy to
//               answer your questions.
//             </p>

//             {/* India Office Card */}
//             <div className="group relative p-6 mb-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60">
//               <div className="flex items-start gap-4">
//                 <div className="inline-flex items-center justify-center w-11 h-11 border rounded-full bg-purple-500/15 border-purple-300/60 transition-transform group-hover:scale-105">
//                   <Building2 className="w-5 h-5 text-purple-300" />
//                 </div>
//                 <div>
//                   <h3 className="mb-2 font-semibold text-white">
//                     INDIA HEAD OFFICE
//                   </h3>
//                   <p className="text-sm leading-relaxed text-white/60">
//                     CJSS Technologies Pvt. Ltd.
//                     <br />
//                     2nd Floor, Block C&D,
//                     <br />
//                     Vaishnavi Cynosure, Gachibowli,
//                     <br />
//                     Hyderabad-500032, Telangana, India.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Singapore Office Card */}
//             <div className="group relative p-6 mb-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(56,189,248,0.25)] hover:border-sky-300/60">
//               <div className="flex items-start gap-4">
//                 <div className="inline-flex items-center justify-center w-11 h-11 border rounded-full bg-sky-500/15 border-sky-300/60 transition-transform group-hover:scale-105">
//                   <Globe className="w-5 h-5 text-sky-300" />
//                 </div>
//                 <div>
//                   <h3 className="mb-2 font-semibold text-white">
//                     SINGAPORE OFFICE
//                   </h3>
//                   <p className="text-sm leading-relaxed text-white/60">
//                     CJSS Technologies Pte. Ltd.
//                     <br />
//                     #03-92, 65 UBI ROAD 1, OXLEY BIZHUB
//                     <br />
//                     Singapore 408729
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Mailbox */}
//             <div className="flex items-center gap-4">
//               <div className="inline-flex items-center justify-center w-11 h-11 border rounded-full bg-purple-500/15 border-purple-300/60">
//                 <Mail className="w-5 h-5 text-purple-300" />
//               </div>
//               <div>
//                 <p className="text-sm text-white/60">Our Mailbox:</p>
//                 <a
//                   className="font-medium text-purple-300 hover:text-purple-200 transition-colors"
//                   href="mailto:info@cjsstechnologies.com"
//                 >
//                   info@cjsstechnologies.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE — FORM */}
//           <ContactForm />
//         </div>
//       </section>

//       {/* ================= GLOBAL PRESENCE SECTION ================= */}
//       <section className="relative py-28 overflow-hidden bg-[#0e0e0e]">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.35),_transparent_70%)] blur-2xl"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,_rgba(0,0,0,0.25),_transparent_70%)]"></div>

//         {/* Stars */}
//         <div className="absolute inset-0 stars"></div>
//         <div className="absolute inset-0 stars2"></div>
//         <div className="absolute inset-0 stars3"></div>

//         {/* Floating particles */}
//         <div className="absolute inset-0 pointer-events-none particles"></div>
//         <div className="absolute inset-0 pointer-events-none particles2"></div>
//         <div className="absolute inset-0 pointer-events-none particles3"></div>

//         {/* Content */}
//         <div className="relative z-10">
//           <div className="mb-12 text-center">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//               Worldwide
//             </p>
//             <h2 className="text-4xl font-bold text-white">
//               Our Global{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 Presence
//               </span>
//             </h2>
//           </div>
//           <GlobalPresenceMerged />
//         </div>
//       </section>

//       {/* ================= KEYFRAMES ================= */}
//       <style>
//         {`
//           @keyframes orbFloat {
//             0%, 100% {
//               transform: translate(0, 0);
//             }
//             50% {
//               transform: translate(30px, -30px);
//             }
//           }
//           .animate-orbFloat {
//             animation: orbFloat 20s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };
"use client";

import { useEffect, useState } from "react";
import GlobalPresenceMerged from "@/components/GlobalPresenceMap";
import { LeadershipSection } from "../components/about/LeadershipSection";
import ContactForm from "./ContactForm";
import Conversation from "./Conversation";
import { ADVANTAGES, EXPERTISE } from "../lib/Constants";
import ISOImageSection from "./ISOImageSection";
import {
  Zap,
  Target,
  Shield,
  Users,
  TrendingUp,
  BarChart3,
  Rocket,
  Globe,
  Mail,
  Building2,
  GraduationCap,
  ShoppingCart,
  Cloud,
  Code2,
  Palette,
  Database,
  Lock,
  Settings,
  Headphones,
  CheckCircle2,
  Sparkles,
  Brain,
  Cpu,
  GitBranch,
  LayoutDashboard,
  Store,
  CreditCard,
  Smartphone,
  Monitor,
  Server,
  Workflow,
  FileCode,
  Puzzle,
  RefreshCw,
  Handshake,
  HeartHandshake,
  LineChart,
  Megaphone,
  BookOpen,
  Lightbulb,
  Gauge,
  ShieldCheck,
  BadgeCheck,
  Timer,
  Boxes,
  Wrench,
  Search,
  Eye,
  Scale,
  Clock,
  type LucideIcon,
} from "lucide-react";

const getIconForContent = (title: string, description?: string): LucideIcon => {
  const text = `${title} ${description || ""}`.toLowerCase();
  if (
    text.includes("commerce") ||
    text.includes("ecommerce") ||
    text.includes("e-commerce") ||
    text.includes("storefront")
  )
    return ShoppingCart;
  if (text.includes("retail") || text.includes("store")) return Store;
  if (text.includes("payment") || text.includes("checkout")) return CreditCard;
  if (
    text.includes("aem") ||
    text.includes("adobe") ||
    text.includes("experience manager") ||
    text.includes("cms")
  )
    return LayoutDashboard;
  if (text.includes("sap")) return Boxes;
  if (
    text.includes("cloud") ||
    text.includes("aws") ||
    text.includes("azure") ||
    text.includes("gcp")
  )
    return Cloud;
  if (text.includes("infrastructure") || text.includes("server")) return Server;
  if (
    text.includes("devops") ||
    text.includes("ci/cd") ||
    text.includes("pipeline")
  )
    return GitBranch;
  if (
    text.includes("development") ||
    text.includes("coding") ||
    text.includes("engineering")
  )
    return Code2;
  if (
    text.includes("frontend") ||
    text.includes("react") ||
    text.includes("web")
  )
    return Monitor;
  if (text.includes("mobile") || text.includes("app")) return Smartphone;
  if (
    text.includes("api") ||
    text.includes("integration") ||
    text.includes("connect")
  )
    return Puzzle;
  if (text.includes("custom") || text.includes("bespoke")) return FileCode;
  if (text.includes("data") || text.includes("database")) return Database;
  if (
    text.includes("analytics") ||
    text.includes("insight") ||
    text.includes("reporting")
  )
    return LineChart;
  if (text.includes("dashboard")) return BarChart3;
  if (text.includes("seo") || text.includes("search")) return Search;
  if (
    text.includes("ai") ||
    text.includes("artificial") ||
    text.includes("machine learning") ||
    text.includes("ml")
  )
    return Brain;
  if (text.includes("innovation") || text.includes("idea")) return Lightbulb;
  if (text.includes("automat")) return Workflow;
  if (text.includes("security") || text.includes("secure")) return Lock;
  if (
    text.includes("compliance") ||
    text.includes("iso") ||
    text.includes("gdpr")
  )
    return ShieldCheck;
  if (text.includes("certif")) return BadgeCheck;
  if (
    text.includes("quality") ||
    text.includes("qa") ||
    text.includes("testing")
  )
    return CheckCircle2;
  if (
    text.includes("performance") ||
    text.includes("speed") ||
    text.includes("fast")
  )
    return Gauge;
  if (
    text.includes("reliable") ||
    text.includes("reliability") ||
    text.includes("uptime")
  )
    return Shield;
  if (text.includes("monitor")) return Eye;
  if (text.includes("team") || text.includes("squad") || text.includes("pod"))
    return Users;
  if (
    text.includes("support") ||
    text.includes("help") ||
    text.includes("service")
  )
    return Headphones;
  if (text.includes("partner") || text.includes("collaborat")) return Handshake;
  if (
    text.includes("customer") ||
    text.includes("client") ||
    text.includes("success")
  )
    return HeartHandshake;
  if (text.includes("strategy") || text.includes("consult")) return Target;
  if (text.includes("transform") || text.includes("digital")) return RefreshCw;
  if (text.includes("growth") || text.includes("scale")) return TrendingUp;
  if (text.includes("market") || text.includes("campaign")) return Megaphone;
  if (
    text.includes("design") ||
    text.includes("ux") ||
    text.includes("ui") ||
    text.includes("experience")
  )
    return Palette;
  if (text.includes("personali")) return Sparkles;
  if (
    text.includes("training") ||
    text.includes("learning") ||
    text.includes("education")
  )
    return GraduationCap;
  if (text.includes("document")) return BookOpen;
  if (
    text.includes("delivery") ||
    text.includes("agile") ||
    text.includes("sprint")
  )
    return Timer;
  if (text.includes("accelerat") || text.includes("rapid")) return Rocket;
  if (text.includes("time") || text.includes("hours") || text.includes("24"))
    return Clock;
  if (
    text.includes("operation") ||
    text.includes("ops") ||
    text.includes("run")
  )
    return Settings;
  if (text.includes("maintain") || text.includes("managed")) return Wrench;
  if (text.includes("tech") || text.includes("platform")) return Cpu;
  if (text.includes("scal")) return Scale;
  if (text.includes("global") || text.includes("world")) return Globe;
  return Zap;
};

export const AboutPage = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const halfScreen = windowHeight * 0.5;
      let opacity;

      if (scrollY <= halfScreen) {
        opacity = 1 - (scrollY / halfScreen) * 0.9;
      } else {
        const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
        opacity = 0.1 - secondHalfProgress * 0.1;
      }

      setHeroOpacity(Math.max(0, Math.min(1, opacity)));

      const leadershipSection = document.getElementById("leadership");
      if (!leadershipSection) return;
      const sectionTop = leadershipSection.getBoundingClientRect().top;
      setShowScrollBtn(sectionTop < -100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroStats = [
    { label: "Client Retention", value: "95%" },
    { label: "Active Partnerships", value: "5" },
    { label: "Years Avg. Association", value: "3+" },
  ];

  const heroHighlights = [
    "SAP Commerce + AEM accelerators",
    "Design-to-run DevOps",
  ];

  return (
    <main className="relative w-full min-h-screen text-white bg-neutral-950">
      {/* =====================================================
          FIXED HERO SECTION
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/images/cjssfam.jpeg')" }}
          />
          <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.25), transparent 50%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content Area */}
          <div className="flex-1 flex items-center pt-16 sm:pt-20 pb-6 sm:pb-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/70 animate-fade-up">
                    <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-purple-400/60 to-sky-400/60"></span>
                    About CJSS
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] sm:leading-[1.1] text-white animate-fade-up [animation-delay:0.05s]">
                    Building experience-led platforms for courageous brands.
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/80 max-w-xl animate-fade-up [animation-delay:0.1s]">
                    CJSS Tech partners with enterprises and rising scale-ups to
                    design, build, and run composable commerce and customer
                    experience stacks.
                    <span className="hidden sm:inline">
                      {" "}
                      We bring pods of strategists, architects, engineers, and
                      designers who obsess over measurable outcomes.
                    </span>
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-up [animation-delay:0.15s]">
                    {heroHighlights.map((item) => (
                      <span
                        key={item}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-all border rounded-full text-white/70 border-white/15 bg-[#0a0a0a]/60 backdrop-blur hover:border-purple-400/50 hover:text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Vision Card + Stats */}
                <div className="space-y-3 sm:space-y-4 animate-fade-up [animation-delay:0.2s]">
                  {/* Vision Card */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30 blur-3xl"></div>
                    <div className="relative p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)]">
                      <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/80">
                        "Technology only matters when people feel the
                        difference. We craft platforms with empathy,
                        experimentation, and relentless delivery discipline."
                      </p>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/70">
                        <div>
                          <p className="font-semibold text-white text-[10px] sm:text-xs lg:text-sm">
                            AI | AEM | Cloud | SAP Hybris
                          </p>
                          <p className="text-[10px] sm:text-xs">
                            Strategy, build, run
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-white text-[10px] sm:text-xs lg:text-sm">
                            Studio model
                          </p>
                          <p className="text-[10px] sm:text-xs">
                            Design + data + DevOps pods
                          </p>
                        </div>
                      </div>
                      <div className="px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs lg:text-sm rounded-lg sm:rounded-xl border border-white/10 bg-white/5 text-white/70">
                        Hyderabad HQ .
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards - Under Vision Card */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 animate-fade-up [animation-delay:0.25s]">
                    {heroStats.map((stat, idx) => {
                      const Icon = getIconForContent(stat.label);
                      const isPurple = idx % 2 === 0;
                      return (
                        <div
                          key={stat.label}
                          className="group relative p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                            <div
                              className={`inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 border rounded-full transition-transform group-hover:scale-105 ${
                                isPurple
                                  ? "bg-purple-500/15 border-purple-300/60"
                                  : "bg-sky-500/15 border-sky-300/60"
                              }`}
                            >
                              <Icon
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 ${
                                  isPurple ? "text-purple-300" : "text-sky-300"
                                }`}
                              />
                            </div>
                            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white">
                              {stat.value}
                            </p>
                          </div>
                          <p className="text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-[0.08em] sm:tracking-[0.1em] lg:tracking-[0.15em] text-white/50 leading-tight">
                            {stat.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for hero height */}
      <div className="h-screen" />

      {/* =====================================================
          CONTENT SECTIONS (scroll over hero)
      ===================================================== */}
      <div className="relative z-10">
        {/* Leadership Section */}
        <section
          id="leadership"
          className="bg-neutral-950 rounded-t-[28px] sm:rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
        >
          <LeadershipSection />
        </section>

        {/* ================= ADVANTAGES SECTION ================= */}
        <section className="relative px-4 sm:px-6 py-16 sm:py-28 overflow-hidden bg-black">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-cyan-400/8 blur-[150px] animate-orbFloat" />
            <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-fuchsia-500/8 blur-[190px]" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto space-y-8 sm:space-y-12 max-w-7xl">
            <div className="space-y-3 sm:space-y-4 text-center">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase">
                Why CJSS
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
                Advantages Designed for{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Velocity
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-sm sm:text-base text-white/70">
                Every squad works from a shared playbook of engineering
                excellence so you get predictable delivery and creative problem
                solving.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-10">
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                {ADVANTAGES.map((adv, idx) => {
                  const Icon = getIconForContent(adv.title, adv.description);
                  const isPurple = idx % 2 === 0;
                  return (
                    <div
                      key={idx}
                      className="group relative flex flex-col p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
                    >
                      <div className="mb-3 sm:mb-4">
                        <div
                          className={`inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border rounded-full transition-transform group-hover:scale-105 ${
                            isPurple
                              ? "bg-purple-500/15 border-purple-300/60"
                              : "bg-sky-500/15 border-sky-300/60"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              isPurple ? "text-purple-300" : "text-sky-300"
                            }`}
                          />
                        </div>
                      </div>
                      <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-white">
                        {adv.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                        {adv.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="p-5 sm:p-8 space-y-4 sm:space-y-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)]">
                <p className="text-sm sm:text-lg leading-relaxed text-white/80">
                  We blend consulting rigor with product sensibilities.
                  Engagements kick off with immersion workshops, evolve into
                  design sprints, and land with controlled releases plus steady
                  runbooks.
                </p>
                <div className="grid gap-3 sm:gap-4">
                  {[
                    "Discovery → blueprint → pilot in 6 weeks",
                    "Shift-left QA and Site Reliability squads",
                    "Experience research plugged into every sprint",
                  ].map((line, idx) => (
                    <div
                      key={line}
                      className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-white/75"
                    >
                      <span
                        className={`mt-1.5 inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${
                          idx % 2 === 0 ? "bg-purple-300" : "bg-sky-300"
                        }`}
                      />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERTISE SECTION ================= */}
        <section className="relative px-4 sm:px-6 py-16 sm:py-28 overflow-hidden bg-black">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute rounded-full -left-40 top-[40%] h-72 w-72 bg-purple-500/10 blur-3xl" />
            <div className="absolute rounded-full -right-40 bottom-[30%] h-80 w-80 bg-sky-600/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto space-y-8 sm:space-y-12 max-w-7xl">
            <div className="space-y-2 sm:space-y-3 text-center">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase">
                What we ship
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
                Expertise you can{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  plug in
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-sm sm:text-base text-white/70">
                From composable storefronts to AI copilots for operations, our
                guilds plug into your roadmap as autonomous squads.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {EXPERTISE.map((exp, idx) => {
                const Icon = getIconForContent(exp.name, exp.description);
                const isPurple = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
                  >
                    <div className="mb-3 sm:mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border rounded-full transition-transform group-hover:scale-105 ${
                          isPurple
                            ? "bg-purple-500/15 border-purple-300/60"
                            : "bg-sky-500/15 border-sky-300/60"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            isPurple ? "text-purple-300" : "text-sky-300"
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-white">
                      {exp.name}
                    </h3>
                    {exp.description && (
                      <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                        {exp.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conversation */}
        <Conversation />

        {/* ================= CERTIFICATIONS SECTION ================= */}
        <section className="relative px-4 sm:px-6 py-16 sm:py-32 overflow-hidden bg-black">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute -bottom-40 -right-24 w-[460px] h-[460px] rounded-full bg-sky-500/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-10 sm:mb-16 text-center">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-3 sm:mb-4">
                Our Credentials
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
                CJSS{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Certifications
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
              {CERTIFICATIONS.map((cert, idx) => {
                const Icon = getIconForContent(cert.name, cert.description);
                const isPurple = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-center p-4 sm:p-6 text-center rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
                  >
                    <div className="mb-3 sm:mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 border rounded-full transition-transform group-hover:scale-105 ${
                          isPurple
                            ? "bg-purple-500/15 border-purple-300/60"
                            : "bg-sky-500/15 border-sky-300/60"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 sm:w-7 sm:h-7 ${
                            isPurple ? "text-purple-300" : "text-sky-300"
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className="mb-1 sm:mb-2 text-sm sm:text-lg font-bold text-white">
                      {cert.name}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-white/60">
                      {cert.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div> */}
          <ISOImageSection />
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="relative py-16 sm:py-24 overflow-hidden bg-black">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute rounded-full -left-40 top-[30%] h-72 w-72 bg-purple-500/10 blur-3xl" />
            <div className="absolute rounded-full -right-40 bottom-[20%] h-80 w-80 bg-sky-600/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 sm:gap-16 px-4 sm:px-6 mx-auto max-w-7xl lg:grid-cols-2">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-3 sm:mb-4">
                Contact Details
              </p>
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-4xl font-bold text-white">
                Contact{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Us
                </span>
              </h2>
              <p className="max-w-lg mb-6 sm:mb-10 text-sm sm:text-base leading-relaxed text-white/70">
                Give us a call or drop by anytime. We endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </p>

              <div className="group relative p-4 sm:p-6 mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border rounded-full bg-purple-500/15 border-purple-300/60 transition-transform group-hover:scale-105">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold text-white">
                      INDIA HEAD OFFICE
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                      CJSS Technologies Pvt. Ltd.
                      <br />
                      2nd Floor, Block C&D,
                      <br />
                      Vaishnavi Cynosure, Gachibowli,
                      <br />
                      Hyderabad-500032, Telangana, India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative p-4 sm:p-6 mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(56,189,248,0.25)] hover:border-sky-300/60">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border rounded-full bg-sky-500/15 border-sky-300/60 transition-transform group-hover:scale-105">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                  </div>
                  <div>
                    <h3 className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold text-white">
                      SINGAPORE OFFICE
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                      CJSS Technologies Pte. Ltd.
                      <br />
                      #03-92, 65 UBI ROAD 1, OXLEY BIZHUB
                      <br />
                      Singapore 408729
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border rounded-full bg-purple-500/15 border-purple-300/60">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-white/60">
                    Our Mailbox:
                  </p>
                  <a
                    className="text-sm sm:text-base font-medium text-purple-300 hover:text-purple-200 transition-colors"
                    href="mailto:info@cjsstechnologies.com"
                  >
                    info@cjsstech.com
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* ================= GLOBAL PRESENCE SECTION ================= */}
        <section className="relative py-16 sm:py-28 overflow-hidden bg-[#0e0e0e]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.35),_transparent_70%)] blur-2xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,_rgba(0,0,0,0.25),_transparent_70%)]"></div>
          <div className="absolute inset-0 stars"></div>
          <div className="absolute inset-0 stars2"></div>
          <div className="absolute inset-0 stars3"></div>
          <div className="absolute inset-0 pointer-events-none particles"></div>
          <div className="absolute inset-0 pointer-events-none particles2"></div>
          <div className="absolute inset-0 pointer-events-none particles3"></div>

          <div className="relative z-10">
            <div className="mb-8 sm:mb-12 text-center px-4">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-3 sm:mb-4">
                Worldwide
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                Our Global{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Presence
                </span>
              </h2>
            </div>
            <GlobalPresenceMerged />
          </div>
        </section>
      </div>

      {/* ================= SCROLL TO TOP BUTTON ================= */}
      {showScrollBtn && (
        <button
          onClick={() =>
            document
              .getElementById("leadership")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-purple-300/30 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] transition-all duration-300 animate-bounce-slow"
          aria-label="Scroll to Leadership"
        >
          ↑
        </button>
      )}

      {/* ================= KEYFRAMES ================= */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(18px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.7s ease-out both;
          }

          @keyframes orbFloat {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -30px); }
          }
          .animate-orbFloat {
            animation: orbFloat 20s ease-in-out infinite;
          }

          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce-slow {
            animation: bounceSlow 2.2s infinite;
          }

          @keyframes scrollIndicator {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.5; }
          }
          .animate-scroll-indicator {
            animation: scrollIndicator 1.8s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
};
