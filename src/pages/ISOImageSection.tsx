"use client";

const SOFT_GRADIENT =
  "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-sky-300";

export default function ISOImageSection() {
  return (
    <section className="relative px-4 py-28 overflow-hidden bg-black">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          <span className={`block ${SOFT_GRADIENT}`}>
            We Are Certified &amp; Compliant
          </span>
          <span className={`block ${SOFT_GRADIENT}`}>ISO 27001:2022</span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mb-20 text-sm leading-relaxed sm:text-base md:text-lg text-white/70">
          CJSS Technologies maintains the highest international standards for
          information security. We ensure enterprise-grade protection, rigorous
          compliance, secure engineering practices, and continuous monitoring —
          keeping your data and systems safe at all times.
        </p>

        {/* Certification Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="flex items-center justify-center px-6 py-5 rounded-2xl bg-white shadow-md">
            <img
              src="/images/intertek-iso.jpg"
              alt="Intertek ISO 27001 Certification"
              className="h-24 sm:h-28 md:h-32 w-auto"
            />
          </div>

          <div className="flex items-center justify-center px-6 py-5 rounded-2xl bg-white shadow-md">
            <img
              src="/images/ukas.jpg"
              alt="UKAS Management Systems"
              className="h-24 sm:h-28 md:h-32 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
