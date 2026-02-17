// // // // "use client";

// // // // import { useEffect, useState } from "react";

// // // // interface EventDetailPageProps {
// // // //   eventId: string;
// // // //   navigateTo: (page: string) => void;
// // // // }

// // // // export default function EventDetailPage({
// // // //   eventId,
// // // //   navigateTo,
// // // // }: EventDetailPageProps) {
// // // //   const [event, setEvent] = useState<any>(null);
// // // //   console.log(eventId);

// // // //   useEffect(() => {
// // // //     async function loadEvent() {
// // // //       try {
// // // //         const res = await fetch(
// // // //           `https://server-node-cjss.onrender.com/events/${eventId}`
// // // //         );
// // // //         const data = await res.json();
// // // //         setEvent(data.event);
// // // //       } catch (error) {
// // // //         console.error("Error loading event:", error);
// // // //       }
// // // //     }
// // // //     loadEvent();
// // // //   }, [eventId]);

// // // //   if (!event)
// // // //     return (
// // // //       <p className="text-white p-10 text-center text-xl animate-pulse">
// // // //         Loading event details...
// // // //       </p>
// // // //     );

// // // //   return (
// // // //     <section className="min-h-screen bg-neutral-950 text-white p-6 md:p-12 flex flex-col items-center animate-fadeIn">
// // // //       {/* Banner Image */}
// // // //       <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
// // // //         <img
// // // //           src={event.image}
// // // //           alt={event.title}
// // // //           className="w-full h-[320px] md:h-[420px] object-cover"
// // // //         />
// // // //       </div>

// // // //       {/* Title */}
// // // //       <h1
// // // //         className="text-4xl md:text-5xl font-extrabold mt-10 text-center
// // // //         bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent"
// // // //       >
// // // //         {event.title}
// // // //       </h1>

// // // //       {/* Subtitle */}
// // // //       <p className="text-xl md:text-2xl text-gray-300 mt-3 text-center max-w-3xl">
// // // //         {event.subtitle}
// // // //       </p>

// // // //       {/* Event Info */}
// // // //       <div className="mt-6 text-gray-300 text-lg bg-neutral-900/50 px-6 py-4 rounded-xl border border-neutral-700 shadow-lg">
// // // //         <p className="mb-1">
// // // //           <strong className="text-sky-400">Date:</strong> {event.date}
// // // //         </p>
// // // //         <p>
// // // //           <strong className="text-purple-400">Location:</strong>{" "}
// // // //           {event.location}
// // // //         </p>
// // // //       </div>

// // // //       {/* Description */}
// // // //       <p className="mt-8 max-w-4xl text-gray-300 leading-8 text-lg text-center md:text-left">
// // // //         {event.description}
// // // //       </p>

// // // //       {/* Register Button */}
// // // //       <button
// // // //         onClick={() => navigateTo(`register-${event._id}`)}
// // // //         className="mt-10 px-10 py-4 text-lg font-semibold rounded-xl
// // // //         bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90
// // // //         transition shadow-[0_0_20px_rgba(168,85,247,0.35)]"
// // // //       >
// // // //         Register Now →
// // // //       </button>
// // // //     </section>
// // // //   );
// // // // }
// // // "use client";

// // // import { useEffect, useState } from "react";

// // // interface EventDetailPageProps {
// // //   eventId: string;
// // //   navigateTo: (page: string) => void;
// // // }

// // // export default function EventDetailPage({
// // //   eventId,
// // //   navigateTo,
// // // }: EventDetailPageProps) {
// // //   const [event, setEvent] = useState<any>(null);

// // //   useEffect(() => {
// // //     async function loadEvent() {
// // //       try {
// // //         const res = await fetch(`http://172.16.16.33:5000/events/${eventId}`);
// // //         const data = await res.json();
// // //         setEvent(data.event);
// // //       } catch (error) {
// // //         console.error("Error loading event:", error);
// // //       }
// // //     }
// // //     loadEvent();
// // //   }, [eventId]);

// // //   if (!event)
// // //     return (
// // //       <p className="text-white p-10 text-center text-xl animate-pulse">
// // //         Loading event details...
// // //       </p>
// // //     );

// // //   const titleWords = event.title?.split(" ") || [];

// // //   return (
// // //     <section className="min-h-screen bg-neutral-950 text-white p-6 md:p-12 flex flex-col items-center animate-fadeIn">
// // //       {/* Banner Image */}
// // //       <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
// // //         <img
// // //           src={event.image}
// // //           alt={event.title}
// // //           className="w-full h-[320px] md:h-[420px] object-cover"
// // //         />
// // //       </div>

// // //       {/* Small Label (like carousel) */}
// // //       <span className="mt-10 mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60">
// // //         Event Details
// // //       </span>

