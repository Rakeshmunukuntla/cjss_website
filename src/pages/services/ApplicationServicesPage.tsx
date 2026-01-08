// import { useEffect, useState } from "react";

// export default function ApplicationServicesPage() {
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
//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}
//       <section className="relative w-full min-h-[80vh] overflow-hidden">
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//           <img
//             src="/images/bannerApplicationPage.png"
//             className="w-full h-full object-cover animate-slow-zoom"
//             alt="Application Services Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//         </div>

//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
//           <span
//             className="
//               inline-block
//               text-sm sm:text-base
//               font-semibold
//               tracking-[0.42em]
//               text-blue-300
//               animate-aiLabel
//               animate-aiPulse
//             "
//           >
//             Application Services
//           </span>

//           <h1 className="mt-3 text-5xl font-semibold leading-tight">
//             APPLICATION{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
//               SERVICES &amp; MODERNIZATION
//             </span>
//           </h1>

//           <p className="mt-4 max-w-3xl text-slate-200/90 text-lg leading-relaxed">
//             Modern enterprises need applications that are fast, flexible, and
//             capable of evolving with changing business demands. Our Application
//             Services and Modernization practice helps organizations transform
//             existing systems into modern, scalable digital platforms by
//             combining enterprise technologies with cutting-edge frontend
//             frameworks like React, Angular, and Spartacus. We focus on building
//             solutions that are not only technically sound but also aligned with
//             real business outcomes.
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           SOLUTIONS WE OFFER
//       ===================================================== */}
//       <section
//         id="solutions"
//         className="w-full py-20 bg-[#0d1320] border-t border-white/10"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-4xl font-light">
//             <span className="font-semibold">Solutions</span> we Offer
//           </h2>

//           <p className="mt-5 max-w-4xl text-slate-300 text-lg">
//             Our Application Services and Modernization practice helps
//             organizations transform existing systems into modern, scalable
//             digital platforms. We focus on building solutions that are not only
//             technically sound but also aligned with real business outcomes.
//           </p>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-xl font-semibold">
//                 Application Modernization
//               </h3>
//               <p className="mt-3 text-slate-300">
//                 Reimagine applications for a digital-first world with modular,
//                 component-driven architectures using React, Angular, AEM and SAP
//                 Commerce.
//               </p>
//               <a
//                 href="#section-app-modernization"
//                 className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">
//                 Microservices &amp; API Engineering
//               </h3>
//               <p className="mt-3 text-slate-300">
//                 Build the foundation for scalable frontends with domain-aligned
//                 microservices and API-first platforms that enable independent
//                 evolution.
//               </p>
//               <a
//                 href="#section-microservices-api"
//                 className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">
//                 Frontend Engineering (React, Angular, Next.js, Spartacus)
//               </h3>
//               <p className="mt-3 text-slate-300">
//                 Craft high-performance interfaces that engage users and deliver
//                 measurable business value with modern component-based
//                 frameworks.
//               </p>
//               <a
//                 href="#section-frontend-engineering"
//                 className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">
//                 Node.js &amp; Backend Engineering
//               </h3>
//               <p className="mt-3 text-slate-300">
//                 Power frontends with scalable backend services using Node.js,
//                 Express, and NestJS as orchestration layers for enterprise
//                 systems.
//               </p>
//               <a
//                 href="#section-node-backend"
//                 className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">
//                 DevOps for Application Platforms
//               </h3>
//               <p className="mt-3 text-slate-300">
//                 Accelerate delivery with CI/CD pipelines, automation, and
//                 observability across frontend and backend applications.
//               </p>
//               <a
//                 href="#section-devops-platforms"
//                 className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Read More →
//               </a>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold">
//                 Application Support &amp; Reliability
//               </h3>
//               <p className="mt-3 text-slate-300">
//                 Ensure performance, stability, and continuity with proactive
//                 monitoring, structured SLAs, and continuous optimization.
//               </p>
//               <a
//                 href="#section-app-support"
//                 className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Read More →
//               </a>
//             </div>

