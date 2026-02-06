"use client";

import { COMPANY_INFO } from "../../lib/Constants";
import { useState, useEffect, useRef } from "react";
import {
  Handshake,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

type CultureCard = {
  id: string;
  title: string;
  icon: any;
  shortDescription: string;
  image: string;
  fullDescription: string;
  bullets: string[];
  gradientClass: string;
  borderClass: string;
};

const CULTURE_CARDS: CultureCard[] = [
  {
    id: "mission",
    title: "Mission & vision",
    icon: Target,
    shortDescription:
      "A clear direction that connects our work to long-term impact.",
    image: "/images/Mission-vision.jpeg",
    fullDescription:
      "Our mission is to deliver technology and commerce solutions that truly move the needle for our clients and their customers. Our vision is to be the trusted partner that helps businesses move faster, smarter, and more confidently into the future.",
    bullets: [
      "Every project is tied to a clear outcome and purpose.",
      "We think long-term, not just release-to-release.",
      "We balance innovation with stability and responsibility.",
    ],
    gradientClass: "from-purple-300/25 to-sky-300/25",
    borderClass: "border-purple-300/50",
  },
  {
    id: "values",
    title: "Values that guide us",
    icon: Sparkles,
    shortDescription:
      "Principles that shape how we decide, deliver, and grow together.",
    image: "/images/Values-guide.jpeg",
    fullDescription:
      "We lead with integrity, ownership, and respect. Our values are not slides in a deck—they shape how we collaborate, how we make decisions, and how we show up for each other every day.",
    bullets: [
      "Integrity and transparency in communication and delivery.",
      "Ownership of results, not just tasks.",
      "Curiosity and continuous improvement in everything we do.",
    ],
    gradientClass: "from-purple-300/25 to-sky-300/25",
    borderClass: "border-purple-300/50",
  },
  {
    id: "teamwork",
    title: "Teamwork & people",
    icon: Handshake,
    shortDescription:
      "Cross-functional teams where every voice is heard and trusted.",
    image: "/images/Teamwork-people.jpeg",
    fullDescription:
      "You will work with people who share knowledge openly, support one another, and care about winning as a team—not just as individuals. We believe strong teams are built on trust, clarity, and shared goals.",
    bullets: [
      "Open, respectful discussions—even when we disagree.",
      "Clear roles, expectations, and shared ownership.",
      "Celebrating wins and learning from challenges together.",
    ],
    gradientClass: "from-purple-300/25 to-sky-300/25",
    borderClass: "border-sky-300/50",
  },
  {
    id: "innovation",
    title: "Innovation in action",
    icon: Lightbulb,
    shortDescription: "Practical, everyday innovation built into how we work.",
    image: "/images/Innovation.jpeg",
    fullDescription:
      "Innovation at CJSS is hands-on and continuous. We experiment with new ideas, run small pilots, gather feedback quickly, and scale what works. There is space to question, propose, and improve.",
    bullets: [
      "Room to prototype and test bold ideas.",
      "Modern stacks, tools, and engineering practices.",
      "Focus on solving real problems, not just adding features.",
    ],
    gradientClass: "from-purple-300/25 to-sky-300/25",
    borderClass: "border-sky-300/50",
  },
  {
    id: "growth",
    title: "Learning & growth",
    icon: TrendingUp,
    shortDescription:
      "A structured, supportive environment for continuous learning.",
    image: "/images/Learning-growth.jpeg",
    fullDescription:
      "Growth is baked into how we work. You will learn by doing, pairing, mentoring, and through structured feedback and learning opportunities. We want your next version of yourself to be built here.",
    bullets: [
      "Regular 1:1s and clear development conversations.",
      "Access to workshops, training, and certifications.",
      "Cross-team collaboration to broaden your experience.",
    ],
    gradientClass: "from-purple-300/25 to-sky-300/25",
    borderClass: "border-purple-300/50",
  },
];

export const AboutUsSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [activeCard, setActiveCard] = useState<CultureCard | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card");
            if (cardId) {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.15 },
    );

    const cards = sectionRef.current?.querySelectorAll("[data-card]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCard]);

  const closeModal = () => setActiveCard(null);

  const highlightChips = [
    "Innovation-led delivery",
    "Experience-first engineering",
  ];

  const statHighlights = [
    { value: "20+", label: "Years Engineering" },
    { value: "75+", label: "Experts" },
    { value: "7", label: "Delivery Hubs" },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative px-6 py-24 overflow-hidden bg-black"
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

          {/* Floating orbs */}
          <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-cyan-400/8 blur-[150px] animate-orbFloat" />
          <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full bg-fuchsia-500/8 blur-[190px]" />

          {/* Conic gradient animation */}
          <div
            className="absolute -inset-[30%] opacity-40 animate-conicDrift"
            style={{
              backgroundImage:
                "conic-gradient(from 220deg at 10% 0%, rgba(56,189,248,0.08), transparent 20%, rgba(168,85,247,0.10), transparent 55%, rgba(59,130,246,0.08), transparent 80%, rgba(236,72,153,0.10), transparent)",
              transformOrigin: "10% 0%",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Additional glows for culture section */}
          <div className="absolute rounded-full -left-40 top-[60%] h-72 w-72 bg-purple-500/10 blur-3xl" />
          <div className="absolute rounded-full -right-40 bottom-[20%] h-80 w-80 bg-sky-600/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-16">
          {/* ================= TOP CONTENT ================= */}
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              {/* Label */}
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50">
                <span className="w-12 h-px bg-gradient-to-r from-cyan-400/60 to-purple-400/60" />
                <span>About us</span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Crafting
                <span className="ml-2 text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 bg-clip-text">
                  digital experiences
                </span>
                <br />
                with fearless ambition.
              </h2>

              {/* Description */}
              <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                {COMPANY_INFO.mission}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-3">
                {highlightChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-4 py-2 text-sm border rounded-full text-white/80 border-white/10 bg-[#0a0a0a]/60 backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= STATS CARD ================= */}
            <div className="relative">
              <div className="relative rounded-[32px] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-2xl p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/50">
                  Vision
                </p>
                <p className="text-2xl font-semibold text-white/90">
                  {COMPANY_INFO.vision}
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  {statHighlights.map((stat) => (
                    <div key={stat.label}>
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
            </div>
          </div>

          {/* ================= CULTURE SECTION HEADER ================= */}
          <div className="pt-8">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase animate-fadeInUp">
              Our Culture and Values
            </p>

            <p
              className="max-w-2xl mt-4 text-xs leading-relaxed sm:text-sm md:text-base text-white/80 animate-fadeInUp"
              style={{ animationDelay: "0.05s" }}
            >
              Life at CJSS is built around people, purpose, and progress. Our
              culture blends mission, values, teamwork, and innovation into a
              daily experience where you can do meaningful work and keep
              growing.
            </p>
          </div>

          {/* ================= CULTURE CARDS ================= */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {CULTURE_CARDS.map((card, index) => {
              const Icon = card.icon;
              const isVisible = visibleCards.has(card.id);

              return (
                <button
                  key={card.id}
                  type="button"
                  data-card={card.id}
                  onClick={() => setActiveCard(card)}
                  className="text-left group focus:outline-none"
                >
                  <div
                    className={`flex h-full flex-col rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-5 sm:p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60 ${
                      isVisible ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.05 + index * 0.08}s` }}
                  >
                    {/* Card header */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center rounded-2xl bg-gradient-to-tr ${card.gradientClass} p-2 sm:p-2.5 ${card.borderClass} border group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-base font-semibold text-transparent sm:text-lg bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                        {card.title}
                      </h3>
                    </div>

                    {/* Card description */}
                    <p className="mt-3 text-xs sm:text-sm text-white/80">
                      {card.shortDescription}
                    </p>

                    {/* Card footer */}
                    <p className="flex items-center gap-1 mt-4 text-[11px] text-purple-300/80">
                      <span className="inline-block w-1 h-1 rounded-full bg-purple-300" />
                      Tap to learn more about how we live this every day.
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= KEYFRAMES ================= */}
        <style>
          {`
            @keyframes conicDrift {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            .animate-conicDrift {
              animation: conicDrift 48s linear infinite;
            }

            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeInUp {
              animation: fadeInUp 0.7s ease-out both;
            }

            @keyframes scaleIn {
              0% {
                opacity: 0;
                transform: scale(0.95);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-scaleIn {
              animation: scaleIn 0.3s ease-out both;
            }

            @keyframes orbFloat {
              0%, 100% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(30px, -30px);
              }
            }
            .animate-orbFloat {
              animation: orbFloat 20s ease-in-out infinite;
            }
          `}
        </style>
      </section>

      {/* ================= MODAL - OUTSIDE SECTION FOR PROPER CENTERING ================= */}
      {activeCard && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div
            className="fixed z-[10000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-24px)] max-w-md sm:max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0a0a]/98 shadow-[0_24px_80px_rgba(0,0,0,0.95)] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image side (desktop only) */}
              <div className="relative hidden md:block min-h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/25 via-transparent to-sky-300/25 z-10" />
                <img
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>

              {/* Content side */}
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 border border-white/20 w-fit">
                  {(() => {
                    const Icon = activeCard.icon;
                    return <Icon className="w-3.5 h-3.5" />;
                  })()}
                  {activeCard.title}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-transparent sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  {activeCard.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed sm:text-base text-white/80">
                  {activeCard.fullDescription}
                </p>

                {/* Bullets */}
                <ul className="mt-2 space-y-2 text-xs sm:text-sm text-white/80">
                  {activeCard.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-purple-300 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer text */}
                <div className="mt-4 text-[11px] sm:text-xs text-white/50">
                  This is how this part of our culture shows up in everyday
                  work, decisions, and collaboration at CJSS.
                </div>

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="mt-4 rounded-full border border-white/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 hover:border-white/70 transition-all w-fit"
                >
                  Close
                </button>
              </div>

              {/* Mobile image (shown below content on mobile) */}
              <div className="md:hidden">
                <img
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="object-cover w-full h-52 sm:h-64"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutUsSection;
