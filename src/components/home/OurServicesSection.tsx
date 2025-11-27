// import { TECHNOLOGY_SERVICES } from '../../lib/Constants';
// import { useState, useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';

// interface OurServicesSectionProps {
//   navigateTo?: (page: string) => void;
// }

// export const OurServicesSection = ({ navigateTo }: OurServicesSectionProps) => {
//   const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

//     const items = sectionRef.current?.querySelectorAll('[data-index]');
//     items?.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative px-6 py-32 overflow-hidden bg-neutral-950" ref={sectionRef}>
//       {/* Decorative background blobs with animations */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-blob" />
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-blob animation-delay-2000" />

//       {/* Additional animated elements */}
//       <div
//         className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-600/6 rounded-full blur-2xl animate-pulse opacity-40"
//         style={{ animationDuration: '4s' }}
//       ></div>
//       <div
//         className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-purple-600/6 rounded-full blur-2xl animate-pulse opacity-30"
//         style={{ animationDuration: '5s', animationDelay: '1s' }}
//       ></div>

//       {/* Floating elements */}
//       <div className="absolute w-16 h-16 rounded-full opacity-0 top-20 right-10 bg-purple-500/10 blur-lg animate-float"></div>
//       <div
//         className="absolute w-24 h-24 rounded-full opacity-0 bottom-40 right-1/4 bg-cyan-500/10 blur-lg animate-float"
//         style={{ animationDelay: '1.5s' }}
//       ></div>

//       <div className="relative z-10 mx-auto max-w-7xl">
//         <div className="mb-24 text-center md:text-left">
//           <h2 className="mb-6 text-5xl font-bold text-white md:text-7xl animate-slideUp">
//             Explore Our <br />
//             <span className="text-purple-400">Services</span>
//           </h2>
//           <p
//             className="max-w-2xl text-xl text-white animate-slideUp"
//             style={{ animationDelay: '0.2s' }}
//           >
//             We combine strategic insight with technical expertise to deliver solutions that drive
//             real business value.
//           </p>
//         </div>

//         <div className="space-y-8">
//           {TECHNOLOGY_SERVICES.map((service, idx) => {
//             return (
//               <div
//                 key={service.id}
//                 data-index={idx}
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className={`group relative flex flex-col md:flex-row gap-12 md:gap-16 transition-all duration-1000 overflow-hidden rounded-3xl p-8 md:p-12 bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 ${
//                   visibleIndices.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//                 }`}
//                 style={{
//                   animation: visibleIndices.has(idx)
//                     ? `revealUp 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards`
//                     : 'none',
//                   animationDelay: `${idx * 0.15}s`,
//                 }}
//               >
//                 {/* Animated gradient overlay background */}
//                 <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10 rounded-3xl">
//                   <div
//                     className="absolute inset-0 bg-purple-500/10 animate-pulse"
//                     style={{ animationDuration: '3s' }}
//                   ></div>
//                 </div>

//                 {/* Floating animated orbs inside card */}
//                 <div
//                   className="absolute top-0 right-0 w-40 h-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl group-hover:animate-blob"
//                   style={{ animationDelay: '0s' }}
//                 ></div>
//                 <div
//                   className="absolute bottom-0 left-0 w-32 h-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/10 blur-2xl group-hover:animate-blob"
//                   style={{ animationDelay: '1s' }}
//                 ></div>

//                 {/* Number with glow effect */}
//                 <div className="relative md:w-32 shrink-0">
//                   <span className="relative z-10 text-6xl font-bold transition-all duration-500 md:text-8xl text-neutral-700 group-hover:text-purple-300">
//                     {String(idx + 1).padStart(2, '0')}
//                   </span>
//                   {/* Glow effect on hover */}
//                   <div className="absolute inset-0 text-6xl font-bold transition-all duration-500 md:text-8xl text-purple-500/0 group-hover:text-purple-500/40 blur-2xl">
//                     {String(idx + 1).padStart(2, '0')}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 flex-1">
//                   <h3 className="mb-6 text-3xl font-bold text-white transition-all duration-300 transform md:text-5xl group-hover:text-purple-200 group-hover:translate-x-2">
//                     {service.title}
//                   </h3>

//                   <div className="grid gap-12 mb-8 md:grid-cols-2">
//                     <div className="space-y-6">
//                       <p className="text-lg leading-relaxed transition-colors duration-300 text-neutral-300 group-hover:text-white">
//                         {service.banner}
//                       </p>
//                       <div className="p-6 transition-all duration-300 border bg-neutral-900/50 rounded-2xl border-neutral-700 group-hover:border-purple-500/50 group-hover:bg-neutral-900">
//                         <p className="transition-colors duration-300 text-neutral-300 group-hover:text-white">
//                           {service.approach}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Service List with stagger animation */}
//                     <ul className="space-y-3">
//                       {service.solutions.map((solution, sIdx) => (
//                         <li
//                           key={solution.id}
//                           className="flex items-center gap-3 transition-all duration-300 transform text-neutral-300 group/item group-hover:text-white group-hover:translate-x-2"
//                           style={{
//                             transitionDelay: hoveredIndex === idx ? `${sIdx * 50}ms` : '0ms',
//                           }}
//                         >
//                           <span className="w-2 h-2 transition-transform rounded-full bg-linear-to-r from-purple-400 to-cyan-400 group-hover/item:scale-150" />
//                           <span>{solution.title}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <button
//                     onClick={() => navigateTo && navigateTo(`service-${service.id}`)}
//                     className="inline-flex items-center gap-3 px-6 py-3 text-sm font-bold tracking-widest text-purple-300 uppercase transition-all duration-300 border rounded-full group/btn bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/40 hover:border-purple-500/50 hover:text-white"
//                   >
//                     Learn More
//                     <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
import { TECHNOLOGY_SERVICES } from '../../lib/Constants';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface OurServicesSectionProps {
  navigateTo?: (page: string) => void;
}

