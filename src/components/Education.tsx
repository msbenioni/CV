import React from 'react';
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
              Diploma in Digital Technology Development and Design
            </h3>
            <p className="text-purple-400 mb-4">Institution Name • 2018</p>
            <div className="space-y-4 text-gray-300">
              <p>
                Comprehensive program covering modern web development technologies and design principles.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Full-stack web development</li>
                <li>UI/UX design principles</li>
                <li>Database management</li>
                <li>Project management methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}