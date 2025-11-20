// components/MBACard.js

import Image from 'next/image';

const MBACard = ({ title, tag, rating, progress, imageSrc , buttontitle}) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
      
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        
        {/* Tag (Transformative, Focused, Dynamic) */}
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full 
          ${tag === 'Transformative' ? 'bg-blue-600 text-white' : 
           tag === 'Focused' ? 'bg-yellow-400 text-gray-900' : 
           'bg-green-600 text-white'}`}
        >
          {tag}
        </span>
        
        {/* Progress/Metric Overlays (Only for 'Focused' card example) */}
        {tag === 'Focused' && (
          <div className="absolute top-3 right-3 flex space-x-1 text-white text-xs font-bold">
            <span className="bg-blue-600 px-2 py-1 rounded-full">{progress}</span>
            <span className="bg-gray-700 px-2 py-1 rounded-full">30</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center text-sm text-gray-600">
          <span className="text-yellow-500 mr-1">★</span> {/* Star icon */}
          <span className="font-semibold">{rating}</span>
          <span className="ml-2 text-red-600 font-medium cursor-pointer hover:underline">
             {buttontitle || "Know More →"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MBACard;