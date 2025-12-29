import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { createPortal } from "react-dom";

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

// const mentors: Mentor[] = [
//   {
//     id: 1,
//     name: "Rohit Sharma",
//     role: "Senior UI/UX Lead",
//     image: "/images/rahul.png",
//     shortStory: "How I transformed my design journey at CJSS.",
//     fullStory: `When I joined CJSS 5 years ago, I was a junior designer with big dreams but limited experience. The company saw potential in me and invested in my growth through mentorship programs, advanced training, and challenging projects.

// My breakthrough came when I was assigned to lead the redesign of a major enterprise application. The project required me to collaborate with stakeholders across three continents, manage a team of 4 designers, and deliver within tight deadlines.

// The support I received from leadership was incredible. They encouraged experimentation, celebrated failures as learning opportunities, and always pushed me to think bigger. Today, I lead a team of 12 talented designers and have contributed to products used by millions of users worldwide.

// What I love most about CJSS is the culture of continuous learning. Whether it's attending design conferences, participating in hackathons, or simply sharing knowledge with peers, there's always an opportunity to grow.`,
//     yearsAtCompany: "5 Years",
//     achievements: [
//       "Led 15+ enterprise design projects",
//       "Mentored 20+ junior designers",
//       "Won Best Innovation Award 2023",
//       "Speaker at UX Summit 2024",
//     ],
//     quote:
//       "Design is not just what it looks like, it's how it makes people feel.",
//   },
//   {
//     id: 2,
//     name: "Anjali Rao",
//     role: "Tech Lead – SAP Commerce",
//     image: "/images/priya.png",
//     shortStory: "Growing from developer to tech lead.",
//     fullStory: `My journey at CJSS started as a fresh graduate with a computer science degree and zero industry experience. I remember feeling overwhelmed during my first week, but my mentor took me under his wing and showed me that every expert was once a beginner.

// The structured learning path at CJSS was instrumental in my growth. I started with foundational SAP Commerce training, then gradually took on more complex modules. Within 18 months, I was leading small feature developments, and by year 3, I was architecting entire commerce solutions.

// One of my proudest moments was leading the migration of a Fortune 500 client's e-commerce platform to SAP Commerce Cloud. The project involved 8 team members, 6 months of development, and resulted in a 40% improvement in site performance.

// CJSS believes in growing leaders from within. The leadership development programs, technical certifications, and exposure to global clients have shaped me into the professional I am today. I'm now passionate about giving back by mentoring the next generation of tech leaders.`,
//     yearsAtCompany: "6 Years",
//     achievements: [
//       "Certified SAP Commerce Architect",
//       "Delivered 25+ successful implementations",
//       "Reduced deployment time by 60%",
//       "Built internal training curriculum",
//     ],
//     quote:
//       "The best code is the one that solves real problems for real people.",
//   },
//   {
//     id: 3,
//     name: "Kiran Kumar",
//     role: "Backend Engineering Lead",
//     image: "/images/raman.png",
//     shortStory: "Built enterprise systems from the ground up.",
//     fullStory: `I've always been fascinated by the invisible infrastructure that powers modern applications. When I joined CJSS as a backend developer, I found the perfect environment to pursue this passion.

// My first major project involved building a microservices architecture for a healthcare client. The system needed to handle millions of transactions daily while maintaining strict compliance standards. The challenge was immense, but so was the support from my team.

// Over the years, I've had the opportunity to work with cutting-edge technologies – from container orchestration with Kubernetes to event-driven architectures with Apache Kafka. CJSS encourages engineers to stay ahead of the curve and provides resources for continuous learning.

// What sets CJSS apart is the emphasis on engineering excellence. We don't just write code; we craft solutions. Code reviews, architectural discussions, and knowledge sharing sessions are integral parts of our culture.

// Today, I lead a team of 15 backend engineers, and we've built systems that process over 50 million requests daily. But what gives me the most satisfaction is seeing junior developers grow into confident engineers under my mentorship.`,
//     yearsAtCompany: "7 Years",
//     achievements: [
//       "Architected systems handling 50M+ daily requests",
//       "AWS Solutions Architect certified",
//       "Published 5 technical papers",
//       "Built company's API gateway platform",
//     ],
//     quote: "Scalability is not an afterthought; it's a mindset.",
//   },
//   {
//     id: 4,
//     name: "Priya Menon",
//     role: "Data Science Manager",
//     image: "/images/rahul.png",
//     shortStory: "From analyst to leading AI initiatives.",
//     fullStory: `My journey into data science was unconventional. I started as a business analyst at CJSS, crunching numbers in Excel spreadsheets. But I was curious about the patterns hidden in data and how they could drive business decisions.

