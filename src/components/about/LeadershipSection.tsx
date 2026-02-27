"use client";

import { Quote } from "lucide-react";

const LEADERS_DATA = [
  {
    name: "Venkata Krishna",
    designation: "Director",
    profileImage: "/images/Krishna3.jpg",
    bio: [
      "Venkata Krishna has extensive experience guiding the design and evolution of enterprise digital commerce platforms for global organizations. His work spans technology direction and solution definition, with a strong focus on building scalable and enduring digital foundations.",
      "He brings deep expertise in SAP Commerce (Hybris) and modern headless architectures, and has played a key role in shaping technology strategy and architectural standards across multiple enterprise engagements. His approach emphasizes close alignment between business priorities and well-governed, production-ready platforms.",
      "Venkata Krishna plays a key role in defining technology direction, governance frameworks, and long-term capability strategy. His responsibilities include strategic oversight, decision stewardship, and the establishment of standards that enable sustainable growth and enterprise-scale delivery.",
    ],
    quote:
      "Great technology is built when clear vision, thoughtful execution, and empowered people come together.",
  },
  {
    name: "Srikanth Banthu",
    designation: "Director",
    profileImage: "/images/Srikanth_2.png",
    bio: [
      "Srikanth Banthu brings broad industry experience in guiding the development and evolution of enterprise backend platforms that support critical business operations. His work has strengthened technology foundations and delivery standards across diverse enterprise environments.",
      "He has deep expertise in Java, Spring-based frameworks, and API-driven architectures, and has been instrumental in establishing architectural direction, engineering standards, and quality benchmarks that reinforce reliability, security, and scalability.",
      "As a key member of the leadership team, Srikanth Banthu plays an important role in shaping technology governance, strengthening engineering culture, and driving long-term capability development. His contributions have been central to building disciplined teams, consistent delivery practices, and trusted enterprise solutions.",
    ],
    quote:
      "Strong systems are built with discipline, clarity of thought, and a relentless focus on quality.",
  },
];

// Practice Leadership data
const PRACTICE_LEADERS = [
  {
    id: 1,
    name: "Narmendran Yentrapati",
    role: "Program Manager",
    image: "/images/narmensir.jpg",
    fullStory:
      "Narmendran leads large, multi-stream enterprise programs with strong governance and predictability. He ensures alignment across stakeholders, mitigates risks, and delivers programs on time and within scope.",
    yearsAtCompany: "7+ Years",
    quote: "Successful programs are built on trust and discipline.",
  },
  {
    id: 2,
    name: "Sathyanarayana Y",
    role: "Solution Architect",
    image: "/images/satyasir.jpg",
    fullStory:
      "Sathyanarayana leads enterprise solution architecture with a focus on scalability, security, and performance. He translates complex business requirements into robust technical designs while mentoring architects and engineers.",
    yearsAtCompany: "8+ Years",
    quote: "Good architecture balances today's needs with tomorrow's growth.",
  },
  {
    id: 3,
    name: "Srinivas Moole",
    role: "AI Architect",
    image: "/images/srinivasmoole.jpg",
    fullStory:
      "Srinivas leads AI architecture and data-driven initiatives, designing intelligent systems that integrate with enterprise platforms. His focus is on real-world, production-ready AI solutions.",
    yearsAtCompany: "7+ Years",
    quote: "AI succeeds when it is practical, scalable, and responsible.",
  },
  {
    id: 4,
    name: "Jagadeesh Guddati",
    role: "SAP CX Lead",
    image: "/images/jagadishg.jpg",
    fullStory:
      "Jagadeesh heads SAP CX initiatives, delivering scalable and high-performing commerce platforms. He ensures best practices across SAP Commerce implementations for global clients.",
    yearsAtCompany: "8+ Years",
    quote:
      "Customer experience is the true differentiator in digital commerce.",
  },
];

