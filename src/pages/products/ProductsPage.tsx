"use client";

interface ProductsPageProps {
  navigateTo: (page: string) => void;
}

const PRODUCT = {
  id: "connect",
  title: "Connect",
  description:
    "A unified employee management platform to track attendance, manage leaves, monitor employee activities, and centralize organizational data — built to scale effortlessly for modern enterprises.",
};

export const ProductsPage = ({ navigateTo }: ProductsPageProps) => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white px-6 py-28">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Unlock Your Business Potential with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
              Connect
            </span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            A smart employee management solution designed to simplify workforce
            operations, ensure transparency, and drive productivity across your
            organization.
          </p>
        </div>

        {/* ================= PRODUCT CARD ================= */}
        <div className="flex justify-center">
          <div
            className="
              group
              relative
              w-full max-w-md
              rounded-2xl
              bg-neutral-900/80
              border border-white/10
              overflow-hidden
              transition-all duration-300
              hover:border-purple-400/50
              hover:-translate-y-2
            "
          >
            {/* IMAGE / LOGO PLACEHOLDER */}
            <div className="h-52 flex items-center justify-center bg-neutral-900">
              <div
                className="
                  w-40 h-40 rounded-full
                  bg-neutral-800
                  flex items-center justify-center
                  text-lg font-semibold tracking-wide
                  text-white/80
                "
              >
                CONNECT
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-8 text-center">
              <h3
                className="
                  text-2xl font-semibold mb-4
                  transition-colors duration-300
                  group-hover:text-purple-300
                "
              >
                {PRODUCT.title}
              </h3>

              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                {PRODUCT.description}
              </p>

              {/* EVENT-STYLE BUTTON */}
              <button
                onClick={() => navigateTo("product-connect")}
                className="
                  rounded-full
                  border border-white/40
                  px-5 sm:px-6
                  py-2 sm:py-2.5
                  text-xs sm:text-sm
                  font-medium
                  text-white
                  backdrop-blur
                  transition-all
                  hover:bg-white/10
                  hover:border-white/70
                "
              >
                Know More →
              </button>
            </div>
          </div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="mt-28 bg-neutral-900/60 border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-white/70 max-w-xl">
              Transform how your organization manages attendance, leaves, and
              employee activity with Connect.
            </p>
          </div>

          <div className="flex gap-4">
            {/* PRIMARY CTA – EVENT STYLE */}
            <button
              className="
                rounded-full
                border border-white/40
                px-5 sm:px-6
                py-2 sm:py-2.5
                text-xs sm:text-sm
                font-medium
                text-white
                backdrop-blur
                transition-all
                hover:bg-white/10
                hover:border-white/70
              "
            >
              Schedule a Demo →
            </button>

            {/* SECONDARY CTA – SAME STYLE */}
            <button
              className="
                rounded-full
                border border-white/40
                px-5 sm:px-6
                py-2 sm:py-2.5
                text-xs sm:text-sm
                font-medium
                text-white
                backdrop-blur
                transition-all
                hover:bg-white/10
                hover:border-white/70
              "
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
// "use client";

// import AutoScrollCarousel from "./AutoScrollCarousel";

// const primaryBtn =
//   "rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

// export default function ConnectProductPage() {
//   return (
//     <section className="bg-neutral-950 text-white min-h-screen">
//       {/* ================= HERO ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
//         <div>
//           <span className="text-xs uppercase tracking-widest text-purple-300">
//             Employee Management Platform
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
//             Unlock Your Business Potential with{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
//               Connect
//             </span>
//           </h1>

//           <p className="text-white/70 text-lg mb-8">
//             Connect is a unified employee management platform that centralizes
//             attendance, leave tracking, employee activity, and organizational
//             data — designed for modern, growing enterprises.
//           </p>

//           <div className="flex gap-4">
//             <button className={primaryBtn}>Schedule a Demo →</button>
//           </div>

//           <p className="mt-5 text-sm text-white/50">
//             ✓ Real-time insights ✓ Secure access ✓ Scalable by design
//           </p>
//         </div>

