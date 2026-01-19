// "use client";

// interface ProductsPageProps {
//   navigateTo: (page: string) => void;
// }

// const PRODUCTS = [
//   {
//     id: "connect",
//     title: "Connect",
//     shortLabel: "CONNECT",
//     description:
//       "A unified employee management platform to track attendance, manage leaves, monitor employee activities, and centralize organizational data — built to scale effortlessly for modern enterprises.",
//     route: "product-connect",
//   },
//   {
//     id: "ecom-agent",
//     title: "",
//     shortLabel: "NexaGen",
//     description:
//       "An AI-powered eCommerce chatbot built for GCP, Bedrock, and Azure to assist customers, automate support, and enhance shopping experiences",
//     route: "product-ecom-agent",
//   },
// ];

// export const ProductsPage = ({ navigateTo }: ProductsPageProps) => {
//   return (
//     <section className="min-h-screen bg-neutral-950 text-white px-6 py-28">
//       <div className="max-w-7xl mx-auto">
//         {/* ================= HEADER ================= */}
//         <div className="text-center mb-20">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Explore Our{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
//               Products
//             </span>
//           </h1>

//           <p className="text-white/70 max-w-3xl mx-auto text-lg">
//             Purpose-built platforms designed to simplify operations, improve
//             efficiency, and help businesses scale with confidence.
//           </p>
//         </div>

//         {/* ================= PRODUCT GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
//           {PRODUCTS.map((product) => (
//             <div
//               key={product.id}
//               className="
//                 group
//                 relative
//                 rounded-2xl
//                 bg-neutral-900/80
//                 border border-white/10
//                 overflow-hidden
//                 transition-all duration-300
//                 hover:border-purple-400/50
//                 hover:-translate-y-2
//               "
//             >
//               {/* IMAGE / LOGO PLACEHOLDER */}
//               <div className="h-52 flex items-center justify-center bg-neutral-900">
//                 <div
//                   className="
//                     w-40 h-40 rounded-full
//                     bg-neutral-800
//                     flex items-center justify-center
//                     text-lg font-semibold tracking-wide
//                     text-white/80
//                   "
//                 >
//                   {product.shortLabel}
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="p-8 text-center">
//                 <h3
//                   className="
//                     text-2xl font-semibold mb-4
//                     transition-colors duration-300
//                     group-hover:text-purple-300
//                   "
//                 >
//                   {product.title}
//                 </h3>

//                 <p className="text-white/70 text-sm mb-8 leading-relaxed">
//                   {product.description}
//                 </p>

//                 <button
//                   onClick={() => navigateTo(product.route)}
//                   className="
//                     rounded-full
//                     border border-white/40
//                     px-5 sm:px-6
//                     py-2 sm:py-2.5
//                     text-xs sm:text-sm
//                     font-medium
//                     text-white
//                     backdrop-blur
//                     transition-all
//                     hover:bg-white/10
//                     hover:border-white/70
//                   "
//                 >
//                   Know More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsPage;
"use client";

interface ProductsPageProps {
  navigateTo: (page: string) => void;
}

const PRODUCTS = [
  {
    id: "connect",
    title: "Connect",
    shortLabel: "CONNECT",
    description:
      "A unified employee management platform to track attendance, manage leaves, monitor employee activities, and centralize organizational data — built to scale effortlessly for modern enterprises.",
    route: "product-connect",
    logo: "/images/connect-logo.jpeg",
    logoBg: "bg-gradient-to-br from-purple-500/20 to-cyan-500/20",
  },
  {
    id: "ecom-agent",
    title: "NexaGen",
    shortLabel: "NexaGen",
    description:
      "An AI-powered eCommerce chatbot built for GCP, Bedrock, and Azure to assist customers, automate support, and enhance shopping experiences",
    route: "product-ecom-agent",
    logo: "/images/nexagen.png",
    logoBg: "bg-gradient-to-br from-sky-500/20 to-purple-500/20",
  },
];

export const ProductsPage = ({ navigateTo }: ProductsPageProps) => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text uppercase mb-4">
            Our Solutions
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
              Products
            </span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto text-sm sm:text-lg">
            Purpose-built platforms designed to simplify operations, improve
            efficiency, and help businesses scale with confidence.
          </p>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          {PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
            >
              {/* LOGO SECTION - Increased height */}
              <div
                className={`relative h-56 sm:h-72 flex items-center justify-center ${product.logoBg} overflow-hidden`}
              >
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] opacity-40 ${
                      idx % 2 === 0 ? "bg-purple-500/40" : "bg-sky-500/40"
                    }`}
                  />
                  <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl" />
                </div>

                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Logo - Direct display without container box */}
                <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  {product.logo ? (
                    <img
                      src={product.logo}
                      alt={`${product.title} logo`}
                      className="w-48 h-auto sm:w-64 max-h-40 sm:max-h-48 object-contain drop-shadow-2xl"
                    />
                  ) : (
                    // Fallback if no logo
                    <span
                      className={`text-4xl sm:text-5xl font-bold tracking-wide ${
                        idx % 2 === 0 ? "text-purple-300" : "text-sky-300"
                      }`}
                    >
                      {product.shortLabel}
                    </span>
                  )}
                </div>

                {/* Product label badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider border backdrop-blur-md ${
                      idx % 2 === 0
                        ? "bg-purple-500/20 border-purple-300/40 text-purple-300"
                        : "bg-sky-500/20 border-sky-300/40 text-sky-300"
                    }`}
                  >
                    {product.shortLabel}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-sky-300 group-hover:bg-clip-text">
                  {product.title}
                </h3>

                <p className="text-white/60 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                  {product.description}
                </p>

                <button
                  onClick={() => navigateTo(product.route)}
                  className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70"
                >
                  Know More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
