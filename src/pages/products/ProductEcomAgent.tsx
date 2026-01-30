// "use client";

// interface EcomAgentPageProps {
//   navigateTo?: (page: string) => void;
// }

// export default function EcomAgentPage({ navigateTo }: EcomAgentPageProps) {
//   return (
//     <section className="min-h-screen bg-neutral-950 text-white px-40 py-10">
//       <div className="max-w-7xl mx-auto">
//         {/* ================= BACK BUTTON (CONNECT PAGE STYLE) ================= */}
//         {navigateTo && (
//           <div className="mb-16 ">
//             <button
//               onClick={() => navigateTo("products")}
//               className="
//                 inline-flex items-center gap-2
//                 px-5 py-2.5
//                 rounded-full
//                 text-sm font-medium
//                 text-white/80
//                 bg-white/5
//                 border border-white/10
//                 backdrop-blur
//                 transition-all
//                 hover:bg-white/10
//                 hover:border-white/20
//               "
//             >
//               ← Back to Products
//             </button>
//           </div>
//         )}

//         {/* ================= HERO ================= */}
//         <div className="text-center mb-24">
//           <span className="text-sm tracking-widest text-cyan-300 uppercase">
//             NexaGen
//           </span>

//           <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
//             AI-Powered Chatbot for{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
//               eCommerce
//             </span>
//           </h1>

//           <p className="mt-6 max-w-3xl mx-auto text-white/70 text-lg">
//             An AI-powered eCommerce chatbot built for GCP, Bedrock, and Azure to
//             assist customers, automate support, and enhance shopping
//             experiences.
//           </p>
//         </div>

//         {/* ================= PLATFORM SUPPORT ================= */}
//         <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {["Google Cloud (GCP)", "AWS Bedrock", "Microsoft Azure"].map(
//             (platform) => (
//               <div
//                 key={platform}
//                 className="
//                   rounded-2xl
//                   border border-white/10
//                   bg-neutral-900/70
//                   p-8
//                   text-center
//                 "
//               >
//                 <h3 className="text-lg font-semibold">{platform}</h3>
//                 <p className="mt-3 text-sm text-white/60">
//                   Optimized for scalable, secure, and enterprise-grade AI
//                   deployments.
//                 </p>
//               </div>
//             )
//           )}
//         </div>

//         {/* ================= KEY CAPABILITIES ================= */}
//         <div className="mb-28">
//           <h2 className="text-3xl font-bold mb-12 text-center">
//             What Ecom-Agent Can Do
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <FeatureCard
//               title="Customer Assistance"
//               description="Instantly answers product queries, availability, pricing, and order-related questions in real time."
//             />
//             <FeatureCard
//               title="Automated Support"
//               description="Reduces support workload by handling FAQs, order tracking, returns, and cancellations automatically."
//             />
//             <FeatureCard
//               title="Shopping Experience Enhancement"
//               description="Guides customers through discovery, recommendations, and checkout using conversational AI."
//             />
//           </div>
//         </div>

//         {/* ================= USE CASES ================= */}
//         <div className="mb-28 bg-neutral-900/60 border border-white/10 rounded-3xl p-12">
//           <h2 className="text-3xl font-bold mb-10 text-center">
//             Built for Modern eCommerce Use Cases
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
//             <ul className="space-y-4">
//               <li>• Product discovery & recommendations</li>
//               <li>• Order tracking & delivery updates</li>
//               <li>• Returns, refunds & cancellation support</li>
//               <li>• Personalized shopping assistance</li>
//             </ul>

//             <ul className="space-y-4">
//               <li>• 24×7 customer support automation</li>
//               <li>• Multilingual conversational support</li>
//               <li>• Seamless handoff to human agents</li>
//               <li>• Analytics-driven conversation insights</li>
//             </ul>
//           </div>
//         </div>