// // //       {/* Title – SAME STYLE AS CAROUSEL */}
// // //       <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight text-white">
// // //         {titleWords.slice(0, 2).join(" ")}{" "}
// // //         <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
// // //           {titleWords.slice(2).join(" ") || "EVENT"}
// // //         </span>
// // //       </h1>

// // //       {/* Subtitle – softer like carousel */}
// // //       <p className="max-w-3xl mt-4 text-sm sm:text-base md:text-lg text-white/70 text-center">
// // //         {event.subtitle}
// // //       </p>

// // //       {/* Event Info (unchanged) */}
// // //       <div className="mt-6 text-gray-300 text-lg bg-neutral-900/50 px-6 py-4 rounded-xl border border-neutral-700 shadow-lg">
// // //         <p className="mb-1">
// // //           <strong className="text-sky-400">Date:</strong> {event.date}
// // //         </p>
// // //         <p>
// // //           <strong className="text-purple-400">Location:</strong>{" "}
// // //           {event.location}
// // //         </p>
// // //       </div>

// // //       {/* Description (slightly softer text) */}
// // //       <p className="mt-8 max-w-4xl text-white/65 leading-8 text-base md:text-lg text-center md:text-left">
// // //         {event.description}
// // //       </p>

// // //       {/* Button – SAME AS CAROUSEL */}
// // //       <button
// // //         onClick={() => navigateTo(`register-${event._id}`)}
// // //         className="mt-10 rounded-full border border-white/40 px-6 py-2.5
// // //                    text-sm sm:text-base text-white
// // //                    hover:bg-white/10 hover:border-white/70
// // //                    backdrop-blur transition-all cursor-pointer"
// // //       >
// // //         Register Now →
// // //       </button>
// // //     </section>
// // //   );
// // // }
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

// //   useEffect(() => {
// //     async function loadEvent() {
// //       try {
// //         const res = await fetch(`http://172.16.16.33:5000/events/${eventId}`);
// //         const data = await res.json();
// //         setEvent(data.event);
// //       } catch (error) {
// //         console.error("Error loading event:", error);
// //       }
// //     }
// //     loadEvent();
// //   }, [eventId]);

// //   const navBtn =
// //     "rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

// //   if (!event)
// //     return (
// //       <p className="text-white p-10 text-center text-xl animate-pulse">
// //         Loading event details...
// //       </p>
// //     );

// //   const titleWords = event.title?.split(" ") || [];

// //   return (
// //     <section className="min-h-screen bg-neutral-950 text-white pt-20 md:pt-0">
// //       {/* ================= NAV ACTIONS (UNDER HEADER) ================= */}
// //       <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-6 flex gap-4">
// //         <button onClick={() => navigateTo("home")} className={navBtn}>
// //           ← Home
// //         </button>
// //       </div>

// //       {/* ================= CONTENT ================= */}
// //       <div className="p-6 md:p-12 flex flex-col items-center animate-fadeIn">
// //         {/* Banner Image */}
// //         <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
// //           <img
// //             src={event.image}
// //             alt={event.title}
// //             className="w-full h-[320px] md:h-[420px] object-cover"
// //           />
// //         </div>

// //         {/* Small Label */}
// //         <span className="mt-10 mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60">
// //           Event Details
// //         </span>

// //         {/* Title */}
// //         <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-tight text-white">
// //           {titleWords.slice(0, 2).join(" ")}{" "}
// //           <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
// //             {titleWords.slice(2).join(" ") || "EVENT"}
// //           </span>
// //         </h1>

// //         {/* Subtitle */}
// //         <p className="max-w-3xl mt-4 text-sm sm:text-base md:text-lg text-white/70 text-center">
// //           {event.subtitle}
// //         </p>

// //         {/* Event Info */}
// //         <div className="mt-6 text-gray-300 text-lg bg-neutral-900/50 px-6 py-4 rounded-xl border border-neutral-700 shadow-lg">
// //           <p className="mb-1">
// //             <strong className="text-sky-400">Date:</strong> {event.date}
// //           </p>
// //           <p>
// //             <strong className="text-purple-400">Location:</strong>{" "}
// //             {event.location}
// //           </p>
// //         </div>

// //         {/* Description */}
// //         <p className="mt-8 max-w-4xl text-white/65 leading-8 text-base md:text-lg text-center md:text-left">
// //           {event.description}
// //         </p>

// //         {/* Register Button */}
// //         <button
// //           onClick={() => navigateTo(`register-${event._id}`)}
// //           className={`${navBtn} mt-10`}
// //         >
// //           Register Now →
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";

// interface Event {
//   _id: string;
//   title: string;
//   subtitle: string;
//   date: string;
//   location: string;
//   description: string;
//   image: string;
//   time?: string;
//   organizer?: string;
//   capacity?: number;
// }

