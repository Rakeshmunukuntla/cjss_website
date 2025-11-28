// import { RESOURCES } from "../lib/Constants";

// interface ResourceDetailPageProps {
//   resourceId: number;
//   navigateTo: (page: string) => void;
// }

// export const ResourceDetailPage = ({
//   resourceId,
//   navigateTo,
// }: ResourceDetailPageProps) => {
//   const resource = RESOURCES.find((r) => r.id === resourceId);

//   if (!resource) {
//     return (
//       <div className="py-20 px-6 bg-neutral-950">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">
//             Resource Not Found
//           </h1>
//           <button
//             onClick={() => navigateTo("resources")}
//             className="px-6 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors"
//           >
//             Back to Resources
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const related = RESOURCES.filter(
//     (r) => r.category === resource.category && r.id !== resource.id
//   ).slice(0, 4);

//   return (
//     <article className="py-20 px-4 md:px-6 bg-neutral-950">
//       <div className="max-w-5xl mx-auto space-y-12">
//         <button
//           onClick={() => navigateTo("resources")}
//           className="text-sm text-white/70 hover:text-white transition-colors"
//         >
//           ← Back to resources
//         </button>

//         <div className="relative rounded-3xl overflow-hidden border border-neutral-800 h-[420px] shadow-2xl shadow-purple-500/10">
//           <img
//             src={resource.banner}
//             alt={resource.title}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
//           <div className="absolute top-6 left-6">
//             <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
//               {resource.category}
//             </span>
//             <p className="text-white/70 text-sm">
//               {resource.readTime} • {resource.publishedDate}
//             </p>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 p-8">
//             <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
//               {resource.title}
//             </h1>
//             <p className="mt-4 text-white/80 max-w-3xl">{resource.summary}</p>
//           </div>
//         </div>

//         <div className="grid gap-4 md:grid-cols-4">
//           {[
//             { label: "Author", value: resource.author },
//             { label: "Role", value: resource.designation },
//             { label: "Published", value: resource.publishedDate },
//             { label: "Read time", value: resource.readTime },
//           ].map((meta) => (
//             <div
//               key={meta.label}
//               className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4"
//             >
//               <p className="text-xs uppercase tracking-[0.3em] text-white/50">
//                 {meta.label}
//               </p>
//               <p className="text-white font-semibold mt-2">{meta.value}</p>
//             </div>
//           ))}
//         </div>

//         <div className="space-y-8">
//           <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8">
//             <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
//             <p className="text-white/80 leading-relaxed">{resource.content}</p>
//           </section>

//           <section className="grid md:grid-cols-2 gap-6">
//             {[
//               "Comprehensive analysis of modern technology trends and best practices",
//               "Practical implementation strategies for enterprise environments",
//               "Insights from industry experts and real-world case studies",
//               "Actionable recommendations for your organization",
//             ].map((text, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-3 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5"
//               >
//                 <span className="text-purple-300">✓</span>
//                 <p className="text-white/80 text-sm">{text}</p>
//               </div>
//             ))}
//           </section>
//         </div>

//         {related.length > 0 && (
//           <div className="mt-12">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-2xl font-bold text-white">
//                 Related resources
//               </h3>
//               <button
//                 onClick={() => navigateTo("resources")}
//                 className="text-sm text-purple-300 hover:text-white transition"
//               >
//                 View all
//               </button>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {related.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => navigateTo(`resource-${item.id}`)}
//                   className="relative h-48 rounded-2xl overflow-hidden text-left border border-neutral-800 group"
//                 >
//                   <img
//                     src={item.banner}
//                     alt={item.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
//                   <div className="relative z-10 h-full flex flex-col justify-end p-5">
//                     <p className="text-xs text-white/70 uppercase tracking-[0.3em]">
//                       {item.category}
//                     </p>
//                     <h4 className="text-white font-semibold text-lg">
//                       {item.title}
//                     </h4>
//                     <p className="text-white/70 text-sm line-clamp-2">
//                       {item.summary}
//                     </p>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </article>
//   );
// };

// export default ResourceDetailPage;

import { useEffect, useState } from "react";

interface ResourceDetailPageProps {
  resourceId: string; // 👈 use string, not number
  navigateTo: (page: string) => void;
}

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

export const ResourceDetailPage = ({
  resourceId,
  navigateTo,
}: ResourceDetailPageProps) => {
  const [resource, setResource] = useState<Resource | null>(null);
  const [related, setRelated] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        // 1) Fetch main blog
        // const res = await fetch(`http://localhost:5000/blogs/${resourceId}`);
        const res = await fetch(
          `https://server-node-cjss.onrender.com/blogs/${resourceId}`
        );
        const data = await res.json();
        setResource(data);

        // 2) Fetch all blogs for related section
        const listRes = await fetch(
          "https://server-node-cjss.onrender.com/blogs"
        );
        const allBlogs: Resource[] = await listRes.json();

        setRelated(
          allBlogs
            .filter((b) => b.category === data.category && b._id !== data._id)
            .slice(0, 4)
        );
      } catch (e) {
        console.error("Error fetching blog:", e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [resourceId]);

  // keep your existing UI below (I’ll just re-plug your current JSX using `resource` & `related`)

  if (loading) {
    return (
      <div className="py-20 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center text-white">
          Loading...
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="py-20 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Resource Not Found
          </h1>
          <button
            onClick={() => navigateTo("resources")}
            className="px-6 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors"
          >
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  const relatedItems = related; // just renaming for clarity

  return (
    <article className="py-20 px-4 md:px-6 bg-neutral-950">
      <div className="max-w-5xl mx-auto space-y-12">
        <button
          onClick={() => navigateTo("resources")}
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          ← Back to resources
        </button>

        {/* === your original UI, but using `resource` & `relatedItems` === */}

        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 h-[420px] shadow-2xl shadow-purple-500/10">
          <img
            src={resource.banner}
            alt={resource.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
              {resource.category}
            </span>
            <p className="text-white/70 text-sm">
              {resource.readTime} • {resource.publishedDate}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
              {resource.title}
            </h1>
            <p className="mt-4 text-white/80 max-w-3xl">{resource.summary}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Author", value: resource.author },
            { label: "Role", value: resource.designation },
            { label: "Published", value: resource.publishedDate },
            { label: "Read time", value: resource.readTime },
          ].map((meta) => (
            <div
              key={meta.label}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {meta.label}
              </p>
              <p className="text-white font-semibold mt-2">{meta.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-white/80 leading-relaxed">{resource.content}</p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            {[
              "Comprehensive analysis of modern technology trends and best practices",
              "Practical implementation strategies for enterprise environments",
              "Insights from industry experts and real-world case studies",
              "Actionable recommendations for your organization",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5"
              >
                <span className="text-purple-300">✓</span>
                <p className="text-white/80 text-sm">{text}</p>
              </div>
            ))}
          </section>
        </div>

        {relatedItems.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                Related resources
              </h3>
              <button
                onClick={() => navigateTo("resources")}
                className="text-sm text-purple-300 hover:text-white transition"
              >
                View all
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedItems.map((item) => (
                <button
                  key={item._id}
                  onClick={() => navigateTo(`resource-${item._id}`)}
                  className="relative h-48 rounded-2xl overflow-hidden text-left border border-neutral-800 group"
                >
                  <img
                    src={item.banner}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <p className="text-xs text-white/70 uppercase tracking-[0.3em]">
                      {item.category}
                    </p>
                    <h4 className="text-white font-semibold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-sm line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ResourceDetailPage;
