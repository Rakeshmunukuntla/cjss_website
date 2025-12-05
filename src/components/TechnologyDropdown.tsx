// import { useEffect, useRef, useState } from 'react';
// import { TECHNOLOGY_SERVICES } from '../lib/Constants';

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

//   const isControlled = typeof controlledOpen !== 'undefined';
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
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isOpen]);

//   const isActive = currentPage?.startsWith('service-');

//   return (
//     <div ref={dropdownRef}>
//       {/* TRIGGER — unchanged for standalone usage */}
//       {!hideHeader && (
//         <button
//           onClick={() => setOpen(!isOpen)}
//           aria-haspopup="menu"
//           aria-expanded={isOpen}
//           className={`text-sm font-medium px-4 py-2 transition-colors relative ${
//             isActive || isOpen ? 'text-purple-300 font-bold' : 'text-white/80 hover:text-white'
//           }`}
//           style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
//         >
//           <span>Technology Services</span>
//           {showToggle && <span className="ml-2 text-xs">{isOpen ? '▲' : '▼'}</span>}
//         </button>
//       )}

//       {/* DROPDOWN PANEL – no blur, glass-like border & bg */}
//       {isOpen && (
//         <div
//           className="
//             fixed
//             z-[99999]
//             left-[20px]
//             pt-20
//             top-[calc(var(--tech-pos) + 6px)]
//             w-[380px] max-w-[92vw]
//             animate-fadeIn
//           "
//         >
//           <div
//             className="
//     rounded-2xl
//     bg-[#03101f]/40      /* dark bluish tint, 65% opacity */

//     shadow-[0_12px_38px_rgba(0,0,0,0.65)]
//     p-4
//   "
//           >
//             {TECHNOLOGY_SERVICES.map((s) => {
//               const selected = currentPage === `service-${s.id}`;
//               return (
//                 <button
//                   key={s.id}
//                   onClick={() => handleSelect(s.id)}
//                   className="w-full px-4 py-3 text-left transition-all duration-300 rounded-xl group hover:bg-white/5"
//                   style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
//                 >
//                   {/* Title: white by default, gradient on hover */}
//                   <div
//                     className={`
//                       text-sm font-bold mb-1 transition-all duration-300
//                       ${selected ? 'text-purple-300' : 'text-white'}
//                       group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300
//                       group-hover:text-transparent group-hover:bg-clip-text
//                     `}
//                   >
//                     {s.title}
//                   </div>

//                   {/* Subtitle: slightly dim, becomes white on hover */}
//                   <div className="text-xs transition-all duration-300 text-white/70 group-hover:text-white">
//                     {s.banner}
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnologyDropdown;

import { useEffect, useRef, useState } from 'react';
import { TECHNOLOGY_SERVICES } from '../lib/Constants';

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

  const isControlled = typeof controlledOpen !== 'undefined';
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

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const isActive = currentPage?.startsWith('service-');

  // 🔹 SHARED inner list (used for both desktop + mobile)
  const renderList = () => (
    <div
      className="
        rounded-2xl
        bg-[#03101f]/40
        shadow-[0_12px_38px_rgba(0,0,0,0.65)]
        p-4 mt-15
      "
    >
      {TECHNOLOGY_SERVICES.map((s) => {
        const selected = currentPage === `service-${s.id}`;
        return (
          <button
            key={s.id}
            onClick={() => handleSelect(s.id)}
            className="w-full px-4 py-3 text-left transition-all duration-300 rounded-xl group hover:bg-white/5"
            style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
          >
            {/* Title: white by default, gradient on hover */}
            <div
              className={`
                text-sm font-bold mb-1 transition-all duration-300
                ${selected ? 'text-purple-300' : 'text-white'}
                group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300
                group-hover:text-transparent group-hover:bg-clip-text
              `}
            >
              {s.title}
            </div>

            {/* Subtitle: slightly dim, becomes white on hover */}
            <div className="text-xs transition-all duration-300 text-white/70 group-hover:text-white">
              {s.banner}
            </div>
          </button>
        );
      })}
    </div>
  );

  // 🔹 If parent (Header) hides trigger (hideHeader = true),
  // we act as a pure "panel" (no fixed positioning here).
  if (hideHeader) {
    if (!isOpen) return null;
    return <div ref={dropdownRef}>{renderList()}</div>;
  }

  // 🔹 Default: standalone usage (with its own trigger + fixed dropdown)
  return (
    <div ref={dropdownRef}>
      {/* TRIGGER — unchanged for standalone usage */}
      {!hideHeader && (
        <button
          onClick={() => setOpen(!isOpen)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          className={`text-sm font-medium px-4 py-2 transition-colors relative ${
            isActive || isOpen ? 'text-purple-300 font-bold' : 'text-white/80 hover:text-white'
          }`}
          style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
        >
          <span>Technology Services</span>
          {showToggle && <span className="ml-2 text-xs">{isOpen ? '▲' : '▼'}</span>}
        </button>
      )}

      {isOpen && (
        <div
          className="
            fixed
            z-[99999]
            left-[20px]
            pt-20
            top-[calc(var(--tech-pos) + 32px)]
            w-[380px] max-w-[92vw]
            animate-fadeIn
          "
        >
          {renderList()}
        </div>
      )}
    </div>
  );
};

export default TechnologyDropdown;
