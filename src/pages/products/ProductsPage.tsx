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
      "A unified HRMS platform that centralizes employee data, HR workflows, recruitment, and internal operations — providing structure, visibility, and scalability for modern enterprises.",
    route: "product-connect",
    logo: "/images/connect-logo.png",
    logoBg: "bg-[#2d3a8c]", // Deep blue to match Connect logo background
    accentColor: "purple",
  },
  {
    id: "ecom-agent",
    title: "NexaGen",
    shortLabel: "NexaGen",
    description:
      "Serverless MCP-Powered AI Agents for Modern Commerce. Build and run tool-driven RAG chat agents for customer service, internal users, and marketplaces. NexaGen integrates web scraping, compliance checks, semantic catalog search, content enhancement, and SEO—while letting you switch models, vector stores, embedders, and chunkers without touching application code.",
    route: "product-ecom-agent",
    logo: "/images/nexagen-logo.png",
    logoBg: "bg-[#2d3a8c]", // Blue-purple to match NexaGen logo background
    accentColor: "sky",
  },
];

export const ProductsPage = ({ navigateTo }: ProductsPageProps) => {
  return (
    <section className="min-h-screen bg-neutral-956 text-white px-4 sm:px-6 py-20 sm:py-28">
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
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(168,85,247,0.25)] hover:border-purple-300/60"
            >
              {/* LOGO SECTION - Background matches logo color */}
              <div
                className={`relative h-56 sm:h-72 flex items-center justify-center ${product.logoBg} overflow-hidden`}
              >
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

                {/* Subtle corner accents */}
                <div
                  className={`absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-30 ${
                    product.accentColor === "purple"
                      ? "bg-purple-500/30"
                      : "bg-sky-500/30"
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30 ${
                    product.accentColor === "purple"
                      ? "bg-cyan-500/20"
                      : "bg-purple-500/20"
                  }`}
                />

                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Logo - Direct display */}
                <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  {product.logo ? (
                    <img
                      src={product.logo}
                      alt={`${product.title} logo`}
                      className="w-48 h-auto sm:w-64 max-h-40 sm:max-h-48 object-contain drop-shadow-2xl"
                    />
                  ) : (
                    <span
                      className={`text-4xl sm:text-5xl font-bold tracking-wide ${
                        product.accentColor === "purple"
                          ? "text-purple-300"
                          : "text-sky-300"
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
                      product.accentColor === "purple"
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
