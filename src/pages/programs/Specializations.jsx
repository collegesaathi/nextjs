import React, { useState } from 'react';
import { Rocket, ChevronDown, ChevronUp } from 'lucide-react';

const Specializations = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const specializations = [
    "Advertising and Branding", "Agri-Business Management", "AI and Machine Learning", "Aviation Management",
    "Banking & Finance Management", "Banking and Insurance", "Banking Financial Services & Insurance-BFSI", "Big Data",
    "Biotechnology Management", "Blockchain Management", "Business Analytics", "Business and Corporate Laws",
    "Business Intelligence & AI", "Business Intelligence And Analytics", "Business Management", "Customer Relationship Management",
    "Cyber Security", "Data Analytics", "Data Science", "Data Science and Analytics",
    "Digital Marketing", "Entrepreneurship", "Event Management", "Fashion Management",
    "Finance Management", "Financial Markets", "Healthcare Management", "Hospitality Management",
    "Human Resource Management", "Information Technology", "International Business", "Logistics & Supply Chain",
    "Marketing Management", "Media & Entertainment", "Operations Management", "Project Management",
    "Retail Management", "Risk Management", "Sales Management", "Sports Management"
  ];

  // Logic to show either first 12 or all items
  const visibleItems = isExpanded ? specializations : specializations.slice(0, 24);

  return (
    <div className="max-w-[1230px] mx-auto font-poppins text-[#282529]  py-12">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-[20px] font-[600] mb-4 leading-[30px]">
          Popular MBA Specializations
        </h2>
        <p className="text-[#282529] font-[400] text-sm md:text-[16px] leading-[28px]">
          Students can make themselves competent to use their learning towards career goals through various specialization streams. 
          Specializations enable students to advance their education in niche fields while acquiring the overall managerial capabilities 
          required for leadership roles. Online MBA formats incorporate case studies, simulations, group projects, and interactive forums 
          to replicate real-world business issues. This experiential approach readies candidates to apply theory in practice to work scenarios.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 transition-all duration-500">
        {visibleItems.map((spec, index) => (
          <div 
            key={index} 
            className="flex items-center gap-1 md:gap-3 p-1 md:p-2 border-2 border-[#EEEEEE] rounded-[16px] hover:shadow-md hover:border-red-100  transition-all duration-300 group cursor-pointer bg-white"
          >
            {/* Red Icon Container */}
            <div className="bg-[radial-gradient(circle,_#FF6A6A,_#E91010)] p-2 md:p-4 rounded-[11px] text-white shadow-sm shrink-0 group-hover:scale-110 transition-transform">
    <img src="/images/programs/rocket.svg" />
            </div>
            
            {/* Specialization Text */}
            <span className="text-[12px] md:text-[14px] font-[400] leading-[20px] text-[#282529] line-clamp-3">
              {spec}
            </span>
          </div>
        ))}
      </div>

      {/* View More Button Section */}
      <div className="mt-12 flex flex-col items-center relative">
        {/* Horizontal Line logic */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10"></div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white border border-gray-100 shadow-sm rounded-full px-8 py-2.5 flex items-center gap-2 text-[#ED2224] font-semibold text-sm hover:shadow-md hover:bg-red-50 transition-all"
        >
          {isExpanded ? (
            <>View less <ChevronUp size={18} /></>
          ) : (
            <>View more <ChevronDown size={18} /></>
          )}
        </button>
      </div>
    </div>
  );
};

export default Specializations;