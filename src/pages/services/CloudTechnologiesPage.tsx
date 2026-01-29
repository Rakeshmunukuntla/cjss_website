// import { useEffect, useState } from "react";

// export default function CloudTechnologiesPage() {
//   const [showScrollBtn, setShowScrollBtn] = useState(false);
//   const [heroOpacity, setHeroOpacity] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Fade out hero immediately on scroll
//       // At 50% scroll → 90% faded (opacity = 0.1)
//       const halfScreen = windowHeight * 0.5;
//       let opacity;

//       if (scrollY <= halfScreen) {
//         opacity = 1 - (scrollY / halfScreen) * 0.9;
//       } else {
//         const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
//         opacity = 0.1 - secondHalfProgress * 0.1;
//       }

//       setHeroOpacity(Math.max(0, Math.min(1, opacity)));

//       // Show scroll button logic
//       const solutionsSection = document.getElementById("solutions");
//       if (!solutionsSection) return;
//       const sectionTop = solutionsSection.getBoundingClientRect().top;
//       setShowScrollBtn(sectionTop < -100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <main className="relative w-full min-h-screen text-white">
//       {/* =====================================================
//           HERO SECTION — FIXED BEHIND CONTENT
//       ===================================================== */}
//       <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             src="/images/cloudtechBanner.jpeg"
//             className="w-full h-full object-cover animate-hero-zoom-in"
//             alt="Cloud Technologies Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28 flex flex-col justify-center h-full">
//           <span className="inline-block text-sm sm:text-base font-semibold tracking-[0.42em] text-purple-300 animate-aiLabel">
//             CLOUD SERVICES
//           </span>

//           <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-up">
//             CLOUD{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
//               ENGINEERING &amp; TRANSFORMATION
//             </span>{" "}
//             SERVICES
//           </h1>

//           <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
//             Modern cloud adoption is not just about moving workloads — it&apos;s
//             about building platforms that scale reliably, remain secure, and
//             optimize costs as your business grows. Our cloud engineering
//             services help organizations modernize their infrastructure, automate
//             delivery, strengthen security, and gain full visibility into cloud
//             spending.
//           </p>
//         </div>
//       </div>

//       {/* Spacer to push content below hero */}
//       <div className="h-screen" />

//       {/* =====================================================
//           ALL CONTENT SECTIONS — SCROLLS OVER HERO
//       ===================================================== */}
//       <div className="relative z-10">
//         {/* =====================================================
//             SOLUTIONS WE OFFER
//         ===================================================== */}
//         <section
//           id="solutions"
//           className="w-full py-20 bg-[#0d1320] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
//             <h2 className="text-3xl sm:text-4xl font-light animate-fade-up">
//               <span className="font-semibold">Solutions</span> we Offer
//             </h2>

//             <p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
//               We provide a comprehensive suite of cloud engineering services to
//               modernize platforms, scale applications, optimize costs, and
//               engineer world-class reliability — all aligned with your business
//               outcomes.
//             </p>

//             <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
//               <div className="animate-fade-up">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>①</span>
//                   <span>Transformation</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">Cloud Transformation</h3>
//                 <p className="mt-3 text-slate-300">
//                   Modernize legacy systems and transition to cloud-native
//                   architectures that are resilient, scalable, and ready for
//                   continuous evolution.
//                 </p>
//                 <a
//                   href="#section-cloud-transformation"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.05s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>②</span>
//                   <span>Automation</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">Cloud Automation</h3>
//                 <p className="mt-3 text-slate-300">
//                   Accelerate delivery through DevOps practices, CI/CD pipelines,
//                   infrastructure as code, and automated observability.
//                 </p>
//                 <a
//                   href="#section-cloud-automation"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>③</span>
//                   <span>Security</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">Cloud Security</h3>
//                 <p className="mt-3 text-slate-300">
//                   Build secure and compliant cloud foundations with zero-trust
//                   principles, automated compliance, and proactive threat
//                   management.
//                 </p>
//                 <a
//                   href="#section-cloud-security"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>④</span>
//                   <span>FinOps</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   Cloud Cost Optimization
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Engineering-led FinOps for sustainable growth — align cloud
//                   usage with business value through visibility and optimization.
//                 </p>
//                 <a
//                   href="#section-cloud-finops"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>⑤</span>
//                   <span>Delivery</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   Our Cloud Delivery Approach
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Optimized for reliability, adaptability, and timely execution
//                   — combining automation, security, and cost optimization into a
//                   unified strategy.
//                 </p>
//                 <a
//                   href="#section-cloud-delivery"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.25s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>⑥</span>
//                   <span>Principles</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   What We Avoid — and Why It Matters
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   We intentionally avoid unnecessary complexity,
//                   over-engineering, and vendor-driven solutions that don&apos;t
//                   serve real business needs.
//                 </p>
//                 <a
//                   href="#section-what-we-avoid"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             SECTION 1 — CLOUD TRANSFORMATION
//         ===================================================== */}
//         <section
//           id="section-cloud-transformation"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Cloud</span> Transformation
//             </h2>

