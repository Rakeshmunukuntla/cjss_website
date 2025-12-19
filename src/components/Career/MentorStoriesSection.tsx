// import { useEffect, useState } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// interface Mentor {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   shortStory: string;
//   fullStory: string;
// }

// const mentors: Mentor[] = [
//   {
//     id: 1,
//     name: "Rohit Sharma",
//     role: "Senior UI/UX Lead",
//     image: "/images/rahul.png",
//     shortStory: "How I transformed my design journey at CJSS.",
//     fullStory: "Rohit's story begins with passion...",
//   },
//   {
//     id: 2,
//     name: "Anjali Rao",
//     role: "Tech Lead – SAP Commerce",
//     image: "/images/priya.png",
//     shortStory: "Growing from developer to tech lead.",
//     fullStory: "Anjali's deep engineering strength...",
//   },
//   {
//     id: 3,
//     name: "Kiran Kumar",
//     role: "Backend Engineering Lead",
//     image: "/images/raman.png",
//     shortStory: "Built enterprise systems from the ground up.",
//     fullStory: "Kiran's engineering discipline...",
//   },
//   {
//     id: 4,
//     name: "Rohit Sharma",
//     role: "Senior UI/UX Lead",
//     image: "/images/rahul.png",
//     shortStory: "How I transformed my design journey at CJSS.",
//     fullStory: "...",
//   },
//   {
//     id: 5,
//     name: "Anjali Rao",
//     role: "Tech Lead – SAP Commerce",
//     image: "/images/priya.png",
//     shortStory: "Growing from developer to tech lead.",
//     fullStory: "...",
//   },
//   {
//     id: 6,
//     name: "Kiran Kumar",
//     role: "Backend Engineering Lead",
//     image: "/images/raman.png",
//     shortStory: "Built enterprise systems from the ground up.",
//     fullStory: "...",
//   },
// ];

// const MentorStoriesSection = () => {
//   const [openStory, setOpenStory] = useState<Mentor | null>(null);
//   const [typingText, setTypingText] = useState("");
//   const fullText = "Career Growth & Mentor Stories";

//   // Typewriter effect
//   useEffect(() => {
//     let i = 0;
//     const t = setInterval(() => {
//       if (i < fullText.length) {
//         setTypingText(fullText.slice(0, i + 1));
//         i++;
//       } else clearInterval(t);
//     }, 35);
//     return () => clearInterval(t);
//   }, []);

//   // Mouse light tracking
//   useEffect(() => {
//     const onMove = (e: MouseEvent) => {
//       document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
//       document.documentElement.style.setProperty("--my", `${e.clientY}px`);
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <section className="w-full px-4 py-20 overflow-visible sm:px-6 sm:py-28">
//       {/* Heading */}
//       <h2 className="mb-10 text-3xl font-extrabold text-center select-none sm:mb-12 sm:text-5xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-400">
//           {typingText}
//         </span>
//         <span className="ml-1 border-r-2 border-purple-400 animate-pulse"></span>
//       </h2>

//       {/* Swiper */}
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         spaceBetween={24}
//         autoplay={{ delay: 3000 }}
//         speed={800}
//         pagination={{ clickable: true, el: ".mentor-pagination" }}
//         breakpoints={{
//           480: { slidesPerView: 1.2 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="mx-auto max-w-7xl"
//       >
//         {mentors.map((mentor) => (
//           <SwiperSlide key={mentor.id}>
//             <div
//               className="relative p-5 overflow-visible cursor-pointer sm:p-6 mentor-card group rounded-2xl"
//               style={{
//                 background:
//                   "linear-gradient(180deg, rgba(32,58,84,0.95), rgba(22,46,72,0.95))",
//                 border: "1px solid rgba(255,255,255,0.04)",
//                 boxShadow: "0 12px 30px rgba(3,15,30,0.6)",
//                 transition: "transform 320ms",
//                 perspective: "1000px",
//               }}
//               onMouseMove={(e) => {
//                 if (window.innerWidth < 768) return; // Disable tilt on small screens
//                 const el = e.currentTarget;
//                 const rect = el.getBoundingClientRect();
//                 const px = (e.clientX - rect.left) / rect.width;
//                 const py = (e.clientY - rect.top) / rect.height;
//                 el.style.transform = `translateY(-6px) rotateX(${
//                   (py - 0.5) * -6
//                 }deg) rotateY(${(px - 0.5) * 8}deg) scale(1.03)`;
//                 el.style.setProperty("--lx", `${e.clientX - rect.left}px`);
//                 el.style.setProperty("--ly", `${e.clientY - rect.top}px`);
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget;
//                 el.style.transform =
//                   "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";
//               }}
//             >
//               {/* glossy top */}
//               <div
//                 aria-hidden
//                 style={{
//                   position: "absolute",
//                   inset: "-6px -6px auto -6px",
//                   height: "28px",
//                   borderTopLeftRadius: "22px",
//                   borderTopRightRadius: "22px",
//                   background:
//                     "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
//                   pointerEvents: "none",
//                 }}
//               />

//               {/* Cursor light */}
//               <div
//                 className="absolute inset-0 pointer-events-none rounded-2xl"
//                 style={{
//                   background:
//                     "radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(0,210,255,0.12), transparent 30%)",
//                 }}
//               />

