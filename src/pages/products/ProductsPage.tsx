// "use client";

// interface ProductsPageProps {
//   navigateTo: (page: string) => void;
// }

// const PRODUCTS = [
//   {
//     id: "smart-tds",
//     title: "Smart TDS",
//     description:
//       "With no software downloads required, effortlessly file your client’s or business’ TDS returns.",
//   },
//   {
//     id: "e-form-16",
//     title: "E-Form 16",
//     description:
//       "With the Form 16 Generator, tedious manual processes are a thing of the past.",
//   },
//   {
//     id: "e-poi",
//     title: "E-POI",
//     description:
//       "Digital solution designed to streamline income tax TDS document verification processes.",
//   },
// ];

// export const ProductsPage = ({ navigateTo }: ProductsPageProps) => {
//   return (
//     <section className="min-h-screen bg-neutral-950 text-white px-6 py-28">
//       <div className="max-w-7xl mx-auto">
//         {/* ================= HEADER ================= */}
//         <div className="text-center mb-20">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Unlock Your Business Potential with{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
//               Cloudstine
//             </span>
//           </h1>

//           <p className="text-white/70 max-w-3xl mx-auto text-lg">
//             Products designed to perform flawlessly during peak demand, ensuring
//             consistent uptime and reliability.
//           </p>
//         </div>

//         {/* ================= PRODUCT CARDS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
//               {/* IMAGE PLACEHOLDER */}
//               <div className="h-48 flex items-center justify-center bg-neutral-900">
//                 <div
//                   className="
//                     w-36 h-36 rounded-full
//                     bg-neutral-800
//                     flex items-center justify-center
//                     text-sm font-semibold tracking-wide
//                     text-white/80
//                   "
//                 >
//                   {product.title.toUpperCase()}
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="p-6 text-center">
//                 <h3
//                   className="
//                     text-xl font-semibold mb-3
//                     transition-colors duration-300
//                     group-hover:text-purple-300
//                   "
//                 >
//                   {product.title}
//                 </h3>

//                 <p className="text-white/70 text-sm mb-6 leading-relaxed">
//                   {product.description}
//                 </p>

//                 <button
//                   onClick={() => navigateTo(`product-${product.id}`)}
//                   className="
//                     inline-flex items-center justify-center
//                     px-6 py-3 rounded-full
//                     text-sm font-semibold
//                     bg-red-500
//                     text-white
//                     transition-all duration-300
//                     hover:bg-red-600
//                   "
//                 >
//                   KNOW MORE
//                   <span className="ml-2 transition-transform group-hover:translate-x-1">
//                     →
//                   </span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ================= CTA SECTION ================= */}
//         <div className="mt-28 bg-neutral-900/60 border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
//             <p className="text-white/70 max-w-xl">
//               Ready to transform your business with E-POI and Cloudstine
//               products.
//             </p>
//           </div>

//           <div className="flex gap-4">
//             <button
//               onClick={() => navigateTo("contact")}
//               className="
//                 px-6 py-3 rounded-full
//                 bg-red-500
//                 text-white
//                 font-semibold
//                 transition hover:bg-red-600
//               "
//             >
//               SCHEDULE A DEMO →
//             </button>

//             <button
//               onClick={() => navigateTo("contact")}
//               className="
//                 px-6 py-3 rounded-full
//                 border border-red-500
//                 text-red-400
//                 font-semibold
//                 transition hover:bg-red-500 hover:text-white
//               "
//             >
//               KNOW MORE
//             </button>
//           </div>
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

              <button
                onClick={() => navigateTo("product-connect")}
                className="
                  inline-flex items-center justify-center
                  px-8 py-3 rounded-full
                  text-sm font-semibold
                  bg-red-500
                  text-white
                  transition-all duration-300
                  hover:bg-red-600
                "
              >
                KNOW MORE
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
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
            <button
              //   onClick={() => navigateTo("contact")}
              className="
                px-6 py-3 rounded-full
                bg-red-500
                text-white
                font-semibold
                transition hover:bg-red-600
              "
            >
              SCHEDULE A DEMO →
            </button>

            <button
              //   onClick={() => navigateTo("contact")}
              className="
                px-6 py-3 rounded-full
                border border-red-500
                text-red-400
                font-semibold
                transition hover:bg-red-500 hover:text-white
              "
            >
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
