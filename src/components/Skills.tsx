interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    skills: [
      "JavaScript, HTML, CSS",
      "React.js, Node.js",
      "MySQL, MongoDB",
      "API Development & Integration"
    ]
  },
  {
    title: "ERP Systems",
    skills: [
      "SAP ECC (Materials Management, P2P processes)",
      "SAP Ariba (Source-to-Contract, Supplier Management)",
      "Zycus (Contracts Management System)",
      "Ellipse (ERP integration and payment reconciliation)"
    ]
  },
  {
    title: "Cloud & Tools",
    skills: [
      "AWS, GCP",
      "Git, GitHub",
      "CI/CD pipelines",
      "Debugging & Testing Tools"
    ]
  },
  {
    title: "Procurement & Contracts",
    skills: [
      "Managing purchase orders, RFQs, and contract milestones",
      "Negotiation and supplier onboarding",
      "Streamlining procurement workflows"
    ]
  },
  {
    title: "Process & Analytics",
    skills: [
      "Process optimization and efficiency improvements",
      "Data analysis for decision-making",
      "Cross-departmental collaboration",
      "Training and knowledge transfer"
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      "Problem-solving and critical thinking",
      "Time management and multitasking",
      "Strong communication and presentation",
      "Adaptability and continuous learning"
    ]
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-gray-300 hover:text-white flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}