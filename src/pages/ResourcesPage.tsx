// import { useEffect, useMemo, useState } from "react";
// import { RESOURCE_CATEGORIES } from "../lib/Constants";

// interface ResourcesPageProps {
//   navigateTo: (page: string) => void;
// }

// interface Resource {
//   // id: number;
//   _id: string;
//   category: string;
//   title: string;
//   summary: string;
//   author: string;
//   designation: string;
//   publishedDate: string;
//   banner: string;
//   content: string;
//   readTime: string;
// }

// export const ResourcesPage = ({ navigateTo }: ResourcesPageProps) => {
//   const [selectedCategory, setSelectedCategory] = useState("blogs");

//   const [resources, setResources] = useState<Resource[]>([]);

//   useEffect(() => {
//     // fetch("https://6923ecdc3ad095fb84720a16.mockapi.io/blogs/blogscjss")
//     // fetch("http://localhost:5000/blogs")
//     fetch("http://172.16.16.33:5000/blogs")
//       .then((res) => res.json())
//       .then((data) => setResources(data))
//       .catch((err) => console.log("Error fetching blogs:", err));
//   }, []);

//   const filteredResources = useMemo(
//     () => resources.filter((r) => r.category === selectedCategory),
//     [resources, selectedCategory],
//   );

//   return (
//     <section className="min-h-screen px-4 py-20 md:px-6 bg-neutral-950">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col gap-10 lg:flex-row">
//           {/* Sidebar - Categories (Fixed/Sticky) */}
//           <aside className="lg:w-60 shrink-0">
//             <div className="space-y-8 lg:sticky lg:top-28">
//               <div>
//                 <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
//                   Categories
//                 </p>
//                 <div className="space-y-3">
//                   {RESOURCE_CATEGORIES.map((category) => (
//                     <button
//                       key={category.id}
//                       onClick={() => setSelectedCategory(category.id)}
//                       className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 font-semibold flex items-center gap-3 border ${
//                         selectedCategory === category.id
//                           ? "bg-purple-500/15 border-purple-400/40 text-white shadow-lg shadow-purple-500/15"
//                           : "bg-neutral-900/80 border-neutral-800 text-white/70 hover:border-purple-400/30"
//                       }`}
//                     >
//                       <span className="text-2xl">{category.icon}</span>
//                       <span className="flex-1">{category.label}</span>
//                       {selectedCategory === category.id && (
//                         <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-purple-400"></span>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="p-6 border rounded-3xl border-neutral-800 bg-neutral-900/80">
//                 <p className="text-sm text-white/60">Resources available</p>
//                 <p className="mt-3 text-4xl font-bold text-white">
//                   {filteredResources.length}
//                 </p>
//                 <p className="text-xs text-white/50">
//                   {selectedCategory.toUpperCase()}
//                 </p>
//               </div>
//             </div>
//           </aside>

//           {/* Main Content - Scrollable Right Section */}
//           <div className="flex-1 lg:max-h-[80vh] lg:overflow-y-auto scrollbar-hide pr-2 space-y-10">
//             <div>
//               <p className="text-sm uppercase tracking-[0.4em] text-white/50">
//                 Library
//               </p>
//               <h2 className="mt-3 text-4xl font-bold text-white">
//                 {selectedCategory === "whitepapers"
//                   ? "Whitepapers"
//                   : selectedCategory === "publications"
//                     ? "Publications"
//                     : "Blogs"}
//               </h2>
//               <p className="max-w-2xl mt-2 text-white/70">
//                 {selectedCategory === "blogs" &&
//                   "Read insightful articles from our technology experts"}
//                 {selectedCategory === "whitepapers" &&
//                   "Detailed guides and comprehensive reports on industry topics"}
//                 {selectedCategory === "publications" &&
//                   "Latest industry reports and research publications"}
//               </p>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2">
//               {filteredResources.map((resource) => (
//                 <button
//                   key={resource._id}
//                   onClick={() => navigateTo(`resource-${resource._id}`)}
//                   className="relative overflow-hidden text-left border border-transparent group h-80 rounded-3xl focus:outline-none"
//                 >
//                   <div className="absolute inset-0">
//                     <img
//                       src={resource.banner}
//                       alt={resource.title}
//                       className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-neutral-900/20 mix-blend-soft-light" />
//                     <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
//                     <div className="absolute top-5 right-5 text-xs font-semibold tracking-[0.2em] text-white bg-purple-500/80 px-4 py-1 rounded-full">
//                       {resource.category}
//                     </div>
//                   </div>

//                   <div className="relative z-10 flex flex-col justify-end h-full p-6 space-y-3">
//                     <h3 className="text-2xl font-bold text-white drop-shadow-lg">
//                       {resource.title}
//                     </h3>
//                     <p className="text-sm text-white/80 line-clamp-2">
//                       {resource.summary}
//                     </p>
//                     <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
//                       <span className="font-semibold">{resource.author}</span>
//                       <span className="opacity-60">•</span>
//                       <span>{resource.readTime}</span>
//                       <span className="opacity-60">•</span>
//                       <span>{resource.publishedDate}</span>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>

//             {filteredResources.length === 0 && (
//               <div className="py-12 text-center">
//                 <p className="text-lg text-neutral-300">
//                   No resources found in this category
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResourcesPage;
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RESOURCE_CATEGORIES } from "../lib/Constants";

interface Resource {
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

export const ResourcesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("blogs");
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://172.16.16.33:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setIsLoading(false);
      });
  }, []);

  const filteredResources = useMemo(
    () => resources.filter((r) => r.category === selectedCategory),
    [resources, selectedCategory],
  );

  const handleResourceClick = (resourceId: string) => {
    navigate(`/resources/${resourceId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen px-4 py-20 md:px-6 bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sidebar - Categories (Fixed/Sticky) */}
          <aside className="lg:w-60 shrink-0">
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

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white/60">Loading resources...</p>
                </div>
              </div>
            )}

            {/* Resources Grid */}
            {!isLoading && (
              <div className="grid gap-8 md:grid-cols-2">
                {filteredResources.map((resource) => (
                  <button
                    key={resource._id}
                    onClick={() => handleResourceClick(resource._id)}
                    className="relative overflow-hidden text-left border border-transparent group h-80 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={resource.banner}
                        alt={resource.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-900/20 mix-blend-soft-light" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-5 right-5 text-xs font-semibold tracking-[0.2em] text-white bg-purple-500/80 px-4 py-1 rounded-full backdrop-blur-sm">
                        {resource.category}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-colors duration-300" />
                    </div>

                    <div className="relative z-10 flex flex-col justify-end h-full p-6 space-y-3">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-purple-200 transition-colors">
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

                      {/* Read More Indicator */}
                      <div className="flex items-center gap-2 text-sm font-medium text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Read More</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isLoading && filteredResources.length === 0 && (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/10 mb-6">
                  <svg
                    className="w-10 h-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  No Resources Found
                </h3>
                <p className="text-white/60 mb-6">
                  No resources available in this category yet.
                </p>
                <button
                  onClick={() => setSelectedCategory("blogs")}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  View All Blogs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ResourcesPage;
