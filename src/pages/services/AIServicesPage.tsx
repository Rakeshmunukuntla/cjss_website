// import React, { useEffect, useState } from "react";

// const AIServicesPage: React.FC = () => {
//   const [showScrollBtn, setShowScrollBtn] = useState(false);
//   const [heroOpacity, setHeroOpacity] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       const halfScreen = windowHeight * 0.5;
//       let opacity;

//       if (scrollY <= halfScreen) {
//         opacity = 1 - (scrollY / halfScreen) * 0.9;
//       } else {
//         const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
//         opacity = 0.1 - secondHalfProgress * 0.1;
//       }

//       setHeroOpacity(Math.max(0, Math.min(1, opacity)));

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
//           HERO SECTION
//       ===================================================== */}
//       <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             src="/images/aibanner.jpg"
//             className="w-full h-full object-cover animate-hero-zoom-in"
//             alt="AI Services Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-20 flex flex-col justify-center h-full">
//           <span className="inline-block text-sm sm:text-base font-semibold tracking-[0.42em] text-purple-300 animate-aiLabel">
//             AI SERVICES
//           </span>

//           <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-up">
//             TRANSFORM YOUR BUSINESS WITH{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
//               AI & INTELLIGENCE
//             </span>
//           </h1>

//           <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-200/90 animate-fade-up [animation-delay:0.12s]">
//             We help enterprises adopt AI/ML, Generative AI, automation and
//             intelligent decision systems to improve accuracy, efficiency and
//             business speed.
//           </p>

//           {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up [animation-delay:0.3s]">
//             <span className="text-xs text-white/50 tracking-widest uppercase">
//               Scroll to explore
//             </span>
//             <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
//               <div className="w-1.5 h-3 bg-purple-300 rounded-full animate-scroll-indicator" />
//             </div>
//           </div> */}
//         </div>
//       </div>

//       <div className="h-screen" />

//       {/* =====================================================
//           CONTENT SECTIONS
//       ===================================================== */}
//       <div className="relative z-10">
//         {/* SOLUTIONS */}
//         <section
//           id="solutions"
//           className="w-full py-20 bg-[#0d1320] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl font-light animate-fade-up">
//               <span className="font-semibold">Solutions</span> we Offer
//             </h2>

//             <p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
//               From AI strategy to Generative AI, MLOps, NLP and Vision systems —
//               we help enterprises build and scale intelligent solutions tailored
//               to their business.
//             </p>

//             <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
//               <div className="animate-fade-up">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>①</span>
//                   <span>AI Roadmaps</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   AI Strategy & Consulting
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Identify high-value AI use cases and build a roadmap aligned
//                   with your business goals.
//                 </p>
//                 <a
//                   href="#section-ai-strategy"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.05s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>②</span>
//                   <span>ML Models</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   Machine Learning Engineering
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Forecasting, recommendation, scoring, anomaly detection and
//                   automation.
//                 </p>
//                 <a
//                   href="#section-ml-engineering"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>③</span>
//                   <span>GenAI & LLM</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   Generative AI & LLM Solutions
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Private RAG, AI copilots, intelligent chatbots and content
//                   automation.
//                 </p>
//                 <a
//                   href="#section-genai"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>④</span>
//                   <span>Vision & NLP</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">Computer Vision & NLP</h3>
//                 <p className="mt-3 text-slate-300">
//                   Image, document and language understanding at production
//                   scale.
//                 </p>
//                 <a
//                   href="#section-vision-nlp"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>⑤</span>
//                   <span>MLOps</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   MLOps, Deployment & Monitoring
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   CI/CD for ML, model registries, monitoring, drift and
//                   retraining.
//                 </p>
//                 <a
//                   href="#section-mlops"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.25s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>⑥</span>
//                   <span>Data for AI</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   Data Engineering for AI
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Build analytics-ready, ML-ready data pipelines and feature
//                   stores.
//                 </p>
//                 <a
//                   href="#section-data-engineering"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 1 — AI STRATEGY */}
//         <section
//           id="section-ai-strategy"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">AI Strategy</span> & Consulting
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               Start with clarity instead of experiments. We work with your
//               business and technology teams to define AI priorities, value
//               metrics, governance and a roadmap that scales.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Use-Case Discovery</h4>
//                 <p className="mt-3 text-slate-300">
//                   Workshops to identify high-ROI AI use cases across customer
//                   experience, operations and decisioning.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">AI Roadmaps</h4>
//                 <p className="mt-3 text-slate-300">
//                   Phased roadmaps that balance quick wins with strategic
//                   platform investments.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Risk & Governance</h4>
//                 <p className="mt-3 text-slate-300">
//                   AI governance covering security, privacy, explainability and
//                   regulatory alignment.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   From POCs to Production Strategy
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   We help you move beyond isolated pilots to a cohesive AI
//                   strategy: shared components, reusable patterns and platform
//                   capabilities that reduce time-to-market for every new AI use
//                   case.
//                 </p>
//               </div>
//               <img
//                 src="/images/AI1.jpg"
//                 alt="AI strategy illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//               />
//             </div>
//           </div>
//         </section>

