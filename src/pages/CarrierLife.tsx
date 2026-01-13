// "use client";

// import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Target,
//   BookOpen,
//   Rocket,
//   Users,
//   Zap,
//   Globe,
//   Award,
//   Heart,
//   Lightbulb,
//   TrendingUp,
//   Shield,
//   Sparkles,
// } from "lucide-react";

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

// // Life at CJSS sections data - Enhanced with images and hover items
// const LIFE_SECTIONS = [
//   {
//     id: "culture",
//     label: "Culture & Values",
//     title: "Our Culture & Values",
//     cardTitle: "Built on Trust & Accountability",
//     icon: Target,
//     iconColor: "purple",
//     description:
//       "We foster a culture built on trust, accountability, and openness. Teams are encouraged to share ideas, challenge assumptions, and take ownership of their work.",
//     highlights:
//       "We value integrity, collaboration, and respect, creating an environment where diverse perspectives are welcomed and every voice matters. Our culture empowers individuals to take initiative and drive meaningful change.",
//     hoverItems: [
//       { text: "Open communication", color: "purple" },
//       { text: "Ownership mindset", color: "sky" },
//     ],
//     imageTags: [
//       { text: "Trust-first culture", color: "purple", icon: Heart },
//       { text: "Empowered teams", color: "sky", icon: Users },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: "learning",
//     label: "Learning & Growth",
//     title: "Learning, Growth & Career Development",
//     cardTitle: "Continuous Learning Journey",
//     icon: BookOpen,
//     iconColor: "sky",
//     description:
//       "Continuous learning is central to life at CJSS. We invest in skill development through structured learning paths, hands-on project exposure, mentoring, and opportunities to work across technologies and domains.",
//     highlights:
//       "Whether you are deepening technical expertise or growing into leadership roles, we support long-term career progression aligned with individual goals. Your growth is our priority.",
//     hoverItems: [
//       { text: "Structured mentoring", color: "sky" },
//       { text: "Cross-domain exposure", color: "purple" },
//     ],
//     imageTags: [
//       { text: "Skill development", color: "sky", icon: TrendingUp },
//       { text: "Career progression", color: "purple", icon: Award },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: "impact",
//     label: "Meaningful Impact",
//     title: "Meaningful Work & Real Impact",
//     cardTitle: "Work That Matters",
//     icon: Rocket,
//     iconColor: "purple",
//     description:
//       "Our teams work on complex, enterprise-scale challenges that directly impact how businesses operate and grow. From modernizing digital platforms to enabling scalable commerce and experience solutions.",
//     highlights:
//       "Employees see the real-world impact of their contributions across industries and markets. Every line of code, every design decision, and every solution we build creates tangible value for our clients and their customers.",
//     hoverItems: [
//       { text: "Enterprise-scale projects", color: "purple" },
//       { text: "Visible contributions", color: "sky" },
//     ],
//     imageTags: [
//       { text: "Real-world impact", color: "purple", icon: Rocket },
//       { text: "Industry leaders", color: "sky", icon: Sparkles },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: "collaboration",
//     label: "Collaboration & Teamwork",
//     title: "Collaboration & Teamwork",
//     cardTitle: "Better Together",
//     icon: Users,
//     iconColor: "sky",
//     description:
//       "We believe the best outcomes are achieved together. Cross-functional collaboration is embedded into how we work, bringing together engineering, design, quality, and operations teams to solve problems collectively.",
//     highlights:
//       "Open communication and shared responsibility define our team dynamics. We celebrate diverse perspectives and believe that the best ideas emerge when talented people work together toward common goals.",
//     hoverItems: [
//       { text: "Cross-functional teams", color: "sky" },
//       { text: "Shared ownership", color: "purple" },
//     ],
//     imageTags: [
//       { text: "Team synergy", color: "sky", icon: Users },
//       { text: "Collective success", color: "purple", icon: Heart },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: "flexibility",
//     label: "Work Environment",
//     title: "Work Environment & Flexibility",
//     cardTitle: "Balance & Freedom",
//     icon: Zap,
//     iconColor: "purple",
//     description:
//       "We promote a flexible and inclusive work environment that respects individual needs and work styles. Our approach balances productivity with well-being.",
//     highlights:
//       "We enable teams to perform at their best while maintaining a healthy work-life balance. Flexibility isn't just a perk—it's how we empower our people to do their best work, wherever they are.",
//     hoverItems: [
//       { text: "Flexible work model", color: "purple" },
//       { text: "Work-life balance", color: "sky" },
//     ],
//     imageTags: [
//       { text: "Hybrid workplace", color: "purple", icon: Zap },
//       { text: "Employee wellbeing", color: "sky", icon: Heart },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: "diversity",
//     label: "Diversity & Inclusion",
//     title: "Diversity, Inclusion & Belonging",
//     cardTitle: "Everyone Belongs Here",
//     icon: Globe,
//     iconColor: "sky",
//     description:
//       "We are committed to building an inclusive workplace where differences are respected and valued. Our teams reflect diverse backgrounds, experiences, and perspectives.",
//     highlights:
//       "Fostering innovation and mutual respect across the organization is core to who we are. We believe diversity drives creativity, and inclusion builds stronger teams that deliver better solutions.",
//     hoverItems: [
//       { text: "Inclusive culture", color: "sky" },
//       { text: "Diverse perspectives", color: "purple" },
//     ],
//     imageTags: [
//       { text: "Global mindset", color: "sky", icon: Globe },
//       { text: "Belonging", color: "purple", icon: Shield },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: "recognition",
//     label: "Recognition & Rewards",
//     title: "Recognition & Growth Opportunities",
//     cardTitle: "Celebrating Excellence",
//     icon: Award,
//     iconColor: "purple",
//     description:
//       "We recognize and celebrate contributions that drive excellence, collaboration, and innovation. Performance is acknowledged through growth opportunities and career advancement.",
//     highlights:
//       "Meaningful recognition reinforces our shared values and motivates continued excellence. From spot awards to promotion paths, we ensure great work never goes unnoticed.",
//     hoverItems: [
//       { text: "Performance recognition", color: "purple" },
//       { text: "Career advancement", color: "sky" },
//     ],
//     imageTags: [
//       { text: "Celebrate wins", color: "purple", icon: Award },
//       { text: "Growth paths", color: "sky", icon: TrendingUp },
//     ],
//     image:
//       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
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

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
//       5000
//     );
//     return () => clearInterval(interval);
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

