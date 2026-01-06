"use client";
import { useState } from "react";
import {
  Heart,
  Flower,
  Award,
  Briefcase,
  Laptop,
} from "lucide-react";

export default function CultureBenefits() {
  const [activeTab, setActiveTab] = useState("culture");

  const tabs = [
    { id: "culture", label: "Culture", icon: <Heart size={20} /> },
    { id: "wellbeing", label: "Wellbeing", icon: <Flower size={20} /> },
    { id: "recognition", label: "Recognition", icon: <Award size={20} /> },
    { id: "opportunities", label: "Opportunities", icon: <Briefcase size={20} /> },
    { id: "tech", label: "Tech Support", icon: <Laptop size={20} /> },
  ];

  const cultureItems = [
    {
      title: "Sick & Casual Leaves",
      text: "Health always comes first. To give time to focus on your well-being, we offer sick leaves and casuals dedicated to your mental and physical well-being.",
    },
    {
      title: "Wellness Brews",
      text: "We offer fresh, flavourful coffee to keep you energized and inspired throughout the day",
    },
    {
      title: "Work-life Balance",
      text: "We all need time to balance our work and personal commitments. Collegesathi offers flexible timings, short breaks and half-days to allow you focus on your personal lives. Also, we don’t ask for extra work after office hours as we understand that personal time is important.",
    },
   
  ];
    const wellbeingItems = [
    {
      title: "Easy Onboarding",
      text: "We love to welcome new energy to our family. The manager introduces the newcomer to the team and welcomes him/her with a paid lunch.",
    },
    {
      title: "Festivals",
      text: "We understand that many of you are away from your home. As a one family we celebrate every festival together.",
    },
    {
      title: "Anniversary & Birthdays",
      text: "Collegesathi never misses important dates for our team. Whether it’s birthdays or one-year anniversaries, we celebrate every little event.",
    },
    {
      title: "Trips & Parties",
      text: "Apart from work, we believe everyone needs trips & parties to refresh. We organize two trips every year & regular team events.",
    },
  ];

      const recognitionItems = [
    {
      title: "Summit",
      text: "We appreciate efforts and hard work of our team. To encourage them we organize summits and award the best performers to motivate them and others.",
    },
    {
      title: "Ride, Dine & Shine",
      text: "At collegesathi, success is celebrated in different ways, team leaders organize lunches, dinners and outings to celebrate small achievements. The company celebrate the success of target achievers by organizes international trips (to Thailand/Dubai & beyond) and other rewards",
    },
   
  ];

    const opportunitiesItems = [
    {
      title: "Pay & Perk",
      text: "We value your dedication and results. Our performance-based incentives ensure your hard work and achievements are recognized and rewarded fairly. Also, here you can earn exciting rewards by referring to talented individuals who share our passion and commitment to excellence.",
    },
    {
      title: "Continuous Development",
      text: "At collegesathi, learning never stops. We offer continuous professional development, mentorship, and upskilling opportunities to help you grow personally and professionally",
    },
    {
      title: "Collaborative Team",
      text: "Teamwork is the heart of everything we do. You will work with passionate, supportive colleagues who share knowledge, celebrate wins, and grow together.",
    },
   
  ];

      const techItems = [
    {
      title: "Hardware Accessorie",
      text: "Collegesathi provides all the hardware accessories like laptops, computer systems, and high-speed internet access to encourage a productive workplace.",
    },
    {
      title: "Tools",
      text: "We offer top tools for the efficient working of our teams and to provide them a better workplace environment.",
    },
  
   
  ];


  return (
    <div className="py-10  font-poppins ">
      
      {/* Utility to hide scrollbar but keep functionality */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-[24px] md:text-[40px] font-[600] text-center text-gray-900">
          Our Culture and Benefits
        </h2>
        <p className="text-gray-600 max-w-3xl text-center mx-auto mt-4 mb-10 text-sm md:text-base">
        Collegesathi is a growing company that values hard work and dedication. Beyond work, we cherish every celebration, moment,
         and tradition that turns our company into one big family.
         We embrace laughter, light-hearted moments, and genuine care for every individual.
        </p>


        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto gap-3 pb-4 items-center px-2 no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center  gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap border
                    ${isActive 
                      ? "bg-[#EF5350] text-white border-[#EF5350] shadow-lg scale-105" // Active: Red Pill
                      : "bg-white text-gray-600 border-gray-200" // Inactive: White Pill
                    }
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* DESKTOP SIDEBAR (Hidden on Mobile) */}
          <div className="hidden md:block col-span-1 bg-white rounded-xl p-4 shadow-md h-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg text-left mb-2 transition-all 
                  ${activeTab === tab.id
                    ? "bg-[#EF5350] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* RIGHT CARDS (Content) */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Render Cards based on Active Tab */}
            {/* Note: In a real app, you'd switch data based on activeTab */}
            {activeTab === "culture" &&
              cultureItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-red-100"
                >
                  <h4 className="text-[18px] font-bold text-[#EF5350] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-[26px] text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}


                {activeTab === "wellbeing" &&
              wellbeingItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-red-100"
                >
                  <h4 className="text-[18px] font-bold text-[#EF5350] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-[26px] text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
                   {activeTab === "recognition" &&
              recognitionItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-red-100"
                >
                  <h4 className="text-[18px] font-bold text-[#EF5350] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-[26px] text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}

                {activeTab === "opportunities" &&
            opportunitiesItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-red-100"
                >
                  <h4 className="text-[18px] font-bold text-[#EF5350] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-[26px] text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}

              
                {activeTab === "tech" &&
            techItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-red-100"
                >
                  <h4 className="text-[18px] font-bold text-[#EF5350] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-[26px] text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
              
             {/* Example Placeholder for other tabs */}
             {/* {activeTab !== "culture" && (
                <div className="col-span-full text-center py-10 bg-white rounded-2xl">
                   <p className="text-gray-500">Content for {activeTab} goes here...</p>
                </div>
             )} */}

          </div>
        </div>
      </div>
    </div>
  );
}