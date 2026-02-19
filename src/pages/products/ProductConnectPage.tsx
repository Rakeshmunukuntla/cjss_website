// "use client";

// import AutoScrollCarousel from "./AutoScrollCarousel";
// import {
//   User,
//   Rocket,
//   Calendar,
//   Briefcase,
//   Target,
//   Bell,
//   Zap,
//   Eye,
//   BarChart3,
//   TrendingUp,
//   Lightbulb,
//   Lock,
//   Building2,
//   Settings,
//   Shield,
//   Users,
//   UserCircle,
//   ClipboardList,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";
// import { useState } from "react";

// interface ProductConnectPageProps {
//   navigateTo: (page: string) => void;
// }

// const capabilities = [
//   {
//     icon: UserCircle,
//     title: "Employee Profile & Lifecycle Management",
//     points: [
//       "Centralized employee records",
//       "Personal, professional, and employment details",
//       "Experience, skills, and certifications",
//       "Controlled self-service updates for employees",
//     ],
//     summary:
//       "This ensures accurate, up-to-date employee data across the organization.",
//   },
//   {
//     icon: Rocket,
//     title: "Onboarding & Organizational Alignment",
//     points: [
//       "Structured onboarding workflows",
//       "Department, designation, and reporting assignment",
//       "Consistent onboarding across teams and locations",
//     ],
//     summary:
//       "Helps HR teams onboard employees efficiently while maintaining organizational structure.",
//   },
//   {
//     icon: Calendar,
//     title: "Leave & Attendance Management",
//     points: [
//       "Employee self-service leave requests",
//       "Support for multiple leave types",
//       "Document attachments for approvals",
//       "Manager approval workflows with visibility",
//     ],
//     summary:
//       "Reduces manual coordination and improves turnaround time for approvals.",
//   },
//   {
//     icon: Briefcase,
//     title: "Asset Management",
//     points: [
//       "Centralized asset inventory",
//       "Asset assignment and tracking",
//       "Visibility into asset ownership and status",
//     ],
//     summary:
//       "Improves accountability and simplifies IT and operations coordination.",
//   },
//   {
//     icon: Target,
//     title: "Recruitment & Interview Management",
//     points: [
//       "Interview scheduling and coordination",
//       "Interviewer assignment and rounds",
//       "Automated interview invitations",
//       "Feedback collection workflows",
//     ],
//     summary:
//       "Enables HR and hiring teams to manage recruitment in a structured, scalable manner.",
//   },
//   {
//     icon: Bell,
//     title: "Automated Communication & Notifications",
//     points: [
//       "System-generated emails and notifications",
//       "Interview, approval, and workflow alerts",
//       "Reduced dependency on manual follow-ups",
//     ],
//     summary: "Keeps stakeholders informed at every stage.",
//   },
// ];

// const businessBenefits = [
//   {
//     icon: Zap,
//     title: "Operational Efficiency",
//     desc: "Automates repetitive HR tasks and reduces administrative overhead.",
//   },
//   {
//     icon: Eye,
//     title: "Centralized Visibility",
//     desc: "Provides a unified view of employee, HR, and operational data.",
//   },
//   {
//     icon: BarChart3,
//     title: "Process Consistency",
//     desc: "Ensures standardized workflows across teams and departments.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Scalability",
//     desc: "Adapts easily as teams grow and organizational complexity increases.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Decision Enablement",
//     desc: "Supports leadership with accurate, real-time people data.",
//   },
// ];

// const enterpriseFeatures = [
//   {
//     icon: Lock,
//     title: "Role-based access and governance",
//     desc: "Granular permissions ensure data security and compliance",
//   },
//   {
//     icon: Building2,
//     title: "Multi-team and multi-department structures",
//     desc: "Support complex hierarchies with ease",
//   },
//   {
//     icon: Settings,
//     title: "Enterprise-scale workflows",
//     desc: "Handle thousands of employees without performance issues",
//   },
//   {
//     icon: Shield,
//     title: "Secure and controlled operations",
//     desc: "Enterprise-grade security and audit trails",
//   },
// ];

