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
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } max-w-[90vw] mx-auto`}
            >
              {/* Project Image Container */}
              <div className="w-1/2 relative">
                <div className="w-full h-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Project Details Container - matches image dimensions */}
              <div className="w-1/2 relative">
                <div className="absolute inset-0 p-[4%] flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-[3%]">
                    <h3 className="text-[1.5vw] font-bold">
                      {project.title}
                    </h3>
                    <p className="text-[1vw] text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-[0.4vw]">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-[0.6vw] py-[0.2vw] text-[0.7vw] rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[1vw] text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Visit Website 
                    <ExternalLink className="ml-[0.5vw] w-[1vw] h-[1vw]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies section */}
        <div id="tech-section" className="mt-20 text-center">
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Key Technologies
            </span>
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 items-center justify-center py-8">
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
                  className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-200"
                  style={{ 
                    color: tech.color,
                    fontSize: '6rem',
                    lineHeight: 1
                  }}
                >
                  {tech.icon}
                </div>
                <span className="text-lg sm:text-xl text-gray-400 group-hover:text-gray-300 transition-colors">
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