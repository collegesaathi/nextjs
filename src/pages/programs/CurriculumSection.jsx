import React from 'react';
import { 
  Users, 
  Target, 
  Calculator, 
  TrendingUp, 
  Settings, 
  ShieldCheck, 
  Scale, 
  UserPlus, 
  Lightbulb 
} from 'lucide-react';

const CurriculumSection = () => {
  const curriculumItems = [
    {
      icon: <Users size={16} />,
      title: "Leadership and Organizational Behaviour:",
      desc: "Learning various methods and strategies to improve productivity levels of the team and manage various departments in the company."
    },
    {
      icon: <Target size={16} />,
      title: "Marketing Management:",
      desc: "Learning basics of marketing, market research methodologies, understanding customer behavior and boosting brand awareness."
    },
    {
      icon: <Calculator size={16} />,
      title: "Financial Accounting and Management:",
      desc: "Fundamental accounting concepts, exploring financial analysis, budgeting, and making wise investment decisions."
    },
    {
      icon: <TrendingUp size={16} />,
      title: "Economics for Business:",
      desc: "Understanding micro and macroeconomic principles that businesses depend on."
    },
    {
      icon: <Settings size={16} />,
      title: "Operations Management:",
      desc: "Focused on supply chain management, production planning, quality control, and process optimization strategies."
    },
    {
      icon: <ShieldCheck size={16} />,
      title: "Strategic Management:",
      desc: "Ability to develop, implement, and analyze business strategies to gain a competitive edge."
    },
    {
      icon: <Scale size={16} />,
      title: "Business Ethics and Corporate Governance:",
      desc: "Striding through ethics decision-making models and embracing practices of sustainability."
    },
    {
      icon: <UserPlus size={16} />,
      title: "Human Resource Management:",
      desc: "From recruiting talents to managing performance, employees' relations, and legalities."
    },
    {
      icon: <Lightbulb size={16} />,
      title: "Entrepreneurship:",
      desc: "Recognizing opportunities, designing business models, securing finance, and leading innovation."
    }
  ];

  return (
    <>
    <div className='max-w-[1230px] mx-auto font-poppins text-[#282529] md:px-4 py-12'>
         <div className="">
          <h2 className="text-[20px] md:text-[28px] font-[600] font-poppins mb-4 leading-[28px]">
            Curriculum & Specializations in Online MBA Programs
          </h2>
          <p className="text-[#282529] text-[16px] leading-[28px] ">
            The Online MBA curriculum subjects are designed in such a way that they cover all the major in-demand topics to prepare the students with 
            proper skills that match the modern business world. The learners get the opportunity to explore all the foundational and advanced topics, 
            equipping students with managerial expertise and strategic thinking.
          </p>
        </div>

    </div>
    <div className='bg-[#FFF7F4]'>
      <div className="max-w-[1230px] mx-auto font-poppins text-[#282529] px-2 md:px-4 py-4 md:py-12">
        {/* Header Section */}
     

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left Side: Timeline */}
          <div className="w-full lg:w-3/5 font-poppins">
            <h3 className="text-[16px] md:text-[20px] font-[600] leading-[28px] mb-8">Core Subjects Typically Covered</h3>
            
            <div className="relative">
              {curriculumItems.map((item, index) => (
                <div key={index} className="flex gap-2 md:gap-6 mb-8 group relative ">
                  {/* Vertical Line */}
                  {index !== curriculumItems.length - 1 && (
                    <div className="absolute left-[15px] top-8 w-[1px] h-[calc(100%+8px)] bg-[#ed1c24]/30"></div>
                  )}

                  {/* Red Icon Circle */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border border-[#ed1c24] flex items-center justify-center bg-[#EE1E24] text-white group-hover:bg-white group-hover:text-[#EE1E24] transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="pt-0.5">
                    <h4 className="font-poppins text-[14px] md:text-[16px] font-[600] mb-1 leading-[24px] md:leading-[30px]">
                      {item.title}
                    </h4>
                    <p className="font-poppins text-[14px] md:text-[16px] font-[400] mb-1 leading-[24px] md:leading-[30px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Illustration at the bottom */}
        <div className="hidden  w-full lg:w-2/5 lg:flex flex-col justify-end min-h-[400px]">
  <div className="relative w-full max-w-[450px] lg:ml-auto">

    {/* Main Illustration */}
    <img 
      src="/images/programs/curriculum.png"
      alt="MBA Illustration"
      className="w-full h-auto relative z-10 block"
    />

    {/* Decorative Circle 1 (upper right) */}
    <div
      className="absolute -top-36 right-4 w-60 h-60 rounded-full z-8 opacity-70"
      style={{
       background:
      "linear-gradient(209.44deg, rgba(252,204,186,1) 7.29%, rgba(255,255,255,1) 81.96%)"
      }}
    ></div>

    {/* Decorative Circle 2 (bottom left) */}
  <div
  className="absolute bottom-130 left-10 w-60 h-60 rounded-full z-8 opacity-40"
  style={{
 
         background: "linear-gradient(to bottom right, rgba(252, 204, 186, 10) 0.29%, rgba(255,255,255,0.3) 81.96%)"
  }}
></div>


  </div>
</div>


        </div>
      </div>
    </div>
    </>
  );
};

export default CurriculumSection;