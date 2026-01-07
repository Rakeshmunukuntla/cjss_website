// import { useEffect, useRef, useState } from "react";
// import { TECHNOLOGY_SERVICES } from "../lib/Constants";

// interface Props {
//   navigateTo: (page: string) => void;
//   currentPage?: string;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   hideHeader?: boolean;
//   showToggle?: boolean;
// }

// export const TechnologyDropdown = ({
//   navigateTo,
//   currentPage,
//   open: controlledOpen,
//   onOpenChange,
//   hideHeader = false,
//   showToggle = false,
// }: Props) => {
//   const [internalOpen, setInternalOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const isControlled = typeof controlledOpen !== "undefined";
//   const isOpen = isControlled ? Boolean(controlledOpen) : internalOpen;

//   const setOpen = (val: boolean) => {
//     if (isControlled) onOpenChange?.(val);
//     else {
//       setInternalOpen(val);
//       onOpenChange?.(val);
//     }
//   };

//   const handleSelect = (id: string) => {
//     navigateTo(`service-${id}`);
//     setOpen(false);
//   };

//   useEffect(() => {
//     if (!isOpen) return;
//     const handleClickOutside = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   const isActive = currentPage?.startsWith("service-");

//   // 🔹 Sort services alphabetically by title
//   const sortedServices = [...TECHNOLOGY_SERVICES].sort((a, b) =>
//     a.title.localeCompare(b.title)
//   );

//   // 🔹 SHARED inner list (used for both desktop + mobile)
//   const renderList = () => (
//     <div
//       className="
//         rounded-2xl
//         bg-[#03101f]/100
//         shadow-[0_12px_38px_rgba(0,0,0,0.65)]
//         p-4 mt-17.5
//       "
//     >
//       {sortedServices.map((s) => {
//         const selected = currentPage === `service-${s.id}`;
//         return (
//           <button
//             key={s.id}
//             onClick={() => handleSelect(s.id)}
//             className="w-full px-4 py-3 text-left transition-all duration-300 rounded-xl group hover:bg-white/5"
//             style={{
//               backgroundColor: "transparent",
//               border: "none",
//               boxShadow: "none",
//             }}
//           >
//             {/* Title: white by default, gradient on hover */}
//             <div
//               className={`
//                 text-sm font-bold mb-1 transition-all duration-300
//                 ${selected ? "text-purple-300" : "text-white"}
//                 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300
//                 group-hover:text-transparent group-hover:bg-clip-text
//               `}
//             >
//               {s.title}
//             </div>

//             {/* Subtitle: slightly dim, becomes white on hover */}
//             <div className="text-xs transition-all duration-300 text-white/70 group-hover:text-white">
//               {s.banner}
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );

//   // 🔹 If parent (Header) hides trigger (hideHeader = true),
//   // we act as a pure "panel" (no fixed positioning here).
//   if (hideHeader) {
//     if (!isOpen) return null;
//     return <div ref={dropdownRef}>{renderList()}</div>;
//   }

//   // 🔹 Default: standalone usage (with its own trigger + fixed dropdown)
//   return (
//     <div ref={dropdownRef}>
//       {/* TRIGGER — unchanged for standalone usage */}
//       {!hideHeader && (
//         <button
//           onClick={() => setOpen(!isOpen)}
//           aria-haspopup="menu"
//           aria-expanded={isOpen}
//           className={`text-sm font-medium px-4 py-2 transition-colors relative ${
//             isActive || isOpen
//               ? "text-purple-300 font-bold"
//               : "text-white/80 hover:text-white"
//           }`}
//           style={{
//             backgroundColor: "transparent",
//             border: "none",
//             boxShadow: "none",
//           }}
//         >
//           <span>Technology Services</span>
//           {showToggle && (
//             <span className="ml-2 text-xs">{isOpen ? "▲" : "▼"}</span>
//           )}
//         </button>
//       )}

