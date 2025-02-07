import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import '../styles/education.css';

export default function Education() {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  const toggleComponent = (index: number) => {
    setExpandedComponent(expandedComponent === index ? null : index);
  };

  const components = [
    {
      title: "Component 1: Full Stack Developer",
      skills: [
        "Developed expertise in creating responsive web applications using modern frameworks and libraries",
        "Mastered server-side development and database management with focus on security best practices",
        "Implemented professional development workflows using IDEs and source code management tools",
        "Applied industry-standard coding practices and software licensing principles",
        "Gained proficiency in unit testing and quality assurance methodologies",
        "Explored emerging technologies including generative AI applications"
      ]
    },
    {
      title: "Component 2: Advanced Full Stack Developer (Cloud & AI)",
      skills: [
        "Implemented cloud services and AI solutions for enterprise-level applications",
        "Designed and developed systems using modern architectural patterns and DevOps practices",
        "Built advanced database solutions utilizing NoSQL and GraphQL technologies",
        "Created and integrated RESTful APIs and JSON-based services",
        "Applied Agile methodologies and Design Thinking principles in project development",
        "Gained practical experience working in collaborative project teams"
      ]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 border border-purple-500/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 sm:mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">MISSION READY HQ</h3>
              <p className="text-base sm:text-lg text-purple-300">Diploma in Digital Technology Development and Design</p>
            </div>
            <div className="mt-2 lg:mt-0">
              <p className="text-sm sm:text-base text-gray-400">Aug 2024 - current • Auckland, NZ</p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {components.map((component, index) => (
              <div
                key={index}
                className="relative border-t border-purple-500/20 pt-6 first:border-t-0 first:pt-0"
                onClick={() => toggleComponent(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-xl sm:text-2xl font-semibold text-purple-400">{component.title}</h4>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-300 transition-transform duration-300 ${
                      expandedComponent === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>

                <div
                  className={`mt-4 overflow-hidden transition-all duration-300 ${
                    expandedComponent === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-3">
                    {component.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 mt-2"></span>
                        <span className="text-sm sm:text-base text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {expandedComponent !== index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-sm text-purple-300">Tap to view details</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}