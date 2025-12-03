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
//     { label: 'Careers', page: 'careers' },
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
//         {/* thin line */}
//         <span
//           className={`block h-[2px] rounded bg-white/40 w-10 transition-all duration-300 ease-out group-hover:w-20 ${
//             active ? 'w-20 bg-white' : ''
//           }`}
//           style={{ transformOrigin: 'left' }}
//         />
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
//           className={`pointer-events-auto text-xs sm:text-sm px-3 py-1 rounded-lg whitespace-nowrap ${
//             active ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
//           }`}
//         >
//           {label}
//         </button>
//       </div>
//     </div>
//   );

//   // class used to blur non-tech nav links when dropdown open
//   const blurredNavClass = desktopTechOpen ? 'blur-sm pointer-events-none' : '';

//   return (
//     <>
//       {/* MOBILE HEADER (phones & small tablets) */}
//       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800/60 bg-neutral-950/90 backdrop-blur md:hidden">
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
//           <nav className="relative p-4 pt-2 space-y-2 border-t border-neutral-800 bg-neutral-900/95 backdrop-blur-sm">
//             {/* Overview first */}
//             <button
//               onClick={() => handleNavClick('home')}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 currentPage === 'home'
//                   ? 'text-white font-semibold'
//                   : 'text-white/80 hover:text-white hover:bg-neutral-800/40'
//               }`}
//             >
//               Overview
//             </button>

//             {/* Technology Services mobile trigger */}
//             <div className="mt-1">
//               <button
//                 onClick={() => setMobileTechOpen((s) => !s)}
//                 className={`w-full text-left px-4 py-2 rounded text-sm flex items-center justify-between ${
//                   currentPage.startsWith('service-')
//                     ? 'text-white font-semibold bg-neutral-800/70'
//                     : 'text-white/80 hover:text-white hover:bg-neutral-800/40'
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

//             {/* Remaining nav items: Careers, Resources, About Us */}
//             {navItems.slice(1).map((item) => (
//               <button
//                 key={item.page}
//                 onClick={() => handleNavClick(item.page)}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === item.page
//                     ? 'text-white font-semibold bg-neutral-800/70'
//                     : 'text-white/80 hover:text-white hover:bg-neutral-800/40'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>
//         )}
//       </header>

//       {/* DESKTOP / TABLET COLLAPSIBLE SIDEBAR */}
//       <aside
//         className={`relative hidden overflow-visible transition-all duration-300 ease-out bg-transparent md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:flex-col group
//         ${isSidebarOpen ? 'md:w-56' : 'md:w-16'}`}
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

//         {/* Arrow centered vertically */}
//         <div className="absolute inset-y-0 z-30 flex items-center left-1">
//           <button
//             aria-label="Toggle navigation"
//             className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800/60 hover:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-neutral-500"
//             onClick={() => setIsSidebarOpen((s) => !s)}
//           >
//             <svg
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className={`w-4 h-4 transition-transform duration-300 transform
//                 ${isSidebarOpen ? 'translate-x-0 rotate-180' : 'group-hover:translate-x-1'}`}
//               aria-hidden
//             >
//               <path
//                 d="M7 5l5 5-5 5"
//                 stroke="white"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Nav content — appears on hover OR when arrow is clicked */}
//         <div
//           className={`
//             flex flex-col items-start w-full gap-4 pb-6 mt-2 pr-3
//             transition-all duration-300 ease-out
//             ${
//               isSidebarOpen
//                 ? 'opacity-100 pointer-events-auto pl-4'
//                 : 'opacity-0 pointer-events-none'
//             }
//             group-hover:opacity-100 group-hover:pointer-events-auto group-hover:pl-4
//           `}
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
//                   className="relative flex flex-col items-start w-full group/sidebar-item"
//                 >
//                   <div className="flex items-center justify-start w-full min-h-[52px] py-2">
//                     <span
//                       className={`
//                         block h-[1px] rounded
//                         w-[65px] bg-white/30
//                         transition-all duration-500 ease-out
//                         group-hover:w-[110px] group-hover:bg-white/60
//                         ${active ? 'w-[110px] bg-white' : ''}
//                       `}
//                       style={{ transformOrigin: 'left' }}
//                     />
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
//                       className={`pointer-events-auto text-xs sm:text-sm px-3 py-1 rounded-lg whitespace-nowrap ${
//                         active
//                           ? 'text-white font-semibold bg-neutral-800/60'
//                           : 'text-white/90 hover:text-white'
//                       }`}
//                     >
//                       Technology Services
//                     </button>
//                   </div>

//                   {desktopTechOpen && (
//                     <div
//                       className="
//                         absolute left-8 top-full mt-[2px]
//                         w-[320px] sm:w-[340px] lg:w-[360px] max-w-[86vw]
//                         p-3 z-50
//                         bg-transparent
//                       "
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

//       {/* DESKTOP OVERLAY FOR TECHNOLOGY DROPDOWN (blur page background only) */}
//       {desktopTechOpen && (
//         <div
//           className="fixed inset-0 z-30 hidden md:block bg-black/40 backdrop-blur-md"
//           onClick={() => setDesktopTechOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Header;

import { useEffect, useRef, useState } from 'react'
import TechnologyDropdown from './components/TechnologyDropdown'

interface HeaderProps {
  currentPage: string
  navigateTo: (page: string) => void
}

export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // mobile menu
  const [mobileTechOpen, setMobileTechOpen] = useState(false) // mobile Technology Services
  const [desktopTechOpen, setDesktopTechOpen] = useState(false) // desktop/tablet Technology Services
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // desktop/tablet arrow toggle

  const techContainerRef = useRef<HTMLDivElement | null>(null)

  const navItems = [
    { label: 'Overview', page: 'home' },
    { label: 'Careers', page: 'CarrierHome' },
    { label: 'Resources', page: 'resources' },
    { label: 'About Us', page: 'about' },
  ]

  const handleNavClick = (page: string) => {
    navigateTo(page)
    setIsMenuOpen(false)
    setMobileTechOpen(false)
    setDesktopTechOpen(false)
  }

  // Close desktop tech dropdown on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node | null
      if (
        desktopTechOpen &&
        techContainerRef.current &&
        !techContainerRef.current.contains(target)
      ) {
        setDesktopTechOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [desktopTechOpen])

  // Shared line component – SAME for every nav item
  const Line = ({ active }: { active: boolean }) => (
    <span
      className={`block h-[2px] rounded w-10 transition-all duration-200 ${
        active ? 'bg-white' : 'bg-white/40'
      }`}
      style={{ transformOrigin: 'left' }}
    />
  )

  // Reusable nav item
  const NavItem = ({
    label,
    page,
    onClick,
    active,
    expanded,
  }: {
    label: string
    page: string
    onClick: () => void
    active: boolean
    expanded: boolean
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
  )

  // class used to blur non-tech nav links on desktop when dropdown open
  const blurredNavClass = desktopTechOpen ? 'blur-sm pointer-events-none' : ''
  // class used to blur non-tech nav links on mobile when tech dropdown open
  const blurredMobileNavClass = mobileTechOpen ? 'blur-sm' : ''

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
              setIsMenuOpen((s) => !s)
              setMobileTechOpen(false)
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
                      navigateTo(p)
                      setMobileTechOpen(false)
                      setIsMenuOpen(false)
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
              const active = currentPage.startsWith('service-')
              const labelVisible = isSidebarOpen

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
                          handleNavClick(p)
                          setDesktopTechOpen(false)
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
              )
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
                }),
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
  )
}
