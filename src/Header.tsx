// // // import { useEffect, useRef, useState } from "react";
// // // import TechnologyDropdown from "./components/TechnologyDropdown";

// // // interface HeaderProps {
// // //   currentPage: string;
// // //   navigateTo: (page: string) => void;
// // // }

// // // export const Header = ({ currentPage, navigateTo }: HeaderProps) => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [mobileTechOpen, setMobileTechOpen] = useState(false);
// // //   const [desktopTechOpen, setDesktopTechOpen] = useState(false);

// // //   const sidebarContentRef = useRef<HTMLDivElement | null>(null);

// // //   /* ================= HELPERS ================= */

// // //   const isCareerPage = (page: string) => page.startsWith("Carrier");
// // //   const isProductsPage = (page: string) =>
// // //     page === "products" || page.startsWith("product-");

// // //   const handleNavClick = (page: string) => {
// // //     navigateTo(page);
// // //     setIsMenuOpen(false);
// // //     setMobileTechOpen(false);
// // //     setDesktopTechOpen(false);
// // //   };

// // //   /* ================= CLOSE DESKTOP DROPDOWN ================= */
// // //   useEffect(() => {
// // //     function onDocClick(e: MouseEvent) {
// // //       if (
// // //         desktopTechOpen &&
// // //         sidebarContentRef.current &&
// // //         !sidebarContentRef.current.contains(e.target as Node)
// // //       ) {
// // //         setDesktopTechOpen(false);
// // //       }
// // //     }
// // //     document.addEventListener("mousedown", onDocClick);
// // //     return () => document.removeEventListener("mousedown", onDocClick);
// // //   }, [desktopTechOpen]);

// // //   /* ================= UI ================= */

// // //   const NavButton = ({
// // //     label,
// // //     active,
// // //     onClick,
// // //   }: {
// // //     label: string;
// // //     active: boolean;
// // //     onClick: () => void;
// // //   }) => (
// // //     <button
// // //       onClick={onClick}
// // //       className="flex flex-col items-start gap-2 pl-2 focus:outline-none"
// // //     >
// // //       <div className="ml-[6px]">
// // //         <span
// // //           className={`block rounded ${
// // //             active ? "h-[3px] w-14 bg-white" : "h-[2px] w-8 bg-white/40"
// // //           }`}
// // //         />
// // //       </div>

// // //       <span
// // //         className={`text-[12px] px-2 py-[3px] text-left leading-tight transition-colors duration-200 ${
// // //           active
// // //             ? "text-white font-semibold scale-110"
// // //             : "text-white/55 blur-[0.4px]"
// // //         }`}
// // //       >
// // //         {label}
// // //       </span>
// // //     </button>
// // //   );

// // //   return (
// // //     <>
// // //       {/* ================= MOBILE ================= */}
// // //       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
// // //         <div className="flex items-center justify-between px-4 py-3">
// // //           <button onClick={() => handleNavClick("home")}>
// // //             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
// // //           </button>

// // //           <button
// // //             onClick={() => {
// // //               setIsMenuOpen(!isMenuOpen);
// // //               setMobileTechOpen(false);
// // //             }}
// // //             className="px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-[11px] text-white/80"
// // //           >
// // //             {isMenuOpen ? "Close menu" : "Open menu"}
// // //           </button>
// // //         </div>

// // //         {isMenuOpen && (
// // //           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
// // //             {/* Overview */}
// // //             <button
// // //               onClick={() => handleNavClick("home")}
// // //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// // //                 currentPage === "home"
// // //                   ? "text-white font-semibold"
// // //                   : "text-white/90"
// // //               }`}
// // //             >
// // //               Overview
// // //             </button>

// // //             {/* ✅ Technology Services — MOVED HERE */}
// // //             <button
// // //               onClick={() => setMobileTechOpen(!mobileTechOpen)}
// // //               className="w-full text-left px-4 py-2 rounded text-sm flex justify-between text-white/90"
// // //             >
// // //               <span>Technology Services</span>
// // //               <span>{mobileTechOpen ? "−" : "+"}</span>
// // //             </button>

// // //             {mobileTechOpen && (
// // //               <TechnologyDropdown
// // //                 navigateTo={handleNavClick}
// // //                 currentPage={currentPage}
// // //                 hideHeader
// // //                 open
// // //                 showToggle={false}
// // //                 onOpenChange={() => {}}
// // //               />
// // //             )}

// // //             {/* Products */}
// // //             <button
// // //               onClick={() => handleNavClick("products")}
// // //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// // //                 isProductsPage(currentPage)
// // //                   ? "text-white font-semibold"
// // //                   : "text-white/90"
// // //               }`}
// // //             >
// // //               Products
// // //             </button>

