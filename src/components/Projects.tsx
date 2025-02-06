import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Rebalance Qi',
    description: 'A comprehensive wellness services platform featuring online booking integration, service management, and a modern responsive design. This completed project showcases a seamless user experience for booking acupuncture and Chinese medicine services.',
    image: '/Rebalance-Qi.webp',
    link: 'https://rebalanceqi.co.nz',
    containerWidth: 'lg:w-[600px]',
    imageHeight: 'h-[600px]',
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'React Router DOM',
      'React Hook Form',
      'Zod',
      'Nodemailer',
      'Fresha Integration',
      'React Helmet Async'
    ],
    status: 'Completed'
  },
  {
    title: 'Clean Sweep Duo',
    description: 'A modern rubbish removal and waste management platform featuring an advanced booking system, real-time driver tracking, and integrated payment processing. The platform streamlines waste collection services for both residential and commercial clients.',
    image: '/Clean-Sweep-Duo.webp',
    link: 'https://cleansweepduo.com',
    containerWidth: 'lg:w-[600px]',
    imageHeight: 'h-[600px]',
    tech: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'TailwindCSS',
      'Supabase',
      'PostgreSQL',
      'Stripe',
      'SendGrid',
      'Twilio',
      'Mapbox'
    ],
    status: 'Completed'
  },
  {
    title: 'Duo Linko',
    description: 'A sophisticated web design agency platform that provides customized website solutions through an intelligent package recommendation system. Features include detailed requirements gathering, portfolio showcase, and seamless project management.',
    image: '/Duo-Linko.webp',
    link: 'https://duolinko.com',
    containerWidth: 'lg:w-[600px]',
    imageHeight: 'h-[600px]',
    tech: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'TailwindCSS',
      'Radix UI',
      'Framer Motion',
      'OpenAI SDK',
      'Stripe',
      'Resend',
      'React Hook Form'
    ],
    status: 'Completed'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Details */}
              <div className="lg:w-1/2 bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300"
                  >
                    Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div 
                className={`w-full ${project.containerWidth} bg-gray-800 rounded-lg overflow-hidden mx-auto`}
              >
                <div className={`relative ${project.imageHeight} overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800`}>
                  <div className="p-2 md:p-4 bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
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