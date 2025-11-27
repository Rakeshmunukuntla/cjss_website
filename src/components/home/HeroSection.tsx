// 'use client';

// import { useState, useEffect } from 'react';

// export const HeroSection = () => {
//   const textLines = ['Commerce.', 'Experience.', 'Technology.', 'Delivered.'];
//   const images = [
//     '/images/E-Commerce Illustration Kit-01.png',
//     '/images/E-Commerce Illustration Kit-02.png',
//     '/images/E-Commerce Illustration Kit-03.png',
//     '/images/E-Commerce Illustration Kit-04.png',
//     '/images/E-Commerce Illustration Kit-05.png',
//   ];

//   const [displayedText, setDisplayedText] = useState('');
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
//           setDisplayedText(displayedText + currentLine[displayedText.length]);
//         }, 100);
//       } else {
//         // Wait before moving to next line
//         timer = setTimeout(() => {
//           if (currentLineIndex < textLines.length - 1) {
//             // Add current line to completed lines
//             setCompletedLines([...completedLines, currentLine]);
//             setDisplayedText('');
//             setCurrentLineIndex(currentLineIndex + 1);
//           } else {
//             // Final line is complete, add it and stop typing
//             setCompletedLines([...completedLines, currentLine]);
//             setDisplayedText('');
//             setIsTyping(false);
//           }
//         }, 1000);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [displayedText, currentLineIndex, isTyping, completedLines]);

//   // Image carousel animation
//   useEffect(() => {
//     const imageTimer = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % images.length);
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(imageTimer);
//   }, []);

//   return (
//     <section className="relative flex items-center justify-center min-h-screen px-6 pt-8 pb-20 overflow-hidden bg-neutral-950">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden -z-5">
//         {/* Gradient blobs with multiple animations */}
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 animate-blob" />
//         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 animate-blob animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />

//         {/* Additional floating animation elements */}
//         <div
//           className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-2xl animate-pulse opacity-40"
//           style={{ animationDuration: '4s' }}
//         ></div>
//         <div
//           className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-2xl animate-pulse opacity-30"
//           style={{ animationDuration: '5s', animationDelay: '1s' }}
//         ></div>

//         {/* Grid pattern overlay for depth */}
//         <div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage:
//               'linear-gradient(0deg, transparent 24%, rgba(0, 221, 179, 0.1) 25%, rgba(0, 221, 179, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 221, 179, 0.1) 75%, rgba(0, 221, 179, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 102, 255, 0.1) 25%, rgba(0, 102, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.1) 75%, rgba(0, 102, 255, 0.1) 76%, transparent 77%, transparent)',
//             backgroundSize: '80px 80px',
//           }}
//         ></div>

//         {/* Floating orbs with staggered animation */}
//         <div className="absolute w-20 h-20 rounded-full opacity-0 top-20 left-10 bg-brand-teal/5 blur-xl animate-float"></div>
//         <div
//           className="absolute w-32 h-32 rounded-full opacity-0 top-1/3 right-20 bg-brand-blue/5 blur-xl animate-float"
//           style={{ animationDelay: '1s', animationDuration: '6s' }}
//         ></div>
//         <div
//           className="absolute w-24 h-24 rounded-full opacity-0 bottom-1/4 left-1/4 bg-brand-purple/5 blur-xl animate-float"
//           style={{ animationDelay: '2s', animationDuration: '7s' }}
//         ></div>
//       </div>

//       <div className="relative w-full mx-auto max-w-7xl z-5">
//         <div className="grid items-center lg:grid-cols-2 gap-9">
//           {/* Text Content */}
//           <div className="text-left">
//             <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold text-purple-300 border rounded-full bg-purple-500/20 animate-fadeIn border-purple-500/30">
//               <span className="relative flex w-3 h-3">
//                 <span className="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping"></span>
//                 <span className="relative inline-flex w-3 h-3 bg-purple-400 rounded-full"></span>
//               </span>
//               Transforming Digital Experiences
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight min-h-[400px] md:min-h-80">
//               {completedLines.map((line, idx) => (
//                 <div key={idx}>{line}</div>
//               ))}
//               {isTyping && displayedText && (
//                 <div>
//                   {displayedText}
//                   <span className="animate-blink">|</span>
//                 </div>
//               )}
//             </h1>

//             <p
//               className="max-w-lg mb-10 text-xl leading-relaxed text-neutral-300 animate-slideUp"
//               style={{ animationDelay: '0.2s' }}
//             >
//               Accelerating brands with Hybris, AEM, headless frontends and multi-cloud commerce
//               solutions.
//             </p>
//           </div>

//           {/* Hero Visual/Animation with Image Carousel */}
//           <div
//             className="relative lg:h-[600px] flex items-center justify-center animate-fadeIn"
//             style={{ animationDelay: '0.6s' }}
//           >
//             <div className="relative w-full h-full rounded-[3rem] border border-neutral-800 shadow-2xl shadow-neutral-900/50 p-8 flex items-center justify-center overflow-hidden bg-neutral-900">
//               {/* Image Carousel */}
//               {images.map((image, idx) => (
//                 <img
//                   key={idx}
//                   src={image}
//                   alt={`E-commerce illustration ${idx + 1}`}
//                   className={`absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
//                     idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 />
//               ))}

//               {/* Carousel indicators */}
//               <div className="absolute z-10 flex gap-2 -translate-x-1/2 bottom-6 left-1/2">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImageIndex(idx)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       idx === currentImageIndex
//                         ? 'bg-purple-400 w-8'
//                         : 'bg-neutral-700 hover:bg-neutral-600'
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
'use client';