// // //             {/* Careers */}
// // //             <button
// // //               onClick={() => handleNavClick("CarrierHome")}
// // //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// // //                 isCareerPage(currentPage)
// // //                   ? "text-white font-semibold"
// // //                   : "text-white/90"
// // //               }`}
// // //             >
// // //               Careers
// // //             </button>

// // //             {/* Resources */}
// // //             <button
// // //               onClick={() => handleNavClick("resources")}
// // //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// // //                 currentPage === "resources"
// // //                   ? "text-white font-semibold"
// // //                   : "text-white/90"
// // //               }`}
// // //             >
// // //               Resources
// // //             </button>

// // //             {/* About */}
// // //             <button
// // //               onClick={() => handleNavClick("about")}
// // //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// // //                 currentPage === "about"
// // //                   ? "text-white font-semibold"
// // //                   : "text-white/90"
// // //               }`}
// // //             >
// // //               About Us
// // //             </button>
// // //           </nav>
// // //         )}
// // //       </header>

// // //       {/* ================= DESKTOP (UNCHANGED) ================= */}
// // //       <aside
// // //         className="
// // //           hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
// // //           w-28 h-screen pl-2
// // //           bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
// // //         "
// // //       >
// // //         <div className="flex items-end w-full pt-6 pb-3 pl-0">
// // //           <button onClick={() => handleNavClick("home")}>
// // //             <img src="/images/cjss-logo.png" alt="CJSS" className="h-10" />
// // //           </button>
// // //         </div>

// // //         <div
// // //           ref={sidebarContentRef}
// // //           className="flex flex-col flex-1 w-full gap-10 px-2 pl-0 mt-10"
// // //         >
// // //           <NavButton
// // //             label="Overview"
// // //             active={currentPage === "home"}
// // //             onClick={() => handleNavClick("home")}
// // //           />

// // //           <NavButton
// // //             label="Technology Services"
// // //             active={currentPage.startsWith("service-")}
// // //             onClick={() => setDesktopTechOpen(!desktopTechOpen)}
// // //           />

// // //           {desktopTechOpen && (
// // //             <div className="fixed left-[120px] top-28 w-[380px] z-[99999]">
// // //               <TechnologyDropdown
// // //                 navigateTo={handleNavClick}
// // //                 currentPage={currentPage}
// // //                 hideHeader
// // //                 open
// // //                 showToggle={false}
// // //                 onOpenChange={(v) => setDesktopTechOpen(Boolean(v))}
// // //               />
// // //             </div>
// // //           )}

// // //           <NavButton
// // //             label="Products"
// // //             active={isProductsPage(currentPage)}
// // //             onClick={() => handleNavClick("products")}
// // //           />

// // //           <NavButton
// // //             label="Careers"
// // //             active={isCareerPage(currentPage)}
// // //             onClick={() => handleNavClick("CarrierHome")}
// // //           />

// // //           <NavButton
// // //             label="Resources"
// // //             active={currentPage === "resources"}
// // //             onClick={() => handleNavClick("resources")}
// // //           />

// // //           <NavButton
// // //             label="About Us"
// // //             active={currentPage === "about"}
// // //             onClick={() => handleNavClick("about")}
// // //           />
// // //         </div>
// // //       </aside>
// // //     </>
// // //   );
// // // };

// // // export default Header;
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

// //   const sidebarContentRef = useRef<HTMLDivElement | null>(null);

// //   /* ================= HELPERS ================= */

// //   const isCareerPage = (page: string) => page.startsWith("Carrier");
// //   const isProductsPage = (page: string) =>
// //     page === "products" || page.startsWith("product-");

// //   const handleNavClick = (page: string) => {
// //     navigateTo(page);
// //     setIsMenuOpen(false);
// //     setMobileTechOpen(false);
// //     setDesktopTechOpen(false);
// //   };

// //   /* ================= CLOSE DESKTOP DROPDOWN ================= */
// //   useEffect(() => {
// //     function onDocClick(e: MouseEvent) {
// //       if (
// //         desktopTechOpen &&
// //         sidebarContentRef.current &&
// //         !sidebarContentRef.current.contains(e.target as Node)
// //       ) {
// //         setDesktopTechOpen(false);
// //       }
// //     }
// //     document.addEventListener("mousedown", onDocClick);
// //     return () => document.removeEventListener("mousedown", onDocClick);
// //   }, [desktopTechOpen]);

// //   /* ================= UI ================= */

