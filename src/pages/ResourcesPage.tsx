import { useEffect, useMemo, useState } from "react";
import { RESOURCE_CATEGORIES } from "../lib/Constants";

interface ResourcesPageProps {
  navigateTo: (page: string) => void;
}

interface Resource {
  // id: number;
  _id: string;
  category: string;
  title: string;
  summary: string;
  author: string;
  designation: string;
  publishedDate: string;
  banner: string;
  content: string;
  readTime: string;
}

export const ResourcesPage = ({ navigateTo }: ResourcesPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("blogs");

  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    // fetch("https://6923ecdc3ad095fb84720a16.mockapi.io/blogs/blogscjss")
    // fetch("http://localhost:5000/blogs")
    fetch("http://172.16.16.33:5000/blogs")
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.log("Error fetching blogs:", err));
  }, []);

  const filteredResources = useMemo(
    () => resources.filter((r) => r.category === selectedCategory),
    [resources, selectedCategory]
  );

  return (
    <section className="min-h-screen px-4 py-20 md:px-6 bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sidebar - Categories (Fixed/Sticky) */}
          <aside className="lg:w-80 shrink-0">
            <div className="space-y-8 lg:sticky lg:top-28">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
                  Categories
                </p>
                <div className="space-y-3">
                  {RESOURCE_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 font-semibold flex items-center gap-3 border ${
                        selectedCategory === category.id
                          ? "bg-purple-500/15 border-purple-400/40 text-white shadow-lg shadow-purple-500/15"
                          : "bg-neutral-900/80 border-neutral-800 text-white/70 hover:border-purple-400/30"
                      }`}
                    >
                      <span className="text-2xl">{category.icon}</span>
                      <span className="flex-1">{category.label}</span>
                      {selectedCategory === category.id && (
                        <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 border rounded-3xl border-neutral-800 bg-neutral-900/80">
                <p className="text-sm text-white/60">Resources available</p>
                <p className="mt-3 text-4xl font-bold text-white">
                  {filteredResources.length}
                </p>
                <p className="text-xs text-white/50">
                  {selectedCategory.toUpperCase()}
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content - Scrollable Right Section */}
          <div className="flex-1 lg:max-h-[80vh] lg:overflow-y-auto scrollbar-hide pr-2 space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                Library
              </p>
              <h2 className="mt-3 text-4xl font-bold text-white">
                {selectedCategory === "whitepapers"
                  ? "Whitepapers"
                  : selectedCategory === "publications"
                  ? "Publications"
                  : "Blogs"}
              </h2>
              <p className="max-w-2xl mt-2 text-white/70">
                {selectedCategory === "blogs" &&
                  "Read insightful articles from our technology experts"}
                {selectedCategory === "whitepapers" &&
                  "Detailed guides and comprehensive reports on industry topics"}
                {selectedCategory === "publications" &&
                  "Latest industry reports and research publications"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {filteredResources.map((resource) => (
                <button
                  key={resource._id}
                  onClick={() => navigateTo(`resource-${resource._id}`)}
                  className="relative overflow-hidden text-left border border-transparent group h-80 rounded-3xl focus:outline-none"
                >
                  <div className="absolute inset-0">
                    <img
                      src={resource.banner}
                      alt={resource.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-900/20 mix-blend-soft-light" />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                    <div className="absolute top-5 right-5 text-xs font-semibold tracking-[0.2em] text-white bg-purple-500/80 px-4 py-1 rounded-full">
                      {resource.category}
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col justify-end h-full p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {resource.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
                      <span className="font-semibold">{resource.author}</span>
                      <span className="opacity-60">•</span>
                      <span>{resource.readTime}</span>
                      <span className="opacity-60">•</span>
                      <span>{resource.publishedDate}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-neutral-300">
                  No resources found in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;
