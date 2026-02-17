// import { useEffect, useRef, useState } from "react";
// import { TECHNOLOGY_SERVICES } from "../lib/Constants";

// /* =====================================================
//    SYMBOLS PER TECHNOLOGY (data-driven)
// ===================================================== */
// // const TECH_SYMBOLS: Record<string, string> = {
// //   "quality-engineering": "✔",
// //   "cloud-technologies": "☁",
// //   "application-services": "🧩",
// //   "digital-platforms": "🛒",
// //   "ai-services": "🤖",
// // };

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

//   /* ================= CLOSE ON OUTSIDE CLICK ================= */
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

//   /* ================= SORT SERVICES ================= */
//   const sortedServices = [...TECHNOLOGY_SERVICES].sort((a, b) =>
//     a.title.localeCompare(b.title),
//   );

//   /* ================= DROPDOWN LIST ================= */
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
//             {/* SYMBOL + CONTENT */}
//             <div className="flex items-start gap-3">
//               {/* SYMBOL */}
//               <span
//                 className={`
//                   text-lg mt-[2px] shrink-0
//                   ${
//                     selected
//                       ? "text-purple-400"
//                       : "text-white/70 group-hover:text-purple-400"
//                   }
//                 `}
//               >
//                 {/* {TECH_SYMBOLS[s.id] ?? "•"} */}
//               </span>

//               {/* TEXT */}
//               <div>
//                 <div
//                   className={`
//                     text-sm font-bold mb-1 transition-all
//                     ${
//                       selected
//                         ? "bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text"
//                         : "text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 group-hover:text-transparent group-hover:bg-clip-text"
//                     }
//                   `}
//                 >
//                   {s.title}
//                 </div>

//                 <div
//                   className={`text-xs transition-all ${
//                     selected
//                       ? "text-white/90"
//                       : "text-white/70 group-hover:text-white"
//                   }`}
//                 >
//                   {s.banner}
//                 </div>
//               </div>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );

//   /* ================= PANEL MODE (USED BY HEADER) ================= */
//   if (hideHeader) {
//     if (!isOpen) return null;
//     return <div ref={dropdownRef}>{renderList()}</div>;
//   }

//   /* ================= STANDALONE MODE ================= */
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
import { useNavigate, useLocation } from "react-router-dom";
import { TECHNOLOGY_SERVICES } from "../lib/Constants";

// ✅ Add this type definition
interface TechnologyService {
  id: string;
  title: string;
  banner: string;
  approach: string;
  icon?: React.ComponentType<{ className?: string }>; // Optional icon
  solutions: {
    id: string;
    title: string;
    summary: string;
    category: string;
  }[];
}

interface Props {
  currentPage?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  hideHeader?: boolean;
  showToggle?: boolean;
}

export const TechnologyDropdown = ({
  currentPage,
  open: controlledOpen,
  onOpenChange,
  hideHeader = false,
  showToggle = false,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

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
    navigate(`/services/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  // ✅ Cast to the proper type
  const sortedServices = ([...TECHNOLOGY_SERVICES] as TechnologyService[]).sort(
    (a, b) => a.title.localeCompare(b.title),
  );

  /* ================= CHECK IF SERVICE IS SELECTED ================= */
  const isServiceSelected = (serviceId: string): boolean => {
    if (currentPage) {
      return currentPage === `/services/${serviceId}`;
    }
    return location.pathname === `/services/${serviceId}`;
  };

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
        const selected = isServiceSelected(s.id);

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
            {/* CONTENT */}
            <div className="flex items-start gap-3">
              {/* ICON (if service has icon) */}
              {s.icon && (
                <div
                  className={`
                    shrink-0 mt-[2px]
                    ${
                      selected
                        ? "text-purple-400"
                        : "text-white/70 group-hover:text-purple-400"
                    }
                  `}
                >
                  <s.icon className="w-5 h-5" />
                </div>
              )}

              {/* TEXT */}
              <div className="flex-1">
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

              {/* Arrow indicator */}
              {selected && (
                <svg
                  className="w-4 h-4 text-purple-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
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
    <div ref={dropdownRef} className="relative">
      {!hideHeader && (
        <button
          onClick={() => setOpen(!isOpen)}
          aria-expanded={isOpen}
          className="text-sm font-medium px-4 py-2 text-white/80 hover:text-white transition-colors"
        >
          Technology Services
          {showToggle && (
            <span className="ml-2 transition-transform duration-200">
              {isOpen ? "▲" : "▼"}
            </span>
          )}
        </button>
      )}
      {isOpen && <div className="mt-2">{renderList()}</div>}
    </div>
  );
};

export default TechnologyDropdown;
