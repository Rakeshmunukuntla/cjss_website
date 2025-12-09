// import TalkWithUs from "./TalkUsWith";

export default function ApplicationServicesPage() {
  return (
    <main className="w-full min-h-screen text-white bg-[#020617]">
      {/* =====================================================
          HERO SECTION (same banner style)
      ===================================================== */}
      <section className="relative w-full min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bannerApplicationPage.png"
            className="w-full h-full object-cover"
            alt="Application Services Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
          <span className="text-xs tracking-widest text-cyan-300">
            Application Services
          </span>

          <h1 className="mt-3 text-5xl font-semibold leading-tight">
            BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
              MODERN APPLICATIONS
            </span>{" "}
            THAT SCALE WITH YOUR BUSINESS
          </h1>

          <p className="mt-4 max-w-2xl text-slate-200/90">
            From legacy modernization to frontend, Node.js, APIs and DevOps, we
            help you design, build and run high-performing digital experiences.
          </p>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS WE OFFER
      ===================================================== */}
      <section
        id="solutions-section"
        className="w-full py-20 bg-[#0d1320] border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-4xl font-light">
            <span className="font-semibold">Solutions</span> we Offer
          </h2>

          <p className="mt-5 max-w-4xl text-slate-300 text-lg">
            Our application services team brings together frontend engineers,
            Node.js developers, solution architects and DevOps specialists to
            modernize, scale and operate your business-critical applications.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold">
                Application Modernization
              </h3>
              <p className="mt-3 text-slate-300">
                Transform legacy systems into modular, cloud-ready, API-first
                applications.
              </p>
              <a
                href="#section-app-modernization"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Microservices &amp; API Engineering
              </h3>
              <p className="mt-3 text-slate-300">
                Design domain-aligned microservices and robust API platforms.
              </p>
              <a
                href="#section-microservices-api"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Frontend Engineering (React, Next.js)
              </h3>
              <p className="mt-3 text-slate-300">
                Build fast, accessible, component-driven experiences using React
                and Next.js.
              </p>
              <a
                href="#section-frontend-engineering"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Node.js &amp; Backend Engineering
              </h3>
              <p className="mt-3 text-slate-300">
                Create scalable backends and APIs using Node.js, Express, NestJS
                and more.
              </p>
              <a
                href="#section-node-backend"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                DevOps for Application Platforms
              </h3>
              <p className="mt-3 text-slate-300">
                Implement CI/CD, observability and automation for application
                delivery.
              </p>
              <a
                href="#section-devops-platforms"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Application Support &amp; Reliability
              </h3>
              <p className="mt-3 text-slate-300">
                Improve uptime, performance and user experience with proactive
                support.
              </p>
              <a
                href="#section-app-support"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 1 — APPLICATION MODERNIZATION
      ===================================================== */}
      <section
        id="section-app-modernization"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Application</span> Modernization
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Evolve legacy applications into cloud-ready, modular and
            maintainable systems without disrupting your business. We combine
            architecture, refactoring and platform engineering to reduce
            technical debt and increase delivery speed.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Legacy Assessment</h4>
              <p className="mt-3 text-slate-300">
                Identify modernization candidates, critical flows and technical
                risk.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Refactoring Strategy</h4>
              <p className="mt-3 text-slate-300">
                Strangle-the-monolith, modularization and API-led modernization.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Stepwise Transformation</h4>
              <p className="mt-3 text-slate-300">
                Deliver incremental value with phased rewrites and
                re-platforming.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                From Monolith to Modern Architecture
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We help you break down tightly-coupled systems into modular
                services, improving scalability, maintainability and release
                frequency while keeping your business stable during the
                transition.
              </p>
            </div>

            <img
              src="/images/Appli1.png"
              className="w-full rounded-xl shadow-xl"
              alt="Application modernization"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — MICROSERVICES & API ENGINEERING
      ===================================================== */}
      <section
        id="section-microservices-api"
        className="w-full py-24 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Microservices</span> &amp; API
            Engineering
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Design domain-aligned services and stable APIs that power web,
            mobile, partner and internal applications. Our teams build platforms
            that are observable, secure and resilient.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Domain-Driven Design</h4>
              <p className="mt-3 text-slate-300">
                Services modeled around business capabilities and boundaries.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">API Platforms</h4>
              <p className="mt-3 text-slate-300">
                REST, GraphQL, gRPC and event-driven patterns, built for scale.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Resilience &amp; Observability
              </h4>
              <p className="mt-3 text-slate-300">
                Circuit breakers, retries, tracing, metrics and centralized
                logging.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/Appli2.png"
              className="w-full rounded-xl shadow-xl"
              alt="Microservices and APIs"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                API-First, Integration-Ready Platforms
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We build APIs as products—discoverable, well-documented,
                versioned and secure—so that teams can integrate faster and ship
                new experiences with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — FRONTEND ENGINEERING
      ===================================================== */}
      <section
        id="section-frontend-engineering"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Frontend</span> Engineering
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            React, Next.js &amp; Modern Web
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Build fast, accessible, component-driven experiences that feel
            native on every device. We use React, Next.js and modern tooling to
            create design systems and experiences that scale.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Design Systems</h4>
              <p className="mt-3 text-slate-300">
                Reusable UI kits, tokens and component libraries aligned to your
                brand.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Performance &amp; SEO</h4>
              <p className="mt-3 text-slate-300">
                SSR, SSG, code-splitting and Core Web Vitals optimization.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Accessibility</h4>
              <p className="mt-3 text-slate-300">
                WCAG-compliant experiences with keyboard and screen reader
                support.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                React &amp; Next.js at Product Scale
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We architect frontends that support evolving product roadmaps:
                feature flags, A/B testing, routing strategies and API
                integration patterns that keep teams productive.
              </p>
            </div>

            <img
              src="/images/Appli3.jpg"
              className="w-full rounded-xl shadow-xl"
              alt="Frontend engineering"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — NODE.JS & BACKEND ENGINEERING
      ===================================================== */}
      <section id="section-node-backend" className="w-full py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Node.js</span> &amp; Backend
            Engineering
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Scalable Services</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            We build Node.js backends that are performant, observable, secure
            and easy to extend—designed around real-world traffic, failure modes
            and business workflows.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Node.js Services</h4>
              <p className="mt-3 text-slate-300">
                Express, NestJS, Fastify-based APIs and services.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Data &amp; Persistence</h4>
              <p className="mt-3 text-slate-300">
                SQL/NoSQL design, caching, messaging, and event logs.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Security &amp; Observability
              </h4>
              <p className="mt-3 text-slate-300">
                Auth, rate-limiting, monitoring, structured logging and tracing.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/Appli4.png"
              className="w-full rounded-xl shadow-xl"
              alt="Node backend"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Backends Built for Real Usage
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We engineer backends that handle spikes, failures and complex
                integrations gracefully—with circuit breakers, retries, queues
                and health checks built-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — DEVOPS FOR APPLICATION PLATFORMS
      ===================================================== */}
      <section
        id="section-devops-platforms"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">DevOps</span> for Application
            Platforms
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Delivery at Scale</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Enable teams to ship features faster with automated CI/CD pipelines,
            environment automation, and end-to-end observability tailored for
            application platforms.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">CI/CD Pipelines</h4>
              <p className="mt-3 text-slate-300">
                Build, test, quality gates and deployments across environments.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Environment Automation</h4>
              <p className="mt-3 text-slate-300">
                Infrastructure as Code, templates, and environment consistency.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Release Observability</h4>
              <p className="mt-3 text-slate-300">
                Release dashboards, rollback strategies and change intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — APPLICATION SUPPORT & RELIABILITY
      ===================================================== */}
      <section id="section-app-support" className="w-full py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Application</span> Support &amp;
            Reliability
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Run with Confidence</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Keep your applications healthy with proactive monitoring, incident
            management, SLO-based reliability and continuous improvement loops.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">SRE Practices</h4>
              <p className="mt-3 text-slate-300">
                SLOs, error budgets and operational runbooks for critical apps.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Proactive Monitoring</h4>
              <p className="mt-3 text-slate-300">
                Dashboards, alerting and synthetic monitoring to catch issues
                early.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Continuous Improvement</h4>
              <p className="mt-3 text-slate-300">
                Post-incident reviews, optimization backlogs and reliability
                roadmaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TALK WITH US (reuse existing component) */}
      {/* <TalkWithUs /> */}
      {/* =====================================================
    TALK WITH US — NEHA
===================================================== */}
      <section className="w-full flex justify-center mt-20 mb-20 px-4">
        <div
          className="
      w-full max-w-5xl
      rounded-3xl
      bg-slate-900/70
      backdrop-blur-2xl
      border border-white/10
      shadow-[0_0_60px_rgba(34,211,238,0.20)]
      p-6 sm:p-10 md:p-14
    "
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
            {/* LEFT TEXT BLOCK */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
                Talk with us
              </h2>

              <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
                Interested in quality engineering services? Reach out and we'll
                connect you with the right specialist who fits your project
                needs.
              </p>

              <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70" />
            </div>

            {/* RIGHT CONTACT CARD */}
            <div
              className="
          rounded-3xl
          bg-slate-950/80
          border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.55)]
          p-6 sm:p-8
          flex gap-4 sm:gap-5
          items-start
          hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
          transition-all
        "
            >
              {/* PROFILE IMAGE */}
              <img
                src="/images/priya.png"
                alt="Priya"
                className="
            h-16 w-16 sm:h-20 sm:w-20
            rounded-full
            object-cover
            border border-purple-500/40
            shadow-[0_0_20px_rgba(168,85,247,0.35)]
          "
              />

              {/* DETAILS */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Priya
                </h3>
                <p className="text-sm text-slate-400">Head of QA Solutions</p>

                <p className="mt-3 sm:mt-4 text-sm">
                  Email:{" "}
                  <a
                    href="mailto:qa@cjss.example"
                    className="text-cyan-400 hover:underline"
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
    </main>
  );
}
