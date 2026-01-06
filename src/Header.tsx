// // import { useEffect, useRef, useState } from "react";
// // import TechnologyDropdown from "./components/TechnologyDropdown";

// // interface HeaderProps {
// //   currentPage: string;
// //   navigateTo: (page: string) => void;
// // }

// // export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [mobileTechOpen, setMobileTechOpen] = useState(false);
// //   const [desktopTechOpen, setDesktopTechOpen] = useState(false);

// //   const techContainerRef = useRef<HTMLDivElement | null>(null);

// //   // Helper function to check if current page is a career page
// //   const isCareerPage = (page: string) => {
// //     return (
// //       page === "careers" ||
// //       page === "CarrierHome" ||
// //       page === "CarrierLife" ||
// //       page === "CarrierFresher" ||
// //       page === "CarrierExperienced" ||
// //       page === "CarrierProblems" ||
// //       page.startsWith("Carrier")
// //     );
// //   };

// //   // const navItems = [
// //   //   { label: "Overview", page: "home" },
// //   //   { label: "Careers", page: "CarrierHome" },
// //   //   { label: "Resources", page: "resources" },
// //   //   { label: "About Us", page: "about" },
// //   // ];

// //   const handleNavClick = (page: string) => {
// //     navigateTo(page);
// //     setIsMenuOpen(false);
// //     setMobileTechOpen(false);
// //     setDesktopTechOpen(false);
// //   };

// //   useEffect(() => {
// //     function onDocClick(e: MouseEvent) {
// //       const target = e.target as Node | null;
// //       if (
// //         desktopTechOpen &&
// //         techContainerRef.current &&
// //         target &&
// //         !techContainerRef.current.contains(target)
// //       ) {
// //         setDesktopTechOpen(false);
// //       }
// //     }
// //     document.addEventListener("mousedown", onDocClick);
// //     return () => document.removeEventListener("mousedown", onDocClick);
// //   }, [desktopTechOpen]);

// //   const Line = ({ active }: { active: boolean }) => (
// //     <span
// //       className={`block h-[2px] rounded w-10 transition-all duration-200 ${
// //         active ? "bg-white" : "bg-white/40"
// //       }`}
// //     />
// //   );

// //   // Helper function to determine if a nav item is active
// //   // const isNavItemActive = (page: string) => {
// //   //   // Special handling for Careers - active for all career-related pages
// //   //   if (page === "CarrierHome") {
// //   //     return isCareerPage(currentPage);
// //   //   }
// //   //   // Special handling for Resources - active for resource detail pages too
// //   //   if (page === "resources") {
// //   //     return currentPage === "resources" || currentPage.startsWith("resource-");
// //   //   }
// //   //   // Default: exact match
// //   //   return currentPage === page;
// //   // };

// //   // COMMON NAV ITEM (Overview, Careers, Resources, About Us)
// //   const NavItem = ({
// //     label,
// //     page,
// //     onClick,
// //     active,
// //   }: {
// //     label: string;
// //     page: string;
// //     onClick: () => void;
// //     active: boolean;
// //   }) => (
// //     <div className="relative flex flex-col items-start w-full group" key={page}>
// //       {/* line */}
// //       <button
// //         onClick={onClick}
// //         className="flex items-center w-full min-h-[52px] py-2"
// //       >
// //         <Line active={active} />
// //       </button>

// //       {/* text - NOW VISIBLE WHEN ACTIVE OR ON HOVER */}
// //       <button
// //         onClick={onClick}
// //         className={`
// //           text-[13px] sm:text-xs px-2 py-1 rounded-lg
// //           max-w-[5.2rem] text-left leading-tight break-words whitespace-normal
// //           transition-all duration-300 ease-out

// //           ${
// //             active
// //               ? "opacity-100 translate-x-0 pointer-events-auto text-white font-semibold"
// //               : "opacity-0 translate-x-2 pointer-events-none text-white/90 hover:text-white"
// //           }

// //           group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
// //           group-active:opacity-100 group-active:translate-x-0 group-active:pointer-events-auto
// //           group-focus-within:opacity-100 group-focus-within:translate-x-0 group-focus-within:pointer-events-auto
// //         `}
// //       >
// //         {label}
// //       </button>
// //     </div>
// //   );

