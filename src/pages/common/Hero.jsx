"use client";

import Image from "next/image";
import StarRating from "@/common/Rating";

export default function Hero() {
    return (
        <>
        <div className="w-full max-w-[1168px] mx-auto px-4 mt-8 md:mt-[60px] lg:mt-[90px]">
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between">
      
            {/* LEFT SIDE */}
            <div className="w-full lg:w-[480px] py-6 px-3 sm:px-5 lg:px-0 ">
      
              {/* TITLE */}
              <h1 className="font-poppins font-bold text-[28px] sm:text-[36px] md:text-[48px] leading-tight text-[#282529]">
                NMIMS <span className="text-[#EC1E24]">Online MBA</span>
              </h1>
      
              {/* BADGES */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
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
                    className="w-full sm:w-[48%] lg:w-[208px] min-h-[44px] rounded-[12px] border border-[#f8dbdd] flex items-center gap-2 px-3 py-2"
                  >
                    <Image src={item.img} width={20} height={20} alt="" />
                    <span className="font-poppins text-[12px] text-[#282529]">{item.text}</span>
                  </div>
                ))}
              </div>
      
              {/* STAR + LOGOS */}
              <div className="flex items-center gap-4 pt-6">
                <div className="w-[110px] sm:w-[126px] h-[95px] rounded-[8px] bg-[#fcf0ee] flex flex-col items-center justify-center space-y-1.5">
                  <h3 className="font-poppins font-semibold text-[30px] sm:text-[36px] text-[#282529]">4.5</h3>
                  <StarRating rating="4.5" />
                  <p className="font-poppins text-[8px] text-[#282529]">
                    Based on 20 Reviews
                  </p>
                </div>
      
                <Image src="/images/university/hero/1.png" alt="" width={150} height={100} className="sm:w-[200px]" />
              </div>
      
              {/* BUTTONS */}
              <div className="flex flex-wrap items-center pt-5 gap-3">
                <button className="w-[150px] h-[43px] rounded-[7px] bg-[#ec1e24] text-white font-poppins font-medium text-[16px] flex items-center justify-center">
                  Apply Now
                  <Image src="/img/university/hero/arrow.svg" width={14} height={14} alt="" className="ml-1" />
                </button>
      
                <button className="font-poppins italic text-[14px] text-[#282529] flex items-center gap-1">
                  <Image src="/images/university/hero/compare.svg" alt="" width={16} height={16} />
                  <span>Download Prospectus</span>
                </button>
              </div>
      
              {/* COMPARE BOX */}
              <div className="pt-5">
                <div className="w-full lg:w-[399px] h-[45px] rounded-[27px] border border-[#282529] shadow-[4px_8px_19px_rgba(0,0,0,0.09)] flex items-center justify-center gap-4 px-3">
                  <button className="flex items-center gap-1 text-[14px] sm:text-[17px] text-[#282529]">
                    <Image src="/images/university/hero/add.svg" alt="" width={18} height={18} className="" />
                    Add to compare
                  </button>
      
                  <span className="w-[1px] h-2/3 bg-[#282529]"></span>
      
                  <button className="flex items-center gap-1 text-[14px] sm:text-[17px] text-[#282529]">
                    <Image src="/images/university/hero/add.svg" alt="" width={18} height={18} className="" />
                    Talk To Expert
                  </button>
                </div>
              </div>
            </div>
      
            {/* RIGHT IMAGE BLOCK */}
            <div className="w-full lg:w-[648px] relative pt-3">
              <Image
                src="/images/university/hero/2.png"
                alt=""
                width={648}
                height={400}
                className="rounded-[8px] w-full h-auto"
              />
      
              {/* TOP BADGES */}
              <div className="absolute top-2 left-0 right-0 w-full flex justify-between px-3 sm:px-6 md:px-10 pt-3">
                <button className="min-w-[110px] sm:w-[140px] h-[32px] sm:h-[40px] rounded-[26px] bg-white shadow-md flex items-center justify-center text-xs sm:text-sm font-poppins gap-1.5 px-2">
                  <Image src="/images/university/hero/ranking.png" width={40} height={40} alt="" />
                  Ranking <strong>#21</strong>
                </button>
      
                <button className="w-[100px] sm:w-[156px] h-[40px] sm:h-[52px] rounded-[5px] bg-white shadow-md flex items-center justify-center">
                  <Image src="/img/university/hero/uniLogo.png" width={60} height={30} alt="" className="sm:w-[80px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      
    );
}
