"use client";
import { useState } from "react";
import { Heart, Flower, Award, Briefcase, Laptop } from "lucide-react";

export default function CultureBenefits() {
  const [activeTab, setActiveTab] = useState("culture");

  // 1. Added a 'color' property to each tab
  const tabs = [
    { id: "culture", label: "Culture", icon: <Heart size={20} />, color: "#EF5350" }, // Red
    { id: "wellbeing", label: "Wellbeing", icon: <Flower size={20} />, color: "#d9b2f0ff" }, // Green
    { id: "recognition", label: "Recognition", icon: <Award size={20} />, color: "#f0b78fff" }, // Purple
    { id: "opportunities", label: "Opportunities", icon: <Briefcase size={20} />, color: "#b8eb9bff" }, // Blue
    { id: "tech", label: "Tech Support", icon: <Laptop size={20} />, color: "#FF9800" }, // Orange
  ];

  // 2. Organized items into a single object for cleaner rendering
  const allContent = {
    culture: [
      { title: "Sick & Casual Leaves", text: "Health always comes first. To give time to focus on your well-being..." },
      { title: "Wellness Brews", text: "We offer fresh, flavourful coffee to keep you energized..." },
      { title: "Work-life Balance", text: "Collegesathi offers flexible timings, short breaks and half-days..." },
    ],
    wellbeing: [
      { title: "Easy Onboarding", text: "Manager introduces the newcomer and welcomes them with a paid lunch." },
      { title: "Festivals", text: "As a one family we celebrate every festival together." },
      { title: "Anniversary & Birthdays", text: "Whether it’s birthdays or anniversaries, we celebrate every event." },
      { title: "Trips & Parties", text: "We organize two trips every year & regular team events." },
    ],
    recognition: [
      { title: "Summit", text: "We organize summits and award the best performers to motivate them." },
      { title: "Ride, Dine & Shine", text: "Success is celebrated with lunches, dinners and international trips." },
    ],
    opportunities: [
      { title: "Pay & Perk", text: "Our performance-based incentives ensure your achievements are rewarded." },
      { title: "Continuous Development", text: "We offer professional development, mentorship, and upskilling." },
      { title: "Collaborative Team", text: "Work with passionate colleagues who share knowledge and celebrate wins." },
    ],
    tech: [
      { title: "Hardware Accessories", text: "We provide laptops, systems, and high-speed internet access." },
      { title: "Tools", text: "We offer top tools for the efficient working of our teams." },
    ],
  };

  // Helper to get current active color
  const activeColor = tabs.find((t) => t.id === activeTab)?.color || "#EF5350";

  return (
    <div className="py-10 font-poppins">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-[24px] md:text-[40px] font-[600] text-center text-gray-900">
          Our Culture and Benefits
        </h2>
        <p className="text-gray-600 max-w-3xl text-center mx-auto mt-4 mb-10 text-sm md:text-base">
          Collegesathi is a growing company that values hard work and dedication...
        </p>

        {/* MOBILE TABS */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto gap-3 pb-4 items-center px-2 no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backgroundColor: isActive ? tab.color : "white",
                    borderColor: isActive ? tab.color : "#E5E7EB",
                    color: isActive ? "white" : "#4B5563",
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                    isActive ? "shadow-lg scale-105" : ""
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* DESKTOP SIDEBAR */}
          <div className="hidden md:block col-span-1 bg-white rounded-xl p-4 shadow-md h-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backgroundColor: isActive ? tab.color : "transparent",
                    color: isActive ? "white" : "#374151",
                  }}
                  className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg text-left mb-2 transition-all ${
                    isActive ? "shadow-md" : "hover:bg-gray-100"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              );
            })}
          </div>

          {/* CONTENT GRID */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {allContent[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent"
                style={{ borderColor: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${activeColor}33`)} // 33 is 20% opacity
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
              >
                {/* Heading color matches the active tab color */}
                <h4 
                  className="text-[18px] font-bold mb-3"
                  style={{ color: activeColor }}
                >
                  {item.title}
                </h4>
                <p className="text-[15px] leading-[26px] text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}