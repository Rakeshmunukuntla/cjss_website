// components/MobileIsoBadge.tsx

const MobileIsoBadge = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <div className="bg-transparent">
        <img
          src="/images/intertek-iso.jpg"
          alt="Intertek ISO Certification"
          className="h-10 w-auto object-contain rounded opacity-95"
        />
      </div>
    </div>
  );
};

export default MobileIsoBadge;
