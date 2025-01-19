export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* About Me Column */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl font-semibold text-purple-400">My Background</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I bring a solid background in contracts administration and procurement, complemented by extensive hands-on experience in systems integration and management. Completing a Diploma in Digital Technology Development and Design has not only advanced my technical and software development expertise but also ignited a newfound passion for software development. My professional experience has honed my ability to manage complex systems, optimize processes, and deliver exceptional customer experiences. I am driven by the opportunity to leverage technology to address real-world challenges and am eager to contribute my skills and enthusiasm to a dynamic team.
            </p>
          </div>

          {/* Profile Image Column */}
          <div className="relative mx-auto w-48 sm:w-56 md:w-64 lg:w-full max-w-xs">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform rotate-6 blur-sm"></div>
            <img
              src="/jasmin1.png"
              alt="Jasmin Profile"
              className="relative rounded-full w-full h-full object-cover shadow-xl ring-2 ring-purple-500/20"
            />
          </div>

          {/* Professional Summary Column */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl font-semibold text-purple-400">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Dynamic IT professional with a Diploma in Digital Technology Development and Design from Mission Ready HQ. Proficient in developing and managing software systems, e-commerce platforms, and integrating procurement tools with cloud-based technologies. Experienced in utilizing ERP systems (SAP, Ellipse) and procurement systems (Ariba, Zycus) to streamline operations. Adept at problem-solving, multitasking, and delivering exceptional customer service. Excels in collaborative environments and committed to continuous learning and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}