// // // "use client";

// // // import { useState } from "react";

// // // interface EventRegisterPageProps {
// // //   eventId: string;
// // //   navigateTo: (page: string) => void;
// // // }

// // // export default function EventRegisterPage({
// // //   eventId,
// // //   navigateTo,
// // // }: EventRegisterPageProps) {
// // //   const [form, setForm] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     phone: "",
// // //     organization: "",
// // //     jobTitle: "",
// // //   });

// // //   const [errors, setErrors] = useState<any>({});
// // //   const [showPopup, setShowPopup] = useState(false);

// // //   const emailRegex = /^\S+@\S+\.\S+$/;
// // //   const phoneRegex = /^[0-9]{10,15}$/;
// // //   const textOnlyRegex = /^[A-Za-z\s()\/-]*$/;

// // //   const validateForm = () => {
// // //     let newErrors: any = {};

// // //     if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
// // //     else if (!textOnlyRegex.test(form.fullName))
// // //       newErrors.fullName = "Only alphabets allowed";

// // //     if (!form.email.trim()) newErrors.email = "Email is required";
// // //     else if (!emailRegex.test(form.email))
// // //       newErrors.email = "Invalid email format";

// // //     if (!form.phone.trim()) newErrors.phone = "Phone number is required";
// // //     else if (!phoneRegex.test(form.phone))
// // //       newErrors.phone = "Phone must be 10–15 digits";

// // //     if (!form.organization.trim())
// // //       newErrors.organization = "Organization is required";
// // //     else if (!textOnlyRegex.test(form.organization))
// // //       newErrors.organization = "Only alphabets allowed";

// // //     if (!form.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
// // //     else if (!textOnlyRegex.test(form.jobTitle))
// // //       newErrors.jobTitle = "Only alphabets allowed";

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (!validateForm()) return;

// // //     const res = await fetch(
// // //       "https://server-node-cjss.onrender.com/events/register",
// // //       {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ ...form, eventId }),
// // //       }
// // //     );

// // //     const data = await res.json();

// // //     if (data.success) {
// // //       setShowPopup(true);
// // //       setTimeout(() => {
// // //         setShowPopup(false);
// // //         navigateTo("home");
// // //       }, 2500);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       {showPopup && (
// // //         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
// // //           <div className="bg-neutral-900 px-10 py-8 rounded-2xl">
// // //             <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
// // //               Registration Successful!
// // //             </h2>
// // //             <p className="text-gray-300 mt-3">
// // //               Thank you! We will contact you soon.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <section className="min-h-screen bg-neutral-950 flex justify-center items-center text-white px-6 py-12">
// // //         <form
// // //           onSubmit={handleSubmit}
// // //           className="w-full max-w-2xl bg-neutral-900/80 p-10 rounded-3xl shadow-xl border border-neutral-800"
// // //         >
// // //           <h2 className="text-4xl text-center font-extrabold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent mb-8">
// // //             Event Registration
// // //           </h2>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {/* Full Name */}
// // //             <div>
// // //               <label className="text-sm mb-1 block">Full Name *</label>
// // //               <input
// // //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
// // //                 value={form.fullName}
// // //                 onChange={(e) => setForm({ ...form, fullName: e.target.value })}
// // //               />
// // //               <div className="h-5 mt-1">
// // //                 {errors.fullName && (
// // //                   <p className="text-red-400 text-sm">{errors.fullName}</p>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Email */}
// // //             <div>
// // //               <label className="text-sm mb-1 block">Email *</label>
// // //               <input
// // //                 type="email"
// // //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
// // //                 value={form.email}
// // //                 onChange={(e) => setForm({ ...form, email: e.target.value })}
// // //               />
// // //               <div className="h-5 mt-1">
// // //                 {errors.email && (
// // //                   <p className="text-red-400 text-sm">{errors.email}</p>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Phone */}
// // //             <div>
// // //               <label className="text-sm mb-1 block">Phone Number *</label>
// // //               <input
// // //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
// // //                 value={form.phone}
// // //                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
// // //               />
// // //               <div className="h-5 mt-1">
// // //                 {errors.phone && (
// // //                   <p className="text-red-400 text-sm">{errors.phone}</p>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Organization */}
// // //             <div>
// // //               <label className="text-sm mb-1 block">Organization *</label>
// // //               <input
// // //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
// // //                 value={form.organization}
// // //                 onChange={(e) =>
// // //                   setForm({ ...form, organization: e.target.value })
// // //                 }
// // //               />
// // //               <div className="h-5 mt-1">
// // //                 {errors.organization && (
// // //                   <p className="text-red-400 text-sm">{errors.organization}</p>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Job Title */}
// // //             <div className="md:col-span-2">
// // //               <label className="text-sm mb-1 block">Job Title *</label>
// // //               <input
// // //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-sky-400 outline-none"
// // //                 value={form.jobTitle}
// // //                 onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
// // //               />
// // //               <div className="h-5 mt-1">
// // //                 {errors.jobTitle && (
// // //                   <p className="text-red-400 text-sm">{errors.jobTitle}</p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <button
// // //             type="submit"
// // //             className="mt-8 w-full py-4 bg-gradient-to-r from-sky-400 to-purple-500 rounded-xl font-semibold text-lg"
// // //           >
// // //             Submit Registration
// // //           </button>
// // //         </form>
// // //       </section>
// // //     </>
// // //   );
// // // }
// // "use client";

