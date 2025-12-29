import { COMPANY_INFO } from "../../lib/Constants";
import { useState, useEffect, useRef } from "react";

export const AboutUsSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card");
            if (cardId) setVisibleCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-card]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: "vision",
      title: "Our Vision",
      content: COMPANY_INFO.vision,
      animation: "revealLeft",
      bgImage: "/images/NewVision.png",
    },
    {
      id: "mission",
      title: "Our Mission",
      content: COMPANY_INFO.mission,
      animation: "revealUp",
      bgImage: "/images/NewMission.png",
    },
    {
      id: "values",
      title: "Our Values",
      content: null,
      animation: "revealRight",
      bgImage: "/images/NewValues.png",
    },
  ];

  const highlightChips = [
    "Innovation-led delivery",
    // "Global pods & studios",
    "Experience-first engineering",
  ];

  const statHighlights = [
    { value: "20+", label: "Years Engineering" },
    { value: "50+", label: "Experts" },
    { value: "7", label: "Delivery Hubs" },
    // { value: "96%", label: "Client Retention" },
  ];

  return (
    <section
      className="relative py-24 px-6 overflow-hidden bg-black"
      ref={sectionRef}
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

        {/* Layer 1: soft blobs – reduced opacity */}
        <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-cyan-400/8 blur-[150px] animate-orbFloat" />
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-fuchsia-500/8 blur-[190px]" />

        {/* Layer 2: main conic gradient – reduced opacity */}
        <div
          className="absolute -inset-[30%] opacity-40 animate-conicDrift"
          style={{
            backgroundImage:
              "conic-gradient(from 220deg at 10% 0%, rgba(56,189,248,0.08), transparent 20%, rgba(168,85,247,0.10), transparent 55%, rgba(59,130,246,0.08), transparent 80%, rgba(236,72,153,0.10), transparent)",
            transformOrigin: "10% 0%",
          }}
        />

        {/* Layer 3: subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Layer 4: sweeping band – reduced opacity */}
        <div className="absolute inset-x-0 h-64 overflow-hidden -translate-y-1/2 pointer-events-none top-1/2">
          <div className="relative w-full h-full opacity-40">
            <div className="absolute inset-y-0 w-1/2 -left-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_70%)] blur-3xl animate-sweep" />
          </div>
        </div>

        {/* Layer 5: static ring */}
        <div
          className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-15"
          style={{
            maskImage:
              "radial-gradient(circle, rgba(255,255,255,0.5) 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Top content row */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy & chips */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50">
              <span className="w-12 h-px bg-gradient-to-r from-cyan-400/60 to-purple-400/60" />
              <span>About us</span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Crafting
              <span className="ml-2 text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 bg-clip-text">
                digital experiences
              </span>
              <br />
              with fearless ambition.
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              {COMPANY_INFO.mission}
            </p>

            <div className="flex flex-wrap gap-3">
              {highlightChips.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 text-sm transition-colors border rounded-full text-white/80 border-white/10 bg-[#0a0a0a]/60 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-white/10"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats card */}
          <div className="relative">
            <div className="absolute -inset-7 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/15 blur-3xl animate-pulse" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-2xl p-8">
              {/* subtle glass sweep */}
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <div className="absolute inset-y-0 w-1/2 -left-1/2 bg-gradient-to-r from-white/10 via-transparent to-transparent blur-xl animate-sweep" />
              </div>

              <div className="relative">
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/50">
                  Vision
                </p>
                <p className="text-2xl font-semibold leading-relaxed text-white/90">
                  {COMPANY_INFO.vision}
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  {statHighlights.map((stat) => (
                    <div key={stat.label} className="relative">
                      <span className="absolute inline-flex w-3 h-3 -left-3 -top-3">
                        {/* <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-gradient-to-r from-purple-400 to-cyan-400 animate-ping" /> */}
                        {/* <span className="relative inline-flex w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" /> */}
                      </span>
                      <p className="text-3xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/50">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute w-32 h-32 rounded-full -top-6 -right-6 bg-gradient-to-br from-purple-500/40 to-cyan-400/40 blur-3xl opacity-50 animate-orbFloat" />
            </div>
          </div>
        </div>

        {/* Bottom cards row */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              data-card={card.id}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_35px_100px_rgba(0,0,0,0.8)]"
              style={{
                animation: visibleCards.has(card.id)
                  ? `${card.animation} 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards`
                  : "none",
                animationDelay: `${idx * 0.15}s`,
                opacity: visibleCards.has(card.id) ? 1 : 0,
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${card.bgImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black/90" />
              {/* Hover aurora – reduced opacity */}
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 18% 18%, rgba(168,85,247,0.25), transparent 55%)",
                }}
              />
              {/* Extra glow blob – reduced opacity */}
              <div className="absolute w-32 h-32 -translate-y-1/2 rounded-full -right-10 top-1/2 bg-purple-500/30 blur-3xl opacity-40 animate-orbFloat" />
              {/* Inner border */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10" />

              {/* Content */}
              <div className="relative z-10 p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 text-xl rounded-2xl bg-white/10 text-white/80 backdrop-blur">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-purple-300">
                      {card.title}
                    </h3>
                    <div className="mt-1 h-0.5 w-10 bg-gradient-to-r from-purple-400 via-cyan-400 to-transparent opacity-80" />
                  </div>
                </div>

                {card.id === "values" ? (
                  <ul className="space-y-2">
                    {COMPANY_INFO.values.map((value, vidx) => (
                      <li
                        key={vidx}
                        className="flex items-start gap-2 text-white/80"
                      >
                        {/* <span className="mt-1 text-purple-400">◆</span> */}
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-white/80">
                    {card.content}
                  </p>
                )}

                <div className="flex items-center gap-3 pt-4 text-xs uppercase tracking-[0.3em] text-white/50 border-t border-white/10">
                  <span className="inline-flex w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                  <span>Culture driven by impact</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local keyframes */}
      <style>
        {`
          @keyframes conicDrift {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-conicDrift {
            animation: conicDrift 48s linear infinite;
          }

          @keyframes sweep {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(140%); }
          }
          .animate-sweep {
            animation: sweep 14s linear infinite;
          }
        `}
      </style>
    </section>
  );
};
