// 'use client';

// import { useEffect, useRef, useState } from 'react';

// interface TestimonialCard {
//   id: string;
//   text: string;
//   author: string;
//   role: string;
//   tech: string;
// }

// const TESTIMONIAL_CARDS: TestimonialCard[] = [
//   // Row 1
//   {
//     id: '1',
//     text: 'SAP Hybris enables seamless e-commerce experiences across multiple channels.',
//     author: 'Tech Lead',
//     role: 'E-commerce',
//     tech: 'SAP Hybris',
//   },
//   {
//     id: '2',
//     text: 'Adobe Experience Manager transformed our content management workflow. Reduced publication time significantly.',
//     author: 'Content Director',
//     role: 'Digital Marketing',
//     tech: 'Adobe AEM',
//   },
//   {
//     id: '3',
//     text: 'React provides the flexibility and performance our modern applications demand.',
//     author: 'Frontend Architect',
//     role: 'Web Development',
//     tech: 'React',
//   },
//   {
//     id: '3b',
//     text: 'TypeScript ensures code quality and prevents runtime errors. Type safety is invaluable in large codebases.',
//     author: 'Code Lead',
//     role: 'Development',
//     tech: 'TypeScript',
//   },
//   {
//     id: '3c',
//     text: 'Next.js accelerates development with server-side rendering and static generation capabilities.',
//     author: 'Full Stack Dev',
//     role: 'Engineering',
//     tech: 'Next.js',
//   },
//   // Row 2
//   {
//     id: '4',
//     text: 'Java backend services power our enterprise infrastructure with reliability and scalability.',
//     author: 'Backend Engineer',
//     role: 'Infrastructure',
//     tech: 'Java',
//   },
//   {
//     id: '5',
//     text: 'Cloud infrastructure provides unmatched scalability and reliability for our operations.',
//     author: 'Cloud Architect',
//     role: 'DevOps',
//     tech: 'Cloud Tech',
//   },
//   {
//     id: '6',
//     text: 'Automated testing frameworks ensure quality at scale. QA automation reduced bugs by 65%.',
//     author: 'QA Lead',
//     role: 'Quality Assurance',
//     tech: 'Automation',
//   },
//   {
//     id: '6b',
//     text: 'Kubernetes orchestration simplified our container deployment and scaling processes.',
//     author: 'Platform Engineer',
//     role: 'DevOps',
//     tech: 'Kubernetes',
//   },
//   {
//     id: '6c',
//     text: 'PostgreSQL database provides reliable persistence and advanced query capabilities.',
//     author: 'Database Admin',
//     role: 'Infrastructure',
//     tech: 'PostgreSQL',
//   },
//   // Row 3
//   {
//     id: '7',
//     text: 'Machine Learning capabilities drive intelligent decision-making in our platform.',
//     author: 'ML Engineer',
//     role: 'AI/ML',
//     tech: 'AI/ML',
//   },
//   {
//     id: '8',
//     text: 'DevOps practices streamlined our deployment pipeline and reduced time-to-market.',
//     author: 'DevOps Engineer',
//     role: 'Infrastructure',
//     tech: 'DevOps',
//   },
//   {
//     id: '9',
//     text: 'Microservices architecture provided modularity for rapid feature development.',
//     author: 'System Architect',
//     role: 'Architecture',
//     tech: 'Microservices',
//   },
//   {
//     id: '9b',
//     text: 'Docker containerization ensures consistency across development and production environments.',
//     author: 'Ops Engineer',
//     role: 'DevOps',
//     tech: 'Docker',
//   },
//   {
//     id: '9c',
//     text: 'GraphQL provides flexible and efficient data querying for modern applications.',
//     author: 'API Designer',
//     role: 'Backend',
//     tech: 'GraphQL',
//   },
// ];

// export const TechShowcaseSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardId = entry.target.getAttribute('data-card-id');
//             if (cardId) {
//               setVisibleCards((prev) => new Set([...prev, cardId]));
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = sectionRef.current?.querySelectorAll('[data-card-id]');
//     cards?.forEach((card) => observer.observe(card));

//     return () => {
//       cards?.forEach((card) => observer.unobserve(card));
//     };
//   }, []);

//   const groupedCards = [
//     TESTIMONIAL_CARDS.slice(0, 5), // Row 1: 5 cards
//     TESTIMONIAL_CARDS.slice(5, 10), // Row 2: 5 cards
//     TESTIMONIAL_CARDS.slice(10, 15), // Row 3: 5 cards
//   ];

//   return (
//     <section ref={sectionRef} className="relative py-24 overflow-hidden bg-neutral-950">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Section Header */}
//         <div className="px-6 mb-16 text-center">
//           <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl animate-slideUp">
//             Loved by devs worldwide
//           </h2>
//           <p className="text-xl text-white animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//             See what developers are saying about our technology stack
//           </p>
//         </div>

