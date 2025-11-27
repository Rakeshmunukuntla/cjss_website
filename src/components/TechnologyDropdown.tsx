// import { useEffect, useRef, useState } from 'react';
// import { TECHNOLOGY_SERVICES } from '../lib/Constants';

// interface Props {
//   navigateTo: (page: string) => void;
//   currentPage?: string;
// }

// export const TechnologyDropdown = ({ navigateTo, currentPage }: Props) => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const handleSelect = (id: string) => {
//     // Navigate to service-specific page
//     navigateTo(`service-${id}`);
//     setOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     };

//     if (open) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }
//   }, [open]);

//   const isActive = currentPage?.startsWith('service-');

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className={`text-sm font-medium px-4 py-2 transition-colors relative rounded-full ${
//           isActive || open
//             ? 'bg-purple-500/20 text-white font-bold border border-purple-400/40 shadow-lg shadow-purple-500/10'
//             : 'text-white/80 hover:text-white hover:bg-neutral-800'
//         }`}
//       >
//         <span className="relative z-10">Technology Services</span>
//       </button>

//       {open && (
//         <div className="absolute right-0 z-50 mt-2 overflow-hidden border shadow-xl w-72 bg-neutral-900 border-neutral-800 rounded-2xl shadow-purple-500/10 animate-fadeIn">
//           <div className="p-2">
//             {TECHNOLOGY_SERVICES.map((s) => {
//               const isSelected = currentPage === `service-${s.id}`;
//               return (
//                 <button
//                   key={s.id}
//                   onClick={() => handleSelect(s.id)}
//                   className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 group ${
//                     isSelected
//                       ? 'bg-purple-500/20 border border-purple-500/30'
//                       : 'hover:bg-neutral-800/80'
//                   }`}
//                 >
//                   <div
//                     className={`text-sm font-bold mb-1 ${
//                       isSelected ? 'text-purple-300' : 'text-white group-hover:text-purple-200'
//                     }`}
//                   >
//                     {s.title}
//                   </div>
//                   <div className="text-xs truncate text-white/70 group-hover:text-white">
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
  /** If parent passes `open`, component acts controlled. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** When true: do NOT render internal trigger/button. Parent will provide the trigger. */
  hideHeader?: boolean;
  /** small optional toggle indicator if internal header is shown */
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
    if (isControlled) {
      onOpenChange?.(val);
    } else {
      setInternalOpen(val);
      onOpenChange?.(val);
    }
  };

  const handleSelect = (id: string) => {
    navigateTo(`service-${id}`);
    setOpen(false);
  };

  // close on outside click
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

  return (
    <div className="relative" ref={dropdownRef}>
      {/* trigger */}
      {!hideHeader && (
        <button
          onClick={() => setOpen(!isOpen)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          className={`text-sm font-medium px-4 py-2 transition-colors relative ${
            isActive || isOpen ? 'text-purple-300 font-bold' : 'text-white/80 hover:text-white'
          }`}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <span>Technology Services</span>
          {showToggle && <span className="ml-2 text-xs">{isOpen ? '▲' : '▼'}</span>}
        </button>
      )}

      {/* dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 z-20 mt-2 bg-transparent w-92 animate-fadeIn"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <div className="p-2">
            {TECHNOLOGY_SERVICES.map((s) => {
              const selected = currentPage === `service-${s.id}`;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  className="w-full px-4 py-3 text-left transition-all duration-200 rounded-xl group"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <div
                    className={`text-sm font-bold mb-1 ${
                      selected ? 'text-purple-300' : 'text-white group-hover:text-purple-200'
                    }`}
                  >
                    {s.title}
                  </div>
                  <div className="text-xs truncate text-white/70 group-hover:text-purple-200/70">
                    {s.banner}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologyDropdown;
