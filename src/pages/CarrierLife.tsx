// "use client";

// import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
// import { useEffect, useState } from "react";
// import { CheckCircle2, Lightbulb } from "lucide-react";

// interface CarrierLifeProps {
//   navigateTo: (page: string) => void;
// }

// const HERO_IMAGES = [
//   { src: "/images/Herobanner1.jpeg", alt: "CJSS team collaborating" },
//   { src: "/images/Herobanner2.jpeg", alt: "Innovation brainstorming session" },
//   { src: "/images/Herobanner3.jpg", alt: "CJSS culture celebration" },
// ];

// type PodId = "demos" | "critiques" | "coinnovation";

// interface PodItem {
//   id: PodId;
//   label: string;
//   eyebrow: string;
//   title: string;
//   description: string;
//   bullets: string[];
//   image: string;
// }

// const POD_ITEMS: PodItem[] = [
//   {
//     id: "demos",
//     label: "Weekly demos",
//     eyebrow: "Inside pods",
//     title: "Show the work, every week",
//     description:
//       "Pods run weekly demos where engineers, designers, and product owners walk through what was shipped, what is in progress, and what is coming next. It keeps feedback fast and momentum high.",
//     bullets: [
//       "Short, focused walkthroughs instead of long presentations.",
//       "Stakeholders see real product, not just slides or documents.",
//       "Teams celebrate progress and spot improvements early.",
//     ],
//     image: "/images/weekly-demos.jpg",
//   },
//   {
//     id: "critiques",
//     label: "Design critiques",
//     eyebrow: "Inside pods",
//     title: "Sharpen ideas with honest critique",
//     description:
//       "Design critiques bring product, design, and engineering together to stress-test flows, copy, and interactions. The aim is to make the experience clearer.",
//     bullets: [
//       "Open, respectful discussions focused on the work, not the person.",
//       "Multiple perspectives that uncover edge cases and UX friction.",
//       "Decisions documented so everyone knows what we're shipping and why.",
//     ],
//     image: "/images/design-critiques.jpg",
//   },
//   {
//     id: "coinnovation",
//     label: "Co-innovation sessions",
//     eyebrow: "Inside pods",
//     title: "Build with customers, not for them",
//     description:
//       "In co-innovation sessions, pods work side-by-side with customers to explore ideas, prototype quickly, and validate what truly solves their problems.",
//     bullets: [
//       "Customers, product, and engineering in the same conversation.",
//       "Sketches, prototypes, and experiments instead of long specs.",
//       "Shared ownership of the solution from day one.",
//     ],
//     image: "/images/co-innovation.jpg",
//   },
// ];

// const LIFE_SECTIONS = [
//   {
//     id: "culture",
//     cardTitle: "Culture & Values",
//     subtitle: "TRUST & ACCOUNTABILITY",
//     description:
//       "We foster a culture built on trust, accountability, and openness. Teams are encouraged to share ideas, challenge assumptions, and take ownership of their work. We value integrity, collaboration, and respect, creating an environment where diverse perspectives are welcomed and every voice matters.",
//     image: "/images/careerlife/values1.jpeg",
//   },
//   {
//     id: "learning",
//     cardTitle: "Learning & Growth",
//     subtitle: "CONTINUOUS DEVELOPMENT",
//     description:
//       "Continuous learning is central to life at CJSS. We invest in skill development through structured learning paths, hands-on project exposure, mentoring, and opportunities to work across technologies and domains. Whether you are deepening technical expertise or growing into leadership roles, we support long-term career progression aligned with individual goals.",
//     image: "/images/careerlife/values2.jpeg",
//   },
//   {
//     id: "impact",
//     cardTitle: "Meaningful Impact",
//     subtitle: "WORK THAT MATTERS",
//     description:
//       "Our teams work on complex, enterprise-scale challenges that directly impact how businesses operate and grow. From modernizing digital platforms to enabling scalable commerce and experience solutions, employees see the real-world impact of their contributions across industries and markets.",

//     image: "/images/careerlife/values3.jpeg",
//   },
//   {
//     id: "collaboration",
//     cardTitle: "Collaboration",
//     subtitle: "BETTER TOGETHER",
//     description:
//       "We believe the best outcomes are achieved together. Cross-functional collaboration is embedded into how we work, bringing together engineering, design, quality, and operations teams to solve problems collectively. Open communication and shared responsibility define our team dynamics.",
//     image: "/images/careerlife/values4.jpeg",
//   },
//   {
//     id: "flexibility",
//     cardTitle: "Flexibility",
//     subtitle: "BALANCE & FREEDOM",
//     description:
//       "We promote a flexible and inclusive work environment that respects individual needs and work styles. Our approach balances productivity with well-being, enabling teams to perform at their best while maintaining a healthy work-life balance.",
//     image: "/images/careerlife/values5.jpeg",
//   },
//   {
//     id: "diversity",
//     cardTitle: "Diversity",
//     subtitle: "EVERYONE BELONGS",
//     description:
//       "We are committed to building an inclusive workplace where differences are respected and valued. Our teams reflect diverse backgrounds, experiences, and perspectives, fostering innovation and mutual respect across the organization.",
//     image: "/images/careerlife/values6.jpeg",
//   },
//   {
//     id: "recognition",
//     cardTitle: "Recognition",
//     subtitle: "CELEBRATING EXCELLENCE",
//     description:
//       "We recognize and celebrate contributions that drive excellence, collaboration, and innovation. Performance is acknowledged through growth opportunities, career advancement, and meaningful recognition that reinforces our shared values.",
//     image: "/images/careerlife/values7.jpeg",
//   },
// ];

