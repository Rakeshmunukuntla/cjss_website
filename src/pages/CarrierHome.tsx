// CareerHome.tsx

import BenefitsSection from '@/components/Career/BenefitsSection'
import CareerNavigationBar from '@/components/Career/CareeerNavigationBar'
import MentorStoriesSection from '@/components/Career/MentorStoriesSection'
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
    setOffsetY(window.scrollY * 0.25)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ⭐ FIXED NAVBAR (ALWAYS VISIBLE) */}
      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* Prevent content from hiding behind fixed navbar */}
      <div className="pt-[86px]"></div>

      {/* ⭐ HERO SECTION */}
      <section ref={ref} className="relative w-full px-10 py-32 overflow-hidden bg-neutral-950">
        {/* ⭐ PARALLAX BACKGROUND IMAGE */}
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

          {/* Softer overlay for clarity */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Glow Orbs */}
        <div className="absolute top-20 left-10 w-[380px] h-[380px] bg-purple-600/30 blur-[150px] -z-10"></div>
        <div className="absolute bottom-20 right-10 w-[380px] h-[380px] bg-cyan-400/30 blur-[150px] -z-10"></div>

        {/* ⭐ CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Empowering People.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Transforming Enterprises.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-white/75">
            At CJSS, we combine innovation, engineering excellence, and a people-first culture to
            deliver world-class digital transformation for global enterprises.
          </p>

          {/* ⭐ ANIMATED STATS */}
          <div className="grid grid-cols-2 gap-12 mt-20 sm:grid-cols-3 md:grid-cols-5">
            {/* ITEM 1 */}
            <div
              className={`flex flex-col items-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h3 className="text-5xl font-extrabold text-white">
                {inView ? <CountUp end={200} duration={2} suffix="+" /> : '0+'}
              </h3>
              <p className="mt-2 text-sm font-medium text-white/70">Happy Employees</p>
            </div>

            {/* ITEM 2 */}
            <div
              className={`flex flex-col items-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <h3 className="text-5xl font-extrabold text-white">
                {inView ? <CountUp end={7} duration={2} suffix="+" /> : '0+'}
              </h3>
              <p className="mt-2 text-sm font-medium text-white/70">Years of Transformation</p>
            </div>

            {/* ITEM 3 */}
            <div
              className={`flex flex-col items-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-5xl font-extrabold text-white">
                {inView ? <CountUp end={3} duration={2} suffix="+" /> : '0+'}
              </h3>
              <p className="mt-2 text-sm font-medium text-white/70">Global Locations</p>
            </div>

            {/* ITEM 4 */}
            <div
              className={`flex flex-col items-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <h3 className="text-5xl font-extrabold text-white">
                {inView ? <CountUp end={3} duration={2} suffix="+" /> : '0+'}
              </h3>
              <p className="mt-2 text-sm font-medium text-white/70">Clients Worldwide</p>
            </div>

            {/* ITEM 5 */}
            <div
              className={`flex flex-col items-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <h3 className="text-5xl font-extrabold text-white">
                {inView ? <CountUp end={98} duration={2} suffix="%" /> : '0%'}
              </h3>
              <p className="mt-2 text-sm font-medium text-white/70">Satisfaction Score</p>
            </div>
          </div>
        </div>
      </section>
      <MentorStoriesSection />
      <BenefitsSection />
    </>
  )
}

export default CarrierHome
