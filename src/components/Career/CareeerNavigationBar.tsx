// CareerNavigationBar.tsx

interface CareerNavigationBarProps {
  links: { label: string; page: string }[]
  navigateTo: (page: string) => void
  activePage?: string // <-- optional auto-detect
}

const CareerNavigationBar = ({ links, navigateTo, activePage }: CareerNavigationBarProps) => {
  return (
    <>
      <style>
        {`
          @keyframes navFall {
            0% { opacity: 0; transform: translateY(-12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .nav-link-fall {
            opacity: 0;
            animation: navFall 0.35s ease-out forwards;
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-[9999] h-[86px] flex items-center font-poppins bg-neutral-950/50 backdrop-blur-xl">
        <div className="flex items-center justify-end w-full mx-auto gap-14 px-14 max-w-7xl">
          {links.map((link, index) => {
            const isActive = activePage === link.page

            return (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                className="relative text-sm font-light tracking-wide transition-colors duration-300 group nav-link-fall md:text-base"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span
                  className={`
                    inline-block transition-all duration-300
                    ${
                      isActive
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300'
                        : 'text-white/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-300'
                    }
                  `}
                >
                  {link.label}
                </span>

                <span
                  className={`
                    absolute left-1/2 -bottom-[6px] h-[2px] w-0 rounded-full
                    bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300
                    transition-all duration-300 ease-out
                    ${isActive ? 'w-full left-0' : 'group-hover:w-full group-hover:left-0'}
                  `}
                />
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default CareerNavigationBar
