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
        const res = await fetch("https://server-node-cjss.onrender.com/events");
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
    }, 5000);

    return () => clearInterval(timer);
  }, [events]);

  if (events.length === 0) return null;

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {events.map((slide, index) => (
        <div
          key={slide._id}
          className={`
            absolute inset-0 transition-opacity duration-[1200ms] ease-in-out
            ${
              index === current
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex flex-col justify-center max-w-3xl px-12 md:px-24 text-white">
            <h1 className="mb-4 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(125,211,252,0.45)] animate-fadeInUp">
              {slide.title}
            </h1>

            <p className="mb-4 text-lg md:text-2xl font-light animate-fadeInUp delay-150">
              {slide.subtitle}
            </p>

            <button
              onClick={() => {
                console.log("Clicked event:", slide._id);
                navigateTo(`event-${slide._id}`);
              }}
              className="mt-4 w-fit px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90 transition-all animate-fadeInUp"
            >
              Read More →
            </button>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute flex gap-3 -translate-x-1/2 bottom-8 left-1/2">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative h-4 w-4 rounded-full transition-all ${
              current === i ? "scale-125" : "scale-100"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-full ${
                current === i
                  ? "bg-gradient-to-r from-sky-300 to-purple-300 opacity-80 blur-[2px]"
                  : "bg-white/10"
              }`}
            />
            <span
              className={`relative block h-full w-full rounded-full transition-transform ${
                current === i
                  ? "bg-gradient-to-r from-sky-300 to-purple-300 shadow-[0_0_12px_rgba(196,181,253,0.8)] animate-pulse"
                  : "bg-white/40 hover:bg-white/70 hover:scale-110"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
