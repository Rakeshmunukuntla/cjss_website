// // MentorStoriesSection.tsx
// import { useEffect, useState } from 'react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import { Autoplay, Pagination } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react'

// interface Mentor {
//   id: number
//   name: string
//   role: string
//   image: string
//   shortStory: string
//   fullStory: string
// }

// const mentors: Mentor[] = [
//   {
//     id: 1,
//     name: 'Rohit Sharma',
//     role: 'Senior UI/UX Lead',
//     image: '/images/rahul.png',
//     shortStory: 'How I transformed my design journey at CJSS.',
//     fullStory:
//       "Rohit's story begins with passion for design and grows into leadership across global clients...",
//   },
//   {
//     id: 2,
//     name: 'Anjali Rao',
//     role: 'Tech Lead – SAP Commerce',
//     image: '/images/priya.png',
//     shortStory: 'Growing from developer to tech lead.',
//     fullStory:
//       "Anjali's deep engineering strength combined with CJSS mentorship shaped her leadership skills...",
//   },
//   {
//     id: 3,
//     name: 'Kiran Kumar',
//     role: 'Backend Engineering Lead',
//     image: '/images/raman.png',
//     shortStory: 'Built enterprise systems from the ground up.',
//     fullStory:
//       "Kiran's engineering discipline and curiosity propelled him to lead backend teams...",
//   },
//   // duplicates for demo slides (optional)
//   {
//     id: 4,
//     name: 'Rohit Sharma',
//     role: 'Senior UI/UX Lead',
//     image: '/images/rahul.png',
//     shortStory: 'How I transformed my design journey at CJSS.',
//     fullStory:
//       "Rohit's story begins with passion for design and grows into leadership across global clients...",
//   },
//   {
//     id: 5,
//     name: 'Anjali Rao',
//     role: 'Tech Lead – SAP Commerce',
//     image: '/images/priya.png',
//     shortStory: 'Growing from developer to tech lead.',
//     fullStory:
//       "Anjali's deep engineering strength combined with CJSS mentorship shaped her leadership skills...",
//   },
//   {
//     id: 6,
//     name: 'Kiran Kumar',
//     role: 'Backend Engineering Lead',
//     image: '/images/raman.png',
//     shortStory: 'Built enterprise systems from the ground up.',
//     fullStory:
//       "Kiran's engineering discipline and curiosity propelled him to lead backend teams...",
//   },
// ]

// const MentorStoriesSection = () => {
//   const [openStory, setOpenStory] = useState<Mentor | null>(null)
//   const [typingText, setTypingText] = useState('')
//   const fullText = 'Career Growth & Mentor Stories'

//   // Typewriter for heading
//   useEffect(() => {
//     let i = 0
//     const t = setInterval(() => {
//       if (i < fullText.length) {
//         setTypingText(fullText.slice(0, i + 1))
//         i++
//       } else {
//         clearInterval(t)
//       }
//     }, 35)
//     return () => clearInterval(t)
//   }, [])

//   // Track cursor globally to feed card light
//   useEffect(() => {
//     const onMove = (e: MouseEvent) => {
//       document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
//       document.documentElement.style.setProperty('--my', `${e.clientY}px`)
//     }
//     window.addEventListener('mousemove', onMove)
//     return () => window.removeEventListener('mousemove', onMove)
//   }, [])

//   return (
//     <section
//       // className="w-full px-8 overflow-visible text-white py-28"
//       className="px-6 py-28"
//       // style={{
//       //   // grid background for whole section (user provided style)
//       //   backgroundImage:
//       //     'linear-gradient(transparent 79px, rgba(148, 163, 184, 0.08) 80px), linear-gradient(90deg, transparent 79px, rgba(148, 163, 184, 0.08) 80px)',
//       //   backgroundSize: '80px 80px',
//       //   backgroundColor: 'rgba(2,6,23,1)',
//       // }}
//     >
//       {/* Heading */}
//       <h2 className="mb-12 text-5xl font-extrabold text-center select-none">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-400">
//           {typingText}
//         </span>
//         <span className="ml-1 border-r-2 border-purple-400 animate-pulse"></span>
//       </h2>