//             {/* ========== OPTIMIZED DELIVERY APPROACH ========== */}
//             <div>
//               <h3 className="text-xl font-semibold">
//                 Our Optimized Delivery Approach
//               </h3>
//               <p className="mt-3 text-slate-300">
//                 Designed for speed, compatibility, and scalability — aligning
//                 frontend frameworks with enterprise platforms through API-driven
//                 and modular architectures.
//               </p>
//               <a
//                 href="#section-delivery-approach"
//                 className="mt-3 inline-block text-blue-400 hover:text-blue-300 transition-colors"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 1 — APPLICATION MODERNIZATION
//       ===================================================== */}
//       <section
//         id="section-app-modernization"
//         className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Application</span> Modernization
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Reimagining Applications for a Digital-First World
//           </h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Application modernization is about creating systems that are easier
//             to evolve, simpler to maintain, and better aligned with modern user
//             expectations. We help organizations move away from rigid, tightly
//             coupled applications toward modular, component-driven architectures
//             that support faster innovation.
//           </p>

//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">Frontend Modernization</h4>
//               <p className="mt-3 text-slate-300">
//                 Modernize frontends using frameworks such as React and Angular,
//                 integrated seamlessly with platforms like AEM and SAP Commerce.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Incremental Approach</h4>
//               <p className="mt-3 text-slate-300">
//                 Modernization happens incrementally, ensuring business
//                 continuity while steadily improving performance, scalability,
//                 and maintainability.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">
//                 Future-Ready Architecture
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Build an application landscape that is adaptable to new
//                 channels, devices, and customer expectations without disrupting
//                 existing investments.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Improve User Experience Without Disrupting Investments
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 By modernizing the frontend using frameworks such as React and
//                 Angular, and integrating them seamlessly with platforms like AEM
//                 and SAP Commerce, we enable businesses to improve user
//                 experience without disrupting existing investments. Our approach
//                 allows modernization to happen incrementally, ensuring business
//                 continuity while steadily improving performance, scalability,
//                 and maintainability. The result is an application landscape that
//                 is future-ready and adaptable to new channels, devices, and
//                 customer expectations.
//               </p>
//             </div>

//             <img
//               src="/images/AppUpdated1.jpg"
//               className="w-full rounded-xl shadow-xl"
//               alt="Application modernization"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 2 — MICROSERVICES & API ENGINEERING
//       ===================================================== */}
//       <section
//         id="section-microservices-api"
//         className="w-full py-24 bg-[#020617]"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Microservices</span> &amp; API
//             Engineering
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Building the Foundation for Scalable Frontends
//           </h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Modern frontend experiences rely heavily on well-designed backend
//             services and APIs. We design and implement domain-aligned
//             microservices and API platforms that act as a stable, scalable
//             backbone for frontend applications.
//           </p>

//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">API-First Approach</h4>
//               <p className="mt-3 text-slate-300">
//                 Ensure frontend teams using React, Angular, or Spartacus can
//                 evolve independently of backend systems for faster releases and
//                 easier integrations.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">
//                 Enterprise Platform Integration
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Seamless communication with AEM, commerce engines, analytics
//                 tools, and third-party systems through well-designed APIs.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">
//                 Unified Digital Ecosystem
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Build a flexible digital ecosystem that grows with your business
//                 through improved system resilience and scalable architecture.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <img
//               src="/images/AppUpdated2.jpg"
//               className="w-full rounded-xl shadow-xl"
//               alt="Microservices and APIs"
//             />

//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Independent Frontend Evolution
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 By adopting an API-first approach, we ensure that frontend teams
//                 using React, Angular, or Spartacus can evolve independently of
//                 backend systems. This separation enables faster releases, easier
//                 integrations, and improved system resilience. Our microservices
//                 architecture supports seamless communication with enterprise
//                 platforms such as AEM, commerce engines, analytics tools, and
//                 third-party systems, enabling a unified and flexible digital
//                 ecosystem that grows with your business.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 3 — FRONTEND ENGINEERING
//       ===================================================== */}
//       <section
//         id="section-frontend-engineering"
//         className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Frontend</span> Engineering
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Crafting Experiences That Users Love
//           </h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Frontend engineering is where technology meets user experience. We
//             specialize in building modern, high-performance interfaces using
//             React, Angular, Next.js, and Spartacus that are designed to engage
//             users and deliver measurable business value.
//           </p>