//             <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
//               Modernizing Platforms for Cloud-Native Scale
//             </h3>

//             <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
//               Cloud transformation begins with understanding where your
//               applications are today and where they need to be tomorrow. We help
//               organizations modernize legacy systems and transition them to
//               cloud-native architectures that are resilient, scalable, and ready
//               for continuous evolution.
//             </p>

//             <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Scale on Demand</h4>
//                 <p className="mt-3 text-slate-300">
//                   Re-architect applications to leverage cloud services
//                   effectively and enable businesses to scale dynamically based
//                   on demand.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Improve Reliability</h4>
//                 <p className="mt-3 text-slate-300">
//                   Build systems that are resilient, fault-tolerant, and designed
//                   for high availability across cloud environments.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Reduce Complexity</h4>
//                 <p className="mt-3 text-slate-300">
//                   Simplify infrastructure complexity while enabling hybrid and
//                   multi-cloud environments that support business growth.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Cloud Adoption That Supports Business Growth
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   By re-architecting applications to leverage cloud services
//                   effectively, we enable businesses to scale on demand, improve
//                   system reliability, and reduce infrastructure complexity.
//                   Whether it&apos;s migrating existing workloads, modernizing
//                   application architectures, or enabling hybrid and multi-cloud
//                   environments, we ensure that cloud adoption supports
//                   performance, agility, and business growth.
//                 </p>
//               </div>

//               <img
//                 src="/images/cloudUpdated1.jpg"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//                 alt="Cloud Transformation"
//               />
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             SECTION 2 — CLOUD AUTOMATION
//         ===================================================== */}
//         <section
//           id="section-cloud-automation"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Cloud</span> Automation
//             </h2>

//             <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
//               Accelerating Delivery Through DevOps and CI/CD
//             </h3>

//             <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
//               Speed and consistency are critical in modern cloud environments.
//               Our cloud automation services focus on enabling DevOps practices
//               that streamline development, testing, and deployment across
//               environments. By implementing CI/CD pipelines, infrastructure as
//               code, and automated observability, we help teams move faster
//               without sacrificing quality or control.
//             </p>

//             <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Reduce Manual Effort</h4>
//                 <p className="mt-3 text-slate-300">
//                   Automation reduces manual effort, eliminates configuration
//                   drift, and ensures predictable releases across all
//                   environments.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Focus on Features</h4>
//                 <p className="mt-3 text-slate-300">
//                   Allow development teams to focus on building features while
//                   operations teams gain confidence in stable, repeatable
//                   deployments.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Release Frequently</h4>
//                 <p className="mt-3 text-slate-300">
//                   With automated delivery pipelines, organizations can release
//                   updates more frequently and respond faster to market changes.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="/images/cloudUpdated2.jpg"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//                 alt="Cloud Automation"
//               />

//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Maintain Reliability at Scale
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   Automation reduces manual effort, eliminates configuration
//                   drift, and ensures predictable releases. This allows
//                   development teams to focus on building features, while
//                   operations teams gain confidence in stable, repeatable
//                   deployments. With automated delivery pipelines in place,
//                   organizations can release updates more frequently, respond
//                   faster to market changes, and maintain reliability at scale.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             SECTION 3 — CLOUD SECURITY
//         ===================================================== */}
//         <section
//           id="section-cloud-security"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Cloud</span> Security
//             </h2>

//             <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
//               Building Secure and Compliant Cloud Foundations
//             </h3>

//             <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
//               Security must be embedded into cloud platforms from the start, not
//               added as an afterthought. Our cloud security services help
//               organizations strengthen their cloud environments through
//               zero-trust principles, automated compliance, and proactive threat
//               management.
//             </p>