//       {/* Push content down to avoid navbar overlap */}
//       <div className="h-[80px] md:h-[80px]"></div>

//       {/* GLOBAL BACKGROUND WRAPPER */}
//       <main className="relative w-full min-h-screen overflow-hidden text-white bg-black">
//         {/* unified gradient + grid for whole page */}
//         <div className="absolute inset-0 pointer-events-none -z-20">
//           <div className="absolute inset-0 bg-black" />
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         {/* ─────────────── SECTION 1 — HERO BANNER ─────────────── */}
//         <section className="relative z-10 w-full min-h-[100vh] overflow-hidden">
//           {/* Carousel background with zoom effect */}
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

//           <div className="relative z-10 flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
//             <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text font-semibold">
//               Life at CJSS
//             </span>

//             <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
//               BUILD THE{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                 FUTURE
//               </span>{" "}
//               WITH US
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

//         {/* ─────────────── SECTION 2 — LIFE AT CJSS INTRO ─────────────── */}
//         <section
//           id="life-section"
//           className="relative z-10 w-full overflow-hidden bg-[#050505] py-20 sm:py-28"
//         >
//           {/* Background Elements */}
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
//             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/8 rounded-full blur-[100px]" />
//             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[100px]" />
//           </div>

//           <div className="max-w-6xl px-4 mx-auto sm:px-6 relative">
//             {/* Main Card */}
//             <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12 md:p-16 overflow-hidden">
//               {/* Decorative corner accents */}
//               <div className="absolute top-0 left-0 w-32 h-32">
//                 <div className="absolute top-6 left-6 w-16 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
//                 <div className="absolute top-6 left-6 w-[1px] h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
//               </div>
//               <div className="absolute top-0 right-0 w-32 h-32">
//                 <div className="absolute top-6 right-6 w-16 h-[1px] bg-gradient-to-l from-sky-500/50 to-transparent" />
//                 <div className="absolute top-6 right-6 w-[1px] h-16 bg-gradient-to-b from-sky-500/50 to-transparent" />
//               </div>
//               <div className="absolute bottom-0 left-0 w-32 h-32">
//                 <div className="absolute bottom-6 left-6 w-16 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
//                 <div className="absolute bottom-6 left-6 w-[1px] h-16 bg-gradient-to-t from-purple-500/50 to-transparent" />
//               </div>
//               <div className="absolute bottom-0 right-0 w-32 h-32">
//                 <div className="absolute bottom-6 right-6 w-16 h-[1px] bg-gradient-to-l from-sky-500/50 to-transparent" />
//                 <div className="absolute bottom-6 right-6 w-[1px] h-16 bg-gradient-to-t from-sky-500/50 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="relative text-center">
//                 {/* Eyebrow */}
//                 <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
//                   Welcome to
//                 </p>

