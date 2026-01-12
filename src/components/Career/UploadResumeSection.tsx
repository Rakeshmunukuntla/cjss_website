// "use client";

// import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
// import { useState } from "react";

// const SOFT_GRADIENT =
//   "text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-cyan-200 to-purple-300";

// export default function UploadResumeSection() {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploadLocked, setUploadLocked] = useState(false);
//   const [status, setStatus] = useState<"idle" | "uploading" | "done">("idle");

//   const [popup, setPopup] = useState<{
//     show: boolean;
//     message: string;
//     type: "success" | "error";
//   }>({
//     show: false,
//     message: "",
//     type: "success",
//   });

//   const handleFileSelection = async (selectedFile: File) => {
//     if (uploadLocked) return;

//     setFile(selectedFile);
//     setStatus("uploading");

//     const formData = new FormData();
//     formData.append("resume", selectedFile);

//     try {
//       const res = await fetch("http://172.16.16.33:5000/resumes/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (!data.success) {
//         setStatus("idle");
//         setPopup({
//           show: true,
//           message: "Upload failed. Please try again.",
//           type: "error",
//         });
//         return;
//       }

//       setStatus("done");
//       setUploadLocked(true);

//       setPopup({
//         show: true,
//         message: "Your resume has been uploaded successfully!",
//         type: "success",
//       });
//     } catch (error) {
//       console.error(error);
//       setStatus("idle");
//       setPopup({
//         show: true,
//         message: "Something went wrong. Try again later.",
//         type: "error",
//       });
//     }
//   };

//   return (
//     <section className="relative px-4 py-20 text-white overflow-hidden bg-black sm:px-6 md:px-10 sm:py-24">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

//       {/* Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.02] pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Floating lights */}
//       <div className="hidden md:block absolute -top-20 left-10 w-[300px] h-[300px] bg-violet-500/10 blur-[150px] rounded-full" />
//       <div className="hidden md:block absolute bottom-0 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[180px] rounded-full" />

//       {/* Heading */}
//       <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center">
//         {/* ✅ ONLY FIX IS HERE */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
//           <span className={SOFT_GRADIENT}>Upload Your Resume</span>
//         </h2>

//         <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/70">
//           Share your resume and our team will contact you soon.
//         </p>
//       </div>

//       {/* Upload Box */}
//       <div
//         className={`
//           relative z-10 max-w-3xl mx-auto p-8 border-2 border-dashed rounded-3xl
//           backdrop-blur-xl transition-all duration-500 text-center
//           ${
//             uploadLocked
//               ? "opacity-40 pointer-events-none border-white/10 bg-[#0a0a0a]/60"
//               : "cursor-pointer border-white/20 bg-[#0a0a0a]/60 hover:border-cyan-400/40 hover:bg-[#0a0a0a]/80"
//           }
//         `}
//         onClick={() => {
//           if (!uploadLocked) document.getElementById("resumeInput")?.click();
//         }}
//       >
//         {/* Icon */}
//         <UploadCloud className={`w-16 h-16 mx-auto mb-4 ${SOFT_GRADIENT}`} />

//         <p className="text-xl font-semibold">
//           {status === "done"
//             ? "Resume Uploaded"
//             : file
//             ? "Uploading..."
//             : "Click to select your resume"}
//         </p>

//         <p className="mt-2 text-sm text-white/60 break-all">
//           {file ? file.name : "Supported: PDF, DOC, DOCX"}
//         </p>

//         <input
//           id="resumeInput"
//           type="file"
//           className="hidden"
//           accept=".pdf,.doc,.docx"
//           disabled={uploadLocked}
//           onChange={(e) => {
//             if (!uploadLocked && e.target.files?.[0]) {
//               handleFileSelection(e.target.files[0]);
//             }
//           }}
//         />
//       </div>

//       {/* Popup */}
//       {popup.show && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
//           <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 shadow-xl w-[90%] max-w-md text-center animate-pop">
//             {popup.type === "success" ? (
//               <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
//             ) : (
//               <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
//             )}

//             <p className="text-lg font-semibold">{popup.message}</p>

//             <button
//               onClick={() => setPopup({ ...popup, show: false })}
//               className="mt-5 rounded-full border border-white/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Animation */}
//       <style>{`
//         @keyframes pop {
//           0% { transform: scale(0.7); opacity: 0; }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .animate-pop { animation: pop 0.25s ease-out; }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
import { useState } from "react";

interface UploadResumeSectionProps {
  navigateTo?: (page: string) => void;
}

export default function UploadResumeSection({
  navigateTo,
}: UploadResumeSectionProps) {
  const [status] = useState<"idle" | "uploading" | "done">("idle");

  const [popup] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const handleJobOpeningsClick = () => {
    if (!navigateTo) {
      console.warn("UploadResumeSection: navigateTo not provided");
      return;
    }
    navigateTo("CarrierFresher");
  };

  return (
    <section className="relative px-4 py-20 text-white bg-black">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Upload Your Resume</h2>
        <p className="mt-3 text-white/70">
          Share your resume and our team will contact you soon.
        </p>

        {/* ✅ JOB OPENINGS BUTTON */}
        <div className="mt-6">
          <button
            onClick={handleJobOpeningsClick}
            className="rounded-full border border-white/40 px-6 py-2.5
                       text-sm text-white hover:bg-white/10
                       hover:border-white/70 transition-all"
          >
            Job Openings
          </button>
        </div>
      </div>

      {/* Upload Box */}
      <div className="max-w-3xl mx-auto p-8 border-2 border-dashed rounded-3xl text-center">
        <UploadCloud className="w-16 h-16 mx-auto mb-4 text-purple-300" />
        <p className="text-lg">
          {status === "done" ? "Resume Uploaded" : "Click to upload resume"}
        </p>
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-[#0a0a0a] p-6 rounded-xl text-center">
            {popup.type === "success" ? (
              <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
            ) : (
              <XCircle className="w-10 h-10 text-red-400 mx-auto" />
            )}
            <p className="mt-3">{popup.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
