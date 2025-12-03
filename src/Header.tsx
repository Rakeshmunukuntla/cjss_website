import { useEffect, useRef, useState } from 'react';
import TechnologyDropdown from './components/TechnologyDropdown';

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu
  const [mobileTechOpen, setMobileTechOpen] = useState(false); // mobile Technology Services
  const [desktopTechOpen, setDesktopTechOpen] = useState(false); // desktop/tablet Technology Services
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // desktop/tablet arrow toggle

  const techContainerRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { label: 'Overview', page: 'home' },
    { label: 'Careers', page: 'CarrierHome' },
    { label: 'Resources', page: 'resources' },
    { label: 'About Us', page: 'about' },
  ];

  const handleNavClick = (page: string) => {
    navigateTo(page);
    setIsMenuOpen(false);
    setMobileTechOpen(false);
    setDesktopTechOpen(false);
  };

  // Close desktop tech dropdown on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (
        desktopTechOpen &&
        techContainerRef.current &&
        !techContainerRef.current.contains(target)
      ) {
        setDesktopTechOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [desktopTechOpen]);

  // Shared line component – SAME for every nav item
  const Line = ({ active }: { active: boolean }) => (
    <span
      className={`block h-[2px] rounded w-10 transition-all duration-200 ${
        active ? 'bg-white' : 'bg-white/40'
      }`}
      style={{ transformOrigin: 'left' }}
    />
  );

  // Reusable nav item
  const NavItem = ({
    label,
    page,
    onClick,
    active,
    expanded,
  }: {
    label: string;
    page: string;
    onClick: () => void;
    active: boolean;
    expanded: boolean;
  }) => (
    <div className="relative flex flex-col items-start w-full group" key={page}>
      <button
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
        className="flex items-center justify-start w-full min-h-[52px] py-2"
      >
        <Line active={active} />
      </button>

      <div
        className={
          expanded
            ? 'mt-1 w-max translate-y-0 opacity-100 pointer-events-auto transition-all duration-300'
            : 'mt-1 w-max transition-all delay-75 translate-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 duration-300'
        }
      >
        <button
          onClick={onClick}
          className={`pointer-events-auto text-xs sm:text-sm px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
            active ? 'text-white font-semibold' : 'text-white/95 hover:text-white'
          }`}
        >
          {label}
        </button>
      </div>
    </div>
  );

  // class used to blur non-tech nav links on desktop when dropdown open
  const blurredNavClass = desktopTechOpen ? 'blur-sm pointer-events-none' : '';
  // class used to blur non-tech nav links on mobile when tech dropdown open
  const blurredMobileNavClass = mobileTechOpen ? 'blur-sm' : '';

  return (
    <>
      {/* MOBILE HEADER (phones & small tablets) */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
          <button
            onClick={() => handleNavClick('home')}
            aria-label="Go home"
            className="flex items-center gap-3"
          >
            {/* mobile logo using same /public path */}
            <img
              src="/images/cjss-logo.png"
              alt="CJSS Technologies"
              className="object-contain w-auto h-12"
            />
          </button>

          <button
            onClick={() => {
              setIsMenuOpen((s) => !s);
              setMobileTechOpen(false);
            }}
            aria-expanded={isMenuOpen}
            className="flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-transform duration-200 ${
                isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-opacity duration-150 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-transform duration-200 ${
                isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="relative p-4 pt-2 space-y-2 border-t border-neutral-800 bg-neutral-950">
            {/* Overview first (blur when tech dropdown open) */}
            <div className={blurredMobileNavClass}>
              <button
                onClick={() => handleNavClick('home')}
                className={`block w-full text-left px-4 py-2 rounded text-sm transition-colors ${
                  currentPage === 'home'
                    ? 'text-white font-semibold'
                    : 'text-white/95 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                Overview
              </button>
            </div>

            {/* Technology Services mobile trigger (never blurred) */}
            <div className="mt-1">
              <button
                onClick={() => setMobileTechOpen((s) => !s)}
                className={`w-full text-left px-4 py-2 rounded text-sm flex items-center justify-between transition-colors ${
                  currentPage.startsWith('service-')
                    ? 'text-white font-semibold'
                    : 'text-white/95 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <span>Technology Services</span>
                <span className="text-xs opacity-80">{mobileTechOpen ? '−' : '+'}</span>
              </button>

              {mobileTechOpen && (
                <div className="p-2 mt-2 border rounded-xl bg-neutral-900 border-neutral-800">
                  <TechnologyDropdown
                    navigateTo={(p: string) => {
                      navigateTo(p);
                      setMobileTechOpen(false);
                      setIsMenuOpen(false);
                    }}
                    currentPage={currentPage}
                    /* no extra header / toggle inside dropdown on mobile */
                    showToggle={false}
                    hideHeader={true}
                    // force dropdown open when section expanded
                    open={true}
                    onOpenChange={() => {}}
                  />
                </div>
              )}
            </div>

            {/* Remaining nav items: Careers, Resources, About Us (blur when tech dropdown open) */}
            <div className={blurredMobileNavClass}>
              {navItems.slice(1).map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-2 rounded text-sm transition-colors ${
                    currentPage === item.page
                      ? 'text-white font-semibold'
                      : 'text-white/95 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* DESKTOP / TABLET COLLAPSIBLE SIDEBAR */}
      <aside
        className={`relative hidden overflow-visible transition-all duration-500 ease-out bg-transparent md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:flex-col group
            ${isSidebarOpen ? 'md:w-56' : 'md:w-16'}`}
        aria-hidden={false}
      >
        {/* Logo pinned at top */}
        <div className="z-40 w-full px-3 pt-6 pb-4 bg-transparent">
          <button
            onClick={() => handleNavClick('home')}
            aria-label="Go home"
            className="flex items-center justify-center md:justify-start"
          >
            <img
              src="/images/cjss-logo.png"
              alt="CJSS"
              className="block h-12 w-auto object-contain max-w-[170px]"
            />
          </button>
        </div>

        {/* Arrow centered vertically – premium styling */}
        <div className="absolute inset-y-0 z-30 flex items-center left-1">
          <button
            aria-label="Toggle navigation"
            className={`
                  relative flex items-center justify-center
                  w-9 h-9 rounded-full
                  bg-neutral-900/90 border border-white/10
                  shadow-lg shadow-black/40
                  hover:shadow-purple-500/30
                  hover:border-purple-400/50
                  transition-all duration-300
                  before:absolute before:inset-[-2px] before:rounded-full
                  before:bg-linear-to-br before:from-purple-500/40 before:to-cyan-500/40
                  before:opacity-0 hover:before:opacity-100 before:transition-opacity
                `}
            onClick={() => setIsSidebarOpen((s) => !s)}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`
                    w-4 h-4 relative z-10 transition-transform duration-300
                    ${isSidebarOpen ? 'rotate-180' : 'translate-x-[1px]'}
                  `}
              aria-hidden
            >
              <path
                d="M7 5l5 5-5 5"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav content — smooth slide + fade when arrow toggles */}
        <div
          className={`
                flex flex-col items-start w-full gap-4 pb-6 mt-2 pr-3
                transform-gpu transition-all duration-500 ease-out
                ${
                  isSidebarOpen
                    ? 'opacity-100 pointer-events-auto pl-4 translate-x-0'
                    : 'opacity-0 pointer-events-none -translate-x-3'
                }
              `}
        >
          <nav className="flex flex-col items-start w-full gap-3 mt-0">
            {/* OVERVIEW (blurred when dropdown open) */}
            <div className={blurredNavClass}>
              {NavItem({
                label: 'Overview',
                page: 'home',
                onClick: () => handleNavClick('home'),
                active: currentPage === 'home',
                expanded: isSidebarOpen,
              })}
            </div>

            {/* TECHNOLOGY SERVICES (never blurred) */}
            {(() => {
              const active = currentPage.startsWith('service-');
              const labelVisible = isSidebarOpen;

              return (
                <div
                  ref={techContainerRef}
                  className="relative flex flex-col items-start w-full group"
                >
                  <div className="flex items-center justify-start w-full min-h-[52px] py-2">
                    <Line active={active} />
                  </div>

                  <div
                    className={
                      labelVisible
                        ? 'mt-1 w-max translate-y-0 opacity-100 pointer-events-auto transition-all duration-300'
                        : 'mt-1 w-max transition-all delay-75 translate-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 duration-300'
                    }
                  >
                    <button
                      onClick={() => setDesktopTechOpen((s) => !s)}
                      aria-haspopup="menu"
                      aria-expanded={desktopTechOpen}
                      className={`pointer-events-auto text-xs sm:text-sm px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
                        active ? 'text-white font-semibold' : 'text-white/95 hover:text-white'
                      }`}
                    >
                      Technology Services
                    </button>
                  </div>

                  {desktopTechOpen && (
                    <div
                      className="
                            absolute left-8 top-full mt-[2px]
                            w-[320px] sm:w-[340px] lg:w-[360px] max-w-[86vw]
                            p-3 z-50
                            bg-transparent
                          "
                    >
                      <TechnologyDropdown
                        navigateTo={(p: string) => {
                          handleNavClick(p);
                          setDesktopTechOpen(false);
                        }}
                        currentPage={currentPage}
                        showToggle={false}
                        open={desktopTechOpen}
                        onOpenChange={(val) => setDesktopTechOpen(Boolean(val))}
                        hideHeader={true}
                      />
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Remaining nav items (blurred when dropdown open) */}
            <div className={blurredNavClass}>
              {navItems.slice(1).map((item) =>
                NavItem({
                  label: item.label,
                  page: item.page,
                  onClick: () => handleNavClick(item.page),
                  active: currentPage === item.page,
                  expanded: isSidebarOpen,
                })
              )}
            </div>
          </nav>

          <div className="mt-auto" />
        </div>
      </aside>

      {/* DESKTOP OVERLAY FOR TECHNOLOGY DROPDOWN (blur page background only when dropdown open) */}
      {desktopTechOpen && (
        <div
          className="fixed inset-0 z-30 hidden md:block bg-black/40 backdrop-blur-md"
          onClick={() => setDesktopTechOpen(false)}
        />
      )}

      {mobileTechOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-md"
          onClick={() => setMobileTechOpen(false)}
        />
      )}
    </>
  );
};

// import { useEffect, useRef, useState } from 'react';
// import TechnologyDropdown from './components/TechnologyDropdown';

// interface HeaderProps {
//   currentPage: string;
//   navigateTo: (page: string) => void;
// }

// export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu
//   const [mobileTechOpen, setMobileTechOpen] = useState(false); // mobile Technology Services
//   const [desktopTechOpen, setDesktopTechOpen] = useState(false); // desktop/tablet Technology Services
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // desktop/tablet arrow toggle

//   const techContainerRef = useRef<HTMLDivElement | null>(null);

//   const navItems = [
//     { label: 'Overview', page: 'home' },
//     { label: 'Careers', page: 'CarrierHome' },
//     { label: 'Resources', page: 'resources' },
//     { label: 'About Us', page: 'about' },
//   ];

//   const handleNavClick = (page: string) => {
//     navigateTo(page);
//     setIsMenuOpen(false);
//     setMobileTechOpen(false);
//     setDesktopTechOpen(false);
//   };

//   // Close desktop tech dropdown on outside click
//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       const target = e.target as Node | null;
//       if (
//         desktopTechOpen &&
//         techContainerRef.current &&
//         !techContainerRef.current.contains(target)
//       ) {
//         setDesktopTechOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', onDocClick);
//     return () => document.removeEventListener('mousedown', onDocClick);
//   }, [desktopTechOpen]);

//   // Shared line component – SAME for every nav item
//   const Line = ({ active }: { active: boolean }) => (
//     <span
//       className={`block h-[2px] rounded w-10 transition-all duration-200 ${
//         active ? 'bg-white' : 'bg-white/40'
//       }`}
//       style={{ transformOrigin: 'left' }}
//     />
//   );

//   // Reusable nav item
//   const NavItem = ({
//     label,
//     page,
//     onClick,
//     active,
//     expanded,
//   }: {
//     label: string;
//     page: string;
//     onClick: () => void;
//     active: boolean;
//     expanded: boolean;
//   }) => (
//     <div className="relative flex flex-col items-start w-full group" key={page}>
//       <button
//         onClick={onClick}
//         aria-current={active ? 'page' : undefined}
//         className="flex items-center justify-start w-full min-h-[52px] py-2"
//       >
//         <Line active={active} />
//       </button>

//       <div
//         className={
//           expanded
//             ? 'mt-1 w-max translate-y-0 opacity-100 pointer-events-auto transition-all duration-300'
//             : 'mt-1 w-max transition-all delay-75 translate-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 duration-300'
//         }
//       >
//         <button
//           onClick={onClick}
//           className={`pointer-events-auto text-xs sm:text-sm px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
//             active ? 'text-white font-semibold' : 'text-white/95 hover:text-white'
//           }`}
//         >
//           {label}
//         </button>
//       </div>
//     </div>
//   );

//   // class used to blur non-tech nav links on desktop when dropdown open
//   // ✅ removed pointer-events-none so links stay clickable
//   const blurredNavClass = desktopTechOpen ? 'blur-sm' : '';
//   // class used to blur non-tech nav links on mobile when tech dropdown open
//   const blurredMobileNavClass = mobileTechOpen ? 'blur-sm' : '';

//   return (
//     <>
//       {/* MOBILE HEADER (phones & small tablets) */}
//       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
//         <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
//           <button
//             onClick={() => handleNavClick('home')}
//             aria-label="Go home"
//             className="flex items-center gap-3"
//           >
//             {/* mobile logo using same /public path */}
//             <img
//               src="/images/cjss-logo.png"
//               alt="CJSS Technologies"
//               className="object-contain w-auto h-12"
//             />
//           </button>

//           <button
//             onClick={() => {
//               setIsMenuOpen((s) => !s);
//               setMobileTechOpen(false);
//             }}
//             aria-expanded={isMenuOpen}
//             className="flex flex-col items-center justify-center gap-1.5"
//           >
//             <span
//               className={`w-6 h-[2px] bg-white transition-transform duration-200 ${
//                 isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
//               }`}
//             />
//             <span
//               className={`w-6 h-[2px] bg-white transition-opacity duration-150 ${
//                 isMenuOpen ? 'opacity-0' : 'opacity-100'
//               }`}
//             />
//             <span
//               className={`w-6 h-[2px] bg-white transition-transform duration-200 ${
//                 isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
//               }`}
//             />
//           </button>
//         </div>

//         {isMenuOpen && (
//           <nav className="relative p-4 pt-2 space-y-2 border-t border-neutral-800 bg-neutral-950">
//             {/* Overview first (blur when tech dropdown open) */}
//             <div className={blurredMobileNavClass}>
//               <button
//                 onClick={() => handleNavClick('home')}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm transition-colors ${
//                   currentPage === 'home'
//                     ? 'text-white font-semibold'
//                     : 'text-white/95 hover:text-white hover:bg-neutral-800/60'
//                 }`}
//               >
//                 Overview
//               </button>
//             </div>

//             {/* Technology Services mobile trigger (never blurred) */}
//             <div className="mt-1">
//               <button
//                 onClick={() => setMobileTechOpen((s) => !s)}
//                 className={`w-full text-left px-4 py-2 rounded text-sm flex items-center justify-between transition-colors ${
//                   currentPage.startsWith('service-')
//                     ? 'text-white font-semibold'
//                     : 'text-white/95 hover:text-white hover:bg-neutral-800/60'
//                 }`}
//               >
//                 <span>Technology Services</span>
//                 <span className="text-xs opacity-80">{mobileTechOpen ? '−' : '+'}</span>
//               </button>

//               {mobileTechOpen && (
//                 <div className="p-2 mt-2 border rounded-xl bg-neutral-900 border-neutral-800">
//                   <TechnologyDropdown
//                     navigateTo={(p: string) => {
//                       navigateTo(p);
//                       setMobileTechOpen(false);
//                       setIsMenuOpen(false);
//                     }}
//                     currentPage={currentPage}
//                     /* no extra header / toggle inside dropdown on mobile */
//                     showToggle={false}
//                     hideHeader={true}
//                     // force dropdown open when section expanded
//                     open={true}
//                     onOpenChange={() => {}}
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Remaining nav items: Careers, Resources, About Us (blur when tech dropdown open) */}
//             <div className={blurredMobileNavClass}>
//               {navItems.slice(1).map((item) => (
//                 <button
//                   key={item.page}
//                   onClick={() => handleNavClick(item.page)}
//                   className={`block w-full text-left px-4 py-2 rounded text-sm transition-colors ${
//                     currentPage === item.page
//                       ? 'text-white font-semibold'
//                       : 'text-white/95 hover:text-white hover:bg-neutral-800/60'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </nav>
//         )}
//       </header>

//       {/* DESKTOP / TABLET COLLAPSIBLE SIDEBAR */}
//       <aside
//         className={`relative hidden overflow-visible transition-all duration-500 ease-out bg-transparent md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:flex-col group
//             ${isSidebarOpen ? 'md:w-56' : 'md:w-16'}`}
//         aria-hidden={false}
//       >
//         {/* Logo pinned at top */}
//         <div className="z-40 w-full px-3 pt-6 pb-4 bg-transparent">
//           <button
//             onClick={() => handleNavClick('home')}
//             aria-label="Go home"
//             className="flex items-center justify-center md:justify-start"
//           >
//             <img
//               src="/images/cjss-logo.png"
//               alt="CJSS"
//               className="block h-12 w-auto object-contain max-w-[170px]"
//             />
//           </button>
//         </div>

//         {/* Arrow centered vertically – 3D button + clear Menu text */}
//         <div className="absolute inset-y-0 z-30 flex items-center left-1">
//           <div className="flex items-center gap-3">
//             <button
//               aria-label={isSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
//               className={`
//                 relative flex items-center justify-center
//                 w-10 h-10 rounded-full
//                 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400
//                 shadow-[0_12px_28px_rgba(0,0,0,0.8)]
//                 border border-white/40
//                 transform-gpu
//                 transition-all duration-300
//                 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.9)]
//                 active:translate-y-0 active:shadow-[0_8px_20px_rgba(0,0,0,0.95)]
//                 before:absolute before:inset-[2px] before:rounded-full
//                 before:bg-neutral-950 before:opacity-90
//               `}
//               onClick={() => setIsSidebarOpen((s) => !s)}
//             >
//               {/* subtle glow ping when closed, to attract attention */}
//               {!isSidebarOpen && (
//                 <span className="absolute inline-flex w-full h-full border rounded-full border-cyan-300/80 opacity-70 animate-ping" />
//               )}

//               <svg
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`
//                   w-4 h-4 relative z-10 transition-transform duration-300
//                   ${isSidebarOpen ? 'rotate-180' : 'translate-x-[1px]'}
//                 `}
//                 aria-hidden
//               >
//                 <path
//                   d="M7 5l5 5-5 5"
//                   stroke="white"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             {/* Clean, small indication so user knows this opens the menu */}
//             <div
//               className={`
//                 origin-left transition-all duration-300
//                 ${
//                   isSidebarOpen
//                     ? 'opacity-0 -translate-x-2 scale-95 pointer-events-none'
//                     : 'opacity-100 translate-x-0 scale-100'
//                 }
//               `}
//             >
//               <span className="px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase rounded-full bg-neutral-900/95 border border-white/20 text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.85)] animate-pulse">
//                 Menu
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Nav content — smooth slide + fade when arrow toggles */}
//         <div
//           className={`
//                 flex flex-col items-start w-full gap-4 pb-6 mt-2 pr-3
//                 transform-gpu transition-all duration-500 ease-out
//                 ${
//                   isSidebarOpen
//                     ? 'opacity-100 pointer-events-auto pl-4 translate-x-0'
//                     : 'opacity-0 pointer-events-none -translate-x-3'
//                 }
//               `}
//         >
//           <nav className="flex flex-col items-start w-full gap-3 mt-0">
//             {/* OVERVIEW (blurred when dropdown open) */}
//             <div className={blurredNavClass}>
//               {NavItem({
//                 label: 'Overview',
//                 page: 'home',
//                 onClick: () => handleNavClick('home'),
//                 active: currentPage === 'home',
//                 expanded: isSidebarOpen,
//               })}
//             </div>

//             {/* TECHNOLOGY SERVICES (never blurred) */}
//             {(() => {
//               const active = currentPage.startsWith('service-');
//               const labelVisible = isSidebarOpen;

//               return (
//                 <div
//                   ref={techContainerRef}
//                   className="relative flex flex-col items-start w-full group"
//                 >
//                   <div className="flex items-center justify-start w-full min-h-[52px] py-2">
//                     <Line active={active} />
//                   </div>

//                   <div
//                     className={
//                       labelVisible
//                         ? 'mt-1 w-max translate-y-0 opacity-100 pointer-events-auto transition-all duration-300'
//                         : 'mt-1 w-max transition-all delay-75 translate-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 duration-300'
//                     }
//                   >
//                     <button
//                       onClick={() => setDesktopTechOpen((s) => !s)}
//                       aria-haspopup="menu"
//                       aria-expanded={desktopTechOpen}
//                       className={`pointer-events-auto text-xs sm:text-sm px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
//                         active ? 'text-white font-semibold' : 'text-white/95 hover:text-white'
//                       }`}
//                     >
//                       Technology Services
//                     </button>
//                   </div>

//                   {desktopTechOpen && (
//                     <div
//                       className="
//                             absolute left-8 top-full mt-[2px]
//                             w-[320px] sm:w-[340px] lg:w-[360px] max-w-[86vw]
//                             p-3 z-50
//                             bg-transparent
//                           "
//                     >
//                       <TechnologyDropdown
//                         navigateTo={(p: string) => {
//                           handleNavClick(p);
//                           setDesktopTechOpen(false);
//                         }}
//                         currentPage={currentPage}
//                         showToggle={false}
//                         open={desktopTechOpen}
//                         onOpenChange={(val) => setDesktopTechOpen(Boolean(val))}
//                         hideHeader={true}
//                       />
//                     </div>
//                   )}
//                 </div>
//               );
//             })()}

//             {/* Remaining nav items (blurred when dropdown open) */}
//             <div className={blurredNavClass}>
//               {navItems.slice(1).map((item) =>
//                 NavItem({
//                   label: item.label,
//                   page: item.page,
//                   onClick: () => handleNavClick(item.page),
//                   active: currentPage === item.page,
//                   expanded: isSidebarOpen,
//                 })
//               )}
//             </div>
//           </nav>

//           <div className="mt-auto" />
//         </div>
//       </aside>

//       {/* DESKTOP OVERLAY FOR TECHNOLOGY DROPDOWN (blur page background only when dropdown open) */}
//       {desktopTechOpen && (
//         <div
//           className="fixed inset-0 z-30 hidden md:block bg-black/40 backdrop-blur-md"
//           onClick={() => setDesktopTechOpen(false)}
//         />
//       )}

//       {mobileTechOpen && (
//         <div
//           className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-md"
//           onClick={() => setMobileTechOpen(false)}
//         />
//       )}
//     </>
//   );
// };
