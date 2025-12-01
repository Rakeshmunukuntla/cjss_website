// // CarierLife.tsx

// import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';

// interface CarrierLifeProps {
//   navigateTo: (page: string) => void;
// }

// const CarierLife = ({ navigateTo }: CarrierLifeProps) => {
//   const links = [
//     { label: 'Home', page: 'CarrierHome' },
//     { label: 'Life at CJSS', page: 'CarrierLife' }, // 👈 must match App key
//     { label: 'Job for Fresher', page: 'CarrierFresher' }, // or whatever you use
//     { label: 'Job for Experienced', page: 'CarrierExperienced' },
//     { label: 'Problems we solve', page: 'CarrierProblems' },
//   ];

//   return (
//     <>
//       <CareerNavigationBar links={links} navigateTo={navigateTo} />
//       <section className="w-full h-28">
//         <p>Career life</p>
//       </section>
//     </>
//   );
// };

// export default CarierLife;

// CarierLife.tsx
// CarierLife.tsx
'use client';

import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';
import { Handshake, Lightbulb, Sparkles, Target, TrendingUp, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CarrierLifeProps {
  navigateTo: (page: string) => void;
}

const HERO_IMAGES = [
  { src: '/images/Herobanner1.jpeg', alt: 'CJSS team collaborating' },
  { src: '/images/Herobanner2.jpeg', alt: 'Innovation brainstorming session' },
  { src: '/images/Herobanner3.jpg', alt: 'CJSS culture celebration' },
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
    id: 'mission',
    title: 'Mission & vision',
    icon: Target,
    shortDescription: 'A clear direction that connects our work to long-term impact.',
    image: '/images/Mission-vision.jpeg',
    fullDescription:
      'Our mission is to deliver technology and commerce solutions that truly move the needle for our clients and their customers. Our vision is to be the trusted partner that helps businesses move faster, smarter, and more confidently into the future.',
    bullets: [
      'Every project is tied to a clear outcome and purpose.',
      'We think long-term, not just release-to-release.',
      'We balance innovation with stability and responsibility.',
    ],
    gradientClass: 'from-cyan-500/25 to-blue-500/25',
    borderClass: 'border-cyan-400/50',
  },
  {
    id: 'values',
    title: 'Values that guide us',
    icon: Sparkles,
    shortDescription: 'Principles that shape how we decide, deliver, and grow together.',
    image: '/images/Values-guide.jpeg',
    fullDescription:
      'We lead with integrity, ownership, and respect. Our values are not slides in a deck—they shape how we collaborate, how we make decisions, and how we show up for each other every day.',
    bullets: [
      'Integrity and transparency in communication and delivery.',
      'Ownership of results, not just tasks.',
      'Curiosity and continuous improvement in everything we do.',
    ],
    gradientClass: 'from-indigo-500/25 to-purple-500/25',
    borderClass: 'border-purple-400/50',
  },
  {
    id: 'teamwork',
    title: 'Teamwork & people',
    icon: Handshake,
    shortDescription: 'Cross-functional teams where every voice is heard and trusted.',
    image: '/images/Teamwork-people.jpeg',
    fullDescription:
      'You will work with people who share knowledge openly, support one another, and care about winning as a team—not just as individuals. We believe strong teams are built on trust, clarity, and shared goals.',
    bullets: [
      'Open, respectful discussions—even when we disagree.',
      'Clear roles, expectations, and shared ownership.',
      'Celebrating wins and learning from challenges together.',
    ],
    gradientClass: 'from-emerald-500/25 to-cyan-500/25',
    borderClass: 'border-emerald-400/50',
  },
  {
    id: 'innovation',
    title: 'Innovation in action',
    icon: Lightbulb,
    shortDescription: 'Practical, everyday innovation built into how we work.',
    image: '/images/Innovation.jpeg',
    fullDescription:
      'Innovation at CJSS is hands-on and continuous. We experiment with new ideas, run small pilots, gather feedback quickly, and scale what works. There is space to question, propose, and improve.',
    bullets: [
      'Room to prototype and test bold ideas.',
      'Modern stacks, tools, and engineering practices.',
      'Focus on solving real problems, not just adding features.',
    ],
    gradientClass: 'from-sky-500/25 to-cyan-500/25',
    borderClass: 'border-sky-400/50',
  },
  {
    id: 'growth',
    title: 'Learning & growth',
    icon: TrendingUp,
    shortDescription: 'A structured, supportive environment for continuous learning.',
    image: '/images/Learning-growth.jpeg',
    fullDescription:
      'Growth is baked into how we work. You will learn by doing, pairing, mentoring, and through structured feedback and learning opportunities. We want your next version of yourself to be built here.',
    bullets: [
      'Regular 1:1s and clear development conversations.',
      'Access to workshops, training, and certifications.',
      'Cross-team collaboration to broaden your experience.',
    ],
    gradientClass: 'from-teal-500/25 to-emerald-500/25',
    borderClass: 'border-teal-400/50',
  },
];