//         {/* SECTION 2 — ML ENGINEERING */}
//         <section
//           id="section-ml-engineering"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Machine</span> Learning
//               Engineering
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We design, build and deploy ML models that power real-time
//               decisions — from personalization and forecasting to fraud
//               detection and optimization.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Predictive Models</h4>
//                 <p className="mt-3 text-slate-300">
//                   Forecast demand, churn, risk and behavioral patterns using
//                   supervised learning.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Recommender Systems</h4>
//                 <p className="mt-3 text-slate-300">
//                   Power product recommendations, content ranking and next-best
//                   action.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Anomaly Detection</h4>
//                 <p className="mt-3 text-slate-300">
//                   Detect outliers in transactions, logs and operations at scale.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="/images/AIPAGE2.png"
//                 alt="Machine learning engineering illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//               />
//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Production-Ready ML
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   Our engineers focus on features, data quality, monitoring and
//                   feedback loops — not just model accuracy — to ensure your ML
//                   systems stay reliable in production.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 3 — GENERATIVE AI */}
//         <section
//           id="section-genai"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Generative</span> AI & LLM
//               Solutions
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We build GenAI solutions that are secure, domain-aware and
//               production-ready — using LLMs, RAG, vector search and
//               orchestration frameworks.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">
//                   RAG & Enterprise Search
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   Retrieve-augmented generation over your documents, tickets,
//                   knowledge bases and APIs.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">
//                   AI Assistants & Copilots
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   Task-specific copilots for support, sales, engineering and
//                   operations.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">
//                   Content & Workflow Automation
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   Use GenAI for summarization, drafting, classification and
//                   workflow triggers.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Safe, Controlled GenAI for Enterprises
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   We integrate guardrails, policy enforcement, red-teaming and
//                   observability so your GenAI apps remain safe, brand-aligned
//                   and measurable in production.
//                 </p>
//               </div>
//               <img
//                 src="/images/AIpage3.jpg"
//                 alt="Generative AI illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//               />
//             </div>
//           </div>
//         </section>

//         {/* SECTION 4 — VISION & NLP */}
//         <section
//           id="section-vision-nlp"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Computer</span> Vision & NLP
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               Turn unstructured content — images, video, audio, documents and
//               conversations — into searchable, actionable insight.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Document Intelligence</h4>
//                 <p className="mt-3 text-slate-300">
//                   Extract entities, values and structure from invoices, forms
//                   and PDFs.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Vision & Detection</h4>
//                 <p className="mt-3 text-slate-300">
//                   Classification, object detection, quality checks and visual
//                   analytics.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">
//                   Language Understanding
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   Sentiment analysis, topic modeling, intent detection and
//                   summarization.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="/images/aipage4.jpg"
//                 alt="Vision and NLP illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//               />
//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Operationalize Unstructured Data
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   We build pipelines that continuously ingest, process and
//                   enrich text, images and audio — feeding downstream analytics
//                   and AI applications.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 5 — MLOps */}
//         <section
//           id="section-mlops"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">MLOps</span> & Model Deployment
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We treat ML like software engineering — with automated deployment,
//               monitoring, governance and lifecycle management.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">CI/CD for ML</h4>
//                 <p className="mt-3 text-slate-300">
//                   Automate model build, test and deploy across environments.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Model Monitoring</h4>
//                 <p className="mt-3 text-slate-300">
//                   Track performance, drift, data quality and cost in production.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Retraining Pipelines</h4>
//                 <p className="mt-3 text-slate-300">
//                   Continuous retraining and promotion workflows with human
//                   review.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Keep Models Healthy in Production
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   We integrate observability, alerting and governance so your
//                   models don't silently degrade over time — reducing risk and
//                   improving trust.
//                 </p>
//               </div>
//               <img
//                 src="/images/aipage5.jpg"
//                 alt="MLOps illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//               />
//             </div>
//           </div>
//         </section>

//         {/* SECTION 6 — DATA ENGINEERING */}
//         <section
//           id="section-data-engineering"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">Data</span> Engineering for AI
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               Great AI starts with great data. We build data platforms that keep
//               your features fresh, consistent and trustworthy.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Data Pipelines</h4>
//                 <p className="mt-3 text-slate-300">
//                   Batch and streaming pipelines into lakes, warehouses and
//                   feature stores.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Feature Engineering</h4>
//                 <p className="mt-3 text-slate-300">
//                   Curated features and embeddings that power robust ML/AI
//                   systems.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">
//                   Data Quality & Lineage
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   Ensure traceability, completeness and accuracy for AI-critical
//                   datasets.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="/images/aipage6.jpg"
//                 alt="Data engineering for AI illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//               />
//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Make Data a First-Class AI Asset
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   We help you design data models, pipelines and governance that
//                   make it easy to launch new AI use cases without constantly
//                   rebuilding plumbing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CONTACT SECTION */}
//         <section className="w-full bg-[#020617] flex justify-center py-20 px-4">
//           <div className="w-full max-w-5xl rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.20)] p-6 sm:p-10 md:p-14">
//             <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
//               <div>
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text text-transparent">
//                   Talk with us
//                 </h2>
//                 <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
//                   Interested in AI & ML services? Reach out and we'll connect
//                   you with the right specialist who fits your project needs.
//                 </p>
//                 <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full opacity-70" />
//               </div>

//               <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all">
//                 <img
//                   src="/images/srinivasmoole.jpg"
//                   alt="Srinivas"
//                   className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-300/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
//                 />
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-white">
//                     Srinivas Moole
//                   </h3>
//                   <p className="text-sm text-slate-400">Head of AI Solutions</p>
//                   <p className="mt-3 sm:mt-4 text-sm">
//                     Email:{" "}
//                     <a
//                       href="mailto:ai@cjss.example"
//                       className="text-purple-300 hover:text-sky-300 hover:underline transition-colors"
//                     >
//                       ai@cjss.example
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
//           animation: heroZoomIn 10s ease-out forwards;
//         }

//         @keyframes scrollIndicator {
//           0%, 100% { transform: translateY(0); opacity: 1; }
//           50% { transform: translateY(8px); opacity: 0.5; }
//         }
//         .animate-scroll-indicator {
//           animation: scrollIndicator 1.8s ease-in-out infinite;
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
// };

