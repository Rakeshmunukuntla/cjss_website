"use client";
import { useEffect, useState } from "react";

const images = [
  "/images/dashboard-1.png",
  "/images/dashboard-2.png",
  "/images/dashboard-3.png",
  "/images/dashboard-4.png",
];

const AUTO_PLAY_DELAY = 4000;

const EventCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="min-w-full h-full flex items-center justify-center px-4 sm:px-6"
          >
            <img
              src={src}
              alt={`Connect dashboard ${idx + 1}`}
              className="
                w-full
                max-w-[520px]
                md:max-w-[640px]
                h-auto
                max-h-[260px]
                md:max-h-[300px]
                object-contain
                rounded-2xl
                border border-white/10
                bg-black
              "
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              current === idx
                ? "bg-purple-400 w-4"
                : "bg-white/30 w-2 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="
          absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
          w-8 h-8 sm:w-9 sm:h-9
          rounded-full
          bg-black/40 backdrop-blur
          border border-white/10
          text-white/80 hover:text-white
          flex items-center justify-center
        "
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="
          absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
          w-8 h-8 sm:w-9 sm:h-9
          rounded-full
          bg-black/40 backdrop-blur
          border border-white/10
          text-white/80 hover:text-white
          flex items-center justify-center
        "
      >
        ›
      </button>
    </div>
  );
};

export default EventCarousel;
