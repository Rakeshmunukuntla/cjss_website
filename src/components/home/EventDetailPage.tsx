// // "use client";

// // import { useEffect, useState } from "react";

// // interface EventDetailPageProps {
// //   eventId: string;
// //   navigateTo: (page: string) => void;
// // }

// // export default function EventDetailPage({
// //   eventId,
// //   navigateTo,
// // }: EventDetailPageProps) {
// //   const [event, setEvent] = useState<any>(null);
// //   console.log(eventId);

// //   useEffect(() => {
// //     async function loadEvent() {
// //       try {
// //         const res = await fetch(
// //           `https://server-node-cjss.onrender.com/events/${eventId}`
// //         );
// //         const data = await res.json();
// //         setEvent(data.event);
// //       } catch (error) {
// //         console.error("Error loading event:", error);
// //       }
// //     }
// //     loadEvent();
// //   }, [eventId]);

// //   if (!event)
// //     return (
// //       <p className="text-white p-10 text-center text-xl animate-pulse">
// //         Loading event details...
// //       </p>
// //     );

// //   return (
// //     <section className="min-h-screen bg-neutral-950 text-white p-6 md:p-12 flex flex-col items-center animate-fadeIn">
// //       {/* Banner Image */}
// //       <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
// //         <img
// //           src={event.image}
// //           alt={event.title}
// //           className="w-full h-[320px] md:h-[420px] object-cover"
// //         />
// //       </div>

// //       {/* Title */}
// //       <h1
// //         className="text-4xl md:text-5xl font-extrabold mt-10 text-center
// //         bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent"
// //       >
// //         {event.title}
// //       </h1>

// //       {/* Subtitle */}
// //       <p className="text-xl md:text-2xl text-gray-300 mt-3 text-center max-w-3xl">
// //         {event.subtitle}
// //       </p>

// //       {/* Event Info */}
// //       <div className="mt-6 text-gray-300 text-lg bg-neutral-900/50 px-6 py-4 rounded-xl border border-neutral-700 shadow-lg">
// //         <p className="mb-1">
// //           <strong className="text-sky-400">Date:</strong> {event.date}
// //         </p>
// //         <p>
// //           <strong className="text-purple-400">Location:</strong>{" "}
// //           {event.location}
// //         </p>
// //       </div>

// //       {/* Description */}
// //       <p className="mt-8 max-w-4xl text-gray-300 leading-8 text-lg text-center md:text-left">
// //         {event.description}
// //       </p>

// //       {/* Register Button */}
// //       <button
// //         onClick={() => navigateTo(`register-${event._id}`)}
// //         className="mt-10 px-10 py-4 text-lg font-semibold rounded-xl
// //         bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90
// //         transition shadow-[0_0_20px_rgba(168,85,247,0.35)]"
// //       >
// //         Register Now →
// //       </button>
// //     </section>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";

// interface EventDetailPageProps {
//   eventId: string;
//   navigateTo: (page: string) => void;
// }

// export default function EventDetailPage({
//   eventId,
//   navigateTo,
// }: EventDetailPageProps) {
//   const [event, setEvent] = useState<any>(null);

//   useEffect(() => {
//     async function loadEvent() {
//       try {
//         const res = await fetch(`http://172.16.16.33:5000/events/${eventId}`);
//         const data = await res.json();
//         setEvent(data.event);
//       } catch (error) {
//         console.error("Error loading event:", error);
//       }
//     }
//     loadEvent();
//   }, [eventId]);

//   if (!event)
//     return (
//       <p className="text-white p-10 text-center text-xl animate-pulse">
//         Loading event details...
//       </p>
//     );

//   const titleWords = event.title?.split(" ") || [];

//   return (
//     <section className="min-h-screen bg-neutral-950 text-white p-6 md:p-12 flex flex-col items-center animate-fadeIn">
//       {/* Banner Image */}
//       <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-[320px] md:h-[420px] object-cover"
//         />
//       </div>