// export default AIServicesPage;
// import React, { useEffect, useState } from "react";

// const AIServicesPage: React.FC = () => {
//   const [showScrollBtn, setShowScrollBtn] = useState(false);
//   const [heroOpacity, setHeroOpacity] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       const halfScreen = windowHeight * 0.5;
//       let opacity;

//       if (scrollY <= halfScreen) {
//         opacity = 1 - (scrollY / halfScreen) * 0.9;
//       } else {
//         const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
//         opacity = 0.1 - secondHalfProgress * 0.1;
//       }

//       setHeroOpacity(Math.max(0, Math.min(1, opacity)));

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
//           HERO SECTION
//       ===================================================== */}
//       <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             src="/images/aibanner.jpg"
//             className="w-full h-full object-cover animate-hero-zoom-in"
//             alt="AI Services Banner"
//           />
//           <div className="absolute inset-0 bg-black/70" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-20 flex flex-col justify-center h-full">
//           <span className="inline-block text-sm sm:text-base font-semibold tracking-[0.42em] text-purple-300 animate-aiLabel">
//             AI SERVICES & SOLUTIONS
//           </span>

//           <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-up">
//             STRENGTHEN YOUR BUSINESS WITH{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
//               AI-POWERED WORKFLOWS
//             </span>
//           </h1>

//           <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-200/90 animate-fade-up [animation-delay:0.12s]">
//             We apply AI where work actually happens—planning, execution,
//             monitoring, and optimization—enabling smarter decisions, reduced
//             manual effort, and predictable outcomes across digital operations.
//           </p>
//         </div>
//       </div>

//       <div className="h-screen" />

//       {/* =====================================================
//           CONTENT SECTIONS
//       ===================================================== */}
//       <div className="relative z-10">
//         {/* OUR APPROACH */}
//         <section
//           id="solutions"
//           className="w-full py-20 bg-[#0d1320] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl font-light animate-fade-up">
//               <span className="font-semibold">Our</span> Approach
//             </h2>

//             <p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
//               Our approach focuses on strengthening the business workflows that
//               run on enterprise technologies such as SAP Hybris, AEM, Java-based
//               systems, and modern frontend frameworks. We help you apply AI
//               where work actually happens—planning, execution, monitoring, and
//               optimization—so teams operate with greater speed, accuracy, and
//               confidence.
//             </p>

//             <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.15s]">
//               Instead of treating AI as a technical enhancement, CJSS uses it to
//               improve how business processes function end to end, enabling
//               smarter decisions, reduced manual effort, and more predictable
//               outcomes across digital operations.
//             </p>

//             <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
//               <div className="animate-fade-up">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>①</span>
//                   <span>Commerce Operations</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   AI-Enabled Commerce Operations Workflow
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Apply AI to commerce operations by understanding customer
//                   behavior, transactional patterns, and operational signals.
//                 </p>
//                 <a
//                   href="#section-commerce"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.05s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>②</span>
//                   <span>Content & Experience</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   AI-Assisted Content & Experience Workflow
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Enhance content workflows using AI to understand performance,
//                   engagement, and optimization opportunities.
//                 </p>
//                 <a
//                   href="#section-content"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>③</span>
//                   <span>Software Delivery</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   AI-Driven Software Delivery Workflow
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Improve software delivery by applying AI to how applications
//                   are built, tested, and maintained.
//                 </p>
//                 <a
//                   href="#section-software"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>④</span>
//                   <span>IT Operations</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   AI-Powered IT Operations & Support Workflow
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Apply AI to operational workflows by analyzing system
//                   behavior, events, and support data.
//                 </p>
//                 <a
//                   href="#section-itops"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
//                   <span>⑤</span>
//                   <span>Decision & Planning</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   AI-Enhanced Decision & Planning Workflow
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Strengthen decision-making workflows using AI to interpret
//                   complex data across operations.
//                 </p>
//                 <a
//                   href="#section-decision"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>

//               <div className="animate-fade-up [animation-delay:0.25s]">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
//                   <span>⑥</span>
//                   <span>Operational Efficiency</span>
//                 </div>
//                 <h3 className="text-xl font-semibold">
//                   AI-Driven Operational Efficiency & Automation
//                 </h3>
//                 <p className="mt-3 text-slate-300">
//                   Optimize everyday operational workflows by identifying
//                   repetitive activities and process bottlenecks.
//                 </p>
//                 <a
//                   href="#section-efficiency"
//                   className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 1 — COMMERCE OPERATIONS */}
//         <section
//           id="section-commerce"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">AI-Enabled</span> Commerce
//               Operations Workflow
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We help you apply AI to commerce operations workflows by
//               continuously understanding customer behavior, transactional
//               patterns, and operational signals. AI supports teams by
//               identifying what influences demand, how customers move through
//               buying journeys, and where operational inefficiencies occur.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Customer Behavior</h4>
//                 <p className="mt-3 text-slate-300">
//                   Identify what influences demand and how customers move through
//                   buying journeys with AI-driven insights.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Operational Signals</h4>
//                 <p className="mt-3 text-slate-300">
//                   Detect where operational inefficiencies occur without relying
//                   on manual analysis or static rules.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Revenue Optimization</h4>
//                 <p className="mt-3 text-slate-300">
//                   Gain clarity on what actions drive revenue and where workflows
//                   need adjustment.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Outcomes Delivered
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   CJSS helps you optimize merchandising, promotions, order
//                   handling, and customer engagement workflows by enabling
//                   AI-driven recommendations and operational guidance. Teams can
//                   make faster, data-backed decisions, respond to changing market
//                   conditions, and improve revenue outcomes while reducing the
//                   effort required to manage complex commerce operations.
//                 </p>
//               </div>
//               <img
//                 src="\images\aipage\AI1.png"
//                 alt="Commerce operations illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//               />
//             </div>
//           </div>
//         </section>

