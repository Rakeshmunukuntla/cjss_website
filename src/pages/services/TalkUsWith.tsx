const TalkWithUs = () => {
  return (
    <section className="w-full flex justify-center mt-20 mb-20">
      <div
        className="
          w-[80%]
          rounded-3xl
          bg-slate-900/70
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_60px_rgba(34,211,238,0.20)]
          p-10 md:p-14
        "
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT BLOCK */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
              Talk with us
            </h2>

            <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
              Interested in quality engineering services? Reach out and we'll
              connect you with the right specialist who fits your project needs.
            </p>

            <div className="mt-6 h-[3px] w-28 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70" />
          </div>

          {/* RIGHT CONTACT CARD */}
          <div
            className="
              rounded-3xl
              bg-slate-950/80
              border border-white/10
              shadow-[0_0_40px_rgba(0,0,0,0.55)]
              p-8
              flex gap-5
              items-start
              hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
              transition-all
            "
          >
            {/* PROFILE IMAGE */}
            <img
              src="/images/priya.png"
              alt="Priya"
              className="
                h-20 w-20
                rounded-full
                object-cover
                border border-purple-500/40
                shadow-[0_0_20px_rgba(168,85,247,0.35)]
              "
            />

            {/* DETAILS */}
            <div>
              <h3 className="text-xl font-semibold text-white">Priya</h3>
              <p className="text-sm text-slate-400">Head of QA Solutions</p>

              <p className="mt-4 text-sm">
                Email:{" "}
                <a
                  href="mailto:connect@cjsstech.com"
                  className="text-cyan-400 hover:underline"
                >
                  connect@cjsstech.com
                </a>
              </p>

              <p className="text-xs text-slate-500 mt-1">
                We typically respond within 1 business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkWithUs;
