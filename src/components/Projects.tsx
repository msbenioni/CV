import { ExternalLink } from 'lucide-react';
import { 
  FaReact, 
  FaNode, 
  FaStripe,
  FaGoogle
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiVite, 
  SiTailwindcss, 
  SiFramer, 
  SiNextdotjs,
  SiMongodb,
  SiFreelancer
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { Folders, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import '../styles/projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: 'Rebalance Qi',
    description: 'A comprehensive wellness services platform featuring online booking integration, service management, and a modern responsive design. This completed project showcases a seamless user experience for booking acupuncture and Chinese medicine services.',
    technologies: [
      'React 18',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'Framer Motion',
      'Fresha Integration',
      'React Helmet Async'
    ],
    liveUrl: 'https://rebalanceqi.co.nz',
    imageUrl: '/Rebalance-Qi.webp'
  },
  {
    title: 'Clean Sweep Duo',
    description: 'A modern cleaning services platform with integrated booking system, service area mapping, and automated scheduling. Features include real-time availability, service customization, and seamless payment processing.',
    technologies: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'TailwindCSS',
      'Stripe',
      'Prisma',
      'Twilio',
      'Mapbox'
    ],
    liveUrl: 'https://cleansweepduo.com',
    imageUrl: '/Clean-Sweep-Duo.webp'
  },
  {
    title: 'Duo Linko',
    description: 'A full-stack web application that helps users manage and organize their important links. Features include link categorization, custom tags, and search functionality.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'TailwindCSS',
      'Prisma',
      'tRPC',
      'Resend',
      'React Hook Form'
    ],
    liveUrl: 'https://duolinko.com',
    imageUrl: '/Duo-Linko.webp'
  }
];

const technologies = [
  { icon: <FaReact size={96} />, name: "React", color: "#61DAFB" },
  { icon: <SiTypescript size={96} />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiVite size={96} />, name: "Vite", color: "#646CFF" },
  { icon: <SiTailwindcss size={96} />, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: <TbBrandFramerMotion size={96} />, name: "Framer Motion", color: "#FF5D5D" },
  { icon: <SiNextdotjs size={96} />, name: "Next.js", color: "#000000" },
  { icon: <FaStripe size={96} />, name: "Stripe", color: "#635BFF" },
  { icon: <SiMongodb size={96} />, name: "MongoDB", color: "#47A248" },
  { icon: <FaGoogle size={96} />, name: "Google Cloud", color: "#4285F4" },
  { icon: <SiFreelancer size={96} />, name: "Freelancer", color: "#FF5D5D" },
  { icon: <FaNode size={96} />, name: "Node.js", color: "#339933" },
  { icon: <SiFramer size={96} />, name: "Framer Motion", color: "#FF5D5D" }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const techSection = document.getElementById('tech-section');
    if (techSection) {
      observer.observe(techSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
            <Folders className="text-purple-400" size={48} strokeWidth={1.5} />
          </div>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {projects.map((project) => (
            <div key={project.title} className="flip-card aspect-[3/4] sm:aspect-[2/3] w-full">
              <div className="flip-card-inner">
                {/* Front of card (Image) */}
                <div className="flip-card-front bg-gray-800/50 backdrop-blur-sm border border-purple-500/20">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back of card (Content) */}
                <div className="flip-card-back bg-gray-800/50 backdrop-blur-sm border border-purple-500/20">
                  <div className="p-6 sm:p-10 flex flex-col h-full">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                      {project.description}
                    </p>
                    <div className="mt-auto space-y-4 sm:space-y-6">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm sm:text-lg text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Visit Website <ExternalLink className="ml-2 h-4 w-4 sm:h-6 sm:w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies section */}
        <div id="tech-section" className="mt-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Key Technologies
              </span>
              <Wrench className="text-purple-400" size={48} strokeWidth={1.5} />
            </div>
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 lg:gap-12 items-center justify-center py-4 sm:py-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div 
                  className="w-14 h-14 sm:w-24 sm:h-24 flex items-center justify-center mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-200"
                  style={{ 
                    color: tech.color,
                    fontSize: '2rem',
                    lineHeight: 1,
                    '@media (min-width: 640px)': {
                      fontSize: '4rem'
                    }
                  }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}