// //   const NavButton = ({
// //     label,
// //     active,
// //     onClick,
// //   }: {
// //     label: string;
// //     active: boolean;
// //     onClick: () => void;
// //   }) => (
// //     <button
// //       onClick={onClick}
// //       className="flex flex-col items-start gap-2 pl-2 focus:outline-none"
// //     >
// //       <div className="ml-[6px]">
// //         <span
// //           className={`block rounded ${
// //             active ? "h-[3px] w-14 bg-white" : "h-[2px] w-8 bg-white/40"
// //           }`}
// //         />
// //       </div>

// //       <span
// //         className={`text-[12px] px-2 py-[3px] text-left leading-tight transition-colors duration-200 ${
// //           active
// //             ? "text-white font-semibold scale-110"
// //             : "text-white/55 blur-[0.4px]"
// //         }`}
// //       >
// //         {label}
// //       </span>
// //     </button>
// //   );

// //   // ✅ Reusable ISO Badge Component
// //   const IsoBadge = ({ className = "" }: { className?: string }) => (
// //     <div className={`flex  ${className}`}>
// //       <img
// //         src="/images/intertek-iso.jpg"
// //         alt="Intertek ISO Certification"
// //         className="h-21.5 w-auto object-contain rounded opacity-80 hover:opacity-100 transition-opacity"
// //       />
// //     </div>
// //   );

// //   return (
// //     <>
// //       {/* ================= MOBILE ================= */}
// //       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950 md:hidden">
// //         <div className="flex items-center justify-between px-4 py-3">
// //           <button onClick={() => handleNavClick("home")}>
// //             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
// //           </button>

// //           {/* ✅ ISO Badge in Mobile Header (next to menu button) */}
// //           <div className="flex items-center gap-3">
// //             <IsoBadge className="h-8" />
// //             <button
// //               onClick={() => {
// //                 setIsMenuOpen(!isMenuOpen);
// //                 setMobileTechOpen(false);
// //               }}
// //               className="px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-[11px] text-white/80"
// //             >
// //               {isMenuOpen ? "Close menu" : "Open menu"}
// //             </button>
// //           </div>
// //         </div>

// //         {isMenuOpen && (
// //           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
// //             {/* Overview */}
// //             <button
// //               onClick={() => handleNavClick("home")}
// //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                 currentPage === "home"
// //                   ? "text-white font-semibold"
// //                   : "text-white/90"
// //               }`}
// //             >
// //               Overview
// //             </button>

// //             {/* Technology Services */}
// //             <button
// //               onClick={() => setMobileTechOpen(!mobileTechOpen)}
// //               className="w-full text-left px-4 py-2 rounded text-sm flex justify-between text-white/90"
// //             >
// //               <span>Technology Services</span>
// //               <span>{mobileTechOpen ? "−" : "+"}</span>
// //             </button>

// //             {mobileTechOpen && (
// //               <TechnologyDropdown
// //                 navigateTo={handleNavClick}
// //                 currentPage={currentPage}
// //                 hideHeader
// //                 open
// //                 showToggle={false}
// //                 onOpenChange={() => {}}
// //               />
// //             )}

// //             {/* Products */}
// //             <button
// //               onClick={() => handleNavClick("products")}
// //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                 isProductsPage(currentPage)
// //                   ? "text-white font-semibold"
// //                   : "text-white/90"
// //               }`}
// //             >
// //               Products
// //             </button>

// //             {/* Careers */}
// //             <button
// //               onClick={() => handleNavClick("CarrierHome")}
// //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                 isCareerPage(currentPage)
// //                   ? "text-white font-semibold"
// //                   : "text-white/90"
// //               }`}
// //             >
// //               Careers
// //             </button>

// //             {/* Resources */}
// //             <button
// //               onClick={() => handleNavClick("resources")}
// //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                 currentPage === "resources"
// //                   ? "text-white font-semibold"
// //                   : "text-white/90"
// //               }`}
// //             >
// //               Resources
// //             </button>

// //             {/* About */}
// //             <button
// //               onClick={() => handleNavClick("about")}
// //               className={`block w-full text-left px-4 py-2 rounded text-sm ${
// //                 currentPage === "about"
// //                   ? "text-white font-semibold"
// //                   : "text-white/90"
// //               }`}
// //             >
// //               About Us
// //             </button>
// //           </nav>
// //         )}
// //       </header>

// //       {/* ================= DESKTOP SIDEBAR ================= */}
// //       <aside
// //         className="
// //           hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
// //           w-28 h-screen pl-2
// //           bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
// //         "
// //       >
// //         <div className="flex items-end w-full pt-6 pb-3 pl-0">
// //           <button onClick={() => handleNavClick("home")}>
// //             <img src="/images/cjss-logo.png" alt="CJSS" className="h-10" />
// //           </button>
// //         </div>

