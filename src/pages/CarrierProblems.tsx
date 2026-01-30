"use client";

import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CloudCog,
  Gauge,
  LineChart,
  ShieldCheck,
  Users,
  Workflow,
  Layers,
  Monitor,
  GitBranch,
  Headphones,
  Bug,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CarrierProblemsProps {
  navigateTo: (page: string) => void;
}

// Types
interface TechButton {
  text: string;
  color: "purple" | "sky";
}

interface ImageTag {
  text: string;
  color: "purple" | "sky";
  icon: LucideIcon;
}

interface ProblemData {
  id: number;
  label: string;
  title: string;
  cardTitle: string;
  icon: LucideIcon;
  iconColor: "purple" | "sky";
  problem: string;
  solution: string;
  techButtons: TechButton[];
  imageTags: ImageTag[];
  image: string;
}

const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life at CJSS", page: "CarrierLife" },
    { label: "Jobs", page: "CarrierFresher" },
    { label: "Problems we solve", page: "CarrierProblems" },
  ];

  const [heroOpacity, setHeroOpacity] = useState(1);

  // Scroll effect for hero fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const halfScreen = windowHeight * 0.5;
      let opacity;

      if (scrollY <= halfScreen) {
        opacity = 1 - (scrollY / halfScreen) * 0.9;
      } else {
        const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
        opacity = 0.1 - secondHalfProgress * 0.1;
      }

      setHeroOpacity(Math.max(0, Math.min(1, opacity)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Problems data array
  const problemsData: ProblemData[] = [
    {
      id: 1,
      label: "Platform scalability & performance",
      title: "Platform Scalability & Performance Challenges",
      cardTitle: "System Reliability & Growth",
      icon: Gauge,
      iconColor: "purple",
      problem:
        "As transaction volumes, users, and content grow, platforms struggle to maintain performance and reliability. Peak traffic events expose architectural limitations, leading to slow response times, failures, and downtime.",
      solution:
        "Through Digital Platform Services and Cloud & DevOps, we design and operate scalable architectures using enterprise commerce and experience platforms, cloud infrastructure, and performance engineering practices.",
      techButtons: [
        { text: "SAP Commerce", color: "purple" },
        { text: "AWS / Azure", color: "sky" },
        { text: "Kubernetes", color: "purple" },
      ],
      imageTags: [
        { text: "Scalable architectures", color: "purple", icon: Gauge },
        { text: "Performance under load", color: "sky", icon: LineChart },
      ],
      image: "/images/careerproblems/problem1.jpeg",
    },
    {
      id: 2,
      label: "Legacy architecture & modernization",
      title: "Legacy Architecture & Modernization Challenges",
      cardTitle: "Architecture Evolution",
      icon: Layers,
      iconColor: "sky",
      problem:
        "Legacy applications and tightly coupled architectures slow innovation and increase risk. Teams spend more time maintaining existing systems than delivering new business capabilities.",
      solution:
        "Our Application Modernization Services help evolve legacy Java-based and enterprise applications incrementally. By modernizing architectures while preserving core business logic, we reduce technical debt and improve agility.",
      techButtons: [
        { text: "Java / Spring Boot", color: "sky" },
        { text: "Microservices", color: "purple" },
        { text: "Cloud Native", color: "sky" },
      ],
      imageTags: [
        { text: "Legacy modernization", color: "sky", icon: Layers },
        { text: "Continuous evolution", color: "purple", icon: Workflow },
      ],
      image: "/images/careerproblems/problem2.jpeg",
    },
    {
      id: 3,
      label: "Digital experience & usability",
      title: "Digital Experience & Usability Challenges",
      cardTitle: "User Experience Excellence",
      icon: Monitor,
      iconColor: "purple",
      problem:
        "Inconsistent interfaces and fragmented journeys reduce user adoption, productivity, and customer satisfaction. Experiences often vary across channels and devices.",
      solution:
        "Through Digital Platform & Experience Services, we modernize user interfaces and digital journeys using experience management platforms and modern frontend frameworks.",
      techButtons: [
        { text: "React / Angular", color: "purple" },
        { text: "Adobe AEM", color: "sky" },
        { text: "Headless CMS", color: "purple" },
      ],
      imageTags: [
        { text: "Modern UX", color: "purple", icon: Monitor },
        { text: "Seamless journeys", color: "sky", icon: Users },
      ],
      image: "/images/careerproblems/problem3.png",
    },
    {
      id: 4,
      label: "Integration & ecosystem complexity",
      title: "Integration & Ecosystem Complexity",
      cardTitle: "Connected Systems",
      icon: Workflow,
      iconColor: "sky",
      problem:
        "Disconnected platforms and applications create data silos, manual processes, and limited real-time visibility, making operations inefficient and decision-making slow.",
      solution:
        "Our Enterprise Integration & Platform Enablement services connect commerce, content, and backend systems using API-led and event-driven integration approaches.",
      techButtons: [
        { text: "SAP BTP", color: "sky" },
        { text: "MuleSoft", color: "purple" },
        { text: "REST / GraphQL", color: "sky" },
      ],
      imageTags: [
        { text: "API-led integration", color: "sky", icon: Workflow },
        { text: "Event-driven systems", color: "purple", icon: CloudCog },
      ],
      image: "/images/careerproblems/problem4.png",
    },
    {
      id: 5,
      label: "Delivery & release management",
      title: "Delivery & Release Management Challenges",
      cardTitle: "Deployment Excellence",
      icon: GitBranch,
      iconColor: "purple",
      problem:
        "Slow release cycles, manual deployments, and fragile pipelines increase deployment risk and delay business outcomes.",
      solution:
        "With Cloud & DevOps Services and Quality Engineering, we enable automated delivery pipelines, continuous validation, and controlled releases for faster, error-free deployments.",
      techButtons: [
        { text: "Jenkins / GitLab CI", color: "purple" },
        { text: "Terraform", color: "sky" },
        { text: "Docker", color: "purple" },
      ],
      imageTags: [
        { text: "CI/CD excellence", color: "purple", icon: GitBranch },
        { text: "Quality gates", color: "sky", icon: ShieldCheck },
      ],
      image: "/images/careerproblems/problem5.jpeg",
    },
    {
      id: 6,
      label: "Operational stability & support",
      title: "Operational Stability & Support Challenges",
      cardTitle: "Proactive Operations",
      icon: Headphones,
      iconColor: "sky",
      problem:
        "Teams operate reactively, spending significant effort resolving incidents instead of improving systems. Limited observability leads to firefighting rather than prevention.",
      solution:
        "Our Application Management Services provide proactive monitoring, predictive insights, and continuous optimization for platforms like SAP Commerce and enterprise applications.",
      techButtons: [
        { text: "SAP Commerce", color: "sky" },
        { text: "Datadog / Splunk", color: "purple" },
        { text: "PagerDuty", color: "sky" },
      ],
      imageTags: [
        { text: "24/7 operations", color: "sky", icon: Headphones },
        { text: "Incident prevention", color: "purple", icon: ShieldCheck },
      ],
      image: "/images/careerproblems/problem6.jpeg",
    },
    {
      id: 7,
      label: "Quality, reliability & risk",
      title: "Quality, Reliability & Risk Challenges",
      cardTitle: "Quality Assurance",
      icon: Bug,
      iconColor: "purple",
      problem:
        "Frequent changes without continuous quality practices lead to regressions, performance issues, and reduced confidence in releases.",
      solution:
        "Through Quality Engineering & Assurance, we embed quality across the delivery lifecycle with continuous testing, performance validation, and risk assessment.",
      techButtons: [
        { text: "Selenium / Cypress", color: "purple" },
        { text: "JMeter / Gatling", color: "sky" },
        { text: "SonarQube", color: "purple" },
      ],
      imageTags: [
        { text: "Test automation", color: "purple", icon: Bug },
        { text: "Performance validation", color: "sky", icon: LineChart },
      ],
      image: "/images/careerproblems/problem7.jpeg",
    },
    {
      id: 8,
      label: "Visibility, insights & decision-making",
      title: "Visibility, Insights & Decision-Making Challenges",
      cardTitle: "Data-Driven Decisions",
      icon: BarChart3,
      iconColor: "sky",
      problem:
        "Limited insight into platform health and business impact makes it difficult to prioritize improvements and plan effectively.",
      solution:
        "Across Application Management, Cloud & DevOps, and Digital Platform Services, we provide continuous visibility into system behavior and performance for informed decision-making.",
      techButtons: [
        { text: "Grafana / Prometheus", color: "sky" },
        { text: "ELK Stack", color: "purple" },
        { text: "Power BI / Tableau", color: "sky" },
      ],
      imageTags: [
        { text: "Real-time dashboards", color: "sky", icon: BarChart3 },
        { text: "Business insights", color: "purple", icon: LineChart },
      ],
      image: "/images/careerproblems/problem8.jpeg",
    },
  ];

  return (
    <>
      <CareerNavigationBar
        links={links}
        navigateTo={navigateTo}
        activePage="CarrierProblems"
      />

      {/* =====================================================
          FIXED HERO SECTION (with scroll fade)
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        <section className="relative w-full h-screen overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2000&q=90"
              alt="Problems We Solve"
              className="object-cover w-full h-full scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0,transparent_60%)]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex h-full max-w-4xl flex-col justify-center px-4 sm:px-6 lg:px-8 mx-auto text-center pt-20">
            <span className="mb-5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text font-semibold">
              Problems We Solve
            </span>

            <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl xl:text-6xl sm:leading-tight">
              We solve{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text">
                mission-critical commerce & technology challenges
              </span>{" "}
              that slow down growth
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-xs leading-relaxed sm:mt-6 sm:text-sm md:text-base text-white/70">
              From conversions to systems, workflows and decision-making — we
              turn problems into opportunities for brands, customers and
              careers.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={() => navigateTo("CarrierFresher")}
                className="rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
              >
                Job Openings
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Spacer for hero height */}
      <div className="h-screen" />

      {/* =====================================================
          CONTENT SECTIONS (scroll over hero)
      ===================================================== */}
      <div className="relative z-10">
        <main className="relative w-full min-h-screen overflow-hidden text-white bg-black rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]">
          {/* unified background */}
          <div className="absolute inset-0 pointer-events-none -z-20">
            <div className="absolute inset-0 bg-black" />
            {/* subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            {/* top glow - subtle */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12)_0,transparent_55%)]" />
            {/* bottom glow - subtle */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,211,252,0.08)_0,transparent_60%)]" />
            {/* grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* ───────────── INTRO SECTION ───────────── */}
          <section className="relative z-10 w-full overflow-hidden bg-[#050505] py-20 sm:py-28">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/8 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
              {/* Main Card */}
              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12 md:p-16 overflow-hidden">
                {/* Content */}
                <div className="relative text-center">
                  {/* Main Title */}
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Problems We Solve
                  </h2>

                  {/* Gradient Subtitle */}
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <p className="text-xl font-light text-transparent sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text">
                      And How We Help
                    </p>
                  </div>

                  {/* Description */}
                  <p className="max-w-3xl mx-auto mt-8 text-base leading-relaxed sm:text-lg md:text-xl text-white/60">
                    We help organizations overcome{" "}
                    <span className="text-purple-300">critical challenges</span>{" "}
                    that arise as digital platforms and enterprise systems grow
                    in scale, complexity, and business impact. Each challenge is
                    addressed through{" "}
                    <span className="text-sky-300">specialized services</span>{" "}
                    and proven technology platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ───────────── ALL PROBLEM SECTIONS ───────────── */}
          {problemsData.map((item, index) => {
            const IconComponent = item.icon;
            const isReversed = index % 2 === 1;

            return (
              <section
                key={item.id}
                className="relative z-10 w-full overflow-hidden bg-[#050505]"
              >
                {/* BACKGROUND AMBIANCE */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                </div>

                <div className="max-w-6xl px-4 mx-auto sm:px-6 py-14 sm:py-16">
                  {/* HEADER */}
                  <div className="mb-8">
                    <p
                      className={`text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase ${
                        item.iconColor === "purple"
                          ? "text-purple-300"
                          : "text-sky-300"
                      }`}
                    >
                      {item.label}
                    </p>

                    <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                      {item.title}
                    </h2>
                  </div>

                  <div
                    className={`grid gap-8 mt-6 sm:mt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] items-stretch ${
                      isReversed
                        ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]"
                        : ""
                    }`}
                  >
                    {/* LEFT/RIGHT: SINGLE INTEGRATED PROBLEM & SOLUTION CARD */}
                    <div
                      className={`flex flex-col ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="h-full px-5 py-6 border sm:px-8 sm:py-8 carrier-card-animate carrier-delay-1 carrier-hover-card rounded-[32px] border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
                        <div className="flex flex-col h-full gap-6">
                          {/* ICON & TITLE AREA */}
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex items-center justify-center border shrink-0 h-10 w-10 rounded-2xl ${
                                item.iconColor === "purple"
                                  ? "bg-purple-500/15 border-purple-300/50"
                                  : "bg-sky-500/15 border-sky-300/50"
                              }`}
                            >
                              <IconComponent
                                className={`w-5 h-5 ${
                                  item.iconColor === "purple"
                                    ? "text-purple-300"
                                    : "text-sky-300"
                                }`}
                              />
                            </div>
                            <h3 className="text-base font-semibold text-white">
                              {item.cardTitle}
                            </h3>
                          </div>

                          <div className="flex-1 space-y-8">
                            {/* THE PROBLEM */}
                            <div>
                              <h4
                                className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${
                                  item.iconColor === "purple"
                                    ? "text-purple-300"
                                    : "text-sky-300"
                                }`}
                              >
                                The Problem
                              </h4>
                              <p className="text-sm leading-relaxed text-white/90">
                                {item.problem}
                              </p>
                            </div>

                            {/* HOW WE SOLVE IT */}
                            <div className="pt-6 border-t border-white/5">
                              <h4
                                className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-3 ${
                                  item.iconColor === "purple"
                                    ? "text-sky-300"
                                    : "text-purple-300"
                                }`}
                              >
                                How We Solve It
                              </h4>
                              <p className="mb-5 text-sm leading-relaxed text-white/60">
                                {item.solution}
                              </p>

                              {/* TECH BUTTONS */}
                              <div className="flex flex-wrap gap-2">
                                {item.techButtons.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 border cursor-default
                                      ${
                                        tech.color === "purple"
                                          ? "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50"
                                          : "border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/50"
                                      }
                                    `}
                                  >
                                    {tech.text}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT/LEFT: IMAGE AREA */}
                    <div
                      className={`relative h-64 lg:h-full ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="carrier-card-animate carrier-delay-2 carrier-hover-card relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]/80">
                        <div
                          className={`absolute inset-0 z-10 ${
                            item.iconColor === "purple"
                              ? "bg-gradient-to-tl from-purple-500/10 via-transparent to-black/80"
                              : "bg-gradient-to-tl from-sky-500/10 via-transparent to-black/80"
                          }`}
                        />
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0  w-full h-full transition-transform duration-700 hover:scale-105"
                        />

                        {/* IMAGE TAGS */}
                        <div className="absolute z-20 flex flex-wrap gap-2 bottom-6 left-6 right-6">
                          {item.imageTags.map((tag, tagIndex) => {
                            const TagIcon = tag.icon;
                            return (
                              <span
                                key={tagIndex}
                                className={`inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1.5 border text-[10px] text-white font-medium uppercase tracking-wider ${
                                  tag.color === "purple"
                                    ? "border-purple-300/40"
                                    : "border-sky-300/40"
                                }`}
                              >
                                <TagIcon
                                  className={`w-3 h-3 ${
                                    tag.color === "purple"
                                      ? "text-purple-300"
                                      : "text-sky-300"
                                  }`}
                                />
                                {tag.text}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Divider */}
                {index < problemsData.length - 1 && (
                  <div className="max-w-6xl px-4 mx-auto sm:px-6">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                )}
              </section>
            );
          })}

          {/* ───── SECTION — HOW WE WORK WITH TEAMS ───── */}
          <section className="relative z-10 w-full overflow-hidden border-t py-14 sm:py-16 border-white/5">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="text-center">
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
                  How we work with teams
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white sm:mt-3 sm:text-2xl md:text-3xl">
                  Your work sits at the intersection of business, tech &
                  customers
                </h2>
                <p className="max-w-2xl mx-auto mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
                  Whether you are a fresher or experienced professional, you'll
                  work in small, cross-functional squads that own real
                  outcomes—not just tasks.
                </p>
              </div>

              <div className="grid gap-5 mt-8 sm:gap-6 sm:mt-10 md:grid-cols-3">
                {/* Card 1 */}
                <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-1 rounded-3xl border-white/10 bg-[#0a0a0a]/80">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
                      <Gauge className="w-4 h-4 text-purple-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      Performance & experience squads
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-white/60">
                    Work on page speed, funnels, UX and experiments that
                    directly move conversion and revenue.
                  </p>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Pair with designers, PMs & engineers.</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-sky-300">
                      <ArrowRight className="w-3 h-3" />
                      <span>See your experiments ship in real campaigns.</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-2 rounded-3xl border-white/10 bg-[#0a0a0a]/80">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full sm:h-11 sm:w-11 bg-sky-500/15 border-sky-300/60">
                      <CloudCog className="w-4 h-4 text-sky-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      Platform & integration pods
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-white/60">
                    Modernize stacks, integrate systems and build reliable
                    foundations that other teams can innovate on.
                  </p>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-sky-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Work with APIs, events & data flows.</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <ArrowRight className="w-3 h-3" />
                      <span>Shape the technical foundation of brands.</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="px-4 py-5 border sm:px-5 sm:py-6 carrier-card-animate carrier-delay-3 rounded-3xl border-white/10 bg-[#0a0a0a]/80">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full sm:h-11 sm:w-11 bg-purple-500/15 border-purple-300/60">
                      <ShieldCheck className="w-4 h-4 text-purple-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      Ops, data & reliability circles
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-white/60">
                    Build observability, dashboards and rhythms so teams detect,
                    discuss and fix issues before customers feel them.
                  </p>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-purple-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Own incident reviews & learning loops.</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-sky-300">
                      <ArrowRight className="w-3 h-3" />
                      <span>Turn reliability into a team advantage.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ───── SECTION — PROBLEMS YOU'LL GET TO SOLVE ───── */}
          <section className="relative z-10 w-full pb-20 overflow-hidden sm:pb-24">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
              <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
                {/* Left: bullets */}
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-purple-300 uppercase">
                    Problems you&apos;ll help solve
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:mt-3 sm:text-2xl md:text-3xl">
                    Work on problems that compound your learning
                  </h2>
                  <p className="mt-2 text-xs sm:mt-3 sm:text-sm md:text-base text-white/70">
                    We don't optimize for vanity projects. You'll work on
                    problems where every improvement teaches you something about
                    systems, people and products.
                  </p>

                  <div className="grid gap-3 mt-5 sm:mt-6">
                    {[
                      "Reducing drop-offs in complex multi-step checkouts.",
                      "Designing safer release pipelines for high-traffic campaigns.",
                      "Creating shared dashboards used by both business & engineering.",
                      "Untangling legacy integrations without stopping the business.",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`carrier-chip-animate carrier-delay-${
                          index + 1
                        } inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-3 sm:px-4 py-2.5 text-xs text-white/80`}
                      >
                        <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-purple-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: stacked cards */}
                <div className="space-y-4">
                  <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-1 rounded-3xl border-purple-300/50 bg-[#0a0a0a]/90">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300">
                      For freshers
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-white/80">
                      Ship with guidance, own small but meaningful pieces of the
                      journey, and grow from real feedback—not just tickets.
                    </p>

                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-purple-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Structured mentoring & code reviews.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-sky-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>Exposure to real clients & real metrics.</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-2 rounded-3xl border-sky-300/50 bg-[#0a0a0a]/90">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                      For experienced talent
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-white/80">
                      Lead initiatives, coach teams, and help design the systems
                      and practices that shape how we solve problems at scale.
                    </p>

                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-sky-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Influence architecture & product direction.</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-purple-300">
                        <ArrowRight className="w-3 h-3" />
                        <span>Coach juniors and shape how we work.</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 border sm:px-5 sm:py-5 carrier-card-animate carrier-delay-3 rounded-3xl border-white/15 bg-[#0a0a0a]/90">
                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        Ready to work on problems that actually matter?
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-white/60">
                        Explore fresher and experienced roles where your work is
                        visible and valued.
                      </p>

                      <div className="mt-2 space-y-1.5">
                        <div className="flex items-center gap-2 text-[11px] text-purple-300">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Clear growth paths for both IC & leads.</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-sky-300">
                          <ArrowRight className="w-3 h-3" />
                          <span>
                            Work on long-term partnerships, not one-off gigs.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => navigateTo("CarrierFresher")}
                        className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                      >
                        View Fresher Roles
                      </button>
                      <button
                        onClick={() => navigateTo("CarrierExperienced")}
                        className="rounded-full border border-white/40 px-4 py-2 text-[10px] sm:text-[11px] text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                      >
                        View Experienced Roles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Component-scoped CSS */}
      <style>{`
        /* Block/card base animation on load */
        @keyframes carrierCardUp {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .carrier-card-animate {
          animation: carrierCardUp 0.9s ease-out both;
        }

        /* Chip / pill animations */
        @keyframes carrierChipUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .carrier-chip-animate {
          animation: carrierChipUp 0.7s ease-out both;
        }

        /* Simple stagger delays */
        .carrier-delay-1 {
          animation-delay: 0.08s;
        }

        .carrier-delay-2 {
          animation-delay: 0.18s;
        }

        .carrier-delay-3 {
          animation-delay: 0.28s;
        }

        .carrier-delay-4 {
          animation-delay: 0.38s;
        }

        /* GLOBAL HOVER GLOW FOR ALL CARDS */
        .carrier-hover-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          isolation: isolate;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease,
            background 0.35s ease;
        }

        .carrier-hover-card::before {
          content: '';
          position: absolute;
          inset: -40%;
          background: radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.25), transparent 55%),
            radial-gradient(circle at 100% 100%, rgba(125, 211, 252, 0.2), transparent 55%);
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.45s ease, transform 0.45s ease;
          z-index: -1;
        }

        .carrier-hover-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.2);
        }

        .carrier-hover-card:hover::before {
          opacity: 1;
          transform: scale(1);
        }

        /* Circle-based unique design for Section 5 cards */
        .carrier-role-card {
          position: relative;
          border-radius: 1.5rem;
        }

        .carrier-role-card::before {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.25), transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(125, 211, 252, 0.2), transparent 65%);
          top: -70px;
          right: -80px;
          opacity: 0.35;
          filter: blur(2px);
          transform: translate3d(0, 0, 0) scale(1);
          transition: opacity 0.45s ease, transform 0.45s ease;
          z-index: -1;
        }

        .carrier-role-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at bottom left,
            rgba(0, 0, 0, 0.5),
            transparent 55%
          );
          opacity: 0.7;
          z-index: -1;
        }

        /* Icon circle halo */
        .carrier-role-icon {
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
          transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
        }

        .carrier-role-icon::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0.6;
          transform: scale(0.9);
          transition: opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
        }

        .carrier-role-card:hover::before {
          opacity: 0.9;
          transform: translate3d(-18px, 18px, 0) scale(1.08);
        }

        .carrier-role-card:hover .carrier-role-icon {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 24px rgba(168, 85, 247, 0.5);
        }

        .carrier-role-card:hover .carrier-role-icon::after {
          opacity: 1;
          transform: scale(1.06);
          border-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default CarrierProblems;