const CarierLife = ({ navigateTo }: CarrierLifeProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life at CJSS', page: 'CarrierLife' },
    { label: 'Job for Fresher', page: 'CarrierFresher' },
    { label: 'Job for Experienced', page: 'CarrierExperienced' },
    { label: 'Problems we solve', page: 'CarrierProblems' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState<CultureCard | null>(null);

  // const [activeExperience, setActiveExperience] = useState<'leadership' | 'architecture' | null>(
  //   null
  // );

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCulture = () => {
    const section = document.getElementById('culture-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeModal = () => setActiveCard(null);

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* ─────────────── SECTION 1 — HERO BANNER ONLY ─────────────── */}
      <section className="relative w-full min-h-[80vh] overflow-hidden bg-black text-white">
        <div className="absolute inset-0 -z-10">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 lg:mx-auto">
          <span className="mb-5 text-xs tracking-[0.25em] uppercase text-white/70">
            Life at CJSS
          </span>

          <h1 className="text-3xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl">
            BUILD THE{' '}
            <span className="text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text">
              FUTURE
            </span>{' '}
            WITH US
          </h1>

          <p className="max-w-2xl mt-4 text-sm text-white/70 sm:text-lg">
            Join a workplace where passion meets purpose and people grow together.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigateTo('CarrierExperienced')}
              className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-black shadow-md hover:bg-emerald-300 hover:shadow-emerald-400/40 transition-all"
            >
              Explore Opportunities
            </button>
            <button
              onClick={handleScrollToCulture}
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
            >
              Discover Our Culture
            </button>
          </div>

          <div className="flex gap-2 mt-8">
            {HERO_IMAGES.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full cursor-pointer transition-all ${
                  currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 2 — CULTURE / VALUES / PEOPLE / GROWTH ─────────────── */}
      <section
        id="culture-section"
        className="relative w-full overflow-hidden border-t border-neutral-900"
      >
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_45%,_#020617_100%)]" />
          <div className="absolute rounded-full -bottom-32 -left-40 h-80 w-80 bg-cyan-500/25 blur-3xl" />
          <div className="absolute rounded-full -bottom-40 -right-40 h-96 w-96 bg-purple-600/25 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:120px_120px] opacity-40" />
        </div>

        <div className="max-w-6xl px-6 py-20 mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase animate-fadeInUp">
            Discuss our culture and values and people
          </p>

          <div className="flex flex-col gap-6 mt-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
              <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                Life at CJSS is built around people, purpose, and progress. Our culture blends
                mission, values, teamwork, and innovation into a daily experience where you can do
                meaningful work and keep growing.
              </p>
            </div>

            <div
              className="w-full max-w-sm mt-4 lg:mt-0 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-950/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.8)] backdrop-blur-xl animate-fadeInUp transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_80px_rgba(8,47,73,0.75)]"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-[11px] font-medium text-cyan-100 border border-cyan-400/40">
                <Users className="w-3.5 h-3.5" />
                People-first company culture
              </div>
              <p className="mt-3 text-sm text-slate-100">
                You&apos;ll work in an environment where you&apos;re trusted, supported, and
                encouraged to bring your real self, your ideas, and your ambition to the table.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
                <li>• Respectful, inclusive, and supportive teams</li>
                <li>• Clear expectations and shared ownership of outcomes</li>
                <li>• Recognition for effort, impact, and improvement</li>
              </ul>
            </div>
          </div>

          {/* Small chips */}
          <div
            className="grid gap-3 mt-10 md:grid-cols-3 animate-fadeInUp"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur hover:border-cyan-400/70 hover:shadow-[0_16px_40px_rgba(8,47,73,0.8)] transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <p className="text-xs text-slate-100">
                Purpose-driven work with real-world business impact.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur hover:border-cyan-400/70 hover:shadow-[0_16px_40px_rgba(8,47,73,0.8)] transition-all">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <p className="text-xs text-slate-100">
                Values that show up in everyday decisions and teamwork.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur hover:border-cyan-400/70 hover:shadow-[0_16px_40px_rgba(8,47,73,0.8)] transition-all">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              <p className="text-xs text-slate-100">
                A culture where learning, feedback & growth never stop.
              </p>
            </div>
          </div>

          {/* MAIN CARDS – CLICK TO OPEN MODAL */}
          <div className="grid gap-8 mt-12 md:grid-cols-2 xl:grid-cols-3">
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
                    className={`flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(8,47,73,0.9)] animate-fadeInUp`}
                    style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center rounded-2xl bg-gradient-to-tr ${card.gradientClass} p-2.5 ${card.borderClass} border group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5 text-slate-50" />
                      </div>
                      <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-slate-200">{card.shortDescription}</p>
                    <p className="flex items-center gap-1 mt-4 text-xs text-cyan-300/80">
                      <span className="inline-block w-1 h-1 rounded-full bg-cyan-400" />
                      Tap to learn more about how we live this every day.
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─────────────── MODAL FOR CARD DETAILS ─────────────── */}
        {activeCard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-[4px] animate-fadeInUp"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full rounded-3xl border border-white/10 bg-slate-950/95 shadow-[0_24px_80px_rgba(15,23,42,0.95)] overflow-hidden animate-[scaleIn_0.28s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-slate-900/80 p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image side */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-600/25" />
                  <img
                    src={activeCard.image}
                    alt={activeCard.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content side */}
                <div className="flex flex-col gap-4 p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-medium text-slate-200 border border-slate-700">
                    {(() => {
                      const Icon = activeCard.icon;
                      return <Icon className="w-3.5 h-3.5" />;
                    })()}
                    {activeCard.title}
                  </div>

                  <h3 className="text-xl font-semibold text-transparent sm:text-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                    {activeCard.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-200">
                    {activeCard.fullDescription}
                  </p>

                  <ul className="mt-2 space-y-1.5 text-xs text-slate-200/90">
                    {activeCard.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-[11px] text-slate-400">
                    This is how this part of our culture shows up in everyday work, decisions, and
                    collaboration at CJSS.
                  </div>
                </div>

                {/* Mobile image (below content on small screens) */}
                <div className="md:hidden">
                  <img
                    src={activeCard.image}
                    alt={activeCard.title}
                    className="object-cover w-full h-56"
                  />
                </div>
              </div>
            </div>

            {/* Simple keyframe for scaleIn (you can move to globals.css if you want) */}
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
        className="relative w-full border-t border-neutral-900 bg-neutral-950"
      >
        {/* subtle background accents */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16)_0,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(147,51,234,0.18)_0,transparent_60%)]" />
        </div>

        <div className="max-w-6xl px-6 py-20 mx-auto">
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase animate-fadeInUp">
            Leadership reviews & architecture jams
          </p>

          {/* Heading + intro */}
          <div className="max-w-2xl mt-4 animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              How we review, design & decide together
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              Some of our most important work happens in the room together. Leadership reviews and
              architecture jams are where strategy, delivery, and engineering thinking stay in sync.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {/* ───────── BLOCK 1 — LEADERSHIP REVIEWS (image LEFT) ───────── */}
            <div className="group relative flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_24px_70px_rgba(0,0,0,0.7)] transition-shadow duration-700 hover:shadow-[0_32px_90px_rgba(34,197,235,0.45)] md:flex-row md:h-70">
              {/* Image LEFT */}
              <div className="relative w-full h-52 md:w-64 md:h-full shrink-0">
                <img
                  src="/images/Venkat.png"
                  alt="Leadership review session"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/75 via-transparent to-cyan-500/30" />
              </div>

              {/* CONTENT */}
              <div className="relative flex flex-col justify-center flex-1 h-full p-6 md:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 text-[11px] font-medium text-cyan-200 border border-cyan-500/40">
                  Leadership Reviews
                </span>

                <h3 className="mt-3 text-xl font-semibold text-transparent md:text-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                  Strategic reviews that stay close to the work
                </h3>

                {/* Always-visible short line */}
                <p className="mt-2 text-sm text-slate-200">
                  Leaders and teams sit together to align on outcomes, remove blockers, and keep
                  real customer impact at the center of every decision.
                </p>

                {/* Animated details on hover (desktop) */}
                <div className="mt-4 space-y-2 text-xs transition-all duration-500 ease-out translate-y-3 opacity-0 sm:text-sm text-slate-200/90 group-hover:opacity-100 group-hover:translate-y-0">
                  <p>
                    A leadership review at CJSS is a working session, not a slide show. We look at
                    live product metrics, in-flight work, and trade-offs side by side, so teams walk
                    out with clarity rather than more questions.
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>Outcome-focused conversations instead of long status updates.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>Clear priorities, trade-offs, and next steps agreed in the room.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>
                        A psychologically safe space where teams can raise risks early and ask for
                        help.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Mobile: show details without hover */}
                <div className="mt-3 space-y-2 text-xs text-slate-200 md:hidden">
                  <p>
                    These sessions keep leaders close to the work and give teams direct access to
                    fast decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* ───────── BLOCK 2 — ARCHITECTURE JAMS (image RIGHT) ───────── */}
            <div className="group relative flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_24px_70px_rgba(0,0,0,0.7)] transition-shadow duration-700 hover:shadow-[0_32px_90px_rgba(168,85,247,0.45)] md:flex-row-reverse md:h-70">
              {/* Image RIGHT */}
              <div className="relative w-full h-52 md:w-64 md:h-full shrink-0">
                <img
                  src="/images/Srikanth.png"
                  alt="Architecture jam session"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tl from-black/75 via-transparent to-purple-500/30" />
              </div>

              {/* CONTENT */}
              <div className="relative flex flex-col justify-center flex-1 h-full p-6 md:p-8 ">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 text-[11px] font-medium text-purple-200 border border-purple-500/40">
                  Architecture Jams
                </span>

                <h3 className="mt-3 text-xl font-semibold text-transparent md:text-2xl bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                  Deep-dive sessions to shape better systems
                </h3>

                <p className="mt-2 text-sm text-slate-200">
                  Architecture jams bring engineers, architects, and product partners together to
                  design systems we can trust in production.
                </p>

                {/* Animated details on hover (desktop) */}
                <div className="mt-4 space-y-2 text-xs transition-all duration-500 ease-out translate-y-3 opacity-0 sm:text-sm text-slate-200/90 group-hover:opacity-100 group-hover:translate-y-0">
                  <p>
                    We sketch flows, draw diagrams, and challenge assumptions. The goal is not a
                    perfect diagram, but a shared, practical design that balances speed,
                    reliability, and long-term maintainability.
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>Multiple options explored before we commit to a final approach.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>
                        Real constraints considered: scale, latency, cost, and operability.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>
                        Everyone leaves with the same mental model of how the system fits together.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Mobile: show details without hover */}
                <div className="mt-3 space-y-2 text-xs text-slate-200 md:hidden">
                  <p>
                    These sessions turn rough ideas into designs that are simple to build and
                    reliable to run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarierLife;