// //         <div
// //           ref={sidebarContentRef}
// //           className="flex flex-col flex-1 w-full gap-10 px-2 pl-0 mt-10"
// //         >
// //           <NavButton
// //             label="Overview"
// //             active={currentPage === "home"}
// //             onClick={() => handleNavClick("home")}
// //           />

// //           <NavButton
// //             label="Technology Services"
// //             active={currentPage.startsWith("service-")}
// //             onClick={() => setDesktopTechOpen(!desktopTechOpen)}
// //           />

// //           {desktopTechOpen && (
// //             <div className="fixed left-[120px] top-28 w-[380px] z-[99999]">
// //               <TechnologyDropdown
// //                 navigateTo={handleNavClick}
// //                 currentPage={currentPage}
// //                 hideHeader
// //                 open
// //                 showToggle={false}
// //                 onOpenChange={(v) => setDesktopTechOpen(Boolean(v))}
// //               />
// //             </div>
// //           )}

// //           <NavButton
// //             label="Products"
// //             active={isProductsPage(currentPage)}
// //             onClick={() => handleNavClick("products")}
// //           />

// //           <NavButton
// //             label="Careers"
// //             active={isCareerPage(currentPage)}
// //             onClick={() => handleNavClick("CarrierHome")}
// //           />

// //           <NavButton
// //             label="Resources"
// //             active={currentPage === "resources"}
// //             onClick={() => handleNavClick("resources")}
// //           />

// //           <NavButton
// //             label="About Us"
// //             active={currentPage === "about"}
// //             onClick={() => handleNavClick("about")}
// //           />
// //         </div>

// //         {/* ✅ ISO Badge at Bottom of Desktop Sidebar */}
// //         <div className="mt-auto pb-6 pl-2">
// //           <IsoBadge />
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

//   const sidebarContentRef = useRef<HTMLDivElement | null>(null);

//   /* ================= HELPERS ================= */

//   const isCareerPage = (page: string) => page.startsWith("Carrier");
//   const isProductsPage = (page: string) =>
//     page === "products" || page.startsWith("product-");

//   const handleNavClick = (page: string) => {
//     navigateTo(page);
//     setIsMenuOpen(false);
//     setMobileTechOpen(false);
//     setDesktopTechOpen(false);
//   };

//   /* ================= CLOSE DESKTOP DROPDOWN ================= */
//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         desktopTechOpen &&
//         sidebarContentRef.current &&
//         !sidebarContentRef.current.contains(e.target as Node)
//       ) {
//         setDesktopTechOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, [desktopTechOpen]);

//   /* ================= UI ================= */

//   const NavButton = ({
//     label,
//     active,
//     onClick,
//   }: {
//     label: string;
//     active: boolean;
//     onClick: () => void;
//   }) => (
//     <button
//       onClick={onClick}
//       className="flex flex-col items-start gap-2 pl-2 focus:outline-none"
//     >
//       <div className="ml-[6px]">
//         <span
//           className={`block rounded ${
//             active ? "h-[3px] w-14 bg-white" : "h-[2px] w-8 bg-white/40"
//           }`}
//         />
//       </div>

//       <span
//         className={`text-[12px] px-2 py-[3px] text-left leading-tight transition-colors duration-200 ${
//           active
//             ? "text-white font-semibold scale-110"
//             : "text-white/55 blur-[0.4px]"
//         }`}
//       >
//         {label}
//       </span>
//     </button>
//   );

//   // ✅ Reusable ISO Badge Component
//   const IsoBadge = ({
//     className = "",
//     isMobile = false,
//   }: {
//     className?: string;
//     isMobile?: boolean;
//   }) => (
//     <div className={`flex items-center ${className}`}>
//       <img
//         src="/images/intertek-iso.jpg"
//         alt="Intertek ISO Certification"
//         className={`object-contain rounded transition-opacity ${
//           isMobile
//             ? "h-[26px] w-auto opacity-90"
//             : "h-21.5 w-auto opacity-80 hover:opacity-100"
//         }`}
//       />
//     </div>
//   );

//   return (
//     <>
//       {/* ================= MOBILE ================= */}
//       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-transparent md:hidden">
//         <div className="flex items-center justify-between px-4 py-3">
//           <button onClick={() => handleNavClick("home")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
//           </button>

//           {/* ✅ ISO Badge + Menu Button - aligned */}
//           <div className="flex items-center gap-3">
//             <IsoBadge isMobile />
//             <button
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//                 setMobileTechOpen(false);
//               }}
//               className="px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-[11px] text-white/80"
//             >
//               {isMenuOpen ? "Close menu" : "Open menu"}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
//             {/* Overview */}
//             <button
//               onClick={() => handleNavClick("home")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 currentPage === "home"
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Overview
//             </button>

