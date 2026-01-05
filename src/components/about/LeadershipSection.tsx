import { LEADERS } from "../../lib/Constants";

export const LeadershipSection = () => {
  return (
    <section className="relative px-6 py-32 overflow-hidden bg-neutral-950">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-[260px] h-[260px] bg-purple-600/20 blur-[160px] -z-10"></div>
      <div className="absolute bottom-20 right-10 w-[260px] h-[260px] bg-cyan-500/20 blur-[160px] -z-10"></div>

      <div className="mx-auto max-w-7xl">
        {/* SECTION TITLE */}
        <h2 className="mb-20 text-5xl font-bold leading-tight text-center text-white">
          Executive{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text">
            Leadership
          </span>
        </h2>

        <div className="space-y-24">
          {LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="transition-all duration-700 ease-out translate-y-6 opacity-0 group animate-fadeInUp"
            >
              {idx % 2 === 0 ? (
                /* LEFT IMAGE / RIGHT TEXT */
                <div className="grid items-center gap-12 md:grid-cols-2">
                  <div className="flex justify-center">
                    <div className="relative transition-transform duration-500 group-hover:scale-[1.05]">
                      {/* Glow Aura */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl"></div>

                      <img
                        src={leader.profileImage}
                        alt={leader.name}
                        className="relative object-cover border-4 rounded-full shadow-2xl w-80 h-80 border-neutral-800 shadow-purple-500/30"
                      />
                    </div>
                  </div>

                  {/* TEXT BLOCK */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold tracking-wide text-purple-300">
                      Leadership Spotlight: {leader.name}
                    </p>

                    <h3 className="text-4xl font-bold text-white">
                      {leader.name}
                    </h3>

                    <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                      {leader.designation}
                    </p>

                    <div className="py-2 pl-6 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400">
                      <p className="text-lg leading-relaxed text-white/70">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* RIGHT IMAGE / LEFT TEXT */
                <div className="grid items-center gap-12 md:grid-cols-2">
                  {/* TEXT LEFT */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold tracking-wide text-purple-300">
                      Leadership Spotlight: {leader.name}
                    </p>

                    <h3 className="text-4xl font-bold text-white">
                      {leader.name}
                    </h3>

                    <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                      {leader.designation}
                    </p>

                    <div className="py-2 pl-6 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400">
                      <p className="text-lg leading-relaxed text-white/70">
                        {leader.bio}
                      </p>
                    </div>
                  </div>

                  {/* IMAGE RIGHT */}
                  <div className="flex justify-center">
                    <div className="relative transition-transform duration-500 group-hover:scale-[1.05]">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl"></div>

                      <img
                        src={leader.profileImage}
                        alt={leader.name}
                        className="relative object-cover border-4 rounded-full shadow-2xl w-80 h-80 border-neutral-800 shadow-purple-500/30"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};
// const LEADERS = [
//   {
//     name: "Venkat Krishna",
//     designation: "Director",
//     info: "20+ years in technology leadership driving innovation and digital transformation across enterprises",
//     image: "👨‍💼",
//     profileImage: "/images/dummynav1.png",
//     bio: "Venkat has extensive experience working in the information technology industry and leading web experience, content management, and e-commerce engagements, and global teams. He has a long track record in delivery management, managing customer relationships, solution conceptualization, and championing technology Centers of Excellence (CoE).",
//   },
//   {
//     name: "Srikanth Banthu",
//     designation: "Director",
//     info: "15+ years in enterprise architecture and cloud solutions with expertise in strategic technology planning",
//     image: "👨‍💻",
//     profileImage: "/images/Srikanth_2.png",
//     bio: "Srikanth brings extensive expertise in enterprise architecture, cloud transformation, and strategic technology planning. With a proven track record in managing large-scale digital initiatives and building high-performing teams, he drives innovation and operational excellence across the organization.",
//   },
// ];

// interface Leader {
//   name: string;
//   designation: string;
//   info: string;
//   image: string;
//   profileImage: string;
//   bio: string;
// }

// export const LeadershipSection: React.FC = () => {
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
//           {LEADERS.map((leader: Leader, idx: number) => (
//             <div
//               key={idx}
//               className="transition-all duration-700 ease-out translate-y-6 opacity-0 group animate-fadeInUp"
//             >
//               {idx % 2 === 0 ? (
//                 /* LEFT IMAGE / RIGHT TEXT */
//                 <div className="grid items-center gap-12 md:grid-cols-2">
//                   <div className="flex justify-center">
//                     {/* Image Container */}
//                     <div className="relative w-80 h-80">
//                       {/* Outer Dashed Ring */}
//                       <div className="absolute inset-0 border-2 border-dashed rounded-full border-purple-300/30"></div>

//                       {/* Gradient Circle Border */}
//                       <div className="absolute inset-2 p-1 rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400">
//                         {/* Inner Dark Ring */}
//                         <div className="w-full h-full rounded-full bg-neutral-950"></div>
//                       </div>

//                       {/* Gradient Background Inside Circle */}
//                       <div className="absolute inset-4 overflow-hidden rounded-full">
//                         <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"></div>

//                         {/* Decorative Wave Lines */}
//                         <svg
//                           className="absolute inset-0 w-full h-full opacity-40"
//                           viewBox="0 0 200 200"
//                         >
//                           <path
//                             d="M20,80 Q50,50 80,80 T140,80 T200,80"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                           <path
//                             d="M20,100 Q50,70 80,100 T140,100 T200,100"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                           <path
//                             d="M20,120 Q50,90 80,120 T140,120 T200,120"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                           <path
//                             d="M20,140 Q50,110 80,140 T140,140 T200,140"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                         </svg>
//                       </div>

//                       {/* Profile Image - ON TOP of circle */}
//                       <div className="absolute inset-0 flex items-end justify-center mb-2.0">
//                         <img
//                           src={leader.profileImage}
//                           alt={leader.name}
//                           className="object-cover object-top w-[100%] h-[150%] z-10 drop-shadow-2xl"
//                         />
//                       </div>

//                       {/* Decorative Icon - Top Left */}
//                       <div className="absolute z-20 flex items-center justify-center w-12 h-12 bg-purple-100 shadow-lg top-2 -left-2 rounded-xl">
//                         <svg
//                           className="w-6 h-6 text-purple-600"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                         </svg>
//                       </div>

//                       {/* Decorative Dot - Bottom Left */}
//                       <div className="absolute z-20 w-6 h-6 bg-blue-500 rounded-full shadow-lg bottom-8 -left-4"></div>

//                       {/* Decorative Dot - Bottom Right */}
//                       <div className="absolute z-20 w-4 h-4 rounded-full shadow-lg -bottom-1 right-16 bg-cyan-400"></div>
//                     </div>
//                   </div>

//                   {/* TEXT BLOCK */}
//                   <div className="space-y-4">
//                     <p className="text-sm font-semibold tracking-wide text-purple-300">
//                       Leadership Spotlight
//                     </p>

//                     <h3 className="text-4xl font-bold text-white">
//                       {leader.name}
//                     </h3>

//                     <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
//                       {leader.designation}
//                     </p>

//                     <div className="py-2 pl-6 border-l-4 border-purple-500">
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
//                       Leadership Spotlight
//                     </p>

//                     <h3 className="text-4xl font-bold text-white">
//                       {leader.name}
//                     </h3>

//                     <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
//                       {leader.designation}
//                     </p>

//                     <div className="py-2 pl-6 border-l-4 border-cyan-500">
//                       <p className="text-lg leading-relaxed text-white/70">
//                         {leader.bio}
//                       </p>
//                     </div>
//                   </div>

//                   {/* IMAGE RIGHT */}
//                   <div className="flex justify-center">
//                     {/* Image Container */}
//                     <div className="relative w-80 h-80">
//                       {/* Outer Dashed Ring */}
//                       <div className="absolute inset-0 border-2 border-dashed rounded-full border-cyan-300/30"></div>

//                       {/* Gradient Circle Border */}
//                       <div className="absolute inset-2 p-1 rounded-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-400">
//                         {/* Inner Dark Ring */}
//                         <div className="w-full h-full rounded-full bg-neutral-950"></div>
//                       </div>

//                       {/* Gradient Background Inside Circle */}
//                       <div className="absolute inset-4 overflow-hidden rounded-full">
//                         <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-500 to-pink-400"></div>

//                         {/* Decorative Wave Lines */}
//                         <svg
//                           className="absolute inset-0 w-full h-full opacity-40"
//                           viewBox="0 0 200 200"
//                         >
//                           <path
//                             d="M20,80 Q50,50 80,80 T140,80 T200,80"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                           <path
//                             d="M20,100 Q50,70 80,100 T140,100 T200,100"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                           <path
//                             d="M20,120 Q50,90 80,120 T140,120 T200,120"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                           <path
//                             d="M20,140 Q50,110 80,140 T140,140 T200,140"
//                             stroke="white"
//                             strokeWidth="1.5"
//                             fill="none"
//                           />
//                         </svg>
//                       </div>

//                       {/* Profile Image - ON TOP of circle */}
//                       <div className="absolute inset-0 flex items-end justify-center">
//                         <img
//                           src={leader.profileImage}
//                           alt={leader.name}
//                           className="object-cover object-top w-[90%] h-[105%] z-10 drop-shadow-2xl"
//                         />
//                       </div>

//                       {/* Decorative Icon - Top Right */}
//                       <div className="absolute z-20 flex items-center justify-center w-12 h-12 bg-cyan-100 shadow-lg top-2 -right-2 rounded-xl">
//                         <svg
//                           className="w-6 h-6 text-cyan-600"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                         </svg>
//                       </div>

//                       {/* Decorative Dot - Bottom Right */}
//                       <div className="absolute z-20 w-6 h-6 bg-purple-500 rounded-full shadow-lg bottom-8 -right-4"></div>

//                       {/* Decorative Dot - Bottom Left */}
//                       <div className="absolute z-20 w-4 h-4 bg-pink-400 rounded-full shadow-lg -bottom-1 left-16"></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
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
// "use client";

// interface Leader {
//   name: string;
//   designation: string;
//   profileImage: string;
//   bio: string;
// }

// const LEADERS: Leader[] = [
//   {
//     name: "Venkat Krishna",
//     designation: "Director",
//     profileImage: "/images/dummynav.png",
//     bio: "Venkat has extensive experience working in the information technology industry and leading web experience, content management, and e-commerce engagements, and global teams. He has a long track record in delivery management, managing customer relationships, solution conceptualization, and championing technology Centers of Excellence (CoE).",
//   },
//   {
//     name: "Srikanth Banthu",
//     designation: "Director",
//     profileImage: "/images/dummysri.png",
//     bio: "Srikanth brings extensive expertise in enterprise architecture, cloud transformation, and strategic technology planning. With a proven track record in managing large-scale digital initiatives and building high-performing teams, he drives innovation and operational excellence across the organization.",
//   },
// ];

// export const LeadershipSection = () => {
//   return (
//     <section className="relative px-6 py-32 bg-neutral-950 overflow-hidden">
//       {/* Background subtle glow */}
//       <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-600/10 blur-[180px]" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[180px]" />

//       <div className="relative max-w-7xl mx-auto">
//         {/* SECTION TITLE */}
//         <h2 className="mb-24 text-5xl font-semibold text-center text-white">
//           Executive{" "}
//           <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
//             Leadership
//           </span>
//         </h2>

//         <div className="space-y-32">
//           {LEADERS.map((leader, idx) => (
//             <div
//               key={idx}
//               className={`grid items-center gap-16 md:grid-cols-2 ${
//                 idx % 2 !== 0 ? "md:grid-flow-col-dense" : ""
//               }`}
//             >
//               {/* IMAGE */}
//               <div
//                 className={`relative flex justify-center ${
//                   idx % 2 !== 0 ? "md:col-start-2" : ""
//                 }`}
//               >
//                 {/* Soft premium glow */}
//                 <div className="absolute -inset-16 bg-gradient-to-t from-purple-500/20 to-cyan-500/10 blur-3xl rounded-full" />

//                 <img
//                   src={leader.profileImage}
//                   alt={leader.name}
//                   className="
//                     relative z-10
//                     h-[420px]
//                     w-auto
//                     object-contain
//                     drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]
//                   "
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="relative space-y-6">
//                 {/* Vertical accent */}
//                 <div className="absolute left-0 top-2 h-24 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-400 rounded-full" />

//                 <div className="pl-6 space-y-4">
//                   <p className="text-sm font-semibold tracking-widest text-purple-300 uppercase">
//                     Leadership Spotlight
//                   </p>

//                   <h3 className="text-4xl font-semibold tracking-tight text-white">
//                     {leader.name}
//                   </h3>

//                   <p className="text-lg font-medium text-cyan-300">
//                     {leader.designation}
//                   </p>

//                   <p className="max-w-xl leading-relaxed text-white/70">
//                     {leader.bio}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