//         {/* SECTION 2 — CONTENT & EXPERIENCE */}
//         <section
//           id="section-content"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">AI-Assisted</span> Content &
//               Experience Workflow
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We help you enhance content workflows by using AI to understand
//               how content performs, how users engage with experiences, and where
//               improvements are needed. AI continuously analyzes engagement
//               patterns, content effectiveness, and journey drop-offs, enabling
//               teams to make informed decisions about messaging, formats, and
//               experience structure.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Content Performance</h4>
//                 <p className="mt-3 text-slate-300">
//                   Understand how content performs and where improvements are
//                   needed through continuous AI analysis.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Engagement Patterns</h4>
//                 <p className="mt-3 text-slate-300">
//                   Analyze user engagement patterns and journey drop-offs to
//                   optimize experience structure.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Informed Decisions</h4>
//                 <p className="mt-3 text-slate-300">
//                   Enable teams to make data-driven decisions about messaging,
//                   formats, and content strategy.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="\images\aipage\AI2.png"
//                 alt="Content and experience workflow illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//               />
//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Outcomes Delivered
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   CJSS helps you streamline content planning, creation, and
//                   optimization workflows by guiding teams toward high-impact
//                   content and experiences. This reduces rework, shortens
//                   approval cycles, and ensures content efforts are aligned with
//                   business outcomes such as engagement, conversion, and brand
//                   consistency.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 3 — SOFTWARE DELIVERY */}
//         <section
//           id="section-software"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">AI-Driven</span> Software Delivery
//               Workflow
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We help you improve software delivery workflows by applying AI to
//               how applications are built, tested, and maintained. AI supports
//               teams by identifying patterns that lead to defects, performance
//               issues, or delivery delays, enabling early intervention before
//               problems escalate.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Pattern Recognition</h4>
//                 <p className="mt-3 text-slate-300">
//                   Identify patterns that lead to defects, performance issues, or
//                   delivery delays early in the cycle.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Early Intervention</h4>
//                 <p className="mt-3 text-slate-300">
//                   Enable proactive intervention before problems escalate,
//                   improving predictability across releases.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Delivery Optimization</h4>
//                 <p className="mt-3 text-slate-300">
//                   Improve predictability across development and release cycles
//                   with AI-driven insights.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Outcomes Delivered
//                 </h4>
//                 <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
//                   <li>
//                     • CJSS helps you reduce delivery risks, improve application
//                     quality, and accelerate time-to-market by enabling proactive
//                     decision-making throughout the delivery lifecycle.
//                   </li>
//                   <li>
//                     • Teams spend less time troubleshooting and more time
//                     delivering stable, scalable solutions that support business
//                     growth.
//                   </li>
//                 </ul>
//               </div>
//               <img
//                 src="\images\aipage\AI3.png"
//                 alt="Software delivery workflow illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//               />
//             </div>
//           </div>
//         </section>

//         {/* SECTION 4 — IT OPERATIONS */}
//         <section
//           id="section-itops"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">AI-Powered</span> IT Operations &
//               Support Workflow
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We help you apply AI to operational workflows by continuously
//               analyzing system behavior, operational events, and support data.
//               AI identifies anomalies, correlates incidents, and highlights
//               potential risks before they impact business continuity. This
//               enables operations teams to focus on prevention rather than
//               reaction.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Anomaly Detection</h4>
//                 <p className="mt-3 text-slate-300">
//                   Identify anomalies and correlate incidents across system
//                   behavior and operational events.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Risk Prevention</h4>
//                 <p className="mt-3 text-slate-300">
//                   Highlight potential risks before they impact business
//                   continuity and operations.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Proactive Operations</h4>
//                 <p className="mt-3 text-slate-300">
//                   Enable operations teams to focus on prevention rather than
//                   reactive troubleshooting.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="\images\aipage\AI4.png"
//                 alt="IT operations workflow illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//               />
//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Outcomes Delivered
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   CJSS helps you improve service reliability, reduce downtime,
//                   and optimize support workflows by enabling faster issue
//                   identification and resolution. This leads to improved system
//                   availability, better user experience, and lower operational
//                   costs across enterprise platforms.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SECTION 5 — DECISION & PLANNING */}
//         <section
//           id="section-decision"
//           className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">AI-Enhanced</span> Decision &
//               Planning Workflow
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We help you strengthen decision-making workflows by using AI to
//               interpret complex data across business and technology operations.
//               AI identifies trends, forecasts outcomes, and highlights
//               opportunities or risks that may not be visible through traditional
//               reporting. This capability supports continuous, insight-driven
//               planning.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Trend Identification</h4>
//                 <p className="mt-3 text-slate-300">
//                   Identify trends and forecast outcomes that may not be visible
//                   through traditional reporting.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Opportunity Detection</h4>
//                 <p className="mt-3 text-slate-300">
//                   Highlight opportunities or risks across business and
//                   technology operations proactively.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">
//                   Insight-Driven Planning
//                 </h4>
//                 <p className="mt-3 text-slate-300">
//                   Support continuous, insight-driven planning with AI-powered
//                   data interpretation.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <div className="animate-slide-left">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Outcomes Delivered
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   CJSS helps leadership and operational teams make confident
//                   decisions by delivering timely, actionable intelligence. This
//                   improves strategic planning, investment prioritization, and
//                   operational alignment, ensuring decisions are proactive rather
//                   than reactive.
//                 </p>
//               </div>
//               <img
//                 src="\images\aipage\AI5.png"
//                 alt="Decision and planning workflow illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-right"
//               />
//             </div>
//           </div>
//         </section>

