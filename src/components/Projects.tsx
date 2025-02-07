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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-wrapper ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:flex gap-8`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 h-full">
                <div className="aspect-video overflow-hidden rounded-xl border border-purple-500/20">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 h-full">
                <div className="project-card p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-tag px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg text-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Website Link */}
                  <div className="flex items-center mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-lg text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="h-6 w-6" />
                      <span>Visit Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}