//                 {/* Main Title */}
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//                   Life at{" "}
//                   <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                     CJSS
//                   </span>
//                 </h2>

//                 {/* Gradient Subtitle */}
//                 <div className="mt-4 flex items-center justify-center gap-4">
//                   <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-purple-500" />
//                   <p className="text-xl sm:text-2xl md:text-3xl font-light text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text">
//                     Where Passion Meets Purpose
//                   </p>
//                   <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-sky-500" />
//                 </div>

//                 {/* Description */}
//                 <p className="max-w-3xl mx-auto mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/60">
//                   At CJSS, we believe great digital solutions are built by
//                   people who feel{" "}
//                   <span className="text-purple-300">empowered</span>,{" "}
//                   <span className="text-sky-300">supported</span>, and{" "}
//                   <span className="text-purple-300">inspired</span>. Our culture
//                   is shaped by collaboration, continuous learning, and a shared
//                   commitment to delivering meaningful impact for our clients and
//                   communities.
//                 </p>

//                 {/* Feature Pills */}
//                 <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
//                   {[
//                     { text: "Trust", color: "purple" },
//                     { text: "Growth", color: "sky" },
//                     { text: "Impact", color: "purple" },
//                     { text: "Collaboration", color: "sky" },
//                     { text: "Belonging", color: "purple" },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className={`group px-5 py-2.5 rounded-full border transition-all duration-300 cursor-default
//                         ${
//                           item.color === "purple"
//                             ? "border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10"
//                             : "border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/10"
//                         }`}
//                     >
//                       <span
//                         className={`text-sm font-medium transition-colors duration-300
//                           ${
//                             item.color === "purple"
//                               ? "text-purple-300/70 group-hover:text-purple-300"
//                               : "text-sky-300/70 group-hover:text-sky-300"
//                           }`}
//                       >
//                         {item.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Scroll Hint */}
//                 <div className="mt-12 flex flex-col items-center gap-2">
//                   <span className="text-xs text-white/30 tracking-wider uppercase">
//                     Explore What Makes Us Different
//                   </span>
//                   <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ─────────────── SECTION 3 — LIFE SECTIONS (Alternating Layout) ─────────────── */}
//         {LIFE_SECTIONS.map((item, index) => {
//           const IconComponent = item.icon;
//           const isReversed = index % 2 === 1;

//           return (
//             <section
//               key={item.id}
//               className="relative z-10 w-full overflow-hidden bg-[#050505]"
//             >
//               {/* BACKGROUND AMBIANCE */}
//               <div className="absolute inset-0 pointer-events-none -z-10">
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
//               </div>

//               <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
//                 {/* HEADER */}
//                 <div className="mb-8">
//                   <p
//                     className={`text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase ${
//                       item.iconColor === "purple"
//                         ? "text-purple-300"
//                         : "text-sky-300"
//                     }`}
//                   >
//                     {item.label}
//                   </p>

//                   <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl text-white">
//                     {item.title}
//                   </h2>
//                 </div>

//                 <div
//                   className={`grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch ${
//                     isReversed
//                       ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]"
//                       : ""
//                   }`}
//                 >
//                   {/* LEFT/RIGHT: SINGLE INTEGRATED CARD */}
//                   <div
//                     className={`flex flex-col ${
//                       isReversed ? "lg:order-2" : "lg:order-1"
//                     }`}
//                   >
//                     <div
//                       className={`h-full px-5 py-6 border sm:px-8 sm:py-8 life-card-animate life-delay-1 life-hover-card rounded-[32px] border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl`}
//                     >
//                       <div className="flex flex-col h-full gap-6">
//                         {/* ICON & TITLE AREA */}
//                         <div className="flex items-center gap-4">
//                           <div
//                             className={`flex items-center justify-center border shrink-0 h-12 w-12 rounded-2xl ${
//                               item.iconColor === "purple"
//                                 ? "bg-purple-500/15 border-purple-300/50"
//                                 : "bg-sky-500/15 border-sky-300/50"
//                             }`}
//                           >
//                             <IconComponent
//                               className={`w-6 h-6 ${
//                                 item.iconColor === "purple"
//                                   ? "text-purple-300"
//                                   : "text-sky-300"
//                               }`}
//                             />
//                           </div>
//                           <h3 className="text-lg font-semibold text-white">
//                             {item.cardTitle}
//                           </h3>
//                         </div>