//         {/* SECTION 6 — OPERATIONAL EFFICIENCY */}
//         <section
//           id="section-efficiency"
//           className="w-full py-20 sm:py-24 bg-[#020617]"
//         >
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">AI-Driven</span> Operational
//               Efficiency & Automation
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We help you optimize everyday operational workflows by using AI to
//               identify repetitive, high-effort activities and process
//               bottlenecks. AI learns from workflow behavior to recommend
//               improvements, prioritize tasks, and adapt processes over time,
//               ensuring efficiency improves continuously.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
//               <div className="animate-fade-up [animation-delay:0.1s]">
//                 <h4 className="text-xl font-semibold">Activity Analysis</h4>
//                 <p className="mt-3 text-slate-300">
//                   Identify repetitive, high-effort activities and process
//                   bottlenecks across workflows.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.15s]">
//                 <h4 className="text-xl font-semibold">Smart Recommendations</h4>
//                 <p className="mt-3 text-slate-300">
//                   AI learns from workflow behavior to recommend improvements and
//                   prioritize tasks.
//                 </p>
//               </div>
//               <div className="animate-fade-up [animation-delay:0.2s]">
//                 <h4 className="text-xl font-semibold">Adaptive Processes</h4>
//                 <p className="mt-3 text-slate-300">
//                   Adapt processes over time ensuring efficiency improves
//                   continuously.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
//               <img
//                 src="\images\aipage\AI6.png"
//                 alt="Operational efficiency illustration"
//                 className="w-full rounded-xl shadow-xl animate-slide-left"
//               />
//               <div className="animate-slide-right">
//                 <h4 className="text-xl sm:text-2xl font-semibold">
//                   Outcomes Delivered
//                 </h4>
//                 <p className="mt-4 text-base sm:text-lg text-slate-300">
//                   CJSS helps you reduce manual effort, improve consistency, and
//                   scale operations without increasing complexity. These
//                   solutions allow teams to focus on value-driven work while AI
//                   supports accuracy, efficiency, and sustainable growth.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* HOW WE POSITION AI SECTION */}
//         <section className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]">
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
//               <span className="font-semibold">How We Position</span> AI in Our
//               Services
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
//               We don't rely on a single type of AI. CJSS uses different AI
//               capabilities, each applied where it creates the most business
//               value across workflows. These AI types work together to optimize
//               how digital platforms, teams, and operations perform, rather than
//               acting as isolated technologies.
//             </p>

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
//               {/* Generative AI */}
//               <div className="animate-fade-up [animation-delay:0.1s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-4">
//                   <span>GenAI</span>
//                 </div>
//                 <h4 className="text-xl font-semibold">Generative AI (GenAI)</h4>
//                 <p className="mt-3 text-slate-300 text-sm">
//                   <strong>How it helps:</strong> Accelerates work requiring high
//                   manual effort, creativity, or analysis. Supports teams by
//                   generating content, summarizing information, and assisting
//                   with documentation.
//                 </p>
//                 <p className="mt-3 text-slate-400 text-sm">
//                   <strong>Where we apply it:</strong> Content planning,
//                   experience optimization, code understanding, documentation,
//                   and interpreting logs and incidents.
//                 </p>
//               </div>

//               {/* Predictive AI */}
//               <div className="animate-fade-up [animation-delay:0.15s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-4">
//                   <span>ML</span>
//                 </div>
//                 <h4 className="text-xl font-semibold">
//                   Predictive AI & Machine Learning
//                 </h4>
//                 <p className="mt-3 text-slate-300 text-sm">
//                   <strong>How it helps:</strong> Moves businesses from reactive
//                   decisions to proactive planning. Analyzes data to identify
//                   patterns, forecast outcomes, and highlight risks.
//                 </p>
//                 <p className="mt-3 text-slate-400 text-sm">
//                   <strong>Where we apply it:</strong> Commerce operations,
//                   demand forecasting, performance monitoring, and operational
//                   planning workflows.
//                 </p>
//               </div>

//               {/* NLP */}
//               <div className="animate-fade-up [animation-delay:0.2s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-4">
//                   <span>NLP</span>
//                 </div>
//                 <h4 className="text-xl font-semibold">
//                   Natural Language Processing (NLP)
//                 </h4>
//                 <p className="mt-3 text-slate-300 text-sm">
//                   <strong>How it helps:</strong> Enables systems to understand
//                   and work with human language at scale, allowing natural
//                   interaction with data and systems.
//                 </p>
//                 <p className="mt-3 text-slate-400 text-sm">
//                   <strong>Where we apply it:</strong> Intelligent search,
//                   content analysis, conversational workflows, and insight
//                   extraction from unstructured data.
//                 </p>
//               </div>

//               {/* Decision Intelligence */}
//               <div className="animate-fade-up [animation-delay:0.25s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-4">
//                   <span>Decision AI</span>
//                 </div>
//                 <h4 className="text-xl font-semibold">
//                   Decision Intelligence AI
//                 </h4>
//                 <p className="mt-3 text-slate-300 text-sm">
//                   <strong>How it helps:</strong> Supports complex decisions by
//                   combining AI models, business rules, and contextual data.
//                   Guides actions, not just presents data.
//                 </p>
//                 <p className="mt-3 text-slate-400 text-sm">
//                   <strong>Where we apply it:</strong> Commerce operations,
//                   content governance, release planning, and operational
//                   prioritization workflows.
//                 </p>
//               </div>

