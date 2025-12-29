// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Brain, MapPin, Search, X } from "lucide-react";

// type JobFromApi = {
//   _id: string;
//   title: string;
//   category: string;
//   experience: string;
//   description: string;
//   skills: string[];
//   locationType: string;
//   createdAt?: string;
// };

// type RoleCard = {
//   id: string;
//   title: string;
//   category: string;
//   experience: string;
//   description: string;
//   skills: string[];
//   location: string;
//   createdAt?: string;
// };

// type SortOption =
//   | "relevance"
//   | "title-asc"
//   | "title-desc"
//   | "exp-asc"
//   | "exp-desc";

// type FilterMode = "fresher" | "experienced" | "all";

// interface JobOpeningsBaseProps {
//   filterMode: FilterMode;
//   pageSize?: number;
// }

// const JobOpeningsBase = ({
//   filterMode,
//   pageSize = 6,
// }: JobOpeningsBaseProps) => {
//   const [jobs, setJobs] = useState<JobFromApi[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState<SortOption>("relevance");
//   const [currentPage, setCurrentPage] = useState(1);

//   const [selectedJob, setSelectedJob] = useState<RoleCard | null>(null);
//   const [applyJob, setApplyJob] = useState<RoleCard | null>(null);

//   // Multi-step apply form state
//   const [applyStep, setApplyStep] = useState(1);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [qualification, setQualification] = useState("");
//   const [resumeFile, setResumeFile] = useState<File | null>(null);
//   const [formError, setFormError] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   const [showSuccess, setShowSuccess] = useState(false);

//   // Reset apply form whenever a new job is opened in Apply modal
//   useEffect(() => {
//     if (applyJob) {
//       setApplyStep(1);
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhone("");
//       setQualification("");
//       setResumeFile(null);
//       setFormError("");
//       setSubmitting(false);
//     }
//   }, [applyJob]);

//   // Fetch jobs
//   useEffect(() => {
//     async function loadJobs() {
//       try {
//         setLoading(true);
//         const res = await fetch("https://server-node-cjss.onrender.com/jobs");
//         const data = await res.json();
//         setJobs(data);
//       } catch (e) {
//         console.error("Error fetching jobs", e);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadJobs();
//   }, []);

//   // Convert API → UI model
//   const openRoles: RoleCard[] = useMemo(
//     () =>
//       jobs.map((j) => ({
//         id: j._id,
//         title: j.title,
//         category: j.category,
//         experience: j.experience,
//         description: j.description,
//         skills: j.skills || [],
//         location: j.locationType,
//         createdAt: j.createdAt,
//       })),
//     [jobs]
//   );

//   const isFresher = (exp: string) => exp.trim().startsWith("0");
//   const isExperienced = (exp: string) => !exp.trim().startsWith("0");

//   // Filter by mode
//   const rolesByMode = useMemo(() => {
//     if (filterMode === "fresher")
//       return openRoles.filter((r) => isFresher(r.experience));
//     if (filterMode === "experienced")
//       return openRoles.filter((r) => isExperienced(r.experience));
//     return openRoles;
//   }, [filterMode, openRoles]);

//   // Categories
//   const categories = ["all", ...new Set(rolesByMode.map((r) => r.category))];

//   // Category filter
//   const rolesByCategory =
//     selectedCategory === "all"
//       ? rolesByMode
//       : rolesByMode.filter((r) => r.category === selectedCategory);

//   // Search filter
//   const rolesBySearch = rolesByCategory.filter((r) =>
//     (r.title + " " + r.description + " " + r.skills.join(" "))
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   const expNum = (exp: string) => Number(exp.match(/\d+/)?.[0] ?? 0);

//   // Sort
//   const sortedRoles = useMemo(() => {
//     let arr = [...rolesBySearch];
//     switch (sortBy) {
//       case "title-asc":
//         return arr.sort((a, b) => a.title.localeCompare(b.title));
//       case "title-desc":
//         return arr.sort((a, b) => b.title.localeCompare(a.title));
//       case "exp-asc":
//         return arr.sort((a, b) => expNum(a.experience) - expNum(b.experience));
//       case "exp-desc":
//         return arr.sort((a, b) => expNum(b.experience) - expNum(a.experience));
//       default:
//         return arr;
//     }
//   }, [rolesBySearch, sortBy]);

//   // Pagination
//   const totalPages = Math.ceil(sortedRoles.length / pageSize) || 1;
//   const paginatedRoles = sortedRoles.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize
//   );

//   // Submit handler
//   const handleSubmitApplication = async () => {
//     if (!applyJob) return;

//     // extra sanity validation
//     if (!firstName || !lastName) {
//       setFormError("Please enter your full name.");
//       return;
//     }
//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       setFormError("Please enter a valid email address.");
//       return;
//     }
//     if (!phone.match(/^[0-9]{10}$/)) {
//       setFormError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!qualification) {
//       setFormError("Please select your highest qualification.");
//       return;
//     }
//     if (!resumeFile) {
//       setFormError("Please upload your resume.");
//       return;
//     }

//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     ];

//     if (!allowedTypes.includes(resumeFile.type)) {
//       setFormError("Only PDF, DOC, or DOCX files are allowed.");
//       return;
//     }

//     setFormError("");
//     setSubmitting(true);

//     try {
//       const formData = new FormData();
//       formData.append("jobId", applyJob.id);
//       formData.append("jobTitle", applyJob.title);
//       formData.append("firstName", firstName);
//       formData.append("lastName", lastName);
//       formData.append("email", email);
//       formData.append("phone", phone);
//       formData.append("qualification", qualification);
//       formData.append("resume", resumeFile);

//       const res = await fetch(
//         "https://server-node-cjss.onrender.com/applications/apply",
//         // "http://localhost:5000/applications/apply",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();

//       if (!res.ok || data.error) {
//         setFormError(data.error || "Something went wrong. Please try again.");
//         setSubmitting(false);
//         return;
//       }

//       // alert("Application submitted successfully!");
//       // setApplyJob(null);

//       setShowSuccess(true);
//       setApplyJob(null);

//       setTimeout(() => {
//         setShowSuccess(false);
//       }, 2500);
//     } catch (err) {
//       console.error(err);
//       setFormError("Server error. Please try again later.");
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <section
//         className="
//        px-6 py-20 text-white
//     bg-gradient-to-br
//     from-[#8b5cf6]/30
//     via-[#5ee7ff]/20
//     to-[#7dffb2]/30
//     backdrop-blur-xl
//     relative
//   "
//       >
//         <div className="mx-auto max-w-7xl">
//           {/* HEADER */}
//           <h2 className="mt-10 mb-3 text-4xl font-bold text-center">
//             {filterMode === "fresher"
//               ? "Fresher Job Opportunities"
//               : filterMode === "experienced"
//               ? "Experienced Job Openings"
//               : "Open Positions"}
//           </h2>

//           <p className="mb-12 text-center text-white/60">
//             Search, filter & apply for your dream role.
//           </p>

//           {/* SEARCH + SORT */}
//           <div className="flex flex-col items-center justify-center w-full gap-2 lg:flex-row">
//             {/* SEARCH */}
//             <div className="relative w-full lg:w-[55%]">
//               <Search className="absolute -translate-y-1/2 left-4 top-1/2 text-white/40" />
//               <input
//                 placeholder="Search by title, skills, or description…"
//                 className="w-full py-3 pl-12 pr-4 text-white border outline-none bg-neutral-900 border-neutral-700 rounded-xl focus:border-purple-400"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* SORT */}
//             <div className="w-full lg:w-[25%] ">
//               <select
//                 className="w-full px-4 py-3 border outline-none bg-neutral-900 border-neutral-700 rounded-xl focus:border-purple-400 "
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as SortOption)}
//               >
//                 <option value="relevance">Sort: Relevance</option>
//                 <option value="title-asc">Title A → Z</option>
//                 <option value="title-desc">Title Z → A</option>
//                 <option value="exp-asc">Experience Low → High</option>
//                 <option value="exp-desc">Experience High → Low</option>
//               </select>
//             </div>
//           </div>

//           {/* CATEGORY FILTER */}
//           <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => {
//                   setSelectedCategory(cat);
//                   setCurrentPage(1);
//                 }}
//                 className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
//                   selectedCategory === cat
//                     ? "bg-purple-600 text-white shadow-md"
//                     : "bg-neutral-900 border border-neutral-700 hover:border-purple-400"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* JOB CARDS */}
//           {loading ? (
//             <p className="text-center text-white/60">Loading jobs…</p>
//           ) : paginatedRoles.length === 0 ? (
//             <p className="text-center text-white/60">
//               No jobs found for the selected filters.
//             </p>
//           ) : (
//             <div className="grid gap-8 mt-6 lg:grid-cols-3">
//               <AnimatePresence>
//                 {paginatedRoles.map((job, index) => (
//                   <motion.div
//                     key={job.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     className={`
//                   group rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6
//       transition-all duration-300
//   hover:-translate-y-3
//   hover:shadow-[0_0_25px_rgba(155,92,255,0.5)]
//   hover:border-purple-400/60
//   hover:bg-neutral-900/80`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-xl font-semibold">{job.title}</h3>
//                       <span className="px-3 py-1 text-xs border rounded-full border-white/10 text-white/70">
//                         {job.category}
//                       </span>
//                     </div>

//                     <p className="mt-3 text-white/70 line-clamp-3">
//                       {job.description}
//                     </p>

//                     <div className="flex items-center justify-between mt-4 text-sm text-white/60">
//                       <span className="flex items-center gap-2">
//                         <Brain className="w-4 h-4 text-purple-300 group-hover:drop-shadow-[0_0_6px_rgba(155,92,255,0.8)] transition" />
//                         {job.experience}
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <MapPin className="w-4 h-4 text-blue-300 group-hover:drop-shadow-[0_0_6px_rgba(94,231,255,0.8)] transition" />
//                         {job.location}
//                       </span>
//                     </div>