// // import { useState } from "react";

// // interface EventRegisterPageProps {
// //   eventId: string;
// //   navigateTo: (page: string) => void;
// // }

// // export default function EventRegisterPage({
// //   eventId,
// //   navigateTo,
// // }: EventRegisterPageProps) {
// //   const [form, setForm] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     organization: "",
// //     jobTitle: "",
// //   });

// //   const [errors, setErrors] = useState<any>({});
// //   const [showPopup, setShowPopup] = useState(false);

// //   const emailRegex = /^\S+@\S+\.\S+$/;
// //   const phoneRegex = /^[0-9]{10,15}$/;
// //   const textOnlyRegex = /^[A-Za-z\s()\/-]*$/;

// //   const validateForm = () => {
// //     let newErrors: any = {};

// //     if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
// //     else if (!textOnlyRegex.test(form.fullName))
// //       newErrors.fullName = "Only alphabets allowed";

// //     if (!form.email.trim()) newErrors.email = "Email is required";
// //     else if (!emailRegex.test(form.email))
// //       newErrors.email = "Invalid email format";

// //     if (!form.phone.trim()) newErrors.phone = "Phone number is required";
// //     else if (!phoneRegex.test(form.phone))
// //       newErrors.phone = "Phone must be 10–15 digits";

// //     if (!form.organization.trim())
// //       newErrors.organization = "Organization is required";
// //     else if (!textOnlyRegex.test(form.organization))
// //       newErrors.organization = "Only alphabets allowed";

// //     if (!form.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
// //     else if (!textOnlyRegex.test(form.jobTitle))
// //       newErrors.jobTitle = "Only alphabets allowed";

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     const res = await fetch("http://172.16.16.33:5000/events/register", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ ...form, eventId }),
// //     });

// //     const data = await res.json();

// //     if (data.success) {
// //       setShowPopup(true);
// //       setTimeout(() => {
// //         setShowPopup(false);
// //         navigateTo("home");
// //       }, 2500);
// //     }
// //   };

// //   return (
// //     <>
// //       {showPopup && (
// //         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
// //           <div className="bg-neutral-900 px-10 py-8 rounded-2xl border border-white/10">
// //             <h2 className="text-xl font-semibold text-white mb-2">
// //               Registration Successful
// //             </h2>
// //             <p className="text-white/60 text-sm">
// //               Thank you! We will contact you soon.
// //             </p>
// //           </div>
// //         </div>
// //       )}

// //       <section className="min-h-screen bg-neutral-950 flex justify-center items-center text-white px-6 py-12">
// //         <form
// //           onSubmit={handleSubmit}
// //           className="w-full max-w-2xl bg-neutral-900/80 p-10 rounded-3xl shadow-xl border border-neutral-800"
// //         >
// //           {/* Label (carousel style) */}
// //           <span className="block text-[10px] tracking-[0.25em] uppercase text-white/60 text-center mb-3">
// //             Event Registration
// //           </span>