//               {/* Intelligent Automation */}
//               <div className="animate-fade-up [animation-delay:0.3s] bg-slate-900/50 rounded-xl p-6 border border-white/10 md:col-span-2 lg:col-span-1">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-4">
//                   <span>Automation</span>
//                 </div>
//                 <h4 className="text-xl font-semibold">
//                   Intelligent Automation (AI + Workflow)
//                 </h4>
//                 <p className="mt-3 text-slate-300 text-sm">
//                   <strong>How it helps:</strong> Optimizes repetitive and
//                   rule-heavy processes by allowing AI to adapt workflows based
//                   on behavior and outcomes.
//                 </p>
//                 <p className="mt-3 text-slate-400 text-sm">
//                   <strong>Where we apply it:</strong> Order processing, content
//                   approvals, incident handling, and routine maintenance
//                   activities.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CONTACT SECTION */}
//         <section className="w-full bg-[#020617] flex justify-center py-20 px-4">
//           <div className="w-full max-w-5xl rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.20)] p-6 sm:p-10 md:p-14">
//             <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
//               <div>
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text text-transparent">
//                   Talk with us
//                 </h2>
//                 <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
//                   Interested in AI-powered workflow solutions? Reach out and
//                   we'll connect you with the right specialist who fits your
//                   project needs.
//                 </p>
//                 <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full opacity-70" />
//               </div>

//               <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all">
//                 <img
//                   src="/images/srinivasmoole.jpg"
//                   alt="Srinivas"
//                   className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-300/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
//                 />
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-white">
//                     Srinivas Moole
//                   </h3>
//                   <p className="text-sm text-slate-400">Head of AI Solutions</p>
//                   <p className="mt-3 sm:mt-4 text-sm">
//                     Email:{" "}
//                     <a
//                       href="mailto:ai@cjss.example"
//                       className="text-purple-300 hover:text-sky-300 hover:underline transition-colors"
//                     >
//                       ai@cjss.example
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
//           animation: heroZoomIn 10s ease-out forwards;
//         }

//         @keyframes scrollIndicator {
//           0%, 100% { transform: translateY(0); opacity: 1; }
//           50% { transform: translateY(8px); opacity: 0.5; }
//         }
//         .animate-scroll-indicator {
//           animation: scrollIndicator 1.8s ease-in-out infinite;
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
// };

// export default AIServicesPage;
import React, { useEffect, useState } from "react";
import {
  ShoppingCart,
  FileText,
  Code,
  Server,
  TrendingUp,
  Zap,
  ChevronUp,
} from "lucide-react";