//       {/* Swiper */}
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         spaceBetween={40}
//         autoplay={{ delay: 3000 }}
//         speed={800}
//         pagination={{ clickable: true, el: '.mentor-pagination' }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="mx-auto max-w-7xl"
//       >
//         {mentors.map((mentor) => (
//           <SwiperSlide key={mentor.id}>
//             {/* Card */}
//             <div
//               className="relative p-5 overflow-visible cursor-pointer mentor-card group rounded-2xl"
//               // card default appearance (B style): blue-purple glossy panel
//               style={{
//                 background:
//                   'linear-gradient(180deg, rgba(32,58,84,0.95) 0%, rgba(22,46,72,0.95) 50%, rgba(18,36,62,0.95) 100%)',
//                 border: '1px solid rgba(255,255,255,0.04)',
//                 boxShadow: '0 12px 30px rgba(3,15,30,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
//                 transition: 'transform 320ms cubic-bezier(.2,.9,.2,1), box-shadow 320ms',
//                 perspective: '1000px',
//               }}
//               onMouseMove={(e) => {
//                 // 3D tilt - subtle - only transform the card, not the whole layout
//                 const el = e.currentTarget as HTMLDivElement
//                 const rect = el.getBoundingClientRect()
//                 const px = (e.clientX - rect.left) / rect.width
//                 const py = (e.clientY - rect.top) / rect.height
//                 const rotateY = (px - 0.5) * 8 // degrees
//                 const rotateX = (py - 0.5) * -6
//                 el.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
//                 // update local CSS vars for radial light
//                 el.style.setProperty('--lx', `${e.clientX - rect.left}px`)
//                 el.style.setProperty('--ly', `${e.clientY - rect.top}px`)
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget as HTMLDivElement
//                 el.style.transform = `translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)`
//                 // remove local vars (optional)
//               }}
//             >
//               {/* Decorative top glossy arc (behind image) */}
//               <div
//                 aria-hidden
//                 style={{
//                   position: 'absolute',
//                   inset: '-6px -6px auto -6px',
//                   height: '28px',
//                   borderTopLeftRadius: '22px',
//                   borderTopRightRadius: '22px',
//                   background:
//                     'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(140,180,255,0.02) 40%, rgba(255,255,255,0.03))',
//                   pointerEvents: 'none',
//                   mixBlendMode: 'overlay',
//                 }}
//               />

//               {/* Cursor-follow soft neon light (local to card) */}
//               <div
//                 className="absolute inset-0 pointer-events-none rounded-2xl"
//                 style={{
//                   background:
//                     'radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(0,210,255,0.12), transparent 30%)',
//                   transition: 'opacity 300ms',
//                 }}
//               />

//               {/* Holographic edge glow (subtle) */}
//               <div
//                 aria-hidden
//                 style={{
//                   position: 'absolute',
//                   inset: 0,
//                   borderRadius: '18px',
//                   boxShadow:
//                     '0 10px 40px rgba(0,130,200,0.12), inset 0 0 30px rgba(20,120,200,0.06)',
//                   pointerEvents: 'none',
//                   mixBlendMode: 'screen',
//                 }}
//               />

//               {/* Image */}
//               <div
//                 className="w-full overflow-hidden rounded-xl"
//                 style={{
//                   boxShadow: 'inset 0 14px 40px rgba(0,0,0,0.55)',
//                 }}
//               >
//                 <img
//                   src={mentor.image}
//                   alt={mentor.name}
//                   className="block object-cover w-full h-56 rounded-xl"
//                 />
//               </div>

