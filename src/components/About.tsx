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
              I bring a solid background in contracts administration and procurement, complemented by extensive hands-on experience in systems integration and management. Completing a Diploma in Digital Technology Development and Design has not only advanced my technical and software development expertise but also ignited a newfound passion for software development. My professional experience has honed my ability to manage complex systems, optimize processes, and deliver exceptional customer experiences. I am driven by the opportunity to leverage technology to address real-world challenges and am eager to contribute my skills and enthusiasm to a dynamic team.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg transform rotate-6"></div>
            <img
              src="/jasmin1.png"
              alt="Jasmin Profile"
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Professional Summary
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 leading-relaxed text-center">
              Dynamic IT professional with a Diploma in Digital Technology Development and Design from Mission Ready HQ. Proficient in developing and managing software systems, e-commerce platforms, and integrating procurement tools with cloud-based technologies. Experienced in utilizing ERP systems (SAP, Ellipse) and procurement systems (Ariba, Zycus) to streamline operations. Adept at problem-solving, multitasking, and delivering exceptional customer service. Excels in collaborative environments and continuously seeks opportunities to leverage and expand technical skills. Fluent in English and French, with a strong passion for technology and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}