// "use client";

// import { useState } from "react";

// interface EventRegisterPageProps {
//   eventId: string;
//   navigateTo: (page: string) => void;
// }

// export default function EventRegisterPage({
//   eventId,
//   navigateTo,
// }: EventRegisterPageProps) {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     organization: "",
//     jobTitle: "",
//   });

//   const [errors, setErrors] = useState<any>({});
//   const [showPopup, setShowPopup] = useState(false);

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   const phoneRegex = /^[0-9]{10,15}$/;
//   const textOnlyRegex = /^[A-Za-z\s()\/-]*$/;

//   const validateForm = () => {
//     let newErrors: any = {};

//     if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
//     else if (!textOnlyRegex.test(form.fullName))
//       newErrors.fullName = "Only alphabets allowed";

//     if (!form.email.trim()) newErrors.email = "Email is required";
//     else if (!emailRegex.test(form.email))
//       newErrors.email = "Invalid email format";

//     if (!form.phone.trim()) newErrors.phone = "Phone number is required";
//     else if (!phoneRegex.test(form.phone))
//       newErrors.phone = "Phone must be 10–15 digits";

//     if (!form.organization.trim())
//       newErrors.organization = "Organization is required";
//     else if (!textOnlyRegex.test(form.organization))
//       newErrors.organization = "Only alphabets allowed";

//     if (!form.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
//     else if (!textOnlyRegex.test(form.jobTitle))
//       newErrors.jobTitle = "Only alphabets allowed";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const res = await fetch(
//       "https://server-node-cjss.onrender.com/events/register",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...form, eventId }),
//       }
//     );

//     const data = await res.json();

//     if (data.success) {
//       setShowPopup(true);
//       setTimeout(() => {
//         setShowPopup(false);
//         navigateTo("home");
//       }, 2500);
//     }
//   };

//   return (
//     <>
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
//           <div className="bg-neutral-900 px-10 py-8 rounded-2xl">
//             <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
//               Registration Successful!
//             </h2>
//             <p className="text-gray-300 mt-3">
//               Thank you! We will contact you soon.
//             </p>
//           </div>
//         </div>
//       )}

//       <section className="min-h-screen bg-neutral-950 flex justify-center items-center text-white px-6 py-12">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-2xl bg-neutral-900/80 p-10 rounded-3xl shadow-xl border border-neutral-800"
//         >
//           <h2 className="text-4xl text-center font-extrabold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent mb-8">
//             Event Registration
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Full Name */}
//             <div>
//               <label className="text-sm mb-1 block">Full Name *</label>
//               <input
//                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
//                 value={form.fullName}
//                 onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//               />
//               <div className="h-5 mt-1">
//                 {errors.fullName && (
//                   <p className="text-red-400 text-sm">{errors.fullName}</p>
//                 )}
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm mb-1 block">Email *</label>
//               <input
//                 type="email"
//                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//               <div className="h-5 mt-1">
//                 {errors.email && (
//                   <p className="text-red-400 text-sm">{errors.email}</p>
//                 )}
//               </div>
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm mb-1 block">Phone Number *</label>
//               <input
//                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               />
//               <div className="h-5 mt-1">
//                 {errors.phone && (
//                   <p className="text-red-400 text-sm">{errors.phone}</p>
//                 )}
//               </div>
//             </div>

//             {/* Organization */}
//             <div>
//               <label className="text-sm mb-1 block">Organization *</label>
//               <input
//                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
//                 value={form.organization}
//                 onChange={(e) =>
//                   setForm({ ...form, organization: e.target.value })
//                 }
//               />
//               <div className="h-5 mt-1">
//                 {errors.organization && (
//                   <p className="text-red-400 text-sm">{errors.organization}</p>
//                 )}
//               </div>
//             </div>

//             {/* Job Title */}
//             <div className="md:col-span-2">
//               <label className="text-sm mb-1 block">Job Title *</label>
//               <input
//                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
//                 value={form.jobTitle}
//                 onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
//               />
//               <div className="h-5 mt-1">
//                 {errors.jobTitle && (
//                   <p className="text-red-400 text-sm">{errors.jobTitle}</p>
//                 )}
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="mt-8 w-full py-4 bg-gradient-to-r from-sky-400 to-purple-500 rounded-xl font-semibold text-lg"
//           >
//             Submit Registration
//           </button>
//         </form>
//       </section>
//     </>
//   );
// }
"use client";

import { useState } from "react";

interface EventRegisterPageProps {
  eventId: string;
  navigateTo: (page: string) => void;
}

export default function EventRegisterPage({
  eventId,
  navigateTo,
}: EventRegisterPageProps) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    jobTitle: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showPopup, setShowPopup] = useState(false);

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const textOnlyRegex = /^[A-Za-z\s()\/-]*$/;

  const validateForm = () => {
    let newErrors: any = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (!textOnlyRegex.test(form.fullName))
      newErrors.fullName = "Only alphabets allowed";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(form.phone))
      newErrors.phone = "Phone must be 10–15 digits";

    if (!form.organization.trim())
      newErrors.organization = "Organization is required";
    else if (!textOnlyRegex.test(form.organization))
      newErrors.organization = "Only alphabets allowed";

    if (!form.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    else if (!textOnlyRegex.test(form.jobTitle))
      newErrors.jobTitle = "Only alphabets allowed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const res = await fetch(
      "https://server-node-cjss.onrender.com/events/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, eventId }),
      }
    );

    const data = await res.json();

    if (data.success) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigateTo("home");
      }, 2500);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-neutral-900 px-10 py-8 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-2">
              Registration Successful
            </h2>
            <p className="text-white/60 text-sm">
              Thank you! We will contact you soon.
            </p>
          </div>
        </div>
      )}

      <section className="min-h-screen bg-neutral-950 flex justify-center items-center text-white px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-neutral-900/80 p-10 rounded-3xl shadow-xl border border-neutral-800"
        >
          {/* Label (carousel style) */}
          <span className="block text-[10px] tracking-[0.25em] uppercase text-white/60 text-center mb-3">
            Event Registration
          </span>

          {/* Title (clean, no heavy gradient) */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
            Register for this Event
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="text-xs mb-1 block text-white/70">
                Full Name *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.fullName && (
                  <p className="text-red-400 text-xs">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs mb-1 block text-white/70">
                Email *
              </label>
              <input
                type="email"
                className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs mb-1 block text-white/70">
                Phone Number *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.phone && (
                  <p className="text-red-400 text-xs">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="text-xs mb-1 block text-white/70">
                Organization *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
                value={form.organization}
                onChange={(e) =>
                  setForm({ ...form, organization: e.target.value })
                }
              />
              <div className="h-5 mt-1">
                {errors.organization && (
                  <p className="text-red-400 text-xs">{errors.organization}</p>
                )}
              </div>
            </div>

            {/* Job Title */}
            <div className="md:col-span-2">
              <label className="text-xs mb-1 block text-white/70">
                Job Title *
              </label>
              <input
                className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
                value={form.jobTitle}
                onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
              />
              <div className="h-5 mt-1">
                {errors.jobTitle && (
                  <p className="text-red-400 text-xs">{errors.jobTitle}</p>
                )}
              </div>
            </div>
          </div>

          {/* Button – SAME AS CAROUSEL */}
          <button
            type="submit"
            className="mt-8 w-full rounded-full border border-white/40 px-6 py-3 
                       text-sm sm:text-base text-white 
                       hover:bg-white/10 hover:border-white/70 
                       transition-all cursor-pointer"
          >
            Submit Registration →
          </button>
        </form>
      </section>
    </>
  );
}
