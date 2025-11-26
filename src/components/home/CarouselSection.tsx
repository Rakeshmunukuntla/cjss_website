import { ThreeDImageCarousel } from "../ThreeDImageCarousel"

interface CarouselSlide {
  id: number
  src: string
  href: string
  title: string
  service: string
}

interface CarouselSectionProps {
  navigateTo?: (page: string) => void
}

export const CarouselSection = ({ navigateTo }: CarouselSectionProps) => {
  const slides: CarouselSlide[] = [
    {
      id: 1,
      src: "public/images/AEM.png",
      href: "service-digital-platforms",
      title: "Adobe Experience Manager",
      service: "digital-platforms",
    },
    {
      id: 2,
      src: "public/images/SAP.jpg",
      href: "service-digital-platforms",
      title: "SAP Solutions",
      service: "digital-platforms",
    },
    {
      id: 3,
      src: "public/images/AMS.png",
      href: "service-application-services",
      title: "Application Managed Services",
      service: "application-services",
    },
    {
      id: 4,
      src: "public/images/AEM.png",
      href: "service-digital-platforms",
      title: "Adobe Experience Manager",
      service: "digital-platforms",
    },
    {
      id: 5,
      src: "public/images/SAP.jpg",
      href: "service-digital-platforms",
      title: "SAP Solutions",
      service: "digital-platforms",
    },
  ]

  const handleReadMore = (slide: CarouselSlide) => {
    if (navigateTo) {
      navigateTo(slide.href)
    }
  }

  return (
    <section className="relative w-full py-20 bg-neutral-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl animate-orbFloat"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-2xl animate-breathe" style={{ animationDuration: "8s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slideUp">
            Featured Projects
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Explore our latest work and see how we bring ideas to life
          </p>
        </div>

        <div className="w-full flex justify-center animate-fadeInScale" style={{ animationDelay: "0.4s" }}>
          <ThreeDImageCarousel 
            slides={slides as any}
            itemCount={5}
            autoplay={true}
            delay={4}
            pauseOnHover={true}
            className="w-full"
            onReadMore={handleReadMore as any}                             
          />
        </div>
      </div>
    </section>
  )
}

export default CarouselSection