//         {/* Horizontal Scrolling Rows */}
//         <div className="space-y-8">
//           {groupedCards.map((row, rowIdx) => (
//             <div key={rowIdx} className="overflow-hidden">
//               <div
//                 className="flex gap-6 px-6 pb-4"
//                 style={{
//                   animation:
//                     rowIdx % 2 === 1
//                       ? 'scroll-reverse 20s linear infinite'
//                       : 'scroll 20s linear infinite',
//                   direction: rowIdx % 2 === 1 ? 'rtl' : 'ltr',
//                 }}
//               >
//                 {/* Duplicate cards for seamless scroll */}
//                 {[...row, ...row].map((card, idx) => (
//                   <div
//                     key={`${card.id}-${idx}`}
//                     data-card-id={card.id}
//                     className={`shrink-0 w-80 bg-linear-to-br from-neutral-900 to-neutral-800 border border-neutral-700 hover:border-purple-500/50 rounded-xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 cursor-pointer ${
//                       visibleCards.has(card.id) ? 'opacity-100' : 'opacity-50'
//                     }`}
//                     style={{
//                       animation: visibleCards.has(card.id)
//                         ? `revealUp 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards`
//                         : 'none',
//                     }}
//                   >
//                     {/* Tech Badge */}
//                     <div className="inline-flex items-center gap-2 px-2 py-1 mb-3 border rounded-full bg-purple-500/20 border-purple-500/30">
//                       <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
//                       <span className="text-xs font-semibold text-purple-300 whitespace-nowrap">
//                         {card.tech}
//                       </span>
//                     </div>

//                     {/* Quote */}
//                     <p className="h-16 mb-4 text-sm leading-relaxed transition-colors text-neutral-300 line-clamp-3 group-hover:text-white">
//                       "{card.text}"
//                     </p>

//                     {/* Author Info */}
//                     <div className="flex items-center gap-3 pt-3 border-t border-neutral-700">
//                       <div className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-cyan-500 shrink-0">
//                         <span className="text-xs font-bold text-white">
//                           {card.author.charAt(0)}
//                         </span>
//                       </div>
//                       <div className="min-w-0">
//                         <p className="text-sm font-semibold text-white truncate">{card.author}</p>
//                         <p className="text-xs text-white truncate">{card.role}</p>
//                       </div>
//                     </div>

//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl group-hover:opacity-100 bg-linear-to-br from-purple-500/5 to-cyan-500/5 -z-10 blur-xl"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

'use client';

import { useEffect, useRef, useState } from 'react';

interface TestimonialCard {
  id: string;
  text: string;
  author: string;
  role: string;
  tech: string;
}

const TESTIMONIAL_CARDS: TestimonialCard[] = [
  // Row 1
  {
    id: '1',
    text: 'SAP Hybris enables seamless e-commerce experiences across multiple channels.',
    author: 'Tech Lead',
    role: 'E-commerce',
    tech: 'SAP Hybris',
  },
  {
    id: '2',
    text: 'Adobe Experience Manager transformed our content management workflow. Reduced publication time significantly.',
    author: 'Content Director',
    role: 'Digital Marketing',
    tech: 'Adobe AEM',
  },
  {
    id: '3',
    text: 'React provides the flexibility and performance our modern applications demand.',
    author: 'Frontend Architect',
    role: 'Web Development',
    tech: 'React',
  },
  {
    id: '3b',
    text: 'TypeScript ensures code quality and prevents runtime errors. Type safety is invaluable in large codebases.',
    author: 'Code Lead',
    role: 'Development',
    tech: 'TypeScript',
  },
  {
    id: '3c',
    text: 'Next.js accelerates development with server-side rendering and static generation capabilities.',
    author: 'Full Stack Dev',
    role: 'Engineering',
    tech: 'Next.js',
  },
  // Row 2
  {
    id: '4',
    text: 'Java backend services power our enterprise infrastructure with reliability and scalability.',
    author: 'Backend Engineer',
    role: 'Infrastructure',
    tech: 'Java',
  },
  {
    id: '5',
    text: 'Cloud infrastructure provides unmatched scalability and reliability for our operations.',
    author: 'Cloud Architect',
    role: 'DevOps',
    tech: 'Cloud Tech',
  },
  {
    id: '6',
    text: 'Automated testing frameworks ensure quality at scale. QA automation reduced bugs by 65%.',
    author: 'QA Lead',
    role: 'Quality Assurance',
    tech: 'Automation',
  },
  {
    id: '6b',
    text: 'Kubernetes orchestration simplified our container deployment and scaling processes.',
    author: 'Platform Engineer',
    role: 'DevOps',
    tech: 'Kubernetes',
  },
  {
    id: '6c',
    text: 'PostgreSQL database provides reliable persistence and advanced query capabilities.',
    author: 'Database Admin',
    role: 'Infrastructure',
    tech: 'PostgreSQL',
  },
  // Row 3
  {
    id: '7',
    text: 'Machine Learning capabilities drive intelligent decision-making in our platform.',
    author: 'ML Engineer',
    role: 'AI/ML',
    tech: 'AI/ML',
  },
  {
    id: '8',
    text: 'DevOps practices streamlined our deployment pipeline and reduced time-to-market.',
    author: 'DevOps Engineer',
    role: 'Infrastructure',
    tech: 'DevOps',
  },
  {
    id: '9',
    text: 'Microservices architecture provided modularity for rapid feature development.',
    author: 'System Architect',
    role: 'Architecture',
    tech: 'Microservices',
  },
  {
    id: '9b',
    text: 'Docker containerization ensures consistency across development and production environments.',
    author: 'Ops Engineer',
    role: 'DevOps',
    tech: 'Docker',
  },
  {
    id: '9c',
    text: 'GraphQL provides flexible and efficient data querying for modern applications.',
    author: 'API Designer',
    role: 'Backend',
    tech: 'GraphQL',
  },
];

