'use client'

import { useState } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { TECHNOLOGY_SERVICES } from './lib/Constants'
import { AboutPage } from './pages/AboutPage'
import { CapabilitiesPage } from './pages/CapabilitiesPage'
import { HomePage } from './pages/HomePage'
import { ResourceDetailPage } from './pages/ResourceDetailPage'
import { ResourcesPage } from './pages/ResourcesPage'
// import { CareersPage } from './pages/CareersPage';
import CarrierExperienced from './pages/CarrierExperienced'
import CarrierFresher from './pages/CarrierFresher'
import CarrierHome from './pages/CarrierHome'
import CarrierLife from './pages/CarrierLife'
import CarrierProblems from './pages/CarrierProblems'
import { AIServicesPage } from './pages/services/AIServicesPage'
import { ApplicationServicesPage } from './pages/services/ApplicationServicesPage'
import { CloudTechnologiesPage } from './pages/services/CloudTechnologiesPage'
import { DigitalPlatformsPage } from './pages/services/DigitalPlatformsPage'
import { QualityEngineeringPage } from './pages/services/QualityEngineeringPage'

export const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateTo = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-neutral-950 selection:bg-purple-500/30">
      <Header currentPage={currentPage} navigateTo={navigateTo} />

      {/* expose technology services to header mobile menu (safe client-side assignment) */}
      <script suppressHydrationWarning>
        {`(function(){ if(typeof window !== 'undefined'){ window.__TECH_SERVICES_LIST = ${JSON.stringify(
          TECHNOLOGY_SERVICES.map((s) => ({ id: s.id, title: s.title })),
        )} } })()`}
      </script>

      <main className="w-full pt-0">
        <div className="w-full" key={currentPage}>
          <div className="animate-fadeIn">
            {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'capabilities' && <CapabilitiesPage />}
            {currentPage === 'CarrierHome' && <CarrierHome navigateTo={navigateTo} />}
            {currentPage === 'CarrierLife' && <CarrierLife navigateTo={navigateTo} />}
            {currentPage === 'CarrierFresher' && <CarrierFresher navigateTo={navigateTo} />}
            {currentPage === 'CarrierExperienced' && <CarrierExperienced navigateTo={navigateTo} />}
            {currentPage === 'CarrierProblems' && <CarrierProblems navigateTo={navigateTo} />}
            {currentPage === 'resources' && <ResourcesPage navigateTo={navigateTo} />}
            {currentPage.startsWith('resource-') && (
              <ResourceDetailPage resourceId={currentPage.split('-')[1]} navigateTo={navigateTo} />
            )}
            {currentPage === 'service-quality-engineering' && <QualityEngineeringPage />}
            {currentPage === 'service-cloud-technologies' && <CloudTechnologiesPage />}
            {currentPage === 'service-application-services' && <ApplicationServicesPage />}
            {currentPage === 'service-digital-platforms' && <DigitalPlatformsPage />}
            {currentPage === 'service-ai-services' && <AIServicesPage />}
          </div>
        </div>
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App