//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">
//                 Component-Based Development
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Our approach ensures consistency, reusability, and faster
//                 development cycles across your applications.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">
//                 AEM Headless &amp; Hybrid
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Content teams retain full control over content while frontend
//                 teams deliver rich, dynamic experiences.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">
//                 Spartacus for SAP Commerce
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Build scalable, API-driven storefronts that are flexible,
//                 customizable, and future-proof.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">
//                 React, Angular, Next.js &amp; Spartacus
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Our component-based development approach ensures consistency,
//                 reusability, and faster development cycles. When integrated with
//                 AEM in headless or hybrid setups, content teams retain full
//                 control over content while frontend teams deliver rich, dynamic
//                 experiences. For SAP Commerce implementations, Spartacus enables
//                 us to build scalable, API-driven storefronts that are flexible,
//                 customizable, and future-proof. This combination ensures fast
//                 load times, responsive design, and seamless customer journeys
//                 across devices.
//               </p>
//             </div>

//             <img
//               src="/images/AppUpdated3.jpg"
//               className="w-full rounded-xl shadow-xl"
//               alt="Frontend engineering"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 4 — NODE.JS & BACKEND ENGINEERING
//       ===================================================== */}
//       <section id="section-node-backend" className="w-full py-24 bg-[#020617]">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Node.js</span> &amp; Backend
//             Engineering
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Powering Frontends with Scalable Backend Services
//           </h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             A strong frontend experience requires an equally strong backend. We
//             design and build backend services using Node.js, Express, and NestJS
//             to support modern application architectures. These services act as
//             orchestration layers that aggregate data, apply business logic, and
//             deliver optimized responses to frontend applications.
//           </p>

//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">Orchestration Layers</h4>
//               <p className="mt-3 text-slate-300">
//                 Aggregate data, apply business logic, and deliver optimized
//                 responses to frontend applications.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">
//                 Scalability &amp; Performance
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Built for scalability, security, and performance to keep
//                 frontends responsive even under heavy traffic.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Clean Architecture</h4>
//               <p className="mt-3 text-slate-300">
//                 Smooth integration with enterprise systems while keeping the
//                 architecture maintainable and adaptable to future requirements.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <img
//               src="/images/AppUpdated4.jpg"
//               className="w-full rounded-xl shadow-xl"
//               alt="Node backend"
//             />

//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Aligned Backend &amp; Frontend Design
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 Our backend solutions are built for scalability, security, and
//                 performance, ensuring that frontend applications remain
//                 responsive even under heavy traffic. By aligning backend design
//                 with frontend needs, we reduce complexity and enable faster
//                 feature delivery. This ensures smooth integration with
//                 enterprise systems while keeping the overall architecture clean,
//                 maintainable, and adaptable to future requirements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 5 — DEVOPS FOR APPLICATION PLATFORMS
//       ===================================================== */}
//       <section
//         id="section-devops-platforms"
//         className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">DevOps</span> for Application
//             Platforms
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Accelerating Delivery with Confidence
//           </h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Speed and reliability are critical in modern application delivery.
//             Our DevOps services focus on implementing CI/CD pipelines,
//             automation, and observability to ensure that applications are
//             delivered quickly and reliably across environments.
//           </p>

//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">
//                 Automated Build &amp; Deploy
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Automate build, test, and deployment processes for both frontend
//                 and backend applications to reduce manual effort.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">
//                 Eliminate Deployment Risks
//               </h4>
//               <p className="mt-3 text-slate-300">
//                 Reduce deployment risks through automated quality gates,
//                 rollback strategies, and consistent environments.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Continuous Monitoring</h4>
//               <p className="mt-3 text-slate-300">
//                 Enable early detection of issues, faster resolution, and
//                 continuous performance optimization.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Release Features More Frequently
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 By automating build, test, and deployment processes for both
//                 frontend and backend applications, we help teams reduce manual
//                 effort and eliminate deployment risks. Continuous monitoring and
//                 observability enable early detection of issues, faster
//                 resolution, and continuous performance optimization. This
//                 approach allows businesses to release features more frequently,
//                 respond to market changes faster, and maintain consistent
//                 quality across development, testing, and production
//                 environments.
//               </p>
//             </div>

//             <img
//               src="/images/AppUpdated5.jpg"
//               className="w-full rounded-xl shadow-xl"
//               alt="DevOps for Application Platforms"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 6 — APPLICATION SUPPORT & RELIABILITY
//       ===================================================== */}
//       <section id="section-app-support" className="w-full py-24 bg-[#020617]">
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             <span className="font-semibold">Application</span> Support &amp;
//             Reliability
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Ensuring Performance, Stability, and Continuity
//           </h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Delivering an application is only the first step — maintaining its
//             reliability is what ensures long-term success. Our Application
//             Support and Reliability services focus on proactive monitoring,
//             performance tuning, and continuous optimization to keep applications
//             running smoothly.
//           </p>