export const TechShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-card-id]');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const groupedCards = [
    TESTIMONIAL_CARDS.slice(0, 5), // Row 1: 5 cards
    TESTIMONIAL_CARDS.slice(5, 10), // Row 2: 5 cards
    TESTIMONIAL_CARDS.slice(10, 15), // Row 3: 5 cards
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#020617] via-[#03051f] to-[#020617]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Soft corner blobs */}
        <div className="absolute -top-48 -left-32 w-[620px] h-[620px] rounded-full bg-cyan-400/18 blur-[160px]" />
        <div className="absolute -bottom-52 -right-28 w-[640px] h-[640px] rounded-full bg-fuchsia-500/18 blur-[170px]" />

        {/* Conic sweep highlight – off-center so it doesn't spin from the middle */}
        <div
          className="absolute -inset-[30%] opacity-75 animate-conicFlow"
          style={{
            backgroundImage:
              'conic-gradient(from 160deg at 85% 10%, transparent, rgba(56,189,248,0.20), transparent 40%, rgba(168,85,247,0.22), transparent 70%, rgba(59,130,246,0.20), transparent)',
            transformOrigin: '85% 10%',
          }}
        />

        {/* Subtle tech grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(56,189,248,0.16) 25%, rgba(56,189,248,0.16) 26%, transparent 27%, transparent 74%, rgba(129,140,248,0.14) 75%, rgba(129,140,248,0.14) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(37,99,235,0.16) 25%, rgba(37,99,235,0.16) 26%, transparent 27%, transparent 74%, rgba(45,212,191,0.14) 75%, rgba(45,212,191,0.14) 76%, transparent 77%, transparent)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-6xl px-6 mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-100/90 backdrop-blur-md">
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-300" />
            </span>
            <span style={{ fontFamily: '"Sora", system-ui, sans-serif' }}>Trusted Tech Stack</span>
          </div>

          <h2
            className="mb-4 text-4xl font-extrabold md:text-5xl text-slate-50 animate-slideUp"
            style={{
              fontFamily: '"Sora", system-ui, sans-serif',
              letterSpacing: '-0.04em',
            }}
          >
            Loved by devs worldwide
          </h2>
          <p
            className="text-base md:text-lg text-slate-300/90 animate-fadeInUp"
            style={{ animationDelay: '0.2s', fontFamily: '"Sora", system-ui, sans-serif' }}
          >
            What engineering teams say about the platforms powering their digital commerce.
          </p>
        </div>

        {/* Scrolling rows */}
        <div className="space-y-4 md:space-y-6">
          {groupedCards.map((row, rowIdx) => (
            <div key={rowIdx} className="w-full py-4 overflow-x-hidden overflow-y-visible">
              <div
                className="flex gap-6 px-6 pb-2 md:px-10"
                style={{
                  animation:
                    rowIdx % 2 === 1
                      ? 'scroll 22s linear infinite reverse'
                      : 'scroll 22s linear infinite',
                  direction: 'ltr',
                }}
              >
                {[...row, ...row].map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    data-card-id={card.id}
                    className={`group relative shrink-0 w-80 rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-slate-950/90 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/80 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] cursor-pointer ${
                      visibleCards.has(card.id) ? 'opacity-100' : 'opacity-65'
                    }`}
                    style={{
                      animation: visibleCards.has(card.id)
                        ? 'revealUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards'
                        : 'none',
                    }}
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_60%)]" />

                    {/* Tech Badge */}
                    <div className="relative inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded-full bg-slate-900/90 border border-cyan-400/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                      <span
                        className="text-[11px] font-semibold text-cyan-100 tracking-wide"
                        style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                      >
                        {card.tech}
                      </span>
                    </div>

                    {/* Quote */}
                    <p
                      className="relative mb-4 text-[13px] leading-relaxed text-slate-200 line-clamp-3 h-16 transition-colors duration-200 group-hover:text-slate-50"
                      style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                    >
                      “{card.text}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-700/80">
                      <div className="flex items-center justify-center rounded-full w-9 h-9 bg-gradient-to-br from-cyan-500 to-indigo-500 shrink-0">
                        <span className="text-xs font-bold text-white">
                          {card.author.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-sm font-semibold truncate text-slate-100"
                          style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                        >
                          {card.author}
                        </p>
                        <p className="text-xs truncate text-slate-400">{card.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local keyframes just for this section */}
      <style>
        {`
          @keyframes conicFlow {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-conicFlow {
            animation: conicFlow 52s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TechShowcaseSection;