// const howItWorksRoles = [
//   {
//     icon: User,
//     title: "Employees",
//     desc: "Self-service access for personal data, leave requests, and updates",
//   },
//   {
//     icon: Users,
//     title: "Managers",
//     desc: "Team oversight, approvals, and performance visibility",
//   },
//   {
//     icon: ClipboardList,
//     title: "HR Teams",
//     desc: "Process management, onboarding, and recruitment coordination",
//   },
//   {
//     icon: Settings,
//     title: "Administrators",
//     desc: "System configuration, governance, and access control",
//   },
// ];

// export const ProductConnectPage = ({ navigateTo }: ProductConnectPageProps) => {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   return (
//     <section
//       className="bg-[#0a0a0b] text-white min-h-screen"
//       onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
//     >
//       {/* Cursor glow */}
//       <div
//         className="fixed inset-0 z-0 hidden pointer-events-none md:block"
//         style={{
//           background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(139,92,246,0.08), transparent 45%)`,
//         }}
//       />

//       {/* Subtle Background Gradient */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
//       </div>

//       {/* ================= BACK BUTTON ================= */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-8">
//         <button
//           onClick={() => navigateTo("products")}
//           className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all hover:scale-105 active:scale-95"
//         >
//           ← Back to Products
//         </button>
//       </div>

//       {/* ================= HERO ================= */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
//         <div>
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-6">
//             <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
//             HRMS Platform
//           </span>

//           <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8 leading-[1.1] tracking-tight">
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
//               Connect
//             </span>{" "}
//             – HRMS Platform
//           </h1>

//           <p className="text-white/60 text-lg mb-6 leading-relaxed max-w-lg">
//             Connect – HRMS is a comprehensive Human Resource Management platform
//             designed to manage the full employee lifecycle—from onboarding and
//             daily operations to recruitment and internal administration.
//           </p>

//           <p className="text-white/50 text-base mb-10 leading-relaxed max-w-lg">
//             The platform acts as a single source of truth for employee data
//             while enabling structured workflows that reduce dependency on manual
//             processes, emails, and spreadsheets.
//           </p>

//           <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
//             {[
//               "Single source of truth",
//               "Structured workflows",
//               "Full lifecycle management",
//             ].map((item) => (
//               <span key={item} className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-purple-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* ================= DASHBOARD PREVIEW ================= */}
//         <div className="relative group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
//           <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm h-[420px] shadow-2xl">
//             {/* Browser Chrome */}
//             <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-black/30">
//               <div className="flex gap-1.5">
//                 <div className="w-3 h-3 rounded-full bg-white/10" />
//                 <div className="w-3 h-3 rounded-full bg-white/10" />
//                 <div className="w-3 h-3 rounded-full bg-white/10" />
//               </div>
//             </div>
//             <AutoScrollCarousel />
//           </div>
//         </div>
//       </div>

//       {/* ================= HOW IT WORKS ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//             How It Works
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
//             How Connect – HRMS{" "}
//             <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//               Works
//             </span>
//           </h2>
//           <p className="text-center text-white/50 text-sm md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
//             Connect – HRMS brings together employees, managers, HR teams, and
//             administrators on a single platform, with role-based access and
//             clearly defined workflows. Each user interacts with the system
//             according to their responsibilities, ensuring operational clarity
//             and governance.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {howItWorksRoles.map((item, idx) => {
//               const Icon = item.icon;
//               const isPurple = idx % 2 === 0;

//               return (
//                 <div
//                   key={item.title}
//                   className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60 text-center"
//                 >
//                   <div className="mb-5 mx-auto">
//                     <div
//                       className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border rounded-full transition-transform group-hover:scale-105 ${
//                         isPurple
//                           ? "bg-purple-500/15 border-purple-300/60"
//                           : "bg-sky-500/15 border-sky-300/60"
//                       }`}
//                     >
//                       <Icon
//                         className={`w-6 h-6 md:w-7 md:h-7 ${
//                           isPurple ? "text-purple-300" : "text-sky-300"
//                         }`}
//                       />
//                     </div>
//                   </div>
//                   <h4 className="font-semibold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm text-white/40 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ================= DETAILED CAPABILITIES ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//             Capabilities
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
//             Detailed{" "}
//             <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//               Capabilities
//             </span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {capabilities.map((cap, idx) => {
//               const Icon = cap.icon;
//               const isPurple = idx % 2 === 0;

