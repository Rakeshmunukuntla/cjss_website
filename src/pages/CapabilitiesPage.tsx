import { useEffect } from "react"
import ServiceDetail from "../components/ServiceDetail"
import { TECHNOLOGY_SERVICES } from "../lib/Constants"

export const CapabilitiesPage = () => {
  useEffect(() => {
    // Scroll to service if hash present
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <section className="pt-24 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 text-white">Our Technology Services</h1>
          <p className="text-white">Explore the capabilities, approach and solutions we offer across technology domains.</p>
        </div>

        {/* Render each service detail */}
        <div className="space-y-12">
          {TECHNOLOGY_SERVICES.map((service) => (
            <ServiceDetail key={service.id} service={service as any} />
          ))}
        </div>

        {/* Talk with us section */}
        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-purple-500/5">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">Talk with us</h3>
            <p className="text-white">Interested in any of these services? Reach out and we'll connect you with the right specialist.</p>
          </div>
          <div className="w-full md:w-80 bg-neutral-800 border border-neutral-700 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl text-purple-400 font-bold">JS</div>
              <div>
                <div className="font-semibold text-white">John Smith</div>
                <div className="text-sm text-white">Head of Solutions</div>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <div className="text-white">Email: <a className="text-purple-400 hover:text-purple-300 transition-colors" href="mailto:solutions@cjss.example">solutions@cjss.example</a></div>
              <div className="text-white text-xs mt-2">We typically respond within 1 business day.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

