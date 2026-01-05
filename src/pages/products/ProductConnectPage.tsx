// "use client";
// import AutoScrollCarousel from "./AutoScrollCarousel";

// interface ProductConnectPageProps {
//   navigateTo: (page: string) => void;
// }

// export const ProductConnectPage = ({ navigateTo }: ProductConnectPageProps) => {
//   const eventBtn =
//     "rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

//   return (
//     <section className="bg-neutral-950 text-white min-h-screen pt-20 md:pt-0">
//       {/* ================= BACK BUTTON ================= */}
//       <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-6">
//         <button onClick={() => navigateTo("products")} className={eventBtn}>
//           ← Back to Products
//         </button>
//       </div>

//       {/* ================= HERO ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
//         <div>
//           <span className="text-sm uppercase tracking-widest text-purple-300">
//             Employee Management Platform
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
//             Manage Your Workforce Seamlessly with{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
//               Connect
//             </span>
//           </h1>

//           <p className="text-white/70 text-lg mb-8">
//             Connect helps organizations manage attendance, leaves, employee
//             activity, and workforce data from a single, secure dashboard — built
//             for scale, accuracy, and transparency.
//           </p>

//           <div className="flex gap-4">
//             <button className={eventBtn}>Schedule Demo →</button>
//             <button className={eventBtn}>Check Plans</button>
//           </div>

//           <p className="mt-4 text-sm text-white/50">
//             ✓ No manual tracking ✓ Real-time insights ✓ Secure access
//           </p>
//         </div>

//         {/* ================= DASHBOARD CAROUSEL ================= */}
//         <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 h-[360px]">
//           <AutoScrollCarousel />
//         </div>
//       </div>

//       {/* ================= WHO IT’S FOR ================= */}
//       <div className="bg-neutral-900/60 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Built for Every Organization
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "HR Teams",
//                 desc: "Automate attendance & leave workflows",
//               },
//               { title: "Managers", desc: "Track team activity & productivity" },
//               {
//                 title: "Enterprises",
//                 desc: "Centralized workforce data at scale",
//               },
//               {
//                 title: "Startups",
//                 desc: "Lightweight yet powerful HR operations",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-xl bg-neutral-950/80 border border-white/10 p-6 text-center"
//               >
//                 <h4 className="font-semibold mb-2">{item.title}</h4>
//                 <p className="text-sm text-white/60">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= FEATURES ================= */}
//       <div className="py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-12">
//             A Complete Employee Management Solution
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               "Attendance Tracking",
//               "Leave Management",
//               "Employee Activity Logs",
//               "Role-Based Access",
//               "Shift & Work Hours",
//               "Reports & Analytics",
//               "Policy Configuration",
//               "Secure Cloud Storage",
//             ].map((feature) => (
//               <div
//                 key={feature}
//                 className="rounded-xl bg-neutral-900/70 border border-white/10 p-5 hover:border-purple-400/50 transition"
//               >
//                 <p className="font-medium">{feature}</p>
//                 <p className="text-sm text-white/60 mt-2">
//                   Streamlined and automated to reduce manual effort.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= PRICING ================= */}
//       <div className="bg-neutral-900/60 py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Simple, Transparent Pricing
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               { name: "Free", price: "₹0", users: "Up to 5 users" },
//               { name: "Starter", price: "₹1999", users: "Up to 25 users" },
//               { name: "Growth", price: "₹4999", users: "Up to 100 users" },
//               { name: "Enterprise", price: "Custom", users: "Unlimited users" },
//             ].map((plan) => (
//               <div
//                 key={plan.name}
//                 className="rounded-2xl bg-neutral-950 border border-white/10 p-6 text-center"
//               >
//                 <h4 className="font-semibold mb-2">{plan.name}</h4>
//                 <p className="text-3xl font-bold mb-2">{plan.price}</p>
//                 <p className="text-sm text-white/60 mb-6">{plan.users}</p>
//                 <button className={`${eventBtn} w-full`}>Get Started</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= FINAL CTA ================= */}
//       <div className="bg-neutral-900/60 py-20">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
//           <div>
//             <h2 className="text-3xl font-bold mb-3">Ready to get started?</h2>
//             <p className="text-white/70">
//               Transform how your organization manages employees with Connect.
//             </p>
//           </div>

//           <div className="flex gap-4">
//             <button className={eventBtn}>Schedule a Demo →</button>
//             <button className={eventBtn}>Know More</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductConnectPage;
"use client";