//       {isOpen && (
//         <div
//           className="
//             fixed
//             z-[99999]
//             left-[20px]
//             pt-20
//             top-[calc(var(--tech-pos) + 32px)]
//             w-[380px] max-w-[92vw]
//             animate-fadeIn
//           "
//         >
//           {renderList()}
//         </div>
//       )}
//     </div>
//   );
// };

// // export default TechnologyDropdown;
// import { useEffect, useRef, useState } from "react";
// import { TECHNOLOGY_SERVICES } from "../lib/Constants";

// interface Props {
//   navigateTo: (page: string) => void;
//   currentPage?: string;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   hideHeader?: boolean;
//   showToggle?: boolean;
// }

// export const TechnologyDropdown = ({
//   navigateTo,
//   currentPage,
//   open: controlledOpen,
//   onOpenChange,
//   hideHeader = false,
//   showToggle = false,
// }: Props) => {
//   const [internalOpen, setInternalOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const isControlled = typeof controlledOpen !== "undefined";
//   const isOpen = isControlled ? Boolean(controlledOpen) : internalOpen;

//   const setOpen = (val: boolean) => {
//     if (isControlled) onOpenChange?.(val);
//     else {
//       setInternalOpen(val);
//       onOpenChange?.(val);
//     }
//   };

//   const handleSelect = (id: string) => {
//     navigateTo(`service-${id}`);
//     setOpen(false);
//   };

//   useEffect(() => {
//     if (!isOpen) return;
//     const handleClickOutside = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   const isActive = currentPage?.startsWith("service-");

//   // 🔹 Sort services alphabetically by title
//   const sortedServices = [...TECHNOLOGY_SERVICES].sort((a, b) =>
//     a.title.localeCompare(b.title)
//   );

//   // 🔹 SHARED inner list (used for both desktop + mobile)
//   const renderList = () => (
//     <div
//       className="
//         rounded-2xl
//         bg-[#03101f]/100
//         shadow-[0_12px_38px_rgba(0,0,0,0.65)]
//         p-4 mt-17.5
//       "
//     >
//       {sortedServices.map((s) => {
//         const selected = currentPage === `service-${s.id}`;
//         return (
//           <button
//             key={s.id}
//             onClick={() => handleSelect(s.id)}
//             className={`
//               w-full px-4 py-3 text-left transition-all duration-300 rounded-xl group
//               ${
//                 selected
//                   ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-l-4 border-purple-400 shadow-lg shadow-purple-500/20"
//                   : "hover:bg-white/5"
//               }
//             `}
//             style={{
//               backgroundColor: selected ? undefined : "transparent",
//               border: selected ? undefined : "none",
//               boxShadow: selected ? undefined : "none",
//               position: "relative",
//             }}
//           >
//             {/* Title: white by default, gradient on hover */}
//             <div
//               className={`
//                 font-bold mb-1 transition-all duration-300
//                 ${
//                   selected
//                     ? "text-sm bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text animate-pulse"
//                     : "text-sm text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 group-hover:text-transparent group-hover:bg-clip-text"
//                 }
//               `}
//             >
//               {s.title}
//             </div>

//             {/* Subtitle: slightly dim, becomes white on hover */}
//             <div
//               className={`
//               text-xs transition-all duration-300
//               ${
//                 selected
//                   ? "text-white/90"
//                   : "text-white/70 group-hover:text-white"
//               }
//             `}
//             >
//               {s.banner}
//             </div>

//             {/* Selected indicator dot */}
//             {selected && (
//               <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                 <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-300 rounded-full animate-pulse"></div>
//               </div>
//             )}
//           </button>
//         );
//       })}
//     </div>
//   );

//   // 🔹 If parent (Header) hides trigger (hideHeader = true),
//   // we act as a pure "panel" (no fixed positioning here).
//   if (hideHeader) {
//     if (!isOpen) return null;
//     return <div ref={dropdownRef}>{renderList()}</div>;
//   }