//         {/* ================= ARCHITECTURE HIGHLIGHT ================= */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             Cloud-Native. Secure. Scalable.
//           </h2>
//           <p className="max-w-3xl mx-auto text-white/70 text-lg">
//             Ecom-Agent is designed with cloud-native architectures, ensuring
//             high availability, enterprise security, and seamless scalability
//             across GCP, AWS Bedrock, and Azure environments.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= FEATURE CARD ================= */

// function FeatureCard({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <div
//       className="
//         rounded-2xl
//         border border-white/10
//         bg-neutral-900/80
//         p-8
//         transition-all
//         hover:border-purple-400/40
//         hover:-translate-y-1
//       "
//     >
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <p className="text-white/70 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import {
  Sparkles,
  Wrench,
  Search,
  FileText,
  Layers,
  Cloud,
  Zap,
  Shield,
  Bot,
  BrainCircuit,
  Database,
  RefreshCw,
  Globe,
  CheckCircle2,
  Server,
  Code2,
  Workflow,
} from "lucide-react";

interface NexaGenPageProps {
  navigateTo?: (page: string) => void;
}

const features = [
  {
    id: 1,
    icon: Bot,
    title: "Serverless MCP + RAG AI Agents",
    tagline: "Composable, Tool-Driven Intelligence",
    description:
      "Run scalable chat agents for customer service, internal teams, and marketplaces using MCP orchestration with Retrieval-Augmented Generation and built-in tool execution.",
  },
  {
    id: 2,
    icon: Wrench,
    title: "Tooling for Commerce & Compliance",
    tagline: "AI That Can Act, Not Just Talk",
    description:
      "Leverage native MCP tools for web scraping, site inspection, compliance checks, catalog validation, and workflow automation—securely and at scale.",
  },
  {
    id: 3,
    icon: Search,
    title: "Product Intelligence & Semantic Search",
    tagline: "Understand Products Like Humans Do",
    description:
      "Enable semantic product catalog search, contextual recommendations, and attribute-aware discovery powered by embeddings and RAG pipelines.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Content & SEO Enhancement",
    tagline: "From Product Data to High-Impact Content",
    description:
      "Auto-enhance listings using product images and short descriptions—generate compliant copy, optimize SEO, and improve marketplace visibility.",
  },
  {
    id: 5,
    icon: Layers,
    title: "Adapter-Based, Zero Lock-In Architecture",
    tagline: "Swap Models, Stores, and Pipelines Instantly",
    description:
      "Switch between remote or native LLMs, vector stores, embedders, chunkers, and metadata stores without application code changes.",
  },
  {
    id: 6,
    icon: Cloud,
    title: "Multi-Cloud & Marketplace Ready",
    tagline: "Built for GCP, Azure, AWS & Beyond",
    description:
      "Deploy NexaGen across clouds and marketplaces with consistent behavior, governance, and performance—no vendor lock-in.",
  },
];

const capabilities = [
  { icon: Zap, text: "Real-time AI responses" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Database, text: "Vector store integration" },
  { icon: RefreshCw, text: "Auto-scaling pipelines" },
  { icon: Globe, text: "Multi-region deployment" },
  { icon: BrainCircuit, text: "Contextual understanding" },
];

const cloudPlatforms = [
  {
    icon: Cloud,
    name: "Google Cloud",
    abbr: "GCP",
    description: "Vertex AI, Cloud Run, BigQuery integration",
  },
  {
    icon: Server,
    name: "Amazon Web Services",
    abbr: "AWS",
    description: "Bedrock, Lambda, SageMaker support",
  },
  {
    icon: Database,
    name: "Microsoft Azure",
    abbr: "Azure",
    description: "OpenAI Service, Functions, Cognitive Search",
  },
];

const architectureLayers = [
  {
    label: "Application Layer",
    description: "APIs, SDKs, Chat Interfaces",
  },
  {
    label: "MCP Orchestration",
    description: "Tool execution, Context management",
  },
  {
    label: "RAG Pipeline",
    description: "Retrieval, Augmentation, Generation",
  },
  {
    label: "Adapter Layer",
    description: "LLMs, Vector stores, Embedders",
  },
  {
    label: "Cloud Infrastructure",
    description: "GCP, AWS, Azure",
  },
];