//                     <div className="flex gap-3 mt-5">
//                       <button
//                         onClick={() => setSelectedJob(job)}
//                         className="w-1/2 py-2 border rounded-xl bg-neutral-800 border-neutral-700 hover:border-purple-400"
//                       >
//                         View
//                       </button>
//                       <button
//                         onClick={() => setApplyJob(job)}
//                         className="w-1/2 py-2 rounded-xl
// bg-gradient-to-r from-purple-400 to-cyan-300
// text-neutral-900 font-semibold
// shadow-lg shadow-purple-400/20
// hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
// hover:scale-[1.05]
// transition-all duration-300"
//                       >
//                         Apply
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}

//           {/* PAGINATION */}
//           <div className="flex justify-center gap-3 mt-12">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentPage(idx + 1)}
//                 className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm ${
//                   currentPage === idx + 1
//                     ? "border-purple-600 bg-purple-500/30"
//                     : "border-neutral-700 bg-neutral-900"
//                 }`}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         <AnimatePresence>
//           {selectedJob && (
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <motion.div
//                 initial={{ scale: 0.85, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ type: "spring", stiffness: 120, damping: 15 }}
//                 className="
//           w-full max-w-2xl relative p-8 rounded-3xl
//           bg-gradient-to-br from-[#1a1a1a]/80 via-[#222]/50 to-[#0f0f0f]/80
//           shadow-[0_0_35px_rgba(155,92,255,0.5)]
//           border border-white/10
//           backdrop-blur-2xl
//         "
//               >
//                 {/* Close */}
//                 <button
//                   onClick={() => setSelectedJob(null)}
//                   className="
//             absolute top-4 right-4 p-2 rounded-full
//             bg-white/10 backdrop-blur-md border border-white/20
//             hover:bg-purple-500/30
//             shadow-[0_0_12px_rgba(155,92,255,0.7)]
//             transition-all
//           "
//                 >
//                   <X className="w-5 h-5 text-white" />
//                 </button>

//                 {/* Title */}
//                 <h3 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-blue-300 to-green-300 bg-clip-text">
//                   {selectedJob.title}
//                 </h3>

//                 <p className="mt-1 inline-block px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-300 shadow-[0_0_10px_rgba(155,92,255,0.5)]">
//                   {selectedJob.category}
//                 </p>

//                 {/* Experience */}
//                 <div className="flex items-center gap-3 mt-4 text-white/80">
//                   <span className="flex items-center gap-2 text-purple-300">
//                     <Brain className="w-5 h-5" /> Experience:
//                   </span>
//                   <span className="font-semibold">
//                     {selectedJob.experience}
//                   </span>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-center gap-3 mt-3 text-white/80">
//                   <span className="flex items-center gap-2 text-green-300">
//                     <MapPin className="w-5 h-5" /> Location:
//                   </span>
//                   <span className="font-semibold">{selectedJob.location}</span>
//                 </div>

//                 {/* Posted Date */}
//                 {selectedJob.createdAt && (
//                   <p className="mt-3 text-sm text-white/50">
//                     Posted on:{" "}
//                     <span className="text-white">
//                       {new Date(selectedJob.createdAt).toDateString()}
//                     </span>
//                   </p>
//                 )}

//                 {/* Description */}
//                 <h4 className="mt-8 mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
//                   Job Description
//                 </h4>

//                 <p className="leading-relaxed text-white/70">
//                   {selectedJob.description}
//                 </p>

//                 {/* Skills */}
//                 <h4 className="mt-8 mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-300">
//                   Skills Required
//                 </h4>

//                 <div className="flex flex-wrap gap-3 mt-2">
//                   {selectedJob.skills.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="
//                 px-4 py-1 text-sm rounded-full
//                 bg-white/10 border border-white/20 backdrop-blur-md
//                 shadow-[0_0_10px_rgba(94,231,255,0.4)]
//               "
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Apply Button */}
//                 <button
//                   onClick={() => {
//                     setApplyJob(selectedJob);
//                     setSelectedJob(null);
//                   }}
//                   className="
//             w-full mt-10 py-3 text-lg font-bold
//             rounded-xl
//             bg-gradient-to-r from-purple-500 via-blue-400 to-green-400
//             text-neutral-900
//             shadow-[0_0_20px_rgba(155,92,255,0.7)]
//             hover:shadow-[0_0_25px_rgba(155,92,255,1)]
//             hover:scale-[1.03]
//             transition-all
//           "
//                 >
//                   Apply Now 🚀
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {/* APPLY FORM POPUP (MULTI-STEP) */}
//         <AnimatePresence>
//           {applyJob && (
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className=" w-full max-w-xl p-8 relative rounded-3xl
//     bg-gradient-to-br from-[#1a1a1a]/80 via-[#222222]/60 to-[#1a1a1a]/80
//     backdrop-blur-2xl
//     border border-white/10
//     shadow-[0_0_25px_rgba(155,92,255,0.35)]
//     transition-all"
//               >
//                 <button
//                   onClick={() => setApplyJob(null)}
//                   className="
//   absolute top-4 right-4
//   bg-white/10 backdrop-blur-md
//   p-2 rounded-full
//   hover:bg-purple-500/30
//   transition
//   shadow-[0_0_10px_rgba(155,92,255,0.4)]
// "
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 <h3 className="mb-5 text-2xl font-bold">
//                   Apply for {applyJob.title}
//                 </h3>

//                 {/* Step indicators */}
//                 <div className="flex justify-center gap-3 mb-6">
//                   {[1, 2, 3, 4].map((s) => (
//                     <div
//                       key={s}
//                       className={`
//   w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
//   transition-all duration-300
//   ${
//     applyStep === s
//       ? "bg-gradient-to-br from-purple-500 via-blue-400 to-green-400 text-black shadow-[0_0_12px_rgba(155,92,255,0.7)] scale-105"
//       : "bg-white/10 text-white/40 backdrop-blur-md"
//   }
// `}
//                     >
//                       {s}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Error banner */}
//                 {formError && (
//                   <p className="p-2 mb-4 text-sm text-red-400 border rounded-lg bg-red-400/10 border-red-500/40">
//                     {formError}
//                   </p>
//                 )}

//                 {/* STEP 1 – Personal Info */}
//                 {applyStep === 1 && (
//                   <div className="space-y-5">
//                     <div>
//                       <label className="text-white/70">First Name</label>
//                       <input
//                         className="
//   w-full px-4 py-2 mt-1 rounded-xl
//   bg-white/10 backdrop-blur-md
//   border border-white/20
//   focus:border-purple-400
//   focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
//   outline-none
//   transition-all
// "
//                         placeholder="Enter first name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                     </div>

//                     <div>
//                       <label className="text-white/70">Last Name</label>
//                       <input
//                         className="
//   w-full px-4 py-2 mt-1 rounded-xl
//   bg-white/10 backdrop-blur-md
//   border border-white/20
//   focus:border-purple-400
//   focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
//   outline-none
//   transition-all
// "
//                         placeholder="Enter last name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                     </div>

//                     <div>
//                       <label className="text-white/70">Email</label>
//                       <input
//                         type="email"
//                         className="
//   w-full px-4 py-2 mt-1 rounded-xl
//   bg-white/10 backdrop-blur-md
//   border border-white/20
//   focus:border-purple-400
//   focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
//   outline-none
//   transition-all
// "
//                         placeholder="you@example.com"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                     </div>

//                     <div>
//                       <label className="text-white/70">Mobile Number</label>
//                       <input
//                         type="tel"
//                         className="
//   w-full px-4 py-2 mt-1 rounded-xl
//   bg-white/10 backdrop-blur-md
//   border border-white/20
//   focus:border-purple-400
//   focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
//   outline-none
//   transition-all
// "
//                         placeholder="9876543210"
//                         maxLength={10}
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                       />
//                     </div>

//                     <div className="flex justify-end mt-6">
//                       <button
//                         onClick={() => {
//                           if (!firstName || !lastName) {
//                             setFormError("Please enter your full name.");
//                             return;
//                           }
//                           if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//                             setFormError("Please enter a valid email address.");
//                             return;
//                           }
//                           if (!phone.match(/^[0-9]{10}$/)) {
//                             setFormError(
//                               "Please enter a valid 10-digit mobile number."
//                             );
//                             return;
//                           }
//                           setFormError("");
//                           setApplyStep(2);
//                         }}
//                         className="
//   px-6 py-2 rounded-xl font-semibold
//   bg-gradient-to-r from-purple-500 via-blue-400 to-green-400
//   text-neutral-900
//   shadow-[0_0_15px_rgba(155,92,255,0.5)]
//   hover:shadow-[0_0_20px_rgba(155,92,255,0.7)]
//   hover:scale-[1.03]
//   transition-all duration-300
// "
//                       >
//                         Next →
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 2 – Education */}
//                 {applyStep === 2 && (
//                   <div className="space-y-5">
//                     <div>
//                       <label className="text-white/70">
//                         Highest Education Qualification
//                       </label>
//                       <select
//                         className="
//   w-full px-4 py-2 mt-1 rounded-xl
//   bg-white
//   border border-white/20
//   focus:border-purple-400
//   focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
//   outline-none
//   transition-all text-black
// "
//                         value={qualification}
//                         onChange={(e) => setQualification(e.target.value)}
//                       >
//                         <option value="">Select Highest Qualification</option>
//                         <option value="B.Tech">B.Tech / B.E</option>
//                         <option value="M.Tech">M.Tech / M.E</option>
//                         <option value="MCA">MCA</option>
//                         <option value="MBA">MBA</option>
//                         <option value="Degree">Degree</option>
//                       </select>
//                     </div>

