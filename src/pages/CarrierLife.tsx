"use client";

import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import {
  Handshake,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

interface CarrierLifeProps {
  navigateTo: (page: string) => void;
}

const HERO_IMAGES = [
  { src: "/images/Herobanner1.jpeg", alt: "CJSS team collaborating" },
  { src: "/images/Herobanner2.jpeg", alt: "Innovation brainstorming session" },
  { src: "/images/Herobanner3.jpg", alt: "CJSS culture celebration" },
];

// ───────────────── CULTURE CARDS CONFIG ─────────────────

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
    gradientClass: "from-cyan-500/25 to-blue-500/25",
    borderClass: "border-cyan-400/50",
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
    gradientClass: "from-indigo-500/25 to-purple-500/25",
    borderClass: "border-purple-400/50",
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
    gradientClass: "from-emerald-500/25 to-cyan-500/25",
    borderClass: "border-emerald-400/50",
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
    gradientClass: "from-sky-500/25 to-cyan-500/25",
    borderClass: "border-sky-400/50",
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
    gradientClass: "from-teal-500/25 to-emerald-500/25",
    borderClass: "border-teal-400/50",
  },
];

type PodId = "demos" | "critiques" | "coinnovation";

interface PodItem {
  id: PodId;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const POD_ITEMS: PodItem[] = [
  {
    id: "demos",
    label: "Weekly demos",
    eyebrow: "Inside pods",
    title: "Show the work, every week",
    description:
      "Pods run weekly demos where engineers, designers, and product owners walk through what was shipped, what is in progress, and what is coming next. It keeps feedback fast and momentum high.",
    bullets: [
      "Short, focused walkthroughs instead of long presentations.",
      "Stakeholders see real product, not just slides or documents.",
      "Teams celebrate progress and spot improvements early.",
    ],
    image: "/images/weekly-demos.jpg",
  },
  {
    id: "critiques",
    label: "Design critiques",
    eyebrow: "Inside pods",
    title: "Sharpen ideas with honest critique",
    description:
      "Design critiques bring product, design, and engineering together to stress-test flows, copy, and interactions. The aim is to make the experience clearer.",
    bullets: [
      "Open, respectful discussions focused on the work, not the person.",
      "Multiple perspectives that uncover edge cases and UX friction.",
      "Decisions documented so everyone knows what we're shipping and why.",
    ],
    image: "/images/design-critiques.jpg",
  },
  {
    id: "coinnovation",
    label: "Co-innovation sessions",
    eyebrow: "Inside pods",
    title: "Build with customers, not for them",
    description:
      "In co-innovation sessions, pods work side-by-side with customers to explore ideas, prototype quickly, and validate what truly solves their problems.",
    bullets: [
      "Customers, product, and engineering in the same conversation.",
      "Sketches, prototypes, and experiments instead of long specs.",
      "Shared ownership of the solution from day one.",
    ],
    image: "/images/co-innovation.jpg",
  },
];

const CarierLife = ({ navigateTo }: CarrierLifeProps) => {
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life at CJSS", page: "CarrierLife" },
    { label: "Job for Fresher", page: "CarrierFresher" },
    { label: "Job for Experienced", page: "CarrierExperienced" },
    { label: "Problems we solve", page: "CarrierProblems" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState<CultureCard | null>(null);
  const [activePod, setActivePod] = useState<PodId>("demos");

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCulture = () => {
    const section = document.getElementById("culture-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const closeModal = () => setActiveCard(null);

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* Push content down to avoid navbar overlap */}
      <div className="h-[80px] md:h-[80px]"></div>

      {/* ─────────────── GLOBAL BACKGROUND WRAPPER (SECTIONS 1–4) ─────────────── */}
      <main className="relative w-full min-h-screen overflow-hidden text-white bg-black">
        {/* unified gradient + grid for whole page */}
        <div className="absolute inset-0 pointer-events-none -z-20">
          {/* base black */}
          <div className="absolute inset-0 bg-black" />
          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
          {/* top glow - more subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.15)_0,transparent_55%)]" />
          {/* bottom glow - more subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(8,47,73,0.2)_0,transparent_60%)]" />
          {/* grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* ─────────────── SECTION 1 — HERO BANNER ─────────────── */}

        <section className="relative z-10 w-full min-h-[80vh] overflow-hidden">
          {/* Carousel background with zoom effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {HERO_IMAGES.map((img, index) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`
            object-cover w-full h-full transform-gpu
            transition-transform duration-[5000ms] ease-out
            ${index === currentIndex ? "scale-110" : "scale-100"}
          `}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
          </div>

          <div className="relative z-10 flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
            <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/70">
              Life at CJSS
            </span>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              BUILD THE{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
                FUTURE
              </span>{" "}
              WITH US
            </h1>

            <p className="max-w-2xl mt-4 text-xs sm:text-sm md:text-base text-white/70">
              Join a workplace where passion meets purpose and people grow
              together.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
              <button
                onClick={handleScrollToCulture}
                className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
              >
                Discover Our Culture
              </button>
            </div>

            <div className="flex gap-2 mt-6 sm:mt-8">
              {HERO_IMAGES.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all ${
                    currentIndex === index
                      ? "w-6 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── SECTION 2 — CULTURE / VALUES / PEOPLE / GROWTH ─────────────── */}
        <section
          id="culture-section"
          className="relative z-10 w-full overflow-hidden"
        >
          {/* soft local glows only (no new solid background) */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute rounded-full -left-40 top-32 h-72 w-72 bg-cyan-500/10 blur-3xl" />
            <div className="absolute rounded-full -right-40 bottom-10 h-80 w-80 bg-purple-600/10 blur-3xl" />
          </div>

          <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase animate-fadeInUp">
              Discuss our culture and values and people
            </p>

            <div className="flex flex-col gap-6 mt-4 lg:flex-row lg:items-start lg:justify-between">
              <div
                className="max-w-2xl animate-fadeInUp"
                style={{ animationDelay: "0.05s" }}
              >
                <p className="mt-2 text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base text-white/80">
                  Life at CJSS is built around people, purpose, and progress.
                  Our culture blends mission, values, teamwork, and innovation
                  into a daily experience where you can do meaningful work and
                  keep growing.
                </p>
              </div>

              <div
                className="w-full max-w-sm mt-4 lg:mt-0 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fadeInUp transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-[10px] sm:text-[11px] font-medium text-cyan-100 border border-cyan-400/40">
                  <Users className="w-3.5 h-3.5" />
                  People-first company culture
                </div>
                <p className="mt-3 text-xs sm:text-sm text-white/90">
                  You&apos;ll work in an environment where you&apos;re trusted,
                  supported, and encouraged to bring your real self, your ideas,
                  and your ambition to the table.
                </p>
                <ul className="mt-3 sm:mt-4 space-y-1.5 text-[11px] sm:text-xs text-white/80">
                  <li>• Respectful, inclusive, and supportive teams</li>
                  <li>• Clear expectations and shared ownership of outcomes</li>
                  <li>• Recognition for effort, impact, and improvement</li>
                </ul>
              </div>
            </div>

            {/* Small chips */}
            <div
              className="grid gap-3 mt-8 sm:mt-10 md:grid-cols-3 animate-fadeInUp"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-3 sm:px-4 py-3 backdrop-blur hover:border-cyan-400/70 hover:shadow-[0_16px_40px_rgba(0,200,255,0.2)] transition-all">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <p className="text-xs text-white/90">
                  Purpose-driven work with real-world business impact.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-3 sm:px-4 py-3 backdrop-blur hover:border-cyan-400/70 hover:shadow-[0_16px_40px_rgba(0,200,255,0.2)] transition-all">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <p className="text-xs text-white/90">
                  Values that show up in everyday decisions and teamwork.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-3 sm:px-4 py-3 backdrop-blur hover:border-cyan-400/70 hover:shadow-[0_16px_40px_rgba(0,200,255,0.2)] transition-all">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                <p className="text-xs text-white/90">
                  A culture where learning, feedback & growth never stop.
                </p>
              </div>
            </div>

            {/* MAIN CARDS – CLICK TO OPEN MODAL */}
            <div className="grid gap-6 mt-10 sm:gap-8 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
              {CULTURE_CARDS.map((card, index) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setActiveCard(card)}
                    className="text-left group focus:outline-none"
                  >
                    <div
                      className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-5 sm:p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(0,200,255,0.15)] animate-fadeInUp"
                      style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex items-center justify-center rounded-2xl bg-gradient-to-tr ${card.gradientClass} p-2 sm:p-2.5 ${card.borderClass} border group-hover:scale-105 transition-transform`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-base font-semibold text-transparent sm:text-lg bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs sm:text-sm text-white/80">
                        {card.shortDescription}
                      </p>
                      <p className="flex items-center gap-1 mt-4 text-[11px] text-cyan-300/80">
                        <span className="inline-block w-1 h-1 rounded-full bg-cyan-400" />
                        Tap to learn more about how we live this every day.
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MODAL FOR CARD DETAILS */}
          {activeCard && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 py-8 bg-black/80 backdrop-blur-sm animate-fadeInUp"
              onClick={closeModal}
            >
              <div
                className="relative w-full max-w-md sm:max-w-2xl md:max-w-4xl rounded-3xl border border-white/10 bg-[#0a0a0a]/98 shadow-[0_24px_80px_rgba(0,0,0,0.95)] overflow-hidden animate-[scaleIn_0.28s_ease-out]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-white/10 p-1.5 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Image side (desktop) */}
                  <div className="relative hidden md:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-600/25" />
                    <img
                      src={activeCard.image}
                      alt={activeCard.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex flex-col gap-4 p-5 sm:p-6 md:p-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 border border-white/20">
                      {(() => {
                        const Icon = activeCard.icon;
                        return <Icon className="w-3.5 h-3.5" />;
                      })()}
                      {activeCard.title}
                    </div>

                    <h3 className="text-lg font-semibold text-transparent sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                      {activeCard.title}
                    </h3>

                    <p className="text-xs leading-relaxed sm:text-sm text-white/80">
                      {activeCard.fullDescription}
                    </p>

                    <ul className="mt-1 sm:mt-2 space-y-1.5 text-[11px] sm:text-xs text-white/80">
                      {activeCard.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 text-[10px] sm:text-[11px] text-white/50">
                      This is how this part of our culture shows up in everyday
                      work, decisions, and collaboration at CJSS.
                    </div>

                    {/* Close button */}
                    <button
                      onClick={closeModal}
                      className="mt-4 rounded-full border border-white/40 px-5 py-2 text-xs text-white hover:bg-white/10 hover:border-white/70 transition-all w-fit"
                    >
                      Close
                    </button>
                  </div>

                  {/* Mobile image */}
                  <div className="md:hidden">
                    <img
                      src={activeCard.image}
                      alt={activeCard.title}
                      className="object-cover w-full h-48 sm:h-56"
                    />
                  </div>
                </div>
              </div>

              <style>{`
                @keyframes scaleIn {
                  0% {
                    opacity: 0;
                    transform: translateY(10px) scale(0.96);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
              `}</style>
            </div>
          )}
        </section>

        {/* ─────────────── SECTION 3 — LEADERSHIP REVIEWS & ARCHITECTURE JAMS ─────────────── */}
        <section
          id="leadership-section"
          className="relative z-10 w-full overflow-hidden"
        >
          {/* local glows, no solid bg */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-[-10%] bottom-[10%] h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
          </div>

          <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase animate-fadeInUp">
              Leadership reviews & architecture jams
            </p>

            <div
              className="max-w-2xl mt-4 animate-fadeInUp"
              style={{ animationDelay: "0.05s" }}
            >
              <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                How we review, design & decide together
              </h2>
              <p className="mt-3 text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base text-white/80">
                Some of our most important work happens in the room together.
                Leadership reviews and architecture jams are where strategy,
                delivery, and engineering thinking stay in sync.
              </p>
            </div>

            <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
              {/* BLOCK 1 — LEADERSHIP REVIEWS */}
              <div className="group relative flex flex-col overflow-hidden rounded-3xl sm:rounded-4xl border border-white/10 bg-[#0a0a0a]/80 shadow-[0_24px_70px_rgba(0,0,0,0.7)] transition-shadow duration-700 hover:shadow-[0_32px_90px_rgba(34,197,235,0.25)] md:flex-row md:h-[260px]">
                <div className="relative w-full h-48 sm:h-56 md:h-full md:w-64 shrink-0">
                  <img
                    src="/images/Venkat.png"
                    alt="Leadership review session"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/75 via-transparent to-cyan-500/30" />
                </div>

                <div className="relative flex flex-col justify-center flex-1 h-full p-5 sm:p-6 md:p-8">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-medium text-cyan-200 border border-cyan-500/40">
                    Leadership Reviews
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-transparent sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                    Strategic reviews that stay close to the work
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-white/80">
                    Leaders and teams sit together to align on outcomes, remove
                    blockers, and keep real customer impact at the center of
                    every decision.
                  </p>

                  <div className="mt-3 sm:mt-4 space-y-2 text-[11px] sm:text-sm transition-all duration-500 ease-out translate-y-3 opacity-0 text-white/80 group-hover:opacity-100 group-hover:translate-y-0">
                    <p>
                      A leadership review at CJSS is a working session, not a
                      slide show. We look at live product metrics, in-flight
                      work, and trade-offs side by side, so teams walk out with
                      clarity rather than more questions.
                    </p>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>
                          Outcome-focused conversations instead of long status
                          updates.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>
                          Clear priorities, trade-offs, and next steps agreed in
                          the room.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>
                          A psychologically safe space where teams can raise
                          risks early and ask for help.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* always visible small text on mobile */}
                  <div className="mt-3 space-y-2 text-[11px] text-white/70 md:hidden">
                    <p>
                      These sessions keep leaders close to the work and give
                      teams direct access to fast decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* BLOCK 2 — ARCHITECTURE JAMS */}
              <div className="group relative flex flex-col overflow-hidden rounded-3xl sm:rounded-4xl border border-white/10 bg-[#0a0a0a]/80 shadow-[0_24px_70px_rgba(0,0,0,0.7)] transition-shadow duration-700 hover:shadow-[0_32px_90px_rgba(168,85,247,0.25)] md:flex-row-reverse md:h-[260px]">
                <div className="relative w-full h-48 sm:h-56 md:h-full md:w-64 shrink-0">
                  <img
                    src="/images/Srikanth.png"
                    alt="Architecture jam session"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tl from-black/75 via-transparent to-purple-500/30" />
                </div>

                <div className="relative flex flex-col justify-center flex-1 h-full p-5 sm:p-6 md:p-8">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-medium text-purple-200 border border-purple-500/40">
                    Architecture Jams
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-transparent sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                    Deep-dive sessions to shape better systems
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-white/80">
                    Architecture jams bring engineers, architects, and product
                    partners together to design systems we can trust in
                    production.
                  </p>

                  <div className="mt-3 sm:mt-4 space-y-2 text-[11px] sm:text-sm transition-all duration-500 ease-out translate-y-3 opacity-0 text-white/80 group-hover:opacity-100 group-hover:translate-y-0">
                    <p>
                      We sketch flows, draw diagrams, and challenge assumptions.
                      The goal is not a perfect diagram, but a shared, practical
                      design that balances speed, reliability, and long-term
                      maintainability.
                    </p>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                        <span>
                          Multiple options explored before we commit to a final
                          approach.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                        <span>
                          Real constraints considered: scale, latency, cost, and
                          operability.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                        <span>
                          Everyone leaves with the same mental model of how the
                          system fits together.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* always visible small text on mobile */}
                  <div className="mt-3 space-y-2 text-[11px] text-white/70 md:hidden">
                    <p>
                      These sessions turn rough ideas into designs that are
                      simple to build and reliable to run.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── SECTION 4 — INSIDE PODS ─────────────── */}
        <section
          id="inside-pods"
          className="relative z-10 w-full overflow-hidden"
        >
          {/* subtle local background accents only */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute left-[-5%] top-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-[-8%] bottom-[5%] h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
          </div>

          <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 sm:py-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase animate-fadeInUp">
              Inside pods
            </p>

            <div
              className="max-w-2xl mt-4 animate-fadeInUp"
              style={{ animationDelay: "0.05s" }}
            >
              <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Inside pods: where collaboration happens
              </h2>
              <p className="mt-3 text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base text-white/80">
                Pods at CJSS are cross-functional teams that run like small
                studios. Every week they demo, critique, and co-create — keeping
                the work visible, the feedback honest, and the ideas moving.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-10 mt-8 sm:mt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-start">
              {/* LEFT: pod selector pills */}
              <div
                className="space-y-4 animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <p className="text-[10px] sm:text-xs font-semibold text-white/60 uppercase tracking-[0.18em]">
                  Rituals inside a pod
                </p>

                <div className="mt-2 space-y-3">
                  {POD_ITEMS.map((pod) => (
                    <button
                      key={pod.id}
                      type="button"
                      onClick={() => setActivePod(pod.id)}
                      className={`w-full text-left rounded-2xl border px-3 sm:px-4 py-3 transition-all duration-300 flex items-center justify-between gap-3 ${
                        activePod === pod.id
                          ? "border-cyan-400/70 bg-[#0a0a0a]/90 shadow-[0_18px_55px_rgba(0,200,255,0.25)]"
                          : "border-white/10 bg-[#0a0a0a]/70 hover:border-cyan-400/50 hover:bg-[#0a0a0a]/90"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-8 w-8 rounded-xl flex items-center justify-center text-[11px] sm:text-[13px] font-semibold ${
                            activePod === pod.id
                              ? "bg-gradient-to-br from-cyan-400 via-sky-400 to-purple-400 text-black"
                              : "bg-white/10 text-white"
                          }`}
                        >
                          {pod.label
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div>
                          <div className="text-xs font-medium sm:text-sm text-white">
                            {pod.label}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-white/50">
                            {pod.id === "demos" &&
                              "Weekly snapshots of real progress."}
                            {pod.id === "critiques" &&
                              "Honest feedback that sharpens the work."}
                            {pod.id === "coinnovation" &&
                              "Customers in the room, not on the sidelines."}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          activePod === pod.id ? "bg-cyan-400" : "bg-white/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-[11px] sm:text-xs text-white/50">
                  Switch between pods to see how weekly demos, design critiques,
                  and co-innovation sessions feel from the inside.
                </p>
              </div>

              {/* RIGHT: active pod panel */}
              <div
                className="relative animate-fadeInUp"
                style={{ animationDelay: "0.15s" }}
              >
                {(() => {
                  const active =
                    POD_ITEMS.find((p) => p.id === activePod) ?? POD_ITEMS[0];
                  return (
                    <div
                      key={active.id}
                      className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#0a0a0a]/90 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl"
                      style={{ animation: "podFade 0.4s ease-out" }}
                    >
                      <div className="flex flex-col md:flex-row h-auto md:h-[420px] lg:h-[480px]">
                        {/* IMAGE */}
                        <div className="relative w-full overflow-hidden h-52 sm:h-60 md:h-full md:w-1/2">
                          <img
                            src={active.image}
                            alt={active.label}
                            className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/70 via-transparent to-cyan-400/25" />
                          <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] sm:text-[11px] text-white border border-white/20">
                            {active.label}
                          </span>
                        </div>

                        {/* CONTENT */}
                        <div className="relative flex flex-col justify-center w-full h-auto gap-1 px-4 py-5 md:h-full sm:px-6 sm:py-6 md:w-1/2 md:px-8">
                          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                            {active.eyebrow}
                          </span>

                          <h3 className="text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-snug sm:leading-tight">
                            {active.title}
                          </h3>

                          <p className="text-xs leading-relaxed sm:text-sm text-white/80">
                            {active.description}
                          </p>

                          <ul className="mt-2 space-y-1.5 text-[11px] sm:text-xs md:text-sm text-white/80">
                            {active.bullets.map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 translate-y-2 opacity-0"
                                style={{
                                  animation: `podBullet 0.35s ease-out ${
                                    0.1 + idx * 0.06
                                  }s forwards`,
                                }}
                              >
                                <span
                                  className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${
                                    active.id === "critiques"
                                      ? "bg-purple-400"
                                      : active.id === "coinnovation"
                                      ? "bg-emerald-400"
                                      : "bg-cyan-400"
                                  }`}
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <p className="mt-3 text-[10px] sm:text-[11px] text-white/50">
                            These rituals keep pods aligned, honest, and always
                            moving forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes podFade {
              0% {
                opacity: 0;
                transform: translateY(16px) scale(0.96);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            @keyframes podBullet {
              0% {
                opacity: 0;
                transform: translateY(6px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </section>
      </main>
    </>
  );
};

export default CarierLife;

//  <section className="relative z-10 w-full min-h-[80vh] overflow-hidden">
//           {/* carousel background per hero (fades into transparent at bottom) */}
//           <div className="absolute inset-0 -z-10">
//             {HERO_IMAGES.map((img, index) => (
//               <div
//                 key={img.src}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
//                   index === currentIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             ))}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
//           </div>

//           <div className="relative z-10 flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 lg:mx-auto">
//             <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/70">
//               Life at CJSS
//             </span>

//             <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
//               BUILD THE{" "}
//               <span className="text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text">
//                 FUTURE
//               </span>{" "}
//               WITH US
//             </h1>

//             <p className="max-w-2xl mt-4 text-xs sm:text-sm md:text-base text-white/70">
//               Join a workplace where passion meets purpose and people grow
//               together.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
//               <button
//                 onClick={handleScrollToCulture}
//                 className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//               >
//                 Discover Our Culture
//               </button>
//             </div>

//             <div className="flex gap-2 mt-6 sm:mt-8">
//               {HERO_IMAGES.map((_, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`h-1.5 rounded-full cursor-pointer transition-all ${
//                     currentIndex === index
//                       ? "w-6 bg-white"
//                       : "w-2 bg-white/40 hover:bg-white/70"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