//                         <div className="space-y-6 flex-1">
//                           {/* WHAT WE BELIEVE */}
//                           <div>
//                             <h4
//                               className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-3 ${
//                                 item.iconColor === "purple"
//                                   ? "text-purple-300"
//                                   : "text-sky-300"
//                               }`}
//                             >
//                               What We Believe
//                             </h4>
//                             <p className="text-sm leading-relaxed text-white/90">
//                               {item.description}
//                             </p>
//                           </div>

//                           {/* WHY IT MATTERS */}
//                           <div className="pt-6 border-t border-white/5">
//                             <h4
//                               className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-3 ${
//                                 item.iconColor === "purple"
//                                   ? "text-sky-300"
//                                   : "text-purple-300"
//                               }`}
//                             >
//                               Why It Matters
//                             </h4>
//                             <p className="text-sm leading-relaxed text-white/60">
//                               {item.highlights}
//                             </p>
//                           </div>
//                         </div>

//                         {/* HOVER CONTENT (Interactive items) */}
//                         <div className="life-hover-extra flex flex-wrap gap-4 pt-4 border-t border-white/5">
//                           {item.hoverItems.map((hoverItem, hoverIndex) => (
//                             <div
//                               key={hoverIndex}
//                               className={`flex items-center gap-2 text-[11px] ${
//                                 hoverItem.color === "purple"
//                                   ? "text-purple-300"
//                                   : "text-sky-300"
//                               }`}
//                             >
//                               {hoverIndex === 0 ? (
//                                 <CheckCircle2 className="w-3.5 h-3.5" />
//                               ) : (
//                                 <ArrowRight className="w-3.5 h-3.5" />
//                               )}
//                               <span>{hoverItem.text}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* RIGHT/LEFT: IMAGE AREA */}
//                   <div
//                     className={`relative h-64 lg:h-full min-h-[320px] ${
//                       isReversed ? "lg:order-1" : "lg:order-2"
//                     }`}
//                   >
//                     <div className="life-card-animate life-delay-2 life-hover-card relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/80">
//                       <div
//                         className={`absolute inset-0 z-10 ${
//                           item.iconColor === "purple"
//                             ? "bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80"
//                             : "bg-gradient-to-tl from-sky-500/10 via-transparent to-black/80"
//                         }`}
//                       />
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-105"
//                       />

//                       {/* IMAGE HOVER CONTENT */}
//                       <div className="life-hover-extra absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
//                         {item.imageTags.map((tag, tagIndex) => {
//                           const TagIcon = tag.icon;
//                           return (
//                             <span
//                               key={tagIndex}
//                               className={`inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 border text-[10px] text-white font-medium uppercase tracking-wider ${
//                                 tag.color === "purple"
//                                   ? "border-purple-300/40"
//                                   : "border-sky-300/40"
//                               }`}
//                             >
//                               <TagIcon
//                                 className={`w-3 h-3 ${
//                                   tag.color === "purple"
//                                     ? "text-purple-300"
//                                     : "text-sky-300"
//                                 }`}
//                               />
//                               {tag.text}
//                             </span>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Section Divider */}
//               {index < LIFE_SECTIONS.length - 1 && (
//                 <div className="max-w-6xl px-4 mx-auto sm:px-6">
//                   <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//                 </div>
//               )}
//             </section>
//           );
//         })}

//         {/* ─────────────── SECTION 4 — WHY JOIN CTA ─────────────── */}
//         <section className="relative z-10 w-full overflow-hidden bg-[#050505] py-16 sm:py-20">
//           <div className="max-w-6xl px-4 mx-auto sm:px-6">
//             <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-r from-purple-500/5 via-transparent to-sky-500/5 p-8 sm:p-12 overflow-hidden">
//               {/* Background pattern */}
//               <div
//                 className="absolute inset-0 opacity-[0.03]"
//                 style={{
//                   backgroundImage: `radial-gradient(rgba(168,85,247,0.5) 1px, transparent 1px)`,
//                   backgroundSize: "24px 24px",
//                 }}
//               />