// //           {/* Title (clean, no heavy gradient) */}
// //           <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
// //             Register for this Event
// //           </h2>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Full Name */}
// //             <div>
// //               <label className="text-xs mb-1 block text-white/70">
// //                 Full Name *
// //               </label>
// //               <input
// //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
// //                 value={form.fullName}
// //                 onChange={(e) => setForm({ ...form, fullName: e.target.value })}
// //               />
// //               <div className="h-5 mt-1">
// //                 {errors.fullName && (
// //                   <p className="text-red-400 text-xs">{errors.fullName}</p>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label className="text-xs mb-1 block text-white/70">
// //                 Email *
// //               </label>
// //               <input
// //                 type="email"
// //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
// //                 value={form.email}
// //                 onChange={(e) => setForm({ ...form, email: e.target.value })}
// //               />
// //               <div className="h-5 mt-1">
// //                 {errors.email && (
// //                   <p className="text-red-400 text-xs">{errors.email}</p>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Phone */}
// //             <div>
// //               <label className="text-xs mb-1 block text-white/70">
// //                 Phone Number *
// //               </label>
// //               <input
// //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
// //                 value={form.phone}
// //                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
// //               />
// //               <div className="h-5 mt-1">
// //                 {errors.phone && (
// //                   <p className="text-red-400 text-xs">{errors.phone}</p>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Organization */}
// //             <div>
// //               <label className="text-xs mb-1 block text-white/70">
// //                 Organization *
// //               </label>
// //               <input
// //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
// //                 value={form.organization}
// //                 onChange={(e) =>
// //                   setForm({ ...form, organization: e.target.value })
// //                 }
// //               />
// //               <div className="h-5 mt-1">
// //                 {errors.organization && (
// //                   <p className="text-red-400 text-xs">{errors.organization}</p>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Job Title */}
// //             <div className="md:col-span-2">
// //               <label className="text-xs mb-1 block text-white/70">
// //                 Job Title *
// //               </label>
// //               <input
// //                 className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-white/60 outline-none"
// //                 value={form.jobTitle}
// //                 onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
// //               />
// //               <div className="h-5 mt-1">
// //                 {errors.jobTitle && (
// //                   <p className="text-red-400 text-xs">{errors.jobTitle}</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Button – SAME AS CAROUSEL */}
// //           <button
// //             type="submit"
// //             className="mt-8 w-full rounded-full border border-white/40 px-6 py-3
// //                        text-sm sm:text-base text-white
// //                        hover:bg-white/10 hover:border-white/70
// //                        transition-all cursor-pointer"
// //           >
// //             Submit Registration →
// //           </button>
// //         </form>
// //       </section>
// //     </>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ArrowLeft, Check, AlertCircle } from "lucide-react";

// interface Event {
//   _id: string;
//   title: string;
//   subtitle: string;
//   date: string;
//   location: string;
//   image: string;
// }

// export default function EventRegisterPage() {
//   const navigate = useNavigate();
//   const { eventId } = useParams<{ eventId: string }>();

//   const [event, setEvent] = useState<Event | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     organization: "",
//     jobTitle: "",
//   });

//   const [errors, setErrors] = useState<any>({});

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   const phoneRegex = /^[0-9]{10,15}$/;
//   const textOnlyRegex = /^[A-Za-z\s()\/-]*$/;

//   // Load event details
//   useEffect(() => {
//     if (!eventId) return;

//     async function loadEvent() {
//       try {
//         // const res = await fetch(`http://172.16.16.33:5000/events/${eventId}`);
//         const res = await fetch(`http://localhost:5000/events/${eventId}`);
//         const data = await res.json();
//         setEvent(data.event);
//       } catch (error) {
//         console.error("Error loading event:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadEvent();
//   }, [eventId]);

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

//     setIsSubmitting(true);

//     try {
//       const res = await fetch("http://172.16.16.33:5000/events/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...form, eventId }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setShowPopup(true);
//         setTimeout(() => {
//           setShowPopup(false);
//           navigate("/");
//           window.scrollTo({ top: 0, behavior: "smooth" });
//         }, 2500);
//       }
//     } catch (error) {
//       console.error("Registration failed:", error);
//       alert("Registration failed. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleNavigate = (path: string) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Loading state
//   if (isLoading) {
//     return (
//       <section className="min-h-screen bg-neutral-950 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-white/60">Loading registration form...</p>
//         </div>
//       </section>
//     );
//   }

