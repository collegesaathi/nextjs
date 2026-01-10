import React from "react";
import Image from "next/image";
import { sanitizeHtml } from "@/common/sanitizeHtml";

function Facts({ facts }) {
  return (
    <>
      {facts?.title && (
        <div className="px-2 md:px-6 py-6 relative" data-aos="fade-up">
          {/* Background Shape */}
          <div className="absolute top-0 left-0 w-full h-[80%] bg-[#fcf0ee] -z-10 " ></div>
          
          {/* Floating Image */}
          <Image 
            src="/images/university/factsbg.png" 
            width={200} 
            height={200} 
            alt="facts-bg"
            className="hidden lg:block absolute top-2 lg:right-[-10px] 2xl:right-40 lg:top-16 animate-float" 
          />

          <section className="w-full mx-auto" id="facts-section">
            <div className="relative z-10 mt-[50px]">
              <h2 className="font-poppins font-[600] text-[18px] md:text-[28px] leading-[24px] md:leading-[100%] text-[#282529] mb-4 md:mb-[30px]" >
                {facts?.title}
              </h2>

              {facts?.facts?.length > 0 && (
                <div className="rounded-[20px] bg-white max-w-[1230px] shadow-[0px_1px_10px_rgba(0,0,0,0.09)] p-4 md:p-8">
                  <div className="flex-1">
                    {facts?.facts?.map((item, index) => (
                      <div key={index} className="flex gap-4 relative">
                        
                        {/* LEFT INDICATOR (Number + Vertical Line) */}
                        <div className="flex flex-col items-center relative min-w-[40px]">
                          {/* Circle Number */}
                          <div className="w-8 h-8 bg-[#fcf0ee] rounded-full flex items-center justify-center z-10 border border-white shadow-sm" >
                            <span className="font-poppins font-semibold text-[#ff8787] text-[15px]">
                              {index + 1}
                            </span>
                          </div>

                          {/* THE CENTERED VERTICAL LINE */}
                          {index < facts.facts.length - 1 && (
                            <div className="absolute top-8 bottom-0 w-[1.5px] bg-[#ffd5ce] left-1/2 -translate-x-1/2 -z-0"></div>
                          )}
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className={`flex-1 pb-6 ${index === facts.facts.length - 1 ? "" : "border-b border-gray-100 mb-6"}`}>
                          <div className="md:flex w-full items-start gap-6">
                            {/* Title */}
                            <h3 className="font-poppins font-[600] text-[15px] md:text-[17px] text-[#282529] w-full md:w-1/3 mb-2 md:mb-0">
                              {item.patternName}
                            </h3>

                            {/* Description */}
                            <div
                              className="font-poppins text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#4A4A4A] w-full md:w-2/3 custom-description"
                              dangerouslySetInnerHTML={{ __html: sanitizeHtml(item?.description || "") }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Facts;