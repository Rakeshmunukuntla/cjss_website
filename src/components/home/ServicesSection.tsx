import { SERVICES } from "../../lib/Constants"

export const ServicesSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 animate-slideUp">
          Our{" "}
          <span className="bg-linear-to-r from-neutral-300 to-neutral-400 bg-clip-text text-transparent">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group cursor-hover animate-slideUp" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="relative bg-neutral-900/60 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 h-full transition-all duration-500 group-hover:scale-105 group-hover:bg-neutral-900/80 group-hover:border-neutral-600 group-hover:shadow-xl group-hover:shadow-neutral-900/30">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-neutral-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