//               {/* Image */}
//               <div className="w-full overflow-hidden rounded-xl">
//                 <img
//                   src={mentor.image}
//                   alt={mentor.name}
//                   className="block object-cover w-full h-48 sm:h-56 rounded-xl"
//                 />
//               </div>

//               {/* Content */}
//               <div className="relative z-10 mt-5 text-center">
//                 <h3 className="text-lg font-bold text-white sm:text-xl">
//                   {mentor.name}
//                 </h3>
//                 <p className="mt-1 text-sm text-white/60">{mentor.role}</p>
//                 <p className="mt-3 text-sm text-white/70">
//                   {mentor.shortStory}
//                 </p>

//                 <button
//                   onClick={() => setOpenStory(mentor)}
//                   onMouseMove={(ev) => {
//                     if (window.innerWidth < 768) return; // Disable on mobile only
//                     const btn = ev.currentTarget as HTMLButtonElement;
//                     const rect = btn.getBoundingClientRect();
//                     const x = ev.clientX - rect.left - rect.width / 2;
//                     const y = ev.clientY - rect.top - rect.height / 2;
//                     btn.style.transform = `translate(${x * 0.12}px, ${
//                       y * 0.12
//                     }px)`;
//                   }}
//                   onMouseLeave={(ev) => {
//                     const btn = ev.currentTarget as HTMLButtonElement;
//                     btn.style.transform = "translate(0,0)";
//                   }}
//                   className="relative inline-block px-6 py-2 mt-5 font-semibold tracking-wide text-black transition-all duration-300 rounded-full"
//                   style={{
//                     background: "linear-gradient(90deg,#37c2ff,#6a9bff)",
//                     boxShadow: "0 10px 28px rgba(44,156,255,0.18)",
//                   }}
//                 >
//                   Read Story →
//                 </button>
//               </div>

//               {/* hover glossy overlay */}
//               <div
//                 aria-hidden
//                 className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,140,255,0.06))",
//                 }}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="mt-6 mentor-pagination" />

//       {/* Modal */}
//       {openStory && (
//         <div className="fixed inset-0 z-[9999] flex items-start justify-center px-4 sm:px-6 py-10 sm:py-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(5,20,35,0.8), rgba(0,0,0,0.92))",
//               backdropFilter: "blur(14px)",
//             }}
//             onClick={() => setOpenStory(null)}
//           />

//           <div
//             className="relative z-10 w-full max-w-xl p-6 sm:max-w-3xl rounded-2xl sm:p-12"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
//               border: "1px solid rgba(255,255,255,0.05)",
//             }}
//           >
//             <button
//               onClick={() => setOpenStory(null)}
//               className="absolute text-2xl sm:text-3xl right-4 top-4 text-white/70"
//             >
//               ✕
//             </button>

//             <h3 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">
//               {openStory.name}
//             </h3>
//             <p className="mb-6 text-white/60">{openStory.role}</p>
//             <p className="text-sm leading-relaxed text-white/85 sm:text-base">
//               {openStory.fullStory}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Pagination styles */}
//       <style>{`
//         .mentor-pagination {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 12px;
//         }
//         .mentor-pagination .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: rgba(120,140,160,0.28);
//           opacity: 1;
//           border-radius: 50%;
//         }
//         .mentor-pagination .swiper-pagination-bullet-active {
//           width: 36px;
//           height: 10px;
//           border-radius: 10px;
//           background: linear-gradient(90deg,#2fe3ff,#4b8bff);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default MentorStoriesSection;

// import { useEffect, useState } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { createPortal } from "react-dom";

// interface Mentor {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   shortStory: string;
//   fullStory: string;
//   yearsAtCompany: string;
//   achievements: string[];
//   quote: string;
// }

// const mentors: Mentor[] = [
//   {
//     id: 1,
//     name: "Rohit Sharma",
//     role: "Senior UI/UX Lead",
//     image: "/images/rahul.png",
//     shortStory: "How I transformed my design journey at CJSS.",
//     fullStory: `When I joined CJSS 5 years ago, I was a junior designer with big dreams but limited experience. The company saw potential in me and invested in my growth through mentorship programs, advanced training, and challenging projects.

// My breakthrough came when I was assigned to lead the redesign of a major enterprise application. The project required me to collaborate with stakeholders across three continents, manage a team of 4 designers, and deliver within tight deadlines.

// The support I received from leadership was incredible. They encouraged experimentation, celebrated failures as learning opportunities, and always pushed me to think bigger. Today, I lead a team of 12 talented designers and have contributed to products used by millions of users worldwide.

// What I love most about CJSS is the culture of continuous learning. Whether it's attending design conferences, participating in hackathons, or simply sharing knowledge with peers, there's always an opportunity to grow.`,
//     yearsAtCompany: "5 Years",
//     achievements: [
//       "Led 15+ enterprise design projects",
//       "Mentored 20+ junior designers",
//       "Won Best Innovation Award 2023",
//       "Speaker at UX Summit 2024",
//     ],
//     quote:
//       "Design is not just what it looks like, it's how it makes people feel.",
//   },
//   {
//     id: 2,
//     name: "Anjali Rao",
//     role: "Tech Lead – SAP Commerce",
//     image: "/images/priya.png",
//     shortStory: "Growing from developer to tech lead.",
//     fullStory: `My journey at CJSS started as a fresh graduate with a computer science degree and zero industry experience. I remember feeling overwhelmed during my first week, but my mentor took me under his wing and showed me that every expert was once a beginner.

