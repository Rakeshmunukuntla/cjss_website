// // import TalkWithUs from "./TalkUsWith";
// import { useEffect, useState } from "react";

// export default function QualityEngineeringPage() {
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const solutionsSection = document.getElementById("solutions");
//       if (!solutionsSection) return;

//       const sectionTop = solutionsSection.getBoundingClientRect().top;

//       // when section is above viewport top
//       setShowScrollBtn(sectionTop < -100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <main className="w-full min-h-screen text-white bg-[#020617]">
//       {/* --------------------------------------------------------
//           HERO SECTION (Dark)
//       --------------------------------------------------------- */}
//       {/* <section className="relative w-full min-h-[80vh]">
//         <div className="absolute inset-0 -z-10">
//           <img
//             src="/images/testingBanner.png"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>

//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
//           <span className="text-xs tracking-widest text-cyan-300">
//             Quality Engineering
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight">
//             BUILD{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
//               QUALITY
//             </span>{" "}
//             INTO EVERY RELEASE
//           </h1>

//           <p className="mt-4 max-w-2xl text-slate-200/90">
//             We help you move from traditional QA to engineering-driven quality
//             with automation and observability built across the SDLC.
//           </p>
//         </div>
//       </section> */}
//       <section className="relative w-full min-h-[80vh] overflow-hidden">
//         {/* Background */}
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//           <img
//             src="/images/testingBanner.png"
//             className="w-full h-full object-cover animate-slow-zoom"
//             alt="Quality Engineering Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>

//         {/* Content */}
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
//           {/* <span className="text-xs tracking-widest text-cyan-300">
//             Quality Engineering
//           </span> */}
//           <span
//             className="
//   inline-block
//   text-sm sm:text-base
//   font-semibold
//   tracking-[0.42em]
//   text-blue-300
//   animate-aiLabel
//   animate-aiPulse
// "
//           >
//             Quality Engineering
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight">
//             BUILD{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
//               QUALITY
//             </span>{" "}
//             INTO EVERY RELEASE
//           </h1>

//           <p className="mt-4 max-w-2xl text-slate-200/90">
//             We help you move from traditional QA to engineering-driven quality
//             with automation and observability built across the SDLC.
//           </p>
//         </div>
//       </section>

//       {/* ==========================================================
//           SOLUTIONS SECTION (Dark Navy)
//       ========================================================== */}
//       <section
//         id="solutions"
//         className="w-full py-20 bg-[#0d1320] border-t border-white/10"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-light">
//             <span className="font-semibold">Solutions</span> we Offer
//           </h2>

//           <p className="mt-5 max-w-4xl text-slate-300 text-lg">
//             We provide a comprehensive suite of QE services designed to enhance
//             reliability, reduce defects, and accelerate delivery.
//           </p>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-xl font-semibold">QA to QE Transformation</h3>
//               <p className="mt-3 text-slate-300">
//                 Move from traditional QA to engineering-first quality culture.
//               </p>
//               <a
//                 href="#section-qa-qe"
//                 className="mt-3 inline-block text-blue-400"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">Test Domains</h3>
//               <p className="mt-3 text-slate-300">
//                 Build scalable domain-driven testing frameworks.
//               </p>
//               <a
//                 href="#section-test-domain"
//                 className="mt-3 inline-block text-blue-400"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">Test Automation</h3>
//               <p className="mt-3 text-slate-300">
//                 Automate UI, API and mobile testing at scale.
//               </p>
//               <a
//                 href="#section-test-automation"
//                 className="mt-3 inline-block text-blue-400"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">Data Quality</h3>
//               <p className="mt-3 text-slate-300">
//                 Build enterprise-grade test data pipelines.
//               </p>
//               <a
//                 href="#section-data-quality"
//                 className="mt-3 inline-block text-blue-400"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================================
//           SECTION 1 — QA TO QE (Dark Gradient A)
//       ========================================================== */}
//       <section
//         id="section-qa-qe"
//         className="w-full py-24 bg-gradient-to-b from-[#0b111c] to-[#0d1625] text-white"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">QA to QE</span> Transformation
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

//           <p className="mt-4 text-lg leading-relaxed max-w-5xl text-slate-300">
//             Our QE transformation model empowers teams with automation-first
//             delivery, improved observability, and engineering-led quality.
//           </p>

