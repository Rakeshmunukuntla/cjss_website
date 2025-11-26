"use client";

interface FooterProps {
  navigateTo: (page: string) => void;
}

export const Footer = ({ navigateTo }: FooterProps) => {
  const companyLinks = [
    { label: "About Us", page: "about" },
    { label: "Careers", page: "careers" },
    { label: "Blog", page: "resources" },
    { label: "Capabilities", page: "capabilities" },
  ];

  const serviceLinks = [
    { label: "Quality Engineering", page: "service-quality-engineering" },
    { label: "Cloud Technologies", page: "service-cloud-technologies" },
    { label: "Application Services", page: "service-application-services" },
    { label: "Digital Platforms", page: "service-digital-platforms" },
    { label: "AI Services", page: "service-ai-services" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-neutral-800 relative bg-neutral-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/images/cjss-logo.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(20px)",
        }}
      ></div>
      <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">CJSS</h3>
              <p className="text-white">Making your journey successful</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-neutral-400">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigateTo(link.page)}
                      className="hover:text-purple-400 transition-colors cursor-hover"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-neutral-400">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigateTo(link.page)}
                      className="hover:text-purple-400 transition-colors cursor-hover"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors cursor-hover"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors cursor-hover"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors cursor-hover"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-white pt-8 border-t border-neutral-800">
            <p>&copy; 2025 CJSS Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
