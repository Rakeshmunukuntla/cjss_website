import React from "react";
import TalkWithUs from "./TalkUsWith";

export default function QualityEngineeringPage() {
  return (
    <main className="w-full min-h-screen text-white bg-[#020617]">
      {/* --------------------------------------------------------
          HERO SECTION (Dark)
      --------------------------------------------------------- */}
      <section className="relative w-full min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bannerfortesting.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
          <span className="text-xs tracking-widest text-cyan-300">
            Quality Engineering
          </span>

          <h1 className="mt-3 text-5xl font-semibold leading-tight">
            BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
              QUALITY
            </span>{" "}
            INTO EVERY RELEASE
          </h1>

          <p className="mt-4 max-w-2xl text-slate-200/90">
            We help you move from traditional QA to engineering-driven quality
            with automation and observability built across the SDLC.
          </p>
        </div>
      </section>

      {/* ==========================================================
          SOLUTIONS SECTION (Dark Navy)
      ========================================================== */}
      <section
        id="solutions-section"
        className="w-full py-20 bg-[#0d1320] border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-4xl font-light">
            <span className="font-semibold">Solutions</span> we Offer
          </h2>

          <p className="mt-5 max-w-4xl text-slate-300 text-lg">
            We provide a comprehensive suite of QE services designed to enhance
            reliability, reduce defects, and accelerate delivery.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold">QA to QE Transformation</h3>
              <p className="mt-3 text-slate-300">
                Move from traditional QA to engineering-first quality culture.
              </p>
              <a
                href="#section-qa-qe"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Test Domains</h3>
              <p className="mt-3 text-slate-300">
                Build scalable domain-driven testing frameworks.
              </p>
              <a
                href="#section-test-domain"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Test Automation</h3>
              <p className="mt-3 text-slate-300">
                Automate UI, API and mobile testing at scale.
              </p>
              <a
                href="#section-test-automation"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Data Quality</h3>
              <p className="mt-3 text-slate-300">
                Build enterprise-grade test data pipelines.
              </p>
              <a
                href="#section-data-quality"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 1 — QA TO QE (Dark Gradient A)
      ========================================================== */}
      <section
        id="section-qa-qe"
        className="w-full py-24 bg-gradient-to-b from-[#0b111c] to-[#0d1625] text-white"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">QA to QE</span> Transformation
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg leading-relaxed max-w-5xl text-slate-300">
            Our QE transformation model empowers teams with automation-first
            delivery, improved observability, and engineering-led quality.
          </p>

          {/* Columns */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-semibold">Maturity Assessment</h4>
              <p className="mt-3 text-slate-300">
                Benchmark engineering readiness & automation maturity.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Quality Transformation</h4>
              <p className="mt-3 text-slate-300">
                Shift to predictive QE with standardized engineering practices.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Peak Quality</h4>
              <p className="mt-3 text-slate-300">
                Ensure reliability during high-traffic events.
              </p>
            </div>
          </div>

          {/* Alternating blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">Maturity Assessment</h4>
              <p className="mt-4 text-lg text-slate-300">
                Identify gaps & build a roadmap toward engineering excellence.
              </p>
            </div>

            <img
              src="/images/qe_maturity_graph.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/qe_team_work.png"
              className="w-full rounded-xl shadow-xl"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Transition to Predictive QE
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Build reusable frameworks, automation libraries & quality KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2 — TEST AUTOMATION (Dark Gradient B)
      ========================================================== */}
      <section
        id="section-test-automation"
        className="w-full py-24 bg-gradient-to-b from-[#05070d] to-[#0a0f1a] text-white"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Test</span> Automation
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Accelerate delivery using UI, API, Mobile & Microservices
            automation.
          </p>

          {/* Columns */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">UI, API & Mobile</h4>
              <p className="mt-3 text-slate-300">
                Unified pipelines for browsers, devices & APIs.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Language Agnostic</h4>
              <p className="mt-3 text-slate-300">
                Java, JS, Python, C# frameworks built for scale.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Tool Accelerators</h4>
              <p className="mt-3 text-slate-300">
                Selenium, Cypress, Playwright, Appium & more.
              </p>
            </div>
          </div>

          {/* Alternating blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Unified Automation Frameworks
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Scalable frameworks for web, mobile, APIs & microservices.
              </p>
            </div>

            <img
              src="/images/test_automation_web.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/test_automation_tools.png"
              className="w-full rounded-xl shadow-xl"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Enterprise Tool Expertise
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Strong automation setup using industry-leading tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 3 — TEST DOMAINS (Dark Gradient C)
      ========================================================== */}
      <section
        id="section-test-domain"
        className="w-full py-24 bg-gradient-to-b from-[#0d1625] to-[#111d33] text-white"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Test</span> Domains
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Create scalable, reusable domain-driven test packs for checkout,
            onboarding, payments, logistics and more.
          </p>

          {/* Columns */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Domain Libraries</h4>
              <p className="mt-3 text-slate-300">
                Reusable flows for core business paths.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Unified Rules</h4>
              <p className="mt-3 text-slate-300">
                Standardized validations across squads.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Governance</h4>
              <p className="mt-3 text-slate-300">
                Strong governance for enterprise-scale testing.
              </p>
            </div>
          </div>

          {/* Alternating blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">Reusable Flow Packs</h4>
              <p className="mt-4 text-lg text-slate-300">
                Login, payments, claims, checkout & order management flows.
              </p>
            </div>

            <img
              src="/images/test_domain_1.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/test_domain_2.png"
              className="w-full rounded-xl shadow-xl"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Governance & Compliance
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Ensure enterprise compliance & quality alignment across domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 4 — DATA QUALITY (Dark Gradient D)
      ========================================================== */}
      <section
        id="section-data-quality"
        className="w-full py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320] text-white"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Data</span> Quality
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Build compliant synthetic & masked datasets using scalable
            provisioning pipelines.
          </p>

          {/* Columns */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Synthetic Data</h4>
              <p className="mt-3 text-slate-300">
                Privacy-safe synthetic test data generation.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Wide Coverage</h4>
              <p className="mt-3 text-slate-300">
                API, E2E, regression & performance test datasets.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Self-Service</h4>
              <p className="mt-3 text-slate-300">
                One-click dataset provisioning for dev & QA.
              </p>
            </div>
          </div>

          {/* Alternating blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                End-to-End Data Strategy
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Discovery, masking, modelling & synthetic data factories.
              </p>
            </div>

            <img
              src="/images/data_quality_1.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/data_quality_2.png"
              className="w-full rounded-xl shadow-xl"
            />

            <div>
              <h4 className="text-2xl font-semibold">On-Demand Data</h4>
              <p className="mt-4 text-lg text-slate-300">
                Instantly generate fresh compliant datasets per environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TALK WITH US */}
      <TalkWithUs />
    </main>
  );
}