//             <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Zero-Trust Principles</h4>
//                 <p className="mt-3 text-slate-300">
//                   Design security architectures that protect applications, data,
//                   and identities across all cloud services.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Automated Compliance</h4>
//                 <p className="mt-3 text-slate-300">
//                   Integrate security into CI/CD pipelines and cloud
//                   infrastructure to ensure continuous compliance.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">
//                   Proactive Threat Management
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   Early detection of vulnerabilities while maintaining
//                   development velocity and reducing overall risk.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Security Without Slowing Innovation
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   By integrating security into CI/CD pipelines and cloud
//                   infrastructure, we ensure continuous compliance and early
//                   detection of vulnerabilities. This approach reduces risk while
//                   maintaining development velocity. Customers benefit from
//                   improved visibility, stronger access controls, and confidence
//                   that their cloud platforms meet regulatory and organizational
//                   security standards without slowing innovation.
//                 </p>
//               </div>

//               <img
//                 src="/images/cloudUpdated3.jpg"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//                 alt="Cloud Security"
//               />
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             SECTION 4 — CLOUD COST OPTIMIZATION
//         ===================================================== */}
//         <section
//           id="section-cloud-finops"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Cloud</span> Cost Optimization
//             </h2>

//             <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
//               Engineering-Led FinOps for Sustainable Growth
//             </h3>

//             <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
//               Cloud cost optimization is not about cutting spend blindly —
//               it&apos;s about aligning cloud usage with business value. We help
//               organizations gain full visibility into cloud costs and implement
//               engineering-led FinOps practices that optimize efficiency without
//               compromising performance or reliability.
//             </p>

//             <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Continuous Monitoring</h4>
//                 <p className="mt-3 text-slate-300">
//                   Gain full visibility into cloud costs through continuous
//                   monitoring and detailed usage analysis.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Right-Sizing</h4>
//                 <p className="mt-3 text-slate-300">
//                   Enable teams to make informed decisions about resource
//                   allocation through right-sizing and usage analysis.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Better Forecasting</h4>
//                 <p className="mt-3 text-slate-300">
//                   Ensure cloud investments are transparent, predictable, and
//                   aligned with business priorities.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="/images/cloudUpdated4.jpg"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//                 alt="Cloud Cost Optimization"
//               />

//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Scale Sustainably as Demand Grows
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   Through continuous monitoring, right-sizing, and usage
//                   analysis, we enable teams to make informed decisions about
//                   resource allocation. Our approach ensures that cloud
//                   investments are transparent, predictable, and aligned with
//                   business priorities. This results in reduced waste, better
//                   forecasting, and a cloud environment that scales sustainably
//                   as demand grows.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             SECTION 5 — OUR CLOUD DELIVERY APPROACH
//         ===================================================== */}
//         <section
//           id="section-cloud-delivery"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               Our <span className="font-semibold">Cloud</span> Delivery Approach
//             </h2>

//             <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
//               Optimized for Reliability, Adaptability, and Timely Execution
//             </h3>

//             <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
//               Our cloud delivery approach is designed to balance speed with
//               stability. By combining automation, security, and cost
//               optimization into a unified strategy, we ensure cloud initiatives
//               are delivered efficiently and reliably.
//             </p>

//             <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Improved Performance</h4>
//                 <p className="mt-3 text-slate-300">
//                   From initial assessment and design to implementation and
//                   ongoing optimization, we focus on delivering improved
//                   performance.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Reduced Overhead</h4>
//                 <p className="mt-3 text-slate-300">
//                   Reduce operational overhead through automation and streamlined
//                   processes across cloud environments.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Faster Innovation</h4>
//                 <p className="mt-3 text-slate-300">
//                   Enable faster innovation cycles with a strong foundation for
//                   long-term cloud success.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Strong Foundation for Long-Term Success
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   From initial assessment and design to implementation and
//                   ongoing optimization, we focus on delivering outcomes that
//                   matter — improved performance, reduced operational overhead,
//                   and faster innovation cycles. This structured yet flexible
//                   approach ensures projects are completed on time while creating
//                   a strong foundation for long-term cloud success.
//                 </p>
//               </div>