// The structured learning path at CJSS was instrumental in my growth. I started with foundational SAP Commerce training, then gradually took on more complex modules. Within 18 months, I was leading small feature developments, and by year 3, I was architecting entire commerce solutions.

// One of my proudest moments was leading the migration of a Fortune 500 client's e-commerce platform to SAP Commerce Cloud. The project involved 8 team members, 6 months of development, and resulted in a 40% improvement in site performance.

// CJSS believes in growing leaders from within. The leadership development programs, technical certifications, and exposure to global clients have shaped me into the professional I am today. I'm now passionate about giving back by mentoring the next generation of tech leaders.`,
//     yearsAtCompany: "6 Years",
//     achievements: [
//       "Certified SAP Commerce Architect",
//       "Delivered 25+ successful implementations",
//       "Reduced deployment time by 60%",
//       "Built internal training curriculum",
//     ],
//     quote:
//       "The best code is the one that solves real problems for real people.",
//   },
//   {
//     id: 3,
//     name: "Kiran Kumar",
//     role: "Backend Engineering Lead",
//     image: "/images/raman.png",
//     shortStory: "Built enterprise systems from the ground up.",
//     fullStory: `I've always been fascinated by the invisible infrastructure that powers modern applications. When I joined CJSS as a backend developer, I found the perfect environment to pursue this passion.

// My first major project involved building a microservices architecture for a healthcare client. The system needed to handle millions of transactions daily while maintaining strict compliance standards. The challenge was immense, but so was the support from my team.

// Over the years, I've had the opportunity to work with cutting-edge technologies – from container orchestration with Kubernetes to event-driven architectures with Apache Kafka. CJSS encourages engineers to stay ahead of the curve and provides resources for continuous learning.

// What sets CJSS apart is the emphasis on engineering excellence. We don't just write code; we craft solutions. Code reviews, architectural discussions, and knowledge sharing sessions are integral parts of our culture.

// Today, I lead a team of 15 backend engineers, and we've built systems that process over 50 million requests daily. But what gives me the most satisfaction is seeing junior developers grow into confident engineers under my mentorship.`,
//     yearsAtCompany: "7 Years",
//     achievements: [
//       "Architected systems handling 50M+ daily requests",
//       "AWS Solutions Architect certified",
//       "Published 5 technical papers",
//       "Built company's API gateway platform",
//     ],
//     quote: "Scalability is not an afterthought; it's a mindset.",
//   },
//   {
//     id: 4,
//     name: "Priya Menon",
//     role: "Data Science Manager",
//     image: "/images/rahul.png",
//     shortStory: "From analyst to leading AI initiatives.",
//     fullStory: `My journey into data science was unconventional. I started as a business analyst at CJSS, crunching numbers in Excel spreadsheets. But I was curious about the patterns hidden in data and how they could drive business decisions.

// CJSS recognized my curiosity and supported my transition into data science. They funded my certifications, provided access to learning platforms, and most importantly, gave me opportunities to apply my learning on real projects.

// My first ML project was a customer churn prediction model for a telecom client. It was challenging – dealing with imbalanced datasets, feature engineering, and explaining model decisions to non-technical stakeholders. But the thrill of seeing our model improve retention by 25% was unforgettable.

// Today, I lead a team of data scientists and ML engineers working on some of the most exciting AI projects – from computer vision applications to natural language processing solutions. We're not just building models; we're transforming how businesses operate.

// What I value most about CJSS is the freedom to innovate. We're encouraged to explore new ideas, experiment with emerging technologies, and push the boundaries of what's possible with data.`,
//     yearsAtCompany: "4 Years",
//     achievements: [
//       "Built ML models saving clients $2M+ annually",
//       "Led company's AI Center of Excellence",
//       "Tensorflow and Azure ML certified",
//       "Patent holder for predictive algorithm",
//     ],
//     quote: "Data tells stories; our job is to listen and translate.",
//   },
//   {
//     id: 5,
//     name: "Vikram Singh",
//     role: "DevOps Architect",
//     image: "/images/priya.png",
//     shortStory: "Transforming deployment from days to minutes.",
//     fullStory: `When I joined CJSS, deployments were manual, error-prone, and took days. I saw an opportunity to transform how we deliver software and pitched my ideas to leadership. To my surprise, they not only listened but gave me the resources to make it happen.

// I started by implementing CI/CD pipelines for a single project. The results were immediate – deployment time reduced from 2 days to 30 minutes, and errors dropped by 90%. Word spread, and soon teams across the organization wanted to adopt the new practices.

// Over the next few years, I built CJSS's entire DevOps infrastructure – from container platforms to monitoring systems to security scanning tools. We went from deploying once a month to multiple times a day.

// The culture at CJSS made this transformation possible. Leadership trusts engineers to make decisions, provides necessary resources, and celebrates innovation. There's no bureaucracy blocking good ideas.

