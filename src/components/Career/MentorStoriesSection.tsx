import { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { createPortal } from "react-dom";
import type { Swiper as SwiperType } from "swiper";

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  shortStory: string;
  fullStory: string;
  yearsAtCompany: string;
  achievements: string[];
  quote: string;
}

// export const mentors: Mentor[] = [
//   {
//     //   id: 1,
//     //   name: "Venkat K",
//     //   role: "Director",
//     //   image: "/images/Krishna3.jpg",
//     //   shortStory: "Driving strategic direction and delivery excellence.",
//     //   fullStory:
//     //     "Venkat provides strategic leadership across CJSS, aligning business vision with execution excellence. He works closely with clients and leadership teams to ensure long-term growth, operational discipline, and strong delivery outcomes.",
//     //   yearsAtCompany: "10+ Years",
//     //   achievements: ["Enterprise leadership", "Client partnerships"],
//     //   quote: "Strong leadership is about clarity, trust, and execution.",
//     // },
//     // {
//     //   id: 2,
//     //   name: "Srikanth Banthu",
//     //   role: "Director",
//     //   image: "/images/Srikanth_2.png",
//     //   shortStory: "Leading business transformation through technology.",
//     //   fullStory:
//     //     "Srikanth drives enterprise transformation by combining technology strategy with operational excellence. He focuses on scaling delivery models, improving execution maturity, and ensuring sustained customer success.",
//     //   yearsAtCompany: "9+ Years",
//     //   achievements: ["Digital transformation", "Team scaling"],
//     //   quote: "Technology succeeds when it solves real business problems.",
//     // },
//     // {
//     id: 3,
//     name: "Narmendran Yentrapati",
//     role: "Program Manager",
//     image: "/images/narmen.png",
//     shortStory: "Managing complex programs with precision.",
//     fullStory:
//       "Narmendran leads large, multi-stream enterprise programs with strong governance and predictability. He ensures alignment across stakeholders, mitigates risks, and delivers programs on time and within scope.",
//     yearsAtCompany: "7+ Years",
//     achievements: ["Program governance", "Stakeholder management"],
//     quote: "Successful programs are built on trust and discipline.",
//   },
//   {
//     id: 4,
//     name: "Sathyanarayana Y",
//     role: "Solution Architect (Manager)",
//     image: "/images/sathyasir.jpeg",
//     shortStory: "Designing scalable and future-ready architectures.",
//     fullStory:
//       "Sathyanarayana leads enterprise solution architecture with a focus on scalability, security, and performance. He translates complex business requirements into robust technical designs while mentoring architects and engineers.",
//     yearsAtCompany: "8+ Years",
//     achievements: ["Enterprise architecture", "Technical mentoring"],
//     quote: "Good architecture balances today's needs with tomorrow's growth.",
//   },
//   {
//     id: 5,
//     name: "Jagadeesh Guddati",
//     role: "SAP CX Lead",
//     image: "/images/jairam.png",
//     shortStory: "Leading customer-centric SAP CX platforms.",
//     fullStory:
//       "Jagadeesh heads SAP CX initiatives, delivering scalable and high-performing commerce platforms. He ensures best practices across SAP Commerce implementations for global clients.",
//     yearsAtCompany: "8+ Years",
//     achievements: ["SAP Commerce delivery", "Team leadership"],
//     quote:
//       "Customer experience is the true differentiator in digital commerce.",
//   },
//   {
//     id: 6,
//     name: "Anjalimohan Uppu",
//     role: "SAP CX Lead",
//     image: "/images/anjalimohan.png",
//     shortStory: "Delivering reliable and scalable SAP CX solutions.",
//     fullStory:
//       "Anjalimohan focuses on building stable, high-quality SAP CX solutions with emphasis on performance and maintainability. He ensures consistent delivery and long-term platform reliability.",
//     yearsAtCompany: "7+ Years",
//     achievements: ["Platform stability", "SAP CX quality"],
//     quote: "Quality and consistency define long-term success.",
//   },
//   {
//     id: 7,
//     name: "Saikiran Vemula",
//     role: "SAP TechOps Lead",
//     image: "/images/saikiran.png",
//     shortStory: "Ensuring SAP platform stability and reliability.",
//     fullStory:
//       "Saikiran leads SAP TechOps with focus on monitoring, automation, and operational excellence. He ensures smooth deployments and proactive issue resolution across enterprise environments.",
//     yearsAtCompany: "6+ Years",
//     achievements: ["System reliability", "Monitoring automation"],
//     quote: "Operations excellence is invisible when done right.",
//   },
//   {
//     id: 8,
//     name: "Anusha Banthu",
//     role: "AEM Lead",
//     image: "/images/anusha.png",
//     shortStory: "Building engaging content-driven digital platforms.",
//     fullStory:
//       "Anusha leads Adobe Experience Manager initiatives, enabling efficient content authoring and publishing. She collaborates with design and marketing teams to deliver scalable digital experiences.",
//     yearsAtCompany: "6+ Years",
//     achievements: ["AEM delivery", "Content platforms"],
//     quote: "Great digital experiences start with great content platforms.",
//   },
//   {
//     id: 9,
//     name: "Srinivas Moole",
//     role: "AI Architect",
//     image: "/images/srinivasmoole.jpg",
//     shortStory: "Designing practical and scalable AI solutions.",
//     fullStory:
//       "Srinivas leads AI architecture and data-driven initiatives, designing intelligent systems that integrate with enterprise platforms. His focus is on real-world, production-ready AI solutions.",
//     yearsAtCompany: "7+ Years",
//     achievements: ["AI architecture", "ML integration"],
//     quote: "AI succeeds when it is practical, scalable, and responsible.",
//   },
//   {
//     id: 10,
//     name: "Satishkumar Battula",
//     role: "Trex Lead (Java)",
//     image: "/images/satish.png",
//     shortStory: "Leading scalable backend systems with Java.",
//     fullStory:
//       "Satishkumar drives backend development for the Trex platform using Java. He focuses on clean architecture, performance, and reliability while mentoring backend engineers.",
//     yearsAtCompany: "6+ Years",
//     achievements: ["Backend leadership", "Java systems"],
//     quote: "Strong foundations make scalable systems possible.",
//   },
//   {
//     id: 11,
//     name: "Lekhya Pypuri",
//     role: "QA Lead (Manual)",
//     image: "/images/lekhya.png",
//     shortStory: "Ensuring quality through disciplined testing.",
//     fullStory:
//       "Lekhya leads manual QA efforts with structured testing strategies and strong attention to detail. She ensures product quality, usability, and dependable releases.",
//     yearsAtCompany: "5+ Years",
//     achievements: ["QA strategy", "Defect prevention"],
//     quote: "Quality is built through discipline and care.",
//   },
//   {
//     id: 12,
//     name: "Tulika Srivastava",
//     role: "HR",
//     image: "/images/tulika.png",
//     shortStory: "Building a people-first workplace culture.",
//     fullStory:
//       "Tulika focuses on employee engagement, talent development, and organizational growth. She works closely with leadership to foster an inclusive and supportive work environment.",
//     yearsAtCompany: "4+ Years",
//     achievements: ["Talent development", "Culture building"],
//     quote: "Great companies are built by empowered people.",
//   },
//   {
//     id: 13,
//     name: "Vinay Manthani",
//     role: "Front-end Lead (React)",
//     image: "/images/vinay.jpg",
//     shortStory: "Delivering modern and intuitive React interfaces.",
//     fullStory:
//       "Vinay leads frontend architecture with focus on performance, usability, and code quality. He ensures scalable React applications with consistent and engaging user experiences.",
//     yearsAtCompany: "5+ Years",
//     achievements: ["React platforms", "UI consistency"],
//     quote: "User experience is built one interaction at a time.",
//   },
// ];

