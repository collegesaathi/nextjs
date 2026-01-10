import React from 'react';

const InfoSection = () => {

  const waveBars = [
    12, 18, 14, 14, 22, 20, 28, 20, 22, 34, 24, 26, 18, 18, 38, 22, 24, 30, 36, 28, 20, 14, 18, 12, 28, 38, 32, 24, 30, 36, 28, 20, 14, 18, 12,28, 20, 14, 18, 12, 28, 38, 32, 24, 30, 36, 28, 20, 14, 18, 12
  ];

  return (
    <div className="max-w-[1230px] mx-auto font-poppins text-[#282529] py-6 md:py-10">
 
      <div className="space-y-6 mb-12">
        <h2 className="text-[28px] md:text-3xl font-[600] leading-[28px]">
          Understanding Online MBA Programs in India
        </h2>
        
        <p className="leading-[28px] text-[16px] text-[#282529] font-[400]">
          <span className="font-[600]">Online MBA programs in India</span> have become increasingly popular because of flexibility, affordability, and accessibility for working professionals and learners. The syllabus for these programs is designed to offer similar academic advantages to traditional MBAs so that the working professionals can improve themselves while learning from anywhere and at their own pace. Top Indian universities are
           <span className="font-[600] ml-1">recognized by UGC-DEB</span> qualifications in online MBA with a wide range of specializations such as Marketing, Finance, HR, Business Analytics, and so on.
        </p>

        <p className="leading-[28px] text-[16px] text-[#282529] font-[400]">
          So, an <span className="font-[600]">Online MBA in India</span> usually takes 2 years, which are supported with <span className="font-[600]">advanced LMS</span> including video lectures, virtual classrooms, assignments, and online examinations. Some programs include live interaction sessions, webinars, and career services for better learning outcomes. It will be very beneficial for the working professionals and the busy learners to learn new things without quitting their jobs and compromising with any obligations.
        </p>

        <p className="leading-[28px] text-[16px] text-[#282529] font-[400]">
          If you are an individual looking to increase career growth, start his/her own venture, or switch to a managerial role, the <span className="font-[600]">online MBA program in India</span> would prove to be a smart investment for a bright future.
        </p>
      </div>

      {/* Audio CTA Card */}
      <div className="relative w-full max-w-[1075px] mx-auto rounded-[14px] md:rounded-[40px]  bg-gradient-to-r from-[#FFD6D6] via-[#FFFFFF]/70 to-[#FFE3D3]/30 border border-red-100 p-2  md:p-4 lg:p-12 flex flex-row items-center justify-between overflow-hidden shadow-sm">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start z-10">
          <span className="text-[10px] md:text-[12px] text-gray-500 mb-2">4x productivity today</span>
          <h3 className="text-[20px] md:text-[56px] font-[600] md:mb-8 leading-[24px] md:leading-[57px] tracking-[0]">
            Get the info<br />4x Faster
          </h3>
          <button className="bg-[#EC1E24] hover:bg-[#d61a20] mt-2 md:mt-0 transition-colors text-white px-2 py-1 md:px-8 md:py-3 rounded-xl font-[400] text-[14px] leading-[14px]">
            Listen Now
          </button>
        </div>

        {/* Right Side: Waveform Box */}
        <div className="relative  w-[190px] md:w-[400px] lg:w-[450px] h-[50px] md:h-[160px] bg-white/80 rounded-[30px] border border-white shadow-xl flex items-center justify-center px-8">
          <div className="flex items-center gap-[2px] md:gap-[4px] h-12 ">
            {waveBars.map((height, index) => (
              <div
                key={index}
                className="w-[1px] md:w-[3px] bg-red-500 rounded-full opacity-80"
                style={{ 
                  height: `${height}px`,
                  // Optional: add a tiny animation delay for each bar if you want them to move
                  animation: `simple-bounce 1.5s ease-in-out infinite ${index * 0.1}s` 
                }}
              />
            ))}
            {/* Faded end bars to match the image gradient effect */}
            {[18, 14, 10].map((height, index) => (
              <div
                key={`fade-${index}`}
                className="w-[3px] bg-red-200 rounded-full"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-100/30 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes simple-bounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.3); }
        }
      `}</style>
    </div>
  );
};

export default InfoSection;