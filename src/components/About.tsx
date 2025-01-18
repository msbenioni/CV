import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software developer with expertise in modern web technologies. 
              My journey in tech has equipped me with a strong foundation in both front-end 
              and back-end development, allowing me to create seamless, user-centric applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a focus on clean code and innovative solutions, I strive to build applications 
              that not only meet technical requirements but also provide exceptional user experiences.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
              alt="Workspace"
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}