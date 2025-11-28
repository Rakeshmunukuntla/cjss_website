// import { WHY_CHOOSE_US } from '../../lib/Constants';
// import { useState, useEffect, useRef } from 'react';
// import Icon from '../Icon';

// export const WhyChooseUsSection = () => {
//   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = parseInt(entry.target.getAttribute('data-index') || '0');
//             setVisibleIndices((prev) => new Set([...prev, idx]));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = sectionRef.current?.querySelectorAll('[data-index]');
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative px-6 py-20 overflow-hidden bg-neutral-950" ref={sectionRef}>
//       {/* Animated background elements */}
//       <div className="absolute inset-0 -z-5">
//         <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
//         <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
//         <div
//           className="absolute top-1/2 right-0 w-[250px] h-[250px] bg-blue-600/8 rounded-full blur-2xl animate-pulse opacity-40"
//           style={{ animationDuration: '5s' }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
//           Why Choose Us
//         </h2>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {WHY_CHOOSE_US.map((item, idx) => (
//             <div
//               key={idx}
//               data-index={idx}
//               className={`bg-neutral-900 border border-neutral-800 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-700 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 group ${
//                 visibleIndices.has(idx) ? 'animate-scaleIn' : 'opacity-0 scale-95'
//               }`}
//               style={{ animationDelay: `${idx * 0.1}s` }}
//             >
//               <div
//                 className="mb-4 text-purple-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-bounce"
//                 style={{ animationDelay: `${idx * 0.2}s` }}
//               >
//                 <Icon name={item.icon} className="w-8 h-8" />
//               </div>
//               <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
//                 {item.title}
//               </h3>
//               <p className="text-sm leading-relaxed text-white transition-colors duration-300 group-hover:text-neutral-100">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import { WHY_CHOOSE_US } from '../../lib/Constants';
import { useState, useEffect, useRef } from 'react';

export const WhyChooseUsSection = () => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setVisibleIndices((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // SVGs array (will rotate if card count > 4)
  const svgs = [
    // Concept (Lightbulb)
    `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <path d="M9 18h6"></path>
     <path d="M10 22h4"></path>
     <path d="M12 2a7 7 0 0 0-7 7c0 2.6 1.7 4.8 4 6v1h6v-1c2.3-1.2 4-3.4 4-6a7 7 0 0 0-7-7z"></path>
   </svg>`,

    // Development (Laptop / Coding)
    `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <rect x="3" y="4" width="18" height="12" rx="2"></rect>
     <path d="M2 18h20"></path>
     <path d="M9 10l-2 2 2 2"></path>
     <path d="M15 10l2 2-2 2"></path>
   </svg>`,

    // Data Analyst (Chart / Analytics)
    `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <path d="M3 3v18h18"></path>
     <rect x="7" y="13" width="3" height="5" rx="1"></rect>
     <rect x="12" y="9" width="3" height="9" rx="1"></rect>
     <rect x="17" y="5" width="3" height="13" rx="1"></rect>
   </svg>`,

    // Cyber Security (Shield + Lock)
    `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <path d="M12 2l8 4v6c0 6-4 10-8 10s-8-4-8-10V6l8-4z"></path>
     <circle cx="12" cy="12" r="2"></circle>
     <path d="M12 14v2"></path>
   </svg>`,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 overflow-hidden bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#020617]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-sky-300/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-24 w-[460px] h-[460px] rounded-full bg-emerald-300/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[640px] h-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.32),transparent_65%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(transparent 79px, rgba(148,163,184,0.16) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.16) 80px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
          Why Choose Us
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-b from-[#0b1220]/95 via-[#111827]/92 to-[#020617]/95 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.6)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(56,189,248,0.45)] ${
                visibleIndices.has(idx)
                  ? 'animate-scaleIn opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Smooth hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_75%)]" />

              {/* 🔥 Inline SVG inside the blue box */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 shadow-[0_8px_18px_rgba(15,23,42,0.7)] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 animate-iconFloat">
                  <span
                    className="w-6 h-6"
                    dangerouslySetInnerHTML={{ __html: svgs[idx % svgs.length] }}
                  />
                </div>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-sky-200">
                {item.title}
              </h3>

              <div className="mb-3 h-0.5 w-12 bg-gradient-to-r from-sky-400 via-emerald-300 to-transparent opacity-80" />

              <p className="text-sm leading-relaxed transition-colors duration-300 text-slate-200 group-hover:text-slate-50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes iconFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-iconFloat {
            animation: iconFloat 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};