//         {/* ================= DASHBOARD PREVIEW ================= */}
//         <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 h-[380px]">
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
//                 desc: "Automate attendance, leaves, and employee records",
//               },
//               {
//                 title: "Managers",
//                 desc: "Monitor team productivity and engagement",
//               },
//               {
//                 title: "Enterprises",
//                 desc: "Centralized workforce data at scale",
//               },
//               {
//                 title: "Startups",
//                 desc: "Simple, fast, and powerful HR operations",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-xl bg-neutral-950/80 border border-white/10 p-6 text-center hover:border-purple-400/40 transition"
//               >
//                 <h4 className="font-semibold mb-2">{item.title}</h4>
//                 <p className="text-sm text-white/60">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= FEATURES (IMAGE-BASED) ================= */}
//       {/* <div className="py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-14">
//             A Complete Employee Management Solution
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
//             {[
//               {
//                 title: "Dashboard",
//                 img: "/images/features/dashboard.png",
//               },
//               {
//                 title: "Employee Directory",
//                 img: "/images/features/employee-directory.png",
//               },
//               {
//                 title: "Timesheet",
//                 img: "/images/features/timesheet.png",
//               },
//               {
//                 title: "Leave & Attendance",
//                 img: "/images/features/leave-attendance.png",
//               },
//               {
//                 title: "Asset Management",
//                 img: "/images/features/asset-management.png",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="group rounded-2xl bg-neutral-900/70 border border-white/10 p-6 flex flex-col items-center text-center transition-all hover:border-purple-400/50 hover:-translate-y-2"
//               >
//                 <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-xl bg-neutral-800">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-8 h-8 object-contain"
//                   />
//                 </div>

//                 <h4 className="font-semibold text-sm tracking-wide">
//                   {item.title}
//                 </h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div> */}
//       <div className="py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-14">
//             A Complete Employee Management Solution
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
//             {[
//               {
//                 title: "Dashboard",
//                 desc: "Get a real-time overview of attendance, workforce activity, and key HR metrics through a centralized and intuitive dashboard.",
//               },
//               {
//                 title: "Employee Directory",
//                 desc: "Maintain a structured and searchable employee database with roles, departments, contact details, and organizational hierarchy.",
//               },
//               {
//                 title: "Timesheet",
//                 desc: "Track employee work hours, shifts, and productivity accurately with automated timesheets and approval workflows.",
//               },
//               {
//                 title: "Leave & Attendance",
//                 desc: "Simplify leave requests, approvals, attendance tracking, and policy enforcement with configurable rules and calendars.",
//               },
//               {
//                 title: "Asset Management",
//                 desc: "Assign, track, and manage company assets such as laptops, ID cards, and tools with full lifecycle visibility.",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="
//             group
//             rounded-2xl
//             bg-neutral-900/70
//             border border-white/10
//             p-6
//             transition-all
//             hover:border-purple-400/50
//             hover:-translate-y-2
//           "
//               >
//                 <h4 className="font-semibold text-lg mb-3 group-hover:text-purple-300 transition">
//                   {item.title}
//                 </h4>

//                 <p className="text-sm text-white/70 leading-relaxed">
//                   {item.desc}
//                 </p>
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

//           <button className={primaryBtn}>Schedule a Demo →</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import AutoScrollCarousel from "./AutoScrollCarousel";

// export default function ConnectProductPage() {
//   return (
//     <section className="bg-[#0a0a0b] text-white min-h-screen">
//       {/* Subtle Background Gradient */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
//       </div>

//       {/* ================= HERO ================= */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
//         <div>
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-6">
//             <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
//             Employee Management Platform
//           </span>

//           <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8 leading-[1.1] tracking-tight">
//             Unlock Your Business Potential with{" "}
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
//               Connect
//             </span>
//           </h1>

//           <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg">
//             Connect is a unified employee management platform that centralizes
//             attendance, leave tracking, employee activity, and organizational
//             data — designed for modern, growing enterprises.
//           </p>

//           <div className="flex gap-4">
//             <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5">
//               Schedule a Demo
//               <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
//                 →
//               </span>
//             </button>
//             <button className="px-8 py-4 rounded-full border border-white/10 text-sm font-medium text-white/80 hover:bg-white/5 hover:border-white/20 transition-all">
//               Learn More
//             </button>
//           </div>

