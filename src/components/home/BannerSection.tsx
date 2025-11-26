export const BannerSection = () => {
  const services = ["Concept", "Development", "Data Analytics", "Cyber Security"]

  return (
    <section className="w-full bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 py-6 overflow-hidden relative group">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute left-0 top-0 w-96 h-96 bg-brand-teal/20 blur-3xl -translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
      </div>
      <div className="relative flex items-center overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .scrolling-banner {
            animation: scroll-left 15s linear infinite;
          }
          .scrolling-banner:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="scrolling-banner flex gap-8 whitespace-nowrap">
          {[...services, ...services].map((service, idx) => (
            <div key={idx} className="flex items-center gap-8 hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-semibold text-transparent bg-linear-to-r from-brand-teal via-brand-blue to-brand-teal bg-clip-text hover:text-brand-teal transition-colors duration-300">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
