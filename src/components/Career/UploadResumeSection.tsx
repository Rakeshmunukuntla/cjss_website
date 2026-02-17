// // "use client";

// // import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
// // import { useState } from "react";

// // interface UploadResumeSectionProps {
// //   navigateTo?: (page: string) => void;
// // }

// // export default function UploadResumeSection({
// //   navigateTo,
// // }: UploadResumeSectionProps) {
// //   const [status] = useState<"idle" | "uploading" | "done">("idle");

// //   const [popup] = useState({
// //     show: false,
// //     message: "",
// //     type: "success" as "success" | "error",
// //   });

// //   const handleJobOpeningsClick = () => {
// //     if (!navigateTo) {
// //       console.warn("UploadResumeSection: navigateTo not provided");
// //       return;
// //     }
// //     navigateTo("CarrierFresher");
// //   };

// //   return (
// //     <section className="relative px-4 py-20 text-white bg-black">
// //       {/* Heading */}
// //       <div className="text-center mb-10">
// //         <h2 className="text-4xl font-bold">Upload Your Resume</h2>
// //         <p className="mt-3 text-white/70">
// //           Share your resume and our team will contact you soon.
// //         </p>

// //         {/* ✅ JOB OPENINGS BUTTON */}
// //         <div className="mt-6">
// //           <button
// //             onClick={handleJobOpeningsClick}
// //             className="rounded-full border border-white/40 px-6 py-2.5
// //                        text-sm text-white hover:bg-white/10
// //                        hover:border-white/70 transition-all"
// //           >
// //             View Job Openings
// //           </button>
// //         </div>
// //       </div>

// //       {/* Upload Box */}
// //       <div className="max-w-3xl mx-auto p-8 border-2 border-dashed rounded-3xl text-center">
// //         <UploadCloud className="w-16 h-16 mx-auto mb-4 text-purple-300" />
// //         <p className="text-lg">
// //           {status === "done" ? "Resume Uploaded" : "Click to upload resume"}
// //         </p>
// //       </div>

// //       {/* Popup */}
// //       {popup.show && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black/80">
// //           <div className="bg-[#0a0a0a] p-6 rounded-xl text-center">
// //             {popup.type === "success" ? (
// //               <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
// //             ) : (
// //               <XCircle className="w-10 h-10 text-red-400 mx-auto" />
// //             )}
// //             <p className="mt-3">{popup.message}</p>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // }
// "use client";

// import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function UploadResumeSection() {
//   const navigate = useNavigate();
//   const [status] = useState<"idle" | "uploading" | "done">("idle");

//   const [popup] = useState({
//     show: false,
//     message: "",
//     type: "success" as "success" | "error",
//   });

//   const handleJobOpeningsClick = () => {
//     navigate("/careers/jobs");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section className="relative px-4 py-20 text-white bg-black">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold">Upload Your Resume</h2>
//         <p className="mt-3 text-white/70">
//           Share your resume and our team will contact you soon.
//         </p>

//         {/* ✅ JOB OPENINGS BUTTON */}
//         <div className="mt-6 flex flex-wrap gap-3 justify-center">
//           <button
//             onClick={handleJobOpeningsClick}
//             className="rounded-full border border-white/40 px-6 py-2.5
//                        text-sm text-white hover:bg-white/10
//                        hover:border-white/70 transition-all"
//           >
//             View Job Openings →
//           </button>
//         </div>
//       </div>

//       {/* Upload Box */}
//       <div className="max-w-3xl mx-auto p-8 border-2 border-dashed border-white/20 rounded-3xl text-center hover:border-white/40 transition-colors">
//         <UploadCloud className="w-16 h-16 mx-auto mb-4 text-purple-300" />
//         <p className="text-lg">
//           {status === "done" ? "Resume Uploaded" : "Click to upload resume"}
//         </p>
//         <p className="mt-2 text-sm text-white/50">
//           Supported formats: PDF, DOC, DOCX (Max 5MB)
//         </p>
//       </div>