//               return (
//                 <div
//                   key={cap.title}
//                   className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
//                 >
//                   <div className="mb-5">
//                     <div
//                       className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border rounded-full transition-transform group-hover:scale-105 ${
//                         isPurple
//                           ? "bg-purple-500/15 border-purple-300/60"
//                           : "bg-sky-500/15 border-sky-300/60"
//                       }`}
//                     >
//                       <Icon
//                         className={`w-6 h-6 md:w-7 md:h-7 ${
//                           isPurple ? "text-purple-300" : "text-sky-300"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   <h4 className="font-semibold text-lg md:text-xl mb-4 text-white">
//                     {cap.title}
//                   </h4>

//                   <ul className="text-white/50 leading-relaxed space-y-2 mb-4 flex-grow">
//                     {cap.points.map((point, pIdx) => (
//                       <li key={pIdx} className="flex items-start gap-2">
//                         <span
//                           className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
//                             isPurple ? "bg-purple-400" : "bg-sky-400"
//                           }`}
//                         />
//                         <span className="text-sm md:text-base">{point}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <p className="text-white/40 text-sm italic border-t border-white/5 pt-4">
//                     {cap.summary}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ================= BUSINESS BENEFITS ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//             Benefits
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
//             Business{" "}
//             <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//               Benefits
//             </span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//             {businessBenefits.map((benefit, idx) => {
//               const Icon = benefit.icon;
//               const isPurple = idx % 2 === 0;

//               return (
//                 <div
//                   key={benefit.title}
//                   className="group relative flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(56,189,248,0.25)] hover:border-sky-300/60 text-center"
//                 >
//                   <div className="mb-4 mx-auto">
//                     <div
//                       className={`inline-flex items-center justify-center w-12 h-12 border rounded-full transition-transform group-hover:scale-105 ${
//                         isPurple
//                           ? "bg-purple-500/15 border-purple-300/60"
//                           : "bg-sky-500/15 border-sky-300/60"
//                       }`}
//                     >
//                       <Icon
//                         className={`w-5 h-5 md:w-6 md:h-6 ${
//                           isPurple ? "text-purple-300" : "text-sky-300"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   <h4 className="font-semibold text-base mb-2 text-white group-hover:text-sky-300 transition-colors">
//                     {benefit.title}
//                   </h4>

//                   <p className="text-sm text-white/40 leading-relaxed">
//                     {benefit.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ================= DESIGNED FOR ENTERPRISE - IMPROVED ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//             Enterprise Ready
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
//             Designed for{" "}
//             <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//               Enterprise Use
//             </span>
//           </h2>
//           <p className="text-center text-white/50 text-sm md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
//             Connect – HRMS is built to support organizations of all sizes with
//             enterprise-grade features, security, and scalability at its core.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {enterpriseFeatures.map((feature, idx) => {
//               const Icon = feature.icon;
//               const isPurple = idx % 2 === 0;

//               return (
//                 <div
//                   key={feature.title}
//                   className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60 text-center"
//                 >
//                   <div className="mb-5 mx-auto">
//                     <div
//                       className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border rounded-full transition-transform group-hover:scale-105 ${
//                         isPurple
//                           ? "bg-purple-500/15 border-purple-300/60"
//                           : "bg-sky-500/15 border-sky-300/60"
//                       }`}
//                     >
//                       <Icon
//                         className={`w-7 h-7 md:w-8 md:h-8 ${
//                           isPurple ? "text-purple-300" : "text-sky-300"
//                         }`}
//                       />
//                     </div>
//                   </div>
//                   <h4 className="font-semibold text-base md:text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">
//                     {feature.title}
//                   </h4>
//                   <p className="text-sm text-white/40 leading-relaxed">
//                     {feature.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ================= WHY CONNECT HRMS ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//             Why Choose Us
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
//             Why{" "}
//             <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
//               Connect – HRMS
//             </span>
//           </h2>
//           <p className="text-white/50 text-lg md:text-xl leading-relaxed">
//             In a digital-first organization, people operations must be reliable,
//             transparent, and scalable. Connect – HRMS provides the foundation to
//             manage those operations efficiently—today and as your organization
//             grows.
//           </p>
//         </div>
//       </div>

//       {/* ================= FINAL CTA - IMPROVED ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl overflow-hidden">
//             {/* Background decorations */}
//             <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