//               {/* Content */}
//               <div className="relative z-10 mt-5 text-center">
//                 <h3
//                   className="text-xl font-bold"
//                   style={{
//                     color: 'white',
//                     textShadow: '0 6px 18px rgba(0,100,170,0.12)',
//                   }}
//                 >
//                   {mentor.name}
//                 </h3>
//                 <p className="mt-1 text-sm text-white/60">{mentor.role}</p>
//                 <p className="mt-4 text-sm text-white/70">{mentor.shortStory}</p>

//                 {/* Magnetic Button */}
//                 <button
//                   onClick={() => setOpenStory(mentor)}
//                   onMouseMove={(ev) => {
//                     const btn = ev.currentTarget as HTMLButtonElement
//                     const rect = btn.getBoundingClientRect()
//                     const x = ev.clientX - rect.left - rect.width / 2
//                     const y = ev.clientY - rect.top - rect.height / 2
//                     btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
//                   }}
//                   onMouseLeave={(ev) => {
//                     const btn = ev.currentTarget as HTMLButtonElement
//                     btn.style.transform = 'translate(0,0)'
//                   }}
//                   className="inline-block px-6 py-2 mt-5 font-semibold tracking-wide text-black transition-all rounded-full"
//                   style={{
//                     background: 'linear-gradient(90deg,#37c2ff,#6a9bff)',
//                     boxShadow: '0 10px 28px rgba(44,156,255,0.18)',
//                   }}
//                 >
//                   Read Story →
//                 </button>
//               </div>

//               {/* Hover glossy overlay (activated by CSS below) */}
//               <div
//                 aria-hidden
//                 className="absolute inset-0 pointer-events-none rounded-2xl"
//                 style={{
//                   background:
//                     'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(120,160,255,0.04) 35%, rgba(0,140,255,0.06) 100%)',
//                   opacity: 0,
//                   transition: 'opacity 420ms ease',
//                 }}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom pagination container */}
//       <div className="mt-6 mentor-pagination" />

//       {/* Modal */}
//       {openStory && (
//         <div
//           className="fixed inset-0 z-[9999] flex items-start justify-center px-6 py-20"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div
//             className="absolute inset-0"
//             style={{
//               background: 'radial-gradient(circle at 50% 30%, rgba(5,20,35,0.8), rgba(0,0,0,0.92))',
//               backdropFilter: 'blur(14px)',
//             }}
//             onClick={() => setOpenStory(null)}
//           />
//           <div
//             className="relative z-10 max-w-3xl w-full rounded-[28px] p-12"
//             style={{
//               background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
//               border: '1px solid rgba(255,255,255,0.05)',
//               boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
//             }}
//           >
//             <button
//               onClick={() => setOpenStory(null)}
//               className="absolute text-3xl right-6 top-6 text-white/70 hover:text-white/90"
//               aria-label="Close"
//             >
//               ✕
//             </button>

//             <h3
//               className="mb-2 text-4xl font-extrabold"
//               style={{ color: 'white', filter: 'drop-shadow(0 6px 20px rgba(0,120,200,0.18))' }}
//             >
//               {openStory.name}
//             </h3>
//             <p className="mb-6 text-lg text-white/60">{openStory.role}</p>
//             <p className="leading-relaxed text-white/85">{openStory.fullStory}</p>

//             <div
//               className="mt-8 h-[2px]"
//               style={{
//                 background:
//                   'linear-gradient(90deg, transparent, rgba(0,150,255,0.18), transparent)',
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {/* Scoped styles */}
//       <style>{`
//         /* custom pagination (pills & dots) */
//         .mentor-pagination {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 12px;
//         }

//         /* we still let Swiper create bullets inside our container.
//            When swiperd injects .swiper-pagination-bullet into .mentor-pagination it will style */
//         .mentor-pagination .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: rgba(120,140,160,0.28);
//           opacity: 1;
//           border-radius: 50%;
//           transition: all 250ms ease;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.35) inset;
//         }

