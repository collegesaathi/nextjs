    import React, { useState } from 'react';

// --- Gallery Item Component ---
const GalleryCard = ({ year, src }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-md bg-gray-200 h-full">
    <img
      src={src}
      alt={`Company Moment ${year}`}
      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
    />

    <div className="absolute bottom-3 left-3 px-2 py-1 bg-white bg-opacity-80 rounded text-xs font-semibold text-gray-800">
      {year}
    </div>
  </div>
);

// --- Gallery Data ---
const galleryData = [
  { id: 1, year: 2021, src: '/images/img-2021-a.jpg', heightClass: 'h-96' },
  { id: 2, year: 2022, src: '/images/img-2022-a.jpg', heightClass: 'h-48' },
  { id: 3, year: 2024, src: '/images/img-2024-a.jpg', heightClass: 'h-96' },
  { id: 4, year: 2024, src: '/images/img-2024-b.jpg', heightClass: 'h-48' },
  { id: 5, year: 2023, src: '/images/img-2023-a.jpg', heightClass: 'h-40' },
  { id: 6, year: 2020, src: '/images/img-2020-a.jpg', heightClass: 'h-64' },
  { id: 7, year: 2025, src: '/images/img-2025-a.jpg', heightClass: 'h-48' },
  { id: 8, year: 2023, src: '/images/img-2023-b.jpg', heightClass: 'h-64' },
];

// --- Main Component ---
const CultureGallery = () => {
  const [activeTab, setActiveTab] = useState('Moments');
  const tabs = ['Moments', 'Thrills', 'Honors'];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-lg font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-gray-900 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
          <div className="col-span-1 row-span-2">
            <GalleryCard {...galleryData[0]} />
          </div>

          <div className="col-span-1">
            <GalleryCard {...galleryData[1]} />
          </div>

          <div className="col-span-1 row-span-2">
            <GalleryCard {...galleryData[2]} />
          </div>

          <div className="col-span-1">
            <GalleryCard {...galleryData[3]} />
          </div>

          <div className="col-span-1">
            <GalleryCard {...galleryData[4]} />
          </div>

          <div className="col-span-1">
            <GalleryCard {...galleryData[5]} />
          </div>

          <div className="col-span-1">
            <GalleryCard {...galleryData[6]} />
          </div>

          <div className="col-span-1">
            <GalleryCard {...galleryData[7]} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CultureGallery;
