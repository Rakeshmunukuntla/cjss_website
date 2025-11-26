"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  MapPin,
  Users,
  Award,
  Heart,
  Brain,
  Globe,
  Zap,
  Clock,
  DollarSign,
  BookOpen,
  Trophy,
  Users2,
  CheckCircle2,
  Sparkles,
  PartyPopper,
  Handshake,
} from "lucide-react";

// export const CareersPage = () => {
// const [selectedCategory, setSelectedCategory] = useState("all");
// const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

// //const [openRoles, setOpenRoles] = useState([])
// const [openRoles, setOpenRoles] = useState([]);

// // const openRoles = [
// //   {
// //     id: 1,
// //     title: "Senior SAP Hybris Developer",
// //     category: "SAP Hybris",
// //     experience: "5+ years",
// //     location: "Hybrid",
// //     description: "Build scalable e-commerce platforms for global brands",
// //     skills: ["Java", "SAP Hybris", "REST APIs"]
// //   },
// //   {
// //     id: 2,
// //     title: "Adobe Experience Manager (AEM) Engineer",
// //     category: "AEM",
// //     experience: "4+ years",
// //     location: "Remote",
// //     description: "Develop enterprise content management solutions",
// //     skills: ["AEM", "JavaScript", "Cloud Services"]
// //   },
// //   {
// //     id: 3,
// //     title: "React Frontend Developer",
// //     category: "React / Frontend",
// //     experience: "3+ years",
// //     location: "Hybrid",
// //     description: "Create responsive and interactive user interfaces",
// //     skills: ["React", "TypeScript", "Tailwind CSS"]
// //   },
// //   {
// //     id: 4,
// //     title: "Java Backend Engineer",
// //     category: "Java backend",
// //     experience: "5+ years",
// //     location: "On-site",
// //     description: "Architect and develop robust backend systems",
// //     skills: ["Java", "Spring Boot", "Microservices"]
// //   },
// //   {
// //     id: 5,
// //     title: "QA Automation Engineer",
// //     category: "QA / Automation",
// //     experience: "3+ years",
// //     location: "Hybrid",
// //     description: "Ensure quality through comprehensive testing",
// //     skills: ["Selenium", "Java", "Test Automation"]
// //   },
// //   {
// //     id: 6,
// //     title: "DevOps Engineer",
// //     category: "DevOps",
// //     experience: "4+ years",
// //     location: "Remote",
// //     description: "Manage infrastructure and deployment pipelines",
// //     skills: ["Kubernetes", "Docker", "AWS"]
// //   },
// //   {
// //     id: 7,
// //     title: "UI/UX Designer",
// //     category: "UI/UX",
// //     experience: "3+ years",
// //     location: "Hybrid",
// //     description: "Design beautiful and intuitive user experiences",
// //     skills: ["Figma", "Design Systems", "User Research"]
// //   },
// //   {
// //     id: 8,
// //     title: "Project Manager",
// //     category: "Project Managers",
// //     experience: "5+ years",
// //     location: "Hybrid",
// //     description: "Lead cross-functional teams to deliver excellence",
// //     skills: ["Agile", "Jira", "Leadership"]
// //   },
// // ]
// // 🔥 Fetch jobs from backend
// useEffect(() => {
//   const fetchJobs = async () => {
//     try {
//       const res = await API.get("/jobs"); // http://localhost:5000/jobs
//       setOpenRoles(res.data);
//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//     }
//   };

//   fetchJobs();
// }, []);

// const filteredRoles =
//   selectedCategory === "all"
//     ? openRoles
//     : openRoles.filter((role) => role.category === selectedCategory);

// const categories = ["all", ...new Set(openRoles.map((r) => r.category))];

// ---- Types for jobs coming from server ----
type JobFromApi = {
  _id: string;
  title: string;
  category: string;
  experience: string;
  description: string;
  skills: string[];
  location: string; // city name
  locationType: "Hybrid" | "Remote" | "On-site";
};

type RoleCard = {
  id: string;
  title: string;
  category: string;
  experience: string;
  description: string;
  skills: string[];
  location: string; // what we display in card
};

