import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import JobOpenings from "./jobs/JobOpeningsExperince";

// import React from 'react';
interface CarrierExperiencedProps {
  navigateTo: (page: string) => void;
}
const CarrierExperienced = ({ navigateTo }: CarrierExperiencedProps) => {
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life", page: "CarrierLife" }, // 👈 must match App key
    { label: "Job Fresher", page: "CarrierFresher" }, // or whatever you use
    { label: "Job Experience", page: "CarrierExperienced" },
    { label: "Problems", page: "CarrierProblems" },
  ];

  return (
    <>
      <CareerNavigationBar links={links} navigateTo={navigateTo} />
      <section className="w-full h-28">
        <p>Career Experienced</p>
      </section>
    </>
  );
};

export default CarrierExperienced;
