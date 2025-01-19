import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-gray-900">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Jasmin Benioni
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-delayed">
          Full Stack Developer | Systems Integration Specialist | Digital Innovator
        </p>
        <div className="space-x-4 animate-fade-in-delayed-more">
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-transparent border border-purple-600 hover:bg-purple-600/10 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="text-gray-400" size={32} />
      </div>
    </div>
  );
}