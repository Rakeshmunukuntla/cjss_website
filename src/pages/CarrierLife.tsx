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

import { useEffect, useState } from 'react';
import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';
import { Users, Target, Sparkles, Handshake, Lightbulb, TrendingUp } from 'lucide-react';

interface CarrierLifeProps {
  navigateTo: (page: string) => void;
}

const HERO_IMAGES = [
  { src: '/images/Herobanner1.jpeg', alt: 'CJSS team collaborating' },
  { src: '/images/Herobanner2.jpeg', alt: 'Innovation brainstorming session' },
  { src: '/images/Herobanner3.jpg', alt: 'CJSS culture celebration' },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCulture = () => {
    const section = document.getElementById('culture-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* ─────────────── SECTION 1 — HERO BANNER ONLY ─────────────── */}
      <section className="relative w-full min-h-[80vh] overflow-hidden bg-black text-white">
        {/* Background Carousel */}
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

        {/* Content */}
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
              className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-black shadow-md hover:bg-emerald-300"
            >
              Explore Opportunities
            </button>
            <button
              onClick={handleScrollToCulture}
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 backdrop-blur"
            >
              Discover Our Culture
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {HERO_IMAGES.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full cursor-pointer ${
                  currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 2 — CULTURE / VALUES / PEOPLE / GROWTH ─────────────── */}
      <section id="culture-section" className="w-full max-w-6xl px-6 py-20 mx-auto">
        {/* Subheading label */}
        <p className="text-xs font-semibold tracking-[0.25em] text-emerald-600 uppercase">
          Discuss our culture and values and people
        </p>

        {/* Main heading + intro */}
        <div className="flex flex-col gap-6 mt-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              What it&apos;s like to work at CJSS
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Life at CJSS is built around people, not just projects. Our culture combines clarity
              of mission, strong values, and a collaborative environment where you can do meaningful
              work, learn continuously, and feel supported at every stage of your growth.
            </p>
          </div>

          {/* Highlight card: culture snapshot */}
          <div className="w-full max-w-sm p-5 mt-4 border shadow-sm lg:mt-0 rounded-2xl border-emerald-100 bg-emerald-50/60">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-emerald-700">
              <Users className="w-3.5 h-3.5" />
              People-first culture
            </div>
            <p className="mt-3 text-sm text-emerald-900">
              We focus on trust, transparency, and real ownership—so you can bring your full self to
              work and do your best work.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-emerald-900/80">
              <li>• Safe space to share ideas and feedback</li>
              <li>• Recognition for contributions and impact</li>
              <li>• Room to experiment, learn, and grow</li>
            </ul>
          </div>
        </div>

        {/* Content grid – Mission, Values, Teamwork, Innovation, Learning & Growth */}
        <div className="grid gap-8 mt-10 md:grid-cols-2 xl:grid-cols-3">
          {/* Mission & Vision */}
          <div className="flex flex-col h-full p-6 bg-white border shadow-sm rounded-2xl border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-emerald-50 p-2.5">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Mission &amp; vision</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Our mission is to deliver technology and commerce solutions that create real impact
              for businesses and people. Our vision is to be the trusted partner that helps
              organizations move faster, smarter, and more confidently into the future.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col h-full p-6 bg-white border shadow-sm rounded-2xl border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-emerald-50 p-2.5">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Values that guide us</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              We operate with integrity, ownership, and respect. We value clarity, simplicity, and
              doing the right thing for our clients, teammates, and community—even when no one is
              watching.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
              <li>• Integrity &amp; transparency</li>
              <li>• Ownership &amp; accountability</li>
              <li>• Curiosity &amp; continuous improvement</li>
            </ul>
          </div>

          {/* Teamwork & People */}
          <div className="flex flex-col h-full p-6 bg-white border shadow-sm rounded-2xl border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-emerald-50 p-2.5">
                <Handshake className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Teamwork &amp; people</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              We work in cross-functional teams where everyone has a voice. You collaborate with
              people who share knowledge openly, support each other, and celebrate wins together.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
              <li>• Open communication and shared goals</li>
              <li>• Respect for different perspectives and skills</li>
              <li>• Strong sense of belonging and trust</li>
            </ul>
          </div>

          {/* Innovation */}
          <div className="flex flex-col h-full p-6 bg-white border shadow-sm rounded-2xl border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-emerald-50 p-2.5">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Innovation in action</h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Innovation here is practical and hands-on. We encourage experimentation, quick
              feedback loops, and learning from both wins and failures to keep improving our
              products and processes.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
              <li>• Space to prototype and test ideas</li>
              <li>• Modern tools and engineering practices</li>
              <li>• Focus on solving real customer problems</li>
            </ul>
          </div>

          {/* Learning, feedback & growth */}
          <div className="flex flex-col h-full p-6 bg-white border shadow-sm rounded-2xl border-slate-200 md:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-emerald-50 p-2.5">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Learning, feedback &amp; growth
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Your growth is a core part of our culture. We encourage continuous learning, honest
              feedback, and clear development paths so you can keep moving forward in your career.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
              <li>• Regular 1:1s and constructive feedback</li>
              <li>• Opportunities for upskilling and certifications</li>
              <li>• Support for learning by doing, mentoring, and collaboration</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarierLife;