//   // Event not found
//   if (!event) {
//     return (
//       <section className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
//         <div className="text-center">
//           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
//             <AlertCircle className="w-10 h-10 text-red-500" />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Event Not Found
//           </h2>
//           <p className="text-white/60 mb-6">
//             Unable to load event details for registration.
//           </p>
//           <button
//             onClick={() => handleNavigate("/")}
//             className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
//           >
//             Back to Home
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       {/* Success Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fadeIn">
//           <div className="bg-neutral-900 px-8 sm:px-12 py-10 rounded-3xl border border-white/10 max-w-md w-full text-center shadow-2xl">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border-4 border-green-500/20 mb-6">
//               <Check className="w-8 h-8 text-green-500" />
//             </div>
//             <h2 className="text-2xl font-semibold text-white mb-3">
//               Registration Successful!
//             </h2>
//             <p className="text-white/60 text-sm">
//               Thank you for registering. We will contact you soon with further
//               details.
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <section className="min-h-screen bg-neutral-950 text-white px-4 py-12 md:py-20">
//         <div className="max-w-3xl mx-auto">
//           {/* Back Button */}
//           <button
//             onClick={() => handleNavigate(`/events/${eventId}`)}
//             className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Event
//           </button>

//           {/* Event Info Banner */}
//           <div className="relative mb-10 p-6 rounded-3xl overflow-hidden border border-neutral-800">
//             <div className="absolute inset-0 opacity-10">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />

//             <div className="relative z-10">
//               <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-3">
//                 Registration Open
//               </span>
//               <h3 className="text-xl font-semibold text-white mb-1">
//                 {event.title}
//               </h3>
//               <p className="text-white/60 text-sm">{event.subtitle}</p>
//               <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/70">
//                 <span>📅 {event.date}</span>
//                 <span>📍 {event.location}</span>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-neutral-900/80 p-8 sm:p-10 rounded-3xl shadow-xl border border-neutral-800"
//           >
//             {/* Label */}
//             <span className="block text-[10px] tracking-[0.25em] uppercase text-white/60 text-center mb-3">
//               Event Registration
//             </span>

//             {/* Title */}
//             <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
//               Complete Your Registration
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Full Name */}
//               <div>
//                 <label className="text-xs mb-2 block text-white/70 font-medium">
//                   Full Name *
//                 </label>
//                 <input
//                   className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
//                   placeholder="John Doe"
//                   value={form.fullName}
//                   onChange={(e) =>
//                     setForm({ ...form, fullName: e.target.value })
//                   }
//                 />
//                 <div className="h-5 mt-1">
//                   {errors.fullName && (
//                     <p className="text-red-400 text-xs flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" />
//                       {errors.fullName}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="text-xs mb-2 block text-white/70 font-medium">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
//                   placeholder="john@example.com"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//                 <div className="h-5 mt-1">
//                   {errors.email && (
//                     <p className="text-red-400 text-xs flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" />
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="text-xs mb-2 block text-white/70 font-medium">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
//                   placeholder="+1 (555) 000-0000"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 />
//                 <div className="h-5 mt-1">
//                   {errors.phone && (
//                     <p className="text-red-400 text-xs flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" />
//                       {errors.phone}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Organization */}
//               <div>
//                 <label className="text-xs mb-2 block text-white/70 font-medium">
//                   Organization *
//                 </label>
//                 <input
//                   className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
//                   placeholder="ACME Corp"
//                   value={form.organization}
//                   onChange={(e) =>
//                     setForm({ ...form, organization: e.target.value })
//                   }
//                 />
//                 <div className="h-5 mt-1">
//                   {errors.organization && (
//                     <p className="text-red-400 text-xs flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" />
//                       {errors.organization}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Job Title */}
//               <div className="md:col-span-2">
//                 <label className="text-xs mb-2 block text-white/70 font-medium">
//                   Job Title *
//                 </label>
//                 <input
//                   className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
//                   placeholder="Software Engineer"
//                   value={form.jobTitle}
//                   onChange={(e) =>
//                     setForm({ ...form, jobTitle: e.target.value })
//                   }
//                 />
//                 <div className="h-5 mt-1">
//                   {errors.jobTitle && (
//                     <p className="text-red-400 text-xs flex items-center gap-1">
//                       <AlertCircle className="w-3 h-3" />
//                       {errors.jobTitle}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="mt-8 w-full rounded-full bg-gradient-to-r from-purple-600 to-sky-600 px-6 py-4
//                          text-sm sm:text-base text-white font-semibold
//                          hover:from-purple-700 hover:to-sky-700
//                          disabled:opacity-50 disabled:cursor-not-allowed
//                          transition-all transform hover:scale-105 disabled:transform-none
//                          shadow-lg hover:shadow-purple-500/50"
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   Submitting...
//                 </span>
//               ) : (
//                 "Complete Registration →"
//               )}
//             </button>