// CJSS recognized my curiosity and supported my transition into data science. They funded my certifications, provided access to learning platforms, and most importantly, gave me opportunities to apply my learning on real projects.

// My first ML project was a customer churn prediction model for a telecom client. It was challenging – dealing with imbalanced datasets, feature engineering, and explaining model decisions to non-technical stakeholders. But the thrill of seeing our model improve retention by 25% was unforgettable.

// Today, I lead a team of data scientists and ML engineers working on some of the most exciting AI projects – from computer vision applications to natural language processing solutions. We're not just building models; we're transforming how businesses operate.

// What I value most about CJSS is the freedom to innovate. We're encouraged to explore new ideas, experiment with emerging technologies, and push the boundaries of what's possible with data.`,
//     yearsAtCompany: "4 Years",
//     achievements: [
//       "Built ML models saving clients $2M+ annually",
//       "Led company's AI Center of Excellence",
//       "Tensorflow and Azure ML certified",
//       "Patent holder for predictive algorithm",
//     ],
//     quote: "Data tells stories; our job is to listen and translate.",
//   },
//   {
//     id: 5,
//     name: "Vikram Singh",
//     role: "DevOps Architect",
//     image: "/images/priya.png",
//     shortStory: "Transforming deployment from days to minutes.",
//     fullStory: `When I joined CJSS, deployments were manual, error-prone, and took days. I saw an opportunity to transform how we deliver software and pitched my ideas to leadership. To my surprise, they not only listened but gave me the resources to make it happen.

// I started by implementing CI/CD pipelines for a single project. The results were immediate – deployment time reduced from 2 days to 30 minutes, and errors dropped by 90%. Word spread, and soon teams across the organization wanted to adopt the new practices.

// Over the next few years, I built CJSS's entire DevOps infrastructure – from container platforms to monitoring systems to security scanning tools. We went from deploying once a month to multiple times a day.

// The culture at CJSS made this transformation possible. Leadership trusts engineers to make decisions, provides necessary resources, and celebrates innovation. There's no bureaucracy blocking good ideas.

// Today, as a DevOps Architect, I design systems that enable hundreds of developers to ship code confidently. I also mentor teams on DevOps best practices and help clients modernize their delivery pipelines.`,
//     yearsAtCompany: "5 Years",
//     achievements: [
//       "Reduced deployment time by 98%",
//       "Kubernetes and Docker certified",
//       "Built zero-downtime deployment system",
//       "Implemented security-first DevSecOps",
//     ],
//     quote:
//       "Automation is not about replacing humans; it's about freeing them to do meaningful work.",
//   },
//   {
//     id: 6,
//     name: "Sneha Patel",
//     role: "Product Manager",
//     image: "/images/raman.png",
//     shortStory: "Bridging technology and business outcomes.",
//     fullStory: `I never planned to become a product manager. I started as a QA engineer at CJSS, testing features and reporting bugs. But I found myself constantly asking "why" – why are we building this? Why do users need it? What problem does it solve?

// My manager noticed my curiosity and encouraged me to explore product management. CJSS has this amazing internal mobility program that allows employees to transition between roles. I shadowed product managers, took courses, and eventually moved into a PM role.

// The transition wasn't easy. I had to learn new skills – user research, market analysis, stakeholder management, roadmap planning. But CJSS invested in my development through training programs and assigned me a mentor who guided me through the challenges.

// My first product launch was nerve-wracking but exhilarating. Seeing users engage with something we built, hearing their feedback, and iterating to make it better – that's what product management is all about.