// export default function EventDetailPage() {
//   const navigate = useNavigate();
//   const { eventId } = useParams<{ eventId: string }>();
//   const [event, setEvent] = useState<Event | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const navBtn =
//     "rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

//   useEffect(() => {
//     if (!eventId) return;

//     async function loadEvent() {
//       setIsLoading(true);
//       setError(null);
//       try {
//         // const res = await feth(`http://172.16.16.33:5000/events/${eventId}`);
//         const res = await fetch(`http://localhost:5000/events/${eventId}`);

//         if (!res.ok) throw new Error("Event not found");

//         const data = await res.json();
//         setEvent(data.event);
//       } catch (error) {
//         console.error("Error loading event:", error);
//         setError("Failed to load event details");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadEvent();
//   }, [eventId]);

//   const handleNavigate = (path: string) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   /* ================= LOADING STATE ================= */
//   if (isLoading) {
//     return (
//       <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
//         <div className="flex flex-col items-center justify-center min-h-screen px-4">
//           <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
//           <p className="text-white/60">Loading event details...</p>
//         </div>
//       </section>
//     );
//   }

//   /* ================= ERROR STATE ================= */
//   if (error || !event) {
//     return (
//       <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
//         <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
//           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/10 mb-6">
//             <svg
//               className="w-10 h-10 text-purple-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Event Not Found
//           </h2>
//           <p className="text-white/60 mb-6 max-w-md">
//             The event you're looking for doesn't exist or has been removed.
//           </p>
//           <button onClick={() => handleNavigate("/")} className={navBtn}>
//             ← Back to Home
//           </button>
//         </div>
//       </section>
//     );
//   }

//   const titleWords = event.title?.split(" ") || [];

//   return (
//     <section className="min-h-screen bg-neutral-950 text-white pt-20 md:pt-0">
//       {/* ================= NAV ACTIONS (UNDER HEADER) ================= */}
//       <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-6 flex gap-4">
//         <button onClick={() => handleNavigate("/")} className={navBtn}>
//           <ArrowLeft className="w-4 h-4 inline mr-2" />
//           Home
//         </button>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="p-6 md:p-12 flex flex-col items-center">
//         {/* Banner Image */}
//         <div className="w-full max-w-5xl overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(56,189,248,0.2)] border border-neutral-800 relative group">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="w-full h-[320px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

//           {/* Event Badge */}
//           <div className="absolute top-6 left-6">
//             <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/90 to-sky-500/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
//               Upcoming Event
//             </span>
//           </div>
//         </div>

//         {/* Small Label */}
//         <span className="mt-10 mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60">
//           Event Details
//         </span>

//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-tight text-white mb-4">
//           {titleWords.slice(0, 2).join(" ")}{" "}
//           <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
//             {titleWords.slice(2).join(" ") || "EVENT"}
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p className="max-w-3xl mt-2 text-sm sm:text-base md:text-lg text-white/70 text-center">
//           {event.subtitle}
//         </p>

//         {/* Event Info Cards */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
//           {/* Date */}
//           <div className="flex items-start gap-4 p-5 bg-neutral-900/70 border border-neutral-800 rounded-2xl hover:border-purple-500/50 transition-all">
//             <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 border border-sky-500/30 shrink-0">
//               <Calendar className="w-6 h-6 text-sky-400" />
//             </div>
//             <div>
//               <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
//                 Date
//               </p>
//               <p className="text-white font-semibold">{event.date}</p>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="flex items-start gap-4 p-5 bg-neutral-900/70 border border-neutral-800 rounded-2xl hover:border-purple-500/50 transition-all">
//             <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 shrink-0">
//               <MapPin className="w-6 h-6 text-purple-400" />
//             </div>
//             <div>
//               <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
//                 Location
//               </p>
//               <p className="text-white font-semibold">{event.location}</p>
//             </div>
//           </div>

//           {/* Time (if available) */}
//           {event.time && (
//             <div className="flex items-start gap-4 p-5 bg-neutral-900/70 border border-neutral-800 rounded-2xl hover:border-purple-500/50 transition-all">
//               <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-400/30 shrink-0">
//                 <Clock className="w-6 h-6 text-sky-300" />
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
//                   Time
//                 </p>
//                 <p className="text-white font-semibold">{event.time}</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Description */}
//         <div className="mt-12 w-full max-w-4xl">
//           <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl">
//             <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
//               <span className="inline-block w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></span>
//               About This Event
//             </h2>
//             <p className="text-white/70 leading-relaxed text-base md:text-lg whitespace-pre-line">
//               {event.description}
//             </p>
//           </div>
//         </div>

