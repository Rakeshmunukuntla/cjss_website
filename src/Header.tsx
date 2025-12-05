// import { useEffect, useRef, useState } from 'react';
// import TechnologyDropdown from './components/TechnologyDropdown';

// interface HeaderProps {
//   currentPage: string;
//   navigateTo: (page: string) => void;
// }

// export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mobileTechOpen, setMobileTechOpen] = useState(false);
//   const [desktopTechOpen, setDesktopTechOpen] = useState(false);

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

//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       const target = e.target as Node | null;
//       if (
//         desktopTechOpen &&
//         techContainerRef.current &&
//         target &&
//         !techContainerRef.current.contains(target)
//       ) {
//         setDesktopTechOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', onDocClick);
//     return () => document.removeEventListener('mousedown', onDocClick);
//   }, [desktopTechOpen]);

//   const Line = ({ active }: { active: boolean }) => (
//     <span
//       className={`block h-[2px] rounded w-10 transition-all duration-200 ${
//         active ? 'bg-white' : 'bg-white/40'
//       }`}
//     />
//   );

//   const NavItem = ({
//     label,
//     page,
//     onClick,
//     active,
//   }: {
//     label: string;
//     page: string;
//     onClick: () => void;
//     active: boolean;
//   }) => (
//     <div className="relative flex flex-col items-start w-full group" key={page}>
//       <button onClick={onClick} className="flex items-center w-full min-h-[52px] py-2">
//         <Line active={active} />
//       </button>

//       <button
//         onClick={onClick}
//         className={`
//         text-[13px] sm:text-xs px-2 py-1 rounded-lg
//         max-w-[5.2rem] text-left leading-tight break-words whitespace-normal

//         /* HIDDEN BY DEFAULT */
//         opacity-0 translate-x-2 pointer-events-none
//         transition-all duration-300 ease-out

//         /* SHOW ON HOVER OF THIS ITEM */
//         group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto

//         ${active ? 'text-white font-semibold' : 'text-white/90 hover:text-white'}
//       `}
//       >
//         {label}
//       </button>
//     </div>
//   );

//   const blurredNavClass = desktopTechOpen ? 'blur-sm' : '';
//   const blurredMobileNavClass = mobileTechOpen ? 'blur-sm' : '';

//   return (
//     <>
//       {/* MOBILE */}
//       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
//         <div className="flex items-center justify-between px-4 py-3">
//           <button onClick={() => handleNavClick('home')}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="w-auto h-12" />
//           </button>

//           <button
//             onClick={() => {
//               setIsMenuOpen(!isMenuOpen);
//               setMobileTechOpen(false);
//             }}
//             aria-expanded={isMenuOpen}
//             className="relative inline-flex items-center justify-center gap-3 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10"
//           >
//             <span className="text-[11px] text-white/80">
//               {isMenuOpen ? 'Close menu' : 'Open menu'}
//             </span>
//           </button>
//         </div>

//         {isMenuOpen && (
//           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
//             <div className={blurredMobileNavClass}>
//               <button
//                 onClick={() => handleNavClick('home')}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === 'home'
//                     ? 'text-white font-semibold'
//                     : 'text-white/90 hover:text-white'
//                 }`}
//               >
//                 Overview
//               </button>
//             </div>

//             <button
//               onClick={() => setMobileTechOpen(!mobileTechOpen)}
//               className={`w-full text-left px-4 py-2 rounded text-sm flex justify-between ${
//                 currentPage.startsWith('service-')
//                   ? 'text-white font-semibold'
//                   : 'text-white/90 hover:text-white'
//               }`}
//             >
//               <span>Technology Services</span>
//               <span>{mobileTechOpen ? '−' : '+'}</span>
//             </button>

//             {mobileTechOpen && (
//               <div className="mt-[-50px]">
//                 <TechnologyDropdown
//                   navigateTo={(p: string) => {
//                     navigateTo(p);
//                     setMobileTechOpen(false);
//                     setIsMenuOpen(false);
//                   }}
//                   currentPage={currentPage}
//                   showToggle={false}
//                   hideHeader={true}
//                   open={true}
//                   onOpenChange={() => {}}
//                 />
//               </div>
//             )}

//             <div className={blurredMobileNavClass}>
//               {navItems.slice(1).map((item) => (
//                 <button
//                   key={item.page}
//                   onClick={() => handleNavClick(item.page)}
//                   className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                     currentPage === item.page
//                       ? 'text-white font-semibold'
//                       : 'text-white/90 hover:text-white'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </nav>
//         )}
//       </header>

//       <aside
//         className="
//     relative
//     hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
//     w-32 h-screen pl-2

//     /* BASE — dark → transparent */
//     bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent

//     shadow-none
//     transition-all duration-700 ease-out