//               {/* Animated orbs */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
//               <div
//                 className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/15 rounded-full blur-[80px] animate-pulse"
//                 style={{ animationDelay: "1s" }}
//               />

//               <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//                 <div className="max-w-2xl">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500">
//                       <Lightbulb className="w-5 h-5 text-white" />
//                     </div>
//                     <span className="text-xs font-semibold tracking-[0.2em] text-purple-300 uppercase">
//                       Join Our Team
//                     </span>
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
//                     Why Join{" "}
//                     <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                       CJSS?
//                     </span>
//                   </h3>
//                   <p className="text-sm sm:text-base text-white/60 leading-relaxed">
//                     Life at CJSS offers the opportunity to work with modern
//                     technologies, collaborate with talented professionals, and
//                     grow in an environment that values learning and purpose. We
//                     create space for individuals to thrive while collectively
//                     building solutions that shape the future of digital
//                     platforms and enterprise systems.
//                   </p>

//                   {/* Quick highlights */}
//                   <div className="mt-6 space-y-2">
//                     <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                       <CheckCircle2 className="w-3.5 h-3.5" />
//                       <span>Work on enterprise-scale challenges</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-sky-300">
//                       <CheckCircle2 className="w-3.5 h-3.5" />
//                       <span>Continuous learning & career growth</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-[11px] text-purple-300">
//                       <CheckCircle2 className="w-3.5 h-3.5" />
//                       <span>Flexible, inclusive work environment</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Updated Buttons - Same style as "Discover Our Culture" */}
//                 <div className="flex flex-wrap gap-3 sm:gap-4">
//                   <button
//                     onClick={() => navigateTo("CarrierFresher")}
//                     className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                   >
//                     View Open Positions
//                   </button>
//                   <button
//                     onClick={() => navigateTo("CarrierProblems")}
//                     className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//                   >
//                     Problems We Solve
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ─────────────── SECTION 5 — INSIDE PODS ─────────────── */}
//         <section
//           id="inside-pods"
//           className="relative z-10 w-full overflow-hidden"
//         >
//           {/* subtle local background accents */}
//           <div className="absolute inset-0 pointer-events-none -z-10">
//             <div className="absolute left-[-5%] top-[10%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
//             <div className="absolute right-[-8%] bottom-[5%] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
//           </div>

//           <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20">
//             <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase life-fade-up">
//               Inside pods
//             </p>

//             <div
//               className="max-w-2xl mt-4 life-fade-up"
//               style={{ animationDelay: "0.05s" }}
//             >
//               <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
//                 Inside pods:{" "}
//                 <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
//                   where collaboration happens
//                 </span>
//               </h2>
//               <p className="mt-3 text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base text-white/80">
//                 Pods at CJSS are cross-functional teams that run like small
//                 studios. Every week they demo, critique, and co-create — keeping
//                 the work visible, the feedback honest, and the ideas moving.
//               </p>
//             </div>

//             <div className="grid gap-8 sm:gap-10 mt-8 sm:mt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
//               {/* LEFT: pod selector pills */}
//               <div
//                 className="space-y-4 life-fade-up"
//                 style={{ animationDelay: "0.1s" }}
//               >
//                 <p className="text-[10px] sm:text-xs font-semibold text-white/60 uppercase tracking-[0.18em]">
//                   Rituals inside a pod
//                 </p>

