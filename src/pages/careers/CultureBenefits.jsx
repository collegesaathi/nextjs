"use client";
import { useState } from "react";
import { Heart, Flower, Award, Briefcase, Laptop, ChevronDown, ChevronUp } from "lucide-react";

export default function CultureBenefits() {
  const [activeTab, setActiveTab] = useState("culture");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  const tabs = [
    { id: "culture", label: "Culture", icon: <Heart size={20} />, color: "#EF5350" },
    { id: "wellbeing", label: "Wellbeing", icon: <Flower size={20} />, color: "#d9b2f0ff" },
    { id: "recognition", label: "Recognition", icon: <Award size={20} />, color: "#f0b78fff" },
    { id: "opportunities", label: "Opportunities", icon: <Briefcase size={20} />, color: "#b8eb9bff" },
    { id: "tech", label: "Tech Support", icon: <Laptop size={20} />, color: "#FF9800" },
  ];

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
      { title: "Summit", text: "We appreciate efforts and hard work of our team. To encourage them we organize summits." },
      { title: "Ride, Dine & Shine", text: "Success is celebrated in different ways, team leaders organize lunches, dinners and outings." },
    ],
    opportunities: [
      { title: "Pay & Perk", text: "Our performance-based incentives ensure your achievements are recognized." },
      { title: "Continuous Development", text: "We offer continuous professional development, mentorship, and upskilling." },
      { title: "Collaborative Team", text: "Teamwork is the heart of everything we do. You will work with passionate colleagues." },
    ],
    tech: [
      { title: "Hardware Accessories", text: "Collegesathi provides all the hardware accessories like laptops." },
      { title: "Tools", text: "We offer top tools for the efficient working of our teams." },
    ],
  };

  const activeTabDetails = tabs.find((t) => t.id === activeTab);
  const activeColor = activeTabDetails?.color || "#EF5350";

  return (
    <div className="py-10 md:py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-[24px] md:text-[40px] font-[600] text-center text-gray-900">
          Our Culture and Benefits
        </h2>
        <p className="text-gray-600 max-w-3xl text-center mx-auto mt-4 mb-10 text-sm md:text-base">
          Collegesathi is a growing company that values hard work and dedication...
        </p>

        {/* MOBILE DROPDOWN (Replaced horizontal pills) */}
        <div className="md:hidden relative mb-8 z-20">
          {/* Header/Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ backgroundColor: activeColor }}
            className={`w-full flex items-center justify-between px-5 py-4 text-white font-medium transition-all shadow-md ${
                isMenuOpen ? "rounded-t-2xl" : "rounded-2xl"
            }`}
          >
            <div className="flex items-center gap-3">
              {activeTabDetails.icon}
              <span className="text-lg">{activeTabDetails.label}</span>
            </div>
            {isMenuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {/* Dropdown Options */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-x border-b border-gray-100 rounded-b-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors border-t border-gray-50 ${
                    activeTab === tab.id ? "bg-gray-50 font-semibold" : "text-gray-700 bg-white"
                  }`}
                >
                  <span style={{ color: tab.color }}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* DESKTOP SIDEBAR (Kept original logic) */}
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
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-2 border-transparent"
                style={{ borderColor: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${activeColor}44`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
              >
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