//             <div className="relative px-8 py-16 md:px-16 md:py-20">
//               <div className="grid md:grid-cols-2 gap-12 items-center">
//                 {/* Left Content */}
//                 <div>
//                   <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//                     Get Started
//                   </p>
//                   <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
//                     Ready to streamline your people operations?
//                   </h2>
//                   <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
//                     Transform how your organization manages employees with
//                     Connect – HRMS. Experience seamless workforce management
//                     built for the modern enterprise.
//                   </p>

//                   {/* Feature highlights */}
//                   <div className="space-y-3 mb-8">
//                     {[
//                       "Free demo & consultation",
//                       "Quick implementation",
//                       "Dedicated support team",
//                     ].map((item, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center gap-3 text-white/60"
//                       >
//                         <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
//                         <span className="text-sm md:text-base">{item}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex flex-wrap gap-4">
//                     <button className="group rounded-full border border-purple-400/60 bg-purple-500/10 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white hover:bg-purple-500/20 hover:border-purple-400 backdrop-blur transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
//                       Request a Demo
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                     <button className="rounded-full border border-white/40 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all hover:scale-105 active:scale-95">
//                       Contact Sales
//                     </button>
//                   </div>
//                 </div>

//                 {/* Right Visual */}
//                 <div className="hidden md:flex justify-center">
//                   <div className="relative">
//                     {/* Decorative rings */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-64 h-64 rounded-full border border-purple-500/20 animate-pulse" />
//                     </div>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div
//                         className="w-48 h-48 rounded-full border border-sky-500/30"
//                         style={{ animationDelay: "0.5s" }}
//                       />
//                     </div>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div
//                         className="w-32 h-32 rounded-full border border-purple-500/40"
//                         style={{ animationDelay: "1s" }}
//                       />
//                     </div>

//                     {/* Center icon */}
//                     <div className="relative w-64 h-64 flex items-center justify-center">
//                       <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-sky-500/30 border border-purple-300/50 flex items-center justify-center backdrop-blur-sm">
//                         <Rocket className="w-10 h-10 text-purple-300" />
//                       </div>
//                     </div>

