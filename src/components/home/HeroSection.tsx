// "use client";

// import { useState, useEffect } from "react";

// export const HeroSection = () => {
//   const textLines = ["Commerce.", "Experience.", "Technology.", "Delivered."];
//   const images = [
//     "/images/hybrisBanner.jpg",
//     "/images/hybris1.png",
//     "/images/hybris2.png",
//     "/images/.png",
//     "/images/.png",
//   ];

//   const [displayedText, setDisplayedText] = useState("");
//   const [currentLineIndex, setCurrentLineIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const [completedLines, setCompletedLines] = useState<string[]>([]);

//   // Typing animation
//   useEffect(() => {
//     if (currentLineIndex >= textLines.length) return;

//     const currentLine = textLines[currentLineIndex];
//     let timer: ReturnType<typeof setTimeout>;

//     if (isTyping) {
//       if (displayedText.length < currentLine.length) {
//         timer = setTimeout(() => {
//           setDisplayedText((prev) => prev + currentLine[prev.length]);
//         }, 100);
//       } else {
//         timer = setTimeout(() => {
//           if (currentLineIndex < textLines.length - 1) {
//             setCompletedLines((prev) => [...prev, currentLine]);
//             setDisplayedText("");
//             setCurrentLineIndex((prev) => prev + 1);
//           } else {
//             setCompletedLines((prev) => [...prev, currentLine]);
//             setDisplayedText("");
//             setIsTyping(false);
//           }
//         }, 1000);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [displayedText, currentLineIndex, isTyping]);

//   // Image carousel animation
//   useEffect(() => {
//     const imageTimer = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(imageTimer);
//   }, []);

//   return (
//     <section
//       className="
//         relative flex items-center justify-center
//         min-h-[80vh] md:min-h-screen
//         px-4 sm:px-6 lg:px-10
//         pt-10 sm:pt-14 lg:pt-20
//         pb-16 sm:pb-20 lg:pb-24
//         overflow-hidden
//         bg-black
//       "
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {/* Base black background */}
//         <div className="absolute inset-0 bg-black" />

//         {/* Subtle gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

//         {/* Gradient blobs – more subtle for black theme */}
//         <div className="absolute top-[-25%] right-[-30%] w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] bg-violet-600/10 rounded-full blur-3xl animate-blob" />
//         <div className="absolute bottom-[-30%] left-[-20%] w-[560px] h-[560px] sm:w-[760px] sm:h-[760px] bg-cyan-500/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] bg-sky-500/6 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />

//         {/* Extra soft glow pockets – reduced opacity */}
//         <div
//           className="absolute top-1/4 right-4 sm:right-1/4 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full blur-2xl opacity-30 animate-pulse"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(56,189,248,0.4), transparent 70%)",
//             animationDuration: "4s",
//           }}
//         />
//         <div
//           className="absolute bottom-1/4 left-6 sm:left-1/3 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full blur-2xl opacity-25 animate-pulse"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(129,140,248,0.4), transparent 70%)",
//             animationDuration: "5s",
//             animationDelay: "1s",
//           }}
//         />

//         {/* Grid pattern overlay – subtle dot pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />

//         {/* Floating orbs – reduced opacity */}
//         <div
//           className="absolute w-16 h-16 rounded-full opacity-0 sm:w-20 sm:h-20 top-16 left-6 sm:left-10 blur-xl animate-float"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(45,212,191,0.4), transparent 70%)",
//           }}
//         />
//         <div
//           className="absolute w-24 h-24 rounded-full opacity-0 sm:w-32 sm:h-32 top-1/3 right-6 sm:right-20 blur-xl animate-float"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(59,130,246,0.4), transparent 70%)",
//             animationDelay: "1s",
//             animationDuration: "6s",
//           }}
//         />
//         <div
//           className="absolute w-20 h-20 rounded-full opacity-0 sm:w-24 sm:h-24 bottom-1/4 left-1/4 blur-xl animate-float"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(244,114,182,0.4), transparent 70%)",
//             animationDelay: "2s",
//             animationDuration: "7s",
//           }}
//         />
//       </div>