//           <div className="mt-10 flex items-center gap-6 text-sm text-white/40">
//             {["Real-time insights", "Secure access", "Scalable by design"].map(
//               (item) => (
//                 <span key={item} className="flex items-center gap-2">
//                   <svg
//                     className="w-4 h-4 text-purple-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   {item}
//                 </span>
//               )
//             )}
//           </div>
//         </div>

//         {/* ================= DASHBOARD PREVIEW ================= */}
//         <div className="relative group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
//           <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm h-[420px] shadow-2xl">
//             {/* Browser Chrome */}
//             <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-black/30">
//               <div className="flex gap-1.5">
//                 <div className="w-3 h-3 rounded-full bg-white/10" />
//                 <div className="w-3 h-3 rounded-full bg-white/10" />
//                 <div className="w-3 h-3 rounded-full bg-white/10" />
//               </div>
//             </div>
//             <AutoScrollCarousel />
//           </div>
//         </div>
//       </div>

//       {/* ================= WHO IT'S FOR ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-center text-sm uppercase tracking-widest text-white/30 mb-4">
//             Use Cases
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             Built for Every{" "}
//             <span className="text-purple-400">Organization</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
//             {[
//               {
//                 title: "HR Teams",
//                 desc: "Automate attendance, leaves, and employee records",
//               },
//               {
//                 title: "Managers",
//                 desc: "Monitor team productivity and engagement",
//               },
//               {
//                 title: "Enterprises",
//                 desc: "Centralized workforce data at scale",
//               },
//               {
//                 title: "Startups",
//                 desc: "Simple, fast, and powerful HR operations",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={item.title}
//                 className="group rounded-2xl bg-white/[0.02] border border-white/5 p-8 text-center transition-all duration-300 hover:bg-white/[0.04] hover:border-purple-500/30 hover:-translate-y-1"
//               >
//                 <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-xl">
//                   {["👥", "📊", "🏢", "🚀"][idx]}
//                 </div>
//                 <h4 className="font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm text-white/40 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= FEATURES ================= */}
//       <div className="relative z-10 py-28">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-center text-sm uppercase tracking-widest text-white/30 mb-4">
//             Features
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             A Complete Employee{" "}
//             <span className="text-cyan-400">Management Solution</span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {[
//               {
//                 title: "Dashboard",
//                 desc: "Get a real-time overview of attendance, workforce activity, and key HR metrics through a centralized and intuitive dashboard.",
//                 icon: "📈",
//               },
//               {
//                 title: "Employee Directory",
//                 desc: "Maintain a structured and searchable employee database with roles, departments, contact details, and organizational hierarchy.",
//                 icon: "📁",
//               },
//               {
//                 title: "Timesheet",
//                 desc: "Track employee work hours, shifts, and productivity accurately with automated timesheets and approval workflows.",
//                 icon: "⏱️",
//               },
//               {
//                 title: "Leave & Attendance",
//                 desc: "Simplify leave requests, approvals, attendance tracking, and policy enforcement with configurable rules and calendars.",
//                 icon: "📅",
//               },
//               {
//                 title: "Asset Management",
//                 desc: "Assign, track, and manage company assets such as laptops, ID cards, and tools with full lifecycle visibility.",
//                 icon: "💼",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="group rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 p-8 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-purple-500/5"
//               >
//                 <span className="text-3xl mb-5 block">{item.icon}</span>
//                 <h4 className="font-semibold text-xl mb-3 group-hover:text-white transition-colors">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm text-white/40 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= FINAL CTA ================= */}
//       <div className="relative z-10 py-28 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="relative rounded-3xl overflow-hidden">
//             {/* Gradient Background */}
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50" />
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />

//             <div className="relative px-8 py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-3">
//                   Ready to get started?
//                 </h2>
//                 <p className="text-white/50 text-lg">
//                   Transform how your organization manages employees with
//                   Connect.
//                 </p>
//               </div>

//               <button className="group whitespace-nowrap px-8 py-4 rounded-full bg-white text-neutral-900 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-white/25 hover:-translate-y-0.5">
//                 Schedule a Demo
//                 <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
