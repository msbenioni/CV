import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden"
              onClick={() => toggleExperience(index)}
            >
              <div className="p-6 sm:p-8 cursor-pointer">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{experience.company}</h3>
                    <p className="text-base sm:text-lg text-purple-300">{experience.title}</p>
                  </div>
                  <div className="flex items-center mt-2 lg:mt-0">
                    <p className="text-sm sm:text-base text-gray-400 mr-4">
                      {experience.period} • {experience.location}
                    </p>
                    <ChevronDown
                      className={`w-6 h-6 text-purple-300 transition-transform duration-300 ${
                        expandedExperience === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`mt-4 overflow-hidden transition-all duration-300 ${
                    expandedExperience === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-3">
                    {experience.responsibilities && experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 mt-2"></span>
                        <span className="text-sm sm:text-base text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                    {experience.systems && experience.systems.map((system, sysIndex) => (
                      <li key={sysIndex} className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 mt-2"></span>
                          <span className="text-sm sm:text-base font-medium text-purple-300">{system.name}</span>
                        </div>
                        <ul className="ml-6 space-y-2">
                          {system.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-3">
                              <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500/50 mt-2"></span>
                              <span className="text-sm sm:text-base text-gray-300">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                    {experience.positions && experience.positions.map((position, posIndex) => (
                      <li key={posIndex} className="space-y-1">
                        <div className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 mt-2"></span>
                          <span className="text-sm sm:text-base font-medium text-purple-300">{position.role}</span>
                        </div>
                        <p className="ml-5 text-sm sm:text-base text-gray-300">{position.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {expandedExperience !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-sm text-purple-300">Tap to view details</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}