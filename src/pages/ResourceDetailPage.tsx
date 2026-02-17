// "use client";

// import { useEffect, useState } from "react";

// interface ResourceDetailPageProps {
//   resourceId: string;
//   navigateTo: (page: string) => void;
// }

// interface Resource {
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

// export const ResourceDetailPage = ({
//   resourceId,
//   navigateTo,
// }: ResourceDetailPageProps) => {
//   const [resource, setResource] = useState<Resource | null>(null);
//   const [related, setRelated] = useState<Resource[]>([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 shared button style (same as Events / Products)
//   const navBtn =
//     "rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await fetch(`http://172.16.16.33:5000/blogs/${resourceId}`);
//         const data = await res.json();
//         setResource(data);

//         const listRes = await fetch("http://172.16.16.33:5000/blogs");
//         const allBlogs: Resource[] = await listRes.json();

//         setRelated(
//           allBlogs
//             .filter((b) => b.category === data.category && b._id !== data._id)
//             .slice(0, 4),
//         );
//       } catch (e) {
//         console.error("Error fetching blog:", e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [resourceId]);

//   /* ================= LOADING ================= */
//   if (loading) {
//     return (
//       <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
//         <div className="max-w-4xl mx-auto px-6 py-20 text-white text-center">
//           Loading...
//         </div>
//       </section>
//     );
//   }

//   /* ================= NOT FOUND ================= */
//   if (!resource) {
//     return (
//       <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
//         <div className="max-w-4xl mx-auto px-6 py-20 text-center">
//           <h1 className="text-4xl font-bold text-white mb-6">
//             Resource Not Found
//           </h1>
//           <button onClick={() => navigateTo("resources")} className={navBtn}>
//             ← Back to Resources
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
//       {/* ================= BACK BUTTON (UNDER NAVBAR) ================= */}
//       <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-6">
//         <button onClick={() => navigateTo("resources")} className={navBtn}>
//           ← Back to Resources
//         </button>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <article className="px-4 md:px-6 py-16">
//         <div className="max-w-5xl mx-auto space-y-12">
//           {/* Banner */}
//           <div className="relative rounded-3xl overflow-hidden border border-neutral-800 h-[420px] shadow-2xl shadow-purple-500/10">
//             <img
//               src={resource.banner}
//               alt={resource.title}
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

//             <div className="absolute top-6 left-6">
//               <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
//                 {resource.category}
//               </span>
//               <p className="text-white/70 text-sm">
//                 {resource.readTime} • {resource.publishedDate}
//               </p>
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 p-8">
//               <h1 className="text-4xl md:text-5xl font-bold text-white">
//                 {resource.title}
//               </h1>
//               <p className="mt-4 text-white/80 max-w-3xl">{resource.summary}</p>
//             </div>
//           </div>

//           {/* Meta */}
//           <div className="grid gap-4 md:grid-cols-4">
//             {[
//               { label: "Author", value: resource.author },
//               { label: "Role", value: resource.designation },
//               { label: "Published", value: resource.publishedDate },
//               { label: "Read time", value: resource.readTime },
//             ].map((meta) => (
//               <div
//                 key={meta.label}
//                 className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4"
//               >
//                 <p className="text-xs uppercase tracking-[0.3em] text-white/50">
//                   {meta.label}
//                 </p>
//                 <p className="text-white font-semibold mt-2">{meta.value}</p>
//               </div>
//             ))}
//           </div>

//           {/* Content */}
//           {/* <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8">
//             <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
//             <p className="text-white/80 leading-relaxed">{resource.content}</p>
//           </section> */}
//           <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8">
//             <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>

//             <div className="text-white/80 leading-relaxed whitespace-pre-line">
//               {resource.content}
//             </div>
//           </section>

//           {/* Related */}
//           {related.length > 0 && (
//             <div className="mt-12">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl font-bold text-white">
//                   Related resources
//                 </h3>
//                 <button
//                   onClick={() => navigateTo("resources")}
//                   className={navBtn}
//                 >
//                   View all
//                 </button>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {related.map((item) => (
//                   <button
//                     key={item._id}
//                     onClick={() => navigateTo(`resource-${item._id}`)}
//                     className="relative h-48 rounded-2xl overflow-hidden text-left border border-neutral-800 group"
//                   >
//                     <img
//                       src={item.banner}
//                       alt={item.title}
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
//                     <div className="relative z-10 h-full flex flex-col justify-end p-5">
//                       <p className="text-xs text-white/70 uppercase tracking-[0.3em]">
//                         {item.category}
//                       </p>
//                       <h4 className="text-white font-semibold text-lg">
//                         {item.title}
//                       </h4>
//                       <p className="text-white/70 text-sm line-clamp-2">
//                         {item.summary}
//                       </p>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </article>
//     </section>
//   );
// };

