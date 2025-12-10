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
  console.log(eventId);

  useEffect(() => {
    async function loadEvent() {
      try {
        const res = await fetch(`/events/${eventId}`);
        const data = await res.json();
        setEvent(data.event);
      } catch (error) {
        console.error("Error loading event:", error);
      }
    }
    loadEvent();
  }, [eventId]);

  if (!event)
    return (
      <p className="text-white p-10 text-center text-xl animate-pulse">
        Loading event details...
      </p>
    );

  return (
    <section className="min-h-screen bg-neutral-950 text-white p-6 md:p-12 flex flex-col items-center animate-fadeIn">
      {/* Banner Image */}
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
      </div>

      {/* Title */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mt-10 text-center
        bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent"
      >
        {event.title}
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-300 mt-3 text-center max-w-3xl">
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
      <p className="mt-8 max-w-4xl text-gray-300 leading-8 text-lg text-center md:text-left">
        {event.description}
      </p>

      {/* Register Button */}
      <button
        onClick={() => navigateTo(`register-${event._id}`)}
        className="mt-10 px-10 py-4 text-lg font-semibold rounded-xl
        bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90 
        transition shadow-[0_0_20px_rgba(168,85,247,0.35)]"
      >
        Register Now →
      </button>
    </section>
  );
}
