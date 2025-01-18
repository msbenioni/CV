import React from 'react';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'MySQL', level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}