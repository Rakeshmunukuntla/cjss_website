// "use client";

// import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
// import { useState } from "react";

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

//   // ⭐ When user selects a file → auto upload starts
//   const handleFileSelection = async (selectedFile: File) => {
//     if (uploadLocked) return;

//     setFile(selectedFile);
//     setStatus("uploading");

//     const formData = new FormData();
//     formData.append("resume", selectedFile);

//     try {
//       const res = await fetch(
//         "https://server-node-cjss.onrender.com/resumes/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

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

//       // 🎉 SUCCESS
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
//     <section className="relative px-4 py-20 text-white overflow-hidden sm:px-6 md:px-10 sm:py-24">
//       {/* Heading */}
//       <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
//           Upload Your Resume
//         </h2>
//         <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/70">
//           Share your resume and our team will contact you soon.
//         </p>
//       </div>

//       {/* UPLOAD BOX */}
//       <div
//         className={`
//           relative z-10 max-w-3xl mx-auto p-8 border-2 border-dashed rounded-3xl
//           backdrop-blur-xl transition-all duration-500 text-center
//           ${
//             uploadLocked
//               ? "opacity-40 pointer-events-none"
//               : "cursor-pointer border-white/20 bg-white/5"
//           }
//         `}
//         onClick={() => {
//           if (!uploadLocked) document.getElementById("resumeInput")?.click();
//         }}
//       >
//         {/* Icon */}
//         <UploadCloud className="w-16 h-16 text-cyan-300 mx-auto mb-4" />

//         {/* Text */}
//         <p className="text-xl font-semibold">
//           {status === "done"
//             ? "Resume Uploaded"
//             : file
//             ? "Uploading..."
//             : "Click to select your resume"}
//         </p>

//         {/* File Name */}
//         <p className="mt-2 text-sm text-white/60 break-all">
//           {file ? file.name : "Supported: PDF, DOC, DOCX"}
//         </p>

//         {/* Hidden Input */}
//         <input
//           id="resumeInput"
//           type="file"
//           className="hidden"
//           accept=".pdf,.doc,.docx"
//           disabled={uploadLocked}
//           onChange={(e) => {
//             if (!uploadLocked && e.target.files && e.target.files[0]) {
//               handleFileSelection(e.target.files[0]);
//             }
//           }}
//         />
//       </div>

//       {/* SUCCESS / ERROR POPUP */}
//       {popup.show && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
//           <div className="bg-neutral-900 p-6 rounded-2xl border border-white/10 shadow-xl w-[90%] max-w-md text-center animate-pop">
//             {popup.type === "success" ? (
//               <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
//             ) : (
//               <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
//             )}

//             <p className="text-lg font-semibold">{popup.message}</p>

//             <button
//               onClick={() => setPopup({ ...popup, show: false })}
//               className="mt-5 px-6 py-2 bg-cyan-400 text-black rounded-full font-semibold hover:bg-cyan-300 transition"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       {/* POPUP ANIMATION */}
//       <style>
//         {`
//         @keyframes pop {
//           0% { transform: scale(0.7); opacity: 0; }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .animate-pop { animation: pop 0.25s ease-out; }
//       `}
//       </style>
//     </section>
//   );
// }
"use client";

import { CheckCircle2, UploadCloud, XCircle } from "lucide-react";
import { useState } from "react";

export default function UploadResumeSection() {
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

  // ⭐ When user selects a file → auto upload starts
  const handleFileSelection = async (selectedFile: File) => {
    if (uploadLocked) return;

    setFile(selectedFile);
    setStatus("uploading");

    const formData = new FormData();
    formData.append("resume", selectedFile);

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
        setStatus("idle");
        setPopup({
          show: true,
          message: "Upload failed. Please try again.",
          type: "error",
        });
        return;
      }

      // 🎉 SUCCESS
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
    <section className="relative px-4 py-20 text-white overflow-hidden bg-black sm:px-6 md:px-10 sm:py-24">
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

      {/* Floating lights (hidden on mobile) */}
      <div className="hidden md:block absolute -top-20 left-10 w-[300px] h-[300px] bg-purple-500/10 blur-[150px] rounded-full"></div>
      <div className="hidden md:block absolute bottom-0 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300">
          Upload Your Resume
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/70">
          Share your resume and our team will contact you soon.
        </p>
      </div>

      {/* UPLOAD BOX */}
      <div
        className={`
          relative z-10 max-w-3xl mx-auto p-8 border-2 border-dashed rounded-3xl 
          backdrop-blur-xl transition-all duration-500 text-center
          ${
            uploadLocked
              ? "opacity-40 pointer-events-none border-white/10 bg-[#0a0a0a]/60"
              : "cursor-pointer border-white/20 bg-[#0a0a0a]/60 hover:border-cyan-400/40 hover:bg-[#0a0a0a]/80"
          }
        `}
        onClick={() => {
          if (!uploadLocked) document.getElementById("resumeInput")?.click();
        }}
      >
        {/* Icon */}
        <UploadCloud className="w-16 h-16 text-cyan-300 mx-auto mb-4 drop-shadow-[0_0_12px_rgba(0,200,255,0.4)]" />

        {/* Text */}
        <p className="text-xl font-semibold">
          {status === "done"
            ? "Resume Uploaded"
            : file
            ? "Uploading..."
            : "Click to select your resume"}
        </p>

        {/* File Name */}
        <p className="mt-2 text-sm text-white/60 break-all">
          {file ? file.name : "Supported: PDF, DOC, DOCX"}
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

      {/* SUCCESS / ERROR POPUP */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
          <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 shadow-xl w-[90%] max-w-md text-center animate-pop">
            {popup.type === "success" ? (
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
            ) : (
              <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
            )}

            <p className="text-lg font-semibold">{popup.message}</p>

            {/* Updated Button - Same style as hero section */}
            <button
              onClick={() => setPopup({ ...popup, show: false })}
              className="mt-5 rounded-full border border-white/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* POPUP ANIMATION */}
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
