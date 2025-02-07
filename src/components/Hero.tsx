import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-10 sm:py-16 bg-gray-900">
      <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Jasmin Benioni
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-12">
          Full Stack Developer | Systems Integration Specialist | Digital Innovator
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Background Card */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-600"></div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-600"></div>
            <div className="bg-gray-900 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-4">My Background</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                I bring a solid background in contracts administration and procurement, 
                complemented by extensive hands-on experience in systems integration and 
                management. Completing a Diploma in Digital Technology Development and 
                Design has not only advanced my technical and software development expertise 
                but also ignited a newfound passion for software development.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform rotate-6 blur-xl opacity-50"></div>
            <div className="relative aspect-square overflow-hidden rounded-full ring-4 ring-purple-500/20">
              <img
                src="/jasmin1.png"
                alt="Jasmin Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Professional Summary Card */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-600"></div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-600"></div>
            <div className="bg-gray-900 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Professional Summary</h3>
              <p className="text-base text-gray-300 leading-relaxed">
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
    </section>
  );
}