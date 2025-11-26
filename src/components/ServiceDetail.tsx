import { Fragment, useEffect } from "react"

// React import not required with automatic JSX runtime

type FlowAccent = "neutral" | "primary" | "success" | "danger"

interface FlowStep {
  id: string
  label: string
  note?: string
  accent?: FlowAccent
}

interface FlowStageSequence {
  type: "sequence"
  steps: FlowStep[]
}

interface FlowStageParallel {
  type: "parallel"
  steps: FlowStep[]
  joinLabel?: string
}

interface FlowStageDecision {
  type: "decision"
  question: string
  yes: FlowStep
  no: FlowStep
}

type FlowStage = FlowStageSequence | FlowStageParallel | FlowStageDecision

interface FlowDiagram {
  title: string
  subtitle?: string
  stages: FlowStage[]
}

interface Solution {
  id: string
  title: string
  summary: string
  details: string
  bullets?: string[]
  flow?: FlowDiagram
}

interface Service {
  id: string
  title: string
  banner: string
  approach: string
  solutions: Solution[]
}

// Workflow visualization component
const WorkflowDiagram = ({ title }: { title: string }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 h-48 flex flex-col justify-center items-center shadow-purple-500/10">
      <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
      <div className="flex items-center gap-3 w-full justify-center flex-wrap text-white/70">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-bold">1</div>
          <p className="text-xs mt-2">Input</p>
        </div>
        <div>→</div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold">2</div>
          <p className="text-xs mt-2">Process</p>
        </div>
        <div>→</div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-purple-300/20 border border-purple-300/40 flex items-center justify-center text-purple-200 font-bold">3</div>
          <p className="text-xs mt-2">Output</p>
        </div>
      </div>
    </div>
  )
}
  const getAccentClasses = (accent: FlowAccent = "neutral") => {
    switch (accent) {
      case "primary":
        return "border-purple-400/40 bg-purple-500/10 text-purple-100"
      case "success":
        return "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
      case "danger":
        return "border-rose-400/40 bg-rose-500/10 text-rose-100"
      default:
        return "border-white/10 bg-white/5 text-white"
    }
  }

  const FlowNode = ({ step, compact = false }: { step: FlowStep; compact?: boolean }) => (
    <div
      className={`relative rounded-2xl border px-4 py-3 ${compact ? "min-w-32 text-xs" : "min-w-40 text-sm"} font-semibold text-center shadow-inner ${getAccentClasses(step.accent)}`}
    >
      {step.note && (
        <span className="absolute -top-3 right-1 text-[10px] uppercase tracking-wide bg-yellow-400/20 text-yellow-200 px-2 py-0.5 rounded-full border border-yellow-200/30">
          {step.note}
        </span>
      )}
      <span className={compact ? "text-xs font-semibold" : "text-sm font-semibold"}>{step.label}</span>
    </div>
  )

  const AutomationFlowDiagram = ({ flow }: { flow: FlowDiagram }) => (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-purple-500/10 space-y-6">
      <div>
        <h5 className="text-lg font-semibold text-white">{flow.title}</h5>
        {flow.subtitle && <p className="text-sm text-white/70 mt-1">{flow.subtitle}</p>}
      </div>

      {flow.stages.map((stage, idx) => {
        if (stage.type === "sequence") {
          return (
            <div key={`sequence-${idx}`} className="flex flex-wrap items-center justify-center gap-3">
              {stage.steps.map((step, stepIdx) => (
                <Fragment key={step.id}>
                  <FlowNode step={step} />
                  {stepIdx < stage.steps.length - 1 && <span className="text-white/40">→</span>}
                </Fragment>
              ))}
            </div>
          )
        }

        if (stage.type === "parallel") {
          return (
            <div key={`parallel-${idx}`} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {stage.steps.map((step) => (
                  <FlowNode key={step.id} step={{ ...step, accent: "primary" }} />
                ))}
              </div>
              {stage.joinLabel && (
                <div className="flex items-center justify-center gap-3 text-xs text-white/60 uppercase tracking-wide">
                  <span className="w-8 border-t border-white/20" />
                  {stage.joinLabel}
                  <span className="w-8 border-t border-white/20" />
                </div>
              )}
            </div>
          )
        }

        return (
          <div key={`decision-${idx}`} className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rotate-45 border border-purple-400/40 bg-neutral-950 flex items-center justify-center shadow-lg shadow-purple-500/10">
                <span className="-rotate-45 text-sm font-semibold text-center px-4 text-white">{stage.question}</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Yes</span>
                <FlowNode step={{ ...stage.yes, accent: stage.yes.accent ?? "success" }} compact />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold text-rose-300 uppercase tracking-wide">No</span>
                <FlowNode step={{ ...stage.no, accent: stage.no.accent ?? "danger" }} compact />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )


// Dummy image with gradient placeholder
const DummyImage = ({ alt, gradient = "from-purple-600/70 to-cyan-600/70" }: { alt: string; gradient?: string }) => {
  const icons = ["🎯", "⚙️", "🔧", "🚀", "💡", "🔐", "📊", "🌐", "📱", "☁️"]
  const randomIcon = icons[Math.floor(Math.random() * icons.length)]

  return (
    <div className={`bg-linear-to-br ${gradient} rounded-2xl p-4 h-48 flex flex-col items-center justify-center relative overflow-hidden shadow-purple-500/20`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-2 w-16 h-16 rounded-full border-2 border-white/30 animate-pulse"></div>
        <div className="absolute bottom-2 right-2 w-20 h-20 rounded-full border-2 border-white/20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>
      <div className="relative z-10 text-center">
        <div className="text-5xl mb-2">{randomIcon}</div>
        <p className="text-white text-xs font-medium">{alt}</p>
      </div>
    </div>
  )
}

export const ServiceDetail = ({ service }: { service: Service }) => {
  const scrollToTarget = (targetId: string, updateHash = true) => {
    if (typeof window === "undefined") return
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      if (updateHash) {
        window.history.replaceState(null, "", `#${targetId}`)
      }
    }
  }

  const scrollToSolution = (solId: string) => {
    scrollToTarget(`service-${service.id}-solution-${solId}`)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    const hash = window.location.hash?.replace("#", "")
    if (hash && hash.startsWith(`service-${service.id}-solution-`)) {
      // slight delay to ensure detailed sections are rendered
      const timeout = window.setTimeout(() => scrollToTarget(hash, false), 100)
      return () => window.clearTimeout(timeout)
    }
  }, [service.id])

  return (
    <section
      id={`service-${service.id}`}
      className="relative py-20 border-b border-neutral-900 bg-neutral-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-0 w-80 h-80 bg-purple-500/15 blur-3xl rounded-full" />
        <div className="absolute bottom-0 -left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ background: "radial-gradient(circle at top, rgba(255,255,255,0.2), transparent 60%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Banner */}
        <div className="bg-neutral-900 rounded-2xl p-8 mb-8 shadow-xl shadow-purple-500/10 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2 text-white">{service.title}</h2>
              <p className="text-white">{service.banner}</p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
                <h4 className="font-semibold mb-2 text-white">Our approach</h4>
                <p className="text-sm text-white/80">{service.approach}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution chips for quick scan */}
        <div className="flex flex-wrap gap-3 mb-10">
          {service.solutions.map((sol) => (
            <span
              key={sol.id}
              className="px-4 py-2 rounded-full text-sm text-white/80 bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              {sol.title}
            </span>
          ))}
        </div>

        {/* Solutions preview */}
        <div className="grid md:grid-cols-3 gap-6">
          {service.solutions.map((sol) => (
            <div
              key={sol.id}
              className="relative bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-500/10 transition-opacity duration-500" />
              <h3 className="relative font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">{sol.title}</h3>
              <p className="relative text-sm text-white/80 mb-4">{sol.summary}</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => scrollToSolution(sol.id)}
                  className="text-purple-300 text-sm font-medium hover:text-cyan-300 transition-colors"
                >
                  Read more
                </button>
                <div className="w-12 h-8 bg-neutral-800 rounded-lg flex items-center justify-center text-xs text-white/70 relative">
                  img
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed solution sections */}
        <div className="mt-12 space-y-12">
          {service.solutions.map((sol) => (
            <div
              key={sol.id}
              id={`service-${service.id}-solution-${sol.id}`}
              className="pb-6 scroll-mt-32 relative"
            >
              <h4 className="text-2xl font-bold mb-2 text-white">{sol.title}</h4>
              <p className="text-white mb-4">{sol.details}</p>
              {sol.bullets && (
                <ul className="list-disc pl-5 text-white space-y-1">
                  {sol.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {sol.flow ? (
                <div className="mt-6">
                  <AutomationFlowDiagram flow={sol.flow} />
                </div>
              ) : (
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <WorkflowDiagram title="Process Flow" />
                  <DummyImage alt="Service Illustration" gradient="from-purple-600/70 to-cyan-600/70" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
