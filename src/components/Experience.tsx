import { ArrowUpRight } from 'lucide-react';
import '../styles/experience.css';

const experiences = [
  {
    title: 'Purchasing Officer',
    company: 'INCITEC PIVOT LTD',
    period: 'Nov 2023 – Feb 2024',
    location: 'Brisbane, Australia',
    note: '(relocated to NZ)',
    system: 'SAP – ECC (MATERIALS MANAGEMENT)',
    responsibilities: [
      'Managed the creation and oversight of purchase orders and RFQs within SAP ECC, ensuring compliance with company policies and a focus on total cost efficiency.',
      'Actively expedited orders to guarantee adherence to delivery schedules, and communicated any changes in PO delivery dates or costs to internal stakeholders promptly.',
      'Streamlined P2P workflows, addressing invoicing issues swiftly to ensure timely payments to suppliers.',
      'Provided expert advice and guidance to internal customers, ensuring they received the support needed for procurement-related activities.',
      'Conducted ad hoc training for internal customers on systems and processes, enhancing their understanding and proficiency in procurement operations.'
    ]
  },
  {
    title: 'Procurement Systems Administrator',
    company: 'STANWELL CORPORATION',
    period: 'Jun 2023 – Nov 2023',
    location: 'Brisbane, Australia',
    note: '(Fixed Term Contract)',
    systems: [
      {
        name: 'ELLIPSE (ERP)',
        responsibilities: [
          'Oversaw the reconciliation of payments and conducted detailed data analysis to ensure accuracy and compliance.',
          'Facilitated the integration with Zycus, ensuring seamless synchronization of business partner information across systems.'
        ]
      },
      {
        name: 'ZYCUS (CONTRACTS MANAGEMENT SYSTEM)',
        responsibilities: [
          'Delivered Level 1 end-user support, efficiently addressing queries and resolving issues.',
          'Administered supplier management, including the onboarding of new suppliers and synchronizing supplier data from Zycus to Ellipse.',
          'Managed the integration process between Zycus and Ellipse ERP, ensuring smooth operational flow.',
          'Conducted end-user training sessions, providing ad-hoc support to enhance system understanding and usage.'
        ]
      },
      {
        name: 'PROCUREMENT – ICT',
        responsibilities: [
          'Collaborated closely with the ICT sourcing team in the preparation and management of tender documents.'
        ]
      }
    ]
  },
  {
    title: 'Contracts Officer & Ariba Administrator',
    company: 'PANAUST LTD',
    period: 'Jul 2019 – Jun 2023',
    location: 'Brisbane, Australia',
    systems: [
      {
        name: 'COMMERCIAL CONTRACTS',
        responsibilities: [
          'Processed contract claims and invoices, ensuring timely and accurate billing.',
          'Monitored and managed contract milestones, ensuring compliance with agreed terms.',
          'Assisted the Sourcing and Contracts Superintendent in evaluating tender proposals, contributing to informed decision-making.',
          'Prepared comprehensive commercial contracts, service orders, and contract variations for multiple mining sites, ensuring adherence to legal and operational standards.'
        ]
      },
      {
        name: 'SAP – ECC',
        responsibilities: [
          'Responsible for creating Purchase Requisitions and Purchase Orders, ensuring procurement efficiency.',
          'Managed Goods Receipts or Service Entry Sheets, maintaining accurate inventory and service records.',
          'Set up Outline Agreements, optimizing contractual processes.',
          'Oversaw integration with Ariba, ensuring consistent syncing of business partner information.'
        ]
      },
      {
        name: 'SAP – ARIBA',
        responsibilities: [
          'Administered Supplier Management, including syncing suppliers from SAP ECC, enhancing supplier relationship management.',
          'Configured templates for Sourcing Requests, RFX, and Contract Workspace in the procurement domain, streamlining procurement operations.',
          'Conducted report analysis to identify and implement process improvements.',
          'Led the business analysis, development, testing, and implementation of Ariba\'s Source to Contract and Source to Pay processes, driving operational efficiency.',
          'Managed the integration between Ariba and SAP ECC, ensuring seamless data flow and system coherence.',
          'Developed comprehensive Ariba training materials and facilitated training sessions for all business users and suppliers, enhancing system proficiency across the organization.'
        ]
      }
    ]
  },
  {
    title: 'Contracts Administrator',
    company: 'CEVA LOGISTICS',
    period: 'Jan 2018 – Jul 2019',
    location: 'Auckland, NZ and Brisbane, Australia',
    responsibilities: [
      'Maintained inventory databases and conducted payroll operations using SAP and ADP systems.',
      'Enhanced quality control measures, ensuring compliance with operational standards.'
    ]
  },
  {
    title: 'Various Contract Positions',
    period: 'Nov 2013 – Dec 2017',
    location: 'Auckland, NZ',
    positions: [
      {
        role: 'REM Systems – Sales Administrator',
        description: 'Managed sales administrative tasks, supporting the sales team and ensuring smooth operations.'
      },
      {
        role: 'KiwiRail – Access & Protection Administrator',
        description: 'Oversaw access and protection processes, ensuring compliance and safety in operations.'
      },
      {
        role: 'Plantation Bamboo – Sales Consultant',
        description: 'Provided expert sales consultancy, enhancing customer engagement and driving sales performance.'
      },
      {
        role: 'Johnson & Johnson – Customer Services Administrator',
        description: 'Administered customer service operations, ensuring high standards of customer satisfaction and support.'
      },
      {
        role: 'ABB – Business Sales Support',
        description: 'Supported business sales through effective administrative assistance and coordination.'
      }
    ]
  },
  {
    title: 'Contracts Administrator',
    company: 'AIR NZ ENGINEERING',
    period: 'Apr 2005 – Jun 2013',
    location: 'Auckland, NZ',
    note: '(redundancy)',
    responsibilities: [
      'Managed order processing, including expediting, returns, and warranty claims, ensuring efficiency and customer satisfaction.',
      'Handled accounts-related tasks, including invoicing and issuing credits, maintaining financial accuracy and client trust.',
      'Managed inventory database using SAP, ensuring accurate and up-to-date record-keeping.',
      'Facilitated staff training, enhancing team skills and promoting continuous professional development.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group card-container"
              style={{ opacity: 0, animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards` }}
            >
              <div className="card">
                {/* Front of card */}
                <div className="card-face card-front">
                  <div className="p-8 bg-gray-800 rounded-lg h-full flex flex-col justify-center items-center text-center card-content">
                    <h3 className="text-3xl font-bold mb-4">{exp.title}</h3>
                    {exp.company && (
                      <p className="text-purple-400 text-xl mb-4">{exp.company}</p>
                    )}
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-gray-400 text-lg">{exp.period}</p>
                      {exp.note && (
                        <span className="text-gray-500 text-lg">
                          {exp.note}
                        </span>
                      )}
                      {exp.location && (
                        <span className="text-gray-400 text-lg">
                          {exp.location}
                        </span>
                      )}
                    </div>
                    <div className="flip-icon">
                      <ArrowUpRight className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="card-face card-back">
                  <div className="p-6 bg-gray-800 rounded-lg h-full overflow-y-auto card-content">
                    {exp.system && (
                      <div className="mb-4">
                        <p className="text-purple-400 font-semibold text-xl mb-3">{exp.system}</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-300 text-lg leading-relaxed">{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.systems && (
                      <div className="space-y-6">
                        {exp.systems.map((sys, idx) => (
                          <div key={idx}>
                            <p className="text-purple-400 font-semibold text-xl mb-3">{sys.name}</p>
                            <ul className="list-disc pl-6 space-y-2">
                              {sys.responsibilities.map((resp, respIdx) => (
                                <li key={respIdx} className="text-gray-300 text-lg leading-relaxed">{resp}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.positions && (
                      <div className="space-y-4">
                        {exp.positions.map((pos, idx) => (
                          <div key={idx} className="mb-4">
                            <p className="text-purple-400 font-semibold text-xl mb-2">{pos.role}</p>
                            <p className="text-gray-300 text-lg">{pos.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.responsibilities && !exp.system && !exp.systems && !exp.positions && (
                      <ul className="list-disc pl-6 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-300 text-lg leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}