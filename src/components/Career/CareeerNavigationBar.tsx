// // CareerNavigationBar.tsx

// interface CareerNavigationBarProps {
//   links: { label: string; page: string }[]
//   navigateTo: (page: string) => void
//   activePage?: string // <-- optional auto-detect
// }

// const CareerNavigationBar = ({ links, navigateTo, activePage }: CareerNavigationBarProps) => {
//   return (
//     <>
//       <style>
//         {`
//           @keyframes navFall {
//             0% { opacity: 0; transform: translateY(-12px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .nav-link-fall {
//             opacity: 0;
//             animation: navFall 0.35s ease-out forwards;
//           }
//         `}
//       </style>

//       <nav className="fixed top-0 left-0 right-0 z-[9999] h-[86px] flex items-center font-poppins bg-neutral-950/50 backdrop-blur-xl">
//         <div className="flex items-center justify-end w-full mx-auto gap-14 px-14 max-w-7xl">
//           {links.map((link, index) => {
//             const isActive = activePage === link.page

//             return (
//               <button
//                 key={link.page}
//                 onClick={() => navigateTo(link.page)}
//                 className="relative text-sm font-light tracking-wide transition-colors duration-300 group nav-link-fall md:text-base"
//                 style={{ animationDelay: `${index * 80}ms` }}
//               >
//                 <span
//                   className={`
//                     inline-block transition-all duration-300
//                     ${
//                       isActive
//                         ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300'
//                         : 'text-white/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-300'
//                     }
//                   `}
//                 >
//                   {link.label}
//                 </span>

//                 <span
//                   className={`
//                     absolute left-1/2 -bottom-[6px] h-[2px] w-0 rounded-full
//                     bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300
//                     transition-all duration-300 ease-out
//                     ${isActive ? 'w-full left-0' : 'group-hover:w-full group-hover:left-0'}
//                   `}
//                 />
//               </button>
//             )
//           })}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default CareerNavigationBar

// import { Menu, X } from 'lucide-react'
// import { useState } from 'react'

// interface CareerNavigationBarProps {
//   links: { label: string; page: string }[]
//   navigateTo: (page: string) => void
//   activePage?: string
// }

// const CareerNavigationBar = ({ links, navigateTo, activePage }: CareerNavigationBarProps) => {
//   const [mobileOpen, setMobileOpen] = useState(false)

//   return (
//     <>
//       <style>
//         {`
//           @keyframes navFall {
//             0% { opacity: 0; transform: translateY(-12px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .nav-link-fall {
//             opacity: 0;
//             animation: navFall 0.35s ease-out forwards;
//           }
//         `}
//       </style>

//       {/* NAVBAR */}
//       <nav className="fixed top-0 left-0 right-0 z-[9999] h-[86px] flex items-center bg-neutral-950/50 backdrop-blur-xl px-6 md:px-14">
//         {/* Desktop Menu */}
//         <div className="items-center justify-end hidden w-full mx-auto md:flex gap-14 max-w-7xl">
//           {links.map((link, index) => {
//             const isActive = activePage === link.page

//             return (
//               <button
//                 key={link.page}
//                 onClick={() => navigateTo(link.page)}
//                 className="relative text-sm font-light tracking-wide transition-colors duration-300 group nav-link-fall md:text-base"
//                 style={{ animationDelay: `${index * 80}ms` }}
//               >
//                 <span
//                   className={`inline-block transition-all duration-300 ${
//                     isActive
//                       ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300'
//                       : 'text-white/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-300'
//                   }`}
//                 >
//                   {link.label}
//                 </span>

//                 {/* underline */}
//                 <span
//                   className={`absolute left-1/2 -bottom-[6px] h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 transition-all duration-300 ${
//                     isActive ? 'w-full left-0' : 'group-hover:w-full group-hover:left-0'
//                   }`}
//                 />
//               </button>
//             )
//           })}
//         </div>

//         {/* Mobile hamburger */}
//         <button onClick={() => setMobileOpen(!mobileOpen)} className="ml-auto text-white md:hidden">
//           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile menu dropdown */}
//       {mobileOpen && (
//         <div className="md:hidden fixed top-[86px] left-0 right-0 bg-neutral-950/95 backdrop-blur-xl p-6 flex flex-col gap-6 z-[9998] border-b border-white/10">
//           {links.map((link) => {
//             const isActive = activePage === link.page

//             return (
//               <button
//                 key={link.page}
//                 onClick={() => {
//                   navigateTo(link.page)
//                   setMobileOpen(false)
//                 }}
//                 className={`text-lg text-left font-medium tracking-wide ${
//                   isActive
//                     ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300'
//                     : 'text-white/80'
//                 }`}
//               >
//                 {link.label}
//               </button>
//             )
//           })}
//         </div>
//       )}
//     </>
//   )
// }

// export default CareerNavigationBar

import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface CareerNavigationBarProps {
  links: { label: string; page: string }[];
  navigateTo: (page: string) => void;
  activePage?: string;
}

const CareerNavigationBar = ({ links, navigateTo, activePage }: CareerNavigationBarProps) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  /* -------------------- CLOSE ON OUTSIDE CLICK -------------------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        open &&
        sidebarRef.current &&
        toggleBtnRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [open]);

  return (
    <>
      <style>
        {`
          .nav-gradient {
            background: linear-gradient(90deg, #d8b4fe, #6ee7b7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .slide-menu {
            transition: all 0.35s cubic-bezier(.25,.8,.25,1);
          }

          .fade-in {
            animation: fadeIn 0.35s ease forwards;
            opacity: 0;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-8px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>

      {/* DESKTOP NAV */}
      <nav className="fixed top-0 left-0 right-0 hidden md:flex z-[9999] h-[80px] items-center bg-neutral-950/50 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-end w-full gap-12 px-10 mx-auto max-w-7xl">
          {links.map((link) => {
            const isActive = activePage === link.page;

            return (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                className={`relative text-[15px] font-light tracking-wide group ${
                  isActive ? 'nav-gradient' : 'text-white/80 hover:nav-gradient'
                }`}
              >
                {link.label}

                <span
                  className={`absolute left-1/2 -bottom-[5px] h-[2px] w-0 bg-gradient-to-r from-purple-300 to-cyan-300 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full left-0' : 'group-hover:w-full group-hover:left-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* MOBILE TRIGGER */}
      <button
        ref={toggleBtnRef}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="md:hidden fixed top-[90px] left-0 z-[10060] bg-neutral-900/60 backdrop-blur-xl
                   rounded-r-xl px-3 py-3 shadow-lg border border-white/10"
      >
        {open ? (
          <ChevronLeft size={26} className="text-white" />
        ) : (
          <ChevronRight size={26} className="text-white" />
        )}
      </button>

      {/* MOBILE SLIDE MENU */}
      <div
        ref={sidebarRef}
        className={`slide-menu fixed top-[86px] left-0 h-[calc(100vh-86px)]
                    bg-neutral-900/70 backdrop-blur-2xl border-r border-white/10
                    transition-all duration-500 z-[10050]
                    ${open ? 'w-[220px] opacity-100' : 'w-0 opacity-0'}
                    overflow-hidden`}
      >
        <div className="flex flex-col gap-5 px-6 pt-20">
          {links.map((link, index) => {
            const isActive = activePage === link.page;

            return (
              <button
                key={link.page}
                onClick={() => {
                  navigateTo(link.page);
                  setOpen(false);
                }}
                className={`text-left text-[16px] tracking-wide fade-in ${
                  isActive ? 'nav-gradient' : 'text-white/70 hover:nav-gradient'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CareerNavigationBar;
