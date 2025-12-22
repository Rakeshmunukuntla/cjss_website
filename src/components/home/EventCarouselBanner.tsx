// "use client";

// import { useState, useEffect } from "react";

// interface EventCarouselBannerProps {
//   navigateTo: (page: string) => void;
// }

// export default function EventCarouselBanner({
//   navigateTo,
// }: EventCarouselBannerProps) {
//   const [events, setEvents] = useState<any[]>([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         const res = await fetch("https://server-node-cjss.onrender.com/events");
//         const data = await res.json();
//         setEvents(data.events || []);
//       } catch (error) {
//         console.error("Failed to load events:", error);
//       }
//     }
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     if (events.length === 0) return;
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % events.length);
//     }, 2500);

//     return () => clearInterval(timer);
//   }, [events]);

//   if (events.length === 0) return null;

//   return (
//     <section className="relative h-[100vh] w-full overflow-hidden">
//       {events.map((slide, index) => (
//         <div
//           key={slide._id}
//           className={`
//             absolute inset-0 transition-opacity duration-[1200ms] ease-in-out
//             ${
//               index === current
//                 ? "opacity-100 pointer-events-auto"
//                 : "opacity-0 pointer-events-none"
//             }
//           `}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="object-cover w-full h-full"
//           />

//           <div className="absolute inset-0 bg-black/55" />

//           <div className="absolute inset-0 flex flex-col justify-center max-w-3xl px-12 md:px-24 text-white">
//             <h1 className="mb-4 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(125,211,252,0.45)] animate-fadeInUp">
//               {slide.title}
//             </h1>

//             <p className="mb-4 text-lg md:text-2xl font-light animate-fadeInUp delay-150">
//               {slide.subtitle}
//             </p>

//             <button
//               onClick={() => {
//                 console.log("Clicked event:", slide._id);
//                 navigateTo(`event-${slide._id}`);
//               }}
//               className="mt-4 w-fit px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90 transition-all animate-fadeInUp"
//             >
//               Read More →
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* Indicators */}
//       {/* <div className="absolute flex gap-3 -translate-x-1/2 bottom-8 left-1/2">
//         {events.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`relative h-4 w-4 rounded-full transition-all ${
//               current === i ? "scale-125" : "scale-100"
//             }`}
//           >
//             <span
//               className={`absolute inset-0 rounded-full ${
//                 current === i
//                   ? "bg-gradient-to-r from-sky-300 to-purple-300 opacity-80 blur-[2px]"
//                   : "bg-white/10"
//               }`}
//             />
//             <span
//               className={`relative block h-full w-full rounded-full transition-transform ${
//                 current === i
//                   ? "bg-gradient-to-r from-sky-300 to-purple-300 shadow-[0_0_12px_rgba(196,181,253,0.8)] animate-pulse"
//                   : "bg-white/40 hover:bg-white/70 hover:scale-110"
//               }`}
//             />
//           </button>
//         ))}
//       </div> */}
//       {/* Mentor-style indicators */}
//       <div className="absolute flex gap-3 -translate-x-1/2 bottom-8 left-1/2">
//         {events.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className="relative h-3 w-10 flex items-center justify-center"
//           >
//             <span
//               className={`
//           block rounded-full transition-all duration-300
//           ${
//             current === i
//               ? "w-10 h-3 bg-gradient-to-r from-sky-300 to-purple-300 shadow-[0_0_12px_rgba(64,200,255,0.4)]"
//               : "w-3 h-3 bg-white/20 rounded-full hover:bg-white/50"
//           }
//         `}
//             ></span>
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";

interface EventCarouselBannerProps {
  navigateTo: (page: string) => void;
}

export default function EventCarouselBanner({
  navigateTo,
}: EventCarouselBannerProps) {
  const [events, setEvents] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("http://172.16.16.33:5000/events");
        const data = await res.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error("Failed to load events:", error);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [events]);

  if (events.length === 0) return null;

  return (
    <section className="relative z-10 w-full min-h-[100vh] overflow-hidden">
      {/* Carousel background with fade effect */}
      <div className="absolute inset-0 -z-10">
        {events.map((slide, index) => (
          <div
            key={slide._id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
        {/* Small label */}
        <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/70">
          Upcoming Events
        </span>

        {/* Title with gradient text */}
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
          {events[current]?.title?.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
            {events[current]?.title?.split(" ").slice(2).join(" ") || "EVENT"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mt-4 text-xs sm:text-sm md:text-base text-white/70">
          {events[current]?.subtitle ||
            "Join us for an amazing experience and be part of something special."}
        </p>

        {/* Button */}
        <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => {
              console.log("Clicked event:", events[current]?._id);
              navigateTo(`event-${events[current]?._id}`);
            }}
            className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
          >
            Read More →
          </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-6 sm:mt-8">
          {events.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full cursor-pointer transition-all ${
                current === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
