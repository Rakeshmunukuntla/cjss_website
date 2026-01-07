// "use client";

// interface EcomAgentPageProps {
//   navigateTo?: (page: string) => void;
// }

// export default function EcomAgentPage({}: EcomAgentPageProps) {
//   return (
//     <section className="min-h-screen bg-neutral-950 text-white px-6 py-28">
//       <div className="max-w-7xl mx-auto">
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

interface EcomAgentPageProps {
  navigateTo?: (page: string) => void;
}

export default function EcomAgentPage({ navigateTo }: EcomAgentPageProps) {
  return (
    <section className="min-h-screen bg-neutral-950 text-white px-40 py-10">
      <div className="max-w-7xl mx-auto">
        {/* ================= BACK BUTTON (CONNECT PAGE STYLE) ================= */}
        {navigateTo && (
          <div className="mb-16 ">
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
              "
            >
              ← Back to Products
            </button>
          </div>
        )}

        {/* ================= HERO ================= */}
        <div className="text-center mb-24">
          <span className="text-sm tracking-widest text-cyan-300 uppercase">
            NexaGen
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            AI-Powered Chatbot for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
              eCommerce
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/70 text-lg">
            An AI-powered eCommerce chatbot built for GCP, Bedrock, and Azure to
            assist customers, automate support, and enhance shopping
            experiences.
          </p>
        </div>

        {/* ================= PLATFORM SUPPORT ================= */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Google Cloud (GCP)", "AWS Bedrock", "Microsoft Azure"].map(
            (platform) => (
              <div
                key={platform}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-neutral-900/70
                  p-8
                  text-center
                "
              >
                <h3 className="text-lg font-semibold">{platform}</h3>
                <p className="mt-3 text-sm text-white/60">
                  Optimized for scalable, secure, and enterprise-grade AI
                  deployments.
                </p>
              </div>
            )
          )}
        </div>

        {/* ================= KEY CAPABILITIES ================= */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Ecom-Agent Can Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              title="Customer Assistance"
              description="Instantly answers product queries, availability, pricing, and order-related questions in real time."
            />
            <FeatureCard
              title="Automated Support"
              description="Reduces support workload by handling FAQs, order tracking, returns, and cancellations automatically."
            />
            <FeatureCard
              title="Shopping Experience Enhancement"
              description="Guides customers through discovery, recommendations, and checkout using conversational AI."
            />
          </div>
        </div>

        {/* ================= USE CASES ================= */}
        <div className="mb-28 bg-neutral-900/60 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Built for Modern eCommerce Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
            <ul className="space-y-4">
              <li>• Product discovery & recommendations</li>
              <li>• Order tracking & delivery updates</li>
              <li>• Returns, refunds & cancellation support</li>
              <li>• Personalized shopping assistance</li>
            </ul>

            <ul className="space-y-4">
              <li>• 24×7 customer support automation</li>
              <li>• Multilingual conversational support</li>
              <li>• Seamless handoff to human agents</li>
              <li>• Analytics-driven conversation insights</li>
            </ul>
          </div>
        </div>

        {/* ================= ARCHITECTURE HIGHLIGHT ================= */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Cloud-Native. Secure. Scalable.
          </h2>
          <p className="max-w-3xl mx-auto text-white/70 text-lg">
            Ecom-Agent is designed with cloud-native architectures, ensuring
            high availability, enterprise security, and seamless scalability
            across GCP, AWS Bedrock, and Azure environments.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-neutral-900/80
        p-8
        transition-all
        hover:border-purple-400/40
        hover:-translate-y-1
      "
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
