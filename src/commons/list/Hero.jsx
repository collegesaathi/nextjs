"use client";

import Image from "next/image";
import StarRating from "@/common/Rating";
import { sanitizeHtml } from "@/common/sanitizeHtml";

export default function Hero({ data, approvalsdata, exisitng }) {
  return (
    <div className="mt-8 md:mt-[60px] lg:mt-[90px] ">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between">
        {/* LEFT SIDE */}
        <div className="w-full  py-6  md:px-5 lg:px-0 ">
          {/* TITLE */}
          <h1 className="font-poppins font-[700] text-[28px] sm:text-[36px] md:text-[48px] leading-[50px] text-[#282529]">
            {data?.name || ""}
          </h1>
          {/* BADGES */}
          {data?.description?.length > 0 && (
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              {data?.description?.map((item, index) => (
                <div key={index} className="w-full sm:w-[48%] lg:w-[350px]">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml( item?.text || "")
                        // 1️⃣ ul styling
                        ?.replace(
                          /<ul>/g,
                          '<ul class="flex flex-col gap-2">'
                        )
                        // 2️⃣ li open
                        ?.replace(
                          /<li>/g,
                          `<li class="w-full min-h-[46px] rounded-[12px] border border-[#f8dbdd]
                  flex items-start gap-3 px-3 py-2">
                    <span class="flex-shrink-0 text-green-600 mt-1">✔</span>
                    <span class="flex-1 custom-description text-start font-poppins text-[12px] text-[#282529] leading-snug break-words">`
                        )
                        // 3️⃣ li close
                        ?.replace(/<\/li>/g, `</span></li>`),
                    }}
                  />
                </div>
              ))}
            </div>
          )}




          {/* STAR + LOGOS */}
          <div className="flex items-center gap-2 md:gap-4 pt-6 max-w-[70px]">
            {exisitng === "university" && (<Image src="/images/university/hero/reviews.png" alt="" width={356} height={150} />)}
            {approvalsdata && approvalsdata?.slice(0, 3).map((item) => (
              <img src={item?.image} alt={item.title} width={356} height={150} />
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center pt-5 gap-3">
            <button className="w-[150px] h-[43px] rounded-[7px] bg-[#ec1e24] text-white font-poppins font-medium text-[16px] flex items-center justify-center">
              Apply Now
              <Image src="/images/university/hero/arrow.svg" width={14} height={14} alt="" className="ml-1" />
            </button>

            <button className="font-poppins italic text-[14px] text-[#282529] flex items-center gap-1">
              <Image src="/images/university/hero/compare.svg" alt="" width={16} height={16} />
              <span>Download Prospectus</span>
            </button>
          </div>

          {/* COMPARE BOX */}
          <div className="pt-5">
            <div className="w-full lg:w-[399px] h-[45px] rounded-[27px] border border-[#282529] shadow-[4px_8px_19px_rgba(0,0,0,0.09)] flex items-center justify-center gap-4 md:px-3">
              <button className="flex items-center gap-1 text-[14px] sm:text-[17px] text-[#282529]">
                {/* <Image src="/images/university/hero/compare.svg" alt="" width={18} height={18} className="" /> */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.935 12.685H2.75C1.23499 12.685 0 11.455 0 9.935V2.75C0 1.23499 1.23499 0 2.75 0H9.935C11.455 0 12.685 1.23499 12.685 2.75V9.935C12.685 11.455 11.455 12.685 9.935 12.685ZM5.59383 5.59396H4.09884C3.68383 5.59396 3.34884 5.92895 3.34884 6.34396C3.34884 6.75893 3.68383 7.09396 4.09884 7.09396H5.59383V8.58395C5.59383 8.99896 5.92882 9.33395 6.34383 9.33395C6.75884 9.33395 7.09383 8.99896 7.09383 8.58395V7.09396H8.58383C8.99884 7.09396 9.33383 6.75893 9.33383 6.34396C9.33383 5.92895 8.99884 5.59396 8.58383 5.59396H7.09383V4.09896C7.09383 3.68395 6.75884 3.34896 6.34383 3.34896C5.92882 3.34896 5.59383 3.68395 5.59383 4.09896V5.59396Z" fill="#EC1E24" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7505 5.59375C14.3364 5.59375 14.0005 5.92944 14.0005 6.34375V11.7505C14.0005 12.9912 12.9912 14.0005 11.7505 14.0005H6.34375C5.92944 14.0005 5.59375 14.3362 5.59375 14.7505C5.59375 15.1648 5.92944 15.5005 6.34375 15.5005H11.7505C13.8184 15.5005 15.5005 13.8184 15.5005 11.7505V6.34375C15.5005 5.92944 15.1646 5.59375 14.7505 5.59375V5.59375Z" fill="#EC1E24" />
                </svg>
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
        {data?.cover_image != "null" && (
          <div className="w-full  relative pt-3">
            <img
              src={data?.cover_image}
              alt={data?.cover_image_alt || data?.name || "university Images"}
              width={648}
              height={400}
              className="rounded-[8px] w-full h-auto"
            />



            {/* TOP BADGES */}
            <div className="absolute top-2 left-0 right-0 w-full flex gap-4 justify-between px-3 sm:px-6 md:px-10 pt-3">
              <button className="min-w-[250px] sm:w-[200px] h-[32px] sm:h-[40px] rounded-[26px] bg-white shadow-md flex items-center justify-center text-xs sm:text-sm font-poppins gap-2 px-4 whitespace-nowrap">
                <Image
                  src="/images/university/hero/ranking.png"
                  width={20}
                  height={20}
                  alt="ranking logo"
                />
                {/* <span>Ranking</span> */}
                <strong># {data?.rank}</strong>
              </button>


              <button className="w-[100px] sm:w-[156px] h-[40px] sm:h-[52px] rounded-[5px] bg-white shadow-md flex items-center justify-center">
                <img src={data?.icon} width={60} height={30} alt="" className="sm:w-[127px]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
