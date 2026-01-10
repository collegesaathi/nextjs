import React from 'react';

const KeyHighlights = () => {
  const highlights = [
    {
      title: "Industry-Relevant Curriculum",
      description: "The Online MBA from accredited universities are offering advanced curriculum as it is designed in collaboration with industry experts covering various live projects and case studies to offer you practical insights.",
      position: "lg:col-start-2 lg:row-start-1"
    },
    {
      title: "Tech-Enabled Learning Experience",
      description: "An Online MBA is delivered with the use of high-tech systems, which satisfy all the educational standards. This includes AI-driven learning platforms, interactive videos, discussions and other live projects to make the learning interesting and engaging",
      position: "lg:col-start-1 lg:row-start-2"
    },
    {
      title: "Expert Faculty & Mentorship",
      description: "The Online MBA is one of the best options for the learners, as the program is delivered through the experts and industry practitioners. This expert faculty is dedicated to offering valuable insights with academic and real-world case studies.",
      position: "lg:col-start-3 lg:row-start-2"
    },
    {
      title: "Continuous Assessment & Real-Time Feedback",
      description: "Under an Online MBA, you don't have to wait for the exam to get feedback. With the help of projects, quizzes, case studies and assignments, you can get easy and quick feedback on your learning.",
      position: "lg:col-start-1 lg:row-start-3 lg:translate-x-12"
    },
    {
      title: "Global Perspective with Local Relevance",
      description: "An Online MBA will cover all the global and international business insights, which will be an addition to the learning of the students pursuing this online course.",
      position: "lg:col-start-3 lg:row-start-3 lg:-translate-x-12"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto  py-6 md:py-10 font-sans">
      {/* Main Beige Container */}
      <div className="bg-[#FFF9F1] rounded-[40px] relative pt-10  md:pt-20 pb-10 px-2 lg:px-4 ">
        
        {/* Top Header Banner */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[450px]">
          <div 
            className="bg-gradient-to-b from-[#E31C22] to-[#BF1318] text-white text-center py-3 font-[600] text-lg md:text-[20px] leading-[20px] rounded-b-[30px] shadow-md"
            style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }}
          >
            Key Highlights
          </div>
        </div>

        {/* Desktop Layout Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-3  gap-y-1 items-center">
          
          {/* Central Key Icon */}
          <div className="col-start-2 row-start-2 flex justify-center z-10">
            <div className="relative">
                {/* Glow Effect */}
               
                <img 
                    src="/images/programs/key.svg" // Replace with your actual key asset
                    alt="Key Icon" 
                    className="w-48 h-48 relative z-20 object-contain animate-pulse-slow top-10"
                />
            </div>
          </div>

          {/* Cards Mapping */}
          {highlights.map((item, index) => (
            <div key={index} className={`${item.position} relative z-20`}>
              <HighlightCard title={item.title} description={item.description} />
            </div>
          ))}
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="lg:hidden flex flex-col gap-6 mt-8">
          
            {highlights.map((item, index) => (
                <HighlightCard key={index} title={item.title} description={item.description} />
            ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

// Sub-component for the individual cards
const HighlightCard = ({ title, description }) => (
  <div className="relative pt-5 group h-full">
    {/* Red Header Pill */}
    <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#E31C22] to-[#BF1318] text-white px-6 py-2 leadinf-[22px] rounded-full text-[12px] md:text-[16px] font-[600] whitespace-nowrap z-30 shadow-md group-hover:scale-105 transition-transform line-clamp-1 ">
      {title}
    </div>
    
    {/* Description Box */}
<div className="
 w-full
 bg-[#FFF5F5]
 border border-[#FFD6D6]

 p-1 pt-6
 text-center
 shadow-sm
 h-full
 flex items-center justify-center
 overflow-hidden
">
  <p className="text-[#4A4A4A] text-[12px] leading-[18px] break-words">
    {description}
  </p>
</div>

  </div>
);

export default KeyHighlights;