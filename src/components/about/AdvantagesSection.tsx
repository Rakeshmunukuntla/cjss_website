import { ADVANTAGES } from "../../lib/Constants"
import Icon from "../Icon"

export const AdvantagesSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">
          CJSS{" "}
          <span className="bg-linear-to-r from-white to-neutral-700 bg-clip-text text-transparent">Advantages</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="group cursor-hover">
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full transition-all duration-500 group-hover:scale-105">
                <div className="text-white mb-4"><Icon name={adv.icon} className="w-12 h-12" /></div>
                <h3 className="text-2xl font-bold mb-3">{adv.title}</h3>
                <p className="text-white">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