// //   const blurredNavClass = desktopTechOpen ? "blur-sm" : "";
// //   const blurredMobileNavClass = mobileTechOpen ? "blur-sm" : "";

// //   return (
// //     <>
// //       {/* MOBILE */}
// //       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
// //         <div className="flex items-center justify-between px-4 py-3">
// //           <button onClick={() => handleNavClick("home")}>
// //             <img
// //               src="/images/cjss-logo.png"
// //               alt="CJSS"
// //               className="w-auto h-12"
// //             />
// //           </button>

// //           <button
// //             onClick={() => {
// //               setIsMenuOpen(!isMenuOpen);
// //               setMobileTechOpen(false);
// //             }}
// //             aria-expanded={isMenuOpen}
// //             className="relative inline-flex items-center justify-center gap-3 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10"
// //           >
// //             <span className="text-[11px] text-white/80">
// //               {isMenuOpen ? "Close menu" : "Open menu"}
// //             </span>
// //           </button>
// //         </div>

// //         {isMenuOpen && (
// //           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
// //             <div className={blurredMobileNavClass}>
// //               <button
// //                 onClick={() => handleNavClick("home")}
// //                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                   currentPage === "home"
// //                     ? "text-white font-semibold"
// //                     : "text-white/90 hover:text-white"
// //                 }`}
// //               >
// //                 Overview
// //               </button>
// //             </div>

// //             <button
// //               onClick={() => setMobileTechOpen(!mobileTechOpen)}
// //               className={`w-full text-left px-4 py-2 rounded text-sm flex justify-between ${
// //                 currentPage.startsWith("service-")
// //                   ? "text-white font-semibold"
// //                   : "text-white/90 hover:text-white"
// //               }`}
// //             >
// //               <span>Technology Services</span>
// //               <span>{mobileTechOpen ? "−" : "+"}</span>
// //             </button>

// //             {mobileTechOpen && (
// //               <div className="mt-[-50px]">
// //                 <TechnologyDropdown
// //                   navigateTo={(p: string) => {
// //                     navigateTo(p);
// //                     setMobileTechOpen(false);
// //                     setIsMenuOpen(false);
// //                   }}
// //                   currentPage={currentPage}
// //                   showToggle={false}
// //                   hideHeader={true}
// //                   open={true}
// //                   onOpenChange={() => {}}
// //                 />
// //               </div>
// //             )}

// //             <div className={blurredMobileNavClass}>
// //               {/* Careers - with special active check */}
// //               <button
// //                 onClick={() => handleNavClick("CarrierHome")}
// //                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                   isCareerPage(currentPage)
// //                     ? "text-white font-semibold"
// //                     : "text-white/90 hover:text-white"
// //                 }`}
// //               >
// //                 Careers
// //               </button>

// //               {/* Resources - with special active check */}
// //               <button
// //                 onClick={() => handleNavClick("resources")}
// //                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                   currentPage === "resources" ||
// //                   currentPage.startsWith("resource-")
// //                     ? "text-white font-semibold"
// //                     : "text-white/90 hover:text-white"
// //                 }`}
// //               >
// //                 Resources
// //               </button>

// //               {/* About Us */}
// //               <button
// //                 onClick={() => handleNavClick("about")}
// //                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                   currentPage === "about"
// //                     ? "text-white font-semibold"
// //                     : "text-white/90 hover:text-white"
// //                 }`}
// //               >
// //                 About Us
// //               </button>
// //             </div>
// //           </nav>
// //         )}
// //       </header>

// //       {/* DESKTOP / LARGE TABLET SIDEBAR */}
// //       <aside
// //         className="
// //           relative
// //           hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
// //           w-32 h-screen pl-2
// //           bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
// //         "
// //       >
// //         <div className="flex items-center w-full pt-6 pb-8 pl-1">
// //           <button onClick={() => handleNavClick("home")}>
// //             <img
// //               src="/images/cjss-logo.png"
// //               alt="CJSS"
// //               className="w-auto h-12"
// //             />
// //           </button>
// //         </div>