// const CarierLife = ({ navigateTo }: CarrierLifeProps) => {
//   const links = [
//     { label: "Home", page: "CarrierHome" },
//     { label: "Life at CJSS", page: "CarrierLife" },
//     { label: "Jobs", page: "CarrierFresher" },
//     { label: "Problems we solve", page: "CarrierProblems" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activePod, setActivePod] = useState<PodId>("demos");
//   const [heroOpacity, setHeroOpacity] = useState(1);

//   // Hero image slideshow
//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
//       5000,
//     );
//     return () => clearInterval(interval);
//   }, []);

//   // Scroll effect for hero fade
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       const halfScreen = windowHeight * 0.5;
//       let opacity;

//       if (scrollY <= halfScreen) {
//         opacity = 1 - (scrollY / halfScreen) * 0.9;
//       } else {
//         const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
//         opacity = 0.1 - secondHalfProgress * 0.1;
//       }

//       setHeroOpacity(Math.max(0, Math.min(1, opacity)));
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScrollToLife = () => {
//     const section = document.getElementById("life-section");
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <CareerNavigationBar
//         links={links}
//         navigateTo={navigateTo}
//         activePage="CarrierLife"
//       />

//       {/* =====================================================
//           FIXED HERO SECTION (with scroll fade)
//       ===================================================== */}
//       <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
//         <section className="relative w-full h-screen overflow-hidden">
//           {/* Background Images Slideshow */}
//           <div className="absolute inset-0 -z-10 overflow-hidden">
//             {HERO_IMAGES.map((img, index) => (
//               <div
//                 key={img.src}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
//                   index === currentIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className={`
//                     object-cover w-full h-full transform-gpu
//                     transition-transform duration-[5000ms] ease-out
//                     ${index === currentIndex ? "scale-110" : "scale-100"}
//                   `}
//                 />
//               </div>
//             ))}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
//           </div>

//           {/* Hero Content */}
//           <div className="relative z-10 flex h-full max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto pt-20">
//             <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/80 font-semibold">
//               Life at CJSS
//             </span>

//             {/* HERO HEADING - Gradient */}
//             <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 BUILD THE FUTURE WITH US
//               </span>
//             </h1>

//             <p className="max-w-2xl mt-4 text-xs sm:text-sm md:text-base text-white/70">
//               Join a workplace where passion meets purpose and people grow
//               together.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
//               <button
//                 onClick={handleScrollToLife}
//                 className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//               >
//                 Discover Our Culture
//               </button>
//             </div>

//             {/* Carousel Dots */}
//             <div className="flex gap-2 mt-6 sm:mt-8">
//               {HERO_IMAGES.map((_, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`h-1.5 rounded-full cursor-pointer transition-all ${
//                     currentIndex === index
//                       ? "w-6 bg-gradient-to-r from-purple-300 to-sky-300"
//                       : "w-2 bg-white/40 hover:bg-white/70"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Spacer for hero height */}
//       <div className="h-screen" />

//       {/* =====================================================
//           CONTENT SECTIONS (scroll over hero)
//       ===================================================== */}
//       <div className="relative z-10">
//         <main className="relative w-full min-h-screen overflow-hidden text-white bg-black rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]">
//           {/* Background */}
//           <div className="absolute inset-0 pointer-events-none -z-20">
//             <div className="absolute inset-0 bg-black" />
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
//           </div>

//           {/* ─────────────── SECTION 2 — LIFE AT CJSS INTRO ─────────────── */}
//           <section
//             id="life-section"
//             className="relative z-10 w-full overflow-hidden bg-black py-20 sm:py-28"
//           >
//             <div className="max-w-5xl px-4 mx-auto sm:px-6">
//               <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-10 sm:p-14 md:p-20 overflow-hidden">
//                 <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
//                 <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-sky-500/8 rounded-full blur-[80px] pointer-events-none" />

//                 <div className="relative text-center">
//                   {/* SECTION HEADING - Gradient */}
//                   <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                     Life at CJSS
//                   </h2>

//                   <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-white/80">
//                     Where Passion Meets Purpose
//                   </p>

//                   <p className="max-w-3xl mx-auto mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-white/70">
//                     At CJSS, we believe great digital solutions are built by
//                     people who feel{" "}
//                     <span className="text-white font-medium">empowered</span>,{" "}
//                     <span className="text-white font-medium">supported</span>,
//                     and <span className="text-white font-medium">inspired</span>
//                     . Our culture is shaped by{" "}
//                     <span className="text-white font-medium">
//                       collaboration
//                     </span>
//                     ,{" "}
//                     <span className="text-white font-medium">
//                       continuous learning
//                     </span>
//                     , and a shared commitment to delivering meaningful impact
//                     for our clients and communities.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* ─────────────── SECTION 3 — VALUES CARDS (Diagonal Blur Effect) ─────────────── */}
//           <section className="relative z-10 w-full overflow-hidden bg-black py-16 sm:py-20">
//             <div className="max-w-6xl px-4 mx-auto sm:px-6">
//               {/* Section Header - Gradient */}
//               <div className="text-center mb-12">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                   Our Values & Culture
//                 </h2>
//               </div>

//               {/* Cards Grid */}
//               <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {LIFE_SECTIONS.map((item) => (
//                   <div
//                     key={item.id}
//                     className="value-card group relative h-[300px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer"
//                   >
//                     {/* Background Image - Clear */}
//                     <img
//                       src={item.image}
//                       alt={item.cardTitle}
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />

//                     {/* Diagonal Blur Overlay - Clear left to Blur right */}
//                     <div className="absolute inset-0 diagonal-blur-overlay" />

//                     {/* Dark gradient for text readability */}
//                     <div
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/80"
//                       style={{
//                         clipPath: "polygon(30% 0, 100% 0, 100% 100%, 10% 100%)",
//                       }}
//                     />

//                     {/* Diagonal line accent */}
//                     <div
//                       className="absolute inset-0 pointer-events-none"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 40.5%, rgba(255,255,255,0.1) 41%, transparent 41.5%)",
//                       }}
//                     />

//                     {/* Default State - Title & Subtitle */}
//                     <div className="card-default absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-400">
//                       {/* Title - Bottom Left */}
//                       <div className="max-w-[55%]">
//                         <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
//                           {item.cardTitle}
//                         </h3>
//                         {/* <div className="mt-3 inline-block bg-white px-4 py-1.5 shadow-lg">
//                           <span className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider">
//                             {item.subtitle}
//                           </span>
//                         </div> */}
//                         <div className="mt-4 inline-flex items-center rounded-full border border-white/30 bg-white/25 px-6 py-2 backdrop-blur-md shadow-lg">
//                           <span className="text-xs font-semibold text-white uppercase tracking-widest">
//                             {item.subtitle}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Hover State - Only Description Text */}
//                     <div className="card-hover absolute inset-0 bg-black/90 flex items-center justify-center p-6 sm:p-8 opacity-0 transition-opacity duration-400">
//                       <p className="text-sm sm:text-base text-white/90 text-center leading-relaxed max-w-md">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ─────────────── SECTION 4 — WHY JOIN CTA ─────────────── */}
//           <section className="relative z-10 w-full overflow-hidden bg-black py-16 sm:py-20">
//             <div className="max-w-6xl px-4 mx-auto sm:px-6">
//               <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-r from-purple-500/5 via-transparent to-sky-500/5 p-8 sm:p-12 overflow-hidden">
//                 <div
//                   className="absolute inset-0 opacity-[0.03]"
//                   style={{
//                     backgroundImage: `radial-gradient(rgba(168,85,247,0.5) 1px, transparent 1px)`,
//                     backgroundSize: "24px 24px",
//                   }}
//                 />

//                 <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
//                 <div
//                   className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/15 rounded-full blur-[80px] animate-pulse"
//                   style={{ animationDelay: "1s" }}
//                 />

//                 <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//                   <div className="max-w-2xl">
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500">
//                         <Lightbulb className="w-5 h-5 text-white" />
//                       </div>
//                       <span className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
//                         Join Our Team
//                       </span>
//                     </div>
//                     {/* CTA HEADING - Gradient */}
//                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                       Why Join CJSS?
//                     </h3>
//                     <p className="text-sm sm:text-base text-white/60 leading-relaxed">
//                       Life at CJSS offers the opportunity to work with modern
//                       technologies, collaborate with talented professionals, and
//                       grow in an environment that values learning and purpose.
//                       We create space for individuals to thrive while
//                       collectively building solutions that shape the future of
//                       digital platforms and enterprise systems.
//                     </p>

//                     <div className="mt-6 space-y-2">
//                       <div className="flex items-center gap-2 text-[11px] text-white/80">
//                         <CheckCircle2 className="w-3.5 h-3.5" />
//                         <span>Work on enterprise-scale challenges</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-white/80">
//                         <CheckCircle2 className="w-3.5 h-3.5" />
//                         <span>Continuous learning & career growth</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-[11px] text-white/80">
//                         <CheckCircle2 className="w-3.5 h-3.5" />
//                         <span>Flexible, inclusive work environment</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-3 sm:gap-4">
//                     <button
//                       onClick={() => navigateTo("CarrierFresher")}
//                       className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                     >
//                       View Open Positions
//                     </button>
//                     <button
//                       onClick={() => navigateTo("CarrierProblems")}
//                       className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                     >
//                       Problems We Solve
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* ─────────────── SECTION 5 — INSIDE PODS ─────────────── */}
//           <section
//             id="inside-pods"
//             className="relative z-10 w-full overflow-hidden"
//           >
//             <div className="absolute inset-0 pointer-events-none -z-10">
//               <div className="absolute left-[-5%] top-[10%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
//               <div className="absolute right-[-8%] bottom-[5%] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
//             </div>