// Today, as a DevOps Architect, I design systems that enable hundreds of developers to ship code confidently. I also mentor teams on DevOps best practices and help clients modernize their delivery pipelines.`,
//     yearsAtCompany: "5 Years",
//     achievements: [
//       "Reduced deployment time by 98%",
//       "Kubernetes and Docker certified",
//       "Built zero-downtime deployment system",
//       "Implemented security-first DevSecOps",
//     ],
//     quote:
//       "Automation is not about replacing humans; it's about freeing them to do meaningful work.",
//   },
//   {
//     id: 6,
//     name: "Sneha Patel",
//     role: "Product Manager",
//     image: "/images/raman.png",
//     shortStory: "Bridging technology and business outcomes.",
//     fullStory: `I never planned to become a product manager. I started as a QA engineer at CJSS, testing features and reporting bugs. But I found myself constantly asking "why" – why are we building this? Why do users need it? What problem does it solve?

// My manager noticed my curiosity and encouraged me to explore product management. CJSS has this amazing internal mobility program that allows employees to transition between roles. I shadowed product managers, took courses, and eventually moved into a PM role.

// The transition wasn't easy. I had to learn new skills – user research, market analysis, stakeholder management, roadmap planning. But CJSS invested in my development through training programs and assigned me a mentor who guided me through the challenges.

// My first product launch was nerve-wracking but exhilarating. Seeing users engage with something we built, hearing their feedback, and iterating to make it better – that's what product management is all about.

// Today, I manage products used by millions of users. I work with engineering, design, marketing, and sales teams to deliver value to customers. It's complex, challenging, and incredibly rewarding.`,
//     yearsAtCompany: "6 Years",
//     achievements: [
//       "Launched 8 successful products",
//       "Increased user engagement by 150%",
//       "CSPO and PMI-ACP certified",
//       "Built product analytics framework",
//     ],
//     quote:
//       "Great products are built by understanding people, not just requirements.",
//   },
// ];

// // Modal Component using Portal
// const MentorModal = ({
//   mentor,
//   onClose,
// }: {
//   mentor: Mentor;
//   onClose: () => void;
// }) => {
//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   const modalContent = (
//     <div
//       className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
//       style={{ paddingTop: "100px" }}
//     >
//       {/* Backdrop - just dark overlay, blur is on the content behind */}
//       <div
//         className="fixed inset-0"
//         style={{
//           background: "rgba(0, 0, 0, 0.7)",
//         }}
//         onClick={onClose}
//       />

//       {/* Modal Content */}
//       <div
//         className="relative z-10 w-full max-w-xl mx-4 mb-10 sm:max-w-3xl rounded-2xl animate-modalSlideIn"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(30,45,65,0.98), rgba(20,35,55,0.98))",
//           border: "1px solid rgba(255,255,255,0.1)",
//           boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
//         }}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute z-20 flex items-center justify-center w-10 h-10 text-2xl transition-all rounded-full right-4 top-4 text-white/70 hover:text-white hover:bg-white/10"
//         >
//           ✕
//         </button>

//         {/* Header Section */}
//         <div
//           className="relative p-6 overflow-hidden sm:p-8 rounded-t-2xl"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(55,194,255,0.15), rgba(106,155,255,0.1))",
//           }}
//         >
//           <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
//             {/* Profile Image */}
//             <div className="flex-shrink-0">
//               <img
//                 src={mentor.image}
//                 alt={mentor.name}
//                 className="object-cover w-24 h-24 border-4 rounded-full shadow-lg sm:w-32 sm:h-32 border-white/20"
//               />
//             </div>

//             {/* Name & Role */}
//             <div className="text-center sm:text-left">
//               <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
//                 {mentor.name}
//               </h3>
//               <p className="mt-1 text-lg text-cyan-300">{mentor.role}</p>
//               <div className="flex items-center justify-center gap-2 mt-3 sm:justify-start">
//                 <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-500/20 text-purple-300">
//                   {mentor.yearsAtCompany}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="p-6 sm:p-8">
//           {/* Quote */}
//           <blockquote className="relative p-4 mb-6 italic border-l-4 rounded-r-lg bg-white/5 border-cyan-400">
//             <span className="absolute text-4xl -left-1 -top-2 text-cyan-400/30">
//               "
//             </span>
//             <p className="text-white/80">{mentor.quote}</p>
//           </blockquote>

//           {/* Full Story */}
//           <div className="mb-8">
//             <h4 className="mb-4 text-lg font-bold text-white">My Journey</h4>
//             <div className="space-y-4 text-sm leading-relaxed sm:text-base text-white/75">
//               {mentor.fullStory.split("\n\n").map((paragraph, index) => (
//                 <p key={index}>{paragraph}</p>
//               ))}
//             </div>
//           </div>

//           {/* Achievements */}
//           <div>
//             <h4 className="mb-4 text-lg font-bold text-white">
//               Key Achievements
//             </h4>
//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//               {mentor.achievements.map((achievement, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
//                 >
//                   <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
//                     {index + 1}
//                   </span>
//                   <span className="text-sm text-white/80">{achievement}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animation styles */}
//       <style>{`
//         @keyframes modalSlideIn {
//           from {
//             opacity: 0;
//             transform: translateY(-20px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .animate-modalSlideIn {
//           animation: modalSlideIn 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );

