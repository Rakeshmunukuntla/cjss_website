import CareerNavigationBar from '@/components/Career/CareeerNavigationBar';
import JobOpenings from './jobs/JobOpeningsExperince';

// import React from 'react';
interface CarrierExperiencedProps {
  navigateTo: (page: string) => void;
}
const CarrierExperienced = ({ navigateTo }: CarrierExperiencedProps) => {
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
      <section className="w-full h-0"></section>
      <JobOpenings></JobOpenings>
    </>
  );
};

export default CarrierExperienced;