//                     <div className="flex justify-between mt-6">
//                       <button
//                         onClick={() => setApplyStep(1)}
//                         className="px-6 py-2 transition-all border rounded-xl bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
//                       >
//                         ← Back
//                       </button>
//                       <button
//                         onClick={() => {
//                           if (!qualification) {
//                             setFormError(
//                               "Please select your highest qualification."
//                             );
//                             return;
//                           }
//                           setFormError("");
//                           setApplyStep(3);
//                         }}
//                         className="
//   px-6 py-2 rounded-xl font-semibold
//   bg-gradient-to-r from-purple-500 via-blue-400 to-green-400
//   text-neutral-900
//   shadow-[0_0_15px_rgba(155,92,255,0.5)]
//   hover:shadow-[0_0_20px_rgba(155,92,255,0.7)]
//   hover:scale-[1.03]
//   transition-all duration-300
// "
//                       >
//                         Next →
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 3 – Resume Upload */}
//                 {applyStep === 3 && (
//                   <div className="space-y-5">
//                     <div>
//                       <label className="text-white/70">
//                         Upload Resume (PDF / DOC / DOCX)
//                       </label>
//                       <input
//                         type="file"
//                         accept=".pdf,.doc,.docx"
//                         className="
//   w-full px-4 py-2 mt-1 rounded-xl
//   bg-white/10 backdrop-blur-md
//   border border-white/20
//   focus:border-purple-400
//   focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
//   outline-none
//   transition-all
// "
//                         onChange={(e) =>
//                           setResumeFile(e.target.files?.[0] ?? null)
//                         }
//                       />
//                     </div>

//                     <div className="flex justify-between mt-6">
//                       <button
//                         onClick={() => setApplyStep(2)}
//                         className="px-6 py-2 transition-all border rounded-xl bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
//                       >
//                         ← Back
//                       </button>
//                       <button
//                         onClick={() => {
//                           if (!resumeFile) {
//                             setFormError("Please upload your resume.");
//                             return;
//                           }
//                           setFormError("");
//                           setApplyStep(4);
//                         }}
//                         className="px-6 py-2 bg-purple-600 rounded-xl hover:bg-purple-700"
//                       >
//                         Next →
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 4 – Review & Submit */}
//                 {applyStep === 4 && (
//                   <div className="space-y-6">
//                     <h4 className="text-xl font-semibold">
//                       Review Your Details
//                     </h4>

//                     <div
//                       className="
//   bg-white/10 p-4 rounded-xl
//   backdrop-blur-xl
//   border border-white/20
//   shadow-[0_0_15px_rgba(94,231,255,0.3)]
// "
//                     >
//                       <p>
//                         <strong>Name:</strong> {firstName} {lastName}
//                       </p>
//                       <p>
//                         <strong>Email:</strong> {email}
//                       </p>
//                       <p>
//                         <strong>Mobile:</strong> {phone}
//                       </p>
//                       <p>
//                         <strong>Qualification:</strong> {qualification}
//                       </p>
//                       <p>
//                         <strong>Resume:</strong>{" "}
//                         {resumeFile?.name ?? "No file selected"}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <button
//                         onClick={() => setApplyStep(3)}
//                         className="px-6 py-2 transition-all border rounded-xl bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
//                       >
//                         ← Back
//                       </button>

//                       <button
//                         disabled={submitting}
//                         onClick={handleSubmitApplication}
//                         className={`px-6 py-2 rounded-xl ${
//                           submitting
//                             ? "bg-purple-400 cursor-not-allowed"
//                             : "bg-purple-600 hover:bg-purple-700"
//                         }`}
//                       >
//                         {submitting ? "Submitting..." : "Submit Application"}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>

//       <AnimatePresence>
//         {showSuccess && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[99999]"
//           >
//             <motion.div
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.85, opacity: 0 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className="
//           px-8 py-6 rounded-3xl
//           bg-gradient-to-br from-purple-600/90 via-blue-500/90 to-green-400/90
//           text-white font-semibold text-lg
//           shadow-[0_0_45px_rgba(155,92,255,0.6)]
//           border border-white/20
//         "
//             >
//               <div className="flex items-center gap-4">
//                 <span className="flex items-center justify-center w-8 h-8 text-xl rounded-full bg-white/20">
//                   ✓
//                 </span>
//                 <p>Application submitted successfully!</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const JobOpeningsFresher = () => {
//   return <JobOpeningsBase filterMode="fresher" pageSize={6} />;
// };

// export default JobOpeningsFresher;

// "use client";

// import { useEffect, useMemo, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Brain, MapPin, Search, X, ArrowRight } from "lucide-react";

// type JobFromApi = {
//   _id: string;
//   title: string;
//   category: string;
//   experience: string;
//   description: string;
//   skills: string[];
//   locationType: string;
//   createdAt?: string;
// };

// type RoleCard = {
//   id: string;
//   title: string;
//   category: string;
//   experience: string;
//   description: string;
//   skills: string[];
//   location: string;
//   createdAt?: string;
// };

// type SortOption =
//   | "relevance"
//   | "title-asc"
//   | "title-desc"
//   | "exp-asc"
//   | "exp-desc";

// type FilterMode = "fresher" | "experienced" | "all";

// interface JobOpeningsBaseProps {
//   filterMode: FilterMode;
//   pageSize?: number;
// }

// const JobOpeningsBase = ({
//   filterMode,
//   pageSize = 9,
// }: JobOpeningsBaseProps) => {
//   const [jobs, setJobs] = useState<JobFromApi[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState<SortOption>("relevance");
//   const [currentPage, setCurrentPage] = useState(1);

//   const [selectedJob, setSelectedJob] = useState<RoleCard | null>(null);
//   const [applyJob, setApplyJob] = useState<RoleCard | null>(null);

//   // Sort Dropdown state
//   const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
//   const sortDropdownRef = useRef<HTMLDivElement>(null);

//   // Multi-step apply form state
//   const [applyStep, setApplyStep] = useState(1);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [qualification, setQualification] = useState("");
//   const [resumeFile, setResumeFile] = useState<File | null>(null);
//   const [formError, setFormError] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   const [showSuccess, setShowSuccess] = useState(false);

//   // Close sort dropdown on outside click
//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (
//         sortDropdownRef.current &&
//         !sortDropdownRef.current.contains(e.target as Node)
//       ) {
//         setSortDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Reset apply form whenever a new job is opened in Apply modal
//   useEffect(() => {
//     if (applyJob) {
//       setApplyStep(1);
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhone("");
//       setQualification("");
//       setResumeFile(null);
//       setFormError("");
//       setSubmitting(false);
//     }
//   }, [applyJob]);

//   // Fetch jobs
//   useEffect(() => {
//     async function loadJobs() {
//       try {
//         setLoading(true);
//         const res = await fetch("https://server-node-cjss.onrender.com/jobs");
//         const data = await res.json();
//         setJobs(data);
//       } catch (e) {
//         console.error("Error fetching jobs", e);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadJobs();
//   }, []);

//   // Convert API → UI model
//   const openRoles: RoleCard[] = useMemo(
//     () =>
//       jobs.map((j) => ({
//         id: j._id,
//         title: j.title,
//         category: j.category,
//         experience: j.experience,
//         description: j.description,
//         skills: j.skills || [],
//         location: j.locationType,
//         createdAt: j.createdAt,
//       })),
//     [jobs]
//   );

//   const isFresher = (exp: string) => exp.trim().startsWith("0");
//   const isExperienced = (exp: string) => !exp.trim().startsWith("0");

//   // Filter by mode
//   const rolesByMode = useMemo(() => {
//     if (filterMode === "fresher")
//       return openRoles.filter((r) => isFresher(r.experience));
//     if (filterMode === "experienced")
//       return openRoles.filter((r) => isExperienced(r.experience));
//     return openRoles;
//   }, [filterMode, openRoles]);

//   // Categories
//   const categories = ["all", ...new Set(rolesByMode.map((r) => r.category))];

//   // Category filter
//   const rolesByCategory =
//     selectedCategory === "all"
//       ? rolesByMode
//       : rolesByMode.filter((r) => r.category === selectedCategory);

//   // Search filter
//   const rolesBySearch = rolesByCategory.filter((r) =>
//     (r.title + " " + r.description + " " + r.skills.join(" "))
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   const expNum = (exp: string) => Number(exp.match(/\d+/)?.[0] ?? 0);

//   // Sort options
//   const sortOptions = [
//     { value: "relevance", label: "Relevance" },
//     { value: "title-asc", label: "Title A → Z" },
//     { value: "title-desc", label: "Title Z → A" },
//     { value: "exp-asc", label: "Experience Low → High" },
//     { value: "exp-desc", label: "Experience High → Low" },
//   ];

//   // Sort
//   const sortedRoles = useMemo(() => {
//     let arr = [...rolesBySearch];
//     switch (sortBy) {
//       case "title-asc":
//         return arr.sort((a, b) => a.title.localeCompare(b.title));
//       case "title-desc":
//         return arr.sort((a, b) => b.title.localeCompare(a.title));
//       case "exp-asc":
//         return arr.sort((a, b) => expNum(a.experience) - expNum(b.experience));
//       case "exp-desc":
//         return arr.sort((a, b) => expNum(b.experience) - expNum(a.experience));
//       default:
//         return arr;
//     }
//   }, [rolesBySearch, sortBy]);

//   // Pagination
//   const totalPages = Math.ceil(sortedRoles.length / pageSize) || 1;
//   const paginatedRoles = sortedRoles.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize
//   );

//   // Submit handler
//   const handleSubmitApplication = async () => {
//     if (!applyJob) return;

