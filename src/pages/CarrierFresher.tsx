import CareerNavigationBar from "@/components/Career/CareeerNavigationBar";
import JobOpenings from "./jobs/JobOpeningsFresher";

interface CarrierFresherProps {
  navigateTo: (page: string) => void;
}

const CarrierFresher = ({ navigateTo }: CarrierFresherProps) => {
  const links = [
    { label: "Home", page: "CarrierHome" },
    { label: "Life at CJSS", page: "CarrierLife" },
    { label: "Jobs", page: "CarrierFresher" },
    // { label: "Job for Experienced", page: "CarrierExperienced" },
    { label: "Problems we solve", page: "CarrierProblems" },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Subtle gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating lights (hidden on mobile) */}
      <div className="hidden md:block fixed top-20 left-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="hidden md:block fixed bottom-20 right-10 w-[350px] h-[350px] bg-purple-500/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <CareerNavigationBar links={links} navigateTo={navigateTo} />

      {/* Push content down to avoid navbar overlap */}
      <div className="h-[80px] md:h-[80px]" />

      {/* Main content */}
      <main className="relative z-10">
        <JobOpenings />
      </main>
    </div>
  );
};

export default CarrierFresher;
