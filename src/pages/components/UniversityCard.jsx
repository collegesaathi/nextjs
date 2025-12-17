'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Loader } from '@/common/Loader';
// import { useSelectionStore } from '@/store/selectedStore'; // React store (Zustand/Context equivalent)

export default function UniversityCard({
    universityName,
    rating,
    reviews,
    approvals,
    features,
    imageUrl,
    tag,
    admissionClosing,
    logoUrl,
    index,
    card
}) {
console.log("card" ,card)
    //   const { selectedItems, toggleSelection } = useSelectionStore();
    const selectedItems = ""
    const isSelected = selectedItems;
    const isMaxReached = selectedItems.size >= 3 && !isSelected;
    const toggleSelection = "";

    const admissionTag = useMemo(() => {
      
            return `
        <div class='-top-1.5 left-1/2 -translate-x-1/2 flex justify-center text-white w-[132px]  h-[25px] absolute'>
          <img src='/images/uni-card-top.svg' class='absolute'/>
          <div class='z-50 leading-tight'>
            <span class='block text-center '>ADMISSION CLOSING</span>
            <span class='block text-center'>ON ${admissionClosing}</span>
          </div>
        </div>`;
        
    }, [index, admissionClosing]);

    return (
        <div className="bg-white w-full h-full rounded-2xl  shadow-md relative border border-neutral-200 flex flex-col hover:scale-105 transition-all hover:shadow-[0px_0px_15px_#c2c2c2]">

            {/* University Image */}
            <div className="relative">
                <Image
                    src='/images/cambridge.png'
                    alt={universityName} 
                    width={200}
                    height={600}
                    className="w-full md:h-[11.563rem] object-cover p-2 rounded-2xl"
                />

                {/* Logo */}
                {logoUrl && (
                    <div className="absolute w-[5.4rem] h-[2.25rem] -bottom-3 left-4 bg-white rounded-lg flex items-center shadow-md z-10">
                        <img src={logoUrl} alt="logo" className="w-30 p-1 object-contain" />
                    </div>
                )}

                {/* Tag */}
                {tag && (
                    <div
                        className={`shine overflow-hidden absolute -bottom-1 right-4 text-[0.625rem] px-2 py-[1px] rounded-full shadow-md font-medium
              ${tag.varient === 'orange' ? 'text-white bg-[#F97000]' : 'bg-[#D9F9A5] text-[#0B8F4F]'}
            `}
                    >
                        {tag.text}
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow z-10">

                <div className="text-base font-bold text-black mb-2 line-clamp-1">
                    {card?.name}
                </div>

                {/* Rating */}
                <div className="flex items-center bg-red-50 w-fit px-2 text-neutral-600 text-[0.625rem] mb-2 h-[1.25rem]">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="font-medium">{rating}</span>
                    <span className="ml-1">({reviews} Reviews)</span>
                </div>

                <p className="text-[0.625rem] text-neutral-500 mb-3 line-clamp-2">
                    {approvals}
                </p>

                {/* Features */}
                <div className="flex-grow">
                    {features?.map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center text-neutral-700 text-[0.75rem] mb-1"
                        >
                            <span className="text-green-500 mr-2">●</span>
                            <span className="line-clamp-2">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="border-t border-neutral-200 pt-4 mt-4 mb-4 text-[0.75rem]">

                    <button className="flex items-center justify-center w-full bg-neutral-100 text-neutral-700 px-4 h-[1.815rem] rounded-md hover:bg-neutral-200 mb-3 transition-colors">
                        <span className="mr-2"><img src="/icons/download.svg" /></span> Download Prospectus
                    </button>

                    <button
                        onClick={() => toggleSelection(index)}
                        disabled={isMaxReached}
                        className={`flex items-center justify-center w-full px-4 h-[1.815rem] rounded-md transition-colors
              ${isSelected ? 'bg-neutral-100' :
                                isMaxReached ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}
            `}
                    >
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleSelection(index)}
                            className="w-3.5 h-3.5 rounded-lg border bg-white accent-[#EC1E24]"
                        />
                        <span className="ml-2">
                            {isSelected ? "Added to Compare" : "Add to Compare"}
                        </span>
                    </button>

                </div>
            </div>

            {/* View Details */}

            <Link href={`/university/${card.slug}`}>
            <button
                className="cursor-pointer absolute w-[7rem] h-[1.4rem] text-[0.75rem] -bottom-4 left-1/2 -translate-x-1/2 bg-[#EC1E24] text-white px-4 rounded-full hover:bg-red-600 transition-colors font-medium shadow-lg z-30"
            >
                View Details
            </button>
            </Link>

            {/* Admission Tag */}
            {admissionClosing && (
                <div
                    className="text-[0.625rem] z-10"
                    dangerouslySetInnerHTML={{ __html: admissionTag }}
                />
            )}

        </div>
    );
}