//     if (!firstName || !lastName) {
//       setFormError("Please enter your full name.");
//       return;
//     }
//     if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       setFormError("Please enter a valid email address.");
//       return;
//     }
//     if (!phone.match(/^[0-9]{10}$/)) {
//       setFormError("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!qualification) {
//       setFormError("Please select your highest qualification.");
//       return;
//     }
//     if (!resumeFile) {
//       setFormError("Please upload your resume.");
//       return;
//     }

//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     ];

//     if (!allowedTypes.includes(resumeFile.type)) {
//       setFormError("Only PDF, DOC, or DOCX files are allowed.");
//       return;
//     }

//     setFormError("");
//     setSubmitting(true);

//     try {
//       const formData = new FormData();
//       formData.append("jobId", applyJob.id);
//       formData.append("jobTitle", applyJob.title);
//       formData.append("firstName", firstName);
//       formData.append("lastName", lastName);
//       formData.append("email", email);
//       formData.append("phone", phone);
//       formData.append("qualification", qualification);
//       formData.append("resume", resumeFile);

//       const res = await fetch(
//         "https://server-node-cjss.onrender.com/applications/apply",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();

//       if (!res.ok || data.error) {
//         setFormError(data.error || "Something went wrong. Please try again.");
//         setSubmitting(false);
//         return;
//       }

//       setShowSuccess(true);
//       setApplyJob(null);

//       setTimeout(() => {
//         setShowSuccess(false);
//       }, 2500);
//     } catch (err) {
//       console.error(err);
//       setFormError("Server error. Please try again later.");
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <section
//         className="relative px-6 py-20 text-white min-h-screen"
//         style={{
//           backgroundImage: `
//             linear-gradient(transparent 79px, rgba(148, 163, 184, 0.16) 80px),
//             linear-gradient(90deg, transparent 79px, rgba(148, 163, 184, 0.16) 80px)
//           `,
//           backgroundSize: "80px 80px",
//           backgroundColor: "rgb(2, 6, 23)",
//         }}
//       >
//         {/* Gradient overlay blobs */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
//           <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[150px]" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-6xl">
//           {/* HEADER */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-100/90 backdrop-blur-md">
//               <span className="relative flex items-center justify-center w-3 h-3">
//                 <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-purple-400 animate-ping" />
//                 <span className="relative inline-flex w-2 h-2 rounded-full bg-purple-300" />
//               </span>
//               <span>
//                 {filterMode === "fresher"
//                   ? "Fresher Opportunities"
//                   : filterMode === "experienced"
//                   ? "Experienced Roles"
//                   : "Career Opportunities"}
//               </span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               {filterMode === "fresher"
//                 ? "Fresher Job Opportunities"
//                 : filterMode === "experienced"
//                 ? "Experienced Job Openings"
//                 : "Open Positions"}
//             </h2>
//             <p className="text-xl text-white/60 max-w-3xl mx-auto">
//               Search, filter & apply for your dream role.
//             </p>
//           </div>

//           {/* SEARCH + SORT */}
//           <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mb-8">
//             {/* SEARCH */}
//             <div className="relative w-full lg:w-[60%]">
//               <Search className="absolute -translate-y-1/2 left-4 top-1/2 text-white/40 w-5 h-5" />
//               <input
//                 placeholder="Search by title, skills, or description…"
//                 className="
//                   w-full py-3 pl-12 pr-4 text-white
//                   bg-[#03101f]/60 backdrop-blur-md
//                   border border-white/10
//                   rounded-2xl
//                   focus:border-purple-400/60
//                   focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]
//                   outline-none
//                   transition-all
//                   placeholder:text-white/40
//                 "
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* SORT DROPDOWN - Like TechnologyDropdown */}
//             <div className="relative w-full lg:w-[35%]" ref={sortDropdownRef}>
//               <button
//                 onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
//                 className={`
//                   w-full text-sm font-medium px-4 py-3 transition-colors relative
//                   bg-[#03101f]/60 backdrop-blur-md
//                   border border-white/10
//                   rounded-2xl
//                   flex items-center justify-between
//                   ${
//                     sortDropdownOpen
//                       ? "text-purple-300 border-purple-400/40"
//                       : "text-white/80 hover:text-white"
//                   }
//                 `}
//                 style={{
//                   backgroundColor: "transparent",
//                   boxShadow: "none",
//                 }}
//               >
//                 <span>
//                   Sort: {sortOptions.find((o) => o.value === sortBy)?.label}
//                 </span>
//                 <span className="ml-2 text-xs">
//                   {sortDropdownOpen ? "▲" : "▼"}
//                 </span>
//               </button>

//               {/* Sort Dropdown Panel */}
//               <AnimatePresence>
//                 {sortDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="
//                       absolute top-full left-0 right-0 mt-2 z-50
//                       rounded-2xl
//                       bg-[#03101f]/90 backdrop-blur-xl
//                       shadow-[0_12px_38px_rgba(0,0,0,0.65)]
//                       p-2
//                     "
//                   >
//                     {sortOptions.map((option) => {
//                       const isSelected = sortBy === option.value;
//                       return (
//                         <button
//                           key={option.value}
//                           onClick={() => {
//                             setSortBy(option.value as SortOption);
//                             setSortDropdownOpen(false);
//                           }}
//                           className="w-full px-4 py-3 text-left transition-all duration-300 rounded-xl group hover:bg-white/5"
//                           style={{
//                             backgroundColor: "transparent",
//                             border: "none",
//                             boxShadow: "none",
//                           }}
//                         >
//                           <div
//                             className={`
//                               text-sm font-bold transition-all duration-300
//                               ${isSelected ? "text-purple-300" : "text-white"}
//                               group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300
//                               group-hover:text-transparent group-hover:bg-clip-text
//                             `}
//                           >
//                             {option.label}
//                           </div>
//                         </button>
//                       );
//                     })}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* CATEGORY FILTER - Old Style Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => {
//                   setSelectedCategory(cat);
//                   setCurrentPage(1);
//                 }}
//                 className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
//                   selectedCategory === cat
//                     ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
//                     : "bg-neutral-900 border border-neutral-700 hover:border-purple-400"
//                 }`}
//               >
//                 {cat.charAt(0).toUpperCase() + cat.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* JOB CARDS - Masonry Style */}
//           {loading ? (
//             <div className="py-20 text-center">
//               <div className="inline-flex items-center gap-3 text-white/70">
//                 <div className="w-5 h-5 border-2 border-purple-400 rounded-full border-t-transparent animate-spin" />
//                 Loading jobs…
//               </div>
//             </div>
//           ) : paginatedRoles.length === 0 ? (
//             <div className="py-20 text-center text-white/60">
//               No jobs found for the selected filters.
//             </div>
//           ) : (
//             <div className="grid gap-8 lg:grid-cols-3">
//               {Array.from({ length: 3 }, (_, colIdx) =>
//                 paginatedRoles
//                   .map((role, idx) => ({ ...role, originalIndex: idx }))
//                   .filter((_, idx) => idx % 3 === colIdx)
//               ).map((column, colIdx) => (
//                 <div
//                   key={colIdx}
//                   className={`space-y-8 ${
//                     colIdx === 1 ? "lg:mt-12" : colIdx === 2 ? "lg:mt-24" : ""
//                   }`}
//                 >
//                   <AnimatePresence>
//                     {column.map((role, index) => (
//                       <motion.div
//                         key={role.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="
//                           group relative rounded-3xl border border-neutral-800
//                           bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-900/80
//                           backdrop-blur-md
//                           px-6 py-7 flex flex-col gap-5
//                           transition-all duration-500
//                           hover:-translate-y-3 hover:scale-[1.02]
//                           hover:border-purple-400/50
//                           hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]
//                         "
//                       >
//                         {/* Hover glow effect */}
//                         <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15),transparent_50%)]" />

//                         <div className="relative flex items-start justify-between gap-3">
//                           <div className="flex-1">
//                             <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
//                               Open role
//                             </p>
//                             <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-200">
//                               {role.title}
//                             </h3>
//                           </div>
//                           <span className="shrink-0 px-3 py-1 text-xs font-medium border rounded-full text-white/70 border-white/10 bg-white/5">
//                             {role.category}
//                           </span>
//                         </div>

//                         <p className="relative text-sm leading-relaxed text-white/60 line-clamp-3">
//                           {role.description}
//                         </p>

//                         <div className="relative flex items-center justify-between text-xs text-white/50">
//                           <div className="flex items-center gap-2">
//                             <Brain className="w-4 h-4 text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all" />
//                             <span>{role.experience}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <MapPin className="w-4 h-4 text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(94,231,255,0.8)] transition-all" />
//                             <span>{role.location}</span>
//                           </div>
//                         </div>

//                         <div className="relative flex flex-wrap gap-2 pt-4 border-t border-white/5">
//                           {role.skills.slice(0, 3).map((skill, idx) => (
//                             <span
//                               key={idx}
//                               className="text-[11px] text-white/70 border border-white/10 rounded-full px-3 py-1 bg-white/5"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                           {role.skills.length > 3 && (
//                             <span className="text-[11px] text-purple-300/80 px-2 py-1">
//                               +{role.skills.length - 3} more
//                             </span>
//                           )}
//                         </div>

