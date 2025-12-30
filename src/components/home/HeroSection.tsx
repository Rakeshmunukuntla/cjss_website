// "use client";

// import { useState, useEffect } from "react";

// export const HeroSection = () => {
//   const textLines = ["Commerce.", "Experience.", "Technology.", "Delivered."];
//   const images = [
//     "/images/bannerfortesting.png",
//     "/images/aibanner.jpg",
//     "/images/hybrisBanner.jpg",
//     "/images/bannerApplicationPage.png",
//     "/images/cloudtechBanner.jpeg",
//   ];

//   const [displayedText, setDisplayedText] = useState("");
//   const [currentLineIndex, setCurrentLineIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const [completedLines, setCompletedLines] = useState<string[]>([]);

//   /* ================= Typing Animation ================= */
//   useEffect(() => {
//     if (currentLineIndex >= textLines.length) return;
//     const currentLine = textLines[currentLineIndex];
//     let timer: ReturnType<typeof setTimeout>;

//     if (isTyping) {
//       if (displayedText.length < currentLine.length) {
//         timer = setTimeout(() => {
//           setDisplayedText((p) => p + currentLine[p.length]);
//         }, 100);
//       } else {
//         timer = setTimeout(() => {
//           setCompletedLines((p) => [...p, currentLine]);
//           setDisplayedText("");
//           setCurrentLineIndex((p) => p + 1);
//           if (currentLineIndex === textLines.length - 1) {
//             setIsTyping(false);
//           }
//         }, 1000);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [displayedText, currentLineIndex, isTyping]);

//   /* ================= Image Carousel ================= */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((p) => (p + 1) % images.length);
//     }, 4500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative flex items-center justify-center min-h-[80vh] md:min-h-screen px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-black">
//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
//       </div>

//       <div className="relative z-10 w-full mx-auto max-w-7xl">
//         <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
//           {/* ================= TEXT ================= */}
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-[11px] sm:text-sm font-semibold border rounded-full text-cyan-100 bg-cyan-500/10 border-cyan-400/30">
//               <span className="relative flex w-3 h-3">
//                 <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" />
//                 <span className="relative inline-flex w-3 h-3 rounded-full bg-cyan-300" />
//               </span>
//               <span className="uppercase tracking-[0.18em]">
//                 Transforming Digital Experiences
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 leading-snug sm:leading-tight min-h-[120px] sm:min-h-[160px] md:min-h-[220px] text-white">
//               {completedLines.map((line, i) => (
//                 <div key={i}>{line}</div>
//               ))}
//               {isTyping && displayedText && (
//                 <div>
//                   {displayedText}
//                   <span className="animate-blink text-cyan-300">|</span>
//                 </div>
//               )}
//             </h1>

//             <p className="max-w-xl mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-white/70">
//               Accelerating brands with Hybris, AEM, headless frontends and
//               multi-cloud commerce solutions — from strategy to launch.
//             </p>
//           </div>

//           {/* ================= HERO VISUAL ================= */}
//           <div className="relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px] mt-4 lg:mt-0">
//             <div className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]/80">
//               {/* ===== ZOOM SAFE IMAGE LAYER ===== */}
//               {images.map((img, idx) => (
//                 <div
//                   key={idx}
//                   className={`
//                     absolute inset-0
//                     transition-transform duration-[9000ms]
//                     ease-[cubic-bezier(0.16,1,0.3,1)]
//                     ${idx === currentImageIndex ? "scale-[1.06]" : "scale-100"}
//                   `}
//                 >
//                   <img
//                     src={img}
//                     alt={`Hero image ${idx + 1}`}
//                     className={`
//                       w-full h-full
//                       object-cover
//                       object-center
//                       transition-opacity duration-1000 ease-in-out
//                       ${idx === currentImageIndex ? "opacity-100" : "opacity-0"}
//                     `}
//                   />
//                 </div>
//               ))}

//               {/* ===== INDICATORS ===== */}
//               <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex justify-center gap-2 z-10">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImageIndex(idx)}
//                     className={`h-1.5 rounded-full transition-all duration-300 ${
//                       idx === currentImageIndex
//                         ? "bg-white w-6"
//                         : "bg-white/40 w-2 hover:bg-white/70"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// "use client";

// import { useState, useEffect } from "react";

// export const HeroSection = () => {
//   const textLines = ["Commerce.", "Experience.", "Technology.", "Delivered."];
//   const images = [
//     "/images/bannerfortesting.png",
//     "/images/aibanner.jpg",
//     "/images/hybrisBanner.jpg",
//     "/images/bannerApplicationPage.png",
//     "/images/cloudtechBanner.jpeg",
//   ];

//   const [displayedText, setDisplayedText] = useState("");
//   const [currentLineIndex, setCurrentLineIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const [completedLines, setCompletedLines] = useState<string[]>([]);

//   /* ================= Typing Animation ================= */
//   useEffect(() => {
//     if (currentLineIndex >= textLines.length) return;
//     const currentLine = textLines[currentLineIndex];
//     let timer: ReturnType<typeof setTimeout>;

//     if (isTyping) {
//       if (displayedText.length < currentLine.length) {
//         timer = setTimeout(() => {
//           setDisplayedText((p) => p + currentLine[p.length]);
//         }, 100);
//       } else {
//         timer = setTimeout(() => {
//           setCompletedLines((p) => [...p, currentLine]);
//           setDisplayedText("");
//           setCurrentLineIndex((p) => p + 1);
//           if (currentLineIndex === textLines.length - 1) {
//             setIsTyping(false);
//           }
//         }, 1000);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [displayedText, currentLineIndex, isTyping]);

