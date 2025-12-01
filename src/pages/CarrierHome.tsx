import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';

interface CarrierHomeProps {
  navigateTo: (page: string) => void;
}

const CarrierHome = ({ navigateTo }: CarrierHomeProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life at CJSS', page: 'CarrierLife' }, // 👈 must match App key
    { label: 'Job for Fresher', page: 'CarrierFresher' }, // or whatever you use
    { label: 'Job for Experienced', page: 'CarrierExperienced' },
    { label: 'Problems we solve', page: 'CarrierProblems' }, // if you add later
  ];

  return (
    <>
      {/* <h1>THis is carrer Home</h1>
      <h1>THis is carrer Home</h1>
      <h1>THis is carrer Home</h1>
      <h1>THis is carrer Home</h1> */}

      {/* NAVBAR – small + fixed to viewport */}
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* About CJSS Section */}
      <section className="relative px-6 overflow-hidden py-35 bg-neutral-950">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[180px]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(168,85,247,0.25), transparent 60%)',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-white/60">
              <span className="h-px w-14 bg-white/30"></span>
              About CJSS
              <span className="h-px w-14 bg-white/30"></span>
            </div>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Empowering People. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-cyan-400 to-purple-400">
                Transforming Enterprises.
              </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-white/70">
              CJSS has been shaping digital success stories with a people-first culture, engineering
              excellence, and cutting-edge innovation that drives business growth for global brands.
            </p>
          </div>

          {/* Image + Caption */}
          <div className="relative mb-20">
            <div className="absolute -inset-6 bg-linear-to-br from-purple-500/20 to-cyan-500/20 blur-2xl opacity-70 rounded-3xl"></div>

            <div className="relative overflow-hidden border shadow-xl border-white/10 rounded-3xl bg-neutral-900/70 backdrop-blur-xl">
              <img
                src="/images/cjssfam.jpeg"
                alt="Happy Employees"
                className="object-cover w-full h-[400px] md:h-[520px]"
              />
              <div className="absolute px-4 py-2 border bottom-4 left-4 bg-black/50 backdrop-blur rounded-xl border-white/10">
                <p className="text-sm uppercase tracking-[0.3em] text-white">Happy Employees</p>
              </div>
            </div>
          </div>

          {/* Years of Transformation */}
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white md:text-5xl">
              Years of Transforming Businesses
            </h3>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-white/70">
              Our teams work passionately every day to architect resilient, scalable, and
              future-ready digital commerce solutions — backed by world-class engineering talent.
            </p>
          </div>
        </div>
      </section>

      {/* Global Locations */}
      <section className="relative px-6 py-24 overflow-hidden bg-neutral-950">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-purple-600/25 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-cyan-400/25 rounded-full blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-white/60">
              <span className="h-px w-14 bg-white/30"></span>
              Locations
              <span className="h-px w-14 bg-white/30"></span>
            </div>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">Our Global Presence</h2>
            <p className="max-w-2xl mx-auto mt-4 text-white/70">
              We are expanding rapidly across continents with a mission to empower digital
              transformation globally.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="relative p-6 border rounded-3xl border-white/10 bg-neutral-900/60 backdrop-blur">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10 opacity-40 rounded-3xl"></div>
              <h3 className="relative text-xl font-semibold text-white">Hyderabad, India</h3>
              <p className="relative mt-2 text-sm text-white/60">(Add your office address here)</p>
            </div>

            {/* Card 2 */}
            <div className="relative p-6 border rounded-3xl border-white/10 bg-neutral-900/60 backdrop-blur">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10 opacity-40 rounded-3xl"></div>
              <h3 className="relative text-xl font-semibold text-white">Singapore</h3>
              <p className="relative mt-2 text-sm text-white/60">(Add your office address here)</p>
            </div>

            {/* Card 3 */}
            <div className="relative p-6 border rounded-3xl border-white/10 bg-neutral-900/60 backdrop-blur">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10 opacity-40 rounded-3xl"></div>
              <h3 className="relative text-xl font-semibold text-white">(Another Location)</h3>
              <p className="relative mt-2 text-sm text-white/60">
                (Optional — add future global office)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative px-6 py-24 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-purple-500/20 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
              <span className="h-px w-14 bg-white/30" />
              Clients
              <span className="h-px w-14 bg-white/30" />
            </div>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Trusted by Global Leaders
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-white/70">
              We partner with some of the world’s fastest-growing enterprises to craft solutions
              that scale.
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 place-items-center">
            <img
              src="/logos/client1.png"
              alt="Client 1"
              className="w-32 transition opacity-80 hover:opacity-100"
            />
            <img
              src="/logos/client2.png"
              alt="Client 2"
              className="w-32 transition opacity-80 hover:opacity-100"
            />
            <img
              src="/logos/client3.png"
              alt="Client 3"
              className="w-32 transition opacity-80 hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* Employee Satisfaction */}
      <section className="relative px-6 py-24 overflow-hidden text-center bg-neutral-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[200px]" />
        </div>

        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Employee Satisfaction at Our Core
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/70">
          At CJSS, we believe that great companies are built by great people. Our culture celebrates
          innovation, collaboration, and genuine happiness. From flexible work environments to
          continuous learning, every policy is designed with employee well-being at the heart.
        </p>

        <p className="max-w-xl mx-auto mt-6 text-white/60">
          Because when our people thrive — our clients, products, and company thrive together.
        </p>
      </section>
    </>
  );
};

export default CarrierHome;