// //         <div className="flex flex-col flex-1 w-full gap-5 px-2 pl-4 overflow-visible">
// //           {/* Overview */}
// //           <div className={blurredNavClass}>
// //             {NavItem({
// //               label: "Overview",
// //               page: "home",
// //               onClick: () => handleNavClick("home"),
// //               active: currentPage === "home",
// //             })}
// //           </div>

// //           {/* TECHNOLOGY SERVICES */}
// //           <div
// //             ref={techContainerRef}
// //             className="relative flex flex-col w-full group"
// //           >
// //             {/* line (same as others) */}
// //             <button
// //               className="flex w-full min-h-[52px] py-2"
// //               onClick={() => setDesktopTechOpen(!desktopTechOpen)}
// //             >
// //               <Line active={currentPage.startsWith("service-")} />
// //             </button>

// //             {/* text - NOW VISIBLE WHEN ACTIVE (service page) OR ON HOVER */}
// //             <button
// //               onClick={(e) => {
// //                 const rect = (e.target as HTMLElement).getBoundingClientRect();
// //                 document.documentElement.style.setProperty(
// //                   "--tech-pos",
// //                   `${rect.bottom}px`
// //                 );
// //                 setDesktopTechOpen(!desktopTechOpen);
// //               }}
// //               aria-expanded={desktopTechOpen}
// //               className={`
// //                 text-[11px] px-1 py-[1px] mt-[-14px] mb-[-12px]
// //                 text-left leading-tight max-w-[5.2rem] break-words
// //                 transition-all duration-300

// //                 ${
// //                   currentPage.startsWith("service-") || desktopTechOpen
// //                     ? "opacity-100 translate-x-0 pointer-events-auto text-white font-semibold"
// //                     : "opacity-0 translate-x-2 pointer-events-none text-white/80"
// //                 }

// //                 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
// //               `}
// //             >
// //               Technology Services
// //             </button>

// //             {desktopTechOpen && (
// //               <div
// //                 className="
// //                   fixed left-[32px]
// //                   top-[calc(var(--tech-pos) + 32px)]
// //                   w-[380px] max-w-[92vw]
// //                   z-[99999]
// //                 "
// //               >
// //                 <TechnologyDropdown
// //                   navigateTo={(p: string) => {
// //                     handleNavClick(p);
// //                     setDesktopTechOpen(false);
// //                   }}
// //                   currentPage={currentPage}
// //                   showToggle={false}
// //                   hideHeader={true}
// //                   open={desktopTechOpen}
// //                   onOpenChange={(val) => setDesktopTechOpen(Boolean(val))}
// //                 />
// //               </div>
// //             )}
// //           </div>

// //           {/* Remaining nav items with proper active state */}
// //           <div className={blurredNavClass}>
// //             {/* Careers */}
// //             {NavItem({
// //               label: "Careers",
// //               page: "CarrierHome",
// //               onClick: () => handleNavClick("CarrierHome"),
// //               active: isCareerPage(currentPage),
// //             })}

// //             {/* Resources */}
// //             {NavItem({
// //               label: "Resources",
// //               page: "resources",
// //               onClick: () => handleNavClick("resources"),
// //               active:
// //                 currentPage === "resources" ||
// //                 currentPage.startsWith("resource-"),
// //             })}

// //             {/* About Us */}
// //             {NavItem({
// //               label: "About Us",
// //               page: "about",
// //               onClick: () => handleNavClick("about"),
// //               active: currentPage === "about",
// //             })}
// //           </div>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // };
// import { useEffect, useRef, useState } from "react";
// import TechnologyDropdown from "./components/TechnologyDropdown";

// interface HeaderProps {
//   currentPage: string;
//   navigateTo: (page: string) => void;
// }

// export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mobileTechOpen, setMobileTechOpen] = useState(false);
//   const [desktopTechOpen, setDesktopTechOpen] = useState(false);

//   const techContainerRef = useRef<HTMLDivElement | null>(null);

//   /* ================= HELPERS ================= */

//   const isCareerPage = (page: string) =>
//     page === "careers" ||
//     page === "CarrierHome" ||
//     page === "CarrierLife" ||
//     page === "CarrierFresher" ||
//     page === "CarrierExperienced" ||
//     page === "CarrierProblems" ||
//     page.startsWith("Carrier");