//         {/* Additional Info (if available) */}
//         {(event.organizer || event.capacity) && (
//           <div className="mt-8 w-full max-w-4xl">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {event.organizer && (
//                 <div className="p-5 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
//                   <p className="text-xs uppercase tracking-wider text-white/50 mb-2">
//                     Organized By
//                   </p>
//                   <p className="text-white font-semibold">{event.organizer}</p>
//                 </div>
//               )}
//               {event.capacity && (
//                 <div className="p-5 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
//                   <p className="text-xs uppercase tracking-wider text-white/50 mb-2">
//                     Capacity
//                   </p>
//                   <p className="text-white font-semibold">
//                     {event.capacity} attendees
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           <button
//             onClick={() => handleNavigate(`/events/${event._id}/register`)}
//             className="px-8 py-4 bg-gradient-to-r from-purple-600 to-sky-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
//           >
//             Register Now →
//           </button>

//           <button onClick={() => handleNavigate("/")} className={navBtn}>
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";

interface Event {
  _id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  image: string;
  time?: string;
  organizer?: string;
  capacity?: number;
}

export default function EventDetailPage() {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navBtn =
    "rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

  useEffect(() => {
    if (!eventId) return;

    async function loadEvent() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://172.16.16.33:5000/events/${eventId}`);
        // const res = await fetch(`http://localhost:5000/events/${eventId}`);

        if (!res.ok) throw new Error("Event not found");

        const data = await res.json();
        setEvent(data.event);
      } catch (error) {
        console.error("Error loading event:", error);
        setError("Failed to load event details");
      } finally {
        setIsLoading(false);
      }
    }
    loadEvent();
  }, [eventId]);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= LOADING STATE ================= */
  if (isLoading) {
    return (
      <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
          <p className="text-white/60">Loading event details...</p>
        </div>
      </section>
    );
  }

  /* ================= ERROR STATE ================= */
  if (error || !event) {
    return (
      <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/10 mb-6">
            <svg
              className="w-10 h-10 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Event Not Found
          </h2>
          <p className="text-white/60 mb-6 max-w-md">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <button onClick={() => handleNavigate("/")} className={navBtn}>
            ← Back to Home
          </button>
        </div>
      </section>
    );
  }

  const titleWords = event.title?.split(" ") || [];

  return (
    <section className="min-h-screen bg-neutral-950 text-white pt-20 md:pt-0">
      {/* ================= NAV ACTIONS (UNDER HEADER) ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-6 flex gap-4">
        <button onClick={() => handleNavigate("/")} className={navBtn}>
          <ArrowLeft className="w-4 h-4 inline mr-2" />
          Home
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-6 md:p-12 flex flex-col items-center">
        {/* Banner Image */}
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(56,189,248,0.2)] border border-neutral-800 relative group">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[320px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

          {/* Event Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/90 to-sky-500/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
              Upcoming Event
            </span>
          </div>
        </div>

        {/* Small Label */}
        <span className="mt-10 mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/60">
          Event Details
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-tight text-white mb-4">
          {titleWords.slice(0, 2).join(" ")}{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
            {titleWords.slice(2).join(" ") || "EVENT"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mt-2 text-sm sm:text-base md:text-lg text-white/70 text-center">
          {event.subtitle}
        </p>

        {/* Event Info Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Date */}
          <div className="flex items-start gap-4 p-5 bg-neutral-900/70 border border-neutral-800 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 border border-sky-500/30 shrink-0">
              <Calendar className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                Date
              </p>
              <p className="text-white font-semibold">{event.date}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 p-5 bg-neutral-900/70 border border-neutral-800 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 shrink-0">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                Location
              </p>
              <p className="text-white font-semibold">{event.location}</p>
            </div>
          </div>

          {/* Time (if available) */}
          {event.time && (
            <div className="flex items-start gap-4 p-5 bg-neutral-900/70 border border-neutral-800 rounded-2xl hover:border-purple-500/50 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-400/30 shrink-0">
                <Clock className="w-6 h-6 text-sky-300" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Time
                </p>
                <p className="text-white font-semibold">{event.time}</p>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mt-12 w-full max-w-4xl">
          <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="inline-block w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></span>
              About This Event
            </h2>
            <p className="text-white/70 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {event.description}
            </p>
          </div>
        </div>

        {/* Additional Info (if available) */}
        {(event.organizer || event.capacity) && (
          <div className="mt-8 w-full max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.organizer && (
                <div className="p-5 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-2">
                    Organized By
                  </p>
                  <p className="text-white font-semibold">{event.organizer}</p>
                </div>
              )}
              {event.capacity && (
                <div className="p-5 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-2">
                    Capacity
                  </p>
                  <p className="text-white font-semibold">
                    {event.capacity} attendees
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Register Button - OLD STYLE */}
        <button
          onClick={() => handleNavigate(`/events/${event._id}/register`)}
          className={`${navBtn} mt-10`}
        >
          Register Now →
        </button>
      </div>
    </section>
  );
}
