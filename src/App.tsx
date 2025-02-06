import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/msbenioni" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://nz.linkedin.com/in/jasminbenioni" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:msbenioni@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="mt-4 text-center text-gray-400">
            {new Date().getFullYear()} Jasmin Benioni. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;