// "use client";

// import { useEffect, useRef, useState } from "react";

// interface TestimonialCard {
//   id: string;
//   text: string;
//   author: string;
//   role: string;
//   tech: string;
// }

// const TESTIMONIAL_CARDS: TestimonialCard[] = [
//   // Row 1
//   {
//     id: "1",
//     text: "SAP Hybris enables seamless e-commerce experiences across multiple channels.",
//     author: "Tech Lead",
//     role: "E-commerce",
//     tech: "SAP Hybris",
//   },
//   {
//     id: "2",
//     text: "Adobe Experience Manager transformed our content management workflow. Reduced publication time significantly.",
//     author: "Content Director",
//     role: "Digital Marketing",
//     tech: "Adobe AEM",
//   },
//   {
//     id: "3",
//     text: "React provides the flexibility and performance our modern applications demand.",
//     author: "Frontend Architect",
//     role: "Web Development",
//     tech: "React",
//   },
//   {
//     id: "3b",
//     text: "TypeScript ensures code quality and prevents runtime errors. Type safety is invaluable in large codebases.",
//     author: "Code Lead",
//     role: "Development",
//     tech: "TypeScript",
//   },
//   {
//     id: "3c",
//     text: "Next.js accelerates development with server-side rendering and static generation capabilities.",
//     author: "Full Stack Dev",
//     role: "Engineering",
//     tech: "Next.js",
//   },
//   // Row 2
//   {
//     id: "4",
//     text: "Java backend services power our enterprise infrastructure with reliability and scalability.",
//     author: "Backend Engineer",
//     role: "Infrastructure",
//     tech: "Java",
//   },
//   {
//     id: "5",
//     text: "Cloud infrastructure provides unmatched scalability and reliability for our operations.",
//     author: "Cloud Architect",
//     role: "DevOps",
//     tech: "Cloud Tech",
//   },
//   {
//     id: "6",
//     text: "Automated testing frameworks ensure quality at scale. QA automation reduced bugs by 65%.",
//     author: "QA Lead",
//     role: "Quality Assurance",
//     tech: "Automation",
//   },
//   {
//     id: "6b",
//     text: "Kubernetes orchestration simplified our container deployment and scaling processes.",
//     author: "Platform Engineer",
//     role: "DevOps",
//     tech: "Kubernetes",
//   },
//   {
//     id: "6c",
//     text: "PostgreSQL database provides reliable persistence and advanced query capabilities.",
//     author: "Database Admin",
//     role: "Infrastructure",
//     tech: "PostgreSQL",
//   },
//   // Row 3
//   {
//     id: "7",
//     text: "Machine Learning capabilities drive intelligent decision-making in our platform.",
//     author: "ML Engineer",
//     role: "AI/ML",
//     tech: "AI/ML",
//   },
//   {
//     id: "8",
//     text: "DevOps practices streamlined our deployment pipeline and reduced time-to-market.",
//     author: "DevOps Engineer",
//     role: "Infrastructure",
//     tech: "DevOps",
//   },
//   {
//     id: "9",
//     text: "Microservices architecture provided modularity for rapid feature development.",
//     author: "System Architect",
//     role: "Architecture",
//     tech: "Microservices",
//   },
//   {
//     id: "9b",
//     text: "Docker containerization ensures consistency across development and production environments.",
//     author: "Ops Engineer",
//     role: "DevOps",
//     tech: "Docker",
//   },
//   {
//     id: "9c",
//     text: "GraphQL provides flexible and efficient data querying for modern applications.",
//     author: "API Designer",
//     role: "Backend",
//     tech: "GraphQL",
//   },
// ];

// export const TechShowcaseSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardId = entry.target.getAttribute("data-card-id");
//             if (cardId) {
//               setVisibleCards((prev) => new Set([...prev, cardId]));
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = sectionRef.current?.querySelectorAll("[data-card-id]");
//     cards?.forEach((card) => observer.observe(card));

//     return () => {
//       cards?.forEach((card) => observer.unobserve(card));
//     };
//   }, []);

//   const groupedCards = [
//     TESTIMONIAL_CARDS.slice(0, 8),
//     TESTIMONIAL_CARDS.slice(8, 15),
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24 overflow-hidden bg-black"
//     >
//       {/* Background layers */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {/* Base black background */}
//         <div className="absolute inset-0 bg-black" />

