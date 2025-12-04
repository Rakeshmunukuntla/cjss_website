import TalkWithUs from "./TalkUsWith";

export default function CloudTechnologiesPage() {
  return (
    <main className="w-full min-h-screen text-white bg-[#020617]">
      {/* =====================================================
          HERO SECTION (Same as Quality Engineering)
      ===================================================== */}
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
      <TalkWithUs />
    </main>
  );
}
