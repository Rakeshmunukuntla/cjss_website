// "use client";

// // import { label } from "framer-motion/client";

// interface FooterProps {
//   navigateTo: (page: string) => void;
// }

// export const Footer = ({ navigateTo }: FooterProps) => {
//   const companyLinks = [
//     { label: "About Us", page: "about" },
//     { label: "Careers", page: "careers" },
//     { label: "Blog", page: "resources" },
//     { label: "Technology Services", page: "quality" },
//     { label: "Overview ", page: "home" },
//   ];

//   const serviceLinks = [
//     { label: "Quality Engineering", page: "service-quality-engineering" },
//     { label: "Cloud Technologies", page: "service-cloud-technologies" },
//     { label: "Application Services", page: "service-application-services" },
//     { label: "Digital Platforms", page: "service-digital-platforms" },
//     { label: "AI Services", page: "service-ai-services" },
//   ];

//   return (
//     <footer className="relative px-6 py-16 overflow-hidden text-white border-t border-neutral-800 bg-neutral-950">
//       <div
//         className="absolute inset-0 opacity-50"
//         style={{
//           backgroundImage: "url('/images/cjss-logo.png')",
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           filter: "blur(20px)",
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"></div>
//       <div className="mx-auto max-w-7xl">
//         <div className="relative z-10">
//           <div className="grid gap-12 mb-12 md:grid-cols-4">
//             <div>
//               <h3 className="mb-4 text-2xl font-bold text-white">CJSS</h3>
//               <p className="text-white">Making your journey successful</p>
//             </div>
//             <div>
//               <h4 className="mb-4 font-bold text-white">Company</h4>
//               <ul className="space-y-2 text-neutral-400">
//                 {companyLinks.map((link) => (
//                   <li key={link.label}>
//                     <button
//                       onClick={() => navigateTo(link.page)}
//                       className="transition-colors hover:text-purple-400 cursor-pointer"
//                     >
//                       {link.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="mb-4 font-bold text-white">Services</h4>
//               <ul className="space-y-2 text-neutral-400">
//                 {serviceLinks.map((link) => (
//                   <li key={link.label}>
//                     <button
//                       onClick={() => navigateTo(link.page)}
//                       className="transition-colors hover:text-purple-400 cursor-hover"
//                     >
//                       {link.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="mb-4 font-bold text-white">Connect</h4>

//               <ul className="flex items-center gap-6 text-neutral-300">
//                 {/* --- COMMON STYLES: GLASS CARD + GLOW RING + ANIMATION --- */}
//                 {/* You only change the SVG inside each icon */}

//                 {/* LinkedIn */}
//                 <li>
//                   <a
//                     href="https://www.linkedin.com/company/cjss-technologies/posts/?feedView=all"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//         relative flex items-center justify-center
//         w-12 h-12
//         rounded-xl
//         backdrop-blur-md bg-white/10
//         transition-all duration-500
//         group

//         /* 3D LIFT */
//         hover:-translate-y-2 hover:scale-110 hover:rotate-2

//         /* SOFT SHADOW */
//         hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
//       "
//                   >
//                     {/* Animated Border Ring */}
//                     <span
//                       className="
//         absolute inset-0 rounded-xl
//         bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500
//         opacity-0 group-hover:opacity-100
//         transition-all duration-700
//         animate-spin-slow
//         p-[2px]
//       "
//                     >
//                       <span className="block w-full h-full rounded-xl bg-black/80 backdrop-blur-xl"></span>
//                     </span>

//                     {/* Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="relative z-10 transition-all duration-300 group-hover:text-purple-300 group-hover:scale-125"
//                     >
//                       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                       <rect width="4" height="12" x="2" y="9" />
//                       <circle cx="4" cy="4" r="2" />
//                     </svg>
//                   </a>
//                 </li>

//                 {/* Twitter */}
//                 {/* <li>
//                   <a
//                     href="https://twitter.com/CJSS8102021"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//         relative flex items-center justify-center
//         w-12 h-12
//         rounded-xl
//         backdrop-blur-md bg-white/10
//         transition-all duration-500
//         group
//         hover:-translate-y-2 hover:scale-110 hover:rotate-2
//         hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
//       "
//                   >
//                     <span
//                       className="
//         absolute inset-0 rounded-xl
//         bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500
//         opacity-0 group-hover:opacity-100
//         transition-all duration-700 animate-spin-slow
//         p-[2px]
//       "
//                     >
//                       <span className="block w-full h-full rounded-xl bg-black/80 backdrop-blur-xl"></span>
//                     </span>

