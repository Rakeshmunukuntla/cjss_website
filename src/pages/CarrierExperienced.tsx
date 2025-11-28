// import React from 'react';
interface CarrierExperiencedProps {
  navigateTo: (page: string) => void;
}
const CarrierExperienced = ({ navigateTo }: CarrierExperiencedProps) => {
  const links = [
    { label: 'Home', page: 'CarrierHome' },
    { label: 'Life', page: 'CarrierLife' }, // 👈 must match App key
    { label: 'Job Fresher', page: 'CarrierFresher' }, // or whatever you use
    { label: 'Job Experience', page: 'CarrierExperienced' },
    { label: 'Problems', page: 'CarrierProblems' },
  ];

  return (
    <>
      <h1>THis is carrer Experienced</h1>
      <h1>THis is carrer Experienced</h1>
      <h1>THis is carrer Experienced</h1>
      <h1>THis is carrer Experienced</h1>

      {/* NAVBAR – small + fixed to viewport */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="flex items-center justify-end w-full gap-6 px-6 py-2 mx-auto max-w-7xl">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => navigateTo(link.page)}
              className="text-xs font-semibold transition-colors text-white/75 md:text-sm hover:text-purple-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default CarrierExperienced;