//               <img
//                 src="/images/cloudUpdated5.jpg"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//                 alt="Cloud Delivery Approach"
//               />
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             SECTION 6 — WHAT WE AVOID
//         ===================================================== */}
//         <section
//           id="section-what-we-avoid"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               What We <span className="font-semibold">Avoid</span> — and Why It
//               Matters
//             </h2>

//             <p className="mt-8 sm:mt-10 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
//               We intentionally avoid unnecessary complexity, over-engineering,
//               and vendor-driven solutions that don&apos;t serve real business
//               needs. Instead of overwhelming clients with tools and jargon, we
//               focus on clarity, transparency, and solutions that are easy to
//               operate and evolve.
//             </p>

//             <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">
//                   No Unnecessary Complexity
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   We avoid over-engineering and focus on solutions that are
//                   straightforward to implement and maintain.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">No Vendor Lock-In</h4>
//                 <p className="mt-3 text-slate-300">
//                   We avoid vendor-driven solutions that don&apos;t serve real
//                   business needs and prioritize flexibility.
//                 </p>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Clarity Over Jargon</h4>
//                 <p className="mt-3 text-slate-300">
//                   We focus on transparency and solutions that are easy to
//                   understand, operate, and evolve over time.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="/images/cloudUpdated6.jpg"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//                 alt="What We Avoid"
//               />

//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Understand What We Build and Why It Works
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   This ensures customers understand not just what we build, but
//                   why it works — and how it helps them reach their goals faster
//                   and more reliably. We believe in building solutions that are
//                   transparent, maintainable, and aligned with your long-term
//                   success rather than short-term complexity.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             TALK WITH US
//         ===================================================== */}
//         <section className="w-full bg-[#020617] flex justify-center py-20 px-4">
//           <div className="w-full max-w-5xl rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.20)] p-6 sm:p-10 md:p-14">
//             <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
//               <div>
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text text-transparent">
//                   Talk with us
//                 </h2>

//                 <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
//                   Interested in cloud engineering and transformation services?
//                   Reach out and we&apos;ll connect you with the right specialist
//                   who fits your project needs.
//                 </p>

//                 <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full opacity-70" />
//               </div>

//               <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all">
//                 <img
//                   src="/images/japa.png"
//                   alt="Japa Vivek"
//                   className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-300/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
//                 />

//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-white">
//                     Japa Vivek
//                   </h3>
//                   <p className="text-sm text-slate-400">
//                     Head of Cloud Engineering
//                   </p>

//                   <p className="mt-3 sm:mt-4 text-sm">
//                     Email:{" "}
//                     <a
//                       href="mailto:cloud@cjss.example"
//                       className="text-purple-300 hover:text-sky-300 hover:underline transition-colors"
//                     >
//                       cloud@cjss.example
//                     </a>
//                   </p>

//                   <p className="text-xs text-slate-500 mt-1">
//                     We typically respond within 1 business day.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Scroll button */}
//       {showScrollBtn && (
//         <button
//           onClick={() =>
//             document
//               .getElementById("solutions")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="fixed bottom-10 right-10 z-50 h-12 w-12 rounded-full flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-purple-300/30 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] transition-all duration-300 animate-bounce-slow"
//           aria-label="Scroll to Solutions"
//         >
//           ↑
//         </button>
//       )}