//                 <div className="mt-2 space-y-3">
//                   {POD_ITEMS.map((pod) => (
//                     <button
//                       key={pod.id}
//                       type="button"
//                       onClick={() => setActivePod(pod.id)}
//                       className={`w-full text-left rounded-2xl border px-3 sm:px-4 py-3 transition-all duration-300 flex items-center justify-between gap-3 ${
//                         activePod === pod.id
//                           ? "border-purple-400/50 bg-[#0a0a0a]/90 shadow-[0_18px_55px_rgba(168,85,247,0.20)]"
//                           : "border-white/10 bg-[#0a0a0a]/70 hover:border-white/30 hover:bg-[#0a0a0a]/90"
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div
//                           className={`h-8 w-8 rounded-xl flex items-center justify-center text-[11px] sm:text-[13px] font-semibold ${
//                             activePod === pod.id
//                               ? "bg-gradient-to-br from-purple-400 to-sky-400 text-black"
//                               : "bg-white/10 text-white"
//                           }`}
//                         >
//                           {pod.label
//                             .split(" ")
//                             .map((w) => w[0])
//                             .join("")
//                             .slice(0, 2)}
//                         </div>
//                         <div>
//                           <div
//                             className={`text-xs font-medium sm:text-sm ${
//                               activePod === pod.id
//                                 ? "text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text"
//                                 : "text-white"
//                             }`}
//                           >
//                             {pod.label}
//                           </div>
//                           <div className="text-[10px] sm:text-[11px] text-white/50">
//                             {pod.id === "demos" &&
//                               "Weekly snapshots of real progress."}
//                             {pod.id === "critiques" &&
//                               "Honest feedback that sharpens the work."}
//                             {pod.id === "coinnovation" &&
//                               "Customers in the room, not on the sidelines."}
//                           </div>
//                         </div>
//                       </div>
//                       <span
//                         className={`h-1.5 w-1.5 rounded-full ${
//                           activePod === pod.id
//                             ? "bg-gradient-to-r from-purple-400 to-sky-400"
//                             : "bg-white/30"
//                         }`}
//                       />
//                     </button>
//                   ))}
//                 </div>

//                 <p className="mt-4 text-[11px] sm:text-xs text-white/50">
//                   Switch between pods to see how weekly demos, design critiques,
//                   and co-innovation sessions feel from the inside.
//                 </p>
//               </div>

//               {/* RIGHT: active pod panel */}
//               <div
//                 className="relative life-fade-up"
//                 style={{ animationDelay: "0.15s" }}
//               >
//                 {(() => {
//                   const active =
//                     POD_ITEMS.find((p) => p.id === activePod) ?? POD_ITEMS[0];
//                   return (
//                     <div
//                       key={active.id}
//                       className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#0a0a0a]/90 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl"
//                       style={{ animation: "podFade 0.4s ease-out" }}
//                     >
//                       <div className="flex flex-col md:flex-row h-auto md:h-[420px] lg:h-[480px]">
//                         {/* IMAGE */}
//                         <div className="relative w-full overflow-hidden h-52 sm:h-60 md:h-full md:w-1/2">
//                           <img
//                             src={active.image}
//                             alt={active.label}
//                             className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/70 via-transparent to-purple-400/20" />
//                           <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] sm:text-[11px] text-white border border-white/20">
//                             {active.label}
//                           </span>
//                         </div>

//                         {/* CONTENT */}
//                         <div className="relative flex flex-col justify-center w-full h-auto gap-1 px-4 py-5 md:h-full sm:px-6 sm:py-6 md:w-1/2 md:px-8">
//                           <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
//                             {active.eyebrow}
//                           </span>

//                           <h3 className="text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text leading-snug sm:leading-tight">
//                             {active.title}
//                           </h3>

//                           <p className="text-xs leading-relaxed sm:text-sm text-white/80">
//                             {active.description}
//                           </p>

//                           <ul className="mt-2 space-y-1.5 text-[11px] sm:text-xs md:text-sm text-white/80">
//                             {active.bullets.map((bullet, idx) => (
//                               <li
//                                 key={idx}
//                                 className="flex gap-2 translate-y-2 opacity-0"
//                                 style={{
//                                   animation: `podBullet 0.35s ease-out ${
//                                     0.1 + idx * 0.06
//                                   }s forwards`,
//                                 }}
//                               >
//                                 <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-sky-400" />
//                                 <span>{bullet}</span>
//                               </li>
//                             ))}
//                           </ul>

//                           <p className="mt-3 text-[10px] sm:text-[11px] text-white/50">
//                             These rituals keep pods aligned, honest, and always
//                             moving forward.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })()}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

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

//         /* Card animations */
//         @keyframes lifeCardUp {
//           0% {
//             opacity: 0;
//             transform: translateY(18px) scale(0.98);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .life-card-animate {
//           animation: lifeCardUp 0.9s ease-out both;
//         }

//         /* Stagger delays */
//         .life-delay-1 {
//           animation-delay: 0.08s;
//         }

//         .life-delay-2 {
//           animation-delay: 0.18s;
//         }