//             {/* Technology Services */}
//             <button
//               onClick={() => setMobileTechOpen(!mobileTechOpen)}
//               className="w-full text-left px-4 py-2 rounded text-sm flex justify-between text-white/90"
//             >
//               <span>Technology Services</span>
//               <span>{mobileTechOpen ? "−" : "+"}</span>
//             </button>

//             {mobileTechOpen && (
//               <TechnologyDropdown
//                 navigateTo={handleNavClick}
//                 currentPage={currentPage}
//                 hideHeader
//                 open
//                 showToggle={false}
//                 onOpenChange={() => {}}
//               />
//             )}

//             {/* Products */}
//             <button
//               onClick={() => handleNavClick("products")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 isProductsPage(currentPage)
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Products
//             </button>

//             {/* Careers */}
//             <button
//               onClick={() => handleNavClick("CarrierHome")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 isCareerPage(currentPage)
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Careers
//             </button>

//             {/* Resources */}
//             <button
//               onClick={() => handleNavClick("resources")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 currentPage === "resources"
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Resources
//             </button>

//             {/* About */}
//             <button
//               onClick={() => handleNavClick("about")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 currentPage === "about"
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               About Us
//             </button>
//           </nav>
//         )}
//       </header>

//       {/* ================= DESKTOP SIDEBAR ================= */}
//       <aside
//         className="
//           hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
//           w-28 h-screen pl-2
//           bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
//         "
//       >
//         <div className="flex items-end w-full pt-6 pb-3 pl-0">
//           <button onClick={() => handleNavClick("home")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-10" />
//           </button>
//         </div>

//         <div
//           ref={sidebarContentRef}
//           className="flex flex-col flex-1 w-full gap-10 px-2 pl-0 mt-10"
//         >
//           <NavButton
//             label="Overview"
//             active={currentPage === "home"}
//             onClick={() => handleNavClick("home")}
//           />

//           <NavButton
//             label="Technology Services"
//             active={currentPage.startsWith("service-")}
//             onClick={() => setDesktopTechOpen(!desktopTechOpen)}
//           />

//           {desktopTechOpen && (
//             <div className="fixed left-[120px] top-28 w-[380px] z-[99999]">
//               <TechnologyDropdown
//                 navigateTo={handleNavClick}
//                 currentPage={currentPage}
//                 hideHeader
//                 open
//                 showToggle={false}
//                 onOpenChange={(v) => setDesktopTechOpen(Boolean(v))}
//               />
//             </div>
//           )}

//           <NavButton
//             label="Products"
//             active={isProductsPage(currentPage)}
//             onClick={() => handleNavClick("products")}
//           />

//           <NavButton
//             label="Careers"
//             active={isCareerPage(currentPage)}
//             onClick={() => handleNavClick("CarrierHome")}
//           />

//           <NavButton
//             label="Resources"
//             active={currentPage === "resources"}
//             onClick={() => handleNavClick("resources")}
//           />

//           <NavButton
//             label="About Us"
//             active={currentPage === "about"}
//             onClick={() => handleNavClick("about")}
//           />
//         </div>

//         {/* ✅ ISO Badge at Bottom of Desktop Sidebar */}
//         <div className="mt-auto pb-6 pl-2">
//           <IsoBadge />
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Header;

// import { useEffect, useRef, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import TechnologyDropdown from "./components/TechnologyDropdown";

// export const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mobileTechOpen, setMobileTechOpen] = useState(false);
//   const [desktopTechOpen, setDesktopTechOpen] = useState(false);

//   const sidebarContentRef = useRef<HTMLDivElement | null>(null);

//   /* ================= HELPERS ================= */

//   const isCareerPage = (path: string) =>
//     path.startsWith("/careers") ||
//     path === "/life-at-cjss" ||
//     path.startsWith("/jobs") ||
//     path === "/problems";

//   const isProductsPage = (path: string) => path.startsWith("/products");

//   const isServicePage = (path: string) => path.startsWith("/services");

//   const handleNavClick = (path: string) => {
//     navigate(path);
//     setIsMenuOpen(false);
//     setMobileTechOpen(false);
//     setDesktopTechOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   /* ================= CLOSE DESKTOP DROPDOWN ================= */
//   useEffect(() => {
//     function onDocClick(e: MouseEvent) {
//       if (
//         desktopTechOpen &&
//         sidebarContentRef.current &&
//         !sidebarContentRef.current.contains(e.target as Node)
//       ) {
//         setDesktopTechOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", onDocClick);
//     return () => document.removeEventListener("mousedown", onDocClick);
//   }, [desktopTechOpen]);

//   /* ================= UI COMPONENTS ================= */

