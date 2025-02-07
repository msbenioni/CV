import { ExternalLink } from 'lucide-react';
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

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 h-48 sm:h-64 lg:h-auto">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-purple-500/10 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Website Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span className="mr-2">Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}