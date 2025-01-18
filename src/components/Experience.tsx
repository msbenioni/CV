import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Developer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: 'Led development of multiple web applications using React and Node.js.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Developed and maintained client websites and applications.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-700"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
                style={{ opacity: 0, animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards` }}
              >
                <div className="flex items-center">
                  <div className="flex-1 md:pr-12 group-even:md:pr-0 group-even:md:pl-12">
                    <div className="p-6 bg-gray-800 rounded-lg transform transition-transform group-hover:-translate-y-1">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-purple-400 mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-gray-900 bg-purple-600 flex items-center justify-center">
                      <Briefcase size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}