//             <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20">
//               <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-white/80 uppercase">
//                 Inside pods
//               </p>

//               <div className="max-w-2xl mt-4">
//                 {/* SECTION HEADING - Gradient */}
//                 <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                   Inside pods: where collaboration happens
//                 </h2>
//                 <p className="mt-3 text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base text-white/80">
//                   Pods at CJSS are cross-functional teams that run like small
//                   studios. Every week they demo, critique, and co-create —
//                   keeping the work visible, the feedback honest, and the ideas
//                   moving.
//                 </p>
//               </div>

//               <div className="grid gap-8 sm:gap-10 mt-8 sm:mt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
//                 {/* LEFT: pod selector pills */}
//                 <div className="space-y-4">
//                   <p className="text-[10px] sm:text-xs font-semibold text-white/60 uppercase tracking-[0.18em]">
//                     Rituals inside a pod
//                   </p>

//                   <div className="mt-2 space-y-3">
//                     {POD_ITEMS.map((pod) => (
//                       <button
//                         key={pod.id}
//                         type="button"
//                         onClick={() => setActivePod(pod.id)}
//                         className={`w-full text-left rounded-2xl border px-3 sm:px-4 py-3 transition-all duration-300 flex items-center justify-between gap-3 ${
//                           activePod === pod.id
//                             ? "border-purple-400/50 bg-[#0a0a0a]/90 shadow-[0_18px_55px_rgba(168,85,247,0.20)]"
//                             : "border-white/10 bg-[#0a0a0a]/70 hover:border-white/30 hover:bg-[#0a0a0a]/90"
//                         }`}
//                       >
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`h-8 w-8 rounded-xl flex items-center justify-center text-[11px] sm:text-[13px] font-semibold ${
//                               activePod === pod.id
//                                 ? "bg-gradient-to-br from-purple-400 to-sky-400 text-black"
//                                 : "bg-white/10 text-white"
//                             }`}
//                           >
//                             {pod.label
//                               .split(" ")
//                               .map((w) => w[0])
//                               .join("")
//                               .slice(0, 2)}
//                           </div>
//                           <div>
//                             <div
//                               className={`text-xs font-medium sm:text-sm ${
//                                 activePod === pod.id
//                                   ? "text-white"
//                                   : "text-white/80"
//                               }`}
//                             >
//                               {pod.label}
//                             </div>
//                             <div className="text-[10px] sm:text-[11px] text-white/50">
//                               {pod.id === "demos" &&
//                                 "Weekly snapshots of real progress."}
//                               {pod.id === "critiques" &&
//                                 "Honest feedback that sharpens the work."}
//                               {pod.id === "coinnovation" &&
//                                 "Customers in the room, not on the sidelines."}
//                             </div>
//                           </div>
//                         </div>
//                         <span
//                           className={`h-1.5 w-1.5 rounded-full ${
//                             activePod === pod.id
//                               ? "bg-gradient-to-r from-purple-400 to-sky-400"
//                               : "bg-white/30"
//                           }`}
//                         />
//                       </button>
//                     ))}
//                   </div>