//   const isProductsPage = (page: string) =>
//     page === "products" || page.startsWith("product-");

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
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, [desktopTechOpen]);

//   const Line = ({ active }: { active: boolean }) => (
//     <span
//       className={`block h-[2px] rounded w-10 transition-all duration-200 ${
//         active ? "bg-white" : "bg-white/40"
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
//       <button
//         onClick={onClick}
//         className="flex items-center w-full min-h-[52px] py-2"
//       >
//         <Line active={active} />
//       </button>

//       <button
//         onClick={onClick}
//         className={`
//           text-[13px] sm:text-xs px-2 py-1 rounded-lg
//           max-w-[5.2rem] text-left leading-tight break-words
//           transition-all duration-300 ease-out
//           ${
//             active
//               ? "opacity-100 translate-x-0 pointer-events-auto text-white font-semibold"
//               : "opacity-0 translate-x-2 pointer-events-none text-white/90"
//           }
//           group-hover:opacity-100
//           group-hover:translate-x-0
//           group-hover:pointer-events-auto
//         `}
//       >
//         {label}
//       </button>
//     </div>
//   );

//   const blurredNavClass = desktopTechOpen ? "blur-sm" : "";
//   const blurredMobileNavClass = mobileTechOpen ? "blur-sm" : "";

//   return (
//     <>
//       {/* ================= MOBILE ================= */}
//       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
//         <div className="flex items-center justify-between px-4 py-3">
//           <button onClick={() => handleNavClick("home")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
//           </button>

//           <button
//             onClick={() => {
//               setIsMenuOpen(!isMenuOpen);
//               setMobileTechOpen(false);
//             }}
//             className="relative inline-flex items-center justify-center gap-3 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10"
//           >
//             <span className="text-[11px] text-white/80">
//               {isMenuOpen ? "Close menu" : "Open menu"}
//             </span>
//           </button>
//         </div>

//         {isMenuOpen && (
//           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
//             <div className={blurredMobileNavClass}>
//               <button
//                 onClick={() => handleNavClick("home")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === "home"
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Overview
//               </button>
//             </div>

//             {/* Technology Services (UNCHANGED) */}
//             <button
//               onClick={() => setMobileTechOpen(!mobileTechOpen)}
//               className={`w-full text-left px-4 py-2 rounded text-sm flex justify-between ${
//                 currentPage.startsWith("service-")
//                   ? "text-white font-semibold"
//                   : "text-white/90 hover:text-white"
//               }`}
//             >
//               <span>Technology Services</span>
//               <span>{mobileTechOpen ? "−" : "+"}</span>
//             </button>

//             {mobileTechOpen && (
//               <div className="mt-[-50px]">
//                 <TechnologyDropdown
//                   navigateTo={(p: string) => {
//                     handleNavClick(p);
//                   }}
//                   currentPage={currentPage}
//                   hideHeader
//                   open
//                   showToggle={false}
//                   onOpenChange={() => {}}
//                 />
//               </div>
//             )}

//             <div className={blurredMobileNavClass}>
//               {/* Products */}
//               <button
//                 onClick={() => handleNavClick("products")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   isProductsPage(currentPage)
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Products
//               </button>

//               {/* Careers */}
//               <button
//                 onClick={() => handleNavClick("CarrierHome")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   isCareerPage(currentPage)
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Careers
//               </button>

//               {/* Resources */}
//               <button
//                 onClick={() => handleNavClick("resources")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === "resources" ||
//                   currentPage.startsWith("resource-")
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Resources
//               </button>

//               {/* About */}
//               <button
//                 onClick={() => handleNavClick("about")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === "about"
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 About Us
//               </button>
//             </div>
//           </nav>
//         )}
//       </header>

//       {/* ================= DESKTOP ================= */}
//       <aside
//         className="
//           relative
//           hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
//           w-32 h-screen pl-2
//           bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
//         "
//       >
//         <div className="flex items-center w-full pt-6 pb-8 pl-1">
//           <button onClick={() => handleNavClick("home")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
//           </button>
//         </div>