//     /* LEFT EDGE CYAN STRIP (glow on hover) */
//     before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[4px]
//     before:bg-cyan-300/0
//     before:shadow-[0_0_0_0_rgba(0,200,255,0)]
//     before:transition-all before:duration-700

//     /* DARK GLOW from left on hover */
//     hover:bg-gradient-to-r hover:from-[#030a13] hover:via-[#030a13]/75 hover:to-transparent
//     hover:shadow-[inset_45px_0_70px_-30px_rgba(0,0,0,0.75)]

//     /* Stronger cyan edge glow on hover */
//     hover:before:bg-cyan-300/70 hover:before:shadow-[0_0_22px_6px_rgba(0,200,255,0.55)]
//   "
//       >
//         <div className="flex items-center w-full pt-6 pb-8 pl-1">
//           <button onClick={() => handleNavClick('home')}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="w-auto h-12" />
//           </button>
//         </div>

//         <div className="flex flex-col flex-1 w-full gap-5 px-2 pl-4 overflow-y-auto">
//           <div className={blurredNavClass}>
//             {NavItem({
//               label: 'Overview',
//               page: 'home',
//               onClick: () => handleNavClick('home'),
//               active: currentPage === 'home',
//             })}
//           </div>

//           {/* TECHNOLOGY SERVICES */}
//           <div ref={techContainerRef} className="relative flex flex-col w-full group">
//             <div className="flex w-full min-h-[52px] py-2">
//               <Line active={currentPage.startsWith('service-')} />
//             </div>

//             <button
//               onClick={(e) => {
//                 const rect = (e.target as HTMLElement).getBoundingClientRect();
//                 document.documentElement.style.setProperty('--tech-pos', `${rect.bottom}px`);
//                 setDesktopTechOpen(!desktopTechOpen);
//               }}
//               aria-expanded={desktopTechOpen}
//               className="
//       text-[11px] px-1 py-[1px] -mt-5 -mb-5
//       text-left leading-tight text-white/90 hover:text-white
//       max-w-[5.2rem] break-words

//       /* HIDDEN BY DEFAULT */
//       opacity-0 translate-x-2 pointer-events-none
//       transition-all duration-300 ease-out

//       /* SHOW ON HOVER OF THIS ITEM */
//       group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
//     "
//             >
//               Technology Services
//             </button>

//             {desktopTechOpen && (
//               <div
//                 className="
//       fixed
//       left-[10px]
//       mt-22
//       top-[calc(var(--tech-pos) + 6px)]
//       w-[380px] max-w-[92vw]
//       z-[99999]
//     "
//               >
//                 <div className="">
//                   <TechnologyDropdown
//                     navigateTo={(p: string) => {
//                       handleNavClick(p);
//                       setDesktopTechOpen(false);
//                     }}
//                     currentPage={currentPage}
//                     showToggle={false}
//                     hideHeader={true}
//                     open={desktopTechOpen}
//                     onOpenChange={(val) => setDesktopTechOpen(Boolean(val))}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className={blurredNavClass}>
//             {navItems.slice(1).map((item) =>
//               NavItem({
//                 label: item.label,
//                 page: item.page,
//                 onClick: () => handleNavClick(item.page),
//                 active: currentPage === item.page,
//               })
//             )}
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

