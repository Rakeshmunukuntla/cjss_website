"use client";

import { useEffect, useRef, useState } from "react";
import { CLIENTS } from "../../lib/Constants";
import Icon from "../Icon";

export const ClientsSection = () => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleIndices((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl animate-slideUp">
          Our Clients
        </h2>

        {/* Clients Grid */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 group ${
                visibleIndices.has(idx) ? "animate-fadeInScale" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {client.image ? (
                <div className="p-6 transition-all duration-300 rounded-2xl group-hover:bg-white/5 group-hover:shadow-lg">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="object-contain w-auto h-16 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="transition-all duration-500 text-neutral-500 group-hover:text-white group-hover:scale-110">
                  <Icon name={client.icon} className="w-8 h-8" />
                </div>
              )}

              <p className="text-sm font-semibold text-center text-neutral-400 transition-colors duration-300 group-hover:text-white">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