//   // 🔹 Default: standalone usage (with its own trigger + fixed dropdown)
//   return (
//     <div ref={dropdownRef}>
//       {/* TRIGGER — unchanged for standalone usage */}
//       {!hideHeader && (
//         <button
//           onClick={() => setOpen(!isOpen)}
//           aria-haspopup="menu"
//           aria-expanded={isOpen}
//           className={`text-sm font-medium px-4 py-2 transition-colors relative ${
//             isActive || isOpen
//               ? "text-purple-300 font-bold"
//               : "text-white/80 hover:text-white"
//           }`}
//           style={{
//             backgroundColor: "transparent",
//             border: "none",
//             boxShadow: "none",
//           }}
//         >
//           <span>Technology Services</span>
//           {showToggle && (
//             <span className="ml-2 text-xs">{isOpen ? "▲" : "▼"}</span>
//           )}
//         </button>
//       )}

//       {isOpen && (
//         <div
//           className="
//             fixed
//             z-[99999]
//             left-[20px]
//             pt-20
//             top-[calc(var(--tech-pos) + 32px)]
//             w-[380px] max-w-[92vw]
//             animate-fadeIn
//           "
//         >
//           {renderList()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnologyDropdown;

// import { useEffect, useRef, useState } from "react";
// import { TECHNOLOGY_SERVICES } from "../lib/Constants";

// interface Props {
//   navigateTo: (page: string) => void;
//   currentPage?: string;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   hideHeader?: boolean;
//   showToggle?: boolean;
// }

// export const TechnologyDropdown = ({
//   navigateTo,
//   currentPage,
//   open: controlledOpen,
//   onOpenChange,
//   hideHeader = false,
//   showToggle = false,
// }: Props) => {
//   const [internalOpen, setInternalOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const isControlled = typeof controlledOpen !== "undefined";
//   const isOpen = isControlled ? Boolean(controlledOpen) : internalOpen;

//   const setOpen = (val: boolean) => {
//     if (isControlled) onOpenChange?.(val);
//     else {
//       setInternalOpen(val);
//       onOpenChange?.(val);
//     }
//   };

//   const handleSelect = (id: string) => {
//     navigateTo(`service-${id}`);
//     setOpen(false);
//   };

//   useEffect(() => {
//     if (!isOpen) return;
//     const handleClickOutside = (e: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   const sortedServices = [...TECHNOLOGY_SERVICES].sort((a, b) =>
//     a.title.localeCompare(b.title)
//   );

//   const renderList = () => (
//     <div
//       className="
//         rounded-2xl
//         bg-[#03101f]/60
//         backdrop-blur-xl
//         border border-white/10
//         shadow-[0_12px_38px_rgba(0,0,0,0.45)]
//         p-4
//       "
//     >
//       {sortedServices.map((s) => {
//         const selected = currentPage === `service-${s.id}`;
//         return (
//           <button
//             key={s.id}
//             onClick={() => handleSelect(s.id)}
//             className={`
//               w-full px-4 py-3 text-left rounded-xl transition-all duration-300 group
//               ${
//                 selected
//                   ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-l-4 border-purple-400"
//                   : "hover:bg-white/5"
//               }
//             `}
//           >
//             <div
//               className={`
//                 text-sm font-bold mb-1 transition-all
//                 ${
//                   selected
//                     ? "bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text"
//                     : "text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 group-hover:text-transparent group-hover:bg-clip-text"
//                 }
//               `}
//             >
//               {s.title}
//             </div>

//             <div
//               className={`text-xs transition-all ${
//                 selected
//                   ? "text-white/90"
//                   : "text-white/70 group-hover:text-white"
//               }`}
//             >
//               {s.banner}
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );

//   if (hideHeader) {
//     if (!isOpen) return null;
//     return <div ref={dropdownRef}>{renderList()}</div>;
//   }