//       {/* Small Label (like carousel) */}
//       <span className="mt-10 mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60">
//         Event Details
//       </span>

//       {/* Title – SAME STYLE AS CAROUSEL */}
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight text-white">
//         {titleWords.slice(0, 2).join(" ")}{" "}
//         <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
//           {titleWords.slice(2).join(" ") || "EVENT"}
//         </span>
//       </h1>

//       {/* Subtitle – softer like carousel */}
//       <p className="max-w-3xl mt-4 text-sm sm:text-base md:text-lg text-white/70 text-center">
//         {event.subtitle}
//       </p>

//       {/* Event Info (unchanged) */}
//       <div className="mt-6 text-gray-300 text-lg bg-neutral-900/50 px-6 py-4 rounded-xl border border-neutral-700 shadow-lg">
//         <p className="mb-1">
//           <strong className="text-sky-400">Date:</strong> {event.date}
//         </p>
//         <p>
//           <strong className="text-purple-400">Location:</strong>{" "}
//           {event.location}
//         </p>
//       </div>

//       {/* Description (slightly softer text) */}
//       <p className="mt-8 max-w-4xl text-white/65 leading-8 text-base md:text-lg text-center md:text-left">
//         {event.description}
//       </p>

//       {/* Button – SAME AS CAROUSEL */}
//       <button
//         onClick={() => navigateTo(`register-${event._id}`)}
//         className="mt-10 rounded-full border border-white/40 px-6 py-2.5
//                    text-sm sm:text-base text-white
//                    hover:bg-white/10 hover:border-white/70
//                    backdrop-blur transition-all cursor-pointer"
//       >
//         Register Now →
//       </button>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";

interface EventDetailPageProps {
  eventId: string;
  navigateTo: (page: string) => void;
}

export default function EventDetailPage({
  eventId,
  navigateTo,
}: EventDetailPageProps) {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    async function loadEvent() {
      try {
        const res = await fetch(`http://172.16.16.33:5000/events/${eventId}`);
        const data = await res.json();
        setEvent(data.event);
      } catch (error) {
        console.error("Error loading event:", error);
      }
    }
    loadEvent();
  }, [eventId]);

  const navBtn =
    "rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

  if (!event)
    return (
      <p className="text-white p-10 text-center text-xl animate-pulse">
        Loading event details...
      </p>
    );

  const titleWords = event.title?.split(" ") || [];

  return (
    <section className="min-h-screen bg-neutral-950 text-white pt-20 md:pt-0">
      {/* ================= NAV ACTIONS (UNDER HEADER) ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-6 flex gap-4">
        <button onClick={() => navigateTo("home")} className={navBtn}>
          ← Home
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-6 md:p-12 flex flex-col items-center animate-fadeIn">
        {/* Banner Image */}
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </div>

        {/* Small Label */}
        <span className="mt-10 mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60">
          Event Details
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight text-white">
          {titleWords.slice(0, 2).join(" ")}{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
            {titleWords.slice(2).join(" ") || "EVENT"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mt-4 text-sm sm:text-base md:text-lg text-white/70 text-center">
          {event.subtitle}
        </p>

        {/* Event Info */}
        <div className="mt-6 text-gray-300 text-lg bg-neutral-900/50 px-6 py-4 rounded-xl border border-neutral-700 shadow-lg">
          <p className="mb-1">
            <strong className="text-sky-400">Date:</strong> {event.date}
          </p>
          <p>
            <strong className="text-purple-400">Location:</strong>{" "}
            {event.location}
          </p>
        </div>

        {/* Description */}
        <p className="mt-8 max-w-4xl text-white/65 leading-8 text-base md:text-lg text-center md:text-left">
          {event.description}
        </p>

        {/* Register Button */}
        <button
          onClick={() => navigateTo(`register-${event._id}`)}
          className={`${navBtn} mt-10`}
        >
          Register Now →
        </button>
      </div>
    </section>
  );
}