// Modal Component using Portal
// export const mentors: Mentor[] = [
//   {
//     id: 5,
//     name: "Anjalimohan Uppu",
//     role: "SAP CX Lead",
//     image: "/images/anjalimohan.png",
//     shortStory: "Delivering reliable and scalable SAP CX solutions.",
//     fullStory:
//       "Anjalimohan focuses on building stable, high-quality SAP CX solutions with emphasis on performance and maintainability. He ensures consistent delivery and long-term platform reliability.",
//     yearsAtCompany: "7+ Years",
//     achievements: ["Platform stability", "SAP CX quality"],
//     quote: "Quality and consistency define long-term success.",
//   },
//   {
//     id: 6,
//     name: "Saikiran Vemula",
//     role: "SAP TechOps Lead",
//     image: "/images/saikiran.png",
//     shortStory: "Ensuring SAP platform stability and reliability.",
//     fullStory:
//       "Saikiran leads SAP TechOps with focus on monitoring, automation, and operational excellence. He ensures smooth deployments and proactive issue resolution across enterprise environments.",
//     yearsAtCompany: "6+ Years",
//     achievements: ["System reliability", "Monitoring automation"],
//     quote: "Operations excellence is invisible when done right.",
//   },
//   {
//     id: 7,
//     name: "Anusha Banthu",
//     role: "AEM Lead",
//     image: "/images/anusha.png",
//     shortStory: "Building engaging content-driven digital platforms.",
//     fullStory:
//       "Anusha leads Adobe Experience Manager initiatives, enabling efficient content authoring and publishing. She collaborates with design and marketing teams to deliver scalable digital experiences.",
//     yearsAtCompany: "6+ Years",
//     achievements: ["AEM delivery", "Content platforms"],
//     quote: "Great digital experiences start with great content platforms.",
//   },
//   {
//     id: 8,
//     name: "Satishkumar Battula",
//     role: "Trex Lead (Java)",
//     image: "/images/satish.png",
//     shortStory: "Leading scalable backend systems with Java.",
//     fullStory:
//       "Satishkumar drives backend development for the Trex platform using Java. He focuses on clean architecture, performance, and reliability while mentoring backend engineers.",
//     yearsAtCompany: "6+ Years",
//     achievements: ["Backend leadership", "Java systems"],
//     quote: "Strong foundations make scalable systems possible.",
//   },
//   {
//     id: 9,
//     name: "Lekhya Pypuri",
//     role: "QA Lead (Manual)",
//     image: "/images/lekhya.png",
//     shortStory: "Ensuring quality through disciplined testing.",
//     fullStory:
//       "Lekhya leads manual QA efforts with structured testing strategies and strong attention to detail. She ensures product quality, usability, and dependable releases.",
//     yearsAtCompany: "5+ Years",
//     achievements: ["QA strategy", "Defect prevention"],
//     quote: "Quality is built through discipline and care.",
//   },
//   {
//     id: 10,
//     name: "Tulika Srivastava",
//     role: "HR",
//     image: "/images/tulika.png",
//     shortStory: "Building a people-first workplace culture.",
//     fullStory:
//       "Tulika focuses on employee engagement, talent development, and organizational growth. She works closely with leadership to foster an inclusive and supportive work environment.",
//     yearsAtCompany: "4+ Years",
//     achievements: ["Talent development", "Culture building"],
//     quote: "Great companies are built by empowered people.",
//   },
//   {
//     id: 11,
//     name: "Vinay Manthani",
//     role: "Front-end Lead (React)",
//     image: "/images/vinay.jpg",
//     shortStory: "Delivering modern and intuitive React interfaces.",
//     fullStory:
//       "Vinay leads frontend architecture with focus on performance, usability, and code quality. He ensures scalable React applications with consistent and engaging user experiences.",
//     yearsAtCompany: "5+ Years",
//     achievements: ["React platforms", "UI consistency"],
//     quote: "User experience is built one interaction at a time.",
//   },
// ];
export const mentors = [
  // {
  //   id: 5,
  //   name: "Anjali Mohan",
  //   role: "Lead SAP Commerce (Hybris) Customer Experience",
  //   image: "/images/anjalimohan.png",
  //   shortStory: "Leading scalable SAP Commerce customer experiences.",
  //   fullStory:
  //     "I joined CJSS Technologies four years ago, at a time when both the company and my role were evolving.\n\nFrom the beginning, I had the opportunity to work closely with SAP Commerce (Hybris) on real, live projects. What stood out to me was how quickly I was trusted with responsibility. I wasn’t just asked to deliver tasks — I was encouraged to understand the platform, the customer journeys, and the impact of what we were building.\n\nA lot of my learning came from everyday work. Design discussions, code reviews, and problem-solving sessions were constant, and I was always encouraged to ask questions and explore better approaches. That environment pushed me to think beyond implementation and focus on building scalable and reliable customer experience solutions.\n\nAs the projects grew, so did my role. I gradually moved into owning customer experience components, making technical decisions, and guiding delivery. Over time, my focus became firmly centered on SAP Hybris Customer Experience development, working across complex commerce flows and integrations.\n\nOne of the most meaningful parts of my journey has been contributing to enterprise platforms for clients like the Changi Group of Airports. Working at that scale brings a different level of responsibility — attention to detail, performance, and long-term stability really matter. Those experiences shaped how I approach both development and leadership.\n\nToday, I lead SAP Hybris Customer Experience initiatives at CJSS Technologies. I work closely with teams, mentor developers, and take ownership of quality and outcomes. The growth I’ve experienced here feels natural — driven by trust, learning, and consistent effort over time.\n\nCJSS Technologies has given me the space to grow, take ownership, and keep learning. It’s a journey that continues to challenge me, and one that I’m proud to be part of.",
  //   yearsAtCompany: "4+ Years",
  //   achievements: ["SAP CX Leadership", "Enterprise CX Delivery"],
  //   quote: "Quality and consistency define long-term success.",
  // },

  {
    id: 6,
    name: "Avinash",
    role: "Member – SAP CX Team",
    image: "/images/avinash.png",
    shortStory: "Growing through hands-on SAP Commerce experience.",
    fullStory:
      "Working with SAP Commerce (Hybris) at CJSS Technologies has been a steady journey of learning and growth.\n\nFrom the early days, I’ve been closely involved in building and enhancing customer experience solutions on SAP Commerce. The work here goes beyond implementation — it pushes you to understand how customer journeys, performance, and scalability come together in real enterprise platforms.\n\nOne thing that stands out to me at CJSS is the collaborative culture. Knowledge sharing is part of everyday work, whether it’s through design discussions, peer reviews, or problem-solving sessions within the team. That environment helped me strengthen my SAP CX foundation and gain confidence in handling complex requirements.\n\nAs my understanding of the platform grew, so did my responsibilities. I began contributing more actively to feature development, issue resolution, and overall experience improvements. Working closely with experienced leads helped me sharpen my technical thinking and approach challenges with a broader perspective.\n\nBeing part of projects for enterprise clients such as the Changi Group of Airports has been a valuable experience. It highlighted the importance of reliability, attention to detail, and delivering solutions that perform consistently at scale.\n\nToday, I am a member of the SAP CX team at CJSS Technologies, with solid hands-on knowledge of SAP Commerce and customer experience development. I continue to learn, collaborate, and contribute to building scalable commerce platforms alongside the team.\n\nCJSS Technologies has provided the right environment to grow steadily — through real projects, strong teamwork, and continuous learning. That’s what has made my journey here meaningful.",
    yearsAtCompany: "5+ Years",
    achievements: ["SAP CX Development", "Enterprise Platform Experience"],
    quote: "Growth comes from collaboration and real-world experience.",
  },

  // {
  //   id: 7,
  //   name: "Saikiran Vemula",
  //   role: "Lead – TechOps",
  //   image: "/images/saikiran.png",
  //   shortStory: "Driving operational excellence behind the scenes.",
  //   fullStory:
  //     "Keeping systems running smoothly is something I’ve always enjoyed, and CJSS Technologies gave me the space to turn that responsibility into impact.\n\nFrom the start, my focus has been on TechOps and operational excellence — making sure platforms, environments, and services work reliably for the teams that depend on them every day. The work isn’t always visible, but it’s critical. When systems are stable, teams can focus on building and delivering.\n\nWhat shaped my journey here is the level of ownership I was trusted with. Handling operations across projects meant understanding not just infrastructure, but also how development teams work, how deployments affect users, and how downtime impacts business. That pushed me to think beyond tasks and focus on reliability, performance, and continuous improvement.\n\nAs the company grew, the operational landscape became more complex. My role evolved into leading TechOps, supporting multiple teams and services, and ensuring that systems scale without compromising stability. Coordinating with developers, architects, and leadership became a key part of my work.\n\nToday, I lead the TechOps function at CJSS Technologies, handling operational services that support the entire organization. From environment management and deployments to monitoring and issue resolution, my responsibility is to ensure everything runs smoothly behind the scenes.\n\nWhat keeps this role interesting is the constant learning. Technology changes, systems grow, and expectations rise. CJSS Technologies provides an environment where operations are valued, collaboration is encouraged, and reliability is treated as a shared responsibility.\n\nBeing part of this journey has been rewarding, and it continues to challenge me in the best way.",
  //   yearsAtCompany: "6+ Years",
  //   achievements: ["Operational Excellence", "Platform Reliability"],
  //   quote: "Operations excellence is invisible when done right.",
  // },

  {
    id: 8,
    name: "Lekhya Pypuri",
    role: "Lead – Quality Assurance",
    image: "/images/lekhya.jpeg",
    shortStory: "Building trust through quality and discipline.",
    fullStory:
      "Quality has always been about more than testing for me — it’s about trust, consistency, and confidence in what we deliver. CJSS Technologies gave me the opportunity to build that mindset into the way teams work.\n\nOver time, my role evolved into leading the Quality Assurance function, where I work closely with testing teams, developers, and stakeholders to ensure quality is built into every stage of delivery. The focus isn’t just on finding defects, but on improving processes, strengthening test strategies, and enabling teams to deliver with confidence.\n\nWhat I value most here is collaboration. QA is involved early, not at the end. That approach helped us align better with development teams, improve test coverage, and reduce last-minute surprises. It also allowed the QA team to grow in skill and ownership.\n\nAs the organization scaled, so did the responsibility. Managing multiple projects, supporting enterprise clients, and maintaining consistent quality standards became a core part of my role. Leading the testing team means balancing detail with big-picture thinking — making sure quality never becomes an afterthought.\n\nToday, I lead the QA team at CJSS Technologies, overseeing testing efforts that support the company’s services and delivery commitments. I work closely with teams to ensure processes are clear, tools are effective, and quality remains a shared responsibility.\n\nCJSS Technologies has created an environment where QA is respected, voices are heard, and growth is continuous. Being part of this journey has been both challenging and rewarding — and it’s one I’m proud to be part of.",
    yearsAtCompany: "7+ Years",
    achievements: ["QA Leadership", "Process Excellence"],
    quote: "Quality is built through discipline and care.",
  },

  {
    id: 9,
    name: "Satishkumar",
    role: "Lead – Trex (Java Team)",
    image: "/images/sathish.png",
    shortStory: "Building strong and scalable backend systems.",
    fullStory:
      "Building strong backend systems has always been about clarity and discipline for me, and that’s exactly what my journey at CJSS Technologies has reinforced.\n\nWorking with Java-based systems and leading the Trex team has given me the opportunity to focus not just on development, but on how teams build, scale, and support reliable enterprise applications. From the beginning, the emphasis has been on clean design, maintainable code, and solutions that can grow with business needs.\n\nAs the team expanded, my role naturally moved into leadership. Handling the Trex Java team meant balancing hands-on technical work with mentoring, guiding design decisions, and supporting delivery across multiple projects. It also meant working closely with other teams to ensure backend services aligned well with overall system architecture.\n\nWhat I value most is the culture of collaboration. Discussions around design, performance, and best practices are encouraged, and teams are given the freedom to improve continuously. That environment helps developers grow in confidence while maintaining high technical standards.\n\nToday, I lead the Trex Java team at CJSS Technologies, overseeing development efforts that support the company’s services and client deliveries. My focus is on building strong teams, enabling consistent delivery, and ensuring that the systems we develop are reliable and scalable.\n\nCJSS Technologies has provided a space where technical leadership is valued and growth happens naturally through responsibility and trust. It’s a journey that continues to evolve, and one that I’m proud to be part of.",
    yearsAtCompany: "6+ Years",
    achievements: ["Java Leadership", "Backend Architecture"],
    quote: "Strong foundations make scalable systems possible.",
  },

  {
    id: 10,
    name: "Chaitanya",
    role: "Lead – Frontend",
    image: "/images/chaitanya.png",
    shortStory: "Delivering clear and scalable user experiences.",
    fullStory:
      "Great user experiences start with clarity, and that’s been the focus of my journey at CJSS Technologies.\n\nLeading the frontend team means thinking beyond screens and components. It’s about how users interact with platforms, how performance feels at scale, and how frontend architecture supports long-term growth. From early on, I’ve worked closely with teams to build interfaces that are intuitive, consistent, and reliable.\n\nWhat stands out at CJSS is the way frontend development is treated as a core part of delivery, not an afterthought. I’ve had the opportunity to guide teams on design systems, performance optimization, and best practices while staying hands-on with modern frontend technologies.\n\nAs the team grew, my role evolved into leading frontend delivery across projects. That includes mentoring developers, aligning frontend work with backend and platform teams, and ensuring quality across different user-facing applications.\n\nToday, I lead the Frontend team at CJSS Technologies, supporting the delivery of scalable and high-performing user interfaces across enterprise platforms. Collaboration is central to how we work — with designers, backend teams, and stakeholders — to ensure smooth and consistent user experiences.\n\nCJSS Technologies has created an environment where frontend engineers can grow, take ownership, and contribute meaningfully. Being part of this journey has been both challenging and rewarding, and it continues to push me to improve every day.",
    yearsAtCompany: "6+ Years",
    achievements: ["Frontend Leadership", "UX Consistency"],
    quote: "User experience is built one interaction at a time.",
  },
  {
    id: 11,
    name: "Devaraju Polasi",
    role: "Lead – AEM Developer",
    image: "/images/devaraju.png",
    shortStory:
      "Growing with CJSS by building scalable and reliable AEM backend solutions.",
    fullStory:
      "My journey at CJSS Technologies has been one of growth, learning, and long-term commitment. Being part of the organization from its early stages, I have had the unique opportunity to grow alongside the company and contribute to its evolution over the years.\n\nWhen I joined CJSS Technologies, the focus was on building strong foundations. As an AEM Backend Developer, my early responsibilities involved understanding the platform deeply and delivering reliable backend solutions using Adobe Experience Manager. Working on core AEM concepts such as OSGi services, Sling Models, workflows, schedulers, and integrations gave me a solid technical base and a clear understanding of enterprise-level content management systems.\n\nAs the company expanded, so did the scale and complexity of the projects. With that growth came greater responsibility. My role evolved from executing individual tasks to owning backend components, contributing to design decisions, and ensuring that implementations followed best practices. I became more involved in reviewing code, supporting deployments, troubleshooting production issues, and helping maintain stable and scalable AEM platforms.\n\nOver time, I also grew professionally in how I collaborated across teams. Working closely with frontend developers, QA, DevOps, and stakeholders helped me understand the complete delivery lifecycle. This exposure strengthened my ability to think beyond isolated features and focus on system reliability, performance, and long-term maintainability.\n\nWhat truly defines my experience at CJSS Technologies is the work culture. The organization promotes trust, ownership, and open communication. Developers are encouraged to ask questions, share ideas, and continuously improve. The leadership provides guidance while also allowing the freedom to take responsibility, which has played a key role in my technical and professional growth.\n\nToday, I continue to work as an AEM Backend Developer at CJSS Technologies, contributing to enterprise solutions that support both internal platforms and client deliveries. My focus is on building clean backend architectures, ensuring quality and consistency, and supporting the team with the experience I’ve gained over the years.\n\nLooking back, CJSS Technologies has been more than just a place of work for me—it has been a space where my skills, confidence, and mindset have evolved naturally. Growing with the company from its early days to where it stands today has been deeply rewarding, and it is a journey I am proud to be part of and continue forward.",
    yearsAtCompany: "4+ Years",
    achievements: [
      "AEM Backend Architecture",
      "Platform Stability & Scalability",
      "Code Quality & Best Practices",
    ],
    quote: "Growth comes from building, learning, and evolving together.",
  },
];

