import React from 'react';

const PlacementOpportunities = () => {
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
          <h2 className="text-[20px] md:text-[28px] font-[600] font-poppins mb-4 leading-[28px]">
            Placement Opportunities After an Online MBA Degree
          </h2>
          <p className="text-[#282529] text-[16px] leading-[28px] ">
            An Online MBA can upgrade your career in work by preparing you with modern & professional skills, leadership abilities, and business knowledge. As companies have accepted online degrees, career opportunities are rapidly increasing for online students.
          </p>
        </div>
      </div>

      <section className="bg-[#FFF4E6] py-12 px-2 md:px-8 font-sans">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((item, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-[18px] shadow-sm flex flex-col min-h-[300px] overflow-hidden group`}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-[18px] pointer-events-none ${getBorderConfig(index)} border-transparent bg-origin-border bg-clip-border`}
                     style={{
                       backgroundImage: `linear-gradient(white, white), linear-gradient(to right, ${item.gradient.replace("from-", "").replace(" to-", ",")})`,
                       backgroundClip: 'padding-box, border-box',
                       backgroundOrigin: 'padding-box, border-box',
                     }}>
                </div>

                <div className="p-2 md:p-4 flex flex-col h-full relative z-10 font-poppins">
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
        </div>
      </section>
    </>
  );
};

export default PlacementOpportunities;
