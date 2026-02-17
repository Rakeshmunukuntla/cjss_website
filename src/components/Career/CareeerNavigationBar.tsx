// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// interface CareerNavigationBarProps {
//   links: { label: string; page: string }[];
//   navigateTo: (page: string) => void;
//   activePage?: string;
// }

// const CareerNavigationBar = ({
//   links,
//   navigateTo,
//   activePage,
// }: CareerNavigationBarProps) => {
//   const [open, setOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement | null>(null);
//   const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (
//         open &&
//         sidebarRef.current &&
//         toggleBtnRef.current &&
//         !sidebarRef.current.contains(e.target as Node) &&
//         !toggleBtnRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("click", handler);
//     return () => window.removeEventListener("click", handler);
//   }, [open]);

//   return (
//     <>
//       <style>
//         {`
//           .nav-gradient {
//             background: linear-gradient(90deg, #e9d5ff, #bfdbfe);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//           }
//         `}
//       </style>

//       {/* ================= DESKTOP NAV ================= */}
//       <nav className="fixed top-0 left-0 right-0 hidden md:flex z-[9999] h-[90px] bg-neutral-950/80 backdrop-blur-xl border-b border-white/10">
//         <div className="flex items-center justify-between w-full max-w-7xl px-10 mx-auto">
//           {/* LOGO */}
//           <img
//             src="/images/cjss-logo.png"
//             alt="CJSS"
//             onClick={() => navigateTo("home")}
//             className="block h-12 w-auto object-contain max-w-[170px] ml-[-140px] cursor-pointer"
//           />

//           {/* NAV LINKS */}
//           <div className="flex items-center gap-12">
//             {links.map((link) => {
//               const isActive = activePage === link.page;

//               return (
//                 <button
//                   key={link.page}
//                   onClick={() => navigateTo(link.page)}
//                   className={`relative group text-[15px] font-light tracking-wide ${
//                     isActive
//                       ? "nav-gradient"
//                       : "text-white/80 hover:nav-gradient"
//                   }`}
//                 >
//                   {link.label}

//                   {/* UNDERLINE (FIXED ALIGNMENT) */}
//                   <span
//                     className={`
//                       absolute left-0 -bottom-[6px] h-[2px] w-full
//                       bg-gradient-to-r from-purple-300 to-sky-300
//                       rounded-full
//                       origin-center
//                       transition-transform duration-300
//                       ${
//                         isActive
//                           ? "scale-x-100"
//                           : "scale-x-0 group-hover:scale-x-100"
//                       }
//                     `}
//                   />
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* ================= MOBILE TOGGLE ================= */}
//       <button
//         ref={toggleBtnRef}
//         onClick={(e) => {
//           e.stopPropagation();
//           setOpen(!open);
//         }}
//         className="md:hidden fixed top-[90px] left-0 z-[10060] bg-neutral-900/60 backdrop-blur-xl
//                    rounded-r-xl px-3 py-3 shadow-lg border border-white/10"
//       >
//         {open ? (
//           <ChevronLeft size={26} className="text-white" />
//         ) : (
//           <ChevronRight size={26} className="text-white" />
//         )}
//       </button>

//       {/* ================= MOBILE SIDEBAR ================= */}
//       <div
//         ref={sidebarRef}
//         className={`fixed top-[73px] left-0 h-[calc(100vh-73px)]
//           bg-neutral-900/70 backdrop-blur-2xl border-r border-white/10 z-[10050]
//           transition-all duration-500 ${
//             open ? "w-[220px] opacity-100" : "w-0 opacity-0"
//           } overflow-hidden`}
//       >
//         <div className="flex flex-col gap-5 px-6 pt-20">
//           {links.map((link, index) => {
//             const isActive = activePage === link.page;

//             return (
//               <button
//                 key={link.page}
//                 onClick={() => {
//                   navigateTo(link.page);
//                   setOpen(false);
//                 }}
//                 className={`text-left text-[16px] fade-in ${
//                   isActive ? "nav-gradient" : "text-white/70 hover:nav-gradient"
//                 }`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {link.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CareerNavigationBar;

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface CareerNavigationBarProps {
  links: { label: string; path: string }[]; // ✅ Changed 'page' to 'path'
  activePage?: string; // Optional, will use useLocation instead
}

const CareerNavigationBar = ({
  links,
  activePage,
}: CareerNavigationBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  // Handle navigation with smooth scroll
  const handleNavClick = (path: string) => {
    navigate(path);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close sidebar when clicking outside
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

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [open]);

  return (
    <>
      <style>
        {`
          .nav-gradient {
            background: linear-gradient(90deg, #e9d5ff, #bfdbfe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="fixed top-0 left-0 right-0 hidden md:flex z-[9999] h-[90px] bg-neutral-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between w-full max-w-7xl px-10 mx-auto">
          {/* LOGO */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center"
          >
            <img
              src="/images/cjss-logo.png"
              alt="CJSS"
              className="block h-12 w-auto object-contain max-w-[170px] ml-[-140px] cursor-pointer hover:opacity-80 transition-opacity"
            />
          </button>

          {/* NAV LINKS */}
          <div className="flex items-center gap-12">
            {links.map((link) => {
              // Use currentPath or activePage for checking active state
              const isActive = activePage
                ? activePage === link.path
                : currentPath === link.path;

              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative group text-[15px] font-light tracking-wide transition-all ${
                    isActive
                      ? "nav-gradient"
                      : "text-white/80 hover:nav-gradient"
                  }`}
                >
                  {link.label}

                  {/* UNDERLINE */}
                  <span
                    className={`
                      absolute left-0 -bottom-[6px] h-[2px] w-full
                      bg-gradient-to-r from-purple-300 to-sky-300
                      rounded-full
                      origin-center
                      transition-transform duration-300
                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOGGLE ================= */}
      <button
        ref={toggleBtnRef}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="md:hidden fixed top-[90px] left-0 z-[10060] bg-neutral-900/60 backdrop-blur-xl
                   rounded-r-xl px-3 py-3 shadow-lg border border-white/10
                   hover:bg-neutral-900/80 transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <ChevronLeft size={26} className="text-white" />
        ) : (
          <ChevronRight size={26} className="text-white" />
        )}
      </button>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        ref={sidebarRef}
        className={`fixed top-[73px] left-0 h-[calc(100vh-73px)]
          bg-neutral-900/70 backdrop-blur-2xl border-r border-white/10 z-[10050]
          transition-all duration-500 ${
            open ? "w-[220px] opacity-100" : "w-0 opacity-0"
          } overflow-hidden md:hidden`}
      >
        <div className="flex flex-col gap-5 px-6 pt-20">
          {links.map((link, index) => {
            const isActive = activePage
              ? activePage === link.path
              : currentPath === link.path;

            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-left text-[16px] fade-in transition-all ${
                  isActive
                    ? "nav-gradient font-medium"
                    : "text-white/70 hover:nav-gradient"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}

                {/* Mobile active indicator */}
                {isActive && (
                  <span className="block mt-1 h-[2px] w-8 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[10040]"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default CareerNavigationBar;