const MentorModal = ({
  mentor,
  onClose,
}: {
  mentor: Mentor;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
      style={{ paddingTop: "100px" }}
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative z-10 w-full max-w-xl mx-4 mb-10 sm:max-w-3xl rounded-2xl animate-modalSlideIn"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,20,0.98), rgba(10,10,10,0.98))",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute z-20 flex items-center justify-center w-10 h-10 text-2xl transition-all rounded-full right-4 top-4 text-white/70 hover:text-white hover:bg-white/10"
        >
          ✕
        </button>

        <div
          className="relative p-6 overflow-hidden sm:p-8 rounded-t-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(55,194,255,0.1), rgba(106,155,255,0.05))",
          }}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="flex-shrink-0">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="object-cover w-24 h-24 border-4 rounded-full shadow-lg sm:w-32 sm:h-32 border-white/20"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                {mentor.name}
              </h3>
              <p className="mt-1 text-lg text-cyan-300">{mentor.role}</p>
              <div className="flex items-center justify-center gap-2 mt-3 sm:justify-start">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-500/20 text-purple-300">
                  {mentor.yearsAtCompany}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <blockquote className="relative p-4 mb-6 italic border-l-4 rounded-r-lg bg-white/5 border-cyan-400">
            <span className="absolute text-4xl -left-1 -top-2 text-cyan-400/30">
              "
            </span>
            <p className="text-white/80">{mentor.quote}</p>
          </blockquote>

          <div className="mb-8">
            <h4 className="mb-4 text-lg font-bold text-white">My Journey</h4>
            <div className="space-y-4 text-sm leading-relaxed sm:text-base text-white/75">
              {mentor.fullStory.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {mentor.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                >
                  <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-500">
                    {index + 1}
                  </span>
                  <span className="text-sm text-white/80">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={onClose}
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
            >
              Close Story
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

interface MentorStoriesSectionProps {
  onModalOpen?: (isOpen: boolean) => void;
}

const MentorStoriesSection = ({ onModalOpen }: MentorStoriesSectionProps) => {
  const [openStory, setOpenStory] = useState<Mentor | null>(null);
  const [typingText, setTypingText] = useState("");
  const fullText = "Career Growth & Mentor Stories";
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    onModalOpen?.(openStory !== null);
  }, [openStory, onModalOpen]);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <section className="relative w-full px-4 py-20 overflow-visible bg-black sm:px-6 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <h2 className="mb-10 text-3xl font-extrabold text-center select-none sm:mb-12 sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-400">
              {typingText}
            </span>

            <span className="ml-1 border-r-2 border-purple-400 animate-pulse"></span>
          </h2>

          {/* Swiper Container with Navigation Buttons */}
          <div className="relative mx-auto max-w-7xl">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className={`absolute left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-all duration-300 -ml-2 sm:-ml-6 ${
                isBeginning
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-white/40"
              }`}
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={handleNext}
              disabled={isEnd}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-all duration-300 -mr-2 sm:-mr-6 ${
                isEnd
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-white/40"
              }`}
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* Swiper */}
            <div className="px-8 sm:px-12">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={24}
                autoplay={{
                  delay: 5000, // Increased from 3000ms to 5000ms (5 seconds)
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true, // Pauses autoplay when hovering
                }}
                speed={1000} // Increased transition speed for smoother feel
                pagination={{ clickable: true, el: ".mentor-pagination" }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                breakpoints={{
                  480: { slidesPerView: 1.2 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="mx-auto"
              >
                {mentors.map((mentor) => (
                  <SwiperSlide key={mentor.id}>
                    <div
                      className="relative p-5 overflow-visible cursor-pointer sm:p-6 mentor-card group rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(25,25,25,0.95), rgba(15,15,15,0.95))",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
                        transition: "transform 320ms",
                        perspective: "1000px",
                      }}
                      onMouseMove={(e) => {
                        if (window.innerWidth < 768) return;
                        const el = e.currentTarget;
                        const rect = el.getBoundingClientRect();
                        const px = (e.clientX - rect.left) / rect.width;
                        const py = (e.clientY - rect.top) / rect.height;
                        el.style.transform = `translateY(-6px) rotateX(${
                          (py - 0.5) * -6
                        }deg) rotateY(${(px - 0.5) * 8}deg) scale(1.03)`;
                        el.style.setProperty(
                          "--lx",
                          `${e.clientX - rect.left}px`,
                        );
                        el.style.setProperty(
                          "--ly",
                          `${e.clientY - rect.top}px`,
                        );
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.transform =
                          "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";
                      }}
                    >
                      <div
                        aria-hidden
                        style={{
                          position: "absolute",
                          inset: "-6px -6px auto -6px",
                          height: "28px",
                          borderTopLeftRadius: "22px",
                          borderTopRightRadius: "22px",
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                          pointerEvents: "none",
                        }}
                      />

                      <div
                        className="absolute inset-0 pointer-events-none rounded-2xl"
                        style={{
                          background:
                            "radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(0,210,255,0.15), transparent 30%)",
                        }}
                      />

                      <div className="w-full overflow-hidden rounded-xl">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="block w-full h-48 sm:h-56 object-cover object-[50%_20%] rounded-xl"
                        />
                      </div>

                      <div className="relative z-10 mt-5 text-center">
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                          {mentor.name}
                        </h3>
                        <p className="mt-1 text-sm text-white/60">
                          {mentor.role}
                        </p>
                        <p className="mt-3 text-sm text-white/70">
                          {mentor.shortStory}
                        </p>

                        <button
                          onClick={() => setOpenStory(mentor)}
                          className="mt-5 rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
                        >
                          Read Story →
                        </button>
                      </div>

                      <div
                        aria-hidden
                        className="absolute inset-0 transition duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,140,255,0.08))",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="mt-6 mentor-pagination" />
        </div>

        <style>{`
          .mentor-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }
          .mentor-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 6px;
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            border-radius: 9999px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .mentor-pagination .swiper-pagination-bullet:hover {
            background: rgba(255, 255, 255, 0.7);
          }
          .mentor-pagination .swiper-pagination-bullet-active {
            width: 24px;
            height: 6px;
            border-radius: 9999px;
            background: white;
          }
        `}</style>
      </section>

      {openStory && (
        <MentorModal mentor={openStory} onClose={() => setOpenStory(null)} />
      )}
    </>
  );
};

export default MentorStoriesSection;