//           {/* Columns */}
//           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div>
//               <h4 className="text-xl font-semibold">Maturity Assessment</h4>
//               <p className="mt-3 text-slate-300">
//                 Benchmark engineering readiness & automation maturity.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Quality Transformation</h4>
//               <p className="mt-3 text-slate-300">
//                 Shift to predictive QE with standardized engineering practices.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Peak Quality</h4>
//               <p className="mt-3 text-slate-300">
//                 Ensure reliability during high-traffic events.
//               </p>
//             </div>
//           </div>

//           {/* Alternating blocks */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">Maturity Assessment</h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Identify gaps & build a roadmap toward engineering excellence.
//               </p>
//             </div>

//             <img
//               src="/images/cloud1.jpg"
//               className="w-full rounded-xl shadow-xl"
//             />
//           </div>

//           <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <img
//               src="/images/cloud2.jpg"
//               className="w-full rounded-xl shadow-xl"
//             />

//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Transition to Predictive QE
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Build reusable frameworks, automation libraries & quality KPIs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================================
//           SECTION 2 — TEST AUTOMATION (Dark Gradient B)
//       ========================================================== */}
//       <section
//         id="section-test-automation"
//         className="w-full py-24 bg-gradient-to-b from-[#05070d] to-[#0a0f1a] text-white"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Test</span> Automation
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Accelerate delivery using UI, API, Mobile & Microservices
//             automation.
//           </p>

//           {/* Columns */}
//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">UI, API & Mobile</h4>
//               <p className="mt-3 text-slate-300">
//                 Unified pipelines for browsers, devices & APIs.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Language Agnostic</h4>
//               <p className="mt-3 text-slate-300">
//                 Java, JS, Python, C# frameworks built for scale.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Tool Accelerators</h4>
//               <p className="mt-3 text-slate-300">
//                 Selenium, Cypress, Playwright, Appium & more.
//               </p>
//             </div>
//           </div>

//           {/* Alternating blocks */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Unified Automation Frameworks
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Scalable frameworks for web, mobile, APIs & microservices.
//               </p>
//             </div>

//             <img
//               src="/images/cloud3.png"
//               className="w-full rounded-xl shadow-xl"
//             />
//           </div>

//           <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <img
//               src="/images/cloud5.png"
//               className="w-full rounded-xl shadow-xl"
//             />

//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Enterprise Tool Expertise
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Strong automation setup using industry-leading tools.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================================
//           SECTION 3 — TEST DOMAINS (Dark Gradient C)
//       ========================================================== */}
//       <section
//         id="section-test-domain"
//         className="w-full py-24 bg-gradient-to-b from-[#0d1625] to-[#111d33] text-white"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Test</span> Domains
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Create scalable, reusable domain-driven test packs for checkout,
//             onboarding, payments, logistics and more.
//           </p>

//           {/* Columns */}
//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">Domain Libraries</h4>
//               <p className="mt-3 text-slate-300">
//                 Reusable flows for core business paths.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Unified Rules</h4>
//               <p className="mt-3 text-slate-300">
//                 Standardized validations across squads.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Governance</h4>
//               <p className="mt-3 text-slate-300">
//                 Strong governance for enterprise-scale testing.
//               </p>
//             </div>
//           </div>

//           {/* Alternating blocks */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">Reusable Flow Packs</h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Login, payments, claims, checkout & order management flows.
//               </p>
//             </div>

//             <img
//               src="/images/cloud6.png"
//               className="w-full rounded-xl shadow-xl"
//             />
//           </div>

//           <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <img
//               src="\images\cloud7.png"
//               className="w-full rounded-xl shadow-xl"
//             />

//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Governance & Compliance
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Ensure enterprise compliance & quality alignment across domains.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================================
//           SECTION 4 — DATA QUALITY (Dark Gradient D)
//       ========================================================== */}
//       <section
//         id="section-data-quality"
//         className="w-full py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320] text-white"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Data</span> Quality
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Build compliant synthetic & masked datasets using scalable
//             provisioning pipelines.
//           </p>

