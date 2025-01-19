import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8">
              <GraduationCap
                size={120}
                className="text-purple-600/10 transform transition-transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              MISSION READY HQ
            </h3>
            <p className="text-purple-400 mb-4">Diploma in Digital Technology Development and Design • Aug 2024 - current • Auckland, NZ</p>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Component 1: Full Stack Developer</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Developed expertise in creating responsive web applications using modern frameworks and libraries</li>
                  <li>Mastered server-side development and database management with focus on security best practices</li>
                  <li>Implemented professional development workflows using IDEs and source code management tools</li>
                  <li>Applied industry-standard coding practices and software licensing principles</li>
                  <li>Gained proficiency in unit testing and quality assurance methodologies</li>
                  <li>Explored emerging technologies including generative AI applications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Component 2: Advanced Full Stack Developer (Cloud & AI)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Implemented cloud services and AI solutions for enterprise-level applications</li>
                  <li>Designed and developed systems using modern architectural patterns and DevOps practices</li>
                  <li>Built advanced database solutions utilizing NoSQL and GraphQL technologies</li>
                  <li>Created and integrated RESTful APIs and JSON-based services</li>
                  <li>Applied Agile methodologies and Design Thinking principles in project development</li>
                  <li>Gained practical experience working in collaborative project teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}