export const CareersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // NEW: jobs from API
  const [jobs, setJobs] = useState<JobFromApi[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState<string | null>(null);

  // ---- Fetch jobs using fetch() ----
  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoadingJobs(true);
        setJobsError(null);

        // If you need full URL, change to:
        // const res = await fetch("http://localhost:5000/jobs")
        const res = await fetch("http://localhost:5000/jobs");

        if (!res.ok) {
          throw new Error("Failed to load jobs");
        }

        const data: JobFromApi[] = await res.json();
        setJobs(data);
        // console.log("data :" + res.json());
      } catch (err) {
        console.error(err);
        setJobsError("Unable to load open positions right now.");
        console.log(jobsError);
      } finally {
        setLoadingJobs(false);
        console.log(loadingJobs);
      }
    };

    loadJobs();
  }, []);

  // Map backend jobs → UI-friendly roles
  const openRoles: RoleCard[] = jobs.map((job) => ({
    id: job._id,
    title: job.title,
    category: job.category,
    experience: job.experience,
    description: job.description,
    skills: job.skills || [],
    location: job.locationType, // show Hybrid / Remote / On-site
  }));

  // Filter + categories exactly like before
  const filteredRoles =
    selectedCategory === "all"
      ? openRoles
      : openRoles.filter((role) => role.category === selectedCategory);

  const categories = [
    "all",
    ...Array.from(new Set(openRoles.map((r) => r.category))),
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage",
      accent: "from-rose-500/40 to-pink-500/10",
    },
    {
      icon: Globe,
      title: "Remote / Hybrid Work",
      description: "Flexible work arrangements that suit your lifestyle",
      accent: "from-cyan-500/30 to-blue-500/10",
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "$2000+ annual budget for courses and certifications",
      accent: "from-amber-400/40 to-orange-500/10",
    },
    {
      icon: Award,
      title: "Paid Certifications",
      description: "SAP Hybris, Adobe AEM, AWS, and more",
      accent: "from-purple-500/40 to-indigo-500/10",
    },
    {
      icon: DollarSign,
      title: "Performance Bonus",
      description: "Up to 20% annual performance incentive",
      accent: "from-emerald-500/40 to-lime-500/10",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Work when you're most productive",
      accent: "from-sky-500/30 to-purple-500/10",
    },
    {
      icon: Users2,
      title: "Team Outings",
      description: "Regular team building and social events",
      accent: "from-pink-500/30 to-cyan-500/10",
    },
    {
      icon: Trophy,
      title: "Recognition Program",
      description: "Monthly awards and peer recognition",
      accent: "from-yellow-400/40 to-amber-500/10",
    },
  ];

  const cultureHighlights = [
    {
      icon: Zap,
      title: "Growth-Focused",
      description: "Continuous learning and career advancement opportunities",
      accent: "from-purple-500/30 to-indigo-500/20",
    },
    {
      icon: Users,
      title: "Transparent Culture",
      description: "Open communication and honest feedback",
      accent: "from-cyan-500/30 to-blue-500/10",
    },
    {
      icon: Brain,
      title: "Learning Opportunities",
      description: "Access to latest technologies and platforms",
      accent: "from-amber-400/30 to-pink-500/10",
    },
    {
      icon: Globe,
      title: "Global Projects",
      description: "Work with enterprise clients worldwide",
      accent: "from-emerald-500/30 to-teal-500/10",
    },
    {
      icon: Sparkles,
      title: "Innovation-Driven",
      description: "Freedom to experiment and innovate",
      accent: "from-rose-500/30 to-purple-500/10",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We respect your personal time and wellbeing",
      accent: "from-fuchsia-500/30 to-cyan-500/10",
    },
  ];

  const testimonials = [
    {
      name: "Venkat Krishna",
      role: "Director & Co-founder",
      image: "/images/rahul.png",
      quote:
        "The team here genuinely cares about your growth. I've built this company with a vision to create opportunities for talented professionals to work on cutting-edge enterprise solutions.",
    },
    {
      name: "Srikanth Banthu",
      role: "Director & Co-founder",
      image: "/images/raman.png",
      quote:
        "Working with talented professionals across the globe has been incredible. Our focus on technical excellence and mentorship creates an environment where innovation thrives.",
    },
    {
      name: "Priya Sharma",
      role: "Senior React Developer",
      image: "/images/priya.png",
      quote:
        "The team here genuinely cares about your growth. I've learned more in 2 years than in my entire previous career. The projects are challenging and the impact is real.",
    },
  ];

  const faqs = [
    {
      question: "What is your hiring process?",
      answer:
        "Our typical hiring process includes: 1) Initial screening call with HR, 2) Technical interview with team leads, 3) System design round (for senior roles), 4) Final discussion with hiring manager. Total timeline: 2-3 weeks.",
    },
    {
      question: "How many interview rounds?",
      answer:
        "Usually 3-4 rounds depending on the role. Each round focuses on different aspects: coding skills, system design, cultural fit, and role-specific expertise.",
    },
    {
      question: "Is remote work available?",
      answer:
        "Yes! We offer flexible arrangements. Most roles are Hybrid (2-3 days in office) or fully Remote. Work-from-home options are always available when needed.",
    },
    {
      question: "Do you offer internships?",
      answer:
        "Absolutely. We run a structured 3-6 month internship program with mentorship, project exposure, and potential for full-time conversion.",
    },
    {
      question: "Do you support certifications?",
      answer:
        "Yes, we cover costs for relevant certifications (SAP, Adobe, AWS, etc.) and provide study time. Many team members have earned professional certifications here.",
    },
    {
      question: "What are growth opportunities?",
      answer:
        "We promote from within. Clear career paths exist for technical (staff engineer, principal) and management (team lead, manager) tracks. Regular feedback and development planning is part of our culture.",
    },
  ];

  const stats = [
    { label: "Years in Industry", value: "12+" },
    { label: "Team Members", value: "150+" },
    { label: "Countries", value: "8+" },
    { label: "Happy Employees", value: "98%" },
  ];

  const aboutPills = [
    "Commerce-native pods",
    "Multi-cloud craftsmanship",
    "Design + build + run",
  ];

  const cultureGallery = [
    { image: "/images/cjssfam.jpeg", caption: "Townhalls & demos" },
    { image: "/images/Venkat.png", caption: "Leadership reviews" },
    { image: "/images/Srikanth.png", caption: "Architecture jams" },
    { image: "/images/priya.png", caption: "Frontend studio" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 px-6 pb-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white animate-slideUp">
              Build the Future of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                Digital Commerce
              </span>
            </h1>
            <p
              className="text-xl text-white mb-10 max-w-3xl mx-auto animate-slideUp leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Join our talented team working on SAP Hybris, AEM, React, and
              cloud-native commerce platforms for global brands
            </p>
            <button className="px-8 py-4 bg-purple-500 text-white rounded-full font-bold text-lg hover:bg-purple-600 transition-all hover:scale-105 shadow-lg shadow-purple-500/30 flex items-center gap-2 mx-auto">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="relative py-24 px-6 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 20%, rgba(168,85,247,0.35), transparent 45%)",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(14,165,233,0.15), transparent 60%)",
            }}
          ></div>
          <div className="absolute -top-32 -right-40 w-[520px] h-[520px] bg-cyan-500/30 rounded-full blur-[180px]"></div>
          <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] bg-purple-600/25 rounded-full blur-[160px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
                <span className="h-px w-14 bg-white/30"></span>
                About us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Product engineering
                <span className="ml-2 bg-linear-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  with people-first energy
                </span>
              </h2>
              <p className="text-lg text-white/75 leading-relaxed">
                We design, build, and scale SAP Hybris, AEM, React, and
                cloud-native programs for global commerce brands. Every pod
                blends architects, designers, and engineers who obsess over
                craft, delivery speed, and measurable business impact.
              </p>
              <div className="flex flex-wrap gap-3">
                {aboutPills.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 text-sm text-white/70 border border-white/15 rounded-full bg-white/5 backdrop-blur hover:border-purple-400/50 transition-all"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-40"></div>
                    <p className="text-3xl font-bold text-white relative">
                      {stat.value}
                    </p>
                    <p className="text-sm uppercase tracking-[0.35em] text-white/50 mt-2 relative">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-linear-to-br from-purple-500/30 via-transparent to-cyan-500/30 blur-3xl opacity-80"></div>
              <div className="relative rounded-4xl border border-white/10 bg-neutral-900/70 backdrop-blur-2xl p-6 overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  {cultureGallery.slice(0, 3).map((frame, idx) => (
                    <div
                      key={frame.caption}
                      className={`relative rounded-3xl overflow-hidden ${
                        idx === 0 ? "col-span-2 h-64" : "h-40"
                      }`}
                    >
                      <img
                        src={frame.image}
                        alt={frame.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                      <p className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.3em] text-white/80">
                        {frame.caption}
                      </p>
                    </div>
                  ))}
                  <div className="rounded-3xl border border-white/10 p-4 bg-white/5 text-white/80 flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">
                        Inside pods
                      </p>
                      <p className="text-lg font-semibold">
                        Weekly demos, design critiques, and co-innovation
                        sprints keep momentum high.
                      </p>
                    </div>
                    <p className="text-sm text-white/60">
                      Hybrid & remote ceremonies, synchronized.
                    </p>
                  </div>
                </div>

                <div className="absolute -top-10 left-8 rounded-2xl border border-white/10 bg-linear-to-r from-purple-500/30 to-cyan-500/30 backdrop-blur px-5 py-3 flex items-center gap-3 shadow-lg shadow-purple-500/20">
                  <Sparkles className="w-5 h-5 text-white" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                      Culture pulse
                    </p>
                    <p className="text-white font-semibold">
                      People-first rituals
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-8 right-6 rounded-2xl border border-white/10 bg-neutral-950/70 px-5 py-3 text-sm text-white/70 backdrop-blur">
                  <p className="font-semibold text-white">Ship every 2 weeks</p>
                  <p>Design, build, launch, repeat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Culture
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Screenshots from real squads, not stock photos. Collaboration,
              candor, and creativity are visible in every ritual.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-stretch">
            <div className="relative rounded-4xl border border-white/10 bg-neutral-900/50 p-6 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-40"></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10 h-full">
                {cultureGallery.map((frame, idx) => (
                  <div
                    key={frame.caption}
                    className={`relative overflow-hidden rounded-3xl border border-white/5 ${
                      idx === 0
                        ? "sm:col-span-2 sm:row-span-2 h-64 md:h-80"
                        : idx === 3
                        ? "col-span-2 h-40"
                        : "h-36 md:h-44"
                    }`}
                  >
                    <img
                      src={frame.image}
                      alt={frame.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                    <p className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.35em] text-white/80">
                      {frame.caption}
                    </p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-neutral-950/80 border border-white/10 rounded-2xl px-5 py-3 text-white/80 backdrop-blur z-20">
                <PartyPopper className="w-5 h-5 text-purple-300" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Quarterly townhalls
                  </p>
                  <p className="text-xs text-white/60">
                    Live music, demos, gratitude wall
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur">
                <p className="text-lg text-white/80 leading-relaxed">
                  Hybrid doesn't mean disconnected. Pods pair on Miro, gather in
                  experience centers, and rotate squad leaders to keep
                  mentorship flowing.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {[
                    "Leadership AMA Fridays",
                    "Design + code crits",
                    "Community volunteering",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {cultureHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur hover:-translate-y-2 transition-all"
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-30 blur-xl`}
                      ></div>
                      <div className="relative z-10">
                        <Icon className="w-10 h-10 text-white mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/75 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 left-1/2 w-[40%] bg-linear-to-l from-purple-500/15 to-transparent blur-3xl opacity-70"></div>
          <div className="absolute inset-y-0 right-1/2 w-[30%] bg-linear-to-r from-cyan-500/10 to-transparent blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Benefits & Perks
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Packages designed for builders who care about craftsmanship,
              community, and continuous learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div className="rounded-4xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur space-y-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
                <PartyPopper className="w-5 h-5 text-purple-300" />
                Perks Promise
              </div>
              <h3 className="text-3xl font-semibold text-white">
                Everything you need to grow with balance
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Wellness stipends, learning budgets, and transparent career
                ladders ensure you can focus on the work and the people you
                love.
              </p>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 text-purple-300 mt-1" />
                  <p>
                    <span className="text-white font-semibold">
                      Clear comp bands
                    </span>{" "}
                    with annual pay reviews and quarterly feedback loops.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-cyan-300 mt-1" />
                  <p>
                    <span className="text-white font-semibold">
                      Learning sabbaticals
                    </span>{" "}
                    for conferences, certifications, or passion projects.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-950/70 px-6 py-5 text-sm text-white/70 flex items-center justify-between">
                <span>Ask your recruiter for our detailed benefits PDF.</span>
                <ArrowRight className="w-4 h-4 text-purple-300" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur hover:-translate-y-2 transition-all"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${benefit.accent} opacity-30 blur-xl`}
                    ></div>
                    <div className="relative z-10">
                      <Icon className="w-10 h-10 text-white mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-white/75 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Open Positions
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12">
              We're looking for talented people to join our growing team
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      : "bg-neutral-900 text-white border border-neutral-800 hover:border-purple-500/30"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs Grid */}
          {filteredRoles.length === 0 ? (
            <div className="text-center py-20 text-white/70">
              No roles found for this category right now.
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {Array.from({ length: 3 }, (_, colIdx) =>
                filteredRoles
                  .map((role, idx) => ({ ...role, originalIndex: idx }))
                  .filter((_, idx) => idx % 3 === colIdx)
              ).map((column, colIdx) => (
                <div
                  key={colIdx}
                  className={`space-y-8 ${
                    colIdx === 1 ? "mt-12" : colIdx === 2 ? "mt-24" : ""
                  }`}
                >
                  {column.map((role) => (
                    <div
                      key={role.id}
                      className="group relative rounded-3xl border border-neutral-800 bg-neutral-900/70 backdrop-blur px-6 py-7 flex flex-col gap-5 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.01] hover:border-purple-400/40 hover:bg-linear-to-br hover:from-purple-600/10 hover:to-cyan-600/10 hover:shadow-2xl hover:shadow-purple-500/20"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-2">
                            Open role
                          </p>
                          <h3 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                            {role.title}
                          </h3>
                        </div>
                        <span className="text-sm font-semibold text-white/70 border border-white/10 rounded-full px-3 py-1">
                          {role.category}
                        </span>
                      </div>

                      <p className="text-sm text-white/70 leading-relaxed">
                        {role.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-white/60">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-purple-300" />
                          {role.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-300" />
                          {role.location}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                        {role.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] text-white/80 border border-white/10 rounded-full px-3 py-1"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="overflow-hidden border-t border-white/5 pt-4 text-sm text-white/70 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <p className="font-semibold text-white mb-1">
                          What you'll do
                        </p>
                        <p>
                          Work with cross-functional squads delivering SAP
                          Hybris, AEM, and cloud-native programs.
                        </p>
                      </div>

                      <button className="mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-2xl border border-purple-400/40 text-sm font-semibold text-white transition-all group-hover:bg-purple-500/20">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Team Says
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Hear from people who are building the future with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg shadow-neutral-900/50 border border-neutral-800 hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col"
              >
                {/* Image Section - Top Half */}
                <div className="relative h-96 overflow-hidden bg-neutral-900">
                  {testimonial.image.startsWith("/images/") ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl bg-neutral-900">
                      {testimonial.image}
                    </div>
                  )}
                </div>

                {/* Text Section - Bottom Half */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-white text-lg leading-relaxed italic mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white">
              Everything you need to know about joining us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-neutral-900 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white text-left">
                    {faq.question}
                  </h3>
                  <CheckCircle2
                    className={`w-6 h-6 text-purple-400 shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-8 py-6 bg-neutral-900 border-t border-neutral-800">
                    <p className="text-white leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl mx-6 mb-20 border border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            Find the perfect role for you and start your journey with us today
            send your application!
          </p>
          <p className="text-xl text-purple-300 mb-10 max-w-2xl mx-auto font-semibold">
            hr.cjsstechnologies.com
          </p>
        </div>
      </section>
    </>
  );
};