//           {/* Columns */}
//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">Synthetic Data</h4>
//               <p className="mt-3 text-slate-300">
//                 Privacy-safe synthetic test data generation.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Wide Coverage</h4>
//               <p className="mt-3 text-slate-300">
//                 API, E2E, regression & performance test datasets.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Self-Service</h4>
//               <p className="mt-3 text-slate-300">
//                 One-click dataset provisioning for dev & QA.
//               </p>
//             </div>
//           </div>

//           {/* Alternating blocks */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">
//                 End-to-End Data Strategy
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Discovery, masking, modelling & synthetic data factories.
//               </p>
//             </div>

//             <img
//               src="/images/cloud8.png"
//               className="w-full rounded-xl shadow-xl"
//             />
//           </div>

//           <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <img
//               src="/images/cloud9.png"
//               className="w-full rounded-xl shadow-xl"
//             />

//             <div>
//               <h4 className="text-2xl font-semibold">On-Demand Data</h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Instantly generate fresh compliant datasets per environment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TALK WITH US */}
//       {/* <TalkWithUs /> */}
//       {/* =====================================================
//     TALK WITH US — NEHA
// ===================================================== */}
//       <section className="w-full flex justify-center mt-20 mb-20 px-4">
//         <div
//           className="
//       w-full max-w-5xl
//       rounded-3xl
//       bg-slate-900/70
//       backdrop-blur-2xl
//       border border-white/10
//       shadow-[0_0_60px_rgba(34,211,238,0.20)]
//       p-6 sm:p-10 md:p-14
//     "
//         >
//           <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
//             {/* LEFT TEXT BLOCK */}
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
//                 Talk with us
//               </h2>

//               <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
//                 Interested in quality engineering services? Reach out and we'll
//                 connect you with the right specialist who fits your project
//                 needs.
//               </p>

//               <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70" />
//             </div>

//             {/* RIGHT CONTACT CARD */}
//             <div
//               className="
//           rounded-3xl
//           bg-slate-950/80
//           border border-white/10
//           shadow-[0_0_40px_rgba(0,0,0,0.55)]
//           p-6 sm:p-8
//           flex gap-4 sm:gap-5
//           items-start
//           hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
//           transition-all
//         "
//             >
//               {/* PROFILE IMAGE */}
//               <img
//                 src="/images/priya.png"
//                 alt="Priya"
//                 className="
//             h-16 w-16 sm:h-20 sm:w-20
//             rounded-full
//             object-cover
//             border border-purple-500/40
//             shadow-[0_0_20px_rgba(168,85,247,0.35)]
//           "
//               />

//               {/* DETAILS */}
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-white">
//                   Lekhya Pypuri
//                 </h3>
//                 <p className="text-sm text-slate-400">Head of QA Solutions</p>

//                 <p className="mt-3 sm:mt-4 text-sm">
//                   Email:{" "}
//                   <a
//                     href="mailto:qa@cjss.example"
//                     className="text-cyan-400 hover:underline"
//                   >
//                     qa@cjss.example
//                   </a>
//                 </p>

//                 <p className="text-xs text-slate-500 mt-1">
//                   We typically respond within 1 business day.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {showScrollBtn && (
//         <button
//           onClick={() => {
//             document
//               .getElementById("solutions")
//               ?.scrollIntoView({ behavior: "smooth" });
//           }}
//           className="
//       fixed bottom-10 right-10 z-50
//       h-12 w-12
//       rounded-full
//       flex items-center justify-center
//       bg-slate-900/80 backdrop-blur-md
//       border border-cyan-400/30
//       text-cyan-300
//       shadow-[0_0_25px_rgba(34,211,238,0.45)]
//       hover:scale-110
//       hover:shadow-[0_0_40px_rgba(34,211,238,0.65)]
//       transition-all duration-300
//       animate-bounce-slow
//     "
//           aria-label="Scroll to Solutions"
//         >
//           ↑
//         </button>
//       )}
//     </main>
//   );
// }
import React, { useEffect, useState } from "react";

