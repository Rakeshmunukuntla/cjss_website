// import TalkWithUs from "./TalkUsWith";

export default function CloudTechnologiesPage() {
  return (
    <main className="w-full min-h-screen text-white bg-[#020617]">
      {/* =====================================================
          HERO SECTION (Same as Quality Engineering)
      ===================================================== */}
      {/* <section className="relative w-full min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/cloudtechBanner.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
          <span className="text-xs tracking-widest text-cyan-300">
            Cloud Technologies
          </span>

          <h1 className="mt-3 text-5xl font-semibold leading-tight">
            ENTERPRISE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
              CLOUD TRANSFORMATION
            </span>{" "}
            AT SCALE
          </h1>

          <p className="mt-4 max-w-2xl text-slate-200/90">
            Modernize your architecture with cloud-native engineering, automated
            platforms, and scalable infrastructure designed for global
            performance.
          </p>
        </div>
      </section> */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/cloudtechBanner.jpeg"
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Application Services Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
          {/* <span className="text-xs tracking-widest text-cyan-300">
            Cloud Services
          </span> */}
          <span
            className="
  inline-block
  text-sm sm:text-base
  font-semibold
  tracking-[0.42em]
  text-blue-300
  animate-aiLabel
  animate-aiPulse
"
          >
            Cloud Services
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
          SOLUTIONS SECTION (Dark Navy)
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
            We provide a comprehensive suite of cloud engineering services to
            modernize platforms, scale applications, optimize costs, and
            engineer world-class reliability.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold">Cloud Transformation</h3>
              <p className="mt-3 text-slate-300">
                Modernize legacy systems and migrate to scalable cloud-native
                architectures.
              </p>
              <a
                href="#section-cloud-transformation"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cloud Automation</h3>
              <p className="mt-3 text-slate-300">
                Use DevOps, CI/CD, IaC, and observability to automate delivery.
              </p>
              <a
                href="#section-cloud-automation"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cloud Security</h3>
              <p className="mt-3 text-slate-300">
                Strengthen your cloud ecosystem with zero-trust and automated
                compliance.
              </p>
              <a
                href="#section-cloud-security"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cloud Cost Optimization</h3>
              <p className="mt-3 text-slate-300">
                Improve cloud efficiency with engineering-led FinOps.
              </p>
              <a
                href="#section-cloud-finops"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 1 — CLOUD TRANSFORMATION (Dark Gradient)
      ===================================================== */}
      <section
        id="section-cloud-transformation"
        className="w-full py-24 bg-gradient-to-b from-[#0b111c] to-[#101828]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Transformation
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Modernize applications, migrate workloads, and engineer cloud-native
            systems with high availability, global scalability, and deep
            automation.
          </p>

          {/* Columns */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Cloud Readiness</h4>
              <p className="mt-3 text-slate-300">
                Architecture, performance, security & modernization assessment.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Refactoring & Modernization
              </h4>
              <p className="mt-3 text-slate-300">
                Transform monoliths into microservices, serverless & API-first
                ecosystems.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Cloud Reliability</h4>
              <p className="mt-3 text-slate-300">
                Engineer autoscaling, failover, caching, and SRE-driven
                performance.
              </p>
            </div>
          </div>

          {/* Alternating Blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Cloud Readiness Assessment
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Identify modernization pathways, performance gaps, security
                risks, cost inefficiencies, and architecture upgrades required
                for scalable cloud transformation.
              </p>
            </div>

            <img
              src="/images/cloudtech1.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/cloudtech2.png"
              className="w-full rounded-xl shadow-xl"
            />
            <div>
              <h4 className="text-2xl font-semibold">
                Migration & Modern Application Engineering
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Zero-downtime migrations, microservice decomposition, serverless
                adoption, and event-driven architectures deliver future-ready
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — CLOUD AUTOMATION (Deep Navy)
      ===================================================== */}
      <section
        id="section-cloud-automation"
        className="w-full py-24 bg-[#0a0f1a] text-white"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Automation
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Accelerate delivery using automated pipelines, IaC blueprints, and
            end-to-end observability frameworks.
          </p>

          {/* Columns */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">CI/CD Automation</h4>
              <p className="mt-3 text-slate-300">
                Automated builds, tests, deployments & rollback strategies.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Infrastructure-as-Code</h4>
              <p className="mt-3 text-slate-300">
                Terraform, CloudFormation, ARM, Crossplane & Pulumi.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Observability</h4>
              <p className="mt-3 text-slate-300">
                Logs, metrics, traces, SLOs, alerting & distributed debugging.
              </p>
            </div>
          </div>

          {/* Alternating Blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Infrastructure-as-Code Excellence
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Provision consistent, secure environments using blueprint-driven
                IaC pipelines with automated compliance and drift correction.
              </p>
            </div>

            <img
              src="/images/cloudtech3.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/cloudtech4.png"
              className="w-full rounded-xl shadow-xl"
            />
            <div>
              <h4 className="text-2xl font-semibold">
                End-to-End Observability
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Implement full-stack monitoring for faster issue resolution,
                proactive anomaly detection, and real-time reliability insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — CLOUD SECURITY (Light Navy)
      ===================================================== */}
      <section
        id="section-cloud-security"
        className="w-full py-24 bg-gradient-to-b from-[#0d1320] to-[#0b111c] text-white"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Security
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Strengthen your cloud posture with automated compliance, zero-trust
            frameworks, and proactive security operations.
          </p>

          {/* Columns */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Zero-Trust IAM</h4>
              <p className="mt-3 text-slate-300">
                Identity hardening, least privilege enforcement & continuous
                authentication.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Automated Compliance</h4>
              <p className="mt-3 text-slate-300">
                SOC2, HIPAA, PCI, GDPR, ISO — enforced through policy-as-code.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Security Posture</h4>
              <p className="mt-3 text-slate-300">
                Drift detection, threat analytics & attack surface reduction.
              </p>
            </div>
          </div>

          {/* Alternating Blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Governance & Guardrails
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Implement multi-account guardrails, IAM baselines, and automated
                policy enforcement to ensure compliance without slowing
                innovation.
              </p>
            </div>

            <img
              src="/images/cloudtech5.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — CLOUD COST OPTIMIZATION (Dark Navy)
      ===================================================== */}
      <section
        id="section-cloud-finops"
        className="w-full py-24 bg-[#090e18] text-white"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Cost Optimization
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">Capabilities</h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Optimize cloud spend using intelligent scaling, resource efficiency,
            workload rightsizing, and engineering-led FinOps governance.
          </p>

          {/* Columns */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Workload Right-Sizing</h4>
              <p className="mt-3 text-slate-300">
                Analyze usage patterns and reduce underutilized resources.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Smart Scaling</h4>
              <p className="mt-3 text-slate-300">
                Autoscaling policies tuned for performance and cost savings.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Cost Visibility</h4>
              <p className="mt-3 text-slate-300">
                Dashboards, alerts & forecasting models to prevent overspending.
              </p>
            </div>
          </div>

          {/* Alternating Blocks */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">FinOps Governance</h4>
              <p className="mt-4 text-lg text-slate-300">
                Operate cloud environments with financial accountability,
                continuous optimization, and engineering-led cost governance.
              </p>
            </div>

            <img
              src="/images/cloudtech6.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* TALK WITH US */}
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