//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">Proactive Monitoring</h4>
//               <p className="mt-3 text-slate-300">
//                 Support applications built using React, Angular, Spartacus, AEM,
//                 and backend platforms with high availability and faster issue
//                 resolution.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Structured SLAs</h4>
//               <p className="mt-3 text-slate-300">
//                 Our support model adapts to your operational needs, providing
//                 structured SLAs and expert oversight.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Continuous Optimization</h4>
//               <p className="mt-3 text-slate-300">
//                 Faster issue resolution and consistent performance through
//                 ongoing optimization, tuning, and improvement cycles.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <img
//               src="/images/AppUpdated6.jpg"
//               className="w-full rounded-xl shadow-xl"
//               alt="Application Support"
//             />

//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Focus on Growth and Innovation
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 We support applications built using React, Angular, Spartacus,
//                 AEM, and backend platforms by ensuring high availability, faster
//                 issue resolution, and consistent performance. Our support model
//                 adapts to your operational needs, providing structured SLAs and
//                 expert oversight. This allows businesses to focus on growth and
//                 innovation, confident that their digital platforms are stable,
//                 secure, and well-maintained.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SECTION 7 — OPTIMIZED DELIVERY APPROACH
//       ===================================================== */}
//       <section
//         id="section-delivery-approach"
//         className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//       >
//         <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
//           <h2 className="text-5xl font-light">
//             Our <span className="font-semibold">Optimized</span> Delivery
//             Approach
//           </h2>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Designed for Speed, Compatibility, and Scalability
//           </h3>

//           <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
//             Our delivery approach is built around compatibility, adaptability,
//             and efficiency. By aligning frontend frameworks with enterprise
//             platforms through API-driven and modular architectures, we ensure
//             seamless integration and minimal rework. This approach reduces
//             dependencies, improves collaboration between teams, and accelerates
//             development timelines.
//           </p>

//           <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
//             <div>
//               <h4 className="text-xl font-semibold">Reduced Dependencies</h4>
//               <p className="mt-3 text-slate-300">
//                 Modular architecture reduces dependencies between teams and
//                 enables parallel development streams for faster delivery.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">Accelerated Timelines</h4>
//               <p className="mt-3 text-slate-300">
//                 API-driven design and reusable components accelerate development
//                 timelines and improve team collaboration.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold">End-to-End Optimization</h4>
//               <p className="mt-3 text-slate-300">
//                 Optimization at every stage — from architecture design and code
//                 quality to deployment automation and performance tuning.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h4 className="text-2xl font-semibold">
//                 Ready to Evolve with Your Business
//               </h4>
//               <p className="mt-4 text-lg text-slate-300">
//                 We focus on optimization at every stage — from architecture
//                 design and code quality to deployment automation and performance
//                 tuning. This ensures projects are delivered on time, within
//                 scope, and with long-term scalability in mind. The result is a
//                 digital solution that not only meets today&apos;s requirements
//                 but is also ready to evolve with your business.
//               </p>
//             </div>

//             <img
//               src="/images/AppUpdated7.jpg"
//               className="w-full rounded-xl shadow-xl"
//               alt="Optimized Delivery Approach"
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           TALK WITH US
//       ===================================================== */}
//       <section className="w-full flex justify-center mt-20 mb-20 px-4">
//         <div
//           className="
//             w-full max-w-5xl
//             rounded-3xl
//             bg-slate-900/70
//             backdrop-blur-2xl
//             border border-white/10
//             shadow-[0_0_60px_rgba(34,211,238,0.20)]
//             p-6 sm:p-10 md:p-14
//           "
//         >
//           <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
//             {/* LEFT TEXT BLOCK */}
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
//                 Talk with us
//               </h2>

//               <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
//                 Interested in application services and modernization? Reach out
//                 and we&apos;ll connect you with the right specialist who fits
//                 your project needs.
//               </p>

//               <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70" />
//             </div>