//   const NavButton = ({
//     label,
//     active,
//     onClick,
//   }: {
//     label: string;
//     active: boolean;
//     onClick: () => void;
//   }) => (
//     <button
//       onClick={onClick}
//       className="flex flex-col items-start gap-2 pl-2 focus:outline-none"
//     >
//       <div className="ml-[6px]">
//         <span
//           className={`block rounded ${
//             active ? "h-[3px] w-14 bg-white" : "h-[2px] w-8 bg-white/40"
//           }`}
//         />
//       </div>

//       <span
//         className={`text-[12px] px-2 py-[3px] text-left leading-tight transition-colors duration-200 ${
//           active
//             ? "text-white font-semibold scale-110"
//             : "text-white/55 blur-[0.4px]"
//         }`}
//       >
//         {label}
//       </span>
//     </button>
//   );

//   // ✅ Reusable ISO Badge Component
//   const IsoBadge = ({
//     className = "",
//     isMobile = false,
//   }: {
//     className?: string;
//     isMobile?: boolean;
//   }) => (
//     <div className={`flex items-center ${className}`}>
//       <img
//         src="/images/intertek-iso.jpg"
//         alt="Intertek ISO Certification"
//         className={`object-contain rounded transition-opacity ${
//           isMobile
//             ? "h-[26px] w-auto opacity-90"
//             : "h-21.5 w-auto opacity-80 hover:opacity-100"
//         }`}
//       />
//     </div>
//   );

//   return (
//     <>
//       {/* ================= MOBILE ================= */}
//       <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-black md:hidden">
//         <div className="flex items-center justify-between px-4 py-3">
//           <button onClick={() => handleNavClick("/")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
//           </button>

//           {/* ✅ ISO Badge + Menu Button - aligned */}
//           <div className="flex items-center gap-3">
//             <IsoBadge isMobile />
//             <button
//               onClick={() => {
//                 setIsMenuOpen(!isMenuOpen);
//                 setMobileTechOpen(false);
//               }}
//               className="px-3 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-[11px] text-white/80"
//             >
//               {isMenuOpen ? "Close menu" : "Open menu"}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
//             {/* Overview */}
//             <button
//               onClick={() => handleNavClick("/")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 currentPath === "/"
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Overview
//             </button>

//             {/* Technology Services */}
//             <button
//               onClick={() => setMobileTechOpen(!mobileTechOpen)}
//               className="w-full text-left px-4 py-2 rounded text-sm flex justify-between text-white/90"
//             >
//               <span>Technology Services</span>
//               <span>{mobileTechOpen ? "−" : "+"}</span>
//             </button>

//             {mobileTechOpen && (
//               <div className="pl-4 space-y-1">
//                 <button
//                   onClick={() =>
//                     handleNavClick("/services/quality-engineering")
//                   }
//                   className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                     currentPath === "/services/quality-engineering"
//                       ? "text-white font-semibold"
//                       : "text-white/70"
//                   }`}
//                 >
//                   Quality Engineering
//                 </button>
//                 <button
//                   onClick={() => handleNavClick("/services/cloud-technologies")}
//                   className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                     currentPath === "/services/cloud-technologies"
//                       ? "text-white font-semibold"
//                       : "text-white/70"
//                   }`}
//                 >
//                   Cloud Technologies
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleNavClick("/services/application-services")
//                   }
//                   className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                     currentPath === "/services/application-services"
//                       ? "text-white font-semibold"
//                       : "text-white/70"
//                   }`}
//                 >
//                   Application Services
//                 </button>
//                 <button
//                   onClick={() => handleNavClick("/services/digital-platforms")}
//                   className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                     currentPath === "/services/digital-platforms"
//                       ? "text-white font-semibold"
//                       : "text-white/70"
//                   }`}
//                 >
//                   Digital Platforms
//                 </button>
//                 <button
//                   onClick={() => handleNavClick("/services/ai-services")}
//                   className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                     currentPath === "/services/ai-services"
//                       ? "text-white font-semibold"
//                       : "text-white/70"
//                   }`}
//                 >
//                   AI Services
//                 </button>
//               </div>
//             )}

//             {/* Products */}
//             <button
//               onClick={() => handleNavClick("/products")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 isProductsPage(currentPath)
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Products
//             </button>

//             {/* Careers */}
//             <button
//               onClick={() => handleNavClick("/careers")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 isCareerPage(currentPath)
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Careers
//             </button>

//             {/* Resources */}
//             <button
//               onClick={() => handleNavClick("/resources")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 currentPath.startsWith("/resources")
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               Resources
//             </button>

//             {/* About */}
//             <button
//               onClick={() => handleNavClick("/about")}
//               className={`block w-full text-left px-4 py-2 rounded text-sm ${
//                 currentPath === "/about"
//                   ? "text-white font-semibold"
//                   : "text-white/90"
//               }`}
//             >
//               About Us
//             </button>
//           </nav>
//         )}
//       </header>