//                   <p className="mt-4 text-[11px] sm:text-xs text-white/50">
//                     Switch between pods to see how weekly demos, design
//                     critiques, and co-innovation sessions feel from the inside.
//                   </p>
//                 </div>

//                 {/* RIGHT: active pod panel */}
//                 <div className="relative">
//                   {(() => {
//                     const active =
//                       POD_ITEMS.find((p) => p.id === activePod) ?? POD_ITEMS[0];
//                     return (
//                       <div
//                         key={active.id}
//                         className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#0a0a0a]/90 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl"
//                         style={{ animation: "podFade 0.4s ease-out" }}
//                       >
//                         <div className="flex flex-col md:flex-row h-auto md:h-[420px] lg:h-[480px]">
//                           {/* IMAGE */}
//                           <div className="relative w-full overflow-hidden h-52 sm:h-60 md:h-full md:w-1/2">
//                             <img
//                               src={active.image}
//                               alt={active.label}
//                               className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                             />
//                             <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/70 via-transparent to-purple-400/20" />
//                             <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] sm:text-[11px] text-white border border-white/20">
//                               {active.label}
//                             </span>
//                           </div>

//                           {/* CONTENT */}
//                           <div className="relative flex flex-col justify-center w-full h-auto gap-1 px-4 py-5 md:h-full sm:px-6 sm:py-6 md:w-1/2 md:px-8">
//                             <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
//                               {active.eyebrow}
//                             </span>

