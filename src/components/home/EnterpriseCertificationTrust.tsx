"use client";

export default function CertificationShowcase() {
  return (
    <section className="relative bg-black py-28 px-4 overflow-hidden">
      {/* Subtle spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Certified for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300">
            Information Security Excellence
          </span>
        </h2>

        <p className="max-w-3xl mx-auto mb-20 text-sm sm:text-base md:text-lg text-white/60">
          Our ISO 27001:2022 certification reflects a strong commitment to
          enterprise-grade security, governance, and global compliance
          standards.
        </p>

        {/* Certification Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Intertek */}
          <div className="group relative">
            <div className="absolute inset-0 bg-purple-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-white rounded-2xl px-10 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src="/images/intertek-iso.jpg"
                alt="Intertek ISO 27001 Certification"
                className="h-28 sm:h-32 md:h-36 w-auto"
              />
            </div>
          </div>

          {/* UKAS */}
          <div className="group relative">
            <div className="absolute inset-0 bg-sky-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-white rounded-2xl px-10 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src="/images/ukas.jpg"
                alt="UKAS Management Systems"
                className="h-28 sm:h-32 md:h-36 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