//       {/* ================= DESKTOP SIDEBAR ================= */}
//       <aside
//         className="
//           hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
//           w-28 h-screen pl-2
//           bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
//         "
//       >
//         <div className="flex items-end w-full pt-6 pb-3 pl-0">
//           <button onClick={() => handleNavClick("/")}>
//             <img src="/images/cjss-logo.png" alt="CJSS" className="h-10" />
//           </button>
//         </div>

//         <div
//           ref={sidebarContentRef}
//           className="flex flex-col flex-1 w-full gap-10 px-2 pl-0 mt-10"
//         >
//           <NavButton
//             label="Overview"
//             active={currentPath === "/"}
//             onClick={() => handleNavClick("/")}
//           />

//           <NavButton
//             label="Technology Services"
//             active={isServicePage(currentPath)}
//             onClick={() => setDesktopTechOpen(!desktopTechOpen)}
//           />

//           {desktopTechOpen && (
//             <div className="fixed left-[120px] top-28 w-[380px] z-[99999]">
//               <TechnologyDropdown
//                 currentPage={currentPath}
//                 hideHeader
//                 open
//                 showToggle={false}
//                 onOpenChange={(v) => setDesktopTechOpen(Boolean(v))}
//               />
//             </div>
//           )}

//           <NavButton
//             label="Products"
//             active={isProductsPage(currentPath)}
//             onClick={() => handleNavClick("/products")}
//           />

//           <NavButton
//             label="Careers"
//             active={isCareerPage(currentPath)}
//             onClick={() => handleNavClick("/careers")}
//           />

//           <NavButton
//             label="Resources"
//             active={currentPath.startsWith("/resources")}
//             onClick={() => handleNavClick("/resources")}
//           />

//           <NavButton
//             label="About Us"
//             active={currentPath === "/about"}
//             onClick={() => handleNavClick("/about")}
//           />
//         </div>

