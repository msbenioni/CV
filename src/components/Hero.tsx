import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.5, 300);
  const aboutOpacity = Math.min(Math.max((scrollY - 100) / 400, 0), 1);
  const profileScale = Math.min(1, Math.max(0.6, 1 - scrollY / 1000));

  return (
    <div className="relative min-h-[150vh] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-gray-900">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="text-center transform transition-transform duration-300 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ transform: `translateY(-${parallaxOffset}px)` }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Jasmin Benioni
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in-delayed">
            Full Stack Developer | Systems Integration Specialist | Digital Innovator
          </p>
          <div className="space-x-2 sm:space-x-4 animate-fade-in-delayed-more">
            <a
              href="#projects"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-transparent border border-purple-600 hover:bg-purple-600/10 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Profile Image with Scroll Animation */}
          <div 
            className="relative mx-auto w-48 sm:w-56 lg:w-64 mt-8 sm:mt-12 transition-all duration-300"
            style={{ 
              transform: `scale(${profileScale})`,
              opacity: Math.max(0, 1 - scrollY / 800)
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform rotate-6 blur-xl opacity-50"></div>
            <div className="relative aspect-square overflow-hidden rounded-full ring-4 ring-purple-500/20">
              <img
                src="/jasmin1.png"
                alt="Jasmin Profile"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* About Section with Scroll Reveal */}
        <div 
          className="absolute w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 transition-all duration-500"
          style={{ 
            opacity: aboutOpacity,
            transform: `translateY(${Math.min(scrollY - 200, 300)}px)`,
            pointerEvents: aboutOpacity > 0.5 ? 'auto' : 'none'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">My Background</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                I bring a solid background in contracts administration and procurement, 
                complemented by extensive hands-on experience in systems integration and 
                management. Completing a Diploma in Digital Technology Development and 
                Design has not only advanced my technical and software development expertise 
                but also ignited a newfound passion for software development.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">Professional Summary</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Dynamic IT professional with a Diploma in Digital Technology Development 
                and Design from Mission Ready HQ. Proficient in developing and managing 
                software systems, e-commerce platforms, and integrating procurement tools 
                with cloud-based technologies. Experienced in utilizing ERP systems (SAP, 
                Ellipse) and procurement systems (Ariba, Zycus) to streamline operations.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <ArrowDown className="text-gray-400" size={32} />
      </div>
    </div>
  );
}