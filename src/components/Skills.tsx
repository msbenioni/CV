import '../styles/skills.css';

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
    <section id="skills" className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
              style={{ 
                opacity: 0, 
                animation: `fadeInUp 0.5s ease-out ${index * 0.2}s forwards` 
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-purple-300">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="skill-item text-gray-300 hover:text-white"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="skill-dot w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-lg">{skill}</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          animationDelay: `${skillIndex * 0.2}s`,
                          width: '100%'
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Background decoration */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}