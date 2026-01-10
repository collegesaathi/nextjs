import React, { useState } from 'react';

// --- Gallery Item Component ---
const GalleryCard = ({ year, src, heightClass, margin,celebration }) => (
  <div className=" group relative mb-4 break-inside-avoid">

    {/* Image Box as group (important!) */}
    <div className={` relative overflow-hidden shadow-md bg-gray-200 w-full group ${heightClass} ${margin}`}>
      <img
        src={src}
        alt={`Company Moment ${year}`}
        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
      />
    </div>

    {/* Year */}
    <p className="text-black font-[400] font-poppins text-[14px] mt-2">{year}</p>
        <p className="text-black group-hover:text-[#EC1E24] font-[400] quando-regular italic text-[14px] mt-2 ">{celebration}</p>
  </div>
);




const galleryData = [
  // Column 1 (Left)
  { id: 1, year: 2021,celebration: "Diwali", category: "Moments", src: '/images/career/career1.png', heightClass: 'h-96',  },
  { id: 5, year: 2023, celebration: "Work Anniversary", category: "Moments",src: '/images/career/career5.png', heightClass: 'h-64', margin:'mt-[50px]' },
  
  // Column 2
  { id: 2, year: 2022, celebration: "Navratri", category: "Moments", src: '/images/career/career2.png', heightClass: 'h-64' },
  { id: 6, year: 2020, celebration: "Navratri",category: "Moments", src: '/images/career/career6.png', heightClass: 'h-96', margin:'mt-[50px]' }, 

  // Column 3
  { id: 3, year: 2024, celebration: "Navratri", category: "Moments",src: '/images/career/career3.png', heightClass: 'h-96' },
  { id: 7, year: 2025, celebration: "Navratri", category: "Moments", src: '/images/career/career7.png', heightClass: 'h-64', margin:'mt-[50px]' },

  // Column 4 (Right)
  { id: 4, year: 2024, celebration: "Navratri", category: "Moments", src: '/images/career/career4.png', heightClass: 'h-64' },
  { id: 8, year: 2023, celebration: "Navratri",  category: "Moments",src: '/images/career/career8.png', heightClass: 'h-96', margin:'mt-[50px]' },




   { id: 9, year: 2021, celebration: "Navratri", category: "Thrills", src: '/images/career/career1.png', heightClass: 'h-96',  },
  { id: 10, year: 2023, celebration: "Navratri", category: "Thrills",src: '/images/career/career5.png', heightClass: 'h-64', margin:'mt-[50px]' },
  
  // Column 2
  { id: 11, year: 2022, celebration: "Navratri", category: "Thrills", src: '/images/career/career2.png', heightClass: 'h-64' },
  { id: 12, year: 2020, celebration: "Navratri", category: "Thrills", src: '/images/career/career6.png', heightClass: 'h-96', margin:'mt-[50px]' }, 

  // Column 3
  { id: 13, year: 2024, celebration: "Navratri", category: "Honors",src: '/images/career/career3.png', heightClass: 'h-96' },
  { id: 14, year: 2025, celebration: "Navratri", category: "Honors", src: '/images/career/career7.png', heightClass: 'h-64', margin:'mt-[50px]' },

  // Column 4 (Right)
  { id: 15, year: 2024,celebration: "Navratri", category: "Honors", src: '/images/career/career4.png', heightClass: 'h-64' },
  { id: 16, year: 2023,celebration: "Navratri", category: "Honors",src: '/images/career/career8.png', heightClass: 'h-96', margin:'mt-[50px]' },
];

// --- Main Component ---
const CultureGallery = () => {
  const [activeTab, setActiveTab] = useState('Moments');
  const tabs = ['Moments', 'Thrills', 'Honors'];

  return (
    <div className="py-10 md:py-16 bg-[#F4F5F6]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-10 md:space-x-40 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg font-medium transition-colors duration-200 relative ${
                  activeTab === tab
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {/* Active Underline Indicator */}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 rounded-t-md" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery Layout */}
        {/* 'columns-1 sm:columns-2 lg:columns-4' creates the layout */}
        <div className="columns-2 md:columns-4 gap-4 md:gap-[40px] space-y-[60px]">

  {galleryData
    .filter(item => item.category === activeTab)
    .map(item => (
      <GalleryCard key={item.id} {...item} />
    ))}
</div>
        </div>


    </div>
  );
};

export default CultureGallery;