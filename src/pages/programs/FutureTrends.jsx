import React, { useState } from 'react';

const FutureTrends = () => {
  const [activeTab, setActiveTab] = useState('evolution');

  const contentData = {
    aiEnabled: {
      title: "AI-Enabled Teaching and Personalized Learning Paths",
      intro: "Universities are leveraging artificial intelligence to create highly personalized educational journeys for every student:",
      points: [
        "AI algorithms analyze student performance to suggest personalized reading materials.",
        "Adaptive learning platforms that adjust difficulty levels based on real-time progress.",
        "Virtual teaching assistants (Chatbots) available 24/7 to resolve student queries instantly."
      ],
      footer: "These AI-driven personalized paths ensure that students with different learning speeds can achieve mastery of the subject matter without feeling left behind or bored."
    },
    hybrid: {
      title: "AI-driven Learning and Hybrid/Blended Modes",
      intro: "The future of MBA education lies in the seamless integration of online flexibility and physical networking:",
      points: [
        "Hybrid models offering occasional weekend campus visits for networking and workshops.",
        "Blended delivery of lectures using VR/AR to simulate a classroom environment from home.",
        "Cloud-based collaboration tools that allow global teams to work on business cases in real-time."
      ],
      footer: "Blended modes provide the 'best of both worlds,' giving working professionals the flexibility they need while maintaining the human connection essential for leadership roles."
    },
    evolution: {
      title: "Evolution of Management Education Innovations",
      intro: "Apart from technology, universities are also transforming curriculum design by incorporating:",
      points: [
        "AI-driven real-time business simulations.",
        "Live projects collaborated with top companies.",
        "Interactive videos, live and recorded lectures provide the freedom of pursuing the course more comfortably."
      ],
      footer: "These elements ensure a commitment to continuous improvement in the delivery of online MBA, with a balance of academic rigor and market focus. This continuous improvement of Online MBAs will ease online learning and prepare the students with advanced leadership skills and expertise."
    }
  };

  const tabs = [
    { id: 'aiEnabled', label: 'AI-Enabled Teaching and Personalized Learning Paths' },
    { id: 'hybrid', label: 'AI-driven Learning and Hybrid/Blended Modes' },
    { id: 'evolution', label: 'Evolution of Management Education Innovations' }
  ];

  return (
    <div className="max-w-[1230px] mx-auto font-poppins text-[#282529] py-12 md:px-0">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-[22px] md:text-[28px] font-[600] mb-4">
          Future Trends & Innovations in Online Education by Indian Institutes
        </h2>
        <p className="text-[#282529] text-[16px] leading-[28px] ">
          The online MBA learning landscape continuously growing with a mass digital transformation with technological advancements 
          and changing student expectations. Indian universities are leading the way in adopting new-generation solutions 
          that reimagine the delivery and experience of management education.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className='overflow-x-auto mb-12 max-w-6xl mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-[10px]   '>
      <div className="flex  bg-white border border-gray-100  min-w-[500px]  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`md:px-6 py-8 text-[14px] md:text-[16px] font-[400] leading-[20px] transition-all duration-300 relative border-r-[1px] border-[#BDBDBD] last:border-r-0
              ${activeTab === tab.id 
                ? 'text-[#EE1E24]' 
                : 'text-[#888] hover:bg-gray-50'
              }`}
          >
            {tab.label}
            {/* Red underline for active tab */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-[4px] bg-[#EE1E24] rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="transition-opacity duration-300">
        <h3 className="text-[18px] md:text-[20px] font-[600] mb-4">
          {contentData[activeTab].title}
        </h3>
        
        <p className="text-[#282529] text-[16px] mb-6">
          {contentData[activeTab].intro}
        </p>

        {/* List with Red Play Icons */}
        <ul className="md:space-y-4 mb-8">
          {contentData[activeTab].points.map((point, index) => (
            <li key={index} className="flex items-center gap-3 group">
              <span className="mt-1 flex-shrink-0">
       <img src="/images/programs/arrow.png" />
              </span>
              <p className="text-[#282529] text-[16px] font-[400] leading-[28px]">
                {point}
              </p>
            </li>
          ))}
        </ul>

        {/* Closing Paragraph */}
        <p className="text-[#282529] text-[16px] leading-[28px] font-[400]">
          {contentData[activeTab].footer}
        </p>
      </div>
    </div>
  );
};

export default FutureTrends;