//   // Use portal to render modal at document body level
//   return createPortal(modalContent, document.body);
// };

// interface MentorStoriesSectionProps {
//   onModalOpen?: (isOpen: boolean) => void;
// }

// const MentorStoriesSection = ({ onModalOpen }: MentorStoriesSectionProps) => {
//   const [openStory, setOpenStory] = useState<Mentor | null>(null);
//   const [typingText, setTypingText] = useState("");
//   const fullText = "Career Growth & Mentor Stories";

//   // Notify parent when modal opens/closes
//   useEffect(() => {
//     onModalOpen?.(openStory !== null);
//   }, [openStory, onModalOpen]);

//   // Typewriter effect
//   useEffect(() => {
//     let i = 0;
//     const t = setInterval(() => {
//       if (i < fullText.length) {
//         setTypingText(fullText.slice(0, i + 1));
//         i++;
//       } else clearInterval(t);
//     }, 35);
//     return () => clearInterval(t);
//   }, []);

//   // Mouse light tracking
//   useEffect(() => {
//     const onMove = (e: MouseEvent) => {
//       document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
//       document.documentElement.style.setProperty("--my", `${e.clientY}px`);
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <>
//       <section className="w-full px-4 py-20 overflow-visible sm:px-6 sm:py-28">
//         {/* Heading */}
//         <h2 className="mb-10 text-3xl font-extrabold text-center select-none sm:mb-12 sm:text-5xl">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-400">
//             {typingText}
//           </span>
//           <span className="ml-1 border-r-2 border-purple-400 animate-pulse"></span>
//         </h2>

//         {/* Swiper */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           slidesPerView={1}
//           spaceBetween={24}
//           autoplay={{ delay: 3000 }}
//           speed={800}
//           pagination={{ clickable: true, el: ".mentor-pagination" }}
//           breakpoints={{
//             480: { slidesPerView: 1.2 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="mx-auto max-w-7xl"
//         >
//           {mentors.map((mentor) => (
//             <SwiperSlide key={mentor.id}>
//               <div
//                 className="relative p-5 overflow-visible cursor-pointer sm:p-6 mentor-card group rounded-2xl"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(32,58,84,0.95), rgba(22,46,72,0.95))",
//                   border: "1px solid rgba(255,255,255,0.04)",
//                   boxShadow: "0 12px 30px rgba(3,15,30,0.6)",
//                   transition: "transform 320ms",
//                   perspective: "1000px",
//                 }}
//                 onMouseMove={(e) => {
//                   if (window.innerWidth < 768) return;
//                   const el = e.currentTarget;
//                   const rect = el.getBoundingClientRect();
//                   const px = (e.clientX - rect.left) / rect.width;
//                   const py = (e.clientY - rect.top) / rect.height;
//                   el.style.transform = `translateY(-6px) rotateX(${
//                     (py - 0.5) * -6
//                   }deg) rotateY(${(px - 0.5) * 8}deg) scale(1.03)`;
//                   el.style.setProperty("--lx", `${e.clientX - rect.left}px`);
//                   el.style.setProperty("--ly", `${e.clientY - rect.top}px`);
//                 }}
//                 onMouseLeave={(e) => {
//                   const el = e.currentTarget;
//                   el.style.transform =
//                     "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";
//                 }}
//               >
//                 {/* glossy top */}
//                 <div
//                   aria-hidden
//                   style={{
//                     position: "absolute",
//                     inset: "-6px -6px auto -6px",
//                     height: "28px",
//                     borderTopLeftRadius: "22px",
//                     borderTopRightRadius: "22px",
//                     background:
//                       "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
//                     pointerEvents: "none",
//                   }}
//                 />

//                 {/* Cursor light */}
//                 <div
//                   className="absolute inset-0 pointer-events-none rounded-2xl"
//                   style={{
//                     background:
//                       "radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(0,210,255,0.12), transparent 30%)",
//                   }}
//                 />

//                 {/* Image */}
//                 <div className="w-full overflow-hidden rounded-xl">
//                   <img
//                     src={mentor.image}
//                     alt={mentor.name}
//                     className="block object-cover w-full h-48 sm:h-56 rounded-xl"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 mt-5 text-center">
//                   <h3 className="text-lg font-bold text-white sm:text-xl">
//                     {mentor.name}
//                   </h3>
//                   <p className="mt-1 text-sm text-white/60">{mentor.role}</p>
//                   <p className="mt-3 text-sm text-white/70">
//                     {mentor.shortStory}
//                   </p>

