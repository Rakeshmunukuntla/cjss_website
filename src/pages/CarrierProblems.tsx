// import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';

// // import React from 'react';
// interface CarrierProblemsProps {
//   navigateTo: (page: string) => void;
// }
// const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
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

// export default CarrierProblems;

'use client';

import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';
import {
  ArrowRight,
  BarChart3,
  CloudCog,
  Gauge,
  LineChart,
  ShieldCheck,
  ShoppingCart,
  Users,
  Workflow,
} from 'lucide-react';

interface CarrierProblemsProps {
  navigateTo: (page: string) => void;
}

const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life at CJSS', page: 'CarrierLife' },
    { label: 'Job for Fresher', page: 'CarrierFresher' },
    { label: 'Job for Experienced', page: 'CarrierExperienced' },
    { label: 'Problems we solve', page: 'CarrierProblems' },
  ];

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* GLOBAL WRAPPER – single continuous background for all 4 sections */}
      <main className="relative w-full min-h-screen overflow-hidden text-white bg-slate-950">
        {/* unified background */}
        <div className="absolute inset-0 pointer-events-none -z-20">
          {/* base */}
          <div className="absolute inset-0 bg-[#020617]" />
          {/* glow layers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32)_0,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,68,68,0.22)_0,transparent_60%)]" />
          {/* grid */}
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:140px_140px]" />
        </div>

        <section className="relative w-full min-h-[85vh] overflow-hidden bg-black text-white flex items-center">
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=90"
            alt="Problems We Solve"
            className="absolute inset-0 object-cover w-full h-full"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/75 to-black/85" />

          {/* Content */}
          <div className="relative max-w-6xl px-6 mx-auto">
            <span className="mb-4 text-xs tracking-[0.25em] uppercase text-cyan-300/80">
              Problems We Solve
            </span>

            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              We solve{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                real business problems
              </span>
              with technology & commerce innovation
            </h1>

            <p className="max-w-2xl mt-5 text-sm sm:text-lg text-white/75">
              From broken conversions to outdated systems, scaling challenges, manual workflows, and
              customer experience gaps — we transform obstacles into competitive advantages.
            </p>
          </div>
        </section>

        {/* ─────────────── SECTION 2 — COMMERCE & CUSTOMER EXPERIENCE ─────────────── */}
        <section className="relative z-10 w-full overflow-hidden">
          {/* section-specific accents (but same base bg) */}
          {/* smooth transition from hero to culture */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          </div>

          <div className="max-w-6xl px-6 py-16 mx-auto">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
                  Commerce & experience
                </p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Fixing the cracks in digital commerce journeys
                </h2>
                <p className="max-w-2xl mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                  We work with brands that are losing revenue to slow pages, broken journeys, and
                  inconsistent experiences across channels. Our teams help stabilize, simplify, and
                  scale what matters most: the customer journey.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/70 border-slate-700">
                  <ShoppingCart className="w-3.5 h-3.5 text-cyan-300" />
                  Cart & checkout friction
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-slate-900/70 border-slate-700">
                  <Users className="w-3.5 h-3.5 text-sky-300" />
                  Inconsistent omnichannel experience
                </span>
              </div>
            </div>

            <div className="grid gap-8 mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch">
              {/* Left: problem cards */}
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_18px_55px_rgba(15,23,42,0.85)] backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-cyan-500/15 border-cyan-400/50">
                      <Gauge className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        Slow pages that bleed conversions
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        High page load times, third-party scripts, and heavy assets quietly erode
                        add-to-cart and checkout completion rates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_18px_55px_rgba(15,23,42,0.85)] backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-400/50">
                      <Workflow className="w-3.5 h-3.5 text-sky-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        Broken or fragmented journeys
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Customers hit dead ends, inconsistent pricing, or missing information
                        between search, PDP, cart, and post-purchase flows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-[0_18px_55px_rgba(15,23,42,0.85)] backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-emerald-500/15 border-emerald-400/50">
                      <LineChart className="w-3.5 h-3.5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        No clear line from UX changes to revenue
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Teams ship UX and content changes without a clear way to measure impact on
                        funnel performance or LTV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: supporting image */}
              <div className="relative h-full">
                <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/18 via-transparent to-slate-900/80" />
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
                    alt="Commerce challenges and problem-solving"
                    className="absolute inset-0 object-cover w-full h-full"
                  />

                  <div className="absolute bottom-3 left-4 rounded-full bg-black/70 px-3 py-1 text-[11px] text-slate-100 border border-cyan-400/60">
                    We stabilize the commerce engine before scaling it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── SECTION 3 — TECHNOLOGY, INTEGRATION & SCALE ─────────────── */}
        <section className="relative z-10 w-full overflow-hidden">
          {/* accents */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute right-[-12%] top-[8%] h-72 w-72 rounded-full bg-sky-500/22 blur-3xl" />
          </div>

          <div className="max-w-6xl px-6 py-16 mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
              Platforms, integrations & scale
            </p>
            <div className="grid gap-10 mt-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)] items-stretch">
              {/* Left: two blocks with image background */}
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-emerald-400/20" />
                  <div className="relative p-6">
                    <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text">
                      Monoliths, patchwork systems & upgrade anxiety
                    </h3>
                    <p className="mt-2 text-sm text-slate-200">
                      Legacy platforms, custom plugins, and tightly coupled integrations make every
                      release risky and slow. Teams are afraid to touch critical flows.
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-200/90">
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Releases that feel fragile, manual and stressful.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>Business logic buried across multiple systems.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/18 via-transparent to-sky-400/20" />
                  <div className="relative p-6">
                    <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-300 bg-clip-text">
                      Limited observability, unknown failure modes
                    </h3>
                    <p className="mt-2 text-sm text-slate-200">
                      Teams learn about issues from customers and business teams instead of their
                      own dashboards and alerts.
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-200/90">
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Hard to answer simple questions like “what broke?”</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>
                          No shared view of system health across product, engineering and business.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative h-full">
                <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
                  {/* 🖼 IMAGE MUST BE FIRST (BOTTOM LAYER) */}
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=90"
                    alt="Platform Integration and Scale"
                    className="absolute inset-0 object-cover w-full h-full"
                  />

                  {/* 🎨 ONLY ONE overlay (not 5) */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/25 via-transparent to-slate-950/75" />

                  {/* 🔹 bottom subtle fade for chips */}
                  <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-200">
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-sky-400/60 bg-sky-500/10">
                        <CloudCog className="w-3.5 h-3.5 text-sky-300" />
                        From monoliths to modular, observable systems
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 border rounded-full border-emerald-400/60 bg-emerald-500/10">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                        Safer releases with better insight & tooling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── SECTION 4 — DATA, OPERATIONS & DECISION-MAKING ─────────────── */}
        <section className="relative z-10 w-full pb-20 overflow-hidden">
          {/* accents */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute left-[10%] bottom-[5%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>

          <div className="max-w-6xl px-6 pt-4 mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
              Data, operations & decisions
            </p>

            <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-stretch">
              {/* Left: summary + problem→outcome rows */}
              <div className="space-y-5">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Turning noisy operations into clear, data-backed decisions
                </h2>
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                  Many teams are drowning in reports, tools and dashboards—but still lack a single
                  view of what to fix first. We help connect the dots between data, operations, and
                  customer outcomes.
                </p>

                <div className="mt-3 space-y-3">
                  <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.8)]">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-cyan-500/15 border-cyan-400/60">
                        <LineChart className="w-3.5 h-3.5 text-cyan-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-50">
                          Problem: Reporting without decisions
                        </p>
                        <p className="mt-1 text-xs text-slate-300">
                          Teams generate reports, but they rarely lead to clear prioritization or
                          changes in roadmap.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 pl-10 text-xs text-emerald-300">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        Outcome: Focused views for decision-makers that link metrics to next best
                        actions.
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.8)]">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center mt-1 border h-7 w-7 rounded-xl bg-sky-500/15 border-sky-400/60">
                        <Users className="w-3.5 h-3.5 text-sky-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-50">
                          Problem: Ops & product not aligned
                        </p>
                        <p className="mt-1 text-xs text-slate-300">
                          Operations teams see issues, product teams own backlog, and engineering
                          owns delivery—but they lack a shared view.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 pl-10 text-xs text-emerald-300">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        Outcome: Shared operational dashboards that connect incidents, customer
                        impact, and roadmap decisions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative h-full">
                <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/18 via-transparent to-sky-400/18" />
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90"
                    alt="Data Operations and Decision Making"
                    className="absolute inset-0 object-cover w-full h-full"
                  />

                  <div className="absolute bottom-3 left-4 right-4 rounded-2xl bg-black/70 px-4 py-3 text-[11px] text-slate-100 border border-emerald-400/60">
                    We design systems and working rhythms so teams know what to fix first—and why it
                    matters to customers and the business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarrierProblems;