//             <p className="mt-6 text-center text-xs text-white/50">
//               By registering, you agree to receive event updates and
//               communications from CJSS.
//             </p>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Check, AlertCircle } from "lucide-react";

interface Event {
  _id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  image: string;
}

export default function EventRegisterPage() {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    jobTitle: "",
  });

  const [errors, setErrors] = useState<any>({});

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const textOnlyRegex = /^[A-Za-z\s()\/-]*$/;

  // Load event details
  useEffect(() => {
    if (!eventId) return;

    async function loadEvent() {
      try {
        const res = await fetch(`http://172.16.16.33:5000/events/${eventId}`);
        // const res = await fetch(`http://localhost:5000/events/${eventId}`);
        const data = await res.json();
        setEvent(data.event);
      } catch (error) {
        console.error("Error loading event:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadEvent();
  }, [eventId]);

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

    setIsSubmitting(true);

    try {
      const res = await fetch("http://172.16.16.33:5000/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, eventId }),
      });

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 2500);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading state
  if (isLoading) {
    return (
      <section className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading registration form...</p>
        </div>
      </section>
    );
  }

  // Event not found
  if (!event) {
    return (
      <section className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Event Not Found
          </h2>
          <p className="text-white/60 mb-6">
            Unable to load event details for registration.
          </p>
          <button
            onClick={() => handleNavigate("/")}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fadeIn">
          <div className="bg-neutral-900 px-8 sm:px-12 py-10 rounded-3xl border border-white/10 max-w-md w-full text-center shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border-4 border-green-500/20 mb-6">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Registration Successful!
            </h2>
            <p className="text-white/60 text-sm">
              Thank you for registering. We will contact you soon with further
              details.
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="min-h-screen bg-neutral-950 text-white px-4 py-12 md:py-20">
        <div className="h-10"></div>
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => handleNavigate(`/events/${eventId}`)}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Event
          </button>

          {/* Event Info Banner */}
          <div className="relative mb-10 p-6 rounded-3xl overflow-hidden border border-neutral-800">
            <div className="absolute inset-0 opacity-10">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-3">
                Registration Open
              </span>
              <h3 className="text-xl font-semibold text-white mb-1">
                {event.title}
              </h3>
              <p className="text-white/60 text-sm">{event.subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/70">
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900/80 p-8 sm:p-10 rounded-3xl shadow-xl border border-neutral-800"
          >
            {/* Label */}
            <span className="block text-[10px] tracking-[0.25em] uppercase text-white/60 text-center mb-3">
              Event Registration
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
              Complete Your Registration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="text-xs mb-2 block text-white/70 font-medium">
                  Full Name *
                </label>
                <input
                  className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
                <div className="h-5 mt-1">
                  {errors.fullName && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs mb-2 block text-white/70 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <div className="h-5 mt-1">
                  {errors.email && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs mb-2 block text-white/70 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <div className="h-5 mt-1">
                  {errors.phone && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="text-xs mb-2 block text-white/70 font-medium">
                  Organization *
                </label>
                <input
                  className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
                  placeholder="ACME Corp"
                  value={form.organization}
                  onChange={(e) =>
                    setForm({ ...form, organization: e.target.value })
                  }
                />
                <div className="h-5 mt-1">
                  {errors.organization && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.organization}
                    </p>
                  )}
                </div>
              </div>

              {/* Job Title */}
              <div className="md:col-span-2">
                <label className="text-xs mb-2 block text-white/70 font-medium">
                  Job Title *
                </label>
                <input
                  className="rounded-xl w-full py-3 px-4 bg-neutral-800 border border-neutral-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder:text-white/40"
                  placeholder="Software Engineer"
                  value={form.jobTitle}
                  onChange={(e) =>
                    setForm({ ...form, jobTitle: e.target.value })
                  }
                />
                <div className="h-5 mt-1">
                  {errors.jobTitle && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.jobTitle}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button - OLD STYLE */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full rounded-full border border-white/40 px-6 py-3
                         text-sm sm:text-base text-white
                         hover:bg-white/10 hover:border-white/70
                         disabled:opacity-50 disabled:cursor-not-allowed
                         backdrop-blur transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </span>
              ) : (
                "Submit Registration →"
              )}
            </button>

            <p className="mt-6 text-center text-xs text-white/50">
              By registering, you agree to receive event updates and
              communications from CJSS.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