// Today, I manage products used by millions of users. I work with engineering, design, marketing, and sales teams to deliver value to customers. It's complex, challenging, and incredibly rewarding.`,
//     yearsAtCompany: "6 Years",
//     achievements: [
//       "Launched 8 successful products",
//       "Increased user engagement by 150%",
//       "CSPO and PMI-ACP certified",
//       "Built product analytics framework",
//     ],
//     quote:
//       "Great products are built by understanding people, not just requirements.",
//   },
// ];

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Venkat K",
    role: "Director",
    image: "/images/Venkat.png",
    shortStory: "Driving strategic growth and delivery excellence at CJSS.",
    fullStory: `Venkat plays a key role in shaping CJSS’s strategic direction and ensuring consistent delivery excellence across engagements. With years of leadership experience, he works closely with clients, delivery teams, and internal stakeholders to align business goals with technology outcomes.

He is known for his calm leadership style, strong decision-making, and focus on building long-term partnerships. Venkat actively mentors senior leaders and encourages a culture of accountability, innovation, and continuous improvement.`,
    yearsAtCompany: "10+ Years",
    achievements: [
      "Led multiple large-scale enterprise programs",
      "Strengthened client partnerships across regions",
      "Built high-performing delivery leadership teams",
    ],
    quote: "Strong leadership is about clarity, trust, and execution.",
  },

  {
    id: 2,
    name: "Srikanth Banthu",
    role: "Director",
    image: "/images/Srikanth.png",
    shortStory:
      "Enabling business transformation through technology leadership.",
    fullStory: `Srikanth brings a deep understanding of enterprise systems and digital transformation. As a Director, he focuses on driving operational excellence, scaling delivery capabilities, and ensuring customer success.

He is passionate about mentoring teams, streamlining processes, and helping organizations adopt modern platforms that deliver measurable business value.`,
    yearsAtCompany: "9+ Years",
    achievements: [
      "Successfully scaled multi-team delivery models",
      "Championed enterprise digital transformation initiatives",
      "Mentored senior architects and managers",
    ],
    quote: "Technology succeeds when it solves real business problems.",
  },

  {
    id: 3,
    name: "Narmendran Yentrapati",
    role: "Program Manager",
    image: "/images/narmendran.png",
    shortStory:
      "Delivering complex programs with precision and predictability.",
    fullStory: `Narmendran specializes in managing large, multi-stream programs involving cross-functional teams and global stakeholders. He ensures projects are delivered on time, within scope, and aligned with business objectives.

His strengths lie in risk management, stakeholder communication, and building transparency across program execution.`,
    yearsAtCompany: "7+ Years",
    achievements: [
      "Managed enterprise-scale transformation programs",
      "Improved delivery predictability and governance",
      "Recognized for stakeholder management excellence",
    ],
    quote: "Successful programs are built on trust and discipline.",
  },

  {
    id: 4,
    name: "Sathyanarayana Y",
    role: "Solution Architect (Manager)",
    image: "/images/sathya_y.png",
    shortStory: "Designing scalable and future-ready solutions.",
    fullStory: `Sathyanarayana leads solution architecture initiatives with a focus on scalability, security, and performance. He collaborates closely with business teams to translate requirements into robust technical designs.

He also mentors architects and engineers, promoting best practices and architectural consistency across projects.`,
    yearsAtCompany: "8+ Years",
    achievements: [
      "Designed end-to-end enterprise solution architectures",
      "Led architecture reviews and governance",
      "Mentored solution architects and tech leads",
    ],
    quote: "Good architecture balances today’s needs with tomorrow’s growth.",
  },

  {
    id: 5,
    name: "Jagadeesh Guddati",
    role: "SAP CX Lead",
    image: "/images/jagadish.png",
    shortStory: "Leading SAP CX implementations for global clients.",
    fullStory: `Jagadeesh heads SAP CX initiatives, helping clients build scalable, customer-centric commerce platforms. His expertise spans SAP Commerce Cloud, integrations, and performance optimization.

He is known for building strong technical teams and ensuring best practices across SAP CX implementations.`,
    yearsAtCompany: "8+ Years",
    achievements: [
      "Led multiple SAP Commerce implementations",
      "Defined SAP CX best practices and standards",
      "Mentored SAP developers and architects",
    ],
    quote:
      "Customer experience is the true differentiator in digital commerce.",
  },

  {
    id: 6,
    name: "Anjalimohan Uppu",
    role: "SAP CX Lead",
    image: "/images/anjalimohan.png",
    shortStory: "Delivering reliable and scalable SAP CX solutions.",
    fullStory: `Anjalimohan focuses on building high-quality SAP CX solutions with strong emphasis on performance, stability, and maintainability. He works closely with clients to ensure solutions meet both business and technical expectations.

He actively supports team growth through technical guidance and reviews.`,
    yearsAtCompany: "7+ Years",
    achievements: [
      "Delivered multiple SAP CX projects successfully",
      "Improved platform performance and reliability",
      "Built strong SAP CX delivery teams",
    ],
    quote: "Quality and consistency define long-term success.",
  },

  {
    id: 7,
    name: "Saikiran Vemula",
    role: "SAP TechOps Lead",
    image: "/images/saikiran.png",
    shortStory: "Ensuring stability and performance of SAP platforms.",
    fullStory: `Saikiran leads SAP TechOps, focusing on system reliability, monitoring, and operational excellence. He plays a key role in ensuring smooth deployments and proactive issue resolution.

His approach emphasizes automation, observability, and continuous improvement.`,
    yearsAtCompany: "6+ Years",
    achievements: [
      "Stabilized large SAP Commerce environments",
      "Implemented monitoring and alerting frameworks",
      "Improved release reliability",
    ],
    quote: "Operations excellence is invisible when done right.",
  },

  {
    id: 8,
    name: "Sathyanarayana Nagella",
    role: "SAP TechOps Lead",
    image: "/images/sathyaN.jpg",
    shortStory: "Driving operational efficiency across SAP ecosystems.",
    fullStory: `Sathyanarayana focuses on SAP platform operations, deployments, and performance tuning. He collaborates with development and infrastructure teams to ensure seamless production operations.

He is valued for his systematic approach and problem-solving skills.`,
    yearsAtCompany: "6+ Years",
    achievements: [
      "Optimized SAP system performance",
      "Reduced production incidents",
      "Standardized operational processes",
    ],
    quote: "Stability comes from preparation, not reaction.",
  },

  {
    id: 9,
    name: "Anusha Banthu",
    role: "AEM Lead",
    image: "/images/anusha.png",
    shortStory: "Building engaging digital experiences with AEM.",
    fullStory: `Anusha leads Adobe Experience Manager initiatives, delivering content-driven digital platforms. She works closely with design and marketing teams to ensure seamless content authoring and publishing workflows.

Her focus is on maintainable architecture and author-friendly solutions.`,
    yearsAtCompany: "6+ Years",
    achievements: [
      "Led enterprise AEM implementations",
      "Improved content authoring efficiency",
      "Mentored AEM developers",
    ],
    quote: "Great digital experiences start with great content platforms.",
  },

  {
    id: 10,
    name: "Chaitanya Mula",
    role: "Front-end Lead (React)",
    image: "/images/chaitanya.png",
    shortStory: "Crafting scalable and performant user interfaces.",
    fullStory: `Chaitanya leads frontend development with a strong focus on React-based architectures. He emphasizes clean code, performance optimization, and reusable component design.

He actively mentors frontend engineers and promotes modern UI engineering practices.`,
    yearsAtCompany: "6+ Years",
    achievements: [
      "Built scalable React applications",
      "Defined frontend coding standards",
      "Improved UI performance metrics",
    ],
    quote: "A great UI is fast, intuitive, and maintainable.",
  },

  {
    id: 11,
    name: "Vinay Manthani",
    role: "Front-end Lead (React)",
    image: "/images/vinay.png",
    shortStory: "Delivering intuitive and responsive web experiences.",
    fullStory: `Vinay specializes in building responsive, accessible, and user-friendly interfaces. He works closely with UX teams to translate designs into high-quality React applications.

His leadership ensures consistency and quality across frontend deliverables.`,
    yearsAtCompany: "5+ Years",
    achievements: [
      "Delivered multiple frontend platforms",
      "Improved UI accessibility standards",
      "Mentored junior frontend developers",
    ],
    quote: "User experience is built one interaction at a time.",
  },

  {
    id: 12,
    name: "Srinivas Moole",
    role: "AI Architect",
    image: "/images/srinivas.png",
    shortStory: "Designing intelligent systems with real-world impact.",
    fullStory: `Srinivas leads AI and data-driven architecture initiatives. He focuses on designing scalable AI solutions that integrate seamlessly with enterprise systems.

He works closely with data science and engineering teams to turn AI concepts into production-ready solutions.`,
    yearsAtCompany: "7+ Years",
    achievements: [
      "Designed enterprise AI architectures",
      "Led AI platform integrations",
      "Guided teams on ML best practices",
    ],
    quote: "AI succeeds when it is practical, scalable, and responsible.",
  },

  {
    id: 13,
    name: "Satishkumar Battula",
    role: "Trex Lead (Java)",
    image: "/images/satish.png",
    shortStory: "Leading backend systems with Java expertise.",
    fullStory: `Satishkumar specializes in backend development using Java, focusing on scalability and reliability. He leads Trex-related backend initiatives and ensures clean, maintainable codebases.

He is known for mentoring developers and enforcing strong engineering standards.`,
    yearsAtCompany: "6+ Years",
    achievements: [
      "Led backend system development",
      "Improved system performance",
      "Mentored Java engineers",
    ],
    quote: "Strong foundations make scalable systems possible.",
  },

  {
    id: 14,
    name: "Varunsai Nune",
    role: "Middleware Lead (Java)",
    image: "/images/varunsai.png",
    shortStory: "Building robust integration and middleware solutions.",
    fullStory: `Varunsai leads middleware development, focusing on integrations, APIs, and system interoperability. He ensures reliable data flow across complex enterprise landscapes.

His work enables seamless communication between platforms.`,
    yearsAtCompany: "5+ Years",
    achievements: [
      "Built enterprise middleware solutions",
      "Standardized API design practices",
      "Improved system integration reliability",
    ],
    quote: "Integration is the backbone of digital enterprises.",
  },

  {
    id: 15,
    name: "Lekhya Pypuri",
    role: "QA Lead (Manual)",
    image: "/images/lekhya.png",
    shortStory: "Ensuring quality through rigorous testing practices.",
    fullStory: `Lekhya leads manual testing efforts, focusing on functional accuracy and user experience. She works closely with product and development teams to ensure high-quality releases.

Her attention to detail and structured testing approach ensures reliable outcomes.`,
    yearsAtCompany: "5+ Years",
    achievements: [
      "Defined QA testing strategies",
      "Improved defect detection rates",
      "Mentored QA analysts",
    ],
    quote: "Quality is built through discipline and care.",
  },

  {
    id: 16,
    name: "Nawazhussain Shaik",
    role: "Front-end Lead",
    image: "/images/nawaz.png",
    shortStory: "Delivering consistent and modern frontend solutions.",
    fullStory: `Nawazhussain focuses on building clean, maintainable frontend systems. He collaborates with design and backend teams to ensure smooth user experiences.

He emphasizes performance and cross-browser compatibility.`,
    yearsAtCompany: "5+ Years",
    achievements: [
      "Delivered responsive frontend platforms",
      "Improved UI performance",
      "Mentored frontend engineers",
    ],
    quote: "Frontend excellence is about clarity and performance.",
  },

  {
    id: 17,
    name: "Mahesh Velagapudi",
    role: "QA Lead (Automation)",
    image: "/images/mahesh.png",
    shortStory: "Driving quality through test automation.",
    fullStory: `Mahesh leads automation testing initiatives, implementing frameworks that improve test coverage and release confidence. He works closely with DevOps and development teams.

His focus is on efficiency, reliability, and continuous testing.`,
    yearsAtCompany: "6+ Years",
    achievements: [
      "Built automation testing frameworks",
      "Improved regression coverage",
      "Integrated automation into CI/CD",
    ],
    quote: "Automation enables speed without sacrificing quality.",
  },

  {
    id: 18,
    name: "Tulika Srivastava",
    role: "HR",
    image: "/images/tulika.png",
    shortStory: "Building a people-first culture at CJSS.",
    fullStory: `Tulika plays a vital role in talent development, employee engagement, and organizational culture. She works closely with leadership to ensure CJSS remains a great place to work.

Her focus is on growth, inclusivity, and employee well-being.`,
    yearsAtCompany: "4+ Years",
    achievements: [
      "Strengthened employee engagement programs",
      "Improved hiring and onboarding processes",
      "Led organizational development initiatives",
    ],
    quote: "Great companies are built by empowered people.",
  },

  {
    id: 19,
    name: "Anju Devasia",
    role: "Lead – Power Platform",
    image: "/images/anju.png",
    shortStory: "Empowering businesses with low-code solutions.",
    fullStory: `Anju leads Power Platform initiatives, enabling rapid application development and automation. She helps clients streamline business processes using low-code tools.

Her work bridges business needs with technology agility.`,
    yearsAtCompany: "5+ Years",
    achievements: [
      "Delivered Power Platform solutions",
      "Automated business workflows",
      "Mentored Power Platform developers",
    ],
    quote: "Low-code empowers innovation at speed.",
  },
  {
    id: 20,
    name: "Pranayraj Rudrapati",
    role: "Lead – Trex Platform (Java)",
    image: "/images/pranay.png",
    shortStory: "Driving scalable Java solutions on the Trex platform.",
    fullStory: `Pranayraj leads Trex platform development with a strong focus on Java-based backend systems, integrations, and performance optimization. He works closely with engineering and business teams to deliver reliable, scalable solutions for complex enterprise workflows.

With deep expertise in Java, APIs, and distributed systems, Pranayraj ensures that Trex implementations are robust, maintainable, and aligned with long-term platform strategy.`,
    yearsAtCompany: "6+ Years",
    achievements: [
      "Led Trex platform development using Java",
      "Designed scalable backend and integration architectures",
      "Optimized performance for high-volume enterprise workflows",
      "Mentored Java and Trex engineers",
    ],
    quote:
      "Strong architecture and clean code are the foundation of scalable platforms.",
  },
];

