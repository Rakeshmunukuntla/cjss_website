"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Brain, MapPin } from "lucide-react";

type JobFromApi = {
  _id: string;
  title: string;
  category: string;
  experience: string;
  description: string;
  skills: string[];
  locationType: string;
};

type RoleCard = {
  id: string;
  title: string;
  category: string;
  experience: string;
  description: string;
  skills: string[];
  location: string;
};

interface JobOpeningsProps {
  filterMode?: "experinced" | "all";
}

const JobOpenings = ({ filterMode = "all" }: JobOpeningsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [jobs, setJobs] = useState<JobFromApi[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  // Fetch Jobs
  useEffect(() => {
    const loadJobs = async () => {
      setLoadingJobs(true);

      const res = await fetch("https://server-node-cjss.onrender.com/jobs");
      const data: JobFromApi[] = await res.json();

      setJobs(data);
      setLoadingJobs(false);
    };

    loadJobs();
  }, []);

  // Convert to UI model
  const openRoles: RoleCard[] = jobs.map((job) => ({
    id: job._id,
    title: job.title,
    category: job.category,
    experience: job.experience,
    description: job.description,
    skills: job.skills || [],
    location: job.locationType,
  }));

  // 🔥 Fresher filter function
  const isFresher = (exp: string) => {
    if (!exp) return false;
    const clean = exp.toLowerCase().replace(/\s+/g, "");
    return !clean.startsWith("0"); // 0, 0-1yrs, 0to1 etc.
  };

  const filteredByMode =
    filterMode === "experinced"
      ? openRoles.filter((r) => isFresher(r.experience))
      : openRoles;

  // Build categories for filter buttons
  const categories = ["all", ...new Set(filteredByMode.map((r) => r.category))];

  // Apply category filter
  const filteredRoles =
    selectedCategory === "all"
      ? filteredByMode
      : filteredByMode.filter((r) => r.category === selectedCategory);

  return (
    <section className="px-6 py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition-all font-semibold ${
                  selectedCategory === cat
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : "bg-neutral-900 text-white border border-neutral-800 hover:border-purple-400/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        {loadingJobs ? (
          <p className="text-center text-white/70">Loading jobs…</p>
        ) : filteredRoles.length === 0 ? (
          <p className="text-center text-white/70">No openings found.</p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="group rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 transition-all hover:-translate-y-2 hover:border-purple-400/40"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-white font-semibold">
                    {role.title}
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full border border-white/10 text-white/70">
                    {role.category}
                  </span>
                </div>

                <p className="text-white/70 mt-3">{role.description}</p>

                <div className="flex items-center justify-between mt-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-300" />
                    {role.experience}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-300" />
                    {role.location}
                  </span>
                </div>

                <button className="mt-5 w-full flex items-center justify-center gap-2 border border-purple-400/40 text-white rounded-2xl py-2 hover:bg-purple-500/20">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpenings;