import { useEffect, useRef, useState } from 'react';
import TechnologyDropdown from './components/TechnologyDropdown';

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [desktopTechOpen, setDesktopTechOpen] = useState(false);

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

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (
        desktopTechOpen &&
        techContainerRef.current &&
        target &&
        !techContainerRef.current.contains(target)
      ) {
        setDesktopTechOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [desktopTechOpen]);

  const Line = ({ active }: { active: boolean }) => (
    <span
      className={`block h-[2px] rounded w-10 transition-all duration-200 ${
        active ? 'bg-white' : 'bg-white/40'
      }`}
    />
  );

  // COMMON NAV ITEM (Overview, Careers, Resources, About Us)
  const NavItem = ({
    label,
    page,
    onClick,
    active,
  }: {
    label: string;
    page: string;
    onClick: () => void;
    active: boolean;
  }) => (
    <div className="relative flex flex-col items-start w-full group" key={page}>
      {/* line */}
      <button onClick={onClick} className="flex items-center w-full min-h-[52px] py-2">
        <Line active={active} />
      </button>

      {/* text (hidden by default, shown on hover/press) */}
      <button
        onClick={onClick}
        className={`
          text-[13px] sm:text-xs px-2 py-1 rounded-lg
          max-w-[5.2rem] text-left leading-tight break-words whitespace-normal
          transition-all duration-300 ease-out

          opacity-0 translate-x-2 pointer-events-none
          group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
          group-active:opacity-100 group-active:translate-x-0 group-active:pointer-events-auto
          group-focus-within:opacity-100 group-focus-within:translate-x-0 group-focus-within:pointer-events-auto

          ${active ? 'text-white font-semibold' : 'text-white/90 hover:text-white'}
        `}
      >
        {label}
      </button>
    </div>
  );

  const blurredNavClass = desktopTechOpen ? 'blur-sm' : '';
  const blurredMobileNavClass = mobileTechOpen ? 'blur-sm' : '';

  return (
    <>
      {/* MOBILE */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => handleNavClick('home')}>
            <img src="/images/cjss-logo.png" alt="CJSS" className="w-auto h-12" />
          </button>

          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileTechOpen(false);
            }}
            aria-expanded={isMenuOpen}
            className="relative inline-flex items-center justify-center gap-3 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10"
          >
            <span className="text-[11px] text-white/80">
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
            <div className={blurredMobileNavClass}>
              <button
                onClick={() => handleNavClick('home')}
                className={`block w-full text-left px-4 py-2 rounded text-sm ${
                  currentPage === 'home'
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Overview
              </button>
            </div>

            <button
              onClick={() => setMobileTechOpen(!mobileTechOpen)}
              className={`w-full text-left px-4 py-2 rounded text-sm flex justify-between ${
                currentPage.startsWith('service-')
                  ? 'text-white font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <span>Technology Services</span>
              <span>{mobileTechOpen ? '−' : '+'}</span>
            </button>

            {mobileTechOpen && (
              <div className="mt-[-50px]">
                <TechnologyDropdown
                  navigateTo={(p: string) => {
                    navigateTo(p);
                    setMobileTechOpen(false);
                    setIsMenuOpen(false);
                  }}
                  currentPage={currentPage}
                  showToggle={false}
                  hideHeader={true}
                  open={true}
                  onOpenChange={() => {}}
                />
              </div>
            )}

            <div className={blurredMobileNavClass}>
              {navItems.slice(1).map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-2 rounded text-sm ${
                    currentPage === item.page
                      ? 'text-white font-semibold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* DESKTOP / LARGE TABLET SIDEBAR */}
      <aside
        className="
          relative
          hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
          w-32 h-screen pl-2
          bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
        "
      >
        <div className="flex items-center w-full pt-6 pb-8 pl-1">
          <button onClick={() => handleNavClick('home')}>
            <img src="/images/cjss-logo.png" alt="CJSS" className="w-auto h-12" />
          </button>
        </div>

        <div className="flex flex-col flex-1 w-full gap-5 px-2 pl-4 overflow-visible">
          {/* Overview */}
          <div className={blurredNavClass}>
            {NavItem({
              label: 'Overview',
              page: 'home',
              onClick: () => handleNavClick('home'),
              active: currentPage === 'home',
            })}
          </div>

          {/* TECHNOLOGY SERVICES */}
          <div ref={techContainerRef} className="relative flex flex-col w-full group">
            {/* line (same as others) */}
            <button
              className="flex w-full min-h-[52px] py-2"
              onClick={() => setDesktopTechOpen(!desktopTechOpen)}
            >
              <Line active={currentPage.startsWith('service-')} />
            </button>

            {/* text (same behavior as other items) */}
            <button
              onClick={(e) => {
                const rect = (e.target as HTMLElement).getBoundingClientRect();
                document.documentElement.style.setProperty('--tech-pos', `${rect.bottom}px`);
                setDesktopTechOpen(!desktopTechOpen);
              }}
              aria-expanded={desktopTechOpen}
              className={`
  text-[11px] px-1 py-[1px] mt-[-14px] mb-[-12px]
  text-left leading-tight max-w-[5.2rem] break-words
  transition-all duration-300

  ${
    currentPage.startsWith('service-') || desktopTechOpen
      ? 'opacity-100 translate-x-0 text-white font-semibold'
      : 'opacity-0 translate-x-2 pointer-events-none text-white/80'
  }

  group-hover:opacity-100 group-hover:translate-x-0


              `}
            >
              Technology Services
            </button>

            {desktopTechOpen && (
              <div
                className="
                  fixed left-[32px]
                  top-[calc(var(--tech-pos) + 32px)]
                  w-[380px] max-w-[92vw]
                  z-[99999]
                "
              >
                <TechnologyDropdown
                  navigateTo={(p: string) => {
                    handleNavClick(p);
                    setDesktopTechOpen(false);
                  }}
                  currentPage={currentPage}
                  showToggle={false}
                  hideHeader={true}
                  open={desktopTechOpen}
                  onOpenChange={(val) => setDesktopTechOpen(Boolean(val))}
                />
              </div>
            )}
          </div>

          {/* Remaining nav items */}
          <div className={blurredNavClass}>
            {navItems.slice(1).map((item) =>
              NavItem({
                label: item.label,
                page: item.page,
                onClick: () => handleNavClick(item.page),
                active: currentPage === item.page,
              })
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