const integrations = [
  { name: "OpenAI", icon: BrainCircuit },
  { name: "Claude", icon: Bot },
  { name: "Pinecone", icon: Database },
  { name: "Weaviate", icon: Server },
  { name: "LangChain", icon: Workflow },
  { name: "Shopify", icon: Globe },
  { name: "Magento", icon: Code2 },
  { name: "Custom APIs", icon: Layers },
];

export default function NexaGenPage({ navigateTo }: NexaGenPageProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <section
      className="min-h-screen bg-black text-white overflow-hidden"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Cursor glow */}
      <div
        className="fixed inset-0 z-0 hidden pointer-events-none md:block"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(56,189,248,0.12), transparent 45%)`,
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-6xl mx-auto">
          {/* ================= BACK BUTTON ================= */}
          {navigateTo && (
            <div className="mb-12">
              <button
                onClick={() => navigateTo("products")}
                className="
                  inline-flex items-center gap-2
                  px-5 py-2.5
                  rounded-full
                  text-sm font-medium
                  text-white/80
                  bg-white/5
                  border border-white/10
                  backdrop-blur
                  transition-all
                  hover:bg-white/10
                  hover:border-white/20
                  hover:text-white
                "
              >
                ← Back to Products
              </button>
            </div>
          )}

          {/* ================= HERO SECTION ================= */}
          <div className="text-center mb-20 relative">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
              AI-Powered Commerce Intelligence
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              NexaGen
            </h1>

            <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text font-medium mb-6">
              Intelligent Commerce Platform
            </p>

            <p className="max-w-3xl mx-auto text-sm md:text-lg text-white/60 leading-relaxed">
              Serverless AI agents powered by MCP orchestration and
              Retrieval-Augmented Generation. Built for enterprise commerce,
              compliance, and multi-cloud deployment.
            </p>
          </div>

          {/* ================= KEY FEATURES ================= */}
          <div className="mb-24">
            <div className="text-center mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
                Core Capabilities
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                What Makes{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  NexaGen
                </span>{" "}
                Different
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-sm md:text-lg text-white/60">
                Purpose-built for modern commerce with enterprise-grade AI
                capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const isPurple = idx % 2 === 0;

                return (
                  <div
                    key={feature.id}
                    className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
                  >
                    {/* Icon */}
                    <div className="mb-5">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border rounded-full transition-transform group-hover:scale-105 ${
                          isPurple
                            ? "bg-purple-500/15 border-purple-300/60"
                            : "bg-sky-500/15 border-sky-300/60"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 md:w-7 md:h-7 ${
                            isPurple ? "text-purple-300" : "text-sky-300"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Tagline */}
                    <p
                      className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 ${
                        isPurple ? "text-purple-300/80" : "text-sky-300/80"
                      }`}
                    >
                      {feature.tagline}
                    </p>

                    {/* Title */}
                    <h3 className="mb-3 text-lg md:text-xl font-semibold text-white">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base leading-relaxed text-white/60">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= CAPABILITIES RIBBON ================= */}
          <div className="mb-24 py-10 px-6 rounded-3xl bg-[#0a0a0a]/80 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-white/80">
                Built-in Capabilities
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {capabilities.map((cap, idx) => {
                const CapIcon = cap.icon;
                const isPurple = idx % 2 === 0;

                return (
                  <div
                    key={cap.text}
                    className="flex flex-col items-center text-center group"
                  >
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center mb-3 transition-transform group-hover:scale-105 ${
                        isPurple
                          ? "bg-purple-500/15 border-purple-300/60"
                          : "bg-sky-500/15 border-sky-300/60"
                      }`}
                    >
                      <CapIcon
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          isPurple ? "text-purple-300" : "text-sky-300"
                        }`}
                      />
                    </div>
                    <span className="text-sm text-white/60">{cap.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= CLOUD PLATFORMS ================= */}
          <div className="mb-24">
            <div className="text-center mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
                Multi-Cloud
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Deploy{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Anywhere
                </span>
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-sm md:text-lg text-white/60">
                Native support for major cloud platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cloudPlatforms.map((platform, idx) => {
                const PlatformIcon = platform.icon;
                const isPurple = idx % 2 === 0;

                return (
                  <div
                    key={platform.abbr}
                    className="group relative flex flex-col items-center p-6 md:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60 text-center"
                  >
                    {/* Icon */}
                    <div className="mb-5">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border rounded-full transition-transform group-hover:scale-105 ${
                          isPurple
                            ? "bg-purple-500/15 border-purple-300/60"
                            : "bg-sky-500/15 border-sky-300/60"
                        }`}
                      >
                        <PlatformIcon
                          className={`w-7 h-7 md:w-8 md:h-8 ${
                            isPurple ? "text-purple-300" : "text-sky-300"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg md:text-xl font-semibold text-white">
                      {platform.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/60">
                      {platform.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= ARCHITECTURE SECTION ================= */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
                  Architecture
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Built for{" "}
                  <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                    Scale & Flexibility
                  </span>
                </h2>

                <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
                  NexaGen's adapter-based architecture lets you swap LLMs,
                  vector stores, embedders, and pipelines without changing
                  application code. Deploy once, evolve forever.
                </p>

                <div className="space-y-4">
                  {[
                    "Plug-and-play LLM adapters (OpenAI, Claude, Gemini, Bedrock)",
                    "Flexible vector store integration (Pinecone, Weaviate, Chroma)",
                    "Hot-swappable embedding models",
                    "Configuration-driven pipeline orchestration",
                  ].map((item, idx) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          idx % 2 === 0
                            ? "bg-purple-500/15 border-purple-300/60"
                            : "bg-sky-500/15 border-sky-300/60"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            idx % 2 === 0 ? "text-purple-300" : "text-sky-300"
                          }`}
                        />
                      </div>
                      <span className="text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-6 md:p-8">
                  {/* Architecture Diagram */}
                  <div className="space-y-4">
                    {architectureLayers.map((layer, idx) => {
                      const isPurple = idx % 2 === 0;
                      return (
                        <div
                          key={layer.label}
                          className="flex items-center gap-4"
                        >
                          <div
                            className={`w-3 h-3 rounded-full flex-shrink-0 ${
                              isPurple ? "bg-purple-400" : "bg-sky-400"
                            }`}
                          />
                          <div className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                              <span className="text-sm font-medium text-white/80">
                                {layer.label}
                              </span>
                              <span className="text-xs text-white/40">
                                {layer.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute left-[30px] md:left-[38px] top-[52px] bottom-[52px] w-px bg-gradient-to-b from-purple-400 via-sky-400 to-purple-400 opacity-40" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= INTEGRATION ECOSYSTEM ================= */}
          <div className="mb-24">
            <div className="text-center mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
                Ecosystem
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Seamless{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Integrations
                </span>
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-sm md:text-lg text-white/60">
                Connect with your existing tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrations.map((integration, idx) => {
                const IntIcon = integration.icon;
                const isPurple = idx % 2 === 0;

                return (
                  <div
                    key={integration.name}
                    className="group flex items-center gap-3 p-4 rounded-2xl bg-[#0a0a0a]/80 border border-white/10 transition-all duration-300 hover:border-purple-300/40"
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isPurple
                          ? "bg-purple-500/15 border-purple-300/60"
                          : "bg-sky-500/15 border-sky-300/60"
                      }`}
                    >
                      <IntIcon
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          isPurple ? "text-purple-300" : "text-sky-300"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-medium text-white/70">
                      {integration.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= FOOTER SECTION ================= */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="text-center py-16 px-8">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border rounded-full bg-purple-500/15 border-purple-300/60 mb-4">
                  <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-purple-300" />
                </div>
              </div>

              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
                Enterprise-Ready AI Platform
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Transform Your{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                  Commerce Experience
                </span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                NexaGen brings together AI agents, semantic search, and
                multi-cloud deployment into a single, powerful platform designed
                for enterprise commerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