//                         {/* Expandable section on hover */}
//                         <div className="relative pt-4 overflow-hidden text-sm transition-all duration-500 ease-out border-t opacity-0 border-white/5 text-white/60 max-h-0 group-hover:max-h-32 group-hover:opacity-100">
//                           <p className="mb-1 font-semibold text-white/80">
//                             What you'll do
//                           </p>
//                           <p className="text-white/50 text-xs leading-relaxed">
//                             Work with cross-functional squads delivering
//                             cutting-edge solutions and driving innovation.
//                           </p>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="relative flex gap-3 mt-auto pt-2">
//                           <button
//                             onClick={() => setSelectedJob(role)}
//                             className="
//                               flex-1 py-2.5 text-sm font-medium text-white/80
//                               transition-all border rounded-xl border-white/10
//                               hover:border-purple-400/50 hover:bg-white/5
//                               hover:text-white
//                             "
//                           >
//                             View Details
//                           </button>
//                           <button
//                             onClick={() => setApplyJob(role)}
//                             className="
//                               flex-1 inline-flex items-center justify-center gap-2 py-2.5
//                               rounded-xl text-sm font-semibold
//                               bg-purple-600 hover:bg-purple-500
//                               text-white
//                               shadow-lg shadow-purple-600/30
//                               hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
//                               transition-all duration-300
//                             "
//                           >
//                             Apply
//                             <ArrowRight className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* PAGINATION */}
//           {totalPages > 1 && (
//             <div className="flex justify-center gap-3 mt-16">
//               {Array.from({ length: totalPages }).map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentPage(idx + 1)}
//                   className={`
//                     w-10 h-10 flex items-center justify-center rounded-full border text-sm font-medium
//                     transition-all duration-300
//                     ${
//                       currentPage === idx + 1
//                         ? "border-purple-500 bg-purple-500/30 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
//                         : "border-white/10 bg-white/5 text-white/60 hover:border-purple-400/40 hover:bg-white/10"
//                     }
//                   `}
//                 >
//                   {idx + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* JOB DETAILS POPUP */}
//       <AnimatePresence>
//         {selectedJob && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               className="
//                 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-8 rounded-3xl
//                 bg-gradient-to-br from-[#0f1729] via-[#0a0f1a] to-[#0f1729]
//                 shadow-[0_0_60px_rgba(139,92,246,0.3)]
//                 border border-white/10
//                 backdrop-blur-2xl
//               "
//               style={{
//                 backgroundImage: `
//                   linear-gradient(transparent 79px, rgba(148, 163, 184, 0.08) 80px),
//                   linear-gradient(90deg, transparent 79px, rgba(148, 163, 184, 0.08) 80px)
//                 `,
//                 backgroundSize: "80px 80px",
//               }}
//             >
//               {/* Close */}
//               <button
//                 onClick={() => setSelectedJob(null)}
//                 className="
//                   absolute top-4 right-4 p-2 rounded-full
//                   bg-white/10 backdrop-blur-md border border-white/20
//                   hover:bg-purple-500/30 hover:border-purple-400/50
//                   shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                   transition-all
//                 "
//               >
//                 <X className="w-5 h-5 text-white" />
//               </button>

//               {/* Title */}
//               <h3 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-green-300 bg-clip-text pr-10">
//                 {selectedJob.title}
//               </h3>

//               <p className="mt-3 inline-block px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-300 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
//                 {selectedJob.category}
//               </p>

//               {/* Experience */}
//               <div className="flex items-center gap-3 mt-6 text-white/80">
//                 <span className="flex items-center gap-2 text-purple-300">
//                   <Brain className="w-5 h-5" /> Experience:
//                 </span>
//                 <span className="font-semibold">{selectedJob.experience}</span>
//               </div>

//               {/* Location */}
//               <div className="flex items-center gap-3 mt-3 text-white/80">
//                 <span className="flex items-center gap-2 text-cyan-300">
//                   <MapPin className="w-5 h-5" /> Location:
//                 </span>
//                 <span className="font-semibold">{selectedJob.location}</span>
//               </div>

//               {/* Posted Date */}
//               {selectedJob.createdAt && (
//                 <p className="mt-3 text-sm text-white/50">
//                   Posted on:{" "}
//                   <span className="text-white/70">
//                     {new Date(selectedJob.createdAt).toDateString()}
//                   </span>
//                 </p>
//               )}

//               {/* Description */}
//               <h4 className="mt-8 mb-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
//                 Job Description
//               </h4>
//               <p className="leading-relaxed text-white/70">
//                 {selectedJob.description}
//               </p>

//               {/* Skills */}
//               <h4 className="mt-8 mb-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
//                 Skills Required
//               </h4>
//               <div className="flex flex-wrap gap-2">
//                 {selectedJob.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="
//                       px-4 py-1.5 text-sm rounded-full
//                       bg-white/10 border border-white/15 backdrop-blur-md
//                       text-white/80
//                       shadow-[0_0_10px_rgba(94,231,255,0.2)]
//                     "
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               {/* Apply Button - Single Purple Color */}
//               <button
//                 onClick={() => {
//                   setApplyJob(selectedJob);
//                   setSelectedJob(null);
//                 }}
//                 className="
//                   w-full mt-10 py-3 text-lg font-bold
//                   rounded-xl
//                   bg-purple-600 hover:bg-purple-500
//                   text-white
//                   shadow-[0_0_30px_rgba(139,92,246,0.4)]
//                   hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]
//                   hover:scale-[1.02]
//                   transition-all duration-300
//                 "
//               >
//                 Apply Now 🚀
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* APPLY FORM POPUP (MULTI-STEP) */}
//       <AnimatePresence>
//         {applyJob && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-20 bg-black/80 backdrop-blur-xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               className="
//                 w-full max-w-xl max-h-[90vh] overflow-y-auto p-8 relative rounded-3xl
//                 bg-gradient-to-br from-[#0f1729] via-[#0a0f1a] to-[#0f1729]
//                 backdrop-blur-2xl
//                 border border-white/10
//                 shadow-[0_0_50px_rgba(139,92,246,0.3)]
//               "
//               style={{
//                 backgroundImage: `
//                   linear-gradient(transparent 79px, rgba(148, 163, 184, 0.08) 80px),
//                   linear-gradient(90deg, transparent 79px, rgba(148, 163, 184, 0.08) 80px)
//                 `,
//                 backgroundSize: "80px 80px",
//               }}
//             >
//               <button
//                 onClick={() => setApplyJob(null)}
//                 className="
//                   absolute top-4 right-4
//                   bg-white/10 backdrop-blur-md
//                   p-2 rounded-full
//                   border border-white/20
//                   hover:bg-purple-500/30 hover:border-purple-400/50
//                   transition-all
//                   shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                 "
//               >
//                 <X className="w-5 h-5 text-white" />
//               </button>

//               <h3 className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-green-300 bg-clip-text pr-10">
//                 Apply for {applyJob.title}
//               </h3>

//               {/* Step indicators */}
//               <div className="flex justify-center gap-3 mb-8">
//                 {[1, 2, 3, 4].map((s) => (
//                   <div
//                     key={s}
//                     className={`
//                       w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
//                       transition-all duration-300 border
//                       ${
//                         applyStep === s
//                           ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.6)] scale-110"
//                           : applyStep > s
//                           ? "bg-purple-500/30 text-white border-purple-400/50"
//                           : "bg-white/5 text-white/40 border-white/10"
//                       }
//                     `}
//                   >
//                     {applyStep > s ? "✓" : s}
//                   </div>
//                 ))}
//               </div>

//               {/* Error banner */}
//               {formError && (
//                 <motion.p
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="p-3 mb-6 text-sm text-red-300 border rounded-xl bg-red-500/10 border-red-500/30"
//                 >
//                   {formError}
//                 </motion.p>
//               )}

//               {/* STEP 1 – Personal Info */}
//               {applyStep === 1 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="space-y-5"
//                 >
//                   <div>
//                     <label className="text-sm text-white/70 mb-1 block">
//                       First Name
//                     </label>
//                     <input
//                       className="
//                         w-full px-4 py-3 rounded-xl
//                         bg-white/5 backdrop-blur-md
//                         border border-white/10
//                         focus:border-purple-400/60
//                         focus:shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                         outline-none
//                         transition-all
//                         text-white
//                         placeholder:text-white/30
//                       "
//                       placeholder="Enter first name"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm text-white/70 mb-1 block">
//                       Last Name
//                     </label>
//                     <input
//                       className="
//                         w-full px-4 py-3 rounded-xl
//                         bg-white/5 backdrop-blur-md
//                         border border-white/10
//                         focus:border-purple-400/60
//                         focus:shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                         outline-none
//                         transition-all
//                         text-white
//                         placeholder:text-white/30
//                       "
//                       placeholder="Enter last name"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm text-white/70 mb-1 block">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="
//                         w-full px-4 py-3 rounded-xl
//                         bg-white/5 backdrop-blur-md
//                         border border-white/10
//                         focus:border-purple-400/60
//                         focus:shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                         outline-none
//                         transition-all
//                         text-white
//                         placeholder:text-white/30
//                       "
//                       placeholder="you@example.com"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm text-white/70 mb-1 block">
//                       Mobile Number
//                     </label>
//                     <input
//                       type="tel"
//                       className="
//                         w-full px-4 py-3 rounded-xl
//                         bg-white/5 backdrop-blur-md
//                         border border-white/10
//                         focus:border-purple-400/60
//                         focus:shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                         outline-none
//                         transition-all
//                         text-white
//                         placeholder:text-white/30
//                       "
//                       placeholder="9876543210"
//                       maxLength={10}
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                     />
//                   </div>

//                   <div className="flex justify-end pt-4">
//                     <button
//                       onClick={() => {
//                         if (!firstName || !lastName) {
//                           setFormError("Please enter your full name.");
//                           return;
//                         }
//                         if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//                           setFormError("Please enter a valid email address.");
//                           return;
//                         }
//                         if (!phone.match(/^[0-9]{10}$/)) {
//                           setFormError(
//                             "Please enter a valid 10-digit mobile number."
//                           );
//                           return;
//                         }
//                         setFormError("");
//                         setApplyStep(2);
//                       }}
//                       className="
//                         px-8 py-3 rounded-xl font-semibold
//                         bg-purple-600 hover:bg-purple-500
//                         text-white
//                         shadow-[0_0_20px_rgba(139,92,246,0.4)]
//                         hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
//                         hover:scale-[1.02]
//                         transition-all duration-300
//                       "
//                     >
//                       Next →
//                     </button>
//                   </div>
//                 </motion.div>
//               )}