//                   <button
//                     onClick={() => setOpenStory(mentor)}
//                     onMouseMove={(ev) => {
//                       if (window.innerWidth < 768) return;
//                       const btn = ev.currentTarget as HTMLButtonElement;
//                       const rect = btn.getBoundingClientRect();
//                       const x = ev.clientX - rect.left - rect.width / 2;
//                       const y = ev.clientY - rect.top - rect.height / 2;
//                       btn.style.transform = `translate(${x * 0.12}px, ${
//                         y * 0.12
//                       }px)`;
//                     }}
//                     onMouseLeave={(ev) => {
//                       const btn = ev.currentTarget as HTMLButtonElement;
//                       btn.style.transform = "translate(0,0)";
//                     }}
//                     className="relative inline-block px-6 py-2 mt-5 font-semibold tracking-wide text-black transition-all duration-300 rounded-full"
//                     style={{
//                       background: "linear-gradient(90deg,#37c2ff,#6a9bff)",
//                       boxShadow: "0 10px 28px rgba(44,156,255,0.18)",
//                     }}
//                   >
//                     Read Story →
//                   </button>
//                 </div>

//                 {/* hover glossy overlay */}
//                 <div
//                   aria-hidden
//                   className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100"
//                   style={{
//                     background:
//                       "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,140,255,0.06))",
//                   }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="mt-6 mentor-pagination" />

//         {/* Pagination styles */}
//         <style>{`
//           .mentor-pagination {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 12px;
//           }
//           .mentor-pagination .swiper-pagination-bullet {
//             width: 10px;
//             height: 10px;
//             background: rgba(120,140,160,0.28);
//             opacity: 1;
//             border-radius: 50%;
//           }
//           .mentor-pagination .swiper-pagination-bullet-active {
//             width: 36px;
//             height: 10px;
//             border-radius: 10px;
//             background: linear-gradient(90deg,#2fe3ff,#4b8bff);
//           }
//         `}</style>
//       </section>

//       {/* Modal rendered via Portal - outside of blur wrapper */}
//       {openStory && (
//         <MentorModal mentor={openStory} onClose={() => setOpenStory(null)} />
//       )}
//     </>
//   );
// };

