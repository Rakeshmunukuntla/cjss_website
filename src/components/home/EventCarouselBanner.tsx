// 'use client';
// import { useState, useEffect } from 'react';

// const slides = [
//   {
//     title: 'Annual Tech Innovation Summit 2025',
//     subtitle: 'Shaping the future of AI, Cloud & Digital Experience',
//     image: '/images/event-slider-1.jpeg',
//   },
//   {
//     title: 'AI & Machine Learning Workshop',
//     subtitle: 'Hands-on intensive training from industry experts',
//     image: '/images/Ai-banner.jpg',
//   },
//   {
//     title: 'Cybersecurity Awareness Program',
//     subtitle: 'Learn to safeguard enterprise systems & data',
//     image: '/images/cyber-shiled.jpg',
//   },
// ];

// export default function EventCarouselBanner() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[60vh] w-full overflow-hidden rounded-2xl">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
//             index === current ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <img src={slide.image} alt="Event" className="object-cover w-full h-full" />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/55" />

//           {/* Text Content */}
//           <div className="absolute inset-0 flex flex-col justify-center max-w-3xl px-12 text-white md:px-24">
//             {/* Light blue → light purple gradient title */}
//             <h1
//               className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl
//                          bg-gradient-to-r from-sky-300 via-sky-200 to-purple-300
//                          bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(125,211,252,0.45)]
//                          animate-fadeInUp"
//             >
//               {slide.title}
//             </h1>

//             <p className="mb-4 text-lg font-light delay-150 md:text-2xl animate-fadeInUp">
//               {slide.subtitle}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* Carousel Indicators with animation & better colors */}
//       <div className="absolute flex gap-3 -translate-x-1/2 bottom-8 left-1/2">
//         {slides.map((_, i) => {
//           const isActive = current === i;
//           return (
//             <button
//               key={i}
//               type="button"
//               onClick={() => setCurrent(i)}
//               className={`
//                 relative h-4 w-4 rounded-full transition-all
//                 ${isActive ? 'scale-125' : 'scale-100'}
//                 focus:outline-none
//               `}
//             >
//               {/* Outer glow ring */}
//               <span
//                 className={`
//                   absolute inset-0 rounded-full
//                   ${
//                     isActive
//                       ? 'bg-gradient-to-r from-sky-300 to-purple-300 opacity-80 blur-[2px]'
//                       : 'bg-white/10'
//                   }
//                 `}
//               />
//               {/* Inner dot */}
//               <span
//                 className={`
//                   relative block h-full w-full rounded-full
//                   ${
//                     isActive
//                       ? 'bg-gradient-to-r from-sky-300 to-purple-300 shadow-[0_0_12px_rgba(196,181,253,0.8)] animate-pulse'
//                       : 'bg-white/40 hover:bg-white/70 hover:scale-110'
//                   }
//                   transition-transform
//                 `}
//               />
//             </button>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Annual Tech Innovation Summit 2025',
    subtitle: 'Shaping the future of AI, Cloud & Digital Experience',
    image: '/images/event-slider-1.jpeg',
  },
  {
    title: 'AI & Machine Learning Workshop',
    subtitle: 'Hands-on intensive training from industry experts',
    image: '/images/Ai-banner.jpg',
  },
  {
    title: 'Cybersecurity Awareness Program',
    subtitle: 'Learn to safeguard enterprise systems & data',
    image: '/images/cyber-shiled.jpg',
  },
];

export default function EventCarouselBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // removed rounded-2xl so no hard edge / separation
    <section className="relative h-[60vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt="Event" className="object-cover w-full h-full" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-3xl px-12 text-white md:px-24">
            {/* Light blue → light purple gradient title */}
            <h1
              className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl
                         bg-gradient-to-r from-sky-300 via-sky-200 to-purple-300
                         bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(125,211,252,0.45)]
                         animate-fadeInUp"
            >
              {slide.title}
            </h1>

            <p className="mb-4 text-lg font-light delay-150 md:text-2xl animate-fadeInUp">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Carousel Indicators with animation & better colors */}
      <div className="absolute flex gap-3 -translate-x-1/2 bottom-8 left-1/2">
        {slides.map((_, i) => {
          const isActive = current === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`
                relative h-4 w-4 rounded-full transition-all
                ${isActive ? 'scale-125' : 'scale-100'}
                focus:outline-none
              `}
            >
              {/* Outer glow ring */}
              <span
                className={`
                  absolute inset-0 rounded-full
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-300 to-purple-300 opacity-80 blur-[2px]'
                      : 'bg-white/10'
                  }
                `}
              />
              {/* Inner dot */}
              <span
                className={`
                  relative block h-full w-full rounded-full
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-300 to-purple-300 shadow-[0_0_12px_rgba(196,181,253,0.8)] animate-pulse'
                      : 'bg-white/40 hover:bg-white/70 hover:scale-110'
                  }
                  transition-transform
                `}
              />
            </button>
          );
        })}
      </div>

      {/* Optional: small fade at bottom to blend with next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#050816] via-transparent" />
    </section>
  );
}