//         .life-delay-3 {
//           animation-delay: 0.28s;
//         }

//         /* Fade up animation */
//         @keyframes lifeFadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .life-fade-up {
//           animation: lifeFadeUp 0.8s ease-out both;
//         }

//         /* GLOBAL HOVER GLOW FOR ALL CARDS */
//         .life-hover-card {
//           position: relative;
//           overflow: hidden;
//           border-radius: 2rem;
//           isolation: isolate;
//           transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease,
//             background 0.35s ease;
//         }

//         .life-hover-card::before {
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

//         .life-hover-card:hover {
//           transform: translateY(-8px) scale(1.01);
//           border-color: rgba(255, 255, 255, 0.3);
//           box-shadow: 0 26px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.2);
//         }

//         .life-hover-card:hover::before {
//           opacity: 1;
//           transform: scale(1);
//         }

//         /* Extra content reveal on hover */
//         .life-hover-extra {
//           opacity: 0;
//           transform: translateY(6px);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//         }

//         .life-hover-card:hover .life-hover-extra {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </>
//   );
// };

// export default CarierLife;
"use client";

import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import { useEffect, useState } from "react";
import { CheckCircle2, Lightbulb } from "lucide-react";

interface CarrierLifeProps {
  navigateTo: (page: string) => void;
}

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

// Life at CJSS sections data
const LIFE_SECTIONS = [
  {
    id: "culture",
    cardTitle: "Culture & Values",
    subtitle: "TRUST & ACCOUNTABILITY",
    description:
      "We foster a culture built on trust, accountability, and openness. Teams are encouraged to share ideas, challenge assumptions, and take ownership of their work. We value integrity, collaboration, and respect, creating an environment where diverse perspectives are welcomed and every voice matters.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "learning",
    cardTitle: "Learning & Growth",
    subtitle: "CONTINUOUS DEVELOPMENT",
    description:
      "Continuous learning is central to life at CJSS. We invest in skill development through structured learning paths, hands-on project exposure, mentoring, and opportunities to work across technologies and domains. Whether you are deepening technical expertise or growing into leadership roles, we support long-term career progression aligned with individual goals.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "impact",
    cardTitle: "Meaningful Impact",
    subtitle: "WORK THAT MATTERS",
    description:
      "Our teams work on complex, enterprise-scale challenges that directly impact how businesses operate and grow. From modernizing digital platforms to enabling scalable commerce and experience solutions, employees see the real-world impact of their contributions across industries and markets.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "collaboration",
    cardTitle: "Collaboration",
    subtitle: "BETTER TOGETHER",
    description:
      "We believe the best outcomes are achieved together. Cross-functional collaboration is embedded into how we work, bringing together engineering, design, quality, and operations teams to solve problems collectively. Open communication and shared responsibility define our team dynamics.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "flexibility",
    cardTitle: "Flexibility",
    subtitle: "BALANCE & FREEDOM",
    description:
      "We promote a flexible and inclusive work environment that respects individual needs and work styles. Our approach balances productivity with well-being, enabling teams to perform at their best while maintaining a healthy work-life balance.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "diversity",
    cardTitle: "Diversity",
    subtitle: "EVERYONE BELONGS",
    description:
      "We are committed to building an inclusive workplace where differences are respected and valued. Our teams reflect diverse backgrounds, experiences, and perspectives, fostering innovation and mutual respect across the organization.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "recognition",
    cardTitle: "Recognition",
    subtitle: "CELEBRATING EXCELLENCE",
    description:
      "We recognize and celebrate contributions that drive excellence, collaboration, and innovation. Performance is acknowledged through growth opportunities, career advancement, and meaningful recognition that reinforces our shared values.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
  },
];

