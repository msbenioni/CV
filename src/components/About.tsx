import { Code2, BookOpen, Briefcase } from 'lucide-react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start max-w-7xl mx-auto">
          {/* Background Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-purple-400">My Background</h3>
            <p className="text-xl text-gray-300 leading-relaxed fade-in-paragraph">
              I bring a solid background in contracts administration and procurement, complemented by extensive hands-on experience in systems integration and management. Completing a Diploma in Digital Technology Development and Design has not only advanced my technical and software development expertise but also ignited a newfound passion for software development.
            </p>
          </div>

          {/* Profile Image Column */}
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform rotate-6 blur-xl opacity-50"></div>
            <div className="relative aspect-square overflow-hidden rounded-full ring-4 ring-purple-500/20">
              <img
                src="/jasmin1.png"
                alt="Jasmin Profile"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Professional Summary Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-purple-400">Professional Summary</h3>
            <p className="text-xl text-gray-300 leading-relaxed fade-in-paragraph">
              Dynamic IT professional with a Diploma in Digital Technology Development and Design from Mission Ready HQ. Proficient in developing and managing software systems, e-commerce platforms, and integrating procurement tools with cloud-based technologies. Experienced in utilizing ERP systems (SAP, Ellipse) and procurement systems (Ariba, Zycus) to streamline operations.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <h4 className="text-2xl font-bold text-purple-400 mb-8 text-center">Tech Stack & Tools</h4>
          <div className="tech-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="tech-item">
              <Code2 className="h-6 w-6 text-purple-400" />
              <span className="text-lg text-gray-300">React & Next.js</span>
            </div>
            <div className="tech-item">
              <BookOpen className="h-6 w-6 text-purple-400" />
              <span className="text-lg text-gray-300">Node.js & Express</span>
            </div>
            <div className="tech-item">
              <Briefcase className="h-6 w-6 text-purple-400" />
              <span className="text-lg text-gray-300">AWS & Cloud</span>
            </div>
            <div className="tech-item">
              <Code2 className="h-6 w-6 text-purple-400" />
              <span className="text-lg text-gray-300">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Floating background shapes */}
        <div className="floating-shape shape-1 -top-20 -right-20"></div>
        <div className="floating-shape shape-2 -bottom-20 -left-20"></div>
      </div>
    </section>
  );
}