// Modal Component using Portal
const MentorModal = ({
  mentor,
  onClose,
}: {
  mentor: Mentor;
  onClose: () => void;
}) => {
  // Prevent body scroll when modal is open
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-xl mx-4 mb-10 sm:max-w-3xl rounded-2xl animate-modalSlideIn"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,20,0.98), rgba(10,10,10,0.98))",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-20 flex items-center justify-center w-10 h-10 text-2xl transition-all rounded-full right-4 top-4 text-white/70 hover:text-white hover:bg-white/10"
        >
          ✕
        </button>

        {/* Header Section */}
        <div
          className="relative p-6 overflow-hidden sm:p-8 rounded-t-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(55,194,255,0.1), rgba(106,155,255,0.05))",
          }}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="object-cover w-24 h-24 border-4 rounded-full shadow-lg sm:w-32 sm:h-32 border-white/20"
              />
            </div>

            {/* Name & Role */}
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

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          {/* Quote */}
          <blockquote className="relative p-4 mb-6 italic border-l-4 rounded-r-lg bg-white/5 border-cyan-400">
            <span className="absolute text-4xl -left-1 -top-2 text-cyan-400/30">
              "
            </span>
            <p className="text-white/80">{mentor.quote}</p>
          </blockquote>

          {/* Full Story */}
          <div className="mb-8">
            <h4 className="mb-4 text-lg font-bold text-white">My Journey</h4>
            <div className="space-y-4 text-sm leading-relaxed sm:text-base text-white/75">
              {mentor.fullStory.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Achievements */}
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

          {/* Close Button at Bottom */}
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

      {/* Animation styles */}
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

  // Use portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

