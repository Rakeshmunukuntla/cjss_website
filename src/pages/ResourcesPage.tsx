import { useEffect, useMemo, useState } from "react";
import { RESOURCES, RESOURCE_CATEGORIES } from "../lib/Constants";

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
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.log("Error fetching blogs:", err));
  }, []);

  const filteredResources = useMemo(
    () => resources.filter((r) => r.category === selectedCategory),
    [resources, selectedCategory]
  );

  return (
    <section className="py-20 px-4 md:px-6 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar - Categories (Fixed/Sticky) */}
          <aside className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-28 space-y-8">
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

              <div className="p-6 rounded-3xl border border-neutral-800 bg-neutral-900/80">
                <p className="text-sm text-white/60">Resources available</p>
                <p className="text-4xl font-bold text-white mt-3">
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
              <h2 className="text-4xl font-bold text-white mt-3">
                {selectedCategory === "whitepapers"
                  ? "Whitepapers"
                  : selectedCategory === "publications"
                  ? "Publications"
                  : "Blogs"}
              </h2>
              <p className="text-white/70 mt-2 max-w-2xl">
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
                  className="group relative h-80 rounded-3xl overflow-hidden text-left border border-transparent focus:outline-none"
                >
                  <div className="absolute inset-0">
                    <img
                      src={resource.banner}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-900/20 mix-blend-soft-light" />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                    <div className="absolute top-5 right-5 text-xs font-semibold tracking-[0.2em] text-white bg-purple-500/80 px-4 py-1 rounded-full">
                      {resource.category}
                    </div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-end p-6 space-y-3">
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
              <div className="text-center py-12">
                <p className="text-neutral-300 text-lg">
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
