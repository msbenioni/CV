import { GraduationCap } from 'lucide-react';
import '../styles/education.css';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="education-card">
            <div className="education-content p-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    MISSION READY HQ
                  </h3>
                  <p className="text-xl text-purple-400">
                    Diploma in Digital Technology Development and Design
                  </p>
                  <p className="text-lg text-gray-400 mt-2">
                    Aug 2024 - current • Auckland, NZ
                  </p>
                </div>
                <div className="hidden lg:block">
                  <GraduationCap
                    size={140}
                    className="text-purple-400/20 floating-icon"
                  />
                </div>
              </div>

              <div className="space-y-10">
                <div className="component-item" style={{ transitionDelay: '0.1s' }}>
                  <h4 className="text-2xl font-bold text-purple-400 mb-6">
                    Component 1: Full Stack Developer
                  </h4>
                  <ul className="skill-list space-y-4">
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Developed expertise in creating responsive web applications using modern frameworks and libraries
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Mastered server-side development and database management with focus on security best practices
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Implemented professional development workflows using IDEs and source code management tools
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Applied industry-standard coding practices and software licensing principles
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Gained proficiency in unit testing and quality assurance methodologies
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Explored emerging technologies including generative AI applications
                    </li>
                  </ul>
                </div>
                
                <div className="component-item" style={{ transitionDelay: '0.3s' }}>
                  <h4 className="text-2xl font-bold text-purple-400 mb-6">
                    Component 2: Advanced Full Stack Developer (Cloud & AI)
                  </h4>
                  <ul className="skill-list space-y-4">
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Implemented cloud services and AI solutions for enterprise-level applications
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Designed and developed systems using modern architectural patterns and DevOps practices
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Built advanced database solutions utilizing NoSQL and GraphQL technologies
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Created and integrated RESTful APIs and JSON-based services
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Applied Agile methodologies and Design Thinking principles in project development
                    </li>
                    <li className="flex items-center text-lg text-gray-300">
                      <span className="skill-dot"></span>
                      Gained practical experience working in collaborative project teams
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}