//         .mentor-pagination .swiper-pagination-bullet-active {
//           width: 36px;
//           height: 10px;
//           border-radius: 10px;
//           background: linear-gradient(90deg, #2fe3ff, #4b8bff);
//           box-shadow: 0 8px 26px rgba(64,200,255,0.18);
//         }

//         /* hide default injected pagination placed outside our container (if present) */
//         .swiper-pagination:not(.mentor-pagination) { display: none !important; }

//         /* subtle hover overlay effect: target the overlay inside card */
//         .mentor-card {
//           will-change: transform;
//           transform-origin: center;
//           border-radius: 18px;
//         }
//         .mentor-card > div[aria-hidden] {
//           /* overlay is the last child - keep it hidden by default */
//         }

//         /* show overlay (the 2nd absolute) on hover via group hover */
//         .mentor-card:hover > div[aria-hidden] {
//           opacity: 1 !important;
//         }

//         /* ensure image rounding doesn't clip glow */
//         .mentor-card img {
//           display: block;
//         }

//         /* small responsive adjustments */
//         @media (max-width: 768px) {
//           .mentor-card { transform: none !important; }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default MentorStoriesSection

// MentorStoriesSection.tsx
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Mentor {
  id: number
  name: string
  role: string
  image: string
  shortStory: string
  fullStory: string
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Rohit Sharma',
    role: 'Senior UI/UX Lead',
    image: '/images/rahul.png',
    shortStory: 'How I transformed my design journey at CJSS.',
    fullStory: "Rohit's story begins with passion...",
  },
  {
    id: 2,
    name: 'Anjali Rao',
    role: 'Tech Lead – SAP Commerce',
    image: '/images/priya.png',
    shortStory: 'Growing from developer to tech lead.',
    fullStory: "Anjali's deep engineering strength...",
  },
  {
    id: 3,
    name: 'Kiran Kumar',
    role: 'Backend Engineering Lead',
    image: '/images/raman.png',
    shortStory: 'Built enterprise systems from the ground up.',
    fullStory: "Kiran's engineering discipline...",
  },
  {
    id: 4,
    name: 'Rohit Sharma',
    role: 'Senior UI/UX Lead',
    image: '/images/rahul.png',
    shortStory: 'How I transformed my design journey at CJSS.',
    fullStory: '...',
  },
  {
    id: 5,
    name: 'Anjali Rao',
    role: 'Tech Lead – SAP Commerce',
    image: '/images/priya.png',
    shortStory: 'Growing from developer to tech lead.',
    fullStory: '...',
  },
  {
    id: 6,
    name: 'Kiran Kumar',
    role: 'Backend Engineering Lead',
    image: '/images/raman.png',
    shortStory: 'Built enterprise systems from the ground up.',
    fullStory: '...',
  },
]

