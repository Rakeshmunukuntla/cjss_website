"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ResourceDetailPage } from "./pages/ResourceDetailPage";
import { TECHNOLOGY_SERVICES } from "./lib/Constants";
import { CareersPage } from "./pages/CareersPage";
import { QualityEngineeringPage } from "./pages/services/QualityEngineeringPage";
import { CloudTechnologiesPage } from "./pages/services/CloudTechnologiesPage";
import { ApplicationServicesPage } from "./pages/services/ApplicationServicesPage";
import { DigitalPlatformsPage } from "./pages/services/DigitalPlatformsPage";
import { AIServicesPage } from "./pages/services/AIServicesPage";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden relative selection:bg-purple-500/30">
      <Header currentPage={currentPage} navigateTo={navigateTo} />

      {/* expose technology services to header mobile menu (safe client-side assignment) */}
      <script suppressHydrationWarning>
        {`(function(){ if(typeof window !== 'undefined'){ window.__TECH_SERVICES_LIST = ${JSON.stringify(
          TECHNOLOGY_SERVICES.map((s) => ({ id: s.id, title: s.title }))
        )} } })()`}
      </script>

      <main className="pt-20 w-full">
        <div className="w-full" key={currentPage}>
          <div className="animate-fadeIn ">
            {currentPage === "home" && <HomePage navigateTo={navigateTo} />}
            {currentPage === "about" && <AboutPage />}
            {currentPage === "capabilities" && <CapabilitiesPage />}
            {currentPage === "careers" && <CareersPage />}
            {currentPage === "resources" && (
              <ResourcesPage navigateTo={navigateTo} />
            )}
            {/* {currentPage.startsWith("resource-") && (
              <ResourceDetailPage
                resourceId={parseInt(currentPage.split("-")[1])}
                navigateTo={navigateTo}
              />
            )} */}
            {currentPage.startsWith("resource-") && (
              <ResourceDetailPage
                resourceId={currentPage.replace("resource-", "")}
                navigateTo={navigateTo}
              />
            )}
            {currentPage === "service-quality-engineering" && (
              <QualityEngineeringPage />
            )}
            {currentPage === "service-cloud-technologies" && (
              <CloudTechnologiesPage />
            )}
            {currentPage === "service-application-services" && (
              <ApplicationServicesPage />
            )}
            {currentPage === "service-digital-platforms" && (
              <DigitalPlatformsPage />
            )}
            {currentPage === "service-ai-services" && <AIServicesPage />}
          </div>
        </div>
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
