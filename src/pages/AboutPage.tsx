"use client";

import GlobalPresenceMerged from "@/components/GlobalPresenceMap";
// import type React from "react";
import { useEffect, useRef, useState } from "react";
import { LeadershipSection } from "../components/about/LeadershipSection";
import {
  ADVANTAGES,
  CERTIFICATIONS,
  EXPERTISE,
  TECH_USAGE,
} from "../lib/Constants";
import Converstion from "./Conversation";
import ContactForm from "./ContactForm";

// Technology Usage Section Component with Counting Animation
const TechUsageSection = () => {
  const [counts, setCounts] = useState<number[]>(TECH_USAGE.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Start counting animation
          const targets = TECH_USAGE.map((tech) => tech.percentage);
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;

          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            const newCounts = targets.map((target) =>
              Math.floor(target * progress)
            );
            setCounts(newCounts);

            if (currentStep >= steps) {
              clearInterval(interval);
              setCounts(targets);
            }
          }, stepDuration);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="px-6 py-32 bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-5xl font-bold text-center text-white">
          Technology{" "}
          <span className="text-transparent bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text">
            Usage
          </span>
        </h2>
        <p className="mb-16 text-lg text-center text-white">
          Best for showing multiple technologies at once
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {TECH_USAGE.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Circular Progress */}
              <div className="relative w-32 h-32 mb-4">
                {/* Background circle */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="rgba(200, 200, 200, 0.3)"
                    strokeWidth="6"
                  />
                  {/* Animated progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="url(#gradientStroke)"
                    strokeWidth="6"
                    strokeDasharray={`${
                      (counts[idx] / 100) * 2 * Math.PI * 54
                    } ${2 * Math.PI * 54}`}
                    strokeLinecap="round"
                    className="transition-all ease-out group-hover:drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(0, 221, 179, 0.5))",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradientStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#0066FF", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#00DDB3", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center text with counting animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center animate-fadeIn">
                  <span className="text-2xl font-bold text-white">
                    {counts[idx]}%
                  </span>
                </div>

                {/* Pulsing ring on hover */}
                <div className="absolute inset-0 transition-all duration-500 border-2 rounded-full border-purple-400/0 group-hover:border-purple-400/50 group-hover:animate-pulse"></div>
              </div>

              {/* Technology name */}
              <h3 className="text-sm font-semibold text-center text-white">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutPage = () => {
  // const [email, setEmail] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Thank you for subscribing!");
  //   setEmail("");
  // };npm run

  const heroStats = [
    { label: "Transformation Programs", value: "80+" },
    { label: "Experience Pods", value: "12" },
    { label: "Client NPS", value: "72" },
  ];

  const heroHighlights = [
    "SAP Commerce + AEM accelerators",
    "Design-to-run DevOps",
    "Global delivery hubs",
  ];

  const communitySpotlights = [
    {
      title: "STEM Mentorship",
      description:
        "Weekend SAP Commerce and AEM sandboxes where CJSS architects teach students how enterprise platforms power NGOs and civic portals.",
      metric: "250+ mentees",
    },
    {
      title: "Green Stack Pledge",
      description:
        "Reusable React component libraries donated to climate nonprofits so they can launch progressive web experiences without extra spend.",
      metric: "3 cities",
    },
    {
      title: "Open Source Grants",
      description:
        "Funding internal guilds that build testing harnesses, SAP accelerators, and AEM/React starter kits for social-impact founders.",
      metric: "$40K funded",
    },
  ];

  return (
    <div className="bg-neutral-950">
      {/* Entire page content MUST go inside this */}
      <div className="relative z-10">{/* -- your entire About page sections here -- */}</div>

      {/* About Section */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/cjssfam.jpeg')",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.25), transparent 50%)",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
                <span className="w-12 h-px bg-white/40"></span>
                About CJSS
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Building experience-led platforms for courageous brands.
              </h1>
              <p className="text-lg leading-relaxed text-white/80">
                CJSS Tech partners with enterprises and rising scale-ups to
                design, build, and run composable commerce and customer
                experience stacks. We bring pods of strategists, architects,
                engineers, and designers who obsess over measurable outcomes and
                delightful journeys.
              </p>
              <div className="flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm transition-colors border rounded-full text-white/70 border-white/15 bg-white/5 backdrop-blur hover:border-purple-400/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 border rounded-3xl border-white/10 bg-neutral-900/70 backdrop-blur"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-purple-500/30 via-transparent to-cyan-500/30 blur-3xl"></div>
              <div className="relative p-8 space-y-6 border rounded-4xl border-white/10 bg-neutral-900/70 backdrop-blur-2xl">
                <p className="text-lg leading-relaxed text-white/80">
                  "Technology only matters when people feel the difference. We
                  craft platforms with empathy, experimentation, and relentless
                  delivery discipline."
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div>
                    <p className="font-semibold text-white">
                      SAP Commerce | AEM | Cloud
                    </p>
                    <p>Strategy, build, run</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Studio model</p>
                    <p>Design + data + DevOps pods</p>
                  </div>
                </div>
                <div className="px-5 py-4 text-sm border rounded-3xl border-white/10 bg-white/5 text-white/70">
                  Hyderabad HQ · Remote-first talent across APAC, EMEA, and
                  North America.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Advantages Section */}
      <section className="px-6 py-28 bg-neutral-950">
        <div className="mx-auto space-y-12 max-w-7xl">
          <div className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              Why CJSS
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Advantages Designed for Velocity
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              Every squad works from a shared playbook of engineering excellence
              so you get predictable delivery and creative problem solving.
            </p>
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {ADVANTAGES.map((adv, idx) => (
                <div
                  key={idx}
                  className="relative p-6 overflow-hidden transition-all border group rounded-3xl border-white/10 bg-neutral-900/60 backdrop-blur hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-80"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="text-4xl text-white">{adv.icon}</div>
                    <h3 className="text-xl font-semibold text-white">
                      {adv.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/75">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 space-y-6 border rounded-4xl border-white/10 bg-neutral-900/70">
              <p className="text-lg leading-relaxed text-white/80">
                We blend consulting rigor with product sensibilities.
                Engagements kick off with immersion workshops, evolve into
                design sprints, and land with controlled releases plus steady
                runbooks.
              </p>
              <div className="grid gap-4">
                {[
                  "Discovery → blueprint → pilot in 6 weeks",
                  "Shift-left QA and Site Reliability squads",
                  "Experience research plugged into every sprint",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 text-white/75"
                  >
                    <span className="mt-1 text-purple-400">◆</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Usage Section */}
      <TechUsageSection />

      {/* Expertise Section */}
      <section className="px-6 py-28 bg-neutral-950">
        <div className="mx-auto space-y-12 max-w-7xl">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              What we ship
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Expertise you can plug in
            </h2>
            <p className="max-w-3xl mx-auto text-white/70">
              From composable storefronts to AI copilots for operations, our
              guilds plug into your roadmap as autonomous squads.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-6 overflow-hidden transition-all border group rounded-3xl border-white/10 bg-neutral-900/60 backdrop-blur hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-70"></div>
                <div className="relative z-10 space-y-3">
                  <div className="text-4xl text-white">{exp.icon}</div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.name}
                  </h3>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-white/75">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="px-6 py-28 bg-linear-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-4xl border border-white/10 bg-neutral-900/70 backdrop-blur p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                Start a conversation
              </p>
              <h2 className="text-4xl font-bold text-white">Let’s co-create your next release</h2>
              <p className="text-lg leading-relaxed text-white/70">
                Tell us about your SAP Commerce upgrade, AEM personalization backlog, or platform
                ambition. We will assemble a discovery squad within 48 hours.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <span className="px-4 py-2 border rounded-full border-white/15">
                  Blueprint workshops
                </span>
                <span className="px-4 py-2 border rounded-full border-white/15">
                  Accelerated pilots
                </span>
                <span className="px-4 py-2 border rounded-full border-white/15">
                  Managed run teams
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full px-6 py-4 text-white border bg-neutral-950/60 border-white/10 rounded-2xl placeholder-white/40 focus:outline-none focus:border-purple-400"
                required
              />
              <textarea
                placeholder="Tell us about your initiative"
                className="w-full bg-neutral-950/60 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 min-h-[140px]"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white shadow-lg bg-linear-to-r from-purple-500 to-cyan-500 rounded-2xl shadow-purple-500/30"
              >
                Book a discovery call
              </button>
            </form>
          </div>
        </div>
      </section> */}
      {/* <Converstion ></Converstion> */}
      <Converstion
        onSuccess={() => {
          console.log("Saved");
        }}
      />

      {/* Certifications Section */}
      <section className="px-6 py-32 bg-neutral-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-5xl font-bold text-center text-white">
            CJSS{" "}
            <span className="mb-16 text-5xl font-bold text-center text-white">
              Certifications
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="group cursor-hover">
                <div className="p-8 text-center transition-all duration-300 border bg-neutral-900 border-neutral-800 rounded-2xl group-hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="mb-4 text-6xl text-purple-400">
                    {cert.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-white">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="px-6 py-28 bg-neutral-950">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              Community
            </p>
            <h2 className="text-4xl font-bold text-white">
              How CJSS Gives Back
            </h2>
            <p className="text-white/70">
              Impact programs run by CJSS volunteers and partners.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {communitySpotlights.map((item) => (
              <div
                key={item.title}
                className="p-6 space-y-4 border rounded-3xl border-white/10 bg-neutral-900/60"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  {item.metric}
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-neutral-950">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,70,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(0,180,255,0.12),transparent_70%)] blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2">
          {/* LEFT SIDE — CONTACT DETAILS */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wider text-purple-400">
              CONTACT DETAILS
            </h4>

            <h2 className="mb-4 text-4xl font-bold text-white">Contact us</h2>

            <p className="max-w-lg mb-10 leading-relaxed text-neutral-300">
              Give us a call or drop by anytime. We endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>

            {/* India Office */}
            <div className="p-6 mb-8 transition-all border shadow-xl rounded-2xl bg-white/5 backdrop-blur-md border-white/10 hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-400">🌐</div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    INDIA HEAD OFFICE
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    CJSS Technologies Pvt. Ltd.
                    <br />
                    2nd Floor, Block C&D,
                    <br />
                    Vaishnavi Cynosure, Gachibowli,
                    <br />
                    Hyderabad-500032, Telangana, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Singapore Office */}
            <div className="p-6 transition-all border shadow-xl rounded-2xl bg-white/5 backdrop-blur-md border-white/10 hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-400">🌐</div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">
                    SINGAPORE OFFICE
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    CJSS Technologies Pte. Ltd.
                    <br />
                    #03-92, 65 UBI ROAD 1, OXLEY BIZHUB
                    <br />
                    Singapore 408729
                  </p>
                </div>
              </div>
            </div>

            {/* Mailbox */}
            <div className="flex items-center gap-3 mt-8">
              <span className="text-3xl text-purple-400">📧</span>
              <div>
                <p className="text-sm text-neutral-300">Our Mailbox:</p>
                <a
                  className="font-medium text-purple-400 hover:text-purple-300"
                  href="mailto:info@cjsstechnologies.com"
                >
                  info@cjsstechnologies.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}

          <ContactForm></ContactForm>
        </div>
      </section>

      {/* Iframe Section */}
      {/* <section className="w-full px-6 mb-32">
        <div className="w-full mx-auto max-w-7xl">
          <div className="w-full overflow-hidden border shadow-xl rounded-2xl border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.483095539417!2d78.36437847498645!3d17.43657698345904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939f3603a84f%3A0x39ef47e23a528f53!2sCJSS%20Technologies%20Private%20limited!5e0!3m2!1sen!2sin!4v1764072919723!5m2!1sen!2sin"
              className="w-full h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}

<<<<<<< HEAD
      <section className="py-28 bg-neutral-950">
        <h2 className="mb-12 text-4xl text-center text-white">
          Our Global Presence
        </h2>
=======
      {/* <section className="py-28 bg-neutral-950">
        <h2 className="mb-12 text-4xl text-center text-white">Our Global Presence</h2>
>>>>>>> b2f9fa24a5512f2a051529063b6e32b90113f5f0
        <GlobalPresenceMerged />
      </section> */}

      <section className="relative py-28 overflow-hidden bg-[#010b19]">
        {/* Shared background for heading + globe */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,100,255,0.35),_transparent_70%)] blur-2xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,_rgba(0,150,255,0.25),_transparent_70%)]"></div>

        {/* Stars */}
        <div className="absolute inset-0 stars"></div>
        <div className="absolute inset-0 stars2"></div>
        <div className="absolute inset-0 stars3"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none particles"></div>
        <div className="absolute inset-0 pointer-events-none particles2"></div>
        <div className="absolute inset-0 pointer-events-none particles3"></div>

        {/* Content on top */}
        <div className="relative z-10">
          <h2 className="mb-12 text-4xl text-center text-white">Our Global Presence</h2>
          <GlobalPresenceMerged />
        </div>
      </section>
    </div>
  );
};