//         <div className="flex flex-col flex-1 w-full gap-5 px-2 pl-4 overflow-visible">
//           {/* Overview */}
//           <div className={blurredNavClass}>
//             {NavItem({
//               label: "Overview",
//               page: "home",
//               onClick: () => handleNavClick("home"),
//               active: currentPage === "home",
//             })}
//           </div>

//           {/* Technology Services (UNCHANGED) */}
//           <div
//             ref={techContainerRef}
//             className="relative flex flex-col w-full group"
//           >
//             <button
//               className="flex w-full min-h-[52px] py-2"
//               onClick={() => setDesktopTechOpen(!desktopTechOpen)}
//             >
//               <Line active={currentPage.startsWith("service-")} />
//             </button>

//             <button
//               onClick={(e) => {
//                 const rect = (e.target as HTMLElement).getBoundingClientRect();
//                 document.documentElement.style.setProperty(
//                   "--tech-pos",
//                   `${rect.bottom}px`
//                 );
//                 setDesktopTechOpen(!desktopTechOpen);
//               }}
//               aria-expanded={desktopTechOpen}
//               className={`
//                 text-[11px] px-1 py-[1px] mt-[-14px] mb-[-12px]
//                 text-left leading-tight max-w-[5.2rem] break-words
//                 transition-all duration-300
//                 ${
//                   currentPage.startsWith("service-") || desktopTechOpen
//                     ? "opacity-100 translate-x-0 pointer-events-auto text-white font-semibold"
//                     : "opacity-0 translate-x-2 pointer-events-none text-white/80"
//                 }
//                 group-hover:opacity-100
//                 group-hover:translate-x-0
//                 group-hover:pointer-events-auto
//               `}
//             >
//               Technology Services
//             </button>

//             {desktopTechOpen && (
//               <div
//                 className="
//                   fixed left-[32px]
//                   top-[calc(var(--tech-pos) + 32px)]
//                   w-[380px] max-w-[92vw]
//                   z-[99999]
//                 "
//               >
//                 <TechnologyDropdown
//                   navigateTo={(p: string) => {
//                     handleNavClick(p);
//                   }}
//                   currentPage={currentPage}
//                   hideHeader
//                   open={desktopTechOpen}
//                   showToggle={false}
//                   onOpenChange={(val) => setDesktopTechOpen(Boolean(val))}
//                 />
//               </div>
//             )}
//           </div>

//           {/* Remaining nav items */}
//           <div className={blurredNavClass}>
//             {NavItem({
//               label: "Products",
//               page: "products",
//               onClick: () => handleNavClick("products"),
//               active: isProductsPage(currentPage),
//             })}

//             {NavItem({
//               label: "Careers",
//               page: "CarrierHome",
//               onClick: () => handleNavClick("CarrierHome"),
//               active: isCareerPage(currentPage),
//             })}

//             {NavItem({
//               label: "Resources",
//               page: "resources",
//               onClick: () => handleNavClick("resources"),
//               active:
//                 currentPage === "resources" ||
//                 currentPage.startsWith("resource-"),
//             })}

//             {NavItem({
//               label: "About Us",
//               page: "about",
//               onClick: () => handleNavClick("about"),
//               active: currentPage === "about",
//             })}
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Header;

// import { useEffect, useRef, useState } from "react";
// import TechnologyDropdown from "./components/TechnologyDropdown";

// interface HeaderProps {
//   currentPage: string;
//   navigateTo: (page: string) => void;
// }

// export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mobileTechOpen, setMobileTechOpen] = useState(false);
//   const [desktopTechOpen, setDesktopTechOpen] = useState(false);

//   // 👉 This ref is now used to anchor the dropdown to "Overview"
//   const sidebarContentRef = useRef<HTMLDivElement | null>(null);

//   /* ================= HELPERS ================= */

//   const isCareerPage = (page: string) =>
//     page === "careers" ||
//     page === "CarrierHome" ||
//     page === "CarrierLife" ||
//     page === "CarrierFresher" ||
//     page === "CarrierExperienced" ||
//     page === "CarrierProblems" ||
//     page.startsWith("Carrier");

