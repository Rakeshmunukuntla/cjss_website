// import { LEADERS } from "../../lib/Constants";

// export const LeadershipSection = () => {
//   return (
//     <section className="relative px-6 py-32 overflow-hidden bg-neutral-950">
//       {/* Background Glow Effects */}
//       <div className="absolute top-20 left-10 w-[260px] h-[260px] bg-purple-600/20 blur-[160px] -z-10"></div>
//       <div className="absolute bottom-20 right-10 w-[260px] h-[260px] bg-cyan-500/20 blur-[160px] -z-10"></div>

//       <div className="mx-auto max-w-7xl">
//         {/* SECTION TITLE */}
//         <h2 className="mb-20 text-5xl font-bold leading-tight text-center text-white">
//           Executive{" "}
//           <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text">
//             Leadership
//           </span>
//         </h2>

//         <div className="space-y-24">
//           {LEADERS.map((leader, idx) => (
//             <div
//               key={idx}
//               className="transition-all duration-700 ease-out translate-y-6 opacity-0 group animate-fadeInUp"
//             >
//               {idx % 2 === 0 ? (
//                 /* LEFT IMAGE / RIGHT TEXT */
//                 <div className="grid items-center gap-12 md:grid-cols-2">
//                   <div className="flex justify-center">
//                     <div className="relative transition-transform duration-500 group-hover:scale-[1.05]">
//                       {/* Glow Aura */}
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl"></div>

//                       <img
//                         src={leader.profileImage}
//                         alt={leader.name}
//                         className="relative object-cover border-4 rounded-full shadow-2xl w-80 h-80 border-neutral-800 shadow-purple-500/30"
//                       />
//                     </div>
//                   </div>

//                   {/* TEXT BLOCK */}
//                   <div className="space-y-4">
//                     <p className="text-sm font-semibold tracking-wide text-purple-300">
//                       Leadership Spotlight: {leader.name}
//                     </p>

//                     <h3 className="text-4xl font-bold text-white">
//                       {leader.name}
//                     </h3>

//                     <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
//                       {leader.designation}
//                     </p>

//                     <div className="py-2 pl-6 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400">
//                       <p className="text-lg leading-relaxed text-white/70">
//                         {leader.bio}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 /* RIGHT IMAGE / LEFT TEXT */
//                 <div className="grid items-center gap-12 md:grid-cols-2">
//                   {/* TEXT LEFT */}
//                   <div className="space-y-4">
//                     <p className="text-sm font-semibold tracking-wide text-purple-300">
//                       Leadership Spotlight: {leader.name}
//                     </p>

//                     <h3 className="text-4xl font-bold text-white">
//                       {leader.name}
//                     </h3>

//                     <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
//                       {leader.designation}
//                     </p>

//                     <div className="py-2 pl-6 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400">
//                       <p className="text-lg leading-relaxed text-white/70">
//                         {leader.bio}
//                       </p>
//                     </div>
//                   </div>

//                   {/* IMAGE RIGHT */}
//                   <div className="flex justify-center">
//                     <div className="relative transition-transform duration-500 group-hover:scale-[1.05]">
//                       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl"></div>

//                       <img
//                         src={leader.profileImage}
//                         alt={leader.name}
//                         className="relative object-cover border-4 rounded-full shadow-2xl w-80 h-80 border-neutral-800 shadow-purple-500/30"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fade-in animation */}
//       <style>
//         {`
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(12px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeInUp {
//             animation: fadeInUp 0.8s ease-out forwards;
//           }
//         `}
//       </style>
//     </section>
//   );
// };
"use client";

import { Quote } from "lucide-react";

// Leadership data with the content you provided
const LEADERS_DATA = [
  {
    name: "Venkatkrishna",
    designation: "Director",
    profileImage: "/images/Krishna3.jpg", // Update with actual image path
    bio: [
      "Venkatkrishna is the Director of CJSS Technologies, with a strong foundation in building and delivering scalable digital platforms for global enterprises. He has led the successful implementation of complex digital commerce and enterprise systems, helping organizations adopt technology that is reliable, adaptable, and future-ready.",
      "With deep expertise in SAP Commerce (Hybris) and headless commerce architectures, Venkatkrishna works closely with clients and teams to define clear technology roadmaps and practical implementation strategies that balance performance, scalability, and long-term sustainability.",
      "Beyond technology, Venkatkrishna believes that strong teams build strong solutions. His leadership is rooted in trust, collaboration, and continuous learning, fostering a culture where quality, accountability, and innovation come naturally. Under his guidance, CJSS Technologies has grown into a trusted technology partner for enterprises worldwide.",
    ],
    quote:
      "Technology succeeds when it is built with clarity, purpose, and people at the center.",
  },
  {
    name: "Srikanth Banthu",
    designation: "Director",
    profileImage: "/images/Srikanth_2.png", // Update with actual image path
    bio: [
      "Srikanth Banthu is a Director at CJSS Technologies, with strong expertise in Java-based enterprise application development and system architecture. He has played a key role in designing and delivering secure, scalable, and high-performance backend systems for enterprise clients.",
      "With deep proficiency in Java, Spring frameworks, and API-driven architectures, Srikanth focuses on building clean, maintainable, and resilient systems that support long-term business growth. He works closely with engineering teams to establish strong technical foundations, best practices, and efficient development processes.",
      "As a leader, Srikanth values discipline, ownership, and continuous improvement. He believes in empowering teams through mentorship and collaboration, creating an environment where engineering excellence and quality-driven execution are standard—not optional.",
    ],
    quote:
      "Well-built systems earn trust—both from businesses and the people who depend on them.",
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

      {/* Floating Orbs */}
      <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-20 right-[10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl relative">
        {/* SECTION HEADER */}
        <div className="text-center mb-16 sm:mb-24">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text uppercase mb-4">
            Meet Our Leaders
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Executive{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
              Leadership
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-white/50">
            Visionary leaders driving innovation and excellence across our
            organization
          </p>
        </div>

        {/* LEADERS CARDS - Same Layout for Both */}
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
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />

                <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="grid gap-8 lg:gap-12 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] items-start">
                    {/* IMAGE CARD */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="relative">
                        {/* Dashed border frame */}
                        <div className="absolute -inset-3 sm:-inset-4 rounded-[28px] sm:rounded-[32px] border-2 border-dashed border-purple-500/30" />

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
                            <p className="text-sm text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-medium">
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
                        <p className="text-xs font-semibold tracking-[0.2em] text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text uppercase mb-2">
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
                      <div className="relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-cyan-500/5">
                        {/* Quote icon */}
                        <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                          <Quote className="w-4 h-4 text-white" />
                        </div>

                        <p className="pt-2 text-sm sm:text-base md:text-lg italic text-white/80 leading-relaxed">
                          "{leader.quote}"
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <button className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all">
                          Get in Touch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};
