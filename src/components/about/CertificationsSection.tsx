import { CERTIFICATIONS } from "../../lib/Constants"
import Icon from "../Icon"

export const CertificationsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">
          CJSS{" "}
          <span className="text-5xl font-bold mb-16 text-center">
            Certifications
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="group cursor-hover">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 text-center transition-all duration-300 group-hover:scale-105">
                <div className="text-white mb-4 flex justify-center"><Icon name={cert.icon} className="w-12 h-12" /></div>
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-white text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
