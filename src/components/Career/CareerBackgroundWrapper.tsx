export default function CareerBackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(transparent 79px, rgba(148,163,184,0.16) 80px), linear-gradient(90deg, transparent 79px, rgba(148,163,184,0.16) 80px)',
        backgroundSize: '80px 80px',
        backgroundColor: 'rgb(2,6,23)',
      }}
    >
      {/* soft top-right glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]"></div>

      {/* soft left bottom glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px]"></div>

      {children}
    </div>
  )
}
