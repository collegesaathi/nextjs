import React from 'react';
import { BiSolidMessageRoundedError } from "react-icons/bi";

const Jobroles = () => {
  const opportunities = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
      title: "Career Acceleration for Working Professionals",
      desc: "For working professionals, an Online MBA is a career booster as it makes them ready for management and leadership roles. The masters and MBA holding candidates within the company are the preference of most companies for promotions, raises, and leadership training programs.",
      gradient: "from-[#FF9B9B] to-[#FFD18E]"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2103/2103633.png",
      title: "Promotion to Mid and Senior-Level Roles",
      desc: "These top-ranked online MBA graduates are being hired for positions such as Business Analyst, Product Manager, Marketing Manager, HR Business Partner, and Operations Head in increasing numbers. By getting experience and an Online MBA degree, the candidates can step into positions of strategic decision-making.",
      gradient: "from-[#FFD18E] to-[#FFB08E]"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1189/1189132.png",
      title: "Corporate Tie-Ups and Placement Assistance",
      desc: "Top UGC-approved online MBA universities (like NMIMS, Amity, and Jain University) offer placement assistance, career counseling, and industry connection, with access to hiring managers of leading IT, finance, e-commerce, consulting, and other firms.",
      gradient: "from-[#FF9B9B] to-[#FFD18E]"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2333/2333140.png",
      title: "Global and Remote Job Opportunities",
      desc: "An Online MBA increases your potential for working for global business worlds, as the robust curriculum provides high-level skills in international, hybrid, and remote jobs, especially in positions like digital marketing, business analytics, project management, and fintech.",
      gradient: "from-[#FF9B9B] to-[#FFD18E]"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
      title: "Start-up and Entrepreneurship Opportunities",
      desc: "With applied skills in operations, strategy, and finance, Online MBA have the ability to become entrepreneurs or start-up leaders where cross-functional capability is highly valued.",
      gradient: "from-[#FFD18E] to-[#FFB08E]"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1256/1256650.png",
      title: "Switching Career in different departments",
      desc: "With different specializations, you can switch your career from one field to another. Online MBA provides you the opportunity of gaining industry-specific skills with management skills.",
      gradient: "from-[#FF9B9B] to-[#FFD18E]"
    }
  ];


    const documents = [
    "Mark sheets and degree certificate of graduation",
    "Identity proof: Aadhaar, Passport, or Driving License",
    "Resume or professional experience certificate",
    "Passport-size photographs"
  ];

  // Function to alternate border config based on index
  const getBorderConfig = (index) => {
    const configs = [
      "border-t-[5px] ",
      "border-b-[5px]",
      "border-t-[5px]",
      "border-b-[5px] "
    ];
    return configs[index % configs.length];
  };

  return (
    <>
      <div className='max-w-[1230px] mx-auto font-poppins text-[#282529] md:px-4 py-8'>
        <div>
          <h2 className="text-[20px]  font-[600] font-poppins mb-4 leading-[28px]">
          Top Job Roles After Completing an MBA in HR
          </h2>
          <p className="text-[#282529] text-[16px] leading-[28px] ">
            An Online MBA can upgrade your career in work by preparing you with modern & professional skills, leadership abilities, and business knowledge. As companies have accepted online degrees, career opportunities are rapidly increasing for online students.
          </p>
        </div>
      </div>

      <section className=" px-2 md:px-8 font-sans">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((item, index) => (
              <div 
                key={index} 
                className={`relative bg-[#FEF8F6] rounded-[18px] shadow-sm flex flex-col min-h-[300px] overflow-hidden group`}
              >
                {/* Gradient Border */}
{/* Top / Bottom Gradient Border */}
<div className="absolute inset-0 pointer-events-none">
  {index % 2 === 0 ? (
    // 🔹 TOP BORDER
    <div
      className="absolute top-0 left-0 w-full h-[4px] rounded-t-[18px]"
      style={{
        background:
          "linear-gradient(to right, rgba(255,176,176,1), rgba(249,206,149,1))",
      }}
    />
  ) : (
    // 🔹 BOTTOM BORDER
    <div
      className="absolute bottom-0 left-0 w-full h-[4px] rounded-b-[18px]"
      style={{
        background:
          "linear-gradient(to right, rgba(255,176,176,1), rgba(249,206,149,1))",
      }}
    />
  )}
</div>



                <div className="p-2 md:p-4 flex flex-col h-full relative z-10 bg-white/20 font-poppins">
                  <div className="mb-6">
                    <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-[14px] font-[600] text-[#282529] mb-4 leading-[14px]">
                    {item.title}
                  </h3>
                  <p className="text-[#282529] text-[14px] leading-[24px] font-normal line-clamp-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>


              <div className="mb-8 mt-10 ">
                <h3 className="text-[20px] font-[600] leading-[27px] mb-4">
                  Documents Usually Required for Admission
                </h3>
                <p className="text-[#282529] text-[16px] leading-[28px] mb-6">
                  While the requirements may vary from one university to another, applicants are usually required to submit the following documents:
                </p>
        
                <div className="space-y-4 mb-8">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <div className="flex-shrink-0">
                   
                         <img src="/images/programs/arrow.svg" />
                      </div>
                      <p className="text-[16px] leading-[24px] text-[#282529]">
                        {doc}
                      </p>
                    </div>
                  ))}
                </div>
        
                {/* Info Note Footer */}
                <div className="rounded-2xl flex gap-3 items-center  w-fit">
               
                  <p className="text-[14px] italic text-[#282529] font-[400]">
                    Check the admission process and documents required, as it may vary from university to university.
                  </p>
                </div>
              </div>
        </div>


      
      </section>
    </>
  );
};

export default Jobroles;