import AutoScrollCarousel from "./AutoScrollCarousel";

interface ProductConnectPageProps {
  navigateTo: (page: string) => void;
}

export const ProductConnectPage = ({ navigateTo }: ProductConnectPageProps) => {
  return (
    <section className="bg-[#0a0a0b] text-white min-h-screen">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
      </div>

      {/* ================= BACK BUTTON ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-8">
        <button
          onClick={() => navigateTo("products")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/80 bg-white/5 border border-white/10 backdrop-blur transition-all hover:bg-white/10 hover:border-white/20"
        >
          ← Back to Products
        </button>
      </div>

      {/* ================= HERO ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            Employee Management Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8 leading-[1.1] tracking-tight">
            Manage Your Workforce Seamlessly with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Connect
            </span>
          </h1>

          <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg">
            Connect helps organizations manage attendance, leaves, employee
            activity, and workforce data from a single, secure dashboard — built
            for scale, accuracy, and transparency.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
            {["No manual tracking", "Real-time insights", "Secure access"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* ================= DASHBOARD PREVIEW ================= */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm h-[420px] shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-black/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
            </div>
            <AutoScrollCarousel />
          </div>
        </div>
      </div>

      {/* ================= WHO IT'S FOR ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-widest text-white/30 mb-4">
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built for Every{" "}
            <span className="text-purple-400">Organization</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              {
                title: "HR Teams",
                desc: "Automate attendance & leave workflows",
                icon: "👥",
              },
              {
                title: "Managers",
                desc: "Track team activity & productivity",
                icon: "📊",
              },
              {
                title: "Enterprises",
                desc: "Centralized workforce data at scale",
                icon: "🏢",
              },
              {
                title: "Startups",
                desc: "Lightweight yet powerful HR operations",
                icon: "🚀",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white/[0.02] border border-white/5 p-8 text-center transition-all duration-300 hover:bg-white/[0.04] hover:border-purple-500/30 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-widest text-white/30 mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            A Complete Employee{" "}
            <span className="text-cyan-400">Management Solution</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Row 1 - 3 cards */}
            <div className="group rounded-2xl bg-[#0d0d0f] border border-white/5 p-8 transition-all duration-300 hover:border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">
                Dashboard
              </h4>
              <p className="text-white/50 leading-relaxed">
                Get a real-time overview of attendance, workforce activity, and
                key HR metrics through a centralized and intuitive dashboard.
              </p>
            </div>

            <div className="group rounded-2xl bg-[#0d0d0f] border border-white/5 p-8 transition-all duration-300 hover:border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <span className="text-3xl">📁</span>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">
                Employee Directory
              </h4>
              <p className="text-white/50 leading-relaxed">
                Maintain a structured and searchable employee database with
                roles, departments, contact details, and organizational
                hierarchy.
              </p>
            </div>

            <div className="group rounded-2xl bg-[#0d0d0f] border border-white/5 p-8 transition-all duration-300 hover:border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <span className="text-3xl">⏱️</span>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">
                Timesheet
              </h4>
              <p className="text-white/50 leading-relaxed">
                Track employee work hours, shifts, and productivity accurately
                with automated timesheets and approval workflows.
              </p>
            </div>
          </div>

          {/* Row 2 - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-4xl mx-auto">
            <div className="group rounded-2xl bg-[#0d0d0f] border border-white/5 p-8 transition-all duration-300 hover:border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <span className="text-3xl">📅</span>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">
                Leave & Attendance
              </h4>
              <p className="text-white/50 leading-relaxed">
                Simplify leave requests, approvals, attendance tracking, and
                policy enforcement with configurable rules and calendars.
              </p>
            </div>

            <div className="group rounded-2xl bg-[#0d0d0f] border border-white/5 p-8 transition-all duration-300 hover:border-white/10">
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <span className="text-3xl">💼</span>
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">
                Asset Management
              </h4>
              <p className="text-white/50 leading-relaxed">
                Assign, track, and manage company assets such as laptops, ID
                cards, and tools with full lifecycle visibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRICING ================= */}

      {/* ================= FINAL CTA ================= */}
      <div className="relative z-10 py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Ready to get started?
              </h2>
              <p className="text-white/50 text-lg max-w-2xl">
                Transform how your organization manages employees with Connect.
                Start your free trial today and experience seamless workforce
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductConnectPage;