//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="relative z-10 transition-all duration-300 group-hover:text-purple-300 group-hover:scale-125"
//                     >
//                       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//                     </svg>
//                   </a>
//                 </li> */}

//                 {/* Facebook
//                 <li>
//                   <a
//                     href="https://www.facebook.com/Customer-Journey-Software-Solutions-112603838118106"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//         relative flex items-center justify-center
//         w-12 h-12 rounded-xl
//         backdrop-blur-md bg-white/10
//         transition-all duration-500
//         group
//         hover:-translate-y-2 hover:scale-110 hover:rotate-2
//         hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
//       "
//                   >
//                     <span
//                       className="
//         absolute inset-0 rounded-xl
//         bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500
//         opacity-0 group-hover:opacity-100
//         transition-all duration-700 animate-spin-slow
//         p-[2px]
//       "
//                     >
//                       <span className="block w-full h-full rounded-xl bg-black/80 backdrop-blur-xl"></span>
//                     </span>

//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="relative z-10 transition-all duration-300 group-hover:text-purple-300 group-hover:scale-125"
//                     >
//                       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                     </svg>
//                   </a>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//           <div className="pt-8 text-center text-white border-t border-neutral-800">
//             <p>&copy; 2026 CJSS Technologies. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

"use client";

import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companyLinks = [
    { label: "Overview", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Resources", path: "/resources" },
    { label: "Products", path: "/products" },
  ];

  const serviceLinks = [
    { label: "Quality Engineering", path: "/services/quality-engineering" },
    { label: "Cloud Technologies", path: "/services/cloud-technologies" },
    { label: "Application Services", path: "/services/application-services" },
    { label: "Digital Platforms", path: "/services/digital-platforms" },
    { label: "AI Services", path: "/services/ai-services" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/cjss-technologies/posts/?feedView=all",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 transition-all duration-300 group-hover:text-purple-300 group-hover:scale-125"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    // Uncomment if you want to add Twitter
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/CJSS8102021",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="22"
    //       height="22"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       className="relative z-10 transition-all duration-300 group-hover:text-purple-300 group-hover:scale-125"
    //     >
    //       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    //     </svg>
    //   ),
    // },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-1 px-6 py-16 overflow-hidden text-white border-t border-neutral-800 bg-neutral-950">
      {/* Background Logo */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/images/cjss-logo.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(20px)",
        }}
      />
      <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm" />

      <div className="mx-auto max-w-7xl">
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="grid gap-12 mb-12 md:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">CJSS</h3>
              <p className="text-white/80 mb-6">
                Making your journey successful
              </p>

              {/* Optional: Add contact email */}
              <a
                href="mailto:contact@cjss.com"
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                contact@cjss.com
              </a>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="mb-4 font-bold text-white">Company</h4>
              <ul className="space-y-2 text-neutral-400">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavigate(link.path)}
                      className="transition-colors hover:text-purple-400 cursor-pointer text-left w-full"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="mb-4 font-bold text-white">Services</h4>
              <ul className="space-y-2 text-neutral-400">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavigate(link.path)}
                      className="transition-colors hover:text-purple-400 cursor-pointer text-left w-full"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 font-bold text-white">Connect</h4>
              <ul className="flex items-center gap-6 text-neutral-300">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="
                        relative flex items-center justify-center
                        w-12 h-12
                        rounded-xl
                        backdrop-blur-md bg-white/10
                        transition-all duration-500
                        group
                        hover:-translate-y-2 hover:scale-110 hover:rotate-2
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                      "
                    >
                      {/* Animated Border Ring */}
                      <span
                        className="
                          absolute inset-0 rounded-xl
                          bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500
                          opacity-0 group-hover:opacity-100
                          transition-all duration-700
                          animate-spin-slow
                          p-[2px]
                        "
                      >
                        <span className="block w-full h-full rounded-xl bg-black/80 backdrop-blur-xl" />
                      </span>

                      {/* Icon */}
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Additional Info */}
              <div className="mt-8 space-y-2 text-sm text-neutral-400">
                <p className="font-semibold text-white mb-3">Location</p>
                <p className="leading-relaxed">Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 space-y-4 text-center border-t border-neutral-800">
            {/* Copyright */}
            <p className="text-white/80">
              &copy; {currentYear} CJSS Technologies. All rights reserved.
            </p>

            {/* Optional: Legal Links */}
            <div className="flex justify-center gap-6 text-sm text-neutral-400">
              <button
                onClick={() => handleNavigate("/privacy-policy")}
                className="hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => handleNavigate("/terms-of-service")}
                className="hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