//   const isProductsPage = (page: string) =>
//     page === "products" || page.startsWith("product-");

//   const handleNavClick = (page: string) => {
//     navigateTo(page);
//     setIsMenuOpen(false);
//     setMobileTechOpen(false);
//     setDesktopTechOpen(false);
//   };

//   /* ================= CLOSE ON OUTSIDE CLICK ================= */
//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       const target = e.target as Node | null;
//       if (
//         desktopTechOpen &&
//         sidebarContentRef.current &&
//         target &&
//         !sidebarContentRef.current.contains(target)
//       ) {
//         setDesktopTechOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, [desktopTechOpen]);

//   /* ================= UI HELPERS ================= */

//   const Line = ({ active }: { active: boolean }) => (
//     <span
//       className={`block h-[2px] rounded w-10 transition-all duration-200 ${
//         active ? "bg-white" : "bg-white/40"
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
//       <button
//         onClick={onClick}
//         className="flex items-center w-full min-h-[52px] py-2"
//       >
//         <Line active={active} />
//       </button>

//       <button
//         onClick={onClick}
//         className={`
//           text-[13px] sm:text-xs px-2 py-1 rounded-lg
//           max-w-[5.2rem] text-left leading-tight break-words
//           transition-all duration-300 ease-out
//           ${
//             active
//               ? "opacity-100 translate-x-0 pointer-events-auto text-white font-semibold"
//               : "opacity-0 translate-x-2 pointer-events-none text-white/90"
//           }
//           group-hover:opacity-100
//           group-hover:translate-x-0
//           group-hover:pointer-events-auto
//         `}
//       >
//         {label}
//       </button>
//     </div>
//   );

//   const blurredNavClass = desktopTechOpen ? "blur-sm" : "";
//   const blurredMobileNavClass = mobileTechOpen ? "blur-sm" : "";

//   return (
//     <>
//       {/* ================= MOBILE (UNCHANGED) ================= */}
//       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
//         <div className="flex items-center justify-between px-4 py-3">
//           <button onClick={() => handleNavClick("home")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
//           </button>

//           <button
//             onClick={() => {
//               setIsMenuOpen(!isMenuOpen);
//               setMobileTechOpen(false);
//             }}
//             className="relative inline-flex items-center justify-center gap-3 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10"
//           >
//             <span className="text-[11px] text-white/80">
//               {isMenuOpen ? "Close menu" : "Open menu"}
//             </span>
//           </button>
//         </div>

//         {isMenuOpen && (
//           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
//             <div className={blurredMobileNavClass}>
//               <button
//                 onClick={() => handleNavClick("home")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === "home"
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Overview
//               </button>
//             </div>

//             <button
//               onClick={() => setMobileTechOpen(!mobileTechOpen)}
//               className={`w-full text-left px-4 py-2 rounded text-sm flex justify-between ${
//                 currentPage.startsWith("service-")
//                   ? "text-white font-semibold"
//                   : "text-white/90 hover:text-white"
//               }`}
//             >
//               <span>Technology Services</span>
//               <span>{mobileTechOpen ? "−" : "+"}</span>
//             </button>

//             {mobileTechOpen && (
//               <div className="mt-[-50px]">
//                 <TechnologyDropdown
//                   navigateTo={(p: string) => handleNavClick(p)}
//                   currentPage={currentPage}
//                   hideHeader
//                   open
//                   showToggle={false}
//                   onOpenChange={() => {}}
//                 />
//               </div>
//             )}

//             <div className={blurredMobileNavClass}>
//               <button
//                 onClick={() => handleNavClick("products")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   isProductsPage(currentPage)
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Products
//               </button>

//               <button
//                 onClick={() => handleNavClick("CarrierHome")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   isCareerPage(currentPage)
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Careers
//               </button>

//               <button
//                 onClick={() => handleNavClick("resources")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === "resources" ||
//                   currentPage.startsWith("resource-")
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Resources
//               </button>

//               <button
//                 onClick={() => handleNavClick("about")}
//                 className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                   currentPage === "about"
//                     ? "text-white font-semibold"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 About Us
//               </button>
//             </div>
//           </nav>
//         )}
//       </header>

