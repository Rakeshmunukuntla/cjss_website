import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import JobOpenings from "./jobs/JobOpeningsFresher";
// import React from 'react';
interface CarrierFresherProps {
  navigateTo: (page: string) => void;
}
const CarrierFresher = ({ navigateTo }: CarrierFresherProps) => {
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
        <p>Career Fresher</p>
      </section>
    </>
  );
};

export default CarrierFresher;
