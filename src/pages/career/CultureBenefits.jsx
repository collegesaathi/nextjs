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
  const tabs = [
    { id: "culture", label: "Culture", icon: <Heart size={20} /> },
    { id: "wellbeing", label: "Wellbeing", icon: <Flower size={20} /> },
    { id: "recognition", label: "Recognition", icon: <Award size={20} /> },
    { id: "opportunities", label: "Opportunities", icon: <Briefcase size={20} /> },
    { id: "tech", label: "Tech Support", icon: <Laptop size={20} /> },
  ];

  const cultureItems = [
    {
      title: "Easy Onboarding",
      text:
        "We love to welcome new energy to our family. The manager introduces the newcomer to the team and welcomes him/her with a paid lunch.",
    },
    {
      title: "Festivals",
      text:
        "We understand that many of you are away from your home. As a one family we celebrate every festival together.",
    },
    {
      title: "Anniversary & Birthdays",
      text:
        "Collegesathi never misses important dates for our team. Whether it’s birthdays or one-year anniversaries, we celebrate every little event.",
    },
    {
      title: "Trips & Parties",
      text:
        "Apart from work, we believe everyone needs trips & parties to refresh. We organize two trips every year & regular team events.",
    },
  ];

  const [activeTab, setActiveTab] = useState("culture");

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Culture and Benefits
        </h2>
        <p className="text-gray-600 max-w-3xl text-center mx-auto mt-4">
          Collegesathi is a growing company that values hard work and dedication. Beyond work, 
          we cherish every celebration, moment, and tradition that turns our company into one 
          big family.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Sidebar Tabs */}
          <div className="col-span-1 bg-white rounded-xl p-4 shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center w-full gap-3 px-4 py-3 rounded-lg text-left mb-2 transition-all 
                  ${activeTab === tab.id
                    ? "bg-red-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Cards */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTab === "culture" &&
              cultureItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <h4 className="text-lg font-semibold text-red-500 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}

            {/* ✳️ Aap chaaho to aur tabs ke liye yaha alag data add kar sakte ho */}
          </div>
        </div>
      </div>
    </div>
  );
}