import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const textLines = ['Commerce.', 'Experience.', 'Technology.', 'Delivered.'];
  const images = [
    '/images/E-Commerce Illustration Kit-01.png',
    '/images/E-Commerce Illustration Kit-02.png',
    '/images/E-Commerce Illustration Kit-03.png',
    '/images/E-Commerce Illustration Kit-04.png',
    '/images/E-Commerce Illustration Kit-05.png',
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  // Typing animation
  useEffect(() => {
    if (currentLineIndex >= textLines.length) return;

    const currentLine = textLines[currentLineIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayedText.length < currentLine.length) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText + currentLine[displayedText.length]);
        }, 100);
      } else {
        timer = setTimeout(() => {
          if (currentLineIndex < textLines.length - 1) {
            setCompletedLines([...completedLines, currentLine]);
            setDisplayedText('');
            setCurrentLineIndex(currentLineIndex + 1);
          } else {
            setCompletedLines([...completedLines, currentLine]);
            setDisplayedText('');
            setIsTyping(false);
          }
        }, 1000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, currentLineIndex, isTyping, completedLines]);

  // Image carousel animation
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(imageTimer);
  }, []);

  return (
    <section
      className="
        relative flex items-center justify-center min-h-screen px-6 pt-8 pb-20
        overflow-hidden
        bg-gradient-to-br from-[#020617] via-[#020b1b] to-[#020617]
      "
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Gradient blobs – slightly dark, unique colors */}
        <div className="absolute top-[-15%] right-[-10%] w-[720px] h-[720px] bg-violet-600/25 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[760px] h-[760px] bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-sky-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />

        {/* Extra soft glow pockets */}
        <div
          className="absolute top-1/4 right-1/4 w-[320px] h-[320px] rounded-full blur-2xl opacity-50 animate-pulse"
          style={{
            background: 'radial-gradient(circle at center, rgba(56,189,248,0.7), transparent 70%)',
            animationDuration: '4s',
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-[380px] h-[380px] rounded-full blur-2xl opacity-45 animate-pulse"
          style={{
            background: 'radial-gradient(circle at center, rgba(129,140,248,0.7), transparent 70%)',
            animationDuration: '5s',
            animationDelay: '1s',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(56,189,248,0.18) 25%, rgba(56,189,248,0.18) 26%, transparent 27%, transparent 74%, rgba(129,140,248,0.16) 75%, rgba(129,140,248,0.16) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(37,99,235,0.18) 25%, rgba(37,99,235,0.18) 26%, transparent 27%, transparent 74%, rgba(45,212,191,0.16) 75%, rgba(45,212,191,0.16) 76%, transparent 77%, transparent)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute w-20 h-20 rounded-full opacity-0 top-20 left-10 blur-xl animate-float"
          style={{
            background: 'radial-gradient(circle at center, rgba(45,212,191,0.7), transparent 70%)',
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full opacity-0 top-1/3 right-20 blur-xl animate-float"
          style={{
            background: 'radial-gradient(circle at center, rgba(59,130,246,0.7), transparent 70%)',
            animationDelay: '1s',
            animationDuration: '6s',
          }}
        />
        <div
          className="absolute w-24 h-24 rounded-full opacity-0 bottom-1/4 left-1/4 blur-xl animate-float"
          style={{
            background: 'radial-gradient(circle at center, rgba(244,114,182,0.7), transparent 70%)',
            animationDelay: '2s',
            animationDuration: '7s',
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <div className="grid items-center lg:grid-cols-2 gap-9">
          {/* Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold border rounded-full text-cyan-100 bg-cyan-500/15 border-cyan-400/40 backdrop-blur-sm animate-fadeIn">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-cyan-400 animate-ping"></span>
                <span className="relative inline-flex w-3 h-3 rounded-full bg-cyan-300"></span>
              </span>
              <span
                style={{
                  fontFamily: '"Sora", system-ui, sans-serif',
                  letterSpacing: '0.08em',
                }}
                className="uppercase text-[11px] tracking-[0.18em]"
              >
                Transforming Digital Experiences
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight min-h-[260px] md:min-h-72 text-slate-50"
              style={{
                fontFamily: '"Sora", system-ui, sans-serif',
                letterSpacing: '-0.05em',
              }}
            >
              {completedLines.map((line, idx) => (
                <div key={idx} className="">
                  {line}
                </div>
              ))}
              {isTyping && displayedText && (
                <div className="text-slate-50">
                  {displayedText}
                  <span className="animate-blink text-cyan-300">|</span>
                </div>
              )}
            </h1>

            {/* Subheading */}
            <p
              className="max-w-lg mb-10 text-lg leading-relaxed md:text-xl text-slate-300 animate-slideUp"
              style={{
                animationDelay: '0.2s',
                fontFamily: '"Sora", system-ui, sans-serif',
              }}
            >
              Accelerating brands with Hybris, AEM, headless frontends and multi-cloud commerce
              solutions — from strategy to launch.
            </p>
          </div>

          {/* Hero Visual / Carousel */}
          <div
            className="relative lg:h-[600px] flex items-center justify-center animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="relative w-full h-full rounded-[3rem] border border-slate-700/80 shadow-2xl shadow-cyan-900/40 p-8 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#020617,_#020617_55%,_#020617)]">
              {/* Image Carousel */}
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`E-commerce illustration ${idx + 1}`}
                  className={`absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                    idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Carousel indicators */}
              <div className="absolute z-10 flex gap-2 -translate-x-1/2 bottom-6 left-1/2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? 'bg-cyan-400 w-8'
                        : 'bg-slate-600/70 hover:bg-slate-400/80 w-2'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
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