//         {/* Subtle gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

//         {/* Soft corner blobs – reduced opacity */}
//         <div className="absolute -top-48 -left-32 w-[620px] h-[620px] rounded-full bg-cyan-400/8 blur-[160px]" />
//         <div className="absolute -bottom-52 -right-28 w-[640px] h-[640px] rounded-full bg-fuchsia-500/8 blur-[170px]" />

//         {/* Conic sweep highlight – reduced opacity */}
//         <div
//           className="absolute -inset-[30%] opacity-40 animate-conicFlow"
//           style={{
//             backgroundImage:
//               "conic-gradient(from 160deg at 85% 10%, transparent, rgba(56,189,248,0.10), transparent 40%, rgba(168,85,247,0.12), transparent 70%, rgba(59,130,246,0.10), transparent)",
//             transformOrigin: "85% 10%",
//           }}
//         />

//         {/* Subtle dot grid pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <div className="relative z-10">
//         {/* Header */}
//         <div className="max-w-6xl px-6 mx-auto mb-16 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-100/90 backdrop-blur-md">
//             <span className="relative flex items-center justify-center w-3 h-3">
//               {/* <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" /> */}
//               {/* <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-300" /> */}
//             </span>
//             <span>Trusted Tech Stack</span>
//           </div>

//           <h2 className="mb-4 text-4xl font-extrabold md:text-5xl text-white animate-slideUp">
//             Loved by devs worldwide
//           </h2>
//           <p
//             className="text-base md:text-lg text-white/70 animate-fadeInUp"
//             style={{ animationDelay: "0.2s" }}
//           >
//             What engineering teams say about the platforms powering their
//             digital commerce.
//           </p>
//         </div>

//         {/* Scrolling rows */}
//         <div className="space-y-4 md:space-y-6">
//           {groupedCards.map((row, rowIdx) => (
//             <div
//               key={rowIdx}
//               className="w-full py-4 overflow-x-hidden overflow-y-visible"
//             >
//               <div
//                 className="flex gap-6 px-6 pb-2 md:px-10"
//                 style={{
//                   animation:
//                     rowIdx % 2 === 1
//                       ? "scroll 22s linear infinite reverse"
//                       : "scroll 22s linear infinite",
//                   direction: "ltr",
//                 }}
//               >
//                 {[...row, ...row].map((card, idx) => (
//                   <div
//                     key={`${card.id}-${idx}`}
//                     data-card-id={card.id}
//                     className={`group relative shrink-0 w-80 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] cursor-pointer ${
//                       visibleCards.has(card.id) ? "opacity-100" : "opacity-65"
//                     }`}
//                     style={{
//                       animation: visibleCards.has(card.id)
//                         ? "revealUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards"
//                         : "none",
//                     }}
//                   >
//                     {/* Hover glow */}
//                     <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_60%)]" />

//                     {/* Tech Badge */}
//                     <div className="relative inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded-full bg-[#0a0a0a]/90 border border-cyan-400/30">
//                       <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
//                       <span className="text-[11px] font-semibold text-cyan-100 tracking-wide">
//                         {card.tech}
//                       </span>
//                     </div>

//                     {/* Quote */}
//                     <p className="relative mb-4 text-[13px] leading-relaxed text-white/70 line-clamp-3 h-16 transition-colors duration-200 group-hover:text-white/90">
//                       "{card.text}"
//                     </p>

//                     {/* Author */}
//                     <div className="flex items-center gap-3 pt-3 border-t border-white/10">
//                       <div className="flex items-center justify-center rounded-full w-9 h-9 bg-gradient-to-br from-cyan-500 to-indigo-500 shrink-0">
//                         <span className="text-xs font-bold text-white">
//                           {card.author.charAt(0)}
//                         </span>
//                       </div>
//                       <div className="min-w-0">
//                         <p className="text-sm font-semibold truncate text-white">
//                           {card.author}
//                         </p>
//                         <p className="text-xs truncate text-white/50">
//                           {card.role}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Local keyframes just for this section */}
//       <style>
//         {`
//           @keyframes conicFlow {
//             0%   { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//           .animate-conicFlow {
//             animation: conicFlow 52s linear infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default TechShowcaseSection;
"use client";

import { useEffect, useRef, useState } from "react";

interface TestimonialCard {
  id: string;
  text: string;
  author: string;
  role: string;
  tech: string;
  icon: string; // SVG icon type
}