//             {/* RIGHT CONTACT CARD */}
//             <div
//               className="
//                 rounded-3xl
//                 bg-slate-950/80
//                 border border-white/10
//                 shadow-[0_0_40px_rgba(0,0,0,0.55)]
//                 p-6 sm:p-8
//                 flex gap-4 sm:gap-5
//                 items-start
//                 hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
//                 transition-all
//               "
//             >
//               {/* PROFILE IMAGE */}
//               <img
//                 src="/images/Srikanth_2.png"
//                 alt="Priya"
//                 className="
//                   h-16 w-16 sm:h-20 sm:w-20
//                   rounded-full
//                   object-cover
//                   border border-purple-500/40
//                   shadow-[0_0_20px_rgba(168,85,247,0.35)]
//                 "
//               />

//               {/* DETAILS */}
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-white">
//                   Srikanth Banthu
//                 </h3>
//                 <p className="text-sm text-slate-400">
//                   Head of Application Services
//                 </p>

//                 <p className="mt-3 sm:mt-4 text-sm">
//                   Email:{" "}
//                   <a
//                     href="mailto:apps@cjss.example"
//                     className="text-cyan-400 hover:underline"
//                   >
//                     apps@cjss.example
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
import { useEffect, useState } from "react";

export default function ApplicationServicesPage() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Fade out hero immediately on scroll
      // At 50% scroll → 90% faded (opacity = 0.1)
      const halfScreen = windowHeight * 0.5;
      let opacity;

      if (scrollY <= halfScreen) {
        opacity = 1 - (scrollY / halfScreen) * 0.9;
      } else {
        const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
        opacity = 0.1 - secondHalfProgress * 0.1;
      }

      setHeroOpacity(Math.max(0, Math.min(1, opacity)));

      // Show scroll button logic
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
          HERO SECTION — FIXED BEHIND CONTENT
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/bannerApplicationPage.png"
            className="w-full h-full object-cover animate-hero-zoom-in"
            alt="Application Services Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28 flex flex-col justify-center h-full">
          <span className="inline-block text-sm sm:text-base font-semibold tracking-[0.42em] text-purple-300 animate-aiLabel">
            APPLICATION SERVICES
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-up">
            APPLICATION{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
              SERVICES &amp; MODERNIZATION
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
            Modern enterprises need applications that are fast, flexible, and
            capable of evolving with changing business demands. Our Application
            Services and Modernization practice helps organizations transform
            existing systems into modern, scalable digital platforms by
            combining enterprise technologies with cutting-edge frontend
            frameworks like React, Angular, and Spartacus.
          </p>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up [animation-delay:0.3s]">
            <span className="text-xs text-white/50 tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-purple-300 rounded-full animate-scroll-indicator" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Spacer to push content below hero */}
      <div className="h-screen" />

      {/* =====================================================
          ALL CONTENT SECTIONS — SCROLLS OVER HERO
      ===================================================== */}
      <div className="relative z-10">
        {/* =====================================================
            SOLUTIONS WE OFFER
        ===================================================== */}
        <section
          id="solutions"
          className="w-full py-20 bg-[#0d1320] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl font-light animate-fade-up">
              <span className="font-semibold">Solutions</span> we Offer
            </h2>

            <p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
              Our Application Services and Modernization practice helps
              organizations transform existing systems into modern, scalable
              digital platforms. We focus on building solutions that are not
              only technically sound but also aligned with real business
              outcomes.
            </p>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>①</span>
                  <span>Modernization</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Application Modernization
                </h3>
                <p className="mt-3 text-slate-300">
                  Reimagine applications for a digital-first world with modular,
                  component-driven architectures using React, Angular, AEM and
                  SAP Commerce.
                </p>
                <a
                  href="#section-app-modernization"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.05s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <span>②</span>
                  <span>APIs</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Microservices &amp; API Engineering
                </h3>
                <p className="mt-3 text-slate-300">
                  Build the foundation for scalable frontends with
                  domain-aligned microservices and API-first platforms that
                  enable independent evolution.
                </p>
                <a
                  href="#section-microservices-api"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.1s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>③</span>
                  <span>Frontend</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Frontend Engineering (React, Angular, Next.js, Spartacus)
                </h3>
                <p className="mt-3 text-slate-300">
                  Craft high-performance interfaces that engage users and
                  deliver measurable business value with modern component-based
                  frameworks.
                </p>
                <a
                  href="#section-frontend-engineering"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <span>④</span>
                  <span>Backend</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Node.js &amp; Backend Engineering
                </h3>
                <p className="mt-3 text-slate-300">
                  Power frontends with scalable backend services using Node.js,
                  Express, and NestJS as orchestration layers for enterprise
                  systems.
                </p>
                <a
                  href="#section-node-backend"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>⑤</span>
                  <span>DevOps</span>
                </div>
                <h3 className="text-xl font-semibold">
                  DevOps for Application Platforms
                </h3>
                <p className="mt-3 text-slate-300">
                  Accelerate delivery with CI/CD pipelines, automation, and
                  observability across frontend and backend applications.
                </p>
                <a
                  href="#section-devops-platforms"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.25s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <span>⑥</span>
                  <span>Support</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Application Support &amp; Reliability
                </h3>
                <p className="mt-3 text-slate-300">
                  Ensure performance, stability, and continuity with proactive
                  monitoring, structured SLAs, and continuous optimization.
                </p>
                <a
                  href="#section-app-support"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.3s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>⑦</span>
                  <span>Delivery</span>
                </div>
                <h3 className="text-xl font-semibold">
                  Our Optimized Delivery Approach
                </h3>
                <p className="mt-3 text-slate-300">
                  Designed for speed, compatibility, and scalability — aligning
                  frontend frameworks with enterprise platforms through
                  API-driven and modular architectures.
                </p>
                <a
                  href="#section-delivery-approach"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
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
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Application</span> Modernization
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Reimagining Applications for a Digital-First World
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              Application modernization is about creating systems that are
              easier to evolve, simpler to maintain, and better aligned with
              modern user expectations. We help organizations move away from
              rigid, tightly coupled applications toward modular,
              component-driven architectures that support faster innovation.
            </p>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">
                  Frontend Modernization
                </h4>
                <p className="mt-3 text-slate-300">
                  Modernize frontends using frameworks such as React and
                  Angular, integrated seamlessly with platforms like AEM and SAP
                  Commerce.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">Incremental Approach</h4>
                <p className="mt-3 text-slate-300">
                  Modernization happens incrementally, ensuring business
                  continuity while steadily improving performance, scalability,
                  and maintainability.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">
                  Future-Ready Architecture
                </h4>
                <p className="mt-3 text-slate-300">
                  Build an application landscape that is adaptable to new
                  channels, devices, and customer expectations without
                  disrupting existing investments.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Improve User Experience Without Disrupting Investments
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  By modernizing the frontend using frameworks such as React and
                  Angular, and integrating them seamlessly with platforms like
                  AEM and SAP Commerce, we enable businesses to improve user
                  experience without disrupting existing investments. Our
                  approach allows modernization to happen incrementally,
                  ensuring business continuity while steadily improving
                  performance, scalability, and maintainability.
                </p>
              </div>

              <img
                src="/images/AppUpdated1.jpg"
                className="w-full rounded-xl shadow-xl animate-slide-right"
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
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Microservices</span> &amp; API
              Engineering
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Building the Foundation for Scalable Frontends
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              Modern frontend experiences rely heavily on well-designed backend
              services and APIs. We design and implement domain-aligned
              microservices and API platforms that act as a stable, scalable
              backbone for frontend applications.
            </p>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">API-First Approach</h4>
                <p className="mt-3 text-slate-300">
                  Ensure frontend teams using React, Angular, or Spartacus can
                  evolve independently of backend systems for faster releases
                  and easier integrations.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">
                  Enterprise Platform Integration
                </h4>
                <p className="mt-3 text-slate-300">
                  Seamless communication with AEM, commerce engines, analytics
                  tools, and third-party systems through well-designed APIs.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">
                  Unified Digital Ecosystem
                </h4>
                <p className="mt-3 text-slate-300">
                  Build a flexible digital ecosystem that grows with your
                  business through improved system resilience and scalable
                  architecture.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/AppUpdated2.jpg"
                className="w-full rounded-xl shadow-xl animate-slide-left"
                alt="Microservices and APIs"
              />

              <div className="animate-slide-right">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Independent Frontend Evolution
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  By adopting an API-first approach, we ensure that frontend
                  teams using React, Angular, or Spartacus can evolve
                  independently of backend systems. This separation enables
                  faster releases, easier integrations, and improved system
                  resilience. Our microservices architecture supports seamless
                  communication with enterprise platforms such as AEM, commerce
                  engines, analytics tools, and third-party systems.
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
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Frontend</span> Engineering
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Crafting Experiences That Users Love
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              Frontend engineering is where technology meets user experience. We
              specialize in building modern, high-performance interfaces using
              React, Angular, Next.js, and Spartacus that are designed to engage
              users and deliver measurable business value.
            </p>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">
                  Component-Based Development
                </h4>
                <p className="mt-3 text-slate-300">
                  Our approach ensures consistency, reusability, and faster
                  development cycles across your applications.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">
                  AEM Headless &amp; Hybrid
                </h4>
                <p className="mt-3 text-slate-300">
                  Content teams retain full control over content while frontend
                  teams deliver rich, dynamic experiences.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">
                  Spartacus for SAP Commerce
                </h4>
                <p className="mt-3 text-slate-300">
                  Build scalable, API-driven storefronts that are flexible,
                  customizable, and future-proof.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  React, Angular, Next.js &amp; Spartacus
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Our component-based development approach ensures consistency,
                  reusability, and faster development cycles. When integrated
                  with AEM in headless or hybrid setups, content teams retain
                  full control over content while frontend teams deliver rich,
                  dynamic experiences. For SAP Commerce implementations,
                  Spartacus enables us to build scalable, API-driven storefronts
                  that are flexible, customizable, and future-proof.
                </p>
              </div>

              <img
                src="/images/AppUpdated3.jpg"
                className="w-full rounded-xl shadow-xl animate-slide-right"
                alt="Frontend engineering"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 4 — NODE.JS & BACKEND ENGINEERING
        ===================================================== */}
        <section
          id="section-node-backend"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Node.js</span> &amp; Backend
              Engineering
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Powering Frontends with Scalable Backend Services
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              A strong frontend experience requires an equally strong backend.
              We design and build backend services using Node.js, Express, and
              NestJS to support modern application architectures. These services
              act as orchestration layers that aggregate data, apply business
              logic, and deliver optimized responses to frontend applications.
            </p>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">Orchestration Layers</h4>
                <p className="mt-3 text-slate-300">
                  Aggregate data, apply business logic, and deliver optimized
                  responses to frontend applications.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">
                  Scalability &amp; Performance
                </h4>
                <p className="mt-3 text-slate-300">
                  Built for scalability, security, and performance to keep
                  frontends responsive even under heavy traffic.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">Clean Architecture</h4>
                <p className="mt-3 text-slate-300">
                  Smooth integration with enterprise systems while keeping the
                  architecture maintainable and adaptable to future
                  requirements.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/AppUpdated4.jpg"
                className="w-full rounded-xl shadow-xl animate-slide-left"
                alt="Node backend"
              />

              <div className="animate-slide-right">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Aligned Backend &amp; Frontend Design
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Our backend solutions are built for scalability, security, and
                  performance, ensuring that frontend applications remain
                  responsive even under heavy traffic. By aligning backend
                  design with frontend needs, we reduce complexity and enable
                  faster feature delivery. This ensures smooth integration with
                  enterprise systems while keeping the overall architecture
                  clean, maintainable, and adaptable to future requirements.
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
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">DevOps</span> for Application
              Platforms
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Accelerating Delivery with Confidence
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              Speed and reliability are critical in modern application delivery.
              Our DevOps services focus on implementing CI/CD pipelines,
              automation, and observability to ensure that applications are
              delivered quickly and reliably across environments.
            </p>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">
                  Automated Build &amp; Deploy
                </h4>
                <p className="mt-3 text-slate-300">
                  Automate build, test, and deployment processes for both
                  frontend and backend applications to reduce manual effort.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">
                  Eliminate Deployment Risks
                </h4>
                <p className="mt-3 text-slate-300">
                  Reduce deployment risks through automated quality gates,
                  rollback strategies, and consistent environments.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">Continuous Monitoring</h4>
                <p className="mt-3 text-slate-300">
                  Enable early detection of issues, faster resolution, and
                  continuous performance optimization.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Release Features More Frequently
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  By automating build, test, and deployment processes for both
                  frontend and backend applications, we help teams reduce manual
                  effort and eliminate deployment risks. Continuous monitoring
                  and observability enable early detection of issues, faster
                  resolution, and continuous performance optimization. This
                  approach allows businesses to release features more
                  frequently, respond to market changes faster, and maintain
                  consistent quality across development, testing, and production
                  environments.
                </p>
              </div>

              <img
                src="/images/AppUpdated5.jpg"
                className="w-full rounded-xl shadow-xl animate-slide-right"
                alt="DevOps for Application Platforms"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 6 — APPLICATION SUPPORT & RELIABILITY
        ===================================================== */}
        <section
          id="section-app-support"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">Application</span> Support &amp;
              Reliability
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Ensuring Performance, Stability, and Continuity
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              Delivering an application is only the first step — maintaining its
              reliability is what ensures long-term success. Our Application
              Support and Reliability services focus on proactive monitoring,
              performance tuning, and continuous optimization to keep
              applications running smoothly.
            </p>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">Proactive Monitoring</h4>
                <p className="mt-3 text-slate-300">
                  Support applications built using React, Angular, Spartacus,
                  AEM, and backend platforms with high availability and faster
                  issue resolution.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">Structured SLAs</h4>
                <p className="mt-3 text-slate-300">
                  Our support model adapts to your operational needs, providing
                  structured SLAs and expert oversight.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">
                  Continuous Optimization
                </h4>
                <p className="mt-3 text-slate-300">
                  Faster issue resolution and consistent performance through
                  ongoing optimization, tuning, and improvement cycles.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/AppUpdated6.jpg"
                className="w-full rounded-xl shadow-xl animate-slide-left"
                alt="Application Support"
              />

              <div className="animate-slide-right">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Focus on Growth and Innovation
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  We support applications built using React, Angular, Spartacus,
                  AEM, and backend platforms by ensuring high availability,
                  faster issue resolution, and consistent performance. Our
                  support model adapts to your operational needs, providing
                  structured SLAs and expert oversight. This allows businesses
                  to focus on growth and innovation, confident that their
                  digital platforms are stable, secure, and well-maintained.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 7 — OPTIMIZED DELIVERY APPROACH
        ===================================================== */}
        <section
          id="section-delivery-approach"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              Our <span className="font-semibold">Optimized</span> Delivery
              Approach
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Designed for Speed, Compatibility, and Scalability
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              Our delivery approach is built around compatibility, adaptability,
              and efficiency. By aligning frontend frameworks with enterprise
              platforms through API-driven and modular architectures, we ensure
              seamless integration and minimal rework. This approach reduces
              dependencies, improves collaboration between teams, and
              accelerates development timelines.
            </p>

            <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-14">
              <div className="animate-fade-up [animation-delay:0.1s]">
                <h4 className="text-xl font-semibold">Reduced Dependencies</h4>
                <p className="mt-3 text-slate-300">
                  Modular architecture reduces dependencies between teams and
                  enables parallel development streams for faster delivery.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <h4 className="text-xl font-semibold">Accelerated Timelines</h4>
                <p className="mt-3 text-slate-300">
                  API-driven design and reusable components accelerate
                  development timelines and improve team collaboration.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <h4 className="text-xl font-semibold">
                  End-to-End Optimization
                </h4>
                <p className="mt-3 text-slate-300">
                  Optimization at every stage — from architecture design and
                  code quality to deployment automation and performance tuning.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Ready to Evolve with Your Business
                </h4>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  We focus on optimization at every stage — from architecture
                  design and code quality to deployment automation and
                  performance tuning. This ensures projects are delivered on
                  time, within scope, and with long-term scalability in mind.
                  The result is a digital solution that not only meets
                  today&apos;s requirements but is also ready to evolve with
                  your business.
                </p>
              </div>

              <img
                src="/images/AppUpdated7.jpg"
                className="w-full rounded-xl shadow-xl animate-slide-right"
                alt="Optimized Delivery Approach"
              />
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
                  Interested in application services and modernization? Reach
                  out and we&apos;ll connect you with the right specialist who
                  fits your project needs.
                </p>

                <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full opacity-70" />
              </div>

              <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all">
                <img
                  src="/images/Srikanth_2.png"
                  alt="Srikanth"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-300/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                />

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Srikanth Banthu
                  </h3>
                  <p className="text-sm text-slate-400">
                    Head of Application Services
                  </p>

                  <p className="mt-3 sm:mt-4 text-sm">
                    Email:{" "}
                    <a
                      href="mailto:apps@cjss.example"
                      className="text-purple-300 hover:text-sky-300 hover:underline transition-colors"
                    >
                      apps@cjss.example
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
          animation: heroZoomIn 20s ease-out forwards;
        }

        @keyframes scrollIndicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        .animate-scroll-indicator {
          animation: scrollIndicator 1.8s ease-in-out infinite;
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
}
