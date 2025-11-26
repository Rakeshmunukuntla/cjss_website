import { TECHNOLOGIES } from "../../lib/Constants"
import Icon from "../Icon"

export const TechnologiesSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center relative bg-neutral-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-2xl -translate-x-1/2 animate-pulse opacity-40" style={{ animationDuration: "5s" }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 right-1/3 w-20 h-20 bg-purple-500/20 rounded-full blur-lg opacity-0 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-lg opacity-0 animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center animate-slideUp text-white">
          Our{" "}
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech, idx) => (
            <div key={idx} className="relative group cursor-hover animate-fadeInScale" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 h-full transition-all duration-500 group-hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group-hover:-translate-y-1">
                <div className="text-purple-300 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse"><Icon name={tech.icon} className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
