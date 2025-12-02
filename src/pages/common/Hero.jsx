"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="w-full lg:w-[1168px] mx-auto px-4 ">
                <div className="flex items-start justify-between flex-col-reverse lg:flex-row">
                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-[470px] py-8 px-5 lg:px-0 lg:pr-8">
                        <h1 className="font-poppins font-bold text-[48px] leading-[50px] whitespace-nowrap text-[#282529]">
                            NMIMS <span className="text-[#EC1E24]">Online MBA</span>
                        </h1>

                        {/* BADGES */}
                        <div className="flex items-center flex-wrap gap-4 pt-5">
                            {[
                                {
                                    img: "/icons/university/granted.svg",
                                    text: "Granted Category 1 University by MHRD",
                                },
                                {
                                    img: "/icons/university/special.svg",
                                    text: "Special Scholarship for Armed Forces",
                                },
                                {
                                    img: "/icons/university/hiring.svg",
                                    text: "500+ Hiring Partners",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full lg:w-[208px] h-[44px] rounded-[12px] border border-[#f8dbdd] flex items-start justify-center space-x-2 py-1"
                                >
                                    <Image src={item.img} width={20} height={20} alt="icon" className="mt-1" />
                                    <span className="font-poppins font-normal text-[12px] text-[#282529]">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* STAR BOX */}
                        <div className="flex items-center space-x-4 pt-5">
                            <div className="w-[126px] h-[99px] rounded-[8px] bg-[#fcf0ee] flex flex-col items-center justify-center space-y-1.5">
                                <h3 className="font-poppins font-semibold text-[36px] text-[#282529]">4.5</h3>
                                <Image src="/icons/university/star.svg" alt="" width={60} height={20} />
                                <p className="font-poppins font-normal text-[8px] text-[#282529]">
                                    Based on 20 Reviews
                                </p>
                            </div>

                            <Image src="/img/university/hero/1.png" alt="" width={200} height={120} />
                        </div>

                        {/* BUTTONS */}
                        <div className="flex items-center pt-5 space-x-4.5">
                            <button className="w-[142px] h-[43px] rounded-[7px] bg-[#ec1e24] font-poppins font-medium text-[18px] text-white flex items-center justify-center hover:opacity-90">
                                Apply Now
                                <Image src="/img/university/hero/arrow.svg" width={14} height={14} alt="" className="ml-1" />
                            </button>

                            <button className="font-poppins italic text-[14px] text-[#282529] flex items-center space-x-1">
                                <Image src="/img/university/hero/compare.svg" alt="" width={16} height={16} />
                                <span>Download Prospectus</span>
                            </button>
                        </div>

                        {/* COMPARE BOX */}
                        <div className="flex items-center pt-5">
                            <div className="lg:w-[399px] h-[40px] rounded-[27px] border border-[#282529] shadow-[4px_8px_19px_rgba(0,0,0,0.09)] flex items-center justify-center space-x-3.5 p-1">
                                <button className="flex items-center font-poppins text-[17px] text-[#282529]">
                                    <Image src="/img/university/hero/add.svg" alt="" width={18} height={18} className="mr-1" />
                                    Add to compare
                                </button>

                                <span className="h-full w-[1px] bg-[#282529]"></span>

                                <button className="flex items-center font-poppins text-[17px] text-[#282529]">
                                    <Image src="/img/university/hero/talk.svg" alt="" width={18} height={18} className="mr-1" />
                                    Talk To Expert
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE BLOCK */}
                    <div className="w-full lg:w-[648px] relative pt-3">
                        <Image
                            src="/img/university/hero/2.png"
                            alt=""
                            width={648}
                            height={400}
                            className="rounded-[8px] w-full h-auto"
                        />

                        <div className="absolute top-0 left-0 right-0 w-full flex justify-between items-center py-11 px-10">
                            <button className="w-[140px] h-[40px] rounded-[26px] bg-white shadow-[2px_3px_7px_rgba(0,0,0,0.3)] flex items-center justify-center font-poppins text-sm text-[#282529] space-x-1.5">
                                <Image src="/img/university/hero/ranking.png" width={20} height={20} alt="" />
                                Ranking <strong>#21</strong>
                            </button>

                            <button className="w-[156px] h-[52px] rounded-[5px] bg-white shadow-[2px_3px_7px_rgba(0,0,0,0.3)] flex items-center justify-center">
                                <Image src="/img/university/hero/uniLogo.png" alt="" width={80} height={40} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