interface MentorStoriesSectionProps {
  onModalOpen?: (isOpen: boolean) => void;
}

const MentorStoriesSection = ({ onModalOpen }: MentorStoriesSectionProps) => {
  const [openStory, setOpenStory] = useState<Mentor | null>(null);
  const [typingText, setTypingText] = useState("");
  const fullText = "Career Growth & Mentor Stories";

  // Notify parent when modal opens/closes
  useEffect(() => {
    onModalOpen?.(openStory !== null);
  }, [openStory, onModalOpen]);

  // Typewriter effect
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

  // Mouse light tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Main Section with Black Background */}
      <section className="relative w-full px-4 py-20 overflow-visible bg-black sm:px-6 sm:py-28">
        {/* Optional: Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none" />

        {/* Optional: Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10">
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
            pagination={{ clickable: true, el: ".mentor-pagination" }}
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
                    el.style.setProperty("--lx", `${e.clientX - rect.left}px`);
                    el.style.setProperty("--ly", `${e.clientY - rect.top}px`);
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform =
                      "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)";
                  }}
                >
                  {/* glossy top */}
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

                  {/* Cursor light */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(0,210,255,0.15), transparent 30%)",
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
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {mentor.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">{mentor.role}</p>
                    <p className="mt-3 text-sm text-white/70">
                      {mentor.shortStory}
                    </p>

                    {/* Button - Same style as hero section */}
                    <button
                      onClick={() => setOpenStory(mentor)}
                      className="mt-5 rounded-full border border-white/40 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-white hover:bg-white/10 backdrop-blur hover:border-white/70 transition-all"
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
                        "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,140,255,0.08))",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 mentor-pagination" />
        </div>

        {/* Pagination styles */}
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

      {/* Modal rendered via Portal */}
      {openStory && (
        <MentorModal mentor={openStory} onClose={() => setOpenStory(null)} />
      )}
    </>
  );
};

export default MentorStoriesSection;