// export default MentorStoriesSection;
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { createPortal } from "react-dom";

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  shortStory: string;
  fullStory: string;
  yearsAtCompany: string;
  achievements: string[];
  quote: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Senior UI/UX Lead",
    image: "/images/rahul.png",
    shortStory: "How I transformed my design journey at CJSS.",
    fullStory: `When I joined CJSS 5 years ago, I was a junior designer with big dreams but limited experience. The company saw potential in me and invested in my growth through mentorship programs, advanced training, and challenging projects.

My breakthrough came when I was assigned to lead the redesign of a major enterprise application. The project required me to collaborate with stakeholders across three continents, manage a team of 4 designers, and deliver within tight deadlines.

The support I received from leadership was incredible. They encouraged experimentation, celebrated failures as learning opportunities, and always pushed me to think bigger. Today, I lead a team of 12 talented designers and have contributed to products used by millions of users worldwide.

What I love most about CJSS is the culture of continuous learning. Whether it's attending design conferences, participating in hackathons, or simply sharing knowledge with peers, there's always an opportunity to grow.`,
    yearsAtCompany: "5 Years",
    achievements: [
      "Led 15+ enterprise design projects",
      "Mentored 20+ junior designers",
      "Won Best Innovation Award 2023",
      "Speaker at UX Summit 2024",
    ],
    quote:
      "Design is not just what it looks like, it's how it makes people feel.",
  },
  {
    id: 2,
    name: "Anjali Rao",
    role: "Tech Lead – SAP Commerce",
    image: "/images/priya.png",
    shortStory: "Growing from developer to tech lead.",
    fullStory: `My journey at CJSS started as a fresh graduate with a computer science degree and zero industry experience. I remember feeling overwhelmed during my first week, but my mentor took me under his wing and showed me that every expert was once a beginner.

The structured learning path at CJSS was instrumental in my growth. I started with foundational SAP Commerce training, then gradually took on more complex modules. Within 18 months, I was leading small feature developments, and by year 3, I was architecting entire commerce solutions.

One of my proudest moments was leading the migration of a Fortune 500 client's e-commerce platform to SAP Commerce Cloud. The project involved 8 team members, 6 months of development, and resulted in a 40% improvement in site performance.

CJSS believes in growing leaders from within. The leadership development programs, technical certifications, and exposure to global clients have shaped me into the professional I am today. I'm now passionate about giving back by mentoring the next generation of tech leaders.`,
    yearsAtCompany: "6 Years",
    achievements: [
      "Certified SAP Commerce Architect",
      "Delivered 25+ successful implementations",
      "Reduced deployment time by 60%",
      "Built internal training curriculum",
    ],
    quote:
      "The best code is the one that solves real problems for real people.",
  },
  {
    id: 3,
    name: "Kiran Kumar",
    role: "Backend Engineering Lead",
    image: "/images/raman.png",
    shortStory: "Built enterprise systems from the ground up.",
    fullStory: `I've always been fascinated by the invisible infrastructure that powers modern applications. When I joined CJSS as a backend developer, I found the perfect environment to pursue this passion.

My first major project involved building a microservices architecture for a healthcare client. The system needed to handle millions of transactions daily while maintaining strict compliance standards. The challenge was immense, but so was the support from my team.

Over the years, I've had the opportunity to work with cutting-edge technologies – from container orchestration with Kubernetes to event-driven architectures with Apache Kafka. CJSS encourages engineers to stay ahead of the curve and provides resources for continuous learning.

What sets CJSS apart is the emphasis on engineering excellence. We don't just write code; we craft solutions. Code reviews, architectural discussions, and knowledge sharing sessions are integral parts of our culture.

Today, I lead a team of 15 backend engineers, and we've built systems that process over 50 million requests daily. But what gives me the most satisfaction is seeing junior developers grow into confident engineers under my mentorship.`,
    yearsAtCompany: "7 Years",
    achievements: [
      "Architected systems handling 50M+ daily requests",
      "AWS Solutions Architect certified",
      "Published 5 technical papers",
      "Built company's API gateway platform",
    ],
    quote: "Scalability is not an afterthought; it's a mindset.",
  },
  {
    id: 4,
    name: "Priya Menon",
    role: "Data Science Manager",
    image: "/images/rahul.png",
    shortStory: "From analyst to leading AI initiatives.",
    fullStory: `My journey into data science was unconventional. I started as a business analyst at CJSS, crunching numbers in Excel spreadsheets. But I was curious about the patterns hidden in data and how they could drive business decisions.

CJSS recognized my curiosity and supported my transition into data science. They funded my certifications, provided access to learning platforms, and most importantly, gave me opportunities to apply my learning on real projects.

My first ML project was a customer churn prediction model for a telecom client. It was challenging – dealing with imbalanced datasets, feature engineering, and explaining model decisions to non-technical stakeholders. But the thrill of seeing our model improve retention by 25% was unforgettable.

Today, I lead a team of data scientists and ML engineers working on some of the most exciting AI projects – from computer vision applications to natural language processing solutions. We're not just building models; we're transforming how businesses operate.

What I value most about CJSS is the freedom to innovate. We're encouraged to explore new ideas, experiment with emerging technologies, and push the boundaries of what's possible with data.`,
    yearsAtCompany: "4 Years",
    achievements: [
      "Built ML models saving clients $2M+ annually",
      "Led company's AI Center of Excellence",
      "Tensorflow and Azure ML certified",
      "Patent holder for predictive algorithm",
    ],
    quote: "Data tells stories; our job is to listen and translate.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "DevOps Architect",
    image: "/images/priya.png",
    shortStory: "Transforming deployment from days to minutes.",
    fullStory: `When I joined CJSS, deployments were manual, error-prone, and took days. I saw an opportunity to transform how we deliver software and pitched my ideas to leadership. To my surprise, they not only listened but gave me the resources to make it happen.

I started by implementing CI/CD pipelines for a single project. The results were immediate – deployment time reduced from 2 days to 30 minutes, and errors dropped by 90%. Word spread, and soon teams across the organization wanted to adopt the new practices.

Over the next few years, I built CJSS's entire DevOps infrastructure – from container platforms to monitoring systems to security scanning tools. We went from deploying once a month to multiple times a day.

The culture at CJSS made this transformation possible. Leadership trusts engineers to make decisions, provides necessary resources, and celebrates innovation. There's no bureaucracy blocking good ideas.

Today, as a DevOps Architect, I design systems that enable hundreds of developers to ship code confidently. I also mentor teams on DevOps best practices and help clients modernize their delivery pipelines.`,
    yearsAtCompany: "5 Years",
    achievements: [
      "Reduced deployment time by 98%",
      "Kubernetes and Docker certified",
      "Built zero-downtime deployment system",
      "Implemented security-first DevSecOps",
    ],
    quote:
      "Automation is not about replacing humans; it's about freeing them to do meaningful work.",
  },
  {
    id: 6,
    name: "Sneha Patel",
    role: "Product Manager",
    image: "/images/raman.png",
    shortStory: "Bridging technology and business outcomes.",
    fullStory: `I never planned to become a product manager. I started as a QA engineer at CJSS, testing features and reporting bugs. But I found myself constantly asking "why" – why are we building this? Why do users need it? What problem does it solve?

My manager noticed my curiosity and encouraged me to explore product management. CJSS has this amazing internal mobility program that allows employees to transition between roles. I shadowed product managers, took courses, and eventually moved into a PM role.

The transition wasn't easy. I had to learn new skills – user research, market analysis, stakeholder management, roadmap planning. But CJSS invested in my development through training programs and assigned me a mentor who guided me through the challenges.

My first product launch was nerve-wracking but exhilarating. Seeing users engage with something we built, hearing their feedback, and iterating to make it better – that's what product management is all about.

Today, I manage products used by millions of users. I work with engineering, design, marketing, and sales teams to deliver value to customers. It's complex, challenging, and incredibly rewarding.`,
    yearsAtCompany: "6 Years",
    achievements: [
      "Launched 8 successful products",
      "Increased user engagement by 150%",
      "CSPO and PMI-ACP certified",
      "Built product analytics framework",
    ],
    quote:
      "Great products are built by understanding people, not just requirements.",
  },
];

