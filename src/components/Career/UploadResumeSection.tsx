// "use client";

// import { CheckCircle2, UploadCloud } from "lucide-react";
// import { useState } from "react";

// export default function UploadResumeSection() {
//   const [file, setFile] = useState<File | null>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [status, setStatus] = useState<"idle" | "uploading" | "done">("idle");

//   const handleFile = (f: File) => {
//     setFile(f);
//     setStatus("idle");
//   };

//   const uploadFile = () => {
//     if (!file) return;
//     setStatus("uploading");

//     // simulate upload
//     setTimeout(() => setStatus("done"), 2000);
//   };

//   return (
//     <section className="relative px-4 py-20 overflow-hidden text-white sm:px-6 md:px-10 sm:py-24">
//       {/* Background glow (hidden on mobile for performance) */}
//       <div className="absolute inset-0 hidden pointer-events-none sm:block">
//         <div
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//           w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/5 blur-3xl rounded-full"
//         />
//       </div>

//       {/* Heading */}
//       <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center sm:mb-16">
//         <h2 className="text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
//           Upload Your Resume
//         </h2>

//         <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg text-white/70">
//           Share your resume and our team will get back to you with suitable
//           opportunities.
//         </p>
//       </div>

//       {/* Upload Box */}
//       <div
//         className={`relative z-10 max-w-3xl mx-auto p-6 sm:p-8 md:p-10 border-2 border-dashed rounded-3xl cursor-pointer
//           transition-all duration-500 backdrop-blur-xl
//           ${
//             isDragging
//               ? "border-cyan-400 bg-cyan-400/10"
//               : "border-white/20 bg-white/5"
//           }
//         `}
//         onDragOver={(e) => {
//           e.preventDefault();
//           setIsDragging(true);
//         }}
//         onDragLeave={() => setIsDragging(false)}
//         onDrop={(e) => {
//           e.preventDefault();
//           setIsDragging(false);
//           if (e.dataTransfer.files.length > 0) {
//             handleFile(e.dataTransfer.files[0]);
//           }
//         }}
//         onClick={() => document.getElementById("resumeInput")?.click()}
//       >
//         <div className="flex flex-col items-center text-center">
//           <UploadCloud
//             className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-300 mb-4
//             drop-shadow-[0_0_12px_rgba(0,200,255,0.5)]"
//           />

//           <p className="mb-2 text-lg font-semibold sm:text-xl">
//             {file ? "File Selected" : "Drag & Drop your resume here"}
//           </p>

//           <p className="mb-4 text-xs break-all text-white/60 sm:text-sm md:text-base">
//             {file ? file.name : "Supported formats: PDF, DOCX"}
//           </p>

//           <input
//             id="resumeInput"
//             type="file"
//             className="hidden"
//             accept=".pdf,.doc,.docx"
//             onChange={(e) => {
//               if (e.target.files && e.target.files[0]) {
//                 handleFile(e.target.files[0]);
//               }
//             }}
//           />

//           {/* Upload Button */}
//           {file && (
//             <button
//               onClick={uploadFile}
//               disabled={status === "uploading"}
//               className="px-6 sm:px-8 py-2.5 sm:py-3 mt-4 font-semibold
//                 text-black rounded-full shadow-lg text-sm sm:text-base
//                 bg-gradient-to-r from-cyan-400 to-blue-500
//                 hover:scale-105 transition-all disabled:opacity-50"
//             >
//               {status === "uploading"
//                 ? "Uploading..."
//                 : status === "done"
//                 ? "Uploaded ✔"
//                 : "Upload Resume"}
//             </button>
//           )}

//           {/* Success message */}
//           {status === "done" && (
//             <div className="flex items-center gap-2 mt-5 text-sm text-green-400 sm:text-base">
//               <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
//               <span>Your resume has been uploaded successfully!</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
import { useState } from "react";

export default function UploadResumeSection() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">(
    "idle"
  );
  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const handleFile = (f: File) => {
    setFile(f);
    setStatus("idle");
  };

  const uploadFile = async () => {
    if (!file) return;

    setStatus("uploading");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch(
        "https://server-node-cjss.onrender.com/resumes/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!data.success) {
        setStatus("error");
        setPopup({
          show: true,
          message: "Upload failed. Please try again.",
          type: "error",
        });
        return;
      }

      setStatus("done");
      setPopup({
        show: true,
        message: "Your resume has been uploaded successfully!",
        type: "success",
      });
    } catch (err) {
      setStatus("error");
      setPopup({
        show: true,
        message: "Something went wrong. Try again later.",
        type: "error",
      });
    }
  };

  return (
    <section className="relative px-4 py-20 overflow-hidden text-white sm:px-6 md:px-10 sm:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 hidden pointer-events-none sm:block">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/5 blur-3xl rounded-full"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center sm:mb-16">
        <h2 className="text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
          Upload Your Resume
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg text-white/70">
          Share your resume and our team will get back to you with suitable
          opportunities.
        </p>
      </div>

      {/* Upload Box */}
      <div
        className={`relative z-10 max-w-3xl mx-auto p-6 sm:p-8 md:p-10 border-2 border-dashed rounded-3xl cursor-pointer
          transition-all duration-500 backdrop-blur-xl
          ${
            isDragging
              ? "border-cyan-400 bg-cyan-400/10"
              : "border-white/20 bg-white/5"
          }
        `}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
          }
        }}
        onClick={() => document.getElementById("resumeInput")?.click()}
      >
        <div className="flex flex-col items-center text-center">
          <UploadCloud className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-300 mb-4 drop-shadow-[0_0_12px_rgba(0,200,255,0.5)]" />

          <p className="mb-2 text-lg font-semibold sm:text-xl">
            {file ? "File Selected" : "Drag & Drop your resume here"}
          </p>

          <p className="mb-4 text-xs break-all text-white/60 sm:text-sm md:text-base">
            {file ? file.name : "Supported formats: PDF, DOCX"}
          </p>

          <input
            id="resumeInput"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />

          {/* Upload Button */}
          {file && (
            <button
              onClick={uploadFile}
              disabled={status === "uploading"}
              className="px-6 sm:px-8 py-2.5 sm:py-3 mt-4 font-semibold
                text-black rounded-full shadow-lg text-sm sm:text-base
                bg-gradient-to-r from-cyan-400 to-blue-500
                hover:scale-105 transition-all disabled:opacity-50"
            >
              {status === "uploading"
                ? "Uploading..."
                : status === "done"
                ? "Uploaded ✔"
                : "Upload Resume"}
            </button>
          )}
        </div>
      </div>

      {/* POP-UP MODAL */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-white/10 shadow-xl w-[90%] max-w-md text-center">
            {popup.type === "success" ? (
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
            ) : (
              <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
            )}

            <p className="text-lg font-semibold">{popup.message}</p>

            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="mt-5 px-6 py-2 bg-cyan-400 text-black rounded-full font-semibold hover:bg-cyan-300 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
