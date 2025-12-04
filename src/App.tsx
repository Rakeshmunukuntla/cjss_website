'use client';

import { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { TECHNOLOGY_SERVICES } from './lib/Constants';
import { AboutPage } from './pages/AboutPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { HomePage } from './pages/HomePage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
// import { CareersPage } from './pages/CareersPage';
import CarrierExperienced from './pages/CarrierExperienced';
import CarrierFresher from './pages/CarrierFresher';
import CarrierHome from './pages/CarrierHome';
import CarrierLife from './pages/CarrierLife';
import CarrierProblems from './pages/CarrierProblems';
import { AIServicesPage } from './pages/services/AIServicesPage';
import ApplicationServicesPage from './pages/services/ApplicationServicesPage';
import CloudTechnologiesPage from './pages/services/CloudTechnologiesPage';
import DigitalPlatformsPage from './pages/services/DigitalPlatformsPage';
import QualityEngineeringPage from './pages/services/QualityEngineeringPage';

export const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-neutral-950 selection:bg-purple-500/30">
      <Header currentPage={currentPage} navigateTo={navigateTo} />

      {/* expose technology services to header mobile menu (safe client-side assignment) */}
      <script suppressHydrationWarning>
        {`(function(){ if(typeof window !== 'undefined'){ window.__TECH_SERVICES_LIST = ${JSON.stringify(
          TECHNOLOGY_SERVICES.map((s) => ({ id: s.id, title: s.title }))
        )} } })()`}
      </script>

      <main className="w-full pt-0">
        <div className="w-full" key={currentPage}>
          {/* <div> */}
          {currentPage === 'home' && (
            <div className="animate-fadeIn">
              <HomePage navigateTo={navigateTo} />
            </div>
          )}

          {currentPage === 'about' && (
            <div className="animate-fadeIn">
              <AboutPage />
            </div>
          )}

          {currentPage === 'capabilities' && (
            <div className="animate-fadeIn">
              <CapabilitiesPage />
            </div>
          )}
          {currentPage === 'CarrierHome' && <CarrierHome navigateTo={navigateTo} />}
          {currentPage === 'CarrierLife' && <CarrierLife navigateTo={navigateTo} />}
          {currentPage === 'CarrierFresher' && <CarrierFresher navigateTo={navigateTo} />}
          {currentPage === 'CarrierExperienced' && <CarrierExperienced navigateTo={navigateTo} />}
          {currentPage === 'CarrierProblems' && <CarrierProblems navigateTo={navigateTo} />}
          {currentPage === 'resources' && (
            <div className="animate-fadeIn">
              <ResourcesPage navigateTo={navigateTo} />
            </div>
          )}

          {currentPage.startsWith('resource-') && (
            <div className="animate-fadeIn">
              <ResourceDetailPage resourceId={currentPage.split('-')[1]} navigateTo={navigateTo} />
            </div>
          )}
          {currentPage === 'service-quality-engineering' && (
            <div className="animate-fadeIn">
              <QualityEngineeringPage />
            </div>
          )}

          {currentPage === 'service-cloud-technologies' && (
            <div className="animate-fadeIn">
              <CloudTechnologiesPage />
            </div>
          )}

          {currentPage === 'service-application-services' && (
            <div className="animate-fadeIn">
              <ApplicationServicesPage />
            </div>
          )}

          {currentPage === 'service-digital-platforms' && (
            <div className="animate-fadeIn">
              <DigitalPlatformsPage />
            </div>
          )}

          {currentPage === 'service-ai-services' && (
            <div className="animate-fadeIn">
              <AIServicesPage />
            </div>
          )}
        </div>
        {/* </div> */}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