//   /* ================= Image Carousel ================= */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((p) => (p + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-black">
//       {/* ================= FULL BACKGROUND IMAGES ================= */}
//       {images.map((img, idx) => (
//         <div
//           key={idx}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             idx === currentImageIndex ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={img}
//             alt={`Hero background ${idx + 1}`}
//             className="w-full h-full object-cover scale-[1.06] transition-transform duration-[9000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
//           />
//         </div>
//       ))}

//       {/* ================= PROGRESSIVE LEFT → RIGHT BLUR ================= */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Strong blur (far left) */}
//         <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 [mask-image:linear-gradient(to_right,black_0%,black_25%,transparent_60%)]" />

//         {/* Medium blur (fade zone) */}
//         <div className="absolute inset-0 backdrop-blur-lg bg-black/20 [mask-image:linear-gradient(to_right,black_0%,transparent_50%)]" />

//         {/* Contrast gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 flex items-center min-h-[80vh] md:min-h-screen px-4 sm:px-6 lg:px-10">
//         <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
//           {/* ================= LEFT CONTENT ================= */}
//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[11px] sm:text-sm font-semibold border rounded-full text-cyan-100 bg-cyan-500/10 border-cyan-400/30">
//               <span className="relative flex w-3 h-3">
//                 <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" />
//                 <span className="relative inline-flex w-3 h-3 rounded-full bg-cyan-300" />
//               </span>
//               <span className="uppercase tracking-[0.18em]">
//                 Transforming Digital Experiences
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug md:leading-tight min-h-[140px] md:min-h-[220px] text-white">
//               {completedLines.map((line, i) => (
//                 <div key={i}>{line}</div>
//               ))}
//               {isTyping && displayedText && (
//                 <div>
//                   {displayedText}
//                   <span className="animate-blink text-cyan-300">|</span>
//                 </div>
//               )}
//             </h1>

//             <p className="max-w-xl text-sm sm:text-base md:text-lg text-white/75">
//               Accelerating brands with Hybris, AEM, headless frontends and
//               multi-cloud commerce solutions — from strategy to launch.
//             </p>
//           </div>

//           {/* ================= RIGHT SIDE (IMAGE ONLY) ================= */}
//           <div />
//         </div>
//       </div>

//       {/* Cursor blink */}
//       <style>
//         {`
//           @keyframes blink {
//             0%, 50%, 100% { opacity: 1; }
//             25%, 75% { opacity: 0; }
//           }
//           .animate-blink {
//             animation: blink 1.1s infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };
"use client";

import { useState, useEffect } from "react";

export const HeroSection = () => {
  const textLines = ["Commerce.", "Experience.", "Technology.", "Delivered."];
  const images = [
    "/images/bannerfortesting.png",
    "/images/aibanner.jpg",
    "/images/hybrisBanner.jpg",
    "/images/bannerApplicationPage.png",
    "/images/cloudtechBanner.jpeg",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  /* ================= Typing Animation ================= */
  useEffect(() => {
    if (currentLineIndex >= textLines.length) return;
    const currentLine = textLines[currentLineIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayedText.length < currentLine.length) {
        timer = setTimeout(() => {
          setDisplayedText((p) => p + currentLine[p.length]);
        }, 100);
      } else {
        timer = setTimeout(() => {
          setCompletedLines((p) => [...p, currentLine]);
          setDisplayedText("");
          setCurrentLineIndex((p) => p + 1);
          if (currentLineIndex === textLines.length - 1) {
            setIsTyping(false);
          }
        }, 900);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentLineIndex, isTyping]);

  /* ================= Image Carousel ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((p) => (p + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-black">
      {/* ================= BACKGROUND IMAGES ================= */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Hero background ${idx + 1}`}
            className={`w-full h-full object-cover ${
              idx === currentImageIndex ? "animate-heroZoom" : ""
            }`}
          />
        </div>
      ))}

      {/* ================= PROGRESSIVE LEFT → RIGHT BLUR ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 [mask-image:linear-gradient(to_right,black_0%,black_25%,transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/20 [mask-image:linear-gradient(to_right,black_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex items-center min-h-[80vh] md:min-h-screen px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[11px] sm:text-sm font-semibold border rounded-full text-cyan-100 bg-cyan-500/10 border-cyan-400/30">
              {/* <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" />
                <span className="relative inline-flex w-3 h-3 rounded-full bg-cyan-300" />
              </span> */}
              <span className="uppercase tracking-[0.18em]">
                Transforming Digital Experiences
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug md:leading-tight min-h-[140px] md:min-h-[220px] text-white">
              {completedLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              {isTyping && displayedText && (
                <div>
                  {displayedText}
                  <span className="animate-blink text-cyan-300">|</span>
                </div>
              )}
            </h1>

            <p className="max-w-xl text-sm sm:text-base md:text-lg text-white/75">
              Accelerating brands with Hybris, AEM, headless frontends and
              multi-cloud commerce solutions — from strategy to launch.
            </p>
          </div>

          {/* RIGHT SIDE EMPTY – IMAGE SHOWS CLEAR */}
          <div />
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>
        {`
          /* Zoom-in (Ken Burns style) */
          @keyframes heroZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.12); }
          }
          .animate-heroZoom {
            animation: heroZoom 6s ease-out forwards;
          }

          /* Cursor blink */
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1.1s infinite;
          }
        `}
      </style>
    </section>
  );
};