//       {/* Popup */}
//       {popup.show && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
//           <div className="bg-[#0a0a0a] p-6 rounded-xl text-center border border-white/10">
//             {popup.type === "success" ? (
//               <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
//             ) : (
//               <XCircle className="w-10 h-10 text-red-400 mx-auto" />
//             )}
//             <p className="mt-3">{popup.message}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadResumeSection() {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [uploadLocked, setUploadLocked] = useState(false);
  const [status, setStatus] = useState<"idle" | "uploading" | "done">("idle");

  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const handleJobOpeningsClick = () => {
    navigate("/careers/jobs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ⭐ Auto upload on file selection
  const handleFileSelection = async (selectedFile: File) => {
    if (uploadLocked) return;

    setFile(selectedFile);
    setStatus("uploading");

    const formData = new FormData();
    formData.append("resume", selectedFile);

    try {
      const res = await fetch("http://172.16.16.33:5000/resumes/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) {
        setStatus("idle");
        setPopup({
          show: true,
          message: "Upload failed. Please try again.",
          type: "error",
        });
        return;
      }

      setStatus("done");
      setUploadLocked(true);
      setPopup({
        show: true,
        message: "Your resume has been uploaded successfully!",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setStatus("idle");
      setPopup({
        show: true,
        message: "Something went wrong. Try again later.",
        type: "error",
      });
    }
  };

  return (
    <section className="relative px-4 py-20 text-white bg-black">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Upload Your Resume</h2>
        <p className="mt-3 text-white/70">
          Share your resume and our team will contact you soon.
        </p>

        {/* Job Openings Button */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleJobOpeningsClick}
            className="rounded-full border border-white/40 px-6 py-2.5
                       text-sm text-white hover:bg-white/10
                       hover:border-white/70 transition-all"
          >
            View Job Openings →
          </button>
        </div>
      </div>

      {/* Upload Box */}
      <div
        className={`
          max-w-3xl mx-auto p-8 border-2 border-dashed rounded-3xl text-center
          transition-all duration-300
          ${
            uploadLocked
              ? "border-green-500/30 bg-green-500/[0.03] opacity-60 pointer-events-none"
              : "border-white/20 hover:border-white/40 cursor-pointer"
          }
        `}
        onClick={() => {
          if (!uploadLocked) document.getElementById("resumeInput")?.click();
        }}
      >
        {/* Icon */}
        {status === "done" ? (
          <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-400" />
        ) : status === "uploading" ? (
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <UploadCloud className="w-16 h-16 text-purple-300 animate-pulse" />
          </div>
        ) : (
          <UploadCloud className="w-16 h-16 mx-auto mb-4 text-purple-300" />
        )}

        {/* Status Text */}
        <p className="text-lg">
          {status === "done"
            ? "Resume Uploaded ✔"
            : status === "uploading"
              ? "Uploading..."
              : "Click to upload resume"}
        </p>

        {/* File name or supported formats */}
        <p className="mt-2 text-sm text-white/50">
          {file ? file.name : "Supported formats: PDF, DOC, DOCX (Max 5MB)"}
        </p>

        {/* Hidden Input */}
        <input
          id="resumeInput"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          disabled={uploadLocked}
          onChange={(e) => {
            if (!uploadLocked && e.target.files && e.target.files[0]) {
              handleFileSelection(e.target.files[0]);
            }
          }}
        />
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="bg-[#0a0a0a] p-6 rounded-xl text-center border border-white/10 w-[90%] max-w-md animate-pop">
            {popup.type === "success" ? (
              <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
            ) : (
              <XCircle className="w-10 h-10 text-red-400 mx-auto" />
            )}
            <p className="mt-3">{popup.message}</p>
            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="mt-5 px-6 py-2 rounded-full border border-white/30
                         text-sm text-white hover:bg-white/10 transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Popup animation */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pop { animation: pop 0.25s ease-out; }
        `}
      </style>
    </section>
  );
}
