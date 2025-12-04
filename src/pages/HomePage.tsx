import { HeroSection } from '../components/home/HeroSection';
import { AboutUsSection } from '../components/home/AboutUsSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { OurServicesSection } from '../components/home/OurServicesSection';
import { ClientsSection } from '../components/home/ClientsSection';
import { ExpertiseSection } from '../components/home/ExpertiseSection';
import { GlobeSection } from '../components/home/GlobeSection';
import { TechShowcaseSection } from '../components/home/TechShowcaseSection';
import EventCarouselBanner from '@/components/home/EventCarouselBanner';

interface HomePageProps {
  navigateTo?: (page: string) => void;
}

export const HomePage = ({ navigateTo }: HomePageProps) => {
  return (
    <>
      <GlobeSection />
      <EventCarouselBanner />
      <HeroSection />
      <TechShowcaseSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <OurServicesSection navigateTo={navigateTo} />
      <ClientsSection />
      <ExpertiseSection />
    </>
  );
};
