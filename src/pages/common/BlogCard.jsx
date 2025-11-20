// components/BlogCard.js

import Image from 'next/image';

// 'isActive' prop ko accept karein
const BlogCard = ({ title, imageSrc, topText, date, source, views, shares, isActive }) => {

    const activeClasses = isActive
        ? 'border-b-2 border-red-600 shadow-xl' // Active card ki border aur shadow
        : 'borderb-2 border-gray-200'; // Normal card ki border

    // Active Text ki classes (Continue Reading ke liye)
    const activeTextClasses = isActive
        ? 'text-red-600 font-bold ' // Active card mein button default red
        : 'text-black bg-white  hover:text-white'; // Normal card mein hover effect

    return (
        // Card Container par dynamic classes aur rounded corners
        <div className={`bg-white rounded-xl shadow-md ${activeClasses} overflow-hidden transition-all duration-300 h-full flex flex-col`}>
            {/* Blog Image Section (Same) */}
            <div className="relative h-48 w-full">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between">
                        <span className="text-white text-xs font-semibold">Collegesathi</span>
                        <p className="text-white text-lg font-bold leading-snug">{topText}</p>
                    </div>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        Online MBA courses are extremely popular in India right now. It is important for working professionals of junior, middle, and senior management levels....
                    </p>
                </div>

                {/* Date and Source */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="text-red-500 mr-2">📅</span>
                    <span>{date} | {source}</span>
                </div>

                <div className="pt-4 border-t-1  border-black">
                    <a
                        href="#"
                        className={`
                inline-block px-4 py-2 text-sm font-medium rounded-lg 
                 transition duration-300 ease-in-out
                ${activeTextClasses}
              `}
                    >
                        Continue Reading »
                    </a>

                </div>
            </div>
        </div>
    );
};

export default BlogCard;