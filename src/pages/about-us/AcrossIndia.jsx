// components/AcrossIndia.js

import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AcrossIndia = () => {
    return (
        <section className="py-8 sm:py-24 bg-gradient-to-b from-[#FCF9F9] to-[#E8E8E8]">
            <div className="max-w-7xl mx-auto px-2 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* --- LEFT SIDE: TEXT CONTENT --- */}
                    <div className="flex flex-col items-start space-y-6">
                        
                        {/* Red Icon Box */}
                        <div className="">
                           <Image src="/images/about/location.svg" width={50} height={50} />
                        </div>

                        {/* Text */}
                        <div className="max-w-lg leading-relaxed">
                            <h2 className=" md:text-[32px] leading-tight font-medium text-[#282529] font-poppins">
                                From <span className="text-[#282529] font-[600]">Kashmir</span> to <span className="text-[#282529] font-[600]">Kanyakumari</span>,
                            </h2>
                            <p className="text-2xl md:text-[28px] leading-tight font-medium text-[#282529]">
                                students across India trust  CollegeSathi
                             
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: MAP IMAGE (Image contains the points) --- */}
                    <div className="relative w-full flex justify-center md:justify-end">
                        <Image 
                            src="/images/about/map.png" // Replace with your actual image path
                            alt="Map of India with student locations"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AcrossIndia;