const MentorStoriesSection = () => {
  const [openStory, setOpenStory] = useState<Mentor | null>(null)
  const [typingText, setTypingText] = useState('')
  const fullText = 'Career Growth & Mentor Stories'

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1))
        i++
      } else clearInterval(t)
    }, 35)
    return () => clearInterval(t)
  }, [])

  // Mouse light tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="w-full px-4 py-20 overflow-visible sm:px-6 sm:py-28">
      {/* Heading */}
      <h2 className="mb-10 text-3xl font-extrabold text-center select-none sm:mb-12 sm:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-400">
          {typingText}
        </span>
        <span className="ml-1 border-r-2 border-purple-400 animate-pulse"></span>
      </h2>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{ delay: 3000 }}
        speed={800}
        pagination={{ clickable: true, el: '.mentor-pagination' }}
        breakpoints={{
          480: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mx-auto max-w-7xl"
      >
        {mentors.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <div
              className="relative p-5 overflow-visible cursor-pointer sm:p-6 mentor-card group rounded-2xl"
              style={{
                background: 'linear-gradient(180deg, rgba(32,58,84,0.95), rgba(22,46,72,0.95))',
                border: '1px solid rgba(255,255,255,0.04)',
                boxShadow: '0 12px 30px rgba(3,15,30,0.6)',
                transition: 'transform 320ms',
                perspective: '1000px',
              }}
              onMouseMove={(e) => {
                if (window.innerWidth < 768) return // Disable tilt on small screens
                const el = e.currentTarget
                const rect = el.getBoundingClientRect()
                const px = (e.clientX - rect.left) / rect.width
                const py = (e.clientY - rect.top) / rect.height
                el.style.transform = `translateY(-6px) rotateX(${(py - 0.5) * -6}deg) rotateY(${
                  (px - 0.5) * 8
                }deg) scale(1.03)`
                el.style.setProperty('--lx', `${e.clientX - rect.left}px`)
                el.style.setProperty('--ly', `${e.clientY - rect.top}px`)
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >
              {/* glossy top */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: '-6px -6px auto -6px',
                  height: '28px',
                  borderTopLeftRadius: '22px',
                  borderTopRightRadius: '22px',
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                  pointerEvents: 'none',
                }}
              />

              {/* Cursor light */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background:
                    'radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(0,210,255,0.12), transparent 30%)',
                }}
              />

              {/* Image */}
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="block object-cover w-full h-48 sm:h-56 rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-5 text-center">
                <h3 className="text-lg font-bold text-white sm:text-xl">{mentor.name}</h3>
                <p className="mt-1 text-sm text-white/60">{mentor.role}</p>
                <p className="mt-3 text-sm text-white/70">{mentor.shortStory}</p>

                <button
                  onClick={() => setOpenStory(mentor)}
                  onMouseMove={(ev) => {
                    if (window.innerWidth < 768) return // Disable on mobile only
                    const btn = ev.currentTarget as HTMLButtonElement
                    const rect = btn.getBoundingClientRect()
                    const x = ev.clientX - rect.left - rect.width / 2
                    const y = ev.clientY - rect.top - rect.height / 2
                    btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
                  }}
                  onMouseLeave={(ev) => {
                    const btn = ev.currentTarget as HTMLButtonElement
                    btn.style.transform = 'translate(0,0)'
                  }}
                  className="relative inline-block px-6 py-2 mt-5 font-semibold tracking-wide text-black transition-all duration-300 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg,#37c2ff,#6a9bff)',
                    boxShadow: '0 10px 28px rgba(44,156,255,0.18)',
                  }}
                >
                  Read Story →
                </button>
              </div>

              {/* hover glossy overlay */}
              <div
                aria-hidden
                className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,140,255,0.06))',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 mentor-pagination" />

      {/* Modal */}
      {openStory && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center px-4 sm:px-6 py-10 sm:py-20">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle, rgba(5,20,35,0.8), rgba(0,0,0,0.92))',
              backdropFilter: 'blur(14px)',
            }}
            onClick={() => setOpenStory(null)}
          />

          <div
            className="relative z-10 w-full max-w-xl p-6 sm:max-w-3xl rounded-2xl sm:p-12"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <button
              onClick={() => setOpenStory(null)}
              className="absolute text-2xl sm:text-3xl right-4 top-4 text-white/70"
            >
              ✕
            </button>

            <h3 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl">
              {openStory.name}
            </h3>
            <p className="mb-6 text-white/60">{openStory.role}</p>
            <p className="text-sm leading-relaxed text-white/85 sm:text-base">
              {openStory.fullStory}
            </p>
          </div>
        </div>
      )}

      {/* Pagination styles */}
      <style>{`
        .mentor-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }
        .mentor-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(120,140,160,0.28);
          opacity: 1;
          border-radius: 50%;
        }
        .mentor-pagination .swiper-pagination-bullet-active {
          width: 36px;
          height: 10px;
          border-radius: 10px;
          background: linear-gradient(90deg,#2fe3ff,#4b8bff);
        }
      `}</style>
    </section>
  )
}

export default MentorStoriesSection
