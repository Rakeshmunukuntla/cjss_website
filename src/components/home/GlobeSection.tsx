// import { useState, useEffect } from 'react';
// import Globe from '../Globe';

// export const GlobeSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.querySelector('.globe-section');
//     if (element) observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   const stats = [
//     {
//       value: '500M+',
//       label: 'API requests per day, peaking at 13,000 requests a second',
//     },
//     {
//       value: '99.999%',
//       label: 'historical uptime for Stripe services',
//     },
//     {
//       value: '47+',
//       label: 'countries with local acquiring',
//     },
//     {
//       value: '135+',
//       label: 'currencies and payment methods supported',
//     },
//   ];

//   return (
//     <section className="globe-section relative overflow-visible min-h-[120vh] flex flex-col items-center justify-center bg-neutral-950">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 pointer-events-none z-1">
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl animate-blob"></div>
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
//         <div
//           className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-2xl animate-pulse opacity-40"
//           style={{ animationDuration: '5s' }}
//         ></div>
//       </div>

//       {/* Full background globe */}
//       <div className="absolute inset-0 z-0 w-full h-full overflow-visible opacity-100">
//         <Globe scale={2} theta={0.3} dark={1} />
//       </div>

//       {/* Content overlay */}
//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
//         <div className="w-full px-6 py-24 mx-auto max-w-7xl">
//           <div className="mb-20 text-center">
//             {/* Center Content */}
//             <div
//               className={`transition-all duration-1000 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//               }`}
//               style={{
//                 animation: isVisible
//                   ? 'revealUp 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards'
//                   : 'none',
//               }}
//             >
//               <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//                 <span className="text-sm font-medium tracking-wide text-purple-400 uppercase">
//                   Global Reach
//                 </span>
//               </div>
//               <h2 className="mb-8 text-5xl font-bold text-white md:text-6xl animate-slideUp">
//                 Customer Journey
//                 <br />
//                 <span className="text-transparent bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text">
//                   Smart Solutions
//                 </span>
//               </h2>
//               <p
//                 className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-white animate-fadeInUp"
//                 style={{ animationDelay: '0.4s' }}
//               >
//                 Delivering transformative technology solutions across 47+ countries, powering
//                 thousands of businesses with our expertise in cloud, AI, and digital transformation.
//               </p>
//             </div>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 gap-6 pt-12 mt-24 border-t md:grid-cols-2 lg:grid-cols-4 border-neutral-800">
//             {stats.map((stat, idx) => (
//               <div
//                 key={idx}
//                 className={`group relative transition-all duration-700`}
//                 style={{
//                   animation: isVisible
//                     ? `zoomIn 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards`
//                     : 'none',
//                   animationDelay: `${idx * 0.12}s`,
//                   opacity: isVisible ? 1 : 0,
//                 }}
//               >
//                 <div className="relative pt-6">
//                   {/* Top border accent */}
//                   <div className="absolute top-0 left-0 w-8 h-0.5 bg-linear-to-r from-purple-400 to-transparent" />

//                   {/* Value */}
//                   <div className="mb-3 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
//                     {stat.value}
//                   </div>

//                   {/* Label */}
//                   <p className="text-sm leading-relaxed transition-colors duration-300 text-neutral-700 group-hover:text-brand-teal">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useEffect, useRef, useState } from "react";
import Globe from "../Globe";