const AIServicesPage: React.FC = () => {
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
          HERO SECTION — FIXED BEHIND CONTENT
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/aibanner.jpg"
            className="w-full h-full object-cover animate-hero-zoom-in"
            alt="AI Services Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28 flex flex-col justify-center h-full">
          <span className="inline-block text-sm sm:text-base font-semibold tracking-[0.42em] text-purple-300 animate-aiLabel">
            AI SERVICES & SOLUTIONS
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-up">
            STRENGTHEN YOUR BUSINESS WITH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
              AI-POWERED WORKFLOWS
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed animate-fade-up [animation-delay:0.12s]">
            We apply AI where work actually happens—planning, execution,
            monitoring, and optimization—enabling smarter decisions, reduced
            manual effort, and predictable outcomes across digital operations.
          </p>
        </div>
      </div>

      {/* Spacer to push content below hero */}
      <div className="h-screen" />

      {/* =====================================================
          ALL CONTENT SECTIONS — SCROLLS OVER HERO
      ===================================================== */}
      <div className="relative z-10">
        {/* =====================================================
            OUR APPROACH
        ===================================================== */}
        <section
          id="solutions"
          className="w-full py-20 bg-[#0d1320] border-t border-white/10 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl font-light animate-fade-up">
              <span className="font-semibold">Our</span> Approach
            </h2>

            <p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
              Our approach focuses on strengthening the business workflows that
              run on enterprise technologies such as SAP Hybris, AEM, Java-based
              systems, and modern frontend frameworks. We help you apply AI
              where work actually happens—planning, execution, monitoring, and
              optimization—so teams operate with greater speed, accuracy, and
              confidence.
            </p>

            <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-300 animate-fade-up [animation-delay:0.15s]">
              Instead of treating AI as a technical enhancement, CJSS uses it to
              improve how business processes function end to end, enabling
              smarter decisions, reduced manual effort, and more predictable
              outcomes across digital operations.
            </p>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <ShoppingCart className="w-3 h-3" />
                  <span>Commerce Operations</span>
                </div>
                <h3 className="text-xl font-semibold">
                  AI-Enabled Commerce Operations Workflow
                </h3>
                <p className="mt-3 text-slate-300">
                  We help you apply AI to commerce operations workflows by
                  continuously understanding customer behavior, transactional
                  patterns, and operational signals.
                </p>
                <a
                  href="#section-commerce"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.05s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <FileText className="w-3 h-3" />
                  <span>Content & Experience</span>
                </div>
                <h3 className="text-xl font-semibold">
                  AI-Assisted Content & Experience Workflow
                </h3>
                <p className="mt-3 text-slate-300">
                  We help you enhance content workflows by using AI to
                  understand how content performs, how users engage with
                  experiences, and where improvements are needed.
                </p>
                <a
                  href="#section-content"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.1s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <Code className="w-3 h-3" />
                  <span>Software Delivery</span>
                </div>
                <h3 className="text-xl font-semibold">
                  AI-Driven Software Delivery Workflow
                </h3>
                <p className="mt-3 text-slate-300">
                  We help you improve software delivery workflows by applying AI
                  to how applications are built, tested, and maintained.
                </p>
                <a
                  href="#section-software"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.15s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <Server className="w-3 h-3" />
                  <span>IT Operations</span>
                </div>
                <h3 className="text-xl font-semibold">
                  AI-Powered IT Operations & Support Workflow
                </h3>
                <p className="mt-3 text-slate-300">
                  We help you apply AI to operational workflows by continuously
                  analyzing system behavior, operational events, and support
                  data.
                </p>
                <a
                  href="#section-itops"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.2s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <TrendingUp className="w-3 h-3" />
                  <span>Decision & Planning</span>
                </div>
                <h3 className="text-xl font-semibold">
                  AI-Enhanced Decision & Planning Workflow
                </h3>
                <p className="mt-3 text-slate-300">
                  We help you strengthen decision-making workflows by using AI
                  to interpret complex data across business and technology
                  operations.
                </p>
                <a
                  href="#section-decision"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>

              <div className="animate-fade-up [animation-delay:0.25s]">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <Zap className="w-3 h-3" />
                  <span>Operational Efficiency</span>
                </div>
                <h3 className="text-xl font-semibold">
                  AI-Driven Operational Efficiency & Automation
                </h3>
                <p className="mt-3 text-slate-300">
                  We help you optimize everyday operational workflows by using
                  AI to identify repetitive, high-effort activities and process
                  bottlenecks.
                </p>
                <a
                  href="#section-efficiency"
                  className="mt-3 inline-block text-purple-300 hover:text-sky-300 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW WE POSITION AI IN OUR SERVICES
        ===================================================== */}
        <section className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">How We Position</span> AI in Our
              Services
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
              We don't rely on a single type of AI. CJSS uses different AI
              capabilities, each applied where it creates the most business
              value across workflows. These AI types work together to optimize
              how digital platforms, teams, and operations perform, rather than
              acting as isolated technologies.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="animate-fade-up [animation-delay:0.1s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>GenAI</span>
                </div>
                <h4 className="text-lg font-semibold">Generative AI (GenAI)</h4>
                <p className="mt-2 text-slate-300 text-sm">
                  <strong>How it helps:</strong> Accelerates work requiring high
                  manual effort, creativity, or analysis.
                </p>
                <p className="mt-2 text-slate-400 text-sm">
                  <strong>Where we apply it:</strong> Content planning,
                  experience optimization, code understanding, documentation.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.12s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <span>ML</span>
                </div>
                <h4 className="text-lg font-semibold">
                  Predictive AI & Machine Learning
                </h4>
                <p className="mt-2 text-slate-300 text-sm">
                  <strong>How it helps:</strong> Moves businesses from reactive
                  decisions to proactive planning.
                </p>
                <p className="mt-2 text-slate-400 text-sm">
                  <strong>Where we apply it:</strong> Commerce operations,
                  demand forecasting, performance monitoring.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.14s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>NLP</span>
                </div>
                <h4 className="text-lg font-semibold">
                  Natural Language Processing
                </h4>
                <p className="mt-2 text-slate-300 text-sm">
                  <strong>How it helps:</strong> Enables systems to understand
                  and work with human language at scale.
                </p>
                <p className="mt-2 text-slate-400 text-sm">
                  <strong>Where we apply it:</strong> Intelligent search,
                  content analysis, conversational workflows.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.16s] bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 mb-3">
                  <span>Decision AI</span>
                </div>
                <h4 className="text-lg font-semibold">Decision Intelligence</h4>
                <p className="mt-2 text-slate-300 text-sm">
                  <strong>How it helps:</strong> Supports complex decisions by
                  combining AI models, business rules, and contextual data.
                </p>
                <p className="mt-2 text-slate-400 text-sm">
                  <strong>Where we apply it:</strong> Commerce operations,
                  content governance, release planning.
                </p>
              </div>

              <div className="animate-fade-up [animation-delay:0.18s] bg-slate-900/50 rounded-xl p-6 border border-white/10 sm:col-span-2 md:col-span-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                  <span>Automation</span>
                </div>
                <h4 className="text-lg font-semibold">
                  Intelligent Automation
                </h4>
                <p className="mt-2 text-slate-300 text-sm">
                  <strong>How it helps:</strong> Optimizes repetitive and
                  rule-heavy processes by allowing AI to adapt workflows.
                </p>
                <p className="mt-2 text-slate-400 text-sm">
                  <strong>Where we apply it:</strong> Order processing, content
                  approvals, incident handling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 1 — AI-ENABLED COMMERCE OPERATIONS WORKFLOW
        ===================================================== */}
        <section
          id="section-commerce"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">AI-Enabled</span> Commerce
              Operations Workflow
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              We help you apply AI to commerce operations workflows by
              continuously understanding customer behavior, transactional
              patterns, and operational signals. AI supports teams by
              identifying what influences demand, how customers move through
              buying journeys, and where operational inefficiencies occur.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/aipage/AI1.png"
                className="w-full rounded-xl shadow-xl animate-slide-left"
                alt="Commerce operations illustration"
              />

              <div className="animate-slide-right">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  CJSS helps you optimize merchandising, promotions, order
                  handling, and customer engagement workflows by enabling
                  AI-driven recommendations and operational guidance. Teams can
                  make faster, data-backed decisions, respond to changing market
                  conditions, and improve revenue outcomes while reducing the
                  effort required to manage complex commerce operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 2 — AI-ASSISTED CONTENT & EXPERIENCE WORKFLOW
        ===================================================== */}
        <section
          id="section-content"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">AI-Assisted</span> Content &
              Experience Workflow
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              We help you enhance content workflows by using AI to understand
              how content performs, how users engage with experiences, and where
              improvements are needed. AI continuously analyzes engagement
              patterns, content effectiveness, and journey drop-offs, enabling
              teams to make informed decisions about messaging, formats, and
              experience structure.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  CJSS helps you streamline content planning, creation, and
                  optimization workflows by guiding teams toward high-impact
                  content and experiences. This reduces rework, shortens
                  approval cycles, and ensures content efforts are aligned with
                  business outcomes such as engagement, conversion, and brand
                  consistency.
                </p>
              </div>

              <img
                src="/images/aipage/AI2.png"
                className="w-full rounded-xl shadow-xl animate-slide-right"
                alt="Content and experience workflow illustration"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 3 — AI-DRIVEN SOFTWARE DELIVERY WORKFLOW
        ===================================================== */}
        <section
          id="section-software"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">AI-Driven</span> Software Delivery
              Workflow
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              We help you improve software delivery workflows by applying AI to
              how applications are built, tested, and maintained. AI supports
              teams by identifying patterns that lead to defects, performance
              issues, or delivery delays, enabling early intervention before
              problems escalate.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/aipage/AI3.png"
                className="w-full rounded-xl shadow-xl animate-slide-left"
                alt="Software delivery workflow illustration"
              />

              <div className="animate-slide-right">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <ul className="mt-4 text-base sm:text-lg text-slate-300 space-y-3">
                  <li>
                    • CJSS helps you reduce delivery risks, improve application
                    quality, and accelerate time-to-market by enabling proactive
                    decision-making throughout the delivery lifecycle.
                  </li>
                  <li>
                    • Teams spend less time troubleshooting and more time
                    delivering stable, scalable solutions that support business
                    growth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 4 — AI-POWERED IT OPERATIONS & SUPPORT WORKFLOW
        ===================================================== */}
        <section
          id="section-itops"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">AI-Powered</span> IT Operations &
              Support Workflow
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              We help you apply AI to operational workflows by continuously
              analyzing system behavior, operational events, and support data.
              AI identifies anomalies, correlates incidents, and highlights
              potential risks before they impact business continuity. This
              enables operations teams to focus on prevention rather than
              reaction.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  CJSS helps you improve service reliability, reduce downtime,
                  and optimize support workflows by enabling faster issue
                  identification and resolution. This leads to improved system
                  availability, better user experience, and lower operational
                  costs across enterprise platforms.
                </p>
              </div>

              <img
                src="/images/aipage/AI4.png"
                className="w-full rounded-xl shadow-xl animate-slide-right"
                alt="IT operations workflow illustration"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 5 — AI-ENHANCED DECISION & PLANNING WORKFLOW
        ===================================================== */}
        <section
          id="section-decision"
          className="w-full py-20 sm:py-24 bg-[#020617]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">AI-Enhanced</span> Decision &
              Planning Workflow
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              We help you strengthen decision-making workflows by using AI to
              interpret complex data across business and technology operations.
              AI identifies trends, forecasts outcomes, and highlights
              opportunities or risks that may not be visible through traditional
              reporting. This capability supports continuous, insight-driven
              planning.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <img
                src="/images/aipage/AI5.png"
                className="w-full rounded-xl shadow-xl animate-slide-left"
                alt="Decision and planning workflow illustration"
              />

              <div className="animate-slide-right">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  CJSS helps leadership and operational teams make confident
                  decisions by delivering timely, actionable intelligence. This
                  improves strategic planning, investment prioritization, and
                  operational alignment, ensuring decisions are proactive rather
                  than reactive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 6 — AI-DRIVEN OPERATIONAL EFFICIENCY & AUTOMATION
        ===================================================== */}
        <section
          id="section-efficiency"
          className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light animate-fade-up">
              <span className="font-semibold">AI-Driven</span> Operational
              Efficiency & Automation
            </h2>

            <h3 className="mt-8 sm:mt-10 text-xl sm:text-2xl font-semibold animate-fade-up [animation-delay:0.05s]">
              Capabilities
            </h3>

            <p className="mt-4 text-base sm:text-lg max-w-5xl text-slate-300 leading-relaxed animate-fade-up [animation-delay:0.08s]">
              We help you optimize everyday operational workflows by using AI to
              identify repetitive, high-effort activities and process
              bottlenecks. AI learns from workflow behavior to recommend
              improvements, prioritize tasks, and adapt processes over time,
              ensuring efficiency improves continuously.
            </p>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
              <div className="animate-slide-left">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Outcomes Delivered
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  CJSS helps you reduce manual effort, improve consistency, and
                  scale operations without increasing complexity. These
                  solutions allow teams to focus on value-driven work while AI
                  supports accuracy, efficiency, and sustainable growth.
                </p>
              </div>

              <img
                src="/images/aipage/AI6.png"
                className="w-full rounded-xl shadow-xl animate-slide-right"
                alt="Operational efficiency illustration"
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
                  Interested in AI-powered workflow solutions? Reach out and
                  we&apos;ll connect you with the right specialist who fits your
                  project needs.
                </p>

                <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full opacity-70" />
              </div>

              <div className="rounded-3xl bg-slate-950/80 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.55)] p-6 sm:p-8 flex gap-4 sm:gap-5 items-start hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all">
                <img
                  src="/images/srinivasmoole.jpg"
                  alt="Srinivas Moole"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-purple-300/40 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                />

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Srinivas Moole
                  </h3>
                  <p className="text-sm text-slate-400">Head of AI Solutions</p>

                  <p className="mt-3 sm:mt-4 text-sm">
                    Email:{" "}
                    <a
                      href="mailto:connect@cjsstech.com"
                      className="text-purple-300 hover:text-sky-300 hover:underline transition-colors"
                    >
                      connect@cjsstech.com
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

export default AIServicesPage;