//                             {/* POD TITLE - Gradient */}
//                             <h3 className="text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold leading-snug sm:leading-tight text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                               {active.title}
//                             </h3>

//                             <p className="text-xs leading-relaxed sm:text-sm text-white/80">
//                               {active.description}
//                             </p>

//                             <ul className="mt-2 space-y-1.5 text-[11px] sm:text-xs md:text-sm text-white/80">
//                               {active.bullets.map((bullet, idx) => (
//                                 <li
//                                   key={idx}
//                                   className="flex gap-2 translate-y-2 opacity-0"
//                                   style={{
//                                     animation: `podBullet 0.35s ease-out ${
//                                       0.1 + idx * 0.06
//                                     }s forwards`,
//                                   }}
//                                 >
//                                   <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-sky-400" />
//                                   <span>{bullet}</span>
//                                 </li>
//                               ))}
//                             </ul>

//                             <p className="mt-3 text-[10px] sm:text-[11px] text-white/50">
//                               These rituals keep pods aligned, honest, and
//                               always moving forward.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })()}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>

//       {/* Component-scoped CSS */}
//       <style>{`
//         @keyframes podFade {
//           0% {
//             opacity: 0;
//             transform: translateY(16px) scale(0.96);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes podBullet {
//           0% {
//             opacity: 0;
//             transform: translateY(6px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .diagonal-blur-overlay {
//           background: linear-gradient(
//             115deg,
//             transparent 0%,
//             transparent 35%,
//             rgba(0, 0, 0, 0.3) 45%,
//             rgba(0, 0, 0, 0.6) 60%,
//             rgba(0, 0, 0, 0.85) 100%
//           );
//           backdrop-filter: blur(0px);
//           -webkit-backdrop-filter: blur(0px);
//           mask-image: linear-gradient(
//             115deg,
//             transparent 0%,
//             transparent 30%,
//             black 50%,
//             black 100%
//           );
//           -webkit-mask-image: linear-gradient(
//             115deg,
//             transparent 0%,
//             transparent 30%,
//             black 50%,
//             black 100%
//           );
//         }

//         .value-card::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: inherit;
//           filter: blur(8px);
//           clip-path: polygon(40% 0, 100% 0, 100% 100%, 20% 100%);
//           z-index: 1;
//           opacity: 0.7;
//         }

//         .value-card {
//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//         }

//         .value-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
//         }

//         .value-card:hover .card-default {
//           opacity: 0;
//         }

//         .value-card:hover .card-hover {
//           opacity: 1;
//         }
//       `}</style>
//     </>
//   );
// };

// export default CarierLife;
"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Lightbulb } from "lucide-react";
import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";

const HERO_IMAGES = [
  { src: "/images/Herobanner1.jpeg", alt: "CJSS team collaborating" },
  { src: "/images/Herobanner2.jpeg", alt: "Innovation brainstorming session" },
  { src: "/images/Herobanner3.jpg", alt: "CJSS culture celebration" },
];

type PodId = "demos" | "critiques" | "coinnovation";

