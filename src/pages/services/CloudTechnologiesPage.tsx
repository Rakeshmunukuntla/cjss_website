import { useEffect, useState } from "react";

export default function CloudTechnologiesPage() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const solutionsSection = document.getElementById("solutions");
      if (!solutionsSection) return;

      const sectionTop = solutionsSection.getBoundingClientRect().top;

      // when section is above viewport top
      setShowScrollBtn(sectionTop < -100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full min-h-screen text-white bg-[#020617]">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative w-full min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/cloudtechBanner.jpeg"
            className="w-full h-full object-cover animate-slow-zoom"
            alt="Cloud Technologies Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
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
            CLOUD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
              ENGINEERING &amp; TRANSFORMATION
            </span>{" "}
            SERVICES
          </h1>

          <p className="mt-4 max-w-3xl text-slate-200/90 text-lg leading-relaxed">
            Modern cloud adoption is not just about moving workloads — it&apos;s
            about building platforms that scale reliably, remain secure, and
            optimize costs as your business grows. Our cloud engineering
            services help organizations modernize their infrastructure, automate
            delivery, strengthen security, and gain full visibility into cloud
            spending. We work closely with teams to design cloud strategies that
            align technology decisions with long-term business outcomes.
          </p>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS WE OFFER
      ===================================================== */}
      <section
        id="solutions"
        className="w-full py-20 bg-[#0d1320] border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-4xl font-light">
            <span className="font-semibold">Solutions</span> we Offer
          </h2>

          <p className="mt-5 max-w-4xl text-slate-300 text-lg">
            We provide a comprehensive suite of cloud engineering services to
            modernize platforms, scale applications, optimize costs, and
            engineer world-class reliability — all aligned with your business
            outcomes.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold">Cloud Transformation</h3>
              <p className="mt-3 text-slate-300">
                Modernize legacy systems and transition to cloud-native
                architectures that are resilient, scalable, and ready for
                continuous evolution.
              </p>
              <a
                href="#section-cloud-transformation"
                className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cloud Automation</h3>
              <p className="mt-3 text-slate-300">
                Accelerate delivery through DevOps practices, CI/CD pipelines,
                infrastructure as code, and automated observability.
              </p>
              <a
                href="#section-cloud-automation"
                className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cloud Security</h3>
              <p className="mt-3 text-slate-300">
                Build secure and compliant cloud foundations with zero-trust
                principles, automated compliance, and proactive threat
                management.
              </p>
              <a
                href="#section-cloud-security"
                className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cloud Cost Optimization</h3>
              <p className="mt-3 text-slate-300">
                Engineering-led FinOps for sustainable growth — align cloud
                usage with business value through visibility and optimization.
              </p>
              <a
                href="#section-cloud-finops"
                className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Our Cloud Delivery Approach
              </h3>
              <p className="mt-3 text-slate-300">
                Optimized for reliability, adaptability, and timely execution —
                combining automation, security, and cost optimization into a
                unified strategy.
              </p>
              <a
                href="#section-cloud-delivery"
                className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What We Avoid — and Why It Matters
              </h3>
              <p className="mt-3 text-slate-300">
                We intentionally avoid unnecessary complexity, over-engineering,
                and vendor-driven solutions that don&apos;t serve real business
                needs.
              </p>
              <a
                href="#section-what-we-avoid"
                className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 1 — CLOUD TRANSFORMATION
      ===================================================== */}
      <section
        id="section-cloud-transformation"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Transformation
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Modernizing Platforms for Cloud-Native Scale
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Cloud transformation begins with understanding where your
            applications are today and where they need to be tomorrow. We help
            organizations modernize legacy systems and transition them to
            cloud-native architectures that are resilient, scalable, and ready
            for continuous evolution. Our approach focuses on minimizing
            disruption while maximizing long-term value.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Scale on Demand</h4>
              <p className="mt-3 text-slate-300">
                Re-architect applications to leverage cloud services effectively
                and enable businesses to scale dynamically based on demand.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Improve Reliability</h4>
              <p className="mt-3 text-slate-300">
                Build systems that are resilient, fault-tolerant, and designed
                for high availability across cloud environments.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Reduce Complexity</h4>
              <p className="mt-3 text-slate-300">
                Simplify infrastructure complexity while enabling hybrid and
                multi-cloud environments that support business growth.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Cloud Adoption That Supports Business Growth
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                By re-architecting applications to leverage cloud services
                effectively, we enable businesses to scale on demand, improve
                system reliability, and reduce infrastructure complexity.
                Whether it&apos;s migrating existing workloads, modernizing
                application architectures, or enabling hybrid and multi-cloud
                environments, we ensure that cloud adoption supports
                performance, agility, and business growth — not just
                infrastructure change.
              </p>
            </div>

            <img
              src="/images/cloudUpdated1.jpg"
              className="w-full rounded-xl shadow-xl"
              alt="Cloud Transformation"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — CLOUD AUTOMATION
      ===================================================== */}
      <section
        id="section-cloud-automation"
        className="w-full py-24 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Automation
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Accelerating Delivery Through DevOps and CI/CD
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Speed and consistency are critical in modern cloud environments. Our
            cloud automation services focus on enabling DevOps practices that
            streamline development, testing, and deployment across environments.
            By implementing CI/CD pipelines, infrastructure as code, and
            automated observability, we help teams move faster without
            sacrificing quality or control.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Reduce Manual Effort</h4>
              <p className="mt-3 text-slate-300">
                Automation reduces manual effort, eliminates configuration
                drift, and ensures predictable releases across all environments.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Focus on Features</h4>
              <p className="mt-3 text-slate-300">
                Allow development teams to focus on building features while
                operations teams gain confidence in stable, repeatable
                deployments.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Release Frequently</h4>
              <p className="mt-3 text-slate-300">
                With automated delivery pipelines, organizations can release
                updates more frequently and respond faster to market changes.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/cloudUpdated2.jpg"
              className="w-full rounded-xl shadow-xl"
              alt="Cloud Automation"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Maintain Reliability at Scale
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Automation reduces manual effort, eliminates configuration
                drift, and ensures predictable releases. This allows development
                teams to focus on building features, while operations teams gain
                confidence in stable, repeatable deployments. With automated
                delivery pipelines in place, organizations can release updates
                more frequently, respond faster to market changes, and maintain
                reliability at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — CLOUD SECURITY
      ===================================================== */}
      <section
        id="section-cloud-security"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Security
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Building Secure and Compliant Cloud Foundations
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Security must be embedded into cloud platforms from the start, not
            added as an afterthought. Our cloud security services help
            organizations strengthen their cloud environments through zero-trust
            principles, automated compliance, and proactive threat management.
            We design security architectures that protect applications, data,
            and identities across cloud services.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Zero-Trust Principles</h4>
              <p className="mt-3 text-slate-300">
                Design security architectures that protect applications, data,
                and identities across all cloud services.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Automated Compliance</h4>
              <p className="mt-3 text-slate-300">
                Integrate security into CI/CD pipelines and cloud infrastructure
                to ensure continuous compliance.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Proactive Threat Management
              </h4>
              <p className="mt-3 text-slate-300">
                Early detection of vulnerabilities while maintaining development
                velocity and reducing overall risk.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Security Without Slowing Innovation
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                By integrating security into CI/CD pipelines and cloud
                infrastructure, we ensure continuous compliance and early
                detection of vulnerabilities. This approach reduces risk while
                maintaining development velocity. Customers benefit from
                improved visibility, stronger access controls, and confidence
                that their cloud platforms meet regulatory and organizational
                security standards without slowing innovation.
              </p>
            </div>

            <img
              src="/images/cloudUpdated3.jpg"
              className="w-full rounded-xl shadow-xl"
              alt="Cloud Security"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — CLOUD COST OPTIMIZATION
      ===================================================== */}
      <section id="section-cloud-finops" className="w-full py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Cloud</span> Cost Optimization
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Engineering-Led FinOps for Sustainable Growth
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Cloud cost optimization is not about cutting spend blindly —
            it&apos;s about aligning cloud usage with business value. We help
            organizations gain full visibility into cloud costs and implement
            engineering-led FinOps practices that optimize efficiency without
            compromising performance or reliability.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Continuous Monitoring</h4>
              <p className="mt-3 text-slate-300">
                Gain full visibility into cloud costs through continuous
                monitoring and detailed usage analysis.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Right-Sizing</h4>
              <p className="mt-3 text-slate-300">
                Enable teams to make informed decisions about resource
                allocation through right-sizing and usage analysis.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Better Forecasting</h4>
              <p className="mt-3 text-slate-300">
                Ensure cloud investments are transparent, predictable, and
                aligned with business priorities.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/cloudUpdated4.jpg"
              className="w-full rounded-xl shadow-xl"
              alt="Cloud Cost Optimization"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Scale Sustainably as Demand Grows
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Through continuous monitoring, right-sizing, and usage analysis,
                we enable teams to make informed decisions about resource
                allocation. Our approach ensures that cloud investments are
                transparent, predictable, and aligned with business priorities.
                This results in reduced waste, better forecasting, and a cloud
                environment that scales sustainably as demand grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — OUR CLOUD DELIVERY APPROACH
      ===================================================== */}
      <section
        id="section-cloud-delivery"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            Our <span className="font-semibold">Cloud</span> Delivery Approach
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Optimized for Reliability, Adaptability, and Timely Execution
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Our cloud delivery approach is designed to balance speed with
            stability. By combining automation, security, and cost optimization
            into a unified strategy, we ensure cloud initiatives are delivered
            efficiently and reliably. We prioritize compatibility with existing
            systems while enabling future-ready architectures that adapt easily
            to change.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Improved Performance</h4>
              <p className="mt-3 text-slate-300">
                From initial assessment and design to implementation and ongoing
                optimization, we focus on delivering improved performance.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Reduced Overhead</h4>
              <p className="mt-3 text-slate-300">
                Reduce operational overhead through automation and streamlined
                processes across cloud environments.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Faster Innovation</h4>
              <p className="mt-3 text-slate-300">
                Enable faster innovation cycles with a strong foundation for
                long-term cloud success.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Strong Foundation for Long-Term Success
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                From initial assessment and design to implementation and ongoing
                optimization, we focus on delivering outcomes that matter —
                improved performance, reduced operational overhead, and faster
                innovation cycles. This structured yet flexible approach ensures
                projects are completed on time while creating a strong
                foundation for long-term cloud success.
              </p>
            </div>

            <img
              src="/images/cloudUpdated5.jpg"
              className="w-full rounded-xl shadow-xl"
              alt="Cloud Delivery Approach"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — WHAT WE AVOID
      ===================================================== */}
      <section id="section-what-we-avoid" className="w-full py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            What We <span className="font-semibold">Avoid</span> — and Why It
            Matters
          </h2>

          <p className="mt-10 text-lg max-w-5xl text-slate-300 leading-relaxed">
            We intentionally avoid unnecessary complexity, over-engineering, and
            vendor-driven solutions that don&apos;t serve real business needs.
            Instead of overwhelming clients with tools and jargon, we focus on
            clarity, transparency, and solutions that are easy to operate and
            evolve.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">
                No Unnecessary Complexity
              </h4>
              <p className="mt-3 text-slate-300">
                We avoid over-engineering and focus on solutions that are
                straightforward to implement and maintain.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">No Vendor Lock-In</h4>
              <p className="mt-3 text-slate-300">
                We avoid vendor-driven solutions that don&apos;t serve real
                business needs and prioritize flexibility.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Clarity Over Jargon</h4>
              <p className="mt-3 text-slate-300">
                We focus on transparency and solutions that are easy to
                understand, operate, and evolve over time.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/cloudUpdated6.jpg"
              className="w-full rounded-xl shadow-xl"
              alt="What We Avoid"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Understand What We Build and Why It Works
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                This ensures customers understand not just what we build, but
                why it works — and how it helps them reach their goals faster
                and more reliably. We believe in building solutions that are
                transparent, maintainable, and aligned with your long-term
                success rather than short-term complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TALK WITH US
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
                Interested in cloud engineering and transformation services?
                Reach out and we&apos;ll connect you with the right specialist
                who fits your project needs.
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
                src="/images/japa.png"
                alt="japa Vivek"
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
                  Japa Vivek
                </h3>
                <p className="text-sm text-slate-400">
                  Head of Cloud Engineering
                </p>

                <p className="mt-3 sm:mt-4 text-sm">
                  Email:{" "}
                  <a
                    href="mailto:cloud@cjss.example"
                    className="text-cyan-400 hover:underline"
                  >
                    cloud@cjss.example
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
      {showScrollBtn && (
        <button
          onClick={() => {
            document
              .getElementById("solutions")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
      fixed bottom-10 right-10 z-50
      h-12 w-12
      rounded-full
      flex items-center justify-center
      bg-slate-900/80 backdrop-blur-md
      border border-cyan-400/30
      text-cyan-300
      shadow-[0_0_25px_rgba(34,211,238,0.45)]
      hover:scale-110
      hover:shadow-[0_0_40px_rgba(34,211,238,0.65)]
      transition-all duration-300
      animate-bounce-slow
    "
          aria-label="Scroll to Solutions"
        >
          ↑
        </button>
      )}
    </main>
  );
}
