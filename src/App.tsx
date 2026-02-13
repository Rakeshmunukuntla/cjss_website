"use client";

import { useState, useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TECHNOLOGY_SERVICES } from "./lib/Constants";

import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ResourceDetailPage } from "./pages/ResourceDetailPage";
import { ResourcesPage } from "./pages/ResourcesPage";

// import CarrierExperienced from "./pages/CarrierExperienced";
import CarrierFresher from "./pages/CarrierFresher";
import CarrierHome from "./pages/CarrierHome";
import CarrierLife from "./pages/CarrierLife";
import CarrierProblems from "./pages/CarrierProblems";

import AIServicesPage from "./pages/services/AIServicesPage";
import ApplicationServicesPage from "./pages/services/ApplicationServicesPage";
import CloudTechnologiesPage from "./pages/services/CloudTechnologiesPage";
import DigitalPlatformsPage from "./pages/services/DigitalPlatformsPage";
import QualityEngineeringPage from "./pages/services/QualityEngineeringPage";

import EventDetailPage from "../src/components/home/EventDetailPage";
import EventRegisterPage from "../src/components/home/EventRegisterPage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductConnectPage from "./pages/products/ProductConnectPage";
import ProductEcomAgent from "./pages/products/ProductEcomAgent";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-neutral-950 selection:bg-purple-500/30">
      <Header currentPage={currentPage} navigateTo={navigateTo} />

      <script suppressHydrationWarning>
        {`(function(){ if(typeof window !== 'undefined'){ window.__TECH_SERVICES_LIST = ${JSON.stringify(
          TECHNOLOGY_SERVICES.map((s) => ({ id: s.id, title: s.title })),
        )} } })()`}
      </script>

      <main className="w-full pt-0">
        <div className="w-full" key={currentPage}>
          {/* 6️⃣ EVENT DETAIL PAGE (moved lower so it doesn't override others) */}
          {currentPage.startsWith("event-") && (
            <EventDetailPage
              key={currentPage}
              eventId={currentPage.replace("event-", "")}
              navigateTo={navigateTo}
            />
          )}

          {/* 7️⃣ EVENT REGISTRATION PAGE */}
          {currentPage.startsWith("register-") && (
            <EventRegisterPage
              key={currentPage}
              eventId={currentPage.replace("register-", "")}
              navigateTo={navigateTo}
            />
          )}

          {/* 1️⃣ HOME PAGE */}
          {currentPage === "home" && <HomePage navigateTo={navigateTo} />}

          {/* 2️⃣ ABOUT */}
          {currentPage === "about" && <AboutPage />}

          {/* 3️⃣ SERVICES */}
          {currentPage === "quality" && <QualityEngineeringPage />}
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

          {/* 4️⃣ CAREERS */}
          {currentPage === "careers" && <CarrierHome navigateTo={navigateTo} />}
          {currentPage === "CarrierHome" && (
            <CarrierHome navigateTo={navigateTo} />
          )}
          {currentPage === "CarrierLife" && (
            <CarrierLife navigateTo={navigateTo} />
          )}
          {currentPage === "CarrierFresher" && (
            <CarrierFresher navigateTo={navigateTo} />
          )}
          {currentPage === "CarrierExperienced" && (
            // <CarrierExperienced navigateTo={navigateTo} />
            <CarrierFresher navigateTo={navigateTo}></CarrierFresher>
          )}
          {currentPage === "CarrierProblems" && (
            <CarrierProblems navigateTo={navigateTo} />
          )}

          {/* 5️⃣ RESOURCES */}
          {currentPage === "resources" && (
            <ResourcesPage navigateTo={navigateTo} />
          )}

          {currentPage.startsWith("resource-") && (
            <ResourceDetailPage
              resourceId={currentPage.replace("resource-", "")}
              navigateTo={navigateTo}
            />
          )}
          {/* 🔹 PRODUCTS */}
          {currentPage === "products" && (
            <ProductsPage navigateTo={navigateTo} />
          )}
        </div>
        {/* CONNECT PRODUCT DETAIL PAGE */}
        {currentPage === "product-connect" && (
          <ProductConnectPage navigateTo={navigateTo} />
        )}
        {/* ECOM-AGENT PRODUCT DETAIL PAGE */}
        {currentPage === "product-ecom-agent" && (
          <ProductEcomAgent navigateTo={navigateTo} />
        )}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