//       {/* STYLES */}
//       <style>{`
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(18px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-up {
//           animation: fadeUp 0.7s ease-out both;
//         }

//         @keyframes slideLeft {
//           0% { opacity: 0; transform: translateX(-24px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-left {
//           animation: slideLeft 0.7s ease-out both;
//         }

//         @keyframes slideRight {
//           0% { opacity: 0; transform: translateX(24px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-right {
//           animation: slideRight 0.7s ease-out both;
//         }

//         @keyframes bounceSlow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-6px); }
//         }
//         .animate-bounce-slow {
//           animation: bounceSlow 2.2s infinite;
//         }

//         /* ZOOM IN ONLY - no zoom out */
//         @keyframes heroZoomIn {
//           0% { transform: scale(1); }
//           100% { transform: scale(1.15); }
//         }
//         .animate-hero-zoom-in {
//           animation: heroZoomIn 20s ease-out forwards;
//         }

//         @keyframes aiLabel {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-aiLabel {
//           animation: aiLabel 0.8s ease-out both;
//         }
//       `}</style>
//     </main>
//   );
// }
import React, { useEffect, useState } from "react";
import {
  Cloud,
  ArrowRightLeft,
  GitBranch,
  Code2,
  Container,
  ShieldCheck,
  Activity,
  DollarSign,
  ChevronUp,
} from "lucide-react";

const CloudDevOpsServicesPage: React.FC = () => {
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
          HERO SECTION
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/cloudtechBanner.jpeg"
            className="w-full h-full object-cover animate-hero-zoom-in"
            alt="Cloud & DevOps Services Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-20 flex flex-col justify-center h-full">
          <span className="inline-block text-sm sm:text-base font-semibold tracking-[0.42em] text-purple-300 animate-aiLabel">
            CLOUD & DEVOPS SERVICES
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-up">
            CLOUD &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
              DEVOPS SERVICES
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-200/90 animate-fade-up [animation-delay:0.12s]">
            Our Cloud & DevOps Services are designed to help organizations
            build, deploy, and operate applications with greater speed,
            reliability, and scalability.
          </p>
        </div>
      </div>

      <div className="h-screen" />

      {/* =====================================================
          CONTENT SECTIONS
      ===================================================== */}
      <div className="relative z-10">
        {/* OUR APPROACH */}
        <section
          id="solutions"
          className="w-full py-20 bg-[#0d1320] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl font-light animate-fade-up">
              <span className="font-semibold">Our</span> Approach
            </h2>

            <p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
              Our Cloud & DevOps Services are designed to help organizations
              build, deploy, and operate applications with greater speed,
              reliability, and scalability. We take a platform-agnostic,
              automation-first approach that integrates cloud infrastructure,
              DevOps practices, and AI-driven insights across the application
              lifecycle. By aligning cloud and DevOps capabilities with business
              workflows, we help enterprises reduce release cycles, improve
              system resilience, and scale operations without increasing
              operational complexity or risk.
            </p>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <Cloud className="w-3 h-3" />
                  <span>Strategy</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Cloud Strategy & Architecture Services
                </h3>
                <p className="mt-3 text-slate-300">
                  We help organizations define cloud strategies by assessing
                  existing workloads, operational constraints, and future growth
                  plans.
                </p>
                <a
                  href="#section-strategy"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.05s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>Migration</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Cloud Migration & Modernization Services
                </h3>
                <p className="mt-3 text-slate-300">
                  We design and execute cloud migrations by analyzing
                  application dependencies, data flows, and operational risks.
                </p>
                <a
                  href="#section-migration"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.1s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <GitBranch className="w-3 h-3" />
                  <span>DevOps</span>
                </div>
                <h3 className="text-xl font-semibold">
                  DevOps Enablement & CI/CD Automation
                </h3>
                <p className="mt-3 text-slate-300">
                  We help organizations establish DevOps practices by automating
                  build, test, and deployment workflows.
                </p>
                <a
                  href="#section-devops"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <Code2 className="w-3 h-3" />
                  <span>Infrastructure</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Infrastructure as Code & Environment Automation
                </h3>
                <p className="mt-3 text-slate-300">
                  We enable infrastructure automation by defining environments
                  through code and standardized templates.
                </p>
                <a
                  href="#section-iac"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <Container className="w-3 h-3" />
                  <span>Cloud-Native</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Containerization & Cloud-Native Enablement
                </h3>
                <p className="mt-3 text-slate-300">
                  We help organizations adopt cloud-native architectures by
                  enabling containerization and orchestration strategies that
                  improve portability, scalability, and resilience.
                </p>
                <a
                  href="#section-container"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.25s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Security</span>
                </div>
                <h3 className="text-xl font-semibold">
                  DevSecOps & Cloud Security Enablement
                </h3>
                <p className="mt-3 text-slate-300">
                  We integrate security into cloud and DevOps workflows by
                  embedding automated security controls, policy enforcement, and
                  compliance checks throughout the delivery pipeline.
                </p>
                <a
                  href="#section-security"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.3s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <Activity className="w-3 h-3" />
                  <span>Operations</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Cloud Operations, SRE & Reliability Engineering
                </h3>
                <p className="mt-3 text-slate-300">
                  We help organizations operate cloud platforms using
                  reliability engineering and AI-assisted observability
                  practices.
                </p>
                <a
                  href="#section-sre"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.35s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <DollarSign className="w-3 h-3" />
                  <span>FinOps</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Cloud Cost Optimization & Governance
                </h3>
                <p className="mt-3 text-slate-300">
                  We help organizations gain control over cloud spend by
                  analyzing usage patterns, identifying inefficiencies, and
                  implementing governance frameworks.
                </p>
                <a
                  href="#section-finops"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES WE WORK WITH */}
        <section className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Technologies</span> We Work With
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We design and operate cloud and DevOps ecosystems across leading
              cloud platforms including Amazon Web Services, Microsoft Azure,
              and Google Cloud Platform. Our DevOps toolchains span
              containerization and orchestration platforms, CI/CD frameworks,
              infrastructure-as-code tools, monitoring and observability stacks,
              and security automation solutions. Technology selection is driven
              by workload characteristics, scalability requirements, and
              business priorities rather than fixed tooling preferences.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "AWS", icon: Cloud },
                { name: "Azure", icon: Cloud },
                { name: "GCP", icon: Cloud },
                { name: "Kubernetes", icon: Container },
                { name: "Terraform", icon: Code2 },
                { name: "Docker", icon: Container },
                { name: "Jenkins", icon: GitBranch },
                { name: "Prometheus", icon: Activity },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-white/10 hover:border-purple-500/50 transition-all animate-fade-up`}
                  style={{ animationDelay: `${0.05 * index + 0.15}s` }}
                >
                  <tech.icon className="w-6 h-6 text-purple-400" />
                  <span className="text-slate-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1 — CLOUD STRATEGY & ARCHITECTURE SERVICES */}
        <section
          id="section-strategy"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Cloud Strategy</span> &
              Architecture Services
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We help organizations define cloud strategies by assessing
              existing workloads, operational constraints, and future growth
              plans. Our approach focuses on selecting the right cloud
              architecture models—public, private, hybrid, or multi-cloud—while
              ensuring scalability, security, and cost efficiency from the
              outset.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="\images\cloudpages\cloud1.png"
                alt="Cloud strategy illustration"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>
                    • Cloud architectures aligned with business and scalability
                    goals
                  </li>
                  <li>
                    • Optimized workload placement across cloud environments
                  </li>
                  <li>• Improved cost governance and resource utilization</li>
                  <li>• A clear, actionable cloud adoption roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — CLOUD MIGRATION & MODERNIZATION SERVICES */}
        <section
          id="section-migration"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Cloud Migration</span> &
              Modernization Services
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We design and execute cloud migrations by analyzing application
              dependencies, data flows, and operational risks. Using phased and
              automation-driven migration approaches, we ensure applications are
              transitioned to the cloud with minimal disruption while enabling
              modernization where it delivers clear business value.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>• Secure and controlled migration to cloud platforms</li>
                  <li>• Minimal downtime during migration activities</li>
                  <li>• Improved application scalability and performance</li>
                  <li>• Reduced infrastructure and operational overhead</li>
                </ul>
              </div>
              <img
                src="\images\cloudpages\cloud2.png"
                alt="Cloud migration illustration"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3 — DEVOPS ENABLEMENT & CI/CD AUTOMATION */}
        <section
          id="section-devops"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">DevOps Enablement</span> & CI/CD
              Automation
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We help organizations establish DevOps practices by automating
              build, test, and deployment workflows. Our capabilities include
              designing CI/CD pipelines, integrating quality and security
              checks, and enabling continuous delivery across development and
              operations teams.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="\images\cloudpages\cloud3.png"
                alt="DevOps CI/CD illustration"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>• Faster and more reliable software releases</li>
                  <li>• Reduced manual deployment effort and errors</li>
                  <li>
                    • Improved collaboration between development and operations
                    teams
                  </li>
                  <li>• Consistent delivery across environments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — INFRASTRUCTURE AS CODE & ENVIRONMENT AUTOMATION */}
        <section
          id="section-iac"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Infrastructure as Code</span> &
              Environment Automation
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We enable infrastructure automation by defining environments
              through code and standardized templates. This ensures
              infrastructure provisioning, configuration, and scaling are
              repeatable, auditable, and aligned with DevOps best practices.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>
                    • Consistent and repeatable infrastructure provisioning
                  </li>
                  <li>• Faster environment setup and scaling</li>
                  <li>• Reduced configuration drift and operational risk</li>
                  <li>• Improved governance and auditability</li>
                </ul>
              </div>
              <img
                src="\images\cloudpages\cloud4.png"
                alt="Infrastructure as Code illustration"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>
          </div>
        </section>

        {/* SECTION 5 — CONTAINERIZATION & CLOUD-NATIVE ENABLEMENT */}
        <section
          id="section-container"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Containerization</span> &
              Cloud-Native Enablement
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We help organizations adopt cloud-native architectures by enabling
              containerization and orchestration strategies that improve
              portability, scalability, and resilience. Our approach focuses on
              aligning cloud-native adoption with operational maturity and
              application readiness.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="\images\cloudpages\cloud5.png"
                alt="Containerization illustration"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>
                    • Improved application portability across environments
                  </li>
                  <li>• Scalable and resilient runtime platforms</li>
                  <li>• Faster deployment and rollback capabilities</li>
                  <li>• Better resource utilization and performance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — DEVSECOPS & CLOUD SECURITY ENABLEMENT */}
        <section
          id="section-security"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">DevSecOps</span> & Cloud Security
              Enablement
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We integrate security into cloud and DevOps workflows by embedding
              automated security controls, policy enforcement, and compliance
              checks throughout the delivery pipeline. AI-assisted insights help
              identify vulnerabilities and configuration risks early in the
              lifecycle.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>
                    • Security embedded across CI/CD and cloud environments
                  </li>
                  <li>
                    • Reduced security vulnerabilities and misconfigurations
                  </li>
                  <li>• Improved compliance posture</li>
                  <li>• Faster remediation of security risks</li>
                </ul>
              </div>
              <img
                src="\images\cloudpages\cloud6.png"
                alt="DevSecOps illustration"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>
          </div>
        </section>

        {/* SECTION 7 — CLOUD OPERATIONS, SRE & RELIABILITY ENGINEERING */}
        <section
          id="section-sre"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Cloud Operations,</span> SRE &
              Reliability Engineering
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We help organizations operate cloud platforms using reliability
              engineering and AI-assisted observability practices. Our
              capabilities include proactive monitoring, anomaly detection,
              capacity forecasting, and incident automation to ensure system
              stability under real-world load.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="\images\cloudpages\cloud7.png"
                alt="SRE and reliability illustration"
                className="w-full rounded-xl shadow-xl animate-slide-left"
              />
              <div className="animate-slide-right">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>• Improved platform availability and reliability</li>
                  <li>• Faster incident detection and resolution</li>
                  <li>• Reduced operational noise and alert fatigue</li>
                  <li>• Predictable performance under peak demand</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — CLOUD COST OPTIMIZATION & GOVERNANCE */}
        <section
          id="section-finops"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Cloud Cost Optimization</span> &
              Governance
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We help organizations gain control over cloud spend by analyzing
              usage patterns, identifying inefficiencies, and implementing
              governance frameworks. AI-driven insights support continuous
              optimization without compromising performance or scalability.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>• Optimized cloud resource consumption</li>
                  <li>• Reduced and predictable cloud costs</li>
                  <li>• Improved cost transparency and accountability</li>
                  <li>• Sustainable long-term cloud operations</li>
                </ul>
              </div>
              <img
                src="\images\cloudpages\cloud8.png"
                alt="Cloud cost optimization illustration"
                className="w-full rounded-xl shadow-xl animate-slide-right"
              />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="w-full bg-[#020617] flex justify-center py-20 px-4">
          <div className="w-full max-w-5xl rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.20)] p-6 sm:p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text text-transparent">
                  Talk with us
                </h2>
                <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
                  Interested in Cloud & DevOps services? Reach out and we'll
                  connect you with the right specialist who fits your project
                  needs.
                </p>
                <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full opacity-70" />
              </div>

              <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all">
                <img
                  src="/images/japa.png"
                  alt="Japa Vivek"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-300/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Japa Vivek
                  </h3>
                  <p className="text-sm text-slate-400">
                    Head of Cloud & DevOps Engineering
                  </p>
                  <p className="mt-3 sm:mt-4 text-sm">
                    Email:{" "}
                    <a
                      href="mailto:cloud@cjss.example"
                      className="text-purple-300 hover:text-sky-300 hover:underline transition-colors"
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
          <ChevronUp className="w-5 h-5" />
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

export default CloudDevOpsServicesPage;
