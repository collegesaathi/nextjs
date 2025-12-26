import Link from "next/link";
import { Download } from "lucide-react"; // Assuming lucide-react is installed

export default function ProgramHero() {
  return (
    <section className="w-full bg-white py-6">
      <div className="mx-auto container xl:max-w-[1230px]  md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-2 md:gap-6 font-poppins">
       

            {/* Title */}
            <h1 className="text-[24px] md:text-[34px] font-[600] text-[#1E1E1E] leading-[28px] md:leading-[40px]">
              Online MBA: <br />
              The Ultimate Guide for 2025
            </h1>

            {/* Description */}
            <p className="text-[#282529] text-[16px]  leading-[28px] max-w-[500px]">
              The world of higher education is constantly changing, and in 2025, 
              Online MBAs are becoming increasingly popular. Online MBAs allow one 
              to gain a highly valued online degree without attending the physical 
              classroom. This ease makes online MBAs even more appealing to professionals 
              looking to advance their careers and sharpen their...
              <span className="text-[#E81D23]  cursor-pointer ml-1 underline decoration-1">
                Read More
              </span>
            </p>

            {/* Download Button */}
            <button className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#EC1E24] to-[#B91217] hover:bg-[#c4191e] transition-colors text-white leading-[28px] px-4 md:py-3 md:px-8 rounded-full w-fit shadow-lg mt-2">
              <Download size={18} strokeWidth={3} />
              <span className="text-[16px] md:text-[24px]">Download PDF</span>
            </button>
          </div>

          {/* RIGHT IMAGE SECTION WITH OVERLAYS */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="rounded-[40px] overflow-hidden shadow-xl ">
              <img 
                src="/images/programs/programhero.png" // Replace with your image path
                alt="Professional woman using laptop"
                className="w-full h-auto object-cover min-h-[400px]"
              />
            </div>

            {/* Floating Overlay: Top Left Tag */}
            <div className="absolute top-[20%] -left-4 md:-left-8 bg-white/90 backdrop-blur-sm p-2 px-4 rounded-full shadow-lg flex items-center gap-3 animate-bounce-slow">
              <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">Lorem ipsum do</span>
              <div className="bg-[#EC1E24] rounded-full p-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </div>
            </div>

            {/* Floating Overlay: Middle Right Tag */}
            <div className="absolute bottom-[30%] -right-4 bg-white/90 backdrop-blur-sm p-2 px-4 rounded-full shadow-lg flex items-center gap-3">
              <div className="bg-[#EC1E24] rounded-full p-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">Lorem ipsum</span>
            </div>

            {/* Floating Overlay: Bottom Stats Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-2xl w-[220px] md:w-[260px] border border-gray-100">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-3xl font-bold text-gray-800">95%</h4>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">Lorem ip</span>
               </div>
               {/* Decorative Bar Chart */}
               <div className="flex items-end gap-2 h-16">
                  <div className="w-full bg-[#fce8e9] rounded-t-full h-[40%]"></div>
                  <div className="w-full bg-[#EC1E24] rounded-t-full h-[70%]"></div>
                  <div className="w-full bg-[#EC1E24] rounded-t-full h-[95%]"></div>
                  <div className="w-full bg-[#EC1E24] rounded-t-full h-[50%]"></div>
                  <div className="w-full bg-[#EC1E24] rounded-t-full h-[80%]"></div>
                  <div className="w-full bg-[#fce8e9] rounded-t-full h-[60%]"></div>
                  <div className="w-full bg-[#EC1E24] rounded-t-full h-[100%]"></div>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Adding custom bounce animation to tailwind config via style tag for convenience */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}