const QualityEngineeringPage: React.FC = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const halfScreen = windowHeight * 0.5;
      let opacity;

      if (scrollY <= halfScreen) {
        opacity = 1 - (scrollY / halfScreen) * 0.9;
      } else {
        const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
        opacity = 0.1 - secondHalfProgress * 0.1;
      }

      setHeroOpacity(Math.max(0, Math.min(1, opacity)));

      const solutionsSection = document.getElementById("solutions");
      if (!solutionsSection) return;
      const sectionTop = solutionsSection.getBoundingClientRect().top;
      setShowScrollBtn(sectionTop < -100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full min-h-screen text-white">
      {/* =====================================================
          HERO SECTION - FIXED PARALLAX WITH ZOOM
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/testingBanner.png"
            className="w-full h-full object-cover animate-hero-zoom-in"
            alt="Quality Engineering Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-20 flex flex-col justify-center h-full">
          <span className="inline-block text-sm sm:text-base font-semibold tracking-[0.42em] text-purple-300 animate-aiLabel">
            QUALITY ENGINEERING
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-up">
            BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
              QUALITY
            </span>{" "}
            INTO EVERY RELEASE
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-200/90 animate-fade-up [animation-delay:0.12s]">
            We help you move from traditional QA to engineering-driven quality
            with automation and observability built across the SDLC.
          </p>
        </div>
      </div>

      {/* Spacer for fixed hero */}
      <div className="h-screen" />

      {/* =====================================================
          CONTENT SECTIONS
      ===================================================== */}
      <div className="relative z-10">
        {/* SOLUTIONS WE OFFER */}
        <section
          id="solutions"
          className="w-full py-20 bg-[#0d1320] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl font-light animate-fade-up">
              <span className="font-semibold">Solutions</span> we Offer
            </h2>

            <p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
              We provide a comprehensive suite of QE services designed to
              enhance reliability, reduce defects, and accelerate delivery.
            </p>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {/* 1 - QA to QE */}
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>①</span>
                  <span>Transformation</span>
                </div>
                <h3 className="text-xl font-semibold">
                  QA to QE Transformation
                </h3>
                <p className="mt-3 text-slate-300">
                  Move from traditional QA to engineering-first quality culture.
                </p>
                <a
                  href="#section-qa-qe"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              {/* 2 - Test Domains */}
              <div className="animate-fade-up [animation-delay:0.05s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <span>②</span>
                  <span>Domains</span>
                </div>
                <h3 className="text-xl font-semibold">Test Domains</h3>
                <p className="mt-3 text-slate-300">
                  Build scalable domain-driven testing frameworks.
                </p>
                <a
                  href="#section-test-domain"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              {/* 3 - Test Automation */}
              <div className="animate-fade-up [animation-delay:0.1s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>③</span>
                  <span>Automation</span>
                </div>
                <h3 className="text-xl font-semibold">Test Automation</h3>
                <p className="mt-3 text-slate-300">
                  Automate UI, API and mobile testing at scale.
                </p>
                <a
                  href="#section-test-automation"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              {/* 4 - Data Quality */}
              <div className="animate-fade-up [animation-delay:0.15s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <span>④</span>
                  <span>Data</span>
                </div>
                <h3 className="text-xl font-semibold">Data Quality</h3>
                <p className="mt-3 text-slate-300">
                  Build enterprise-grade test data pipelines.
                </p>
                <a
                  href="#section-data-quality"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 1 — QA TO QE TRANSFORMATION
        ===================================================== */}
        <section
          id="section-qa-qe"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">QA to QE</span> Transformation
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              Our QE transformation model empowers teams with automation-first
              delivery, improved observability, and engineering-led quality.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">Maturity Assessment</h4>
                <p className="mt-3 text-slate-300">
                  Benchmark engineering readiness & automation maturity.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">
                  Quality Transformation
                </h4>
                <p className="mt-3 text-slate-300">
                  Shift to predictive QE with standardized engineering
                  practices.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">Peak Quality</h4>
                <p className="mt-3 text-slate-300">
                  Ensure reliability during high-traffic events.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Maturity Assessment
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Identify gaps & build a roadmap toward engineering excellence.
                </p>
              </div>
              <img
                src="/images/cloud1.jpg"
                alt="Maturity Assessment"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/cloud2.jpg"
                alt="Predictive QE"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Transition to Predictive QE
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Build reusable frameworks, automation libraries & quality
                  KPIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 2 — TEST AUTOMATION
        ===================================================== */}
        <section
          id="section-test-automation"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Test</span> Automation
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              Accelerate delivery using UI, API, Mobile & Microservices
              automation.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">UI, API & Mobile</h4>
                <p className="mt-3 text-slate-300">
                  Unified pipelines for browsers, devices & APIs.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">Language Agnostic</h4>
                <p className="mt-3 text-slate-300">
                  Java, JS, Python, C# frameworks built for scale.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">Tool Accelerators</h4>
                <p className="mt-3 text-slate-300">
                  Selenium, Cypress, Playwright, Appium & more.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Unified Automation Frameworks
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Scalable frameworks for web, mobile, APIs & microservices.
                </p>
              </div>
              <img
                src="/images/cloud3.png"
                alt="Automation Frameworks"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/cloud5.png"
                alt="Enterprise Tools"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Enterprise Tool Expertise
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Strong automation setup using industry-leading tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 3 — TEST DOMAINS
        ===================================================== */}
        <section
          id="section-test-domain"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Test</span> Domains
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              Create scalable, reusable domain-driven test packs for checkout,
              onboarding, payments, logistics and more.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">Domain Libraries</h4>
                <p className="mt-3 text-slate-300">
                  Reusable flows for core business paths.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">Unified Rules</h4>
                <p className="mt-3 text-slate-300">
                  Standardized validations across squads.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">Governance</h4>
                <p className="mt-3 text-slate-300">
                  Strong governance for enterprise-scale testing.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Reusable Flow Packs
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Login, payments, claims, checkout & order management flows.
                </p>
              </div>
              <img
                src="/images/cloud6.png"
                alt="Flow Packs"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/cloud7.png"
                alt="Governance"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Governance & Compliance
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Ensure enterprise compliance & quality alignment across
                  domains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 4 — DATA QUALITY
        ===================================================== */}
        <section
          id="section-data-quality"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Data</span> Quality
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              Build compliant synthetic & masked datasets using scalable
              provisioning pipelines.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">Synthetic Data</h4>
                <p className="mt-3 text-slate-300">
                  Privacy-safe synthetic test data generation.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">Wide Coverage</h4>
                <p className="mt-3 text-slate-300">
                  API, E2E, regression & performance test datasets.
                </p>
              </div>
              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">Self-Service</h4>
                <p className="mt-3 text-slate-300">
                  One-click dataset provisioning for dev & QA.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  End-to-End Data Strategy
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Discovery, masking, modelling & synthetic data factories.
                </p>
              </div>
              <img
                src="/images/cloud8.png"
                alt="Data Strategy"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/cloud9.png"
                alt="On-Demand Data"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  On-Demand Data
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Instantly generate fresh compliant datasets per environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TALK WITH US
        ===================================================== */}
        <section className="w-full bg-[#020617] flex justify-center py-20 px-4">
          <div className="w-full max-w-5xl rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.20)] p-6 sm:p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text text-transparent">
                  Talk with us
                </h2>
                <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
                  Interested in quality engineering services? Reach out and
                  we&apos;ll connect you with the right specialist who fits your
                  project needs.
                </p>
                <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full opacity-70" />
              </div>

              <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all">
                <img
                  src="/images/priya.png"
                  alt="Lekhya Pypuri"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-300/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Lekhya Pypuri
                  </h3>
                  <p className="text-sm text-slate-400">Head of QA Solutions</p>
                  <p className="mt-3 sm:mt-4 text-sm">
                    Email:{" "}
                    <a
                      href="mailto:qa@cjss.example"
                      className="text-purple-300 hover:text-sky-300 hover:underline transition-colors"
                    >
                      qa@cjss.example
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    We typically respond within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Scroll button */}
      {showScrollBtn && (
        <button
          onClick={() =>
            document
              .getElementById("solutions")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="fixed bottom-10 right-10 z-50 h-12 w-12 rounded-full flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-purple-300/30 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] transition-all duration-300 animate-bounce-slow"
          aria-label="Scroll to Solutions"
        >
          ↑
        </button>
      )}

      {/* STYLES */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out both;
        }

        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-24px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slideLeft 0.7s ease-out both;
        }

        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(24px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right {
          animation: slideRight 0.7s ease-out both;
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.2s infinite;
        }

        /* ZOOM IN ONLY - no zoom out */
        @keyframes heroZoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-hero-zoom-in {
          animation: heroZoomIn 10s ease-out forwards;
        }

        @keyframes aiLabel {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-aiLabel {
          animation: aiLabel 0.8s ease-out both;
        }
      `}</style>
    </main>
  );
};

export default QualityEngineeringPage;
