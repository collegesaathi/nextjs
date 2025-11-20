// components/UniversityCard.js

import Image from 'next/image';

const UniversityCard = ({ universityName, logoSrc, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
      {/* Header Image Section */}
      <div className="relative h-32 bg-gray-100">
        <Image
          src="/images/swiss-building.jpg" // Replace with your actual image path
          alt="University Building"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          {/* Example flags */}
          <span className="inline-block h-4 w-6 bg-red-600 border border-white">
            <div className="h-4 w-4 bg-white mx-auto mt-0.5"></div>
          </span>
          <span className="inline-block h-4 w-6 bg-red-600 border border-white">
            <div className="h-4 w-4 bg-white mx-auto mt-0.5"></div>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Logo and Name */}
        <div className="flex items-center mb-3">
          <div className="mr-3">
            {/* Logo placeholder - replace with actual Image component */}
            <div className="text-3xl font-bold text-red-600 border border-red-600 p-1">
              +SSBM
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{universityName}</h3>
            <p className="text-sm text-gray-500">Swiss School of Business and Management</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 line-clamp-4">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex space-x-3 mt-4">
          <button className="flex-1 px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition duration-150">
            Compare Now
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-150">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;