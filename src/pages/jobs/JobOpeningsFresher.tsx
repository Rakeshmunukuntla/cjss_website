'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, MapPin, Search, X } from 'lucide-react';

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

type SortOption = 'relevance' | 'title-asc' | 'title-desc' | 'exp-asc' | 'exp-desc';

type FilterMode = 'fresher' | 'experienced' | 'all';

interface JobOpeningsBaseProps {
  filterMode: FilterMode;
  pageSize?: number;
}

const JobOpeningsBase = ({ filterMode, pageSize = 6 }: JobOpeningsBaseProps) => {
  const [jobs, setJobs] = useState<JobFromApi[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedJob, setSelectedJob] = useState<RoleCard | null>(null);
  const [applyJob, setApplyJob] = useState<RoleCard | null>(null);

  // Multi-step apply form state
  const [applyStep, setApplyStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  // Reset apply form whenever a new job is opened in Apply modal
  useEffect(() => {
    if (applyJob) {
      setApplyStep(1);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setQualification('');
      setResumeFile(null);
      setFormError('');
      setSubmitting(false);
    }
  }, [applyJob]);

  // Fetch jobs
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        const res = await fetch('https://server-node-cjss.onrender.com/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        console.error('Error fetching jobs', e);
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

  const isFresher = (exp: string) => exp.trim().startsWith('0');
  const isExperienced = (exp: string) => !exp.trim().startsWith('0');

  // Filter by mode
  const rolesByMode = useMemo(() => {
    if (filterMode === 'fresher') return openRoles.filter((r) => isFresher(r.experience));
    if (filterMode === 'experienced') return openRoles.filter((r) => isExperienced(r.experience));
    return openRoles;
  }, [filterMode, openRoles]);

  // Categories
  const categories = ['all', ...new Set(rolesByMode.map((r) => r.category))];

  // Category filter
  const rolesByCategory =
    selectedCategory === 'all'
      ? rolesByMode
      : rolesByMode.filter((r) => r.category === selectedCategory);

  // Search filter
  const rolesBySearch = rolesByCategory.filter((r) =>
    (r.title + ' ' + r.description + ' ' + r.skills.join(' '))
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const expNum = (exp: string) => Number(exp.match(/\d+/)?.[0] ?? 0);

  // Sort
  const sortedRoles = useMemo(() => {
    let arr = [...rolesBySearch];
    switch (sortBy) {
      case 'title-asc':
        return arr.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return arr.sort((a, b) => b.title.localeCompare(a.title));
      case 'exp-asc':
        return arr.sort((a, b) => expNum(a.experience) - expNum(b.experience));
      case 'exp-desc':
        return arr.sort((a, b) => expNum(b.experience) - expNum(a.experience));
      default:
        return arr;
    }
  }, [rolesBySearch, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedRoles.length / pageSize) || 1;
  const paginatedRoles = sortedRoles.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Submit handler
  const handleSubmitApplication = async () => {
    if (!applyJob) return;

    // extra sanity validation
    if (!firstName || !lastName) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!qualification) {
      setFormError('Please select your highest qualification.');
      return;
    }
    if (!resumeFile) {
      setFormError('Please upload your resume.');
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(resumeFile.type)) {
      setFormError('Only PDF, DOC, or DOCX files are allowed.');
      return;
    }

    setFormError('');
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('jobId', applyJob.id);
      formData.append('jobTitle', applyJob.title);
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('qualification', qualification);
      formData.append('resume', resumeFile);

      const res = await fetch(
        'https://server-node-cjss.onrender.com/applications/apply',
        // "http://localhost:5000/applications/apply",
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok || data.error) {
        setFormError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }

      // alert("Application submitted successfully!");
      // setApplyJob(null);

      setShowSuccess(true);
      setApplyJob(null);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    } catch (err) {
      console.error(err);
      setFormError('Server error. Please try again later.');
      setSubmitting(false);
    }
  };

  return (
    <>
      <section
        className="
       px-6 py-20 text-white 
    bg-gradient-to-br 
    from-[#8b5cf6]/30 
    via-[#5ee7ff]/20 
    to-[#7dffb2]/30
    backdrop-blur-xl
    relative
  "
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <h2 className="mt-10 mb-3 text-4xl font-bold text-center">
            {filterMode === 'fresher'
              ? 'Fresher Job Opportunities'
              : filterMode === 'experienced'
              ? 'Experienced Job Openings'
              : 'Open Positions'}
          </h2>

          <p className="mb-12 text-center text-white/60">
            Search, filter & apply for your dream role.
          </p>

          {/* SEARCH + SORT */}
          <div className="flex flex-col items-center justify-center w-full gap-2 lg:flex-row">
            {/* SEARCH */}
            <div className="relative w-full lg:w-[55%]">
              <Search className="absolute -translate-y-1/2 left-4 top-1/2 text-white/40" />
              <input
                placeholder="Search by title, skills, or description…"
                className="w-full py-3 pl-12 pr-4 text-white border outline-none bg-neutral-900 border-neutral-700 rounded-xl focus:border-purple-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* SORT */}
            <div className="w-full lg:w-[25%] ">
              <select
                className="w-full px-4 py-3 border outline-none bg-neutral-900 border-neutral-700 rounded-xl focus:border-purple-400 "
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="title-asc">Title A → Z</option>
                <option value="title-desc">Title Z → A</option>
                <option value="exp-asc">Experience Low → High</option>
                <option value="exp-desc">Experience High → Low</option>
              </select>
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-neutral-900 border border-neutral-700 hover:border-purple-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* JOB CARDS */}
          {loading ? (
            <p className="text-center text-white/60">Loading jobs…</p>
          ) : paginatedRoles.length === 0 ? (
            <p className="text-center text-white/60">No jobs found for the selected filters.</p>
          ) : (
            <div className="grid gap-8 mt-6 lg:grid-cols-3">
              <AnimatePresence>
                {paginatedRoles.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                  group rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 
      transition-all duration-300 
  hover:-translate-y-3 
  hover:shadow-[0_0_25px_rgba(155,92,255,0.5)]
  hover:border-purple-400/60
  hover:bg-neutral-900/80`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className="px-3 py-1 text-xs border rounded-full border-white/10 text-white/70">
                        {job.category}
                      </span>
                    </div>

                    <p className="mt-3 text-white/70 line-clamp-3">{job.description}</p>

                    <div className="flex items-center justify-between mt-4 text-sm text-white/60">
                      <span className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-purple-300 group-hover:drop-shadow-[0_0_6px_rgba(155,92,255,0.8)] transition" />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-300 group-hover:drop-shadow-[0_0_6px_rgba(94,231,255,0.8)] transition" />
                        {job.location}
                      </span>
                    </div>

                    <div className="flex gap-3 mt-5">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="w-1/2 py-2 border rounded-xl bg-neutral-800 border-neutral-700 hover:border-purple-400"
                      >
                        View
                      </button>
                      <button
                        onClick={() => setApplyJob(job)}
                        className=" w-1/2 py-2 rounded-xl 
  bg-gradient-to-r from-purple-500 via-blue-400 to-green-400
  text-neutral-900 font-semibold
  shadow-lg shadow-purple-500/20
  hover:shadow-[0_0_25px_rgba(155,92,255,0.6)]
  hover:scale-[1.05]
  transition-all duration-300"
                      >
                        Apply
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* PAGINATION */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm ${
                  currentPage === idx + 1
                    ? 'border-purple-600 bg-purple-500/30'
                    : 'border-neutral-700 bg-neutral-900'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
        {/* JOB DETAILS POPUP */}
        {/* <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-2xl p-8 border bg-neutral-900 rounded-3xl border-neutral-700"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute p-2 rounded-full top-4 right-4 bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="mb-3 text-3xl font-bold">{selectedJob.title}</h3>

              <p className="mb-2 font-medium text-purple-400">
                Category: {selectedJob.category}
              </p>

              <div className="flex items-center gap-2 mb-3 text-white/70">
                <Brain className="w-4 h-4 text-purple-300 group-hover:drop-shadow-[0_0_6px_rgba(155,92,255,0.8)] transition" />
                Experience:{" "}
                <span className="text-white">{selectedJob.experience}</span>
              </div>

              <div className="flex items-center gap-2 mb-3 text-white/70">
                <MapPin className="w-4 h-4 text-blue-300 group-hover:drop-shadow-[0_0_6px_rgba(94,231,255,0.8)] transition" />
                Location:{" "}
                <span className="text-white">{selectedJob.location}</span>
              </div>

              {selectedJob.createdAt && (
                <p className="mb-4 text-sm text-white/50">
                  Posted on: {new Date(selectedJob.createdAt).toDateString()}
                </p>
              )}

              <h4 className="mt-4 mb-2 text-xl font-semibold">Description</h4>
              <p className="mb-4 leading-relaxed text-white/70">
                {selectedJob.description}
              </p>

              <h4 className="mb-2 text-xl font-semibold">Skills Required</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedJob.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border rounded-full bg-neutral-800 border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setApplyJob(selectedJob);
                  setSelectedJob(null);
                }}
                className="w-full py-3 transition bg-purple-600 hover:bg-purple-700 rounded-xl"
              >
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                className="
          w-full max-w-2xl relative p-8 rounded-3xl
          bg-gradient-to-br from-[#1a1a1a]/80 via-[#222]/50 to-[#0f0f0f]/80
          shadow-[0_0_35px_rgba(155,92,255,0.5)]
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
            hover:bg-purple-500/30 
            shadow-[0_0_12px_rgba(155,92,255,0.7)]
            transition-all
          "
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Title */}
                <h3 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-blue-300 to-green-300 bg-clip-text">
                  {selectedJob.title}
                </h3>

                <p className="mt-1 inline-block px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-300 shadow-[0_0_10px_rgba(155,92,255,0.5)]">
                  {selectedJob.category}
                </p>

                {/* Experience */}
                <div className="flex items-center gap-3 mt-4 text-white/80">
                  <span className="flex items-center gap-2 text-purple-300">
                    <Brain className="w-5 h-5" /> Experience:
                  </span>
                  <span className="font-semibold">{selectedJob.experience}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 mt-3 text-white/80">
                  <span className="flex items-center gap-2 text-green-300">
                    <MapPin className="w-5 h-5" /> Location:
                  </span>
                  <span className="font-semibold">{selectedJob.location}</span>
                </div>

                {/* Posted Date */}
                {selectedJob.createdAt && (
                  <p className="mt-3 text-sm text-white/50">
                    Posted on:{' '}
                    <span className="text-white">
                      {new Date(selectedJob.createdAt).toDateString()}
                    </span>
                  </p>
                )}

                {/* Description */}
                <h4 className="mt-8 mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  Job Description
                </h4>

                <p className="leading-relaxed text-white/70">{selectedJob.description}</p>

                {/* Skills */}
                <h4 className="mt-8 mb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-300">
                  Skills Required
                </h4>

                <div className="flex flex-wrap gap-3 mt-2">
                  {selectedJob.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                px-4 py-1 text-sm rounded-full
                bg-white/10 border border-white/20 backdrop-blur-md
                shadow-[0_0_10px_rgba(94,231,255,0.4)]
              "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => {
                    setApplyJob(selectedJob);
                    setSelectedJob(null);
                  }}
                  className="
            w-full mt-10 py-3 text-lg font-bold
            rounded-xl
            bg-gradient-to-r from-purple-500 via-blue-400 to-green-400
            text-neutral-900
            shadow-[0_0_20px_rgba(155,92,255,0.7)]
            hover:shadow-[0_0_25px_rgba(155,92,255,1)]
            hover:scale-[1.03]
            transition-all
          "
                >
                  Apply Now 🚀
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* APPLY FORM POPUP (MULTI-STEP) */}
        <AnimatePresence>
          {applyJob && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className=" w-full max-w-xl p-8 relative rounded-3xl
    bg-gradient-to-br from-[#1a1a1a]/80 via-[#222222]/60 to-[#1a1a1a]/80
    backdrop-blur-2xl
    border border-white/10 
    shadow-[0_0_25px_rgba(155,92,255,0.35)]
    transition-all"
              >
                <button
                  onClick={() => setApplyJob(null)}
                  className="
  absolute top-4 right-4 
  bg-white/10 backdrop-blur-md 
  p-2 rounded-full 
  hover:bg-purple-500/30 
  transition 
  shadow-[0_0_10px_rgba(155,92,255,0.4)]
"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="mb-5 text-2xl font-bold">Apply for {applyJob.title}</h3>

                {/* Step indicators */}
                <div className="flex justify-center gap-3 mb-6">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`
  w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
  transition-all duration-300
  ${
    applyStep === s
      ? 'bg-gradient-to-br from-purple-500 via-blue-400 to-green-400 text-black shadow-[0_0_12px_rgba(155,92,255,0.7)] scale-105'
      : 'bg-white/10 text-white/40 backdrop-blur-md'
  }
`}
                    >
                      {s}
                    </div>
                  ))}
                </div>

                {/* Error banner */}
                {formError && (
                  <p className="p-2 mb-4 text-sm text-red-400 border rounded-lg bg-red-400/10 border-red-500/40">
                    {formError}
                  </p>
                )}

                {/* STEP 1 – Personal Info */}
                {applyStep === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-white/70">First Name</label>
                      <input
                        className="
  w-full px-4 py-2 mt-1 rounded-xl 
  bg-white/10 backdrop-blur-md
  border border-white/20 
  focus:border-purple-400
  focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
  outline-none
  transition-all
"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-white/70">Last Name</label>
                      <input
                        className="
  w-full px-4 py-2 mt-1 rounded-xl 
  bg-white/10 backdrop-blur-md
  border border-white/20 
  focus:border-purple-400
  focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
  outline-none
  transition-all
"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-white/70">Email</label>
                      <input
                        type="email"
                        className="
  w-full px-4 py-2 mt-1 rounded-xl 
  bg-white/10 backdrop-blur-md
  border border-white/20 
  focus:border-purple-400
  focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
  outline-none
  transition-all
"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-white/70">Mobile Number</label>
                      <input
                        type="tel"
                        className="
  w-full px-4 py-2 mt-1 rounded-xl 
  bg-white/10 backdrop-blur-md
  border border-white/20 
  focus:border-purple-400
  focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
  outline-none
  transition-all
"
                        placeholder="9876543210"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-end mt-6">
                      <button
                        onClick={() => {
                          if (!firstName || !lastName) {
                            setFormError('Please enter your full name.');
                            return;
                          }
                          if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                            setFormError('Please enter a valid email address.');
                            return;
                          }
                          if (!phone.match(/^[0-9]{10}$/)) {
                            setFormError('Please enter a valid 10-digit mobile number.');
                            return;
                          }
                          setFormError('');
                          setApplyStep(2);
                        }}
                        className="
  px-6 py-2 rounded-xl font-semibold
  bg-gradient-to-r from-purple-500 via-blue-400 to-green-400
  text-neutral-900
  shadow-[0_0_15px_rgba(155,92,255,0.5)]
  hover:shadow-[0_0_20px_rgba(155,92,255,0.7)]
  hover:scale-[1.03]
  transition-all duration-300
"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 – Education */}
                {applyStep === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-white/70">Highest Education Qualification</label>
                      <select
                        className="
  w-full px-4 py-2 mt-1 rounded-xl 
  bg-white
  border border-white/20 
  focus:border-purple-400
  focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
  outline-none
  transition-all text-black
"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                      >
                        <option value="">Select Highest Qualification</option>
                        <option value="B.Tech">B.Tech / B.E</option>
                        <option value="M.Tech">M.Tech / M.E</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="Degree">Degree</option>
                      </select>
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        onClick={() => setApplyStep(1)}
                        className="px-6 py-2 transition-all border rounded-xl bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => {
                          if (!qualification) {
                            setFormError('Please select your highest qualification.');
                            return;
                          }
                          setFormError('');
                          setApplyStep(3);
                        }}
                        className="
  px-6 py-2 rounded-xl font-semibold
  bg-gradient-to-r from-purple-500 via-blue-400 to-green-400
  text-neutral-900
  shadow-[0_0_15px_rgba(155,92,255,0.5)]
  hover:shadow-[0_0_20px_rgba(155,92,255,0.7)]
  hover:scale-[1.03]
  transition-all duration-300
"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 – Resume Upload */}
                {applyStep === 3 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-white/70">Upload Resume (PDF / DOC / DOCX)</label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="
  w-full px-4 py-2 mt-1 rounded-xl 
  bg-white/10 backdrop-blur-md
  border border-white/20 
  focus:border-purple-400
  focus:shadow-[0_0_12px_rgba(155,92,255,0.5)]
  outline-none
  transition-all
"
                        onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                      />
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        onClick={() => setApplyStep(2)}
                        className="px-6 py-2 transition-all border rounded-xl bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => {
                          if (!resumeFile) {
                            setFormError('Please upload your resume.');
                            return;
                          }
                          setFormError('');
                          setApplyStep(4);
                        }}
                        className="px-6 py-2 bg-purple-600 rounded-xl hover:bg-purple-700"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4 – Review & Submit */}
                {applyStep === 4 && (
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold">Review Your Details</h4>

                    <div
                      className="
  bg-white/10 p-4 rounded-xl 
  backdrop-blur-xl 
  border border-white/20 
  shadow-[0_0_15px_rgba(94,231,255,0.3)]
"
                    >
                      <p>
                        <strong>Name:</strong> {firstName} {lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {email}
                      </p>
                      <p>
                        <strong>Mobile:</strong> {phone}
                      </p>
                      <p>
                        <strong>Qualification:</strong> {qualification}
                      </p>
                      <p>
                        <strong>Resume:</strong> {resumeFile?.name ?? 'No file selected'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setApplyStep(3)}
                        className="px-6 py-2 transition-all border rounded-xl bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
                      >
                        ← Back
                      </button>

                      <button
                        disabled={submitting}
                        onClick={handleSubmitApplication}
                        className={`px-6 py-2 rounded-xl ${
                          submitting
                            ? 'bg-purple-400 cursor-not-allowed'
                            : 'bg-purple-600 hover:bg-purple-700'
                        }`}
                      >
                        {submitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[99999]"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="
          px-8 py-6 rounded-3xl 
          bg-gradient-to-br from-purple-600/90 via-blue-500/90 to-green-400/90
          text-white font-semibold text-lg
          shadow-[0_0_45px_rgba(155,92,255,0.6)]
          border border-white/20
        "
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 text-xl rounded-full bg-white/20">
                  ✓
                </span>
                <p>Application submitted successfully!</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const JobOpeningsFresher = () => {
  return <JobOpeningsBase filterMode="fresher" pageSize={6} />;
};

export default JobOpeningsFresher;
