import React from 'react';

const FinancialAidSection = () => {
  return (
    <div className="max-w-[1230px] mx-auto font-poppins text-[#282529] py-6 md:py-10 loan md:px-4">
      {/* Header Section */}
      <div className=" mb-2 md:mb-10">
        <h2 className="text-[20px] md:text-[28px] font-[600] mb-4">
          Financial Aid & Scholarships for Online MBAs in India
        </h2>
        <p className="text-[#5c5c5c] text-[16px] leading-[28px]">
          When you are planning to do an Online MBA in India, financial help like scholarships, grants, and loans can really make a great difference in 
          making education affordable. The following are the details of some financial aid to allow you to make the smart decision:
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10">
        
        {/* CARD 1: Scholarships */}
        <div className="group relative bg-[#EEEEEE] rounded-[30px] overflow-hidden flex flex-col transition-all duration-500 cursor-pointer  h-[200] md:h-[450px]">
          
          {/* Image Section - Shrinks on hover */}
          <div className='bg-[#EEEEEE]  '>
          <div className="relative w-full h-[200] md:h-[450] group-hover:h-[250px] transition-all duration-500 ease-in-out p-2 md:p-4 group-hover:p-3">
             <div className="relative w-full h-full overflow-hidden  group-hover:rounded-[20px] transition-all duration-500">
                <img 
                  src="/images/programs/scholarbg.png"
                  alt="Scholarships"
                  className="w-full h-full object-cover  rounded-[20px]  "
                />
                
                {/* Dark Overlay - Strictly on image, fades on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 rounded-[20px] group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Initial Title - Fades out on hover */}
                <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 right-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-[14px] md:text-[24px] font-[600] leading-[23px] md:leading-[34px] font-poppins">
                    1. Scholarships for Working Professionals
                  </h3>
                </div>
             </div>
          </div>
          </div>

          {/* Detailed Content Section - Slides up on hover */}
          <div className="h-0 my-4 bg-[#EEEEEE] opacity-0 group-hover:h-[270px] group-hover:opacity-100 transition-all  duration-500 ease-in-out overflow-hidden flex flex-col relative">
            <div className="p-6 pt-2 overflow-y-auto custom-scroll h-full">
                <h3 className="text-[14px] md:text-[24px] font-[600] mb-3 text-[#282529]">
                  1. Scholarships for Working Professionals
                </h3>
                <p className="text-[#282529] text-[14px] md:text-[16px] leading-[28px] pr-4">
                  Many universities offer merit-based and need-based scholarships specifically for corporate professionals. 
                  These grants can cover up to 20-50% of the tuition fee, helping you manage your education expenses without 
                  financial strain while continuing your career. 
                  {/* Extra text to demonstrate scroll */}
                  This support ensures that high-quality education remains accessible to talented individuals across various industries.
                </p>
            </div>
            {/* Accent Line */}
        
          </div>
        </div>

        {/* CARD 2: Loan Facilities */}
       <div className="group relative bg-[#EEEEEE] rounded-[30px] overflow-hidden flex flex-col  transition-all duration-500 cursor-pointer h-[200] md:h-[450px]">
          
          {/* Image Section - Shrinks on hover */}
          <div className='bg-[#EEEEEE]  '>
          <div className="relative w-full  h-[200] md:h-[450] group-hover:h-[250px] transition-all duration-500 ease-in-out p-2 md:p-4 group-hover:p-3">
             <div className="relative w-full h-full overflow-hidden  group-hover:rounded-[20px] transition-all duration-500">
                <img 
                  src="/images/programs/loanbg.png"
                  alt="Scholarships"
                  className="w-full h-full object-cover  rounded-[20px]  "
                />
                
                {/* Dark Overlay - Strictly on image, fades on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 rounded-[20px] group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Initial Title - Fades out on hover */}
                <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 right-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white text-[14px] md:text-[24px] font-[600] leading-[23px] md:leading-[34px] font-poppins" >
                1. Loan Facilities for Distance Learning
    Candidate
                  </h3>
                </div>
             </div>
          </div>
          </div>

          {/* Detailed Content Section - Slides up on hover */}
          <div className="h-0 my-4 bg-[#EEEEEE] opacity-0 group-hover:h-[270px] group-hover:opacity-100 transition-all  duration-500 ease-in-out overflow-hidden flex flex-col relative">
            <div className="p-6 pt-2 overflow-y-auto custom-scroll h-full">
                <h3 className="text-[14px] md:text-[24px] font-[600] mb-3 text-[#282529]">
                 1. Loan Facilities for Distance Learning Candidate
                </h3>
                <p className="text-[#282529] text-[14px] md:text-[16px] leading-[28px] pr-4">
               Banks and educational financial institutions also offer loan programs exclusively designed for distance learning students. These loans offer financial assistance to students pursuing online MBA programs, helping them pay tuition
                  {/* Extra text to demonstrate scroll */}
                  This support ensures that high-quality education remains accessible to talented individuals across various industries.
                </p>
            </div>
            {/* Accent Line */}
        
          </div>
        </div>

      </div>

      {/* Quote Footer */}
      <div className="bg-[#FFEDCC] border border-[#FFAD60] rounded-lg py-2">
        <p className="text-[#282529] italic text-xs md:text-[14px] text-center">
          "By exploring these sources of financial assistance, potential online MBA students in India can minimize some of the financial issues connected with higher education"
        </p>
      </div>
    </div>
  );
};

export default FinancialAidSection;