interface PodItem {
  id: PodId;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const POD_ITEMS: PodItem[] = [
  {
    id: "demos",
    label: "Weekly demos",
    eyebrow: "Inside pods",
    title: "Show the work, every week",
    description:
      "Pods run weekly demos where engineers, designers, and product owners walk through what was shipped, what is in progress, and what is coming next. It keeps feedback fast and momentum high.",
    bullets: [
      "Short, focused walkthroughs instead of long presentations.",
      "Stakeholders see real product, not just slides or documents.",
      "Teams celebrate progress and spot improvements early.",
    ],
    image: "/images/weekly-demos.jpg",
  },
  {
    id: "critiques",
    label: "Design critiques",
    eyebrow: "Inside pods",
    title: "Sharpen ideas with honest critique",
    description:
      "Design critiques bring product, design, and engineering together to stress-test flows, copy, and interactions. The aim is to make the experience clearer.",
    bullets: [
      "Open, respectful discussions focused on the work, not the person.",
      "Multiple perspectives that uncover edge cases and UX friction.",
      "Decisions documented so everyone knows what we're shipping and why.",
    ],
    image: "/images/design-critiques.jpg",
  },
  {
    id: "coinnovation",
    label: "Co-innovation sessions",
    eyebrow: "Inside pods",
    title: "Build with customers, not for them",
    description:
      "In co-innovation sessions, pods work side-by-side with customers to explore ideas, prototype quickly, and validate what truly solves their problems.",
    bullets: [
      "Customers, product, and engineering in the same conversation.",
      "Sketches, prototypes, and experiments instead of long specs.",
      "Shared ownership of the solution from day one.",
    ],
    image: "/images/co-innovation.jpg",
  },
];

const LIFE_SECTIONS = [
  {
    id: "culture",
    cardTitle: "Culture & Values",
    subtitle: "TRUST & ACCOUNTABILITY",
    description:
      "We foster a culture built on trust, accountability, and openness. Teams are encouraged to share ideas, challenge assumptions, and take ownership of their work. We value integrity, collaboration, and respect, creating an environment where diverse perspectives are welcomed and every voice matters.",
    image: "/images/careerlife/values1.jpeg",
  },
  {
    id: "learning",
    cardTitle: "Learning & Growth",
    subtitle: "CONTINUOUS DEVELOPMENT",
    description:
      "Continuous learning is central to life at CJSS. We invest in skill development through structured learning paths, hands-on project exposure, mentoring, and opportunities to work across technologies and domains. Whether you are deepening technical expertise or growing into leadership roles, we support long-term career progression aligned with individual goals.",
    image: "/images/careerlife/values2.jpeg",
  },
  {
    id: "impact",
    cardTitle: "Meaningful Impact",
    subtitle: "WORK THAT MATTERS",
    description:
      "Our teams work on complex, enterprise-scale challenges that directly impact how businesses operate and grow. From modernizing digital platforms to enabling scalable commerce and experience solutions, employees see the real-world impact of their contributions across industries and markets.",
    image: "/images/careerlife/values3.jpeg",
  },
  {
    id: "collaboration",
    cardTitle: "Collaboration",
    subtitle: "BETTER TOGETHER",
    description:
      "We believe the best outcomes are achieved together. Cross-functional collaboration is embedded into how we work, bringing together engineering, design, quality, and operations teams to solve problems collectively. Open communication and shared responsibility define our team dynamics.",
    image: "/images/careerlife/values4.jpeg",
  },
  {
    id: "flexibility",
    cardTitle: "Flexibility",
    subtitle: "BALANCE & FREEDOM",
    description:
      "We promote a flexible and inclusive work environment that respects individual needs and work styles. Our approach balances productivity with well-being, enabling teams to perform at their best while maintaining a healthy work-life balance.",
    image: "/images/careerlife/values5.jpeg",
  },
  {
    id: "diversity",
    cardTitle: "Diversity",
    subtitle: "EVERYONE BELONGS",
    description:
      "We are committed to building an inclusive workplace where differences are respected and valued. Our teams reflect diverse backgrounds, experiences, and perspectives, fostering innovation and mutual respect across the organization.",
    image: "/images/careerlife/values6.jpeg",
  },
  {
    id: "recognition",
    cardTitle: "Recognition",
    subtitle: "CELEBRATING EXCELLENCE",
    description:
      "We recognize and celebrate contributions that drive excellence, collaboration, and innovation. Performance is acknowledged through growth opportunities, career advancement, and meaningful recognition that reinforces our shared values.",
    image: "/images/careerlife/values7.jpeg",
  },
];

const CareerLife = () => {
  const navigate = useNavigate();

  // Navigation links with proper routes
  const links = [
    { label: "Home", path: "/careers" },
    { label: "Life at CJSS", path: "/careers/life" },
    { label: "Jobs", path: "/careers/jobs" },
    { label: "Problems we solve", path: "/careers/problemsWeSolve" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePod, setActivePod] = useState<PodId>("demos");
  const [heroOpacity, setHeroOpacity] = useState(1);

  // Hero image slideshow
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      5000,
    );
    return () => clearInterval(interval);
  }, []);

  // Scroll effect for hero fade
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToLife = () => {
    const section = document.getElementById("life-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <CareerNavigationBar links={links} activePage="/careers/life" />

      {/* =====================================================
          FIXED HERO SECTION (with scroll fade)
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        <section className="relative w-full h-screen overflow-hidden">
          {/* Background Images Slideshow */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {HERO_IMAGES.map((img, index) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`
                    object-cover w-full h-full transform-gpu
                    transition-transform duration-[5000ms] ease-out
                    ${index === currentIndex ? "scale-110" : "scale-100"}
                  `}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex h-full max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto pt-20">
            <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/80 font-semibold">
              Life at CJSS
            </span>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                BUILD THE FUTURE WITH US
              </span>
            </h1>

            <p className="max-w-2xl mt-4 text-xs sm:text-sm md:text-base text-white/70">
              Join a workplace where passion meets purpose and people grow
              together.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
              <button
                onClick={handleScrollToLife}
                className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
              >
                Discover Our Culture
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 mt-6 sm:mt-8">
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all ${
                    currentIndex === index
                      ? "w-6 bg-gradient-to-r from-purple-300 to-sky-300"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Spacer for hero height */}
      <div className="h-screen" />

      {/* =====================================================
          CONTENT SECTIONS (scroll over hero)
      ===================================================== */}
      <div className="relative z-10">
        <main className="relative w-full min-h-screen overflow-hidden text-white bg-black rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none -z-20">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
          </div>

          {/* ─────────────── SECTION 2 — LIFE AT CJSS INTRO ─────────────── */}
          <section
            id="life-section"
            className="relative z-10 w-full overflow-hidden bg-black py-20 sm:py-28"
          >
            <div className="max-w-5xl px-4 mx-auto sm:px-6">
              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-10 sm:p-14 md:p-20 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-sky-500/8 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative text-center">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                    Life at CJSS
                  </h2>

                  <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-white/80">
                    Where Passion Meets Purpose
                  </p>

                  <p className="max-w-3xl mx-auto mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-white/70">
                    At CJSS, we believe great digital solutions are built by
                    people who feel{" "}
                    <span className="text-white font-medium">empowered</span>,{" "}
                    <span className="text-white font-medium">supported</span>,
                    and <span className="text-white font-medium">inspired</span>
                    . Our culture is shaped by{" "}
                    <span className="text-white font-medium">
                      collaboration
                    </span>
                    ,{" "}
                    <span className="text-white font-medium">
                      continuous learning
                    </span>
                    , and a shared commitment to delivering meaningful impact
                    for our clients and communities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────── SECTION 3 — VALUES CARDS ─────────────── */}
          <section className="relative z-10 w-full overflow-hidden bg-black py-16 sm:py-20">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Our Values & Culture
                </h2>
              </div>

              <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {LIFE_SECTIONS.map((item) => (
                  <div
                    key={item.id}
                    className="value-card group relative h-[300px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.cardTitle}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 diagonal-blur-overlay" />

                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/80"
                      style={{
                        clipPath: "polygon(30% 0, 100% 0, 100% 100%, 10% 100%)",
                      }}
                    />

                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 40.5%, rgba(255,255,255,0.1) 41%, transparent 41.5%)",
                      }}
                    />

                    <div className="card-default absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-400">
                      <div className="max-w-[55%]">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                          {item.cardTitle}
                        </h3>
                        <div className="mt-4 inline-flex items-center rounded-full border border-white/30 bg-white/25 px-6 py-2 backdrop-blur-md shadow-lg">
                          <span className="text-xs font-semibold text-white uppercase tracking-widest">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card-hover absolute inset-0 bg-black/90 flex items-center justify-center p-6 sm:p-8 opacity-0 transition-opacity duration-400">
                      <p className="text-sm sm:text-base text-white/90 text-center leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─────────────── SECTION 4 — WHY JOIN CTA ─────────────── */}
          <section className="relative z-10 w-full overflow-hidden bg-black py-16 sm:py-20">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-r from-purple-500/5 via-transparent to-sky-500/5 p-8 sm:p-12 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(rgba(168,85,247,0.5) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
                <div
                  className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/15 rounded-full blur-[80px] animate-pulse"
                  style={{ animationDelay: "1s" }}
                />

                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500">
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                        Join Our Team
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                      Why Join CJSS?
                    </h3>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                      Life at CJSS offers the opportunity to work with modern
                      technologies, collaborate with talented professionals, and
                      grow in an environment that values learning and purpose.
                      We create space for individuals to thrive while
                      collectively building solutions that shape the future of
                      digital platforms and enterprise systems.
                    </p>

                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Work on enterprise-scale challenges</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Continuous learning & career growth</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Flexible, inclusive work environment</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button
                      onClick={() => handleNavigate("/careers/jobs")}
                      className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                    >
                      View Open Positions
                    </button>
                    <button
                      onClick={() => handleNavigate("/careers/problemsWeSolve")}
                      className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                    >
                      Problems We Solve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────── SECTION 5 — INSIDE PODS ─────────────── */}
          <section
            id="inside-pods"
            className="relative z-10 w-full overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none -z-10">
              <div className="absolute left-[-5%] top-[10%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="absolute right-[-8%] bottom-[5%] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
            </div>

            <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-white/80 uppercase">
                Inside pods
              </p>

              <div className="max-w-2xl mt-4">
                <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Inside pods: where collaboration happens
                </h2>
                <p className="mt-3 text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base text-white/80">
                  Pods at CJSS are cross-functional teams that run like small
                  studios. Every week they demo, critique, and co-create —
                  keeping the work visible, the feedback honest, and the ideas
                  moving.
                </p>
              </div>

              <div className="grid gap-8 sm:gap-10 mt-8 sm:mt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
                {/* LEFT: pod selector pills */}
                <div className="space-y-4">
                  <p className="text-[10px] sm:text-xs font-semibold text-white/60 uppercase tracking-[0.18em]">
                    Rituals inside a pod
                  </p>

                  <div className="mt-2 space-y-3">
                    {POD_ITEMS.map((pod) => (
                      <button
                        key={pod.id}
                        type="button"
                        onClick={() => setActivePod(pod.id)}
                        className={`w-full text-left rounded-2xl border px-3 sm:px-4 py-3 transition-all duration-300 flex items-center justify-between gap-3 ${
                          activePod === pod.id
                            ? "border-purple-400/50 bg-[#0a0a0a]/90 shadow-[0_18px_55px_rgba(168,85,247,0.20)]"
                            : "border-white/10 bg-[#0a0a0a]/70 hover:border-white/30 hover:bg-[#0a0a0a]/90"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-8 w-8 rounded-xl flex items-center justify-center text-[11px] sm:text-[13px] font-semibold ${
                              activePod === pod.id
                                ? "bg-gradient-to-br from-purple-400 to-sky-400 text-black"
                                : "bg-white/10 text-white"
                            }`}
                          >
                            {pod.label
                              .split(" ")
                              .map((w) => w[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <div>
                            <div
                              className={`text-xs font-medium sm:text-sm ${
                                activePod === pod.id
                                  ? "text-white"
                                  : "text-white/80"
                              }`}
                            >
                              {pod.label}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-white/50">
                              {pod.id === "demos" &&
                                "Weekly snapshots of real progress."}
                              {pod.id === "critiques" &&
                                "Honest feedback that sharpens the work."}
                              {pod.id === "coinnovation" &&
                                "Customers in the room, not on the sidelines."}
                            </div>
                          </div>
                        </div>
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            activePod === pod.id
                              ? "bg-gradient-to-r from-purple-400 to-sky-400"
                              : "bg-white/30"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <p className="mt-4 text-[11px] sm:text-xs text-white/50">
                    Switch between pods to see how weekly demos, design
                    critiques, and co-innovation sessions feel from the inside.
                  </p>
                </div>

                {/* RIGHT: active pod panel */}
                <div className="relative">
                  {(() => {
                    const active =
                      POD_ITEMS.find((p) => p.id === activePod) ?? POD_ITEMS[0];
                    return (
                      <div
                        key={active.id}
                        className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#0a0a0a]/90 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl"
                        style={{ animation: "podFade 0.4s ease-out" }}
                      >
                        <div className="flex flex-col md:flex-row h-auto md:h-[420px] lg:h-[480px]">
                          {/* IMAGE */}
                          <div className="relative w-full overflow-hidden h-52 sm:h-60 md:h-full md:w-1/2">
                            <img
                              src={active.image}
                              alt={active.label}
                              className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/70 via-transparent to-purple-400/20" />
                            <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] sm:text-[11px] text-white border border-white/20">
                              {active.label}
                            </span>
                          </div>

                          {/* CONTENT */}
                          <div className="relative flex flex-col justify-center w-full h-auto gap-1 px-4 py-5 md:h-full sm:px-6 sm:py-6 md:w-1/2 md:px-8">
                            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                              {active.eyebrow}
                            </span>

                            <h3 className="text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold leading-snug sm:leading-tight text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                              {active.title}
                            </h3>

                            <p className="text-xs leading-relaxed sm:text-sm text-white/80">
                              {active.description}
                            </p>

                            <ul className="mt-2 space-y-1.5 text-[11px] sm:text-xs md:text-sm text-white/80">
                              {active.bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2 translate-y-2 opacity-0"
                                  style={{
                                    animation: `podBullet 0.35s ease-out ${
                                      0.1 + idx * 0.06
                                    }s forwards`,
                                  }}
                                >
                                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-sky-400" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            <p className="mt-3 text-[10px] sm:text-[11px] text-white/50">
                              These rituals keep pods aligned, honest, and
                              always moving forward.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Component-scoped CSS */}
      <style>{`
        @keyframes podFade {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes podBullet {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .diagonal-blur-overlay {
          background: linear-gradient(
            115deg,
            transparent 0%,
            transparent 35%,
            rgba(0, 0, 0, 0.3) 45%,
            rgba(0, 0, 0, 0.6) 60%,
            rgba(0, 0, 0, 0.85) 100%
          );
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          mask-image: linear-gradient(
            115deg,
            transparent 0%,
            transparent 30%,
            black 50%,
            black 100%
          );
          -webkit-mask-image: linear-gradient(
            115deg,
            transparent 0%,
            transparent 30%,
            black 50%,
            black 100%
          );
        }

        .value-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(8px);
          clip-path: polygon(40% 0, 100% 0, 100% 100%, 20% 100%);
          z-index: 1;
          opacity: 0.7;
        }

        .value-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .value-card:hover .card-default {
          opacity: 0;
        }

        .value-card:hover .card-hover {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default CareerLife;