//               {/* STEP 2 – Education */}
//               {applyStep === 2 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="space-y-5"
//                 >
//                   <div>
//                     <label className="text-sm text-white/70 mb-1 block">
//                       Highest Education Qualification
//                     </label>
//                     <div className="relative">
//                       <select
//                         className="
//                           w-full px-4 py-3 rounded-xl
//                           bg-white/5 backdrop-blur-md
//                           border border-white/10
//                           focus:border-purple-400/60
//                           focus:shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                           outline-none
//                           transition-all
//                           text-white
//                           appearance-none
//                           cursor-pointer
//                         "
//                         value={qualification}
//                         onChange={(e) => setQualification(e.target.value)}
//                       >
//                         <option value="" className="bg-neutral-900">
//                           Select Highest Qualification
//                         </option>
//                         <option value="B.Tech" className="bg-neutral-900">
//                           B.Tech / B.E
//                         </option>
//                         <option value="M.Tech" className="bg-neutral-900">
//                           M.Tech / M.E
//                         </option>
//                         <option value="MCA" className="bg-neutral-900">
//                           MCA
//                         </option>
//                         <option value="MBA" className="bg-neutral-900">
//                           MBA
//                         </option>
//                         <option value="Degree" className="bg-neutral-900">
//                           Degree
//                         </option>
//                       </select>
//                       <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
//                         ▼
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex justify-between pt-4">
//                     <button
//                       onClick={() => setApplyStep(1)}
//                       className="
//                         px-6 py-3 transition-all border rounded-xl
//                         bg-white/5 backdrop-blur-md border-white/10
//                         hover:bg-white/10 hover:border-white/20
//                         text-white/80
//                       "
//                     >
//                       ← Back
//                     </button>
//                     <button
//                       onClick={() => {
//                         if (!qualification) {
//                           setFormError(
//                             "Please select your highest qualification."
//                           );
//                           return;
//                         }
//                         setFormError("");
//                         setApplyStep(3);
//                       }}
//                       className="
//                         px-8 py-3 rounded-xl font-semibold
//                         bg-purple-600 hover:bg-purple-500
//                         text-white
//                         shadow-[0_0_20px_rgba(139,92,246,0.4)]
//                         hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
//                         hover:scale-[1.02]
//                         transition-all duration-300
//                       "
//                     >
//                       Next →
//                     </button>
//                   </div>
//                 </motion.div>
//               )}

//               {/* STEP 3 – Resume Upload */}
//               {applyStep === 3 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="space-y-5"
//                 >
//                   <div>
//                     <label className="text-sm text-white/70 mb-1 block">
//                       Upload Resume (PDF / DOC / DOCX)
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="file"
//                         accept=".pdf,.doc,.docx"
//                         className="
//                           w-full px-4 py-3 rounded-xl
//                           bg-white/5 backdrop-blur-md
//                           border border-white/10 border-dashed
//                           focus:border-purple-400/60
//                           focus:shadow-[0_0_15px_rgba(139,92,246,0.3)]
//                           outline-none
//                           transition-all
//                           text-white/70
//                           file:mr-4 file:py-2 file:px-4
//                           file:rounded-full file:border-0
//                           file:text-sm file:font-semibold
//                           file:bg-purple-600 file:text-white
//                           hover:file:bg-purple-500
//                           cursor-pointer
//                         "
//                         onChange={(e) =>
//                           setResumeFile(e.target.files?.[0] ?? null)
//                         }
//                       />
//                     </div>
//                     {resumeFile && (
//                       <p className="mt-2 text-sm text-green-400">
//                         ✓ {resumeFile.name}
//                       </p>
//                     )}
//                   </div>

//                   <div className="flex justify-between pt-4">
//                     <button
//                       onClick={() => setApplyStep(2)}
//                       className="
//                         px-6 py-3 transition-all border rounded-xl
//                         bg-white/5 backdrop-blur-md border-white/10
//                         hover:bg-white/10 hover:border-white/20
//                         text-white/80
//                       "
//                     >
//                       ← Back
//                     </button>
//                     <button
//                       onClick={() => {
//                         if (!resumeFile) {
//                           setFormError("Please upload your resume.");
//                           return;
//                         }
//                         setFormError("");
//                         setApplyStep(4);
//                       }}
//                       className="
//                         px-8 py-3 rounded-xl font-semibold
//                         bg-purple-600 hover:bg-purple-500
//                         text-white
//                         shadow-[0_0_20px_rgba(139,92,246,0.4)]
//                         hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
//                         hover:scale-[1.02]
//                         transition-all duration-300
//                       "
//                     >
//                       Next →
//                     </button>
//                   </div>
//                 </motion.div>
//               )}

//               {/* STEP 4 – Review & Submit */}
//               {applyStep === 4 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="space-y-6"
//                 >
//                   <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
//                     Review Your Details
//                   </h4>

//                   <div
//                     className="
//                       bg-white/5 p-5 rounded-xl
//                       backdrop-blur-xl
//                       border border-white/10
//                       space-y-3
//                     "
//                   >
//                     <div className="flex justify-between">
//                       <span className="text-white/50">Name</span>
//                       <span className="text-white font-medium">
//                         {firstName} {lastName}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-white/50">Email</span>
//                       <span className="text-white font-medium">{email}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-white/50">Mobile</span>
//                       <span className="text-white font-medium">{phone}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-white/50">Qualification</span>
//                       <span className="text-white font-medium">
//                         {qualification}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-white/50">Resume</span>
//                       <span className="text-green-400 font-medium truncate max-w-[200px]">
//                         {resumeFile?.name}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4">
//                     <button
//                       onClick={() => setApplyStep(3)}
//                       className="
//                         px-6 py-3 transition-all border rounded-xl
//                         bg-white/5 backdrop-blur-md border-white/10
//                         hover:bg-white/10 hover:border-white/20
//                         text-white/80
//                       "
//                     >
//                       ← Back
//                     </button>

//                     <button
//                       disabled={submitting}
//                       onClick={handleSubmitApplication}
//                       className={`
//                         px-8 py-3 rounded-xl font-semibold transition-all duration-300
//                         ${
//                           submitting
//                             ? "bg-purple-600/50 cursor-not-allowed text-white/50"
//                             : "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-[1.02]"
//                         }
//                       `}
//                     >
//                       {submitting ? (
//                         <span className="flex items-center gap-2">
//                           <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin" />
//                           Submitting...
//                         </span>
//                       ) : (
//                         "Submit Application"
//                       )}
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* SUCCESS TOAST */}
//       <AnimatePresence>
//         {showSuccess && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[99999]"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0, y: 20 }}
//               transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               className="
//                 px-10 py-8 rounded-3xl
//                 bg-purple-600
//                 text-white font-semibold text-xl
//                 shadow-[0_0_60px_rgba(139,92,246,0.6)]
//                 border border-purple-400/30
//               "
//             >
//               <div className="flex items-center gap-4">
//                 <span className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-white/20">
//                   ✓
//                 </span>
//                 <div>
//                   <p className="text-xl font-bold">Application Submitted!</p>
//                   <p className="text-sm text-white/80 font-normal mt-1">
//                     We'll get back to you soon.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const JobOpeningsFresher = () => {
//   return <JobOpeningsBase filterMode="fresher" pageSize={6} />;
// };

// export default JobOpeningsFresher;
"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MapPin, Search, X, ArrowRight } from "lucide-react";

type JobFromApi = {
  _id: string;
  title: string;
  category: string;
  experience: string;
  description: string;
  skills: string[];
  locationType: string;
  createdAt?: string;
};

type RoleCard = {
  id: string;
  title: string;
  category: string;
  experience: string;
  description: string;
  skills: string[];
  location: string;
  createdAt?: string;
};

type SortOption =
  | "relevance"
  | "title-asc"
  | "title-desc"
  | "exp-asc"
  | "exp-desc";

type FilterMode = "fresher" | "experienced" | "all";

interface JobOpeningsBaseProps {
  filterMode: FilterMode;
  pageSize?: number;
}