// Modal Component using Portal
const MentorModal = ({
  mentor,
  onClose,
}: {
  mentor: Mentor;
  onClose: () => void;
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
      style={{ paddingTop: "100px" }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-xl mx-4 mb-10 sm:max-w-3xl rounded-2xl animate-modalSlideIn"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,20,0.98), rgba(10,10,10,0.98))",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-20 flex items-center justify-center w-10 h-10 text-2xl transition-all rounded-full right-4 top-4 text-white/70 hover:text-white hover:bg-white/10"
        >
          ✕
        </button>

        {/* Header Section */}
        <div
          className="relative p-6 overflow-hidden sm:p-8 rounded-t-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(55,194,255,0.1), rgba(106,155,255,0.05))",
          }}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="object-cover w-24 h-24 border-4 rounded-full shadow-lg sm:w-32 sm:h-32 border-white/20"
              />
            </div>

            {/* Name & Role */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                {mentor.name}
              </h3>
              <p className="mt-1 text-lg text-cyan-300">{mentor.role}</p>
              <div className="flex items-center justify-center gap-2 mt-3 sm:justify-start">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-500/20 text-purple-300">
                  {mentor.yearsAtCompany}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          {/* Quote */}
          <blockquote className="relative p-4 mb-6 italic border-l-4 rounded-r-lg bg-white/5 border-cyan-400">
            <span className="absolute text-4xl -left-1 -top-2 text-cyan-400/30">
              "
            </span>
            <p className="text-white/80">{mentor.quote}</p>
          </blockquote>

          {/* Full Story */}
          <div className="mb-8">
            <h4 className="mb-4 text-lg font-bold text-white">My Journey</h4>
            <div className="space-y-4 text-sm leading-relaxed sm:text-base text-white/75">
              {mentor.fullStory.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {mentor.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                >
                  <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                    {index + 1}
                  </span>
                  <span className="text-sm text-white/80">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Close Button at Bottom */}
          <div className="flex justify-center mt-8">
            <button
              onClick={onClose}
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
            >
              Close Story
            </button>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );

  // Use portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

interface MentorStoriesSectionProps {
  onModalOpen?: (isOpen: boolean) => void;
}

const MentorStoriesSection = ({ onModalOpen }: MentorStoriesSectionProps) => {
  const [openStory, setOpenStory] = useState<Mentor | null>(null);
  const [typingText, setTypingText] = useState("");
  const fullText = "Career Growth & Mentor Stories";

  // Notify parent when modal opens/closes
  useEffect(() => {
    onModalOpen?.(openStory !== null);
  }, [openStory, onModalOpen]);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, []);

  // Mouse light tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Main Section with Black Background */}
      <section className="relative w-full px-4 py-20 overflow-visible bg-black sm:px-6 sm:py-28">
        {/* Optional: Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

        {/* Optional: Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10">
          {/* Heading */}
          <h2 className="mb-10 text-3xl font-extrabold text-center select-none sm:mb-12 sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-400">
              {typingText}
            </span>
            <span className="ml-1 border-r-2 border-purple-400 animate-pulse"></span>
          </h2>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 3000 }}
            speed={800}
            pagination={{ clickable: true, el: ".mentor-pagination" }}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mx-auto max-w-7xl"
          >
            {mentors.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <div
                  className="relative p-5 overflow-visible cursor-pointer sm:p-6 mentor-card group rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(25,25,25,0.95), rgba(15,15,15,0.95))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
                    transition: "transform 320ms",
                    perspective: "1000px",
                  }}
                  onMouseMove={(e) => {
                    if (window.innerWidth < 768) return;
                    const el = e.currentTarget;
                    const rect = el.getBoundingClientRect();
                    const px = (e.clientX - rect.left) / rect.width;
                    const py = (e.clientY - rect.top) / rect.height;
                    el.style.transform = `translateY(-6px) rotateX(${
                      (py - 0.5) * -6
                    }deg) rotateY(${(px - 0.5) * 8}deg) scale(1.03)`;
                    el.style.setProperty("--lx", `${e.clientX - rect.left}px`);
                    el.style.setProperty("--ly", `${e.clientY - rect.top}px`);
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform =
                      "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";
                  }}
                >
                  {/* glossy top */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: "-6px -6px auto -6px",
                      height: "28px",
                      borderTopLeftRadius: "22px",
                      borderTopRightRadius: "22px",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Cursor light */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(0,210,255,0.15), transparent 30%)",
                    }}
                  />

                  {/* Image */}
                  <div className="w-full overflow-hidden rounded-xl">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="block object-cover w-full h-48 sm:h-56 rounded-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-5 text-center">
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {mentor.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">{mentor.role}</p>
                    <p className="mt-3 text-sm text-white/70">
                      {mentor.shortStory}
                    </p>

                    {/* Button - Same style as hero section */}
                    <button
                      onClick={() => setOpenStory(mentor)}
                      className="mt-5 rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                    >
                      Read Story →
                    </button>
                  </div>

                  {/* hover glossy overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,140,255,0.08))",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 mentor-pagination" />
        </div>

        {/* Pagination styles */}
        <style>{`
          .mentor-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }
          .mentor-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 6px;
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            border-radius: 9999px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .mentor-pagination .swiper-pagination-bullet:hover {
            background: rgba(255, 255, 255, 0.7);
          }
          .mentor-pagination .swiper-pagination-bullet-active {
            width: 24px;
            height: 6px;
            border-radius: 9999px;
            background: white;
          }
        `}</style>
      </section>

      {/* Modal rendered via Portal */}
      {openStory && (
        <MentorModal mentor={openStory} onClose={() => setOpenStory(null)} />
      )}
    </>
  );
};

export default MentorStoriesSection;
