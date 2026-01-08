import { useState } from "react";
import Image from "next/image";

export default function StorySection() {
  const [active, setActive] = useState("who");

  return (
    <div className="bg-[#F3F4F6] py-15 md:px-4" data-aos="fade-up">
      <div className="mx-auto container sm:container md:container xl:max-w-[1230px] px-2 md:px-4 ">
        
        {/* HEADER SECTION */}
        <div className="max-w-7xl mx-auto text-center mb-10 font-poppins">
          <h2 className="text-[26px] md:text-[32px] font-[600] text-gray-800" >
            The Story Behind Your ‘Sathi’
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mt-8  ">
            <div className="bg-white shadow-xl rounded-[7px] md:rounded-[20px] flex gap-1 md:gap-7 py-4 px-6 md:px-6 md:px-10 " >
              <TabButton label="Who We Are" active={active === "who"} onClick={() => setActive("who")} />
              <TabButton label="Our Mission" active={active === "mission"} onClick={() => setActive("mission")} />
              <TabButton label="Our Vision" active={active === "vision"} onClick={() => setActive("vision")} />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Left Image Side */}
          <div className="relative h-[200px] md:h-[400px] lg:h-auto w-full rounded-[30px] overflow-hidden shadow-sm">
            <Image
              src="/images/about/mission.png" // Ensure this is your group photo
              alt="Team"
              fill
              className="object-cover hover:scale-105 transition duration-700 ease-in-out"
            />
          </div>

          {/* Right Content Side */}
          <div className="h-full">
            {active === "who" && (
              <ContentCard
                highlight="Collegesathi"
                text="
At Collegesathi, we’re not just an education platform — we’re your companion in making life-changing decisions.
From choosing the right university to discovering your dream career, our expert team simplifies the journey, so you never feel lost or alone."
                subtext="Think of us as your “sathi” in education — always with you, always for you!"
              />
            )}
            {active === "mission" && (
              <ContentCard
                highlight="Our Mission"
                text="Connecting learners to verified online universities to make their career dreams come true."
              
              />
            )}
            {active === "vision" && (
              <ContentCard
                highlight="Our Vision"
                text="To provide online education solutions to the world in one click."
            
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-2 md:px-6 py-2.5 rounded-[10px] text-[14px] md:text-[16px] font-[400] transition-all duration-300
        ${active ? "bg-red-500 text-white shadow-md" : "text-[#282529] hover:text-red-500 bg-transparent"}
      `} 
    >
      <p > {label}</p>
    </button>
  );
}

function ContentCard({ highlight, text, subtext }) {
  return (
<div className="w-full h-full min-h-[350px] md:min-h-[450px] bg-white rounded-[30px] shadow-md overflow-hidden flex flex-col border border-slate-100">
  
  {/* Image Container: Fixed height on mobile, grows on desktop */}
 <div className="w-full h-32 md:h-48 relative shrink-0 overflow-hidden animate-moving-pink">
    {/* अगर आपको इसके ऊपर कोई हल्का सा blur या glass effect चाहिए तो नीचे वाला div जोड़ सकते हैं */}
    <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
</div>

  {/* Text Content Area: Padding is improved, height is now dynamic (flex-1) */}
  <div className="flex-1 p-3 md:p-10 flex flex-col font-poppins">
    <p className="text-[#282529] text-[15px] md:text-[16px] font-[400] leading-[20px] md:leading-[28px]">
      At <span className="text-[#EC1E24] font-[600]">{highlight}</span>, {text}
    </p>
    
    {subtext && (
      <p className="text-[#282529] text-[14px] md:text-[16px] font-[400] mt-4 ">
        {subtext}
      </p>
    )}
  </div>
</div>
  );
}