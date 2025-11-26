// components/UniversityCard.js
"use client";

import Image from "next/image";

const UniversityCard = ({ universityName, description, image, logoun }) => {
  return (
    <div className=" py-1">
      <div className="bg-white rounded-xl shadow-md border border-[#B8B8B8] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

        {/* Cover Image */}
        <div className="relative w-full h-32 bg-gray-100">
          <Image
            src={image}
            alt="University Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-2 py-2">
          {/* University Logo */}
          <div className="relative w-[205px] h-[100px] rounded-md overflow-hidden mb-1">
            <Image
              src={logoun}
              alt="University Logo"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <h3 className="font-poppins font-semibold text-[14px] md:text-[16px] leading-[20px] text-[#282529] mb-4">
            {universityName}
          </h3>
          <p className="font-poppins font-normal text-[12px] text-[#282529] line-clamp-3 mb-4">
            {description}
          </p>
          <div className="border-t-[1px] border-[#CECECE] border-opacity-50" />

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4 mb-2">
            <button className="py-2 text-sm font-medium text-[#282529] border border-[#CECECE] rounded-[7px] hover:bg-red-50 transition-all duration-150">
              Compare Now
            </button>

            <button className="py-2 font-poppins font-normal text-[12px] text-[#FFFFFF]  bg-[#EC1E24] rounded-[7px] hover:bg-red-700 transition-all duration-150">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