//   return (
//     <div ref={dropdownRef}>
//       {!hideHeader && (
//         <button
//           onClick={() => setOpen(!isOpen)}
//           aria-expanded={isOpen}
//           className="text-sm font-medium px-4 py-2 text-white/80 hover:text-white"
//         >
//           Technology Services
//           {showToggle && <span className="ml-2">{isOpen ? "▲" : "▼"}</span>}
//         </button>
//       )}
//       {isOpen && renderList()}
//     </div>
//   );
// };

// export default TechnologyDropdown;

import { useEffect, useRef, useState } from "react";
import { TECHNOLOGY_SERVICES } from "../lib/Constants";

/* =====================================================
   SYMBOLS PER TECHNOLOGY (data-driven)
===================================================== */
// const TECH_SYMBOLS: Record<string, string> = {
//   "quality-engineering": "✔",
//   "cloud-technologies": "☁",
//   "application-services": "🧩",
//   "digital-platforms": "🛒",
//   "ai-services": "🤖",
// };

interface Props {
  navigateTo: (page: string) => void;
  currentPage?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  hideHeader?: boolean;
  showToggle?: boolean;
}

export const TechnologyDropdown = ({
  navigateTo,
  currentPage,
  open: controlledOpen,
  onOpenChange,
  hideHeader = false,
  showToggle = false,
}: Props) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const isControlled = typeof controlledOpen !== "undefined";
  const isOpen = isControlled ? Boolean(controlledOpen) : internalOpen;

  const setOpen = (val: boolean) => {
    if (isControlled) onOpenChange?.(val);
    else {
      setInternalOpen(val);
      onOpenChange?.(val);
    }
  };

  const handleSelect = (id: string) => {
    navigateTo(`service-${id}`);
    setOpen(false);
  };

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  /* ================= SORT SERVICES ================= */
  const sortedServices = [...TECHNOLOGY_SERVICES].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  /* ================= DROPDOWN LIST ================= */
  const renderList = () => (
    <div
      className="
        rounded-2xl
        bg-[#03101f]/60
        backdrop-blur-xl
        border border-white/10
        shadow-[0_12px_38px_rgba(0,0,0,0.45)]
        p-4
      "
    >
      {sortedServices.map((s) => {
        const selected = currentPage === `service-${s.id}`;

        return (
          <button
            key={s.id}
            onClick={() => handleSelect(s.id)}
            className={`
              w-full px-4 py-3 text-left rounded-xl transition-all duration-300 group
              ${
                selected
                  ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-l-4 border-purple-400"
                  : "hover:bg-white/5"
              }
            `}
          >
            {/* SYMBOL + CONTENT */}
            <div className="flex items-start gap-3">
              {/* SYMBOL */}
              <span
                className={`
                  text-lg mt-[2px] shrink-0
                  ${
                    selected
                      ? "text-purple-400"
                      : "text-white/70 group-hover:text-purple-400"
                  }
                `}
              >
                {/* {TECH_SYMBOLS[s.id] ?? "•"} */}
              </span>

              {/* TEXT */}
              <div>
                <div
                  className={`
                    text-sm font-bold mb-1 transition-all
                    ${
                      selected
                        ? "bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text"
                        : "text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 group-hover:text-transparent group-hover:bg-clip-text"
                    }
                  `}
                >
                  {s.title}
                </div>

                <div
                  className={`text-xs transition-all ${
                    selected
                      ? "text-white/90"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {s.banner}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );

  /* ================= PANEL MODE (USED BY HEADER) ================= */
  if (hideHeader) {
    if (!isOpen) return null;
    return <div ref={dropdownRef}>{renderList()}</div>;
  }

  /* ================= STANDALONE MODE ================= */
  return (
    <div ref={dropdownRef}>
      {!hideHeader && (
        <button
          onClick={() => setOpen(!isOpen)}
          aria-expanded={isOpen}
          className="text-sm font-medium px-4 py-2 text-white/80 hover:text-white"
        >
          Technology Services
          {showToggle && <span className="ml-2">{isOpen ? "▲" : "▼"}</span>}
        </button>
      )}
      {isOpen && renderList()}
    </div>
  );
};

export default TechnologyDropdown;
