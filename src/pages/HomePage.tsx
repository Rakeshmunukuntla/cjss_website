// // import { HeroSection } from "../components/home/HeroSection";
// // import { AboutUsSection } from "../components/home/AboutUsSection";
// // import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
// // import { OurServicesSection } from "../components/home/OurServicesSection";
// // import { ClientsSection } from "../components/home/ClientsSection";
// // import { ExpertiseSection } from "../components/home/ExpertiseSection";
// // import { GlobeSection } from "../components/home/GlobeSection";
// // import { TechShowcaseSection } from "../components/home/TechShowcaseSection";
// // import EventCarouselBanner from "@/components/home/EventCarouselBanner";

// // interface HomePageProps {
// //   navigateTo?: (page: string) => void;
// // }

// // export const HomePage = ({ navigateTo }: HomePageProps) => {
// //   return (
// //     <>
// //       <GlobeSection />
// //       <EventCarouselBanner navigateTo={navigateTo} />
// //       <HeroSection />
// //       <TechShowcaseSection />
// //       <AboutUsSection />
// //       <WhyChooseUsSection />
// //       <OurServicesSection navigateTo={navigateTo} />
// //       <ClientsSection />
// //       <ExpertiseSection />
// //     </>
// //   );
// // };
// // import { HeroSection } from "../components/home/HeroSection";
// import { AboutUsSection } from "../components/home/AboutUsSection";
// import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
// import OurServicesSection from "../components/home/OurServicesSection";
// import { ClientsSection } from "../components/home/ClientsSection";
// import { ExpertiseSection } from "../components/home/ExpertiseSection";
// import { GlobeSection } from "../components/home/GlobeSection";
// import { TechShowcaseSection } from "../components/home/TechShowcaseSection";
// import EventCarouselBanner from "@/components/home/EventCarouselBanner";

// interface HomePageProps {
//   navigateTo: (page: string) => void; // ✔ REQUIRED
// }

// export const HomePage = ({ navigateTo }: HomePageProps) => {
//   return (
//     <>
//       <GlobeSection />

//       {/* MUST receive navigateTo */}
//       <EventCarouselBanner navigateTo={navigateTo} />

//       {/* <HeroSection /> */}
//       <TechShowcaseSection />
//       <AboutUsSection />
//       <WhyChooseUsSection />

//       <OurServicesSection navigateTo={navigateTo} />

//       <ClientsSection />
//       <ExpertiseSection />
//     </>
//   );
// };

// export default HomePage;
"use client";

import { useEffect, useState } from "react";
import { AboutUsSection } from "../components/home/AboutUsSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
import OurServicesSection from "../components/home/OurServicesSection";
import { ClientsSection } from "../components/home/ClientsSection";
import { ExpertiseSection } from "../components/home/ExpertiseSection";
import { GlobeSection } from "../components/home/GlobeSection";
import { TechShowcaseSection } from "../components/home/TechShowcaseSection";
import EventCarouselBanner from "@/components/home/EventCarouselBanner";
import EnterpriseCertificationTrust from "@/components/home/EnterpriseCertificationTrust";

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export const HomePage = ({ navigateTo }: HomePageProps) => {
  const [heroOpacity, setHeroOpacity] = useState(1);

  // Scroll effect for hero fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const halfScreen = windowHeight * 0.5;
      let opacity;

      if (scrollY <= halfScreen) {
        opacity = 1 - (scrollY / halfScreen) * 0.9;
      } else {
        const secondHalfProgress = (scrollY - halfScreen) / halfScreen;
        opacity = 0.1 - secondHalfProgress * 0.1;
      }

      setHeroOpacity(Math.max(0, Math.min(1, opacity)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* =====================================================
          FIXED HERO SECTION (GlobeSection with scroll fade)
      ===================================================== */}
      <div className="fixed inset-0 z-0" style={{ opacity: heroOpacity }}>
        <GlobeSection />
      </div>

      {/* Spacer for hero height */}
      <div className="h-screen" />

      {/* =====================================================
          CONTENT SECTIONS (scroll over hero)
      ===================================================== */}
      <div className="relative z-10">
        <div className="bg-black rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.9)]">
          {/* MUST receive navigateTo */}
          <EventCarouselBanner navigateTo={navigateTo} />

          <TechShowcaseSection />
          <AboutUsSection />
          <WhyChooseUsSection />
          <EnterpriseCertificationTrust></EnterpriseCertificationTrust>

          <OurServicesSection navigateTo={navigateTo} />

          <ClientsSection />
          <ExpertiseSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