export const LeadershipSection = () => {
  return (
    <section className="relative px-4 sm:px-6 py-24 sm:py-32 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      </div>

      {/* Floating Orbs - Using purple and sky */}
      <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-20 right-[10%] w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl relative">
        {/* ==================== EXECUTIVE LEADERSHIP ==================== */}
        <div className="mb-24 sm:mb-32">
          {/* SECTION HEADER */}
          <div className="text-center mb-16 sm:mb-24">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
              Meet Our Leaders
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Executive{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                Leadership
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-white/50">
              Visionary leaders driving innovation and excellence across our
              organization
            </p>
          </div>

          {/* EXECUTIVE LEADERS CARDS */}
          <div className="space-y-16 sm:space-y-20">
            {LEADERS_DATA.map((leader, idx) => (
              <div
                key={idx}
                className="leader-animate"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Main Card Container */}
                <div className="relative rounded-[32px] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px]" />

                  <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="grid gap-8 lg:gap-12 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] items-start">
                      {/* IMAGE CARD */}
                      <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                          {/* Dashed border frame */}
                          <div className="absolute -inset-3 sm:-inset-4 rounded-[28px] sm:rounded-[32px] border-2 border-dashed border-purple-300/30" />

                          {/* Main image container */}
                          <div className="relative w-[280px] sm:w-[300px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900">
                            {/* Image - Fixed height */}
                            <img
                              src={leader.profileImage}
                              alt={leader.name}
                              className="w-full h-[360px] object-cover"
                            />

                            {/* Bottom gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                            {/* Bottom info */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-center">
                              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                                {leader.name}
                              </h3>
                              <p className="text-sm text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text font-medium">
                                {leader.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CONTENT SECTION */}
                      <div className="space-y-6 mt-4 lg:mt-0">
                        {/* Name and designation for desktop */}
                        <div className="hidden lg:block">
                          <p className="text-xs font-semibold tracking-[0.2em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-2">
                            {leader.designation}
                          </p>
                          <h3 className="text-3xl xl:text-4xl font-bold text-white">
                            {leader.name}
                          </h3>
                        </div>

                        {/* Bio paragraphs */}
                        <div className="space-y-4">
                          {leader.bio.map((para, i) => (
                            <p
                              key={i}
                              className="text-sm sm:text-base leading-relaxed text-white/70"
                            >
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-sky-500/5">
                          {/* Quote icon */}
                          <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-sky-400 flex items-center justify-center shadow-lg shadow-purple-500/20">
                            <Quote className="w-4 h-4 text-white" />
                          </div>

                          <p className="pt-2 text-sm sm:text-base md:text-lg italic text-white/80 leading-relaxed">
                            "{leader.quote}"
                          </p>
                        </div>

                        {/* CTA Button */}
                        {/* <div className="pt-2">
                          <button className="rounded-full border border-purple-300/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-purple-500/10 backdrop-blur hover:border-purple-300/60 transition-all">
                            Get in Touch
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== PRACTICE LEADERSHIP ==================== */}
        <div>
          {/* SECTION HEADER */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Practice{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                Leadership
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-white/50">
              Domain experts who lead our specialized practices and deliver
              excellence to clients
            </p>
          </div>

          {/* PRACTICE LEADERS GRID */}
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICE_LEADERS.map((leader, idx) => (
              <div
                key={leader.id}
                className="group practice-leader-animate"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4] bg-neutral-900">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Years badge
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium border backdrop-blur-sm bg-purple-500/20 border-purple-300/30 text-purple-200">
                    {leader.yearsAtCompany}
                  </div> */}
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {leader.name}
                </h3>

                {/* Role */}
                <p className="text-sm font-medium mb-3 text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  {leader.role}
                </p>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {leader.fullStory}
                </p>

                {/* Get In Touch Link */}
                {/* <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-all group/link text-purple-300 hover:text-sky-300"
                >
                  Get In Touch
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component-scoped CSS */}
      <style>{`
        @keyframes leaderFadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .leader-animate {
          animation: leaderFadeUp 0.9s ease-out both;
        }

        @keyframes practiceFadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .practice-leader-animate {
          animation: practiceFadeUp 0.7s ease-out both;
        }
      `}</style>
    </section>
  );
};

// "use client";

// import { useEffect, useState } from "react";
// import { Quote, Loader2 } from "lucide-react";

// const API_BASE = "http://172.16.16.33:5000";

// // ─── Helpers ────────────────────────────────────────────────

// /** Normalize any API response into an array */
// const toArray = (data: unknown): unknown[] => {
//   if (Array.isArray(data)) return data;
//   if (data && typeof data === "object") {
//     // check common wrapper keys
//     const obj = data as Record<string, unknown>;
//     for (const key of ["data", "results", "items", "leaders", "records"]) {
//       if (Array.isArray(obj[key])) return obj[key] as unknown[];
//     }
//     // single document → wrap
//     if (obj._id || obj.name) return [obj];
//   }
//   return [];
// };

// /** The bio field may be a single-element array with all paragraphs mashed
//  *  into one escaped string. Split it back into clean paragraphs. */
// const parseBio = (bio: unknown): string[] => {
//   if (!bio) return [];

//   const items: string[] = Array.isArray(bio) ? bio.map(String) : [String(bio)];

//   const result: string[] = [];

//   for (const raw of items) {
//     const trimmed = raw.trim();

//     // If the string contains `",` it's likely concatenated quoted paragraphs
//     if (trimmed.includes('",')) {
//       const parts = trimmed
//         .split(/"\s*,\s*[\r\n]*\s*"/)
//         .map((s) => s.replace(/^[\s"\\]+|[\s"\\,]+$/g, "").trim())
//         .filter(Boolean);
//       result.push(...parts);
//     } else {
//       const clean = trimmed.replace(/^[\s"\\]+|[\s"\\,]+$/g, "").trim();
//       if (clean) result.push(clean);
//     }
//   }

//   return result;
// };

// /** Strip stray quotes, braces, commas, etc. from the quote string */
// const cleanQuote = (q: unknown): string => {
//   if (!q || typeof q !== "string") return "";
//   return q
//     .replace(/^[\s"\\]+/, "")
//     .replace(/[\s"\\},\r\n]+$/g, "")
//     .trim();
// };

// // ─── Types ──────────────────────────────────────────────────

// interface Leader {
//   _id?: string;
//   name: string;
//   designation: string;
//   profileImage: string;
//   bio: string[];
//   quote: string;
// }

// interface PracticeLeader {
//   _id?: string;
//   id?: number;
//   name: string;
//   role: string;
//   image: string;
//   fullStory: string;
//   yearsAtCompany: string;
//   quote: string;
// }

// // ─── Component ──────────────────────────────────────────────

// export const LeadershipSection = () => {
//   const [leaders, setLeaders] = useState<Leader[]>([]);
//   const [practiceLeaders, setPracticeLeaders] = useState<PracticeLeader[]>([]);
//   const [leadersLoading, setLeadersLoading] = useState(true);
//   const [practiceLoading, setPracticeLoading] = useState(true);
//   const [leadersError, setLeadersError] = useState<string | null>(null);
//   const [practiceError, setPracticeError] = useState<string | null>(null);

//   // ── Fetch Executive Leaders from /leaders ──
//   useEffect(() => {
//     (async () => {
//       try {
//         setLeadersLoading(true);
//         setLeadersError(null);

//         const res = await fetch(`${API_BASE}/leaders`);
//         if (!res.ok) throw new Error(`Status ${res.status}`);

//         const json = await res.json();
//         const raw = toArray(json) as Leader[];

//         // Clean bio & quote for every leader
//         const cleaned: Leader[] = raw.map((l) => ({
//           ...l,
//           bio: parseBio(l.bio),
//           quote: cleanQuote(l.quote),
//         }));

//         setLeaders(cleaned);
//       } catch (err) {
//         console.error("Error fetching leaders:", err);
//         setLeadersError(
//           err instanceof Error ? err.message : "Failed to load leaders",
//         );
//       } finally {
//         setLeadersLoading(false);
//       }
//     })();
//   }, []);

//   // ── Fetch Practice Leaders from /parental-leaders ──
//   useEffect(() => {
//     (async () => {
//       try {
//         setPracticeLoading(true);
//         setPracticeError(null);

//         const res = await fetch(`${API_BASE}/parental-leaders`);
//         if (!res.ok) throw new Error(`Status ${res.status}`);

//         const json = await res.json();
//         const raw = toArray(json) as PracticeLeader[];

//         setPracticeLeaders(raw);
//       } catch (err) {
//         console.error("Error fetching practice leaders:", err);
//         setPracticeError(
//           err instanceof Error
//             ? err.message
//             : "Failed to load practice leaders",
//         );
//       } finally {
//         setPracticeLoading(false);
//       }
//     })();
//   }, []);

//   // ── Render ────────────────────────────────────────────────

//   return (
//     <section className="relative px-4 sm:px-6 py-24 sm:py-32 overflow-hidden bg-black">
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none -z-10">
//         <div className="absolute inset-0 bg-black" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
//       </div>

//       <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] -z-10" />
//       <div className="absolute bottom-20 right-[10%] w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[150px] -z-10" />

//       <div className="mx-auto max-w-7xl relative">
//         {/* ==================== EXECUTIVE LEADERSHIP ==================== */}
//         <div className="mb-24 sm:mb-32">
//           <div className="text-center mb-16 sm:mb-24">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//               Meet Our Leaders
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
//               Executive{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 Leadership
//               </span>
//             </h2>
//             <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-white/50">
//               Visionary leaders driving innovation and excellence across our
//               organization
//             </p>
//           </div>

//           {/* ── Loading / Error / Data ── */}
//           {leadersLoading ? (
//             <div className="flex items-center justify-center py-20">
//               <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
//               <span className="ml-3 text-white/50 text-sm">
//                 Loading leaders…
//               </span>
//             </div>
//           ) : leadersError ? (
//             <div className="text-center py-20">
//               <p className="text-red-400 text-sm mb-4">{leadersError}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="rounded-full border border-purple-300/40 px-5 py-2 text-xs text-white hover:bg-purple-500/10 transition-all"
//               >
//                 Retry
//               </button>
//             </div>
//           ) : leaders.length === 0 ? (
//             <p className="text-center text-white/40 py-16">
//               No executive leaders found.
//             </p>
//           ) : (
//             <div className="space-y-16 sm:space-y-20">
//               {leaders.map((leader, idx) => (
//                 <div
//                   key={leader._id ?? idx}
//                   className="leader-animate"
//                   style={{ animationDelay: `${idx * 0.15}s` }}
//                 >
//                   <div className="relative rounded-[32px] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden">
//                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
//                     <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px]" />

//                     <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
//                       <div className="grid gap-8 lg:gap-12 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] items-start">
//                         {/* IMAGE */}
//                         <div className="flex justify-center lg:justify-start">
//                           <div className="relative">
//                             <div className="absolute -inset-3 sm:-inset-4 rounded-[28px] sm:rounded-[32px] border-2 border-dashed border-purple-300/30" />
//                             <div className="relative w-[280px] sm:w-[300px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900">
//                               <img
//                                 src={leader.profileImage}
//                                 alt={leader.name}
//                                 className="w-full h-[360px] object-cover"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
//                               <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-center">
//                                 <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
//                                   {leader.name}
//                                 </h3>
//                                 <p className="text-sm text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text font-medium">
//                                   {leader.designation}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* CONTENT */}
//                         <div className="space-y-6 mt-4 lg:mt-0">
//                           <div className="hidden lg:block">
//                             <p className="text-xs font-semibold tracking-[0.2em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-2">
//                               {leader.designation}
//                             </p>
//                             <h3 className="text-3xl xl:text-4xl font-bold text-white">
//                               {leader.name}
//                             </h3>
//                           </div>

//                           <div className="space-y-4">
//                             {(leader.bio ?? []).map((para, i) => (
//                               <p
//                                 key={i}
//                                 className="text-sm sm:text-base leading-relaxed text-white/70"
//                               >
//                                 {para}
//                               </p>
//                             ))}
//                           </div>

//                           {leader.quote && (
//                             <div className="relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-sky-500/5">
//                               <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-sky-400 flex items-center justify-center shadow-lg shadow-purple-500/20">
//                                 <Quote className="w-4 h-4 text-white" />
//                               </div>
//                               <p className="pt-2 text-sm sm:text-base md:text-lg italic text-white/80 leading-relaxed">
//                                 &ldquo;{leader.quote}&rdquo;
//                               </p>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* ==================== PRACTICE LEADERSHIP ==================== */}
//         <div>
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
//               Practice{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 Leadership
//               </span>
//             </h2>
//             <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-white/50">
//               Domain experts who lead our specialized practices and deliver
//               excellence to clients
//             </p>
//           </div>

//           {practiceLoading ? (
//             <div className="flex items-center justify-center py-20">
//               <Loader2 className="w-8 h-8 text-sky-400 animate-spin" />
//               <span className="ml-3 text-white/50 text-sm">
//                 Loading practice leaders…
//               </span>
//             </div>
//           ) : practiceError ? (
//             <div className="text-center py-20">
//               <p className="text-red-400 text-sm mb-4">{practiceError}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="rounded-full border border-sky-300/40 px-5 py-2 text-xs text-white hover:bg-sky-500/10 transition-all"
//               >
//                 Retry
//               </button>
//             </div>
//           ) : practiceLeaders.length === 0 ? (
//             <p className="text-center text-white/40 py-16">
//               No practice leaders found.
//             </p>
//           ) : (
//             <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
//               {practiceLeaders.map((leader, idx) => (
//                 <div
//                   key={leader._id ?? leader.id ?? idx}
//                   className="group practice-leader-animate"
//                   style={{ animationDelay: `${idx * 0.1}s` }}
//                 >
//                   <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4] bg-neutral-900">
//                     <img
//                       src={leader.image}
//                       alt={leader.name}
//                       className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                   </div>

//                   <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
//                     {leader.name}
//                   </h3>
//                   <p className="text-sm font-medium mb-3 text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                     {leader.role}
//                   </p>
//                   <p className="text-sm text-white/60 leading-relaxed mb-4">
//                     {leader.fullStory}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <style>{`
//         @keyframes leaderFadeUp {
//           0% { opacity: 0; transform: translateY(40px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .leader-animate {
//           animation: leaderFadeUp 0.9s ease-out both;
//         }
//         @keyframes practiceFadeUp {
//           0% { opacity: 0; transform: translateY(30px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .practice-leader-animate {
//           animation: practiceFadeUp 0.7s ease-out both;
//         }
//       `}</style>
//     </section>
//   );
// };