const CarierLife = ({ navigateTo }: CarrierLifeProps) => {
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life at CJSS", page: "CarrierLife" },
    { label: "Jobs", page: "CarrierFresher" },
    { label: "Problems we solve", page: "CarrierProblems" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePod, setActivePod] = useState<PodId>("demos");

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleScrollToLife = () => {
    const section = document.getElementById("life-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CareerNavigationBar
        links={links}
        navigateTo={navigateTo}
        activePage="CarrierLife"
      />

      <div className="h-[80px] md:h-[80px]"></div>

      <main className="relative w-full min-h-screen overflow-hidden text-white bg-black">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none -z-20">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
        </div>

        {/* ─────────────── SECTION 1 — HERO BANNER ─────────────── */}
        <section className="relative z-10 w-full min-h-[100vh] overflow-hidden">
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

          <div className="relative z-10 flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
            <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text font-semibold">
              Life at CJSS
            </span>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              BUILD THE{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                FUTURE
              </span>{" "}
              WITH US
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

            <div className="flex gap-2 mt-6 sm:mt-8">
              {HERO_IMAGES.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all ${
                    currentIndex === index
                      ? "w-6 bg-gradient-to-r from-purple-300 to-sky-300"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

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
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Life at CJSS
                </h2>

                <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text">
                  Where Passion Meets Purpose
                </p>

                <p className="max-w-3xl mx-auto mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-white/70">
                  At CJSS, we believe great digital solutions are built by
                  people who feel{" "}
                  <span className="text-white font-medium">empowered</span>,{" "}
                  <span className="text-white font-medium">supported</span>, and{" "}
                  <span className="text-white font-medium">inspired</span>. Our
                  culture is shaped by{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text font-medium">
                    collaboration
                  </span>
                  ,{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text font-medium">
                    continuous learning
                  </span>
                  , and a shared commitment to delivering meaningful impact for
                  our clients and communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── SECTION 3 — VALUES CARDS (Diagonal Blur Effect) ─────────────── */}
        <section className="relative z-10 w-full overflow-hidden bg-black py-16 sm:py-20">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text">
                  Values & Culture
                </span>
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LIFE_SECTIONS.map((item) => (
                <div
                  key={item.id}
                  className="value-card group relative h-[300px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Background Image - Clear */}
                  <img
                    src={item.image}
                    alt={item.cardTitle}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Diagonal Blur Overlay - Clear left to Blur right */}
                  <div className="absolute inset-0 diagonal-blur-overlay" />

                  {/* Dark gradient for text readability */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/80"
                    style={{
                      clipPath: "polygon(30% 0, 100% 0, 100% 100%, 10% 100%)",
                    }}
                  />

                  {/* Diagonal line accent */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 40.5%, rgba(255,255,255,0.1) 41%, transparent 41.5%)",
                    }}
                  />

                  {/* Default State - Title & Subtitle */}
                  <div className="card-default absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-400">
                    {/* Title - Bottom Left */}
                    <div className="max-w-[55%]">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        {item.cardTitle}
                      </h3>
                      <div className="mt-3 inline-block bg-white px-4 py-1.5 shadow-lg">
                        <span className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover State - Only Description Text */}
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
                    <span className="text-xs font-semibold tracking-[0.2em] text-purple-300 uppercase">
                      Join Our Team
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Join{" "}
                    <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                      CJSS?
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                    Life at CJSS offers the opportunity to work with modern
                    technologies, collaborate with talented professionals, and
                    grow in an environment that values learning and purpose. We
                    create space for individuals to thrive while collectively
                    building solutions that shape the future of digital
                    platforms and enterprise systems.
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Work on enterprise-scale challenges</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-sky-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Continuous learning & career growth</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Flexible, inclusive work environment</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={() => navigateTo("CarrierFresher")}
                    className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                  >
                    View Open Positions
                  </button>
                  <button
                    onClick={() => navigateTo("CarrierProblems")}
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
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase">
              Inside pods
            </p>

            <div className="max-w-2xl mt-4">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Inside pods:{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  where collaboration happens
                </span>
              </h2>
              <p className="mt-3 text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base text-white/80">
                Pods at CJSS are cross-functional teams that run like small
                studios. Every week they demo, critique, and co-create — keeping
                the work visible, the feedback honest, and the ideas moving.
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
                                ? "text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text"
                                : "text-white"
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
                  Switch between pods to see how weekly demos, design critiques,
                  and co-innovation sessions feel from the inside.
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

                          <h3 className="text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text leading-snug sm:leading-tight">
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
                            These rituals keep pods aligned, honest, and always
                            moving forward.
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

        /* Diagonal Blur Overlay - Clear left to blur right */
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

        /* Apply blur only to right portion */
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

        /* Value Cards */
        .value-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        /* Hide default content on hover */
        .value-card:hover .card-default {
          opacity: 0;
        }

        /* Show hover content on hover */
        .value-card:hover .card-hover {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default CarierLife;