//                     {/* Floating badges */}
//                     <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-xs text-purple-300 backdrop-blur-sm">
//                       Enterprise Ready
//                     </div>
//                     <div className="absolute bottom-8 left-0 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-xs text-sky-300 backdrop-blur-sm">
//                       Secure & Scalable
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductConnectPage;
"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AutoScrollCarousel from "./AutoScrollCarousel";
import {
  User,
  Rocket,
  Calendar,
  Briefcase,
  Target,
  Bell,
  Zap,
  Eye,
  BarChart3,
  TrendingUp,
  Lightbulb,
  Lock,
  Building2,
  Settings,
  Shield,
  Users,
  UserCircle,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const capabilities = [
  {
    icon: UserCircle,
    title: "Employee Profile & Lifecycle Management",
    points: [
      "Centralized employee records",
      "Personal, professional, and employment details",
      "Experience, skills, and certifications",
      "Controlled self-service updates for employees",
    ],
    summary:
      "This ensures accurate, up-to-date employee data across the organization.",
  },
  {
    icon: Rocket,
    title: "Onboarding & Organizational Alignment",
    points: [
      "Structured onboarding workflows",
      "Department, designation, and reporting assignment",
      "Consistent onboarding across teams and locations",
    ],
    summary:
      "Helps HR teams onboard employees efficiently while maintaining organizational structure.",
  },
  {
    icon: Calendar,
    title: "Leave & Attendance Management",
    points: [
      "Employee self-service leave requests",
      "Support for multiple leave types",
      "Document attachments for approvals",
      "Manager approval workflows with visibility",
    ],
    summary:
      "Reduces manual coordination and improves turnaround time for approvals.",
  },
  {
    icon: Briefcase,
    title: "Asset Management",
    points: [
      "Centralized asset inventory",
      "Asset assignment and tracking",
      "Visibility into asset ownership and status",
    ],
    summary:
      "Improves accountability and simplifies IT and operations coordination.",
  },
  {
    icon: Target,
    title: "Recruitment & Interview Management",
    points: [
      "Interview scheduling and coordination",
      "Interviewer assignment and rounds",
      "Automated interview invitations",
      "Feedback collection workflows",
    ],
    summary:
      "Enables HR and hiring teams to manage recruitment in a structured, scalable manner.",
  },
  {
    icon: Bell,
    title: "Automated Communication & Notifications",
    points: [
      "System-generated emails and notifications",
      "Interview, approval, and workflow alerts",
      "Reduced dependency on manual follow-ups",
    ],
    summary: "Keeps stakeholders informed at every stage.",
  },
];

const businessBenefits = [
  {
    icon: Zap,
    title: "Operational Efficiency",
    desc: "Automates repetitive HR tasks and reduces administrative overhead.",
  },
  {
    icon: Eye,
    title: "Centralized Visibility",
    desc: "Provides a unified view of employee, HR, and operational data.",
  },
  {
    icon: BarChart3,
    title: "Process Consistency",
    desc: "Ensures standardized workflows across teams and departments.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    desc: "Adapts easily as teams grow and organizational complexity increases.",
  },
  {
    icon: Lightbulb,
    title: "Decision Enablement",
    desc: "Supports leadership with accurate, real-time people data.",
  },
];

const enterpriseFeatures = [
  {
    icon: Lock,
    title: "Role-based access and governance",
    desc: "Granular permissions ensure data security and compliance",
  },
  {
    icon: Building2,
    title: "Multi-team and multi-department structures",
    desc: "Support complex hierarchies with ease",
  },
  {
    icon: Settings,
    title: "Enterprise-scale workflows",
    desc: "Handle thousands of employees without performance issues",
  },
  {
    icon: Shield,
    title: "Secure and controlled operations",
    desc: "Enterprise-grade security and audit trails",
  },
];

const howItWorksRoles = [
  {
    icon: User,
    title: "Employees",
    desc: "Self-service access for personal data, leave requests, and updates",
  },
  {
    icon: Users,
    title: "Managers",
    desc: "Team oversight, approvals, and performance visibility",
  },
  {
    icon: ClipboardList,
    title: "HR Teams",
    desc: "Process management, onboarding, and recruitment coordination",
  },
  {
    icon: Settings,
    title: "Administrators",
    desc: "System configuration, governance, and access control",
  },
];

export const ProductConnectPage = () => {
  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSales = () => {
    // Navigate to contact page or open email
    window.location.href =
      "mailto:connect@cjsstech.com?subject=Connect HRMS Demo Request";
  };

  return (
    <section
      className="bg-[#0a0a0b] text-white min-h-screen"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Cursor glow */}
      <div
        className="fixed inset-0 z-0 hidden pointer-events-none md:block"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(139,92,246,0.08), transparent 45%)`,
        }}
      />

      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
      </div>

      {/* ================= BACK BUTTON ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-8">
        <button
          onClick={() => handleNavigate("/products")}
          className="flex items-center gap-2 rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </button>
      </div>

      {/* ================= HERO ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            HRMS Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Connect
            </span>{" "}
            – HRMS Platform
          </h1>

          <p className="text-white/60 text-lg mb-6 leading-relaxed max-w-lg">
            Connect – HRMS is a comprehensive Human Resource Management platform
            designed to manage the full employee lifecycle—from onboarding and
            daily operations to recruitment and internal administration.
          </p>

          <p className="text-white/50 text-base mb-10 leading-relaxed max-w-lg">
            The platform acts as a single source of truth for employee data
            while enabling structured workflows that reduce dependency on manual
            processes, emails, and spreadsheets.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
            {[
              "Single source of truth",
              "Structured workflows",
              "Full lifecycle management",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ================= DASHBOARD PREVIEW ================= */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm h-[420px] shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-black/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
            </div>
            <AutoScrollCarousel />
          </div>
        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
            How Connect – HRMS{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
              Works
            </span>
          </h2>
          <p className="text-center text-white/50 text-sm md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            Connect – HRMS brings together employees, managers, HR teams, and
            administrators on a single platform, with role-based access and
            clearly defined workflows. Each user interacts with the system
            according to their responsibilities, ensuring operational clarity
            and governance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksRoles.map((item, idx) => {
              const Icon = item.icon;
              const isPurple = idx % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60 text-center"
                >
                  <div className="mb-5 mx-auto">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border rounded-full transition-transform group-hover:scale-105 ${
                        isPurple
                          ? "bg-purple-500/15 border-purple-300/60"
                          : "bg-sky-500/15 border-sky-300/60"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 md:w-7 md:h-7 ${
                          isPurple ? "text-purple-300" : "text-sky-300"
                        }`}
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= DETAILED CAPABILITIES ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Detailed{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
              Capabilities
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isPurple = idx % 2 === 0;

              return (
                <div
                  key={cap.title}
                  className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
                >
                  <div className="mb-5">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border rounded-full transition-transform group-hover:scale-105 ${
                        isPurple
                          ? "bg-purple-500/15 border-purple-300/60"
                          : "bg-sky-500/15 border-sky-300/60"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 md:w-7 md:h-7 ${
                          isPurple ? "text-purple-300" : "text-sky-300"
                        }`}
                      />
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg md:text-xl mb-4 text-white">
                    {cap.title}
                  </h4>

                  <ul className="text-white/50 leading-relaxed space-y-2 mb-4 flex-grow">
                    {cap.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isPurple ? "bg-purple-400" : "bg-sky-400"
                          }`}
                        />
                        <span className="text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-white/40 text-sm italic border-t border-white/5 pt-4">
                    {cap.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= BUSINESS BENEFITS ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
            Benefits
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Business{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
              Benefits
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {businessBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isPurple = idx % 2 === 0;

              return (
                <div
                  key={benefit.title}
                  className="group relative flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(56,189,248,0.25)] hover:border-sky-300/60 text-center"
                >
                  <div className="mb-4 mx-auto">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 border rounded-full transition-transform group-hover:scale-105 ${
                        isPurple
                          ? "bg-purple-500/15 border-purple-300/60"
                          : "bg-sky-500/15 border-sky-300/60"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          isPurple ? "text-purple-300" : "text-sky-300"
                        }`}
                      />
                    </div>
                  </div>

                  <h4 className="font-semibold text-base mb-2 text-white group-hover:text-sky-300 transition-colors">
                    {benefit.title}
                  </h4>

                  <p className="text-sm text-white/40 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= DESIGNED FOR ENTERPRISE ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
            Enterprise Ready
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
            Designed for{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
              Enterprise Use
            </span>
          </h2>
          <p className="text-center text-white/50 text-sm md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            Connect – HRMS is built to support organizations of all sizes with
            enterprise-grade features, security, and scalability at its core.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              const isPurple = idx % 2 === 0;

              return (
                <div
                  key={feature.title}
                  className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60 text-center"
                >
                  <div className="mb-5 mx-auto">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border rounded-full transition-transform group-hover:scale-105 ${
                        isPurple
                          ? "bg-purple-500/15 border-purple-300/60"
                          : "bg-sky-500/15 border-sky-300/60"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 md:w-8 md:h-8 ${
                          isPurple ? "text-purple-300" : "text-sky-300"
                        }`}
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= WHY CONNECT HRMS ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Why{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              Connect – HRMS
            </span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed">
            In a digital-first organization, people operations must be reliable,
            transparent, and scalable. Connect – HRMS provides the foundation to
            manage those operations efficiently—today and as your organization
            grows.
          </p>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-600/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
                    Get Started
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                    Ready to streamline your people operations?
                  </h2>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
                    Transform how your organization manages employees with
                    Connect – HRMS. Experience seamless workforce management
                    built for the modern enterprise.
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-3 mb-8">
                    {[
                      "Free demo & consultation",
                      "Quick implementation",
                      "Dedicated support team",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-white/60"
                      >
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleContactSales}
                      className="group rounded-full border border-purple-400/60 bg-purple-500/10 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white hover:bg-purple-500/20 hover:border-purple-400 backdrop-blur transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                      Request a Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={handleContactSales}
                      className="rounded-full border border-white/40 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all hover:scale-105 active:scale-95"
                    >
                      Contact Sales
                    </button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    {/* Decorative rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 rounded-full border border-purple-500/20 animate-pulse" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-48 h-48 rounded-full border border-sky-500/30 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-32 h-32 rounded-full border border-purple-500/40 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>

                    {/* Center icon */}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-sky-500/30 border border-purple-300/50 flex items-center justify-center backdrop-blur-sm">
                        <Rocket className="w-10 h-10 text-purple-300" />
                      </div>
                    </div>

                    {/* Floating badges */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-xs text-purple-300 backdrop-blur-sm animate-float">
                      Enterprise Ready
                    </div>
                    <div
                      className="absolute bottom-8 left-0 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-xs text-sky-300 backdrop-blur-sm animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      Secure & Scalable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductConnectPage;
