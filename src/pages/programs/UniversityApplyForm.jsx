import React from 'react';
import { CheckCircle2 } from 'lucide-react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


 const slideData = [
    {
      title: "Find your perfect online course with CS Clickpick",
      feature: "Compare your preferred universities at one click",
    },
    {
      title: "Get expert career counseling for free",
      feature: "Top rated mentors from global industries",
    },
    {
      title: "Scholarships up to 50% for top courses",
      feature: "Affordable education at your fingertips",
    }
  ];


const UniversityApplyForm = () => {
  return (
    <div className="max-w-[1230px] mx-auto my-10 bg-white md:rounded-[40px] md:shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden md:border border-gray-100  md:p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT SECTION: BRANDING & GRAPHIC */}
      <div className="hidden lg:flex w-full lg:w-[45%] bg-[url('/images/programs/formbg.png')] bg-no-repeat bg-cover rounded-[30px] py-6 relative flex-col items-center min-h-[550px]">
          
          <div className="w-full px-12 pt-10 form">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
              }}
              className="mySwiper "
            >
              {slideData.map((slide, index) => (
                <SwiperSlide key={index} className="!flex justify-center">
                  <div className="w-[330px] h-[346px] bg-[url('/images/programs/enquirybg.png')] bg-no-repeat bg-cover rounded-[25px] relative">
                    
                    {/* Floating Callout */}
                    <div className="absolute top-8 -right-8 bg-white shadow-lg rounded-[7px] px-2 py-3 max-w-[167px] border border-gray-100 z-10 animate-bounce-slow">
                      <div className="absolute -left-2 top-4 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-white border-b-[8px] border-b-transparent"></div>
                      <p className="text-[12px] text-[#282529] leading-[16px]">
                        {slide.title}
                      </p>
                      <div className="absolute -top-2 -left-1 w-5 h-5 bg-[#E34B4F] rounded-full"></div>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute top-2/3 -left-12 -translate-y-1/2 bg-white shadow-2xl rounded-[21px] px-2 py-4 w-[160px] flex flex-col items-center text-center border border-gray-50 z-20">
                      <div className="rounded-lg flex items-center justify-center">
                        <img src="/images/programs/scholarhat.svg" alt="icon" className="w-[62px] h-[62px]" />
                      </div>
                      <p className="text-[12px] text-[#282529] leading-[16px]">
                        {slide.feature}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Container */}
            <div className="custom-pagination flex gap-1 mt-10 justify-center "></div>
          </div>

          {/* Bottom Logos Section */}
          <div className="mt-auto w-full text-center ">
            <p className="text-white text-[14px] uppercase tracking-widest font-[400] mb-3 mt-4 ">Top Universities</p>
            <div className="flex gap-2 items-center px-4  grayscale brightness-200 overflow-hidden mb-2">
              <img src="/images/programs/formlogo.png" className=" object-cover" alt="Logo" />
              <img src="/images/programs/formlogo1.png" className=" object-cover" alt="Logo" />
              <img src="/images/programs/formlogo2.png" className=" object-cover" alt="Logo" />
              <img src="/images/programs/formlogo3.png" className=" object-cover" alt="Logo" />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: FORM */}
        <div className="w-full lg:w-[55%] py-4 px-2">
          
          {/* Top Experts Header */}
          <div className="flex items-center gap-2 justify-center  mb-4">
             <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="exp" /></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-400 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="exp" /></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-black flex items-center justify-center text-[8px] text-white">10+</div>
             </div>
             <p className="text-gray-600 text-[13px] font-medium">Connect with Collegesathi experts</p>
          </div>

          <h2 className="text-2xl md:text-[28px] font-[600] text-[#282529] text-center  leading-tight mb-6">
            Apply from 100+ Online Approved Universities
          </h2>

          <div className="h-[1px] bg-gray-100 w-full mb-6"></div>

          {/* Feature highlights */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#EC1E24]" fill="currentColor" color="white" />
                <span className="text-[14px] font-[400] text-[#282529]">No-Cost EMI From <span className="text-[#EC1E24] font-[600]">₹4,585</span></span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#EC1E24]" fill="currentColor" color="white" />
                <span className="text-[14px] font-[400] text-[#282529]">Exclusive <span className="text-[#EC1E24]  font-[600]">Placement</span> Support</span>
             </div>
          </div>

          {/* FORM FIELDS */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins">
              <div className="space-y-1.5">
                <label className="text-[14px] text-gray-600 ml-1 leading-[14px]">Full name*</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EC1E24] outline-none text-sm placeholder:text-gray-300" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[14px] text-gray-600 ml-1 leading-[14px]">Email address*</label>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EC1E24] outline-none text-sm placeholder:text-gray-300" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[14px] text-gray-600 ml-1 leading-[14px]">Mobile number*</label>
                <input type="tel" placeholder="Enter your number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EC1E24] outline-none text-sm placeholder:text-gray-300" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[14px] text-gray-600 ml-1 leading-[14px]">OTP*</label>
                <input type="text" placeholder="Enter 6 digit number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#EC1E24] outline-none text-sm placeholder:text-gray-300" />
              </div>
            </div>

            {/* Checkbox authorization */}
            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" className="mt-1 accent-[#EC1E24]" id="auth" defaultChecked />
              <label htmlFor="auth" className="text-[14px] leading-relaxed text-gray-600 font-400">
                I here by authorize you to send notifications via <span className="font-[600] text-gray-800">SMS/RCS Messages, Promotional / Informational Messages.</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-[#EC1E24] hover:bg-[#c4191e] transition-all text-white font-[600] py-1 md:py-4 rounded-[12px] text-[24px] shadow-lg shadow-red-200 mt-2">
              Apply Now
            </button>
          </form>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default UniversityApplyForm;