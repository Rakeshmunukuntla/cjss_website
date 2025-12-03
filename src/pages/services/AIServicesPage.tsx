import React from "react";

const AIServicesPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen text-white bg-[#020617]">
      {/* =====================================================
          HERO SECTION (same banner feel)
      ===================================================== */}
      <section className="relative w-full min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/aibanner.jpg"
            className="w-full h-full object-cover"
            alt="AI Services Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-10 md:px-20 flex flex-col justify-center min-h-[80vh]">
          <span className="text-xs tracking-widest text-blue-300">
            AI Services
          </span>

          <h1 className="mt-3 text-5xl font-semibold leading-tight animate-fade-up">
            TRANSFORM YOUR BUSINESS WITH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              AI & INTELLIGENCE
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-slate-200/90 animate-fade-up [animation-delay:0.12s]">
            We help enterprises adopt AI/ML, Generative AI, automation and
            intelligent decision systems to improve accuracy, efficiency and
            business speed.
          </p>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS WE OFFER
      ===================================================== */}
      <section className="w-full py-20 bg-[#0d1320] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-10 md:px-20">
          <h2 className="text-4xl font-light animate-fade-up">
            <span className="font-semibold">Solutions</span> we Offer
          </h2>

          <p className="mt-5 max-w-4xl text-lg text-slate-300 animate-fade-up [animation-delay:0.1s]">
            From AI strategy to Generative AI, MLOps, NLP and Vision systems —
            we help enterprises build and scale intelligent solutions tailored
            to their business.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 1 */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 mb-3">
                <span>①</span>
                <span>AI Roadmaps</span>
              </div>
              <h3 className="text-xl font-semibold">
                AI Strategy & Consulting
              </h3>
              <p className="mt-3 text-slate-300">
                Identify high-value AI use cases and build a roadmap aligned
                with your business goals.
              </p>
              <a
                href="#section-ai-strategy"
                className="mt-3 inline-block text-blue-400 hover:text-cyan-300"
              >
                Read More →
              </a>
            </div>

            {/* 2 */}
            <div className="animate-fade-up [animation-delay:0.05s]">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 mb-3">
                <span>②</span>
                <span>ML Models</span>
              </div>
              <h3 className="text-xl font-semibold">
                Machine Learning Engineering
              </h3>
              <p className="mt-3 text-slate-300">
                Forecasting, recommendation, scoring, anomaly detection and
                automation.
              </p>
              <a
                href="#section-ml-engineering"
                className="mt-3 inline-block text-blue-400 hover:text-cyan-300"
              >
                Read More →
              </a>
            </div>

            {/* 3 */}
            <div className="animate-fade-up [animation-delay:0.1s]">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 mb-3">
                <span>③</span>
                <span>GenAI & LLM</span>
              </div>
              <h3 className="text-xl font-semibold">
                Generative AI & LLM Solutions
              </h3>
              <p className="mt-3 text-slate-300">
                Private RAG, AI copilots, intelligent chatbots and content
                automation.
              </p>
              <a
                href="#section-genai"
                className="mt-3 inline-block text-blue-400 hover:text-cyan-300"
              >
                Read More →
              </a>
            </div>

            {/* 4 */}
            <div className="animate-fade-up [animation-delay:0.15s]">
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-3 py-1 text-xs text-pink-300 mb-3">
                <span>④</span>
                <span>Vision & NLP</span>
              </div>
              <h3 className="text-xl font-semibold">Computer Vision & NLP</h3>
              <p className="mt-3 text-slate-300">
                Image, document and language understanding at production scale.
              </p>
              <a
                href="#section-vision-nlp"
                className="mt-3 inline-block text-blue-400 hover:text-cyan-300"
              >
                Read More →
              </a>
            </div>

            {/* 5 */}
            <div className="animate-fade-up [animation-delay:0.2s]">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 mb-3">
                <span>⑤</span>
                <span>MLOps</span>
              </div>
              <h3 className="text-xl font-semibold">
                MLOps, Deployment & Monitoring
              </h3>
              <p className="mt-3 text-slate-300">
                CI/CD for ML, model registries, monitoring, drift and
                retraining.
              </p>
              <a
                href="#section-mlops"
                className="mt-3 inline-block text-blue-400 hover:text-cyan-300"
              >
                Read More →
              </a>
            </div>

            {/* 6 */}
            <div className="animate-fade-up [animation-delay:0.25s]">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-300 mb-3">
                <span>⑥</span>
                <span>Data for AI</span>
              </div>
              <h3 className="text-xl font-semibold">Data Engineering for AI</h3>
              <p className="mt-3 text-slate-300">
                Build analytics-ready, ML-ready data pipelines and feature
                stores.
              </p>
              <a
                href="#section-data-engineering"
                className="mt-3 inline-block text-blue-400 hover:text-cyan-300"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 1 — AI STRATEGY & CONSULTING
      ===================================================== */}
      <section
        id="section-ai-strategy"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-20">
          <h2 className="text-5xl font-light animate-fade-up">
            <span className="font-semibold">AI Strategy</span> & Consulting
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
            Start with clarity instead of experiments. We work with your
            business and technology teams to define AI priorities, value
            metrics, governance and a roadmap that scales.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-fade-up [animation-delay:0.1s]">
              <h4 className="text-xl font-semibold">Use-Case Discovery</h4>
              <p className="mt-3 text-slate-300">
                Workshops to identify high-ROI AI use cases across customer
                experience, operations and decisioning.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.15s]">
              <h4 className="text-xl font-semibold">AI Roadmaps</h4>
              <p className="mt-3 text-slate-300">
                Phased roadmaps that balance quick wins with strategic platform
                investments.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.2s]">
              <h4 className="text-xl font-semibold">Risk & Governance</h4>
              <p className="mt-3 text-slate-300">
                AI governance covering security, privacy, explainability and
                regulatory alignment.
              </p>
            </div>
          </div>

          {/* Alternating row — text left, image right */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="animate-slide-left">
              <h4 className="text-2xl font-semibold">
                From POCs to Production Strategy
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We help you move beyond isolated pilots to a cohesive AI
                strategy: shared components, reusable patterns and platform
                capabilities that reduce time-to-market for every new AI use
                case.
              </p>
            </div>

            <img
              src="\images\AI1.jpg"
              alt="AI strategy illustration"
              className="w-full rounded-xl shadow-xl animate-slide-right"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — MACHINE LEARNING ENGINEERING
      ===================================================== */}
      <section
        id="section-ml-engineering"
        className="w-full py-24 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-20">
          <h2 className="text-5xl font-light animate-fade-up">
            <span className="font-semibold">Machine</span> Learning Engineering
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
            We design, build and deploy ML models that power real-time decisions
            — from personalization and forecasting to fraud detection and
            optimization.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-fade-up [animation-delay:0.1s]">
              <h4 className="text-xl font-semibold">Predictive Models</h4>
              <p className="mt-3 text-slate-300">
                Forecast demand, churn, risk and behavioral patterns using
                supervised learning.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.15s]">
              <h4 className="text-xl font-semibold">Recommender Systems</h4>
              <p className="mt-3 text-slate-300">
                Power product recommendations, content ranking and next-best
                action.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.2s]">
              <h4 className="text-xl font-semibold">Anomaly Detection</h4>
              <p className="mt-3 text-slate-300">
                Detect outliers in transactions, logs and operations at scale.
              </p>
            </div>
          </div>

          {/* Alternating row — image left, text right */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="\images\AIPAGE2.png"
              alt="Machine learning engineering illustration"
              className="w-full rounded-xl shadow-xl animate-slide-left"
            />
            <div className="animate-slide-right">
              <h4 className="text-2xl font-semibold">Production-Ready ML</h4>
              <p className="mt-4 text-lg text-slate-300">
                Our engineers focus on features, data quality, monitoring and
                feedback loops — not just model accuracy — to ensure your ML
                systems stay reliable in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — GENERATIVE AI & LLM
      ===================================================== */}
      <section
        id="section-genai"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-20">
          <h2 className="text-5xl font-light animate-fade-up">
            <span className="font-semibold">Generative</span> AI & LLM Solutions
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
            We build GenAI solutions that are secure, domain-aware and
            production-ready — using LLMs, RAG, vector search and orchestration
            frameworks.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-fade-up [animation-delay:0.1s]">
              <h4 className="text-xl font-semibold">RAG & Enterprise Search</h4>
              <p className="mt-3 text-slate-300">
                Retrieve-augmented generation over your documents, tickets,
                knowledge bases and APIs.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.15s]">
              <h4 className="text-xl font-semibold">
                AI Assistants & Copilots
              </h4>
              <p className="mt-3 text-slate-300">
                Task-specific copilots for support, sales, engineering and
                operations.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.2s]">
              <h4 className="text-xl font-semibold">
                Content & Workflow Automation
              </h4>
              <p className="mt-3 text-slate-300">
                Use GenAI for summarization, drafting, classification and
                workflow triggers.
              </p>
            </div>
          </div>

          {/* Alternating row — text left, image right */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="animate-slide-left">
              <h4 className="text-2xl font-semibold">
                Safe, Controlled GenAI for Enterprises
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We integrate guardrails, policy enforcement, red-teaming and
                observability so your GenAI apps remain safe, brand-aligned and
                measurable in production.
              </p>
            </div>

            <img
              src="\images\AIpage3.jpg"
              alt="Generative AI illustration"
              className="w-full rounded-xl shadow-xl animate-slide-right"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — COMPUTER VISION & NLP
      ===================================================== */}
      <section id="section-vision-nlp" className="w-full py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-10 md:px-20">
          <h2 className="text-5xl font-light animate-fade-up">
            <span className="font-semibold">Computer</span> Vision & NLP
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
            Turn unstructured content — images, video, audio, documents and
            conversations — into searchable, actionable insight.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-fade-up [animation-delay:0.1s]">
              <h4 className="text-xl font-semibold">Document Intelligence</h4>
              <p className="mt-3 text-slate-300">
                Extract entities, values and structure from invoices, forms and
                PDFs.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.15s]">
              <h4 className="text-xl font-semibold">Vision & Detection</h4>
              <p className="mt-3 text-slate-300">
                Classification, object detection, quality checks and visual
                analytics.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.2s]">
              <h4 className="text-xl font-semibold">Language Understanding</h4>
              <p className="mt-3 text-slate-300">
                Sentiment analysis, topic modeling, intent detection and
                summarization.
              </p>
            </div>
          </div>

          {/* Alternating row — image left, text right */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="\images\aipage4.jpg"
              alt="Vision and NLP illustration"
              className="w-full rounded-xl shadow-xl animate-slide-left"
            />
            <div className="animate-slide-right">
              <h4 className="text-2xl font-semibold">
                Operationalize Unstructured Data
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We build pipelines that continuously ingest, process and enrich
                text, images and audio — feeding downstream analytics and AI
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — MLOps & MODEL DEPLOYMENT
      ===================================================== */}
      <section
        id="section-mlops"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-20">
          <h2 className="text-5xl font-light animate-fade-up">
            <span className="font-semibold">MLOps</span> & Model Deployment
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
            We treat ML like software engineering — with automated deployment,
            monitoring, governance and lifecycle management.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-fade-up [animation-delay:0.1s]">
              <h4 className="text-xl font-semibold">CI/CD for ML</h4>
              <p className="mt-3 text-slate-300">
                Automate model build, test and deploy across environments.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.15s]">
              <h4 className="text-xl font-semibold">Model Monitoring</h4>
              <p className="mt-3 text-slate-300">
                Track performance, drift, data quality and cost in production.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.2s]">
              <h4 className="text-xl font-semibold">Retraining Pipelines</h4>
              <p className="mt-3 text-slate-300">
                Continuous retraining and promotion workflows with human review.
              </p>
            </div>
          </div>

          {/* Alternating row — text left, image right */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="animate-slide-left">
              <h4 className="text-2xl font-semibold">
                Keep Models Healthy in Production
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We integrate observability, alerting and governance so your
                models don’t silently degrade over time — reducing risk and
                improving trust.
              </p>
            </div>

            <img
              src="\images\aipage5.jpg"
              alt="MLOps illustration"
              className="w-full rounded-xl shadow-xl animate-slide-right"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — DATA ENGINEERING FOR AI
      ===================================================== */}
      <section
        id="section-data-engineering"
        className="w-full py-24 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-20">
          <h2 className="text-5xl font-light animate-fade-up">
            <span className="font-semibold">Data</span> Engineering for AI
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-5xl animate-fade-up [animation-delay:0.08s]">
            Great AI starts with great data. We build data platforms that keep
            your features fresh, consistent and trustworthy.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-fade-up [animation-delay:0.1s]">
              <h4 className="text-xl font-semibold">Data Pipelines</h4>
              <p className="mt-3 text-slate-300">
                Batch and streaming pipelines into lakes, warehouses and feature
                stores.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.15s]">
              <h4 className="text-xl font-semibold">Feature Engineering</h4>
              <p className="mt-3 text-slate-300">
                Curated features and embeddings that power robust ML/AI systems.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:0.2s]">
              <h4 className="text-xl font-semibold">Data Quality & Lineage</h4>
              <p className="mt-3 text-slate-300">
                Ensure traceability, completeness and accuracy for AI-critical
                datasets.
              </p>
            </div>
          </div>

          {/* Alternating row — image left, text right */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="\images\aipage6.jpg"
              alt="Data engineering for AI illustration"
              className="w-full rounded-xl shadow-xl animate-slide-left"
            />
            <div className="animate-slide-right">
              <h4 className="text-2xl font-semibold">
                Make Data a First-Class AI Asset
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We help you design data models, pipelines and governance that
                make it easy to launch new AI use cases without constantly
                rebuilding plumbing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TALK WITH US — NEHA
      ===================================================== */}
      <section className="w-full flex justify-center mt-20 mb-20">
        <div
          className="
          w-[80%]
          rounded-3xl
          bg-slate-900/70
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_60px_rgba(34,211,238,0.20)]
          p-10 md:p-14
        "
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT BLOCK */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
                Talk with us
              </h2>

              <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
                Interested in quality engineering services? Reach out and we'll
                connect you with the right specialist who fits your project
                needs.
              </p>

              <div className="mt-6 h-[3px] w-28 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70" />
            </div>

            {/* RIGHT CONTACT CARD */}
            <div
              className="
              rounded-3xl
              bg-slate-950/80
              border border-white/10
              shadow-[0_0_40px_rgba(0,0,0,0.55)]
              p-8
              flex gap-5
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
                h-20 w-20
                rounded-full
                object-cover
                border border-purple-500/40
                shadow-[0_0_20px_rgba(168,85,247,0.35)]
              "
              />

              {/* DETAILS */}
              <div>
                <h3 className="text-xl font-semibold text-white">Priya</h3>
                <p className="text-sm text-slate-400">Head of QA Solutions</p>

                <p className="mt-4 text-sm">
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

      {/* =====================================================
          ANIMATION STYLES
      ===================================================== */}
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
      `}</style>
    </main>
  );
};

export default AIServicesPage;
