import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const UniversityApplyForm = () => {
  return (
    <div className="max-w-[1230px] mx-auto my-10 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT SECTION: BRANDING & GRAPHIC */}
        <div className="w-full lg:w-[45%] bg-[#EC1E24] rounded-[30px] p-6 relative flex flex-col items-center min-h-[450px]">
          
          {/* Main Decorative Frame */}
          <div className="w-full h-[300px] bg-white rounded-[25px] mt-4 relative">
            
            {/* Floating Callout Top Right */}
            <div className="absolute -top-2 -right-4 bg-white shadow-lg rounded-xl p-3 max-w-[140px] border border-gray-100 z-10 animate-bounce-slow">
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-white border-b-[8px] border-b-transparent"></div>
              <p className="text-[10px] font-semibold text-gray-700 leading-tight">
                Find your perfect online course with CS Clickpick
              </p>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#EC1E24] rounded-full"></div>
            </div>

            {/* Floating Card Left Center */}
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white shadow-2xl rounded-2xl p-4 w-[140px] flex flex-col items-center text-center gap-2 border border-gray-50 z-20">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <img src="/images/icons/mortarboard-red.svg" alt="icon" className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-bold text-gray-800 leading-tight">
                Compare your preferred universities at one click
              </p>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-1 mt-6">
            <div className="w-4 h-1 bg-white rounded-full"></div>
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
            <div className="w-2 h-1 bg-white/50 rounded-full"></div>
          </div>

          {/* Bottom Logos Section */}
          <div className="mt-auto w-full text-center">
            <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold mb-3">Top Universities</p>
            <div className="flex justify-between items-center px-2 opacity-90 grayscale brightness-200 overflow-hidden">
                <img src="/images/logos/manipal-logo-white.png" className="h-6 object-contain" alt="Manipal" />
                <img src="/images/logos/manipal-logo-white.png" className="h-6 object-contain" alt="Manipal" />
                <img src="/images/logos/manipal-logo-white.png" className="h-6 object-contain" alt="Manipal" />
                <img src="/images/logos/manipal-logo-white.png" className="h-6 object-contain" alt="Manipal" />
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
              <label htmlFor="auth" className="text-[11px] leading-relaxed text-gray-600 font-medium">
                I hereby authorize you to send notifications via <span className="font-bold text-gray-800">SMS/RCS Messages, Promotional / Informational Messages.</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-[#EC1E24] hover:bg-[#c4191e] transition-all text-white font-extrabold py-4 rounded-xl text-xl shadow-lg shadow-red-200 mt-2">
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