//         {/* ✅ ISO Badge at Bottom of Desktop Sidebar */}
//         <div className="mt-auto pb-6 pl-2">
//           <IsoBadge />
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Header;
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TechnologyDropdown from "./components/TechnologyDropdown";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [desktopTechOpen, setDesktopTechOpen] = useState(false);

  const sidebarContentRef = useRef<HTMLDivElement | null>(null);

  /* ================= HELPERS ================= */

  const isCareerPage = (path: string) =>
    path.startsWith("/careers") ||
    path === "/life-at-cjss" ||
    path.startsWith("/jobs") ||
    path === "/problems";

  const isProductsPage = (path: string) => path.startsWith("/products");

  const isServicePage = (path: string) => path.startsWith("/services");

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setMobileTechOpen(false);
    setDesktopTechOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  /* ================= UI COMPONENTS ================= */

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

  // ✅ Reusable ISO Badge Component
  const IsoBadge = ({
    className = "",
    isMobile = false,
  }: {
    className?: string;
    isMobile?: boolean;
  }) => (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/intertek-iso.jpg"
        alt="Intertek ISO Certification"
        className={`object-contain rounded transition-opacity ${
          isMobile
            ? "h-[26px] w-auto opacity-90"
            : "h-21.5 w-auto opacity-80 hover:opacity-100"
        }`}
      />
    </div>
  );

  // ✅ Animated Hamburger Menu Button
  const HamburgerButton = ({
    isOpen,
    onClick,
  }: {
    isOpen: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900/90 border border-white/10 hover:bg-neutral-800/90 transition-colors focus:outline-none group"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-5 h-4 flex flex-col justify-between items-center">
        {/* Top line */}
        <span
          className={`block h-[2px] w-5 bg-white/80 rounded-full transform transition-all duration-300 ease-in-out origin-center ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        {/* Middle line */}
        <span
          className={`block h-[2px] w-5 bg-white/80 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />
        {/* Bottom line */}
        <span
          className={`block h-[2px] w-5 bg-white/80 rounded-full transform transition-all duration-300 ease-in-out origin-center ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </div>
    </button>
  );

  return (
    <>
      {/* ================= MOBILE ================= */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-black md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => handleNavClick("/")}>
            <img src="/images/cjss-logo.png" alt="CJSS" className="h-12" />
          </button>

          {/* ✅ ISO Badge + Hamburger Menu Button */}
          <div className="flex items-center gap-3">
            {/* <IsoBadge isMobile /> */}
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setMobileTechOpen(false);
              }}
            />
          </div>
        </div>

        {isMenuOpen && (
          <nav className="p-4 space-y-2 border-t border-neutral-800 bg-neutral-950">
            {/* Overview */}
            <button
              onClick={() => handleNavClick("/")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                currentPath === "/"
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Overview
            </button>

            {/* Technology Services */}
            <button
              onClick={() => setMobileTechOpen(!mobileTechOpen)}
              className="w-full text-left px-4 py-2 rounded text-sm flex justify-between text-white/90"
            >
              <span>Technology Services</span>
              <span>{mobileTechOpen ? "−" : "+"}</span>
            </button>

            {mobileTechOpen && (
              <div className="pl-4 space-y-1">
                <button
                  onClick={() => handleNavClick("/services/ai-services")}
                  className={`block w-full text-left px-4 py-2 rounded text-sm ${
                    currentPath === "/services/ai-services"
                      ? "text-white font-semibold"
                      : "text-white/70"
                  }`}
                >
                  AI Services
                </button>
                <button
                  onClick={() =>
                    handleNavClick("/services/application-services")
                  }
                  className={`block w-full text-left px-4 py-2 rounded text-sm ${
                    currentPath === "/services/application-services"
                      ? "text-white font-semibold"
                      : "text-white/70"
                  }`}
                >
                  Application Services
                </button>
                <button
                  onClick={() => handleNavClick("/services/cloud-technologies")}
                  className={`block w-full text-left px-4 py-2 rounded text-sm ${
                    currentPath === "/services/cloud-technologies"
                      ? "text-white font-semibold"
                      : "text-white/70"
                  }`}
                >
                  Cloud Technologies
                </button>
                <button
                  onClick={() => handleNavClick("/services/digital-platforms")}
                  className={`block w-full text-left px-4 py-2 rounded text-sm ${
                    currentPath === "/services/digital-platforms"
                      ? "text-white font-semibold"
                      : "text-white/70"
                  }`}
                >
                  Digital Platforms
                </button>
                <button
                  onClick={() =>
                    handleNavClick("/services/quality-engineering")
                  }
                  className={`block w-full text-left px-4 py-2 rounded text-sm ${
                    currentPath === "/services/quality-engineering"
                      ? "text-white font-semibold"
                      : "text-white/70"
                  }`}
                >
                  Quality Engineering
                </button>
              </div>
            )}

            {/* Products */}
            <button
              onClick={() => handleNavClick("/products")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                isProductsPage(currentPath)
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Products
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick("/careers")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                isCareerPage(currentPath)
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Careers
            </button>

            {/* Resources */}
            <button
              onClick={() => handleNavClick("/resources")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                currentPath.startsWith("/resources")
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              Resources
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick("/about")}
              className={`block w-full text-left px-4 py-2 rounded text-sm ${
                currentPath === "/about"
                  ? "text-white font-semibold"
                  : "text-white/90"
              }`}
            >
              About Us
            </button>
          </nav>
        )}
      </header>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className="
          hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40
          w-28 h-screen pl-2
          bg-gradient-to-r from-[#03070c] via-[#03070c]/70 to-transparent
        "
      >
        <div className="flex items-end w-full pt-6 pb-3 pl-0">
          <button onClick={() => handleNavClick("/")}>
            <img src="/images/cjss-logo.png" alt="CJSS" className="h-10" />
          </button>
        </div>

        <div
          ref={sidebarContentRef}
          className="flex flex-col flex-1 w-full gap-10 px-2 pl-0 mt-10"
        >
          <NavButton
            label="Overview"
            active={currentPath === "/"}
            onClick={() => handleNavClick("/")}
          />

          <NavButton
            label="Technology Services"
            active={isServicePage(currentPath)}
            onClick={() => setDesktopTechOpen(!desktopTechOpen)}
          />

          {desktopTechOpen && (
            <div className="fixed left-[120px] top-28 w-[380px] z-[99999]">
              <TechnologyDropdown
                currentPage={currentPath}
                hideHeader
                open
                showToggle={false}
                onOpenChange={(v) => setDesktopTechOpen(Boolean(v))}
              />
            </div>
          )}

          <NavButton
            label="Products"
            active={isProductsPage(currentPath)}
            onClick={() => handleNavClick("/products")}
          />

          <NavButton
            label="Careers"
            active={isCareerPage(currentPath)}
            onClick={() => handleNavClick("/careers")}
          />

          <NavButton
            label="Resources"
            active={currentPath.startsWith("/resources")}
            onClick={() => handleNavClick("/resources")}
          />

          <NavButton
            label="About Us"
            active={currentPath === "/about"}
            onClick={() => handleNavClick("/about")}
          />
        </div>

        {/* ✅ ISO Badge at Bottom of Desktop Sidebar */}
        <div className="mt-auto pb-6 pl-2">
          <IsoBadge />
        </div>
      </aside>
    </>
  );
};

export default Header;
