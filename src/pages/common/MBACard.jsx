// components/MBACard.js

import Image from 'next/image';

const MBACard = ({ title, tag, rating, progress, imageSrc, buttontitle, isActive }) => {
  const getTagStyles = (tag) => {
    switch (tag) {
      case 'Transformative':
        // Based on the image: light green background, dark text (or black)
        return 'bg-[#D9F9A5] text-[#00000]';
      case 'Focused':
        return 'bg-yellow-400 text-gray-900';
      case 'Dynamic':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const tagStyles = getTagStyles(tag);
  const activeClasses = isActive
    ? 'border-b-2 border-b-[#EC1E24] shadow-xl border-2 border-[#CECECE]' // Active card ki border aur shadow
    : 'border-2 border-[#CECECE]'; // Normal card ki border
  return (
    <div
      className={`
    bg-white rounded-xl shadow-md p-3 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1
   ${activeClasses
        }
  `}
    >

      <div className="relative h-48 w-full overflow-hidden rounded-xl"> {/* Rounded-xl to match image */}
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        <span
          className={`absolute top-3 left-3 px-4 py-1 font-[400] text-[12px] leading-[14px] rounded-full ${tagStyles}`}
        >
          {tag}
        </span>

        {tag === 'Focused' && (
          <div className="absolute top-3 right-3 flex space-x-1 text-white text-xs font-bold">
            <span className="bg-blue-600 px-2 py-1 rounded-full">{progress}</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">30</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-2">
        <h3 className="font-poppins           font-semibold text-[18px] md:text-[20px] text-[#282529] mt-2 mb-3">
          {title}
        </h3>

        {/* Rating and Know More */}
        <div className="flex items-center gap-2 ">

          {/* Rating Box */}
          <div className="flex items-center bg-[#F7F6F6] px-3 py-1 rounded-[15px]">
            <span className="font-[400] text-[12px] leading-[14px] text-[#000000] mr-1 font-poppins">
              {rating}
            </span>
            <span className="text-[#F6C44D] text-[14px] leading-[16px] font-poppins">★</span>
          </div>

          {/* Divider Dot */}
          <span className="text-[#757575] font-bold text-[16px] leading-none font-poppins">•</span>
          {/* Button Text */}
          <span className="font-[400] text-[12px] leading-[14px] text-[#000000] font-poppins cursor-pointer ">
            {buttontitle || "Know More →"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MBACard;