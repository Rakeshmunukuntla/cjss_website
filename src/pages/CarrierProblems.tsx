import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';

// import React from 'react';
interface CarrierProblemsProps {
  navigateTo: (page: string) => void;
}
const CarrierProblems = ({ navigateTo }: CarrierProblemsProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life at CJSS', page: 'CarrierLife' }, // 👈 must match App key
    { label: 'Job for Fresher', page: 'CarrierFresher' }, // or whatever you use
    { label: 'Job for Experienced', page: 'CarrierExperienced' },
    { label: 'Problems we solve', page: 'CarrierProblems' },
  ];

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />
      <section className="w-full h-28">
        <p>Career life</p>
      </section>
    </>
  );
};

export default CarrierProblems;
