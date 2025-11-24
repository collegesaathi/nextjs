// components/BlogCard.js

import Image from 'next/image';

// 'isActive' prop ko accept karein
const BlogCard = ({ title, imageSrc, topText, date, source, views, shares, isActive }) => {

    const activeClasses = isActive
        ? 'border-b-2 border-b-[#EC1E24] shadow-xl border-2 border-[#CECECE]' // Active card ki border aur shadow
        : 'border-2 border-[#CECECE]'; // Normal card ki border

    // Active Text ki classes (Continue Reading ke liye)
    const activeTextClasses = isActive
        ? 'text-[#EC1E24] ' // Active card mein button default red
        : 'text-black  '; // Normal card mein hover effect

    return (
        // Card Container par dynamic classes aur rounded corners
        <div className={`bg-white rounded-xl shadow-md p-2 ${activeClasses} overflow-hidden transition-all duration-300 h-full flex flex-col`}>
            {/* Blog Image Section (Same) */}
            <div className="relative w-full h-[180px] rounded-[10px]">
                <Image
                    src={imageSrc}
                    alt="University Image"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Blog Content Section */}
            <div className="p-1 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="font-poppins font-[600] text-[16px] md:text-[18px] text-[#282529] mt-2  mb-4">
                        {title}
                    </h3>
                    <p className="font-poppins font-[400] text-[14px] text-[#282529] line-clamp-3 mb-4">
                        Online MBA courses are extremely popular in India right now. It is important for working professionals of junior, middle, and senior management levels....
                    </p>

                </div>

                {/* Date and Source */}
                <div className="flex items-center  mb-4 font-poppins font-[400] text-[14px] text-[#282529] ">
                    <span className="text-red-500 mr-2">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.77699 0H10.9227C11.5338 0 12.2212 0.531845 12.2212 1.22733V2.70014H0V1.22733C0 0.531845 0.420105 0 0.992975 0H2.13872V1.22733C2.13872 1.4728 2.32967 1.63645 2.52063 1.63645C2.71159 1.63645 2.90254 1.4728 2.90254 1.22733V0H9.01316V1.22733C9.01316 1.4728 9.20412 1.63645 9.39507 1.63645C9.58603 1.63645 9.77699 1.4728 9.77699 1.22733V0ZM0 11.0458V3.55908L12.2594 3.55908V11.0458C12.2594 11.7413 11.572 12.2732 10.9609 12.2732H1.03117C0.420105 12.2732 0 11.7822 0 11.0458ZM3.3979 10.4322H2.48131C2.32855 10.4322 2.17578 10.3095 2.17578 10.105V9.08217C2.17578 8.91853 2.29036 8.75488 2.48131 8.75488H3.4361C3.58886 8.75488 3.74163 8.87762 3.74163 9.08217V10.105C3.70344 10.3095 3.58886 10.4322 3.3979 10.4322ZM2.48131 6.7506H3.3979C3.58886 6.7506 3.70344 6.62787 3.74163 6.42331V5.40053C3.74163 5.19598 3.58886 5.07324 3.4361 5.07324H2.48131C2.29036 5.07324 2.17578 5.23689 2.17578 5.40053V6.42331C2.17578 6.62787 2.32855 6.7506 2.48131 6.7506ZM6.45563 10.4322H5.50084C5.34808 10.4322 5.19531 10.3095 5.19531 10.105V9.08217C5.19531 8.91853 5.30989 8.75488 5.50084 8.75488H6.45563C6.60839 8.75488 6.76116 8.87762 6.76116 9.08217V10.105C6.76116 10.3095 6.64658 10.4322 6.45563 10.4322ZM5.50084 6.7506H6.45563C6.64658 6.7506 6.76116 6.62787 6.76116 6.42331V5.40053C6.76116 5.19598 6.60839 5.07324 6.45563 5.07324H5.50084C5.30989 5.07324 5.19531 5.23689 5.19531 5.40053V6.42331C5.19531 6.62787 5.34808 6.7506 5.50084 6.7506ZM9.51031 10.4322H8.55553C8.40277 10.4322 8.25 10.3095 8.25 10.105V9.08217C8.25 8.91853 8.36457 8.75488 8.55553 8.75488H9.51031C9.66308 8.75488 9.81584 8.87762 9.81584 9.08217V10.105C9.81584 10.3095 9.70127 10.4322 9.51031 10.4322ZM8.55553 6.7506H9.51031C9.70127 6.7506 9.81584 6.62787 9.81584 6.42331V5.40053C9.81584 5.19598 9.66308 5.07324 9.51031 5.07324H8.55553C8.36457 5.07324 8.25 5.23689 8.25 5.40053V6.42331C8.25 6.62787 8.40277 6.7506 8.55553 6.7506Z" fill="#EC1E24" />
                        </svg>

                    </span>
                    <span >{date} | {source}</span>
                </div>

                <div className="pt-1 border-t-1  border-[#CECECE]">
                    <a
                        href="#"
                        className={`
                inline-block px-4 py-2  rounded-lg 
                 transition duration-300 ease-in-out
font-poppins font-[400] text-[14px] 
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