// export default ResourceDetailPage;
"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export const ResourceDetailPage = () => {
  const navigate = useNavigate();
  const { resourceId } = useParams<{ resourceId: string }>();

  const [resource, setResource] = useState<Resource | null>(null);
  const [related, setRelated] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 shared button style
  const navBtn =
    "rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/70";

  // Navigation helper
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!resourceId) return;

    const load = async () => {
      try {
        const res = await fetch(`http://172.16.16.33:5000/blogs/${resourceId}`);
        if (!res.ok) throw new Error("Resource not found");

        const data = await res.json();
        setResource(data);

        // Fetch related resources
        const listRes = await fetch("http://172.16.16.33:5000/blogs");
        const allBlogs: Resource[] = await listRes.json();

        setRelated(
          allBlogs
            .filter((b) => b.category === data.category && b._id !== data._id)
            .slice(0, 4),
        );
      } catch (e) {
        console.error("Error fetching blog:", e);
        setResource(null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [resourceId]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
          <p className="text-white/60">Loading resource...</p>
        </div>
      </section>
    );
  }

  /* ================= NOT FOUND ================= */
  if (!resource) {
    return (
      <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
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
          <h1 className="text-4xl font-bold text-white mb-4">
            Resource Not Found
          </h1>
          <p className="text-white/60 mb-6">
            The resource you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => handleNavigate("/resources")}
            className={navBtn}
          >
            ← Back to Resources
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-neutral-950 pt-20 md:pt-0">
      {/* ================= BACK BUTTON (UNDER NAVBAR) ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-4 md:pt-6">
        <button onClick={() => handleNavigate("/resources")} className={navBtn}>
          ← Back to Resources
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <article className="px-4 md:px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-neutral-800 h-[420px] shadow-2xl shadow-purple-500/10">
            <img
              src={resource.banner}
              alt={resource.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            <div className="absolute top-6 left-6">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/80 backdrop-blur-sm text-xs font-semibold tracking-[0.3em] uppercase text-white">
                {resource.category}
              </span>
              <p className="text-white/70 text-sm mt-2">
                {resource.readTime} • {resource.publishedDate}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                {resource.title}
              </h1>
              <p className="mt-4 text-white/80 max-w-3xl text-lg">
                {resource.summary}
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { label: "Author", value: resource.author, icon: "👤" },
              { label: "Role", value: resource.designation, icon: "💼" },
              { label: "Published", value: resource.publishedDate, icon: "📅" },
              { label: "Read time", value: resource.readTime, icon: "⏱️" },
            ].map((meta) => (
              <div
                key={meta.label}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{meta.icon}</span>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {meta.label}
                  </p>
                </div>
                <p className="text-white font-semibold">{meta.value}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="inline-block w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></span>
              Overview
            </h2>

            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-white/80 prose-ol:text-white/80
                prose-li:marker:text-purple-400 prose-li:mb-2
                prose-code:text-purple-400 prose-code:bg-purple-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-neutral-800 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                prose-blockquote:border-l-4 prose-blockquote:border-purple-400 prose-blockquote:pl-4 prose-blockquote:italic
              "
            >
              {/* Render HTML content if it contains HTML tags, otherwise render as plain text with line breaks */}
              {resource.content.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: resource.content }} />
              ) : (
                <div className="whitespace-pre-line">{resource.content}</div>
              )}
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-2">
                    Related Content
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    More from this category
                  </h3>
                </div>
                <button
                  onClick={() => handleNavigate("/resources")}
                  className={navBtn}
                >
                  View all
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {related.map((item) => (
                  <button
                    key={item._id}
                    onClick={() => handleNavigate(`/resources/${item._id}`)}
                    className="relative h-56 rounded-2xl overflow-hidden text-left border border-neutral-800 group hover:border-purple-500/50 transition-all"
                  >
                    <img
                      src={item.banner}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-colors duration-300" />

                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <div className="inline-block mb-2">
                        <span className="px-3 py-1 rounded-full bg-purple-500/80 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.2em] text-white">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm line-clamp-2">
                        {item.summary}
                      </p>

                      {/* Read more indicator */}
                      <div className="flex items-center gap-2 mt-3 text-sm font-medium text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
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
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex justify-center pt-8">
            <button
              onClick={() => handleNavigate("/resources")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-purple-500/50"
            >
              Explore More Resources
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ResourceDetailPage;