export const GlobeSection = () => {
  const [visibility, setVisibility] = useState(0); // 0 = hidden, 1 = fully visible
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const vh = window.innerHeight || 1;

      // We'll keep it fully visible around the vertical center
      const viewportCenter = vh * 0.5;
      const maxDistance = vh * 0.7; // how far before it fully fades

      const distance = Math.abs(centerY - viewportCenter);
      let v = 1 - distance / maxDistance;

      if (v < 0) v = 0;
      if (v > 1) v = 1;

      setVisibility(v);
    };

    handleScroll(); // initial state on load
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="globe-section relative overflow-visible min-h-[110vh] flex flex-col items-center justify-center text-white">
      {/* 🌌 Background */}
      <div className="absolute inset-0 overflow-hidden -z-30">
        {/* Main vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00172f] via-[#004b9f] to-[#4fc7ff]" />

        {/* Twinkling atoms */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/80 blur-[1px] animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 2.2}s`,
                opacity: 0.55,
              }}
            />
          ))}
        </div>
      </div>

      {/* ✨ Premium animated glow around the globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="relative w-[420px] h-[420px] md:w-[540px] md:h-[540px]">
          {/* Outer pulsing aura */}
          <div
            className="absolute inset-[6%] md:inset-[8%] rounded-full blur-3xl animate-glow-pulse"
            style={{
              background:
                "radial-gradient(circle at center, rgba(56,189,248,0.85), transparent 70%)",
            }}
          />

          {/* Rotating conic energy gradient */}
          <div
            className="absolute inset-[14%] md:inset-[16%] rounded-full blur-2xl opacity-80 animate-glow-spin"
            style={{
              background:
                "conic-gradient(from 220deg, rgba(59,130,246,0) 0deg, rgba(59,130,246,0.9) 110deg, rgba(45,212,191,0) 210deg, rgba(59,130,246,0.8) 280deg, rgba(59,130,246,0) 360deg)",
            }}
          />

          {/* Inner breathing core light */}
          <div
            className="absolute inset-[26%] md:inset-[28%] rounded-full blur-2xl animate-glow-breathe"
            style={{
              background:
                "radial-gradient(circle at center, rgba(34,211,238,0.9), transparent 65%)",
            }}
          />
        </div>
      </div>

      {/* 🌍 Globe in front */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Globe scale={1.8} theta={0.3} dark={1} />
      </div>

      {/* Text Content */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="w-full px-6 py-20 mx-auto max-w-7xl">
          <div ref={textRef} className="mb-12 text-center">
           
            <div
              style={{
                opacity: visibility,
                transform: `translateY(${(1 - visibility) * 24}px)`,
                transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
              }}
            >
              <span
                className="text-xs font-semibold tracking-wide text-teal-300 uppercase"
                // style={{ fontFamily: '"Sora", sans-serif' }}
              >
                Global Reach
              </span>

              <h2
                className="mb-4 text-4xl leading-tight text-white md:text-5xl"
                style={{
                  // fontFamily: '"Sora", sans-serif',
                  fontWeight: 800,
                  letterSpacing: '-0.7px',
                }}
              >
                Customer Journey
                <br />
                <span
                  className="text-transparent bg-gradient-to-r from-[#00F5FF] via-[#00D1FF] to-[#0077FF] bg-clip-text"
                  style={{
                    // fontFamily: '"Sora", sans-serif',
                    fontWeight: 800,
                    letterSpacing: '-0.7px',
                    textShadow: '0 0 14px rgba(0, 210, 255, 0.42)',
                  }}
                >
                  Smart Solutions
                </span>
              </h2>

              <p
                className="max-w-2xl mx-auto mb-6 text-base leading-relaxed text-blue-100"
                // style={{ fontFamily: '"Sora", sans-serif' }}
              >
                Empowering businesses with transformative technology solutions driven by our
                expertise in cloud, AI, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="w-full px-6 py-20 mx-auto max-w-7xl">
          <div ref={textRef} className="mb-12 text-center">
            <div
              style={{
                opacity: visibility,
                transform: `translateY(${(1 - visibility) * 24}px)`,
                transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
              }}
            >
              <span className="text-xs font-semibold tracking-wide text-teal-300 uppercase">
                Global Reach
              </span>

              <h2
                className="mb-4 text-4xl leading-tight text-white md:text-5xl"
                style={{ fontWeight: 800, letterSpacing: "-0.7px" }}
              >
                Customer Journey
                <br />
                <span
                  className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text"
                  style={{
                    fontWeight: 800,
                    letterSpacing: "-0.7px",
                    textShadow: "0 0 14px rgba(129, 140, 248, 0.45)",
                  }}
                >
                  Smart Solutions
                </span>
              </h2>

              <p className="max-w-2xl mx-auto mb-6 text-base leading-relaxed text-blue-100">
                Empowering businesses with transformative technology solutions
                driven by our expertise in cloud, AI, and digital
                transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%   { opacity: 0.25; transform: scale(0.9); }
            50%  { opacity: 1; transform: scale(1.2); }
            100% { opacity: 0.4; transform: scale(1.0); }
          }
          .animate-twinkle {
            animation: twinkle 2.6s ease-in-out infinite;
          }

          @keyframes glow-pulse {
            0%, 100% {
              transform: scale(0.96);
              opacity: 0.55;
            }
            50% {
              transform: scale(1.06);
              opacity: 1;
            }
          }
          .animate-glow-pulse {
            animation: glow-pulse 8s ease-in-out infinite;
          }

          @keyframes glow-spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-glow-spin {
            animation: glow-spin 26s linear infinite;
          }

          @keyframes glow-breathe {
            0%, 100% {
              transform: scale(1);
              opacity: 0.75;
            }
            50% {
              transform: scale(1.12);
              opacity: 1;
            }
          }
          .animate-glow-breathe {
            animation: glow-breathe 10s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default GlobeSection;