const JobOpeningsBase = ({
  filterMode,
  pageSize = 9,
}: JobOpeningsBaseProps) => {
  const [jobs, setJobs] = useState<JobFromApi[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedJob, setSelectedJob] = useState<RoleCard | null>(null);
  const [applyJob, setApplyJob] = useState<RoleCard | null>(null);

  // Sort Dropdown state
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Multi-step apply form state
  const [applyStep, setApplyStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  // Close sort dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(e.target as Node)
      ) {
        setSortDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset apply form whenever a new job is opened in Apply modal
  useEffect(() => {
    if (applyJob) {
      setApplyStep(1);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setQualification("");
      setResumeFile(null);
      setFormError("");
      setSubmitting(false);
    }
  }, [applyJob]);

  // Fetch jobs
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        const res = await fetch("http://172.16.16.33:5000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        console.error("Error fetching jobs", e);
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  // Convert API → UI model
  const openRoles: RoleCard[] = useMemo(
    () =>
      jobs.map((j) => ({
        id: j._id,
        title: j.title,
        category: j.category,
        experience: j.experience,
        description: j.description,
        skills: j.skills || [],
        location: j.locationType,
        createdAt: j.createdAt,
      })),
    [jobs]
  );

  const isFresher = (exp: string) => exp.trim().startsWith("0");
  const isExperienced = (exp: string) => !exp.trim().startsWith("0");

  // Filter by mode
  const rolesByMode = useMemo(() => {
    if (filterMode === "fresher")
      return openRoles.filter((r) => isFresher(r.experience));
    if (filterMode === "experienced")
      return openRoles.filter((r) => isExperienced(r.experience));
    return openRoles;
  }, [filterMode, openRoles]);

  // Categories
  const categories = ["all", ...new Set(rolesByMode.map((r) => r.category))];

  // Category filter
  const rolesByCategory =
    selectedCategory === "all"
      ? rolesByMode
      : rolesByMode.filter((r) => r.category === selectedCategory);

  // Search filter
  const rolesBySearch = rolesByCategory.filter((r) =>
    (r.title + " " + r.description + " " + r.skills.join(" "))
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const expNum = (exp: string) => Number(exp.match(/\d+/)?.[0] ?? 0);

  // Sort options
  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "title-asc", label: "Title A → Z" },
    { value: "title-desc", label: "Title Z → A" },
    { value: "exp-asc", label: "Experience Low → High" },
    { value: "exp-desc", label: "Experience High → Low" },
  ];

  // Sort
  const sortedRoles = useMemo(() => {
    let arr = [...rolesBySearch];
    switch (sortBy) {
      case "title-asc":
        return arr.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return arr.sort((a, b) => b.title.localeCompare(a.title));
      case "exp-asc":
        return arr.sort((a, b) => expNum(a.experience) - expNum(b.experience));
      case "exp-desc":
        return arr.sort((a, b) => expNum(b.experience) - expNum(a.experience));
      default:
        return arr;
    }
  }, [rolesBySearch, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedRoles.length / pageSize) || 1;
  const paginatedRoles = sortedRoles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Submit handler
  const handleSubmitApplication = async () => {
    if (!applyJob) return;

    if (!firstName || !lastName) {
      setFormError("Please enter your full name.");
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!qualification) {
      setFormError("Please select your highest qualification.");
      return;
    }
    if (!resumeFile) {
      setFormError("Please upload your resume.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resumeFile.type)) {
      setFormError("Only PDF, DOC, or DOCX files are allowed.");
      return;
    }

    setFormError("");
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("jobId", applyJob.id);
      formData.append("jobTitle", applyJob.title);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("qualification", qualification);
      formData.append("resume", resumeFile);

      const res = await fetch("http://172.16.16.33:5000/applications/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setFormError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setShowSuccess(true);
      setApplyJob(null);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    } catch (err) {
      console.error(err);
      setFormError("Server error. Please try again later.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative px-6 py-20 text-white min-h-screen bg-black">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient overlay blobs - more subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/3 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-100/90 backdrop-blur-md">
              <span className="relative flex items-center justify-center w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-purple-400 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-purple-300" />
              </span>
              <span>
                {filterMode === "fresher"
                  ? "Fresher Opportunities"
                  : filterMode === "experienced"
                  ? "Experienced Roles"
                  : "Career Opportunities"}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text">
              {filterMode === "fresher"
                ? "Fresher Job Opportunities"
                : filterMode === "experienced"
                ? "Experienced Job Openings"
                : "Open Positions"}
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Search, filter & apply for your dream role.
            </p>
          </div>

          {/* SEARCH + SORT */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mb-8">
            {/* SEARCH */}
            <div className="relative w-full lg:w-[60%]">
              <Search className="absolute -translate-y-1/2 left-4 top-1/2 text-white/40 w-5 h-5" />
              <input
                placeholder="Search by title, skills, or description…"
                className="
                  w-full py-3 pl-12 pr-4 text-white 
                  bg-[#0a0a0a]/80 backdrop-blur-md
                  border border-white/10 
                  rounded-2xl 
                  focus:border-purple-400/60 
                  focus:shadow-[0_0_20px_rgba(139,92,246,0.3)]
                  outline-none
                  transition-all
                  placeholder:text-white/40
                "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* SORT DROPDOWN */}
            <div className="relative w-full lg:w-[35%]" ref={sortDropdownRef}>
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className={`
                  w-full text-sm font-medium px-4 py-3 transition-colors relative
                  bg-[#0a0a0a]/80 backdrop-blur-md
                  border border-white/10 
                  rounded-2xl 
                  flex items-center justify-between
                  ${
                    sortDropdownOpen
                      ? "text-purple-300 border-purple-400/40"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >
                <span>
                  Sort: {sortOptions.find((o) => o.value === sortBy)?.label}
                </span>
                <span className="ml-2 text-xs">
                  {sortDropdownOpen ? "▲" : "▼"}
                </span>
              </button>

              {/* Sort Dropdown Panel */}
              <AnimatePresence>
                {sortDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="
                      absolute top-full left-0 right-0 mt-2 z-50
                      rounded-2xl
                      bg-[#0a0a0a]/95 backdrop-blur-xl
                      border border-white/10
                      shadow-[0_12px_38px_rgba(0,0,0,0.65)]
                      p-2
                    "
                  >
                    {sortOptions.map((option) => {
                      const isSelected = sortBy === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value as SortOption);
                            setSortDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left transition-all duration-300 rounded-xl group hover:bg-white/5"
                        >
                          <div
                            className={`
                              text-sm font-bold transition-all duration-300
                              ${isSelected ? "text-purple-300" : "text-white"}
                              group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300
                              group-hover:text-transparent group-hover:bg-clip-text
                            `}
                          >
                            {option.label}
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CATEGORY FILTER - Updated for black theme */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                    : "bg-[#0a0a0a]/80 border border-white/10 hover:border-purple-400/50 text-white/80"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* JOB CARDS */}
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-flex items-center gap-3 text-white/70">
                <div className="w-5 h-5 border-2 border-purple-400 rounded-full border-t-transparent animate-spin" />
                Loading jobs…
              </div>
            </div>
          ) : paginatedRoles.length === 0 ? (
            <div className="py-20 text-center text-white/60">
              No jobs found for the selected filters.
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {Array.from({ length: 3 }, (_, colIdx) =>
                paginatedRoles
                  .map((role, idx) => ({ ...role, originalIndex: idx }))
                  .filter((_, idx) => idx % 3 === colIdx)
              ).map((column, colIdx) => (
                <div
                  key={colIdx}
                  className={`space-y-8 ${
                    colIdx === 1 ? "lg:mt-12" : colIdx === 2 ? "lg:mt-24" : ""
                  }`}
                >
                  <AnimatePresence>
                    {column.map((role, index) => (
                      <motion.div
                        key={role.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="
                          group relative rounded-3xl border border-white/10 
                          bg-[#0a0a0a]/80
                          backdrop-blur-md
                          px-6 py-7 flex flex-col gap-5 
                          transition-all duration-500 
                          hover:-translate-y-3 hover:scale-[1.02] 
                          hover:border-purple-400/50 
                          hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]
                        "
                      >
                        {/* Hover glow effect */}
                        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1),transparent_50%)]" />

                        <div className="relative flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
                              Open role
                            </p>
                            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-200">
                              {role.title}
                            </h3>
                          </div>
                          <span className="shrink-0 px-3 py-1 text-xs font-medium border rounded-full text-white/70 border-white/10 bg-white/5">
                            {role.category}
                          </span>
                        </div>

                        <p className="relative text-sm leading-relaxed text-white/60 line-clamp-3">
                          {role.description}
                        </p>

                        <div className="relative flex items-center justify-between text-xs text-white/50">
                          <div className="flex items-center gap-2">
                            <Brain className="w-4 h-4 text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all" />
                            <span>{role.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(94,231,255,0.8)] transition-all" />
                            <span>{role.location}</span>
                          </div>
                        </div>

                        <div className="relative flex flex-wrap gap-2 pt-4 border-t border-white/5">
                          {role.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] text-white/70 border border-white/10 rounded-full px-3 py-1 bg-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                          {role.skills.length > 3 && (
                            <span className="text-[11px] text-purple-300/80 px-2 py-1">
                              +{role.skills.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Expandable section on hover */}
                        <div className="relative pt-4 overflow-hidden text-sm transition-all duration-500 ease-out border-t opacity-0 border-white/5 text-white/60 max-h-0 group-hover:max-h-32 group-hover:opacity-100">
                          <p className="mb-1 font-semibold text-white/80">
                            What you'll do
                          </p>
                          <p className="text-white/50 text-xs leading-relaxed">
                            Work with cross-functional squads delivering
                            cutting-edge solutions and driving innovation.
                          </p>
                        </div>

                        {/* Action Buttons - Updated style */}
                        <div className="relative flex gap-3 mt-auto pt-2">
                          <button
                            onClick={() => setSelectedJob(role)}
                            className="
                              flex-1 py-2.5 text-sm font-medium text-white/80 
                              transition-all border rounded-full border-white/40
                              hover:border-white/70 hover:bg-white/10
                              hover:text-white backdrop-blur
                            "
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => setApplyJob(role)}
                            className="
                              flex-1 inline-flex items-center justify-center gap-2 py-2.5 
                              rounded-full text-sm font-semibold
                              border border-white/40
                              hover:border-white/70 hover:bg-white/10
                              text-white backdrop-blur
                              transition-all duration-300
                            "
                          >
                            Apply
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* PAGINATION - Updated style */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-16">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full border text-sm font-medium 
                    transition-all duration-300 
                    ${
                      currentPage === idx + 1
                        ? "border-white bg-white text-black"
                        : "border-white/40 bg-transparent text-white/60 hover:border-white/70 hover:bg-white/10"
                    }
                  `}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* JOB DETAILS POPUP */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="
                w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-8 rounded-3xl
                bg-[#0a0a0a]/98
                shadow-[0_0_60px_rgba(0,0,0,0.8)]
                border border-white/10 
                backdrop-blur-2xl
              "
            >
              {/* Close */}
              <button
                onClick={() => setSelectedJob(null)}
                className="
                  absolute top-4 right-4 p-2 rounded-full 
                  bg-white/10 backdrop-blur-md border border-white/20
                  hover:bg-white/20 hover:border-white/40
                  transition-all
                "
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Title */}
              <h3 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text pr-10">
                {selectedJob.title}
              </h3>

              <p className="mt-3 inline-block px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-300">
                {selectedJob.category}
              </p>

              {/* Experience */}
              <div className="flex items-center gap-3 mt-6 text-white/80">
                <span className="flex items-center gap-2 text-purple-300">
                  <Brain className="w-5 h-5" /> Experience:
                </span>
                <span className="font-semibold">{selectedJob.experience}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 mt-3 text-white/80">
                <span className="flex items-center gap-2 text-cyan-300">
                  <MapPin className="w-5 h-5" /> Location:
                </span>
                <span className="font-semibold">{selectedJob.location}</span>
              </div>

              {/* Posted Date */}
              {selectedJob.createdAt && (
                <p className="mt-3 text-sm text-white/50">
                  Posted on:{" "}
                  <span className="text-white/70">
                    {new Date(selectedJob.createdAt).toDateString()}
                  </span>
                </p>
              )}

              {/* Description */}
              <h4 className="mt-8 mb-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                Job Description
              </h4>
              <p className="leading-relaxed text-white/70">
                {selectedJob.description}
              </p>

              {/* Skills */}
              <h4 className="mt-8 mb-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Skills Required
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-1.5 text-sm rounded-full
                      bg-white/10 border border-white/15 backdrop-blur-md
                      text-white/80
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Apply Button - Updated style */}
              <button
                onClick={() => {
                  setApplyJob(selectedJob);
                  setSelectedJob(null);
                }}
                className="
                  w-full mt-10 py-3 text-lg font-bold
                  rounded-full
                  border border-white/40
                  hover:border-white/70 hover:bg-white/10
                  text-white backdrop-blur
                  transition-all duration-300
                "
              >
                Apply Now →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* APPLY FORM POPUP (MULTI-STEP) */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-20 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="
                w-full max-w-xl max-h-[90vh] overflow-y-auto p-8 relative rounded-3xl
                bg-[#0a0a0a]/98
                backdrop-blur-2xl
                border border-white/10 
                shadow-[0_0_50px_rgba(0,0,0,0.8)]
              "
            >
              <button
                onClick={() => setApplyJob(null)}
                className="
                  absolute top-4 right-4 
                  bg-white/10 backdrop-blur-md 
                  p-2 rounded-full 
                  border border-white/20
                  hover:bg-white/20 hover:border-white/40
                  transition-all
                "
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h3 className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 bg-clip-text pr-10">
                Apply for {applyJob.title}
              </h3>

              {/* Step indicators */}
              <div className="flex justify-center gap-3 mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                      transition-all duration-300 border
                      ${
                        applyStep === s
                          ? "bg-white text-black border-white scale-110"
                          : applyStep > s
                          ? "bg-white/30 text-white border-white/50"
                          : "bg-white/5 text-white/40 border-white/10"
                      }
                    `}
                  >
                    {applyStep > s ? "✓" : s}
                  </div>
                ))}
              </div>

              {/* Error banner */}
              {formError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 mb-6 text-sm text-red-300 border rounded-xl bg-red-500/10 border-red-500/30"
                >
                  {formError}
                </motion.p>
              )}

              {/* STEP 1 – Personal Info */}
              {applyStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">
                      First Name
                    </label>
                    <input
                      className="
                        w-full px-4 py-3 rounded-xl 
                        bg-white/5 backdrop-blur-md
                        border border-white/10 
                        focus:border-white/40
                        focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                        outline-none
                        transition-all
                        text-white
                        placeholder:text-white/30
                      "
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white/70 mb-1 block">
                      Last Name
                    </label>
                    <input
                      className="
                        w-full px-4 py-3 rounded-xl 
                        bg-white/5 backdrop-blur-md
                        border border-white/10 
                        focus:border-white/40
                        focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                        outline-none
                        transition-all
                        text-white
                        placeholder:text-white/30
                      "
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white/70 mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="
                        w-full px-4 py-3 rounded-xl 
                        bg-white/5 backdrop-blur-md
                        border border-white/10 
                        focus:border-white/40
                        focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                        outline-none
                        transition-all
                        text-white
                        placeholder:text-white/30
                      "
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white/70 mb-1 block">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="
                        w-full px-4 py-3 rounded-xl 
                        bg-white/5 backdrop-blur-md
                        border border-white/10 
                        focus:border-white/40
                        focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                        outline-none
                        transition-all
                        text-white
                        placeholder:text-white/30
                      "
                      placeholder="9876543210"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => {
                        if (!firstName || !lastName) {
                          setFormError("Please enter your full name.");
                          return;
                        }
                        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                          setFormError("Please enter a valid email address.");
                          return;
                        }
                        if (!phone.match(/^[0-9]{10}$/)) {
                          setFormError(
                            "Please enter a valid 10-digit mobile number."
                          );
                          return;
                        }
                        setFormError("");
                        setApplyStep(2);
                      }}
                      className="
                        px-8 py-3 rounded-full font-semibold
                        border border-white/40
                        hover:border-white/70 hover:bg-white/10
                        text-white backdrop-blur
                        transition-all duration-300
                      "
                    >
                      Next →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 – Education */}
              {applyStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">
                      Highest Education Qualification
                    </label>
                    <div className="relative">
                      <select
                        className="
                          w-full px-4 py-3 rounded-xl 
                          bg-white/5 backdrop-blur-md
                          border border-white/10 
                          focus:border-white/40
                          focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                          outline-none
                          transition-all 
                          text-white
                          appearance-none
                          cursor-pointer
                        "
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                      >
                        <option value="" className="bg-black">
                          Select Highest Qualification
                        </option>
                        <option value="B.Tech" className="bg-black">
                          B.Tech / B.E
                        </option>
                        <option value="M.Tech" className="bg-black">
                          M.Tech / M.E
                        </option>
                        <option value="MCA" className="bg-black">
                          MCA
                        </option>
                        <option value="MBA" className="bg-black">
                          MBA
                        </option>
                        <option value="Degree" className="bg-black">
                          Degree
                        </option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                        ▼
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setApplyStep(1)}
                      className="
                        px-6 py-3 transition-all border rounded-full 
                        bg-white/5 backdrop-blur-md border-white/10 
                        hover:bg-white/10 hover:border-white/20
                        text-white/80
                      "
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        if (!qualification) {
                          setFormError(
                            "Please select your highest qualification."
                          );
                          return;
                        }
                        setFormError("");
                        setApplyStep(3);
                      }}
                      className="
                        px-8 py-3 rounded-full font-semibold
                        border border-white/40
                        hover:border-white/70 hover:bg-white/10
                        text-white backdrop-blur
                        transition-all duration-300
                      "
                    >
                      Next →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 – Resume Upload */}
              {applyStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">
                      Upload Resume (PDF / DOC / DOCX)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="
                          w-full px-4 py-3 rounded-xl 
                          bg-white/5 backdrop-blur-md
                          border border-white/10 border-dashed
                          focus:border-white/40
                          focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                          outline-none
                          transition-all
                          text-white/70
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-white/20 file:text-white
                          hover:file:bg-white/30
                          cursor-pointer
                        "
                        onChange={(e) =>
                          setResumeFile(e.target.files?.[0] ?? null)
                        }
                      />
                    </div>
                    {resumeFile && (
                      <p className="mt-2 text-sm text-green-400">
                        ✓ {resumeFile.name}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setApplyStep(2)}
                      className="
                        px-6 py-3 transition-all border rounded-full 
                        bg-white/5 backdrop-blur-md border-white/10 
                        hover:bg-white/10 hover:border-white/20
                        text-white/80
                      "
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => {
                        if (!resumeFile) {
                          setFormError("Please upload your resume.");
                          return;
                        }
                        setFormError("");
                        setApplyStep(4);
                      }}
                      className="
                        px-8 py-3 rounded-full font-semibold
                        border border-white/40
                        hover:border-white/70 hover:bg-white/10
                        text-white backdrop-blur
                        transition-all duration-300
                      "
                    >
                      Next →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4 – Review & Submit */}
              {applyStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                    Review Your Details
                  </h4>

                  <div
                    className="
                      bg-white/5 p-5 rounded-xl 
                      backdrop-blur-xl 
                      border border-white/10 
                      space-y-3
                    "
                  >
                    <div className="flex justify-between">
                      <span className="text-white/50">Name</span>
                      <span className="text-white font-medium">
                        {firstName} {lastName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Email</span>
                      <span className="text-white font-medium">{email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Mobile</span>
                      <span className="text-white font-medium">{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Qualification</span>
                      <span className="text-white font-medium">
                        {qualification}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Resume</span>
                      <span className="text-green-400 font-medium truncate max-w-[200px]">
                        {resumeFile?.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setApplyStep(3)}
                      className="
                        px-6 py-3 transition-all border rounded-full 
                        bg-white/5 backdrop-blur-md border-white/10 
                        hover:bg-white/10 hover:border-white/20
                        text-white/80
                      "
                    >
                      ← Back
                    </button>

                    <button
                      disabled={submitting}
                      onClick={handleSubmitApplication}
                      className={`
                        px-8 py-3 rounded-full font-semibold transition-all duration-300
                        ${
                          submitting
                            ? "bg-white/20 cursor-not-allowed text-white/50 border border-white/20"
                            : "border border-white/40 hover:border-white/70 hover:bg-white/10 text-white backdrop-blur"
                        }
                      `}
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[99999]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="
                px-10 py-8 rounded-3xl 
                bg-[#0a0a0a]
                text-white font-semibold text-xl
                shadow-[0_0_60px_rgba(0,0,0,0.8)]
                border border-white/20
              "
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-green-500/20 text-green-400">
                  ✓
                </span>
                <div>
                  <p className="text-xl font-bold">Application Submitted!</p>
                  <p className="text-sm text-white/60 font-normal mt-1">
                    We'll get back to you soon.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const JobOpeningsFresher = () => {
  return <JobOpeningsBase filterMode="all" pageSize={6} />;
};

export default JobOpeningsFresher;
