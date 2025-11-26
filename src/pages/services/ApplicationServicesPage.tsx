import ServiceDetail from "../../components/ServiceDetail"
import { TECHNOLOGY_SERVICES } from "../../lib/Constants"

export const ApplicationServicesPage = () => {
  const service = TECHNOLOGY_SERVICES.find((s) => s.id === "application-services")!

  return (
    <section className="min-h-screen w-full pt-0 px-6 pb-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <ServiceDetail service={service as any} />

        {/* Talk with us section */}
        <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-purple-500/10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">Talk with us</h3>
            <p className="text-white/80">Looking to modernize your applications? Reach out and we'll connect you with our modernization experts.</p>
          </div>
          <div className="w-full md:w-80 bg-neutral-950 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl font-bold text-purple-400">PM</div>
              <div>
                <div className="font-semibold text-white">Priya Menon</div>
                <div className="text-sm text-white/70">Application Modernization Lead</div>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <div className="text-white/80">Email: <a className="text-purple-300 hover:text-cyan-300 underline" href="mailto:appmod@cjss.example">appmod@cjss.example</a></div>
              <div className="text-white/60 text-xs mt-2">We typically respond within 1 business day.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
