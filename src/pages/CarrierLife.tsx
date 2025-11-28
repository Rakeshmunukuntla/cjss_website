// CarierLife.tsx

import CareerNavigationBar from '@/components/Career/CareeerNavigationBar'

interface CarrierLifeProps {
  navigateTo: (page: string) => void
}

const CarierLife = ({ navigateTo }: CarrierLifeProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life', page: 'CarrierLife' }, // 👈 must match App key
    { label: 'Job Fresher', page: 'CarrierFresher' }, // or whatever you use
    { label: 'Job Experience', page: 'CarrierExperienced' },
    { label: 'Problems', page: 'CarrierProblems' },
  ]

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />
      <section className="w-full h-28">
        <p>Career life</p>
      </section>
    </>
  )
}

export default CarierLife
