'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRole } from '@/context/RoleContext';
import Listing from '../api/Listing';

export default function UniversityCard({
    rating,
    reviews,
    approvals,
    features,
    tag,
    admissionClosing,
    logoUrl,
    index,
    card
}) {
    const { selectedUnis, toggleUniversity, setCourse  ,course , toggleCourse} = useRole();
    const uniId = card?.id;

    const CouseCompare = async (id) => {
        try {
            const main = new Listing();
            const response = await main.CompareCourse(id);
            setCourse(response?.data?.data)
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const isSelected = selectedUnis.some(u => u.id === uniId);

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
        // 1. Change outer Link to Div
        <div className="group bg-white w-full h-full rounded-2xl shadow-md relative border border-neutral-200 flex flex-col hover:scale-105 transition-all hover:shadow-[0px_0px_15px_#c2c2c2]">

            {/* 2. Invisible Overlay Link: Yeh poore card ko clickable banayega */}
            <Link
                href={`/university/${card?.slug}`}
                className="absolute inset-0 z-0"
                aria-label="View University Details"
            />

            {/* University Image */}
            <div className="relative z-10 pointer-events-none">
                {/* pointer-events-none ensures image clicks go to the overlay link */}
                <Image
                    src={card?.cover_image}
                    alt={card?.name}
                    width={200}
                    height={600}
                    className="w-full md:h-[11.563rem] object-cover p-2 rounded-2xl"
                />

                {logoUrl && (
                    <div className="absolute w-[5.4rem] h-[2.25rem] -bottom-3 left-4 bg-white rounded-lg flex items-center shadow-md">
                        <img src={logoUrl} alt="logo" className="w-30 p-1 object-contain" />
                    </div>
                )}

                {tag && (
                    <div className={`shine overflow-hidden absolute -bottom-1 right-4 text-[0.625rem] px-2 py-[1px] rounded-full shadow-md font-medium
                        ${tag.varient === 'orange' ? 'text-white bg-[#F97000]' : 'bg-[#D9F9A5] text-[#0B8F4F]'}`}
                    >
                        {tag.text}
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow ">
                <div className="text-base font-bold text-black mb-2 line-clamp-1">
                    {card?.name}
                </div>

                <div className="flex items-center bg-red-50 w-fit px-2 text-neutral-600 text-[0.625rem] mb-2 h-[1.25rem]">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="font-medium">{rating}</span>
                    <span className="ml-1">({reviews} Reviews)</span>
                </div>

                <p className="text-[0.625rem] text-neutral-500 mb-3 line-clamp-2">
                    {approvals}
                </p>

                <div className="flex-grow">
                    {features?.map((feature, i) => (
                        <div key={i} className="flex items-center text-neutral-700 text-[0.75rem] mb-1">
                            <span className="text-green-500 mr-2 animate-pulse">●</span>
                            <span className="line-clamp-2">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* 3. Action Buttons: Inka z-index link se upar hona chahiye */}
                <div className="relative z-20 border-t border-neutral-200 pt-4 mt-4 mb-4 text-[0.75rem]">
                    <a
                        href={`/pdf/sample.pdf`}
                        target="_blank"
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center w-full bg-neutral-100 text-neutral-700 px-4 h-[1.815rem] rounded-md hover:bg-neutral-200 mb-3 transition-colors"
                    >
                        <span className="mr-2"><img src="/icons/download.svg" /></span> Download Prospectus
                    </a>

                    {/* <button
                        onClick={(e) => {
                            e.preventDefault(); // Extra safety
                            e.stopPropagation();
                          CouseCompare(card?.id)
                            toggleUniversity(card)
                        }}
                        className={`flex items-center justify-center w-full px-4 h-[1.815rem] rounded-md transition-colors cursor-pointer mt-4
                        ${isSelected ? 'bg-neutral-100 text-black font-[600]' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
                    >
                        <input
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                            className="w-3.5 h-3.5 rounded-lg accent-[#EC1E24]"
                        />
                        <span className="ml-2">
                            {isSelected ? "Added to Compare" : "Add to Compare"}
                        </span>
                    </button> */}
                </div>
            </div>

            {/* View Details Button */}
            <div className="relative z-20 flex justify-center">
                <Link href={`/university/${card?.slug}`}>
                    <button className="cursor-pointer absolute w-[7rem] h-[1.4rem] text-[0.75rem] -bottom-4 left-1/2 -translate-x-1/2 bg-[#EC1E24] text-white px-4 rounded-full hover:bg-red-600 transition-colors font-medium shadow-lg">
                        View Details
                    </button>
                </Link>
            </div>

            {admissionClosing && (
                <div
                    className="text-[0.625rem] z-10"
                    dangerouslySetInnerHTML={{ __html: admissionTag }}
                />
            )}
        </div>
    );
}