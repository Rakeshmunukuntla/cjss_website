import BenefitsSection from '@/components/Career/BenefitsSection'
import CareerNavigationBar from '@/components/Career/CareeerNavigationBar'
import CareerBackgroundWrapper from '@/components/Career/CareerBackgroundWrapper'
import ISOSection from '@/components/Career/ISOSection'
import MentorStoriesSection from '@/components/Career/MentorStoriesSection'
import UploadResumeSection from '@/components/Career/UploadResumeSection'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface CarrierHomeProps {
  navigateTo: (page: string) => void
}

const CarrierHome = ({ navigateTo }: CarrierHomeProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life at CJSS', page: 'CarrierLife' },
    { label: 'Job for Fresher', page: 'CarrierFresher' },
    { label: 'Job for Experienced', page: 'CarrierExperienced' },
    { label: 'Problems we solve', page: 'CarrierProblems' },
  ]

  // Scroll-trigger: counter animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  // Parallax background
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    // reduce parallax effect on mobiles
    const multiplier = window.innerWidth < 768 ? 0.1 : 0.25
    setOffsetY(window.scrollY * multiplier)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ⭐ FIXED NAVBAR */}
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* Push content down to avoid overlapping navbar */}
      {/* <div className="pt-[86px]"></div> */}
      {/* <div className="hidden md:block h-[66px]"></div> */}

      {/* Push content down to avoid navbar overlap */}
      <div className="h-[80px] md:h-[80px]"></div>

      {/* ⭐ HERO SECTION */}
      <section
        ref={ref}
        className="relative w-full px-4 py-20 overflow-hidden sm:px-6 md:px-10 sm:py-24 md:py-32 bg-neutral-950"
      >
        {/* ⭐ PARALLAX BACKGROUND */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            transform: `translateY(${offsetY}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          <img
            src="/images/cjssfam.jpeg"
            alt="CJSS Team"
            className="object-cover w-full h-full opacity-90 blur-xs"
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Glow Orbs */}
        <div className="absolute top-10 md:top-20 left-6 md:left-10 w-[250px] md:w-[380px] h-[250px] md:h-[380px] bg-purple-600/30 blur-[120px] md:blur-[150px] -z-10"></div>
        <div className="absolute bottom-10 md:bottom-20 right-6 md:right-10 w-[250px] md:w-[380px] h-[250px] md:h-[380px] bg-cyan-400/30 blur-[120px] md:blur-[150px] -z-10"></div>

        {/* ⭐ CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Empowering People.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Transforming Enterprises.
            </span>
          </h2>

          <p className="max-w-3xl px-2 mx-auto mt-4 text-base md:mt-6 sm:text-lg text-white/70">
            At CJSS, we combine innovation, engineering excellence, and a people-first culture to
            deliver world-class digital transformation for global enterprises.
          </p>

          {/* ⭐ STATS SECTION */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-12 mt-14 md:mt-20">
            {/* Each stat */}
            {[
              { value: 200, label: 'Happy Employees', suffix: '+' },
              { value: 7, label: 'Years of Transformation', suffix: '+' },
              { value: 3, label: 'Global Locations', suffix: '+' },
              { value: 3, label: 'Clients Worldwide', suffix: '+' },
              { value: 98, label: 'Satisfaction Score', suffix: '%' },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  flex flex-col items-center
                  transition-all duration-700
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: `${150 * i}ms` }}
              >
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                  {inView ? <CountUp end={item.value} duration={2} suffix={item.suffix} /> : '0'}
                </h3>
                <p className="mt-2 text-xs text-center sm:text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ MAIN CONTENT WRAPPER */}
      <CareerBackgroundWrapper>
        <MentorStoriesSection />
        <BenefitsSection />
        <ISOSection />
        <UploadResumeSection />
      </CareerBackgroundWrapper>
    </>
  )
}

export default CarrierHome
