// "use client";

// import { useState } from "react";

// export default function Conversation({
//   onSuccess,
// }: {
//   onSuccess?: () => void;
// }) {
//   const [email, setEmail] = useState("");
//   const [initiative, setInitiative] = useState("");
//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("loading");
//     setErrorMsg("");

//     try {
//       const res = await fetch(
//         "https://server-node-cjss.onrender.com/conversations",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, initiative }),
//         }
//       );

//       const data = await res.json();
//       if (!res.ok || !data.success) throw new Error(data.message);

//       setStatus("success");

//       setEmail("");
//       setInitiative("");

//       if (onSuccess) onSuccess();

//       setTimeout(() => {
//         setStatus("idle");
//       }, 3000);
//     } catch (err: any) {
//       setStatus("error");
//       setErrorMsg(err.message || "Something went wrong");
//     }
//   };

//   return (
//     <section className="px-6 py-28 bg-linear-to-b from-neutral-950 to-neutral-900">
//       <div className="max-w-6xl mx-auto">
//         <div
//           className="rounded-4xl border border-white/10 bg-neutral-900/70 p-10
//                         grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
//         >
//           {/* LEFT CONTENT */}
//           <div className="space-y-5">
//             <p className="text-xs uppercase tracking-[0.5em] text-white/60">
//               Start a conversation
//             </p>
//             <h2 className="text-4xl font-bold text-white">
//               Let’s co-create your next release
//             </h2>
//             <p className="text-lg leading-relaxed text-white/70">
//               Tell us about your SAP Commerce upgrade, AEM personalization
//               backlog, or platform ambition. We will assemble a discovery squad
//               within 48 hours.
//             </p>

//             <div className="flex flex-wrap gap-4 text-sm text-white/70">
//               <span className="px-4 py-2 border rounded-full border-white/15">
//                 Blueprint workshops
//               </span>
//               <span className="px-4 py-2 border rounded-full border-white/15">
//                 Accelerated pilots
//               </span>
//               <span className="px-4 py-2 border rounded-full border-white/15">
//                 Managed run teams
//               </span>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Work email"
//               className="w-full px-6 py-4 text-white border bg-neutral-950/60
//                        border-white/10 rounded-2xl placeholder-white/40
//                        focus:outline-none focus:border-purple-400"
//               required
//             />

//             <textarea
//               value={initiative}
//               onChange={(e) => setInitiative(e.target.value)}
//               placeholder="Tell us about your initiative"
//               className="w-full bg-neutral-950/60 border border-white/10
//                        rounded-2xl px-6 py-4 text-white placeholder-white/40
//                        focus:outline-none focus:border-purple-400 min-h-[140px]"
//               required
//             />

//             {/* ERROR MESSAGE */}
//             {status === "error" && (
//               <p className="text-sm text-red-400">{errorMsg}</p>
//             )}

//             <button
//               type="submit"
//               disabled={status === "loading"}
//               className="w-full py-4 font-semibold text-white shadow-lg
//                          bg-linear-to-r from-purple-500 to-cyan-500 rounded-2xl
//                          shadow-purple-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {status === "loading"
//                 ? "Booking your discovery call…"
//                 : "Book a discovery call"}
//             </button>

//             {/* ✅ SUCCESS MESSAGE BELOW BUTTON (NO BLUR) */}
//             {status === "success" && (
//               <p className="text-green-400 text-sm mt-2">
//                 ✅ Submission received! We’ll contact you soon.
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

export default function Conversation({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [initiative, setInitiative] = useState("");

  const [errors, setErrors] = useState<{ email?: string; initiative?: string }>(
    {}
  );

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  /* =========================
     Validation Rules
  ========================== */
  const emailRegex = /^\S+@\S+\.\S+$/;

  const validateForm = () => {
    const newErrors: any = {};

    if (!email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!initiative.trim()) {
      newErrors.initiative = "Please describe your initiative";
    } else if (initiative.trim().length < 20) {
      newErrors.initiative = "Please provide at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     Submit Handler
  ========================== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const res = await fetch("http://172.16.16.33:5000/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, initiative }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);

      setStatus("success");
      setEmail("");
      setInitiative("");
      setErrors({});

      if (onSuccess) onSuccess();

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: any) {
      setStatus("error");
    }
  };

  return (
    <section className="px-6 py-28 bg-linear-to-b from-neutral-950 to-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-4xl border border-white/10 bg-neutral-900/70 p-10 
                        grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              Start a conversation
            </p>
            <h2 className="text-4xl font-bold text-white">
              Let’s co-create your next release
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              Tell us about your SAP Commerce upgrade, AEM personalization
              backlog, or platform ambition. We will assemble a discovery squad
              within 48 hours.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span className="px-4 py-2 border rounded-full border-white/15">
                Blueprint workshops
              </span>
              <span className="px-4 py-2 border rounded-full border-white/15">
                Accelerated pilots
              </span>
              <span className="px-4 py-2 border rounded-full border-white/15">
                Managed run teams
              </span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email *"
                className="w-full px-6 py-4 text-white border bg-neutral-950/60
                           border-white/10 rounded-2xl placeholder-white/40
                           focus:outline-none focus:border-white/60"
              />
              <div className="h-5 mt-1">
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Initiative */}
            <div>
              <textarea
                value={initiative}
                onChange={(e) => setInitiative(e.target.value)}
                placeholder="Tell us about your initiative *"
                className="w-full bg-neutral-950/60 border border-white/10
                           rounded-2xl px-6 py-4 text-white placeholder-white/40
                           focus:outline-none focus:border-white/60 min-h-[140px]"
              />
              <div className="h-5 mt-1">
                {errors.initiative && (
                  <p className="text-red-400 text-xs">{errors.initiative}</p>
                )}
              </div>
            </div>

            {/* EVENT CAROUSEL STYLE BUTTON */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 w-full rounded-full border border-white/40 px-6 py-3
                         text-sm sm:text-base text-white
                         hover:bg-white/10 hover:border-white/70
                         transition-all cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Booking your discovery call…"
                : "Book a discovery call →"}
            </button>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <p className="text-green-400 text-sm mt-2">
                ✅ Submission received! We’ll contact you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
