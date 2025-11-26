import { LEADERS } from "../../lib/Constants"

export const LeadershipSection = () => {
  return (
    <section className="py-32 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-20 text-center text-white">
          Executive{" "}
          <span className="text-5xl font-bold mb-20 text-center text-white">Leadership</span>
        </h2>

        <div className="space-y-20">
          {LEADERS.map((leader, idx) => (
            <div key={idx} className="group">
              {idx % 2 === 0 ? (
                // Left image, right content
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="flex justify-center pt-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-2xl"></div>
                      <img
                        src={leader.profileImage}
                        alt={leader.name}
                        className="relative w-80 h-80 rounded-full object-cover border-4 border-neutral-800 shadow-2xl shadow-purple-500/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-purple-300 font-semibold text-lg">Leadership Spotlight: {leader.name}</p>
                    <h3 className="text-4xl font-bold text-white">{leader.name}</h3>
                    <p className="text-xl text-white/70 font-semibold">{leader.designation}</p>
                    <div className="border-l-4 border-purple-400 pl-6 py-2">
                      <p className="text-white/70 leading-relaxed text-lg">{leader.bio}</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Right image, left content
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-4">
                    <p className="text-purple-400 font-semibold text-lg">Leadership Spotlight: {leader.name}</p>
                    <h3 className="text-4xl font-bold text-white">{leader.name}</h3>
                    <p className="text-xl text-neutral-300 font-semibold">{leader.designation}</p>
                    <div className="border-l-4 border-purple-400 pl-6 py-2">
                      <p className="text-neutral-200 leading-relaxed text-lg">{leader.bio}</p>
                    </div>
                  </div>
                  <div className="flex justify-center pt-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-2xl"></div>
                      <img
                        src={leader.profileImage}
                        alt={leader.name}
                        className="relative w-80 h-80 rounded-full object-cover border-4 border-neutral-800 shadow-2xl shadow-purple-500/20"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

