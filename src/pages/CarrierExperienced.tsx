// import CareerNavigationBar from '@/components/Career/CareeerNavigationBar'
// import JobOpenings from './jobs/JobOpeningsExperince'

// // import React from 'react';
// interface CarrierExperiencedProps {
//   navigateTo: (page: string) => void
// }
// const CarrierExperienced = ({ navigateTo }: CarrierExperiencedProps) => {
//   const links = [
//     { label: 'Home', page: 'CarrierHome' },
//     { label: 'Life at CJSS', page: 'CarrierLife' }, // 👈 must match App key
//     { label: 'Job for Fresher', page: 'CarrierFresher' }, // or whatever you use
//     { label: 'Job for Experienced', page: 'CarrierExperienced' },
//     { label: 'Problems we solve', page: 'CarrierProblems' },
//   ]

//   return (
//     <>
//       <CareerNavigationBar links={links} navigateTo={navigateTo} />
//       {/* Push content down to avoid navbar overlap */}
//       <div className="h-[80px] md:h-[80px]"></div>
//       <section className="w-full h-0"></section>
//       <JobOpenings></JobOpenings>
//     </>
//   )
// }

// export default CarrierExperienced
import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import JobOpenings from "./jobs/JobOpeningsExperince";

// ✅ Removed interface since we don't need props anymore
const CarrierExperienced = () => {
  const links = [
    { label: "Home", path: "/careers" },
    { label: "Life at CJSS", path: "/life-at-cjss" },
    { label: "Job for Fresher", path: "/careers/fresher" },
    { label: "Job for Experienced", path: "/careers/experienced" },
    { label: "Problems we solve", path: "/problemsWeSolve" },
  ];

  return (
    <>
      <CareerNavigationBar links={links} activePage="/careers/jobs" />

      <div className="h-[90px] md:h-[90px]"></div>

      <JobOpenings />
    </>
  );
};

export default CarrierExperienced;
