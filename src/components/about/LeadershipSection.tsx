// import { LEADERS } from "../../lib/Constants"

// export const LeadershipSection = () => {
//   return (
//     <section className="px-6 py-32 bg-neutral-950">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="mb-20 text-5xl font-bold text-center text-white">
//           Executive{" "}
//           <span className="mb-20 text-5xl font-bold text-center text-white">Leadership</span>
//         </h2>

//         <div className="space-y-20">
//           {LEADERS.map((leader, idx) => (
//             <div key={idx} className="group">
//               {idx % 2 === 0 ? (
//                 // Left image, right content
//                 <div className="grid items-start gap-12 md:grid-cols-2">
//                   <div className="flex justify-center pt-12">
//                     <div className="relative">
//                       <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-600/20 to-cyan-600/20 blur-2xl"></div>
//                       <img
//                         src={leader.profileImage}
//                         alt={leader.name}
//                         className="relative object-cover border-4 rounded-full shadow-2xl w-80 h-80 border-neutral-800 shadow-purple-500/20"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-4">
//                     <p className="text-lg font-semibold text-purple-300">Leadership Spotlight: {leader.name}</p>
//                     <h3 className="text-4xl font-bold text-white">{leader.name}</h3>
//                     <p className="text-xl font-semibold text-white/70">{leader.designation}</p>
//                     <div className="py-2 pl-6 border-l-4 border-purple-400">
//                       <p className="text-lg leading-relaxed text-white/70">{leader.bio}</p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 // Right image, left content
//                 <div className="grid items-start gap-12 md:grid-cols-2">
//                   <div className="space-y-4">
//                     <p className="text-lg font-semibold text-purple-400">Leadership Spotlight: {leader.name}</p>
//                     <h3 className="text-4xl font-bold text-white">{leader.name}</h3>
//                     <p className="text-xl font-semibold text-neutral-300">{leader.designation}</p>
//                     <div className="py-2 pl-6 border-l-4 border-purple-400">
//                       <p className="text-lg leading-relaxed text-neutral-200">{leader.bio}</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-center pt-12">
//                     <div className="relative">
//                       <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-600/20 to-cyan-600/20 blur-2xl"></div>
//                       <img
//                         src={leader.profileImage}
//                         alt={leader.name}
//                         className="relative object-cover border-4 rounded-full shadow-2xl w-80 h-80 border-neutral-800 shadow-purple-500/20"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { LEADERS } from '../../lib/Constants'

export const LeadershipSection = () => {
  return (
    <section className="relative px-6 py-32 overflow-hidden bg-neutral-950">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-[260px] h-[260px] bg-purple-600/20 blur-[160px] -z-10"></div>
      <div className="absolute bottom-20 right-10 w-[260px] h-[260px] bg-cyan-500/20 blur-[160px] -z-10"></div>

      <div className="mx-auto max-w-7xl">
        {/* SECTION TITLE */}
        <h2 className="mb-20 text-5xl font-bold leading-tight text-center text-white">
          Executive{' '}
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

                    <h3 className="text-4xl font-bold text-white">{leader.name}</h3>

                    <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                      {leader.designation}
                    </p>

                    <div className="py-2 pl-6 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400">
                      <p className="text-lg leading-relaxed text-white/70">{leader.bio}</p>
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

                    <h3 className="text-4xl font-bold text-white">{leader.name}</h3>

                    <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text">
                      {leader.designation}
                    </p>

                    <div className="py-2 pl-6 border-l-4 border-gradient-to-b from-purple-400 to-cyan-400">
                      <p className="text-lg leading-relaxed text-white/70">{leader.bio}</p>
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
  )
}