//       {/* ================= DESKTOP ================= */}
//       <aside
//         className="
//           relative
//           hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
//           w-32 h-screen pl-2
//           bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
//         "
//       >
//         <div className="flex items-center w-full pt-6 pb-8 pl-1">
//           <button onClick={() => handleNavClick("home")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
//           </button>
//         </div>

//         {/* 👇 THIS is the anchor for dropdown top */}
//         <div
//           ref={sidebarContentRef}
//           className="flex flex-col flex-1 w-full gap-5 px-2 pl-4 overflow-visible"
//         >
//           {/* Overview */}
//           <div className={blurredNavClass}>
//             {NavItem({
//               label: "Overview",
//               page: "home",
//               onClick: () => handleNavClick("home"),
//               active: currentPage === "home",
//             })}
//           </div>

//           {/* Technology Services */}
//           <div className="relative flex flex-col w-full group">
//             <button
//               className="flex w-full min-h-[52px] py-2"
//               onClick={() => {
//                 if (sidebarContentRef.current) {
//                   const rect =
//                     sidebarContentRef.current.getBoundingClientRect();
//                   document.documentElement.style.setProperty(
//                     "--tech-pos",
//                     `${rect.top}px`
//                   );
//                 }
//                 setDesktopTechOpen(!desktopTechOpen);
//               }}
//             >
//               <Line active={currentPage.startsWith("service-")} />
//             </button>

//             <button
//               onClick={() => setDesktopTechOpen(!desktopTechOpen)}
//               className={`
//                 text-[11px] px-1 py-[1px] mt-[-14px] mb-[-12px]
//                 text-left leading-tight max-w-[5.2rem] break-words
//                 transition-all duration-300
//                 ${
//                   currentPage.startsWith("service-") || desktopTechOpen
//                     ? "opacity-100 translate-x-0 pointer-events-auto text-white font-semibold"
//                     : "opacity-0 translate-x-2 pointer-events-none text-white/80"
//                 }
//                 group-hover:opacity-100
//                 group-hover:translate-x-0
//                 group-hover:pointer-events-auto
//               `}
//             >
//               Technology Services
//             </button>

//             {desktopTechOpen && (
//               <div
//                 className="
//                   fixed
//                   left-[140px]
//                   top-[var(--tech-pos)]
//                   w-[380px] max-w-[92vw]
//                   z-[99999]
//                 "
//               >
//                 <TechnologyDropdown
//                   navigateTo={(p: string) => handleNavClick(p)}
//                   currentPage={currentPage}
//                   hideHeader
//                   open={desktopTechOpen}
//                   showToggle={false}
//                   onOpenChange={(val) => setDesktopTechOpen(Boolean(val))}
//                 />
//               </div>
//             )}
//           </div>

//           {/* Remaining nav items */}
//           <div className={blurredNavClass}>
//             {NavItem({
//               label: "Products",
//               page: "products",
//               onClick: () => handleNavClick("products"),
//               active: isProductsPage(currentPage),
//             })}

//             {NavItem({
//               label: "Careers",
//               page: "CarrierHome",
//               onClick: () => handleNavClick("CarrierHome"),
//               active: isCareerPage(currentPage),
//             })}

//             {NavItem({
//               label: "Resources",
//               page: "resources",
//               onClick: () => handleNavClick("resources"),
//               active:
//                 currentPage === "resources" ||
//                 currentPage.startsWith("resource-"),
//             })}

//             {NavItem({
//               label: "About Us",
//               page: "about",
//               onClick: () => handleNavClick("about"),
//               active: currentPage === "about",
//             })}
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Header;

