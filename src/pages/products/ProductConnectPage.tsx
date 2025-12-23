"use client";
import AutoScrollCarousel from "./AutoScrollCarousel";

interface ProductConnectPageProps {
  navigateTo: (page: string) => void;
}

export const ProductConnectPage = ({}: ProductConnectPageProps) => {
  return (
    <section className="bg-neutral-950 text-white">
      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm uppercase tracking-widest text-purple-300">
            Employee Management Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Manage Your Workforce Seamlessly with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
              Connect
            </span>
          </h1>

          <p className="text-white/70 text-lg mb-8">
            Connect helps organizations manage attendance, leaves, employee
            activity, and workforce data from a single, secure dashboard — built
            for scale, accuracy, and transparency.
          </p>

          <div className="flex gap-4">
            <button
              // onClick={() => navigateTo("contact")}
              className="px-6 py-3 rounded-full bg-red-500 font-semibold hover:bg-red-600 transition"
            >
              Schedule Demo →
            </button>

            <button
              // onClick={() => navigateTo("contact")}
              className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition"
            >
              Check Plans
            </button>
          </div>

          <p className="mt-4 text-sm text-white/50">
            ✓ No manual tracking ✓ Real-time insights ✓ Secure access
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 h-[360px]">
          <AutoScrollCarousel />
        </div>
      </div>

      {/* ================= WHO IT’S FOR ================= */}
      <div className="bg-neutral-900/60 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for Every Organization
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "HR Teams",
                desc: "Automate attendance & leave workflows",
              },
              { title: "Managers", desc: "Track team activity & productivity" },
              {
                title: "Enterprises",
                desc: "Centralized workforce data at scale",
              },
              {
                title: "Startups",
                desc: "Lightweight yet powerful HR operations",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-neutral-950/80 border border-white/10 p-6 text-center"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            A Complete Employee Management Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Attendance Tracking",
              "Leave Management",
              "Employee Activity Logs",
              "Role-Based Access",
              "Shift & Work Hours",
              "Reports & Analytics",
              "Policy Configuration",
              "Secure Cloud Storage",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-xl bg-neutral-900/70 border border-white/10 p-5 hover:border-purple-400/50 transition"
              >
                <p className="font-medium">{feature}</p>
                <p className="text-sm text-white/60 mt-2">
                  Streamlined and automated to reduce manual effort.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PRICING ================= */}
      <div className="bg-neutral-900/60 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Free", price: "₹0", users: "Up to 5 users" },
              { name: "Starter", price: "₹1999", users: "Up to 25 users" },
              { name: "Growth", price: "₹4999", users: "Up to 100 users" },
              { name: "Enterprise", price: "Custom", users: "Unlimited users" },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl bg-neutral-950 border border-white/10 p-6 text-center"
              >
                <h4 className="font-semibold mb-2">{plan.name}</h4>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-sm text-white/60 mb-6">{plan.users}</p>
                <button
                  // onClick={() => navigateTo("contact")}
                  className="w-full py-2 rounded-full bg-red-500 font-semibold hover:bg-red-600 transition"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FAQ ================= */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              "Is Connect suitable for large organizations?",
              "Can Connect handle multiple office locations?",
              "Is employee data secure?",
              "Does Connect support role-based access?",
              "Can reports be exported?",
            ].map((q) => (
              <div
                key={q}
                className="rounded-xl bg-neutral-900/70 border border-white/10 p-4"
              >
                <p className="font-medium">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="bg-neutral-900/60 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-3">Ready to get started?</h2>
            <p className="text-white/70">
              Transform how your organization manages employees with Connect.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              // onClick={() => navigateTo("contact")}
              className="px-6 py-3 rounded-full bg-red-500 font-semibold hover:bg-red-600 transition"
            >
              Schedule a Demo →
            </button>

            <button
              // onClick={() => navigateTo("contact")}
              className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductConnectPage;
