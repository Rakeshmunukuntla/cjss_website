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
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Fetch events
//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         const res = await fetch("http://172.16.16.33:5000/events");
//         const data = await res.json();
//         setEvents(data.events || []);
//       } catch (error) {
//         console.error("Failed to load events:", error);
//       }
//     }
//     fetchEvents();
//   }, []);

//   // Auto-rotate carousel
//   useEffect(() => {
//     if (events.length === 0) return;
//     const timer = setInterval(() => {
//       handleSlideChange((current + 1) % events.length);
//     }, 5000); // 5 seconds to allow zoom effect to complete

//     return () => clearInterval(timer);
//   }, [events, current]);

//   // Handle slide change with transition state
//   const handleSlideChange = (index: number) => {
//     if (index === current) return;
//     setIsTransitioning(true);
//     setCurrent(index);
//     setTimeout(() => setIsTransitioning(false), 100);
//   };

//   if (events.length === 0) return null;

//   return (
//     <section className="relative z-10 w-full min-h-[100vh] overflow-hidden">
//       {/* Carousel background with zoom effect */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {events.map((slide, index) => (
//           <div
//             key={slide._id}
//             className={`
//               absolute inset-0
//               transition-opacity duration-1000 ease-out
//               ${index === current ? "opacity-100" : "opacity-0"}
//             `}
//           >
//             {/* Image with zoom animation */}
//             <div className="absolute inset-0 overflow-hidden">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className={`
//                   object-cover w-full h-full
//                   transform-gpu
//                   ${index === current ? "animate-zoom-in" : "scale-100"}
//                 `}
//                 style={{
//                   // Reset animation when slide changes
//                   animationPlayState: index === current ? "running" : "paused",
//                 }}
//               />
//             </div>
//           </div>
//         ))}

//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex min-h-[100vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
//         {/* Small label */}
//         <span
//           className={`
//             mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/70
//             transform transition-all duration-700 delay-100
//             ${
//               isTransitioning
//                 ? "opacity-0 translate-y-4"
//                 : "opacity-100 translate-y-0"
//             }
//           `}
//         >
//           Upcoming Events
//         </span>

//         {/* Title with gradient text */}
//         <h1
//           className={`
//             text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-white
//             transform transition-all duration-700 delay-200
//             ${
//               isTransitioning
//                 ? "opacity-0 translate-y-4"
//                 : "opacity-100 translate-y-0"
//             }
//           `}
//         >
//           {events[current]?.title?.split(" ").slice(0, 2).join(" ")}{" "}
//           <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
//             {events[current]?.title?.split(" ").slice(2).join(" ") || "EVENT"}
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p
//           className={`
//             max-w-2xl mt-4 text-xs sm:text-sm md:text-base text-white/70
//             transform transition-all duration-700 delay-300
//             ${
//               isTransitioning
//                 ? "opacity-0 translate-y-4"
//                 : "opacity-100 translate-y-0"
//             }
//           `}
//         >
//           {events[current]?.subtitle ||
//             "Join us for an amazing experience and be part of something special."}
//         </p>

//         {/* Button */}
//         <div
//           className={`
//             flex flex-wrap gap-4 mt-6 sm:mt-8
//             transform transition-all duration-700 delay-400
//             ${
//               isTransitioning
//                 ? "opacity-0 translate-y-4"
//                 : "opacity-100 translate-y-0"
//             }
//           `}
//         >
//           <button
//             onClick={() => {
//               console.log("Clicked event:", events[current]?._id);
//               navigateTo(`event-${events[current]?._id}`);
//             }}
//             className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all hover:scale-105 active:scale-95"
//           >
//             Read More →
//           </button>
//         </div>

//         {/* Indicators */}
//         <div
//           className={`
//             flex gap-2 mt-6 sm:mt-8
//             transform transition-all duration-700 delay-500
//             ${isTransitioning ? "opacity-0" : "opacity-100"}
//           `}
//         >
//           {events.map((_, index) => (
//             <div
//               key={index}
//               onClick={() => handleSlideChange(index)}
//               className={`
//                 h-1.5 rounded-full cursor-pointer transition-all duration-300
//                 ${
//                   current === index
//                     ? "w-8 bg-gradient-to-r from-purple-400 to-sky-400 shadow-[0_0_10px_rgba(147,51,234,0.5)]"
//                     : "w-2 bg-white/40 hover:bg-white/70 hover:w-3"
//                 }
//               `}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Inline styles for zoom animation */}
//       <style>{`
//         @keyframes zoomIn {
//           0% {
//             transform: scale(1);
//           }
//           100% {
//             transform: scale(1.15);
//           }
//         }