import { useEffect, useRef, useState } from "react";
import TechnologyDropdown from "./components/TechnologyDropdown";

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [desktopTechOpen, setDesktopTechOpen] = useState(false);

  const sidebarContentRef = useRef<HTMLDivElement | null>(null);

  /* ================= HELPERS ================= */

  const isCareerPage = (page: string) => page.startsWith("Carrier");
  const isProductsPage = (page: string) =>
    page === "products" || page.startsWith("product-");

  const handleNavClick = (page: string) => {
    navigateTo(page);
    setIsMenuOpen(false);
    setMobileTechOpen(false);
    setDesktopTechOpen(false);
  };

  /* ================= CLOSE DESKTOP DROPDOWN ================= */
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        desktopTechOpen &&
        sidebarContentRef.current &&
        !sidebarContentRef.current.contains(e.target as Node)
      ) {
        setDesktopTechOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [desktopTechOpen]);

  /* ================= UI ================= */

  const NavButton = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="flex flex-col items-start gap-2 pl-2 focus:outline-none"
    >
      <div className="ml-[6px]">
        <span
          className={`block rounded ${
            active ? "h-[3px] w-14 bg-white" : "h-[2px] w-8 bg-white/40"
          }`}
        />
      </div>

      <span
        className={`text-[12px] px-2 py-[3px] text-left leading-tight transition-colors duration-200 ${
          active
            ? "text-white font-semibold scale-110"
            : "text-white/55 blur-[0.4px]"
        }`}
      >
        {label}
      </span>
    </button>
  );

  return (
    <>
      {/* ================= MOBILE ================= */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => handleNavClick("home")}>
            <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
          </button>

          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setMobileTechOpen(false);
            }}
            className="px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-[11px] text-white/80"
          >
            {isMenuOpen ? "Close menu" : "Open menu"}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
            {/* Overview */}
            <button
              onClick={() => handleNavClick("home")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                currentPage === "home"
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Overview
            </button>

            {/* ✅ Technology Services — MOVED HERE */}
            <button
              onClick={() => setMobileTechOpen(!mobileTechOpen)}
              className="w-full text-left px-4 py-2 rounded text-sm flex justify-between text-white/90"
            >
              <span>Technology Services</span>
              <span>{mobileTechOpen ? "−" : "+"}</span>
            </button>

            {mobileTechOpen && (
              <TechnologyDropdown
                navigateTo={handleNavClick}
                currentPage={currentPage}
                hideHeader
                open
                showToggle={false}
                onOpenChange={() => {}}
              />
            )}

            {/* Products */}
            <button
              onClick={() => handleNavClick("products")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                isProductsPage(currentPage)
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Products
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick("CarrierHome")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                isCareerPage(currentPage)
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Careers
            </button>

            {/* Resources */}
            <button
              onClick={() => handleNavClick("resources")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                currentPage === "resources"
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Resources
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick("about")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                currentPage === "about"
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              About Us
            </button>
          </nav>
        )}
      </header>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <aside
        className="
          hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
          w-28 h-screen pl-2
          bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
        "
      >
        <div className="flex items-end w-full pt-6 pb-3 pl-0">
          <button onClick={() => handleNavClick("home")}>
            <img src="/images/cjss-logo.png" alt="CJSS" className="h-10" />
          </button>
        </div>

        <div
          ref={sidebarContentRef}
          className="flex flex-col flex-1 w-full gap-10 px-2 pl-0 mt-10"
        >
          <NavButton
            label="Overview"
            active={currentPage === "home"}
            onClick={() => handleNavClick("home")}
          />

          <NavButton
            label="Technology Services"
            active={currentPage.startsWith("service-")}
            onClick={() => setDesktopTechOpen(!desktopTechOpen)}
          />

          {desktopTechOpen && (
            <div className="fixed left-[120px] top-28 w-[380px] z-[99999]">
              <TechnologyDropdown
                navigateTo={handleNavClick}
                currentPage={currentPage}
                hideHeader
                open
                showToggle={false}
                onOpenChange={(v) => setDesktopTechOpen(Boolean(v))}
              />
            </div>
          )}

          <NavButton
            label="Products"
            active={isProductsPage(currentPage)}
            onClick={() => handleNavClick("products")}
          />

          <NavButton
            label="Careers"
            active={isCareerPage(currentPage)}
            onClick={() => handleNavClick("CarrierHome")}
          />

          <NavButton
            label="Resources"
            active={currentPage === "resources"}
            onClick={() => handleNavClick("resources")}
          />

          <NavButton
            label="About Us"
            active={currentPage === "about"}
            onClick={() => handleNavClick("about")}
          />
        </div>
      </aside>
    </>
  );
};

export default Header;