//       <div className="relative z-10 w-full mx-auto max-w-7xl">
//         <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
//           {/* Text Content */}
//           <div className="text-left">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-[11px] sm:text-sm font-semibold border rounded-full text-cyan-100 bg-cyan-500/10 border-cyan-400/30 backdrop-blur-sm animate-fadeIn">
//               <span className="relative flex w-3 h-3">
//                 <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping"></span>
//                 <span className="relative inline-flex w-3 h-3 rounded-full bg-cyan-300"></span>
//               </span>
//               <span className="uppercase text-[10px] sm:text-[11px] tracking-[0.18em]">
//                 Transforming Digital Experiences
//               </span>
//             </div>

//             {/* Main Heading */}
//             <h1
//               className="
//                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
//                 font-extrabold
//                 mb-5 sm:mb-6
//                 leading-snug sm:leading-tight
//                 min-h-[120px] sm:min-h-[160px] md:min-h-[220px]
//                 text-white
//               "
//             >
//               {completedLines.map((line, idx) => (
//                 <div key={idx}>{line}</div>
//               ))}
//               {isTyping && displayedText && (
//                 <div className="text-white">
//                   {displayedText}
//                   <span className="animate-blink text-cyan-300">|</span>
//                 </div>
//               )}
//             </h1>

//             {/* Subheading */}
//             <p
//               className="max-w-xl mb-8 text-sm leading-relaxed sm:mb-10 sm:text-base md:text-lg text-white/70 animate-slideUp"
//               style={{
//                 animationDelay: "0.2s",
//               }}
//             >
//               Accelerating brands with Hybris, AEM, headless frontends and
//               multi-cloud commerce solutions — from strategy to launch.
//             </p>
//           </div>

//           {/* Hero Visual / Carousel */}
//           <div
//             className="
//               relative
//               h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px]
//               flex items-center justify-center
//               animate-fadeIn
//               mt-4 lg:mt-0
//             "
//             style={{ animationDelay: "0.6s" }}
//           >
//             <div className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden bg-[#0a0a0a]/80">
//               {/* Image Carousel */}
//               {images.map((image, idx) => (
//                 <img
//                   key={idx}
//                   src={image}
//                   alt={`E-commerce illustration ${idx + 1}`}
//                   className={`absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
//                     idx === currentImageIndex ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               ))}

//               {/* Carousel indicators - Updated to hero style */}
//               <div className="absolute z-10 flex gap-2 -translate-x-1/2 bottom-4 sm:bottom-6 left-1/2">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImageIndex(idx)}
//                     className={`h-1.5 rounded-full transition-all duration-300 ${
//                       idx === currentImageIndex
//                         ? "bg-white w-6"
//                         : "bg-white/40 hover:bg-white/70 w-2"
//                     }`}
//                     aria-label={`Go to image ${idx + 1}`}
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
        }, 1000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentLineIndex, isTyping]);

  /* ================= Image Carousel ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((p) => (p + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] md:min-h-screen px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-black">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          {/* ================= TEXT ================= */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-[11px] sm:text-sm font-semibold border rounded-full text-cyan-100 bg-cyan-500/10 border-cyan-400/30">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping" />
                <span className="relative inline-flex w-3 h-3 rounded-full bg-cyan-300" />
              </span>
              <span className="uppercase tracking-[0.18em]">
                Transforming Digital Experiences
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 leading-snug sm:leading-tight min-h-[120px] sm:min-h-[160px] md:min-h-[220px] text-white">
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

            <p className="max-w-xl mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-white/70">
              Accelerating brands with Hybris, AEM, headless frontends and
              multi-cloud commerce solutions — from strategy to launch.
            </p>
          </div>

          {/* ================= HERO VISUAL ================= */}
          <div className="relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px] mt-4 lg:mt-0">
            <div className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]/80">
              {/* ===== ZOOM SAFE IMAGE LAYER ===== */}
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`
                    absolute inset-0
                    transition-transform duration-[9000ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${idx === currentImageIndex ? "scale-[1.06]" : "scale-100"}
                  `}
                >
                  <img
                    src={img}
                    alt={`Hero image ${idx + 1}`}
                    className={`
                      w-full h-full
                      object-cover
                      object-center
                      transition-opacity duration-1000 ease-in-out
                      ${idx === currentImageIndex ? "opacity-100" : "opacity-0"}
                    `}
                  />
                </div>
              ))}

              {/* ===== INDICATORS ===== */}
              <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex justify-center gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/40 w-2 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
