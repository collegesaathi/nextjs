"use client";
import { useState } from "react";

// Mock data
const galleryImages = [
  { id: 1, src: "/images/career/slider1.png", width: 200, height: 350 },
  { id: 2, src: "/images/career/slider2.png", width: 280, height: 280 }, 
  { id: 3, src: "/images/career/slider3.png", width: 372, height: 244 }, 
  { id: 4, src: "/images/career/slider4.png", width: 200, height: 200 }, 
  { id: 5, src: "/images/career/slider1.png", width: 200, height: 350 },
  { id: 6, src: "/images/career/slider2.png", width: 280, height: 280 }, 
];

export default function OfficeSection() {
  const [activeTab, setActiveTab] = useState("jaipur");

  // Hum images ki list ko double kar rahe hain taaki infinite loop smoothly chale
  const doubleImages = [...galleryImages, ...galleryImages];

  return (
    <div className="py-8 md:py-16 overflow-hidden">
      
      {/* CSS for Smooth Infinite Scroll */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused; /* Hover karne par ruk jayega */
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ================= CONTINUOUS SLIDER ================= */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Is container mein animation chal rahi hai */}
        <div className="animate-marquee flex items-center gap-10 md:py-12">
          {doubleImages.map((img, index) => (
            <div
              key={index}
              className="relative shrink-0 transition-transform duration-500 hover:scale-105"
            >
              {/* Image Container */}
              <div
                className="relative rounded-xl overflow-hidden bg-white shadow-md border border-gray-100"
                style={{
                  width: `${img.width}px`,
                  height: `${img.height}px`,
                }}
              >
                <img
                  src={img.src}
                  alt="Gallery"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTENT SECTION (Niche wala part waisa hi hai) ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center py-8 ">
        <div className="flex flex-col items-center md:items-start py-4">
          <h2 className="text-[24px] md:text-[40px] font-[600] text-[#282529]">Our Offices</h2>
          <p className="text-[#282529] text-center md:text-left text-[16px] mt-4 max-w-md leading-relaxed">
            We like working together in our offices with our team, where we share ideas, knowledge and opportunities.
          </p>

          <div className="flex mx-auto md:mx-0 mt-6 bg-white rounded-xl p-1 w-max shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveTab("jaipur")}
              className={`px-6 py-5 rounded-md text-sm font-medium transition-colors ${
                activeTab === "jaipur" ? "bg-[#63A46C] text-white" : "text-gray-600"
              }`}
            >
              Jaipur
            </button>
            <button
              onClick={() => setActiveTab("gurugram")}
              className={`px-6 py-5 rounded-md text-sm font-medium transition-colors ${
                activeTab === "gurugram" ? "bg-[#6FB584] text-white" : "text-gray-600"
              }`}
            >
              Gurugram
            </button>
          </div>

          <a href="#" className="text-red-600 mt-8 text-[16px] inline-flex items-center gap-2 font-medium underline">
            Start Your Journey with Us 
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div   className={`rounded-2xl overflow-hidden shadow-lg w-full max-w-sm transition-all duration-700 ease-in-out 
      ${activeTab === "jaipur" 
        ? "lg:rotate-1 lg:translate-x-0" // Jaipur ki normal position
        : "lg:rotate-1 lg:-translate-x-20 lg:scale-105 " // Gurugram ki shifted position
      }`}>
            <img
              src={activeTab === "jaipur" ? "/images/career/officejaipur.png" : "/images/office-gurugram.jpg"}
              className={`w-full h-[480px] object-cover rounded-xl`}
              alt="Office location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}