export const OurServicesSection = ({ navigateTo }: OurServicesSectionProps) => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleIndices((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative px-6 py-32 overflow-hidden bg-gradient-to-b from-[#020617] via-[#050816] to-[#020617]"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Soft blobs */}
        <div className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full bg-purple-500/18 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 left-[-10%] w-[520px] h-[520px] rounded-full bg-cyan-400/18 blur-3xl animate-blob animation-delay-2000" />
        {/* Center halo */}
        <div className="absolute top-1/2 left-1/2 w-[820px] h-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_65%)] blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(transparent 79px, rgba(148,163,184,0.16) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.16) 80px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-24 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-[11px] font-semibold tracking-[0.25em] uppercase rounded-full border border-purple-400/40 bg-purple-500/15 text-purple-100/90 backdrop-blur-md">
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 bg-purple-300 rounded-full" />
            </span>
            <span style={{ fontFamily: '"Sora", system-ui, sans-serif' }}>Our services</span>
          </div>

          <h2
            className="mb-6 text-5xl font-bold text-white md:text-7xl animate-slideUp"
            style={{ fontFamily: '"Sora", system-ui, sans-serif', letterSpacing: '-0.04em' }}
          >
            Explore Our <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 bg-clip-text">
              Services
            </span>
          </h2>
          <p
            className="max-w-2xl text-xl text-slate-200 animate-slideUp"
            style={{ animationDelay: '0.2s', fontFamily: '"Sora", system-ui, sans-serif' }}
          >
            We combine strategic insight with technical expertise to deliver solutions that drive
            real business value.
          </p>
        </div>

        <div className="space-y-8">
          {TECHNOLOGY_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              data-index={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex flex-col gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#050816]/95 via-[#050816]/90 to-[#020617]/95 p-8 transition-all duration-600 ease-out md:flex-row md:gap-16 md:p-12 ${
                visibleIndices.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{
                boxShadow: visibleIndices.has(idx)
                  ? '0 18px 50px rgba(15,23,42,0.85)'
                  : '0 0 0 rgba(0,0,0,0)',
                animation: visibleIndices.has(idx)
                  ? `revealUp 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards`
                  : 'none',
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Hover overlay + outer glow */}
              <div className="absolute inset-0 transition-opacity ease-out opacity-0 pointer-events-none rounded-3xl duration-600 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),transparent_70%)]" />
              </div>
              <div className="absolute transition-opacity ease-out border border-transparent opacity-0 pointer-events-none -inset-px rounded-3xl duration-600 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-3xl bg-[conic-gradient(from_210deg,rgba(168,85,247,0.35),rgba(56,189,248,0.28),rgba(129,140,248,0.32),rgba(168,85,247,0.35))] blur-[18px]" />
              </div>

              {/* Index */}
              <div className="relative shrink-0 md:w-32">
                <span
                  className="relative z-10 text-6xl font-bold transition-all duration-500 md:text-8xl bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent group-hover:scale-[1.03]"
                  style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="absolute inset-0 text-6xl font-bold transition-all pointer-events-none text-purple-500/0 blur-2xl duration-600 group-hover:text-purple-400/40 md:text-8xl">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3
                  className="mb-6 text-3xl font-bold transition-all md:text-5xl duration-400 group-hover:translate-x-1"
                  style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                >
                  {/* <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 bg-clip-text">
                    {service.title}
                  </span> */}
                  <span className="text-transparent bg-gradient-to-r from-purple-300 via-cyan-100 to-sky-200 bg-clip-text">
                    {service.title}
                  </span>
                </h3>

                <div className="grid gap-10 md:grid-cols-2">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed transition-colors text-slate-200 duration-400 group-hover:text-white">
                      {service.banner}
                    </p>
                    <div className="p-6 transition-all border rounded-2xl border-slate-700/70 bg-slate-900/60 duration-400 group-hover:border-purple-400/60 group-hover:bg-slate-900/90">
                      <p className="text-sm leading-relaxed transition-colors text-slate-200 duration-400 group-hover:text-slate-50">
                        {service.approach}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.solutions.map((solution, sIdx) => (
                      <li
                        key={solution.id}
                        className="flex items-center gap-3 text-sm transition-all group/item text-slate-200 duration-400"
                        style={{
                          transform: hoveredIndex === idx ? 'translateX(4px)' : 'translateX(0)',
                          transitionDelay: hoveredIndex === idx ? `${sIdx * 40}ms` : '0ms',
                        }}
                      >
                        <span className="inline-flex w-2 h-2 transition-transform rounded-full bg-gradient-to-r from-purple-400 via-cyan-300 to-sky-400 duration-400 group-hover/item:scale-125" />
                        <span className="transition-colors duration-400 group-hover/item:text-slate-50">
                          {solution.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigateTo && navigateTo(`service-${service.id}`)}
                  className="group/btn mt-8 inline-flex items-center gap-3 rounded-full border border-purple-400/60 bg-purple-500/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-purple-100 transition-all duration-400 hover:bg-purple-500/35 hover:text-white"
                  style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-400 group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