//         .animate-zoom-in {
//           animation: zoomIn 5.5s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define Event type for better type safety
interface Event {
  _id: string;
  title: string;
  subtitle?: string;
  image: string;
  date?: string;
  description?: string;
}

export default function EventCarouselBanner() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /* ================= FETCH EVENTS ================= */
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("http://172.16.16.33:5000/events");
        // const res = await fetch("http://localhost:5000/events");
        const data = await res.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  /* ================= AUTO-ROTATE CAROUSEL ================= */
  useEffect(() => {
    if (events.length === 0) return;
    const timer = setInterval(() => {
      handleSlideChange((current + 1) % events.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [events, current]);

  /* ================= HANDLE SLIDE CHANGE ================= */
  const handleSlideChange = (index: number) => {
    if (index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 100);
  };

  /* ================= NAVIGATION HANDLERS ================= */
  const handleEventClick = (eventId: string) => {
    navigate(`/events/${eventId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const handleRegisterClick = (eventId: string) => {
  //   navigate(`/events/${eventId}/register`);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  /* ================= LOADING OR NO EVENTS - DON'T RENDER ================= */
  if (isLoading || events.length === 0) {
    return null;
  }

  return (
    <section className="relative z-10 w-full min-h-[100vh] overflow-hidden">
      {/* ================= BACKGROUND CAROUSEL ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {events.map((slide, index) => (
          <div
            key={slide._id}
            className={`
              absolute inset-0 
              transition-opacity duration-1000 ease-out
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          >
            {/* Image with zoom animation */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`
                  object-cover w-full h-full
                  transform-gpu
                  ${index === current ? "animate-zoom-in" : "scale-100"}
                `}
                style={{
                  animationPlayState: index === current ? "running" : "paused",
                }}
              />
            </div>
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-[100vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
        {/* Small label */}
        <span
          className={`
            mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/70
            transform transition-all duration-700 delay-100
            ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          Upcoming Events
        </span>

        {/* Title with gradient text */}
        <h1
          className={`
            text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-white
            transform transition-all duration-700 delay-200
            ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          {events[current]?.title?.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
            {events[current]?.title?.split(" ").slice(2).join(" ") || "EVENT"}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`
            max-w-2xl mt-4 text-xs sm:text-sm md:text-base text-white/70
            transform transition-all duration-700 delay-300
            ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          {events[current]?.subtitle ||
            "Join us for an amazing experience and be part of something special."}
        </p>

        {/* Action Buttons */}
        <div
          className={`
            flex flex-wrap gap-4 mt-6 sm:mt-8
            transform transition-all duration-700 delay-400
            ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          <button
            onClick={() => handleEventClick(events[current]?._id)}
            className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all hover:scale-105 active:scale-95"
          >
            Read More →
          </button>

          {/* <button
            onClick={() => handleRegisterClick(events[current]?._id)}
            className="rounded-full bg-gradient-to-r from-purple-600 to-sky-600 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:from-purple-700 hover:to-sky-700 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/50"
          >
            Register Now
          </button> */}
        </div>

        {/* Indicators */}
        <div
          className={`
            flex gap-2 mt-6 sm:mt-8
            transform transition-all duration-700 delay-500
            ${isTransitioning ? "opacity-0" : "opacity-100"}
          `}
        >
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`
                h-1.5 rounded-full cursor-pointer transition-all duration-300
                ${
                  current === index
                    ? "w-8 bg-gradient-to-r from-purple-400 to-sky-400 shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                    : "w-2 bg-white/40 hover:bg-white/70 hover:w-3"
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Event Date (if available) */}
        {events[current]?.date && (
          <div
            className={`
              mt-4 flex items-center gap-2 text-white/60 text-xs sm:text-sm
              transform transition-all duration-700 delay-600
              ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }
            `}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{events[current].date}</span>
          </div>
        )}
      </div>

      {/* ================= INLINE STYLES ================= */}
      <style>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }

        .animate-zoom-in {
          animation: zoomIn 5.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