// Tech Icon Component with multiple icon options
const TechIcon = ({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) => {
  const icons: Record<string, React.ReactNode> = {
    // SAP Hybris - Shopping/Commerce icon
    "SAP Hybris": (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M3 3h18v18H3V3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 9h6v6H9V9z" fill="currentColor" opacity="0.3" />
        <path
          d="M7 7l10 10M17 7l-10 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Adobe AEM - Creative/Content icon
    "Adobe AEM": (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.3" />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    // React - Atom icon
    React: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.5"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="currentColor"
          strokeWidth="1.5"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
    // TypeScript - TS Box icon
    TypeScript: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          fill="currentColor"
          opacity="0.2"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="currentColor"
          fontSize="8"
          fontWeight="bold"
          fontFamily="system-ui"
        >
          TS
        </text>
      </svg>
    ),
    // Next.js - N icon
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 16V8l10 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Java - Coffee cup icon
    Java: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M6 8h10a2 2 0 012 2v6a4 4 0 01-4 4H8a4 4 0 01-4-4v-6a2 2 0 012-2z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M6 8h10a2 2 0 012 2v6a4 4 0 01-4 4H8a4 4 0 01-4-4v-6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M18 10h2a2 2 0 010 4h-2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 4c0 2 2 2 2 4M12 4c0 2 2 2 2 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // Cloud Tech - Cloud icon
    "Cloud Tech": (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M6.5 19a4.5 4.5 0 01-.42-8.98 6 6 0 0111.84 0A4.5 4.5 0 0117.5 19h-11z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M6.5 19a4.5 4.5 0 01-.42-8.98 6 6 0 0111.84 0A4.5 4.5 0 0117.5 19h-11z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    // Automation - Robot/Gear icon
    Automation: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 1v4M12 19v4M23 12h-4M5 12H1M20.5 3.5l-3 3M6.5 17.5l-3 3M20.5 20.5l-3-3M6.5 6.5l-3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    ),
    // Kubernetes - Helm wheel icon
    Kubernetes: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
        <path
          d="M12 2v6M12 16v6M22 12h-6M8 12H2M19.07 4.93l-4.24 4.24M9.17 14.83l-4.24 4.24M19.07 19.07l-4.24-4.24M9.17 9.17l-4.24-4.24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    // PostgreSQL - Database icon
    PostgreSQL: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse
          cx="12"
          cy="6"
          rx="8"
          ry="3"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="6"
          rx="8"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    // AI/ML - Brain/Neural icon
    "AI/ML": (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="6" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="6" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="4" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
        <path
          d="M12 12L6 8M12 12l6-4M12 12L6 16M12 12l6 4M12 12V4M12 12v8"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
      </svg>
    ),
    // DevOps - Infinity/Pipeline icon
    DevOps: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M4 12c0-2.5 2-4.5 4.5-4.5S13 9.5 13 12s-2 4.5-4.5 4.5S4 14.5 4 12zM11 12c0-2.5 2-4.5 4.5-4.5S20 9.5 20 12s-2 4.5-4.5 4.5S11 14.5 11 12z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8.5 12h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="6.5" cy="12" r="1" fill="currentColor" />
        <circle cx="17.5" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    // Microservices - Grid/Modules icon
    Microservices: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    ),
    // Docker - Container/Box icon
    Docker: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M4 11h16a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a1 1 0 011-1z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M4 11h16a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 11V8M11 11V7M15 11V8M7 8h4M11 7h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="15" r="1" fill="currentColor" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="16" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    // GraphQL - Query/Graph icon
    GraphQL: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <polygon
          points="12,2 22,7 22,17 12,22 2,17 2,7"
          fill="currentColor"
          opacity="0.15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="2" r="2" fill="currentColor" />
        <circle cx="22" cy="7" r="2" fill="currentColor" />
        <circle cx="22" cy="17" r="2" fill="currentColor" />
        <circle cx="12" cy="22" r="2" fill="currentColor" />
        <circle cx="2" cy="17" r="2" fill="currentColor" />
        <circle cx="2" cy="7" r="2" fill="currentColor" />
      </svg>
    ),
  };

  return (
    icons[type] || (
      // Default fallback icon
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 12h8M12 8v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  );
};

const TESTIMONIAL_CARDS: TestimonialCard[] = [
  // Row 1
  {
    id: "1",
    text: "SAP Hybris enables seamless e-commerce experiences across multiple channels.",
    author: "Tech Lead",
    role: "E-commerce",
    tech: "SAP Hybris",
    icon: "SAP Hybris",
  },
  {
    id: "2",
    text: "Adobe Experience Manager transformed our content management workflow. Reduced publication time significantly.",
    author: "Content Director",
    role: "Digital Marketing",
    tech: "Adobe AEM",
    icon: "Adobe AEM",
  },
  {
    id: "3",
    text: "React provides the flexibility and performance our modern applications demand.",
    author: "Frontend Architect",
    role: "Web Development",
    tech: "React",
    icon: "React",
  },
  {
    id: "3b",
    text: "TypeScript ensures code quality and prevents runtime errors. Type safety is invaluable in large codebases.",
    author: "Code Lead",
    role: "Development",
    tech: "TypeScript",
    icon: "TypeScript",
  },
  {
    id: "3c",
    text: "Next.js accelerates development with server-side rendering and static generation capabilities.",
    author: "Full Stack Dev",
    role: "Engineering",
    tech: "Next.js",
    icon: "Next.js",
  },
  // Row 2
  {
    id: "4",
    text: "Java backend services power our enterprise infrastructure with reliability and scalability.",
    author: "Backend Engineer",
    role: "Infrastructure",
    tech: "Java",
    icon: "Java",
  },
  {
    id: "5",
    text: "Cloud infrastructure provides unmatched scalability and reliability for our operations.",
    author: "Cloud Architect",
    role: "DevOps",
    tech: "Cloud Tech",
    icon: "Cloud Tech",
  },
  {
    id: "6",
    text: "Automated testing frameworks ensure quality at scale. QA automation reduced bugs by 65%.",
    author: "QA Lead",
    role: "Quality Assurance",
    tech: "Automation",
    icon: "Automation",
  },
  {
    id: "6b",
    text: "Kubernetes orchestration simplified our container deployment and scaling processes.",
    author: "Platform Engineer",
    role: "DevOps",
    tech: "Kubernetes",
    icon: "Kubernetes",
  },
  {
    id: "6c",
    text: "PostgreSQL database provides reliable persistence and advanced query capabilities.",
    author: "Database Admin",
    role: "Infrastructure",
    tech: "PostgreSQL",
    icon: "PostgreSQL",
  },
  // Row 3
  {
    id: "7",
    text: "Machine Learning capabilities drive intelligent decision-making in our platform.",
    author: "ML Engineer",
    role: "AI/ML",
    tech: "AI/ML",
    icon: "AI/ML",
  },
  {
    id: "8",
    text: "DevOps practices streamlined our deployment pipeline and reduced time-to-market.",
    author: "DevOps Engineer",
    role: "Infrastructure",
    tech: "DevOps",
    icon: "DevOps",
  },
  {
    id: "9",
    text: "Microservices architecture provided modularity for rapid feature development.",
    author: "System Architect",
    role: "Architecture",
    tech: "Microservices",
    icon: "Microservices",
  },
  {
    id: "9b",
    text: "Docker containerization ensures consistency across development and production environments.",
    author: "Ops Engineer",
    role: "DevOps",
    tech: "Docker",
    icon: "Docker",
  },
  {
    id: "9c",
    text: "GraphQL provides flexible and efficient data querying for modern applications.",
    author: "API Designer",
    role: "Backend",
    tech: "GraphQL",
    icon: "GraphQL",
  },
];

export const TechShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card-id");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-card-id]");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const groupedCards = [
    TESTIMONIAL_CARDS.slice(0, 8),
    TESTIMONIAL_CARDS.slice(8, 15),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-black md:py-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute -top-48 -left-32 w-[620px] h-[620px] rounded-full bg-cyan-400/8 blur-[160px]" />
        <div className="absolute -bottom-52 -right-28 w-[640px] h-[640px] rounded-full bg-fuchsia-500/8 blur-[170px]" />
        <div
          className="absolute -inset-[30%] opacity-40 animate-conicFlow"
          style={{
            backgroundImage:
              "conic-gradient(from 160deg at 85% 10%, transparent, rgba(56,189,248,0.10), transparent 40%, rgba(168,85,247,0.12), transparent 70%, rgba(59,130,246,0.10), transparent)",
            transformOrigin: "85% 10%",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-6xl px-4 mx-auto mb-12 text-center md:px-6 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-100/90 backdrop-blur-md md:px-4 md:mb-4">
            {/* <span className="relative flex items-center justify-center w-2 h-2 md:w-3 md:h-3">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-300" />
            </span> */}
            <span>Trusted Tech Stack</span>
          </div>

          <h2 className="mb-3 text-3xl font-extrabold text-white md:mb-4 md:text-5xl animate-slideUp">
            Loved by devs worldwide
          </h2>
          <p
            className="text-sm md:text-lg text-white/70 animate-fadeInUp max-w-2xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            What engineering teams say about the platforms powering their
            digital commerce.
          </p>
        </div>

        {/* Scrolling rows */}
        <div className="space-y-3 md:space-y-6">
          {groupedCards.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="w-full py-2 overflow-x-hidden overflow-y-visible md:py-4"
            >
              <div
                className="flex gap-4 px-4 pb-2 md:gap-6 md:px-10"
                style={{
                  animation:
                    rowIdx % 2 === 1
                      ? "scroll 22s linear infinite reverse"
                      : "scroll 22s linear infinite",
                  direction: "ltr",
                }}
              >
                {[...row, ...row].map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    data-card-id={card.id}
                    className={`group relative shrink-0 w-72 md:w-80 rounded-xl md:rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-4 md:p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] cursor-pointer backdrop-blur-sm ${
                      visibleCards.has(card.id) ? "opacity-100" : "opacity-65"
                    }`}
                    style={{
                      animation: visibleCards.has(card.id)
                        ? "revealUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards"
                        : "none",
                    }}
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_60%)]" />

                    {/* Tech Badge */}
                    <div className="relative inline-flex items-center gap-1.5 md:gap-2 px-2 md:px-2.5 py-0.5 md:py-1 mb-2 md:mb-3 rounded-full bg-[#0a0a0a]/90 border border-cyan-400/30">
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                      <span className="text-[10px] md:text-[11px] font-semibold text-cyan-100 tracking-wide">
                        {card.tech}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="relative mb-3 md:mb-4 text-[12px] md:text-[13px] leading-relaxed text-white/70 line-clamp-3 h-14 md:h-16 transition-colors duration-200 group-hover:text-white/90">
                      "{card.text}"
                    </p>

                    {/* Author Section with Icon */}
                    <div className="flex items-center gap-2.5 md:gap-3 pt-2.5 md:pt-3 border-t border-white/10">
                      {/* Premium Icon Container */}
                      <div className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-xl shrink-0 group/icon overflow-hidden">
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-xl" />

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-cyan-400/40 transition-colors duration-300" />

                        {/* Shine effect on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
                          style={{
                            transition:
                              "transform 0.8s ease, opacity 0.3s ease",
                          }}
                        />

                        {/* Inner glow */}
                        <div className="absolute inset-[2px] rounded-lg bg-gradient-to-br from-gray-900 to-black" />

                        {/* Icon */}
                        <TechIcon
                          type={card.icon}
                          className="relative w-4 h-4 md:w-5 md:h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                        />

                        {/* Pulse ring on hover */}
                        <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 group-hover:border-cyan-400/30 group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      </div>

                      {/* Author Info */}
                      <div className="min-w-0 flex-1">
                        <p className="text-xs md:text-sm font-semibold truncate text-white group-hover:text-cyan-50 transition-colors duration-200">
                          {card.author}
                        </p>
                        <p className="text-[10px] md:text-xs truncate text-white/50 group-hover:text-white/60 transition-colors duration-200">
                          {card.role}
                        </p>
                      </div>

                      {/* Tech badge indicator (mobile hidden, desktop visible) */}
                      <div className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                        <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[9px] text-white/40 font-medium uppercase tracking-wider">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local keyframes */}
      <style>
        {`
          @keyframes conicFlow {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-conicFlow {
            animation: conicFlow 52s linear infinite;
          }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes revealUp {
            0% { 
              opacity: 0; 
              transform: translateY(20px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          @keyframes slideUp {
            0% { 
              opacity: 0; 
              transform: translateY(30px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
          }
          
          @keyframes fadeInUp {
            0% { 
              opacity: 0; 
              transform: translateY(20px);
            }
            100% { 
              opacity: 1; 
              transform: translateY(0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default TechShowcaseSection;
