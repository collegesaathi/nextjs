import React, { useState } from 'react';

const Durations = () => {
  const [activeTab, setActiveTab] = useState('duration');

  const content = {
    duration: [
      "Normally, an online MBA course will take two years, but the flexibility option can provide you with the advantage of completing the coursework within a period of up to 3-4 years, depending on the university.",
      "Part-time MBA is appropriate for career-focused professionals who are interested in maintaining their careers and obtaining education simultaneously. It generally suggests that the program may be slightly longer to accommodate a more relaxed schedule.",
      "Full-time MBA programs, however, provide a more immersive experience that enables students to finish their MBA within a brief period."
    ],
    fees: [
      "The fee structure for online MBA programs in India is highly competitive, generally ranging from ₹60,000 to ₹4,00,000 for the entire course.",
      "Top-tier private universities might have higher fee brackets but often provide extensive career support and global networking opportunities.",
      "Most institutions offer flexible payment plans, including semester-wise installments and EMI options to make education more accessible."
    ]
  };

  return (
    <div className="max-w-[1230px] mx-auto font-poppins text-[#282529] py-6 md:py-10 ">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-[20px] md:text-[28px] font-[600] mb-4 font-poppins">
          Duration & Fees of Online MBAs: What to Expect?
        </h2>
        <p className="text-[#282529] text-[16px] md:text-base leading-[28px] ">
          For online MBA programs in India, the duration and the cost are two important aspects. 
          Let us talk in detail about what you can expect regarding your time and money investment.
        </p>
      </div>

      {/* Main Feature Container */}
      <div className="bg-[#FFF5F5] rounded-[15px] md:rounded-[30px] p-2 md:p-6  flex flex-col md:flex-row gap-2 md:gap-8 items-center lg:items-start relative">
        
        {/* Left Side: Navigation & Illustration */}
        <div className="w-full md:w-1/4 flex md:flex-col gap-4  px-1 py-4 lg:p-10 ">
          <button
            onClick={() => setActiveTab('duration')}
            className={`w-full  py-4 md:px-4 text-center rounded-xl text-[16px] md:text-[20px] font-[600] font-popppins leading-[20px] transition-all  cursor-pointer duration-300 ${
              activeTab === 'duration' 
              ? 'bg-[#EE1E24] text-white shadow-lg' 
              : 'text-[#282529] hover:bg-[#ffe4e4]'
            }`}
          >
            Duration Range
          </button>
          
          <button
            onClick={() => setActiveTab('fees')}
            className={`w-full  md:py-4 md:px-4 text-center rounded-xl font-[600] text-[16px] md:text-[20px] font-popppins leading-[20px] transition-all  cursor-pointer duration-300 ${
              activeTab === 'fees' 
              ? 'bg-[#EE1E24] text-white shadow-lg ' 
              : 'text-[#282529] hover:bg-[#ffe4e4]'
            }`}
          >
            Fees Structure
          </button>

          {/* Illustration Placeholder (Matches the Money/Clock icon) */}
          <div className=" hidden md:block mt-6 flex justify-center md:justify-start">
            <div className=" w-32 h-32">
              {/* Note: You would replace this with your actual SVG or Image asset */}
          <div className='absolute bottom-0 left-0'><img src="/images/programs/watch.png" /></div>
             
            </div>
          </div>
        </div>

        {/* Right Side: Content Box */}
        <div className="flex-1 bg-gradient-to-b from-[#ffffff] via-[#fff6f7] to-[#ffeeef] border border-[#FFAAAA] rounded-[15px] p-2 md:p-10 min-h-[350px]">
          <ul className="space-y-[22px]">
            {content[activeTab].map((item, index) => (
              <li key={index} className="flex gap-4 group">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-[#282529] shrink-0"></span>
                <p className="text-[#282529] text-sm md:text-[16px] leading-[28px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-8 text-[#5c5c5c] text-sm md:text-[16px] leading-[28px]  font-[400] font-poppins ">
        If you're planning to enroll for an online MBA, it is recommended that you balance the program duration against your own timeline. 
        Comparison side by side of the duration and tuition of the best institutions can help you make the best decision.
      </p>
    </div>
  );
};

export default Durations;